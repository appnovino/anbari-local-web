// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 510; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'codeLength', {
        enumerable: !0,
        get: function () {
          return x;
        },
      }),
      (_e.CodeBoxes = function ({
        value: e,
        state: v,
        disabled: C = !1,
        onChange: R,
        onComplete: j,
        onNoCode: V,
        autoCode: k,
        testID: I,
        length: _ = x,
      }) {
        const { colors: w, mode: D } = (0, h.useTheme)(),
          M = (0, f.useReducedMotion)(),
          T = (0, t.useRef)([]),
          E = (0, t.useRef)(new n.default.Value(0)).current,
          B = (0, t.useRef)(new n.default.Value(0)).current;
        ((0, t.useEffect)(() => {
          if ('error' !== v || M) return;
          const e = (e, t) =>
              n.default.timing(E, {
                toValue: e,
                duration: t,
                easing: u.default.linear,
                useNativeDriver: !1,
              }),
            t = n.default.sequence([
              e(1, 60),
              e(-1, 60),
              e(0.6, 60),
              e(-0.6, 60),
              e(0, 60),
            ]);
          return (t.start(), () => t.stop());
        }, [v, M, E]),
          (0, t.useEffect)(() => {
            if ('success' !== v) return void B.setValue(0);
            const e = n.default.timing(B, {
              toValue: 1,
              duration: M ? 0 : 320,
              easing: u.default.out(u.default.back(2)),
              useNativeDriver: !1,
            });
            return (e.start(), () => e.stop());
          }, [v, M, B]));
        const z = (0, t.useRef)([]),
          A = (0, t.useRef)([]),
          L = e.slice(0, _);
        (z.current.length !== _ ||
          (z.current.join('') !== L && !A.current.includes(L))) &&
          ((z.current = Array.from({ length: _ }, (t, n) => e[n] || '')),
          (A.current = []));
        const N = z.current,
          O = (0, t.useRef)('');
        function P(e) {
          T.current[Math.max(0, Math.min(_ - 1, e))]?.focus();
        }
        function W(e) {
          z.current = Array.from({ length: _ }, (t, n) => e[n] || '');
          const t = e.join('').slice(0, _);
          ((A.current = [...A.current.slice(-11), t]),
            R(t),
            t.length === _ && e.every((e) => '' !== e)
              ? O.current !== t && ((O.current = t), j(t))
              : (O.current = ''));
        }
        (0, t.useEffect)(() => {
          e.length < _ && (O.current = '');
        }, [e, _]);
        const F = (0, t.useRef)(k || '');
        function S(e, t) {
          const n = (0, p.typeIntoBoxes)(z.current, e, t, _);
          n.noCode ? V?.() : (W(n.cells), null !== n.focus && P(n.focus));
        }
        function q(e) {
          const t = [...z.current];
          if (t[e]) return ((t[e] = ''), void W(t));
          0 !== e && ((t[e - 1] = ''), W(t), P(e - 1));
        }
        (0, t.useEffect)(() => {
          if (!k) return void (F.current = '');
          if (k === F.current || C || 'success' === v) return;
          F.current = k;
          const e = (0, p.extractCode)(k, _);
          e && W(e.split(''));
        }, [k, C, v]);
        const H = !1,
          K = 'success' === v,
          X = 'error' === v,
          $ = K ? w.accent : X ? w.danger : w.line,
          G = K
            ? 'light' === D
              ? 'rgba(13,148,136,.12)'
              : 'rgba(13,148,136,.22)'
            : 'light' === D
              ? 'rgba(255,255,255,.72)'
              : 'rgba(255,255,255,.06)';
        return (0, b.jsxs)(s.default, {
          testID: I,
          style: { gap: 10 },
          children: [
            (0, b.jsxs)(n.default.View, {
              style: {
                flexDirection: 'row',
                direction: 'ltr',
                justifyContent: 'center',
                gap: 8,
                transform: [
                  {
                    translateX: E.interpolate({
                      inputRange: [-1, 1],
                      outputRange: [-7, 7],
                    }),
                  },
                ],
              },
              children: [
                H,
                H,
                N.map((e, t) =>
                  (0, b.jsx)(
                    s.default,
                    {
                      style: { flex: 1, maxWidth: 56 },
                      children: (0, b.jsx)(c.default, {
                        ref: (e) => {
                          T.current[t] = e;
                        },
                        testID: `auth-otp-box-${t}`,
                        accessibilityLabel: (0, y.L)('\u0631\u0642\u0645 {n}', {
                          n: t + 1,
                        }),
                        value: e,
                        editable: !C && !K,
                        keyboardType: 'number-pad',
                        inputMode: 'numeric',
                        autoComplete: 0 === t ? 'one-time-code' : 'off',
                        textContentType: 'oneTimeCode',
                        selectTextOnFocus: !0,
                        onChangeText: (e) => S(t, e),
                        onKeyPress: (e) => {
                          'Backspace' === e.nativeEvent.key && q(t);
                        },
                        style: {
                          height: 54,
                          borderRadius: 14,
                          borderWidth: 2 * o.default.hairlineWidth,
                          borderColor: $,
                          backgroundColor: G,
                          textAlign: 'center',
                          fontSize: 20,
                          lineHeight: 26,
                          fontFamily: 'Vazirmatn_600SemiBold',
                          color: K ? w.accent : w.text,
                          paddingVertical: 0,
                        },
                      }),
                    },
                    t,
                  ),
                ),
              ],
            }),
            K &&
              (0, b.jsx)(n.default.View, {
                style: {
                  alignItems: 'center',
                  opacity: B,
                  transform: [
                    {
                      scale: B.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.6, 1],
                      }),
                    },
                  ],
                },
                children: (0, b.jsx)(s.default, {
                  style: {
                    width: 36,
                    height: 36,
                    borderRadius: 18,
                    backgroundColor: w.accent,
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                  children: (0, b.jsx)(l.Icon, {
                    name: 'check',
                    size: 20,
                    color: '#fff',
                  }),
                }),
              }),
          ],
        });
      }));
    var t = r(d[0]),
      n = e(r(d[1])),
      u = e(r(d[2]));
    r(d[3]);
    var o = e(r(d[4]));
    r(d[5]);
    var c = e(r(d[6])),
      s = e(r(d[7])),
      l = r(d[8]),
      f = r(d[9]),
      h = r(d[10]),
      p = r(d[11]),
      y = r(d[12]),
      b = r(d[13]);
    const x = 4;
  },
  510,
  [2, 92, 196, 94, 17, 178, 242, 99, 385, 414, 382, 511, 311, 338],
);
