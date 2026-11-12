// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 864; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.DockBubble = function ({
        activeIndex: e,
        hidden: b = !1,
        color: v,
        gradient: h,
        locations: p,
        itemCount: w,
        children: x,
      }) {
        const y = (0, t.useRef)(new u.default.Value(0)).current,
          E = (0, t.useRef)(new u.default.Value(0)).current,
          R = (0, t.useRef)([]),
          V = (0, t.useRef)(!1),
          [_, j] = (0, t.useState)(0),
          [D, M] = (0, t.useState)(!1);
        return (
          (0, t.useEffect)(() => {
            let e = !0;
            n.default.isReduceMotionEnabled().then((t) => {
              e && M(t);
            });
            const t = n.default.addEventListener('reduceMotionChanged', M);
            return () => {
              ((e = !1), t.remove());
            };
          }, []),
          (0, t.useEffect)(() => {
            ((R.current.length = w), j((e) => e + 1));
          }, [w]),
          (0, t.useEffect)(() => {
            const t = R.current[e];
            if (t && !b)
              return D || !V.current
                ? (y.setValue(t.x), E.setValue(t.width), void (V.current = !0))
                : void u.default
                    .parallel([
                      u.default.spring(y, {
                        toValue: t.x,
                        speed: 40,
                        bounciness: 0,
                        useNativeDriver: !1,
                      }),
                      u.default.spring(E, {
                        toValue: t.width,
                        speed: 40,
                        bounciness: 0,
                        useNativeDriver: !1,
                      }),
                    ])
                    .start();
          }, [e, b, _, D, y, E]),
          (0, c.jsxs)(s.default, {
            onLayout: () => j((e) => e + 1),
            style: f.row,
            children: [
              (0, c.jsx)(u.default.View, {
                pointerEvents: 'none',
                accessibilityElementsHidden: !0,
                importantForAccessibility: 'no-hide-descendants',
                style: [
                  f.bubble,
                  {
                    backgroundColor: v,
                    opacity: b ? 0 : 1,
                    width: E,
                    transform: [{ translateX: y }],
                  },
                ],
                children:
                  h &&
                  (0, c.jsx)(l.LinearGradient, {
                    colors: [...h],
                    locations: p,
                    start: { x: 0, y: 0.5 },
                    end: { x: 1, y: 0.5 },
                    style: [o.default.absoluteFill, { borderRadius: 24 }],
                  }),
              }),
              x(function (e, t) {
                const { x: n, width: u } = t.nativeEvent.layout,
                  o = R.current[e];
                if (o?.x === n && o.width === u) return;
                ((R.current[e] = { x: n, width: u }), j((e) => e + 1));
              }),
            ],
          })
        );
      }));
    var t = r(d[0]),
      n = e(r(d[1])),
      u = e(r(d[2])),
      o = e(r(d[3])),
      s = e(r(d[4])),
      l = r(d[5]),
      c = r(d[6]);
    const f = o.default.create({
      row: {
        position: 'relative',
        flexDirection: 'row',
        direction: 'ltr',
        gap: 3,
      },
      bubble: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        borderRadius: 24,
      },
    });
  },
  864,
  [2, 90, 92, 17, 99, 411, 338],
);
