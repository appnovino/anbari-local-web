// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 191; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return _;
        },
      }));
    var t,
      e = r(d[0]),
      n = (t = e) && t.__esModule ? t : { default: t },
      o = 1;
    var _ = class {
      start(t, e, n, o, _) {}
      stop() {
        this.__nativeId && n.default.API.stopAnimation(this.__nativeId);
      }
      __getNativeAnimationConfig() {
        throw new Error('This animation type cannot be offloaded to native');
      }
      __debouncedOnEnd(t) {
        var e = this.__onEnd;
        ((this.__onEnd = null), e && e(t));
      }
      __startNativeAnimation(t) {
        var e = o + ':startAnimation';
        ((o += 1), n.default.API.setWaitingForIdentifier(e));
        try {
          var _ = this.__getNativeAnimationConfig();
          (t.__makeNative(_.platformConfig),
            (this.__nativeId = n.default.generateNewAnimationId()),
            n.default.API.startAnimatingNode(
              this.__nativeId,
              t.__getNativeTag(),
              _,
              this.__debouncedOnEnd.bind(this),
            ));
        } catch (t) {
          throw t;
        } finally {
          n.default.API.unsetWaitingForIdentifier(e);
        }
      }
    };
  },
  191,
  [155],
);
