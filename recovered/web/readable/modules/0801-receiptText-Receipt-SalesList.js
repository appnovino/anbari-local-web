// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 801; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'receiptText', {
        enumerable: !0,
        get: function () {
          return I.receiptText;
        },
      }),
      (_e.Receipt = function ({
        document: e,
        shopName: t,
        sendReady: p = !1,
        onClose: A,
      }) {
        const { colors: M } = (0, x.useTheme)(),
          J = b.activeShop,
          Z = J ? (0, O.scoped)(J.id, 'notebook-shop') : null,
          [G, Q] = (0, s.useState)(null),
          [X, Y] = (0, s.useState)(!1),
          [ee, te] = (0, s.useState)(''),
          [ne, oe] = (0, s.useState)(!1),
          [ie, se] = (0, s.useState)(!1),
          [ae, re] = (0, s.useState)(null),
          [le, ce] = (0, s.useState)(null),
          de = le?.from === e ? le.value : e,
          [ue, pe] = (0, s.useState)(!1),
          ye = (0, s.useRef)(null),
          he =
            !!J &&
            ('owner' === J.role ||
              'manager' === J.role ||
              ('staff' === J.role && !0 === J.access?.full)),
          [fe, me] = (0, s.useState)(de.corrected ? 'done' : 'idle'),
          [ge] = (0, s.useState)(() => (0, b.randomUUID)()),
          xe =
            !!de.corrected || 'busy' === fe || 'retry' === fe || 'done' === fe;
        async function be() {
          if (J && de.id) {
            (me('busy'), te(''));
            try {
              (await (0, T.cancelDocument)(J, de, ge), me('done'));
            } catch (e) {
              const t =
                e instanceof b.ApiError &&
                e.status >= 400 &&
                e.status < 500 &&
                ![408, 429].includes(e.status) &&
                'idempotency_conflict' !== e.message;
              (me(t ? 'confirm' : 'retry'), te((0, b.message)(e)));
            }
          }
        }
        async function ve() {
          if (J && de.id)
            try {
              const t =
                'sale' === de.type
                  ? await (0, T.getSale)(J, de.id)
                  : await (0, T.getPurchase)(J, de.id);
              ce({ from: e, value: t });
            } catch (e) {
              te((0, b.message)(e));
            }
        }
        (0, s.useEffect)(() => {
          if (!J || 'sale' !== e.type || 0 !== e.receiptNo) return;
          const t = e.lines
            .map((e) => e.movementId)
            .filter((e) =>
              /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
                e || '',
              ),
            );
          if (!t.length) return;
          let n = !0;
          return (
            (0, T.issueWalkInSale)(
              J,
              t,
              'card' === e.paymentMethod ? 'card' : void 0,
            ).then(
              (t) => {
                n && ce({ from: e, value: t });
              },
              () => {},
            ),
            () => {
              n = !1;
            }
          );
        }, [e, J?.id]);
        const { data: Se, reload: je } = (0, O.useSwr)(Z, () =>
            (0, T.readNotebookShop)(J),
          ),
          {
            data: Ie,
            error: Ce,
            reload: we,
          } = (0, O.useSwr)(
            J && de.contactId
              ? (0, O.scoped)(J.id, 'contact:' + de.contactId)
              : null,
            () => (0, T.readContact)(J, de.contactId),
          ),
          Le = !!de.contactId && !!J && !Ie,
          ke = Se?.settings?.receiptExtras || [],
          De = G?.key === Z ? G.value : ke,
          Pe = 'purchase' === de.type ? U : De;
        (0, s.useEffect)(() => {
          G?.key === Z &&
            Se &&
            JSON.stringify(ke) === JSON.stringify(G.value) &&
            Q(null);
        }, [Se, Z, G, ke]);
        const ze = ae?.key === Z ? ae.value : Se?.settings?.invoice;
        (0, s.useEffect)(() => {
          ae?.key === Z &&
            Se &&
            JSON.stringify(Se.settings?.invoice) === JSON.stringify(ae.value) &&
            re(null);
        }, [Se, Z, ae]);
        const [Re, Ne] = (0, s.useState)({}),
          [Be, We] = (0, s.useState)('');
        (0, s.useEffect)(() => {
          if (!J) return;
          let e = !0;
          return (
            $(J.id).then((t) => {
              e && Ne({ ...t, shopId: J.id });
            }),
            () => {
              e = !1;
            }
          );
        }, [J?.id]);
        const Fe =
            (Re.shopId === J?.id && Re.layout) || (0, i.invoiceLayoutOf)(ze),
          He =
            (Re.shopId === J?.id && Re.layout === Fe && Re.paper) ||
            (0, i.invoicePaperFor)(Fe);
        function Te(e) {
          const t = {
            layout: Fe,
            ...(Re.layout === Fe && Re.paper ? { paper: Re.paper } : {}),
            ...e,
          };
          (e.layout && !e.paper && delete t.paper,
            Ne({ ...t, shopId: J?.id }),
            We(''),
            J && K(J.id, t));
        }
        const Ee = Ie?.contact,
          Oe = (0, s.useMemo)(
            () =>
              (0, I.invoiceModel)(
                de,
                t,
                Pe,
                Ee?.name,
                ze,
                b.activeShop?.timezone,
                {
                  layout: Fe,
                  contact: Ee
                    ? {
                        phone: Ee.phone,
                        address: Ee.address,
                        economicId: Ee.economicId,
                      }
                    : void 0,
                  balance: Ie?.totals.balanceToman,
                },
              ),
            [de, t, Pe, Ee, Ie, ze, b.activeShop?.timezone, Fe],
          ),
          [Ae, Ve] = (0, s.useState)(null),
          [Me, Ue] = (0, s.useState)(null),
          [Je, $e] = (0, s.useState)(!1),
          Ke = Ae?.from === de ? Ae.value : de.invoiceHeader,
          qe = {
            design: ze,
            contact: Ee
              ? {
                  name: Ee.name,
                  phone: Ee.phone,
                  address: Ee.address,
                  economicId: Ee.economicId,
                }
              : void 0,
            supplierName: de.supplierName,
            header: Ke,
          },
          Ze = (0, s.useMemo)(
            () => (0, R.applyInvoiceHeader)(Oe, qe),
            [Oe, Ke, ze, Ee],
          ),
          Ge = (0, I.invoiceText)(Ze),
          Qe = Ze.labels,
          Xe = (0, o.invoiceDesignLabels)(),
          Ye =
            de.receiptNo > 0 ||
            (0, k.canPrice)(J) ||
            de.lines.some((e) => void 0 !== e.unitPrice),
          et =
            'purchase' !== de.type || xe
              ? []
              : de.lines.filter((e) => !e.corrected && e.unpriced),
          tt =
            'purchase' === de.type
              ? et
              : xe || !Ye
                ? []
                : (0, I.unpricedLines)(de),
          nt =
            ('purchase' === de.type
              ? (0, k.canPriceCost)(J)
              : (0, k.canPrice)(J)) && tt.some((e) => !!e.productId),
          ot =
            'receipt-' +
            (de.receiptNo || Date.parse(de.occurredAt) || 'sale') +
            '.png';
        const it = () => {
          J &&
            'sale' === de.type &&
            de.id &&
            de.receiptNo > 0 &&
            (0, T.markSaleIssued)(J, de.id);
        };
        async function st() {
          return (
            (0, f.savePngDataUrl)(await (0, j.drawReceipt)(Ze, M), ot),
            void it()
          );
        }
        async function at() {
          return (
            await (0, f.sharePngDataUrl)(
              await (0, j.drawReceipt)(Ze, M),
              ot,
              Ge,
            ),
            void it()
          );
        }
        const rt = () => at();
        async function lt() {
          ((await (0, w.printInvoice)(Ze, He, (0, _.localeLang)())) ||
            (await (0, f.shareText)(Ge, Ze.title)),
            it());
        }
        const ct = !!Se && !Le && !xe && Re.shopId === J?.id;
        async function dt(t, n) {
          if (J)
            if ('purchase' === de.type && de.id)
              try {
                ce({ from: e, value: await (0, T.getPurchase)(J, de.id) });
              } catch (e) {
                te((0, b.message)(e));
              }
            else if ('sale' === de.type && de.id && de.receiptNo > 0)
              try {
                const t = await (0, T.fillSalePrices)(J, de.id);
                (ce({ from: e, value: t.sale }),
                  !t.filled &&
                    de.contactId &&
                    te(
                      (0, _.L)(
                        '\u0642\u06cc\u0645\u062a \u06a9\u0627\u0644\u0627 \u062b\u0628\u062a \u0634\u062f. \u0627\u06cc\u0646 \u0641\u0627\u06a9\u062a\u0648\u0631 \u0631\u0648\u06cc \u062d\u0633\u0627\u0628 \u0634\u062e\u0635 \u062b\u0628\u062a \u0634\u062f\u0647 \u0648 \u0645\u0628\u0644\u063a\u0634 \u0647\u0645\u0627\u0646 \u0645\u0628\u0644\u063a \u0631\u0648\u0632 \u0641\u0631\u0648\u0634 \u0645\u06cc\u200c\u0645\u0627\u0646\u062f.',
                      ),
                    ));
              } catch (e) {
                te((0, b.message)(e));
              }
            else
              ce({
                from: e,
                value: {
                  ...de,
                  lines: de.lines.map((e) =>
                    e.productId === t && void 0 === e.unitPrice
                      ? {
                          ...e,
                          unitPrice: n,
                          saleTotal: Math.round(n * e.quantity),
                        }
                      : e,
                  ),
                },
              });
        }
        (0, s.useEffect)(() => {
          ct && L.printIntent.take(de.id) && lt().catch(() => {});
        }, [ct, de.id]);
        const ut =
          'formal' === Fe &&
          !xe &&
          !Le &&
          (0, R.canEditInvoiceHead)(J, de.type);
        async function pt(t) {
          if ((Ve({ from: de, value: t }), J && de.id && de.receiptNo))
            try {
              const n = await (0, N.saveInvoiceHeader)(J, de, t);
              ce({ from: e, value: n });
            } catch (e) {
              throw (Ve(null), Error((0, b.message)(e)));
            }
        }
        async function yt(e, { values: t, asDefault: n, toContact: o }) {
          if (!J) return;
          let i = (0, R.partyDefaults)(Oe, e, qe);
          const s = {
            phone: (0, y.latinDigits)(t.phone).trim(),
            address: t.address.trim(),
            economicId: (0, y.latinDigits)(t.economicId).trim(),
            nationalId: (0, y.latinDigits)(t.nationalId).trim(),
            postalCode: (0, y.latinDigits)(t.postalCode).trim(),
            registrationNo: (0, y.latinDigits)(t.registrationNo).trim(),
          };
          if (n) {
            const e = { ...(ze || { theme: 'classic' }) };
            for (const t of [
              'phone',
              'address',
              'economicId',
              'nationalId',
              'postalCode',
              'registrationNo',
            ])
              s[t] ? (e[t] = s[t]) : delete e[t];
            (await (0, T.patchNotebookSettings)(J, { invoice: e }),
              Z && re({ key: Z, value: e }),
              je(),
              (i = { ...i, ...s }));
          }
          if (o && Ee && de.contactId) {
            const e = {
              ...(s.phone && s.phone !== (Ee.phone || '')
                ? { phone: s.phone }
                : {}),
              ...(s.address !== (Ee.address || '')
                ? { address: s.address }
                : {}),
              ...(s.economicId !== (Ee.economicId || '')
                ? { economicId: s.economicId }
                : {}),
            };
            (Object.keys(e).length &&
              (await (0, F.patchContact)(J, de.contactId, {
                version: Ee.version,
                ...e,
              }),
              we()),
              (i = {
                ...i,
                phone: s.phone || i.phone,
                address: s.address,
                economicId: s.economicId,
              }));
          }
          await pt((0, R.withParty)(Ke, e, t, i));
        }
        const ht =
            'signSeller' === Me
              ? 'seller'
              : 'signBuyer' === Me
                ? 'buyer'
                : null,
          ft = (0, R.isInvoiceLead)(J)
            ? []
            : [Ze.head?.shopSide || 'seller', 'employee'],
          mt = ne || Le || xe;
        async function gt(e) {
          if (!mt) {
            (oe(!0), te(''));
            try {
              await e();
            } catch (e) {
              te((0, b.message)(e));
            } finally {
              oe(!1);
            }
          }
        }
        const xt = (e, t, n, o, i = !1) =>
            (0, V.jsx)(r.default, {
              testID: e,
              accessibilityRole: 'button',
              accessibilityLabel: t,
              accessibilityState: { disabled: mt, busy: ne },
              disabled: mt,
              onPress: () => {
                gt(o);
              },
              style: ({ pressed: e }) => ({
                height: 42,
                borderRadius: 13,
                paddingHorizontal: i ? 20 : 14,
                overflow: 'hidden',
                borderWidth: i ? 0 : l.default.hairlineWidth,
                borderColor: M.line,
                backgroundColor: i ? M.brand[1] : M.soft,
                flexDirection: 'row-reverse',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 7,
                opacity: mt ? 0.5 : 1,
                transform: [{ scale: e && !mt ? 0.98 : 1 }],
              }),
              children: ({ pressed: e }) =>
                (0, V.jsxs)(V.Fragment, {
                  children: [
                    i && (0, V.jsx)(S.BrandFill, { radius: 13, pressed: e }),
                    (0, V.jsx)(c.default, {
                      children: (0, V.jsx)(v.Icon, {
                        name: n,
                        size: 18,
                        color: i ? M.onBrand : M.text,
                      }),
                    }),
                    (0, V.jsx)(h.Copy, {
                      numberOfLines: 1,
                      style: {
                        fontSize: 13.5,
                        lineHeight: 21,
                        fontFamily: 'Vazirmatn_600SemiBold',
                        color: i ? M.onBrand : M.text,
                      },
                      children: t,
                    }),
                  ],
                }),
            }),
          bt =
            tt.length > 0 &&
            (0, V.jsxs)(c.default, {
              testID: 'receipt-unpriced',
              accessibilityRole: 'alert',
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 8,
                padding: 10,
                paddingRight: 12,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: M.warningBorder,
                backgroundColor: M.warningSoft,
              },
              children: [
                (0, V.jsx)(v.Icon, {
                  name: 'alert',
                  size: 16,
                  color: M.warning,
                }),
                (0, V.jsx)(h.Copy, {
                  style: {
                    flex: 1,
                    minWidth: 0,
                    fontSize: 13,
                    lineHeight: 21,
                    color: M.warning,
                    fontFamily: 'Vazirmatn_600SemiBold',
                  },
                  children: (0, _.L)(
                    '\u0642\u06cc\u0645\u062a {n} \u06a9\u0627\u0644\u0627 \u0645\u0634\u062e\u0635 \u0646\u06cc\u0633\u062a\u061b \u0627\u0648\u0644 \u0642\u06cc\u0645\u062a \u0631\u0627 \u0628\u06af\u0630\u0627\u0631\u060c \u0628\u0639\u062f \u0641\u0627\u06a9\u062a\u0648\u0631 \u0631\u0627 \u0628\u0641\u0631\u0633\u062a.',
                    { n: tt.length.toLocaleString((0, _.numberLocale)()) },
                  ),
                }),
                nt &&
                  (0, V.jsx)(r.default, {
                    testID: 'receipt-pricing',
                    accessibilityRole: 'button',
                    onPress: () => pe(!0),
                    style: ({ pressed: e }) => ({
                      minHeight: 36,
                      paddingHorizontal: 12,
                      borderRadius: 10,
                      justifyContent: 'center',
                      backgroundColor: M.surface,
                      borderWidth: l.default.hairlineWidth,
                      borderColor: M.warningBorder,
                      opacity: e ? 0.8 : 1,
                    }),
                    children: (0, V.jsx)(h.Copy, {
                      style: {
                        fontSize: 13,
                        lineHeight: 20,
                        color: M.text,
                        fontFamily: 'Vazirmatn_700Bold',
                      },
                      children: (0, _.L)(
                        '\u0642\u06cc\u0645\u062a\u200c\u06af\u0630\u0627\u0631\u06cc',
                      ),
                    }),
                  }),
              ],
            }),
          vt =
            !xe &&
            (0, V.jsx)(
              z.InvoiceSend,
              {
                document: de,
                shop: J,
                shopName: t,
                extras: De,
                design: ze,
                messages: Se?.settings?.messages,
                contact: Ie?.contact,
                unpriced: tt.length,
                more: {
                  disabled: mt,
                  onPress: () => {
                    gt(rt);
                  },
                },
                picture: async function (e) {
                  if (mt) return !0;
                  {
                    if (
                      'undefined' == typeof navigator ||
                      !navigator.share ||
                      !navigator.canShare
                    )
                      return !1;
                    let t = !0;
                    return (
                      await gt(async () => {
                        ((t = await (0, f.sharePngIfPossible)(
                          await (0, j.drawReceipt)(Ze, M),
                          ot,
                          e,
                        )),
                          t && it());
                      }),
                      t
                    );
                  }
                },
                onDocument: (t) => ce({ from: e, value: t }),
                onContactSaved: () => {
                  we();
                },
              },
              `${J?.id}:${de.type}:${de.id}:${de.occurredAt}`,
            ),
          St = { fontSize: 12, lineHeight: 20, color: M.muted };
        return (0, V.jsxs)(u.ScrollView, {
          testID: 'receipt',
          keyboardShouldPersistTaps: 'handled',
          removeClippedSubviews: void 0,
          contentContainerStyle: {
            width: '100%',
            maxWidth: 650,
            alignSelf: 'center',
            gap: 12,
            paddingBottom: 20,
          },
          children: [
            (0, V.jsxs)(c.default, {
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 8,
              },
              children: [
                (0, V.jsx)(h.Copy, {
                  accessibilityRole: 'header',
                  numberOfLines: 1,
                  style: {
                    flexShrink: 1,
                    fontSize: 18,
                    lineHeight: 28,
                    fontFamily: 'Vazirmatn_700Bold',
                  },
                  children: de.receiptNo
                    ? (0, _.L)('\u0641\u0627\u06a9\u062a\u0648\u0631 {no}', {
                        no: Ze.number,
                      })
                    : Ze.title,
                }),
                'done' === fe &&
                  (0, V.jsx)(c.default, {
                    testID: 'receipt-cancelled-badge',
                    style: {
                      paddingHorizontal: 9,
                      paddingVertical: 2,
                      borderRadius: 8,
                      backgroundColor: M.danger + '1f',
                    },
                    children: (0, V.jsx)(h.Copy, {
                      style: {
                        fontSize: 12,
                        lineHeight: 20,
                        color: M.danger,
                        fontFamily: 'Vazirmatn_700Bold',
                      },
                      children: (0, _.L)(
                        '\u0644\u063a\u0648 \u0634\u062f\u0647',
                      ),
                    }),
                  }),
                (0, V.jsx)(D.SmallKey, {
                  testID: 'receipt-close',
                  label: E.notebookW5Fa.close,
                  onPress: A,
                }),
              ],
            }),
            (0, V.jsx)(h.Segmented, {
              compact: !0,
              height: 34,
              role: 'tab',
              items: i.invoiceLayouts.map((e) => ({
                value: e,
                label: Xe.layouts[e],
                testID: 'receipt-layout-' + e,
              })),
              value: Fe,
              onChange: (e) => Te({ layout: e }),
            }),
            bt,
            p && vt,
            ut &&
              (0, V.jsx)(h.Copy, {
                testID: 'invoice-edit-hint',
                style: { fontSize: 12, lineHeight: 20, color: M.muted },
                children: (0, _.L)(
                  '\u0631\u0648\u06cc \u0647\u0631 \u0628\u062e\u0634 \u0641\u0627\u06a9\u062a\u0648\u0631 \u0628\u0632\u0646 \u062a\u0627 \u0648\u06cc\u0631\u0627\u06cc\u0634 \u0634\u0648\u062f\u061b \u0628\u0631\u0627\u06cc \u0627\u0645\u0636\u0627 \u0631\u0648\u06cc \u06a9\u0627\u062f\u0631 \u0627\u0645\u0636\u0627 \u0628\u0632\u0646.',
                ),
              }),
            (0, V.jsx)(C.ReceiptPaper, {
              ref: ye,
              model: Ze,
              pending: Le
                ? { seller: 'purchase' === de.type, buyer: 'sale' === de.type }
                : void 0,
              pendingText: (0, _.L)(
                '\u062f\u0631 \u062d\u0627\u0644 \u062f\u0631\u06cc\u0627\u0641\u062a\u2026',
              ),
              onEdit: ut ? Ue : void 0,
              locked: ft,
              hints: !Je,
              editHint: (0, _.L)(
                '\u0628\u0631\u0627\u06cc \u0648\u06cc\u0631\u0627\u06cc\u0634 \u0628\u0632\u0646\u06cc\u062f',
              ),
              employeeHint: (0, _.L)(
                '\u0646\u0627\u0645 \u06a9\u0627\u0631\u0645\u0646\u062f',
              ),
            }),
            ('seller' === Me || 'buyer' === Me) &&
              (0, V.jsx)(
                B.PartySheet,
                {
                  title: 'seller' === Me ? Qe.seller : Qe.buyer,
                  initial: Ze.head.fields[Me],
                  defaults: (0, R.partyDefaults)(Oe, Me, qe),
                  shopSide: Ze.head.shopSide === Me,
                  canDefault: he,
                  contactName:
                    Ze.head.shopSide !== Me && de.contactId && Ee
                      ? Ee.name
                      : void 0,
                  nameOnly:
                    Ze.head.shopSide !== Me && !(0, R.seesPersonDetails)(J),
                  addresses: (0, H.cleanAddressBook)(ze?.addresses),
                  canEditAddresses: he,
                  onAddresses: async function (e) {
                    if (!J) return;
                    const t = { ...(ze || { theme: 'classic' }) };
                    e.length ? (t.addresses = e) : delete t.addresses;
                    try {
                      await (0, T.patchNotebookSettings)(J, { invoice: t });
                    } catch (e) {
                      throw Error((0, b.message)(e));
                    }
                    (Z && re({ key: Z, value: t }), je());
                  },
                  onSave: (e) => yt(Me, e),
                  onReset: () =>
                    pt(
                      (0, R.withParty)(
                        Ke,
                        Me,
                        null,
                        (0, R.partyDefaults)(Oe, Me, qe),
                      ),
                    ),
                  onClose: () => Ue(null),
                },
                Me,
              ),
            'employee' === Me &&
              (0, V.jsx)(B.EmployeeSheet, {
                initial: Ze.recordedBy,
                onSave: (e) =>
                  pt(
                    (0, R.withEmployee)(
                      Ke,
                      e.trim() === (Oe.recordedBy || '').trim() ? null : e,
                    ),
                  ),
                onClose: () => Ue(null),
              }),
            ht &&
              (0, V.jsx)(W.SignaturePad, {
                title: 'seller' === ht ? Qe.sellerSign : Qe.buyerSign,
                hint: (0, _.L)(
                  '\u0628\u0627 \u0627\u0646\u06af\u0634\u062a \u062f\u0627\u062e\u0644 \u06a9\u0627\u062f\u0631 \u0627\u0645\u0636\u0627 \u06a9\u0646\u06cc\u062f. \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u06af\u0648\u0634\u06cc \u0631\u0627 \u0628\u0647 \u0637\u0631\u0641 \u0645\u0642\u0627\u0628\u0644 \u0628\u062f\u0647\u06cc\u062f.',
                ),
                existing: !!Ze.head?.signs[ht],
                onCancel: () => Ue(null),
                onDone: (e) => {
                  (Ue(null),
                    te(''),
                    pt((0, R.withSignature)(Ke, ht, e)).catch((e) =>
                      te((0, b.message)(e)),
                    ));
                },
              }),
            (0, V.jsxs)(c.default, {
              testID: 'receipt-actions',
              style: { flexDirection: 'row-reverse', flexWrap: 'wrap', gap: 8 },
              children: [
                xt('receipt-print', Qe.print, 'print', lt, !0),
                xt('receipt-save', Qe.saveImage, 'photo', st),
                xt(
                  'receipt-file',
                  (0, _.L)(
                    '\u0630\u062e\u06cc\u0631\u0647 \u0641\u0627\u06cc\u0644',
                  ),
                  'file',
                  async function () {
                    return (
                      We(
                        (0, _.L)(
                          '\u062f\u0631 \u067e\u0646\u062c\u0631\u0647\u0654 \u0686\u0627\u067e\u060c \xab\u0630\u062e\u06cc\u0631\u0647 \u0628\u0647\u200c\u0635\u0648\u0631\u062a PDF\xbb \u0631\u0627 \u0628\u0647\u200c\u062c\u0627\u06cc \u067e\u0631\u06cc\u0646\u062a\u0631 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f.',
                        ),
                      ),
                      await (0, w.printInvoice)(Ze, He, (0, _.localeLang)()),
                      void it()
                    );
                  },
                ),
              ],
            }),
            (0, V.jsxs)(c.default, {
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 8,
              },
              children: [
                (0, V.jsx)(h.Copy, {
                  style: { fontSize: 12, color: M.muted },
                  children: Xe.paper,
                }),
                (0, V.jsx)(c.default, {
                  style: { flex: 1, minWidth: 0, maxWidth: 360 },
                  children: (0, V.jsx)(h.Segmented, {
                    compact: !0,
                    height: 30,
                    items: i.invoicePapers.map((e) => ({
                      value: e,
                      label: Xe.papers[e],
                      testID: 'receipt-paper-size-' + e,
                    })),
                    value: He,
                    onChange: (e) => Te({ paper: e }),
                  }),
                }),
              ],
            }),
            (0, V.jsx)(h.Copy, {
              style: { fontSize: 11.5, lineHeight: 19, color: M.muted },
              children: (0, _.L)(
                '\xab\u0686\u0627\u067e\xbb \u0645\u0633\u062a\u0642\u06cc\u0645 \u0635\u0641\u062d\u0647\u0654 \u067e\u0631\u06cc\u0646\u062a\u0631 \u0631\u0627 \u0628\u0627\u0632 \u0645\u06cc\u200c\u06a9\u0646\u062f. \u0631\u0646\u06af \u0648 \u0644\u0648\u06af\u0648 \u0645\u062b\u0644 \u0642\u0628\u0644 \u0627\u0632 \xab\u0637\u0631\u062d\u200c\u0647\u0627\xbb.',
              ),
            }),
            !!Ce &&
              (0, V.jsxs)(V.Fragment, {
                children: [
                  (0, V.jsx)(h.Copy, {
                    accessibilityRole: 'alert',
                    style: { color: M.danger },
                    children: E.notebookW5Fa.networkRetry,
                  }),
                  (0, V.jsx)(h.Button, {
                    secondary: !0,
                    onPress: () => {
                      we();
                    },
                    children: (0, _.L)(
                      '\u062a\u0644\u0627\u0634 \u062f\u0648\u0628\u0627\u0631\u0647',
                    ),
                  }),
                ],
              }),
            !!Be &&
              (0, V.jsx)(h.Copy, {
                accessibilityLiveRegion: 'polite',
                style: { fontSize: 12.5, color: M.muted },
                children: Be,
              }),
            !!ee &&
              (0, V.jsx)(h.Copy, {
                accessibilityRole: 'alert',
                style: { color: M.danger },
                children: ee,
              }),
            !p && vt,
            he &&
              'sale' === de.type &&
              (0, V.jsxs)(c.default, {
                testID: 'receipt-extras-section',
                style: {
                  gap: 8,
                  padding: 12,
                  borderRadius: 14,
                  borderWidth: l.default.hairlineWidth,
                  borderColor: M.line,
                  backgroundColor: M.surface,
                },
                children: [
                  (0, V.jsx)(h.Copy, {
                    style: {
                      fontSize: 14,
                      lineHeight: 22,
                      fontFamily: 'Vazirmatn_700Bold',
                    },
                    children: (0, _.L)(
                      '\u0647\u0632\u06cc\u0646\u0647\u200c\u0647\u0627\u06cc \u0631\u0633\u06cc\u062f \u0641\u0631\u0648\u0634',
                    ),
                  }),
                  (0, V.jsx)(h.Copy, {
                    style: St,
                    children: De.length
                      ? De.map(I.extraLabel).join('\u060c ')
                      : (0, _.L)(
                          '\u0647\u0632\u06cc\u0646\u0647\u200c\u0627\u06cc \u0645\u062b\u0644 \u0627\u0631\u0633\u0627\u0644 \u06cc\u0627 \u0645\u0627\u0644\u06cc\u0627\u062a \u06a9\u0647 \u0631\u0648\u06cc \u0647\u0645\u0647\u0654 \u0631\u0633\u06cc\u062f\u0647\u0627\u06cc \u0641\u0631\u0648\u0634 \u0628\u06cc\u0627\u06cc\u062f\u061b \u062f\u0631 \u0641\u0631\u0648\u0634 \u0648 \u06af\u0632\u0627\u0631\u0634\u200c\u0647\u0627 \u062d\u0633\u0627\u0628 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f.',
                        ),
                  }),
                  !X &&
                    (0, V.jsx)(c.default, {
                      style: { flexDirection: 'row-reverse' },
                      children: (0, V.jsx)(D.SmallKey, {
                        testID: 'receipt-extras-open',
                        icon: De.length ? 'edit' : 'plus',
                        label: De.length
                          ? (0, _.L)(
                              '\u0648\u06cc\u0631\u0627\u06cc\u0634 \u0647\u0632\u06cc\u0646\u0647\u200c\u0647\u0627',
                            )
                          : (0, _.L)(
                              '\u0627\u0641\u0632\u0648\u062f\u0646 \u0647\u0632\u06cc\u0646\u0647\u0654 \u062b\u0627\u0628\u062a (\u0627\u0631\u0633\u0627\u0644\u060c \u062a\u06cc\u067e\u0627\u06a9\u0633\u060c \u0645\u0627\u0644\u06cc\u0627\u062a\u2026)',
                            ),
                        onPress: () => Y(!0),
                      }),
                    }),
                ],
              }),
            X &&
              J &&
              'sale' === de.type &&
              (0, V.jsx)(q, {
                shop: J,
                value: De,
                onSaved: function (e) {
                  (Z && Q({ key: Z, value: e }), je());
                },
                onClose: () => Y(!1),
              }),
            'busy' !== fe &&
              'retry' !== fe &&
              (0, V.jsx)(P.ReturnBlock, {
                shop: J,
                document: { ...de, corrected: xe },
                onDone: () => {
                  ve();
                },
              }),
            he &&
              !!de.id &&
              de.receiptNo > 0 &&
              !de.returns?.length &&
              (0, V.jsx)(c.default, {
                testID: 'receipt-danger-zone',
                style: {
                  gap: 8,
                  marginTop: 8,
                  paddingTop: 12,
                  borderTopWidth: l.default.hairlineWidth,
                  borderColor: M.line,
                },
                children:
                  'done' === fe
                    ? (0, V.jsx)(h.Copy, {
                        testID: 'receipt-cancelled',
                        style: { textAlign: 'center', color: M.muted },
                        children:
                          'sale' === de.type
                            ? (0, _.L)(
                                '\u0627\u06cc\u0646 \u0631\u0633\u06cc\u062f \u0641\u0631\u0648\u0634 \u0644\u063a\u0648 \u0634\u062f\u0647 \u0648 \u06a9\u0627\u0644\u0627\u0647\u0627\u06cc\u0634 \u0628\u0647 \u0645\u0648\u062c\u0648\u062f\u06cc \u0628\u0631\u06af\u0634\u062a\u0647 \u0627\u0633\u062a.',
                              )
                            : (0, _.L)(
                                '\u0627\u06cc\u0646 \u0631\u0633\u06cc\u062f \u062e\u0631\u06cc\u062f \u0644\u063a\u0648 \u0634\u062f\u0647 \u0648 \u06a9\u0627\u0644\u0627\u0647\u0627\u06cc\u0634 \u0627\u0632 \u0645\u0648\u062c\u0648\u062f\u06cc \u06a9\u0645 \u0634\u062f\u0647 \u0627\u0633\u062a.',
                              ),
                      })
                    : 'idle' === fe
                      ? (0, V.jsxs)(r.default, {
                          testID: 'receipt-cancel',
                          accessibilityRole: 'button',
                          onPress: () => me('confirm'),
                          style: ({ pressed: e }) => ({
                            alignSelf: 'stretch',
                            minHeight: 44,
                            flexDirection: 'row-reverse',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 6,
                            borderRadius: 12,
                            borderWidth: 1,
                            borderColor: M.danger,
                            opacity: e ? 0.8 : 1,
                          }),
                          children: [
                            (0, V.jsx)(v.Icon, {
                              name: 'close',
                              size: 15,
                              color: M.danger,
                            }),
                            (0, V.jsx)(h.Copy, {
                              style: {
                                fontSize: 13.5,
                                color: M.danger,
                                fontFamily: 'Vazirmatn_600SemiBold',
                              },
                              children:
                                'sale' === de.type
                                  ? (0, _.L)(
                                      '\u0644\u063a\u0648 \u0627\u06cc\u0646 \u0631\u0633\u06cc\u062f \u0641\u0631\u0648\u0634',
                                    )
                                  : (0, _.L)(
                                      '\u0644\u063a\u0648 \u0627\u06cc\u0646 \u0631\u0633\u06cc\u062f \u062e\u0631\u06cc\u062f',
                                    ),
                            }),
                          ],
                        })
                      : (0, V.jsxs)(h.Card, {
                          style: { gap: 8, borderColor: M.danger },
                          children: [
                            (0, V.jsx)(h.Copy, {
                              children:
                                'sale' === de.type
                                  ? (0, _.L)(
                                      '\u0647\u0645\u0647\u0654 \u06a9\u0627\u0644\u0627\u0647\u0627\u06cc \u0627\u06cc\u0646 \u0631\u0633\u06cc\u062f \u0641\u0631\u0648\u0634 \u0628\u0647 \u0645\u0648\u062c\u0648\u062f\u06cc \u0628\u0631\u0645\u06cc\u200c\u06af\u0631\u062f\u062f \u0648 \u0641\u0631\u0648\u0634\u0634 \u0627\u0632 \u06af\u0632\u0627\u0631\u0634\u200c\u0647\u0627 \u062d\u0630\u0641 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                                    )
                                  : (0, _.L)(
                                      '\u0647\u0645\u0647\u0654 \u06a9\u0627\u0644\u0627\u0647\u0627\u06cc \u0627\u06cc\u0646 \u0631\u0633\u06cc\u062f \u062e\u0631\u06cc\u062f \u0627\u0632 \u0645\u0648\u062c\u0648\u062f\u06cc \u06a9\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f \u0648 \u062e\u0631\u06cc\u062f\u0634 \u0627\u0632 \u06af\u0632\u0627\u0631\u0634\u200c\u0647\u0627 \u062d\u0630\u0641 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                                    ),
                            }),
                            (0, V.jsxs)(c.default, {
                              style: h.common.row,
                              children: [
                                (0, V.jsx)(c.default, {
                                  style: h.common.flex,
                                  children: (0, V.jsx)(h.Button, {
                                    testID: 'receipt-cancel-confirm',
                                    danger: !0,
                                    disabled: 'busy' === fe,
                                    onPress: () => {
                                      be();
                                    },
                                    children: (0, _.L)(
                                      '\u0628\u0644\u0647\u060c \u0644\u063a\u0648 \u06a9\u0646',
                                    ),
                                  }),
                                }),
                                (0, V.jsx)(c.default, {
                                  style: h.common.flex,
                                  children: (0, V.jsx)(h.Button, {
                                    secondary: !0,
                                    disabled: 'busy' === fe || 'retry' === fe,
                                    onPress: () => me('idle'),
                                    children: (0, _.L)('\u0646\u0647'),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
              }),
            he &&
              (0, V.jsx)(r.default, {
                testID: 'invoice-design-open',
                accessibilityRole: 'link',
                disabled: !Se,
                onPress: () => se(!0),
                style: {
                  alignSelf: 'center',
                  padding: 6,
                  opacity: Se ? 1 : 0.5,
                },
                children: (0, V.jsx)(h.Copy, {
                  style: { fontSize: 12.5, color: M.accent },
                  children: (0, _.L)(
                    '\u062a\u063a\u06cc\u06cc\u0631 \u0637\u0631\u062d',
                  ),
                }),
              }),
            he &&
              ie &&
              J &&
              (0, V.jsx)(
                n.InvoiceDesignSheet,
                {
                  shop: J,
                  shopName: t,
                  preview: Ze,
                  value: ze,
                  onSaved: (e) => {
                    (Z && re({ key: Z, value: e }),
                      e.layout && e.layout !== Fe && Te({ layout: e.layout }),
                      je());
                  },
                  onClose: () => se(!1),
                },
                J.id,
              ),
            (0, V.jsx)(h.Copy, {
              style: { fontSize: 10, color: M.muted, textAlign: 'center' },
              children:
                'sale' === de.type
                  ? E.notebookW5Fa.receipt
                  : (0, _.L)(
                      '\u0631\u0633\u06cc\u062f \u062e\u0631\u06cc\u062f',
                    ),
            }),
            nt &&
              J &&
              (0, V.jsx)(k.PriceFixSheet, {
                shop: J,
                visible: ue,
                lines: tt,
                onAccount: !!de.contactId,
                cost: 'purchase' === de.type,
                onSaved: (e, t) => {
                  dt(e, t);
                },
                onClose: () => pe(!1),
              }),
          ],
        });
      }),
      (_e.SalesList = function ({ shop: e, onOpen: t, onClose: n }) {
        const { colors: o } = (0, x.useTheme)(),
          [i, l] = (0, s.useState)(''),
          { data: p, error: f } = (0, O.useSwr)(
            (0, O.scoped)(e.id, 'sales:50'),
            () => (0, T.listSales)(e, '?limit=50'),
          ),
          b = p?.sales || [],
          v = i || f;
        async function S(n) {
          try {
            t(await (0, T.getSale)(e, n.id));
          } catch {
            l(E.notebookW5Fa.networkRetry);
          }
        }
        return (0, V.jsxs)(u.ScrollView, {
          contentContainerStyle: { gap: 12, paddingBottom: 20 },
          children: [
            (0, V.jsxs)(c.default, {
              style: h.common.between,
              children: [
                (0, V.jsx)(h.Copy, {
                  style: h.common.title,
                  children: E.notebookW5Fa.salesList,
                }),
                (0, V.jsx)(h.Button, {
                  secondary: !0,
                  onPress: n,
                  children: E.notebookW5Fa.close,
                }),
              ],
            }),
            void 0 !== p &&
              !b.length &&
              !v &&
              (0, V.jsx)(h.Card, {
                children: (0, V.jsx)(h.Copy, {
                  children: E.notebookW5Fa.noSales,
                }),
              }),
            b.map((e) =>
              (0, V.jsx)(
                r.default,
                {
                  accessibilityRole: 'button',
                  onPress: () => {
                    S(e);
                  },
                  children: (0, V.jsxs)(h.Card, {
                    style: h.common.between,
                    children: [
                      (0, V.jsxs)(c.default, {
                        children: [
                          (0, V.jsxs)(h.Copy, {
                            children: [
                              E.notebookW5Fa.receiptNo,
                              ' ',
                              e.receiptNo.toLocaleString((0, _.numberLocale)()),
                            ],
                          }),
                          (0, V.jsx)(h.Copy, {
                            style: { fontSize: 11, color: o.muted },
                            children: (0, y.formatMoment)(e.occurredAt),
                          }),
                        ],
                      }),
                      void 0 !== e.totalToman &&
                        (0, V.jsx)(h.Copy, { children: M(e.totalToman) }),
                      (0, V.jsx)(h.Copy, {
                        style: { fontSize: 11 },
                        children: E.notebookW5Fa.openReceipt,
                      }),
                    ],
                  }),
                },
                e.id,
              ),
            ),
            !!v &&
              (0, V.jsx)(h.Copy, {
                style: { color: o.danger },
                children: i || E.notebookW5Fa.networkRetry,
              }),
          ],
        });
      }));
    var t = _r(d[0]),
      n = _r(d[1]),
      o = _r(d[2]),
      i = _r(d[3]),
      s = _r(d[4]);
    _r(d[5]);
    var r = e(_r(d[6])),
      l = e(_r(d[7])),
      c = e(_r(d[8])),
      u = _r(d[9]),
      p = e(_r(d[10])),
      y = _r(d[11]),
      h = _r(d[12]),
      f = _r(d[13]),
      x = _r(d[14]),
      b = _r(d[15]),
      v = _r(d[16]),
      S = _r(d[17]),
      j = _r(d[18]),
      I = _r(d[19]),
      C = _r(d[20]),
      w = _r(d[21]),
      L = _r(d[22]),
      k = _r(d[23]),
      D = _r(d[24]),
      P = _r(d[25]),
      z = _r(d[26]),
      R = _r(d[27]),
      N = _r(d[28]),
      B = _r(d[29]),
      W = _r(d[30]),
      F = _r(d[31]),
      H = _r(d[32]),
      T = _r(d[33]),
      E = _r(d[34]),
      _ = _r(d[35]),
      O = _r(d[36]),
      A = _r(d[37]),
      V = _r(d[38]);
    const M = (e) =>
        void 0 === e ? '\u2014' : (0, A.money)(e, { full: !0, hint: !1 }),
      U = [],
      J = (e) =>
        'anbari.receipt.print.' + e.replace(/[^a-zA-Z0-9-]/g, '').slice(0, 80);
    async function $(e) {
      try {
        const t = JSON.parse((await p.default.getItem(J(e))) || '{}');
        return {
          layout: i.invoiceLayouts.includes(t?.layout) ? t.layout : void 0,
          paper: i.invoicePapers.includes(t?.paper) ? t.paper : void 0,
        };
      } catch {
        return {};
      }
    }
    function K(e, t) {
      p.default.setItem(J(e), JSON.stringify(t)).catch(() => {});
    }
    function q({ shop: e, value: n, onSaved: o, onClose: i }) {
      const { colors: l } = (0, x.useTheme)(),
        [u, p] = (0, s.useState)(
          n.map((e) => ({ ...e, text: String(e.value) })),
        ),
        [f, b] = (0, s.useState)(''),
        [v, S] = (0, s.useState)(!1),
        j = (e, t) => p((n) => n.map((n, o) => (e === o ? { ...n, ...t } : n)));
      async function I() {
        try {
          const t = u
            .filter((e) => e.label.trim())
            .map((e) => {
              const t = Number(
                (0, y.latinDigits)(e.text).replace(/[,\u060c\u066c]/g, ''),
              );
              if (
                !Number.isFinite(t) ||
                t < 0 ||
                ('percent' === e.kind && t > 100)
              )
                throw Error('invalid');
              return {
                label: e.label.trim().slice(0, 40),
                kind: e.kind,
                value: t,
              };
            });
          (S(!0),
            b(''),
            await (0, T.patchNotebookSettings)(e, { receiptExtras: t }),
            o(t),
            i());
        } catch (e) {
          b(
            e instanceof Error && 'invalid' === e.message
              ? (0, _.L)(
                  '\u0639\u062f\u062f \u06cc\u06a9\u06cc \u0627\u0632 \u0631\u062f\u06cc\u0641\u200c\u0647\u0627 \u062f\u0631\u0633\u062a \u0646\u06cc\u0633\u062a\u061b \u062f\u0631\u0635\u062f \u0628\u0627\u06cc\u062f \u0628\u06cc\u0646 \u06f0 \u0648 \u06f1\u06f0\u06f0 \u0628\u0627\u0634\u062f.',
                )
              : (0, _.L)(
                  '\u0630\u062e\u06cc\u0631\u0647 \u0646\u0634\u062f\u061b \u0641\u0642\u0637 \u0645\u062f\u06cc\u0631 \u06cc\u0627 \u0635\u0627\u062d\u0628 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0627\u06cc\u0646 \u0631\u0627 \u0639\u0648\u0636 \u06a9\u0646\u062f.',
                ),
          );
        } finally {
          S(!1);
        }
      }
      return (0, V.jsxs)(h.Card, {
        testID: 'receipt-extras',
        style: { gap: 10 },
        children: [
          (0, V.jsx)(h.Copy, {
            style: { fontSize: 15, fontFamily: 'Vazirmatn_600SemiBold' },
            children: (0, _.L)(
              '\u0647\u0632\u06cc\u0646\u0647\u200c\u0647\u0627\u06cc \u062b\u0627\u0628\u062a \u0631\u0633\u06cc\u062f \u0641\u0631\u0648\u0634',
            ),
          }),
          (0, V.jsx)(h.Copy, {
            style: { fontSize: 12, lineHeight: 21, color: l.muted },
            children: (0, A.shopUnitText)(
              (0, _.L)(
                '\u0645\u062b\u0644\u0627\u064b \xab\u0627\u0631\u0633\u0627\u0644\xbb \u06f2\u06f0\u06f0 \u062a\u0648\u0645\u0627\u0646 \u06cc\u0627 \xab\u0645\u0627\u0644\u06cc\u0627\u062a\xbb \u06f9 \u062f\u0631\u0635\u062f. \u0641\u0642\u0637 \u0631\u0648\u06cc \u0631\u0633\u06cc\u062f \u0641\u0631\u0648\u0634 \u0645\u06cc\u200c\u0622\u06cc\u062f\u061b \u062f\u0631 \u0641\u0631\u0648\u0634 \u0648 \u06af\u0632\u0627\u0631\u0634\u200c\u0647\u0627 \u062d\u0633\u0627\u0628 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f.',
              ),
            ),
          }),
          u.map((e, n) =>
            (0, V.jsxs)(
              c.default,
              {
                style: {
                  flexDirection: 'row-reverse',
                  gap: 8,
                  alignItems: 'center',
                },
                children: [
                  (0, V.jsx)(c.default, {
                    style: { flex: 1.4 },
                    children: (0, V.jsx)(h.Input, {
                      value: e.label,
                      maxLength: 40,
                      placeholder: (0, _.L)(
                        '\u0646\u0627\u0645\u060c \u0645\u062b\u0644\u0627\u064b \u0627\u0631\u0633\u0627\u0644',
                      ),
                      onChangeText: (e) => j(n, { label: e }),
                    }),
                  }),
                  (0, V.jsx)(c.default, {
                    style: { flex: 1 },
                    children:
                      'percent' === e.kind
                        ? (0, V.jsx)(h.Input, {
                            value: e.text,
                            keyboardType: 'decimal-pad',
                            inputMode: 'decimal',
                            placeholder: (0, _.L)('\u062f\u0631\u0635\u062f'),
                            onChangeText: (e) => j(n, { text: e }),
                          })
                        : (0, V.jsx)(t.MoneyInput, {
                            value: e.text,
                            placeholder: (0, A.shopUnitText)(
                              (0, _.L)('\u062a\u0648\u0645\u0627\u0646'),
                            ),
                            onChange: (e) => j(n, { text: e }),
                          }),
                  }),
                  (0, V.jsx)(r.default, {
                    accessibilityRole: 'button',
                    onPress: () =>
                      j(n, {
                        kind: 'percent' === e.kind ? 'fixed' : 'percent',
                      }),
                    style: {
                      paddingHorizontal: 10,
                      height: 44,
                      borderRadius: 12,
                      justifyContent: 'center',
                      backgroundColor: l.soft,
                    },
                    children: (0, V.jsx)(h.Copy, {
                      style: { fontSize: 12 },
                      children:
                        'percent' === e.kind
                          ? '\u066a'
                          : (0, A.shopUnitText)(
                              (0, _.L)('\u062a\u0648\u0645\u0627\u0646'),
                            ),
                    }),
                  }),
                  (0, V.jsx)(r.default, {
                    accessibilityRole: 'button',
                    accessibilityLabel: (0, _.L)('\u062d\u0630\u0641'),
                    onPress: () => p((e) => e.filter((e, t) => t !== n)),
                    style: { padding: 8 },
                    children: (0, V.jsx)(h.Copy, {
                      style: { color: l.muted },
                      children: '\u2715',
                    }),
                  }),
                ],
              },
              n,
            ),
          ),
          u.length < 5 &&
            (0, V.jsx)(h.Button, {
              secondary: !0,
              onPress: () =>
                p((e) => [
                  ...e,
                  { label: '', kind: 'fixed', value: 0, text: '' },
                ]),
              children: (0, _.L)(
                '\u0627\u0641\u0632\u0648\u062f\u0646 \u0631\u062f\u06cc\u0641',
              ),
            }),
          !!f &&
            (0, V.jsx)(h.Copy, {
              accessibilityRole: 'alert',
              style: { color: l.danger },
              children: f,
            }),
          (0, V.jsxs)(c.default, {
            style: h.common.row,
            children: [
              (0, V.jsx)(c.default, {
                style: h.common.flex,
                children: (0, V.jsx)(h.Button, {
                  disabled: v,
                  onPress: () => {
                    I();
                  },
                  children: (0, _.L)('\u0630\u062e\u06cc\u0631\u0647'),
                }),
              }),
              (0, V.jsx)(c.default, {
                style: h.common.flex,
                children: (0, V.jsx)(h.Button, {
                  secondary: !0,
                  onPress: i,
                  children: E.notebookW5Fa.close,
                }),
              }),
            ],
          }),
        ],
      });
    }
  },
  801,
  {
    0: 614,
    1: 802,
    2: 804,
    3: 476,
    4: 2,
    5: 94,
    6: 232,
    7: 17,
    8: 99,
    9: 380,
    10: 258,
    11: 440,
    12: 407,
    13: 661,
    14: 382,
    15: 415,
    16: 385,
    17: 410,
    18: 808,
    19: 803,
    20: 809,
    21: 812,
    22: 815,
    23: 816,
    24: 517,
    25: 818,
    26: 819,
    27: 814,
    28: 822,
    29: 823,
    30: 810,
    31: 521,
    32: 474,
    33: 519,
    34: 580,
    35: 311,
    36: 489,
    37: 435,
    38: 338,
    39: 997,
    40: 336,
    41: 998,
    42: 995,
    paths: {
      997: '/_expo/static/js/web/index-9276617a829a3984ed22a1c59bc256bb.js',
      998: '/_expo/static/js/web/index-78b7861318299fb76514da275e2e8dad.js',
    },
  },
);
