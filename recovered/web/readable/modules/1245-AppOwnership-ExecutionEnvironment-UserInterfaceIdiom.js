// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1245; original bundle: __common-9cdd8d1b62d3893a7e9d868fab7ed9b5.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'AppOwnership', {
        enumerable: !0,
        get: function () {
          return u.AppOwnership;
        },
      }),
      Object.defineProperty(_e, 'ExecutionEnvironment', {
        enumerable: !0,
        get: function () {
          return u.ExecutionEnvironment;
        },
      }),
      Object.defineProperty(_e, 'UserInterfaceIdiom', {
        enumerable: !0,
        get: function () {
          return u.UserInterfaceIdiom;
        },
      }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return h;
        },
      }));
    var n = r(d[0]);
    r(d[1]);
    var t = e(r(d[2])),
      u = r(d[3]),
      l = e(r(d[4]));
    l.default ||
      console.warn(
        "No native ExponentConstants module found, are you sure the expo-constants's module is linked properly?",
      );
    const o = (0, n.requireOptionalNativeModule)('ExpoUpdates');
    let s = null;
    if (o) {
      let e;
      (o.manifest
        ? (e = o.manifest)
        : o.manifestString && (e = JSON.parse(o.manifestString)),
        e && Object.keys(e).length > 0 && (s = e));
    }
    let f = null;
    if (t.default.EXDevLauncher) {
      let e;
      (t.default.EXDevLauncher.manifestString &&
        (e = JSON.parse(t.default.EXDevLauncher.manifestString)),
        e && Object.keys(e).length > 0 && (f = e));
    }
    let c = null;
    if (l.default && l.default.manifest) {
      const e = l.default.manifest;
      c = 'string' == typeof e ? JSON.parse(e) : e;
    }
    let p = s ?? f ?? c;
    const { name: E, appOwnership: b, ...x } = l.default || {},
      v = { ...x, appOwnership: b ?? null };
    function O(e) {
      return !_(e);
    }
    function _(e) {
      return 'metadata' in e;
    }
    function S(e = !1) {
      if (!p) {
        const e = null === p ? 'null' : 'undefined';
        if (
          (x.executionEnvironment,
          u.ExecutionEnvironment.Bare,
          x.executionEnvironment === u.ExecutionEnvironment.StoreClient ||
            x.executionEnvironment === u.ExecutionEnvironment.Standalone)
        )
          throw new n.CodedError(
            'ERR_CONSTANTS_MANIFEST_UNAVAILABLE',
            `Constants.manifest is ${e}, must be an object.`,
          );
      }
      return p;
    }
    Object.defineProperties(v, {
      __unsafeNoWarnManifest: {
        get() {
          const e = S(!0);
          return e && O(e) ? e : null;
        },
        enumerable: !1,
      },
      __unsafeNoWarnManifest2: {
        get() {
          const e = S(!0);
          return e && _(e) ? e : null;
        },
        enumerable: !1,
      },
      manifest: {
        get() {
          const e = S();
          return e && O(e) ? e : null;
        },
        enumerable: !0,
      },
      manifest2: {
        get() {
          const e = S();
          return e && _(e) ? e : null;
        },
        enumerable: !0,
      },
      expoConfig: {
        get() {
          const e = S(!0);
          return e
            ? o && o.isEmbeddedLaunch
              ? c
              : _(e)
                ? (e.extra?.expoClient ?? null)
                : O(e)
                  ? e
                  : null
            : null;
        },
        enumerable: !0,
      },
      expoGoConfig: {
        get() {
          const e = S(!0);
          return e
            ? _(e)
              ? (e.extra?.expoGo ?? null)
              : O(e)
                ? e
                : null
            : null;
        },
        enumerable: !0,
      },
      easConfig: {
        get() {
          const e = S(!0);
          return e ? (_(e) ? (e.extra?.eas ?? null) : O(e) ? e : null) : null;
        },
        enumerable: !0,
      },
      __rawManifest_TEST: {
        get: () => p,
        set(e) {
          p = e;
        },
        enumerable: !1,
      },
    });
    var h = v;
  },
  1245,
  [266, 94, 84, 1246, 1247],
);
