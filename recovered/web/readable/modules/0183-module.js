// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 183; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, m, _e, d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    var e = t(r(d[0])),
      a = t(r(d[1]));
    class _ extends a.default {
      constructor(t, e, a) {
        (super(),
          (this._a = t),
          (this._min = e),
          (this._max = a),
          (this._value = this._lastValue = this._a.__getValue()));
      }
      __makeNative(t) {
        (this._a.__makeNative(t), super.__makeNative(t));
      }
      interpolate(t) {
        return new e.default(this, t);
      }
      __getValue() {
        var t = this._a.__getValue(),
          e = t - this._lastValue;
        return (
          (this._lastValue = t),
          (this._value = Math.min(
            Math.max(this._value + e, this._min),
            this._max,
          )),
          this._value
        );
      }
      __attach() {
        this._a.__addChild(this);
      }
      __detach() {
        (this._a.__removeChild(this), super.__detach());
      }
      __getNativeConfig() {
        return {
          type: 'diffclamp',
          input: this._a.__getNativeTag(),
          min: this._min,
          max: this._max,
        };
      }
    }
    var s = _;
  },
  183,
  [152, 153],
);
