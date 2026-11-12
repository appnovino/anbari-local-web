// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 411; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'LinearGradient', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    var e = r(d[0]),
      t = r(d[1]);
    (r(d[2]), r(d[3]));
    var n,
      o = r(d[4]),
      s = (n = o) && n.__esModule ? n : { default: n };
    class l extends t.Component {
      render() {
        const {
          colors: t,
          locations: n,
          start: o,
          end: l,
          dither: u,
          ...f
        } = this.props;
        let h = n;
        return (
          n &&
            t.length !== n.length &&
            (console.warn(
              'LinearGradient colors and locations props should be arrays of the same length',
            ),
            (h = n.slice(0, t.length))),
          (0, e.jsx)(s.default, {
            ...f,
            colors: t,
            dither: void 0,
            locations: h,
            startPoint: c(o),
            endPoint: c(l),
          })
        );
      }
    }
    function c(e) {
      if (e) {
        if (!Array.isArray(e) || 2 === e.length)
          return Array.isArray(e) ? e : [e.x, e.y];
        console.warn(
          'start and end props for LinearGradient must be of the format [x,y] or {x, y}',
        );
      }
    }
  },
  411,
  [338, 2, 94, 24, 412],
);
