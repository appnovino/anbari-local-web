// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 875; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.Paywall = function ({
        onPlans: e,
        onExport: t,
        offer: l,
        ownerOnly: f = !1,
        fresh: x = !1,
        refundDays: j,
      }) {
        const { colors: b } = (0, s.useTheme)(),
          C = x
            ? (0, h.L)(
                '\u0628\u0647 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u062e\u0648\u0634 \u0622\u0645\u062f\u06cc',
              )
            : c.platformFa.trialExpiredTitle;
        if (x && !f)
          return (0, u.jsxs)(n.Card, {
            testID: 'paywall-welcome',
            style: {
              width: '100%',
              padding: 18,
              borderColor: b.accent,
              gap: 10,
            },
            children: [
              (0, u.jsx)(n.Copy, { style: n.common.title, children: C }),
              (0, u.jsx)(n.Copy, {
                style: { fontSize: 13, lineHeight: 24, color: b.muted },
                children: (0, h.L)(
                  '\u0628\u0631\u0627\u06cc \u062b\u0628\u062a \u06a9\u0627\u0644\u0627\u060c \u0641\u0631\u0648\u0634 \u0648 \u062f\u0641\u062a\u0631 \u062d\u0633\u0627\u0628\u060c \u06cc\u06a9 \u0637\u0631\u062d \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646.',
                ),
              }),
              !!j &&
                (0, u.jsx)(n.Copy, {
                  style: {
                    fontSize: 13,
                    lineHeight: 24,
                    color: b.success,
                    fontFamily: 'Vazirmatn_600SemiBold',
                  },
                  children: (0, h.L)(
                    '\u0627\u0648\u0644\u06cc\u0646 \u062e\u0631\u06cc\u062f\u062a: \u0627\u06af\u0647 \u0631\u0627\u0636\u06cc \u0646\u0628\u0648\u062f\u06cc\u060c \u062f\u0631 {n} \u0631\u0648\u0632 \u0627\u0648\u0644 \u067e\u0648\u0644\u062a \u0628\u0631\u0645\u06cc\u200c\u06af\u0631\u062f\u0647 (\u0645\u0646\u0647\u0627\u06cc \u06a9\u0627\u0631\u0645\u0632\u062f \u0648 \u0645\u0627\u0644\u06cc\u0627\u062a).',
                    { n: j.toLocaleString((0, h.numberLocale)()) },
                  ),
                }),
              (0, u.jsx)(n.Button, {
                onPress: e,
                children: c.platformFa.seePlans,
              }),
            ],
          });
        const L = !f && !!l && new Date(l.endsAt).getTime() > Date.now();
        return f
          ? (0, u.jsxs)(n.Card, {
              style: { width: '100%', padding: 18, gap: 10 },
              children: [
                (0, u.jsx)(n.Copy, { style: n.common.title, children: C }),
                (0, u.jsx)(n.Copy, {
                  testID: 'paywall-owner-only',
                  style: { fontSize: 13, lineHeight: 24, color: b.muted },
                  children: (0, h.L)(p.OWNER_ONLY_NOTE),
                }),
                (0, u.jsx)(n.Button, {
                  secondary: !0,
                  onPress: t,
                  children: c.platformFa.exportData,
                }),
              ],
            })
          : (0, u.jsxs)(n.Card, {
              style: {
                width: '100%',
                padding: 18,
                borderColor: b.accent,
                gap: 10,
              },
              children: [
                (0, u.jsx)(n.Copy, {
                  style: n.common.title,
                  children: c.platformFa.trialExpiredTitle,
                }),
                (0, u.jsx)(n.Copy, {
                  style: { fontSize: 13, lineHeight: 24, color: b.muted },
                  children: c.platformFa.trialExpiredBody,
                }),
                L &&
                  (0, u.jsxs)(u.Fragment, {
                    children: [
                      (0, u.jsx)(n.Copy, {
                        children: (0, h.L)(
                          '\u0647\u0645\u06cc\u0646 \u062d\u0627\u0644\u0627 \u0628\u0627 {percent}\u066a \u062a\u062e\u0641\u06cc\u0641',
                          {
                            percent: l.percent.toLocaleString(
                              (0, h.numberLocale)(),
                            ),
                          },
                        ),
                      }),
                      (0, u.jsx)(y.Countdown, { endsAt: l.endsAt }),
                    ],
                  }),
                (0, u.jsxs)(o.default, {
                  style: n.common.row,
                  children: [
                    (0, u.jsx)(o.default, {
                      style: n.common.flex,
                      children: (0, u.jsx)(n.Button, {
                        onPress: e,
                        children: c.platformFa.seePlans,
                      }),
                    }),
                    (0, u.jsx)(o.default, {
                      style: n.common.flex,
                      children: (0, u.jsx)(n.Button, {
                        secondary: !0,
                        onPress: t,
                        children: c.platformFa.exportData,
                      }),
                    }),
                  ],
                }),
              ],
            });
      }),
      (_e.TrialNotice = function ({
        endsAt: e,
        onPlans: y,
        ownerOnly: f = !1,
      }) {
        const { colors: x } = (0, s.useTheme)(),
          j = new Date(e),
          b = Math.max(1, Math.ceil((j.getTime() - Date.now()) / 864e5)),
          C = (0, c.interpolate)(c.platformFa.trialRemaining, {
            days: b.toLocaleString((0, h.numberLocale)()),
            date: j.toLocaleDateString((0, h.dateLocale)()),
          });
        return f
          ? (0, u.jsxs)(o.default, {
              style: {
                width: '100%',
                marginBottom: 14,
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 12,
                backgroundColor: x.accentSoft,
                gap: 2,
              },
              children: [
                (0, u.jsx)(n.Copy, {
                  numberOfLines: 1,
                  style: { fontSize: 11, lineHeight: 18 },
                  children: C,
                }),
                (0, u.jsx)(n.Copy, {
                  style: { fontSize: 11, lineHeight: 18, color: x.muted },
                  children: (0, h.L)(p.OWNER_ONLY_NOTE),
                }),
              ],
            })
          : (0, u.jsxs)(t.default, {
              testID: 'trial-notice',
              accessibilityRole: 'button',
              accessibilityLabel:
                C +
                '\u060c ' +
                (0, h.L)(
                  '\u062f\u06cc\u062f\u0646 \u0627\u0634\u062a\u0631\u0627\u06a9\u200c\u0647\u0627',
                ),
              onPress: y,
              style: ({ pressed: e }) => [
                n.common.between,
                {
                  width: '100%',
                  marginBottom: 14,
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  borderRadius: 12,
                  backgroundColor: x.accentSoft,
                  opacity: e ? 0.85 : 1,
                },
              ],
              children: [
                (0, u.jsx)(n.Copy, {
                  numberOfLines: 1,
                  style: { flex: 1, fontSize: 11, lineHeight: 18 },
                  children: C,
                }),
                (0, u.jsxs)(t.default, {
                  testID: 'trial-plans',
                  accessibilityRole: 'button',
                  onPress: y,
                  hitSlop: 8,
                  style: ({ pressed: e }) => ({
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    gap: 4,
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    borderRadius: 999,
                    backgroundColor: x.accent,
                    opacity: e ? 0.85 : 1,
                  }),
                  children: [
                    (0, u.jsx)(l.Icon, {
                      name: 'bolt',
                      size: 12,
                      color: x.onAccent,
                    }),
                    (0, u.jsx)(n.Copy, {
                      style: {
                        fontSize: 11,
                        lineHeight: 18,
                        color: x.onAccent,
                        fontFamily: 'Vazirmatn_600SemiBold',
                      },
                      children: (0, h.L)(
                        '\u062f\u06cc\u062f\u0646 \u0627\u0634\u062a\u0631\u0627\u06a9\u200c\u0647\u0627',
                      ),
                    }),
                  ],
                }),
              ],
            });
      }));
    var t = e(r(d[0])),
      o = e(r(d[1])),
      n = r(d[2]),
      l = r(d[3]),
      s = r(d[4]),
      c = r(d[5]),
      p = r(d[6]),
      y = r(d[7]),
      h = r(d[8]),
      u = r(d[9]);
  },
  875,
  [232, 99, 407, 385, 382, 502, 488, 727, 311, 338],
);
