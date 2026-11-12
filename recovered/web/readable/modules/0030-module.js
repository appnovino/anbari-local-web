// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 30; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default = function (l) {
        var i = l.prefixMap,
          o = l.plugins;
        return function l(s) {
          for (var v in s) {
            var c = s[v];
            if ((0, n.default)(c)) s[v] = l(c);
            else if (Array.isArray(c)) {
              for (var _ = [], p = 0, y = c.length; p < y; ++p) {
                var M = (0, u.default)(o, v, c[p], s, i);
                (0, f.default)(_, M || c[p]);
              }
              _.length > 0 && (s[v] = _);
            } else {
              var h = (0, u.default)(o, v, c, s, i);
              (h && (s[v] = h), (s = (0, t.default)(i, v, s)));
            }
          }
          return s;
        };
      }));
    var t = l(r(d[0])),
      u = l(r(d[1])),
      f = l(r(d[2])),
      n = l(r(d[3]));
    function l(t) {
      return t && t.__esModule ? t : { default: t };
    }
  },
  30,
  [31, 33, 34, 35],
);
