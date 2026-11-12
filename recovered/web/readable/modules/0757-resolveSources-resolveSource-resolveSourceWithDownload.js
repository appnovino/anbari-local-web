// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 757; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.resolveSources = function (t) {
        return t.map((t) => s(t)).filter((t) => null != t);
      }),
      (e.resolveSource = s),
      (e.resolveSourceWithDownload = async function (o) {
        const u = n(o),
          l = s(o);
        if (u) {
          let n = u;
          try {
            if (
              (n.type ||
                (n = new t.Asset({ name: u.name, type: 'mp3', uri: u.uri })),
              await n.downloadAsync(),
              n.localUri)
            ) {
              const t = n.localUri;
              return l && 'object' == typeof l ? { ...l, uri: t } : { uri: t };
            }
            console.warn(
              'No localUri found, asset may not have downloaded properly, returning the original source',
            );
          } catch (t) {
            console.warn(
              'expo-audio: Failed to download asset, falling back to original source:',
              t,
            );
          }
        }
        return l;
      }));
    var t = r(d[0]);
    function n(n) {
      if (!n) return null;
      if (n instanceof t.Asset) return n;
      if ('number' == typeof n) return t.Asset.fromModule(n);
      if ('object' == typeof n) {
        if ('assetId' in n && 'number' == typeof n.assetId)
          return t.Asset.fromModule(n.assetId);
        if ('uri' in n && 'string' == typeof n.uri)
          return t.Asset.fromURI(n.uri);
      }
      return 'string' == typeof n ? t.Asset.fromURI(n) : null;
    }
    function o(t, n = {}) {
      const o = { uri: t.localUri ?? t.uri };
      return (
        t.name && (o.name = t.name),
        null != n.assetId && (o.assetId = n.assetId),
        n.headers && (o.headers = n.headers),
        o
      );
    }
    function s(n) {
      if (null == n) return null;
      if (n instanceof t.Asset) return o(n);
      if ('string' == typeof n) return { uri: n };
      if ('number' == typeof n) {
        return o(t.Asset.fromModule(n), { assetId: n });
      }
      if ('object' == typeof n) {
        if ('assetId' in n && 'number' == typeof n.assetId) {
          const o = t.Asset.fromModule(n.assetId);
          return { ...n, uri: o.localUri ?? o.uri };
        }
        if ('uri' in n && 'string' == typeof n.uri) return n;
      }
      return n ?? null;
    }
  },
  757,
  [356],
);
