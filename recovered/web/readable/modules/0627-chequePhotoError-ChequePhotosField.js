// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 627; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'chequePhotoError', {
        enumerable: !0,
        get: function () {
          return C.chequePhotoError;
        },
      }),
      (_e.ChequePhotosField = function ({
        value: e,
        onPick: I,
        onRemove: z,
        disabled: D = !1,
        readOnly: $ = !1,
        testID: R = 'cheque-photos',
        pick: v = j.pickChequePhoto,
      }) {
        const { colors: w } = (0, u.useTheme)(),
          [H, k] = (0, x.useConfirm)(),
          [W, _] = (0, t.useState)(null),
          [q, F] = (0, t.useState)(null),
          [V, B] = (0, t.useState)(null),
          [E, O] = (0, t.useState)('');
        async function M(e, t) {
          (_(null), O(''), B(e));
          try {
            const o = await v(t);
            o && (await I(e, o));
          } catch (e) {
            O((0, C.chequePhotoError)(e));
          } finally {
            B(null);
          }
        }
        function T(e) {
          H({
            title: (0, c.L)(
              '\u062d\u0630\u0641 \u0639\u06a9\u0633 \u0686\u06a9',
            ),
            text: (0, c.L)(
              '\u0639\u06a9\u0633 \xab{side}\xbb \u062d\u0630\u0641 \u0634\u0648\u062f\u061f',
              { side: L(e) },
            ),
            ok: (0, c.L)('\u062d\u0630\u0641'),
            tone: 'danger',
            run: async () => {
              (O(''), B(e));
              try {
                await z(e);
              } catch (e) {
                O((0, C.chequePhotoError)(e));
              } finally {
                B(null);
              }
            },
          });
        }
        const A = (t) => {
          const u = e[t],
            y = V === t,
            x = L(t);
          return !u && $
            ? (0, S.jsxs)(n.default, {
                testID: `${R}-${t}-none`,
                style: {
                  height: 128,
                  borderRadius: 14,
                  borderWidth: s.default.hairlineWidth,
                  borderColor: w.line,
                  backgroundColor: w.soft,
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6,
                },
                children: [
                  (0, S.jsx)(h.Copy, {
                    style: {
                      fontSize: 14,
                      lineHeight: 22,
                      fontFamily: 'Vazirmatn_600SemiBold',
                    },
                    children: x,
                  }),
                  (0, S.jsx)(h.Copy, {
                    style: { fontSize: 11.5, lineHeight: 18, color: w.muted },
                    children: (0, c.L)(
                      '\u0628\u062f\u0648\u0646 \u0639\u06a9\u0633',
                    ),
                  }),
                ],
              })
            : u
              ? (0, S.jsxs)(n.default, {
                  style: { gap: 6 },
                  children: [
                    (0, S.jsxs)(l.default, {
                      testID: `${R}-${t}-view`,
                      accessibilityRole: 'imagebutton',
                      accessibilityLabel: (0, c.L)(
                        '\u062f\u06cc\u062f\u0646 \u0639\u06a9\u0633 {side} \u062f\u0631 \u0627\u0646\u062f\u0627\u0632\u0647\u0654 \u0628\u0632\u0631\u06af',
                        { side: x },
                      ),
                      onPress: () => F(t),
                      style: ({ pressed: e }) => ({
                        borderRadius: 14,
                        borderWidth: s.default.hairlineWidth,
                        borderColor: w.line,
                        overflow: 'hidden',
                        opacity: e ? 0.85 : 1,
                      }),
                      children: [
                        (0, S.jsx)(b.ProductPhoto, {
                          product: { name: x, photo: u.uri },
                          height: 86,
                          fit: 'contain',
                        }),
                        (0, S.jsx)(n.default, {
                          style: {
                            position: 'absolute',
                            top: 6,
                            right: 6,
                            paddingHorizontal: 8,
                            paddingVertical: 1,
                            borderRadius: 8,
                            backgroundColor: w.surface,
                          },
                          children: (0, S.jsx)(h.Copy, {
                            style: {
                              fontSize: 11,
                              lineHeight: 18,
                              fontFamily: 'Vazirmatn_600SemiBold',
                            },
                            children: x,
                          }),
                        }),
                        u.waiting &&
                          (0, S.jsx)(n.default, {
                            testID: `${R}-${t}-waiting`,
                            style: {
                              position: 'absolute',
                              bottom: 6,
                              left: 6,
                              right: 6,
                              alignItems: 'center',
                            },
                            children: (0, S.jsx)(h.Copy, {
                              style: {
                                fontSize: 11,
                                lineHeight: 18,
                                paddingHorizontal: 8,
                                borderRadius: 8,
                                overflow: 'hidden',
                                backgroundColor: w.surface,
                                color: w.muted,
                              },
                              children: (0, c.L)(
                                '\u062f\u0631 \u0627\u0646\u062a\u0638\u0627\u0631 \u0627\u0631\u0633\u0627\u0644',
                              ),
                            }),
                          }),
                        y &&
                          (0, S.jsx)(n.default, {
                            style: [
                              s.default.absoluteFill,
                              {
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: w.surface + 'b3',
                              },
                            ],
                            children: (0, S.jsx)(o.default, {
                              color: w.accent,
                            }),
                          }),
                      ],
                    }),
                    !$ &&
                      (0, S.jsxs)(n.default, {
                        style: { flexDirection: 'row-reverse', gap: 6 },
                        children: [
                          (0, S.jsx)(P, {
                            testID: `${R}-${t}-replace`,
                            label: (0, c.L)(
                              '\u0639\u0648\u0636 \u06a9\u0631\u062f\u0646',
                            ),
                            disabled: D || !!V,
                            onPress: () => _(t),
                          }),
                          (0, S.jsx)(P, {
                            testID: `${R}-${t}-remove`,
                            label: (0, c.L)('\u062d\u0630\u0641'),
                            danger: !0,
                            disabled: D || !!V,
                            onPress: () => T(t),
                          }),
                        ],
                      }),
                  ],
                })
              : (0, S.jsxs)(l.default, {
                  testID: `${R}-${t}-add`,
                  accessibilityRole: 'button',
                  accessibilityLabel: (0, c.L)(
                    '\u0627\u0641\u0632\u0648\u062f\u0646 \u0639\u06a9\u0633 {side}',
                    { side: x },
                  ),
                  accessibilityState: { disabled: D || !!V, busy: y },
                  disabled: D || !!V,
                  onPress: () => _(t),
                  style: ({ pressed: e }) => ({
                    height: 128,
                    borderRadius: 14,
                    borderWidth: 1.5,
                    borderStyle: 'dashed',
                    borderColor: w.accent,
                    backgroundColor: e ? w.accentSoft : w.soft,
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                    opacity: D ? 0.55 : 1,
                  }),
                  children: [
                    y
                      ? (0, S.jsx)(o.default, { color: w.accent })
                      : (0, S.jsx)(f.Icon, {
                          name: 'camera',
                          size: 28,
                          color: w.accent,
                        }),
                    (0, S.jsx)(h.Copy, {
                      style: {
                        fontSize: 14,
                        lineHeight: 22,
                        fontFamily: 'Vazirmatn_600SemiBold',
                      },
                      children: x,
                    }),
                    (0, S.jsx)(h.Copy, {
                      style: { fontSize: 11.5, lineHeight: 18, color: w.muted },
                      children: y
                        ? (0, c.L)(
                            '\u062f\u0631 \u062d\u0627\u0644 \u0622\u0645\u0627\u062f\u0647 \u06a9\u0631\u062f\u0646 \u0639\u06a9\u0633\u2026',
                          )
                        : (0, c.L)(
                            '\u0627\u0641\u0632\u0648\u062f\u0646 \u0639\u06a9\u0633',
                          ),
                    }),
                  ],
                });
        };
        return (0, S.jsxs)(n.default, {
          testID: R,
          style: { gap: 8 },
          children: [
            k,
            !$ &&
              (0, S.jsx)(h.Copy, {
                style: { fontSize: 12.5, lineHeight: 20, color: w.muted },
                children: (0, c.L)(
                  '\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u062f\u0648 \u0639\u06a9\u0633 \u0628\u06af\u0630\u0627\u0631\u06cc\u062f: \u0631\u0648\u06cc \u0686\u06a9 \u0648 \u067e\u0634\u062a \u0686\u06a9',
                ),
              }),
            (0, S.jsxs)(n.default, {
              style: { flexDirection: 'row-reverse', gap: 10 },
              children: [
                (0, S.jsx)(n.default, {
                  style: { flex: 1, minWidth: 0 },
                  children: A('front'),
                }),
                (0, S.jsx)(n.default, {
                  style: { flex: 1, minWidth: 0 },
                  children: A('back'),
                }),
              ],
            }),
            !!E &&
              (0, S.jsx)(h.Copy, {
                testID: `${R}-error`,
                accessibilityRole: 'alert',
                style: { fontSize: 13, lineHeight: 21, color: w.danger },
                children: E,
              }),
            (0, S.jsx)(y.Sheet, {
              visible: !!W,
              title: W
                ? (0, c.L)('\u0639\u06a9\u0633 {side}', { side: L(W) })
                : '',
              onClose: () => _(null),
              children: (0, S.jsxs)(n.default, {
                style: { gap: 4 },
                children: [
                  (0, S.jsx)(p.SheetRow, {
                    testID: `${R}-camera`,
                    icon: 'camera',
                    title: (0, c.L)('\u062f\u0648\u0631\u0628\u06cc\u0646'),
                    hint: (0, c.L)(
                      '\u0647\u0645\u06cc\u0646 \u062d\u0627\u0644\u0627 \u0627\u0632 \u0686\u06a9 \u0639\u06a9\u0633 \u0628\u06af\u06cc\u0631\u06cc\u062f',
                    ),
                    onPress: () => {
                      W && M(W, !0);
                    },
                  }),
                  (0, S.jsx)(p.SheetRow, {
                    testID: `${R}-gallery`,
                    icon: 'photo',
                    title: (0, c.L)(
                      '\u0627\u0632 \u06af\u0627\u0644\u0631\u06cc',
                    ),
                    hint: (0, c.L)(
                      '\u0639\u06a9\u0633\u06cc \u06a9\u0647 \u0642\u0628\u0644\u0627\u064b \u06af\u0631\u0641\u062a\u0647\u200c\u0627\u06cc\u062f',
                    ),
                    onPress: () => {
                      W && M(W, !1);
                    },
                  }),
                ],
              }),
            }),
            (0, S.jsx)(y.Sheet, {
              visible: !!q && !!e[q],
              title: q ? L(q) : '',
              onClose: () => F(null),
              children:
                q &&
                e[q] &&
                (0, S.jsx)(n.default, {
                  testID: `${R}-full`,
                  children: (0, S.jsx)(b.ProductPhoto, {
                    product: { name: L(q), photo: e[q].uri },
                    height: 360,
                    fit: 'contain',
                  }),
                }),
            }),
          ],
        });
      }));
    var t = r(d[0]),
      o = e(r(d[1])),
      l = e(r(d[2])),
      s = e(r(d[3])),
      n = e(r(d[4])),
      c = r(d[5]),
      u = r(d[6]),
      h = r(d[7]),
      f = r(d[8]),
      y = r(d[9]),
      b = r(d[10]),
      x = r(d[11]),
      j = r(d[12]),
      p = r(d[13]),
      C = r(d[14]),
      S = r(d[15]);
    const L = (e) =>
      'front' === e
        ? (0, c.L)('\u0631\u0648\u06cc \u0686\u06a9')
        : (0, c.L)('\u067e\u0634\u062a \u0686\u06a9');
    function P({ label: e, onPress: t, danger: o, disabled: n, testID: c }) {
      const { colors: f } = (0, u.useTheme)(),
        y = o ? f.danger : f.text;
      return (0, S.jsx)(l.default, {
        testID: c,
        accessibilityRole: 'button',
        accessibilityState: { disabled: !!n },
        disabled: n,
        hitSlop: 4,
        onPress: t,
        style: ({ pressed: e }) => ({
          flex: 1,
          minWidth: 0,
          height: 36,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 4,
          backgroundColor: e ? f.line : f.soft,
          borderWidth: s.default.hairlineWidth,
          borderColor: f.line,
          opacity: n ? 0.55 : 1,
        }),
        children: (0, S.jsx)(h.Copy, {
          numberOfLines: 1,
          style: {
            fontSize: 12.5,
            lineHeight: 20,
            color: y,
            fontFamily: 'Vazirmatn_600SemiBold',
          },
          children: e,
        }),
      });
    }
  },
  627,
  [2, 217, 232, 17, 99, 311, 382, 407, 385, 539, 628, 534, 634, 517, 654, 338],
);
