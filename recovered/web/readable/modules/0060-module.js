// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 60; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }));
    var e,
      t = r(d[0]),
      n = (e = t) && e.__esModule ? e : { default: e };
    function u(e, t, u) {
      if (n.default) {
        var l = null != t ? t : document,
          o = l.getElementById(e);
        if (null == o)
          if (
            ((o = document.createElement('style')).setAttribute('id', e),
            'string' == typeof u && o.appendChild(document.createTextNode(u)),
            l instanceof ShadowRoot)
          )
            l.insertBefore(o, l.firstChild);
          else {
            var f = l.head;
            f && f.insertBefore(o, f.firstChild);
          }
        return o.sheet;
      }
      return null;
    }
  },
  60,
  [26],
);
