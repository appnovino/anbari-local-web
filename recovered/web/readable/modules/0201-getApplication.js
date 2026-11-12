// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 201; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
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
          return p;
        },
      }),
      (_e.getApplication = function (e, l, u) {
        return {
          element: c.default.createElement(
            n.default,
            { WrapperComponent: u, rootTag: {} },
            c.default.createElement(e, l),
          ),
          getStyleElement: (e) => {
            var n = f.default.getSheet();
            return c.default.createElement(
              'style',
              (0, t.default)({}, e, {
                dangerouslySetInnerHTML: { __html: n.textContent },
                id: n.id,
              }),
            );
          },
        };
      }));
    var t = e(r(d[0])),
      n = e(r(d[1])),
      l = e(r(d[2])),
      u = r(d[3]),
      o = e(u),
      f = e(r(d[4])),
      c = e(r(d[5]));
    function p(e, t, f, p) {
      var s = p.hydrate,
        _ = p.initialProps,
        y = p.rootTag,
        E = s ? u.hydrate : o.default;
      return (
        (0, l.default)(y, 'Expect to have a valid rootTag, instead got ', y),
        E(
          c.default.createElement(
            n.default,
            { WrapperComponent: t, ref: f, rootTag: y },
            c.default.createElement(e, _),
          ),
          y,
        )
      );
    }
  },
  201,
  [96, 202, 117, 76, 17, 2],
);
