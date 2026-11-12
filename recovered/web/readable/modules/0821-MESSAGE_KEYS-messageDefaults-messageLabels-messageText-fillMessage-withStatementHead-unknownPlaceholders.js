// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 821; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, _m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'MESSAGE_KEYS', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      Object.defineProperty(e, 'messageDefaults', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      Object.defineProperty(e, 'messageLabels', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      (e.messageText = function (t, n) {
        return n?.[t]?.trim() || s()[t];
      }),
      (e.fillMessage = u),
      (e.withStatementHead = function (t, n, o) {
        const s = n?.statement?.trim();
        return s ? [u(s, o), ...t.split('\n').slice(1)].join('\n') : t;
      }),
      (e.unknownPlaceholders = function (t, n) {
        const o = {
          invoiceShort: ['shop', 'no', 'total'],
          invoiceLong: ['buyer', 'shop'],
          statement: ['shop', 'name'],
          reminder: ['name', 'shop', 'amount'],
        };
        return [...n.matchAll(/\{([^{}]+)\}/g)]
          .map((t) => t[1])
          .filter((n) => !o[t].includes(n));
      }));
    var t = r(d[0]),
      n = r(d[1]);
    const o = ['invoiceShort', 'invoiceLong', 'statement', 'reminder'],
      s = () => ({
        invoiceShort: (0, n.shopUnitText)(
          (0, t.L)(
            '{shop}: \u0641\u0627\u06a9\u062a\u0648\u0631 {no} \u0628\u0647 \u0645\u0628\u0644\u063a {total} \u062a\u0648\u0645\u0627\u0646.',
          ),
        ),
        invoiceLong: (0, t.L)(
          '\u0633\u0644\u0627\u0645 {buyer} \u0639\u0632\u06cc\u0632\u060c \u0641\u0627\u06a9\u062a\u0648\u0631 \u062e\u0631\u06cc\u062f \u0634\u0645\u0627 \u0627\u0632 {shop}',
        ),
        statement: (0, t.L)(
          '{shop}: \u0635\u0648\u0631\u062a\u200c\u062d\u0633\u0627\u0628 {name}',
        ),
        reminder: (0, n.shopUnitText)(
          (0, t.L)(
            '\u0633\u0644\u0627\u0645 {name} \u0639\u0632\u06cc\u0632\u060c \u0648\u0642\u062a \u0628\u062e\u06cc\u0631. \u0627\u0632 {shop} \u067e\u06cc\u0627\u0645 \u0645\u06cc\u200c\u062f\u0647\u06cc\u0645: \u0645\u0627\u0646\u062f\u0647\u200c\u06cc \u062d\u0633\u0627\u0628 \u0634\u0645\u0627 {amount} \u062a\u0648\u0645\u0627\u0646 \u0627\u0633\u062a. \u0647\u0631 \u0648\u0642\u062a \u0641\u0631\u0635\u062a \u06a9\u0631\u062f\u06cc\u062f \u0644\u0637\u0641\u0627\u064b \u062a\u0633\u0648\u06cc\u0647 \u0628\u0641\u0631\u0645\u0627\u06cc\u06cc\u062f. \u0645\u0645\u0646\u0648\u0646 \u0627\u0632 \u0634\u0645\u0627.',
          ),
        ),
      }),
      c = () => ({
        invoiceShort: {
          title: (0, t.L)(
            '\u067e\u06cc\u0627\u0645\u06a9 \u06a9\u0648\u062a\u0627\u0647 \u0641\u0627\u06a9\u062a\u0648\u0631',
          ),
          hint: (0, t.L)(
            '{shop} \u0646\u0627\u0645 \u0641\u0631\u0648\u0634\u06af\u0627\u0647\u060c {no} \u0634\u0645\u0627\u0631\u0647\u060c {total} \u0645\u0628\u0644\u063a',
          ),
        },
        invoiceLong: {
          title: (0, t.L)(
            '\u0627\u0648\u0644 \u067e\u06cc\u0627\u0645 \u06a9\u0627\u0645\u0644 \u0641\u0627\u06a9\u062a\u0648\u0631',
          ),
          hint: (0, t.L)(
            '{buyer} \u0646\u0627\u0645 \u062e\u0631\u06cc\u062f\u0627\u0631\u060c {shop} \u0646\u0627\u0645 \u0641\u0631\u0648\u0634\u06af\u0627\u0647',
          ),
        },
        statement: {
          title: (0, t.L)(
            '\u0627\u0648\u0644 \u067e\u06cc\u0627\u0645 \u0635\u0648\u0631\u062a\u200c\u062d\u0633\u0627\u0628',
          ),
          hint: (0, t.L)(
            '{shop} \u0646\u0627\u0645 \u0641\u0631\u0648\u0634\u06af\u0627\u0647\u060c {name} \u0646\u0627\u0645 \u0634\u062e\u0635',
          ),
        },
        reminder: {
          title: (0, t.L)(
            '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u0628\u062f\u0647\u06cc',
          ),
          hint: (0, t.L)(
            '{name} \u0646\u0627\u0645 \u0634\u062e\u0635\u060c {shop} \u0646\u0627\u0645 \u0641\u0631\u0648\u0634\u06af\u0627\u0647\u060c {amount} \u0645\u0627\u0646\u062f\u0647',
          ),
        },
      });
    function u(t, n) {
      let o = t;
      for (const [t, s] of Object.entries(n))
        o = o.split('{' + t + '}').join(String(s));
      return o;
    }
  },
  821,
  [311, 435],
);
