// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 199; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    var e,
      t = r(d[0]);
    var n =
        ((e = t) && e.__esModule ? e : { default: e }).default &&
        null != window.matchMedia
          ? window.matchMedia('(prefers-color-scheme: dark)')
          : null,
      l = new WeakMap(),
      o = {
        getColorScheme: () => (n && n.matches ? 'dark' : 'light'),
        addChangeListener(e) {
          var t = l.get(e);
          return (
            t ||
              ((t = (t) => {
                var n = t.matches;
                e({ colorScheme: n ? 'dark' : 'light' });
              }),
              l.set(e, t)),
            n && n.addListener(t),
            {
              remove: function () {
                var t = l.get(e);
                (n && t && n.removeListener(t), l.delete(e));
              },
            }
          );
        },
      };
  },
  199,
  [26],
);
