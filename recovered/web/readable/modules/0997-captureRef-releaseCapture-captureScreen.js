// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 997; original bundle: index-9276617a829a3984ed22a1c59bc256bb.js
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
      }),
      (_e.captureRef = p),
      (_e.releaseCapture = b),
      (_e.captureScreen = function (e) {
        if (!o.default)
          throw (
            console.warn(
              'react-native-view-shot: RNViewShot is undefined. Make sure the library is linked on the native side.',
            ),
            new Error(
              'react-native-view-shot: NativeModules.RNViewShot is undefined. Make sure the library is linked on the native side.',
            )
          );
        const { options: t, errors: n } = h(e);
        return o.default.captureScreen(t);
      }));
    var t = r(d[0]),
      n = r(d[1]),
      u = e(r(d[2]));
    (r(d[3]), r(d[4]));
    var o = e(r(d[5]));
    const s = new Promise(() => {}),
      c = ['png', 'jpg'].concat([]),
      l = ['tmpfile', 'base64', 'data-uri'].concat([]),
      f = {
        format: 'png',
        quality: 1,
        result: 'tmpfile',
        snapshotContentContainer: !1,
        handleGLSurfaceViewOnAndroid: !1,
      };
    function h(e) {
      const t = { ...f, ...e },
        n = [];
      return (
        'width' in t &&
          ('number' != typeof t.width || t.width <= 0) &&
          (n.push('option width should be a positive number'), delete t.width),
        'height' in t &&
          ('number' != typeof t.height || t.height <= 0) &&
          (n.push('option height should be a positive number'),
          delete t.height),
        ('number' != typeof t.quality || t.quality < 0 || t.quality > 1) &&
          (n.push('option quality should be a number between 0.0 and 1.0'),
          (t.quality = f.quality)),
        'boolean' != typeof t.snapshotContentContainer &&
          n.push('option snapshotContentContainer should be a boolean'),
        'boolean' != typeof t.handleGLSurfaceViewOnAndroid &&
          n.push('option handleGLSurfaceViewOnAndroid should be a boolean'),
        -1 === c.indexOf(t.format || '') &&
          ((t.format = f.format),
          n.push(
            "option format '" +
              t.format +
              "' is not in valid formats: " +
              c.join(' | '),
          )),
        -1 === l.indexOf(t.result || '') &&
          ((t.result = f.result),
          n.push(
            "option result '" +
              t.result +
              "' is not in valid formats: " +
              l.join(' | '),
          )),
        { options: t, errors: n }
      );
    }
    function p(e, t) {
      if (!o.default)
        throw (
          console.warn(
            'react-native-view-shot: RNViewShot is undefined. Make sure the library is linked on the native side.',
          ),
          new Error(
            'react-native-view-shot: NativeModules.RNViewShot is undefined. Make sure the library is linked on the native side.',
          )
        );
      let n = e;
      if (
        e &&
        'object' == typeof e &&
        'current' in e &&
        e.current &&
        ((n = e.current), !n)
      )
        return Promise.reject(new Error('ref.current is null'));
      const { options: u, errors: s } = h(t);
      return o.default.captureRef(n, u);
    }
    function b(e) {
      'string' != typeof e || o.default.releaseCapture(e);
    }
    const w = (0, n.forwardRef)(function (e, o) {
      const {
          children: c,
          options: l,
          captureMode: f,
          onCapture: h,
          onCaptureFailure: w,
          onLayout: y,
          style: v,
        } = e,
        R = (0, n.useRef)(null),
        C = (0, n.useRef)(null),
        k = (0, n.useRef)(null),
        M = (0, n.useRef)(null),
        q = (0, n.useMemo)(
          () =>
            new Promise((e) => {
              M.current = e;
            }),
          [],
        ),
        S = (0, n.useRef)(h);
      S.current = h;
      const j = (0, n.useRef)(w);
      j.current = w;
      const E = (0, n.useRef)(l);
      E.current = l;
      const O = (0, n.useCallback)(
          () =>
            q
              .then(() => (R.current ? p(R.current, E.current) : s))
              .then(
                (e) =>
                  R.current
                    ? (k.current && setTimeout(b, 500, k.current),
                      (k.current = e),
                      S.current && S.current(e),
                      e)
                    : e,
                (e) => {
                  if (!R.current) throw e;
                  throw (j.current && j.current(e), e);
                },
              ),
          [q],
        ),
        V = (0, n.useCallback)(
          (e) => {
            ((R.current = e),
              e && (e.capture = O),
              'function' == typeof o ? o(e) : o && (o.current = e));
          },
          [O, o],
        ),
        A = (0, n.useCallback)(
          (e) => {
            if ((cancelAnimationFrame(C.current), 'continuous' === e)) {
              let e = '-';
              const t = () => {
                ((C.current = requestAnimationFrame(t)),
                  e !== k.current && ((e = k.current), O()));
              };
              C.current = requestAnimationFrame(t);
            }
          },
          [O],
        );
      ((0, n.useEffect)(() => {
        'mount' === f && O();
      }, []),
        (0, n.useEffect)(() => (A(f), () => A(null)), [f, A]));
      const N = (0, n.useRef)(!0);
      (0, n.useEffect)(() => {
        N.current ? (N.current = !1) : 'update' === f && O();
      });
      const _ = (0, n.useCallback)(
        (e) => {
          (M.current && (M.current(e.nativeEvent.layout), (M.current = null)),
            y && y(e));
        },
        [y],
      );
      return (0, t.jsx)(u.default, {
        ref: V,
        collapsable: !1,
        onLayout: _,
        style: v,
        children: c,
      });
    });
    ((w.captureRef = p), (w.releaseCapture = b));
    var y = w;
  },
  997,
  [338, 2, 99, 94, 75, 1001],
);
