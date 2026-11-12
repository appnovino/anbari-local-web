// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 355; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.getAssetForSource = function (t) {
        const e = f(t),
          n = l(t),
          o = c(t);
        (e && 'string' == typeof e) || y(e);
        return { uri: e, display: n, testString: o };
      }),
      (_e.loadSingleFontAsync = function (t, e) {
        ('object' != typeof e || 'string' != typeof e.uri || e.downloadAsync) &&
          y(e);
        if ('undefined' == typeof window) return u.default.loadAsync(t, e);
        try {
          return u.default.loadAsync(t, e);
        } catch {}
        return Promise.resolve();
      }));
    var t,
      e = r(d[0]),
      n = r(d[1]),
      o = r(d[2]),
      u = (t = o) && t.__esModule ? t : { default: t },
      s = r(d[3]);
    function f(t) {
      return 'string' == typeof t
        ? t || null
        : 'number' == typeof t
          ? f(e.Asset.fromModule(t))
          : 'object' == typeof t && 'number' == typeof t.uri
            ? f(t.uri)
            : ('object' == typeof t && (t.uri || t.localUri || t.default)) ||
              null;
    }
    function l(t) {
      return (
        ('object' == typeof t && 'display' in t && t.display) ||
        s.FontDisplay.AUTO
      );
    }
    function c(t) {
      if ('object' == typeof t && 'testString' in t)
        return t.testString ?? void 0;
    }
    function y(t) {
      let e = typeof t;
      throw (
        'object' === e && (e = JSON.stringify(t, null, 2)),
        new n.CodedError(
          'ERR_FONT_SOURCE',
          `Expected font asset of type \`string | FontResource | Asset\` instead got: ${e}`,
        )
      );
    }
  },
  355,
  [356, 266, 350, 352],
);
