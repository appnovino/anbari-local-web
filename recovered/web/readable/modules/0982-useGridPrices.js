// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 982; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.useGridPrices = function (t) {
        const [n, u] = (0, e.useState)(o);
        return (
          (0, e.useEffect)(() => {}, []),
          [
            n ?? t,
            function (e) {
              ((o = e), u(e));
              try {
                window.localStorage.setItem(c, e ? '1' : '0');
              } catch {}
              return;
            },
          ]
        );
      }));
    var e = r(d[0]);
    r(d[1]);
    var t,
      n = r(d[2]);
    (t = n) && t.__esModule;
    const c = 'anbari.grid-prices';
    let o = null;
    const u = (e) => '1' === e || ('0' !== e && null);
    try {
      o = u(
        'undefined' != typeof window ? window.localStorage.getItem(c) : null,
      );
    } catch {}
  },
  982,
  [2, 94, 258],
);
