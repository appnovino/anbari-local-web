// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 626; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'CHEQUE_OPEN_CAP', {
        enumerable: !0,
        get: function () {
          return R;
        },
      }),
      Object.defineProperty(_e, 'CHEQUE_HISTORY', {
        enumerable: !0,
        get: function () {
          return _;
        },
      }),
      (_e.loadAllCheques = A),
      (_e.Cheques = function ({ shop: e, onChanged: z }) {
        const { colors: H } = (0, u.useTheme)(),
          [T, O] = (0, t.useState)('all'),
          [W, B] = (0, t.useState)(''),
          [E, K] = (0, t.useState)(''),
          [M, U] = (0, t.useState)(null),
          [N, Q] = (0, t.useState)(!1),
          [$, G] = (0, S.useConfirm)(),
          Y = (0, I.useLedgerReadOnly)(),
          J = (0, v.useShopDay)(e.timezone || 'Asia/Tehran'),
          {
            data: X,
            error: Z,
            reload: ee,
          } = (0, w.useSwr)((0, w.scoped)(e.id, 'cheques'), () => A(e)),
          [te, ne] = (0, t.useState)([]),
          [oe, se] = (0, t.useState)(null);
        (0, t.useEffect)(() => {
          let t = !0;
          const n = () => {
            (0, y.pendingChequePhotos)(e).then((e) => {
              t && ne(e);
            });
          };
          n();
          const o = (0, y.onPendingChequePhotos)(n);
          return (
            (0, y.flushChequePhotos)(e)
              .then((e) => {
                t && e.sent && ee();
              })
              .catch(() => {}),
            () => {
              ((t = !1), o());
            }
          );
        }, [e.id]);
        const le = (0, t.useMemo)(
            () => new Set(te.map((e) => e.chequeId)),
            [te],
          ),
          ie = X?.list ?? [],
          ae = (0, t.useMemo)(() => new Map(X?.people ?? []), [X?.people]),
          re = void 0 !== X,
          de = E || Z;
        function ce(t, n) {
          const o = async () => {
            (U(null), B(''), K(''));
            try {
              (await (0, h.transitionCheque)(e, t.id, n), await ee(), z?.());
            } catch (e) {
              e instanceof l.ApiError &&
              409 === e.status &&
              'cheque_final' === e.message
                ? (B(L.ledgerFa.chequeFinal), await ee())
                : K((0, l.message)(e));
            }
          };
          (U(null),
            se(null),
            $({
              title: L.ledgerFa.actions[n] + '\u061f',
              text: (0, x.L)(
                '{amount}\u060c {name}. \u0628\u0639\u062f \u0627\u0632 \u062b\u0628\u062a\u060c \u0648\u0636\u0639\u06cc\u062a \u0627\u06cc\u0646 \u0686\u06a9 \u062f\u06cc\u06af\u0631 \u0639\u0648\u0636 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f.',
                { amount: je(t), name: ae.get(t.contactId) || '\u2014' },
              ),
              ok: L.ledgerFa.save,
              tone: 'cancelled' === n ? 'danger' : 'accent',
              run: () => {
                o();
              },
            }));
        }
        const ue = (0, C.filterCheques)(ie, T, J),
          he = M ? ie.find((e) => e.id === M.id) || M : null,
          me = ie.filter((e) => 'pending' === e.status),
          fe = me.filter((e) => 'late' === (0, D.chequeTag)(e, J).kind).length,
          ge = (e) => e.toLocaleString((0, x.numberLocale)()),
          ye = he ? (0, y.shownPhotos)(he.photos, he.photo, te, he.id) : {},
          pe = (e) =>
            'front' === e
              ? (0, x.L)('\u0631\u0648\u06cc \u0686\u06a9')
              : (0, x.L)('\u067e\u0634\u062a \u0686\u06a9');
        async function xe(t, n, o) {
          se(null);
          const s = await (0, y.attachChequePhotos)(e, t, { [n]: o });
          s.failed.length
            ? se({
                text: (0, x.L)(
                  '\u0639\u06a9\u0633 \u0630\u062e\u06cc\u0631\u0647 \u0646\u0634\u062f: {reason}',
                  { reason: s.failed[0] },
                ),
                bad: !0,
              })
            : s.waiting &&
                (await (0, y.pendingChequePhotos)(e)).some(
                  (e) => e.chequeId === t && e.side === n,
                )
              ? se({
                  text: (0, x.L)(
                    '\u0628\u062f\u0648\u0646 \u0627\u06cc\u0646\u062a\u0631\u0646\u062a \u0631\u0648\u06cc \u06af\u0648\u0634\u06cc \u0645\u0627\u0646\u062f\u061b \u0648\u0642\u062a\u06cc \u0648\u0635\u0644 \u0634\u0648\u06cc \u062e\u0648\u062f\u0634 \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                  ),
                  bad: !1,
                })
              : (0, p.showToast)(
                  (0, x.L)(
                    '\u0639\u06a9\u0633 {side} \u0630\u062e\u06cc\u0631\u0647 \u0634\u062f.',
                    { side: pe(n) },
                  ),
                );
        }
        async function be(t, n) {
          if ((se(null), ye[n]?.waiting))
            await (0, y.dropPendingChequePhoto)(e, t, n);
          else
            try {
              (await (0, h.deleteChequePhoto)(e, t, n),
                (0, p.showToast)(
                  (0, x.L)(
                    '\u0639\u06a9\u0633 {side} \u062d\u0630\u0641 \u0634\u062f.',
                    { side: pe(n) },
                  ),
                ));
            } catch (e) {
              throw Error((0, y.chequePhotoError)(e));
            }
        }
        const je = (e) =>
            void 0 !== e.amountToman
              ? (0, q.money)(e.amountToman, { hint: !1 })
              : '\u2014',
          Ce = (e, t) =>
            [(0, C.jalaliDay)(e.dueDate), (0, D.chequeDueNote)(t), e.bank || '']
              .filter(Boolean)
              .join(' \xb7 '),
          De = he ? (0, D.chequeTag)(he, J) : null,
          ke = (0, F.useDesktop)(),
          [Le, qe] = (0, t.useState)(null),
          [Se, we] = (0, t.useState)(() => new Set()),
          Ie = (0, P.jsxs)(P.Fragment, {
            children: [
              (0, P.jsxs)(c.Sheet, {
                visible: !!he,
                title: j.kitFa.chequeActions,
                onClose: () => {
                  (U(null), se(null));
                },
                children: [
                  he &&
                    De &&
                    (0, P.jsxs)(s.default, {
                      style: { gap: 4 },
                      children: [
                        (0, P.jsxs)(s.default, {
                          style: {
                            flexDirection: 'row-reverse',
                            alignItems: 'flex-start',
                            gap: 8,
                          },
                          children: [
                            (0, P.jsxs)(i.Copy, {
                              style: {
                                flex: 1,
                                minWidth: 0,
                                fontSize: 13,
                                lineHeight: 21,
                                color: H.muted,
                              },
                              children: [
                                void 0 !== he.amountToman
                                  ? (0, q.money)(he.amountToman)
                                  : '',
                                '\u060c ',
                                ae.get(he.contactId) || '',
                                '\u060c ',
                                (0, C.jalaliDay)(he.dueDate),
                                he.number ? '\u060c ' + he.number : '',
                              ],
                            }),
                            (0, P.jsx)(j.StatusChip, {
                              testID: 'cheque-sheet-tag',
                              label: De.label,
                              tone: De.tone,
                            }),
                          ],
                        }),
                        (0, P.jsxs)(s.default, {
                          testID: 'cheque-photo-view',
                          style: { paddingVertical: 8, gap: 6 },
                          children: [
                            (0, P.jsx)(f.ChequePhotosField, {
                              testID: 'cheque-detail-photo',
                              readOnly: Y,
                              value: ye,
                              onPick: (e, t) => xe(he.id, e, t.dataUrl),
                              onRemove: (e) => be(he.id, e),
                            }),
                            !!oe &&
                              (0, P.jsx)(i.Copy, {
                                accessibilityRole: 'alert',
                                style: {
                                  fontSize: 12.5,
                                  lineHeight: 20,
                                  color: oe.bad ? H.danger : H.muted,
                                },
                                children: oe.text,
                              }),
                          ],
                        }),
                        'pending' !== he.status || Y
                          ? 'pending' === he.status
                            ? null
                            : (0, P.jsx)(i.Copy, {
                                style: {
                                  fontSize: 13,
                                  color: H.muted,
                                  paddingVertical: 8,
                                },
                                children: j.kitFa.noActions,
                              })
                          : (0, P.jsxs)(P.Fragment, {
                              children: [
                                (0, P.jsx)(j.SheetRow, {
                                  testID: 'cheque-cashed',
                                  icon: 'check',
                                  title: L.ledgerFa.actions.cashed,
                                  onPress: () => ce(he, 'cashed'),
                                }),
                                (0, P.jsx)(j.SheetRow, {
                                  testID: 'cheque-bounced',
                                  icon: 'refresh',
                                  danger: !0,
                                  title: L.ledgerFa.actions.bounced,
                                  onPress: () => ce(he, 'bounced'),
                                }),
                                (0, P.jsx)(j.SheetRow, {
                                  testID: 'cheque-cancelled',
                                  icon: 'close',
                                  title: L.ledgerFa.actions.cancelled,
                                  onPress: () => ce(he, 'cancelled'),
                                }),
                              ],
                            }),
                      ],
                    }),
                  (0, P.jsx)(p.ToastHost, {}),
                ],
              }),
              (0, P.jsx)(b.ChequeSheet, {
                shop: e,
                visible: N,
                onClose: () => Q(!1),
                onDone: () => {
                  (Q(!1), B(j.kitFa.chequeSaved), K(''), ee(), z?.());
                },
              }),
            ],
          });
        return ke
          ? (0, P.jsx)(V, {
              items: ie,
              shown: ue,
              names: ae,
              today: J,
              filter: T,
              setFilter: O,
              readOnly: Y,
              loaded: re,
              notice: W,
              shownError: de,
              sort: Le,
              setSort: qe,
              ticked: Se,
              setTicked: we,
              data: X,
              waitingIds: le,
              onAdd: () => Q(!0),
              onOpen: U,
              onChange: ce,
              confirmDialog: G,
              sheets: Ie,
            })
          : (0, P.jsxs)(s.default, {
              style: { gap: 10 },
              children: [
                G,
                (0, P.jsxs)(s.default, {
                  style: {
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 8,
                    minHeight: 40,
                  },
                  children: [
                    (0, P.jsxs)(i.Copy, {
                      testID: 'cheques-summary',
                      numberOfLines: 2,
                      style: {
                        flex: 1,
                        minWidth: 0,
                        fontSize: 13.5,
                        lineHeight: 22,
                        color: H.muted,
                      },
                      children: [
                        re && me.length > 0
                          ? (0, x.L)('{n} \u0686\u06a9 \u0628\u0627\u0632', {
                              n: ge(me.length),
                            })
                          : '',
                        re && fe > 0
                          ? (0, P.jsx)(i.Copy, {
                              style: {
                                fontSize: 13.5,
                                lineHeight: 22,
                                color: H.danger,
                                fontFamily: 'Vazirmatn_600SemiBold',
                              },
                              children:
                                '\u060c ' +
                                (0, x.L)(
                                  '{n} \u062a\u0627 \u0633\u0631\u0631\u0633\u06cc\u062f\u0634 \u06af\u0630\u0634\u062a\u0647',
                                  { n: ge(fe) },
                                ),
                            })
                          : null,
                      ],
                    }),
                    !Y &&
                      (0, P.jsx)(j.SmallKey, {
                        testID: 'cheques-add',
                        kind: 'primary',
                        icon: 'plus',
                        label: j.kitFa.addCheque,
                        onPress: () => Q(!0),
                      }),
                  ],
                }),
                (0, P.jsx)(j.Chips, {
                  columns: 3,
                  value: T,
                  onChange: O,
                  items: [
                    ['all', j.kitFa.filterAll],
                    ['receive', j.kitFa.received],
                    ['pay', j.kitFa.paid],
                    ['soon', j.kitFa.filterSoon],
                    ['bounced', j.kitFa.filterBounced],
                    ['history', (0, x.L)('\u0633\u0627\u0628\u0642\u0647')],
                  ],
                }),
                re &&
                  X &&
                  !1 === X.complete &&
                  (0, P.jsx)(i.Copy, {
                    testID: 'cheques-partial',
                    style: { fontSize: 12, lineHeight: 20, color: H.muted },
                    children:
                      'openComplete' in X && !1 === X.openComplete
                        ? (0, x.L)(
                            '\u0628\u06cc\u0634 \u0627\u0632 {n} \u0686\u06a9 \u0628\u0627\u0632 \u062f\u0627\u0631\u06cc\u061b \u0627\u06cc\u0646\u200c\u062c\u0627 {n} \u0686\u06a9 \u0628\u0627 \u0646\u0632\u062f\u06cc\u06a9\u200c\u062a\u0631\u06cc\u0646 \u0633\u0631\u0631\u0633\u06cc\u062f \u0622\u0645\u062f\u0647 \u0627\u0633\u062a.',
                            { n: ge(R) },
                          )
                        : (0, x.L)(
                            '\u0633\u0627\u0628\u0642\u0647\u0654 \u0686\u06a9\u200c\u0647\u0627 \u0628\u0644\u0646\u062f \u0627\u0633\u062a\u061b \u0627\u0632 \u0686\u06a9\u200c\u0647\u0627\u06cc \u067e\u0627\u0633\u200c\u0634\u062f\u0647\u060c \u0628\u0631\u06af\u0634\u062a\u06cc \u0648 \u0644\u063a\u0648\u0634\u062f\u0647 \u0647\u0631 \u06a9\u062f\u0627\u0645 \u0641\u0642\u0637 {n} \u062a\u0627\u06cc \u0627\u0648\u0644 \u0622\u0645\u062f\u0647 \u0627\u0633\u062a.',
                            { n: ge(_) },
                          ),
                  }),
                !!W &&
                  (0, P.jsx)(i.Copy, {
                    accessibilityRole: 'alert',
                    style: { fontSize: 13 },
                    children: W,
                  }),
                !!de &&
                  (0, P.jsx)(i.Copy, {
                    accessibilityRole: 'alert',
                    style: { color: H.danger },
                    children: de,
                  }),
                re &&
                  !ue.length &&
                  !de &&
                  (0, P.jsx)(i.Copy, {
                    style: {
                      color: H.muted,
                      textAlign: 'center',
                      paddingVertical: 16,
                    },
                    children:
                      'history' === T
                        ? (0, x.L)(
                            '\u0647\u0646\u0648\u0632 \u0686\u06a9\u06cc \u067e\u0627\u0633 \u06cc\u0627 \u0644\u063a\u0648 \u0646\u0634\u062f\u0647\u061b \u0686\u06a9\u200c\u0647\u0627\u06cc \u062a\u0645\u0627\u0645\u200c\u0634\u062f\u0647 \u0628\u0627 \u0639\u06a9\u0633\u200c\u0647\u0627\u06cc\u0634\u0627\u0646 \u0627\u06cc\u0646\u200c\u062c\u0627 \u0645\u06cc\u200c\u0645\u0627\u0646\u0646\u062f.',
                          )
                        : L.ledgerFa.emptyCheques,
                  }),
                !!ue.length &&
                  (0, P.jsx)(s.default, {
                    style: {
                      borderRadius: 16,
                      borderWidth: o.default.hairlineWidth,
                      borderColor: H.line,
                      backgroundColor: H.surface,
                      overflow: 'hidden',
                    },
                    children: ue.map((e, t) => {
                      const l = (0, D.chequeTag)(e, J),
                        c = 'late' === l.kind,
                        u = ae.get(e.contactId) || '\u2014',
                        h =
                          void 0 !== e.amountToman
                            ? (0, q.usdHint)(e.amountToman)
                            : '',
                        f = !!(
                          e.photos?.front ||
                          e.photos?.back ||
                          e.photo ||
                          le.has(e.id)
                        );
                      return (0, P.jsx)(
                        k.Reveal,
                        {
                          index: t,
                          children: (0, P.jsxs)(s.default, {
                            style: {
                              borderTopWidth: t ? o.default.hairlineWidth : 0,
                              borderColor: H.line,
                              backgroundColor: c
                                ? H.danger + '0d'
                                : 'transparent',
                            },
                            children: [
                              (0, P.jsxs)(n.default, {
                                testID: 'cheque-row',
                                accessibilityRole: 'button',
                                accessibilityLabel: [
                                  je(e),
                                  u,
                                  (0, C.jalaliDay)(e.dueDate),
                                  l.label,
                                ].join('\u060c '),
                                onPress: () => U(e),
                                style: ({ pressed: e }) => ({
                                  paddingHorizontal: 12,
                                  paddingVertical: 10,
                                  flexDirection: 'row-reverse',
                                  alignItems: 'flex-start',
                                  gap: 10,
                                  backgroundColor: e ? H.soft : 'transparent',
                                }),
                                children: [
                                  (0, P.jsx)(s.default, {
                                    style: {
                                      width: 36,
                                      height: 36,
                                      marginTop: 2,
                                      borderRadius: 10,
                                      backgroundColor: H.soft,
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                    },
                                    children: (0, P.jsx)(d.Icon, {
                                      name:
                                        'receive' === e.direction
                                          ? 'down'
                                          : 'up',
                                      size: 17,
                                      color:
                                        'receive' === e.direction
                                          ? j.positive
                                          : H.danger,
                                    }),
                                  }),
                                  (0, P.jsxs)(s.default, {
                                    style: { flex: 1, minWidth: 0 },
                                    children: [
                                      (0, P.jsxs)(s.default, {
                                        style: {
                                          flexDirection: 'row-reverse',
                                          alignItems: 'flex-start',
                                          gap: 8,
                                        },
                                        children: [
                                          (0, P.jsxs)(s.default, {
                                            style: {
                                              flex: 1,
                                              minWidth: 0,
                                              flexDirection: 'row-reverse',
                                              flexWrap: 'wrap',
                                              alignItems: 'baseline',
                                              columnGap: 6,
                                            },
                                            children: [
                                              (0, P.jsx)(i.Copy, {
                                                testID: 'cheque-amount',
                                                style: {
                                                  fontSize: 15,
                                                  lineHeight: 24,
                                                  fontFamily:
                                                    'Vazirmatn_700Bold',
                                                },
                                                children: je(e),
                                              }),
                                              !!h &&
                                                (0, P.jsx)(i.Copy, {
                                                  style: {
                                                    fontSize: 11.5,
                                                    lineHeight: 20,
                                                    color: H.muted,
                                                  },
                                                  children: h,
                                                }),
                                            ],
                                          }),
                                          (0, P.jsx)(j.StatusChip, {
                                            testID: 'cheque-tag',
                                            label: l.label,
                                            tone: l.tone,
                                          }),
                                        ],
                                      }),
                                      (0, P.jsx)(i.Copy, {
                                        numberOfLines: 1,
                                        style: { fontSize: 13, lineHeight: 21 },
                                        children: u,
                                      }),
                                      (0, P.jsxs)(s.default, {
                                        style: {
                                          flexDirection: 'row-reverse',
                                          alignItems: 'center',
                                          gap: 6,
                                        },
                                        children: [
                                          (0, P.jsx)(i.Copy, {
                                            numberOfLines: 1,
                                            style: {
                                              flexShrink: 1,
                                              fontSize: 12,
                                              lineHeight: 19,
                                              color: c ? H.danger : H.muted,
                                            },
                                            children: Ce(e, l),
                                          }),
                                          f &&
                                            (0, P.jsx)(d.Icon, {
                                              name: 'camera',
                                              size: 14,
                                              color: H.muted,
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              l.settle &&
                                !Y &&
                                (0, P.jsxs)(s.default, {
                                  testID: 'cheque-settle',
                                  style: {
                                    marginRight: 58,
                                    marginLeft: 12,
                                    marginBottom: 12,
                                    gap: 8,
                                  },
                                  children: [
                                    (0, P.jsx)(i.Copy, {
                                      style: {
                                        fontSize: 13,
                                        lineHeight: 21,
                                        color: H.danger,
                                        fontFamily: 'Vazirmatn_600SemiBold',
                                      },
                                      children: (0, x.L)(
                                        '\u062a\u0627\u0631\u06cc\u062e \u0627\u06cc\u0646 \u0686\u06a9 \u06af\u0630\u0634\u062a\u0647\u061b \u062a\u06a9\u0644\u06cc\u0641\u0634 \u0686\u06cc \u0634\u062f\u061f',
                                      ),
                                    }),
                                    (0, P.jsxs)(s.default, {
                                      style: {
                                        flexDirection: 'row-reverse',
                                        gap: 8,
                                      },
                                      children: [
                                        (0, P.jsx)(j.SmallKey, {
                                          grow: !0,
                                          testID: 'cheque-settle-cashed',
                                          icon: 'check',
                                          label: L.ledgerFa.actions.cashed,
                                          onPress: () => ce(e, 'cashed'),
                                        }),
                                        (0, P.jsx)(j.SmallKey, {
                                          grow: !0,
                                          testID: 'cheque-settle-bounced',
                                          icon: 'refresh',
                                          label: L.ledgerFa.actions.bounced,
                                          onPress: () => ce(e, 'bounced'),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        },
                        e.id,
                      );
                    }),
                  }),
                Ie,
              ],
            });
      }));
    var t = r(_d[0]),
      n = e(r(_d[1])),
      o = e(r(_d[2])),
      s = e(r(_d[3])),
      l = r(_d[4]),
      i = r(_d[5]),
      d = r(_d[6]),
      c = r(_d[7]),
      u = r(_d[8]),
      h = r(_d[9]),
      f = r(_d[10]),
      y = r(_d[11]),
      p = r(_d[12]),
      x = r(_d[13]),
      b = r(_d[14]),
      j = r(_d[15]),
      C = r(_d[16]),
      D = r(_d[17]),
      k = r(_d[18]),
      L = r(_d[19]),
      q = r(_d[20]),
      S = r(_d[21]),
      w = r(_d[22]),
      I = r(_d[23]),
      v = r(_d[24]),
      F = r(_d[25]),
      z = r(_d[26]),
      H = r(_d[27]),
      T = r(_d[28]),
      P = r(_d[29]);
    async function O(e, t, n) {
      const o = [];
      let s;
      do {
        const n = await (0, h.listCheques)(e, void 0, s, t);
        (o.push(...n.cheques), (s = n.next?.cursor));
      } while (s && o.length < n);
      return { list: o, complete: !s };
    }
    async function W(e) {
      const t = [];
      let n;
      do {
        const o = await (0, h.listContacts)(e, { cursor: n });
        for (const e of o.contacts) t.push([e.id, e.name]);
        n = o.next?.cursor;
      } while (n && t.length < 1e3);
      return t;
    }
    const R = 5e3,
      _ = 1e3;
    async function A(e) {
      const [t, n] = await Promise.all([(0, h.listCheques)(e), W(e)]);
      if (!t.next)
        return { list: t.cheques, complete: !0, openComplete: !0, people: n };
      const [o, s, l, i, d] = await Promise.all([
          O(e, 'pending', R),
          O(e, 'cashed', _),
          O(e, 'bounced', _),
          O(e, 'cancelled', _),
          W(e),
        ]),
        c = [o, s, l, i];
      return {
        list: c.flatMap((e) => e.list),
        complete: c.every((e) => e.complete),
        openComplete: o.complete,
        people: d,
      };
    }
    function V({
      items: e,
      shown: t,
      names: l,
      today: c,
      filter: h,
      setFilter: f,
      readOnly: y,
      loaded: p,
      notice: b,
      shownError: k,
      sort: S,
      setSort: w,
      ticked: I,
      setTicked: v,
      data: F,
      waitingIds: O,
      onAdd: W,
      onOpen: A,
      onChange: V,
      confirmDialog: B,
      sheets: E,
    }) {
      const { colors: K } = (0, u.useTheme)(),
        M = (0, H.chequeTotals)(e, c),
        U = (e) => e.toLocaleString((0, x.numberLocale)()),
        N = (0, H.sortRows)(t, S, (e, t) =>
          'amount' === t
            ? e.amountToman
            : 'due' === t
              ? e.dueDate
              : l.get(e.contactId) || '',
        ),
        Q = N.map((e) => e.id),
        $ = Q.filter((e) => I.has(e)).length,
        G = (e) => {
          const t = (0, q.shortParts)(e);
          return `${t.value} ${t.unit}`;
        },
        Y = (e) => {
          if ('pending' !== e.status) return '\u2014';
          const t = (0, H.chequeDays)(e, c);
          return Number.isFinite(t)
            ? t < 0
              ? -1 === t
                ? (0, x.L)('\u062f\u06cc\u0631\u0648\u0632')
                : (0, x.L)(
                    '{n} \u0631\u0648\u0632 \u06af\u0630\u0634\u062a\u0647',
                    { n: U(-t) },
                  )
              : 0 === t
                ? (0, x.L)('\u0627\u0645\u0631\u0648\u0632')
                : 1 === t
                  ? (0, x.L)('\u0641\u0631\u062f\u0627')
                  : (0, x.L)(
                      '{n} \u0631\u0648\u0632 \u062f\u06cc\u06af\u0631',
                      { n: U(t) },
                    )
            : '\u2014';
        };
      async function J() {
        const e = $ ? N.filter((e) => I.has(e.id)) : N,
          { tableWorkbook: t } = await r(_d[31])(_d[30], _d.paths);
        await (0, T.saveWorkbook)(
          t(
            (0, x.L)('\u0686\u06a9\u200c\u0647\u0627'),
            [
              (0, x.L)('\u0646\u0648\u0639'),
              (0, x.L)('\u0637\u0631\u0641 \u062d\u0633\u0627\u0628'),
              (0, q.shopUnitText)(
                (0, x.L)(
                  '\u0645\u0628\u0644\u063a (\u062a\u0648\u0645\u0627\u0646)',
                ),
              ),
              (0, x.L)('\u0633\u0631\u0631\u0633\u06cc\u062f'),
              (0, x.L)('\u0645\u0627\u0646\u062f\u0647'),
              (0, x.L)('\u0628\u0627\u0646\u06a9'),
              (0, x.L)('\u0634\u0645\u0627\u0631\u0647'),
              (0, x.L)('\u0648\u0636\u0639\u06cc\u062a'),
            ],
            e.map((e) => [
              'receive' === e.direction ? j.kitFa.received : j.kitFa.paid,
              l.get(e.contactId) || '',
              void 0 !== e.amountToman && null !== e.amountToman
                ? (0, q.localAmount)(e.amountToman)
                : '',
              (0, C.jalaliDay)(e.dueDate),
              Y(e),
              e.bank || '',
              e.number || '',
              (0, D.chequeTag)(e, c).label,
            ]),
          ),
          'anbari-cheques.xlsx',
        );
      }
      const X = (e, t, { tone: n, sub: l, bad: d = !1, testID: c }) =>
          (0, P.jsxs)(s.default, {
            testID: c,
            style: {
              flex: 1,
              minWidth: 0,
              paddingVertical: 14,
              paddingHorizontal: 16,
              borderRadius: 18,
              gap: 2,
              backgroundColor: d ? K.danger + '0d' : K.surface,
              borderWidth: d ? 1 : o.default.hairlineWidth,
              borderColor: d ? K.danger + '66' : K.line,
            },
            children: [
              (0, P.jsx)(i.Copy, {
                numberOfLines: 1,
                style: { fontSize: 12.5, lineHeight: 20, color: K.muted },
                children: e,
              }),
              (0, P.jsxs)(s.default, {
                style: {
                  flexDirection: 'row-reverse',
                  alignItems: 'baseline',
                  gap: 6,
                },
                children: [
                  (0, P.jsx)(i.Copy, {
                    numberOfLines: 1,
                    style: {
                      fontSize: 22,
                      lineHeight: 34,
                      fontFamily: 'Vazirmatn_700Bold',
                      color: n || K.text,
                    },
                    children: t,
                  }),
                  !!l &&
                    (0, P.jsx)(i.Copy, {
                      numberOfLines: 1,
                      style: { fontSize: 12, lineHeight: 20, color: K.muted },
                      children: l,
                    }),
                ],
              }),
            ],
          }),
        Z = {
          type: { width: 92 },
          person: { flex: 1.6 },
          amount: { flex: 1.3 },
          due: { flex: 1.1 },
          days: { flex: 1 },
          bank: { flex: 0.8 },
          status: { width: 118 },
          act: { width: 200 },
        },
        ee = (e) => w((0, H.nextSort)(S, e));
      return (0, P.jsxs)(s.default, {
        testID: 'desk-cheques',
        style: { gap: 14 },
        children: [
          B,
          (0, P.jsxs)(s.default, {
            style: {
              flexDirection: 'row-reverse',
              alignItems: 'center',
              gap: 8,
            },
            children: [
              (0, P.jsx)(i.Copy, {
                testID: 'cheques-summary',
                numberOfLines: 1,
                style: {
                  flex: 1,
                  minWidth: 0,
                  fontSize: 13.5,
                  lineHeight: 22,
                  color: K.muted,
                },
                children: p
                  ? (0, x.L)(
                      '{n} \u0686\u06a9 \u062f\u0631 \u0641\u0647\u0631\u0633\u062a',
                      { n: U(N.length) },
                    )
                  : '',
              }),
              (0, P.jsx)(z.DeskKey, {
                testID: 'cheques-excel',
                icon: 'download',
                label: $
                  ? (0, x.L)('\u0627\u06a9\u0633\u0644 {n} \u0686\u06a9', {
                      n: U($),
                    })
                  : (0, x.L)(
                      '\u062e\u0631\u0648\u062c\u06cc \u0627\u06a9\u0633\u0644',
                    ),
                disabled: !N.length,
                onPress: () => {
                  J();
                },
              }),
              !y &&
                (0, P.jsx)(z.DeskKey, {
                  testID: 'cheques-add',
                  tone: 'primary',
                  icon: 'plus',
                  label: j.kitFa.addCheque,
                  onPress: W,
                }),
            ],
          }),
          (0, P.jsxs)(s.default, {
            style: { flexDirection: 'row-reverse', gap: 12 },
            children: [
              X((0, x.L)('\u0686\u06a9 \u0628\u0627\u0632'), U(M.open), {
                testID: 'cheques-total-open',
              }),
              X(
                (0, x.L)(
                  '\u0633\u0631\u0631\u0633\u06cc\u062f \u06af\u0630\u0634\u062a\u0647',
                ),
                M.late ? G(M.lateToman) : U(0),
                {
                  testID: 'cheques-total-late',
                  tone: M.late ? K.danger : void 0,
                  sub: M.late
                    ? (0, x.L)('({n} \u0686\u06a9)', { n: U(M.late) })
                    : void 0,
                  bad: M.late > 0,
                },
              ),
              X(
                (0, x.L)(
                  '\u062f\u0631\u06cc\u0627\u0641\u062a\u06cc \u062f\u0631 \u0631\u0627\u0647',
                ),
                G(M.inToman),
                {
                  testID: 'cheques-total-in',
                  tone: M.inToman ? K.success : void 0,
                },
              ),
              X(
                (0, x.L)(
                  '\u067e\u0631\u062f\u0627\u062e\u062a\u06cc \u062f\u0631 \u0631\u0627\u0647',
                ),
                G(M.outToman),
                { testID: 'cheques-total-out' },
              ),
            ],
          }),
          (0, P.jsx)(j.Chips, {
            value: h,
            onChange: (e) => {
              (f(e), v(new Set()));
            },
            items: [
              ['all', j.kitFa.filterAll],
              ['receive', j.kitFa.received],
              ['pay', j.kitFa.paid],
              ['soon', j.kitFa.filterSoon],
              ['bounced', j.kitFa.filterBounced],
              ['history', (0, x.L)('\u0633\u0627\u0628\u0642\u0647')],
            ],
          }),
          p &&
            F &&
            !1 === F.complete &&
            (0, P.jsx)(i.Copy, {
              testID: 'cheques-partial',
              style: { fontSize: 12, lineHeight: 20, color: K.muted },
              children:
                !1 === F.openComplete
                  ? (0, x.L)(
                      '\u0628\u06cc\u0634 \u0627\u0632 {n} \u0686\u06a9 \u0628\u0627\u0632 \u062f\u0627\u0631\u06cc\u061b \u0627\u06cc\u0646\u200c\u062c\u0627 {n} \u0686\u06a9 \u0628\u0627 \u0646\u0632\u062f\u06cc\u06a9\u200c\u062a\u0631\u06cc\u0646 \u0633\u0631\u0631\u0633\u06cc\u062f \u0622\u0645\u062f\u0647 \u0627\u0633\u062a.',
                      { n: U(R) },
                    )
                  : (0, x.L)(
                      '\u0633\u0627\u0628\u0642\u0647\u0654 \u0686\u06a9\u200c\u0647\u0627 \u0628\u0644\u0646\u062f \u0627\u0633\u062a\u061b \u0627\u0632 \u0686\u06a9\u200c\u0647\u0627\u06cc \u067e\u0627\u0633\u200c\u0634\u062f\u0647\u060c \u0628\u0631\u06af\u0634\u062a\u06cc \u0648 \u0644\u063a\u0648\u0634\u062f\u0647 \u0647\u0631 \u06a9\u062f\u0627\u0645 \u0641\u0642\u0637 {n} \u062a\u0627\u06cc \u0627\u0648\u0644 \u0622\u0645\u062f\u0647 \u0627\u0633\u062a.',
                      { n: U(_) },
                    ),
            }),
          !!b &&
            (0, P.jsx)(i.Copy, {
              accessibilityRole: 'alert',
              style: { fontSize: 13 },
              children: b,
            }),
          !!k &&
            (0, P.jsx)(i.Copy, {
              accessibilityRole: 'alert',
              style: { color: K.danger },
              children: k,
            }),
          p &&
            !N.length &&
            !k &&
            (0, P.jsx)(i.Copy, {
              style: {
                color: K.muted,
                textAlign: 'center',
                paddingVertical: 16,
              },
              children:
                'history' === h
                  ? (0, x.L)(
                      '\u0647\u0646\u0648\u0632 \u0686\u06a9\u06cc \u067e\u0627\u0633 \u06cc\u0627 \u0644\u063a\u0648 \u0646\u0634\u062f\u0647\u061b \u0686\u06a9\u200c\u0647\u0627\u06cc \u062a\u0645\u0627\u0645\u200c\u0634\u062f\u0647 \u0628\u0627 \u0639\u06a9\u0633\u200c\u0647\u0627\u06cc\u0634\u0627\u0646 \u0627\u06cc\u0646\u200c\u062c\u0627 \u0645\u06cc\u200c\u0645\u0627\u0646\u0646\u062f.',
                    )
                  : L.ledgerFa.emptyCheques,
            }),
          !!N.length &&
            (0, P.jsxs)(s.default, {
              testID: 'desk-cheques-table',
              style: {
                borderRadius: 20,
                borderWidth: o.default.hairlineWidth,
                borderColor: K.line,
                backgroundColor: K.surface,
                overflow: 'hidden',
              },
              children: [
                (0, P.jsxs)(z.DeskHeadRow, {
                  children: [
                    (0, P.jsx)(z.DeskTick, {
                      testID: 'cheques-tick-all',
                      label: (0, x.L)(
                        '\u0627\u0646\u062a\u062e\u0627\u0628 \u0647\u0645\u0647',
                      ),
                      on: $ > 0 && $ === Q.length,
                      mixed: $ > 0 && $ < Q.length,
                      onPress: () => v((0, H.toggleAll)(I, Q)),
                    }),
                    (0, P.jsx)(z.DeskHead, {
                      label: (0, x.L)('\u0646\u0648\u0639'),
                      style: Z.type,
                    }),
                    (0, P.jsx)(z.DeskHead, {
                      label: (0, x.L)(
                        '\u0637\u0631\u0641 \u062d\u0633\u0627\u0628',
                      ),
                      sortKey: 'person',
                      sort: S,
                      onSort: ee,
                      style: Z.person,
                    }),
                    (0, P.jsx)(z.DeskHead, {
                      label: (0, x.L)('\u0645\u0628\u0644\u063a'),
                      sortKey: 'amount',
                      sort: S,
                      onSort: ee,
                      style: Z.amount,
                    }),
                    (0, P.jsx)(z.DeskHead, {
                      label: (0, x.L)('\u0633\u0631\u0631\u0633\u06cc\u062f'),
                      sortKey: 'due',
                      sort: S,
                      onSort: ee,
                      style: Z.due,
                    }),
                    (0, P.jsx)(z.DeskHead, {
                      label: (0, x.L)('\u0645\u0627\u0646\u062f\u0647'),
                      style: Z.days,
                    }),
                    (0, P.jsx)(z.DeskHead, {
                      label: (0, x.L)('\u0628\u0627\u0646\u06a9'),
                      style: Z.bank,
                    }),
                    (0, P.jsx)(z.DeskHead, {
                      label: (0, x.L)('\u0648\u0636\u0639\u06cc\u062a'),
                      style: Z.status,
                    }),
                    (0, P.jsx)(s.default, { style: Z.act }),
                  ],
                }),
                N.map((e, t) => {
                  const u = (0, D.chequeTag)(e, c),
                    h = 'late' === u.kind,
                    f = l.get(e.contactId) || '\u2014',
                    p = I.has(e.id),
                    b = !!(
                      e.photos?.front ||
                      e.photos?.back ||
                      e.photo ||
                      O.has(e.id)
                    );
                  return (0, P.jsxs)(
                    n.default,
                    {
                      testID: 'cheque-row',
                      accessibilityRole: 'button',
                      accessibilityLabel: [
                        void 0 !== e.amountToman
                          ? (0, q.money)(e.amountToman, { hint: !1 })
                          : '\u2014',
                        f,
                        (0, C.jalaliDay)(e.dueDate),
                        u.label,
                      ].join('\u060c '),
                      onPress: () => A(e),
                      style: ({ pressed: e, hovered: n }) => ({
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        gap: 12,
                        paddingHorizontal: 16,
                        minHeight: 52,
                        borderTopWidth: t ? o.default.hairlineWidth : 0,
                        borderColor: K.line,
                        backgroundColor: p
                          ? K.accentSoft
                          : h
                            ? n || e
                              ? K.danger + '1a'
                              : K.danger + '0f'
                            : e || n
                              ? K.soft
                              : 'transparent',
                      }),
                      children: [
                        (0, P.jsx)(z.DeskTick, {
                          label: f,
                          on: p,
                          onPress: () => v((0, H.toggleTick)(I, e.id)),
                        }),
                        (0, P.jsxs)(s.default, {
                          style: [
                            Z.type,
                            {
                              flexDirection: 'row-reverse',
                              alignItems: 'center',
                              gap: 5,
                            },
                          ],
                          children: [
                            (0, P.jsx)(d.Icon, {
                              name: 'receive' === e.direction ? 'down' : 'up',
                              size: 14,
                              color:
                                'receive' === e.direction
                                  ? j.positive
                                  : K.danger,
                            }),
                            (0, P.jsx)(i.Copy, {
                              numberOfLines: 1,
                              style: {
                                fontSize: 12.5,
                                lineHeight: 20,
                                color: K.muted,
                              },
                              children:
                                'receive' === e.direction
                                  ? j.kitFa.received
                                  : j.kitFa.paid,
                            }),
                          ],
                        }),
                        (0, P.jsxs)(s.default, {
                          style: [
                            Z.person,
                            {
                              flexDirection: 'row-reverse',
                              alignItems: 'center',
                              gap: 5,
                              minWidth: 0,
                            },
                          ],
                          children: [
                            (0, P.jsx)(i.Copy, {
                              numberOfLines: 1,
                              style: {
                                flexShrink: 1,
                                fontSize: 14,
                                lineHeight: 22,
                                fontFamily: 'Vazirmatn_600SemiBold',
                              },
                              children: f,
                            }),
                            b &&
                              (0, P.jsx)(d.Icon, {
                                name: 'camera',
                                size: 13,
                                color: K.muted,
                              }),
                          ],
                        }),
                        (0, P.jsx)(i.Copy, {
                          testID: 'cheque-amount',
                          numberOfLines: 1,
                          style: [
                            Z.amount,
                            {
                              minWidth: 0,
                              fontSize: 14,
                              lineHeight: 22,
                              fontFamily: 'Vazirmatn_700Bold',
                            },
                          ],
                          children:
                            void 0 !== e.amountToman
                              ? (0, q.money)(e.amountToman, { hint: !1 })
                              : '\u2014',
                        }),
                        (0, P.jsx)(i.Copy, {
                          numberOfLines: 1,
                          style: [
                            Z.due,
                            {
                              minWidth: 0,
                              fontSize: 13,
                              lineHeight: 21,
                              color: h ? K.danger : K.text,
                            },
                          ],
                          children: (0, C.jalaliDay)(e.dueDate),
                        }),
                        (0, P.jsx)(i.Copy, {
                          numberOfLines: 1,
                          style: [
                            Z.days,
                            {
                              minWidth: 0,
                              fontSize: 12.5,
                              lineHeight: 20,
                              color: h ? K.danger : K.muted,
                              fontFamily: h
                                ? 'Vazirmatn_600SemiBold'
                                : 'Vazirmatn_400Regular',
                            },
                          ],
                          children: Y(e),
                        }),
                        (0, P.jsx)(i.Copy, {
                          numberOfLines: 1,
                          style: [
                            Z.bank,
                            {
                              minWidth: 0,
                              fontSize: 12.5,
                              lineHeight: 20,
                              color: K.muted,
                            },
                          ],
                          children: e.bank || '\u2014',
                        }),
                        (0, P.jsx)(s.default, {
                          style: [Z.status, { alignItems: 'flex-end' }],
                          children: (0, P.jsx)(j.StatusChip, {
                            testID: 'cheque-tag',
                            label: u.label,
                            tone: u.tone,
                          }),
                        }),
                        (0, P.jsx)(s.default, {
                          style: [
                            Z.act,
                            {
                              flexDirection: 'row',
                              alignItems: 'center',
                              gap: 6,
                            },
                          ],
                          children:
                            h && !y
                              ? (0, P.jsxs)(P.Fragment, {
                                  children: [
                                    (0, P.jsx)(z.DeskKey, {
                                      testID: 'cheque-settle-bounced',
                                      tone: 'surface',
                                      label: (0, x.L)(
                                        '\u0628\u0631\u06af\u0634\u062a \u062e\u0648\u0631\u062f',
                                      ),
                                      onPress: () => V(e, 'bounced'),
                                    }),
                                    (0, P.jsx)(z.DeskKey, {
                                      testID: 'cheque-settle-cashed',
                                      tone: 'surface',
                                      icon: 'check',
                                      label: L.ledgerFa.actions.cashed,
                                      onPress: () => V(e, 'cashed'),
                                    }),
                                  ],
                                })
                              : (0, P.jsx)(z.DeskKey, {
                                  testID: 'cheque-more',
                                  tone: 'surface',
                                  icon: 'more',
                                  label: (0, x.L)(
                                    '\u0628\u06cc\u0634\u062a\u0631',
                                  ),
                                  onPress: () => A(e),
                                }),
                        }),
                      ],
                    },
                    e.id,
                  );
                }),
              ],
            }),
          !!N.length &&
            (0, P.jsx)(i.Copy, {
              style: { fontSize: 11.5, lineHeight: 18, color: K.muted },
              children: (0, x.L)(
                '\u0633\u062a\u0648\u0646\u200c\u0647\u0627\u06cc \u0637\u0631\u0641 \u062d\u0633\u0627\u0628\u060c \u0645\u0628\u0644\u063a \u0648 \u0633\u0631\u0631\u0633\u06cc\u062f \u0628\u0627 \u06a9\u0644\u06cc\u06a9 \u0645\u0631\u062a\u0628 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f. \u0631\u0648\u06cc \u0647\u0631 \u0631\u062f\u06cc\u0641 \u0628\u0632\u0646\u06cc\u062f \u062a\u0627 \u0639\u06a9\u0633\u200c\u0647\u0627 \u0648 \u0648\u0636\u0639\u06cc\u062a \u0686\u06a9 \u0628\u0627\u0632 \u0634\u0648\u062f.',
              ),
            }),
          E,
        ],
      });
    }
  },
  626,
  {
    0: 2,
    1: 232,
    2: 17,
    3: 99,
    4: 415,
    5: 407,
    6: 385,
    7: 539,
    8: 382,
    9: 519,
    10: 627,
    11: 654,
    12: 525,
    13: 311,
    14: 656,
    15: 517,
    16: 529,
    17: 530,
    18: 657,
    19: 580,
    20: 435,
    21: 534,
    22: 489,
    23: 518,
    24: 611,
    25: 481,
    26: 659,
    27: 660,
    28: 661,
    29: 338,
    30: 994,
    31: 336,
    paths: {
      994: '/_expo/static/js/web/spreadsheet-d6de51a3fee212c7ad69ef045df3d39a.js',
    },
  },
);
