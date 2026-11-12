// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 611; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.useShopDay = function (e) {
        const n = () => {
            if (!e) return (0, u.localDate)(new Date());
            const t = Object.fromEntries(
              s(e)
                .formatToParts(new Date())
                .map((e) => [e.type, e.value]),
            );
            return t.year && t.month && t.day
              ? `${t.year}-${t.month}-${t.day}`
              : (0, u.localDate)(new Date());
          },
          [c, l] = (0, t.useState)(n);
        return (
          (0, t.useEffect)(() => {
            const e = () => l(n());
            e();
            const t = setInterval(e, 3e4),
              u = o.default.addEventListener('change', (t) => {
                'active' === t && e();
              });
            return () => {
              (clearInterval(t), u.remove());
            };
          }, [e]),
          c
        );
      }));
    var e,
      t = r(d[0]),
      n = r(d[1]),
      o = (e = n) && e.__esModule ? e : { default: e },
      u = r(d[2]);
    const c = new Map();
    function s(e) {
      let t = c.get(e);
      return (
        t ||
          ((t = new Intl.DateTimeFormat('en-CA', {
            timeZone: e,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })),
          c.set(e, t)),
        t
      );
    }
  },
  611,
  [2, 203, 455],
);
