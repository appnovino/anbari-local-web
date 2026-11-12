// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 928; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.useJiggle = v),
      (_e.EditFrame = function ({
        editing: e,
        name: t,
        seed: n = 0,
        onRemove: f,
        onEarlier: h,
        onLater: y,
        style: x,
        testID: j,
        children: D,
      }) {
        const { colors: R } = (0, c.useTheme)(),
          I = v(e, n),
          V = (e) => ({
            width: e,
            height: e,
            borderRadius: e / 2,
            alignItems: 'center',
            justifyContent: 'center',
          });
        return (0, p.jsxs)(o.default.View, {
          testID: e ? j : void 0,
          style: [x, I],
          children: [
            (0, p.jsx)(s.default, {
              pointerEvents: e ? 'none' : 'auto',
              style: { flexGrow: 1 },
              children: D,
            }),
            e &&
              !!f &&
              (0, p.jsx)(u.default, {
                testID: j ? j + '-remove' : void 0,
                accessibilityRole: 'button',
                accessibilityLabel: (0, b.L)(
                  '\u0628\u0631\u062f\u0627\u0634\u062a\u0646 \xab{name}\xbb \u0627\u0632 \u0635\u0641\u062d\u0647\u0654 \u0627\u0635\u0644\u06cc',
                  { name: t },
                ),
                hitSlop: 8,
                onPress: f,
                style: ({ pressed: e }) => [
                  V(26),
                  {
                    position: 'absolute',
                    top: -8,
                    left: -8,
                    backgroundColor: R.danger,
                    borderWidth: 2,
                    borderColor: R.surface,
                    opacity: e ? 0.8 : 1,
                  },
                ],
                children: (0, p.jsx)(l.Icon, {
                  name: 'minus',
                  size: 15,
                  color: '#ffffff',
                }),
              }),
            e &&
              (!!h || !!y) &&
              (0, p.jsx)(s.default, {
                style: {
                  position: 'absolute',
                  top: -8,
                  right: -8,
                  flexDirection: 'row-reverse',
                  gap: 4,
                },
                children: [
                  {
                    icon: 'up',
                    run: h,
                    label: (0, b.L)(
                      '\u062c\u0627\u0628\u0647\u200c\u062c\u0627\u06cc\u06cc \u0628\u0647 \u0628\u0627\u0644\u0627\u062a\u0631',
                    ),
                    id: '-earlier',
                  },
                  {
                    icon: 'down',
                    run: y,
                    label: (0, b.L)(
                      '\u062c\u0627\u0628\u0647\u200c\u062c\u0627\u06cc\u06cc \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646\u200c\u062a\u0631',
                    ),
                    id: '-later',
                  },
                ].map((e) =>
                  (0, p.jsx)(
                    u.default,
                    {
                      testID: j ? j + e.id : void 0,
                      accessibilityRole: 'button',
                      accessibilityLabel: e.label + ' \u2014 ' + t,
                      accessibilityState: { disabled: !e.run },
                      disabled: !e.run,
                      hitSlop: 6,
                      onPress: e.run,
                      style: ({ pressed: t }) => [
                        V(26),
                        {
                          backgroundColor: R.surface,
                          borderWidth: 1,
                          borderColor: R.line,
                          opacity: e.run ? (t ? 0.7 : 1) : 0.35,
                        },
                      ],
                      children: (0, p.jsx)(l.Icon, {
                        name: e.icon,
                        size: 14,
                        color: R.text,
                      }),
                    },
                    e.id,
                  ),
                ),
              }),
          ],
        });
      }));
    var t = r(d[0]),
      o = e(r(d[1])),
      n = e(r(d[2]));
    r(d[3]);
    var u = e(r(d[4])),
      s = e(r(d[5])),
      l = r(d[6]),
      c = r(d[7]),
      f = r(d[8]),
      b = r(d[9]),
      p = r(d[10]);
    function v(e, u = 0) {
      const s = (0, t.useRef)(new o.default.Value(0)).current,
        l = (0, f.useReducedMotion)();
      return (
        (0, t.useEffect)(() => {
          if (!e || l) return (s.stopAnimation(), void s.setValue(0));
          const t = !1,
            c = 118 + (u % 5) * 9,
            f = o.default.loop(
              o.default.sequence([
                o.default.timing(s, {
                  toValue: 1,
                  duration: c,
                  easing: n.default.inOut(n.default.quad),
                  useNativeDriver: t,
                }),
                o.default.timing(s, {
                  toValue: -1,
                  duration: 2 * c,
                  easing: n.default.inOut(n.default.quad),
                  useNativeDriver: t,
                }),
                o.default.timing(s, {
                  toValue: 0,
                  duration: c,
                  easing: n.default.inOut(n.default.quad),
                  useNativeDriver: t,
                }),
              ]),
            ),
            b = setTimeout(() => f.start(), (37 * u) % 120);
          return () => {
            (clearTimeout(b), f.stop(), s.setValue(0));
          };
        }, [e, l, u]),
        {
          transform: [
            {
              rotate: s.interpolate({
                inputRange: [-1, 1],
                outputRange: ['-1.5deg', '1.5deg'],
              }),
            },
          ],
        }
      );
    }
  },
  928,
  [2, 92, 196, 94, 232, 99, 385, 382, 414, 311, 338],
);
