// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 541; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (_g, _r, i, _a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'MIN_GLASS_ALPHA', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      Object.defineProperty(e, 'glassTokens', {
        enumerable: !0,
        get: function () {
          return r;
        },
      }),
      (e.glassStyle = function (t, a = 'native') {
        const n = r[t];
        return {
          backgroundColor: n.surface,
          borderColor: n.highlight,
          borderWidth: r.hairline,
          borderRadius: r.radius,
          shadowColor: 'light' === t ? '#111114' : '#000000',
          shadowOpacity: 'light' === t ? 0.14 : 0.42,
          shadowRadius: 24,
          shadowOffset: { width: 0, height: 10 },
          elevation: 'light' === t ? 5 : 8,
          ...('web' === a
            ? {
                backdropFilter: `blur(${r.blur}px) saturate(${r.saturation}%)`,
                WebkitBackdropFilter: `blur(${r.blur}px) saturate(${r.saturation}%)`,
                boxShadow: `0 10px 34px ${n.shadow}, inset 0 1px 0 ${n.highlight}`,
              }
            : {}),
        };
      }),
      (e.hexToRgb = a),
      (e.contrastRatio = function (t, r) {
        const n = (t) => {
            const { r: r, g: n, b: o } = a(t),
              s = [r, n, o].map((t) => {
                const r = t / 255;
                return r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4;
              });
            return 0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2];
          },
          o = n(t),
          s = n(r);
        return (Math.max(o, s) + 0.05) / (Math.min(o, s) + 0.05);
      }),
      (e.compositeHex = function (t, r, n) {
        const o = a(t),
          s = a(r),
          u = (t, r) =>
            Math.round(t * n + r * (1 - n))
              .toString(16)
              .padStart(2, '0');
        return `#${u(o.r, s.r)}${u(o.g, s.g)}${u(o.b, s.b)}`;
      }));
    const t = 0.92,
      r = {
        light: {
          surface: '#ffffffeb',
          highlight: '#ffffff59',
          shadow: 'rgba(17,17,20,0.14)',
          mutedText: '#5c5c63',
        },
        dark: {
          surface: '#1c1c1eeb',
          highlight: '#ffffff1f',
          shadow: 'rgba(0,0,0,0.42)',
          mutedText: '#a1a1a8',
        },
        blur: 18,
        saturation: 140,
        radius: 26,
        hairline: 1,
      };
    function a(t) {
      const r = t.replace('#', ''),
        a =
          3 === r.length
            ? r
                .split('')
                .map((t) => t + t)
                .join('')
            : r.slice(0, 6);
      return {
        r: parseInt(a.slice(0, 2), 16),
        g: parseInt(a.slice(2, 4), 16),
        b: parseInt(a.slice(4, 6), 16),
      };
    }
  },
  541,
  [],
);
