// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 407; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.Copy = H),
      (_e.Card = function ({ style: e, ...t }) {
        const { mode: n, colors: o } = (0, S.useTheme)();
        return (0, v.jsx)(x.default, {
          ...t,
          style: [
            W.card,
            { backgroundColor: o.surface, borderColor: o.line },
            'light' === n && {
              boxShadow:
                '0 1px 2px rgba(17,17,20,.04), 0 8px 24px rgba(17,17,20,.05)',
            },
            e,
          ],
        });
      }),
      Object.defineProperty(_e, 'Input', {
        enumerable: !0,
        get: function () {
          return k;
        },
      }),
      (_e.DangerLink = function ({ children: e, onPress: t, testID: n }) {
        const { colors: l } = (0, S.useTheme)();
        return (0, v.jsx)(f.default, {
          testID: n,
          accessibilityRole: 'button',
          hitSlop: 8,
          onPress: () => {
            t();
          },
          style: ({ pressed: e }) => ({
            minHeight: 44,
            paddingHorizontal: 12,
            alignItems: 'center',
            justifyContent: 'center',
            opacity: e ? 0.6 : 1,
          }),
          children: (0, v.jsx)(H, {
            style: {
              fontSize: 14,
              lineHeight: 22,
              color: l.danger,
              fontFamily: o.tokens.font.semibold,
              textAlign: 'center',
            },
            children: e,
          }),
        });
      }),
      Object.defineProperty(_e, 'DARK_DANGER_FILL', {
        enumerable: !0,
        get: function () {
          return F;
        },
      }),
      (_e.Button = function ({
        children: e,
        onPress: n,
        secondary: u,
        ghost: b,
        danger: y,
        disabled: p,
        testID: j,
        wide: w,
      }) {
        const { colors: C, mode: R } = (0, S.useTheme)(),
          [I, k] = (0, t.useState)(!1),
          [T, _] = (0, t.useState)(''),
          [L, P] = (0, t.useState)(''),
          A = (0, t.useRef)(!1),
          E = 'dark' === R ? F : C.danger;
        async function V() {
          if (!A.current && !p) {
            ((A.current = !0), k(!0), _(''), P(''));
            try {
              await n();
            } catch (e) {
              (_((0, s.message)(e)),
                P((0, c.describeError)(e).requestId || ''));
            } finally {
              ((A.current = !1), k(!1));
            }
          }
        }
        const M = w || (!u && !b && !y),
          O = !u && !b && !y;
        return (0, v.jsxs)(x.default, {
          style: [{ gap: 4 }, M ? D : B],
          children: [
            (0, v.jsx)(f.default, {
              testID: j,
              accessibilityRole: 'button',
              accessibilityState: { disabled: !!p || I, busy: I },
              disabled: p || I,
              onPress: () => {
                V();
              },
              style: ({ pressed: e }) => [
                W.button,
                {
                  backgroundColor: b
                    ? 'transparent'
                    : y
                      ? E
                      : u
                        ? C.soft
                        : C.brand[1],
                  borderWidth: b || O ? 0 : h.default.hairlineWidth,
                  borderColor: b ? 'transparent' : y ? E : C.line,
                  opacity: p || I ? 0.4 : 1,
                  transform: [{ scale: !e || p || I ? 1 : 0.98 }],
                },
              ],
              children: ({ pressed: t }) =>
                (0, v.jsxs)(v.Fragment, {
                  children: [
                    O &&
                      (0, v.jsx)(l.BrandFill, {
                        radius: W.button.borderRadius,
                        pressed: t,
                      }),
                    !u &&
                      !b &&
                      (0, v.jsx)(x.default, {
                        pointerEvents: 'none',
                        style: W.innerHighlight,
                      }),
                    (0, v.jsx)(H, {
                      style: {
                        color: y ? '#ffffff' : u || b ? C.text : C.onBrand,
                        textAlign: 'center',
                        fontFamily: o.tokens.font.semibold,
                      },
                      children: I
                        ? (0, z.L)(
                            '\u062f\u0631 \u062d\u0627\u0644 \u0627\u0646\u062c\u0627\u0645\u2026',
                          )
                        : e,
                    }),
                  ],
                }),
            }),
            !!T &&
              (0, v.jsx)(H, {
                accessibilityRole: 'alert',
                style: { color: C.danger },
                children: T,
              }),
            !!T &&
              !!L &&
              (0, v.jsx)(H, {
                selectable: !0,
                style: { fontSize: 11, lineHeight: 18, color: C.muted },
                children: (0, z.L)(
                  '\u06a9\u062f \u067e\u06cc\u06af\u06cc\u0631\u06cc: {code}',
                  { code: L },
                ),
              }),
          ],
        });
      }),
      (_e.PageTitle = function ({ title: e, sub: t, style: n }) {
        const { colors: o } = (0, S.useTheme)();
        return (0, v.jsxs)(x.default, {
          style: [{ gap: 4, marginBottom: 4 }, n],
          children: [
            (0, v.jsx)(H, {
              accessibilityRole: 'header',
              style: {
                fontSize: 24,
                lineHeight: 32,
                fontFamily: 'Vazirmatn_700Bold',
              },
              children: e,
            }),
            !!t &&
              (0, v.jsx)(H, {
                style: { fontSize: 12, lineHeight: 18, color: o.muted },
                children: t,
              }),
          ],
        });
      }),
      (_e.SectionTitle = function ({ title: e, sub: t, style: n }) {
        const { colors: o } = (0, S.useTheme)();
        return (0, v.jsxs)(x.default, {
          style: [{ gap: 2, marginBottom: 4 }, n],
          children: [
            (0, v.jsx)(H, {
              accessibilityRole: 'header',
              style: {
                fontSize: 20,
                lineHeight: 28,
                fontFamily: 'Vazirmatn_700Bold',
              },
              children: e,
            }),
            !!t &&
              (0, v.jsx)(H, {
                style: { fontSize: 13, lineHeight: 20, color: o.muted },
                children: t,
              }),
          ],
        });
      }),
      (_e.IconKey = function ({
        icon: e,
        onPress: t,
        accessibilityLabel: n,
        testID: o,
        size: l = 48,
        iconSize: s,
      }) {
        const { colors: c } = (0, S.useTheme)();
        return (0, v.jsx)(f.default, {
          testID: o,
          accessibilityRole: 'button',
          accessibilityLabel: n,
          onPress: () => {
            t();
          },
          style: ({ pressed: e }) => ({
            width: l,
            height: l,
            borderRadius: 12,
            borderWidth: h.default.hairlineWidth,
            borderColor: c.line,
            backgroundColor: c.soft,
            alignItems: 'center',
            justifyContent: 'center',
            opacity: e ? 0.85 : 1,
          }),
          children: (0, v.jsx)(w.Icon, {
            name: e,
            size: s ?? (l >= 44 ? 21 : 18),
            color: c.text,
          }),
        });
      }),
      (_e.Segmented = function ({
        items: e,
        value: n,
        onChange: o,
        height: s = 36,
        scroll: c = !1,
        role: u = 'button',
        style: b,
        compact: y = !1,
        numberLine: w = !1,
      }) {
        const z = w
            ? { flexDirection: 'row', direction: 'ltr' }
            : { flexDirection: 'row-reverse' },
          { colors: C } = (0, S.useTheme)(),
          I = (0, j.useDesktop)(),
          k = (0, t.useRef)(null),
          D = (0, t.useRef)(new Map()),
          B = (0, t.useRef)(0);
        function F() {
          const e = D.current.get(String(n));
          c &&
            e &&
            B.current &&
            k.current?.scrollTo({
              x: Math.max(0, e.x - (B.current - e.width) / 2),
              animated: !1,
            });
        }
        (0, t.useEffect)(F, [n]);
        const T = e.map((e) => {
            const t = e.value === n,
              h = t && !!e.spark,
              b = c ? {} : { flexGrow: 1, flexBasis: 0 },
              p = (0, v.jsxs)(
                f.default,
                {
                  testID: e.testID,
                  accessibilityRole: u,
                  accessibilityHint: e.hint,
                  accessibilityState: { selected: t },
                  onLayout: (n) => {
                    (D.current.set(String(e.value), {
                      x: n.nativeEvent.layout.x,
                      width: n.nativeEvent.layout.width,
                    }),
                      t && F());
                  },
                  onPress: () => o(e.value),
                  style: ({ pressed: e }) => ({
                    ...(h ? {} : b),
                    height: s - 8,
                    minWidth: y ? 0 : 52,
                    paddingHorizontal: c ? 14 : y ? 2 : 8,
                    borderRadius: 12,
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                    overflow: 'hidden',
                    backgroundColor: t ? C.brand[1] : 'transparent',
                    opacity: e && !t ? 0.75 : 1,
                  }),
                  children: [
                    t && (0, v.jsx)(l.BrandFill, { radius: 12 }),
                    (0, v.jsx)(H, {
                      numberOfLines: y ? void 0 : 1,
                      style: {
                        fontSize: y ? 12 : 13,
                        lineHeight: 20,
                        textAlign: 'center',
                        color: t ? C.onBrand : C.text,
                        fontFamily: t
                          ? 'Vazirmatn_600SemiBold'
                          : 'Vazirmatn_400Regular',
                      },
                      children: e.label,
                    }),
                    !!e.badge &&
                      (0, v.jsx)(x.default, {
                        style: {
                          minWidth: 18,
                          height: 18,
                          borderRadius: 9,
                          paddingHorizontal: 5,
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: t ? C.onBrand : C.accent,
                        },
                        children: (0, v.jsx)(H, {
                          style: {
                            fontSize: 10,
                            lineHeight: 16,
                            textAlign: 'center',
                            color: t ? C.brand[0] : C.onAccent,
                            fontFamily: 'Vazirmatn_600SemiBold',
                          },
                          children: e.badge,
                        }),
                      }),
                    e.dot &&
                      !e.badge &&
                      (0, v.jsx)(x.default, {
                        style: [
                          {
                            width: 7,
                            height: 7,
                            borderRadius: 4,
                            backgroundColor: t ? C.onBrand : C.accent,
                          },
                          y && { position: 'absolute', top: 4, left: 4 },
                        ],
                      }),
                  ],
                },
                String(e.value),
              );
            return h
              ? (0, v.jsx)(
                  l.Spark,
                  { radius: 12, turns: 3, style: b, children: p },
                  String(e.value),
                )
              : p;
          }),
          W = {
            backgroundColor: C.soft,
            borderWidth: h.default.hairlineWidth,
            borderColor: C.line,
            borderRadius: 14,
          },
          _ = I &&
            !b && {
              width: '100%',
              maxWidth: Math.max(300, 120 * e.length),
              alignSelf: 'flex-end',
            };
        return c
          ? (0, v.jsx)(x.default, {
              style: [W, { height: s }, b],
              children: (0, v.jsx)(p.ScrollView, {
                ref: k,
                horizontal: !0,
                ...R.noSwipe,
                showsHorizontalScrollIndicator: !1,
                onLayout: (e) => {
                  ((B.current = e.nativeEvent.layout.width), F());
                },
                accessibilityRole: 'tab' === u ? 'tablist' : void 0,
                contentContainerStyle: {
                  ...z,
                  gap: 4,
                  padding: 4,
                  flexGrow: 1,
                },
                children: T,
              }),
            })
          : (0, v.jsx)(x.default, {
              accessibilityRole: 'tab' === u ? 'tablist' : void 0,
              style: [
                W,
                z,
                { gap: y ? 2 : 4, padding: y ? 3 : 4, height: s },
                _,
                b,
              ],
              children: T,
            });
      }),
      Object.defineProperty(_e, 'common', {
        enumerable: !0,
        get: function () {
          return T;
        },
      }));
    var t = r(d[0]),
      n = r(d[1]),
      o = r(d[2]),
      l = r(d[3]),
      s = r(d[4]),
      c = r(d[5]),
      u = r(d[6]);
    r(d[7]);
    var f = e(r(d[8])),
      h = e(r(d[9])),
      b = e(r(d[10])),
      y = e(r(d[11])),
      x = e(r(d[12])),
      p = r(d[13]),
      S = r(d[14]),
      j = r(d[15]),
      w = r(d[16]),
      z = r(d[17]),
      C = r(d[18]),
      R = r(d[19]),
      v = r(d[20]);
    function H({ style: e, children: o, ...l }) {
      const { colors: s } = (0, S.useTheme)(),
        { scale: c, shown: u } = (0, t.useContext)(n.LargeTextContext),
        f = h.default.flatten([W.text, { color: s.text }, e]);
      return (0, v.jsx)(b.default, {
        ...l,
        style: (0, z.textFlow)(f),
        children:
          'string' != typeof o || (0, z.flipped)() ? o : (0, C.rtlStart)(o),
      });
    }
    function I() {
      if (
        'undefined' == typeof document ||
        document.getElementById('anbari-placeholder-font')
      )
        return;
      const e = document.createElement('style');
      ((e.id = 'anbari-placeholder-font'),
        (e.textContent =
          'input::placeholder,textarea::placeholder{font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;letter-spacing:inherit}'),
        document.head.appendChild(e));
    }
    const k = (0, t.forwardRef)(function (
      {
        style: e,
        ltr: n = !1,
        onFocus: o,
        onBlur: l,
        onTouchStart: s,
        placeholderTextColor: c,
        placeholder: f,
        ...b
      },
      x,
    ) {
      const { colors: p } = (0, S.useTheme)();
      I();
      const [j, w] = (0, t.useState)(!1);
      return (0, v.jsx)(y.default, {
        ref: x,
        ...b,
        onTouchStart: (e) => {
          (j && R.swipeGuard.mark(), s?.(e));
        },
        placeholder: !f || n || (0, z.flipped)() ? f : (0, C.isolateLatin)(f),
        onFocus: (e) => {
          ((0, u.revealRoom)(0), w(!0), o?.(e), (0, u.inputFocused)());
        },
        onBlur: (e) => {
          ((0, u.revealRoom)(0), w(!1), l?.(e));
        },
        placeholderTextColor: c ?? p.muted,
        style: (0, z.textFlow)(
          h.default.flatten([
            W.input,
            {
              color: p.text,
              backgroundColor: p.soft,
              borderWidth: j ? 1 : h.default.hairlineWidth,
              borderColor: j ? p.accent : p.line,
            },
            n && { textAlign: 'left', writingDirection: 'ltr' },
            e,
          ]),
          !0,
        ),
      });
    });
    const D = {
        width: '100%',
        maxWidth: 420,
        alignSelf: 'center',
        flexShrink: 1,
      },
      B = { alignSelf: 'flex-end', maxWidth: '100%' },
      F = '#b3261e';
    const T = h.default.create({
        row: { flexDirection: 'row-reverse', gap: 10, alignItems: 'center' },
        between: {
          flexDirection: 'row-reverse',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 10,
        },
        gap: { gap: 12 },
        label: { fontSize: 12 },
        title: {
          fontSize: 24,
          lineHeight: 32,
          fontFamily: 'Vazirmatn_700Bold',
        },
        small: { fontSize: 12, lineHeight: 23 },
        flex: { flex: 1 },
      }),
      W = h.default.create({
        text: {
          fontFamily: o.tokens.font.regular,
          fontSize: 15,
          textAlign: 'right',
          writingDirection: 'rtl',
          lineHeight: 24,
        },
        card: {
          borderRadius: 20,
          borderWidth: h.default.hairlineWidth,
          padding: 16,
          gap: 12,
          overflow: 'hidden',
        },
        input: {
          fontFamily: o.tokens.font.regular,
          textAlign: 'right',
          fontSize: 15,
          lineHeight: 24,
          paddingHorizontal: 16,
          paddingVertical: 12,
          minHeight: 48,
          borderRadius: 14,
        },
        button: {
          minHeight: 48,
          borderRadius: 14,
          paddingHorizontal: 20,
          paddingVertical: 10,
          justifyContent: 'center',
          overflow: 'hidden',
        },
        innerHighlight: {
          position: 'absolute',
          top: 1,
          left: 14,
          right: 14,
          height: 1,
          backgroundColor: '#ffffff8c',
          borderRadius: 1,
        },
      });
  },
  407,
  [
    2, 408, 409, 410, 415, 429, 480, 94, 232, 17, 178, 242, 99, 380, 382, 481,
    385, 1, 483, 384, 338,
  ],
);
