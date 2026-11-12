// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 628; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.ProductPhoto = function ({
        product: e,
        height: P = 130,
        fit: b = 'cover',
      }) {
        const { colors: v } = (0, n.useTheme)(),
          _ = (0, h.photoLink)(e.photo || '', P),
          j = _.startsWith('/v1/'),
          p = j && (0, c.canCachePhoto)(_),
          [y, w] = (0, t.useState)(() => (p ? (0, c.cachedPhoto)(_) : null)),
          [k, x] = (0, t.useState)(!1);
        (0, t.useEffect)(() => {
          if ((x(!1), !p)) return void w(null);
          const e = (0, c.cachedPhoto)(_);
          if ((w(e), e)) return;
          let t = !0;
          return (
            (0, c.downloadPhoto)(
              _,
              (0, l.baseUrl)() + _,
              (0, l.authHeaders)(),
            ).then((e) => {
              t && (e ? w(e) : x(!0));
            }),
            () => {
              t = !1;
            }
          );
        }, [_, p]);
        const C = _
          ? y
            ? { uri: y }
            : p && !k
              ? null
              : j
                ? { uri: (0, l.baseUrl)() + _, headers: (0, l.authHeaders)() }
                : { uri: _ }
          : null;
        return (0, f.jsx)(u.default, {
          style: {
            height: P,
            backgroundColor: v.soft,
            borderRadius: P < 80 ? 10 : 16,
            overflow: 'hidden',
            alignItems: 'center',
            justifyContent: 'center',
          },
          children: _
            ? C &&
              (0, f.jsx)(o.default, {
                accessibilityLabel: e.name,
                source: C,
                resizeMode: b,
                onError: y
                  ? () => {
                      (w(null), x(!0));
                    }
                  : void 0,
                style: { width: '100%', height: '100%' },
              })
            : (0, f.jsx)(s.ProductArtwork, { product: e, size: P }),
        });
      }));
    var t = r(d[0]),
      o = e(r(d[1])),
      u = e(r(d[2])),
      n = r(d[3]),
      s = r(d[4]),
      l = r(d[5]),
      c = r(d[6]),
      h = r(d[7]),
      f = r(d[8]);
  },
  628,
  [2, 168, 99, 382, 629, 415, 632, 633, 338],
);
