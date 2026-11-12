// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 794; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.NearHint = function ({
        name: e,
        testKey: t = 'voice-near',
        disabled: s,
        onUse: c,
      }) {
        const { colors: u } = (0, y.useTheme)();
        return (0, x.jsxs)(l.default, {
          testID: t,
          style: {
            flexDirection: 'row-reverse',
            alignItems: 'center',
            gap: 8,
            paddingVertical: 4,
          },
          children: [
            (0, x.jsx)(b.Copy, {
              style: { flex: 1, fontSize: 12, lineHeight: 19, color: u.muted },
              children: h.voiceFa.nearHint.replace('{name}', e),
            }),
            (0, x.jsx)(n.default, {
              testID: t + '-use',
              accessibilityRole: 'button',
              accessibilityLabel: h.voiceFa.nearUse + ' ' + e,
              disabled: s,
              onPress: c,
              style: ({ pressed: e }) => ({
                minHeight: 34,
                paddingHorizontal: 12,
                borderRadius: 10,
                justifyContent: 'center',
                backgroundColor: e ? u.line : u.soft,
                borderWidth: o.default.hairlineWidth,
                borderColor: u.line,
              }),
              children: (0, x.jsx)(b.Copy, {
                style: {
                  fontSize: 12,
                  lineHeight: 18,
                  color: u.accent,
                  fontFamily: 'Vazirmatn_600SemiBold',
                },
                children: h.voiceFa.nearUse,
              }),
            }),
          ],
        });
      }),
      (_e.UndoLine = function ({ text: e, testKey: t, onUndo: o }) {
        const { colors: s } = (0, y.useTheme)();
        return (0, x.jsxs)(l.default, {
          testID: t,
          style: {
            flexDirection: 'row-reverse',
            alignItems: 'center',
            gap: 8,
            paddingVertical: 2,
          },
          children: [
            (0, x.jsx)(p.Icon, { name: 'check', size: 14, color: s.success }),
            (0, x.jsx)(b.Copy, {
              style: { flex: 1, fontSize: 12, lineHeight: 19, color: s.muted },
              children: e,
            }),
            (0, x.jsx)(n.default, {
              testID: t + '-undo',
              accessibilityRole: 'button',
              onPress: o,
              hitSlop: 8,
              style: {
                minHeight: 32,
                justifyContent: 'center',
                paddingHorizontal: 6,
              },
              children: (0, x.jsx)(b.Copy, {
                style: {
                  fontSize: 12,
                  lineHeight: 18,
                  color: s.accent,
                  fontFamily: 'Vazirmatn_600SemiBold',
                },
                children: h.voiceFa.undo,
              }),
            }),
          ],
        });
      }),
      (_e.PersonChoice = j),
      (_e.NoteLine = function ({
        note: e,
        testKey: o = 'voice-note',
        disabled: c,
        onChange: u,
      }) {
        const { colors: f } = (0, y.useTheme)(),
          [p, j] = (0, t.useState)(!1);
        return p
          ? (0, x.jsx)(l.default, {
              style: { gap: 4 },
              children: (0, x.jsx)(b.Input, {
                testID: o + '-input',
                accessibilityLabel: h.voiceFa.noteLabel,
                autoFocus: !0,
                value: e || '',
                maxLength: 200,
                placeholder: h.voiceFa.notePlaceholder,
                onChangeText: u,
                onBlur: () => j(!1),
                style: { minHeight: 40, paddingVertical: 6, fontSize: 13 },
              }),
            })
          : e
            ? (0, x.jsx)(n.default, {
                testID: o,
                accessibilityRole: 'button',
                accessibilityLabel: h.voiceFa.noteLabel + ': ' + e,
                disabled: c,
                onPress: () => j(!0),
                style: {
                  flexDirection: 'row-reverse',
                  alignItems: 'flex-start',
                  gap: 4,
                },
                children: (0, x.jsx)(b.Copy, {
                  numberOfLines: 2,
                  style: {
                    flex: 1,
                    fontSize: 11.5,
                    lineHeight: 18,
                    color: f.muted,
                  },
                  children: (0, s.L)(
                    '\u06cc\u0627\u062f\u062f\u0627\u0634\u062a: {note}',
                    { note: e },
                  ),
                }),
              })
            : null;
      }),
      (_e.DraftBanner = function ({ text: e, onContinue: t, onDiscard: c }) {
        const { colors: u } = (0, y.useTheme)();
        return (0, x.jsxs)(l.default, {
          testID: 'voice-draft-banner',
          accessibilityRole: 'alert',
          style: {
            flexDirection: 'row-reverse',
            alignItems: 'center',
            gap: 8,
            padding: 10,
            borderRadius: 14,
            backgroundColor: u.warningSoft,
            borderWidth: o.default.hairlineWidth,
            borderColor: u.warningBorder,
          },
          children: [
            (0, x.jsx)(p.Icon, { name: 'clock', size: 16, color: u.warning }),
            (0, x.jsx)(b.Copy, {
              style: {
                flex: 1,
                fontSize: 12.5,
                lineHeight: 20,
                color: u.warning,
              },
              children: e,
            }),
            (0, x.jsx)(n.default, {
              testID: 'voice-draft-continue',
              accessibilityRole: 'button',
              onPress: t,
              style: {
                minHeight: 34,
                paddingHorizontal: 10,
                borderRadius: 10,
                justifyContent: 'center',
                backgroundColor: u.surface,
              },
              children: (0, x.jsx)(b.Copy, {
                style: {
                  fontSize: 12,
                  color: u.accent,
                  fontFamily: 'Vazirmatn_600SemiBold',
                },
                children: (0, s.L)('\u0627\u062f\u0627\u0645\u0647'),
              }),
            }),
            (0, x.jsx)(n.default, {
              testID: 'voice-draft-discard',
              accessibilityRole: 'button',
              onPress: c,
              style: {
                minHeight: 34,
                paddingHorizontal: 10,
                borderRadius: 10,
                justifyContent: 'center',
              },
              children: (0, x.jsx)(b.Copy, {
                style: {
                  fontSize: 12,
                  color: u.danger,
                  fontFamily: 'Vazirmatn_600SemiBold',
                },
                children: (0, s.L)('\u062d\u0630\u0641'),
              }),
            }),
          ],
        });
      }),
      (_e.SameNamePrompt = function ({
        testKey: e,
        text: t,
        people: n,
        phone: o,
        disabled: u,
        onPick: f,
        onPhone: h,
      }) {
        return (0, x.jsxs)(l.default, {
          testID: e,
          style: { gap: 6 },
          children: [
            (0, x.jsx)(j, {
              testKey: e + '-person',
              people: n,
              disabled: u,
              onPick: f,
              reason: t,
            }),
            (0, x.jsx)(b.Input, {
              testID: e + '-phone',
              accessibilityLabel: (0, s.L)(
                '\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644 \u0634\u062e\u0635 \u062c\u062f\u06cc\u062f',
              ),
              placeholder: (0, s.L)(
                '\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644 \u0634\u062e\u0635 \u062c\u062f\u06cc\u062f\u060c \u0645\u062b\u0644\u0627\u064b \u06f0\u06f9\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9',
              ),
              value: o || '',
              editable: !u,
              onChangeText: (e) =>
                h(
                  (0, c.latinDigits)(e)
                    .replace(/[^0-9]/g, '')
                    .slice(0, 15),
                ),
              keyboardType: 'phone-pad',
              inputMode: 'tel',
              maxLength: 20,
              ltr: !0,
              style: { minHeight: 44, paddingVertical: 8 },
            }),
          ],
        });
      }));
    var t = r(d[0]),
      n = e(r(d[1])),
      o = e(r(d[2])),
      l = e(r(d[3])),
      s = r(d[4]),
      c = r(d[5]),
      u = r(d[6]),
      f = r(d[7]),
      h = r(d[8]),
      y = r(d[9]),
      b = r(d[10]),
      p = r(d[11]),
      x = r(d[12]);
    function j({
      people: e,
      testKey: t = 'voice-person',
      disabled: s,
      onPick: c,
      onNew: j,
      reason: C,
    }) {
      const { colors: z } = (0, y.useTheme)();
      return (0, x.jsxs)(l.default, {
        testID: t,
        style: { gap: 6 },
        children: [
          !!C &&
            (0, x.jsx)(b.Copy, {
              style: { fontSize: 12, lineHeight: 19, color: z.warning },
              children: C,
            }),
          e.slice(0, 6).map((e) => {
            const h = [
              (0, f.maskedPhone)(e.phone),
              void 0 !== e.balanceToman
                ? (0, u.ownerShort)(e.balanceToman)
                : '',
            ]
              .filter(Boolean)
              .join(' \xb7 ');
            return (0, x.jsxs)(
              n.default,
              {
                testID: t + '-pick',
                accessibilityRole: 'button',
                accessibilityLabel: [e.name, h].filter(Boolean).join('\u060c '),
                disabled: s,
                onPress: () => c(e),
                style: ({ pressed: e }) => ({
                  minHeight: 44,
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  borderRadius: 12,
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  gap: 8,
                  backgroundColor: e ? z.line : z.surface,
                  borderWidth: o.default.hairlineWidth,
                  borderColor: z.line,
                }),
                children: [
                  (0, x.jsx)(p.Icon, {
                    name: 'user',
                    size: 16,
                    color: z.muted,
                  }),
                  (0, x.jsxs)(l.default, {
                    style: { flex: 1, minWidth: 0 },
                    children: [
                      (0, x.jsx)(b.Copy, {
                        numberOfLines: 1,
                        style: {
                          fontSize: 13,
                          lineHeight: 20,
                          fontFamily: 'Vazirmatn_600SemiBold',
                        },
                        children: e.name,
                      }),
                      !!h &&
                        (0, x.jsx)(b.Copy, {
                          numberOfLines: 1,
                          style: {
                            fontSize: 11,
                            lineHeight: 17,
                            color: z.muted,
                          },
                          children: h,
                        }),
                    ],
                  }),
                ],
              },
              e.id,
            );
          }),
          j &&
            (0, x.jsx)(n.default, {
              testID: t + '-new',
              accessibilityRole: 'button',
              disabled: s,
              onPress: j,
              style: {
                alignSelf: 'flex-end',
                minHeight: 36,
                paddingHorizontal: 12,
                borderRadius: 10,
                justifyContent: 'center',
                backgroundColor: z.soft,
              },
              children: (0, x.jsx)(b.Copy, {
                style: {
                  fontSize: 12,
                  color: z.success,
                  fontFamily: 'Vazirmatn_600SemiBold',
                },
                children: h.voiceFa.makeNew,
              }),
            }),
        ],
      });
    }
  },
  794,
  [2, 232, 17, 99, 311, 440, 475, 529, 692, 382, 407, 385, 338],
);
