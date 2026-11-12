// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 792; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, _m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'CONTINUE_MS', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      Object.defineProperty(e, 'OFFER_MS', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      Object.defineProperty(e, 'receiptOffer', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }),
      (e.receivedNames = function (n) {
        return Array.isArray(n)
          ? n
              .filter(
                (n) =>
                  !!n &&
                  'object' == typeof n &&
                  'received' === n.kind &&
                  !n.parentMovementId &&
                  'string' == typeof n.name,
              )
              .map((n) => n.name)
          : [];
      }),
      (e.offerTitle = function (t) {
        const o = t.names,
          c =
            t.count <= 3 && o.length >= t.count
              ? o.slice(0, t.count)
              : o.slice(0, 2),
          s = t.count - c.length,
          l = c.length
            ? s > 0
              ? (0, n.L)(
                  '{names} \u0648 {n} \u06a9\u0627\u0644\u0627\u06cc \u062f\u06cc\u06af\u0631',
                  { names: c.join((0, n.L)('\u060c ')), n: m(s) },
                )
              : c.length > 1
                ? (0, n.L)('{names} \u0648 {last}', {
                    names: c.slice(0, -1).join((0, n.L)('\u060c ')),
                    last: c[c.length - 1],
                  })
                : c[0]
            : '';
        return l
          ? (0, n.L)(
              '{n} \u0642\u0644\u0645 \u06a9\u0627\u0644\u0627 \u0648\u0627\u0631\u062f \u0634\u062f: {names}',
              { n: m(t.count), names: l },
            )
          : (0, n.L)(
              '{n} \u0642\u0644\u0645 \u06a9\u0627\u0644\u0627 \u0648\u0627\u0631\u062f \u0634\u062f',
              { n: m(t.count) },
            );
      }));
    var n = r(d[0]);
    const t = 15e5,
      o = 18e5,
      c = new Set();
    let s = null;
    const l = () => c.forEach((n) => n(s)),
      u = (n) => !!s && n - s.startedAt < o,
      p = {
        get: (n = Date.now()) => (s && !u(n) && ((s = null), l()), s),
        continueId: (n, o = Date.now()) =>
          s && s.shopId === n && !s.photos && o - s.startedAt < t
            ? s.purchaseId
            : void 0,
        saved(n, t, o, c = Date.now()) {
          const u = o.map((n) => n.trim()).filter(Boolean);
          ((s =
            s && s.purchaseId === t && s.shopId === n
              ? {
                  ...s,
                  count: s.count + u.length,
                  names: [...s.names, ...u].slice(0, 40),
                }
              : {
                  purchaseId: t,
                  shopId: n,
                  count: u.length,
                  names: u.slice(0, 40),
                  startedAt: c,
                  photos: 0,
                }),
            l());
        },
        photoAdded(n, t) {
          s?.purchaseId === n && ((s = { ...s, photos: t }), l());
        },
        receiptCancelled(n) {
          s?.purchaseId === n && ((s = null), l());
        },
        close() {
          s && ((s = null), l());
        },
        subscribe: (n) => (
          c.add(n),
          n(p.get()),
          () => {
            c.delete(n);
          }
        ),
      };
    const m = (t) => t.toLocaleString((0, n.numberLocale)());
  },
  792,
  [311],
);
