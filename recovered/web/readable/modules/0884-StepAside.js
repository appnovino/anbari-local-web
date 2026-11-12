// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 884; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.StepAside = function ({ hidden: e, children: l, testID: c }) {
        const f = (0, s.useReducedMotion)(),
          p = (0, t.useRef)(new n.default.Value(e ? 0 : 1)).current,
          [h, v] = (0, t.useState)(e);
        return (
          (0, t.useEffect)(() => {
            if (f) return (p.setValue(e ? 0 : 1), void v(e));
            e || v(!1);
            const t = n.default.timing(p, {
              toValue: e ? 0 : 1,
              duration: 300,
              easing: e
                ? u.default.in(u.default.cubic)
                : u.default.out(u.default.cubic),
              useNativeDriver: !1,
            });
            return (
              t.start(({ finished: t }) => {
                t && e && v(!0);
              }),
              () => t.stop()
            );
          }, [e, f, p]),
          (0, o.jsx)(n.default.View, {
            testID: c,
            pointerEvents: e ? 'none' : 'auto',
            accessibilityElementsHidden: e,
            importantForAccessibility: e ? 'no-hide-descendants' : 'auto',
            style: [
              {
                opacity: p,
                transform: [
                  {
                    translateY: p.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-36, 0],
                    }),
                  },
                ],
              },
              h && { display: 'none', height: 0, overflow: 'hidden' },
            ],
            children: l,
          })
        );
      }));
    var t = r(d[0]),
      n = e(r(d[1])),
      u = e(r(d[2]));
    r(d[3]);
    var s = r(d[4]),
      o = r(d[5]);
  },
  884,
  [2, 92, 196, 94, 414, 338],
);
