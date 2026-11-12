// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 933; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.useActivityDetails = function (e, n, T) {
        const { colors: R } = (0, x.useTheme)(),
          k = (0, l.useSafeAreaInsets)(),
          [W, $] = (0, t.useState)(null),
          [q, U] = (0, t.useState)(null),
          [V, F] = (0, t.useState)(!1),
          [z, H] = (0, t.useState)(!1),
          [O, A] = (0, t.useState)(!1),
          [G, N] = (0, t.useState)(''),
          [J, K] = (0, t.useState)(null),
          Q = (0, t.useRef)(0),
          [X, Y] = (0, t.useState)(null),
          [Z, ee] = (0, t.useState)(!1),
          [te, ne] = (0, t.useState)(''),
          oe = (0, t.useRef)('');
        function re() {
          (Q.current++,
            $(null),
            U(null),
            F(!1),
            H(!1),
            N(''),
            K(null),
            A(!1),
            Y(null),
            ee(!1),
            ne(''));
        }
        async function ie(t, n = !1) {
          if (!e || (!t.saleId && !t.purchaseId)) return;
          const o = ++Q.current;
          (A(!0), N(''), K(null));
          try {
            const i = t.saleId
              ? await (0, j.getSale)(e, t.saleId)
              : await (0, j.getPurchase)(e, t.purchaseId);
            o === Q.current && (U(i), F(n));
          } catch (e) {
            if (o === Q.current) {
              U(null);
              const t = E('invoice', e);
              (K(t),
                N(
                  t
                    ? ''
                    : (0, y.L)(
                        '\u062f\u0631\u06cc\u0627\u0641\u062a \u0641\u0627\u06a9\u062a\u0648\u0631 \u0627\u0646\u062c\u0627\u0645 \u0646\u0634\u062f\u061b \u062f\u0648\u0628\u0627\u0631\u0647 \u062a\u0644\u0627\u0634 \u06a9\u0646\u06cc\u062f.',
                      ),
                ));
            }
          } finally {
            o === Q.current && A(!1);
          }
        }
        function ae() {
          q ? F(!0) : W && ie(W, !0);
        }
        async function se(t) {
          if (!T) return;
          const o = ++Q.current;
          (A(!0), N(''), K(null));
          try {
            const i =
              n.products.find((e) => e.id === t) ??
              (e
                ? (
                    await (0, I.request)(
                      (0, I.shopPath)(e, '/products/' + encodeURIComponent(t)),
                    )
                  ).product
                : void 0);
            if (o !== Q.current) return;
            if (!i) throw Error('missing');
            (re(), T(i));
          } catch (e) {
            if (o === Q.current) {
              const t = E('product', e);
              (K(t),
                N(
                  t
                    ? ''
                    : (0, y.L)(
                        '\u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0627\u0644\u0627 \u0627\u0646\u062c\u0627\u0645 \u0646\u0634\u062f\u061b \u062f\u0648\u0628\u0627\u0631\u0647 \u062a\u0644\u0627\u0634 \u06a9\u0646\u06cc\u062f.',
                      ),
                ));
            }
          } finally {
            o === Q.current && A(!1);
          }
        }
        (0, t.useEffect)(
          () => (
            re(),
            () => {
              Q.current++;
            }
          ),
          [e?.id],
        );
        const de = W ? (0, v.invoiceLines)(W, q) : [],
          ce = W ? (0, v.invoiceSummary)(W, q) : null,
          le = !(!e || (!W?.saleId && !W?.purchaseId)),
          ue = !!T && de.some((e) => !!e.productId),
          pe =
            !!e &&
            !le &&
            ((0, w.canEditHistory)(e.role, e.access) ||
              ('staff' === e.role && !!e.access?.do?.catalog)) &&
            !!W &&
            'correction' !== W.type &&
            !W.raw?.detail?.match(/^(edited|removed)$/),
          he = (e) => {
            const t = de[e];
            if (!pe || !t || !W) return null;
            const o = (0, P.startFromLine)(
              t,
              W.type,
              W.at,
              n.products.find((e) => e.id === t.productId),
            );
            return o && { ...o, productId: t.productId };
          };
        function ye(e) {
          const t = he(e);
          return !!t && ((oe.current = (0, I.randomUUID)()), ne(''), Y(t), !0);
        }
        async function me(t) {
          if (e && X && !Z) {
            (ee(!0), ne(''));
            try {
              const n = await (0, M.withOversell)(
                  (n) =>
                    (0, I.request)(
                      (0, I.shopPath)(
                        e,
                        '/movements/' +
                          encodeURIComponent(X.movementId) +
                          '/correct',
                      ),
                      'POST',
                      {
                        ...(t ? { replacement: t } : {}),
                        ...(0, M.oversellMark)(n),
                      },
                      { key: oe.current },
                    ),
                  { verb: 'save' },
                ),
                o =
                  'string' == typeof n?.cancelledPurchaseId
                    ? n.cancelledPurchaseId
                    : '';
              (o &&
                n?.replacement?.walkInPurchaseId !== o &&
                D.receiptOffer.receiptCancelled(o),
                re(),
                (0, L.showToast)(
                  t
                    ? (0, y.L)(
                        '\u062b\u0628\u062a \u0627\u0635\u0644\u0627\u062d \u0634\u062f',
                      )
                    : (0, y.L)(
                        '\u062b\u0628\u062a \u062d\u0630\u0641 \u0634\u062f',
                      ),
                ));
            } catch (e) {
              (ne((0, I.message)(e)),
                (oe.current = (0, I.randomUUID)()),
                ee(!1));
            }
          }
        }
        const fe = {
          cash: (0, y.L)('\u0646\u0642\u062f\u06cc'),
          card: (0, y.L)('\u06a9\u0627\u0631\u062a'),
          credit: (0, y.L)('\u0646\u0633\u06cc\u0647'),
          cheque: (0, y.L)('\u0686\u06a9'),
        };
        return {
          opener: function (e) {
            if (e.items || e.saleId || e.purchaseId || (e.productId && T))
              return () => {
                (re(), $(e), (e.saleId || e.purchaseId) && ie(e));
              };
          },
          panel: (0, B.jsxs)(c.PageModal, {
            visible: !!W,
            animationType: 'slide',
            onRequestClose: re,
            children: [
              (0, B.jsx)(i.default, {
                style: {
                  flex: 1,
                  backgroundColor: R.bg,
                  padding: 16,
                  paddingTop: Math.max(16, k.top),
                  paddingBottom: Math.max(16, k.bottom),
                  gap: 12,
                },
                children:
                  V && q
                    ? (0, B.jsx)(c.SwipeBack, {
                        bleed: 16,
                        onBack: () => {
                          (F(!1), U(null), W && ie(W));
                        },
                        children: (0, B.jsx)(b.Receipt, {
                          document: q,
                          shopName: e?.name || '',
                          onClose: () => {
                            (F(!1), U(null), W && ie(W));
                          },
                        }),
                      })
                    : (0, B.jsxs)(B.Fragment, {
                        children: [
                          (0, B.jsxs)(i.default, {
                            style: f.common.between,
                            children: [
                              (0, B.jsx)(f.Copy, {
                                style: [f.common.title, { flex: 1 }],
                                children: W ? (0, u.activityLine)(W) : '',
                              }),
                              (0, B.jsx)(f.Button, {
                                secondary: !0,
                                onPress: re,
                                children: (0, y.L)('\u0628\u0633\u062a\u0646'),
                              }),
                            ],
                          }),
                          (0, B.jsx)(s.ScrollView, {
                            contentContainerStyle: {
                              gap: 10,
                              paddingBottom: 16,
                            },
                            children: (0, B.jsxs)(f.Card, {
                              testID: 'activity-invoice-paper',
                              style: { gap: 16 },
                              children: [
                                de.map((e, t) =>
                                  (0, B.jsxs)(
                                    i.default,
                                    {
                                      style: {
                                        gap: 8,
                                        paddingTop: t ? 16 : 0,
                                        borderTopWidth: t
                                          ? o.default.hairlineWidth
                                          : 0,
                                        borderColor: R.line,
                                      },
                                      children: [
                                        (0, B.jsxs)(i.default, {
                                          style: f.common.between,
                                          children: [
                                            (0, B.jsx)(f.Copy, {
                                              style: {
                                                flex: 1,
                                                minWidth: 0,
                                                fontFamily: 'Vazirmatn_700Bold',
                                              },
                                              children: e.name,
                                            }),
                                            !!e.productId &&
                                              !!T &&
                                              (0, B.jsxs)(i.default, {
                                                style: {
                                                  gap: 12,
                                                  paddingVertical: 6,
                                                },
                                                children: [
                                                  (0, B.jsx)(_, {
                                                    label: (0, y.L)(
                                                      '\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0644\u0627',
                                                    ),
                                                    disabled: O,
                                                    testID: `activity-product-${t}`,
                                                    onPress: () => {
                                                      se(e.productId);
                                                    },
                                                  }),
                                                  z &&
                                                    !le &&
                                                    (0, B.jsx)(_, {
                                                      label: (0, y.L)(
                                                        '\u0648\u06cc\u0631\u0627\u06cc\u0634',
                                                      ),
                                                      disabled: O,
                                                      testID: `activity-edit-${t}`,
                                                      onPress: () => {
                                                        ye(t) ||
                                                          se(e.productId);
                                                      },
                                                    }),
                                                ],
                                              }),
                                          ],
                                        }),
                                        !!e.note &&
                                          (0, B.jsx)(f.Copy, {
                                            children: e.note,
                                          }),
                                        void 0 !== e.quantity &&
                                          (0, B.jsx)(f.Copy, {
                                            testID: `activity-line-${t}`,
                                            children: (0, v.invoiceLineText)(
                                              e,
                                              W.at,
                                            ),
                                          }),
                                      ],
                                    },
                                    `${e.activityId || e.productId || 'item'}:${t}`,
                                  ),
                                ),
                                !q &&
                                  !!W?.count &&
                                  W.count > de.length &&
                                  (0, B.jsx)(f.Copy, {
                                    children: (0, y.L)(
                                      '\u0646\u0645\u0627\u06cc\u0634 {n} \u0642\u0644\u0645 \u0627\u0648\u0644',
                                      { n: (0, p.formatGrouped)(de.length) },
                                    ),
                                  }),
                                (0, B.jsxs)(i.default, {
                                  style: {
                                    gap: 8,
                                    borderTopWidth: o.default.hairlineWidth,
                                    borderColor: R.line,
                                    paddingTop: 16,
                                  },
                                  children: [
                                    (0, B.jsx)(f.Copy, {
                                      testID: 'activity-total',
                                      style: {
                                        fontFamily: 'Vazirmatn_700Bold',
                                      },
                                      children: (0, y.L)(
                                        '\u062c\u0645\u0639 \u06a9\u0644: {amount}',
                                        {
                                          amount:
                                            void 0 === ce?.total
                                              ? '\u2014'
                                              : (0, h.money)(ce.total, {
                                                  day: W?.at,
                                                }),
                                        },
                                      ),
                                    }),
                                    !!ce?.paymentMethod &&
                                      (0, B.jsx)(f.Copy, {
                                        children: (0, y.L)(
                                          '\u0631\u0648\u0634 \u067e\u0631\u062f\u0627\u062e\u062a: {method}',
                                          { method: fe[ce.paymentMethod] },
                                        ),
                                      }),
                                    ('credit' === ce?.paymentMethod ||
                                      'cheque' === ce?.paymentMethod) &&
                                      (0, B.jsxs)(B.Fragment, {
                                        children: [
                                          !!ce.buyer &&
                                            (0, B.jsx)(f.Copy, {
                                              children: (0, y.L)(
                                                '\u062e\u0631\u06cc\u062f\u0627\u0631: {name}',
                                                { name: ce.buyer },
                                              ),
                                            }),
                                          (0, B.jsx)(f.Copy, {
                                            children: (0, y.L)(
                                              '\u067e\u0631\u062f\u0627\u062e\u062a\u200c\u0634\u062f\u0647: {amount}',
                                              {
                                                amount:
                                                  void 0 === ce.paid
                                                    ? '\u2014'
                                                    : (0, h.money)(ce.paid, {
                                                        day: W?.at,
                                                        hint: !1,
                                                      }),
                                              },
                                            ),
                                          }),
                                          (0, B.jsx)(f.Copy, {
                                            children: (0, y.L)(
                                              '\u0645\u0627\u0646\u062f\u0647: {amount}',
                                              {
                                                amount:
                                                  void 0 === ce.remaining
                                                    ? '\u2014'
                                                    : (0, h.money)(
                                                        ce.remaining,
                                                        {
                                                          day: W?.at,
                                                          hint: !1,
                                                        },
                                                      ),
                                              },
                                            ),
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          O &&
                            (0, B.jsx)(f.Copy, {
                              children: (0, y.L)(
                                '\u062f\u0631 \u062d\u0627\u0644 \u062f\u0631\u06cc\u0627\u0641\u062a\u2026',
                              ),
                            }),
                          !!G &&
                            (0, B.jsx)(f.Copy, {
                              accessibilityRole: 'alert',
                              style: { color: R.danger },
                              children: G,
                            }),
                          !!J &&
                            (0, B.jsx)(C.ErrorView, {
                              testID: 'activity-gone',
                              info: J,
                              back: re,
                            }),
                          !!W?.saleId &&
                            !!e &&
                            (0, B.jsx)(f.Button, {
                              testID: 'activity-invoice',
                              disabled: O,
                              onPress: ae,
                              children: (0, y.L)(
                                '\u0646\u0645\u0627\u06cc\u0634 \u0641\u0627\u06a9\u062a\u0648\u0631',
                              ),
                            }),
                          !!W?.raw?.detail?.match(/^(edited|removed)$/) &&
                            (0, B.jsx)(f.Copy, {
                              testID: 'activity-trail',
                              style: { color: R.danger },
                              children:
                                'removed' === W.raw.detail
                                  ? (0, y.L)(
                                      '\u0627\u06cc\u0646 \u062b\u0628\u062a \u062d\u0630\u0641 \u0634\u062f',
                                    )
                                  : (0, y.L)(
                                      '\u0627\u06cc\u0646 \u062b\u0628\u062a \u0627\u0635\u0644\u0627\u062d \u0634\u062f',
                                    ),
                            }),
                          (0, B.jsx)(f.Button, {
                            secondary: !0,
                            testID: 'activity-edit',
                            disabled:
                              O || (!le && !ue && !de.some((e, t) => !!he(t))),
                            onPress: function () {
                              le
                                ? ae()
                                : (1 === de.length && ye(0)) ||
                                  (1 === de.length && de[0].productId
                                    ? se(de[0].productId)
                                    : H((e) => !e));
                            },
                            children: (0, y.L)(
                              '\u0648\u06cc\u0631\u0627\u06cc\u0634',
                            ),
                          }),
                        ],
                      }),
              }),
              !!X &&
                (0, B.jsx)(
                  S.LineEditSheet,
                  {
                    start: X,
                    product: n.products.find((e) => e.id === X.productId),
                    salePriceEditable:
                      !e || (0, w.canEditSalePrice)(e.role, e.access),
                    busy: Z,
                    error: te,
                    onClose: () => Y(null),
                    onSave: (e) => {
                      me(e);
                    },
                    onRemove: () => {
                      me();
                    },
                  },
                  X.movementId,
                ),
              (0, B.jsx)(L.ToastHost, {}),
            ],
          }),
        };
      }));
    var t = r(d[0]),
      n = e(r(d[1])),
      o = e(r(d[2])),
      i = e(r(d[3])),
      s = r(d[4]),
      c = r(d[5]),
      l = r(d[6]),
      u = r(d[7]),
      p = r(d[8]),
      h = r(d[9]),
      y = r(d[10]),
      f = r(d[11]),
      I = r(d[12]),
      x = r(d[13]),
      j = r(d[14]),
      v = r(d[15]),
      b = r(d[16]),
      C = r(d[17]),
      L = r(d[18]),
      S = r(d[19]),
      P = r(d[20]),
      w = r(d[21]),
      D = r(d[22]),
      T = r(d[23]),
      M = r(d[24]),
      R = r(d[25]),
      B = r(d[26]);
    function E(e, t) {
      const n = (0, R.describeError)(t);
      return 'not_found' === n.category ||
        ('product' === e && t instanceof Error && 'missing' === t.message)
        ? (0, T.itemGone)(e, n)
        : null;
    }
    function _({ label: e, testID: t, disabled: i, onPress: s }) {
      const { colors: c } = (0, x.useTheme)();
      return (0, B.jsx)(n.default, {
        testID: t,
        accessibilityRole: 'button',
        accessibilityState: { disabled: i },
        disabled: i,
        hitSlop: 6,
        onPress: s,
        style: ({ pressed: e }) => ({
          minHeight: 32,
          minWidth: 32,
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 999,
          justifyContent: 'center',
          backgroundColor: c.surface,
          borderWidth: o.default.hairlineWidth,
          borderColor: c.line,
          opacity: i ? 0.4 : e ? 0.7 : 1,
        }),
        children: (0, B.jsx)(f.Copy, {
          style: { fontSize: 12, color: c.accent },
          children: e,
        }),
      });
    }
  },
  933,
  [
    2, 232, 17, 99, 380, 515, 342, 458, 434, 435, 311, 407, 415, 382, 519, 934,
    801, 599, 525, 853, 463, 473, 792, 600, 779, 429, 338,
  ],
);
