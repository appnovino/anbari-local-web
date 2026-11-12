// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 843; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.BarChart = function ({
        data: e,
        highlightKey: u,
        formatValue: h,
        onSelect: f,
        axis: x = !0,
        keepLast: y = !1,
        emptyText: p,
        plot: b = 112,
        detailLines: j = 2,
        detailGap: v = 8,
        testID: C,
        detailTestID: L,
      }) {
        const { colors: k } = (0, n.useTheme)(),
          H = e.length,
          z = { fontSize: 12, lineHeight: 18, color: k.muted },
          I = e.map((e) => e.value),
          S = (0, o.chartScale)(I),
          w = x ? S.top : S.max,
          D = S.max > 0 ? I.indexOf(S.max) : -1,
          A = h(S.max),
          O = e.findIndex((e) => e.key === u),
          T = O >= 0 ? O : H - 1,
          _ = e[T],
          B = H <= 7,
          R = B ? 10 : H <= 12 ? 6 : H <= 31 ? 2 : 0,
          W = B ? 26 : H <= 31 ? 10 : 6,
          E = B ? 6 : H <= 31 ? 3 : 1;
        return !H || I.every((e) => !e)
          ? (0, s.jsx)(i.default, {
              testID: C,
              style: {
                height: b + 32 + 20,
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomWidth: 1,
                borderColor: k.line,
              },
              children: (0, s.jsx)(l.Copy, {
                style: [z, { textAlign: 'center' }],
                children: p || '\u2014',
              }),
            })
          : (0, s.jsxs)(i.default, {
              style: { gap: v },
              children: [
                (0, s.jsxs)(i.default, {
                  style: { flexDirection: 'row-reverse' },
                  children: [
                    x &&
                      (0, s.jsxs)(i.default, {
                        pointerEvents: 'none',
                        style: { width: c, height: b + 32, marginLeft: 4 },
                        children: [
                          !!S.unit &&
                            (0, s.jsx)(l.Copy, {
                              numberOfLines: 1,
                              style: {
                                position: 'absolute',
                                bottom: b + 10,
                                right: 0,
                                left: -8,
                                fontSize: 9,
                                lineHeight: 13,
                                color: k.muted,
                                textAlign: 'right',
                              },
                              children: S.unit,
                            }),
                          S.ticks.map((e) =>
                            (0, s.jsx)(
                              l.Copy,
                              {
                                numberOfLines: 1,
                                style: {
                                  position: 'absolute',
                                  bottom: (w ? e / w : 0) * b - 7,
                                  right: 0,
                                  left: 0,
                                  fontSize: 9,
                                  lineHeight: 14,
                                  color: k.muted,
                                  textAlign: 'right',
                                },
                                children: (0, o.tickLabel)(e, S),
                              },
                              e,
                            ),
                          ),
                        ],
                      }),
                    (0, s.jsxs)(i.default, {
                      style: { flex: 1, minWidth: 0 },
                      children: [
                        (0, s.jsxs)(i.default, {
                          testID: C,
                          style: {
                            height: b + 32,
                            flexDirection: 'row',
                            direction: 'ltr',
                            alignItems: 'flex-end',
                            gap: R,
                            borderBottomWidth: 1,
                            borderColor: k.line,
                            paddingHorizontal: 2,
                          },
                          children: [
                            x &&
                              S.ticks
                                .slice(1)
                                .map((e) =>
                                  (0, s.jsx)(
                                    i.default,
                                    {
                                      pointerEvents: 'none',
                                      style: {
                                        position: 'absolute',
                                        left: 0,
                                        right: 0,
                                        bottom: (e / w) * b,
                                        height: 1,
                                        backgroundColor: k.line,
                                        opacity: 0.6,
                                      },
                                    },
                                    e,
                                  ),
                                ),
                            e.map((e, n) => {
                              const c = (0, o.barHeight)(e.value, w, b),
                                u = n === T,
                                p = u || (y && n === H - 1),
                                j = h(e.value);
                              return (0, s.jsxs)(
                                t.default,
                                {
                                  accessibilityRole: 'button',
                                  accessibilityState: { selected: u },
                                  accessibilityLabel:
                                    e.a11y ||
                                    `${e.label} ${j.value} ${j.unit}`.trim(),
                                  onPress: () => f?.(e.key),
                                  ...((v = e.key),
                                  f ? { onHoverIn: () => f(v) } : {}),
                                  style: {
                                    flex: 1,
                                    height: '100%',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                  },
                                  children: [
                                    n === D &&
                                      (0, s.jsxs)(i.default, {
                                        pointerEvents: 'none',
                                        style: {
                                          position: 'absolute',
                                          ...(x
                                            ? { bottom: c + 2 }
                                            : { top: 0 }),
                                          width: 72,
                                          alignItems: 'center',
                                        },
                                        children: [
                                          (0, s.jsx)(l.Copy, {
                                            style: {
                                              fontSize: 10,
                                              lineHeight: 14,
                                              color: k.text,
                                              fontFamily:
                                                'Vazirmatn_600SemiBold',
                                              textAlign: 'center',
                                            },
                                            children: A.value,
                                          }),
                                          !!A.unit &&
                                            (0, s.jsx)(l.Copy, {
                                              style: {
                                                fontSize: 9,
                                                lineHeight: 13,
                                                color: k.muted,
                                                textAlign: 'center',
                                              },
                                              children: A.unit,
                                            }),
                                        ],
                                      }),
                                    (0, s.jsx)(i.default, {
                                      style: {
                                        width: H > 31 ? '70%' : '100%',
                                        maxWidth: W,
                                        height: e.value < 0 ? 4 : c,
                                        borderTopLeftRadius: E,
                                        borderTopRightRadius: E,
                                        backgroundColor:
                                          e.value < 0 ? k.danger : k.accent,
                                        opacity:
                                          e.value > 0
                                            ? p
                                              ? 1
                                              : 0.45
                                            : e.value < 0
                                              ? 0.7
                                              : 0.25,
                                      },
                                    }),
                                  ],
                                },
                                e.key,
                              );
                              var v;
                            }),
                          ],
                        }),
                        H > 31
                          ? (0, s.jsx)(i.default, {
                              style: {
                                height: 16,
                                marginTop: 4,
                                marginHorizontal: 2,
                                direction: 'ltr',
                              },
                              children: e.map(
                                (e, t) =>
                                  (0, o.showLabel)(t, H) &&
                                  (0, s.jsx)(
                                    l.Copy,
                                    {
                                      numberOfLines: 1,
                                      style: {
                                        position: 'absolute',
                                        left: ((t + 0.5) / H) * 100 + '%',
                                        width: 44,
                                        marginLeft: -22,
                                        textAlign: 'center',
                                        fontSize: 10,
                                        lineHeight: 16,
                                        color: t === T ? k.text : k.muted,
                                      },
                                      children: e.label,
                                    },
                                    e.key,
                                  ),
                              ),
                            })
                          : (0, s.jsx)(i.default, {
                              style: {
                                flexDirection: 'row',
                                direction: 'ltr',
                                gap: R,
                                paddingHorizontal: 2,
                                marginTop: 4,
                              },
                              children: e.map((e, t) =>
                                (0, s.jsx)(
                                  l.Copy,
                                  {
                                    numberOfLines: 1,
                                    style: {
                                      flex: 1,
                                      textAlign: 'center',
                                      fontSize: 10,
                                      lineHeight: 16,
                                      color: t === T ? k.text : k.muted,
                                    },
                                    children: (0, o.showLabel)(t, H)
                                      ? e.label
                                      : '',
                                  },
                                  e.key,
                                ),
                              ),
                            }),
                      ],
                    }),
                  ],
                }),
                !!_?.sub &&
                  (0, s.jsx)(l.Copy, {
                    testID: L,
                    numberOfLines: void 0,
                    style: z,
                    children: _.sub,
                  }),
              ],
            });
      }),
      r(d[0]));
    var t = e(r(d[1])),
      i = e(r(d[2])),
      l = r(d[3]),
      n = r(d[4]),
      o = r(d[5]),
      s = r(d[6]);
    const c = 30;
  },
  843,
  [94, 232, 99, 407, 382, 844, 338],
);
