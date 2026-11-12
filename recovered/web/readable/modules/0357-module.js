// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 357; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    var e,
      t = r(d[0]),
      s = r(d[1]),
      u = r(d[2]),
      o = (e = u) && e.__esModule ? e : { default: e };
    if (s.IS_ENV_WITH_LOCAL_ASSETS) {
      (o.default.setCustomSourceTransformer || u.setCustomSourceTransformer)(
        function (e) {
          try {
            if ('fileHashes' in e.asset && e.asset.fileHashes) {
              const s = t.Asset.fromMetadata(e.asset);
              return s.uri.startsWith(t.ANDROID_EMBEDDED_URL_BASE_RESOURCE)
                ? e.resourceIdentifierWithoutScale()
                : e.fromSource(s.downloaded ? s.localUri : s.uri);
            }
            return e.defaultAsset();
          } catch {
            return e.defaultAsset();
          }
        },
      );
    }
  },
  357,
  [358, 361, 366],
);
