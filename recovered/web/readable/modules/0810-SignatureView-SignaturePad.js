// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 810; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.SignatureView = function ({ sign: e, ink: t, height: n = 44 }) {
        return (0, c.isSignature)(e)
          ? (0, y.jsx)(l.default, {
              testID: 'signature-view',
              width: '100%',
              height: n,
              viewBox: `0 0 ${e.w} ${e.h}`,
              preserveAspectRatio: 'xMidYMid meet',
              pointerEvents: 'none',
              children: (0, y.jsx)(i.Path, {
                d: e.d,
                fill: 'none',
                stroke: t,
                strokeWidth: 2,
                vectorEffect: 'non-scaling-stroke',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
            })
          : null;
      }),
      (_e.SignaturePad = function ({
        title: e,
        hint: S,
        existing: j,
        onDone: R,
        onCancel: b,
      }) {
        const { colors: P } = (0, p.useTheme)(),
          w = (0, u.useSafeAreaInsets)(),
          k = (0, t.useRef)([]),
          L = (0, t.useRef)(!1),
          M = (0, t.useRef)({ w: 0, h: 0 }),
          C = (0, t.useRef)({ x: 0, y: 0 }),
          B = (0, t.useRef)(null),
          D = (0, t.useRef)(null),
          E = (0, t.useRef)(null),
          [I, _] = (0, t.useState)([]),
          [A, $] = (0, t.useState)(''),
          [z, T] = (0, t.useState)(!0),
          W = (e) => {
            const t = D.current?.getBoundingClientRect?.(),
              n =
                t && 'undefined' != typeof window
                  ? { x: window.scrollX || 0, y: window.scrollY || 0 }
                  : { x: 0, y: 0 };
            return (0, f.padPoint)(
              e.nativeEvent,
              C.current,
              M.current,
              t || null,
              n,
            );
          },
          H = (e) => {
            const t = E.current;
            'function' != typeof t?.setNativeProps
              ? null === B.current &&
                (B.current = requestAnimationFrame(() => {
                  B.current = null;
                  const e = k.current[k.current.length - 1];
                  $(L.current && e ? v(e) : '');
                }))
              : t.setNativeProps({ style: { d: e } });
          },
          q = () => {
            if (!L.current) return;
            L.current = !1;
            const e = k.current[k.current.length - 1];
            (e && _((t) => [...t, v(e)]), $(''));
          },
          F = (0, t.useRef)(
            n.default.create({
              onStartShouldSetPanResponder: () => !0,
              onMoveShouldSetPanResponder: () => !0,
              onStartShouldSetPanResponderCapture: () => !0,
              onMoveShouldSetPanResponderCapture: () => !0,
              onPanResponderTerminationRequest: () => !1,
              onShouldBlockNativeResponder: () => !0,
              onPanResponderGrant: (e) => {
                (q(), (C.current = (0, f.padOrigin)(e.nativeEvent)));
                const t = [W(e)];
                (k.current.push(t), (L.current = !0), T(!1), H(v(t)));
              },
              onPanResponderMove: (e) => {
                const t = k.current[k.current.length - 1];
                t && L.current && (t.push(W(e)), H(v(t)));
              },
              onPanResponderRelease: () => q(),
              onPanResponderTerminate: () => q(),
            }),
          ).current;
        const N = {
          flex: 1,
          backgroundColor: '#ffffff',
          borderRadius: 16,
          borderWidth: 2,
          borderColor: P.accent,
          overflow: 'hidden',
          touchAction: 'none',
          userSelect: 'none',
        };
        return (0, y.jsx)(s.PageModal, {
          visible: !0,
          animationType: 'slide',
          presentationStyle: 'fullScreen',
          supportedOrientations: ['portrait', 'landscape'],
          onRequestClose: b,
          children: (0, y.jsxs)(o.default, {
            testID: 'signature-pad',
            style: {
              flex: 1,
              backgroundColor: P.bg,
              paddingTop: w.top + 12,
              paddingBottom: w.bottom + 12,
              paddingHorizontal: 14,
              gap: 10,
            },
            children: [
              (0, y.jsx)(h.Copy, {
                accessibilityRole: 'header',
                style: {
                  fontSize: 19,
                  lineHeight: 30,
                  fontFamily: 'Vazirmatn_700Bold',
                  textAlign: 'center',
                },
                children: e,
              }),
              (0, y.jsx)(h.Copy, {
                style: {
                  fontSize: 13,
                  lineHeight: 21,
                  color: P.muted,
                  textAlign: 'center',
                },
                children: S,
              }),
              (0, y.jsxs)(o.default, {
                ref: D,
                collapsable: !1,
                testID: 'signature-area',
                accessibilityLabel: e,
                onLayout: (e) => {
                  M.current = {
                    w: e.nativeEvent.layout.width,
                    h: e.nativeEvent.layout.height,
                  };
                },
                style: N,
                ...F.panHandlers,
                ...x.noSwipe,
                children: [
                  (0, y.jsx)(o.default, {
                    pointerEvents: 'none',
                    style: {
                      position: 'absolute',
                      left: 24,
                      right: 24,
                      bottom: '28%',
                      borderBottomWidth: 1,
                      borderStyle: 'dashed',
                      borderColor: '#9aa8ad',
                    },
                  }),
                  z &&
                    (0, y.jsx)(o.default, {
                      pointerEvents: 'none',
                      style: {
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: '40%',
                        alignItems: 'center',
                      },
                      children: (0, y.jsx)(h.Copy, {
                        style: { fontSize: 15, color: '#9aa8ad' },
                        children: (0, d.L)(
                          '\u0627\u06cc\u0646\u062c\u0627 \u0627\u0645\u0636\u0627 \u06a9\u0646\u06cc\u062f',
                        ),
                      }),
                    }),
                  (0, y.jsxs)(l.default, {
                    pointerEvents: 'none',
                    style: {
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                    },
                    width: '100%',
                    height: '100%',
                    children: [
                      I.map((e, t) =>
                        (0, y.jsx)(
                          i.Path,
                          {
                            d: e,
                            fill: 'none',
                            stroke: '#111111',
                            strokeWidth: 3,
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                          },
                          t,
                        ),
                      ),
                      (0, y.jsx)(
                        i.Path,
                        {
                          ref: E,
                          d: A,
                          fill: 'none',
                          stroke: '#111111',
                          strokeWidth: 3,
                          strokeLinecap: 'round',
                          strokeLinejoin: 'round',
                        },
                        'live' + I.length,
                      ),
                    ],
                  }),
                ],
              }),
              (0, y.jsxs)(o.default, {
                style: { flexDirection: 'row-reverse', gap: 8 },
                children: [
                  (0, y.jsx)(o.default, {
                    style: { flex: 1.3 },
                    children: (0, y.jsx)(h.Button, {
                      testID: 'signature-done',
                      disabled: z,
                      onPress: function () {
                        const e = (0, c.signatureFromStrokes)(
                          k.current,
                          M.current.w,
                          M.current.h,
                        );
                        e && R(e);
                      },
                      children: (0, d.L)(
                        '\u0627\u0646\u062c\u0627\u0645 \u0634\u062f',
                      ),
                    }),
                  }),
                  (0, y.jsx)(o.default, {
                    style: { flex: 1 },
                    children: (0, y.jsx)(h.Button, {
                      testID: 'signature-clear',
                      secondary: !0,
                      disabled: z,
                      onPress: function () {
                        ((k.current = []),
                          (L.current = !1),
                          _([]),
                          $(''),
                          T(!0));
                      },
                      children: (0, d.L)('\u067e\u0627\u06a9 \u06a9\u0646'),
                    }),
                  }),
                  (0, y.jsx)(o.default, {
                    style: { flex: 1 },
                    children: (0, y.jsx)(h.Button, {
                      testID: 'signature-cancel',
                      secondary: !0,
                      onPress: b,
                      children: (0, d.L)('\u0644\u063a\u0648'),
                    }),
                  }),
                ],
              }),
              j &&
                (0, y.jsx)(h.Button, {
                  testID: 'signature-remove',
                  ghost: !0,
                  onPress: () => R(null),
                  children: (0, d.L)(
                    '\u062d\u0630\u0641 \u0627\u0645\u0636\u0627\u06cc \u0630\u062e\u06cc\u0631\u0647\u200c\u0634\u062f\u0647',
                  ),
                }),
            ],
          }),
        });
      }));
    var t = r(_d[0]),
      n = e(r(_d[1]));
    r(_d[2]);
    var o = e(r(_d[3])),
      s = r(_d[4]),
      i = r(_d[5]),
      l = e(i),
      u = r(_d[6]),
      d = r(_d[7]),
      c = r(_d[8]),
      h = r(_d[9]),
      f = r(_d[10]),
      p = r(_d[11]),
      x = r(_d[12]),
      y = r(_d[13]);
    const v = (e) =>
      e.length
        ? 'M' +
          e.map((e) => `${Math.round(e.x)} ${Math.round(e.y)}`).join('L') +
          (1 === e.length
            ? `L${Math.round(e[0].x) + 1} ${Math.round(e[0].y)}`
            : '')
        : '';
  },
  810,
  [2, 212, 94, 99, 515, 386, 342, 311, 474, 407, 811, 382, 384, 338],
);
