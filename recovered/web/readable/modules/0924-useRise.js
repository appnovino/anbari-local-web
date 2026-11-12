// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 924; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.useRise = function (e = 0) {
        const c = (0, t.useRef)(
            new n.default.Value((0, s.introOver)() ? 1 : 0),
          ).current,
          l = (0, t.useRef)(!1),
          f = (0, o.useReducedMotion)();
        return (
          (0, t.useEffect)(() => {
            let t,
              o = !0;
            return (
              u.default
                .isReduceMotionEnabled()
                .catch(() => !1)
                .then((u) => {
                  o &&
                    ((l.current = !0),
                    u || (0, s.introOver)()
                      ? c.setValue(1)
                      : ((t = n.default.timing(c, {
                          toValue: 1,
                          duration: 160,
                          delay: Math.round(e / 3),
                          useNativeDriver: !1,
                        })),
                        t.start()));
                }),
              () => {
                ((o = !1), t?.stop());
              }
            );
          }, []),
          (0, t.useEffect)(() => {
            f && l.current && (c.stopAnimation(), c.setValue(1));
          }, [f]),
          {
            opacity: c,
            transform: [
              {
                translateY: c.interpolate({
                  inputRange: [0, 1],
                  outputRange: [8, 0],
                }),
              },
            ],
          }
        );
      }));
    var t = r(d[0]),
      u = e(r(d[1])),
      n = e(r(d[2]));
    r(d[3]);
    var o = r(d[4]),
      s = r(d[5]);
  },
  924,
  [2, 90, 92, 94, 414, 658],
);
