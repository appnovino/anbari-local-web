// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 215; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
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
      t = r(d[0]),
      s = (e = t) && e.__esModule ? e : { default: e };
    var o = class {
      static share(e, t) {
        return (
          void 0 === t && (t = {}),
          (0, s.default)(
            'object' == typeof e && null !== e,
            'Content to share must be a valid object',
          ),
          (0, s.default)(
            'string' == typeof e.url || 'string' == typeof e.message,
            'At least one of URL and message is required',
          ),
          (0, s.default)(
            'object' == typeof t && null !== t,
            'Options must be a valid object',
          ),
          (0, s.default)(
            !e.title || 'string' == typeof e.title,
            'Invalid title: title should be a string.',
          ),
          void 0 !== window.navigator.share
            ? window.navigator.share({
                title: e.title,
                text: e.message,
                url: e.url,
              })
            : Promise.reject(
                new Error('Share is not supported in this browser'),
              )
        );
      }
      static get sharedAction() {
        return 'sharedAction';
      }
      static get dismissedAction() {
        return 'dismissedAction';
      }
    };
  },
  215,
  [117],
);
