// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 932; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, _m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.ActivityRow = z),
      (_e.ActivityCard = function ({
        shop: e,
        state: i,
        onMore: s,
        onSelect: c,
        canNote: u = !1,
      }) {
        const { colors: y } = (0, j.useTheme)(),
          m = (0, t.useActivityDetails)(e, i, c),
          [h, p] = (0, o.useState)(null),
          v = (0, o.useMemo)(() => (e ? null : D(i, 6)), [e?.id, i.movements]),
          b = (0, w.useSwr)(e ? (0, w.scoped)(e.id, 'activity:6') : null, () =>
            (0, k.readActivity)(e, { limit: 6 }),
          ),
          x = e ? (b.data?.items ?? null) : v,
          I = !!b.error;
        return (0, S.jsxs)(f.Card, {
          testID: 'home-activity',
          style: { padding: 0, gap: 0, overflow: 'hidden' },
          children: [
            (0, S.jsxs)(l.default, {
              style: [
                f.common.between,
                { paddingHorizontal: 16, paddingVertical: 12 },
              ],
              children: [
                (0, S.jsx)(f.Copy, {
                  style: {
                    fontSize: 16,
                    lineHeight: 24,
                    fontFamily: 'Vazirmatn_600SemiBold',
                  },
                  children: C.notebookFa.activityTitle,
                }),
                s &&
                  (0, S.jsx)(n.default, {
                    testID: 'activity-more',
                    accessibilityRole: 'button',
                    onPress: s,
                    hitSlop: 8,
                    children: (0, S.jsx)(f.Copy, {
                      style: {
                        fontSize: 13,
                        lineHeight: 20,
                        color: y.accent,
                        fontFamily: 'Vazirmatn_600SemiBold',
                      },
                      children: C.notebookFa.activityMore,
                    }),
                  }),
              ],
            }),
            (0, S.jsxs)(l.default, {
              style: { paddingHorizontal: 16, paddingBottom: 6 },
              children: [
                x?.map((t, o) =>
                  (0, S.jsx)(
                    z,
                    {
                      item: t,
                      first: 0 === o,
                      onPress: m.opener(t),
                      onNote:
                        e && (u || t.note)
                          ? (e) => p({ item: t, edit: u && e, canWrite: u })
                          : void 0,
                      canNote: u,
                    },
                    t.id,
                  ),
                ),
                x &&
                  !x.length &&
                  (0, S.jsx)(f.Copy, {
                    style: {
                      fontSize: 13,
                      lineHeight: 20,
                      color: y.muted,
                      paddingBottom: 10,
                    },
                    children: C.notebookFa.activityEmpty,
                  }),
                !x &&
                  (0, S.jsx)(f.Copy, {
                    style: {
                      fontSize: 13,
                      lineHeight: 20,
                      color: y.muted,
                      paddingBottom: 10,
                    },
                    children: I
                      ? C.notebookFa.summaryFailed
                      : C.notebookFa.summaryLoading,
                  }),
              ],
            }),
            m.panel,
            e && (0, S.jsx)(N, { shop: e, target: h, onClose: () => p(null) }),
          ],
        });
      }),
      (_e.ActivityList = function ({
        shop: e,
        state: i,
        onClose: n,
        onSelect: s,
        canNote: c = !1,
      }) {
        const [u, m] = (0, o.useState)(null),
          { colors: v } = (0, j.useTheme)(),
          [b, x] = (0, o.useState)('all'),
          I = (0, w.scoped)(e.id, 'activity:' + b + ':40'),
          F = (0, w.useSwr)(I, () =>
            (0, k.readActivity)(e, { limit: 40, group: b }),
          ),
          [D, H] = (0, o.useState)(() => ({
            key: I,
            rows: (I && _.get(I)?.rows) || [],
            cursor: I ? (_.get(I)?.cursor ?? null) : null,
          })),
          [P, B] = (0, o.useState)(null),
          [M, A] = (0, o.useState)({ key: null, value: '' }),
          L = (0, o.useRef)(null),
          R = (0, o.useRef)(I),
          T = (0, t.useActivityDetails)(e, i, s);
        R.current = I;
        const W = I ? _.get(I) : void 0,
          V = W
            ? { key: I, ...W }
            : D.key === I
              ? D
              : { key: I, rows: [], cursor: null },
          q = F.data?.items || [],
          $ = [...q, ...V.rows.filter((e) => !q.some((t) => t.id === e.id))],
          O = V.rows.length ? V.cursor : (F.data?.nextCursor ?? null),
          E = P === I || (void 0 === F.data && !F.error),
          G = (M.key === I ? M.value : '') || F.error;
        async function K(t) {
          if (!t || !I || L.current === I || !O) return;
          const o = I;
          ((L.current = o), B(o), A({ key: o, value: '' }));
          try {
            const t = await (0, k.readActivity)(e, {
              limit: 40,
              group: b,
              before: O,
            });
            if (R.current !== o) return;
            const i = _.get(o) || {
                rows: [],
                cursor: F.data?.nextCursor ?? null,
              },
              n = {
                rows: [
                  ...i.rows,
                  ...t.items.filter(
                    (e) =>
                      !q.some((t) => t.id === e.id) &&
                      !i.rows.some((t) => t.id === e.id),
                  ),
                ],
                cursor: t.nextCursor,
              };
            (_.set(o, n), H({ key: o, ...n }));
          } catch {
            R.current === o && A({ key: o, value: C.notebookFa.summaryFailed });
          } finally {
            (L.current === o && (L.current = null), R.current === o && B(null));
          }
        }
        const Q = (0, o.useMemo)(() => {
          const e = [];
          for (const t of $) {
            const o = new Date(t.at),
              i = `${o.getFullYear()}-${o.getMonth()}-${o.getDate()}`,
              n = e[e.length - 1];
            n?.key === i
              ? n.rows.push(t)
              : e.push({ key: i, label: (0, p.dayLabelFa)(o), rows: [t] });
          }
          return e;
        }, [$]);
        return (0, S.jsxs)(l.default, {
          style: { flex: 1, gap: 12 },
          children: [
            (0, S.jsxs)(l.default, {
              style: f.common.between,
              children: [
                (0, S.jsx)(f.Copy, {
                  style: f.common.title,
                  children: C.notebookFa.activityAll,
                }),
                (0, S.jsx)(f.Button, {
                  secondary: !0,
                  testID: 'activity-back',
                  onPress: n,
                  children: C.notebookFa.back,
                }),
              ],
            }),
            (0, S.jsx)(f.Segmented, {
              scroll: !0,
              value: b,
              onChange: x,
              items: h.activityGroups.map((e) => ({
                value: e,
                label: C.notebookFa.activityGroups[e],
                testID: `activity-filter-${e}`,
              })),
            }),
            (0, S.jsxs)(y.ScrollView, {
              testID: 'activity-list',
              style: { flex: 1 },
              contentContainerStyle: { gap: 12, paddingBottom: 24 },
              scrollEventThrottle: 200,
              onScroll: ({
                nativeEvent: {
                  contentOffset: e,
                  layoutMeasurement: t,
                  contentSize: o,
                },
              }) => {
                e.y + t.height >= o.height - 240 && K(!0);
              },
              children: [
                Q.map((e) =>
                  (0, S.jsxs)(
                    l.default,
                    {
                      style: { gap: 6 },
                      children: [
                        (0, S.jsx)(f.Copy, {
                          style: {
                            fontSize: 13,
                            lineHeight: 20,
                            color: v.muted,
                            fontFamily: 'Vazirmatn_600SemiBold',
                          },
                          children: e.label,
                        }),
                        (0, S.jsx)(f.Card, {
                          style: { paddingVertical: 4, gap: 0 },
                          children: e.rows.map((e, t) =>
                            (0, S.jsx)(
                              z,
                              {
                                item: e,
                                first: 0 === t,
                                onPress: T.opener(e),
                                onNote:
                                  c || e.note
                                    ? (t) =>
                                        m({
                                          item: e,
                                          edit: c && t,
                                          canWrite: c,
                                        })
                                    : void 0,
                                canNote: c,
                              },
                              e.id,
                            ),
                          ),
                        }),
                      ],
                    },
                    e.key,
                  ),
                ),
                !E &&
                  !$.length &&
                  !G &&
                  (0, S.jsx)(f.Card, {
                    children: (0, S.jsx)(f.Copy, {
                      style: { color: v.muted },
                      children: C.notebookFa.activityEmpty,
                    }),
                  }),
                !!G &&
                  (0, S.jsx)(f.Copy, {
                    accessibilityRole: 'alert',
                    style: { color: v.danger },
                    children: G,
                  }),
                E &&
                  (0, S.jsx)(f.Copy, {
                    style: {
                      fontSize: 12,
                      lineHeight: 18,
                      color: v.muted,
                      textAlign: 'center',
                    },
                    children: C.notebookFa.summaryLoading,
                  }),
                !E &&
                  !!O &&
                  (0, S.jsx)(f.Button, {
                    secondary: !0,
                    testID: 'activity-load-more',
                    onPress: () => {
                      K(!0);
                    },
                    children: C.notebookFa.activityLoadMore,
                  }),
              ],
            }),
            T.panel,
            (0, S.jsx)(N, {
              shop: e,
              target: u,
              onClose: () => m(null),
              onSaved: () => H((e) => ({ ...e })),
            }),
          ],
        });
      }));
    var t = r(d[0]),
      o = r(d[1]),
      i = e(r(d[2])),
      n = e(r(d[3])),
      s = e(r(d[4])),
      l = e(r(d[5])),
      c = r(d[6]),
      u = r(d[7]),
      y = r(d[8]),
      m = r(d[9]),
      h = r(d[10]),
      p = r(d[11]),
      f = r(d[12]),
      v = r(d[13]),
      b = r(d[14]),
      x = r(d[15]),
      j = r(d[16]),
      k = r(d[17]),
      C = r(d[18]),
      w = r(d[19]),
      S = r(d[20]);
    const I = {
        product_created: 'add',
        product_edited: 'edit',
        product_archived: 'inventory',
        received: 'down',
        sold: 'cart',
        used: 'up',
        waste: 'close',
        count: 'inventory',
        correction: 'edit',
        sale_return: 'refresh',
        purchase_return: 'refresh',
        stock_low: 'bell',
        stock_out: 'bell',
        price_change: 'tag',
        ledger_in: 'receipt',
        ledger_out: 'receipt',
        cheque_created: 'receipt',
        cheque_cashed: 'check',
        cheque_bounced: 'close',
        cheque_due: 'bell',
        subscription_bought: 'gift',
        subscription_renewed: 'gift',
        subscription_code: 'gift',
        subscription_expired: 'lock',
        trial_ending: 'gift',
        staff_invited: 'mail',
        staff_joined: 'user',
        import: 'data',
      },
      F = new Set([
        'stock_out',
        'cheque_bounced',
        'subscription_expired',
        'waste',
      ]),
      _ = new Map();
    function D(e, t) {
      const o = e.movements
        .filter(
          (e) =>
            e.timestamp &&
            !e.parentMovementId &&
            !['json', 'excel', 'csv', 'sample'].includes(e.source || ''),
        )
        .map((t) => ({
          id: 'mv:' + t.id,
          type: t.correctsMovementId ? 'correction' : t.kind,
          at: t.timestamp,
          actorId: 'local',
          groupKey: t.batchId,
          saleId: t.saleId,
          purchaseId: t.purchaseId,
          productId: t.productId,
          name: t.name,
          quantity: t.enteredQuantity ?? t.quantity,
          unit:
            t.enteredUnit ||
            e.products.find((e) => e.id === t.productId)?.unit ||
            'piece',
          ...('count' !== t.kind || t.correctsMovementId
            ? {}
            : { detail: t.stockBefore + '>' + t.stockAfter }),
          amount:
            'sold' !== t.kind || void 0 === t.unitPrice || t.correctsMovementId
              ? null
              : (t.revenueTotal ?? t.unitPrice * t.quantity),
        }));
      return (0, h.mergeActivity)([o], { limit: t, selfId: 'local' }).items;
    }
    function z({ item: e, first: t, onPress: o, onNote: i, canNote: c = !1 }) {
      const { colors: u } = (0, j.useTheme)(),
        y =
          (0, h.activityActor)(e) ||
          (h.systemTypes.has(e.type) ? C.notebookFa.activitySystem : ''),
        m = F.has(e.type) ? u.danger : u.text;
      return (0, S.jsxs)(n.default, {
        testID: `activity-row-${e.id}`,
        accessibilityRole: o ? 'button' : void 0,
        disabled: !o,
        onPress: o,
        style: ({ pressed: e }) => [
          f.common.row,
          {
            alignItems: 'flex-start',
            paddingVertical: 10,
            borderTopWidth: t ? 0 : s.default.hairlineWidth,
            borderColor: u.line,
            opacity: e ? 0.8 : 1,
          },
        ],
        children: [
          (0, S.jsx)(l.default, {
            style: {
              width: 32,
              height: 32,
              borderRadius: 16,
              backgroundColor: u.soft,
              alignItems: 'center',
              justifyContent: 'center',
            },
            children: (0, S.jsx)(b.Icon, {
              name: I[e.type] || 'bell',
              size: 16,
              color: m,
            }),
          }),
          (0, S.jsxs)(l.default, {
            style: { flex: 1, minWidth: 0, gap: 2 },
            children: [
              (0, S.jsx)(f.Copy, {
                numberOfLines: 2,
                style: { fontSize: 14, lineHeight: 22, color: m },
                children: (0, h.activityLine)(e),
              }),
              (0, S.jsxs)(l.default, {
                style: [f.common.row, { gap: 8 }],
                children: [
                  (0, S.jsx)(f.Copy, {
                    style: { fontSize: 12, lineHeight: 18, color: u.muted },
                    children: (0, p.relativeTimeFa)(e.at),
                  }),
                  !!y &&
                    (0, S.jsx)(l.default, {
                      style: {
                        paddingHorizontal: 8,
                        borderRadius: 8,
                        backgroundColor: u.accentSoft,
                      },
                      children: (0, S.jsx)(f.Copy, {
                        numberOfLines: 1,
                        style: {
                          fontSize: 11,
                          lineHeight: 18,
                          color: u.text,
                          maxWidth: 120,
                        },
                        children: y,
                      }),
                    }),
                  !!e.note &&
                    (0, S.jsx)(n.default, {
                      testID: `activity-note-tag-${e.id}`,
                      accessibilityRole: 'button',
                      accessibilityLabel: C.notebookFa.activityNote,
                      disabled: !i,
                      onPress: () => i?.(!1),
                      hitSlop: 8,
                      style: {
                        paddingHorizontal: 8,
                        borderRadius: 8,
                        backgroundColor: u.warningSoft,
                      },
                      children: (0, S.jsx)(f.Copy, {
                        numberOfLines: 1,
                        style: {
                          fontSize: 11,
                          lineHeight: 18,
                          color: u.warning,
                        },
                        children: C.notebookFa.activityNote,
                      }),
                    }),
                ],
              }),
            ],
          }),
          !!i &&
            c &&
            (0, S.jsx)(n.default, {
              testID: `activity-more-${e.id}`,
              accessibilityRole: 'button',
              accessibilityLabel: C.notebookFa.activityNote,
              onPress: () => i(!e.note),
              style: ({ pressed: e }) => ({
                width: 44,
                height: 44,
                marginVertical: -6,
                marginLeft: -10,
                alignItems: 'center',
                justifyContent: 'center',
                opacity: e ? 0.6 : 1,
              }),
              children: (0, S.jsx)(b.Icon, {
                name: 'more',
                size: 18,
                color: u.muted,
              }),
            }),
        ],
      });
    }
    function H(e, t, o) {
      const i = (0, w.scoped)(e, 'activity:');
      if (!i) return;
      const n = (e) => {
        if (e.id !== t) return e;
        const { note: i, ...n } = e;
        return o ? { ...n, note: o } : n;
      };
      for (const o of [
        'activity:6',
        ...h.activityGroups.map((e) => 'activity:' + e + ':40'),
      ]) {
        const i = (0, w.scoped)(e, o),
          s = i ? w.swrStore.peek(i) : void 0;
        i &&
          s?.items.some((e) => e.id === t) &&
          w.swrStore.set(i, { ...s, items: s.items.map(n) });
      }
      for (const [e, o] of _)
        e.startsWith(i) &&
          o.rows.some((e) => e.id === t) &&
          _.set(e, { ...o, rows: o.rows.map(n) });
    }
    function N({ shop: e, target: t, onClose: p, onSaved: w }) {
      const { colors: I } = (0, j.useTheme)(),
        F = (0, m.useSafeAreaInsets)(),
        [_, D] = (0, o.useState)(!1),
        [z, N] = (0, o.useState)(''),
        [P, B] = (0, o.useState)(null),
        M = t?.item,
        A = (0, o.useRef)(t);
      async function L(o) {
        const i = t;
        M &&
          i &&
          (await (0, k.saveActivityNote)(e, M.id, o),
          H(e.id, M.id, o),
          w?.(),
          A.current === i && p());
      }
      return (
        (A.current = t),
        t !== P &&
          (B(t), D(!!t && (t.edit || !t.item.note)), N(t?.item.note || '')),
        (0, S.jsx)(c.Modal, {
          visible: !!M,
          transparent: !0,
          animationType: 'fade',
          onRequestClose: p,
          children: (0, S.jsx)(i.default, {
            behavior: v.keyboardBehavior,
            style: { flex: 1 },
            children: (0, S.jsxs)(l.default, {
              style: {
                flex: 1,
                backgroundColor: '#08090bbb',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 20,
                paddingTop: Math.max(20, F.top + 12),
                paddingBottom: Math.max(20, F.bottom + 12),
              },
              children: [
                (0, S.jsx)(x.Backdrop, {
                  testID: 'activity-note-backdrop',
                  label: C.notebookFa.activityNoteClose,
                  onClose: p,
                }),
                (0, S.jsx)(u.PullCard, {
                  onClose: p,
                  style: { width: '100%', maxWidth: 420 },
                  children: (0, S.jsxs)(f.Card, {
                    testID: 'activity-note',
                    style: { backgroundColor: I.bg },
                    children: [
                      (0, S.jsxs)(l.default, {
                        style: f.common.between,
                        children: [
                          (0, S.jsx)(f.Copy, {
                            style: f.common.title,
                            children: C.notebookFa.activityNote,
                          }),
                          (0, S.jsx)(n.default, {
                            testID: 'activity-note-close',
                            accessibilityRole: 'button',
                            accessibilityLabel: C.notebookFa.activityNoteClose,
                            onPress: p,
                            style: {
                              width: 36,
                              height: 36,
                              borderRadius: 10,
                              borderWidth: s.default.hairlineWidth,
                              borderColor: I.line,
                              backgroundColor: I.soft,
                              alignItems: 'center',
                              justifyContent: 'center',
                            },
                            children: (0, S.jsx)(b.Icon, {
                              name: 'close',
                              size: 18,
                              color: I.text,
                            }),
                          }),
                        ],
                      }),
                      !!M &&
                        (0, S.jsx)(f.Copy, {
                          numberOfLines: 1,
                          style: {
                            fontSize: 13,
                            lineHeight: 20,
                            color: I.muted,
                            marginTop: -6,
                          },
                          children: (0, h.activityLine)(M),
                        }),
                      _
                        ? (0, S.jsxs)(S.Fragment, {
                            children: [
                              (0, S.jsx)(f.Input, {
                                testID: 'activity-note-input',
                                value: z,
                                onChangeText: N,
                                placeholder: C.notebookFa.activityNoteHint,
                                multiline: !0,
                                maxLength: 500,
                                autoFocus: !0,
                                textAlignVertical: 'top',
                                style: {
                                  minHeight: 96,
                                  maxHeight: 160,
                                  paddingTop: 10,
                                },
                              }),
                              (0, S.jsxs)(l.default, {
                                style: {
                                  flexDirection: 'row-reverse',
                                  gap: 10,
                                },
                                children: [
                                  (0, S.jsx)(l.default, {
                                    style: f.common.flex,
                                    children: (0, S.jsx)(f.Button, {
                                      testID: 'activity-note-save',
                                      disabled: !z.trim(),
                                      onPress: () => L(z.trim()),
                                      children: C.notebookFa.activityNoteSave,
                                    }),
                                  }),
                                  (0, S.jsx)(l.default, {
                                    style: f.common.flex,
                                    children: (0, S.jsx)(f.Button, {
                                      secondary: !0,
                                      testID: 'activity-note-cancel',
                                      onPress: () => (M?.note ? D(!1) : p()),
                                      children: C.notebookFa.activityNoteCancel,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          })
                        : (0, S.jsxs)(S.Fragment, {
                            children: [
                              (0, S.jsx)(y.ScrollView, {
                                style: { maxHeight: 220 },
                                children: (0, S.jsx)(f.Copy, {
                                  selectable: !0,
                                  testID: 'activity-note-text',
                                  style: { fontSize: 15, lineHeight: 24 },
                                  children: M?.note,
                                }),
                              }),
                              !!t?.canWrite &&
                                (0, S.jsxs)(l.default, {
                                  style: {
                                    flexDirection: 'row-reverse',
                                    gap: 10,
                                  },
                                  children: [
                                    (0, S.jsx)(l.default, {
                                      style: f.common.flex,
                                      children: (0, S.jsx)(f.Button, {
                                        testID: 'activity-note-edit',
                                        onPress: () => {
                                          (N(M?.note || ''), D(!0));
                                        },
                                        children: C.notebookFa.activityNoteEdit,
                                      }),
                                    }),
                                    (0, S.jsx)(l.default, {
                                      style: f.common.flex,
                                      children: (0, S.jsx)(f.Button, {
                                        secondary: !0,
                                        testID: 'activity-note-delete',
                                        onPress: () => L(null),
                                        children:
                                          C.notebookFa.activityNoteDelete,
                                      }),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        })
      );
    }
  },
  932,
  [
    933, 2, 224, 232, 17, 99, 381, 515, 380, 342, 458, 434, 407, 480, 385, 533,
    382, 519, 580, 489, 338,
  ],
);
