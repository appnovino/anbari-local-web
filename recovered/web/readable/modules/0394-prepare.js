// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 394; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'prepare', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    var n = r(d[0]),
      o = r(d[1]),
      t = r(d[2]),
      l = r(d[3]);
    const s = (s, u = s.props) => {
      const {
          transform: f,
          origin: p,
          originX: c,
          originY: R,
          fontFamily: h,
          fontSize: T,
          fontWeight: S,
          fontStyle: b,
          style: v,
          forwardedRef: y,
          gradientTransform: P,
          patternTransform: H,
          onPress: _,
          ...M
        } = u,
        j = {
          ...((0, n.hasTouchableProperty)(u)
            ? {
                onStartShouldSetResponder:
                  s.touchableHandleStartShouldSetResponder,
                onResponderTerminationRequest:
                  s.touchableHandleResponderTerminationRequest,
                onResponderGrant: s.touchableHandleResponderGrant,
                onResponderMove: s.touchableHandleResponderMove,
                onResponderRelease: s.touchableHandleResponderRelease,
                onResponderTerminate: s.touchableHandleResponderTerminate,
              }
            : null),
          ...M,
        };
      null != p
        ? (j['transform-origin'] = p.toString().replace(',', ' '))
        : (null == c && null == R) ||
          (j['transform-origin'] = `${c || 0} ${R || 0}`);
      const q = (0, o.parseTransformProp)(f, u);
      q && (j.transform = q);
      const z = (0, o.parseTransformProp)(P);
      z && (j.gradientTransform = z);
      const F = (0, o.parseTransformProp)(H);
      (F && (j.patternTransform = F),
        (j.ref = (n) => {
          ((s.elementRef.current = n),
            'function' == typeof y ? y(n) : y && (y.current = n));
        }));
      const G = {};
      var O;
      (null != h && (G.fontFamily = h),
      null != T && (G.fontSize = T),
      null != S && (G.fontWeight = S),
      null != b && (G.fontStyle = b),
      (j.style = (0, t.resolve)(v, G)),
      null !== _ && (j.onClick = u.onPress),
      null !== u.href && void 0 !== u.href) &&
        (j.href =
          null === (O = (0, l.resolveAssetUri)(u.href)) || void 0 === O
            ? void 0
            : O.uri);
      return j;
    };
  },
  394,
  [395, 396, 401, 402],
);
