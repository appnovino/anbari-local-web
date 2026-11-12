// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 851; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a, _m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.History = function ({
        state: e,
        shop: c,
        onCorrect: A,
        canCorrect: V = !0,
      }) {
        const F = (0, n.useDesktop)(),
          N = (0, i.useSafeAreaInsets)(),
          { colors: $ } = (0, S.useTheme)(),
          [E, q] = (0, o.useState)(''),
          [W, Z] = (0, o.useState)('all'),
          [K, G] = (0, o.useState)(0),
          [U, J] = (0, o.useState)(1),
          [Q, X] = (0, o.useState)(null),
          [Y, ee] = (0, o.useState)(!1),
          [te, ne] = (0, o.useState)(''),
          [re, oe] = (0, o.useState)(null),
          se = c ? (0, k.scoped)(c.id, 'movements:p1') : null,
          le = (0, o.useRef)(se);
        le.current = se;
        const ie = (0, k.useSwr)(se, () =>
            (0, L.request)((0, L.shopPath)(c, '/movements?limit=100')),
          ),
          [ae, de] = (0, o.useState)(() => ({
            key: se,
            ...((se ? O.get(se) : void 0) ?? { rows: [], cursor: void 0 }),
          })),
          ce =
            ae.key === se
              ? ae
              : {
                  key: se,
                  ...((se ? O.get(se) : void 0) ?? {
                    rows: [],
                    cursor: void 0,
                  }),
                },
          ue = (0, o.useMemo)(() => {
            const e = ie.data?.movements ?? [],
              t = new Set(e.map((e) => e.id));
            return [...e, ...ce.rows.filter((e) => !t.has(e.id))];
          }, [ie.data, ce.rows]),
          me = void 0 === ce.cursor ? ie.data?.next : ce.cursor,
          [fe, he] = (0, o.useState)(''),
          ye = fe || ie.error,
          ge = (0, o.useRef)(!1),
          [pe, xe] = (0, o.useState)(null),
          [je, be] = (0, o.useState)('');
        async function ve() {
          if (!c || !se || !me || ge.current) return;
          const e = se,
            t = me;
          ge.current = !0;
          try {
            const n = await (0, L.request)(
              (0, L.shopPath)(
                c,
                '/movements?limit=100&before=' +
                  encodeURIComponent(t.before) +
                  '&beforeId=' +
                  t.beforeId,
              ),
            );
            if (le.current !== e) return;
            const o = O.get(e)?.rows ?? ce.rows,
              s = new Set(o.map((e) => e.id)),
              l = [...o, ...n.movements.filter((e) => !s.has(e.id))],
              i = { rows: l, cursor: n.next };
            (O.set(e, i), de({ key: e, ...i }), he(''));
          } catch (t) {
            le.current === e && he((0, L.message)(t));
          } finally {
            ge.current = !1;
          }
        }
        const Ce = c ? ue : e.movements,
          Se = (0, o.useMemo)(
            () =>
              Ce.filter(
                (e) =>
                  (0, a.normalizeName)(e.name).includes(
                    (0, a.normalizeName)(E),
                  ) &&
                  ('all' === W || e.kind === W) &&
                  (!K ||
                    (!!e.timestamp &&
                      Date.parse(e.timestamp) >= Date.now() - 864e5 * K)),
              )
                .map((e, t) => ({ m: e, i: t }))
                .sort(
                  (e, t) =>
                    (Date.parse(t.m.timestamp || '') || 0) -
                      (Date.parse(e.m.timestamp || '') || 0) || t.i - e.i,
                )
                .map(({ m: e }) => e),
            [Ce, E, W, K],
          ),
          Le = Math.min(U, Math.max(1, Math.ceil(Se.length / 30))),
          Ie = (0, o.useMemo)(() => (0, v.fixTrail)(Ce), [Ce]),
          ke = new Set(Ie.keys()),
          we = (e) =>
            'removed' === Ie.get(e)
              ? (0, I.L)('\u062d\u0630\u0641 \u0634\u062f')
              : (0, I.L)('\u0627\u0635\u0644\u0627\u062d \u0634\u062f');
        async function ze(e) {
          if (Q) {
            (ee(!0), ne(''));
            try {
              (await A(Q.movementId, e), c && (await ie.reload()), X(null));
            } catch (e) {
              ne((0, L.message)(e));
            } finally {
              ee(!1);
            }
          }
        }
        async function De(e) {
          if (c && !je) {
            (be(e.id), he(''));
            try {
              (xe(
                e.saleId
                  ? await (0, w.getSale)(c, e.saleId)
                  : await (0, w.getPurchase)(c, e.purchaseId),
              ),
                oe(null));
            } catch (e) {
              he(
                (0, I.L)(
                  '\u0631\u0633\u06cc\u062f \u0628\u0627\u0632 \u0646\u0634\u062f: {reason}',
                  { reason: (0, L.message)(e) },
                ),
              );
            } finally {
              be('');
            }
          }
        }
        const He = { fontSize: 12, lineHeight: 18, color: $.muted },
          Me = (t) => e.products.find((e) => e.id === t.productId)?.unit,
          Be = (e) => {
            const t = Me(e),
              n = T(e) ? '\u2212' : '+';
            return (0, M.measureOf)(t)
              ? '\u2067' +
                  (0, M.measureText)(Math.abs(e.quantity), t) +
                  ' ' +
                  n +
                  '\u2069'
              : n + e.quantity.toLocaleString((0, I.numberLocale)());
          },
          Re = (e) =>
            (0, M.measureOf)(Me(e)) &&
            'sold' === e.kind &&
            !e.correctsMovementId &&
            void 0 !== e.revenueTotal &&
            null !== e.revenueTotal
              ? (0, B.money)(e.revenueTotal, { full: !0, hint: !1 })
              : '',
          Ae = (e) => (T(e) ? $.danger : $.success),
          Te = (e) => {
            if (!e.timestamp) return '';
            try {
              return new Date(e.timestamp).toLocaleTimeString(
                (0, I.dateLocale)(),
                {
                  hour: '2-digit',
                  minute: '2-digit',
                  ...(e.timeZone ? { timeZone: e.timeZone } : {}),
                },
              );
            } catch {
              return '';
            }
          },
          Pe = (e, t) => {
            if (!e) return C.fa.undatedMovement;
            const n = (0, j.relativeDay)(e, new Date(), t);
            if (n)
              return 'today' === n
                ? (0, I.L)('\u0627\u0645\u0631\u0648\u0632')
                : (0, I.L)('\u062f\u06cc\u0631\u0648\u0632');
            const [o, s, l] = e.split('-').map(Number);
            return new Date(o, s - 1, l, 12).toLocaleDateString(
              (0, I.dateLocale)(),
              { weekday: 'long', day: 'numeric', month: 'long' },
            );
          },
          Oe = (e) => {
            const t = (0, H.originBadge)({ ...e, actorName: null });
            return t
              ? (0, R.jsx)(l.default, {
                  testID: 'history-origin',
                  style: {
                    paddingHorizontal: 7,
                    borderRadius: 9,
                    backgroundColor: $.soft,
                  },
                  children: (0, R.jsx)(u.Copy, {
                    numberOfLines: 1,
                    style: [He, { fontSize: 11 }],
                    children: t,
                  }),
                })
              : null;
          };
        function Ve(e) {
          return e.correctsMovementId
            ? (0, R.jsx)(u.Copy, {
                style: [He, { fontSize: 11, color: $.danger }],
                children: C.fa.correctionEntry,
              })
            : ke.has(e.id)
              ? (0, R.jsx)(u.Copy, {
                  testID: 'history-trail',
                  style: [He, { fontSize: 11, color: $.danger }],
                  children: we(e.id),
                })
              : null;
        }
        function Fe(e, n) {
          const o = e.actorName || '',
            i = [_(e), o, Te(e)].filter(Boolean).join(' \xb7 ');
          return (0, R.jsxs)(
            s.default,
            {
              testID: 'history-movement',
              accessibilityRole: 'button',
              accessibilityLabel: `${e.name}\u060c ${_(e)} ${T(e) ? '\u2212' : '+'}${e.quantity.toLocaleString((0, I.numberLocale)())}${o ? '\u060c ' + C.fa.recordedBy.replace('{name}', o) : ''}`,
              onPress: () => oe(e),
              style: ({ pressed: e }) => ({
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 12,
                paddingVertical: 12,
                paddingHorizontal: 14,
                borderTopWidth: n ? 0 : 1,
                borderColor: $.line,
                backgroundColor: e ? $.soft : 'transparent',
              }),
              children: [
                (0, R.jsx)(l.default, {
                  style: {
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: Ae(e) + '1a',
                  },
                  children: (0, R.jsx)(h.Icon, {
                    name: P(e),
                    size: 20,
                    color: Ae(e),
                  }),
                }),
                (0, R.jsxs)(l.default, {
                  style: { flex: 1, minWidth: 0, gap: 1 },
                  children: [
                    (0, R.jsx)(u.Copy, {
                      numberOfLines: 1,
                      style: {
                        fontSize: 15,
                        lineHeight: 24,
                        fontFamily: 'Vazirmatn_600SemiBold',
                      },
                      children: e.name,
                    }),
                    (0, R.jsxs)(l.default, {
                      style: {
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        gap: 6,
                        flexWrap: 'wrap',
                      },
                      children: [
                        (0, R.jsx)(u.Copy, {
                          numberOfLines: 1,
                          style: He,
                          children: i,
                        }),
                        Oe(e),
                        Ve(e),
                      ],
                    }),
                  ],
                }),
                (0, R.jsxs)(l.default, {
                  style: { alignItems: 'flex-start', gap: 1 },
                  children: [
                    (0, R.jsx)(u.Copy, {
                      style: {
                        fontSize: 17,
                        lineHeight: 26,
                        fontFamily: 'Vazirmatn_700Bold',
                        writingDirection: 'ltr',
                        color: Ae(e),
                      },
                      children: Be(e),
                    }),
                    Re(e)
                      ? (0, R.jsx)(u.Copy, {
                          testID: 'history-weigh-money',
                          numberOfLines: 1,
                          style: [He, { fontSize: 11 }],
                          children: Re(e),
                        })
                      : void 0 !== e.stockAfter &&
                        null !== e.stockAfter &&
                        (0, R.jsx)(u.Copy, {
                          numberOfLines: 1,
                          style: [
                            He,
                            { fontSize: 11 },
                            e.stockAfter < 0 && { color: $.danger },
                          ],
                          children: (0, I.L)(
                            '\u0645\u0627\u0646\u062f\u0647 {n}',
                            { n: (0, t.stockNumber)(e.stockAfter) },
                          ),
                        }),
                  ],
                }),
              ],
            },
            e.id,
          );
        }
        const Ne = (e) =>
            (0, R.jsx)(l.default, {
              style: {
                paddingHorizontal: 8,
                borderRadius: 9,
                backgroundColor: Ae(e) + '1a',
              },
              children: (0, R.jsx)(u.Copy, {
                numberOfLines: 1,
                style: {
                  fontSize: 11,
                  lineHeight: 18,
                  color: Ae(e),
                  fontFamily: 'Vazirmatn_600SemiBold',
                },
                children: _(e),
              }),
            }),
          $e = (e) =>
            void 0 !== e.stockAfter && null !== e.stockAfter
              ? (0, I.L)('\u0645\u0627\u0646\u062f\u0647 {n}', {
                  n: (0, t.stockNumber)(e.stockAfter),
                })
              : '';
        function Ee(e) {
          const t = e.actorName || '',
            n = [t, Te(e)].filter(Boolean).join(' \xb7 ');
          return (0, R.jsxs)(
            s.default,
            {
              testID: 'history-movement',
              accessibilityRole: 'button',
              accessibilityLabel: `${e.name}\u060c ${_(e)} ${T(e) ? '\u2212' : '+'}${e.quantity.toLocaleString((0, I.numberLocale)())}${t ? '\u060c ' + C.fa.recordedBy.replace('{name}', t) : ''}`,
              onPress: () => oe(e),
              style: ({ pressed: e }) => ({
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 12,
                paddingVertical: 10,
                paddingHorizontal: 14,
                borderRadius: 16,
                borderWidth: 1,
                borderColor: $.line,
                backgroundColor: e ? $.soft : $.surface,
              }),
              children: [
                (0, R.jsx)(l.default, {
                  style: {
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: Ae(e) + '1a',
                  },
                  children: (0, R.jsx)(h.Icon, {
                    name: P(e),
                    size: 20,
                    color: Ae(e),
                  }),
                }),
                (0, R.jsxs)(l.default, {
                  style: { flex: 1, minWidth: 0, gap: 3 },
                  children: [
                    (0, R.jsx)(u.Copy, {
                      numberOfLines: 1,
                      style: {
                        fontSize: 15,
                        lineHeight: 24,
                        fontFamily: 'Vazirmatn_600SemiBold',
                      },
                      children: e.name,
                    }),
                    (0, R.jsxs)(l.default, {
                      style: {
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        gap: 6,
                      },
                      children: [
                        Ne(e),
                        (0, R.jsx)(u.Copy, {
                          numberOfLines: 1,
                          style: [He, { flexShrink: 1 }],
                          children: n,
                        }),
                        Oe(e),
                        Ve(e),
                      ],
                    }),
                  ],
                }),
                (0, R.jsxs)(l.default, {
                  style: { alignItems: 'flex-start', gap: 1 },
                  children: [
                    (0, R.jsx)(u.Copy, {
                      style: {
                        fontSize: 18,
                        lineHeight: 27,
                        fontFamily: 'Vazirmatn_700Bold',
                        writingDirection: 'ltr',
                        color: Ae(e),
                      },
                      children: Be(e),
                    }),
                    Re(e)
                      ? (0, R.jsx)(u.Copy, {
                          numberOfLines: 1,
                          style: [He, { fontSize: 11 }],
                          children: Re(e),
                        })
                      : !!$e(e) &&
                        (0, R.jsx)(u.Copy, {
                          numberOfLines: 1,
                          style: [
                            He,
                            { fontSize: 11 },
                            (e.stockAfter ?? 0) < 0 && { color: $.danger },
                          ],
                          children: $e(e),
                        }),
                  ],
                }),
              ],
            },
            e.id,
          );
        }
        const qe = (e) => {
            const t = e.filter((e) => !T(e)).length,
              n = e.length - t;
            return (0, R.jsxs)(l.default, {
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 6,
              },
              children: [
                t > 0 &&
                  (0, R.jsx)(l.default, {
                    style: {
                      paddingHorizontal: 8,
                      borderRadius: 9,
                      backgroundColor: $.success + '1a',
                    },
                    children: (0, R.jsx)(u.Copy, {
                      style: { fontSize: 11, lineHeight: 18, color: $.success },
                      children: (0, I.L)('{n} \u0648\u0631\u0648\u062f\u06cc', {
                        n: t.toLocaleString((0, I.numberLocale)()),
                      }),
                    }),
                  }),
                n > 0 &&
                  (0, R.jsx)(l.default, {
                    style: {
                      paddingHorizontal: 8,
                      borderRadius: 9,
                      backgroundColor: $.danger + '1a',
                    },
                    children: (0, R.jsx)(u.Copy, {
                      style: { fontSize: 11, lineHeight: 18, color: $.danger },
                      children: (0, I.L)('{n} \u062e\u0631\u0648\u062c\u06cc', {
                        n: n.toLocaleString((0, I.numberLocale)()),
                      }),
                    }),
                  }),
                (0, R.jsx)(u.Copy, {
                  style: He,
                  children: (0, I.L)('{n} \u062b\u0628\u062a', {
                    n: e.length.toLocaleString((0, I.numberLocale)()),
                  }),
                }),
              ],
            });
          },
          We = Se.slice(30 * (Le - 1), 30 * Le),
          Ze = (0, j.groupByDay)(We),
          Ke = F
            ? (0, R.jsxs)(R.Fragment, {
                children: [
                  (0, R.jsxs)(l.default, {
                    testID: 'history-filters',
                    style: {
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      gap: 12,
                    },
                    children: [
                      (0, R.jsxs)(l.default, {
                        style: {
                          flexGrow: 1,
                          flexShrink: 1,
                          maxWidth: 380,
                          justifyContent: 'center',
                        },
                        children: [
                          (0, R.jsx)(u.Input, {
                            testID: 'history-search',
                            value: E,
                            onChangeText: (e) => {
                              (q(e), J(1));
                            },
                            placeholder: C.fa.searchProduct,
                            style: {
                              minHeight: 40,
                              height: 40,
                              paddingVertical: 6,
                              borderRadius: 20,
                              paddingRight: 40,
                            },
                          }),
                          (0, R.jsx)(l.default, {
                            pointerEvents: 'none',
                            style: {
                              position: 'absolute',
                              right: 14,
                              top: 0,
                              bottom: 0,
                              justifyContent: 'center',
                            },
                            children: (0, R.jsx)(h.Icon, {
                              name: 'search',
                              size: 16,
                              color: $.muted,
                            }),
                          }),
                        ],
                      }),
                      (0, R.jsx)(f.Chips, {
                        label: C.fa.movementHistory,
                        value: W,
                        onChange: (e) => {
                          (Z(e), J(1));
                        },
                        items: ['all', 'received', 'sold', 'count'].map(
                          (e) => ({
                            value: e,
                            label:
                              'all' === e
                                ? C.fa.all
                                : 'received' === e
                                  ? C.fa.received
                                  : 'count' === e
                                    ? (0, I.L)('\u0634\u0645\u0627\u0631\u0634')
                                    : C.fa.sold,
                            testID: 'history-kind-' + e,
                          }),
                        ),
                      }),
                      (0, R.jsx)(l.default, { style: { flex: 1 } }),
                      (0, R.jsx)(f.Chips, {
                        numberLine: !0,
                        value: K,
                        onChange: (e) => {
                          (G(e), J(1));
                        },
                        items: [0, 7, 30].map((e) => ({
                          value: e,
                          label: e
                            ? e.toLocaleString((0, I.numberLocale)()) +
                              ' ' +
                              C.fa.days
                            : C.fa.allTime,
                          testID: 'history-days-' + e,
                        })),
                      }),
                    ],
                  }),
                  (!c || void 0 !== ie.data) &&
                    !Se.length &&
                    (0, R.jsx)(u.Card, {
                      children: (0, R.jsx)(u.Copy, {
                        style: {
                          textAlign: 'center',
                          fontSize: 13,
                          lineHeight: 20,
                          color: $.muted,
                        },
                        children: C.fa.noHistory,
                      }),
                    }),
                  (0, R.jsx)(l.default, {
                    testID: 'desktop-history-table',
                    style: { gap: 18 },
                    children: Ze.map((e) =>
                      (0, R.jsxs)(
                        l.default,
                        {
                          style: { gap: 8 },
                          children: [
                            (0, R.jsxs)(l.default, {
                              style: {
                                flexDirection: 'row-reverse',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingHorizontal: 4,
                              },
                              children: [
                                (0, R.jsx)(u.Copy, {
                                  accessibilityRole: 'header',
                                  style: {
                                    fontSize: 15,
                                    lineHeight: 24,
                                    fontFamily: 'Vazirmatn_700Bold',
                                  },
                                  children: Pe(e.key, e.rows[0]?.timeZone),
                                }),
                                qe(e.rows),
                              ],
                            }),
                            e.rows.map(Ee),
                          ],
                        },
                        e.key || 'undated',
                      ),
                    ),
                  }),
                ],
              })
            : null,
          Ge = (e, t, n) =>
            (0, R.jsxs)(l.default, {
              style: {
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
                gap: 12,
                paddingVertical: 8,
                borderTopWidth: 1,
                borderColor: $.line,
              },
              children: [
                (0, R.jsx)(u.Copy, { style: He, children: e }),
                (0, R.jsx)(u.Copy, {
                  style: {
                    fontSize: 14,
                    lineHeight: 22,
                    flexShrink: 1,
                    textAlign: 'left',
                    ...(n ? { color: n } : {}),
                  },
                  children: t,
                }),
              ],
            });
        return (0, R.jsxs)(l.default, {
          style: { gap: F ? 16 : 12 },
          children: [
            Ke ||
              (0, R.jsxs)(R.Fragment, {
                children: [
                  (0, R.jsx)(u.Input, {
                    testID: 'history-search',
                    value: E,
                    onChangeText: (e) => {
                      (q(e), J(1));
                    },
                    placeholder: C.fa.searchProduct,
                  }),
                  (0, R.jsxs)(l.default, {
                    style: { gap: 8 },
                    children: [
                      (0, R.jsx)(f.Chips, {
                        label: C.fa.movementHistory,
                        value: W,
                        onChange: (e) => {
                          (Z(e), J(1));
                        },
                        items: ['all', 'received', 'sold', 'count'].map(
                          (e) => ({
                            value: e,
                            label:
                              'all' === e
                                ? C.fa.all
                                : 'received' === e
                                  ? C.fa.received
                                  : 'count' === e
                                    ? (0, I.L)('\u0634\u0645\u0627\u0631\u0634')
                                    : C.fa.sold,
                            testID: 'history-kind-' + e,
                          }),
                        ),
                      }),
                      (0, R.jsx)(f.Chips, {
                        numberLine: !0,
                        value: K,
                        onChange: (e) => {
                          (G(e), J(1));
                        },
                        items: [0, 7, 30].map((e) => ({
                          value: e,
                          label: e
                            ? e.toLocaleString((0, I.numberLocale)()) +
                              ' ' +
                              C.fa.days
                            : C.fa.allTime,
                          testID: 'history-days-' + e,
                        })),
                      }),
                    ],
                  }),
                  (!c || void 0 !== ie.data) &&
                    !Se.length &&
                    (0, R.jsx)(u.Card, {
                      children: (0, R.jsx)(u.Copy, {
                        style: {
                          textAlign: 'center',
                          fontSize: 13,
                          lineHeight: 20,
                          color: $.muted,
                        },
                        children: C.fa.noHistory,
                      }),
                    }),
                  (0, R.jsx)(l.default, {
                    testID: 'history-list',
                    style: { gap: 14 },
                    children: Ze.map((e) =>
                      (0, R.jsxs)(
                        l.default,
                        {
                          style: { gap: 6 },
                          children: [
                            (0, R.jsxs)(l.default, {
                              style: {
                                flexDirection: 'row-reverse',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingHorizontal: 4,
                              },
                              children: [
                                (0, R.jsx)(u.Copy, {
                                  accessibilityRole: 'header',
                                  style: {
                                    fontSize: 14,
                                    lineHeight: 22,
                                    fontFamily: 'Vazirmatn_700Bold',
                                  },
                                  children: Pe(e.key, e.rows[0]?.timeZone),
                                }),
                                (0, R.jsx)(u.Copy, {
                                  style: He,
                                  children: (0, I.L)('{n} \u062b\u0628\u062a', {
                                    n: e.rows.length.toLocaleString(
                                      (0, I.numberLocale)(),
                                    ),
                                  }),
                                }),
                              ],
                            }),
                            (0, R.jsx)(u.Card, {
                              style: { padding: 0, gap: 0 },
                              children: e.rows.map((e, t) => Fe(e, 0 === t)),
                            }),
                          ],
                        },
                        e.key || 'undated',
                      ),
                    ),
                  }),
                ],
              }),
            Se.length > 30 &&
              (0, R.jsxs)(l.default, {
                style: u.common.between,
                children: [
                  (0, R.jsx)(x.SmallKey, {
                    testID: 'history-prev',
                    label: C.fa.previousPage,
                    disabled: Le <= 1,
                    onPress: () => J(Le - 1),
                  }),
                  (0, R.jsxs)(u.Copy, {
                    style: He,
                    children: [
                      Le.toLocaleString((0, I.numberLocale)()),
                      ' / ',
                      Math.ceil(Se.length / 30).toLocaleString(
                        (0, I.numberLocale)(),
                      ),
                    ],
                  }),
                  (0, R.jsx)(x.SmallKey, {
                    testID: 'history-next',
                    label: C.fa.nextPage,
                    disabled: 30 * Le >= Se.length,
                    onPress: () => J(Le + 1),
                  }),
                ],
              }),
            c &&
              me &&
              (0, R.jsx)(u.Button, {
                secondary: !0,
                onPress: () => ve(),
                children: C.fa.loadOlder,
              }),
            !!ye &&
              (0, R.jsx)(u.Copy, {
                accessibilityRole: 'alert',
                style: { color: $.danger },
                children: ye,
              }),
            (0, R.jsx)(y.Sheet, {
              visible: !!re,
              title: re?.name || '',
              onClose: () => oe(null),
              children:
                re &&
                (0, R.jsxs)(l.default, {
                  testID: 'history-detail',
                  style: { gap: 4 },
                  children: [
                    (0, R.jsxs)(l.default, {
                      style: {
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        gap: 12,
                        paddingBottom: 8,
                      },
                      children: [
                        (0, R.jsx)(l.default, {
                          style: {
                            width: 44,
                            height: 44,
                            borderRadius: 22,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: Ae(re) + '1a',
                          },
                          children: (0, R.jsx)(h.Icon, {
                            name: P(re),
                            size: 22,
                            color: Ae(re),
                          }),
                        }),
                        (0, R.jsx)(u.Copy, {
                          style: {
                            flex: 1,
                            fontSize: 16,
                            lineHeight: 24,
                            fontFamily: 'Vazirmatn_600SemiBold',
                          },
                          children: _(re),
                        }),
                        (0, R.jsx)(u.Copy, {
                          style: {
                            fontSize: 22,
                            lineHeight: 32,
                            fontFamily: 'Vazirmatn_700Bold',
                            writingDirection: 'ltr',
                            color: Ae(re),
                          },
                          children: Be(re),
                        }),
                      ],
                    }),
                    Ge(
                      C.fa.movementTime,
                      (0, d.formatMoment)(re.timestamp, re.timeZone) ||
                        C.fa.undatedMovement,
                    ),
                    !!re.recordedAt &&
                      !!re.timestamp &&
                      Math.abs(
                        Date.parse(re.recordedAt) - Date.parse(re.timestamp),
                      ) > 6e4 &&
                      Ge(
                        C.fa.recordedTime,
                        (0, d.formatMoment)(re.recordedAt, re.timeZone),
                      ),
                    !!re.actorName &&
                      Ge(
                        (0, I.L)(
                          '\u062b\u0628\u062a\u200c\u06a9\u0646\u0646\u062f\u0647',
                        ),
                        re.actorName,
                      ),
                    Ge(
                      C.fa.desktopSource,
                      ((Ue = re),
                      C.fa.movementSources[Ue.source] ||
                        C.fa.movementSources.other),
                    ),
                    'app' !== (0, H.originChannel)(re) &&
                      Ge(
                        (0, I.L)('\u0627\u0632 \u0637\u0631\u06cc\u0642'),
                        (0, H.originLabel)(re),
                      ),
                    void 0 !== re.stockAfter &&
                      null !== re.stockAfter &&
                      Ge(
                        C.fa.balanceAfter,
                        re.stockAfter.toLocaleString((0, I.numberLocale)()),
                      ),
                    re.correctsMovementId
                      ? Ge(
                          (0, I.L)('\u0648\u0636\u0639\u06cc\u062a'),
                          C.fa.correctionEntry,
                          $.danger,
                        )
                      : ke.has(re.id)
                        ? Ge(
                            (0, I.L)('\u0648\u0636\u0639\u06cc\u062a'),
                            we(re.id),
                            $.danger,
                          )
                        : null,
                    (0, R.jsx)(l.default, {
                      style: { gap: 8, paddingTop: 10 },
                      children: (function (t) {
                        if (
                          !V ||
                          t.correctsMovementId ||
                          t.returnId ||
                          ke.has(t.id)
                        )
                          return null;
                        if (c && (t.saleId || t.purchaseId))
                          return (0, R.jsx)(u.Button, {
                            secondary: !0,
                            disabled: je === t.id,
                            onPress: () => {
                              De(t);
                            },
                            children: t.saleId
                              ? (0, I.L)(
                                  '\u0631\u0633\u06cc\u062f \u0641\u0631\u0648\u0634 \u0631\u0627 \u0628\u0627\u0632 \u06a9\u0646',
                                )
                              : (0, I.L)(
                                  '\u0631\u0633\u06cc\u062f \u062e\u0631\u06cc\u062f \u0631\u0627 \u0628\u0627\u0632 \u06a9\u0646',
                                ),
                          });
                        const n = (0, v.startFromMovement)(
                          t,
                          e.products.find((e) => e.id === t.productId),
                        );
                        return n
                          ? (0, R.jsx)(u.Button, {
                              secondary: !0,
                              onPress: () => {
                                (oe(null),
                                  ne(''),
                                  X({ ...n, productId: t.productId }));
                              },
                              children: C.fa.correctEntry,
                            })
                          : null;
                      })(re),
                    }),
                  ],
                }),
            }),
            (0, R.jsxs)(p.PageModal, {
              visible: !!pe,
              animationType: 'slide',
              onRequestClose: () => {
                (xe(null), ie.reload());
              },
              children: [
                (0, R.jsx)(l.default, {
                  style: {
                    flex: 1,
                    backgroundColor: $.bg,
                    padding: 16,
                    paddingTop: Math.max(16, N.top),
                    paddingBottom: Math.max(16, N.bottom),
                    gap: 12,
                  },
                  children:
                    pe &&
                    (0, R.jsx)(z.Receipt, {
                      document: pe,
                      shopName: c?.name || '',
                      onClose: () => {
                        (xe(null), ie.reload());
                      },
                    }),
                }),
                (0, R.jsx)(D.ToastHost, {}),
              ],
            }),
            !!Q &&
              'count' === Q?.kind &&
              (0, R.jsx)(y.Sheet, {
                visible: !0,
                title: (0, I.L)(
                  '\u0627\u0635\u0644\u0627\u062d \u062b\u0628\u062a',
                ),
                onClose: () => {
                  Y || X(null);
                },
                busy: Y,
                children: (0, R.jsxs)(l.default, {
                  testID: 'count-undo',
                  style: { gap: 14 },
                  children: [
                    (0, R.jsx)(u.Copy, {
                      numberOfLines: 1,
                      style: { fontSize: 13, color: $.muted },
                      children: Q.name,
                    }),
                    (0, R.jsx)(u.Button, {
                      testID: 'count-undo-remove',
                      disabled: Y,
                      onPress: () => {
                        ze();
                      },
                      children: (0, I.L)(
                        '\u062d\u0630\u0641 (\u0627\u0635\u0644\u0627\u062d \u06a9\u0627\u0645\u0644)',
                      ),
                    }),
                    !!te &&
                      (0, R.jsx)(u.Copy, {
                        accessibilityRole: 'alert',
                        style: { color: $.danger },
                        children: te,
                      }),
                  ],
                }),
              }),
            !!Q &&
              'count' !== Q?.kind &&
              (0, R.jsx)(
                b.LineEditSheet,
                {
                  start: Q,
                  product: e.products.find((e) => e.id === Q.productId),
                  salePriceEditable:
                    !c || (0, m.canEditSalePrice)(c.role, c.access),
                  busy: Y,
                  error: te,
                  onClose: () => X(null),
                  onSave: (e) => {
                    ze(e);
                  },
                  onRemove: () => {
                    ze();
                  },
                },
                Q.movementId,
              ),
          ],
        });
        var Ue;
      }));
    var t = r(_d[0]),
      n = r(_d[1]),
      o = r(_d[2]),
      s = e(r(_d[3])),
      l = e(r(_d[4])),
      i = r(_d[5]),
      a = r(_d[6]),
      d = r(_d[7]),
      c = r(_d[8]),
      u = r(_d[9]),
      m = r(_d[10]),
      f = r(_d[11]),
      h = r(_d[12]),
      y = r(_d[13]),
      p = r(_d[14]),
      x = r(_d[15]),
      j = r(_d[16]),
      b = r(_d[17]),
      v = r(_d[18]),
      C = r(_d[19]),
      S = r(_d[20]),
      L = r(_d[21]),
      I = r(_d[22]),
      k = r(_d[23]),
      w = r(_d[24]),
      z = r(_d[25]),
      D = r(_d[26]),
      H = r(_d[27]),
      M = r(_d[28]),
      B = r(_d[29]),
      R = r(_d[30]);
    const A = (e) => e.kind,
      T = (e) =>
        'count' === e.kind
          ? (e.stockEffect ?? (e.stockAfter ?? 0) - (e.stockBefore ?? 0)) < 0
          : 'received' !== e.kind && 'sale_return' !== A(e),
      P = (e) =>
        e.correctsMovementId || e.returnId
          ? 'refresh'
          : 'count' === e.kind
            ? 'inventory'
            : 'sold' === e.kind
              ? 'cart'
              : 'used' === e.kind
                ? 'tool'
                : 'waste' === e.kind
                  ? 'close'
                  : 'production' === e.source
                    ? 'bolt'
                    : 'download',
      _ = (e) =>
        'count' === e.kind
          ? (0, c.countText)(e)
          : 'sale_return' === A(e)
            ? (0, I.L)(
                '\u0628\u0631\u06af\u0634\u062a \u0627\u0632 \u0641\u0631\u0648\u0634',
              )
            : 'purchase_return' === A(e)
              ? (0, I.L)(
                  '\u0628\u0631\u06af\u0634\u062a \u0627\u0632 \u062e\u0631\u06cc\u062f',
                )
              : 'sold' === e.kind
                ? C.fa.sold
                : 'used' === e.kind
                  ? (0, I.L)('\u0645\u0635\u0631\u0641 \u0634\u062f')
                  : 'waste' === e.kind
                    ? (0, I.L)('\u062f\u0648\u0631\u0631\u06cc\u0632')
                    : 'production' === e.source
                      ? (0, I.L)('\u062a\u0648\u0644\u06cc\u062f')
                      : C.fa.received,
      O = new Map();
  },
  851,
  [
    433, 481, 2, 232, 99, 342, 439, 440, 717, 407, 473, 840, 385, 539, 515, 517,
    852, 853, 463, 492, 382, 415, 311, 489, 519, 801, 525, 854, 459, 435, 338,
  ],
);
