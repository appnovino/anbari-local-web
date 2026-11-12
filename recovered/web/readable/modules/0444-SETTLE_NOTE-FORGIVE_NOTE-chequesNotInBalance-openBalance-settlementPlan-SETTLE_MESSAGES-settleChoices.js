// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 444; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'SETTLE_NOTE', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      Object.defineProperty(e, 'FORGIVE_NOTE', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      (e.chequesNotInBalance = c),
      (e.openBalance = function (t, n) {
        const o = c(n);
        return t - o.inToman + o.outToman;
      }),
      (e.settlementPlan = function (t, c) {
        if (
          c.expectedBalance !== t.balance ||
          (void 0 !== c.expectedOpen && c.expectedOpen !== t.open)
        )
          return { ok: !1, code: 'settle_balance_changed' };
        if (!t.open) return { ok: !1, code: 'settle_nothing_open' };
        const u = t.open > 0,
          l = Math.abs(t.open);
        if ('forgive' === c.kind)
          return {
            ok: !0,
            debt: { direction: u ? 'owe' : 'owed', amountToman: l, note: o },
            leftToman: 0,
          };
        const s = c.amount ?? l;
        return !Number.isSafeInteger(s) || s <= 0
          ? { ok: !1, code: 'settle_amount_invalid' }
          : s > l
            ? { ok: !1, code: 'settle_amount_too_large' }
            : {
                ok: !0,
                payment: {
                  direction: u ? 'in' : 'out',
                  method: 'card' === c.method ? 'card' : 'cash',
                  amountToman: s,
                  note: n,
                },
                leftToman: l - s,
              };
      }),
      Object.defineProperty(e, 'SETTLE_MESSAGES', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      (e.settleChoices = function (n) {
        return n > 0
          ? {
              all: (0, t.L)(
                '\u0647\u0645\u0647 \u0631\u0627 \u06af\u0631\u0641\u062a\u0645',
              ),
              other: (0, t.L)(
                '\u0645\u0628\u0644\u063a \u062f\u06cc\u06af\u0631\u06cc \u06af\u0631\u0641\u062a\u0645',
              ),
              forgive: (0, t.L)(
                '\u0628\u0642\u06cc\u0647 \u0631\u0627 \u0628\u062e\u0634\u06cc\u062f\u0645',
              ),
              otherHint: (0, t.L)(
                '\u0645\u0628\u0644\u063a \u0631\u0627 \u0645\u06cc\u200c\u0646\u0648\u06cc\u0633\u06cc\u062f\u061b \u0628\u0642\u06cc\u0647 \u0628\u062f\u0647\u06cc \u0645\u06cc\u200c\u0645\u0627\u0646\u062f',
              ),
              forgiveHint: (0, t.L)(
                '\u0628\u062f\u0648\u0646 \u06af\u0631\u0641\u062a\u0646 \u067e\u0648\u0644\u061b \u062f\u0631 \u062f\u0641\u062a\u0631 \xab\u0628\u062e\u0634\u06cc\u062f\u0647 \u0634\u062f\xbb \u062b\u0628\u062a \u0645\u06cc\u200c\u0634\u0648\u062f',
              ),
            }
          : {
              all: (0, t.L)(
                '\u0647\u0645\u0647 \u0631\u0627 \u062f\u0627\u062f\u0645',
              ),
              other: (0, t.L)(
                '\u0645\u0628\u0644\u063a \u062f\u06cc\u06af\u0631\u06cc \u062f\u0627\u062f\u0645',
              ),
              forgive: (0, t.L)(
                '\u0628\u0642\u06cc\u0647 \u0631\u0627 \u0628\u062e\u0634\u06cc\u062f',
              ),
              otherHint: (0, t.L)(
                '\u0645\u0628\u0644\u063a \u0631\u0627 \u0645\u06cc\u200c\u0646\u0648\u06cc\u0633\u06cc\u062f\u061b \u0628\u0642\u06cc\u0647 \u0628\u062f\u0647\u06cc \u0645\u06cc\u200c\u0645\u0627\u0646\u062f',
              ),
              forgiveHint: (0, t.L)(
                '\u0628\u062f\u0648\u0646 \u062f\u0627\u062f\u0646 \u067e\u0648\u0644\u061b \u062f\u0631 \u062f\u0641\u062a\u0631 \xab\u0628\u062e\u0634\u06cc\u062f\u0647 \u0634\u062f\xbb \u062b\u0628\u062a \u0645\u06cc\u200c\u0634\u0648\u062f',
              ),
            };
      }));
    var t = r(d[0]);
    const n = '\u062a\u0633\u0648\u06cc\u0647 \u062d\u0633\u0627\u0628',
      o =
        '\u0628\u062e\u0634\u06cc\u062f\u0647 \u0634\u062f (\u062a\u0633\u0648\u06cc\u0647)';
    function c(t) {
      const n = (t || []).filter(
          (t) =>
            (!t.status || 'pending' === t.status) &&
            !t.legacy &&
            Number.isFinite(t.amountToman),
        ),
        o = (t) => t.reduce((t, n) => t + n.amountToman, 0),
        c = n.filter((t) => 'receive' === t.direction),
        u = n.filter((t) => 'pay' === t.direction);
      return {
        inCount: c.length,
        inToman: o(c),
        outCount: u.length,
        outToman: o(u),
      };
    }
    const u = {
      settle_balance_changed:
        '\u062d\u0633\u0627\u0628 \u0627\u06cc\u0646 \u0634\u062e\u0635 \u0639\u0648\u0636 \u0634\u062f\u0647\u061b \u062f\u0648\u0628\u0627\u0631\u0647 \u0646\u06af\u0627\u0647 \u06a9\u0646.',
      settle_nothing_open:
        '\u0686\u06cc\u0632\u06cc \u0628\u0631\u0627\u06cc \u062a\u0633\u0648\u06cc\u0647 \u0646\u0645\u0627\u0646\u062f\u0647 \u0627\u0633\u062a.',
      settle_amount_invalid:
        '\u0645\u0628\u0644\u063a \u0645\u0639\u062a\u0628\u0631 \u0648 \u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 \u0635\u0641\u0631 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f.',
      settle_amount_too_large:
        '\u0645\u0628\u0644\u063a \u0627\u0632 \u0645\u0627\u0646\u062f\u0647\u0654 \u062d\u0633\u0627\u0628 \u0628\u06cc\u0634\u062a\u0631 \u0627\u0633\u062a.',
    };
  },
  444,
  [311],
);
