// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 874; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.SyncChip = function ({ state: e, notice: n, pending: y = 0 }) {
        const { colors: p } = (0, s.useTheme)();
        if ('offline' !== e && !n && !y) return null;
        const h =
          ('saved' === e
            ? l.platformFa.syncSaved
            : 'syncing' === e
              ? l.platformFa.syncing
              : 'busy' === e
                ? (0, c.busyText)()
                : l.platformFa.syncOffline) +
          (y
            ? ' \xb7 ' +
              (0, f.L)(
                '\u062f\u0631 \u0627\u0646\u062a\u0638\u0627\u0631 \u0627\u0631\u0633\u0627\u0644: {n}',
                { n: y.toLocaleString((0, f.numberLocale)()) },
              )
            : '');
        return (0, u.jsxs)(t.default, {
          accessibilityLiveRegion: 'polite',
          style: { alignItems: 'flex-end', gap: 3 },
          children: [
            (0, u.jsxs)(t.default, {
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 6,
                paddingHorizontal: 9,
                paddingVertical: 4,
                borderRadius: 12,
                backgroundColor: 'offline' === e ? p.accentSoft : p.soft,
              },
              children: [
                (0, u.jsx)(t.default, {
                  style: {
                    width: 7,
                    height: 7,
                    borderRadius: 4,
                    backgroundColor:
                      'offline' === e
                        ? p.danger
                        : 'syncing' === e
                          ? p.accent
                          : p.muted,
                  },
                }),
                (0, u.jsx)(o.Copy, {
                  style: { fontSize: 11, lineHeight: 18 },
                  children: h,
                }),
              ],
            }),
            !!n &&
              (0, u.jsx)(o.Copy, {
                numberOfLines: 2,
                style: {
                  maxWidth: 260,
                  fontSize: 11,
                  lineHeight: 18,
                  color: p.muted,
                },
                children: n,
              }),
          ],
        });
      }));
    var e,
      n = r(d[0]),
      t = (e = n) && e.__esModule ? e : { default: e },
      l = r(d[1]),
      o = r(d[2]),
      s = r(d[3]),
      c = r(d[4]),
      f = r(d[5]),
      u = r(d[6]);
  },
  874,
  [99, 502, 407, 382, 479, 311, 338],
);
