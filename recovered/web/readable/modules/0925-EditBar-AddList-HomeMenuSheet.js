// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 925; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.EditBar = function ({ saving: e, onDone: n }) {
        const { colors: s } = (0, h.useTheme)();
        return (0, y.jsxs)(o.default, {
          testID: 'home-edit-bar',
          style: {
            flexDirection: 'row-reverse',
            alignItems: 'center',
            gap: 10,
            padding: 12,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: s.accent + '55',
            backgroundColor: s.accentSoft,
          },
          children: [
            (0, y.jsx)(c.Icon, { name: 'edit', size: 18, color: s.accent }),
            (0, y.jsxs)(o.default, {
              style: { flex: 1, minWidth: 0 },
              children: [
                (0, y.jsx)(l.Copy, {
                  style: {
                    fontSize: 15,
                    lineHeight: 24,
                    fontFamily: 'Vazirmatn_700Bold',
                  },
                  children: (0, u.L)(
                    '\u0648\u06cc\u0631\u0627\u06cc\u0634 \u0635\u0641\u062d\u0647\u0654 \u0627\u0635\u0644\u06cc',
                  ),
                }),
                (0, y.jsx)(l.Copy, {
                  style: { fontSize: 12, lineHeight: 19, color: s.muted },
                  children: e
                    ? (0, u.L)(
                        '\u062f\u0631 \u062d\u0627\u0644 \u0630\u062e\u06cc\u0631\u0647\u2026',
                      )
                    : (0, u.L)(
                        '\u0631\u0648\u06cc \xab\u2212\xbb \u0628\u0632\u0646 \u062a\u0627 \u0627\u0632 \u0635\u0641\u062d\u0647 \u0628\u0631\u0648\u062f\u061b \u0628\u0627 \u0641\u0644\u0634\u200c\u0647\u0627 \u062c\u0627\u0628\u0647\u200c\u062c\u0627 \u06a9\u0646.',
                      ),
                }),
              ],
            }),
            (0, y.jsx)(t.default, {
              testID: 'home-edit-done',
              accessibilityRole: 'button',
              accessibilityLabel: (0, u.L)('\u062a\u0645\u0627\u0645'),
              onPress: n,
              style: ({ pressed: e }) => ({
                height: 38,
                paddingHorizontal: 18,
                borderRadius: 12,
                justifyContent: 'center',
                backgroundColor: s.accent,
                opacity: e ? 0.85 : 1,
              }),
              children: (0, y.jsx)(l.Copy, {
                style: {
                  fontSize: 14,
                  lineHeight: 22,
                  color: s.onAccent,
                  fontFamily: 'Vazirmatn_700Bold',
                },
                children: (0, u.L)('\u062a\u0645\u0627\u0645'),
              }),
            }),
          ],
        });
      }),
      (_e.AddList = function ({ groups: e }) {
        const { colors: n } = (0, h.useTheme)(),
          s = e.filter((e) => e.rows.length);
        return (0, y.jsxs)(o.default, {
          testID: 'home-add-list',
          style: {
            gap: 10,
            padding: 12,
            borderRadius: 16,
            borderWidth: 1,
            borderStyle: 'dashed',
            borderColor: n.line,
            backgroundColor: n.surface,
          },
          children: [
            (0, y.jsxs)(o.default, {
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 8,
              },
              children: [
                (0, y.jsx)(c.Icon, { name: 'plus', size: 18, color: n.accent }),
                (0, y.jsx)(l.Copy, {
                  style: {
                    fontSize: 15,
                    lineHeight: 24,
                    fontFamily: 'Vazirmatn_700Bold',
                  },
                  children: (0, u.L)(
                    '\u0627\u0641\u0632\u0648\u062f\u0646 \u0648\u06cc\u062c\u062a',
                  ),
                }),
              ],
            }),
            !s.length &&
              (0, y.jsx)(l.Copy, {
                style: { fontSize: 12.5, lineHeight: 20, color: n.muted },
                children: (0, u.L)(
                  '\u0647\u0645\u0647\u200c\u0686\u06cc\u0632 \u0631\u0648\u06cc \u0635\u0641\u062d\u0647\u0654 \u0627\u0635\u0644\u06cc \u0627\u0633\u062a.',
                ),
              }),
            s.map((e) =>
              (0, y.jsxs)(
                o.default,
                {
                  style: { gap: 6 },
                  children: [
                    (0, y.jsx)(l.Copy, {
                      style: {
                        fontSize: 12,
                        lineHeight: 18,
                        color: n.muted,
                        fontFamily: 'Vazirmatn_600SemiBold',
                      },
                      children: e.title,
                    }),
                    e.rows.map((e) =>
                      (0, y.jsxs)(
                        t.default,
                        {
                          testID: 'home-add-' + e.id.replace(':', '-'),
                          accessibilityRole: 'button',
                          accessibilityLabel: (0, u.L)(
                            '\u0627\u0641\u0632\u0648\u062f\u0646 \xab{name}\xbb',
                            { name: e.name },
                          ),
                          onPress: e.onAdd,
                          style: ({ pressed: e }) => ({
                            minHeight: 48,
                            flexDirection: 'row-reverse',
                            alignItems: 'center',
                            gap: 10,
                            paddingHorizontal: 10,
                            borderRadius: 12,
                            backgroundColor: e ? n.soft : n.bg,
                          }),
                          children: [
                            (0, y.jsx)(o.default, {
                              style: {
                                width: 32,
                                height: 32,
                                borderRadius: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: n.accentSoft,
                              },
                              children: (0, y.jsx)(c.Icon, {
                                name: e.icon,
                                size: 17,
                                color: n.accent,
                              }),
                            }),
                            (0, y.jsx)(l.Copy, {
                              numberOfLines: 1,
                              style: {
                                flex: 1,
                                minWidth: 0,
                                fontSize: 14,
                                lineHeight: 22,
                                fontFamily: 'Vazirmatn_600SemiBold',
                              },
                              children: e.name,
                            }),
                            (0, y.jsx)(o.default, {
                              style: {
                                width: 28,
                                height: 28,
                                borderRadius: 14,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: n.accent,
                              },
                              children: (0, y.jsx)(c.Icon, {
                                name: 'plus',
                                size: 15,
                                color: n.onAccent,
                              }),
                            }),
                          ],
                        },
                        e.id,
                      ),
                    ),
                  ],
                },
                e.title,
              ),
            ),
          ],
        });
      }),
      (_e.HomeMenuSheet = function ({
        visible: e,
        handlers: b,
        onClose: x,
        onEdit: j,
      }) {
        const { colors: p } = (0, h.useTheme)(),
          C = Object.fromEntries(
            Object.entries(b).map(([e, t]) => [
              e,
              t
                ? () => {
                    (x(), t());
                  }
                : void 0,
            ]),
          );
        return (0, y.jsx)(s.Sheet, {
          visible: e,
          title: (0, u.L)(
            '\u0647\u0645\u0647\u0654 \u06a9\u0644\u06cc\u062f\u0647\u0627',
          ),
          onClose: x,
          children: (0, y.jsxs)(o.default, {
            testID: 'home-menu-sheet',
            style: { gap: 14 },
            children: [
              (0, y.jsx)(f.HomeShortcuts, {
                handlers: C,
                columns: 4,
                idPrefix: 'home-menu-key',
              }),
              !!j &&
                (0, y.jsxs)(t.default, {
                  testID: 'home-menu-edit',
                  accessibilityRole: 'button',
                  accessibilityLabel: (0, u.L)(
                    '\u0648\u06cc\u0631\u0627\u06cc\u0634 \u0635\u0641\u062d\u0647\u0654 \u0627\u0635\u0644\u06cc',
                  ),
                  onPress: () => {
                    (x(), j());
                  },
                  style: ({ pressed: e }) => ({
                    minHeight: 52,
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    gap: 10,
                    paddingHorizontal: 14,
                    borderRadius: 14,
                    borderWidth: n.default.hairlineWidth,
                    borderColor: p.line,
                    backgroundColor: e ? p.soft : p.surface,
                  }),
                  children: [
                    (0, y.jsx)(o.default, {
                      style: {
                        width: 34,
                        height: 34,
                        borderRadius: 11,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: p.accentSoft,
                      },
                      children: (0, y.jsx)(c.Icon, {
                        name: 'edit',
                        size: 18,
                        color: p.accent,
                      }),
                    }),
                    (0, y.jsxs)(o.default, {
                      style: { flex: 1, minWidth: 0 },
                      children: [
                        (0, y.jsx)(l.Copy, {
                          style: {
                            fontSize: 14.5,
                            lineHeight: 22,
                            fontFamily: 'Vazirmatn_700Bold',
                          },
                          children: (0, u.L)(
                            '\u0648\u06cc\u0631\u0627\u06cc\u0634 \u0635\u0641\u062d\u0647\u0654 \u0627\u0635\u0644\u06cc',
                          ),
                        }),
                        (0, y.jsx)(l.Copy, {
                          numberOfLines: 2,
                          style: {
                            fontSize: 12,
                            lineHeight: 18,
                            color: p.muted,
                          },
                          children: (0, u.L)(
                            '\u06a9\u0627\u0631\u062a\u200c\u0647\u0627 \u0631\u0627 \u0628\u0631\u062f\u0627\u0631\u060c \u062c\u0627\u0628\u0647\u200c\u062c\u0627 \u06a9\u0646 \u06cc\u0627 \u0648\u06cc\u062c\u062a \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646.',
                          ),
                        }),
                      ],
                    }),
                    (0, y.jsx)(c.Icon, {
                      name: 'chevron',
                      size: 16,
                      color: p.muted,
                    }),
                  ],
                }),
            ],
          }),
        });
      }));
    var t = e(r(d[0])),
      n = e(r(d[1])),
      o = e(r(d[2])),
      l = r(d[3]),
      s = r(d[4]),
      c = r(d[5]),
      h = r(d[6]),
      u = r(d[7]),
      f = r(d[8]),
      y = r(d[9]);
  },
  925,
  [232, 17, 99, 407, 539, 385, 382, 311, 926, 338],
);
