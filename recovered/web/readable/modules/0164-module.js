// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 164; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
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
          return o;
        },
      }));
    var e = t(r(d[0])),
      n = t(r(d[1])),
      s = t(r(d[2]));
    class f extends n.default {
      constructor(t) {
        (super(), (this._transforms = t));
      }
      __makeNative() {
        (this._transforms.forEach((t) => {
          for (var n in t) {
            var s = t[n];
            s instanceof e.default && s.__makeNative();
          }
        }),
          super.__makeNative());
      }
      __getValue() {
        return this._transforms.map((t) => {
          var n = {};
          for (var s in t) {
            var f = t[s];
            f instanceof e.default ? (n[s] = f.__getValue()) : (n[s] = f);
          }
          return n;
        });
      }
      __getAnimatedValue() {
        return this._transforms.map((t) => {
          var n = {};
          for (var s in t) {
            var f = t[s];
            f instanceof e.default
              ? (n[s] = f.__getAnimatedValue())
              : (n[s] = f);
          }
          return n;
        });
      }
      __attach() {
        this._transforms.forEach((t) => {
          for (var n in t) {
            var s = t[n];
            s instanceof e.default && s.__addChild(this);
          }
        });
      }
      __detach() {
        (this._transforms.forEach((t) => {
          for (var n in t) {
            var s = t[n];
            s instanceof e.default && s.__removeChild(this);
          }
        }),
          super.__detach());
      }
      __getNativeConfig() {
        var t = [];
        return (
          this._transforms.forEach((n) => {
            for (var f in n) {
              var o = n[f];
              o instanceof e.default
                ? t.push({
                    type: 'animated',
                    property: f,
                    nodeTag: o.__getNativeTag(),
                  })
                : t.push({
                    type: 'static',
                    property: f,
                    value: s.default.transformDataType(o),
                  });
            }
          }),
          s.default.validateTransform(t),
          { type: 'transform', transforms: t }
        );
      }
    }
    var o = f;
  },
  164,
  [154, 153, 155],
);
