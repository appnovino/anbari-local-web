// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 359; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.selectAssetSource = function (e) {
        const c = n.default.pickScale(e.scales, t.default.get()),
          u = e.scales.findIndex((e) => e === c),
          f = e.fileHashes?.[u] ?? e.fileHashes?.[0] ?? e.hash,
          l = e.fileUris ? (e.fileUris[u] ?? e.fileUris[0]) : e.uri;
        if (l) return { uri: h(l), hash: f };
        const p = 1 === c ? '' : `@${c}x`,
          U = e.type ? `.${encodeURIComponent(e.type)}` : '',
          v = `/${encodeURIComponent(e.name)}${p}${U}`,
          x = new URLSearchParams({ platform: 'web', hash: e.hash });
        if (/^https?:\/\//.test(e.httpServerLocation)) {
          return { uri: e.httpServerLocation + v + '?' + x, hash: f };
        }
        const L = (0, o.getManifest2)(),
          R = o.manifestBaseUrl?.startsWith('https://')
            ? 'https://'
            : 'http://',
          S = L?.extra?.expoGo?.developer
            ? R + L.extra.expoGo.debuggerHost
            : null;
        if (S) {
          const t = new URL(e.httpServerLocation + v, S);
          return (
            t.searchParams.set('platform', 'web'),
            t.searchParams.set('hash', e.hash),
            { uri: t.href, hash: f }
          );
        }
        if (s.default.ExponentKernel)
          return {
            uri: `https://classic-assets.eascdn.net/~assets/${encodeURIComponent(f)}`,
            hash: f,
          };
        return { uri: '', hash: f };
      }),
      (_e.resolveUri = h),
      r(d[0]));
    var t = e(r(d[1])),
      s = e(r(d[2])),
      n = e(r(d[3])),
      o = r(d[4]);
    function h(e) {
      return o.manifestBaseUrl ? new URL(e, o.manifestBaseUrl).href : e;
    }
  },
  359,
  [266, 171, 84, 360, 361],
);
