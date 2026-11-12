// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 900; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'userNote', {
        enumerable: !0,
        get: function () {
          return y.userNote;
        },
      }),
      (_e.NoteTag = function ({ onPress: e }) {
        const { colors: t } = (0, h.useTheme)();
        return (0, b.jsx)(o.default, {
          testID: 'book-note-tag',
          accessibilityRole: 'button',
          accessibilityLabel: (0, l.L)(
            '\u06cc\u0627\u062f\u062f\u0627\u0634\u062a',
          ),
          onPress: e,
          hitSlop: 6,
          style: ({ pressed: e }) => ({
            alignSelf: 'flex-end',
            paddingHorizontal: 8,
            paddingVertical: 1,
            borderRadius: 999,
            backgroundColor: e ? t.line : t.soft,
            borderWidth: n.default.hairlineWidth,
            borderColor: t.line,
          }),
          children: (0, b.jsx)(c.Copy, {
            style: {
              fontSize: 10.5,
              lineHeight: 17,
              color: t.accent,
              fontFamily: 'Vazirmatn_600SemiBold',
            },
            children: (0, l.L)('\u06cc\u0627\u062f\u062f\u0627\u0634\u062a'),
          }),
        });
      }),
      (_e.BookNoteSheet = function ({
        shop: e,
        contactId: o,
        row: n,
        canWrite: p,
        onClose: j,
        onSaved: S,
      }) {
        const { colors: L } = (0, h.useTheme)(),
          [k, C] = (0, t.useState)(!1),
          [I, N] = (0, t.useState)(''),
          [v, D] = (0, t.useState)('');
        (0, t.useEffect)(() => {
          (C(!1), N(n ? (0, y.userNote)(n) : ''), D(''));
        }, [n?.key]);
        const P = !!n && !n.posted && !!n.cheque;
        return (0, b.jsx)(u.Sheet, {
          visible: !!n,
          title: (0, l.L)('\u06cc\u0627\u062f\u062f\u0627\u0634\u062a'),
          onClose: j,
          children:
            n &&
            (0, b.jsxs)(s.default, {
              testID: 'book-note-sheet',
              style: { gap: 12 },
              children: [
                k
                  ? (0, b.jsx)(c.Input, {
                      testID: 'book-note-input',
                      multiline: !0,
                      autoFocus: !0,
                      value: I,
                      maxLength: 500,
                      onChangeText: N,
                      style: {
                        minHeight: 90,
                        paddingVertical: 10,
                        textAlignVertical: 'top',
                      },
                    })
                  : (0, b.jsx)(c.Copy, {
                      selectable: !0,
                      testID: 'book-note-text',
                      style: { fontSize: 15, lineHeight: 25 },
                      children:
                        (0, y.userNote)(n) ||
                        (0, l.L)(
                          '\u06cc\u0627\u062f\u062f\u0627\u0634\u062a\u06cc \u0646\u062f\u0627\u0631\u062f.',
                        ),
                    }),
                (0, b.jsx)(c.Copy, {
                  style: { fontSize: 11.5, lineHeight: 18, color: L.muted },
                  children: (0, l.L)(
                    '\u0641\u0642\u0637 \u0628\u0631\u0627\u06cc \u062e\u0648\u062f\u062a\u0627\u0646 \u0627\u0633\u062a\u061b \u062f\u0631 \u0635\u0648\u0631\u062a\u200c\u062d\u0633\u0627\u0628 \u0648 \u0641\u0627\u06a9\u062a\u0648\u0631 \u0645\u0634\u062a\u0631\u06cc \u0686\u0627\u067e \u0646\u0645\u06cc\u200c\u0634\u0648\u062f.',
                  ),
                }),
                !!v &&
                  (0, b.jsx)(c.Copy, {
                    accessibilityRole: 'alert',
                    style: { fontSize: 12, color: L.danger },
                    children: v,
                  }),
                p &&
                  (k
                    ? (0, b.jsxs)(s.default, {
                        style: { flexDirection: 'row-reverse', gap: 10 },
                        children: [
                          (0, b.jsx)(s.default, {
                            style: { flex: 1.4 },
                            children: (0, b.jsx)(c.Button, {
                              testID: 'book-note-save',
                              disabled: !I.trim(),
                              onPress: async function () {
                                if (n)
                                  try {
                                    (await (0, x.setBookNote)(e, o, {
                                      rowId: n.id,
                                      cheque: P,
                                      text: I.trim(),
                                    }),
                                      await S(),
                                      j());
                                  } catch (e) {
                                    D((0, f.errorText)(e));
                                  }
                              },
                              children: (0, l.L)(
                                '\u0630\u062e\u06cc\u0631\u0647',
                              ),
                            }),
                          }),
                          (0, b.jsx)(s.default, {
                            style: { flex: 1 },
                            children: (0, b.jsx)(c.Button, {
                              ghost: !0,
                              onPress: () => C(!1),
                              children: (0, l.L)(
                                '\u0627\u0646\u0635\u0631\u0627\u0641',
                              ),
                            }),
                          }),
                        ],
                      })
                    : (0, b.jsx)(c.Button, {
                        testID: 'book-note-edit',
                        secondary: !0,
                        onPress: () => C(!0),
                        children: (0, y.userNote)(n)
                          ? (0, l.L)(
                              '\u0648\u06cc\u0631\u0627\u06cc\u0634 \u06cc\u0627\u062f\u062f\u0627\u0634\u062a',
                            )
                          : (0, l.L)(
                              '\u0646\u0648\u0634\u062a\u0646 \u06cc\u0627\u062f\u062f\u0627\u0634\u062a',
                            ),
                      })),
              ],
            }),
        });
      }));
    var t = r(d[0]),
      o = e(r(d[1])),
      n = e(r(d[2])),
      s = e(r(d[3])),
      l = r(d[4]),
      c = r(d[5]),
      u = r(d[6]),
      h = r(d[7]),
      f = r(d[8]),
      x = r(d[9]),
      y = r(d[10]),
      b = r(d[11]);
  },
  900,
  [2, 232, 17, 99, 311, 407, 539, 382, 690, 519, 901, 338],
);
