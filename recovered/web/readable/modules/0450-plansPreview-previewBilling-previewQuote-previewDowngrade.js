// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 450; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.plansPreview = function () {
        try {
          const t = globalThis.window,
            n = t?.location?.hostname || '';
          if (
            !t?.location ||
            ('localhost' !== n &&
              '127.0.0.1' !== n &&
              !n.startsWith('192.168.'))
          )
            return null;
          const l = new URLSearchParams(t.location.search).get('dev-plans');
          return 'pro' === l ||
            'standard' === l ||
            'scheduled' === l ||
            'free' === l
            ? l
            : null;
        } catch {
          return null;
        }
      }),
      (e.previewBilling = function (l, o) {
        const c = 'standard' === l ? s[0] : s[1],
          u = new Date(o + 1728e6).toISOString(),
          f = 'free' !== l;
        return {
          access: f ? 'active' : 'free',
          fresh: !f,
          offer: null,
          refund: {
            enabled: !0,
            days: 7,
            feePercent: 10,
            eligible: null,
            request: null,
          },
          launch: null,
          retention: null,
          firstPurchase: !f,
          offlineDays: 30,
          trial: null,
          checkoutAvailable: !0,
          bazaarCheckout: !1,
          checkoutOff: null,
          records: f
            ? null
            : { limit: 20, used: 12, left: 8, month: '', resetsOn: '' },
          subscription: f
            ? {
                plan_id: c.id,
                purchased_plan_id: c.id,
                title: (0, t.L)(c.title),
                status: 'active',
                starts_at: new Date(o - 864e6).toISOString(),
                expires_at: u,
                ai_daily_limit: c.ai_daily_limit,
                member_limit: c.member_limit,
                features: c.features,
              }
            : {
                plan_id: 'free',
                purchased_plan_id: 'free',
                title: (0, t.L)('\u0631\u0627\u06cc\u06af\u0627\u0646'),
                status: 'active',
                starts_at: null,
                expires_at: null,
                ai_daily_limit: 5,
                member_limit: 1,
                features: {},
              },
          usage: { used: 3, limit: c.ai_daily_limit },
          plans: s,
          features: n,
          scheduled:
            'scheduled' === l
              ? {
                  planId: 'standard',
                  at: u,
                  paidUntil: null,
                  setAt: new Date(o).toISOString(),
                }
              : null,
        };
      }),
      (e.previewQuote = function (t) {
        const n = s.find((n) => n.id === t.planId) || s[0],
          l = n.periods.find((n) => n.months === t.months) || n.periods[0];
        return {
          ...l,
          planId: n.id,
          version: n.version,
          originalAmountToman: l.total_toman,
          discountPercent: 0,
          finalAmountToman: l.total_toman,
          discountSource: 'none',
          undiscounted_total_toman: l.total_toman,
          offer_discount_percent: 0,
          currency: 'IRT',
          checkoutAvailable: !0,
        };
      }),
      (e.previewDowngrade = function (t, n) {
        return {
          planId: t,
          fromPlanId: 'pro',
          at: new Date(n + 1728e6).toISOString(),
          staffLosing: [
            {
              id: 's1',
              name: '\u0631\u0636\u0627 (\u0641\u0631\u0648\u0634\u0646\u062f\u0647)',
              role: 'staff',
            },
            {
              id: 's2',
              name: '\u0645\u0631\u06cc\u0645 (\u0627\u0646\u0628\u0627\u0631\u062f\u0627\u0631)',
              role: 'staff',
            },
          ],
          staffKept: 0,
          seatsAfter: 0,
          devicesNow: 2,
          devicesAfter: 1,
          featuresLost: ['team', 'integrations'],
          scheduled: null,
        };
      }));
    var t = r(d[0]);
    const n = [
        {
          key: 'voice',
          label: '\u062b\u0628\u062a \u0628\u0627 \u0635\u062f\u0627',
          category: '\u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc',
        },
        {
          key: 'batch',
          label:
            '\u0686\u062a \u0648 \u0648\u0631\u0648\u062f \u06af\u0631\u0648\u0647\u06cc',
          category: '\u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc',
        },
        {
          key: 'pdf',
          label: '\u062e\u0648\u0627\u0646\u062f\u0646 PDF',
          category: '\u0641\u0627\u06cc\u0644\u200c\u0647\u0627',
        },
        {
          key: 'spreadsheet',
          label: '\u0648\u0631\u0648\u062f Excel \u0648 CSV',
          category: '\u0641\u0627\u06cc\u0644\u200c\u0647\u0627',
        },
        {
          key: 'reports',
          label:
            '\u06af\u0632\u0627\u0631\u0634 \u0641\u0631\u0648\u0634 \u0648 \u0633\u0648\u062f',
          category: '\u06af\u0632\u0627\u0631\u0634\u200c\u0647\u0627',
        },
        {
          key: 'team',
          label:
            '\u062f\u0639\u0648\u062a \u0648 \u0647\u0645\u06a9\u0627\u0631\u06cc \u06a9\u0627\u0631\u06a9\u0646\u0627\u0646',
          category: '\u0647\u0645\u06a9\u0627\u0631\u06cc',
        },
        {
          key: 'integrations',
          label:
            '\u0627\u062a\u0635\u0627\u0644 \u0627\u067e\u200c\u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u0628\u0627 API',
          category: '\u0627\u062a\u0635\u0627\u0644\u200c\u0647\u0627',
        },
        {
          key: 'ledger',
          label:
            '\u062f\u0641\u062a\u0631 \u062d\u0633\u0627\u0628 \u0648 \u0646\u0633\u06cc\u0647',
          category: '\u062d\u0633\u0627\u0628\u062f\u0627\u0631\u06cc',
        },
        {
          key: 'cheques',
          label:
            '\u0645\u062f\u06cc\u0631\u06cc\u062a \u0686\u06a9\u200c\u0647\u0627',
          category: '\u062d\u0633\u0627\u0628\u062f\u0627\u0631\u06cc',
        },
      ],
      l = {
        voice: !0,
        batch: !0,
        pdf: !0,
        spreadsheet: !0,
        reports: !0,
        ledger: !0,
        cheques: !0,
      },
      o = (t, n, l) => ({
        months: n,
        enabled: !0,
        pricing_mode: 'fixed',
        total_toman: l,
        fixed_total_toman: l,
        discount_bps: 0,
        subtotal_toman: t * n,
        savings_toman: t * n - l,
        discount_percent: Math.round((1e4 * (t * n - l)) / (t * n)) / 100,
      }),
      s = [
        {
          id: 'standard',
          title: '\u0627\u0633\u062a\u0627\u0646\u062f\u0627\u0631\u062f',
          description:
            '\u062b\u0628\u062a \u0631\u0648\u0632\u0627\u0646\u0647 \u0628\u0627 \u0635\u062f\u0627 \u0648 \u0645\u062a\u0646',
          enabled: !0,
          version: 9,
          monthly_price_toman: 1099e3,
          ai_daily_limit: 30,
          member_limit: 1,
          features: { ...l, team: !1, integrations: !1 },
          periods: [
            o(1099e3, 1, 1099e3),
            o(1099e3, 3, 279e4),
            o(1099e3, 12, 899e4),
          ],
        },
        {
          id: 'pro',
          title: '\u067e\u0644\u0627\u0633',
          description:
            '\u0647\u0645\u0647 \u0627\u0645\u06a9\u0627\u0646\u0627\u062a\u060c \u0647\u0645\u0631\u0627\u0647 \u0628\u0627 \u0647\u0645\u06a9\u0627\u0631\u06cc \u062a\u06cc\u0645\u06cc',
          enabled: !0,
          version: 9,
          monthly_price_toman: 2499e3,
          ai_daily_limit: 60,
          member_limit: 4,
          features: { ...l, team: !0, integrations: !0 },
          periods: [
            o(2499e3, 1, 2499e3),
            o(2499e3, 3, 639e4),
            o(2499e3, 12, 2039e4),
          ],
        },
      ];
  },
  450,
  [311],
);
