// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 766; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.gridColumns = G),
      (_e.Catalog = function ({
        rowActions: e,
        memory: R = {},
        onReveal: M,
        state: X,
        initialStock: Y,
        onSelect: Z,
        onModel: ee,
        onVariants: te,
        variantsProminent: oe = !0,
        onCategory: ne,
        onRemoveCategory: ie,
        onAlarms: re,
        onPriceAdjust: le,
        onStockCount: se,
        onAdd: ae,
        canManage: ce = !0,
        onBulk: de,
        canSeeBuyPrice: ue = !0,
        canSeeSellPrice: fe = !0,
      }) {
        const me = (0, t.useDesktop)(),
          { width: he } = (0, u.default)(),
          pe = (0, f.useRowMenu)(),
          [ye, ge] = (0, n.useState)(''),
          [xe, be] = (0, n.useState)(0),
          je = G(xe || he, me),
          Se = 3 === je,
          ke = (0, o.cardWidthFor)(xe, je),
          Ce = R.initialStock === Y ? R : {},
          { colors: ve } = (0, z.useTheme)(),
          [we, ze] = (0, n.useState)(Ce.search ?? ''),
          [De, Le] = (0, n.useState)(Ce.stock ?? Y),
          [Ie, Pe] = (0, n.useState)(Ce.category ?? ''),
          [Be, He] = (0, n.useState)(Ce.sort ?? q ?? x.DEFAULT_CATALOG_SORT),
          [Re, Me] = (0, n.useState)(
            Ce.desktop === me && void 0 !== Ce.grid ? Ce.grid : !me,
          ),
          [We, Te] = (0, n.useState)(1),
          [Fe, Ve] = (0, n.useState)(!1),
          [Ae, Oe] = (0, n.useState)(!1);
        (0, n.useEffect)(() => {
          if (void 0 !== Ce.sort || q) return;
          let e = !0;
          return (
            Q.then(() => {
              e && q && He((e) => (e === x.DEFAULT_CATALOG_SORT ? q : e));
            }),
            () => {
              e = !1;
            }
          );
        }, []);
        const [Ke, Ee] = (0, W.useConfirm)(),
          Ne = me && !Re,
          [Ge, Je] = (0, n.useState)(null),
          [Ue, $e] = (0, n.useState)(''),
          [qe, Qe] = (0, n.useState)(null),
          [Xe, Ye] = (0, n.useState)(''),
          [Ze, et] = (0, n.useState)(Ce.brand ?? ''),
          tt = (0, n.useMemo)(
            () => (0, P.expiringProductIds)(X.movements, X.products, J),
            [X.movements, X.products],
          ),
          ot = X.categories || [],
          nt = (0, n.useMemo)(
            () => (0, y.catalogBrands)(X.products),
            [X.products],
          ),
          it = (0, n.useMemo)(
            () =>
              (0, y.filterCatalog)(X.products, we, De, Ie, 'name', !1, Ze, tt),
            [X.products, we, De, Ie, Ze, tt],
          ),
          rt = (0, x.catalogSort)(Be, fe),
          lt = (0, n.useMemo)(() => {
            const e = N(it),
              t = (t) =>
                (0, x.sortCatalog)(
                  e.filter((e) => ('made' === e.product.kind) === t),
                  rt,
                  (e) => e.product,
                );
            return [...t(!0), ...t(!1)];
          }, [it, rt]),
          st = (e) => {
            ((0, K.noteLookup)(),
              (R.focus = { id: e.product.id, page: wt }),
              e.modelKey && ee ? ee(e.modelKey) : Z(e.product));
          },
          at = (e, t) => {
            const o = e.product;
            return 'name' === t
              ? o.name
              : 'category' === t
                ? o.category || ''
                : 'price' === t
                  ? fe
                    ? o.price
                    : void 0
                  : 'stock' === t
                    ? 'made' === o.kind
                      ? (o.makeable ?? o.stock)
                      : o.stock
                    : (0, V.stockValue)(o, fe);
          },
          ct = (0, n.useMemo)(
            () =>
              Ne && Ge
                ? [
                    ...(0, V.sortRows)(
                      lt.filter((e) => 'made' === e.product.kind),
                      Ge,
                      at,
                    ),
                    ...(0, V.sortRows)(
                      lt.filter((e) => 'made' !== e.product.kind),
                      Ge,
                      at,
                    ),
                  ]
                : lt,
            [lt, Ne, Ge, fe],
          ),
          dt = (0, n.useRef)(!1),
          ut = (0, n.useRef)(Date.now()),
          [ft, mt] = (0, n.useState)(null),
          ht = (0, n.useRef)(null);
        if (!dt.current) {
          dt.current = !0;
          const e = (0, T.rememberedPage)(
            Ce,
            lt.map((e) => e.product.id),
          );
          e !== We && (Te(e), Ce.focus && mt(Ce.focus.id));
        }
        const [pt, yt] = (0, n.useState)(!1),
          [gt, xt] = (0, n.useState)(new Map()),
          bt = (e) =>
            xt((t) => {
              const o = new Map(t);
              return (
                o.has(e.product.id)
                  ? o.delete(e.product.id)
                  : o.set(e.product.id, e.ids),
                o
              );
            }),
          jt = (e) => (pt ? bt(e) : st(e)),
          St = (e) => pt && gt.has(e.product.id),
          kt = [...new Set([...gt.values()].flat())],
          Ct = (e) =>
            pt
              ? (0, E.jsx)(c.default, {
                  pointerEvents: 'none',
                  style: {
                    position: 'absolute',
                    top: 6,
                    right: 6,
                    zIndex: 3,
                    width: 26,
                    height: 26,
                    borderRadius: 13,
                    borderWidth: 2,
                    borderColor: St(e) ? ve.accent : ve.line,
                    backgroundColor: St(e) ? ve.accent : ve.surface,
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                  children:
                    St(e) &&
                    (0, E.jsx)(w.Icon, {
                      name: 'check',
                      size: 16,
                      color: '#fff',
                    }),
                })
              : null,
          vt = Math.max(1, Math.ceil(lt.length / 24)),
          wt = Math.min(We, vt),
          zt = ct.slice(24 * (wt - 1), 24 * wt),
          Dt = zt.some((e) => (0, j.hasProductTags)(e.product, ue, fe));
        ((0, n.useEffect)(() => {
          const e = R.focus;
          if (!e || e.page !== wt || Date.now() - ut.current > 8e3) return;
          const t = lt.findIndex((t) => t.product.id === e.id);
          if (t < 0) return;
          const o = Math.floor(t / 24) + 1;
          o !== wt && ((e.page = o), Te(o), mt(e.id));
        }, [lt]),
          (0, n.useEffect)(() => {
            if (!ft) return;
            const e = setTimeout(() => {
              (mt(null),
                ht.current?.measureInWindow?.((e, t, o, n) => M?.(t, n)));
            }, 120);
            return () => clearTimeout(e);
          }, [ft, wt]));
        const Lt = (0, n.useRef)({
          desktop: me,
          initialStock: Y,
          filter: JSON.stringify([we, De, Ie, Be, Ze]),
        });
        function It(e) {
          const t = async () => {
            try {
              (await ie(e), Ie === e && Pe(''), qe === e && (Qe(null), $e('')));
            } catch (e) {
              Ye((0, L.errorText)(e));
            }
          };
          Ke({
            title: D.fa.deleteCategory,
            text: D.fa.deleteCategoryConfirm,
            ok: D.fa.deleteCategory,
            run: () => {
              t();
            },
          });
        }
        ((0, n.useEffect)(() => {
          Lt.current.desktop !== me && ((Lt.current.desktop = me), Me(!me));
        }, [me]),
          (0, n.useEffect)(() => {
            Lt.current.initialStock !== Y &&
              ((Lt.current.initialStock = Y), Le(Y));
          }, [Y]),
          (0, n.useEffect)(() => {
            const e = JSON.stringify([we, De, Ie, Be, Ze]);
            Lt.current.filter !== e &&
              ((Lt.current.filter = e), (R.focus = void 0), Te(1));
          }, [we, De, Ie, Be, Ze]),
          (0, n.useEffect)(() => {
            Object.assign(R, {
              search: we,
              stock: De,
              initialStock: Y,
              category: Ie,
              sort: Be,
              brand: Ze,
              grid: Re,
              desktop: me,
              page: wt,
            });
          }));
        const Pt = 'all' !== De || !!Ie || !!Ze,
          Bt = !X.products.some((e) => !e.archivedAt),
          Ht = Ne
            ? X.products.filter((e) => !e.archivedAt && (0, y.isLowStock)(e))
                .length
            : 0,
          Rt = Ne ? (0, V.shelfValue)(X.products, fe) : 0,
          Mt = new Set(kt),
          Wt = X.products.filter((e) => Mt.has(e.id));
        async function Tt() {
          (Ye(''),
            (await (0, A.printLabels)(
              Wt.map((e) => ({
                name: e.name,
                price: fe ? e.price : void 0,
                barcode: e.barcode,
                brand: e.brand,
                size: e.size,
                color: e.color,
              })),
            )) ||
              Ye(
                (0, H.L)(
                  '\u0627\u06cc\u0646 \u0646\u0633\u062e\u0647\u0654 \u0628\u0631\u0646\u0627\u0645\u0647 \u0647\u0646\u0648\u0632 \u0686\u0627\u067e \u0646\u0645\u06cc\u200c\u06a9\u0646\u062f\u061b \u0627\u0632 \u0646\u0633\u062e\u0647\u0654 \u0648\u0628 \u0686\u0627\u067e \u06a9\u0646\u06cc\u062f.',
                ),
              ));
        }
        async function _t() {
          const { exportWorkbook: e } = await r(d[38])(d[37], d.paths);
          await (0, O.saveWorkbook)(
            e({ ...X, products: Wt, movements: [] }, { unitTitles: !0 }),
            'anbari-products.xlsx',
          );
        }
        const Ft = X.products.filter((e) => !e.archivedAt).length,
          Vt = lt.reduce((e, t) => e + t.ids.length, 0),
          At =
            lt.some((e) => 'made' === e.product.kind) &&
            lt.some((e) => 'made' !== e.product.kind),
          Ot = (e, t, o = !1) => {
            if (!At) return null;
            const n = 'made' === e.product.kind;
            return (t ? 'made' === zt[t - 1].product.kind : void 0) === n
              ? null
              : (0, E.jsxs)(
                  c.default,
                  {
                    testID: 'catalog-section-' + (n ? 'made' : 'stock'),
                    style: o
                      ? {
                          paddingHorizontal: 18,
                          paddingVertical: 10,
                          borderTopWidth: t ? 1 : 0,
                          borderColor: ve.line,
                          backgroundColor: ve.bg,
                        }
                      : { width: '100%', paddingTop: t ? 10 : 0 },
                    children: [
                      (0, E.jsx)(k.Copy, {
                        style: {
                          fontSize: 15,
                          fontFamily: 'Vazirmatn_700Bold',
                        },
                        children: n
                          ? (0, H.L)(
                              '\u0633\u0627\u062e\u062a\u0647\u200c\u0647\u0627\u06cc \u0645\u0646',
                            )
                          : (0, H.L)(
                              '\u0645\u0648\u062c\u0648\u062f\u06cc \u0627\u0646\u0628\u0627\u0631',
                            ),
                      }),
                      n &&
                        (0, E.jsx)(k.Copy, {
                          style: { fontSize: 11, color: ve.muted },
                          children: (0, H.L)(
                            '\u0639\u062f\u062f \u0647\u0631 \u06a9\u062f\u0627\u0645: \u0686\u0646\u062f \u062a\u0627 \u0631\u0627 \u0628\u0627 \u0645\u0648\u0627\u062f \u0645\u0648\u062c\u0648\u062f \u0645\u06cc\u200c\u0634\u0648\u062f \u0633\u0627\u062e\u062a.',
                          ),
                        }),
                    ],
                  },
                  'head-' + (n ? 'made' : 'stock'),
                );
          };
        return (0, E.jsxs)(c.default, {
          style: { gap: 12 },
          children: [
            Ee,
            (0, E.jsx)(k.PageTitle, {
              title: D.fa.inventory,
              sub:
                Ft.toLocaleString((0, H.numberLocale)()) +
                ' ' +
                D.fa.productCount +
                (Ne && Rt > 0
                  ? ' \xb7 ' +
                    (0, H.L)(
                      '\u0627\u0631\u0632\u0634 \u0645\u0648\u062c\u0648\u062f\u06cc {amount}',
                      {
                        amount: ((e) => {
                          const t = (0, _.shortParts)(e);
                          return `${t.value} ${t.unit}`;
                        })(Rt),
                      },
                    )
                  : ''),
            }),
            (0, E.jsxs)(c.default, {
              style: k.common.row,
              children: [
                (0, E.jsx)(c.default, {
                  style: k.common.flex,
                  children: (0, E.jsx)(k.Input, {
                    testID: 'inventory-search',
                    accessibilityLabel: D.fa.search,
                    value: we,
                    onChangeText: ze,
                    placeholder: D.fa.catalogSearch,
                  }),
                }),
                Ne &&
                  (0, E.jsxs)(c.default, {
                    testID: 'desk-inventory-chips',
                    style: {
                      flexShrink: 1,
                      maxWidth: '64%',
                      flexDirection: 'row-reverse',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      gap: 6,
                    },
                    children: [
                      (0, E.jsx)(F.DeskChip, {
                        testID: 'desk-chip-all',
                        label: D.fa.stockFilters.all,
                        on: !Ie && 'all' === De && !Ze,
                        onPress: () => {
                          (Pe(''), Le('all'), et(''));
                        },
                      }),
                      ot
                        .slice(0, 8)
                        .map((e) =>
                          (0, E.jsx)(
                            F.DeskChip,
                            {
                              testID: 'desk-chip-category',
                              label: e,
                              on: Ie === e,
                              onPress: () => Pe(Ie === e ? '' : e),
                            },
                            e,
                          ),
                        ),
                      tt.size > 0 &&
                        (0, E.jsx)(F.DeskChip, {
                          testID: 'desk-chip-expiring',
                          tone: 'warn',
                          label: D.fa.stockFilters.expiring,
                          count: tt.size,
                          on: 'expiring' === De,
                          onPress: () =>
                            Le('expiring' === De ? 'all' : 'expiring'),
                        }),
                      Ht > 0 &&
                        (0, E.jsx)(F.DeskChip, {
                          testID: 'desk-chip-low',
                          tone: 'bad',
                          label: D.fa.stockFilters.low,
                          count: Ht,
                          on: 'low' === De,
                          onPress: () => Le('low' === De ? 'all' : 'low'),
                        }),
                    ],
                  }),
                ce &&
                  de &&
                  !Ne &&
                  (0, E.jsxs)(l.default, {
                    testID: 'catalog-select',
                    accessibilityRole: 'button',
                    accessibilityState: { selected: pt },
                    onPress: () => {
                      (yt(!pt), xt(new Map()));
                    },
                    style: ({ pressed: e }) => ({
                      height: 48,
                      paddingHorizontal: 14,
                      borderRadius: 12,
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      gap: 6,
                      borderWidth: s.default.hairlineWidth,
                      borderColor: pt ? ve.accentActive : ve.line,
                      backgroundColor: pt ? ve.accent : ve.soft,
                      opacity: e ? 0.85 : 1,
                    }),
                    children: [
                      (0, E.jsx)(w.Icon, {
                        name: 'check',
                        color: pt ? '#fff' : ve.text,
                        size: 18,
                      }),
                      (0, E.jsx)(k.Copy, {
                        style: {
                          fontSize: 13,
                          fontFamily: 'Vazirmatn_600SemiBold',
                          color: pt ? '#fff' : ve.text,
                        },
                        children: (0, H.L)(
                          '\u0627\u0646\u062a\u062e\u0627\u0628',
                        ),
                      }),
                    ],
                  }),
              ],
            }),
            pt &&
              !Ne &&
              de &&
              (0, E.jsx)(B.BulkBar, {
                count: kt.length,
                total: Vt,
                categories: ot,
                canSeeBuyPrice: ue,
                onAll: () => xt(new Map(lt.map((e) => [e.product.id, e.ids]))),
                onNone: () => xt(new Map()),
                onDone: () => {
                  (yt(!1), xt(new Map()));
                },
                onApply: async (e) => {
                  (await de({ ...e, ids: kt }), xt(new Map()));
                },
              }),
            ce &&
              te &&
              !oe &&
              (0, E.jsxs)(l.default, {
                testID: 'catalog-variants-small',
                accessibilityRole: 'button',
                onPress: te,
                style: ({ pressed: e }) => ({
                  alignSelf: 'flex-end',
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  gap: 6,
                  paddingVertical: 4,
                  opacity: e ? 0.7 : 1,
                }),
                children: [
                  (0, E.jsx)(w.Icon, {
                    name: 'tag',
                    size: 14,
                    color: ve.accent,
                  }),
                  (0, E.jsx)(k.Copy, {
                    style: { fontSize: 12, color: ve.accent },
                    children: (0, H.L)(
                      '\u0645\u062f\u0644 \u0628\u0627 \u0633\u0627\u06cc\u0632 \u0648 \u0631\u0646\u06af',
                    ),
                  }),
                ],
              }),
            ce &&
              te &&
              oe &&
              (0, E.jsxs)(l.default, {
                testID: 'catalog-variants',
                accessibilityRole: 'button',
                onPress: te,
                style: ({ pressed: e }) => ({
                  minHeight: 46,
                  alignSelf: 'flex-end',
                  paddingHorizontal: 16,
                  borderRadius: 14,
                  borderWidth: 1,
                  borderStyle: 'dashed',
                  borderColor: ve.accent,
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  opacity: e ? 0.85 : 1,
                }),
                children: [
                  (0, E.jsx)(w.Icon, {
                    name: 'plus',
                    size: 18,
                    color: ve.accent,
                  }),
                  (0, E.jsx)(k.Copy, {
                    style: {
                      fontSize: 13,
                      color: ve.accent,
                      fontFamily: 'Vazirmatn_600SemiBold',
                    },
                    children: (0, H.L)(
                      '\u0645\u062f\u0644 \u062c\u062f\u06cc\u062f \u0628\u0627 \u0633\u0627\u06cc\u0632 \u0648 \u0631\u0646\u06af',
                    ),
                  }),
                ],
              }),
            (0, E.jsxs)(c.default, {
              style: k.common.between,
              children: [
                (0, E.jsxs)(c.default, {
                  style: k.common.row,
                  children: [
                    (0, E.jsx)(l.default, {
                      testID: 'catalog-filters',
                      accessibilityRole: 'button',
                      accessibilityLabel: D.fa.moreFilters,
                      onPress: () => Oe(!0),
                      style: ({ pressed: e }) => ({
                        height: 48,
                        width: 48,
                        borderRadius: 12,
                        borderWidth: s.default.hairlineWidth,
                        borderColor: Ae ? ve.accentActive : ve.line,
                        backgroundColor: Ae ? ve.accent : ve.soft,
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: e ? 0.85 : 1,
                      }),
                      children: (0, E.jsx)(w.Icon, {
                        name: 'filter',
                        color: ve.text,
                        size: 21,
                      }),
                    }),
                    Pt &&
                      (0, E.jsx)(k.Copy, {
                        numberOfLines: 1,
                        style: {
                          fontSize: 12,
                          lineHeight: 18,
                          color: ve.muted,
                          flexShrink: 1,
                        },
                        children: [
                          'all' !== De ? D.fa.stockFilters[De] : '',
                          Ie
                            ? '__uncategorized' === Ie
                              ? D.fa.uncategorized
                              : Ie
                            : '',
                          Ze,
                        ]
                          .filter(Boolean)
                          .join('\u060c '),
                      }),
                  ],
                }),
                (0, E.jsxs)(c.default, {
                  style: k.common.row,
                  children: [
                    ce &&
                      se &&
                      (0, E.jsxs)(l.default, {
                        testID: 'inventory-stock-count',
                        accessibilityRole: 'button',
                        accessibilityLabel: (0, H.L)(
                          '\u0634\u0645\u0627\u0631\u0634 \u0627\u0646\u0628\u0627\u0631',
                        ),
                        onPress: se,
                        style: ({ pressed: e }) => ({
                          height: 48,
                          paddingHorizontal: 12,
                          borderRadius: 12,
                          flexDirection: 'row-reverse',
                          alignItems: 'center',
                          gap: 6,
                          borderWidth: s.default.hairlineWidth,
                          borderColor: ve.line,
                          backgroundColor: ve.soft,
                          opacity: e ? 0.85 : 1,
                        }),
                        children: [
                          (0, E.jsx)(w.Icon, {
                            name: 'inventory',
                            color: ve.text,
                            size: 18,
                          }),
                          (0, E.jsx)(k.Copy, {
                            style: {
                              fontSize: 13,
                              fontFamily: 'Vazirmatn_600SemiBold',
                            },
                            children: (0, H.L)(
                              '\u0634\u0645\u0627\u0631\u0634',
                            ),
                          }),
                        ],
                      }),
                    ce &&
                      (0, E.jsxs)(l.default, {
                        testID: 'inventory-alarms',
                        accessibilityRole: 'button',
                        accessibilityLabel: (0, H.L)(
                          '\u0647\u0634\u062f\u0627\u0631 \u06a9\u0645\u0628\u0648\u062f',
                        ),
                        onPress: re,
                        style: ({ pressed: e }) => ({
                          height: 48,
                          paddingHorizontal: 12,
                          borderRadius: 12,
                          flexDirection: 'row-reverse',
                          alignItems: 'center',
                          gap: 6,
                          borderWidth: s.default.hairlineWidth,
                          borderColor: ve.line,
                          backgroundColor: ve.soft,
                          opacity: e ? 0.85 : 1,
                        }),
                        children: [
                          (0, E.jsx)(w.Icon, {
                            name: 'bell',
                            color: ve.text,
                            size: 18,
                          }),
                          (0, E.jsx)(k.Copy, {
                            style: {
                              fontSize: 13,
                              fontFamily: 'Vazirmatn_600SemiBold',
                            },
                            children: (0, H.L)(
                              '\u0647\u0634\u062f\u0627\u0631 \u06a9\u0645\u0628\u0648\u062f',
                            ),
                          }),
                        ],
                      }),
                    (0, E.jsx)(c.default, {
                      testID: 'catalog-view',
                      accessibilityRole: 'tablist',
                      style: {
                        height: 48,
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        padding: 4,
                        borderRadius: 14,
                        borderWidth: s.default.hairlineWidth,
                        borderColor: ve.line,
                        backgroundColor: ve.soft,
                      },
                      children: [
                        {
                          value: !1,
                          icon: me ? 'data' : 'list',
                          label: me ? D.fa.desktopTable : D.fa.listView,
                        },
                        { value: !0, icon: 'grid', label: D.fa.gridView },
                      ].map((e) =>
                        (0, E.jsx)(
                          l.default,
                          {
                            accessibilityRole: 'tab',
                            accessibilityLabel: e.label,
                            accessibilityState: { selected: Re === e.value },
                            onPress: () => Me(e.value),
                            style: {
                              width: 38,
                              height: 40,
                              borderRadius: 11,
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor:
                                Re === e.value ? ve.accent : 'transparent',
                            },
                            children: (0, E.jsx)(w.Icon, {
                              name: e.icon,
                              color: Re === e.value ? ve.onAccent : ve.text,
                              size: 19,
                            }),
                          },
                          String(e.value),
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
            tt.size > 0 &&
              'expiring' !== De &&
              (0, E.jsxs)(l.default, {
                testID: 'inventory-expiring',
                accessibilityRole: 'button',
                onPress: () => {
                  (Le('expiring'), Te(1));
                },
                style: ({ pressed: e }) => ({
                  minHeight: 40,
                  paddingHorizontal: 12,
                  borderRadius: 12,
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  gap: 8,
                  backgroundColor: ve.warningSoft,
                  opacity: e ? 0.8 : 1,
                }),
                children: [
                  (0, E.jsx)(w.Icon, {
                    name: 'bell',
                    size: 16,
                    color: ve.warning,
                  }),
                  (0, E.jsx)(k.Copy, {
                    style: {
                      flex: 1,
                      fontSize: 12,
                      lineHeight: 20,
                      color: ve.warning,
                    },
                    children: (0, H.L)(
                      '{n} \u06a9\u0627\u0644\u0627 \u062a\u0627 {days} \u0631\u0648\u0632 \u062f\u06cc\u06af\u0631 \u0645\u0646\u0642\u0636\u06cc \u0645\u06cc\u200c\u0634\u0648\u062f \u06cc\u0627 \u06af\u0630\u0634\u062a\u0647',
                      {
                        n: (0, H.localDigits)(String(tt.size)),
                        days: (0, H.localDigits)(String(J)),
                      },
                    ),
                  }),
                  (0, E.jsx)(k.Copy, {
                    style: {
                      fontSize: 12,
                      color: ve.warning,
                      fontFamily: 'Vazirmatn_600SemiBold',
                    },
                    children: (0, H.L)('\u062f\u06cc\u062f\u0646'),
                  }),
                ],
              }),
            (0, E.jsx)(I.FilterSheet, {
              visible: Ae,
              stock: De,
              expiringCount: tt.size,
              category: Ie,
              sort: rt,
              sorts: (0, x.catalogSorts)(fe),
              categories: ot,
              brand: Ze,
              brands: nt,
              onStock: Le,
              onCategory: Pe,
              onBrand: et,
              onSort: (e) => {
                (He(e), (q = e), p.default.setItem($, e).catch(() => {}));
              },
              onManage: ce
                ? () => {
                    (Oe(!1), Ve(!0));
                  }
                : void 0,
              onPriceAdjust:
                ce && le
                  ? () => {
                      (Oe(!1), le());
                    }
                  : void 0,
              onClose: () => Oe(!1),
            }),
            Ne
              ? (0, E.jsxs)(c.default, {
                  style: { gap: 10 },
                  children: [
                    ce &&
                      de &&
                      kt.length > 0 &&
                      (0, E.jsx)(B.BulkBar, {
                        compact: !0,
                        count: kt.length,
                        total: Vt,
                        categories: ot,
                        canSeeBuyPrice: ue,
                        onAll: () =>
                          xt(new Map(lt.map((e) => [e.product.id, e.ids]))),
                        onNone: () => xt(new Map()),
                        onDone: () => xt(new Map()),
                        onApply: async (e) => {
                          (await de({ ...e, ids: kt }), xt(new Map()));
                        },
                        extra: (0, E.jsxs)(E.Fragment, {
                          children: [
                            (0, E.jsx)(F.DeskKey, {
                              testID: 'bulk-labels',
                              tone: 'surface',
                              icon: 'receipt',
                              label: (0, H.L)(
                                '\u0686\u0627\u067e \u0628\u0631\u0686\u0633\u0628',
                              ),
                              onPress: () => {
                                Tt();
                              },
                            }),
                            (0, E.jsx)(F.DeskKey, {
                              testID: 'bulk-excel',
                              tone: 'surface',
                              icon: 'download',
                              label: (0, H.L)('\u0627\u06a9\u0633\u0644'),
                              onPress: () => {
                                _t();
                              },
                            }),
                          ],
                        }),
                      }),
                    !!Xe &&
                      !Fe &&
                      (0, E.jsx)(k.Copy, {
                        accessibilityRole: 'alert',
                        style: { fontSize: 13, color: ve.danger },
                        children: Xe,
                      }),
                    (0, E.jsxs)(k.Card, {
                      testID: 'desktop-inventory-table',
                      style: { padding: 0, gap: 0, overflow: 'hidden' },
                      children: [
                        (0, E.jsxs)(F.DeskHeadRow, {
                          children: [
                            ce &&
                              de &&
                              (0, E.jsx)(F.DeskTick, {
                                testID: 'catalog-tick-all',
                                label: (0, H.L)(
                                  '\u0627\u0646\u062a\u062e\u0627\u0628 \u0647\u0645\u0647',
                                ),
                                on:
                                  zt.length > 0 &&
                                  zt.every((e) => gt.has(e.product.id)),
                                mixed:
                                  zt.some((e) => gt.has(e.product.id)) &&
                                  !zt.every((e) => gt.has(e.product.id)),
                                onPress: () =>
                                  xt((e) => {
                                    const t = new Map(e),
                                      o = zt.every((e) => t.has(e.product.id));
                                    for (const e of zt)
                                      o
                                        ? t.delete(e.product.id)
                                        : t.set(e.product.id, e.ids);
                                    return t;
                                  }),
                              }),
                            (0, E.jsx)(F.DeskHead, {
                              label: D.fa.desktopProduct,
                              sortKey: 'name',
                              sort: Ge,
                              onSort: (e) => Je((0, V.nextSort)(Ge, e)),
                              style: { flex: 2.4 },
                            }),
                            (0, E.jsx)(F.DeskHead, {
                              label: D.fa.desktopCategory,
                              sortKey: 'category',
                              sort: Ge,
                              onSort: (e) => Je((0, V.nextSort)(Ge, e)),
                              style: { flex: 1 },
                            }),
                            fe &&
                              (0, E.jsx)(F.DeskHead, {
                                label: D.fa.desktopPrice,
                                sortKey: 'price',
                                sort: Ge,
                                onSort: (e) => Je((0, V.nextSort)(Ge, e)),
                                style: { flex: 1.1 },
                              }),
                            (0, E.jsx)(F.DeskHead, {
                              label: D.fa.stock,
                              sortKey: 'stock',
                              sort: Ge,
                              onSort: (e) => Je((0, V.nextSort)(Ge, e)),
                              style: { flex: 0.7 },
                            }),
                            fe &&
                              (0, E.jsx)(F.DeskHead, {
                                label: (0, H.L)(
                                  '\u0627\u0631\u0632\u0634 \u0645\u0648\u062c\u0648\u062f\u06cc',
                                ),
                                sortKey: 'value',
                                sort: Ge,
                                onSort: (e) => Je((0, V.nextSort)(Ge, e)),
                                style: { flex: 1.1 },
                              }),
                            Dt &&
                              (0, E.jsx)(F.DeskHead, {
                                label: D.fa.desktopStatus,
                                style: { flex: 0.8, minWidth: U },
                              }),
                          ],
                        }),
                        zt.map((t, o) => {
                          const n = t.product,
                            u = gt.has(n.id),
                            h = (0, V.stockValue)(n, fe);
                          return [
                            Ot(t, o, !0),
                            (0, E.jsxs)(
                              l.default,
                              {
                                ref: n.id === ft ? ht : void 0,
                                testID: 'catalog-item-' + n.id,
                                accessibilityRole: 'button',
                                accessibilityLabel: n.name,
                                onPress: () => jt(t),
                                onHoverIn:
                                  e && pe.enabled && !t.modelKey
                                    ? () => ge(n.id)
                                    : void 0,
                                onHoverOut: e
                                  ? () => ge((e) => (e === n.id ? '' : e))
                                  : void 0,
                                ...(e && pe.enabled && !t.modelKey
                                  ? {
                                      onContextMenu: (t) =>
                                        pe.openAt(t, n.name, e.items(n)),
                                    }
                                  : {}),
                                style: ({ pressed: e, hovered: t }) => [
                                  k.common.row,
                                  {
                                    gap: 12,
                                    minHeight: 44,
                                    paddingHorizontal: 16,
                                    paddingVertical: 5,
                                    borderTopWidth:
                                      o || At ? s.default.hairlineWidth : 0,
                                    borderColor: ve.line,
                                    backgroundColor: u
                                      ? ve.accentSoft
                                      : e || t
                                        ? ve.soft
                                        : 'transparent',
                                  },
                                ],
                                children: [
                                  ce &&
                                    de &&
                                    (0, E.jsx)(F.DeskTick, {
                                      testID: 'catalog-tick-' + n.id,
                                      label: n.name,
                                      on: u,
                                      onPress: () => bt(t),
                                    }),
                                  (0, E.jsxs)(c.default, {
                                    style: [
                                      k.common.row,
                                      { flex: 2.4, minWidth: 0, gap: 10 },
                                    ],
                                    children: [
                                      (0, E.jsx)(c.default, {
                                        style: { width: 32 },
                                        children: (0, E.jsx)(C.ProductPhoto, {
                                          product: n,
                                          height: 32,
                                        }),
                                      }),
                                      (0, E.jsxs)(c.default, {
                                        style: { flex: 1, minWidth: 0 },
                                        children: [
                                          (0, E.jsxs)(c.default, {
                                            style: {
                                              flexDirection: 'row-reverse',
                                              alignItems: 'center',
                                              gap: 6,
                                            },
                                            children: [
                                              (0, E.jsx)(k.Copy, {
                                                numberOfLines: 1,
                                                style: {
                                                  flexShrink: 1,
                                                  fontSize: 13.5,
                                                  lineHeight: 21,
                                                  fontFamily:
                                                    'Vazirmatn_600SemiBold',
                                                },
                                                children: n.name,
                                              }),
                                              (0, E.jsx)(j.BrandTag, {
                                                brand: n.brand,
                                              }),
                                            ],
                                          }),
                                          t.line || n.color || n.size
                                            ? (0, E.jsx)(k.Copy, {
                                                numberOfLines: 1,
                                                style: {
                                                  fontSize: 11,
                                                  lineHeight: 16,
                                                  color: t.line
                                                    ? ve.accent
                                                    : ve.muted,
                                                },
                                                children:
                                                  t.line ||
                                                  [n.color, n.size]
                                                    .filter(Boolean)
                                                    .join('\u060c '),
                                              })
                                            : null,
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, E.jsx)(k.Copy, {
                                    numberOfLines: 1,
                                    style: {
                                      flex: 1,
                                      minWidth: 0,
                                      fontSize: 12.5,
                                      lineHeight: 20,
                                      color: ve.muted,
                                    },
                                    children: n.category || D.fa.uncategorized,
                                  }),
                                  fe &&
                                    (0, E.jsx)(k.Copy, {
                                      numberOfLines: 1,
                                      style: {
                                        flex: 1.1,
                                        minWidth: 0,
                                        fontSize: 13,
                                        lineHeight: 20,
                                      },
                                      children:
                                        void 0 === n.price
                                          ? '\u2014'
                                          : (0, _.money)(n.price, {
                                              full: !0,
                                              hint: !1,
                                            }),
                                    }),
                                  'made' === n.kind
                                    ? (0, E.jsx)(k.Copy, {
                                        testID: 'catalog-makeable-' + n.id,
                                        style: {
                                          flex: 0.7,
                                          minWidth: 0,
                                          fontSize:
                                            n.stock > 0 ||
                                            'number' == typeof n.makeable
                                              ? 15
                                              : 11,
                                          lineHeight: 22,
                                          fontFamily: 'Vazirmatn_600SemiBold',
                                          color:
                                            n.stock <= 0 && 0 === n.makeable
                                              ? ve.danger
                                              : ve.accent,
                                        },
                                        children:
                                          n.stock > 0
                                            ? n.stock.toLocaleString(
                                                (0, H.numberLocale)(),
                                              )
                                            : 'number' == typeof n.makeable
                                              ? n.makeable.toLocaleString(
                                                  (0, H.numberLocale)(),
                                                )
                                              : '\u2014',
                                      })
                                    : (0, E.jsx)(k.Copy, {
                                        style: {
                                          flex: 0.7,
                                          minWidth: 0,
                                          fontSize: 0 !== n.stock ? 15 : 12,
                                          lineHeight: 22,
                                          fontFamily: 'Vazirmatn_600SemiBold',
                                          color:
                                            n.stock > 0 ? ve.text : ve.danger,
                                        },
                                        children:
                                          n.stock < 0
                                            ? (0, b.stockNumber)(n.stock)
                                            : 0 !== n.stock
                                              ? n.stock.toLocaleString(
                                                  (0, H.numberLocale)(),
                                                )
                                              : '\u2014',
                                      }),
                                  fe &&
                                    (0, E.jsx)(k.Copy, {
                                      testID: 'catalog-value-' + n.id,
                                      numberOfLines: 1,
                                      style: {
                                        flex: 1.1,
                                        minWidth: 0,
                                        fontSize: 12.5,
                                        lineHeight: 20,
                                        color:
                                          void 0 === h ? ve.muted : ve.text,
                                      },
                                      children:
                                        void 0 === h
                                          ? '\u2014'
                                          : (0, _.money)(h, {
                                              full: !0,
                                              hint: !1,
                                            }),
                                    }),
                                  Dt &&
                                    (0, E.jsx)(c.default, {
                                      style: {
                                        flex: 0.8,
                                        minWidth: U,
                                        alignItems: 'flex-end',
                                      },
                                      children: (0, E.jsx)(j.ProductTags, {
                                        product: n,
                                        canSeeBuyPrice: ue,
                                        canSeeSellPrice: fe,
                                      }),
                                    }),
                                  e &&
                                    ye === n.id &&
                                    (0, E.jsx)(c.default, {
                                      pointerEvents: 'box-none',
                                      style: {
                                        position: 'absolute',
                                        left: 10,
                                        top: 0,
                                        bottom: 0,
                                        justifyContent: 'center',
                                      },
                                      children: (0, E.jsx)(c.default, {
                                        style: {
                                          padding: 4,
                                          borderRadius: 11,
                                          backgroundColor: ve.surface,
                                        },
                                        children: (0, E.jsx)(f.RowHoverKeys, {
                                          testID: 'catalog-hover-' + n.id,
                                          minusLabel: (0, H.L)(
                                            '\u0641\u0631\u0648\u0634 \u0628\u0647 \u0641\u0627\u06a9\u062a\u0648\u0631 \u0628\u0627\u0632',
                                          ),
                                          plusLabel: (0, H.L)(
                                            '\u0648\u0631\u0648\u062f \u06a9\u0627\u0644\u0627',
                                          ),
                                          onMinus: e.onMinus
                                            ? () => e.onMinus(n)
                                            : void 0,
                                          onPlus: e.onPlus
                                            ? () => e.onPlus(n)
                                            : void 0,
                                          onMore: (t, o) =>
                                            pe.openNear(
                                              t,
                                              o,
                                              n.name,
                                              e.items(n),
                                            ),
                                        }),
                                      }),
                                    }),
                                ],
                              },
                              n.id,
                            ),
                          ];
                        }),
                        pe.element,
                      ],
                    }),
                  ],
                })
              : (0, E.jsxs)(E.Fragment, {
                  children: [
                    '  ',
                    (0, E.jsx)(c.default, {
                      testID: 'catalog-cards',
                      onLayout: (e) => {
                        const t = Math.floor(e.nativeEvent.layout.width);
                        t !== xe && be(t);
                      },
                      style: {
                        flexDirection: 'row-reverse',
                        flexWrap: 'wrap',
                        gap: Re ? 8 : 6,
                      },
                      children: zt.map((e, t) => {
                        const o = e.product;
                        return [
                          Ot(e, t),
                          (0, E.jsx)(
                            S.Reveal,
                            {
                              index: t,
                              style: {
                                width: Re
                                  ? ke || (3 === je ? '31%' : '23%')
                                  : '100%',
                              },
                              children: (0, E.jsxs)(l.default, {
                                ref: o.id === ft ? ht : void 0,
                                testID: 'catalog-item-' + o.id,
                                accessibilityRole: 'button',
                                accessibilityLabel: o.name,
                                onPress: () => jt(e),
                                style: {
                                  width: '100%',
                                  flex: 1,
                                  padding: Re && Se ? 6 : 8,
                                  borderRadius: Re ? (Se ? 14 : 18) : 14,
                                  borderWidth: St(e) ? 2 : 1,
                                  borderColor: St(e) ? ve.accent : ve.line,
                                  backgroundColor: St(e)
                                    ? ve.accentSoft
                                    : ve.surface,
                                },
                                children: [
                                  Ct(e),
                                  Re
                                    ? (0, E.jsxs)(c.default, {
                                        style: Re
                                          ? { gap: 7 }
                                          : {
                                              flexDirection: 'row-reverse',
                                              gap: 10,
                                              alignItems: 'center',
                                            },
                                        children: [
                                          (0, E.jsx)(c.default, {
                                            style: Re ? {} : { width: 64 },
                                            children: (0, E.jsx)(
                                              C.ProductPhoto,
                                              {
                                                product: o,
                                                height: Re
                                                  ? me
                                                    ? 150
                                                    : Se
                                                      ? 84
                                                      : 112
                                                  : 64,
                                              },
                                            ),
                                          }),
                                          (0, E.jsxs)(c.default, {
                                            style: Re ? {} : { flex: 1 },
                                            children: [
                                              (0, E.jsx)(k.Copy, {
                                                numberOfLines: 1,
                                                style: {
                                                  fontSize: 12,
                                                  fontFamily:
                                                    'Vazirmatn_500Medium',
                                                },
                                                children: o.name,
                                              }),
                                              (0, E.jsxs)(c.default, {
                                                style: {
                                                  flexDirection: 'row-reverse',
                                                  alignItems: 'center',
                                                  gap: 6,
                                                },
                                                children: [
                                                  (0, E.jsx)(j.BrandTag, {
                                                    brand: o.brand,
                                                  }),
                                                  (0, E.jsx)(k.Copy, {
                                                    numberOfLines: 1,
                                                    style: {
                                                      flexShrink: 1,
                                                      fontSize: 11,
                                                      color: e.line
                                                        ? ve.accent
                                                        : ve.muted,
                                                      lineHeight: 18,
                                                    },
                                                    children:
                                                      e.line ||
                                                      [o.color, o.size]
                                                        .filter(Boolean)
                                                        .join('\u060c ') ||
                                                      (o.brand
                                                        ? ''
                                                        : o.category ||
                                                          D.fa.uncategorized),
                                                  }),
                                                ],
                                              }),
                                              'made' === o.kind
                                                ? (0, E.jsx)(k.Copy, {
                                                    testID:
                                                      'catalog-makeable-' +
                                                      o.id,
                                                    style: {
                                                      fontSize: 13,
                                                      lineHeight: 24,
                                                      fontFamily:
                                                        'Vazirmatn_600SemiBold',
                                                      color:
                                                        0 === o.makeable
                                                          ? ve.danger
                                                          : ve.accent,
                                                    },
                                                    children: (0,
                                                    j.makeableText)(o),
                                                  })
                                                : 0 !== o.stock &&
                                                  (0, E.jsx)(k.Copy, {
                                                    numberOfLines: 1,
                                                    style: {
                                                      fontSize:
                                                        Re && Se ? 14 : 16,
                                                      lineHeight:
                                                        Re && Se ? 24 : 28,
                                                      fontFamily:
                                                        'Vazirmatn_600SemiBold',
                                                      writingDirection: 'ltr',
                                                      color: ve.text,
                                                    },
                                                    children: (0, j.stockLabel)(
                                                      o.stock,
                                                      (0, j.unitName)(o.unit),
                                                    ),
                                                  }),
                                              void 0 !== o.price &&
                                                (0, E.jsx)(k.Copy, {
                                                  numberOfLines: 1,
                                                  style: {
                                                    fontSize:
                                                      Re && Se ? 10 : 11,
                                                    color: ve.muted,
                                                    lineHeight: 20,
                                                  },
                                                  children: (0, _.money)(
                                                    o.price,
                                                    { full: !0 },
                                                  ),
                                                }),
                                            ],
                                          }),
                                          !Re &&
                                            (0, E.jsx)(j.ProductTags, {
                                              product: o,
                                              canSeeBuyPrice: ue,
                                              canSeeSellPrice: fe,
                                              style: {
                                                alignSelf: 'flex-start',
                                                maxWidth: 90,
                                              },
                                            }),
                                        ],
                                      })
                                    : (0, E.jsxs)(c.default, {
                                        testID: 'catalog-row-' + o.id,
                                        style: {
                                          flexDirection: 'row-reverse',
                                          gap: 10,
                                          alignItems: 'center',
                                          minHeight: 44,
                                        },
                                        children: [
                                          (0, E.jsx)(c.default, {
                                            style: { width: 44 },
                                            children: (0, E.jsx)(
                                              C.ProductPhoto,
                                              { product: o, height: 44 },
                                            ),
                                          }),
                                          (0, E.jsxs)(c.default, {
                                            style: {
                                              flex: 1,
                                              minWidth: 0,
                                              gap: 1,
                                            },
                                            children: [
                                              (0, E.jsxs)(c.default, {
                                                style: {
                                                  flexDirection: 'row-reverse',
                                                  alignItems: 'center',
                                                  gap: 6,
                                                },
                                                children: [
                                                  (0, E.jsx)(k.Copy, {
                                                    numberOfLines: 1,
                                                    style: {
                                                      flexShrink: 1,
                                                      fontSize: 13,
                                                      lineHeight: 21,
                                                      fontFamily:
                                                        'Vazirmatn_600SemiBold',
                                                    },
                                                    children: o.name,
                                                  }),
                                                  (0, E.jsx)(j.BrandTag, {
                                                    brand: o.brand,
                                                  }),
                                                ],
                                              }),
                                              (0, E.jsxs)(c.default, {
                                                style: {
                                                  flexDirection: 'row-reverse',
                                                  alignItems: 'center',
                                                  gap: 6,
                                                },
                                                children: [
                                                  e.line || o.color || o.size
                                                    ? (0, E.jsx)(k.Copy, {
                                                        numberOfLines: 1,
                                                        style: {
                                                          flexShrink: 1,
                                                          fontSize: 11,
                                                          lineHeight: 17,
                                                          color: e.line
                                                            ? ve.accent
                                                            : ve.muted,
                                                        },
                                                        children:
                                                          e.line ||
                                                          [o.color, o.size]
                                                            .filter(Boolean)
                                                            .join('\u060c '),
                                                      })
                                                    : null,
                                                  (0, E.jsx)(j.ProductTags, {
                                                    product: o,
                                                    canSeeBuyPrice: ue,
                                                    canSeeSellPrice: fe,
                                                    style: { flexShrink: 1 },
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, E.jsxs)(c.default, {
                                            style: {
                                              alignItems: 'flex-start',
                                              maxWidth: '38%',
                                            },
                                            children: [
                                              'made' === o.kind
                                                ? (0, E.jsx)(k.Copy, {
                                                    testID:
                                                      'catalog-makeable-' +
                                                      o.id,
                                                    numberOfLines: 1,
                                                    style: {
                                                      fontSize: 13,
                                                      lineHeight: 22,
                                                      fontFamily:
                                                        'Vazirmatn_600SemiBold',
                                                      color:
                                                        0 === o.makeable
                                                          ? ve.danger
                                                          : ve.accent,
                                                    },
                                                    children: (0,
                                                    j.makeableText)(o),
                                                  })
                                                : (0, E.jsx)(k.Copy, {
                                                    numberOfLines: 1,
                                                    style: {
                                                      fontSize: 14,
                                                      lineHeight: 22,
                                                      fontFamily:
                                                        'Vazirmatn_600SemiBold',
                                                      writingDirection: 'ltr',
                                                      color:
                                                        0 !== o.stock
                                                          ? ve.text
                                                          : ve.danger,
                                                    },
                                                    children:
                                                      0 !== o.stock
                                                        ? (0, j.stockLabel)(
                                                            o.stock,
                                                            (0, j.unitName)(
                                                              o.unit,
                                                            ),
                                                          )
                                                        : '\u2014',
                                                  }),
                                              void 0 !== o.price &&
                                                (0, E.jsx)(k.Copy, {
                                                  numberOfLines: 1,
                                                  style: {
                                                    fontSize: 11,
                                                    lineHeight: 17,
                                                    color: ve.muted,
                                                  },
                                                  children: (0, _.money)(
                                                    o.price,
                                                    { full: !0, hint: !1 },
                                                  ),
                                                }),
                                            ],
                                          }),
                                        ],
                                      }),
                                  Re &&
                                    (0, E.jsx)(j.ProductTags, {
                                      product: o,
                                      canSeeBuyPrice: ue,
                                      canSeeSellPrice: fe,
                                      style: {
                                        position: 'absolute',
                                        top: Se ? 10 : 14,
                                        left: Se ? 10 : 14,
                                        right: Se ? 10 : 14,
                                        zIndex: 2,
                                      },
                                    }),
                                ],
                              }),
                            },
                            o.id,
                          ),
                        ];
                      }),
                    }),
                  ],
                }),
            !lt.length &&
              (Bt
                ? (0, E.jsxs)(k.Card, {
                    testID: 'inventory-empty',
                    children: [
                      (0, E.jsx)(k.Copy, {
                        style: {
                          fontSize: 16,
                          lineHeight: 24,
                          fontFamily: 'Vazirmatn_600SemiBold',
                        },
                        children: (0, H.L)(
                          '\u0647\u0646\u0648\u0632 \u06a9\u0627\u0644\u0627\u06cc\u06cc \u062b\u0628\u062a \u0646\u0634\u062f\u0647',
                        ),
                      }),
                      (0, E.jsx)(k.Copy, {
                        style: {
                          fontSize: 13,
                          lineHeight: 22,
                          color: ve.muted,
                        },
                        children: (0, H.L)(
                          '\u0627\u0648\u0644\u06cc\u0646 \u06a9\u0627\u0644\u0627 \u0631\u0627 \u0627\u0632 \u062a\u0628 \u0627\u0641\u0632\u0648\u062f\u0646 \u062b\u0628\u062a \u06a9\u0646.',
                        ),
                      }),
                      ae &&
                        (0, E.jsx)(k.Button, {
                          testID: 'inventory-empty-add',
                          onPress: ae,
                          children: (0, H.L)(
                            '\u0627\u0641\u0632\u0648\u062f\u0646 \u06a9\u0627\u0644\u0627',
                          ),
                        }),
                    ],
                  })
                : (0, E.jsx)(k.Card, {
                    children: (0, E.jsx)(k.Copy, {
                      style: {
                        textAlign: 'center',
                        fontSize: 13,
                        lineHeight: 20,
                        color: ve.muted,
                      },
                      children: (0, H.L)(
                        '\u0628\u0627 \u0627\u06cc\u0646 \u062c\u0633\u062a\u200c\u0648\u062c\u0648 \u0686\u06cc\u0632\u06cc \u067e\u06cc\u062f\u0627 \u0646\u0634\u062f.',
                      ),
                    }),
                  })),
            vt > 1 &&
              (0, E.jsxs)(c.default, {
                style: k.common.between,
                children: [
                  (0, E.jsx)(k.Button, {
                    testID: 'catalog-next',
                    secondary: !0,
                    disabled: wt >= vt,
                    onPress: () => Te(wt + 1),
                    children: D.fa.nextPage,
                  }),
                  (0, E.jsxs)(k.Copy, {
                    children: [
                      wt.toLocaleString((0, H.numberLocale)()),
                      ' / ',
                      vt.toLocaleString((0, H.numberLocale)()),
                    ],
                  }),
                  (0, E.jsx)(k.Button, {
                    secondary: !0,
                    disabled: wt <= 1,
                    onPress: () => Te(wt - 1),
                    children: D.fa.previousPage,
                  }),
                ],
              }),
            (0, E.jsx)(v.Sheet, {
              visible: Fe,
              title: D.fa.manageCategories,
              onClose: () => Ve(!1),
              children: (0, E.jsxs)(h.KeyboardScrollView, {
                keyboardShouldPersistTaps: 'handled',
                contentContainerStyle: { gap: 12 },
                children: [
                  (0, E.jsx)(k.Input, {
                    testID: 'category-name',
                    value: Ue,
                    maxLength: 60,
                    placeholder: D.fa.categoryPlaceholder,
                    onChangeText: $e,
                  }),
                  (0, E.jsx)(k.Button, {
                    testID: 'save-category',
                    onPress: async function () {
                      try {
                        (await ne(qe, Ue),
                          Ie === qe && Pe(Ue.trim()),
                          $e(''),
                          Qe(null),
                          Ye(''));
                      } catch (e) {
                        Ye((0, L.errorText)(e));
                      }
                    },
                    children: qe ? D.fa.renameCategory : D.fa.createCategory,
                  }),
                  ot.map((e) =>
                    (0, E.jsxs)(
                      c.default,
                      {
                        style: k.common.between,
                        children: [
                          (0, E.jsx)(k.Copy, { children: e }),
                          (0, E.jsxs)(c.default, {
                            style: k.common.row,
                            children: [
                              (0, E.jsx)(l.default, {
                                accessibilityRole: 'button',
                                onPress: () => {
                                  (Qe(e), $e(e));
                                },
                                children: (0, E.jsx)(k.Copy, {
                                  style: { fontSize: 12 },
                                  children: D.fa.edit,
                                }),
                              }),
                              (0, E.jsx)(l.default, {
                                accessibilityRole: 'button',
                                onPress: () => It(e),
                                children: (0, E.jsx)(k.Copy, {
                                  style: { fontSize: 12, color: ve.danger },
                                  children: D.fa.deleteCategory,
                                }),
                              }),
                            ],
                          }),
                        ],
                      },
                      e,
                    ),
                  ),
                  (0, E.jsx)(k.Copy, {
                    style: [k.common.small, { color: ve.muted }],
                    children: D.fa.categoryDeleteHint,
                  }),
                  !!Xe &&
                    (0, E.jsx)(k.Copy, {
                      style: { color: ve.danger },
                      children: Xe,
                    }),
                ],
              }),
            }),
          ],
        });
      }));
    var t = r(d[0]),
      o = r(d[1]),
      n = r(d[2]),
      l = e(r(d[3])),
      s = e(r(d[4])),
      c = e(r(d[5])),
      u = e(r(d[6])),
      f = r(d[7]),
      h = r(d[8]),
      p = e(r(d[9])),
      y = r(d[10]),
      x = r(d[11]),
      b = r(d[12]),
      j = r(d[13]),
      S = r(d[14]),
      k = r(d[15]),
      C = r(d[16]),
      v = r(d[17]),
      w = r(d[18]),
      z = r(d[19]),
      D = r(d[20]),
      L = r(d[21]),
      I = r(d[22]),
      P = r(d[23]),
      B = r(d[24]),
      H = r(d[25]),
      R = r(d[26]),
      M = r(d[27]),
      W = r(d[28]),
      T = r(d[29]),
      _ = r(d[30]),
      F = r(d[31]),
      V = r(d[32]),
      A = r(d[33]),
      O = r(d[34]),
      K = r(d[35]),
      E = r(d[36]);
    function N(e) {
      const t = [],
        o = new Map();
      for (const n of e) {
        const e = n.model?.trim() ? (0, R.normalizeName)(n.model) : '';
        e
          ? (o.has(e) ||
              (o.set(e, []), t.push({ product: n, modelKey: e, ids: [] })),
            o.get(e).push(n))
          : t.push({ product: n, ids: [n.id] });
      }
      return t.map((e) => {
        if (!e.modelKey) return e;
        const t = o.get(e.modelKey),
          n = t.map((e) => e.price).filter((e) => void 0 !== e),
          l = t.map((e) => e.costPrice ?? e.avgCost).filter((e) => null != e),
          s = t.find((e) => e.photo)?.photo,
          c = (0, x.newestDate)(t.map((e) => e.createdAt)),
          u = (0, M.sortSizes)(t.map((e) => e.size || '').filter(Boolean)),
          f = [...new Set(t.map((e) => e.color || '').filter(Boolean))],
          h = {
            id: 'model:' + e.modelKey,
            name: e.product.model.trim(),
            detail: '',
            stock:
              Math.round(
                1e3 *
                  t.reduce((e, t) => e + ('made' === t.kind ? 0 : t.stock), 0),
              ) / 1e3,
            unit: e.product.unit,
            ...(s ? { photo: s } : {}),
            ...(e.product.brand ? { brand: e.product.brand } : {}),
            ...(e.product.category ? { category: e.product.category } : {}),
            ...(n.length === t.length && n.length
              ? { price: Math.min(...n) }
              : {}),
            ...(l.length === t.length && l.length
              ? { costPrice: Math.min(...l) }
              : {}),
            ...(c ? { createdAt: c } : {}),
          },
          p = [
            u.length
              ? (0, H.L)('\u0633\u0627\u06cc\u0632') +
                ' ' +
                (u.length > 2
                  ? (0, H.L)('{a} \u062a\u0627 {b}', {
                      a: (0, H.localDigits)(u[0]),
                      b: (0, H.localDigits)(u[u.length - 1]),
                    })
                  : (0, H.localDigits)(u.join('\u060c ')))
              : '',
            f.length
              ? (0, H.L)('{n} \u0631\u0646\u06af', {
                  n: f.length.toLocaleString((0, H.numberLocale)()),
                })
              : '',
          ]
            .filter(Boolean)
            .join('\u060c ');
        return {
          product: h,
          modelKey: e.modelKey,
          line: p,
          ids: t.map((e) => e.id),
        };
      });
    }
    function G(e, t = !1) {
      return t ? 4 : e >= 900 ? 5 : e >= 600 ? 4 : 3;
    }
    const J = 7,
      U = 118,
      $ = 'anbari:catalog-sort';
    let q;
    const Q = p.default
      .getItem($)
      .then((e) => {
        e && (q = e);
      })
      .catch(() => {});
  },
  766,
  {
    0: 481,
    1: 767,
    2: 2,
    3: 232,
    4: 17,
    5: 99,
    6: 257,
    7: 768,
    8: 480,
    9: 258,
    10: 452,
    11: 701,
    12: 433,
    13: 585,
    14: 657,
    15: 407,
    16: 628,
    17: 539,
    18: 385,
    19: 382,
    20: 492,
    21: 690,
    22: 769,
    23: 705,
    24: 770,
    25: 311,
    26: 439,
    27: 453,
    28: 534,
    29: 771,
    30: 435,
    31: 659,
    32: 660,
    33: 772,
    34: 661,
    35: 566,
    36: 338,
    37: 994,
    38: 336,
    paths: {
      994: '/_expo/static/js/web/spreadsheet-d6de51a3fee212c7ad69ef045df3d39a.js',
    },
  },
);
