// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 871; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, _m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.PriceChart = function ({
        months: e,
        showBuy: c,
        label: h,
        height: f = 96,
      }) {
        const { colors: x } = (0, s.useTheme)(),
          [y, j] = (0, t.useState)(0),
          p = (0, u.chartPoints)(c ? e : e.map((e) => ({ ...e, buy: null }))),
          m = e.length,
          k = (e) => (m < 2 ? y / 2 : 4 + (e / (m - 1)) * (y - 8)),
          w = (e) => 4 + (f - 8) * (1 - e),
          L = (e) => {
            let t = '',
              n = !1;
            return (
              e.forEach((e, l) => {
                null !== e
                  ? ((t +=
                      (n ? 'L' : 'M') +
                      k(l).toFixed(1) +
                      ' ' +
                      w(e).toFixed(1) +
                      ' '),
                    (n = !0))
                  : (n = !1);
              }),
              t.trim()
            );
          },
          b = (e, t) =>
            e.map((n, i) =>
              null !== n &&
              null === (e[i - 1] ?? null) &&
              null === (e[i + 1] ?? null)
                ? (0, d.jsx)(
                    l.Path,
                    {
                      d: `M${k(i)} ${w(n)} m-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0`,
                      fill: t,
                    },
                    i,
                  )
                : null,
            );
        return (0, d.jsxs)(n.default, {
          children: [
            (0, d.jsx)(n.default, {
              testID: 'product-price-chart',
              onLayout: (e) => j(Math.round(e.nativeEvent.layout.width)),
              style: { height: f },
              children:
                y > 0 &&
                (0, d.jsxs)(i.default, {
                  width: y,
                  height: f,
                  children: [
                    [0.15, 0.5, 0.85].map((e) =>
                      (0, d.jsx)(
                        l.Line,
                        {
                          x1: 0,
                          x2: y,
                          y1: f * e,
                          y2: f * e,
                          stroke: x.line,
                          strokeWidth: 1,
                        },
                        e,
                      ),
                    ),
                    p &&
                      (0, d.jsxs)(d.Fragment, {
                        children: [
                          c &&
                            (0, d.jsx)(l.Path, {
                              d: L(p.buy),
                              stroke: x.warning,
                              strokeWidth: 2.5,
                              fill: 'none',
                              strokeLinejoin: 'round',
                              strokeLinecap: 'round',
                            }),
                          c && b(p.buy, x.warning),
                          (0, d.jsx)(l.Path, {
                            d: L(p.sell),
                            stroke: x.accent,
                            strokeWidth: 2.5,
                            fill: 'none',
                            strokeLinejoin: 'round',
                            strokeLinecap: 'round',
                          }),
                          b(p.sell, x.accent),
                        ],
                      }),
                  ],
                }),
            }),
            m > 0 &&
              (0, d.jsxs)(n.default, {
                testID: 'product-price-chart-months',
                style: {
                  flexDirection: 'row',
                  direction: 'ltr',
                  justifyContent: 'space-between',
                  marginTop: 4,
                },
                children: [
                  (0, d.jsx)(o.Copy, {
                    style: { fontSize: 11, lineHeight: 16, color: x.muted },
                    children: h(e[0]),
                  }),
                  (0, d.jsx)(o.Copy, {
                    style: { fontSize: 11, lineHeight: 16, color: x.muted },
                    children: h(e[m - 1]),
                  }),
                ],
              }),
          ],
        });
      }));
    var t = r(_d[0]),
      n = e(r(_d[1])),
      l = r(_d[2]),
      i = e(l),
      o = r(_d[3]),
      s = r(_d[4]),
      u = r(_d[5]),
      d = r(_d[6]);
  },
  871,
  [2, 99, 386, 407, 382, 870, 338],
);
