// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 106; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    var u = e(r(d[0])),
      t = e(r(d[1]));
    function n(e) {
      (e.pointerEvents, e.style);
      return (0, t.default)(() => (e) => {
        null != e &&
          ((e.measure = (t) => u.default.measure(e, t)),
          (e.measureLayout = (t, n, l) => u.default.measureLayout(e, t, l, n)),
          (e.measureInWindow = (t) => u.default.measureInWindow(e, t)));
      });
    }
  },
  106,
  [85, 107],
);
