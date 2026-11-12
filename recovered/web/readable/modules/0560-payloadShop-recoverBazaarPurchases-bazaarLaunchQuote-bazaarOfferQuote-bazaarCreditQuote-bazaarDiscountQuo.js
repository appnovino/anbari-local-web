// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 560; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'payloadShop', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      (_e.recoverBazaarPurchases = async function (e) {
        let t = !1;
        for (const n of await (0, o.bazaarOwned)())
          if (!n.payload || u(n.payload) === e.id)
            try {
              (await c(e, n), (t = !0));
            } catch {}
        return t;
      }),
      Object.defineProperty(_e, 'bazaarLaunchQuote', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      Object.defineProperty(_e, 'bazaarOfferQuote', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }),
      Object.defineProperty(_e, 'bazaarCreditQuote', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      Object.defineProperty(_e, 'bazaarDiscountQuote', {
        enumerable: !0,
        get: function () {
          return b;
        },
      }),
      Object.defineProperty(_e, 'bazaarDynamicQuote', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }),
      Object.defineProperty(_e, 'bazaarRetryText', {
        enumerable: !0,
        get: function () {
          return y;
        },
      }),
      (_e.buyWithBazaar = async function (t, u, s, p = !1, l = !1) {
        let b,
          f = null;
        if (l && !p && (0, o.bazaarDynamicPrice)())
          try {
            f = await (0, n.request)(
              (0, n.shopPath)(t, '/billing/bazaar/price'),
              'POST',
              { planId: u, months: s },
            );
          } catch (e) {
            if (e instanceof Error && 'offer_expired' === e.message)
              return 'expired';
            throw Error((0, n.message)(e));
          }
        try {
          b = f
            ? await (0, o.bazaarPurchase)(
                f.productId,
                t.id + '.' + f.tokenId,
                f.token,
              )
            : await (0, o.bazaarPurchase)(
                (0, o.bazaarProductId)(u, s, p),
                t.id,
              );
        } catch (t) {
          const n = t?.code || (t instanceof Error ? t.message : '');
          if ('cancelled' === n) return 'cancelled';
          if ('dynamic_price_unsupported' === n)
            return ((0, o.bazaarDynamicUnsupported)(), 'unsupported');
          throw Error(
            'bazaar_unavailable' === n
              ? (0, e.L)(
                  '\u067e\u0631\u062f\u0627\u062e\u062a \u0628\u0627\u0632\u0627\u0631 \u0628\u0627\u0632 \u0646\u0634\u062f\u061b \u0627\u067e \u0628\u0627\u0632\u0627\u0631 \u0628\u0627\u06cc\u062f \u0646\u0635\u0628 \u0648 \u0628\u0647\u200c\u0631\u0648\u0632 \u0628\u0627\u0634\u062f \u0648 \u0648\u0627\u0631\u062f \u062d\u0633\u0627\u0628\u062a \u0634\u062f\u0647 \u0628\u0627\u0634\u06cc.',
                )
              : (0, e.L)(
                  '\u067e\u0631\u062f\u0627\u062e\u062a \u062f\u0631 \u0628\u0627\u0632\u0627\u0631 \u0627\u0646\u062c\u0627\u0645 \u0646\u0634\u062f\u061b \u067e\u0648\u0644\u06cc \u06a9\u0645 \u0646\u0634\u062f\u0647 \u0627\u0633\u062a\u060c \u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646.',
                ),
          );
        }
        try {
          return (await c(t, b), 'activated');
        } catch (t) {
          throw Error(
            t instanceof Error &&
              ['purchase_invalid', 'purchase_used'].includes(t.message)
              ? (0, n.message)(t)
              : (0, e.L)(
                  '\u067e\u0648\u0644\u062a \u062f\u0631 \u0628\u0627\u0632\u0627\u0631 \u067e\u0631\u062f\u0627\u062e\u062a \u0634\u062f \u0648\u0644\u06cc \u0641\u0639\u0627\u0644\u200c\u0633\u0627\u0632\u06cc \u0628\u0647 \u0633\u0631\u0648\u0631 \u0645\u0627 \u0646\u0631\u0633\u06cc\u062f (\u0627\u06cc\u0646\u062a\u0631\u0646\u062a \u0642\u0637\u0639 \u0628\u0648\u062f)\u061b \u0647\u0645\u06cc\u0646 \u0635\u0641\u062d\u0647 \u0631\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0628\u0627\u0632 \u06a9\u0646 \u062a\u0627 \u0627\u0634\u062a\u0631\u0627\u06a9 \u062e\u0648\u062f\u06a9\u0627\u0631 \u0641\u0639\u0627\u0644 \u0634\u0648\u062f.',
                ),
          );
        }
      }));
    var e = r(d[0]),
      t = r(d[1]),
      n = r(d[2]),
      o = r(d[3]);
    async function c(e, t) {
      (await (0, n.request)(
        (0, n.shopPath)(e, '/billing/bazaar/verify'),
        'POST',
        {
          productId: t.productId,
          purchaseToken: t.purchaseToken,
          originalJson: t.originalJson,
          dataSignature: t.dataSignature,
        },
      ),
        await (0, o.bazaarConsume)(t.purchaseToken));
    }
    const u = (e) => (e ? e.split('.')[0] : null);
    const s = (e) =>
        !!e &&
        'launch' === e.discountSource &&
        e.discountPercent === t.BAZAAR_LAUNCH_PERCENT &&
        1 === e.months &&
        ('standard' === e.planId || 'pro' === e.planId),
      p = (e) =>
        !!e &&
        'offer' === e.discountSource &&
        e.discountPercent > 0 &&
        e.discountPercent < 100 &&
        1 === e.months &&
        ('standard' === e.planId || 'pro' === e.planId) &&
        (0, o.bazaarDynamicPrice)(),
      l = (e) =>
        !!e &&
        (e.creditToman || 0) > 0 &&
        0 === e.discountPercent &&
        'pro' === e.planId &&
        (0, o.bazaarDynamicPrice)(),
      b = (e) => s(e) || p(e) || l(e),
      f = (e) => p(e) || l(e),
      y = (t) =>
        'unsupported' === t
          ? (0, e.L)(
              '\u0628\u0627\u0632\u0627\u0631\u0650 \u06af\u0648\u0634\u06cc\u200c\u0627\u062a \u0642\u062f\u06cc\u0645\u06cc \u0627\u0633\u062a \u0648 \u062a\u062e\u0641\u06cc\u0641 \u0631\u0627 \u0646\u0645\u06cc\u200c\u0634\u0646\u0627\u0633\u062f\u061b \u067e\u0648\u0644\u06cc \u06a9\u0645 \u0646\u0634\u062f. \u062d\u0627\u0644\u0627 \u0642\u06cc\u0645\u062a \u06a9\u0627\u0645\u0644 \u0631\u0627 \u0645\u06cc\u200c\u0628\u06cc\u0646\u06cc\u061b \u0628\u0631\u0627\u06cc \u062a\u062e\u0641\u06cc\u0641\u060c \u0627\u0648\u0644 \u0628\u0627\u0632\u0627\u0631 \u0631\u0627 \u0628\u0647\u200c\u0631\u0648\u0632 \u06a9\u0646.',
            )
          : (0, e.L)(
              '\u0645\u0647\u0644\u062a \u0627\u06cc\u0646 \u062a\u062e\u0641\u06cc\u0641 \u062a\u0645\u0627\u0645 \u0634\u062f\u061b \u0642\u06cc\u0645\u062a \u062a\u0627\u0632\u0647 \u0631\u0627 \u0628\u0628\u06cc\u0646 \u0648 \u062f\u0648\u0628\u0627\u0631\u0647 \xab\u067e\u0631\u062f\u0627\u062e\u062a\xbb \u0631\u0627 \u0628\u0632\u0646.',
            );
  },
  560,
  [311, 447, 415, 446],
);
