// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 657; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.Reveal = l),
      (_e.RevealEach = function ({ children: e }) {
        const n = [],
          i = (e) =>
            t.Children.forEach(e, (e) => {
              (0, t.isValidElement)(e) && e.type === t.Fragment
                ? i(e.props.children)
                : null != e && !1 !== e && '' !== e && n.push(e);
            });
        return (
          i(e),
          (0, c.jsx)(c.Fragment, {
            children: n.map((e, n) =>
              (0, c.jsx)(
                l,
                { index: n, children: e },
                (0, t.isValidElement)(e) && null != e.key
                  ? String(e.key)
                  : 'reveal-' + n,
              ),
            ),
          })
        );
      }));
    var t = r(d[0]),
      n = e(r(d[1])),
      i = e(r(d[2]));
    r(d[3]);
    var u = r(d[4]),
      s = r(d[5]),
      c = r(d[6]);
    function l({ index: e = 0, style: l, children: o, testID: f }) {
      const h = (0, t.useRef)(
          new i.default.Value((0, s.introOver)() ? 1 : 0),
        ).current,
        v = (0, t.useRef)(null),
        p = (0, t.useRef)((0, s.introOver)()),
        y = (0, t.useRef)(!1),
        R = (0, u.useReducedMotion)();
      return (
        (0, t.useEffect)(() => {
          let t,
            u = !0;
          const c = (e) => {
            p.current ||
              ((p.current = !0),
              i.default
                .timing(h, {
                  toValue: 1,
                  duration: 140,
                  delay: e,
                  useNativeDriver: !1,
                })
                .start());
          };
          return (
            n.default
              .isReduceMotionEnabled()
              .catch(() => !1)
              .then((n) => {
                if (!u) return;
                if (((y.current = !0), n || (0, s.introOver)()))
                  return ((p.current = !0), void h.setValue(1));
                const i = v.current;
                if (
                  'undefined' != typeof IntersectionObserver &&
                  'undefined' != typeof Element &&
                  i instanceof Element
                ) {
                  const n = new IntersectionObserver(
                    (t) => {
                      t.some((e) => e.isIntersecting) &&
                        (n.disconnect(), c(15 * Math.min(e, 5)));
                    },
                    { threshold: 0.05 },
                  );
                  return (n.observe(i), void (t = () => n.disconnect()));
                }
                c(15 * Math.min(e, 8));
              }),
            () => {
              ((u = !1), t?.());
            }
          );
        }, []),
        (0, t.useEffect)(() => {
          R &&
            y.current &&
            (h.stopAnimation(), h.setValue(1), (p.current = !0));
        }, [R]),
        (0, c.jsx)(i.default.View, {
          ref: v,
          testID: f,
          style: [
            l,
            {
              opacity: h,
              transform: [
                {
                  translateY: h.interpolate({
                    inputRange: [0, 1],
                    outputRange: [8, 0],
                  }),
                },
              ],
            },
          ],
          children: o,
        })
      );
    }
  },
  657,
  [2, 90, 92, 94, 414, 658, 338],
);
