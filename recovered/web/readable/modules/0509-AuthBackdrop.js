// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 509; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.AuthBackdrop = function () {
        const { colors: t, mode: e } = (0, p.useTheme)(),
          o = (0, f.useReducedMotion)(),
          s = 'dark' === e,
          l = {
            backgroundImage: `radial-gradient(60% 50% at 82% 8%, ${s ? 'rgba(13,148,136,.25)' : 'rgba(13,148,136,.18)'} 0%, rgba(13,148,136,0) 70%)`,
          };
        return (0, b.jsxs)(c.default, {
          pointerEvents: 'none',
          style: n.default.absoluteFill,
          children: [
            (0, b.jsx)(u.LinearGradient, {
              colors: s ? ['#0b0b0d', '#0d2624'] : ['#f2f2f7', '#d5f2ee'],
              start: { x: 0.15, y: 0 },
              end: { x: 0.85, y: 1 },
              style: n.default.absoluteFill,
            }),
            (0, b.jsx)(c.default, { style: [n.default.absoluteFill, l] }),
            y.map((e) =>
              (0, b.jsx)(z, { item: e, color: t.accent, reduced: o }, e.icon),
            ),
          ],
        });
      }));
    var e = r(d[0]),
      o = t(r(d[1])),
      s = t(r(d[2]));
    r(d[3]);
    var n = t(r(d[4])),
      c = t(r(d[5])),
      u = r(d[6]),
      l = r(d[7]),
      f = r(d[8]),
      p = r(d[9]),
      b = r(d[10]);
    const y = [
      {
        icon: 'inventory',
        size: 150,
        top: '6%',
        start: '4%',
        drift: 18,
        seconds: 16,
        blur: 9,
        opacity: 0.13,
      },
      {
        icon: 'barcode',
        size: 118,
        top: '18%',
        start: '70%',
        drift: -14,
        seconds: 14,
        blur: 7,
        opacity: 0.11,
      },
      {
        icon: 'scan',
        size: 104,
        top: '38%',
        start: '2%',
        drift: 12,
        seconds: 18,
        blur: 8,
        opacity: 0.09,
      },
      {
        icon: 'chart',
        size: 132,
        top: '56%',
        start: '72%',
        drift: 16,
        seconds: 15,
        blur: 9,
        opacity: 0.12,
      },
      {
        icon: 'receipt',
        size: 96,
        top: '72%',
        start: '8%',
        drift: -12,
        seconds: 13,
        blur: 6,
        opacity: 0.1,
      },
      {
        icon: 'cart',
        size: 128,
        top: '84%',
        start: '62%',
        drift: 14,
        seconds: 17,
        blur: 8,
        opacity: 0.11,
      },
      {
        icon: 'tag',
        size: 100,
        top: '46%',
        start: '40%',
        drift: -16,
        seconds: 12,
        blur: 10,
        opacity: 0.08,
      },
      {
        icon: 'store',
        size: 140,
        top: '2%',
        start: '44%',
        drift: 13,
        seconds: 18,
        blur: 10,
        opacity: 0.08,
      },
    ];
    function z({ item: t, color: n, reduced: c }) {
      const u = (0, e.useRef)(new o.default.Value(0)).current;
      (0, e.useEffect)(() => {
        if (c) return (u.stopAnimation(), void u.setValue(0));
        const e = (e) =>
            o.default.timing(u, {
              toValue: e,
              duration: 500 * t.seconds,
              easing: s.default.inOut(s.default.ease),
              useNativeDriver: !1,
            }),
          n = o.default.loop(o.default.sequence([e(1), e(0)]));
        return (n.start(), () => n.stop());
      }, [t.seconds, u, c]);
      const f = { filter: `blur(${t.blur}px)` };
      return (0, b.jsx)(o.default.View, {
        pointerEvents: 'none',
        style: [
          {
            position: 'absolute',
            top: t.top,
            start: t.start,
            opacity: t.opacity,
          },
          f,
          {
            transform: [
              {
                translateY: u.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, t.drift],
                }),
              },
              {
                rotate: u.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', t.drift > 0 ? '6deg' : '-6deg'],
                }),
              },
            ],
          },
        ],
        children: (0, b.jsx)(l.Icon, { name: t.icon, size: t.size, color: n }),
      });
    }
  },
  509,
  [2, 92, 196, 94, 17, 99, 411, 385, 414, 382, 338],
);
