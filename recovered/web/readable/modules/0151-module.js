// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 151; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
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
          return h;
        },
      }));
    var e = t(r(d[0])),
      s = t(r(d[1])),
      n = t(r(d[2])),
      _ = t(r(d[3])).default.API;
    class u extends s.default {
      constructor(t, e) {
        if ((super(), 'number' != typeof t))
          throw new Error(
            'AnimatedValue: Attempting to set value to undefined',
          );
        ((this._startingValue = this._value = t),
          (this._offset = 0),
          (this._animation = null),
          e && e.useNativeDriver && this.__makeNative());
      }
      __detach() {
        (this.__isNative &&
          _.getValue(this.__getNativeTag(), (t) => {
            this._value = t - this._offset;
          }),
          this.stopAnimation(),
          super.__detach());
      }
      __getValue() {
        return this._value + this._offset;
      }
      setValue(t) {
        var e, s;
        (this._animation && (this._animation.stop(), (this._animation = null)),
          this._updateValue(t, !this.__isNative),
          this.__isNative &&
            ((e = this.__getNativeTag().toString()),
            (s = () => _.setAnimatedNodeValue(this.__getNativeTag(), t)),
            _.setWaitingForIdentifier(e),
            s(),
            _.unsetWaitingForIdentifier(e)));
      }
      setOffset(t) {
        ((this._offset = t),
          this.__isNative && _.setAnimatedNodeOffset(this.__getNativeTag(), t));
      }
      flattenOffset() {
        ((this._value += this._offset),
          (this._offset = 0),
          this.__isNative &&
            _.flattenAnimatedNodeOffset(this.__getNativeTag()));
      }
      extractOffset() {
        ((this._offset += this._value),
          (this._value = 0),
          this.__isNative &&
            _.extractAnimatedNodeOffset(this.__getNativeTag()));
      }
      stopAnimation(t) {
        (this.stopTracking(),
          this._animation && this._animation.stop(),
          (this._animation = null),
          t &&
            (this.__isNative
              ? _.getValue(this.__getNativeTag(), t)
              : t(this.__getValue())));
      }
      resetAnimation(t) {
        (this.stopAnimation(t),
          (this._value = this._startingValue),
          this.__isNative &&
            _.setAnimatedNodeValue(this.__getNativeTag(), this._startingValue));
      }
      __onAnimatedValueUpdateReceived(t) {
        this._updateValue(t, !1);
      }
      interpolate(t) {
        return new e.default(this, t);
      }
      animate(t, e) {
        var s = null;
        t.__isInteraction && (s = n.default.createInteractionHandle());
        var _ = this._animation;
        (this._animation && this._animation.stop(),
          (this._animation = t),
          t.start(
            this._value,
            (t) => {
              this._updateValue(t, !0);
            },
            (t) => {
              ((this._animation = null),
                null !== s && n.default.clearInteractionHandle(s),
                e && e(t));
            },
            _,
            this,
          ));
      }
      stopTracking() {
        (this._tracking && this._tracking.__detach(), (this._tracking = null));
      }
      track(t) {
        (this.stopTracking(),
          (this._tracking = t),
          this._tracking && this._tracking.update());
      }
      _updateValue(t, e) {
        if (void 0 === t)
          throw new Error(
            'AnimatedValue: Attempting to set value to undefined',
          );
        var s, n;
        ((this._value = t),
          e &&
            ((s = this),
            (n = new Set()),
            (function t(e) {
              'function' == typeof e.update
                ? n.add(e)
                : e.__getChildren().forEach(t);
            })(s),
            n.forEach((t) => t.update())),
          super.__callListeners(this.__getValue()));
      }
      __getNativeConfig() {
        return { type: 'value', value: this._value, offset: this._offset };
      }
    }
    var h = u;
  },
  151,
  [152, 153, 131, 155],
);
