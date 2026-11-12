// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 619; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (_g, r, _i, a, _m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.Wheel = C),
      (_e.JalaliDateField = function ({
        value: e,
        onChange: d,
        id: g,
        dateOnly: S = !1,
        quick: D,
      }) {
        const { colors: j } = (0, c.useTheme)(),
          L = D ?? (S ? 'future' : 'past'),
          [I, R] = (0, t.useState)('none' === L ? 'wheel' : 'quick'),
          [M, T] = (0, t.useState)('');
        function w(t) {
          let n = { ...e, ...t };
          const o = (0, u.calMonthLength)(n.year, n.month);
          (n.day > o && (n = { ...n, day: o }),
            d(
              n,
              (0, u.parseCalDateTime)(
                `${n.year}-${y(n.month)}-${y(n.day)}`,
                `${y(n.hour)}:${y(n.minute)}`,
              ),
            ));
        }
        const k = p(),
          z = (() => {
            try {
              return x(e) - x(k);
            } catch {
              return 0;
            }
          })(),
          E =
            0 === z
              ? (0, h.L)('\u0627\u0645\u0631\u0648\u0632')
              : 1 === z
                ? (0, h.L)('\u0641\u0631\u062f\u0627')
                : -1 === z
                  ? (0, h.L)('\u062f\u06cc\u0631\u0648\u0632')
                  : z > 0
                    ? (0, h.L)(
                        '{n} \u0631\u0648\u0632 \u062f\u06cc\u06af\u0631',
                        { n: z.toLocaleString((0, h.numberLocale)()) },
                      )
                    : (0, h.L)('{n} \u0631\u0648\u0632 \u067e\u06cc\u0634', {
                        n: (-z).toLocaleString((0, h.numberLocale)()),
                      }),
          _ = 'past' === L ? -1 : 1,
          V = 'past' === L ? [0, 1, 7, 30] : [0, 1, 7, 30, 60, 90],
          H = (e) =>
            0 === e
              ? (0, h.L)('\u0627\u0645\u0631\u0648\u0632')
              : 1 === e
                ? 'past' === L
                  ? (0, h.L)('\u062f\u06cc\u0631\u0648\u0632')
                  : (0, h.L)('\u0641\u0631\u062f\u0627')
                : 'past' === L
                  ? (0, h.L)('{n} \u0631\u0648\u0632 \u067e\u06cc\u0634', {
                      n: e.toLocaleString((0, h.numberLocale)()),
                    })
                  : (0, h.L)('{n} \u0631\u0648\u0632 \u0628\u0639\u062f', {
                      n: e.toLocaleString((0, h.numberLocale)()),
                    }),
          A = Array.from({ length: 14 }, (e, t) => k.year - 4 + t).map((e) => ({
            value: e,
            label: b(e),
          })),
          B = (0, u.calMonthNames)().map((e, t) => ({
            value: t + 1,
            label: e,
          })),
          F = Array.from(
            { length: (0, u.calMonthLength)(e.year, e.month) },
            (e, t) => ({ value: t + 1, label: b(t + 1) }),
          ),
          P = Array.from({ length: 24 }, (e, t) => ({
            value: t,
            label: (0, h.localDigits)(y(t)),
          })),
          W = Array.from({ length: 60 }, (e, t) => ({
            value: t,
            label: (0, h.localDigits)(y(t)),
          })),
          q = Number((0, u.latinDigits)(M.trim()));
        return (0, f.jsxs)(l.default, {
          testID: g,
          style: { gap: 7 },
          children: [
            (0, f.jsxs)(l.default, {
              style: {
                alignItems: 'center',
                paddingVertical: 4,
                borderRadius: 12,
                backgroundColor: j.soft,
              },
              children: [
                (0, f.jsxs)(s.Copy, {
                  testID: g + '-summary',
                  style: {
                    fontSize: 15,
                    lineHeight: 24,
                    fontFamily: 'Vazirmatn_700Bold',
                  },
                  children: [
                    b(e.day),
                    ' ',
                    (0, u.calMonthNames)()[e.month - 1],
                    ' ',
                    b(e.year),
                    S
                      ? ''
                      : '\u060c ' +
                        (0, h.localDigits)(y(e.hour) + ':' + y(e.minute)),
                  ],
                }),
                (0, f.jsx)(s.Copy, {
                  style: {
                    fontSize: 12,
                    color: z < 0 && 'past' !== L ? j.danger : j.muted,
                  },
                  children: E,
                }),
              ],
            }),
            'none' !== L &&
              (0, f.jsx)(s.Segmented, {
                compact: !0,
                value: I,
                onChange: R,
                items: [
                  {
                    value: 'quick',
                    label:
                      'past' === L
                        ? (0, h.L)(
                            '\u0686\u0646\u062f \u0631\u0648\u0632 \u067e\u06cc\u0634',
                          )
                        : (0, h.L)(
                            '\u0686\u0646\u062f \u0631\u0648\u0632 \u062f\u06cc\u06af\u0631',
                          ),
                    testID: g + '-tab-quick',
                  },
                  {
                    value: 'wheel',
                    label: (0, h.L)(
                      '\u0627\u0646\u062a\u062e\u0627\u0628 \u062a\u0627\u0631\u06cc\u062e',
                    ),
                    testID: g + '-tab-wheel',
                  },
                ],
              }),
            'quick' === I &&
              'none' !== L &&
              (0, f.jsxs)(l.default, {
                style: { gap: 8 },
                children: [
                  (0, f.jsx)(o.default, {
                    horizontal: !0,
                    ...m.noSwipe,
                    showsHorizontalScrollIndicator: !1,
                    keyboardShouldPersistTaps: 'handled',
                    contentContainerStyle: {
                      flexDirection: 'row',
                      direction: 'ltr',
                      gap: 8,
                      flexGrow: 1,
                    },
                    children: ('past' === L ? [...V].reverse() : V).map((t) => {
                      const o = v(_ * t),
                        l =
                          o.year === e.year &&
                          o.month === e.month &&
                          o.day === e.day;
                      return (0, f.jsx)(
                        n.default,
                        {
                          testID: g + '-days-' + t,
                          accessibilityRole: 'button',
                          accessibilityState: { selected: l },
                          onPress: () => w(o),
                          style: ({ pressed: e }) => ({
                            paddingHorizontal: 14,
                            height: 38,
                            borderRadius: 12,
                            justifyContent: 'center',
                            backgroundColor: l ? j.accent : j.surface,
                            borderWidth: 1,
                            borderColor: l ? j.accent : j.line,
                            opacity: e ? 0.85 : 1,
                          }),
                          children: (0, f.jsx)(s.Copy, {
                            style: {
                              fontSize: 13,
                              color: l ? j.onAccent : j.text,
                            },
                            children: H(t),
                          }),
                        },
                        t,
                      );
                    }),
                  }),
                  (0, f.jsxs)(l.default, {
                    style: {
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      gap: 8,
                    },
                    children: [
                      (0, f.jsx)(l.default, {
                        style: { flex: 1 },
                        children: (0, f.jsx)(s.Input, {
                          testID: g + '-days-input',
                          value: M,
                          onChangeText: T,
                          keyboardType: 'number-pad',
                          inputMode: 'numeric',
                          maxLength: 4,
                          placeholder:
                            'past' === L
                              ? (0, h.L)(
                                  '\u0686\u0646\u062f \u0631\u0648\u0632 \u067e\u06cc\u0634\u061f \u0645\u062b\u0644\u0627\u064b \u06f4\u06f5',
                                )
                              : (0, h.L)(
                                  '\u0686\u0646\u062f \u0631\u0648\u0632 \u062f\u06cc\u06af\u0631\u061f \u0645\u062b\u0644\u0627\u064b \u06f4\u06f5',
                                ),
                          onSubmitEditing: () => {
                            Number.isInteger(q) &&
                              q >= 0 &&
                              q <= 3650 &&
                              w(v(_ * q));
                          },
                        }),
                      }),
                      (0, f.jsx)(n.default, {
                        testID: g + '-days-apply',
                        accessibilityRole: 'button',
                        disabled: !(
                          Number.isInteger(q) &&
                          q >= 0 &&
                          q <= 3650 &&
                          M.trim()
                        ),
                        onPress: () => w(v(_ * q)),
                        style: ({ pressed: e }) => ({
                          height: 44,
                          paddingHorizontal: 16,
                          borderRadius: 12,
                          justifyContent: 'center',
                          backgroundColor: j.accent,
                          opacity: M.trim() ? (e ? 0.85 : 1) : 0.4,
                        }),
                        children: (0, f.jsx)(s.Copy, {
                          style: {
                            color: j.onAccent,
                            fontFamily: 'Vazirmatn_600SemiBold',
                          },
                          children: (0, h.L)('\u062a\u0627\u06cc\u06cc\u062f'),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ('wheel' === I || 'none' === L) &&
              (0, f.jsx)(l.default, {
                style: { gap: 8 },
                children: (0, f.jsxs)(l.default, {
                  style: {
                    flexDirection: 'row',
                    direction: 'ltr',
                    gap: 6,
                    paddingHorizontal: 6,
                    paddingVertical: 2,
                    borderRadius: 14,
                    backgroundColor: j.surface,
                    borderWidth: 1,
                    borderColor: j.line,
                  },
                  children: [
                    (0, f.jsx)(C, {
                      testID: g + '-year',
                      label: i.fa.year,
                      items: A,
                      value: e.year,
                      onChange: (e) => w({ year: e }),
                    }),
                    (0, f.jsx)(C, {
                      testID: g + '-month',
                      label: i.fa.month,
                      items: B,
                      value: e.month,
                      onChange: (e) => w({ month: e }),
                    }),
                    (0, f.jsx)(C, {
                      testID: g + '-day',
                      label: i.fa.day,
                      items: F,
                      value: e.day,
                      onChange: (e) => w({ day: e }),
                    }),
                  ],
                }),
              }),
            !S &&
              (0, f.jsxs)(l.default, {
                style: {
                  flexDirection: 'row',
                  direction: 'ltr',
                  gap: 6,
                  paddingHorizontal: 6,
                  paddingVertical: 2,
                  borderRadius: 14,
                  backgroundColor: j.surface,
                  borderWidth: 1,
                  borderColor: j.line,
                },
                children: [
                  (0, f.jsx)(C, {
                    testID: g + '-hour',
                    label: i.fa.hour,
                    items: P,
                    value: e.hour,
                    onChange: (e) => w({ hour: e }),
                  }),
                  (0, f.jsx)(C, {
                    testID: g + '-minute',
                    label: i.fa.minute,
                    items: W,
                    value: e.minute,
                    onChange: (e) => w({ minute: e }),
                  }),
                ],
              }),
          ],
        });
      }));
    var t = r(_d[0]);
    r(_d[1]);
    var n = e(r(_d[2])),
      o = e(r(_d[3])),
      l = e(r(_d[4])),
      u = r(_d[5]),
      c = r(_d[6]),
      i = r(_d[7]),
      s = r(_d[8]),
      d = r(_d[9]),
      h = r(_d[10]),
      m = r(_d[11]),
      f = r(_d[12]);
    const y = (e) => String(e).padStart(2, '0'),
      g = 34,
      b = (e) => e.toLocaleString((0, h.numberLocale)(), { useGrouping: !1 });
    function p() {
      const e = (0, u.calParts)(new Date());
      return { year: e.year, month: e.month, day: e.day };
    }
    function x(e) {
      const t = (0, u.calToGregorian)(e.year, e.month, e.day);
      return Math.round(Date.UTC(t.year, t.month - 1, t.day) / 864e5);
    }
    function v(e) {
      const t = new Date(),
        n = new Date(t.getFullYear(), t.getMonth(), t.getDate() + e),
        o = (0, u.calFromGregorian)(
          n.getFullYear(),
          n.getMonth() + 1,
          n.getDate(),
        );
      return { year: o.year, month: o.month, day: o.day };
    }
    function C({
      items: e,
      value: u,
      onChange: i,
      testID: h,
      label: y,
      rowHeight: b = g,
      big: p = !1,
    }) {
      const x = b,
        v = p ? 5 : 3,
        C = (v - 1) / 2,
        { colors: S } = (0, c.useTheme)(),
        D = (0, t.useRef)(null),
        j = (0, t.useRef)(null),
        L = Math.max(
          0,
          e.findIndex((e) => e.value === u),
        ),
        I = (0, t.useContext)(d.SheetScrollLockContext),
        R = (0, t.useRef)(Symbol('date-wheel')),
        M = (0, t.useRef)(L * x),
        T = (0, t.useRef)(!1),
        w = (0, t.useRef)(!1),
        k = (0, t.useRef)(!1),
        z = (0, t.useRef)(u),
        E = (0, t.useRef)(null),
        _ = (0, t.useRef)(e.length),
        V = (0, t.useRef)({ items: e, onChange: i });
      function H() {
        (null !== j.current && clearTimeout(j.current), (j.current = null));
      }
      V.current = { items: e, onChange: i };
      const A = (0, t.useRef)(null),
        B = (0, t.useRef)(0);
      function F() {
        (null !== A.current && clearTimeout(A.current), (A.current = null));
      }
      function P() {
        (F(),
          (A.current = setTimeout(() => {
            ((A.current = null),
              T.current && ++B.current < 10
                ? P()
                : ((B.current = 0), (T.current = !1), G()));
          }, 1200)));
      }
      function W(e) {
        (I(R.current, e), e ? ((B.current = 0), P()) : F());
      }
      function q(e) {
        e !== z.current &&
          ((z.current = e), (E.current = e), V.current.onChange(e));
      }
      function G() {
        (H(), (w.current = !1), (k.current = !1), W(!1));
        const e = V.current.items,
          t = Math.min(e.length - 1, Math.max(0, Math.round(M.current / x)));
        if (!e[t]) return;
        const n = t * x;
        (Math.abs(M.current - n) > 0.5 &&
          D.current?.scrollTo({ y: n, animated: !1 }),
          (M.current = n),
          q(e[t].value));
      }
      function N() {
        (H(), T.current || (j.current = setTimeout(G, 140)));
      }
      function O(t) {
        (H(),
          (T.current = !1),
          (w.current = !1),
          (k.current = !1),
          W(!1),
          (M.current = t * x),
          D.current?.scrollTo({ y: M.current, animated: !1 }),
          q(e[t].value));
      }
      return (
        (0, t.useEffect)(() => {
          const t = E.current === u && _.current === e.length;
          ((E.current = null),
            (_.current = e.length),
            t ||
              (H(),
              (z.current = u),
              (M.current = L * x),
              (w.current = !1),
              (k.current = !1),
              I(R.current, !1),
              D.current?.scrollTo({ y: L * x, animated: !1 })));
        }, [L, u, e.length, I]),
        (0, t.useEffect)(() => {
          const e = R.current;
          return () => {
            (H(), F(), I(e, !1));
          };
        }, [I]),
        (0, f.jsxs)(l.default, {
          style: { flex: 1, minWidth: 0, alignItems: 'stretch' },
          children: [
            !!y &&
              (0, f.jsx)(s.Copy, {
                style: {
                  fontSize: 10,
                  lineHeight: 16,
                  color: S.muted,
                  textAlign: 'center',
                  marginBottom: 2,
                },
                children: y,
              }),
            (0, f.jsxs)(l.default, {
              testID: h,
              style: { height: x * v, overflow: 'hidden' },
              children: [
                (0, f.jsx)(l.default, {
                  pointerEvents: 'none',
                  style: p
                    ? {
                        position: 'absolute',
                        top: x * C,
                        left: 0,
                        right: 0,
                        height: x,
                        borderRadius: 12,
                        backgroundColor: S.soft,
                      }
                    : {
                        position: 'absolute',
                        top: x * C,
                        left: 3,
                        right: 3,
                        height: x,
                        borderRadius: 12,
                        backgroundColor: S.accentSoft,
                        borderWidth: 1,
                        borderColor: S.accent,
                      },
                }),
                (0, f.jsx)(o.default, {
                  ref: D,
                  testID: h + '-scroll',
                  nestedScrollEnabled: !0,
                  showsVerticalScrollIndicator: !1,
                  keyboardShouldPersistTaps: 'handled',
                  onTouchStart: function () {
                    (m.swipeGuard.mark(),
                      H(),
                      (T.current = !0),
                      (w.current = !1),
                      (k.current = !1),
                      W(!0));
                  },
                  onTouchEnd: function () {
                    ((T.current = !1), w.current ? N() : w.current || G());
                  },
                  onTouchCancel: function () {
                    ((T.current = !1), w.current ? N() : w.current || W(!1));
                  },
                  onScrollBeginDrag: () => {
                    (H(), (w.current = !0), (k.current = !0), W(!0));
                  },
                  onScrollEndDrag: function (e) {
                    ((M.current = e.nativeEvent.contentOffset.y),
                      (T.current = !1),
                      (k.current = !1),
                      N());
                  },
                  onMomentumScrollBegin: () => {
                    (H(), (w.current = !0), W(!0));
                  },
                  onMomentumScrollEnd: (e) => {},
                  onScroll: function (e) {
                    ((M.current = e.nativeEvent.contentOffset.y),
                      null !== A.current && P(),
                      (w.current = !0),
                      W(!0),
                      N());
                  },
                  scrollEventThrottle: 16,
                  snapToInterval: void 0,
                  decelerationRate: 'normal',
                  disableIntervalMomentum: !1,
                  bounces: !1,
                  overScrollMode: 'never',
                  style: { overscrollBehaviorY: 'contain' },
                  contentContainerStyle: { paddingVertical: x * C },
                  children: e.map((e, t) => {
                    const o = e.value === u,
                      l = Math.abs(t - L);
                    return (0, f.jsx)(
                      n.default,
                      {
                        testID: h + '-' + e.value,
                        accessibilityRole: 'button',
                        accessibilityState: { selected: o },
                        onPress: () => O(t),
                        style: {
                          height: x,
                          alignItems: 'center',
                          justifyContent: 'center',
                        },
                        children: (0, f.jsx)(s.Copy, {
                          numberOfLines: 1,
                          style: p
                            ? {
                                fontSize: o ? 26 : 1 === l ? 20 : 17,
                                lineHeight: Math.round(0.8 * x),
                                color: o ? S.text : S.muted,
                                opacity: o ? 1 : 1 === l ? 0.75 : 0.4,
                                fontFamily: o
                                  ? 'Vazirmatn_700Bold'
                                  : 'Vazirmatn_500Medium',
                                textAlign: 'center',
                              }
                            : {
                                fontSize: o ? 17 : 14,
                                color: o ? S.text : S.muted,
                                fontFamily: o ? 'Vazirmatn_700Bold' : void 0,
                              },
                          children: e.label,
                        }),
                      },
                      e.value,
                    );
                  }),
                }),
              ],
            }),
          ],
        })
      );
    }
  },
  619,
  [2, 94, 232, 123, 99, 440, 382, 492, 407, 539, 311, 384, 338],
);
