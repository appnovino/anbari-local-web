// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 163; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return y;
        },
      }));
    var t = e(r(d[0])),
      s = e(r(d[1])),
      l = e(r(d[2])),
      n = e(r(d[3])),
      _ = e(r(d[4])).default.flatten;
    function u(e) {
      var l = _(e),
        n = {};
      for (var f in l) {
        var y = l[f];
        'transform' === f && Array.isArray(y)
          ? (n[f] = new s.default(y))
          : y instanceof t.default
            ? (n[f] = y)
            : y && !Array.isArray(y) && 'object' == typeof y && (n[f] = u(y));
      }
      return n;
    }
    class f extends l.default {
      constructor(e) {
        (super(), (this._inputStyle = e), (this._style = u(e)));
      }
      _walkStyleAndGetValues(e) {
        var s = {};
        for (var l in e) {
          var n = e[l];
          n instanceof t.default
            ? n.__isNative || (s[l] = n.__getValue())
            : n && !Array.isArray(n) && 'object' == typeof n
              ? (s[l] = this._walkStyleAndGetValues(n))
              : (s[l] = n);
        }
        return s;
      }
      __getValue() {
        return [this._inputStyle, this._walkStyleAndGetValues(this._style)];
      }
      _walkStyleAndGetAnimatedValues(e) {
        var s = {};
        for (var l in e) {
          var n = e[l];
          n instanceof t.default
            ? (s[l] = n.__getAnimatedValue())
            : n &&
              !Array.isArray(n) &&
              'object' == typeof n &&
              (s[l] = this._walkStyleAndGetAnimatedValues(n));
        }
        return s;
      }
      __getAnimatedValue() {
        return this._walkStyleAndGetAnimatedValues(this._style);
      }
      __attach() {
        for (var e in this._style) {
          var s = this._style[e];
          s instanceof t.default && s.__addChild(this);
        }
      }
      __detach() {
        for (var e in this._style) {
          var s = this._style[e];
          s instanceof t.default && s.__removeChild(this);
        }
        super.__detach();
      }
      __makeNative() {
        for (var e in this._style) {
          var s = this._style[e];
          s instanceof t.default && s.__makeNative();
        }
        super.__makeNative();
      }
      __getNativeConfig() {
        var e = {};
        for (var s in this._style)
          if (this._style[s] instanceof t.default) {
            var l = this._style[s];
            (l.__makeNative(), (e[s] = l.__getNativeTag()));
          }
        return (n.default.validateStyles(e), { type: 'style', style: e });
      }
    }
    var y = f;
  },
  163,
  [154, 164, 153, 155, 17],
);
