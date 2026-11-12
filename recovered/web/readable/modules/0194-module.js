// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 194; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (_g, _r, i, _a, m, _e, d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }));
    var e = t(_r(d[0])),
      s = t(_r(d[1])),
      a = t(_r(d[2])),
      r = t(_r(d[3])).default.API,
      n = { r: 0, g: 0, b: 0, a: 1 },
      h = 1;
    function l(t) {
      if (null == t) return null;
      if (_(t)) return t;
      var e = (0, a.default)(t);
      if (null == e) return null;
      if ('object' == typeof e) {
        if (null != e) return e;
      } else if ('number' == typeof e) {
        return {
          r: (4278190080 & e) >>> 24,
          g: (16711680 & e) >>> 16,
          b: (65280 & e) >>> 8,
          a: (255 & e) / 255,
        };
      }
      return null;
    }
    function _(t) {
      return (
        t &&
        'number' == typeof t.r &&
        'number' == typeof t.g &&
        'number' == typeof t.b &&
        'number' == typeof t.a
      );
    }
    function o(t) {
      return (
        t &&
        t.r instanceof e.default &&
        t.g instanceof e.default &&
        t.b instanceof e.default &&
        t.a instanceof e.default
      );
    }
    class f extends s.default {
      constructor(t, s) {
        (super(), (this._listeners = {}));
        var a = null != t ? t : n;
        if (o(a)) {
          var r = a;
          ((this.r = r.r), (this.g = r.g), (this.b = r.b), (this.a = r.a));
        } else {
          var h,
            f = null !== (h = l(a)) && void 0 !== h ? h : n,
            u = n;
          (_(f) ? (u = f) : (this.nativeColor = f),
            (this.r = new e.default(u.r)),
            (this.g = new e.default(u.g)),
            (this.b = new e.default(u.b)),
            (this.a = new e.default(u.a)));
        }
        (this.nativeColor || (s && s.useNativeDriver)) && this.__makeNative();
      }
      setValue(t) {
        var e,
          s = !1;
        if (this.__isNative) {
          var a = this.__getNativeTag();
          r.setWaitingForIdentifier(a.toString());
        }
        var h = null !== (e = l(t)) && void 0 !== e ? e : n;
        if (_(h)) {
          var o = h;
          (this.r.setValue(o.r),
            this.g.setValue(o.g),
            this.b.setValue(o.b),
            this.a.setValue(o.a),
            null != this.nativeColor && ((this.nativeColor = null), (s = !0)));
        } else {
          var f = h;
          this.nativeColor !== f && ((this.nativeColor = f), (s = !0));
        }
        if (this.__isNative) {
          var u = this.__getNativeTag();
          (s && r.updateAnimatedNodeConfig(u, this.__getNativeConfig()),
            r.unsetWaitingForIdentifier(u.toString()));
        }
      }
      setOffset(t) {
        (this.r.setOffset(t.r),
          this.g.setOffset(t.g),
          this.b.setOffset(t.b),
          this.a.setOffset(t.a));
      }
      flattenOffset() {
        (this.r.flattenOffset(),
          this.g.flattenOffset(),
          this.b.flattenOffset(),
          this.a.flattenOffset());
      }
      extractOffset() {
        (this.r.extractOffset(),
          this.g.extractOffset(),
          this.b.extractOffset(),
          this.a.extractOffset());
      }
      addListener(t) {
        var e = String(h++),
          s = (e) => {
            e.value;
            t(this.__getValue());
          };
        return (
          (this._listeners[e] = {
            r: this.r.addListener(s),
            g: this.g.addListener(s),
            b: this.b.addListener(s),
            a: this.a.addListener(s),
          }),
          e
        );
      }
      removeListener(t) {
        (this.r.removeListener(this._listeners[t].r),
          this.g.removeListener(this._listeners[t].g),
          this.b.removeListener(this._listeners[t].b),
          this.a.removeListener(this._listeners[t].a),
          delete this._listeners[t]);
      }
      removeAllListeners() {
        (this.r.removeAllListeners(),
          this.g.removeAllListeners(),
          this.b.removeAllListeners(),
          this.a.removeAllListeners(),
          (this._listeners = {}));
      }
      stopAnimation(t) {
        (this.r.stopAnimation(),
          this.g.stopAnimation(),
          this.b.stopAnimation(),
          this.a.stopAnimation(),
          t && t(this.__getValue()));
      }
      resetAnimation(t) {
        (this.r.resetAnimation(),
          this.g.resetAnimation(),
          this.b.resetAnimation(),
          this.a.resetAnimation(),
          t && t(this.__getValue()));
      }
      __getValue() {
        return null != this.nativeColor
          ? this.nativeColor
          : 'rgba(' +
              this.r.__getValue() +
              ', ' +
              this.g.__getValue() +
              ', ' +
              this.b.__getValue() +
              ', ' +
              this.a.__getValue() +
              ')';
      }
      __attach() {
        (this.r.__addChild(this),
          this.g.__addChild(this),
          this.b.__addChild(this),
          this.a.__addChild(this),
          super.__attach());
      }
      __detach() {
        (this.r.__removeChild(this),
          this.g.__removeChild(this),
          this.b.__removeChild(this),
          this.a.__removeChild(this),
          super.__detach());
      }
      __makeNative(t) {
        (this.r.__makeNative(t),
          this.g.__makeNative(t),
          this.b.__makeNative(t),
          this.a.__makeNative(t),
          super.__makeNative(t));
      }
      __getNativeConfig() {
        return {
          type: 'color',
          r: this.r.__getNativeTag(),
          g: this.g.__getNativeTag(),
          b: this.b.__getNativeTag(),
          a: this.a.__getNativeTag(),
          nativeColor: this.nativeColor,
        };
      }
    }
  },
  194,
  [151, 153, 25, 155],
);
