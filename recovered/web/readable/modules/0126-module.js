// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 126; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    var e,
      u = r(d[0]),
      t = (e = u) && e.__esModule ? e : { default: e },
      l = {
        _currentlyFocusedNode: null,
        currentlyFocusedField() {
          return (
            document.activeElement !== this._currentlyFocusedNode &&
              (this._currentlyFocusedNode = null),
            this._currentlyFocusedNode
          );
        },
        focusTextInput(e) {
          null !== e &&
            ((this._currentlyFocusedNode = e),
            document.activeElement !== e && t.default.focus(e));
        },
        blurTextInput(e) {
          null !== e &&
            ((this._currentlyFocusedNode = null),
            document.activeElement === e && t.default.blur(e));
        },
      };
  },
  126,
  [85],
);
