// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 189; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }));
    var e = t(r(d[0])),
      s = t(r(d[1])),
      n = t(r(d[2])),
      l = 1;
    class f extends s.default {
      constructor(t) {
        super();
        var s = t || { x: 0, y: 0 };
        ('number' == typeof s.x && 'number' == typeof s.y
          ? ((this.x = new e.default(s.x)), (this.y = new e.default(s.y)))
          : ((0, n.default)(
              s.x instanceof e.default && s.y instanceof e.default,
              'AnimatedValueXY must be initialized with an object of numbers or AnimatedValues.',
            ),
            (this.x = s.x),
            (this.y = s.y)),
          (this._listeners = {}));
      }
      setValue(t) {
        (this.x.setValue(t.x), this.y.setValue(t.y));
      }
      setOffset(t) {
        (this.x.setOffset(t.x), this.y.setOffset(t.y));
      }
      flattenOffset() {
        (this.x.flattenOffset(), this.y.flattenOffset());
      }
      extractOffset() {
        (this.x.extractOffset(), this.y.extractOffset());
      }
      __getValue() {
        return { x: this.x.__getValue(), y: this.y.__getValue() };
      }
      resetAnimation(t) {
        (this.x.resetAnimation(),
          this.y.resetAnimation(),
          t && t(this.__getValue()));
      }
      stopAnimation(t) {
        (this.x.stopAnimation(),
          this.y.stopAnimation(),
          t && t(this.__getValue()));
      }
      addListener(t) {
        var e = String(l++),
          s = (e) => {
            e.value;
            t(this.__getValue());
          };
        return (
          (this._listeners[e] = {
            x: this.x.addListener(s),
            y: this.y.addListener(s),
          }),
          e
        );
      }
      removeListener(t) {
        (this.x.removeListener(this._listeners[t].x),
          this.y.removeListener(this._listeners[t].y),
          delete this._listeners[t]);
      }
      removeAllListeners() {
        (this.x.removeAllListeners(),
          this.y.removeAllListeners(),
          (this._listeners = {}));
      }
      getLayout() {
        return { left: this.x, top: this.y };
      }
      getTranslateTransform() {
        return [{ translateX: this.x }, { translateY: this.y }];
      }
    }
    var u = f;
  },
  189,
  [151, 153, 117],
);
