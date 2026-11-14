import { randomUUID } from 'node:crypto';
import { transaction } from './database.mjs';
import { fail } from './input.mjs';
import { positiveId } from './providers.mjs';
import { takeLimit } from './service-limits.mjs';
import { withShop } from './shops.mjs';

export function createBilling(db, provider, { origin, amountRial, durationDays }) {
  const columns = 'id,status,track_id,amount_rial,duration_days,paid_at';
  function present(payment) {
    return {
      id: payment.id, status: payment.status, amountRial: Number(payment.amount_rial),
      durationDays: payment.duration_days, paidAt: payment.paid_at,
      checkoutUrl: payment.status === 'pending' ? provider.startUrl(payment.track_id) : null,
    };
  }

  async function reconcile(payment) {
    const proof = await provider.verify(payment.track_id, payment.id, Number(payment.amount_rial));
    if (proof.reference) {
      await transaction(db, async client => {
        const { rows: [confirmed] } = await client.query(
          `UPDATE subscription_payments SET status='paid',bank_reference=$2,paid_at=now(),next_check_at=NULL
           WHERE id=$1 AND status IN ('pending','review') AND track_id=$3 RETURNING shop_id,duration_days`,
          [payment.id, proof.reference, payment.track_id],
        );
        if (!confirmed) return;
        await client.query(
          `INSERT INTO shop_subscriptions(shop_id,expires_at) VALUES ($1,now()+$2::integer*interval '1 day')
           ON CONFLICT (shop_id) DO UPDATE SET expires_at=greatest(shop_subscriptions.expires_at,now())+$2::integer*interval '1 day'`,
          [confirmed.shop_id, confirmed.duration_days],
        );
      });
    } else if (proof.failed) {
      await db.query(
        "UPDATE subscription_payments SET status='failed',next_check_at=NULL WHERE id=$1 AND status IN ('pending','review') AND checks=$2",
        [payment.id, payment.checks],
      );
    } else {
      await db.query(
        `UPDATE subscription_payments SET
           status=CASE WHEN created_at<now()-interval '7 days' THEN 'review' ELSE 'pending' END,
           next_check_at=now()+least(3600,60*power(2,least(checks,6)))*interval '1 second'
         WHERE id=$1 AND status IN ('pending','review') AND checks=$2`, [payment.id, payment.checks],
      );
    }
  }

  return {
    plan: { amountRial, durationDays },
    async checkout(shopId, user, key) {
      if (typeof key !== 'string' || !/^[\w.:-]{1,128}$/.test(key)) fail(400, 'idempotency_key_required');
      const reservation = await withShop(db, shopId, user, 'owner', async (client, shop) => {
        const { rows: [previous] } = await client.query(
          `SELECT ${columns} FROM subscription_payments WHERE shop_id=$1 AND operation_key=$2`, [shop.id, key],
        );
        if (previous) return { payment: previous };
        const { rows: [active] } = await client.query(
          `SELECT ${columns} FROM subscription_payments
           WHERE shop_id=$1 AND status IN ('creating','pending') AND created_at>now()-interval '30 minutes'
           ORDER BY created_at DESC LIMIT 1`, [shop.id],
        );
        if (active) return { payment: active };
        await takeLimit(client, 'checkout-shop', shop.id, 3600, 4);
        await takeLimit(client, 'checkout-global', 'all', 60, 15);
        const { rows: [payment] } = await client.query(
          `INSERT INTO subscription_payments(id,shop_id,user_id,operation_key,amount_rial,duration_days,status)
           VALUES($1,$2,$3,$4,$5,$6,'creating') RETURNING ${columns}`,
          [randomUUID(), shop.id, user.id, key, amountRial, durationDays],
        );
        return { payment, created: true };
      });
      const { payment } = reservation;
      if (!reservation.created) return present(payment);
      const callback = new URL('/v1/billing/zibal/callback', origin);
      callback.searchParams.set('order', payment.id);
      const result = await provider.request(payment.id, amountRial, callback.href);
      const { rows: [updated] } = await db.query(
        `UPDATE subscription_payments SET status=$2,track_id=$3,
           next_check_at=CASE WHEN $2='pending' THEN now()+interval '2 minutes' END
         WHERE id=$1 AND status='creating' RETURNING ${columns}`,
        [payment.id, result.trackId ? 'pending' : result.rejected ? 'failed' : 'review', result.trackId ?? null],
      );
      return present(updated ?? payment);
    },
    async status(client, shopId, paymentId) {
      const { rows: [payment] } = await client.query(
        `SELECT ${columns} FROM subscription_payments WHERE shop_id=$1 AND id=$2`, [shopId, paymentId],
      );
      if (!payment) fail(404, 'payment_not_found');
      return present(payment);
    },
    async history(client, shopId, limit, offset) {
      const { rows } = await client.query(
        `SELECT ${columns} FROM subscription_payments WHERE shop_id=$1 ORDER BY created_at DESC,id DESC LIMIT $2 OFFSET $3`,
        [shopId, limit, offset],
      );
      return { items: rows.map(present) };
    },
    async callback(orderId, rawTrackId) {
      const trackId = positiveId(rawTrackId);
      if (!trackId) fail(400, 'invalid_track_id');
      const { rows: [payment] } = await db.query(
        `UPDATE subscription_payments SET checks=checks+1,next_check_at=now()+interval '30 seconds'
         WHERE id=$1 AND track_id=$2 AND status IN ('pending','review')
           AND (checks=0 OR next_check_at<=now())
         RETURNING id,track_id,amount_rial,checks`, [orderId, trackId],
      );
      if (payment) await reconcile(payment);
      const { rows: [result] } = await db.query('SELECT id,status FROM subscription_payments WHERE id=$1 AND track_id=$2', [orderId, trackId]);
      if (!result) fail(404, 'payment_not_found');
      return result;
    },
    async recover() {
      const { rows: [payment] } = await db.query(
        `WITH due AS (
           SELECT id FROM subscription_payments WHERE status='pending' AND next_check_at<=now()
           ORDER BY next_check_at,id FOR UPDATE SKIP LOCKED LIMIT 1
         ) UPDATE subscription_payments p SET checks=checks+1,next_check_at=now()+interval '30 seconds'
           FROM due WHERE p.id=due.id RETURNING p.id,p.track_id,p.amount_rial,p.checks`,
      );
      if (payment) await reconcile(payment);
      await db.query("UPDATE subscription_payments SET status='review' WHERE status='creating' AND created_at<now()-interval '2 minutes'");
    },
  };
}
