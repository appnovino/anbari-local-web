// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 185; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    var t = e(r(d[0])),
      _ = e(r(d[1]));
    class u extends _.default {
      constructor(e, t) {
        (super(), (this._a = e), (this._modulus = t));
      }
      __makeNative(e) {
        (this._a.__makeNative(e), super.__makeNative(e));
      }
      __getValue() {
        return (
          ((this._a.__getValue() % this._modulus) + this._modulus) %
          this._modulus
        );
      }
      interpolate(e) {
        return new t.default(this, e);
      }
      __attach() {
        this._a.__addChild(this);
      }
      __detach() {
        (this._a.__removeChild(this), super.__detach());
      }
      __getNativeConfig() {
        return {
          type: 'modulus',
          input: this._a.__getNativeTag(),
          modulus: this._modulus,
        };
      }
    }
    var a = u;
  },
  185,
  [152, 153],
);
