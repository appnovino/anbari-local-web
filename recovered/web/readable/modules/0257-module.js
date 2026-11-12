// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 257; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }));
    var e,
      t = r(d[0]),
      n = (e = t) && e.__esModule ? e : { default: e },
      u = r(d[1]);
    function f() {
      var e = (0, u.useState)(() => n.default.get('window')),
        t = e[0],
        f = e[1];
      return (
        (0, u.useEffect)(() => {
          function e(e) {
            var t = e.window;
            null != t && f(t);
          }
          return (
            n.default.addEventListener('change', e),
            f(n.default.get('window')),
            () => {
              n.default.removeEventListener('change', e);
            }
          );
        }, []),
        t
      );
    }
  },
  257,
  [124, 2],
);
