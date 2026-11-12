// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 651; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    var t = r(d[0]);
    function h(t, h, n) {
      const c = (n * Math.PI) / 180;
      let o = Math.cos(c),
        u = Math.sin(c);
      return (
        u < 0 && (u = -u),
        o < 0 && (o = -o),
        { width: h * u + t * o, height: h * o + t * u }
      );
    }
    var n = (n, c) => {
      const { width: o, height: u } = h(n.width, n.height, c),
        s = document.createElement('canvas');
      ((s.width = o), (s.height = u));
      const w = (0, t.getContext)(s);
      w.translate(s.width / 2, s.height / 2);
      const l = (c * Math.PI) / 180;
      return (
        w.rotate(l),
        w.drawImage(n, -n.width / 2, -n.height / 2, n.width, n.height),
        s
      );
    };
  },
  651,
  [645],
);
