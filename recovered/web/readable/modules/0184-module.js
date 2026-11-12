// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 184; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
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
          return o;
        },
      }));
    var t = e(r(d[0])),
      _ = e(r(d[1])),
      a = e(r(d[2])),
      n = e(r(d[3]));
    class s extends n.default {
      constructor(e, t) {
        (super(),
          (this._warnedAboutDivideByZero = !1),
          (0 === t || (t instanceof _.default && 0 === t.__getValue())) &&
            console.error(
              'Detected potential division by zero in AnimatedDivision',
            ),
          (this._a = 'number' == typeof e ? new a.default(e) : e),
          (this._b = 'number' == typeof t ? new a.default(t) : t));
      }
      __makeNative(e) {
        (this._a.__makeNative(e),
          this._b.__makeNative(e),
          super.__makeNative(e));
      }
      __getValue() {
        var e = this._a.__getValue(),
          t = this._b.__getValue();
        return 0 === t
          ? (this._warnedAboutDivideByZero ||
              (console.error('Detected division by zero in AnimatedDivision'),
              (this._warnedAboutDivideByZero = !0)),
            0)
          : ((this._warnedAboutDivideByZero = !1), e / t);
      }
      interpolate(e) {
        return new t.default(this, e);
      }
      __attach() {
        (this._a.__addChild(this), this._b.__addChild(this));
      }
      __detach() {
        (this._a.__removeChild(this),
          this._b.__removeChild(this),
          super.__detach());
      }
      __getNativeConfig() {
        return {
          type: 'division',
          input: [this._a.__getNativeTag(), this._b.__getNativeTag()],
        };
      }
    }
    var o = s;
  },
  184,
  [152, 154, 151, 153],
);
