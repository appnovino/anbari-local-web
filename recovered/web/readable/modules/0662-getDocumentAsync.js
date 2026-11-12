// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 662; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.getDocumentAsync = async function ({
        type: e = '*/*',
        copyToCacheDirectory: t = !0,
        multiple: o = !1,
        base64: n = !0,
      } = {}) {
        'string' == typeof e && (e = [e]);
        return await c.default.getDocumentAsync({
          type: e,
          copyToCacheDirectory: t,
          multiple: o,
          base64: n,
        });
      }));
    var e,
      t = r(d[0]),
      c = (e = t) && e.__esModule ? e : { default: e },
      o = r(d[1]);
    Object.keys(o).forEach(function (e) {
      'default' === e ||
        Object.prototype.hasOwnProperty.call(_e, e) ||
        Object.defineProperty(_e, e, {
          enumerable: !0,
          get: function () {
            return o[e];
          },
        });
    });
  },
  662,
  [663, 664],
);
