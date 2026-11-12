// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 90; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    var e,
      n = r(d[0]);
    function t() {
      return new Promise((e, n) => {
        e(!0);
      });
    }
    var o =
      ((e = n) && e.__esModule ? e : { default: e }).default &&
      'function' == typeof window.matchMedia
        ? window.matchMedia('(prefers-reduced-motion: reduce)')
        : null;
    var u = {},
      c = {
        isScreenReaderEnabled: t,
        isReduceMotionEnabled: function () {
          return new Promise((e, n) => {
            e(!o || o.matches);
          });
        },
        fetch: t,
        addEventListener: function (e, n) {
          if ('reduceMotionChanged' === e) {
            if (!o) return;
            var t = (e) => {
              n(e.matches);
            };
            ((s = t),
              null != o &&
                (null != o.addEventListener
                  ? o.addEventListener('change', s)
                  : o.addListener(s)),
              (u[n] = t));
          }
          var s;
          return { remove: () => c.removeEventListener(e, n) };
        },
        setAccessibilityFocus: function (e) {},
        announceForAccessibility: function (e) {},
        removeEventListener: function (e, n) {
          if ('reduceMotionChanged' === e) {
            var t = u[n];
            if (!t || !o) return;
            ((c = t),
              null != o &&
                (null != o.removeEventListener
                  ? o.removeEventListener('change', c)
                  : o.removeListener(c)));
          }
          var c;
        },
      },
      s = c;
  },
  90,
  [26],
);
