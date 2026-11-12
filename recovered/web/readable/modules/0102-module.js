// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 102; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
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
          return f;
        },
      }));
    var t = e(r(d[0])),
      n = e(r(d[1])),
      u = e(r(d[2])),
      l = '__reactLayoutHandler',
      o = (u.default, null);
    function f(e, f) {
      var v =
        (u.default &&
          void 0 !== window.ResizeObserver &&
          null == o &&
          (o = new window.ResizeObserver(function (e) {
            e.forEach((e) => {
              var t = e.target,
                u = t[l];
              'function' == typeof u &&
                n.default.measure(t, (t, n, l, o, f, v) => {
                  var c = {
                    nativeEvent: {
                      layout: {
                        x: t,
                        y: n,
                        width: l,
                        height: o,
                        left: f,
                        top: v,
                      },
                    },
                    timeStamp: Date.now(),
                  };
                  (Object.defineProperty(c.nativeEvent, 'target', {
                    enumerable: !0,
                    get: () => e.target,
                  }),
                    u(c));
                });
            });
          })),
        o);
      ((0, t.default)(() => {
        var t = e.current;
        null != t && (t[l] = f);
      }, [e, f]),
        (0, t.default)(() => {
          var t = e.current;
          return (
            null != t &&
              null != v &&
              ('function' == typeof t[l] ? v.observe(t) : v.unobserve(t)),
            () => {
              null != t && null != v && v.unobserve(t);
            }
          );
        }, [e, v]));
    }
  },
  102,
  [103, 85, 26],
);
