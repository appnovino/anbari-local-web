// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 616; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.UnitPicker = function ({
        value: e,
        onChange: v,
        testID: w = 'unit-picker',
        productUnit: j,
        packSize: S,
        packUnit: C,
        allowedUnits: T,
      }) {
        const D = (0, y.unitWheelRows)(T),
          F = D.flatMap((e, t) => ('unit' === e.type ? [t] : [])),
          z = (e) => D.findIndex((t) => 'unit' === t.type && t.unit === e);
        function I(e) {
          const t = Math.max(0, Math.min(D.length - 1, e)),
            n = D[t];
          if ('unit' === n.type) return n.unit;
          const o = D[t + 1];
          return o && 'unit' === o.type ? o.unit : D[F[F.length - 1]].unit;
        }
        const { colors: R } = (0, f.useTheme)(),
          [E, M] = (0, t.useState)(!1),
          [_, P] = (0, t.useState)(e),
          V = (0, t.useRef)(null),
          $ = (0, t.useRef)(void 0),
          L = (0, t.useRef)(0),
          A = (0, t.useRef)(e);
        function U(e, t = !0) {
          const n = z(e);
          n >= 0 && V.current?.scrollTo({ y: n * k, animated: t });
        }
        function W(e, t = !0) {
          (P(e), (A.current = e), U(e, t));
        }
        function B() {
          (clearTimeout($.current), ($.current = void 0), M(!1));
        }
        function O() {
          const e = L.current,
            t = I(Math.round(e / k));
          (P(t), (A.current = t));
          const n = z(t) * k;
          return (
            Math.abs(e - n) > 1 && V.current?.scrollTo({ y: n, animated: !0 }),
            t
          );
        }
        ((A.current = _),
          (0, t.useEffect)(() => {
            if (!E) return;
            const e = setTimeout(() => U(A.current, !1), 30);
            return () => clearTimeout(e);
          }, [E]),
          (0, t.useEffect)(() => () => clearTimeout($.current), []),
          (0, t.useEffect)(() => {
            if (!E || 'undefined' == typeof window) return;
            const e = (e) => {
              if ('Escape' === e.key) return (e.preventDefault(), void B());
              if ('ArrowDown' !== e.key && 'ArrowUp' !== e.key) return;
              e.preventDefault();
              const t = F.indexOf(z(A.current)),
                n =
                  F[
                    Math.max(
                      0,
                      Math.min(
                        F.length - 1,
                        t + ('ArrowDown' === e.key ? 1 : -1),
                      ),
                    )
                  ];
              W(D[n].unit);
            };
            return (
              window.addEventListener('keydown', e),
              () => window.removeEventListener('keydown', e)
            );
          }, [E]));
        const H = h.notebookFa.units[e] || e;
        return (0, b.jsxs)(b.Fragment, {
          children: [
            (0, b.jsxs)(n.default, {
              testID: w,
              accessibilityRole: 'button',
              accessibilityLabel: `${h.notebookFa.unitTitle}: ${H}`,
              onPress: function () {
                (P(e), (A.current = e), M(!0));
              },
              style: ({ pressed: e }) => ({
                height: 48,
                borderRadius: 14,
                borderWidth: o.default.hairlineWidth,
                borderColor: R.line,
                backgroundColor: R.soft,
                flexDirection: 'row-reverse',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 12,
                gap: 6,
                opacity: e ? 0.85 : 1,
              }),
              children: [
                (0, b.jsx)(s.Copy, {
                  numberOfLines: 1,
                  style: {
                    flexShrink: 1,
                    fontSize: 14,
                    fontFamily: 'Vazirmatn_600SemiBold',
                  },
                  children: H,
                }),
                (0, b.jsx)(l.Icon, { name: 'down', size: 16, color: R.muted }),
              ],
            }),
            (0, b.jsxs)(c.Sheet, {
              visible: E,
              title: h.notebookFa.unitTitle,
              onClose: B,
              children: [
                (0, b.jsxs)(i.default, {
                  style: { height: 220 },
                  children: [
                    (0, b.jsx)(i.default, {
                      pointerEvents: 'none',
                      style: {
                        position: 'absolute',
                        top: x,
                        left: 0,
                        right: 0,
                        height: k,
                        borderRadius: 12,
                        backgroundColor: R.accentSoft,
                      },
                    }),
                    (0, b.jsx)(u.ScrollView, {
                      ref: V,
                      testID: `${w}-wheel`,
                      nestedScrollEnabled: !0,
                      showsVerticalScrollIndicator: !1,
                      snapToInterval: k,
                      decelerationRate: 'fast',
                      scrollEventThrottle: 16,
                      onScroll: function (e) {
                        ((L.current = e.nativeEvent.contentOffset.y),
                          clearTimeout($.current),
                          ($.current = setTimeout(() => {
                            (($.current = void 0), O());
                          }, 140)));
                      },
                      contentContainerStyle: { paddingVertical: x },
                      children: D.map((e) =>
                        'header' === e.type
                          ? (0, b.jsx)(
                              i.default,
                              {
                                style: {
                                  height: k,
                                  justifyContent: 'flex-end',
                                  paddingBottom: 6,
                                },
                                children: (0, b.jsx)(s.Copy, {
                                  style: {
                                    textAlign: 'center',
                                    fontSize: 11,
                                    color: R.muted,
                                  },
                                  children: h.notebookFa.unitGroups[e.group],
                                }),
                              },
                              'h-' + e.group,
                            )
                          : (0, b.jsxs)(
                              n.default,
                              {
                                testID: `${w}-option-${e.unit}`,
                                accessibilityRole: 'button',
                                accessibilityState: { selected: _ === e.unit },
                                onPress: () => W(e.unit),
                                style: {
                                  height: k,
                                  flexDirection: 'row-reverse',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  gap: 8,
                                },
                                children: [
                                  (0, b.jsx)(s.Copy, {
                                    style: {
                                      fontSize: 16,
                                      color: _ === e.unit ? R.accent : R.text,
                                      fontFamily:
                                        _ === e.unit
                                          ? 'Vazirmatn_700Bold'
                                          : 'Vazirmatn_400Regular',
                                    },
                                    children: h.notebookFa.units[e.unit],
                                  }),
                                  j === e.unit &&
                                    (0, b.jsx)(i.default, {
                                      style: {
                                        paddingHorizontal: 7,
                                        paddingVertical: 2,
                                        borderRadius: 8,
                                        borderWidth: o.default.hairlineWidth,
                                        borderColor: R.line,
                                        backgroundColor: R.surface,
                                      },
                                      children: (0, b.jsx)(s.Copy, {
                                        style: { fontSize: 10, color: R.muted },
                                        children:
                                          h.notebookFa.unitProductDefault,
                                      }),
                                    }),
                                ],
                              },
                              e.unit,
                            ),
                      ),
                    }),
                  ],
                }),
                !!S &&
                  !!C &&
                  (0, b.jsx)(s.Copy, {
                    testID: `${w}-pack-hint`,
                    style: {
                      textAlign: 'center',
                      fontSize: 12,
                      color: R.muted,
                    },
                    children: h.notebookFa.unitPackHint(
                      h.notebookFa.units[C],
                      S.toLocaleString((0, p.numberLocale)()),
                      h.notebookFa.units[j || 'piece'],
                    ),
                  }),
                (0, b.jsx)(s.Button, {
                  testID: `${w}-confirm`,
                  onPress: function () {
                    let t = A.current;
                    ($.current &&
                      (clearTimeout($.current),
                      ($.current = void 0),
                      (t = O())),
                      B(),
                      t !== e && v(t));
                  },
                  children: h.notebookFa.unitPick,
                }),
              ],
            }),
          ],
        });
      }));
    var t = r(d[0]);
    r(d[1]);
    var n = e(r(d[2])),
      o = e(r(d[3])),
      i = e(r(d[4])),
      u = r(d[5]),
      c = r(d[6]),
      l = r(d[7]),
      s = r(d[8]),
      f = r(d[9]),
      h = r(d[10]),
      y = r(d[11]),
      p = r(d[12]),
      b = r(d[13]);
    const k = 44,
      x = k * Math.floor(2.5);
  },
  616,
  [2, 94, 232, 17, 99, 380, 539, 385, 407, 382, 580, 432, 311, 338],
);
