// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 149; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
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
          return h;
        },
      }));
    var t = e(r(d[0])),
      _ = r(d[1]),
      s = e(r(d[2])),
      n = e(r(d[3])),
      o = e(r(d[4])),
      l = e(r(d[5]));
    class u extends s.default {
      constructor(e, _) {
        (super(),
          e.style &&
            (e = (0, t.default)(
              (0, t.default)({}, e),
              {},
              { style: new n.default(e.style) },
            )),
          (this._props = e),
          (this._callback = _));
      }
      __getValue() {
        var e = {};
        for (var t in this._props) {
          var o = this._props[t];
          o instanceof s.default
            ? (!o.__isNative || o instanceof n.default) &&
              (e[t] = o.__getValue())
            : o instanceof _.AnimatedEvent
              ? (e[t] = o.__getHandler())
              : (e[t] = o);
        }
        return e;
      }
      __getAnimatedValue() {
        var e = {};
        for (var t in this._props) {
          var _ = this._props[t];
          _ instanceof s.default && (e[t] = _.__getAnimatedValue());
        }
        return e;
      }
      __attach() {
        for (var e in this._props) {
          var t = this._props[e];
          t instanceof s.default && t.__addChild(this);
        }
      }
      __detach() {
        for (var e in (this.__isNative &&
          this._animatedView &&
          this.__disconnectAnimatedView(),
        (this._animatedView = null),
        this._props)) {
          var t = this._props[e];
          t instanceof s.default && t.__removeChild(this);
        }
        super.__detach();
      }
      update() {
        this._callback();
      }
      __makeNative() {
        if (!this.__isNative) {
          for (var e in ((this.__isNative = !0), this._props)) {
            var t = this._props[e];
            t instanceof s.default && t.__makeNative();
          }
          this._animatedView && this.__connectAnimatedView();
        }
      }
      setNativeView(e) {
        this._animatedView !== e &&
          ((this._animatedView = e),
          this.__isNative && this.__connectAnimatedView());
      }
      __connectAnimatedView() {
        (0, l.default)(
          this.__isNative,
          'Expected node to be marked as "native"',
        );
        var e = this._animatedView;
        ((0, l.default)(
          null != e,
          'Unable to locate attached view in the native tree',
        ),
          o.default.API.connectAnimatedNodeToView(this.__getNativeTag(), e));
      }
      __disconnectAnimatedView() {
        (0, l.default)(
          this.__isNative,
          'Expected node to be marked as "native"',
        );
        var e = this._animatedView;
        ((0, l.default)(
          null != e,
          'Unable to locate attached view in the native tree',
        ),
          o.default.API.disconnectAnimatedNodeFromView(
            this.__getNativeTag(),
            e,
          ));
      }
      __restoreDefaultValues() {
        this.__isNative &&
          o.default.API.restoreDefaultValues(this.__getNativeTag());
      }
      __getNativeConfig() {
        var e = {};
        for (var t in this._props) {
          var _ = this._props[t];
          _ instanceof s.default &&
            (_.__makeNative(), (e[t] = _.__getNativeTag()));
        }
        return { type: 'props', props: e };
      }
    }
    var h = u;
  },
  149,
  [11, 150, 154, 163, 155, 117],
);
