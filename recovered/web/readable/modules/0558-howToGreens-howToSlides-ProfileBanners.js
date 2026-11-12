// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 558; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'howToGreens', {
        enumerable: !0,
        get: function () {
          return C;
        },
      }),
      (_e.howToSlides = w),
      (_e.ProfileBanners = function ({
        onAction: e,
        showStaff: n = !1,
        showConnector: o = !1,
        interval: l = 5e3,
      }) {
        const s = (0, t.useMemo)(() => w(n, o), [n, o]);
        return (0, v.jsx)(
          j,
          { slides: s, onAction: e, interval: l },
          `${n}-${o}`,
        );
      }));
    var t = r(d[0]),
      n = e(r(d[1])),
      o = e(r(d[2]));
    r(d[3]);
    var l = e(r(d[4])),
      s = e(r(d[5])),
      u = e(r(d[6])),
      c = r(d[7]),
      f = r(d[8]),
      h = r(d[9]),
      b = r(d[10]),
      x = r(d[11]),
      p = r(d[12]),
      y = r(d[13]),
      v = r(d[14]);
    const C = {
      light: ['#0b7f74', b.ACCENT.light, b.ACCENT.dark],
      dark: [b.ACCENT.focus, '#0b7f74', b.ACCENT.light],
    };
    function w(e, t) {
      return p.profileHowTo.filter((n) =>
        'owner' === n.who ? e : 'manager' !== n.who || t,
      );
    }
    function j({ slides: e, onAction: p, interval: w }) {
      const { colors: j, mode: S } = (0, b.useTheme)(),
        T = (0, h.useReducedMotion)(),
        [L, k] = (0, t.useState)({
          index: 0,
          previous: 0,
          direction: 1,
          revision: 0,
        }),
        [E, P] = (0, t.useState)(0),
        [M, V] = (0, t.useState)(!1),
        [A, z] = (0, t.useState)(0),
        H = (0, t.useRef)(new n.default.Value(1)).current,
        I = (0, t.useRef)(L.revision),
        O = (0, t.useRef)(null),
        _ = (0, t.useRef)(!1),
        W = (0, t.useRef)(!1),
        D = (0, t.useCallback)(() => {
          null !== O.current && (clearTimeout(O.current), (O.current = null));
        }, []),
        F = (0, t.useCallback)(() => {
          ((_.current = !0), D(), V(!0));
        }, [D]),
        N = (0, t.useCallback)(() => {
          W.current || ((_.current = !1), V(!1), z((e) => e + 1));
        }, []),
        B = (0, t.useCallback)(
          (t, n = !1) => {
            (D(),
              k((o) => {
                const l = ((n ? o.index + t : t) + e.length) % e.length;
                return {
                  index: l,
                  previous: o.index,
                  direction: n ? Math.sign(t) : l > o.index ? 1 : -1,
                  revision: o.revision + 1,
                };
              }));
          },
          [D, e.length],
        );
      ((0, t.useEffect)(
        () => (
          !M &&
            !_.current &&
            e.length > 1 &&
            (O.current = setTimeout(() => {
              _.current || B(1, !0);
            }, w)),
          D
        ),
        [B, D, w, L.revision, M, A, e.length],
      ),
        (0, t.useLayoutEffect)(() => {
          I.current !== L.revision
            ? ((I.current = L.revision),
              H.stopAnimation(),
              !T && E && L.index !== L.previous
                ? (H.setValue(0),
                  n.default
                    .timing(H, {
                      toValue: 1,
                      duration: 260,
                      useNativeDriver: !1,
                    })
                    .start())
                : H.setValue(1))
            : T && (H.stopAnimation(), H.setValue(1));
        }, [L.index, L.previous, L.revision, T, E, H]),
        (0, t.useEffect)(() => () => H.stopAnimation(), [H]));
      const $ = (0, t.useMemo)(
        () =>
          o.default.create({
            onMoveShouldSetPanResponderCapture: (e, t) =>
              Math.abs(t.dx) > 8 && Math.abs(t.dx) > 1.3 * Math.abs(t.dy),
            onPanResponderGrant: () => {
              ((W.current = !0), F());
            },
            onPanResponderRelease: (e, t) => {
              (Math.abs(t.dx) > 32 && B(t.dx > 0 ? 1 : -1, !0),
                (W.current = !1),
                N());
            },
            onPanResponderTerminate: () => {
              ((W.current = !1), N());
            },
            onPanResponderTerminationRequest: () => !0,
          }),
        [B, F, N],
      );
      if (!e.length) return null;
      const G = C['dark' === S ? 'dark' : 'light'];
      return (0, v.jsxs)(u.default, {
        testID: 'profile-banners',
        style: R.root,
        onTouchStart: F,
        onTouchEnd: (e) => {
          e.nativeEvent.touches.length || N();
        },
        onTouchCancel: N,
        children: [
          (0, v.jsx)(u.default, {
            ...$.panHandlers,
            ...y.noSwipe,
            onLayout: (e) => P(e.nativeEvent.layout.width),
            style: [R.frame, { userSelect: 'none' }],
            children: (0, v.jsxs)(u.default, {
              style: [R.box, { backgroundColor: G[1] }],
              children: [
                (0, v.jsx)(c.LinearGradient, {
                  pointerEvents: 'none',
                  colors: [...G],
                  start: { x: 1, y: 0 },
                  end: { x: 0, y: 1 },
                  style: s.default.absoluteFill,
                }),
                (0, v.jsx)(u.default, {
                  pointerEvents: 'none',
                  style: [R.glowLeft, { filter: 'blur(30px)' }],
                }),
                (0, v.jsx)(u.default, {
                  pointerEvents: 'none',
                  style: R.highlight,
                }),
                e.map((e, t) => {
                  const o = t === L.index,
                    s = t === L.previous && t !== L.index && !T,
                    c = T
                      ? 0
                      : H.interpolate({
                          inputRange: [0, 1],
                          outputRange: o
                            ? [-L.direction * E, 0]
                            : [0, L.direction * E],
                        });
                  return (0, v.jsx)(
                    u.default,
                    {
                      testID: 'banner-' + e.id,
                      pointerEvents: o ? 'auto' : 'none',
                      'aria-hidden': !o,
                      accessibilityElementsHidden: !o,
                      importantForAccessibility: o
                        ? 'auto'
                        : 'no-hide-descendants',
                      style: [R.slide, { display: o || s ? 'flex' : 'none' }],
                      children: (0, v.jsx)(u.default, {
                        style: R.copy,
                        children: (0, v.jsxs)(n.default.View, {
                          style: [
                            R.copyContent,
                            { transform: [{ translateX: c }] },
                          ],
                          children: [
                            (0, v.jsx)(u.default, {
                              style: R.tag,
                              children: (0, v.jsx)(x.Copy, {
                                selectable: !1,
                                numberOfLines: 1,
                                style: R.tagText,
                                children: (0, f.L)(
                                  '\u0622\u0645\u0648\u0632\u0634',
                                ),
                              }),
                            }),
                            (0, v.jsx)(x.Copy, {
                              selectable: !1,
                              numberOfLines: 1,
                              style: R.title,
                              children: (0, f.L)(e.title),
                            }),
                            (0, v.jsx)(x.Copy, {
                              selectable: !1,
                              numberOfLines: 2,
                              style: R.body,
                              children: (0, f.L)(e.text),
                            }),
                            (0, v.jsx)(l.default, {
                              testID: 'banner-cta-' + e.id,
                              accessibilityRole: 'button',
                              accessibilityLabel: `${(0, f.L)(e.title)}: ${(0, f.L)(e.cta)}`,
                              focusable: o,
                              tabIndex: o ? 0 : -1,
                              onPressIn: F,
                              onPressOut: N,
                              onPress: () => p(e.action),
                              style: ({ pressed: e }) => [
                                R.cta,
                                { opacity: e ? 0.85 : 1 },
                              ],
                              children: (0, v.jsx)(x.Copy, {
                                selectable: !1,
                                numberOfLines: 1,
                                style: [R.ctaText, { color: G[0] }],
                                children: (0, f.L)(e.cta),
                              }),
                            }),
                          ],
                        }),
                      }),
                    },
                    e.id,
                  );
                }),
              ],
            }),
          }),
          (0, v.jsx)(u.default, {
            style: R.dots,
            children: e.map((e, t) =>
              (0, v.jsx)(
                l.default,
                {
                  testID: 'banner-dot-' + t,
                  accessibilityRole: 'button',
                  accessibilityLabel: (0, f.L)(e.title),
                  accessibilityState: { selected: t === L.index },
                  onPressIn: F,
                  onPressOut: N,
                  onPress: () => B(t),
                  style: R.dotKey,
                  children: (0, v.jsx)(u.default, {
                    style: {
                      height: 6,
                      width: t === L.index ? 20 : 6,
                      borderRadius: 3,
                      backgroundColor: t === L.index ? j.accent : j.line,
                    },
                  }),
                },
                e.id,
              ),
            ),
          }),
        ],
      });
    }
    const R = s.default.create({
      root: { width: '100%', minWidth: 0, marginTop: 4, overflow: 'visible' },
      frame: { height: 150, overflow: 'visible' },
      box: {
        height: 150,
        borderRadius: 22,
        borderWidth: s.default.hairlineWidth,
        borderColor: 'rgba(255,255,255,.18)',
        overflow: 'hidden',
      },
      glowLeft: {
        position: 'absolute',
        width: 200,
        height: 200,
        borderRadius: 100,
        top: -40,
        left: -60,
        backgroundColor: '#99f6e4',
        opacity: 0.28,
      },
      highlight: {
        position: 'absolute',
        top: 0,
        left: 22,
        right: 22,
        height: 1,
        backgroundColor: 'rgba(255,255,255,.25)',
      },
      slide: {
        ...s.default.absoluteFill,
        direction: 'ltr',
        flexDirection: 'row-reverse',
        alignItems: 'stretch',
        paddingRight: 16,
        paddingLeft: 16,
      },
      copy: { flex: 1, minWidth: 0, marginLeft: 36, overflow: 'hidden' },
      copyContent: {
        flex: 1,
        minWidth: 0,
        paddingVertical: 8,
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: 3,
      },
      tag: {
        maxWidth: '100%',
        paddingHorizontal: 8,
        borderRadius: 999,
        backgroundColor: 'rgba(255,255,255,.18)',
        borderWidth: s.default.hairlineWidth,
        borderColor: 'rgba(255,255,255,.3)',
      },
      tagText: {
        fontSize: 11,
        lineHeight: 18,
        fontFamily: 'Vazirmatn_600SemiBold',
        color: '#ffffff',
      },
      title: {
        alignSelf: 'stretch',
        fontSize: 21,
        lineHeight: 30,
        fontFamily: 'Vazirmatn_900Black',
        color: '#ffffff',
        textShadowColor: 'rgba(0,0,0,.18)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
      },
      body: {
        alignSelf: 'stretch',
        fontSize: 13,
        lineHeight: 20,
        fontFamily: 'Vazirmatn_500Medium',
        color: '#ffffff',
        textShadowColor: 'rgba(0,0,0,.15)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
      },
      cta: {
        maxWidth: '100%',
        minHeight: 32,
        marginTop: 4,
        paddingHorizontal: 14,
        paddingVertical: 5,
        borderRadius: 999,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
      },
      ctaText: {
        fontSize: 13,
        lineHeight: 20,
        fontFamily: 'Vazirmatn_700Bold',
      },
      dots: { flexDirection: 'row-reverse', justifyContent: 'center' },
      dotKey: {
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
  },
  558,
  [2, 92, 212, 94, 232, 17, 99, 411, 311, 414, 382, 407, 559, 384, 338],
);
