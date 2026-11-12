// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 518; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'ledgerReadOnly', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      Object.defineProperty(e, 'ledgerReadOnlyFor', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      Object.defineProperty(e, 'ledgerScreensOpen', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      (e.useLedgerReadOnly = function () {
        return (0, t.useSyncExternalStore)(c.subscribe, c.get, c.get);
      }),
      Object.defineProperty(e, 'LEDGER_READ_ONLY_LINE', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }));
    var t = r(d[0]);
    let n = !1;
    const u = new Set(),
      c = {
        set(t) {
          t !== n && ((n = t), u.forEach((t) => t()));
        },
        get: () => n,
        subscribe: (t) => (
          u.add(t),
          () => {
            u.delete(t);
          }
        ),
      },
      o = (t, n) => 'free' === t && !n,
      l = (t, n) => !!n || 'free' === t;
    const f =
      '\u0637\u0631\u062d \u0631\u0627\u06cc\u06af\u0627\u0646: \u0641\u0642\u0637 \u062f\u06cc\u062f\u0646\u061b \u0628\u0631\u0627\u06cc \u062b\u0628\u062a \u062a\u0627\u0632\u0647 \u0627\u0634\u062a\u0631\u0627\u06a9 \xab\u0627\u0633\u062a\u0627\u0646\u062f\u0627\u0631\u062f\xbb \u06cc\u0627 \xab\u067e\u0644\u0627\u0633\xbb \u0628\u06af\u06cc\u0631.';
  },
  518,
  [2],
);
