// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 402; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.resolveAssetUri = function (e) {
        let t = {};
        if ('number' == typeof e) {
          const n = (0, o.getAssetByID)(e);
          if (null == n)
            throw new Error(
              `Image: asset with ID "${e}" could not be found. Please check the image source or packager.`,
            );
          if (
            ((t = { width: n.width, height: n.height, scale: n.scales[0] }),
            n.scales.length > 1)
          ) {
            const e = s.default.get();
            t.scale = n.scales.reduce((t, s) =>
              Math.abs(s - e) < Math.abs(t - e) ? s : t,
            );
          }
          const u = 1 !== t.scale ? `@${t.scale}x` : '';
          t.uri = n ? `${n.httpServerLocation}/${n.name}${u}.${n.type}` : '';
        } else
          'string' == typeof e
            ? (t.uri = e)
            : e &&
              !Array.isArray(e) &&
              'string' == typeof e.uri &&
              (t.uri = e.uri);
        if (t.uri) {
          var u;
          const e =
            null === (u = t) ||
            void 0 === u ||
            null === (u = u.uri) ||
            void 0 === u
              ? void 0
              : u.match(n);
          if (e) {
            const [, s, o] = e,
              n = encodeURIComponent(o);
            return ((t.uri = `${s}${n}`), t);
          }
        }
        return t;
      }));
    var e,
      t = r(d[0]),
      s = (e = t) && e.__esModule ? e : { default: e },
      o = r(d[1]);
    const n = /^(data:image\/svg\+xml;utf8,)(.*)/;
  },
  402,
  [171, 169],
);
