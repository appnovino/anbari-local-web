// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 237; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }));
    var t = e(r(_d[0])),
      n = e(r(_d[1])),
      o = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        return (
          e &&
            Object.keys(e).forEach(function (n) {
              var o = Object.getOwnPropertyDescriptor(e, n);
              Object.defineProperty(
                t,
                n,
                o.get
                  ? o
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[n];
                      },
                    },
              );
            }),
          (t.default = e),
          t
        );
      })(r(_d[2])),
      l = e(r(_d[3])),
      u = e(r(_d[4])),
      d = ['color', 'indeterminate', 'progress', 'trackColor', 'style'],
      s = o.forwardRef((e, l) => {
        var s = e.color,
          f = void 0 === s ? '#1976D2' : s,
          v = e.indeterminate,
          p = void 0 !== v && v,
          y = e.progress,
          b = void 0 === y ? 0 : y,
          _ = e.trackColor,
          h = void 0 === _ ? 'transparent' : _,
          j = e.style,
          k = (0, n.default)(e, d),
          C = 100 * b,
          O = p ? '25%' : C + '%';
        return o.createElement(
          u.default,
          (0, t.default)({}, k, {
            'aria-valuemax': 100,
            'aria-valuemin': 0,
            'aria-valuenow': p ? null : C,
            ref: l,
            role: 'progressbar',
            style: [c.track, j, { backgroundColor: h }],
          }),
          o.createElement(u.default, {
            style: [
              { backgroundColor: f, width: O },
              c.progress,
              p && c.animation,
            ],
          }),
        );
      });
    s.displayName = 'ProgressBar';
    var c = l.default.create({
        track: {
          forcedColorAdjust: 'none',
          height: 5,
          overflow: 'hidden',
          userSelect: 'none',
          zIndex: 0,
        },
        progress: { forcedColorAdjust: 'none', height: '100%', zIndex: -1 },
        animation: {
          animationDuration: '1s',
          animationKeyframes: [
            {
              '0%': { transform: 'translateX(-100%)' },
              '100%': { transform: 'translateX(400%)' },
            },
          ],
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        },
      }),
      f = s;
  },
  237,
  [96, 16, 2, 17, 99],
);
