// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1247; original bundle: __common-9cdd8d1b62d3893a7e9d868fab7ed9b5.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    var n = r(d[0]);
    const t = (Date.now() + '-' + Math.floor(1e9 * Math.random())).toString();
    function o() {
      if (
        'undefined' != typeof navigator &&
        'string' == typeof navigator.userAgent
      ) {
        const n = navigator.userAgent.toLowerCase();
        if (n.includes('edge')) return 'Edge';
        if (n.includes('edg')) return 'Chromium Edge';
        if (n.includes('opr') && 'opr' in window && window.opr) return 'Opera';
        if (n.includes('chrome') && 'chrome' in window && window.chrome)
          return 'Chrome';
        if (n.includes('trident')) return 'IE';
        if (n.includes('firefox')) return 'Firefox';
        if (n.includes('safari')) return 'Safari';
      }
    }
    var s = {
      get appOwnership() {
        return null;
      },
      get executionEnvironment() {
        return n.ExecutionEnvironment.Bare;
      },
      get sessionId() {
        return t;
      },
      get isHeadless() {
        return (
          'undefined' == typeof navigator ||
          /\bHeadlessChrome\//.test(navigator.userAgent)
        );
      },
      get expoVersion() {
        return this.manifest.sdkVersion || null;
      },
      get linkingUri() {
        return 'undefined' != typeof location ? location.origin : '';
      },
      get expoRuntimeVersion() {
        return this.expoVersion;
      },
      get deviceName() {
        return o();
      },
      get systemFonts() {
        return [];
      },
      get statusBarHeight() {
        return 0;
      },
      get deviceYearClass() {
        return null;
      },
      get manifest() {
        return '{"name":"myAnbari","slug":"anbari","scheme":"myanbari","version":"0.17.173","runtimeVersion":"2","orientation":"portrait","icon":"./assets/anbari-icon.png","userInterfaceStyle":"automatic","web":{"favicon":"./assets/anbari-favicon.png","shortName":"myAnbari","orientation":"portrait","name":"myAnbari"},"updates":{"url":"https://myanbari.ir/updates/android/manifest","enabled":true,"checkAutomatically":"ON_LOAD","fallbackToCacheTimeout":0},"sdkVersion":"57.0.0","platforms":["ios","android","web"],"extra":{"eas":{"build":{"experimental":{"ios":{"appExtensions":[{"bundleIdentifier":"ir.myanbari.app.widgets","targetName":"AnbariWidgets","entitlements":{"com.apple.security.application-groups":["group.ir.myanbari.app"]}}]}}}}}}';
      },
      get manifest2() {
        return null;
      },
      get experienceUrl() {
        return 'undefined' != typeof location ? location.origin : '';
      },
      get debugMode() {
        return !1;
      },
      getWebViewUserAgentAsync: async () =>
        'undefined' != typeof navigator ? navigator.userAgent : null,
    };
  },
  1247,
  [1246],
);
