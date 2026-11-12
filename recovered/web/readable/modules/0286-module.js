// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 286; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
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
      n = r(d[0]),
      t = (e = n) && e.__esModule ? e : { default: e },
      s = r(d[1]);
    var u = {
      OS: 'web',
      select:
        'undefined' != typeof window
          ? t.default.select
          : function (e) {
              return e.hasOwnProperty('web')
                ? e.web
                : e.hasOwnProperty('default')
                  ? e.default
                  : void 0;
            },
      isDOMAvailable: s.isDOMAvailable,
      canUseEventListeners: s.canUseEventListeners,
      canUseViewport: s.canUseViewport,
      isAsyncDebugging: s.isAsyncDebugging,
    };
  },
  286,
  [94, 287],
);
