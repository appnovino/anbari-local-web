// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 130; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
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
      t = r(d[0]),
      l = (e = t) && e.__esModule ? e : { default: e };
    var s = class {
      constructor(e, t) {
        ((this._delay = t), (this._callback = e));
      }
      dispose(e) {
        (void 0 === e && (e = { abort: !1 }),
          this._taskHandle &&
            (this._taskHandle.cancel(),
            e.abort || this._callback(),
            (this._taskHandle = null)));
      }
      schedule() {
        if (!this._taskHandle) {
          var e = setTimeout(() => {
            this._taskHandle = l.default.runAfterInteractions(() => {
              ((this._taskHandle = null), this._callback());
            });
          }, this._delay);
          this._taskHandle = { cancel: () => clearTimeout(e) };
        }
      }
    };
  },
  130,
  [131],
);
