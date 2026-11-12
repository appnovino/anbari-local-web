// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 926; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.HomeTasksLine = function ({ tasks: e, onFix: b }) {
        const { colors: p } = (0, h.useTheme)(),
          [I, L] = (0, t.useState)(!1);
        if (!e.length) return null;
        const D = (0, u.homeTasksLine)(e.length);
        return (0, y.jsxs)(y.Fragment, {
          children: [
            (0, y.jsxs)(o.default, {
              testID: 'home-tasks',
              accessibilityRole: 'button',
              accessibilityLabel: D,
              onPress: () => L(!0),
              style: ({ pressed: e }) => ({
                minHeight: 40,
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 8,
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: p.warningBorder,
                backgroundColor: p.warningSoft,
                opacity: e ? 0.8 : 1,
              }),
              children: [
                (0, y.jsx)(c.Icon, {
                  name: 'alert',
                  size: 16,
                  color: p.warning,
                }),
                (0, y.jsx)(s.Copy, {
                  testID: 'home-tasks-line',
                  numberOfLines: 1,
                  style: {
                    flex: 1,
                    minWidth: 0,
                    fontSize: 13,
                    lineHeight: 20,
                    color: p.warning,
                    fontFamily: 'Vazirmatn_600SemiBold',
                  },
                  children: D,
                }),
                (0, y.jsx)(c.Icon, {
                  name: 'chevron',
                  size: 15,
                  color: p.warning,
                }),
              ],
            }),
            (0, y.jsx)(l.Sheet, {
              visible: I,
              title: (0, f.L)(
                '\u06a9\u0627\u0631\u0647\u0627\u06cc \u0645\u0627\u0646\u062f\u0647',
              ),
              onClose: () => L(!1),
              children: (0, y.jsxs)(i.default, {
                testID: 'home-tasks-sheet',
                style: { gap: 8 },
                children: [
                  e.map((e) => {
                    const t = b
                      ? () => {
                          (L(!1), b(e));
                        }
                      : void 0;
                    return (0, y.jsxs)(
                      o.default,
                      {
                        testID: 'home-task-' + e.kind,
                        accessibilityRole: t ? 'button' : 'text',
                        disabled: !t,
                        onPress: t,
                        style: ({ pressed: e }) => ({
                          height: 52,
                          flexDirection: 'row-reverse',
                          alignItems: 'center',
                          gap: 10,
                          paddingHorizontal: 12,
                          borderRadius: 12,
                          borderWidth: n.default.hairlineWidth,
                          borderColor: p.line,
                          backgroundColor: e ? p.soft : p.surface,
                        }),
                        children: [
                          (0, y.jsx)(i.default, {
                            style: {
                              width: 32,
                              height: 32,
                              borderRadius: 10,
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: p.warningSoft,
                            },
                            children: (0, y.jsx)(c.Icon, {
                              name: x[e.kind],
                              size: 17,
                              color: p.warning,
                            }),
                          }),
                          (0, y.jsx)(s.Copy, {
                            numberOfLines: 1,
                            style: {
                              flex: 1,
                              minWidth: 0,
                              fontSize: 14,
                              lineHeight: 22,
                              fontFamily: 'Vazirmatn_600SemiBold',
                            },
                            children: e.text,
                          }),
                          t &&
                            (0, y.jsx)(c.Icon, {
                              name: 'chevron',
                              size: 16,
                              color: p.muted,
                            }),
                        ],
                      },
                      e.kind,
                    );
                  }),
                  !!b &&
                    (0, y.jsx)(s.Copy, {
                      style: { fontSize: 12, lineHeight: 20, color: p.muted },
                      children: (0, f.L)(
                        '\u0631\u0648\u06cc \u0647\u0631 \u0645\u0648\u0631\u062f \u0628\u0632\u0646 \u062a\u0627 \u06a9\u0627\u0644\u0627\u0647\u0627\u06cc \u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a \u0628\u0627\u0632 \u0634\u0648\u0646\u062f\u061b \u0642\u06cc\u0645\u062a \u06a9\u0647 \u062b\u0628\u062a \u0634\u0648\u062f\u060c \u0641\u0631\u0648\u0634 \u0648 \u0633\u0648\u062f \u0647\u0645 \u06a9\u0627\u0645\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                      ),
                    }),
                ],
              }),
            }),
          ],
        });
      }),
      (_e.FreePlanLine = function ({ left: e, limit: t, onPlans: n }) {
        const { colors: l } = (0, h.useTheme)(),
          u = e <= 0,
          b = (e) => e.toLocaleString((0, f.numberLocale)()),
          p = u
            ? (0, f.L)(
                '\u0637\u0631\u062d \u0631\u0627\u06cc\u06af\u0627\u0646: \u06a9\u0627\u0631\u0647\u0627\u06cc \u0627\u0645\u062a\u062d\u0627\u0646\u06cc \u062a\u0645\u0627\u0645 \u0634\u062f',
              )
            : (0, f.L)(
                '\u0637\u0631\u062d \u0631\u0627\u06cc\u06af\u0627\u0646: {left} \u0627\u0632 {limit} \u06a9\u0627\u0631 \u0627\u0645\u062a\u062d\u0627\u0646\u06cc \u0645\u0627\u0646\u062f\u0647',
                { left: b(e), limit: b(t) },
              ),
          x = u ? l.warning : l.accent;
        return (0, y.jsxs)(o.default, {
          testID: 'home-free-plan',
          accessibilityRole: n ? 'button' : 'text',
          accessibilityLabel: p,
          disabled: !n,
          onPress: n,
          style: ({ pressed: e }) => ({
            minHeight: 40,
            flexDirection: 'row-reverse',
            alignItems: 'center',
            gap: 8,
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: u ? l.warningBorder : l.line,
            backgroundColor: u ? l.warningSoft : l.accentSoft,
            opacity: e ? 0.8 : 1,
          }),
          children: [
            (0, y.jsx)(c.Icon, { name: 'gift', size: 16, color: x }),
            (0, y.jsx)(s.Copy, {
              testID: 'home-free-plan-line',
              numberOfLines: 1,
              style: {
                flex: 1,
                minWidth: 0,
                fontSize: 13,
                lineHeight: 20,
                color: u ? l.warning : l.text,
                fontFamily: 'Vazirmatn_600SemiBold',
              },
              children: p,
            }),
            !!n &&
              (0, y.jsx)(i.default, {
                style: {
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  borderRadius: 10,
                  backgroundColor: l.accent,
                },
                children: (0, y.jsx)(s.Copy, {
                  style: {
                    fontSize: 12,
                    lineHeight: 18,
                    color: l.onAccent,
                    fontFamily: 'Vazirmatn_700Bold',
                  },
                  children: (0, f.L)(
                    '\u0627\u0631\u062a\u0642\u0627\u06cc \u0627\u0634\u062a\u0631\u0627\u06a9',
                  ),
                }),
              }),
          ],
        });
      }),
      (_e.HomeShortcuts = function ({
        handlers: e,
        columns: t = 4,
        hidden: l = [],
        editing: u = !1,
        onHide: x,
        idPrefix: D = 'home-shortcut',
      }) {
        const { colors: j } = (0, h.useTheme)(),
          P = (0, p.useClubLocked)(),
          z = L(e)
            .filter((e) => !!e.onPress)
            .filter((e) => !l.includes(I(e.testID)));
        if (!z.length) return null;
        const w = 'all' === t ? z.length : t,
          C = w > 4,
          S = Array.from({ length: Math.ceil(z.length / w) }, (e, t) =>
            z.slice(t * w, (t + 1) * w),
          );
        return (0, y.jsx)(i.default, {
          testID: 'home-shortcut' === D ? 'home-shortcuts' : D + 's',
          style: { gap: u ? 14 : 8 },
          children: S.map((e, t) =>
            (0, y.jsxs)(
              i.default,
              {
                style: { flexDirection: 'row-reverse', gap: 8 },
                children: [
                  e.map((e, l) =>
                    (0, y.jsx)(
                      b.EditFrame,
                      {
                        editing: u,
                        name: e.label,
                        seed: 4 * t + l,
                        testID: 'home-edit-key-' + I(e.testID),
                        onRemove: x ? () => x(I(e.testID)) : void 0,
                        style: { flex: 1, minWidth: 0 },
                        children: (0, y.jsxs)(o.default, {
                          testID: e.testID.replace('home-shortcut', D),
                          accessibilityRole: 'button',
                          accessibilityLabel: e.label,
                          onPress: e.onPress,
                          style: ({ pressed: e }) => ({
                            flexGrow: 1,
                            minWidth: 0,
                            minHeight: C ? 70 : 100,
                            paddingHorizontal: C ? 2 : 4,
                            paddingVertical: C ? 6 : 10,
                            gap: C ? 3 : 6,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 14,
                            borderWidth: n.default.hairlineWidth,
                            borderColor: j.line,
                            backgroundColor: j.surface,
                            opacity: e ? 0.75 : 1,
                          }),
                          children: [
                            (0, y.jsx)(i.default, {
                              style: {
                                width: C ? 30 : 40,
                                height: C ? 30 : 40,
                                borderRadius: C ? 10 : 12,
                                backgroundColor: j.accentSoft,
                                alignItems: 'center',
                                justifyContent: 'center',
                              },
                              children: (0, y.jsx)(c.Icon, {
                                name: e.icon,
                                size: C ? 17 : 22,
                                color: j.accent,
                              }),
                            }),
                            (0, y.jsx)(s.Copy, {
                              numberOfLines: C ? 1 : 2,
                              style: {
                                fontSize: C ? 11.5 : 13,
                                lineHeight: C ? 17 : 20,
                                fontFamily: 'Vazirmatn_600SemiBold',
                                textAlign: 'center',
                              },
                              children: (C && e.short) || e.label,
                            }),
                            P &&
                              'club' === I(e.testID) &&
                              (0, y.jsxs)(i.default, {
                                testID:
                                  e.testID.replace('home-shortcut', D) +
                                  '-lock',
                                style: {
                                  position: 'absolute',
                                  top: 6,
                                  left: 6,
                                  flexDirection: 'row-reverse',
                                  alignItems: 'center',
                                  gap: 3,
                                  paddingHorizontal: 6,
                                  borderRadius: 999,
                                  borderWidth: 1,
                                  borderColor: j.warningBorder,
                                  backgroundColor: j.warningSoft,
                                },
                                children: [
                                  (0, y.jsx)(c.Icon, {
                                    name: 'lock',
                                    size: 10,
                                    color: j.warning,
                                  }),
                                  (0, y.jsx)(s.Copy, {
                                    style: {
                                      fontSize: 10,
                                      lineHeight: 16,
                                      fontFamily: 'Vazirmatn_600SemiBold',
                                      color: j.warning,
                                    },
                                    children: (0, f.L)(
                                      '\u067e\u0644\u0627\u0633',
                                    ),
                                  }),
                                ],
                              }),
                          ],
                        }),
                      },
                      e.testID,
                    ),
                  ),
                  Array.from({ length: w - e.length }, (e, t) =>
                    (0, y.jsx)(i.default, { style: { flex: 1 } }, 'pad' + t),
                  ),
                ],
              },
              t,
            ),
          ),
        });
      }),
      (_e.homeKeyTiles = L),
      Object.defineProperty(_e, 'homeKeyInfo', {
        enumerable: !0,
        get: function () {
          return D;
        },
      }));
    var t = r(d[0]),
      o = e(r(d[1])),
      n = e(r(d[2])),
      i = e(r(d[3])),
      s = r(d[4]),
      l = r(d[5]),
      c = r(d[6]),
      h = r(d[7]),
      u = r(d[8]),
      f = r(d[9]),
      b = r(d[10]),
      p = r(d[11]),
      y = r(d[12]);
    const x = {
      noSellPrice: 'tag',
      noBuyPrice: 'tag',
      unpricedSold: 'up',
      uncostedSold: 'up',
      unpricedReceived: 'down',
    };
    const I = (e) => e.slice(14);
    function L(e) {
      return [
        {
          testID: 'home-shortcut-learn',
          label: (0, f.L)('\u0622\u0645\u0648\u0632\u0634'),
          icon: 'ai',
          onPress: e.learn,
        },
        {
          testID: 'home-shortcut-ledger',
          label: (0, f.L)('\u062d\u0633\u0627\u0628\u200c\u0647\u0627'),
          icon: 'user',
          onPress: e.ledger,
        },
        {
          testID: 'home-shortcut-expenses',
          label: (0, f.L)('\u0647\u0632\u06cc\u0646\u0647\u200c\u0647\u0627'),
          icon: 'wallet',
          onPress: e.expenses,
        },
        {
          testID: 'home-shortcut-reports',
          label: (0, f.L)(
            '\u06af\u0632\u0627\u0631\u0634 \u0641\u0631\u0648\u0634 \u0648 \u0633\u0648\u062f',
          ),
          short: (0, f.L)('\u06af\u0632\u0627\u0631\u0634'),
          icon: 'chart',
          onPress: e.reports,
        },
        {
          testID: 'home-shortcut-reminders',
          label: (0, f.L)(
            '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc\u200c\u0647\u0627',
          ),
          icon: 'bell',
          onPress: e.reminders,
        },
        {
          testID: 'home-shortcut-staff',
          label: (0, f.L)('\u06a9\u0627\u0631\u0645\u0646\u062f\u0627\u0646'),
          icon: 'user',
          onPress: e.staff,
        },
        {
          testID: 'home-shortcut-club',
          label: (0, f.L)(
            '\u0628\u0627\u0634\u06af\u0627\u0647 \u0645\u0634\u062a\u0631\u06cc\u0627\u0646',
          ),
          short: (0, f.L)('\u0628\u0627\u0634\u06af\u0627\u0647'),
          icon: 'star',
          onPress: e.club,
        },
        {
          testID: 'home-shortcut-referral',
          label: (0, f.L)(
            '\u062f\u0639\u0648\u062a \u062f\u0648\u0633\u062a\u0627\u0646',
          ),
          short: (0, f.L)('\u062f\u0639\u0648\u062a'),
          icon: 'gift',
          onPress: e.referral,
        },
        {
          testID: 'home-shortcut-cheques',
          label: (0, f.L)('\u0686\u06a9\u200c\u0647\u0627'),
          icon: 'cheque',
          onPress: e.cheques,
        },
        {
          testID: 'home-shortcut-ai',
          label: (0, f.L)(
            '\u0627\u062a\u0635\u0627\u0644 \u0628\u0647 \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc',
          ),
          short: (0, f.L)(
            '\u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc',
          ),
          icon: 'ai',
          onPress: e.ai,
        },
        {
          testID: 'home-shortcut-api',
          label: (0, f.L)(
            '\u0627\u062a\u0635\u0627\u0644 \u0633\u0627\u06cc\u062a (API)',
          ),
          short: (0, f.L)('API'),
          icon: 'link',
          onPress: e.api,
        },
        {
          testID: 'home-shortcut-invoices',
          label: (0, f.L)(
            '\u0641\u0627\u06a9\u062a\u0648\u0631\u0647\u0627\u06cc \u062b\u0628\u062a\u200c\u0634\u062f\u0647',
          ),
          short: (0, f.L)('\u0641\u0627\u06a9\u062a\u0648\u0631\u0647\u0627'),
          icon: 'receipt',
          onPress: e.invoices,
        },
      ];
    }
    const D = (e) =>
      L(e)
        .filter((e) => !!e.onPress)
        .map((e) => ({ key: I(e.testID), label: e.label, icon: e.icon }));
  },
  926,
  [2, 232, 17, 99, 407, 539, 385, 382, 927, 311, 928, 913, 338],
);
