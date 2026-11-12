// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 915; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.WhatsNewCard = function ({ onLesson: e } = {}) {
        const { colors: b } = (0, s.useTheme)(),
          [p, w] = (0, t.useState)(null);
        if (
          ((0, t.useEffect)(() => {
            let e = !0;
            return (
              (async () => {
                let t = null;
                try {
                  t = await o.default.getItem(y);
                } catch {}
                const n = (0, h.currentWhatsNew)(t);
                e && (w(n), n && o.default.setItem(y, n.id).catch(() => {}));
              })(),
              () => {
                e = !1;
              }
            );
          }, []),
          !p)
        )
          return null;
        const x = (0, h.whatsNewActions)(p),
          j = () => {
            (w(null), o.default.setItem(y, p.id).catch(() => {}));
          };
        return (0, f.jsxs)(l.default, {
          testID: 'whats-new',
          accessibilityRole: 'summary',
          style: {
            width: '100%',
            gap: 8,
            paddingVertical: 12,
            paddingHorizontal: 14,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: b.accent + '66',
            backgroundColor: b.accentSoft,
          },
          children: [
            (0, f.jsxs)(l.default, {
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 8,
              },
              children: [
                (0, f.jsx)(l.default, {
                  style: {
                    width: 28,
                    height: 28,
                    borderRadius: 14,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: b.accent,
                  },
                  children: (0, f.jsx)(a.Icon, {
                    name: 'star',
                    size: 15,
                    color: b.onAccent,
                    active: !0,
                  }),
                }),
                (0, f.jsx)(i.Copy, {
                  style: {
                    flex: 1,
                    fontSize: 15,
                    lineHeight: 24,
                    fontFamily: 'Vazirmatn_700Bold',
                  },
                  children: (0, c.L)(p.title).replace('{brand}', u.fa.brand),
                }),
                (0, f.jsx)(n.default, {
                  testID: 'whats-new-close',
                  accessibilityRole: 'button',
                  accessibilityLabel: (0, c.L)('\u0628\u0633\u062a\u0646'),
                  hitSlop: 8,
                  onPress: j,
                  style: ({ pressed: e }) => ({
                    width: 28,
                    height: 28,
                    borderRadius: 14,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: b.surface,
                    borderWidth: 1,
                    borderColor: b.line,
                    opacity: e ? 0.8 : 1,
                  }),
                  children: (0, f.jsx)(a.Icon, {
                    name: 'close',
                    size: 14,
                    color: b.muted,
                  }),
                }),
              ],
            }),
            (0, f.jsx)(i.Copy, {
              style: { fontSize: 12, lineHeight: 20, color: b.muted },
              children: (0, c.L)(
                '\u062a\u0627\u0632\u0647\u200c\u0647\u0627\u06cc \u0627\u06cc\u0646 \u0646\u0633\u062e\u0647:',
              ),
            }),
            p.items.map((e) =>
              (0, f.jsxs)(
                l.default,
                {
                  style: {
                    flexDirection: 'row-reverse',
                    alignItems: 'flex-start',
                    gap: 8,
                  },
                  children: [
                    (0, f.jsx)(l.default, {
                      style: {
                        width: 6,
                        height: 6,
                        borderRadius: 3,
                        marginTop: 9,
                        backgroundColor: b.accent,
                      },
                    }),
                    (0, f.jsx)(i.Copy, {
                      style: { flex: 1, fontSize: 13, lineHeight: 22 },
                      children: (0, c.L)(e),
                    }),
                  ],
                },
                e,
              ),
            ),
            (0, f.jsxs)(l.default, {
              style: {
                flexDirection: 'row-reverse',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: 8,
                marginTop: 2,
              },
              children: [
                e &&
                  x.length > 0 &&
                  (0, f.jsx)(l.default, {
                    style: {
                      flexDirection: 'row-reverse',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      gap: 6,
                    },
                    children: x.map((t, l) =>
                      (0, f.jsxs)(
                        n.default,
                        {
                          testID:
                            0 === l
                              ? 'whats-new-lesson'
                              : 'whats-new-lesson-' + (l + 1),
                          accessibilityRole: 'button',
                          accessibilityLabel: (0, c.L)(t.label),
                          hitSlop: { top: 8, bottom: 8, left: 4, right: 4 },
                          onPress: () => {
                            (j(), e(t.lesson));
                          },
                          style: ({ pressed: e }) => ({
                            height: 30,
                            paddingHorizontal: 11,
                            borderRadius: 999,
                            flexDirection: 'row-reverse',
                            alignItems: 'center',
                            gap: 5,
                            borderWidth: 1,
                            borderColor: b.accent,
                            backgroundColor: b.surface,
                            opacity: e ? 0.85 : 1,
                          }),
                          children: [
                            (0, f.jsx)(a.Icon, {
                              name: 'play',
                              size: 12,
                              color: b.accent,
                            }),
                            (0, f.jsx)(i.Copy, {
                              numberOfLines: 1,
                              style: {
                                fontSize: 12,
                                lineHeight: 20,
                                color: b.accent,
                                fontFamily: 'Vazirmatn_700Bold',
                              },
                              children: (0, c.L)(t.label),
                            }),
                          ],
                        },
                        t.lesson,
                      ),
                    ),
                  }),
                (0, f.jsx)(n.default, {
                  testID: 'whats-new-ok',
                  accessibilityRole: 'button',
                  hitSlop: { top: 8, bottom: 8, left: 4, right: 4 },
                  onPress: j,
                  style: ({ pressed: e }) => ({
                    height: 30,
                    paddingHorizontal: 16,
                    borderRadius: 999,
                    justifyContent: 'center',
                    backgroundColor: b.accent,
                    opacity: e ? 0.85 : 1,
                  }),
                  children: (0, f.jsx)(i.Copy, {
                    style: {
                      fontSize: 12,
                      lineHeight: 20,
                      color: b.onAccent,
                      fontFamily: 'Vazirmatn_700Bold',
                    },
                    children: (0, c.L)('\u0628\u0627\u0634\u0647'),
                  }),
                }),
              ],
            }),
          ],
        });
      }));
    var t = r(d[0]),
      n = e(r(d[1])),
      l = e(r(d[2])),
      o = e(r(d[3])),
      s = r(d[4]),
      i = r(d[5]),
      a = r(d[6]),
      c = r(d[7]),
      u = r(d[8]),
      h = r(d[9]),
      f = r(d[10]);
    const y = 'anbari.whats-new-seen';
  },
  915,
  [2, 232, 99, 258, 382, 407, 385, 311, 492, 916, 338],
);
