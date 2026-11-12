// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 629; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.ProductArtwork = function ({ product: e, size: o }) {
        const { mode: f } = (0, u.useTheme)(),
          { name: _, category: b, model: j, brand: x } = e,
          y = (0, t.useMemo)(
            () =>
              c.STICKER_ICONS[
                (0, l.stickerFor)({ name: _, category: b, model: j, brand: x })
              ],
            [_, b, j, x],
          );
        if ('dark' !== f)
          return (0, h.jsx)(s.SvgXml, { xml: y, width: '72%', height: '72%' });
        const k = 0.8 * o;
        return (0, h.jsx)(n.default, {
          style: {
            width: k,
            height: k,
            borderRadius: 0.24 * k,
            backgroundColor: '#eef7f6',
            alignItems: 'center',
            justifyContent: 'center',
          },
          children: (0, h.jsx)(s.SvgXml, {
            xml: y,
            width: '86%',
            height: '86%',
          }),
        });
      }));
    var e,
      t = r(d[0]),
      o = r(d[1]),
      n = (e = o) && e.__esModule ? e : { default: e },
      s = r(d[2]),
      u = r(d[3]),
      c = r(d[4]),
      l = r(d[5]),
      h = r(d[6]);
  },
  629,
  [2, 99, 386, 382, 630, 631, 338],
);
