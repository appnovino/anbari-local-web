// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 846; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.TrendChart = function ({
        series: e,
        keys: k,
        labels: j,
        picked: b,
        onPick: v,
        height: S = 176,
        testID: w,
        emptyText: R,
        a11y: C,
      }) {
        const { colors: L } = (0, l.useTheme)(),
          A = (0, c.useReducedMotion)(),
          [D, M] = (0, t.useState)(0),
          O = e.map((e) => e.values),
          E = JSON.stringify(O),
          [P, W] = (0, t.useState)(O),
          X = (0, t.useRef)(P);
        ((X.current = P),
          (0, t.useEffect)(() => {
            if (A || 'function' != typeof requestAnimationFrame)
              return void W(O);
            const e = X.current,
              t = Date.now();
            let n = 0;
            const i = () => {
              const s = (Date.now() - t) / x;
              (W(O.map((t, n) => (0, u.tweenValues)(e[n] || [], t, s))),
                s < 1 && (n = requestAnimationFrame(i)));
            };
            return (
              (n = requestAnimationFrame(i)),
              () => cancelAnimationFrame(n)
            );
          }, [E, A]));
        const z = k.length,
          I = Math.max(0, D - y - 6),
          _ = { width: I, height: S, padTop: 10, padBottom: 6, padX: 8 },
          F = (0, u.trendScale)(O),
          T = (0, h.chartScale)([Math.max(F.top, -F.bottom)]),
          q = b ? k.indexOf(b) : -1,
          Y = q >= 0 ? q : z - 1,
          G = { fontSize: 11, lineHeight: 16, color: L.muted },
          H = (e) => {
            z && I && v(k[(0, u.trendIndexAt)(e, z, _)]);
          };
        if (!z || O.every((e) => e.every((e) => !e)))
          return (0, p.jsx)(n.default, {
            testID: w,
            style: {
              height: S + 22,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 14,
              backgroundColor: L.soft,
            },
            children: (0, p.jsx)(o.Copy, {
              style: [G, { fontSize: 12, textAlign: 'center' }],
              children: R || '\u2014',
            }),
          });
        const N = (e) => (P[e] && P[e].length === z ? P[e] : O[e]),
          B = (e, t = !0) =>
            'dashed' === e
              ? L.muted
              : 'signed' === e
                ? t
                  ? L.success
                  : L.danger
                : L.accent;
        return (0, p.jsxs)(n.default, {
          style: { gap: 8 },
          children: [
            (0, p.jsxs)(n.default, {
              onLayout: (e) => M(Math.round(e.nativeEvent.layout.width)),
              style: { flexDirection: 'row-reverse', height: S },
              children: [
                (0, p.jsxs)(n.default, {
                  pointerEvents: 'none',
                  style: { width: y, height: S },
                  children: [
                    !!T.unit &&
                      (0, p.jsx)(o.Copy, {
                        numberOfLines: 1,
                        style: [
                          G,
                          {
                            position: 'absolute',
                            top: -14,
                            right: 0,
                            left: -10,
                            fontSize: 9,
                            textAlign: 'right',
                          },
                        ],
                        children: T.unit,
                      }),
                    F.ticks.map((e) =>
                      (0, p.jsx)(
                        o.Copy,
                        {
                          numberOfLines: 1,
                          style: [
                            G,
                            {
                              position: 'absolute',
                              top: (0, u.trendY)(e, F, _) - 8,
                              right: 0,
                              left: 0,
                              fontSize: 10,
                              textAlign: 'right',
                            },
                          ],
                          children: (0, h.tickLabel)(e, T),
                        },
                        e,
                      ),
                    ),
                  ],
                }),
                (0, p.jsxs)(n.default, {
                  style: { flex: 1, minWidth: 0, marginRight: 6 },
                  children: [
                    I > 0 &&
                      (0, p.jsxs)(s.default, {
                        width: I,
                        height: S,
                        children: [
                          (0, p.jsx)(i.Defs, {
                            children: (0, p.jsxs)(i.LinearGradient, {
                              id: 'trend-fill',
                              x1: '0',
                              y1: '0',
                              x2: '0',
                              y2: '1',
                              children: [
                                (0, p.jsx)(i.Stop, {
                                  offset: '0',
                                  stopColor: L.accent,
                                  stopOpacity: 0.32,
                                }),
                                (0, p.jsx)(i.Stop, {
                                  offset: '1',
                                  stopColor: L.accent,
                                  stopOpacity: 0.02,
                                }),
                              ],
                            }),
                          }),
                          F.ticks.map((e) =>
                            (0, p.jsx)(
                              i.Line,
                              {
                                x1: 0,
                                x2: I,
                                y1: (0, u.trendY)(e, F, _),
                                y2: (0, u.trendY)(e, F, _),
                                stroke: L.line,
                                strokeWidth: 0 === e && F.bottom < 0 ? 1.5 : 1,
                                strokeDasharray: 0 === e ? void 0 : '3 5',
                              },
                              e,
                            ),
                          ),
                          e.map((e, t) =>
                            'area' === e.kind
                              ? (0, p.jsx)(
                                  i.Path,
                                  {
                                    d: (0, u.areaPath)(N(t), F, _),
                                    fill: 'url(#trend-fill)',
                                  },
                                  e.key + '-fill',
                                )
                              : null,
                          ),
                          e.map((e, t) =>
                            'signed' === e.kind
                              ? (0, u.signedSegments)(N(t), F, _).map((t, n) =>
                                  (0, p.jsx)(
                                    i.Path,
                                    {
                                      d: t.d,
                                      stroke: B('signed', t.positive),
                                      strokeWidth: 2.5,
                                      fill: 'none',
                                      strokeLinejoin: 'round',
                                      strokeLinecap: 'round',
                                    },
                                    e.key + n,
                                  ),
                                )
                              : (0, p.jsx)(
                                  i.Path,
                                  {
                                    d: (0, u.linePath)(N(t), F, _),
                                    stroke: B(e.kind),
                                    strokeWidth:
                                      'dashed' === e.kind ? 1.6 : 2.5,
                                    strokeDasharray:
                                      'dashed' === e.kind ? '5 4' : void 0,
                                    fill: 'none',
                                    strokeLinejoin: 'round',
                                    strokeLinecap: 'round',
                                  },
                                  e.key,
                                ),
                          ),
                          (0, p.jsx)(i.Line, {
                            x1: (0, u.trendX)(Y, z, _),
                            x2: (0, u.trendX)(Y, z, _),
                            y1: 4,
                            y2: S - 2,
                            stroke: L.text,
                            strokeOpacity: 0.35,
                            strokeWidth: 1,
                          }),
                          e.map((e, t) => {
                            const n = N(t)[Y] ?? 0;
                            return (0, p.jsx)(
                              i.Circle,
                              {
                                cx: (0, u.trendX)(Y, z, _),
                                cy: (0, u.trendY)(n, F, _),
                                r: 4.5,
                                fill: L.surface,
                                stroke: B(e.kind, n >= 0),
                                strokeWidth: 2.5,
                              },
                              e.key + '-dot',
                            );
                          }),
                        ],
                      }),
                    (0, p.jsx)(n.default, {
                      testID: w,
                      accessible: !0,
                      accessibilityRole: 'adjustable',
                      accessibilityLabel: C,
                      accessibilityActions: [
                        { name: 'increment' },
                        { name: 'decrement' },
                      ],
                      onAccessibilityAction: (e) => {
                        const t =
                          'increment' === e.nativeEvent.actionName
                            ? Math.min(z - 1, Y + 1)
                            : Math.max(0, Y - 1);
                        v(k[t]);
                      },
                      onStartShouldSetResponder: () => !0,
                      onMoveShouldSetResponder: () => !0,
                      onResponderTerminationRequest: () => !1,
                      onResponderGrant: (e) => H(e.nativeEvent.locationX),
                      onResponderMove: (e) => H(e.nativeEvent.locationX),
                      ...f.noSwipe,
                      style: {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                      },
                    }),
                  ],
                }),
              ],
            }),
            (0, p.jsx)(n.default, {
              style: { marginRight: 40, height: 16 },
              children: j.map((e, t) =>
                (0, h.showLabel)(t, z) || 0 === t
                  ? (0, p.jsx)(
                      o.Copy,
                      {
                        numberOfLines: 1,
                        style: [
                          G,
                          {
                            position: 'absolute',
                            top: 0,
                            left: (0, u.trendX)(t, z, _) - 30,
                            width: 60,
                            textAlign: 'center',
                            fontSize: 10,
                            color: t === Y ? L.text : L.muted,
                          },
                        ],
                        children: e,
                      },
                      k[t],
                    )
                  : null,
              ),
            }),
            (0, p.jsx)(n.default, {
              accessibilityElementsHidden: !0,
              importantForAccessibility: 'no-hide-descendants',
              style: {
                flexDirection: 'row-reverse',
                flexWrap: 'wrap',
                gap: 14,
              },
              children: e.map((e) =>
                (0, p.jsxs)(
                  n.default,
                  {
                    style: {
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      gap: 6,
                    },
                    children: [
                      'signed' === e.kind
                        ? (0, p.jsxs)(n.default, {
                            style: { flexDirection: 'row-reverse', gap: 2 },
                            children: [
                              (0, p.jsx)(n.default, {
                                style: {
                                  width: 9,
                                  height: 3,
                                  borderRadius: 2,
                                  backgroundColor: L.success,
                                },
                              }),
                              (0, p.jsx)(n.default, {
                                style: {
                                  width: 9,
                                  height: 3,
                                  borderRadius: 2,
                                  backgroundColor: L.danger,
                                },
                              }),
                            ],
                          })
                        : (0, p.jsx)(n.default, {
                            style: {
                              width: 18,
                              height: 'area' === e.kind ? 10 : 3,
                              borderRadius: 3,
                              backgroundColor:
                                'dashed' === e.kind ? L.muted : L.accent,
                              opacity: 'area' === e.kind ? 0.5 : 1,
                            },
                          }),
                      (0, p.jsx)(o.Copy, {
                        style: [G, { fontSize: 12 }],
                        children: e.label,
                      }),
                    ],
                  },
                  e.key,
                ),
              ),
            }),
          ],
        });
      }));
    var t = r(d[0]),
      n = e(r(d[1])),
      i = r(d[2]),
      s = e(i),
      o = r(d[3]),
      l = r(d[4]),
      c = r(d[5]),
      h = r(d[6]),
      u = r(d[7]),
      f = r(d[8]),
      p = r(d[9]);
    const y = 34,
      x = 650;
  },
  846,
  [2, 99, 386, 407, 382, 414, 844, 847, 384, 338],
);
