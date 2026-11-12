// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 789; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.VoiceCardShell = function ({
        title: e,
        count: y,
        saved: b = !0,
        action: x,
        children: p,
        testID: j,
      }) {
        const { colors: z } = (0, c.useTheme)();
        return (0, h.jsxs)(u.Card, {
          testID: j,
          style: { padding: 0, gap: 0, overflow: 'hidden' },
          children: [
            (0, h.jsxs)(o.default, {
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 8,
                paddingHorizontal: 12,
                paddingVertical: 8,
                minHeight: 46,
                borderBottomWidth: l.default.hairlineWidth,
                borderColor: z.line,
              },
              children: [
                (0, h.jsx)(u.Copy, {
                  accessibilityRole: 'header',
                  numberOfLines: 1,
                  style: {
                    flexShrink: 1,
                    fontSize: 14,
                    lineHeight: 22,
                    fontFamily: 'Vazirmatn_700Bold',
                  },
                  children: e,
                }),
                (0, h.jsx)(u.Copy, {
                  testID: 'voice-card-count',
                  style: { fontSize: 12, lineHeight: 18, color: z.muted },
                  children: y.toLocaleString('fa-IR'),
                }),
                b &&
                  (0, h.jsxs)(o.default, {
                    testID: 'voice-card-saved',
                    style: {
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      gap: 3,
                    },
                    children: [
                      (0, h.jsx)(f.Icon, {
                        name: 'check',
                        size: 13,
                        color: z.success,
                      }),
                      (0, h.jsx)(u.Copy, {
                        style: {
                          fontSize: 11.5,
                          lineHeight: 18,
                          color: z.success,
                        },
                        children: (0, s.L)('\u062b\u0628\u062a \u0634\u062f'),
                      }),
                    ],
                  }),
                (0, h.jsx)(o.default, { style: { flex: 1 } }),
                x &&
                  (0, h.jsxs)(n.default, {
                    testID: x.testID,
                    accessibilityRole: 'button',
                    accessibilityState: {
                      busy: !!x.busy,
                      disabled: !!x.disabled,
                    },
                    disabled: x.disabled || x.busy,
                    onPress: x.onPress,
                    style: ({ pressed: e }) => ({
                      minHeight: 32,
                      paddingHorizontal: 10,
                      borderRadius: 10,
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      gap: 5,
                      backgroundColor: e ? z.line : z.soft,
                      opacity: x.disabled ? 0.5 : 1,
                    }),
                    children: [
                      x.busy
                        ? (0, h.jsx)(t.default, {
                            size: 'small',
                            color: z.accent,
                          })
                        : (0, h.jsx)(f.Icon, {
                            name: x.icon,
                            size: 14,
                            color: z.accent,
                          }),
                      (0, h.jsx)(u.Copy, {
                        style: {
                          fontSize: 12,
                          lineHeight: 18,
                          color: z.accent,
                          fontFamily: 'Vazirmatn_600SemiBold',
                        },
                        children: x.label,
                      }),
                    ],
                  }),
              ],
            }),
            p,
          ],
        });
      }),
      (_e.VoiceSavedLine = function ({
        name: e,
        detail: t,
        sub: n,
        lead: s,
        first: f = !1,
        children: y,
        tools: b,
        testID: x = 'voice-saved-line',
      }) {
        const { colors: p } = (0, c.useTheme)();
        return (0, h.jsxs)(o.default, {
          testID: x,
          style: {
            paddingHorizontal: 12,
            paddingVertical: 7,
            gap: 4,
            borderTopWidth: f ? 0 : l.default.hairlineWidth,
            borderColor: p.line,
          },
          children: [
            (0, h.jsxs)(o.default, {
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 10,
              },
              children: [
                (0, h.jsxs)(o.default, {
                  style: { flex: 1, minWidth: 0 },
                  children: [
                    (0, h.jsxs)(u.Copy, {
                      numberOfLines: 2,
                      style: { fontSize: 14, lineHeight: 22 },
                      children: [
                        !!s &&
                          (0, h.jsx)(u.Copy, {
                            testID: 'voice-line-lead',
                            style: {
                              fontSize: 13,
                              lineHeight: 22,
                              color: p.accent,
                              fontFamily: 'Vazirmatn_600SemiBold',
                            },
                            children: s + '  ',
                          }),
                        e,
                      ],
                    }),
                    !!n &&
                      (0, h.jsx)(u.Copy, {
                        numberOfLines: 1,
                        style: {
                          fontSize: 11.5,
                          lineHeight: 17,
                          color: p.muted,
                        },
                        children: n,
                      }),
                  ],
                }),
                (0, h.jsx)(u.Copy, {
                  numberOfLines: 1,
                  style: { fontSize: 12.5, lineHeight: 20, color: p.muted },
                  children: t,
                }),
                b,
              ],
            }),
            y,
          ],
        });
      }),
      (_e.VoiceNearCard = function ({ name: e, busy: o, onUse: y }) {
        const { colors: b } = (0, c.useTheme)();
        return (0, h.jsxs)(n.default, {
          testID: 'voice-near-switch',
          accessibilityRole: 'button',
          disabled: o,
          onPress: y,
          style: ({ pressed: e }) => ({
            flexDirection: 'row-reverse',
            alignItems: 'center',
            gap: 8,
            paddingHorizontal: 10,
            paddingVertical: 7,
            borderRadius: 10,
            backgroundColor: b.warningSoft,
            borderWidth: l.default.hairlineWidth,
            borderColor: b.warningBorder,
            opacity: e || o ? 0.7 : 1,
          }),
          children: [
            o
              ? (0, h.jsx)(t.default, { size: 'small', color: b.warning })
              : (0, h.jsx)(f.Icon, {
                  name: 'refresh',
                  size: 13,
                  color: b.warning,
                }),
            (0, h.jsx)(u.Copy, {
              style: {
                flex: 1,
                fontSize: 12,
                lineHeight: 19,
                color: b.warning,
              },
              children: (0, s.L)(
                '\u0627\u06af\u0631 \u0645\u0646\u0638\u0648\u0631\u062a\u0627\u0646 \xab{name}\xbb \u0627\u0633\u062a \u06a9\u0647 \u062f\u0631 \u0627\u0646\u0628\u0627\u0631 \u062f\u0627\u0631\u06cc\u062f\u060c \u0627\u06cc\u0646 \u0631\u0627 \u0628\u0632\u0646\u06cc\u062f',
                { name: e },
              ),
            }),
          ],
        });
      }));
    var t = e(r(d[0])),
      n = e(r(d[1])),
      l = e(r(d[2])),
      o = e(r(d[3])),
      s = r(d[4]),
      c = r(d[5]),
      u = r(d[6]),
      f = r(d[7]),
      h = r(d[8]);
  },
  789,
  [217, 232, 17, 99, 311, 382, 407, 385, 338],
);
