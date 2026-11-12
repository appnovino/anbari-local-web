// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 220; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
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
      u = r(d[0]),
      t = (e = u) && e.__esModule ? e : { default: e },
      n = r(d[1]);
    function f(e, u) {
      var f = (0, n.useRef)(null);
      null == f.current && (f.current = new t.default(u));
      var l = f.current;
      return (
        (0, n.useEffect)(() => {
          l.configure(u);
        }, [u, l]),
        (0, n.useEffect)(
          () => () => {
            l.reset();
          },
          [l],
        ),
        (0, n.useDebugValue)(u),
        l.getEventHandlers()
      );
    }
  },
  220,
  [221, 2],
);
