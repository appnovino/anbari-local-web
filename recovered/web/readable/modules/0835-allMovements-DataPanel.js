// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 835; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.allMovements = W),
      (_e.DataPanel = function ({
        state: e,
        shop: U,
        onEditProduct: V,
        onSavePrice: q,
        onImport: G,
        onTelegram: N,
        onCorrect: K,
        documents: Y,
        canMutate: Q = !0,
        initialSection: X,
        demo: Z = !1,
        blocked: $ = !1,
        onBlocked: ee,
        exportOnly: te = !1,
        showReports: oe = !0,
        showLedger: se = !0,
        importLocked: re = !1,
      }) {
        const { colors: ne } = (0, C.useTheme)(),
          le = (0, c.useDesktop)(),
          ae = le ? { flex: 1, minWidth: 0 } : void 0,
          ie = () =>
            ee?.(
              (0, _.L)(
                '\u0648\u0631\u0648\u062f \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0627\u0632 \u0641\u0627\u06cc\u0644 \u0645\u062e\u0635\u0648\u0635 \u0627\u0634\u062a\u0631\u0627\u06a9\u200c\u0647\u0627\u0633\u062a',
              ),
            ),
          ce = re
            ? (0, A.jsxs)(f.default, {
                testID: 'import-paid-badge',
                accessibilityLabel: (0, _.L)(
                  '\u0645\u062e\u0635\u0648\u0635 \u0627\u0634\u062a\u0631\u0627\u06a9',
                ),
                style: {
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  gap: 4,
                  paddingHorizontal: 8,
                  height: 22,
                  borderRadius: 11,
                  backgroundColor: ne.accentSoft,
                },
                children: [
                  (0, A.jsx)(R.Icon, {
                    name: 'lock',
                    size: 12,
                    color: ne.accent,
                  }),
                  (0, A.jsx)(b.Copy, {
                    style: {
                      fontSize: 11,
                      color: ne.accent,
                      fontFamily: 'Vazirmatn_600SemiBold',
                    },
                    children: (0, _.L)('\u0627\u0634\u062a\u0631\u0627\u06a9'),
                  }),
                ],
              })
            : null,
          de = (e) =>
            (0, A.jsxs)(f.default, {
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 8,
                flexWrap: 'wrap',
              },
              children: [
                (0, A.jsx)(b.Copy, { style: { fontSize: 18 }, children: e }),
                ce,
              ],
            }),
          [me, pe] = (0, u.useState)(!1),
          xe = !!U && (0, T.expensesAllowedFor)(U),
          he = [
            ...(oe ? ['analytics', 'income'] : []),
            ...(xe ? ['expenses'] : []),
            'history',
          ],
          ue = O.filter(([e]) => 'exports' === e || ('imports' === e && Q)),
          ye = (e) => (H(e) ? he.includes(e) : ue.some(([t]) => t === e)),
          fe = ((Se = M), he.includes(Se) ? Se : he[0]),
          [je, ge] = (0, u.useState)(() =>
            te ? 'exports' : X && ye(X) ? X : fe,
          ),
          [be, Ce] = (0, u.useState)(!1),
          Le = (e) => {
            (H(e) && (M = e), ge(e));
          };
        var Se;
        (0, u.useEffect)(() => {
          X && H(X) && (M = X);
        }, []);
        const we = H(je) ? je : fe,
          [ve, Ie] = (0, u.useState)(null),
          [De, Pe] = (0, u.useState)('excel'),
          [ke, Be] = (0, u.useState)(!1),
          [Te, Re] = (0, u.useState)(''),
          [Ee, ze] = (0, u.useState)(''),
          [Fe, Ae] = (0, u.useState)(''),
          [He, Me] = (0, u.useState)(''),
          We = (0, u.useRef)(null),
          Oe = {
            products: [
              {
                id: 'example-milk',
                name: L.fa.milk,
                stock: 12,
                detail: L.fa.milkDetail,
                category: L.fa.groceriesCategory,
                price: 45e3,
                costPrice: 35e3,
              },
              {
                id: 'example-rice',
                name: L.fa.rice,
                stock: 20,
                detail: L.fa.riceDetail,
                category: L.fa.groceriesCategory,
                price: 89e4,
                costPrice: 7e5,
              },
            ],
            movements: [],
          };
        async function Je(o, s = !1) {
          if (!ke) {
            (Be(!0), Re(''), Ae(''));
            try {
              let n = s ? Oe : e;
              const l = U || t.activeShop;
              let c = 0;
              if (l && !s && !Z) {
                const o = await W(l, (e) =>
                    Ae(
                      (0, _.L)(
                        '\u062f\u0631\u06cc\u0627\u0641\u062a \u062a\u0627\u0631\u06cc\u062e\u0686\u0647: {n} \u0631\u062f\u06cc\u0641',
                        { n: e.toLocaleString((0, _.numberLocale)()) },
                      ),
                    ),
                  ),
                  s = [];
                for (const [o, n] of e.products.entries()) {
                  Ae(
                    L.fa.photoExportProgress
                      .replace(
                        '{current}',
                        (o + 1).toLocaleString((0, _.numberLocale)()),
                      )
                      .replace(
                        '{total}',
                        e.products.length.toLocaleString((0, _.numberLocale)()),
                      ),
                  );
                  let l = n.photo;
                  if (l?.startsWith('/v1/'))
                    try {
                      const e = await fetch((0, t.baseUrl)() + l, {
                        headers: (0, t.authHeaders)(),
                        credentials: 'include',
                      });
                      if (!e.ok) throw Error('photo_missing');
                      l =
                        'data:' +
                        e.headers.get('content-type') +
                        ';base64,' +
                        (0, i.bytesBase64)(
                          new Uint8Array(await e.arrayBuffer()),
                        );
                    } catch {
                      ((l = void 0), c++);
                    }
                  s.push({ ...n, photo: l });
                }
                n = { ...e, products: s, movements: o };
              }
              if ('json' === o)
                await (0, S.saveJson)(
                  (0, v.exportJson)(n),
                  s ? 'anbari-template.json' : 'anbari-catalog.json',
                );
              else {
                const { exportWorkbook: e } = await r(d[33])(d[32], d.paths);
                await (0, S.saveWorkbook)(
                  e(n, { unitTitles: !0 }),
                  s ? 'anbari-template.xlsx' : 'anbari-inventory.xlsx',
                );
              }
              (Z ||
                (0, P.logEvent)(
                  'inventory.exported',
                  o,
                  s ? Oe.products.length : e.products.length,
                ),
                ze(
                  c
                    ? L.fa.exportReady +
                        ' ' +
                        (0, _.L)(
                          '\u0639\u06a9\u0633 {n} \u06a9\u0627\u0644\u0627 \u062f\u0631\u06cc\u0627\u0641\u062a \u0646\u0634\u062f \u0648 \u0622\u0646 \u06a9\u0627\u0644\u0627\u0647\u0627 \u0628\u062f\u0648\u0646 \u0639\u06a9\u0633 \u0622\u0645\u062f\u0646\u062f.',
                          { n: c.toLocaleString((0, _.numberLocale)()) },
                        )
                    : L.fa.exportReady,
                ));
            } catch (e) {
              Re((0, I.errorText)(e));
            } finally {
              (Be(!1), Ae(''));
            }
          }
        }
        async function Ue(o, s = !1) {
          if (re) return void ie();
          if (ke) return;
          (Be(!0), Re(''), ze(''), Ie(null), Me(''));
          const n = 'json' !== o && !!t.activeShop;
          try {
            const n =
              s && We.current
                ? We.current
                : await ('json' === o
                    ? (0, S.pickJson)()
                    : (0, S.pickWorkbook)());
            if (!n) return;
            'json' !== o && (We.current = n);
            const l =
              'json' === o
                ? (0, v.importJson)(n)
                : t.activeShop
                  ? (
                      await (0, t.job)(
                        'spreadsheet',
                        { data: (0, i.bytesBase64)(n) },
                        AbortSignal.timeout(D.IMPORT_WAIT_MS),
                      )
                    ).rows
                  : (await r(d[33])(d[32], d.paths)).importWorkbook(n);
            ((0, w.applyImport)(e, l, 'preview', o),
              Pe(o),
              Ie(l),
              'json' !== o && (We.current = null));
          } catch (e) {
            n
              ? Me((0, D.importStopText)(e, (0, I.errorText)(e)))
              : Re((0, I.errorText)(e));
          } finally {
            Be(!1);
          }
        }
        return (0, A.jsxs)(f.default, {
          style: b.common.gap,
          children: [
            (0, A.jsx)(b.PageTitle, {
              title: te
                ? (0, _.L)(
                    '\u062e\u0631\u0648\u062c\u06cc \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0642\u0628\u0644\u06cc',
                  )
                : L.fa.dataTitle,
            }),
            !te &&
              (0, A.jsxs)(f.default, {
                style: {
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  gap: 8,
                },
                children: [
                  (0, A.jsx)(f.default, {
                    style: { flex: 1, minWidth: 0 },
                    children: (0, A.jsx)(b.Segmented, {
                      compact: !0,
                      role: 'tab',
                      height: 44,
                      value: we,
                      onChange: Le,
                      items: he.map((e, t) => ({
                        value: e,
                        label:
                          'expenses' === e
                            ? (0, _.L)(
                                '\u0647\u0632\u06cc\u0646\u0647\u200c\u0647\u0627',
                              )
                            : L.fa[e],
                        testID: 'data-' + e,
                        spark: 0 === t,
                      })),
                    }),
                  }),
                  (0, A.jsx)(b.IconKey, {
                    testID: 'data-tools',
                    icon: 'more',
                    size: 36,
                    accessibilityLabel: (0, _.L)(
                      '\u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06cc \u062f\u0627\u062f\u0647',
                    ),
                    onPress: () => Ce(!0),
                  }),
                ],
              }),
            !te &&
              !H(je) &&
              (0, A.jsxs)(f.default, {
                style: {
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  gap: 8,
                },
                children: [
                  (0, A.jsx)(z.SmallKey, {
                    testID: 'data-tools-back',
                    kind: 'text',
                    icon: 'arrow',
                    label: (0, _.L)('\u0628\u0627\u0632\u06af\u0634\u062a'),
                    onPress: () => Le(fe),
                  }),
                  (0, A.jsx)(b.Copy, {
                    style: {
                      fontSize: 15,
                      fontFamily: 'Vazirmatn_600SemiBold',
                    },
                    children: J(je),
                  }),
                ],
              }),
            !te &&
              (0, A.jsx)(E.Sheet, {
                visible: be,
                title: (0, _.L)('\u0627\u0628\u0632\u0627\u0631\u0647\u0627'),
                onClose: () => Ce(!1),
                children: (0, A.jsx)(f.default, {
                  style: { gap: 2 },
                  children: ue.map(([e, t, o, s]) =>
                    (0, A.jsx)(
                      z.SheetRow,
                      {
                        testID: 'data-' + e,
                        icon: s,
                        title: t,
                        hint:
                          'imports' === e && re
                            ? (0, _.L)(
                                '\u0645\u062e\u0635\u0648\u0635 \u0627\u0634\u062a\u0631\u0627\u06a9',
                              )
                            : o,
                        onPress: () => {
                          (Ce(!1), Le(e));
                        },
                      },
                      e,
                    ),
                  ),
                }),
              }),
            'analytics' === je &&
              (U
                ? (0, A.jsx)(l.Reports, {
                    shop: U,
                    mode: 'flow',
                    state: e,
                    onEditProduct: V,
                    onSavePrice: q,
                  })
                : (0, A.jsx)(h.Analytics, {
                    state: e,
                    onEditProduct: V,
                    onSavePrice: q,
                  })),
            'income' === je &&
              (U
                ? (0, A.jsx)(l.Reports, { shop: U, mode: 'income', state: e })
                : (0, A.jsx)(x.Income, { state: e })),
            'history' === je &&
              (0, A.jsx)(p.History, {
                state: e,
                shop: U || void 0,
                onCorrect: K,
                canCorrect: Q,
              }),
            'expenses' === je &&
              U &&
              xe &&
              ($
                ? (0, A.jsxs)(b.Card, {
                    children: [
                      (0, A.jsx)(b.Copy, {
                        children: k.platformFa.subscriptionRequired,
                      }),
                      (0, A.jsx)(b.Button, {
                        onPress: () => ee?.(),
                        children: (0, _.L)(
                          '\u0645\u0634\u0627\u0647\u062f\u0647 \u0637\u0631\u062d\u200c\u0647\u0627',
                        ),
                      }),
                    ],
                  })
                : (0, A.jsx)(B.ExpensesScreen, { shop: U })),
            'exports' === je &&
              (0, A.jsxs)(A.Fragment, {
                children: [
                  (0, A.jsx)(b.Copy, {
                    style: [b.common.small, { color: ne.muted }],
                    children: Z
                      ? (0, _.L)(
                          '\u0627\u06cc\u0646 \u062e\u0631\u0648\u062c\u06cc \u0641\u0642\u0637 \u0634\u0627\u0645\u0644 \u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u0646\u0645\u0648\u0646\u0647 \u0646\u0633\u062e\u0647 \u0646\u0645\u0627\u06cc\u0634\u06cc \u0627\u0633\u062a.',
                        )
                      : L.fa.exportSectionHint,
                  }),
                  (0, A.jsxs)(f.default, {
                    style: le
                      ? { flexDirection: 'row-reverse', gap: 18 }
                      : { gap: 12 },
                    children: [
                      (0, A.jsxs)(b.Card, {
                        style: ae,
                        children: [
                          (0, A.jsx)(b.Copy, {
                            style: { fontSize: 18 },
                            children: L.fa.exportExcel,
                          }),
                          (0, A.jsx)(b.Copy, {
                            style: [b.common.small, { color: ne.muted }],
                            children: L.fa.exportHint,
                          }),
                          'rial' === (0, F.moneyUnit)() &&
                            (0, A.jsx)(b.Copy, {
                              testID: 'excel-toman-note',
                              style: [b.common.small, { color: ne.warning }],
                              children: (0, _.L)(
                                '\u0642\u06cc\u0645\u062a\u200c\u0647\u0627\u06cc \u0641\u0627\u06cc\u0644 \u0627\u06a9\u0633\u0644 \u0628\u0647 \u062a\u0648\u0645\u0627\u0646 \u0627\u0633\u062a (\u0646\u0647 \u0631\u06cc\u0627\u0644).',
                              ),
                            }),
                          (0, A.jsx)(b.Button, {
                            disabled: ke,
                            onPress: () => {
                              Je('excel');
                            },
                            children: Z
                              ? (0, _.L)(
                                  '\u062e\u0631\u0648\u062c\u06cc \u0646\u0645\u0648\u0646\u0647 \u0627\u06a9\u0633\u0644',
                                )
                              : L.fa.exportExcel,
                          }),
                        ],
                      }),
                      (0, A.jsxs)(b.Card, {
                        style: ae,
                        children: [
                          (0, A.jsx)(b.Copy, {
                            style: { fontSize: 18 },
                            children: L.fa.exportJson,
                          }),
                          (0, A.jsx)(b.Copy, {
                            style: [b.common.small, { color: ne.muted }],
                            children: L.fa.jsonHint,
                          }),
                          (0, A.jsx)(b.Button, {
                            testID: 'export-json',
                            disabled: ke,
                            onPress: () => {
                              Je('json');
                            },
                            children: Z
                              ? (0, _.L)(
                                  '\u062e\u0631\u0648\u062c\u06cc \u0646\u0645\u0648\u0646\u0647 \u062c\u06cc\u200c\u0633\u0627\u0646',
                                )
                              : L.fa.exportJson,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            'imports' === je &&
              (Z
                ? (0, A.jsx)(b.Card, {
                    children: (0, A.jsx)(b.Copy, {
                      children: (0, _.L)(
                        '\u0648\u0631\u0648\u062f \u0641\u0627\u06cc\u0644 \u062f\u0631 \u0646\u0633\u062e\u0647 \u0646\u0645\u0627\u06cc\u0634\u06cc \u063a\u06cc\u0631\u0641\u0639\u0627\u0644 \u0627\u0633\u062a\u061b \u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0628\u0627 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u062e\u0648\u062f\u062a\u0627\u0646\u060c \u062d\u0633\u0627\u0628 \u0628\u0633\u0627\u0632\u06cc\u062f.',
                      ),
                    }),
                  })
                : $
                  ? (0, A.jsxs)(b.Card, {
                      children: [
                        (0, A.jsx)(b.Copy, {
                          children: k.platformFa.subscriptionRequired,
                        }),
                        (0, A.jsx)(b.Button, {
                          onPress: () => ee?.(),
                          children: (0, _.L)(
                            '\u0641\u0639\u0627\u0644\u200c\u06a9\u0631\u062f\u0646 \u0648\u0631\u0648\u062f \u0627\u0637\u0644\u0627\u0639\u0627\u062a',
                          ),
                        }),
                      ],
                    })
                  : Q
                    ? (0, A.jsxs)(A.Fragment, {
                        children: [
                          (0, A.jsx)(b.Copy, {
                            style: [b.common.small, { color: ne.muted }],
                            children: L.fa.importSectionHint,
                          }),
                          re &&
                            (0, A.jsxs)(b.Card, {
                              testID: 'import-paid-only',
                              style: { gap: 8 },
                              children: [
                                (0, A.jsxs)(f.default, {
                                  style: {
                                    flexDirection: 'row-reverse',
                                    alignItems: 'center',
                                    gap: 8,
                                  },
                                  children: [
                                    (0, A.jsx)(R.Icon, {
                                      name: 'lock',
                                      size: 18,
                                      color: ne.accent,
                                    }),
                                    (0, A.jsx)(b.Copy, {
                                      style: {
                                        flex: 1,
                                        fontFamily: 'Vazirmatn_600SemiBold',
                                      },
                                      children: (0, _.L)(
                                        '\u0648\u0631\u0648\u062f \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0627\u0632 \u0641\u0627\u06cc\u0644 \u0645\u062e\u0635\u0648\u0635 \u0627\u0634\u062a\u0631\u0627\u06a9\u200c\u0647\u0627\u0633\u062a',
                                      ),
                                    }),
                                  ],
                                }),
                                (0, A.jsx)(b.Copy, {
                                  style: [b.common.small, { color: ne.muted }],
                                  children: (0, _.L)(
                                    '\u0628\u0627 \u0627\u0634\u062a\u0631\u0627\u06a9\u060c \u0644\u06cc\u0633\u062a \u06a9\u0627\u0644\u0627\u0647\u0627\u06cc\u062a \u0631\u0627 \u06cc\u06a9\u200c\u062c\u0627 \u0627\u0632 \u0627\u06a9\u0633\u0644 \u06cc\u0627 \u0641\u0627\u06cc\u0644 \u0628\u06cc\u0627\u0648\u0631. \u062e\u0631\u0648\u062c\u06cc \u06af\u0631\u0641\u062a\u0646 \u0647\u0645\u06cc\u0634\u0647 \u0628\u0631\u0627\u06cc \u0647\u0645\u0647 \u0622\u0632\u0627\u062f \u0627\u0633\u062a.',
                                  ),
                                }),
                                (0, A.jsx)(b.Button, {
                                  testID: 'import-plans',
                                  onPress: ie,
                                  children: (0, _.L)(
                                    '\u062f\u06cc\u062f\u0646 \u0637\u0631\u062d\u200c\u0647\u0627',
                                  ),
                                }),
                              ],
                            }),
                          (0, A.jsxs)(f.default, {
                            style: le
                              ? { flexDirection: 'row-reverse', gap: 18 }
                              : { gap: 12 },
                            children: [
                              (0, A.jsxs)(b.Card, {
                                style: ae,
                                children: [
                                  de(L.fa.excelAndCsv),
                                  (0, A.jsx)(b.Copy, {
                                    style: [
                                      b.common.small,
                                      { color: ne.muted },
                                    ],
                                    children: L.fa.importHint,
                                  }),
                                  'rial' === (0, F.moneyUnit)() &&
                                    (0, A.jsx)(b.Copy, {
                                      testID: 'excel-toman-note',
                                      style: [
                                        b.common.small,
                                        { color: ne.warning },
                                      ],
                                      children: (0, _.L)(
                                        '\u0642\u06cc\u0645\u062a\u200c\u0647\u0627\u06cc \u0641\u0627\u06cc\u0644 \u0627\u06a9\u0633\u0644 \u0628\u0647 \u062a\u0648\u0645\u0627\u0646 \u0627\u0633\u062a (\u0646\u0647 \u0631\u06cc\u0627\u0644).',
                                      ),
                                    }),
                                  (0, A.jsx)(b.Button, {
                                    testID: 'import-excel',
                                    disabled: ke,
                                    onPress: () => {
                                      Ue('excel');
                                    },
                                    children: L.fa.chooseExcel,
                                  }),
                                  ke &&
                                    !!t.activeShop &&
                                    (0, A.jsx)(b.Copy, {
                                      testID: 'excel-import-wait',
                                      accessibilityLiveRegion: 'polite',
                                      style: [
                                        b.common.small,
                                        { color: ne.muted },
                                      ],
                                      children: (0, _.L)(
                                        '\u062f\u0631 \u062d\u0627\u0644 \u062e\u0648\u0627\u0646\u062f\u0646 \u0641\u0627\u06cc\u0644 \u0631\u0648\u06cc \u0633\u0631\u0648\u0631\u2026 (\u062d\u062f\u0627\u06a9\u062b\u0631 \u06cc\u06a9 \u062f\u0642\u06cc\u0642\u0647)',
                                      ),
                                    }),
                                  !!He &&
                                    !ke &&
                                    (0, A.jsxs)(A.Fragment, {
                                      children: [
                                        (0, A.jsx)(b.Copy, {
                                          testID: 'excel-import-stop',
                                          accessibilityRole: 'alert',
                                          style: { color: ne.danger },
                                          children: He,
                                        }),
                                        !!We.current &&
                                          (0, A.jsx)(b.Button, {
                                            testID: 'excel-import-retry',
                                            secondary: !0,
                                            onPress: () => {
                                              Ue('excel', !0);
                                            },
                                            children: (0, _.L)(
                                              '\u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646',
                                            ),
                                          }),
                                      ],
                                    }),
                                  (0, A.jsx)(b.Button, {
                                    secondary: !0,
                                    disabled: ke,
                                    onPress: () => {
                                      Je('excel', !0);
                                    },
                                    children: L.fa.downloadTemplate,
                                  }),
                                ],
                              }),
                              n.TELEGRAM_BOT &&
                                (0, A.jsxs)(b.Card, {
                                  style: ae,
                                  children: [
                                    (0, A.jsx)(b.Copy, {
                                      style: { fontSize: 18 },
                                      children: L.fa.telegramImport,
                                    }),
                                    (0, A.jsx)(b.Copy, {
                                      style: [
                                        b.common.small,
                                        { color: ne.muted },
                                      ],
                                      children: L.fa.telegramShort,
                                    }),
                                    (0, A.jsx)(b.Button, {
                                      testID: 'telegram-import',
                                      disabled: !s.TELEGRAM_BOT_READY,
                                      onPress: N,
                                      children: s.TELEGRAM_BOT_READY
                                        ? L.fa.telegramImport
                                        : (0, _.L)(
                                            '\u0631\u0628\u0627\u062a \u062a\u0644\u06af\u0631\u0627\u0645 \u2014 \u0628\u0647\u200c\u0632\u0648\u062f\u06cc',
                                          ),
                                    }),
                                    U && !Z
                                      ? (0, A.jsx)(b.Button, {
                                          testID: 'channel-open',
                                          secondary: !0,
                                          onPress: () => (re ? ie() : pe(!0)),
                                          children: (0, _.L)(
                                            '\u0627\u0632 \u06a9\u0627\u0646\u0627\u0644 \u062a\u0644\u06af\u0631\u0627\u0645 (\u067e\u0633\u062a\u200c\u0647\u0627\u06cc \u0642\u062f\u06cc\u0645\u06cc)',
                                          ),
                                        })
                                      : (0, A.jsx)(b.Button, {
                                          secondary: !0,
                                          onPress: N,
                                          children: L.fa.telegramHistory,
                                        }),
                                  ],
                                }),
                              (0, A.jsxs)(b.Card, {
                                style: ae,
                                children: [
                                  de(L.fa.jsonTitle),
                                  (0, A.jsx)(b.Copy, {
                                    style: [
                                      b.common.small,
                                      { color: ne.muted },
                                    ],
                                    children: L.fa.jsonHint,
                                  }),
                                  (0, A.jsx)(b.Button, {
                                    testID: 'import-json',
                                    disabled: ke,
                                    onPress: () => {
                                      Ue('json');
                                    },
                                    children: L.fa.importJson,
                                  }),
                                  (0, A.jsx)(b.Button, {
                                    secondary: !0,
                                    disabled: ke,
                                    onPress: () => {
                                      Je('json', !0);
                                    },
                                    children: L.fa.jsonTemplate,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Y &&
                            (0, A.jsxs)(b.Card, {
                              children: [
                                de(L.fa.pdfImport),
                                re
                                  ? (0, A.jsx)(b.Button, {
                                      testID: 'pdf-import-locked',
                                      onPress: ie,
                                      children: (0, _.L)(
                                        '\u0627\u0646\u062a\u062e\u0627\u0628 \u0641\u0627\u06cc\u0644 PDF',
                                      ),
                                    })
                                  : Y,
                              ],
                            }),
                          n.TELEGRAM_BOT &&
                            me &&
                            U &&
                            !Z &&
                            (0, A.jsx)(o.ChannelImport, {
                              products: e.products,
                              onImport: async (e) => {
                                await G(e, 'json');
                              },
                              onClose: () => pe(!1),
                            }),
                        ],
                      })
                    : (0, A.jsx)(b.Card, {
                        children: (0, A.jsx)(b.Copy, {
                          children: k.platformFa.subscriptionRequired,
                        }),
                      })),
            ke && (0, A.jsx)(y.default, { color: ne.text }),
            !!Fe &&
              (0, A.jsx)(b.Copy, {
                accessibilityLiveRegion: 'polite',
                children: Fe,
              }),
            !!Te &&
              (0, A.jsx)(b.Copy, {
                accessibilityRole: 'alert',
                style: { color: ne.danger },
                children: Te,
              }),
            !!Ee &&
              (0, A.jsx)(b.Copy, { accessibilityRole: 'alert', children: Ee }),
            ve &&
              'imports' === je &&
              (0, A.jsxs)(b.Card, {
                children: [
                  (0, A.jsxs)(b.Copy, {
                    style: { fontSize: 18 },
                    children: [
                      ve.length.toLocaleString((0, _.numberLocale)()),
                      ' ',
                      L.fa.importPreview,
                    ],
                  }),
                  (0, A.jsx)(b.Copy, {
                    style: b.common.small,
                    children: L.fa.importConfirmHint,
                  }),
                  'json' !== De &&
                    'rial' === (0, F.moneyUnit)() &&
                    (0, A.jsx)(b.Copy, {
                      testID: 'excel-toman-note-preview',
                      style: [b.common.small, { color: ne.warning }],
                      children: (0, _.L)(
                        '\u0642\u06cc\u0645\u062a\u200c\u0647\u0627\u06cc \u0641\u0627\u06cc\u0644 \u0627\u06a9\u0633\u0644 \u0628\u0647 \u062a\u0648\u0645\u0627\u0646 \u0627\u0633\u062a (\u0646\u0647 \u0631\u06cc\u0627\u0644).',
                      ),
                    }),
                  (() => {
                    const t = ve.map((t) => ({
                        row: t,
                        current: e.products.find((e) =>
                          e.barcode && t.barcode
                            ? e.barcode === t.barcode
                            : (0, w.normalizeName)(e.name) ===
                              (0, w.normalizeName)(t.name),
                        ),
                      })),
                      o = t.filter((e) => !e.current).length,
                      s = t.filter(
                        (e) => e.current && e.current.stock !== e.row.stock,
                      ).length;
                    return (0, A.jsxs)(A.Fragment, {
                      children: [
                        (0, A.jsxs)(f.default, {
                          style: b.common.row,
                          children: [
                            (0, A.jsx)(b.Copy, {
                              children: L.fa.importNewCount.replace(
                                '{count}',
                                o.toLocaleString((0, _.numberLocale)()),
                              ),
                            }),
                            (0, A.jsx)(b.Copy, {
                              children: L.fa.importChangedCount.replace(
                                '{count}',
                                s.toLocaleString((0, _.numberLocale)()),
                              ),
                            }),
                          ],
                        }),
                        (0, A.jsx)(j.ScrollView, {
                          nestedScrollEnabled: !0,
                          style: { maxHeight: 280 },
                          contentContainerStyle: { gap: 8 },
                          children: t.map(({ row: e, current: t }, o) =>
                            (0, A.jsxs)(
                              f.default,
                              {
                                style: [
                                  b.common.between,
                                  {
                                    borderTopWidth: o ? 1 : 0,
                                    borderColor: ne.line,
                                    paddingTop: o ? 8 : 0,
                                  },
                                ],
                                children: [
                                  (0, A.jsx)(b.Copy, {
                                    numberOfLines: 1,
                                    style: { flex: 1 },
                                    children: e.name,
                                  }),
                                  (0, A.jsx)(b.Copy, {
                                    style: { fontSize: 11 },
                                    children: L.fa.importCurrentToNew
                                      .replace(
                                        '{current}',
                                        (t?.stock ?? 0).toLocaleString(
                                          (0, _.numberLocale)(),
                                        ),
                                      )
                                      .replace(
                                        '{next}',
                                        e.stock.toLocaleString(
                                          (0, _.numberLocale)(),
                                        ),
                                      ),
                                  }),
                                ],
                              },
                              o,
                            ),
                          ),
                        }),
                      ],
                    });
                  })(),
                  (0, A.jsx)(b.Button, {
                    testID: 'confirm-import',
                    onPress: async () => {
                      try {
                        (await G(ve, De), Ie(null), ze(L.fa.importDone));
                      } catch (e) {
                        Re((0, I.errorText)(e));
                      }
                    },
                    children: L.fa.confirmImport,
                  }),
                  (0, A.jsx)(b.Button, {
                    secondary: !0,
                    onPress: () => Ie(null),
                    children: L.fa.cancelVoice,
                  }),
                ],
              }),
          ],
        });
      }));
    var t = r(d[0]),
      o = r(d[1]),
      s = r(d[2]),
      n = r(d[3]),
      l = r(d[4]),
      i = r(d[5]),
      c = r(d[6]),
      p = r(d[7]),
      x = r(d[8]),
      h = r(d[9]),
      u = r(d[10]),
      y = e(r(d[11])),
      f = e(r(d[12])),
      j = r(d[13]),
      b = r(d[14]),
      C = r(d[15]),
      L = r(d[16]),
      S = r(d[17]),
      w = r(d[18]),
      v = r(d[19]),
      I = r(d[20]),
      D = r(d[21]),
      P = r(d[22]),
      k = r(d[23]),
      B = r(d[24]),
      T = r(d[25]),
      R = r(d[26]),
      E = r(d[27]),
      z = r(d[28]),
      _ = r(d[29]),
      F = r(d[30]),
      A = r(d[31]);
    const H = (e) => ['analytics', 'income', 'expenses', 'history'].includes(e);
    let M = 'analytics';
    async function W(e, o, s = 2e5) {
      const n = [];
      let l = null;
      do {
        const s = await (0, t.request)(
          (0, t.shopPath)(
            e,
            '/movements?limit=2000' +
              (l
                ? '&before=' +
                  encodeURIComponent(l.before) +
                  '&beforeId=' +
                  l.beforeId
                : ''),
          ),
        );
        (n.push(...s.movements), (l = s.next), o?.(n.length));
      } while (l && n.length < s);
      return n.reverse();
    }
    const O = (0, _.localized)([
        [
          'imports',
          '\u0648\u0631\u0648\u062f \u062f\u0627\u062f\u0647',
          '\u0627\u0632 \u0627\u06a9\u0633\u0644 \u06cc\u0627 \u0641\u0627\u06cc\u0644',
          'upload',
        ],
        [
          'exports',
          '\u062e\u0631\u0648\u062c\u06cc',
          '\u0627\u06a9\u0633\u0644\u060c PDF\u060c \u067e\u0634\u062a\u06cc\u0628\u0627\u0646',
          'download',
        ],
      ]),
      J = (e) => O.find(([t]) => t === e)?.[1];
  },
  835,
  {
    0: 415,
    1: 836,
    2: 777,
    3: 494,
    4: 838,
    5: 698,
    6: 481,
    7: 851,
    8: 855,
    9: 856,
    10: 2,
    11: 217,
    12: 99,
    13: 380,
    14: 407,
    15: 382,
    16: 492,
    17: 661,
    18: 439,
    19: 859,
    20: 690,
    21: 860,
    22: 861,
    23: 502,
    24: 862,
    25: 623,
    26: 385,
    27: 539,
    28: 517,
    29: 311,
    30: 435,
    31: 338,
    32: 994,
    33: 336,
    paths: {
      994: '/_expo/static/js/web/spreadsheet-d6de51a3fee212c7ad69ef045df3d39a.js',
    },
  },
);
