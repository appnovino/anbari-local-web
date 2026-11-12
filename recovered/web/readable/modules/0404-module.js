// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 404; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return S;
        },
      }));
    var e,
      t = r(d[0]),
      s = (e = t) && e.__esModule ? e : { default: e };
    const o = { top: 20, left: 20, right: 20, bottom: 30 },
      { Mixin: n } = s.default,
      {
        touchableHandleStartShouldSetResponder: l,
        touchableHandleResponderTerminationRequest: p,
        touchableHandleResponderGrant: c,
        touchableHandleResponderMove: u,
        touchableHandleResponderRelease: h,
        touchableHandleResponderTerminate: i,
        touchableGetInitialState: b,
      } = n,
      R = {
        ...n,
        touchableHandleStartShouldSetResponder(e) {
          const { onStartShouldSetResponder: t } = this.props;
          return t ? t(e) : l.call(this, e);
        },
        touchableHandleResponderTerminationRequest(e) {
          const { onResponderTerminationRequest: t } = this.props;
          return t ? t(e) : p.call(this, e);
        },
        touchableHandleResponderGrant(e) {
          const { onResponderGrant: t } = this.props;
          return t ? t(e) : c.call(this, e);
        },
        touchableHandleResponderMove(e) {
          const { onResponderMove: t } = this.props;
          return t ? t(e) : u.call(this, e);
        },
        touchableHandleResponderRelease(e) {
          const { onResponderRelease: t } = this.props;
          return t ? t(e) : h.call(this, e);
        },
        touchableHandleResponderTerminate(e) {
          const { onResponderTerminate: t } = this.props;
          return t ? t(e) : i.call(this, e);
        },
        touchableHandlePress(e) {
          const { onPress: t } = this.props;
          t && t(e);
        },
        touchableHandleActivePressIn(e) {
          const { onPressIn: t } = this.props;
          t && t(e);
        },
        touchableHandleActivePressOut(e) {
          const { onPressOut: t } = this.props;
          t && t(e);
        },
        touchableHandleLongPress(e) {
          const { onLongPress: t } = this.props;
          t && t(e);
        },
        touchableGetPressRectOffset() {
          const { pressRetentionOffset: e } = this.props;
          return e || o;
        },
        touchableGetHitSlop() {
          const { hitSlop: e } = this.props;
          return e;
        },
        touchableGetHighlightDelayMS() {
          const { delayPressIn: e } = this.props;
          return e || 0;
        },
        touchableGetLongPressDelayMS() {
          const { delayLongPress: e } = this.props;
          return 0 === e ? 0 : e || 500;
        },
        touchableGetPressOutDelayMS() {
          const { delayPressOut: e } = this.props;
          return e || 0;
        },
      },
      H = Object.keys(R),
      P = H.map((e) => R[e]),
      f = H.length;
    var S = (e) => {
      for (let t = 0; t < f; t++) {
        const s = H[t],
          o = P[t];
        e[s] = 'function' == typeof o ? o.bind(e) : o;
      }
      e.state = b();
    };
  },
  404,
  [243],
);
