// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 848; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.priceFixTitle = F),
      (_e.MissingPriceSheet = function ({
        visible: e,
        kind: k,
        items: _,
        total: R,
        products: P,
        onSave: V,
        onEditor: A,
        onRefresh: B,
        onClose: T,
        testID: W = 'report',
        loading: E = '',
        error: M = '',
      }) {
        const { colors: O } = (0, x.useTheme)(),
          [K, G] = (0, t.useState)(null),
          [q, J] = (0, t.useState)({}),
          [N, Q] = (0, t.useState)({}),
          [U, X] = (0, t.useState)(() => new Set()),
          [Y, Z] = (0, t.useState)(null),
          [ee, te] = (0, t.useState)(''),
          ne = (0, t.useRef)(!1);
        if (
          ((0, t.useEffect)(() => {
            e && (G(null), J({}), Q({}), X(new Set()), Z(null), te(''));
          }, [e, k]),
          (0, t.useEffect)(() => {
            if (!ee) return;
            const e = setTimeout(() => te(''), 4e3);
            return () => clearTimeout(e);
          }, [ee]),
          !k)
        )
          return (0, z.jsx)(p.Sheet, {
            visible: !1,
            title: '',
            onClose: T,
            children: null,
          });
        const ie = (0, C.priceFixField)(k),
          oe = (0, C.remainingFixItems)(_, U),
          re = (0, C.remainingFixCount)(R, _, U),
          le = (e) => P.find((t) => t.id === e && !t.archivedAt),
          se = { fontSize: 12, lineHeight: 18, color: O.muted };
        function de(e) {
          return q[e.productId] ?? (0, C.priceFixStart)(le(e.productId), ie);
        }
        async function ce(e) {
          if (!V || ne.current) return;
          const t = le(e.productId),
            n = t?.[ie],
            l = (0, C.parsePriceFix)(de(e), n);
          if ('error' in l)
            return void Q((t) => ({
              ...t,
              [e.productId]:
                'too_large' === l.error
                  ? (0, S.L)(
                      '\u0642\u06cc\u0645\u062a \xab{name}\xbb \u062e\u06cc\u0644\u06cc \u0628\u0632\u0631\u06af \u0627\u0633\u062a\u061b \u0639\u062f\u062f \u0631\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0646\u06af\u0627\u0647 \u06a9\u0646.',
                      { name: e.name },
                    )
                  : 'price' === ie
                    ? (0, S.L)(
                        '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634 \xab{name}\xbb \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u061b \u0639\u062f\u062f \u0628\u0627\u06cc\u062f \u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 \u0635\u0641\u0631 \u0628\u0627\u0634\u062f.',
                        { name: e.name },
                      )
                    : (0, S.L)(
                        '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f \xab{name}\xbb \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u061b \u0639\u062f\u062f \u0628\u0627\u06cc\u062f \u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 \u0635\u0641\u0631 \u0628\u0627\u0634\u062f.',
                        { name: e.name },
                      ),
            }));
          ((ne.current = !0),
            Z(e.productId),
            Q((t) => ({ ...t, [e.productId]: '' })));
          try {
            await V(e.productId, ie, l.value);
          } catch (t) {
            return void Q((n) => ({
              ...n,
              [e.productId]: (0, S.L)(
                '\u0642\u06cc\u0645\u062a \xab{name}\xbb \u062b\u0628\u062a \u0646\u0634\u062f: {reason}',
                { name: e.name, reason: (0, y.message)(t) },
              ),
            }));
          } finally {
            ((ne.current = !1), Z(null));
          }
          const s = new Set(U);
          s.add(e.productId);
          const c = (0, C.nextFixItem)(oe, e.productId, s);
          (X(s),
            G(c),
            te(e.name),
            c || o.default.dismiss(),
            B?.().catch(() => {}));
        }
        const ae = 0 === oe.length,
          ue = ae && !(!E && !M);
        return (0, z.jsx)(p.Sheet, {
          visible: e,
          title: F(k, ue ? 0 : re),
          onClose: T,
          children: (0, z.jsx)(c.default, {
            testID: `${W}-fix-sheet`,
            style: { gap: 8 },
            children: ue
              ? (0, z.jsx)(u.Copy, {
                  testID: `${W}-fix-loading`,
                  accessibilityRole: M ? 'alert' : void 0,
                  style: {
                    fontSize: 13,
                    lineHeight: 22,
                    color: M ? O.danger : O.muted,
                  },
                  children: M || E,
                })
              : ae
                ? (0, z.jsxs)(c.default, {
                    testID: `${W}-fix-empty`,
                    style: {
                      alignItems: 'center',
                      gap: 8,
                      paddingVertical: 18,
                    },
                    children: [
                      (0, z.jsx)(c.default, {
                        style: {
                          width: 56,
                          height: 56,
                          borderRadius: 18,
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: O.accentSoft,
                        },
                        children: (0, z.jsx)(f.Icon, {
                          name: 'check',
                          size: 28,
                          color: O.accent,
                        }),
                      }),
                      (0, z.jsx)(u.Copy, {
                        style: {
                          fontSize: 17,
                          lineHeight: 28,
                          fontFamily: 'Vazirmatn_700Bold',
                          textAlign: 'center',
                        },
                        children: (0, S.L)(
                          '\u0647\u0645\u0647 \u0642\u06cc\u0645\u062a\u200c\u0647\u0627 \u062b\u0628\u062a \u0634\u062f',
                        ),
                      }),
                      (0, z.jsx)(u.Copy, {
                        style: [
                          se,
                          { fontSize: 13, lineHeight: 21, textAlign: 'center' },
                        ],
                        children: (0, S.L)(
                          '\u06af\u0632\u0627\u0631\u0634 \u0628\u0627 \u0642\u06cc\u0645\u062a\u200c\u0647\u0627\u06cc \u062a\u0627\u0632\u0647 \u062d\u0633\u0627\u0628 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                        ),
                      }),
                      (0, z.jsx)(c.default, {
                        style: { alignSelf: 'stretch', paddingTop: 6 },
                        children: (0, z.jsx)(j.SmallKey, {
                          testID: `${W}-fix-close`,
                          label: (0, S.L)('\u0628\u0633\u062a\u0646'),
                          onPress: T,
                        }),
                      }),
                    ],
                  })
                : (0, z.jsxs)(z.Fragment, {
                    children: [
                      (0, z.jsx)(u.Copy, {
                        style: {
                          fontSize: 13,
                          lineHeight: 22,
                          color: O.warning,
                        },
                        children: D(k),
                      }),
                      !!ee &&
                        (0, z.jsxs)(c.default, {
                          testID: `${W}-fix-saved`,
                          accessibilityLiveRegion: 'polite',
                          style: {
                            flexDirection: 'row-reverse',
                            alignItems: 'center',
                            gap: 8,
                            paddingHorizontal: 12,
                            paddingVertical: 8,
                            borderRadius: 12,
                            backgroundColor: O.accentSoft,
                          },
                          children: [
                            (0, z.jsx)(f.Icon, {
                              name: 'check',
                              size: 16,
                              color: O.accent,
                            }),
                            (0, z.jsx)(u.Copy, {
                              numberOfLines: 2,
                              style: {
                                flex: 1,
                                minWidth: 0,
                                fontSize: 13,
                                lineHeight: 21,
                                fontFamily: 'Vazirmatn_600SemiBold',
                              },
                              children: (0, S.L)(
                                '\u0642\u06cc\u0645\u062a \xab{name}\xbb \u062b\u0628\u062a \u0634\u062f.',
                                { name: ee },
                              ),
                            }),
                          ],
                        }),
                      oe.map((e) => {
                        const t = le(e.productId),
                          o = !!V && !!t,
                          p =
                            A && t
                              ? () =>
                                  A(e.productId, (0, C.priceFixEditorSide)(k))
                              : void 0,
                          x = o && K === e.productId,
                          y = (0, C.priceFixStart)(t, ie),
                          F = Y === e.productId,
                          D = N[e.productId],
                          _ = (0, z.jsxs)(u.Copy, {
                            numberOfLines: 1,
                            style: se,
                            children: [
                              void 0 !== e.amount
                                ? `${((R = e.amount), (P = e.unit || t?.unit), `${(0, L.formatGrouped)(R)} ${b.notebookFa.units[P || 'piece'] || b.notebookFa.units.piece}`)} ${w(k)} \xb7 `
                                : '',
                              (0, z.jsx)(u.Copy, {
                                style: [se, { color: O.warning }],
                                children: $(k),
                              }),
                            ],
                          });
                        var R, P;
                        const B = (0, z.jsxs)(c.default, {
                            style: {
                              flexDirection: 'row-reverse',
                              alignItems: 'center',
                              gap: 10,
                            },
                            children: [
                              (0, z.jsx)(c.default, {
                                style: { width: x ? 48 : 42 },
                                children: (0, z.jsx)(h.ProductPhoto, {
                                  product: t || { name: e.name },
                                  height: x ? 48 : 42,
                                }),
                              }),
                              (0, z.jsxs)(c.default, {
                                style: { flex: 1, minWidth: 0 },
                                children: [
                                  (0, z.jsx)(u.Copy, {
                                    numberOfLines: 1,
                                    style: {
                                      fontSize: 14,
                                      lineHeight: 22,
                                      fontFamily: 'Vazirmatn_600SemiBold',
                                    },
                                    children: e.name,
                                  }),
                                  _,
                                ],
                              }),
                              (o || !!p) &&
                                !x &&
                                (0, z.jsx)(f.Icon, {
                                  name: 'chevron',
                                  size: 16,
                                  color: O.muted,
                                }),
                            ],
                          }),
                          T = o
                            ? () => {
                                (G(x ? null : e.productId),
                                  Q((t) => ({ ...t, [e.productId]: '' })));
                              }
                            : p;
                        return (0, z.jsxs)(
                          c.default,
                          {
                            testID: `${W}-fix-item`,
                            style: {
                              borderRadius: 14,
                              borderWidth: x ? 1.5 : s.default.hairlineWidth,
                              borderColor: x ? O.accent : O.line,
                              backgroundColor: O.surface,
                              overflow: 'hidden',
                            },
                            children: [
                              (0, z.jsx)(l.default, {
                                testID: `${W}-fix-row`,
                                accessibilityRole: T ? 'button' : 'text',
                                accessibilityState: { expanded: x },
                                disabled: !T,
                                onPress: T,
                                style: ({ pressed: e }) => ({
                                  minHeight: 58,
                                  justifyContent: 'center',
                                  paddingHorizontal: 12,
                                  paddingVertical: 8,
                                  backgroundColor:
                                    e && !x ? O.soft : 'transparent',
                                }),
                                children: B,
                              }),
                              x &&
                                (0, z.jsxs)(c.default, {
                                  testID: `${W}-fix-box`,
                                  style: {
                                    gap: 8,
                                    paddingHorizontal: 12,
                                    paddingBottom: 12,
                                  },
                                  children: [
                                    (0, z.jsx)(u.Copy, {
                                      style: {
                                        fontSize: 13,
                                        lineHeight: 20,
                                        fontFamily: 'Vazirmatn_600SemiBold',
                                      },
                                      children: H(ie, t),
                                    }),
                                    (0, z.jsxs)(c.default, {
                                      style: {
                                        flexDirection: 'row-reverse',
                                        alignItems: 'center',
                                        gap: 8,
                                      },
                                      children: [
                                        (0, z.jsx)(c.default, {
                                          style: { flex: 1, minWidth: 0 },
                                          children: (0, z.jsx)(
                                            I.MoneyInput,
                                            {
                                              testID: `${W}-fix-input`,
                                              accessibilityLabel: H(ie, t),
                                              autoFocus: !0,
                                              shown: !0,
                                              decimals: (0, v.moneyDecimals)(),
                                              value: de(e),
                                              returnKeyType: 'done',
                                              onSubmitEditing: () => {
                                                ce(e);
                                              },
                                              onChange: (t) => {
                                                (J((n) => ({
                                                  ...n,
                                                  [e.productId]: t,
                                                })),
                                                  D &&
                                                    Q((t) => ({
                                                      ...t,
                                                      [e.productId]: '',
                                                    })));
                                              },
                                            },
                                            e.productId,
                                          ),
                                        }),
                                        (0, z.jsx)(l.default, {
                                          testID: `${W}-fix-save`,
                                          accessibilityRole: 'button',
                                          accessibilityLabel: (0, S.L)(
                                            '\u062b\u0628\u062a',
                                          ),
                                          accessibilityState: {
                                            busy: F,
                                            disabled: F,
                                          },
                                          disabled: F,
                                          onPress: () => {
                                            ce(e);
                                          },
                                          style: ({ pressed: e }) => ({
                                            minWidth: 84,
                                            height: 48,
                                            paddingHorizontal: 16,
                                            borderRadius: 12,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: e
                                              ? O.accentActive
                                              : O.accent,
                                            opacity: F ? 0.6 : 1,
                                          }),
                                          children: F
                                            ? (0, z.jsx)(n.default, {
                                                size: 'small',
                                                color: O.onAccent,
                                              })
                                            : (0, z.jsx)(u.Copy, {
                                                style: {
                                                  fontSize: 15,
                                                  lineHeight: 24,
                                                  color: O.onAccent,
                                                  fontFamily:
                                                    'Vazirmatn_700Bold',
                                                },
                                                children: (0, S.L)(
                                                  '\u062b\u0628\u062a',
                                                ),
                                              }),
                                        }),
                                      ],
                                    }),
                                    !!y &&
                                      void 0 === q[e.productId] &&
                                      (0, z.jsx)(u.Copy, {
                                        testID: `${W}-fix-start`,
                                        style: se,
                                        children: (0, S.L)(
                                          '\u0642\u06cc\u0645\u062a \u0641\u0639\u0644\u06cc \u0627\u06cc\u0646 \u06a9\u0627\u0644\u0627\u061b \u0627\u06af\u0631 \u062f\u0631\u0633\u062a \u0627\u0633\u062a \xab\u062b\u0628\u062a\xbb \u0631\u0627 \u0628\u0632\u0646.',
                                        ),
                                      }),
                                    !!D &&
                                      (0, z.jsx)(u.Copy, {
                                        accessibilityRole: 'alert',
                                        style: {
                                          fontSize: 13,
                                          lineHeight: 21,
                                          color: O.danger,
                                        },
                                        children: D,
                                      }),
                                    !!p &&
                                      (0, z.jsx)(c.default, {
                                        style: { flexDirection: 'row-reverse' },
                                        children: (0, z.jsx)(j.SmallKey, {
                                          testID: `${W}-fix-editor`,
                                          kind: 'text',
                                          icon: 'edit',
                                          label: (0, S.L)(
                                            '\u0648\u06cc\u0631\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644 \u06a9\u0627\u0644\u0627',
                                          ),
                                          onPress: p,
                                        }),
                                      }),
                                  ],
                                }),
                            ],
                          },
                          e.productId,
                        );
                      }),
                      V
                        ? (0, z.jsx)(u.Copy, {
                            style: se,
                            children: (0, S.L)(
                              '\u0631\u0648\u06cc \u06a9\u0627\u0644\u0627 \u0628\u0632\u0646 \u0648 \u0642\u06cc\u0645\u062a\u0634 \u0631\u0627 \u062b\u0628\u062a \u06a9\u0646.',
                            ),
                          })
                        : (0, z.jsx)(u.Copy, {
                            testID: `${W}-fix-read-only`,
                            style: se,
                            children: (0, S.L)(
                              '\u0642\u06cc\u0645\u062a \u0631\u0627 \u0635\u0627\u062d\u0628 \u06cc\u0627 \u0645\u062f\u06cc\u0631 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u062b\u0628\u062a \u0645\u06cc\u200c\u06a9\u0646\u062f.',
                            ),
                          }),
                    ],
                  }),
          }),
        });
      }));
    var t = r(d[0]),
      n = e(r(d[1])),
      o = e(r(d[2])),
      l = e(r(d[3])),
      s = e(r(d[4])),
      c = e(r(d[5])),
      u = r(d[6]),
      f = r(d[7]),
      p = r(d[8]),
      h = r(d[9]),
      x = r(d[10]),
      y = r(d[11]),
      I = r(d[12]),
      j = r(d[13]),
      b = r(d[14]),
      L = r(d[15]),
      S = r(d[16]),
      v = r(d[17]),
      C = r(d[18]),
      z = r(d[19]);
    function F(e, t) {
      const n = (0, L.formatGrouped)(t);
      return t <= 0
        ? 'sale' === e || 'noSell' === e
          ? (0, S.L)(
              '\u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634',
            )
          : 'cost' === e
            ? (0, S.L)(
                '\u0628\u062f\u0648\u0646 \u0628\u0647\u0627\u06cc \u062e\u0631\u06cc\u062f',
              )
            : 'received' === e
              ? (0, S.L)(
                  '\u0648\u0631\u0648\u062f \u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f',
                )
              : (0, S.L)(
                  '\u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f',
                )
        : 'sale' === e
          ? (0, S.L)(
              '{n} \u06a9\u0627\u0644\u0627: \u0641\u0631\u0648\u0634 \u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a',
              { n: n },
            )
          : 'cost' === e
            ? (0, S.L)(
                '{n} \u06a9\u0627\u0644\u0627: \u0641\u0631\u0648\u0634 \u0628\u062f\u0648\u0646 \u0628\u0647\u0627\u06cc \u062e\u0631\u06cc\u062f',
                { n: n },
              )
            : 'received' === e
              ? (0, S.L)(
                  '{n} \u06a9\u0627\u0644\u0627: \u0648\u0631\u0648\u062f \u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f',
                  { n: n },
                )
              : 'noSell' === e
                ? (0, S.L)(
                    '{n} \u06a9\u0627\u0644\u0627 \u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634',
                    { n: n },
                  )
                : (0, S.L)(
                    '{n} \u06a9\u0627\u0644\u0627 \u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f',
                    { n: n },
                  );
    }
    function D(e) {
      return 'sale' === e
        ? (0, S.L)(
            '\u0627\u06cc\u0646 \u06a9\u0627\u0644\u0627\u0647\u0627 \u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634 \u0646\u062f\u0627\u0631\u0646\u062f\u061b \u0628\u0631\u0627\u06cc \u0647\u0645\u06cc\u0646 \u0645\u0628\u0644\u063a \u0641\u0631\u0648\u0634 \u0648 \u0633\u0648\u062f\u0634\u0627\u0646 \u062d\u0633\u0627\u0628 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f.',
          )
        : 'cost' === e
          ? (0, S.L)(
              '\u0627\u06cc\u0646 \u06a9\u0627\u0644\u0627\u0647\u0627 \u0628\u0647\u0627\u06cc \u062e\u0631\u06cc\u062f \u0646\u062f\u0627\u0631\u0646\u062f\u061b \u0628\u0631\u0627\u06cc \u0647\u0645\u06cc\u0646 \u0633\u0648\u062f\u0634\u0627\u0646 \u062d\u0633\u0627\u0628 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f.',
            )
          : 'received' === e
            ? (0, S.L)(
                '\u0627\u06cc\u0646 \u06a9\u0627\u0644\u0627\u0647\u0627 \u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f \u0648\u0627\u0631\u062f \u0634\u062f\u0647\u200c\u0627\u0646\u062f\u061b \u0628\u0631\u0627\u06cc \u0647\u0645\u06cc\u0646 \u0627\u0631\u0632\u0634 \u062e\u0631\u06cc\u062f\u0634\u0627\u0646 \u0645\u0639\u0644\u0648\u0645 \u0646\u06cc\u0633\u062a.',
              )
            : 'noSell' === e
              ? (0, S.L)(
                  '\u0627\u06cc\u0646 \u06a9\u0627\u0644\u0627\u0647\u0627 \u0647\u0646\u0648\u0632 \u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634 \u0646\u062f\u0627\u0631\u0646\u062f\u061b \u0642\u06cc\u0645\u062a \u06a9\u0647 \u0628\u06af\u0630\u0627\u0631\u06cc\u060c \u0641\u0631\u0648\u0634\u200c\u0647\u0627\u06cc \u0628\u0639\u062f\u06cc \u0628\u0627 \u0647\u0645\u06cc\u0646 \u0642\u06cc\u0645\u062a \u062d\u0633\u0627\u0628 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f.',
                )
              : (0, S.L)(
                  '\u0627\u06cc\u0646 \u06a9\u0627\u0644\u0627\u0647\u0627 \u0647\u0646\u0648\u0632 \u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f \u0646\u062f\u0627\u0631\u0646\u062f\u061b \u0642\u06cc\u0645\u062a \u06a9\u0647 \u0628\u06af\u0630\u0627\u0631\u06cc\u060c \u0633\u0648\u062f\u0634\u0627\u0646 \u0645\u0639\u0644\u0648\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                );
    }
    const $ = (e) =>
        'sale' === e || 'noSell' === e
          ? (0, S.L)(
              '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634 \u0646\u062f\u0627\u0631\u062f',
            )
          : 'cost' === e
            ? (0, S.L)(
                '\u0628\u0647\u0627\u06cc \u062e\u0631\u06cc\u062f \u0646\u062f\u0627\u0631\u062f',
              )
            : (0, S.L)(
                '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f \u0646\u062f\u0627\u0631\u062f',
              ),
      w = (e) =>
        'received' === e
          ? (0, S.L)('\u0648\u0631\u0648\u062f')
          : (0, S.L)('\u0641\u0631\u0648\u0634');
    function H(e, t) {
      const n =
        b.notebookFa.units[t?.unit || 'piece'] || b.notebookFa.units.piece;
      return 'price' === e
        ? (0, S.L)(
            '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634 \u0647\u0631 {unit}',
            { unit: n },
          )
        : 'made' === t?.kind
          ? (0, S.L)(
              '\u0647\u0632\u06cc\u0646\u0647\u0654 \u062a\u0648\u0644\u06cc\u062f \u0647\u0631 {unit}',
              { unit: n },
            )
          : (0, S.L)(
              '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f \u0647\u0631 {unit}',
              { unit: n },
            );
    }
  },
  848,
  [
    2, 217, 207, 232, 17, 99, 407, 385, 539, 628, 382, 415, 614, 517, 580, 434,
    311, 435, 849, 338,
  ],
);
