// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 962; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (_g, _r, _i, a, _m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.Basket = function ({
        sides: e,
        draftKey: n,
        shop: r,
        state: u,
        mode: h = 'sale',
        canSeeBuyPrice: x = !0,
        contacts: Q,
        startContact: he,
        onClose: Se,
        onSaved: ke,
        onRefresh: je,
        onProGate: Le,
        onAccountOption: De,
      }) {
        const { colors: Ie } = (0, S.useTheme)(),
          [we, Re] = (0, t.useState)([]),
          [ze, Pe] = (0, t.useState)('cash'),
          [Te, qe] = (0, t.useState)(null),
          [Ee, Ne] = (0, t.useState)(de),
          [Oe, Ae] = (0, t.useState)(null),
          [Fe, We] = (0, t.useState)(''),
          [Be, He] = (0, t.useState)(!1),
          [Me, Ve] = (0, t.useState)(''),
          [Ue, Ge] = (0, t.useState)(),
          [Je, $e] = (0, t.useState)([]),
          [Ke, Xe] = (0, t.useState)(() => (0, k.randomUUID)()),
          [Qe, Ye] = (0, t.useState)(null),
          [Ze, et] = (0, t.useState)(''),
          [tt, nt] = (0, t.useState)(0),
          [ot, rt] = (0, t.useState)(null),
          [it, st] = (0, t.useState)(!1),
          [at, ct] = (0, t.useState)(''),
          [lt, dt] = (0, t.useState)(!1),
          [ut, mt] = (0, t.useState)(!1),
          [pt, ft] = (0, t.useState)(''),
          [yt, ht] = (0, t.useState)(!1),
          [bt, gt] = (0, t.useState)([]),
          [xt, vt] = (0, t.useState)({}),
          [Ct, St] = (0, t.useState)([]),
          kt = (0, t.useRef)(xt);
        kt.current = xt;
        const jt = (0, t.useRef)({ code: '', at: 0 }),
          Lt = (0, t.useRef)(null),
          Dt = (0, t.useRef)(!1),
          It = (0, t.useRef)(!1),
          wt = 'sale' === h,
          Rt = (0, t.useRef)(we);
        Rt.current = we;
        const [zt, Pt] = (0, t.useState)(''),
          [Tt, qt] = (0, t.useState)(!1),
          [Et, _t] = (0, t.useState)(''),
          [Nt, Ot] = (0, t.useState)([]),
          At = (0, t.useRef)(!1),
          Ft = (0, t.useRef)({ code: '', id: '', key: '' }),
          Wt =
            (0, Z.canLead)(r.role, r.access) ||
            ('staff' === r.role && !!r.access?.do?.catalog),
          [Bt, Ht] = (0, ne.useToast)(),
          [Mt, Vt] = (0, t.useState)(null),
          { width: Ut } = (0, l.default)(),
          Gt = (0, ie.useDesktop)(),
          [Jt, $t] = (0, t.useState)(''),
          Kt = (0, t.useRef)(null),
          Xt = (0, t.useRef)({ picker: lt, onClose: Se });
        ((Xt.current = { picker: lt, onClose: Se }),
          (0, t.useEffect)(() => {
            if ('undefined' != typeof window)
              return (0, re.installPageBack)(window, () =>
                Xt.current.picker
                  ? (dt(!1), Ae(null), !0)
                  : (Xt.current.onClose(), !1),
              );
          }, []));
        const [Qt, Yt] = (0, O.useConfirm)(),
          Zt = (0, A.basketDraftKey)(n || r.id, h),
          en =
            (wt ? 'basket:recent:' : 'basket:recent-suppliers:') + (n || r.id),
          tn = (0, t.useRef)(!1),
          nn = (0, t.useRef)(!1),
          on = u.products.length > 0;
        function rn(e) {
          (Xe(e.id),
            Re(e.lines),
            Ve(e.buyerName || ''),
            et(e.contactName || ''),
            qe(e.account || null),
            Pe(e.payment || 'cash'),
            Ge(e.when),
            Ne(e.chequeDate || de()),
            Ye(e.invoiceDiscount || null),
            (kt.current = e.tiers || {}),
            vt(kt.current),
            St([]),
            (Lt.current = e.retry || null),
            nt((e) => e + 1),
            mt(!1),
            ht(!1),
            ft(''),
            rt(null),
            st(!1),
            Pt(''),
            We(''),
            Ae(null));
        }
        const sn = (0, t.useRef)(h);
        ((0, t.useEffect)(() => {
          sn.current !== h &&
            ((sn.current = h),
            (tn.current = !1),
            $e([]),
            rn((0, A.emptyCart)((0, k.randomUUID)())),
            Vt(null),
            ct(''));
        }, [h]),
          (0, t.useEffect)(() => {
            if (tn.current) return;
            let e = !0;
            return (
              Promise.all([
                N.default.getItem(Zt),
                N.default.getItem(Zt + ':retry'),
              ])
                .then(([t, n]) => {
                  if (!e) return;
                  if (t && !on) return;
                  const o = (0, A.restoreCarts)(t, n, u.products);
                  ((nn.current = o.migrated || !!n),
                    o.carts.length &&
                      (Rt.current.length
                        ? $e(o.carts.filter((e) => e.id !== Ke))
                        : ($e(o.carts),
                          rn(
                            o.carts.find((e) => e.id === o.active) ||
                              o.carts[0],
                          ))),
                    (tn.current = !0),
                    xo((e) => e + 1));
                })
                .catch(() => {
                  ((tn.current = !0), xo((e) => e + 1));
                }),
              () => {
                e = !1;
              }
            );
          }, [Zt, on]),
          (0, t.useEffect)(() => {
            let e = !0;
            return (
              N.default
                .getItem(en)
                .then((t) => {
                  if (e && t)
                    try {
                      const e = JSON.parse(t);
                      Array.isArray(e) &&
                        gt(
                          e
                            .filter((e) => e && 'string' == typeof e.name)
                            .slice(0, 8),
                        );
                    } catch {}
                })
                .catch(() => {}),
              () => {
                e = !1;
              }
            );
          }, [en]));
        const an = () => {
          const e = {
            id: Ke,
            lines: we,
            buyerName: Me,
            contactName: Ze,
            account: Te,
            payment: ze,
            when: Ue,
            chequeDate: Ee,
            invoiceDiscount: Qe,
            retry: Lt.current,
            ...(wt && Object.keys(xt).length ? { tiers: xt } : {}),
          };
          return Je.some((e) => e.id === Ke)
            ? Je.map((t) => (t.id === Ke ? e : t))
            : [...Je, e];
        };
        function cn(e) {
          ((Lt.current = e), nt((e) => e + 1));
        }
        ((0, t.useEffect)(() => {
          if (!tn.current) return;
          const e = (0, A.storeCarts)(an(), Ke);
          (e ? N.default.setItem(Zt, e) : N.default.removeItem(Zt))
            .then(() => {
              if (nn.current)
                return ((nn.current = !1), N.default.removeItem(Zt + ':retry'));
            })
            .catch(() => {});
        }, [we, Zt, wt, Me, Ze, Te, ze, Ue, Ee, Qe, tt, Je, Ke, xt]),
          (0, t.useEffect)(() => {
            const e = o.default.addListener('keyboardDidHide', () => Ae(null));
            return () => e.remove();
          }, []));
        const ln = wt
            ? (0, L.priceRights)(r).price ||
              u.products.some((e) => void 0 !== e.price)
            : x,
          dn = wt ? (0, W.discountLimit)(r) : 0,
          un = wt && dn > 0 && ln,
          mn = wt && (0, Z.canEditSalePrice)(r.role, r.access),
          pn = (0, t.useMemo)(() => {
            const e = new Map();
            for (const t of u.movements) {
              if (
                'sold' !== t.kind ||
                void 0 === t.unitPrice ||
                !t.unitPrice ||
                t.correctsMovementId
              )
                continue;
              const n = t.timestamp || '',
                o = e.get(t.productId);
              (!o || n > o.at) &&
                e.set(t.productId, { at: n, price: t.unitPrice });
            }
            return e;
          }, [u.movements]),
          fn = (0, t.useMemo)(
            () => (0, W.lastBoughtMap)(u.movements),
            [u.movements],
          ),
          yn = (e) => (mn ? (0, W.addPriceOf)(e, kt.current) : void 0);
        function hn(e) {
          const t = (0, k.randomUUID)(),
            n = yn(e);
          ($t(e.id),
            Re((o) => (0, W.addProduct)(o, e, t, pn.get(e.id)?.price, n)),
            Vt(null),
            (0, ne.tapFeel)(),
            Ht(
              (0, D.L)(
                '{name} +{n} \u0627\u0636\u0627\u0641\u0647 \u0634\u062f',
                { name: e.name, n: (0, D.localDigits)(1) },
              ),
            ),
            We(''),
            (Lt.current = null),
            cn(null),
            xn([e.id]));
        }
        function bn(e) {
          const t = Object.keys(e);
          t.length &&
            (Re((n) =>
              t.reduce((t, n) => {
                const o = u.products.find((e) => e.id === n);
                return o
                  ? (0, W.addPicked)(
                      t,
                      o,
                      e[n],
                      (0, k.randomUUID)(),
                      wt,
                      pn.get(n)?.price,
                      yn(o),
                    )
                  : t;
              }, n),
            ),
            dt(!1),
            Ae(null),
            We(''),
            ct(''),
            Vt(null),
            cn(null),
            (0, ne.tapFeel)('success'),
            Ht(
              (0, D.L)(
                '+{n} \u0642\u0644\u0645 \u0627\u0636\u0627\u0641\u0647 \u0634\u062f',
                { n: (0, D.localDigits)(t.length) },
              ),
            ),
            xn(t));
        }
        function gn(e, t) {
          if (wt || !Ro) return;
          const n = (0, W.buyPriceChange)(
            e,
            t,
            (0, W.lastBuyPrice)(t.product, fn),
          );
          n &&
            setTimeout(
              () =>
                Qt({
                  title: (0, D.L)(
                    '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f \u0639\u0648\u0636 \u0634\u062f\u0647',
                  ),
                  text: (0, _.shopUnitText)(
                    (0, D.L)(
                      '\u062f\u0641\u0639\u0647\u0654 \u0642\u0628\u0644 {old} \u062a\u0648\u0645\u0627\u0646 \u062e\u0631\u06cc\u062f\u0647 \u0628\u0648\u062f\u06cc\u060c \u062d\u0627\u0644\u0627 {new}\u061f',
                      {
                        old: fe((0, _.localAmount)(n.old)),
                        new: fe((0, _.localAmount)(n.typed)),
                      },
                    ),
                  ),
                  ok: (0, D.L)(
                    '\u0642\u06cc\u0645\u062a \u062c\u062f\u06cc\u062f',
                  ),
                  cancel: (0, D.L)(
                    '\u0647\u0645\u0627\u0646 \u0642\u06cc\u0645\u062a \u0642\u0628\u0644',
                  ),
                  tone: 'accent',
                  run: () => {},
                  onCancel: () => Ln(t.id, { unitCost: n.revert }),
                }),
              0,
            );
        }
        function xn(e) {
          if (!mn) return;
          const t = e.filter((e) => {
            const t = u.products.find((t) => t.id === e);
            return !!t && (0, W.needsTierChoice)(t, kt.current);
          });
          t.length &&
            setTimeout(
              () => St((e) => [...e, ...t.filter((t) => !e.includes(t))]),
              0,
            );
        }
        function vn(e, t, n = !1) {
          const o = u.products.find((t) => t.id === e);
          if ((St((t) => t.filter((t) => t !== e)), !o)) return;
          ((kt.current = { ...kt.current, [e]: t }),
            vt(kt.current),
            Re((n) => (0, W.applyTier)(n, e, (0, W.tierPrice)(o, t))),
            Dn());
          const r = (0, W.tierOptions)(o).find((e) => e.key === t);
          !n &&
            r &&
            ((0, ne.tapFeel)(),
            Ht((0, D.L)('{name}: {tier}', { name: o.name, tier: r.name })));
        }
        function Cn(e) {
          const t = u.products.find((t) => t.id === e);
          if (!t || (0, W.rememberedTier)(t, kt.current))
            return void St((t) => t.filter((t) => t !== e));
          const n = (0, W.tierOptions)(t);
          vn(
            e,
            n.some((e) => 'default' === e.key)
              ? 'default'
              : n[0]?.key || 'default',
            !0,
          );
        }
        function Sn(e) {
          const t =
            [...Rt.current].reverse().find((e) => e.product.id === Jt) ||
            Rt.current[Rt.current.length - 1];
          if (!t) return;
          const n = (0, ae.stepLineQuantity)(
            t.quantity,
            e,
            (0, ce.weighStep)(t),
          );
          null !== n && Ln(t.id, { quantity: n });
        }
        function kn(e, t = !1) {
          const n = e.trim(),
            o = Date.now();
          if (!n || n.length > 128) return;
          if (t && jt.current.code === n && o - jt.current.at < 700) return;
          t && (jt.current = { code: n, at: o });
          const r =
            u.products.find((e) => e.barcode === n && !e.archivedAt) ||
            Nt.find((e) => e.barcode === n);
          if (r) return (hn(r), void (t && (0, y.scanBeep)()));
          Wt
            ? (t && (0, y.scanBeep)(), We(''), _t(''), Pt(n))
            : We(E.notebookW5Fa.unknownBarcode);
        }
        async function jn(e) {
          if (At.current || !zt) return;
          const t = zt;
          Ft.current.code !== t &&
            (Ft.current = {
              code: t,
              id: (0, k.randomUUID)(),
              key: (0, k.randomUUID)(),
            });
          const { id: n, key: o } = Ft.current;
          ((At.current = !0), qt(!0), _t(''));
          try {
            try {
              await (0, w.createProduct)(
                r,
                n,
                {
                  name: e.name,
                  kind: 'simple',
                  unit: 'piece',
                  barcode: t,
                  ...(void 0 !== e.price ? { price: e.price } : {}),
                  ...(void 0 !== e.costPrice ? { costPrice: e.costPrice } : {}),
                },
                o,
              );
            } catch (e) {
              if (
                !(e instanceof k.ApiError && 409 === e.status) ||
                ('version_conflict' !== e.message &&
                  'idempotency_conflict' !== e.message)
              )
                throw e;
            }
            const i = {
              id: n,
              name: e.name,
              detail: '',
              stock: 0,
              unit: 'piece',
              kind: 'simple',
              barcode: t,
              ...(void 0 !== e.price ? { price: e.price } : {}),
              ...(void 0 !== e.costPrice ? { costPrice: e.costPrice } : {}),
            };
            ((jt.current = { code: t, at: Date.now() + 1800 }),
              Ot((e) => [...e, i]),
              Pt(''),
              hn(i),
              je?.());
          } catch (e) {
            _t(
              e instanceof k.ApiError && 'name_taken' === e.message
                ? (0, D.L)(
                    '\u0627\u06cc\u0646 \u06a9\u0627\u0644\u0627 \u0647\u0633\u062a\u061b \u0627\u0632 \u0641\u0647\u0631\u0633\u062a \u0627\u0646\u062a\u062e\u0627\u0628\u0634 \u06a9\u0646',
                  )
                : e instanceof k.ApiError && 'barcode_conflict' === e.message
                  ? (0, D.L)(
                      '\u0627\u06cc\u0646 \u0628\u0627\u0631\u06a9\u062f \u0628\u0647 \u06a9\u0627\u0644\u0627\u06cc \u062f\u06cc\u06af\u0631\u06cc \u0648\u0635\u0644 \u0627\u0633\u062a.',
                    )
                  : (0, I.basketError)(e).text,
            );
          } finally {
            ((At.current = !1), qt(!1));
          }
        }
        function Ln(e, t) {
          (Re((n) => n.map((n) => (n.id === e ? { ...n, ...t } : n))),
            (Lt.current = null),
            cn(null));
        }
        function Dn() {
          ((Lt.current = null), cn(null));
        }
        const In = Te ? Te.payment.method : ze,
          wn = () => !!De?.(Te, () => {});
        function Rn(e) {
          if (e !== In) {
            if ((0, W.needsCustomer)(e)) {
              if (!wn()) return;
              return Te
                ? (Dn(),
                  qe({
                    contactId: Te.contactId,
                    payment: {
                      method: e,
                      ...('cheque' === e
                        ? { cheque: { dueDate: ue(Ee) } }
                        : {}),
                    },
                  }),
                  ht('cheque' === e),
                  void ('cheque' === e && Ae('pay')))
                : (ft(e), mt(!0), void Ae('customer'));
            }
            (Dn(),
              Pe(e),
              Te && qe({ contactId: Te.contactId, payment: { method: e } }));
          }
        }
        function zn(e, t = !1) {
          t &&
            ((0, ne.tapFeel)('success'),
            Ht(
              wt
                ? (0, D.L)(
                    '\u0645\u0634\u062a\u0631\u06cc \xab{name}\xbb \u0630\u062e\u06cc\u0631\u0647 \u0634\u062f',
                    { name: e.name },
                  )
                : (0, D.L)(
                    '\u0641\u0631\u0648\u0634\u0646\u062f\u0647 \xab{name}\xbb \u0630\u062e\u06cc\u0631\u0647 \u0634\u062f',
                    { name: e.name },
                  ),
            ));
          const n = pt || In;
          (Dn(),
            qe({
              contactId: e.id,
              payment: {
                method: n,
                ...('cheque' === n ? { cheque: { dueDate: ue(Ee) } } : {}),
              },
            }),
            et(e.name),
            Ve(''),
            mt(!1),
            Ae('cheque' === n ? 'pay' : null),
            ht('cheque' === n),
            ft(''));
        }
        function Pn(e) {
          (Ve(e), Dn(), qe(null), et(''), mt(!1), ft(''), Ae(null));
        }
        const Tn = Te ? Q?.find((e) => e.id === Te.contactId) : void 0,
          qn = (0, W.customerName)(Te ? Tn?.name || Ze : '', Te ? '' : Me),
          En = !!Tn?.favorite,
          _n = Tn?.balanceToman ?? 0;
        (0, t.useEffect)(() => {
          Tn?.name && Tn.name !== Ze && et(Tn.name);
        }, [Tn?.name]);
        const Nn = (0, t.useMemo)(
            () => (0, W.previewCart)(we, Qe, wt, un),
            [we, Qe, wt, un],
          ),
          [On, An] = (0, t.useState)(null),
          [Fn, Wn] = (0, t.useState)(!1),
          Bn = wt ? Te?.contactId : void 0,
          Hn = (0, G.useClubLocked)(),
          [Mn, Vn] = (0, t.useState)(''),
          [Un, Gn] = (0, t.useState)(0);
        (0, t.useEffect)(() => {
          if ((An(null), Wn(!1), Vn(''), !Bn || Hn)) return;
          let e = !0;
          return (
            (0, V.readClubMember)(r, Bn)
              .then((t) => {
                e &&
                  t.club.enabled &&
                  An({
                    rule: t.club,
                    points: t.member.points,
                    member: !1 !== t.member.isMember,
                    rewards: t.club.rewards || [],
                  });
              })
              .catch(() => {}),
            () => {
              e = !1;
            }
          );
        }, [Bn, r.id, Hn, Un]);
        const [Jn, $n] = (0, t.useState)(!1),
          [Kn, Xn] = (0, t.useState)(!1),
          [Qn, Yn] = (0, t.useState)(!1);
        (0, t.useEffect)(() => {
          if (!wt || Hn || !(0, U.canAddClubMember)(r)) return void $n(!1);
          let e = !0;
          return (
            (0, V.clubIsOn)(r).then((t) => {
              e && $n(t);
            }),
            () => {
              e = !1;
            }
          );
        }, [wt, r.id, Hn]);
        const Zn = wt && Jn && (!Te || (!!On && !On.member));
        async function eo() {
          if (!Qn) {
            if (!Te) return (Xn(!0), void Ae('club-join'));
            Yn(!0);
            try {
              const e = await (0, V.joinClub)(r, { contactId: Te.contactId });
              ((0, ne.tapFeel)('success'),
                Ht((0, U.joinLine)(e)),
                An((e) => e && { ...e, member: !0 }));
            } catch (e) {
              We((0, I.basketError)(e).text);
            } finally {
              Yn(!1);
            }
          }
        }
        const to = On
            ? (0, K.pickedReward)(On.rewards, Mn, On.points, Nn.total)
            : null,
          no = to
            ? to.points
            : On && Fn && !On.rewards.length
              ? (0, J.usablePoints)(On.points, Nn.total, On.rule)
              : 0,
          oo = to
            ? (0, $.rewardDiscount)(to, Nn.total)
            : On && no
              ? (0, J.pointsValue)(no, On.rule)
              : 0,
          ro = Nn.total - oo,
          { data: io } = (0, j.useSwr)(
            wt ? (0, j.scoped)(r.id, 'notebook-shop') : null,
            () => (0, w.readNotebookShop)(r),
          ),
          so = (0, t.useMemo)(
            () =>
              (wt &&
                ro > 0 &&
                (0, p.receiptTotals)(
                  { totalToman: ro, lines: [] },
                  io?.settings?.receiptExtras || [],
                )?.extras) ||
              [],
            [wt, ro, io],
          ),
          ao = ro + so.reduce((e, t) => e + t.amount, 0),
          co = (0, t.useMemo)(
            () =>
              wt
                ? (0, W.cartShortages)(we).map((e) => ({
                    productId: e.product.id,
                    name: e.product.name,
                    unit: e.unit,
                    stock: e.stock,
                    wanted: e.need,
                    after: Math.round(1e3 * (e.stock - e.need)) / 1e3,
                  }))
                : [],
            [we, u.products, wt],
          );
        function lo() {
          const e = wt && un ? (0, m.cleanDiscount)(Qe) : null,
            t = wt
              ? (0, W.customerBody)({
                  contactId: Te?.contactId,
                  buyerName: Me,
                  method: In,
                  paidToman: Te?.payment.paidToman,
                  cheque: Te?.payment.cheque,
                })
              : {
                  ...(Te
                    ? { contactId: Te.contactId }
                    : Me.trim()
                      ? { supplierName: Me.trim().slice(0, 60) }
                      : {}),
                  payment: Te?.payment || { method: ze },
                };
          return {
            lines: (0, W.bodyLines)(we, wt, un),
            ...(e ? { invoiceDiscount: e } : {}),
            ...t,
            ...(wt && Te && no > 0
              ? {
                  club: to
                    ? { rewardId: to.id, shownToman: oo }
                    : { points: no },
                }
              : {}),
            ...(Ue ? { occurredAt: Ue } : {}),
          };
        }
        async function uo(e) {
          const t = we.filter((e) => (0, W.isNewProduct)(e.product));
          for (let n = 0; n < t.length; n++) {
            const o = t[n];
            try {
              await (0, w.createProduct)(
                r,
                (0, W.realId)(o.product),
                (0, W.newProductBody)(o),
                e + '-p' + n,
              );
            } catch (e) {
              if (
                e instanceof k.ApiError &&
                409 === e.status &&
                'version_conflict' === e.message
              )
                continue;
              if (e instanceof k.ApiError && 'name_taken' === e.message)
                throw new ge(o.product.name);
              throw e;
            }
          }
        }
        async function mo(e) {
          if (!we.length || Dt.current) return;
          const t = It.current;
          ((It.current = !1), (Dt.current = !0), He(!0), We(''));
          try {
            wt || (await uo(e.key));
            const n = wt
              ? (
                  await (0, z.withOversell)(
                    (t) =>
                      (0, w.postSale)(
                        r,
                        t ? { ...e.body, ...(0, z.oversellMark)(t) } : e.body,
                        e.key,
                      ),
                    {
                      verb: 'invoice',
                      known: co,
                      mode: (0, R.oversellMode)(io?.settings),
                    },
                  )
                ).sale
              : (await (0, w.postPurchase)(r, e.body, e.key)).purchase;
            Lt.current = null;
            const o = an().filter((e) => e.id !== Ke && e.lines.length),
              i = (0, A.storeCarts)(o, o[0]?.id || '');
            if (
              ((i ? N.default.setItem(Zt, i) : N.default.removeItem(Zt)).catch(
                () => {},
              ),
              qn)
            ) {
              const e = (0, W.rememberCustomer)(
                bt,
                Te ? { id: Te.contactId, name: qn } : { name: qn },
              );
              (gt(e), N.default.setItem(en, JSON.stringify(e)).catch(() => {}));
            }
            ($e(o),
              rn(o[0] || (0, A.emptyCart)((0, k.randomUUID)())),
              je?.(),
              (0, ne.tapFeel)('success'),
              t ? (te.printIntent.ask(n.id), ke(n)) : Vt(n));
          } catch (t) {
            if (t instanceof ge)
              return (
                cn(null),
                je?.(),
                void We(
                  (0, D.L)(
                    '\u06a9\u0627\u0644\u0627\u06cc\u06cc \u0628\u0647 \u0646\u0627\u0645 \xab{name}\xbb \u0647\u0645\u06cc\u0646 \u062d\u0627\u0644\u0627 \u062f\u0631 \u0627\u0646\u0628\u0627\u0631 \u0647\u0633\u062a\u061b \u0627\u06cc\u0646 \u0631\u062f\u06cc\u0641 \u0631\u0627 \u062d\u0630\u0641 \u06a9\u0646 \u0648 \u0647\u0645\u0627\u0646 \u06a9\u0627\u0644\u0627 \u0631\u0627 \u0627\u0632 \xab\u0627\u0641\u0632\u0648\u062f\u0646 \u06a9\u0627\u0644\u0627\xbb \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646.',
                    { name: t.product },
                  ),
                )
              );
            if ((0, z.isOversellCancel)(t)) return void cn(null);
            if (
              wt &&
              t instanceof k.ApiError &&
              'insufficient_stock' === t.message
            )
              return (
                cn(null),
                void We(
                  (0, P.stockShortageMessage)(t) || (0, I.basketError)(t).text,
                )
              );
            if (
              t instanceof k.ApiError &&
              ('club_reward_gone' === t.message ||
                'club_reward_min_total' === t.message)
            )
              return (
                cn(null),
                Gn((e) => e + 1),
                void We((0, I.basketError)(t).text)
              );
            if (t instanceof k.ApiError && (0, G.isClubLockError)(t))
              return (
                cn(null),
                An(null),
                Wn(!1),
                void We(
                  (0, D.L)(
                    '\u0628\u0627\u0634\u06af\u0627\u0647 \u0645\u0634\u062a\u0631\u06cc\u0627\u0646 \u0645\u062e\u0635\u0648\u0635 \u0637\u0631\u062d \u067e\u0644\u0627\u0633 \u0627\u0633\u062a\u061b \u0641\u0627\u06a9\u062a\u0648\u0631 \u062b\u0628\u062a \u0646\u0634\u062f. \u0627\u0645\u062a\u06cc\u0627\u0632 \u0628\u0631\u062f\u0627\u0634\u062a\u0647 \u0634\u062f\u061b \u062f\u0648\u0628\u0627\u0631\u0647 \xab\u062b\u0628\u062a \u0641\u0627\u06a9\u062a\u0648\u0631\xbb \u0631\u0627 \u0628\u0632\u0646.',
                  ),
                )
              );
            if (
              t instanceof k.ApiError &&
              403 === t.status &&
              'discount_not_allowed' === t.message
            )
              return (
                cn(null),
                void We(
                  (0, D.L)(
                    '\u0627\u06cc\u0646 \u062a\u062e\u0641\u06cc\u0641 \u0627\u0632 \u0627\u062c\u0627\u0632\u0647\u0654 \u0634\u0645\u0627 \u0628\u06cc\u0634\u062a\u0631 \u0627\u0633\u062a\u061b \u06a9\u0645\u062a\u0631\u0634 \u06a9\u0646 \u06cc\u0627 \u0627\u0632 \u0645\u062f\u06cc\u0631 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0628\u062e\u0648\u0627\u0647.',
                  ),
                )
              );
            const n = (0, I.basketError)(t);
            (cn(n.retry ? e : null), n.proGate && Le(), We(n.text));
          } finally {
            ((Dt.current = !1), He(!1));
          }
        }
        function po(e = !1) {
          try {
            const t =
              wt && ln
                ? we.find(
                    (e) => !(Number((0, W.normalizedLine)(e, wt).price) > 0),
                  )
                : void 0;
            if (t)
              return void We(
                (0, D.L)(
                  '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634 \xab{name}\xbb \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u061b \u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a\u060c \u0641\u0631\u0648\u0634 \u0648 \u0633\u0648\u062f \u0627\u0645\u0631\u0648\u0632 \u062f\u0631\u0633\u062a \u062d\u0633\u0627\u0628 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f.',
                  { name: t.product.name },
                ),
              );
            if ((0, W.needsCustomer)(In) && !Te) return (ft(In), void mt(!0));
            if ('cheque' === Te?.payment.method && !Te.payment.cheque)
              return void ht(!0);
            if (un && (0, W.overLimit)(Nn, dn))
              return void We(
                (0, D.L)(
                  '\u062a\u062e\u0641\u06cc\u0641 \u0627\u06cc\u0646 \u0641\u0627\u06a9\u062a\u0648\u0631 \u0627\u0632 \u0633\u0642\u0641 \u0634\u0645\u0627 ({n}\u066a) \u0628\u06cc\u0634\u062a\u0631 \u0627\u0633\u062a\u061b \u06a9\u0645\u062a\u0631\u0634 \u06a9\u0646 \u06cc\u0627 \u0627\u0632 \u0645\u062f\u06cc\u0631 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0628\u062e\u0648\u0627\u0647.',
                  { n: (0, D.localDigits)(dn) },
                ),
              );
            const n = lo(),
              o = Lt.current,
              r =
                o && JSON.stringify(o.body) === JSON.stringify(n)
                  ? o
                  : { key: (0, k.randomUUID)(), body: n };
            It.current = e;
            const i = !wt && x ? (0, W.missingCostLines)(we) : [];
            if (i.length)
              return void Qt({
                title: (0, D.L)(
                  '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f \u0646\u062f\u0627\u0631\u062f',
                ),
                text:
                  (0, D.L)(
                    '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f \u0627\u06cc\u0646 \u06a9\u0627\u0644\u0627 \u0631\u0627 \u0646\u0646\u0648\u0634\u062a\u06cc\u061b \u0628\u0639\u062f\u0627\u064b \u0647\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f \u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f',
                  ) +
                  ': ' +
                  i.map((e) => e.product.name).join('\u060c '),
                ok: (0, D.L)(
                  '\u062b\u0628\u062a \u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a',
                ),
                tone: 'accent',
                run: () => {
                  mo(r);
                },
              });
            mo(r);
          } catch (e) {
            We(
              e instanceof Error && 'quantity_too_small' === e.message
                ? E.notebookW5Fa.quantityTooSmall
                : E.notebookW5Fa.invalidBasket,
            );
          }
        }
        const fo = an().filter((e) => e.lines.length || e.id === Ke),
          yo = fo.filter((e) => e.lines.length).length;
        function ho(e) {
          if (e === Ke || Dt.current) return;
          const t = an().filter((t) => t.lines.length || t.id === e),
            n = t.find((t) => t.id === e) || (0, A.emptyCart)(e);
          ($e(t.some((t) => t.id === e) ? t : [...t, n]),
            rn(n),
            ct(''),
            Vt(null));
        }
        function bo() {
          return (
            !Dt.current &&
            (yo >= A.MAX_OPEN_CARTS
              ? (We(
                  (0, D.L)(
                    '\u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 {n} \u0641\u0627\u06a9\u062a\u0648\u0631 \u0628\u0627\u0632 \u0646\u0645\u06cc\u200c\u0645\u0627\u0646\u062f\u061b \u06cc\u06a9\u06cc \u0631\u0627 \u0628\u0628\u0646\u062f \u06cc\u0627 \u062d\u0630\u0641 \u06a9\u0646.',
                    { n: (0, D.localDigits)(A.MAX_OPEN_CARTS) },
                  ),
                ),
                !1)
              : (ho((0, k.randomUUID)()), !0))
          );
        }
        const [go, xo] = (0, t.useState)(0),
          vo = (0, t.useRef)('');
        ((0, t.useEffect)(() => {
          if (!he || !tn.current || vo.current === he.contactId) return;
          vo.current = he.contactId;
          const e = an().find((e) => e.account?.contactId === he.contactId);
          e
            ? ho(e.id)
            : (we.length && !bo()) ||
              (qe({ contactId: he.contactId, payment: { method: 'credit' } }),
              et(he.name),
              Dn());
        }, [he?.contactId, go]),
          (0, t.useEffect)(() => {
            if (!tn.current) return;
            const e = F.basketAdds.take(wt ? 'sale' : 'receive'),
              t =
                e &&
                u.products.find((t) => t.id === e.productId && !t.archivedAt);
            t && hn(t);
          }, [go]));
        const Co = (ot && we.find((e) => e.id === ot)) || null,
          So = lt || ut || Kn || yt || !!ot || it || !!zt,
          ko =
            wt && Ct[0]
              ? u.products.find(
                  (e) =>
                    e.id === Ct[0] &&
                    !e.archivedAt &&
                    (0, W.tierOptions)(e).length > 1,
                )
              : void 0,
          jo = !!ko && !So;
        (0, t.useEffect)(() => {
          Ct[0] && !ko && St((e) => e.slice(1));
        }, [Ct, ko]);
        const Lo = !!Oe || Be || So || jo,
          Do = (0, v.useKeyboardVisible)(),
          [Io, wo] = (0, t.useState)(!1),
          Ro = ln && (wt || x),
          zo = {
            minHeight: 34,
            paddingHorizontal: 12,
            borderRadius: 17,
            borderWidth: 1,
            borderColor: Ie.line,
            justifyContent: 'center',
          },
          Po = (0, t.useMemo)(() => {
            const e = new Map();
            for (const t of we) {
              const n = Number(t.quantity);
              Number.isFinite(n) &&
                e.set(t.product.id, (e.get(t.product.id) || 0) + n);
            }
            return e;
          }, [we]),
          To = (e) =>
            Ro
              ? wt
                ? (e.price ?? pn.get(e.id)?.price)
                : (e.avgCost ?? e.costPrice)
              : void 0,
          qo = De ? be : be.slice(0, 2),
          Eo =
            'cheque' === Te?.payment.method
              ? [
                  Te.payment.paidToman
                    ? (0, _.money)(Te.payment.paidToman)
                    : (0, D.L)(
                        '\u06a9\u0644 \u0641\u0627\u06a9\u062a\u0648\u0631',
                      ),
                  Te.payment.cheque?.dueDate
                    ? (0, D.L)('\u0633\u0631\u0631\u0633\u06cc\u062f {d}', {
                        d: ve(Te.payment.cheque.dueDate, Ee),
                      })
                    : '',
                  Te.payment.cheque?.number
                    ? (0, D.L)('\u0634\u0645\u0627\u0631\u0647\u0654 {n}', {
                        n: Te.payment.cheque.number,
                      })
                    : '',
                  Te.payment.cheque?.bank || '',
                ]
                  .filter(Boolean)
                  .join(' \xb7 ')
              : '',
          _o = (0, t.useRef)({
            submit: po,
            stepLast: Sn,
            onClose: Se,
            busy: !1,
            sheet: !1,
          });
        ((_o.current = {
          submit: po,
          stepLast: Sn,
          onClose: Se,
          busy: Be,
          sheet: So || jo,
        }),
          (0, t.useEffect)(() => {
            if (!Gt || 'undefined' == typeof window) return;
            const e = (e) => {
              const t = _o.current,
                n = e.target,
                o = n?.getAttribute('data-testid') || '',
                r =
                  !!n &&
                  ('TEXTAREA' === n.tagName ||
                    ('INPUT' === n.tagName &&
                      'barcode-wedge' !== o &&
                      'till-search' !== o)),
                i = (0, ae.basketKey)(e, {
                  typing: r,
                  sheetOpen: t.sheet || (0, se.modalOpen)(),
                });
              i &&
                (e.preventDefault(),
                'save' !== i
                  ? 'close' !== i
                    ? t.stepLast('plus' === i ? 1 : -1)
                    : t.onClose()
                  : !t.busy && Rt.current.length && t.submit());
            };
            return (
              window.addEventListener('keydown', e, !0),
              () => window.removeEventListener('keydown', e, !0)
            );
          }, [Gt]));
        const No = Gt ? Math.round(Math.min(460, Math.max(360, 0.32 * Ut))) : 0;
        return (0, le.jsxs)(c.default, {
          style: Gt
            ? { flex: 1, width: '100%', flexDirection: 'row-reverse', gap: 20 }
            : { flex: 1, width: '100%', maxWidth: 920, alignSelf: 'center' },
          children: [
            Yt,
            (0, le.jsx)(q.WedgeInput, {
              enabled: !Lo,
              focusKey: we.map((e) => e.quantity).join('|'),
              onCode: (e) => kn(e),
            }),
            (0, le.jsxs)(c.default, {
              testID: Gt ? 'till-invoice' : void 0,
              style: Gt
                ? { width: No, flexShrink: 0, minHeight: 0 }
                : { flex: 1, minHeight: 0 },
              children: [
                (0, le.jsxs)(c.default, {
                  style: {
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    gap: 10,
                    paddingBottom: 6,
                    paddingTop: Ut >= 700 ? 10 : 0,
                  },
                  children: [
                    (0, le.jsxs)(i.default, {
                      testID: 'basket-close',
                      accessibilityRole: 'button',
                      onPress: Se,
                      hitSlop: 6,
                      style: ({ pressed: e }) => ({
                        ...zo,
                        minHeight: 40,
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        gap: 4,
                        backgroundColor: Ie.soft,
                        borderColor: Ie.soft,
                        opacity: e ? 0.75 : 1,
                      }),
                      children: [
                        (0, le.jsx)(g.Icon, {
                          name: 'close',
                          size: 16,
                          color: Ie.text,
                        }),
                        (0, le.jsx)(C.Copy, {
                          style: { fontSize: 14 },
                          children: E.notebookW5Fa.close,
                        }),
                      ],
                    }),
                    (0, le.jsx)(C.Copy, {
                      accessibilityRole: 'header',
                      style: {
                        flex: 1,
                        fontSize: 20,
                        lineHeight: 32,
                        fontFamily: 'Vazirmatn_700Bold',
                      },
                      children:
                        e || wt
                          ? (0, D.L)(
                              '\u0641\u0627\u06a9\u062a\u0648\u0631 \u0628\u0627\u0632',
                            )
                          : E.notebookW5Fa.quickReceive,
                    }),
                  ],
                }),
                e &&
                  (0, le.jsx)(c.default, {
                    testID: 'invoice-sides',
                    accessibilityRole: 'tablist',
                    style: {
                      flexDirection: 'row-reverse',
                      gap: 8,
                      marginBottom: 8,
                    },
                    children: [
                      [
                        'sale',
                        (0, D.L)(
                          '\u0641\u0627\u06a9\u062a\u0648\u0631 \u0641\u0631\u0648\u0634',
                        ),
                      ],
                      [
                        'receive',
                        (0, D.L)(
                          '\u0641\u0627\u06a9\u062a\u0648\u0631 \u062e\u0631\u06cc\u062f',
                        ),
                      ],
                    ].map(([t, n]) => {
                      const o = e.value === t;
                      return (0, le.jsx)(
                        i.default,
                        {
                          testID: 'invoice-side-' + t,
                          accessibilityRole: 'tab',
                          accessibilityState: { selected: o },
                          onPress: () => {
                            o || Dt.current || e.onChange(t);
                          },
                          style: ({ pressed: e }) => ({
                            flex: 1,
                            minHeight: 44,
                            paddingHorizontal: 2,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 14,
                            backgroundColor: o ? Ie.accentSoft : Ie.surface,
                            borderWidth: o ? 1.5 : 1,
                            borderColor: o ? Ie.accent : Ie.line,
                            opacity: e ? 0.75 : 1,
                          }),
                          children: (0, le.jsx)(C.Copy, {
                            numberOfLines: 1,
                            style: {
                              fontSize: 14,
                              lineHeight: 22,
                              color: o ? Ie.accent : Ie.text,
                              fontFamily: o
                                ? 'Vazirmatn_700Bold'
                                : 'Vazirmatn_400Regular',
                            },
                            children: n,
                          }),
                        },
                        t,
                      );
                    }),
                  }),
                yo > 0 &&
                  (0, le.jsx)(M.OpenInvoices, {
                    carts: fo,
                    active: Ke,
                    sale: wt,
                    canAdd: !!we.length && yo < A.MAX_OPEN_CARTS,
                    onPick: ho,
                    onNew: () => {
                      bo();
                    },
                  }),
                (0, le.jsxs)(i.default, {
                  testID: 'basket-customer-open',
                  accessibilityRole: 'button',
                  accessibilityLabel: wt
                    ? (0, D.L)('\u0645\u0634\u062a\u0631\u06cc: {name}', {
                        name:
                          qn ||
                          (0, D.L)(
                            '\u0645\u0634\u062a\u0631\u06cc \u062d\u0636\u0648\u0631\u06cc',
                          ),
                      })
                    : (0, D.L)(
                        '\u0641\u0631\u0648\u0634\u0646\u062f\u0647: {name}',
                        {
                          name:
                            qn ||
                            (0, D.L)(
                              '\u0628\u062f\u0648\u0646 \u0646\u0627\u0645',
                            ),
                        },
                      ),
                  onPress: () => {
                    (ft(''), mt(!0), Ae('customer'));
                  },
                  style: ({ pressed: e }) => ({
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    gap: 8,
                    minHeight: 48,
                    paddingHorizontal: 12,
                    marginBottom: 8,
                    borderRadius: 14,
                    borderWidth: 1,
                    borderColor: Ie.line,
                    backgroundColor: e ? Ie.soft : Ie.surface,
                  }),
                  children: [
                    (0, le.jsx)(g.Icon, {
                      name: 'user',
                      size: 18,
                      color: Ie.muted,
                    }),
                    (0, le.jsxs)(c.default, {
                      testID: Te ? 'basket-customer' : void 0,
                      style: {
                        flex: 1,
                        minWidth: 0,
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        columnGap: 6,
                      },
                      children: [
                        (0, le.jsxs)(C.Copy, {
                          numberOfLines: 1,
                          style: { fontSize: 14, flexShrink: 1 },
                          children: [
                            (0, le.jsxs)(C.Copy, {
                              style: { fontSize: 14, color: Ie.muted },
                              children: [
                                wt
                                  ? (0, D.L)('\u0645\u0634\u062a\u0631\u06cc:')
                                  : (0, D.L)(
                                      '\u0641\u0631\u0648\u0634\u0646\u062f\u0647:',
                                    ),
                                ' ',
                              ],
                            }),
                            (0, le.jsx)(C.Copy, {
                              testID: 'basket-customer-name',
                              style: {
                                fontSize: 14,
                                fontFamily: 'Vazirmatn_600SemiBold',
                                color: qn ? Ie.text : Ie.muted,
                              },
                              children:
                                qn ||
                                (wt
                                  ? (0, D.L)(
                                      '\u0645\u0634\u062a\u0631\u06cc \u062d\u0636\u0648\u0631\u06cc',
                                    )
                                  : (0, D.L)(
                                      '\u0628\u062f\u0648\u0646 \u0646\u0627\u0645',
                                    )),
                            }),
                          ],
                        }),
                        En &&
                          (0, le.jsx)(c.default, {
                            style: {
                              paddingHorizontal: 7,
                              borderRadius: 8,
                              backgroundColor: Ie.accent,
                            },
                            children: (0, le.jsx)(C.Copy, {
                              style: {
                                fontSize: 10,
                                lineHeight: 18,
                                color: Ie.onAccent,
                              },
                              children: (0, D.L)(
                                '\u0647\u0645\u06cc\u0634\u06af\u06cc',
                              ),
                            }),
                          }),
                        wt &&
                          _n > 0 &&
                          (0, le.jsxs)(C.Copy, {
                            testID: 'basket-customer-debt',
                            style: { fontSize: 11, color: Ie.danger },
                            children: [
                              (0, D.L)(
                                '\u0628\u062f\u0647\u06cc \u0642\u0628\u0644\u06cc:',
                              ),
                              ' ',
                              (0, _.money)(_n),
                            ],
                          }),
                        wt &&
                          !!On &&
                          On.member &&
                          (0, le.jsx)(C.Copy, {
                            testID: 'basket-club-points',
                            style: { fontSize: 11, color: Ie.accent },
                            children:
                              no > 0
                                ? (0, D.L)(
                                    '\u0627\u0645\u062a\u06cc\u0627\u0632 \u0628\u0627\u0634\u06af\u0627\u0647: {n} \xb7 \u0645\u06cc\u200c\u0645\u0627\u0646\u062f {left}',
                                    {
                                      n: me(On.points),
                                      left: me(Math.max(0, On.points - no)),
                                    },
                                  )
                                : (0, D.L)(
                                    '\u0627\u0645\u062a\u06cc\u0627\u0632 \u0628\u0627\u0634\u06af\u0627\u0647: {n}',
                                    { n: me(On.points) },
                                  ),
                          }),
                      ],
                    }),
                    Zn &&
                      (0, le.jsx)(i.default, {
                        testID: 'basket-club-join',
                        accessibilityRole: 'button',
                        accessibilityLabel: Te
                          ? (0, D.L)(
                              '\u0639\u0636\u0648\u06cc\u062a \xab{name}\xbb \u062f\u0631 \u0628\u0627\u0634\u06af\u0627\u0647',
                              { name: qn },
                            )
                          : (0, D.L)(
                              '\u0627\u0641\u0632\u0648\u062f\u0646 \u0645\u0634\u062a\u0631\u06cc \u0628\u0647 \u0628\u0627\u0634\u06af\u0627\u0647',
                            ),
                        disabled: Qn,
                        onPress: () => {
                          eo();
                        },
                        hitSlop: 4,
                        style: ({ pressed: e }) => ({
                          minHeight: 32,
                          paddingHorizontal: 10,
                          borderRadius: 16,
                          justifyContent: 'center',
                          borderWidth: 1,
                          borderColor: Ie.accent,
                          backgroundColor: Ie.surface,
                          opacity: e || Qn ? 0.6 : 1,
                        }),
                        children: (0, le.jsx)(C.Copy, {
                          numberOfLines: 1,
                          style: {
                            fontSize: 12,
                            color: Ie.accent,
                            fontFamily: 'Vazirmatn_600SemiBold',
                          },
                          children: (0, D.L)(
                            '+ \u0639\u0636\u0648 \u0628\u0627\u0634\u06af\u0627\u0647',
                          ),
                        }),
                      }),
                    (0, le.jsx)(c.default, {
                      style: {
                        width: 32,
                        height: 32,
                        borderRadius: 16,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: Ie.accentSoft,
                      },
                      children: (0, le.jsx)(g.Icon, {
                        name: qn ? 'edit' : 'plus',
                        size: 16,
                        color: Ie.accent,
                      }),
                    }),
                  ],
                }),
                (0, le.jsxs)(d.ScrollView, {
                  ref: Kt,
                  keyboardShouldPersistTaps: 'handled',
                  contentContainerStyle: { gap: 8, paddingBottom: 12 },
                  children: [
                    we.length
                      ? (0, le.jsx)(C.Card, {
                          testID: 'basket-lines',
                          style: { paddingVertical: 0, paddingHorizontal: 12 },
                          children: we.map((e, t) => {
                            const n = Nn.lines[t],
                              o = n?.gross || 0,
                              r = n?.lineDiscount || 0,
                              l = wt ? e.unitPrice : e.unitCost,
                              d =
                                e.product.packUnit && e.product.packSize
                                  ? (0, D.L)(
                                      '{unit} {n}\u062a\u0627\u06cc\u06cc',
                                      {
                                        unit:
                                          E.notebookFa.units[
                                            e.product.packUnit
                                          ] || e.product.packUnit,
                                        n: (0, D.localDigits)(
                                          e.product.packSize,
                                        ),
                                      },
                                    )
                                  : '',
                              m = e.product.supplier,
                              p = wt
                                ? u.products.find((t) => t.id === e.product.id)
                                : void 0,
                              f =
                                !!p &&
                                Ro &&
                                mn &&
                                (0, W.tierOptions)(p).length > 1,
                              y = f && p ? (0, W.lineTierName)(e, p) : '';
                            let h =
                              Ro && l
                                ? pe(Number(l)) + (y ? ' \xb7 ' + y : '')
                                : '';
                            const b = wt && (0, ce.isWeighLine)(e);
                            if (b && Ro && l) {
                              const t = (0, ce.weighFact)(e);
                              t && (h = t + (y ? ' \xb7 ' + y : ''));
                            }
                            const x = [
                              f ? '' : h,
                              d,
                              m
                                ? (0, D.L)('\u0627\u0632 {name}', { name: m })
                                : '',
                              !wt && e.expiresAt
                                ? (0, D.L)(
                                    '\u0628\u0627 \u062a\u0627\u0631\u06cc\u062e \u0627\u0646\u0642\u0636\u0627',
                                  )
                                : '',
                            ]
                              .filter(Boolean)
                              .join(' \xb7 ');
                            return (0, le.jsxs)(
                              i.default,
                              {
                                testID: 'basket-line-' + t,
                                accessibilityRole: 'button',
                                accessibilityLabel: e.product.name,
                                onPress: () => {
                                  (rt(e.id), Ae('line-sheet'));
                                },
                                style: ({ pressed: n }) => ({
                                  flexDirection: 'row-reverse',
                                  alignItems: 'center',
                                  gap: 8,
                                  paddingVertical: 7,
                                  borderTopWidth: t
                                    ? s.default.hairlineWidth
                                    : 0,
                                  borderColor: Ie.line,
                                  opacity: n ? 0.8 : 1,
                                  ...(Gt && e.product.id === Jt
                                    ? {
                                        backgroundColor: Ie.accentSoft,
                                        marginHorizontal: -8,
                                        paddingHorizontal: 8,
                                        borderRadius: 10,
                                      }
                                    : {}),
                                }),
                                children: [
                                  (0, le.jsxs)(c.default, {
                                    style: { flex: 1, minWidth: 0, gap: 1 },
                                    children: [
                                      (0, le.jsx)(C.Copy, {
                                        numberOfLines: 1,
                                        style: {
                                          fontSize: 14,
                                          fontFamily: 'Vazirmatn_600SemiBold',
                                        },
                                        children: e.product.name,
                                      }),
                                      (0, le.jsxs)(c.default, {
                                        style: {
                                          flexDirection: 'row-reverse',
                                          flexWrap: 'wrap',
                                          alignItems: 'center',
                                          gap: 6,
                                        },
                                        children: [
                                          f &&
                                            (0, le.jsxs)(i.default, {
                                              testID: 'basket-line-tier-' + t,
                                              accessibilityRole: 'button',
                                              accessibilityLabel: (0, D.L)(
                                                '\u06a9\u062f\u0627\u0645 \u0642\u06cc\u0645\u062a\u061f',
                                              ),
                                              hitSlop: 6,
                                              onPress: () =>
                                                St((t) => [
                                                  e.product.id,
                                                  ...t.filter(
                                                    (t) => t !== e.product.id,
                                                  ),
                                                ]),
                                              style: ({ pressed: e }) => ({
                                                flexDirection: 'row-reverse',
                                                alignItems: 'center',
                                                gap: 3,
                                                opacity: e ? 0.6 : 1,
                                              }),
                                              children: [
                                                (0, le.jsx)(C.Copy, {
                                                  numberOfLines: 1,
                                                  style: {
                                                    fontSize: 11,
                                                    color: Ie.accent,
                                                  },
                                                  children:
                                                    h ||
                                                    (0, D.L)(
                                                      '\u06a9\u062f\u0627\u0645 \u0642\u06cc\u0645\u062a\u061f',
                                                    ),
                                                }),
                                                (0, le.jsx)(g.Icon, {
                                                  name: 'edit',
                                                  size: 11,
                                                  color: Ie.accent,
                                                }),
                                              ],
                                            }),
                                          !!x &&
                                            (0, le.jsx)(C.Copy, {
                                              numberOfLines: b ? 2 : 1,
                                              style: {
                                                fontSize: 11,
                                                color: Ie.muted,
                                                flexShrink: 1,
                                              },
                                              children: x,
                                            }),
                                          un &&
                                            r > 0 &&
                                            (0, le.jsx)(H.DiscountChip, {
                                              testID:
                                                'basket-line-discount-' + t,
                                              text: (0, H.discountText)(
                                                e.discount,
                                                r,
                                              ),
                                            }),
                                          (0, W.isNewProduct)(e.product) &&
                                            (0, le.jsx)(c.default, {
                                              testID: 'basket-line-new-' + t,
                                              style: {
                                                paddingHorizontal: 7,
                                                borderRadius: 8,
                                                backgroundColor: Ie.soft,
                                              },
                                              children: (0, le.jsx)(C.Copy, {
                                                style: {
                                                  fontSize: 10,
                                                  lineHeight: 18,
                                                  color: Ie.muted,
                                                },
                                                children: (0, D.L)(
                                                  '\u062c\u062f\u06cc\u062f',
                                                ),
                                              }),
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, le.jsx)(T.QtyStepper, {
                                    testID: 'basket-qty-' + t,
                                    by: b ? (0, ce.weighStep)(e) : 1,
                                    value: e.quantity,
                                    unitLabel:
                                      'piece' !== e.unit
                                        ? E.notebookFa.units[e.unit] || e.unit
                                        : '',
                                    onChange: (t) => Ln(e.id, { quantity: t }),
                                    onEditing: (t) =>
                                      Ae(t ? e.id + '-quantity' : null),
                                  }),
                                  Ro &&
                                    (0, le.jsxs)(c.default, {
                                      style: {
                                        minWidth: 72,
                                        alignItems: 'flex-start',
                                      },
                                      children: [
                                        r > 0 &&
                                          (0, le.jsx)(C.Copy, {
                                            style: {
                                              fontSize: 10,
                                              color: Ie.muted,
                                              textDecorationLine:
                                                'line-through',
                                            },
                                            children: pe(o),
                                          }),
                                        (0, le.jsx)(C.Copy, {
                                          testID: 'basket-line-amount-' + t,
                                          style: {
                                            fontSize: 14,
                                            fontFamily: 'Vazirmatn_700Bold',
                                          },
                                          children: pe(o - r),
                                        }),
                                      ],
                                    }),
                                ],
                              },
                              e.id,
                            );
                          }),
                        })
                      : (0, le.jsx)(C.Copy, {
                          testID: 'basket-empty',
                          style: {
                            fontSize: 13,
                            color: Ie.muted,
                            textAlign: 'center',
                            paddingVertical: 10,
                          },
                          children: (0, D.L)(
                            '\u0641\u0627\u06a9\u062a\u0648\u0631 \u062e\u0627\u0644\u06cc \u0627\u0633\u062a\u061b \u06a9\u0627\u0644\u0627 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646',
                          ),
                        }),
                    !Gt &&
                      (0, le.jsxs)(c.default, {
                        style: {
                          flexDirection: 'row-reverse',
                          alignItems: 'center',
                          gap: 8,
                        },
                        children: [
                          (0, le.jsxs)(i.default, {
                            testID: 'basket-add-items',
                            accessibilityRole: 'button',
                            onPress: () => {
                              (dt(!0), Ae('picker'), Vt(null));
                            },
                            style: ({ pressed: e }) => ({
                              height: 44,
                              paddingHorizontal: 18,
                              borderRadius: 22,
                              flexDirection: 'row-reverse',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: 6,
                              backgroundColor: Ie.accentSoft,
                              borderWidth: 1,
                              borderColor: Ie.accent,
                              opacity: e ? 0.8 : 1,
                            }),
                            children: [
                              (0, le.jsx)(g.Icon, {
                                name: 'plus',
                                size: 18,
                                color: Ie.accent,
                              }),
                              (0, le.jsx)(C.Copy, {
                                style: {
                                  fontSize: 15,
                                  fontFamily: 'Vazirmatn_700Bold',
                                  color: Ie.accent,
                                },
                                children: (0, D.L)(
                                  '\u0627\u0641\u0632\u0648\u062f\u0646 \u06a9\u0627\u0644\u0627',
                                ),
                              }),
                            ],
                          }),
                          (0, le.jsxs)(i.default, {
                            testID: 'basket-camera-on',
                            accessibilityRole: 'button',
                            accessibilityLabel: Io
                              ? (0, D.L)(
                                  '\u0628\u0633\u062a\u0646 \u062f\u0648\u0631\u0628\u06cc\u0646',
                                )
                              : (0, D.L)(
                                  '\u0627\u0633\u06a9\u0646 \u0628\u0627 \u062f\u0648\u0631\u0628\u06cc\u0646',
                                ),
                            accessibilityState: { selected: Io },
                            onPress: () => wo((e) => !e),
                            style: ({ pressed: e }) => ({
                              height: 44,
                              paddingHorizontal: 14,
                              borderRadius: 22,
                              flexDirection: 'row-reverse',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: 5,
                              borderWidth: 1,
                              borderColor: Io ? Ie.accent : Ie.line,
                              backgroundColor: Io ? Ie.accentSoft : Ie.surface,
                              opacity: e ? 0.75 : 1,
                            }),
                            children: [
                              (0, le.jsx)(g.Icon, {
                                name: 'scan',
                                size: 18,
                                color: Io ? Ie.accent : Ie.text,
                              }),
                              (0, le.jsx)(C.Copy, {
                                style: {
                                  fontSize: 13,
                                  color: Io ? Ie.accent : Ie.text,
                                },
                                children: Io
                                  ? (0, D.L)(
                                      '\u0628\u0633\u062a\u0646 \u0627\u0633\u06a9\u0646',
                                    )
                                  : (0, D.L)(
                                      '\u0627\u0633\u06a9\u0646 \u0628\u0627\u0631\u06a9\u062f',
                                    ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    Io &&
                      !Gt &&
                      (0, le.jsxs)(le.Fragment, {
                        children: [
                          (0, le.jsx)(f.Scanner, {
                            active: !Lo,
                            onScan: (e) => kn(e, !0),
                            onEditing: (e) => Ae(e ? 'manual-code' : null),
                            height: 120,
                          }),
                          (0, le.jsx)(C.Copy, {
                            style: { fontSize: 11, color: Ie.muted },
                            children: E.notebookW5Fa.scanHint,
                          }),
                        ],
                      }),
                    we.length > 0 &&
                      (0, le.jsxs)(c.default, {
                        style: {
                          flexDirection: 'row-reverse',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                          gap: 8,
                        },
                        children: [
                          un &&
                            (0, le.jsx)(i.default, {
                              testID: 'basket-invoice-discount',
                              accessibilityRole: 'button',
                              onPress: () => st(!0),
                              style: ({ pressed: e }) => ({
                                ...zo,
                                ...(Nn.invoiceDiscount > 0
                                  ? {
                                      borderColor: Ie.warningBorder,
                                      backgroundColor: Ie.warningSoft,
                                    }
                                  : {}),
                                opacity: e ? 0.75 : 1,
                              }),
                              children: (0, le.jsx)(C.Copy, {
                                style: {
                                  fontSize: 12,
                                  color:
                                    Nn.invoiceDiscount > 0
                                      ? Ie.warning
                                      : Ie.text,
                                },
                                children:
                                  Nn.invoiceDiscount > 0
                                    ? (0, D.L)(
                                        '\u062a\u062e\u0641\u06cc\u0641 \u06a9\u0644 \u0641\u0627\u06a9\u062a\u0648\u0631 {d}',
                                        {
                                          d: (0, H.discountText)(
                                            Qe,
                                            Nn.invoiceDiscount,
                                          ),
                                        },
                                      )
                                    : (0, D.L)(
                                        '+ \u062a\u062e\u0641\u06cc\u0641 \u06a9\u0644 \u0641\u0627\u06a9\u062a\u0648\u0631',
                                      ),
                              }),
                            }),
                          wt &&
                            !!On &&
                            On.points > 0 &&
                            !On.rewards.length &&
                            (0, le.jsx)(i.default, {
                              testID: 'basket-club-use',
                              accessibilityRole: 'switch',
                              accessibilityState: { checked: Fn },
                              onPress: () => {
                                (Wn((e) => !e), Dn());
                              },
                              style: ({ pressed: e }) => ({
                                ...zo,
                                ...(Fn
                                  ? {
                                      borderColor: Ie.accent,
                                      backgroundColor: Ie.accentSoft,
                                    }
                                  : {}),
                                opacity: e ? 0.75 : 1,
                              }),
                              children: (0, le.jsx)(C.Copy, {
                                style: {
                                  fontSize: 12,
                                  color: Fn ? Ie.accent : Ie.text,
                                },
                                children:
                                  Fn && oo > 0
                                    ? (0, D.L)(
                                        '\u0627\u0645\u062a\u06cc\u0627\u0632: {d}',
                                        { d: ye(oo) },
                                      )
                                    : (0, D.L)(
                                        '\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u0645\u062a\u06cc\u0627\u0632',
                                      ),
                              }),
                            }),
                          (0, le.jsx)(i.default, {
                            testID: 'basket-drop',
                            accessibilityRole: 'button',
                            onPress: function () {
                              Dt.current ||
                                Qt({
                                  title: (0, D.L)(
                                    '\u062d\u0630\u0641 \u0641\u0627\u06a9\u062a\u0648\u0631',
                                  ),
                                  text: (0, D.L)(
                                    '\u0627\u06cc\u0646 \u0641\u0627\u06a9\u062a\u0648\u0631 \u0647\u0646\u0648\u0632 \u062b\u0628\u062a \u0646\u0634\u062f\u0647\u061b \u062d\u0630\u0641 \u0634\u0648\u062f\u061f',
                                  ),
                                  ok: (0, D.L)('\u062d\u0630\u0641'),
                                  tone: 'danger',
                                  run: () => {
                                    const e = an().filter(
                                      (e) => e.id !== Ke && e.lines.length,
                                    );
                                    ($e(e),
                                      rn(
                                        e[0] ||
                                          (0, A.emptyCart)((0, k.randomUUID)()),
                                      ),
                                      ct(''));
                                  },
                                });
                            },
                            style: ({ pressed: e }) => ({
                              ...zo,
                              opacity: e ? 0.75 : 1,
                            }),
                            children: (0, le.jsx)(C.Copy, {
                              style: { fontSize: 12, color: Ie.danger },
                              children: wt
                                ? (0, D.L)(
                                    '\u062d\u0630\u0641 \u0627\u06cc\u0646 \u0641\u0627\u06a9\u062a\u0648\u0631',
                                  )
                                : (0, D.L)(
                                    '\u062d\u0630\u0641 \u0627\u06cc\u0646 \u0641\u0647\u0631\u0633\u062a',
                                  ),
                            }),
                          }),
                        ],
                      }),
                    wt &&
                      !!On &&
                      On.rewards.length > 0 &&
                      we.length > 0 &&
                      (0, le.jsx)(K.ClubRewardRow, {
                        rewards: On.rewards,
                        points: On.points,
                        base: Nn.total,
                        picked: to?.id || '',
                        off: oo,
                        minus: ye,
                        onPick: (e) => {
                          (Vn(e), Dn());
                        },
                      }),
                    (0, le.jsx)(
                      b.MovementDate,
                      {
                        asKey: !0,
                        id: 'basket-date',
                        label: (0, D.L)(
                          '\u062a\u0627\u0631\u06cc\u062e \u0641\u0627\u06a9\u062a\u0648\u0631',
                        ),
                        value: Ue,
                        onOpen: (e) => {
                          (Ae(e ? 'invoice-date' : null),
                            e &&
                              setTimeout(
                                () => Kt.current?.scrollToEnd({ animated: !0 }),
                                80,
                              ));
                        },
                        onChange: (e) => {
                          (Dn(), Ge(e));
                        },
                      },
                      Ke,
                    ),
                    Oe &&
                      (0, q.wedgeCanFocus)() &&
                      !ot &&
                      !lt &&
                      !ut &&
                      !Kn &&
                      !yt &&
                      (0, le.jsx)(C.Button, {
                        secondary: !0,
                        onPress: () => Ae(null),
                        children: E.notebookW5Fa.resumeScanner,
                      }),
                  ],
                }),
                Mt
                  ? (0, le.jsx)(
                      xe,
                      {
                        document: Mt,
                        sale: wt,
                        onDismiss: () => Vt(null),
                        onView: () => {
                          const e = Mt;
                          (Vt(null), ke(e));
                        },
                        onPrint: () => {
                          const e = Mt;
                          (Vt(null), te.printIntent.ask(e.id), ke(e));
                        },
                        onNew: () => Vt(null),
                      },
                      Mt.id,
                    )
                  : (0, le.jsxs)(C.Card, {
                      testID: 'basket-summary',
                      style: {
                        marginTop: 4,
                        padding: 12,
                        gap: 8,
                        borderColor: Ie.accent,
                      },
                      children: [
                        (!Do || (0, W.needsCustomer)(In)) &&
                          (0, le.jsx)(c.default, {
                            testID: 'basket-payment',
                            accessibilityRole: 'radiogroup',
                            style: {
                              flexDirection: 'row-reverse',
                              padding: 3,
                              gap: 3,
                              borderRadius: 13,
                              backgroundColor: Ie.soft,
                            },
                            children: qo.map((e) => {
                              const t = In === e.value;
                              return (0, le.jsx)(
                                i.default,
                                {
                                  testID: 'pay-' + e.value,
                                  accessibilityRole: 'radio',
                                  accessibilityState: { selected: t },
                                  onPress: () => Rn(e.value),
                                  style: ({ pressed: e }) => ({
                                    flex: 1,
                                    minHeight: 38,
                                    paddingHorizontal: 2,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 10,
                                    backgroundColor: t
                                      ? Ie.surface
                                      : 'transparent',
                                    borderWidth: t ? 1 : 0,
                                    borderColor: Ie.accent,
                                    opacity: e ? 0.75 : 1,
                                  }),
                                  children: (0, le.jsx)(C.Copy, {
                                    numberOfLines: 1,
                                    style: {
                                      fontSize: 13,
                                      lineHeight: 20,
                                      color: t ? Ie.accent : Ie.text,
                                      fontFamily: t
                                        ? 'Vazirmatn_700Bold'
                                        : 'Vazirmatn_400Regular',
                                    },
                                    children: e.label(),
                                  }),
                                },
                                e.value,
                              );
                            }),
                          }),
                        (0, W.needsCustomer)(In) &&
                          !!Te &&
                          (0, le.jsxs)(i.default, {
                            testID: 'basket-pay-details',
                            accessibilityRole: 'button',
                            onPress: () => {
                              (ht(!0), Ae('pay'));
                            },
                            style: {
                              flexDirection: 'row-reverse',
                              alignItems: 'center',
                              gap: 6,
                              minHeight: 30,
                            },
                            children: [
                              (0, le.jsx)(g.Icon, {
                                name: 'cheque' === In ? 'cheque' : 'wallet',
                                size: 16,
                                color: Ie.muted,
                              }),
                              (0, le.jsx)(C.Copy, {
                                numberOfLines: 1,
                                style: {
                                  flex: 1,
                                  fontSize: 12,
                                  color: Ie.muted,
                                },
                                children:
                                  'cheque' === In
                                    ? (0, D.L)('\u0686\u06a9: {d}', { d: Eo })
                                    : Te.payment.paidToman
                                      ? (0, D.L)(
                                          '\u0646\u0633\u06cc\u0647\u061b \u0647\u0645\u06cc\u0646 \u0627\u0644\u0627\u0646 {n} \u067e\u0631\u062f\u0627\u062e\u062a \u0634\u062f',
                                          {
                                            n: (0, _.money)(
                                              Te.payment.paidToman,
                                            ),
                                          },
                                        )
                                      : (0, D.L)(
                                          '\u0646\u0633\u06cc\u0647: \u0647\u0645\u0647\u0654 \u0645\u0628\u0644\u063a \u0628\u0647 \u062d\u0633\u0627\u0628 {name}',
                                          {
                                            name:
                                              qn ||
                                              (wt
                                                ? (0, D.L)(
                                                    '\u0645\u0634\u062a\u0631\u06cc',
                                                  )
                                                : (0, D.L)(
                                                    '\u0641\u0631\u0648\u0634\u0646\u062f\u0647',
                                                  )),
                                          },
                                        ),
                              }),
                              (0, le.jsx)(C.Copy, {
                                style: { fontSize: 12, color: Ie.accent },
                                children: (0, D.L)(
                                  '\u0648\u06cc\u0631\u0627\u06cc\u0634',
                                ),
                              }),
                            ],
                          }),
                        Ro &&
                          wt &&
                          !Do &&
                          we.length > 0 &&
                          (0, le.jsxs)(c.default, {
                            style: C.common.between,
                            children: [
                              (0, le.jsx)(C.Copy, {
                                style: { fontSize: 12, color: Ie.muted },
                                children: (0, D.L)(
                                  '\u062c\u0645\u0639 {n} \u0642\u0644\u0645',
                                  { n: (0, D.localDigits)(we.length) },
                                ),
                              }),
                              (0, le.jsx)(C.Copy, {
                                style: { fontSize: 12, color: Ie.muted },
                                children: pe(Nn.gross),
                              }),
                            ],
                          }),
                        Ro &&
                          wt &&
                          Nn.discount > 0 &&
                          !Do &&
                          (0, le.jsxs)(c.default, {
                            style: C.common.between,
                            children: [
                              (0, le.jsx)(C.Copy, {
                                style: { fontSize: 12, color: Ie.muted },
                                children: (0, D.L)(
                                  '\u062a\u062e\u0641\u06cc\u0641',
                                ),
                              }),
                              (0, le.jsx)(C.Copy, {
                                testID: 'basket-discount',
                                style: { fontSize: 12, color: Ie.danger },
                                children: ye(Nn.discount),
                              }),
                            ],
                          }),
                        Ro &&
                          wt &&
                          oo > 0 &&
                          !Do &&
                          (0, le.jsxs)(c.default, {
                            style: C.common.between,
                            children: [
                              (0, le.jsx)(C.Copy, {
                                style: { fontSize: 12, color: Ie.muted },
                                children: to
                                  ? (0, X.clubDiscountLabel)(to, no, oo)
                                  : (0, D.L)(
                                      '\u062a\u062e\u0641\u06cc\u0641 \u0628\u0627\u0634\u06af\u0627\u0647 ({n} \u0627\u0645\u062a\u06cc\u0627\u0632)',
                                      { n: me(no) },
                                    ),
                              }),
                              (0, le.jsx)(C.Copy, {
                                testID: 'basket-club-discount',
                                style: { fontSize: 12, color: Ie.danger },
                                children: ye(oo),
                              }),
                            ],
                          }),
                        Ro &&
                          !Do &&
                          so.map((e, t) =>
                            (0, le.jsxs)(
                              c.default,
                              {
                                style: C.common.between,
                                children: [
                                  (0, le.jsx)(C.Copy, {
                                    style: { fontSize: 12, color: Ie.muted },
                                    children:
                                      'percent' === e.kind
                                        ? `${e.label} (${(0, D.localDigits)(e.value)}\u066a)`
                                        : e.label,
                                  }),
                                  (0, le.jsx)(C.Copy, {
                                    testID: 'basket-extra-' + t,
                                    style: { fontSize: 12, color: Ie.muted },
                                    children: '+' + pe(e.amount),
                                  }),
                                ],
                              },
                              t,
                            ),
                          ),
                        Ro &&
                          (0, le.jsxs)(c.default, {
                            style: C.common.between,
                            children: [
                              (0, le.jsx)(C.Copy, {
                                style: { fontFamily: 'Vazirmatn_600SemiBold' },
                                children: wt
                                  ? (0, D.L)(
                                      '\u0642\u0627\u0628\u0644 \u067e\u0631\u062f\u0627\u062e\u062a',
                                    )
                                  : E.notebookW5Fa.runningTotal,
                              }),
                              (0, le.jsx)(C.Copy, {
                                testID: 'basket-total',
                                style: {
                                  fontSize: 21,
                                  lineHeight: 30,
                                  fontFamily: 'Vazirmatn_700Bold',
                                },
                                children: (0, _.money)(ao, { full: !0 }),
                              }),
                            ],
                          }),
                        !!Fe &&
                          (0, le.jsx)(C.Copy, {
                            accessibilityRole: 'alert',
                            style: { color: Ie.danger },
                            children: Fe,
                          }),
                        !!at &&
                          !Fe &&
                          (0, le.jsx)(C.Copy, {
                            style: { fontSize: 12, color: Ie.accent },
                            children: at,
                          }),
                        !Do &&
                          (0, le.jsxs)(c.default, {
                            style: {
                              flexDirection: 'row-reverse',
                              justifyContent: 'center',
                              alignItems: 'center',
                              gap: 8,
                            },
                            children: [
                              (0, le.jsx)(c.default, {
                                style: { flex: 1, maxWidth: 420 },
                                children: (0, le.jsx)(C.Button, {
                                  testID: wt ? 'save-sale' : 'save-purchase',
                                  disabled: Be || !we.length,
                                  onPress: () => po(),
                                  children: wt
                                    ? (0, D.L)(
                                        '\u062b\u0628\u062a \u0641\u0627\u06a9\u062a\u0648\u0631',
                                      )
                                    : E.notebookW5Fa.savePurchase,
                                }),
                              }),
                              (0, le.jsxs)(i.default, {
                                testID: 'basket-print',
                                accessibilityRole: 'button',
                                disabled: Be || !we.length,
                                onPress: () => po(!0),
                                style: ({ pressed: e }) => ({
                                  height: 48,
                                  paddingHorizontal: 16,
                                  borderRadius: 24,
                                  flexDirection: 'row-reverse',
                                  alignItems: 'center',
                                  gap: 5,
                                  borderWidth: 1,
                                  borderColor: Ie.line,
                                  backgroundColor: Ie.surface,
                                  opacity:
                                    Be || !we.length ? 0.45 : e ? 0.75 : 1,
                                }),
                                children: [
                                  (0, le.jsx)(g.Icon, {
                                    name: 'receipt',
                                    size: 17,
                                    color: Ie.text,
                                  }),
                                  (0, le.jsx)(C.Copy, {
                                    style: { fontSize: 14 },
                                    children: (0, D.L)('\u0686\u0627\u067e'),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        Lt.current &&
                          !Do &&
                          (0, le.jsx)(C.Button, {
                            secondary: !0,
                            disabled: Be,
                            onPress: () => {
                              ((It.current = !1), mo(Lt.current));
                            },
                            children: E.notebookW5Fa.retry,
                          }),
                      ],
                    }),
                Gt &&
                  (0, le.jsx)(ne.Toast, { toast: Bt, bottom: Mt ? 190 : 200 }),
              ],
            }),
            Gt &&
              (0, le.jsx)(se.TillGrid, {
                products: u.products,
                sale: wt,
                movements: u.movements,
                priceOf: To,
                inInvoice: (e) => Po.get(e) || 0,
                paused: Be || So || jo,
                onAdd: function (e, t) {
                  const n = yn(e);
                  (Re((o) =>
                    (0, W.addPicked)(
                      o,
                      e,
                      t,
                      (0, k.randomUUID)(),
                      wt,
                      pn.get(e.id)?.price,
                      n,
                    ),
                  ),
                    $t(e.id),
                    Vt(null),
                    We(''),
                    ct(''),
                    cn(null),
                    (0, ne.tapFeel)(),
                    Ht(
                      (0, D.L)(
                        '{name} +{n} \u0627\u0636\u0627\u0641\u0647 \u0634\u062f',
                        {
                          name: e.name,
                          n: (0, D.localDigits)(String(t.quantity)),
                        },
                      ),
                    ),
                    xn([e.id]));
                },
                onScan: (e) => kn(e, !0),
                onVoice: async (e) => {
                  const t = await (0, oe.openVoiceAdd)({
                      products: u.products.filter((e) => !e.archivedAt),
                      onSearch: e,
                    }),
                    n = (0, W.addToPicks)({}, t, u.products).picks,
                    o = Object.keys(n);
                  o.length && (bn(n), $t(o[o.length - 1]));
                },
              }),
            !Gt && (0, le.jsx)(ne.Toast, { toast: Bt, bottom: Mt ? 190 : 200 }),
            Co &&
              (0, le.jsx)(
                H.LineSheet,
                {
                  line: Co,
                  sale: wt,
                  showPrice: Ro,
                  priceEditable: !wt || mn || void 0 === Co.product.price,
                  canDiscount: un,
                  limit: dn,
                  newId: k.randomUUID,
                  onApply: (e) => {
                    (Re((t) => t.flatMap((t) => (t.id === Co.id ? e : [t]))),
                      Dn(),
                      rt(null),
                      Ae(null),
                      1 === e.length && gn(Co, e[0]));
                  },
                  onDelete: () => {
                    (Re((e) => e.filter((e) => e.id !== Co.id)),
                      Dn(),
                      rt(null),
                      Ae(null));
                  },
                  onClose: () => {
                    (rt(null), Ae(null));
                  },
                },
                Co.id,
              ),
            !!zt &&
              (0, le.jsx)(
                Y.ScannedProductSheet,
                {
                  code: zt,
                  taken: u.products,
                  sale: wt,
                  showPrice: ln && (wt || (0, L.priceRights)(r).price),
                  showCost: ln && x,
                  busy: Tt,
                  error: Et,
                  onMake: (e) => {
                    jn(e);
                  },
                  onClose: () => {
                    At.current || Pt('');
                  },
                },
                zt,
              ),
            it &&
              (0, le.jsx)(H.InvoiceDiscountSheet, {
                value: Qe,
                base: Nn.gross - Nn.lineDiscounts,
                limit: dn,
                onApply: (e) => {
                  (Ye(e), Dn(), st(!1));
                },
                onClose: () => st(!1),
              }),
            (0, le.jsx)(Y.ProductPicker, {
              visible: lt,
              products: u.products,
              movements: u.movements,
              sale: wt,
              priceOf: To,
              lastPrice: (e) => pn.get(e)?.price,
              inInvoice: (e) => Po.get(e) || 0,
              onDone: bn,
              onClose: () => {
                (dt(!1), Ae(null));
              },
              onVoiceAdd: (e) =>
                (0, oe.openVoiceAdd)({
                  products: u.products.filter((e) => !e.archivedAt),
                  onSearch: e,
                }),
              onNewLine: wt
                ? void 0
                : function (e) {
                    wt ||
                      (Re((t) => [
                        ...t,
                        (0, W.newProductLine)(
                          e,
                          (0, k.randomUUID)(),
                          (0, k.randomUUID)(),
                        ),
                      ]),
                      We(''),
                      ct(''),
                      Vt(null),
                      cn(null));
                  },
              newInInvoice: we
                .filter((e) => (0, W.isNewProduct)(e.product))
                .map((e) => e.product),
              showCost: Ro,
            }),
            jo &&
              ko &&
              (0, le.jsx)(
                B.PriceSheet,
                {
                  product: ko,
                  question: (0, D.L)(
                    '{name} {n} \u0642\u06cc\u0645\u062a \u062f\u0627\u0631\u062f\u061b \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646 \u0641\u0627\u06a9\u062a\u0648\u0631 \u06a9\u062f\u0627\u0645 \u0631\u0627 \u0628\u0632\u0646\u0645\u061f',
                    {
                      name: ko.name,
                      n: (0, D.localDigits)((0, W.tierOptions)(ko).length),
                    },
                  ),
                  options: (0, W.tierOptions)(ko),
                  current:
                    (0, W.rememberedTier)(ko, xt) ||
                    ((0, W.tierOptions)(ko).some((e) => 'default' === e.key)
                      ? 'default'
                      : (0, W.tierOptions)(ko)[0]?.key || 'default'),
                  onPick: (e) => vn(ko.id, e),
                  onClose: () => Cn(ko.id),
                },
                ko.id,
              ),
            Kn &&
              (0, le.jsx)(U.ClubJoinSheet, {
                shop: r,
                visible: !0,
                initialName: Me.trim(),
                onClose: () => {
                  (Xn(!1), Ae(null));
                },
                onJoined: function (e) {
                  (Xn(!1),
                    zn(e.contact),
                    (0, ne.tapFeel)('success'),
                    Ht((0, U.joinLine)(e)));
                },
              }),
            ut &&
              (0, le.jsx)(ee.CustomerSheet, {
                role: wt ? 'customer' : 'supplier',
                shop: r,
                contacts: Q || [],
                recent: bt,
                current: qn,
                needSaved: pt,
                onCanSave: wn,
                onContact: zn,
                onName: Pn,
                onWalkIn: () => Pn(''),
                onClose: () => {
                  (mt(!1), ft(''), Ae(null));
                },
              }),
            yt &&
              Te &&
              (0, W.needsCustomer)(Te.payment.method) &&
              (0, le.jsx)(Ce, {
                value: Te,
                chequeDate: Ee,
                total: ro,
                onChequeDate: (e) => {
                  (Dn(),
                    Ne(e),
                    qe((t) =>
                      t
                        ? {
                            ...t,
                            payment: {
                              ...t.payment,
                              cheque: { ...t.payment.cheque, dueDate: ue(e) },
                            },
                          }
                        : t,
                    ));
                },
                onChange: (e) => {
                  (JSON.stringify(e) !== JSON.stringify(Te) && Dn(), qe(e));
                },
                onClose: () => {
                  (ht(!1), Ae(null));
                },
              }),
          ],
        });
      }));
    var t = _r(_d[0]),
      n = e(_r(_d[1])),
      o = e(_r(_d[2])),
      r = e(_r(_d[3]));
    _r(_d[4]);
    var i = e(_r(_d[5])),
      s = e(_r(_d[6])),
      c = e(_r(_d[7])),
      l = e(_r(_d[8])),
      d = _r(_d[9]),
      u = _r(_d[10]),
      m = _r(_d[11]),
      p = _r(_d[12]),
      f = _r(_d[13]),
      y = _r(_d[14]),
      h = _r(_d[15]),
      b = _r(_d[16]),
      g = _r(_d[17]),
      x = _r(_d[18]),
      v = _r(_d[19]),
      C = _r(_d[20]),
      S = _r(_d[21]),
      k = _r(_d[22]),
      j = _r(_d[23]),
      L = _r(_d[24]),
      D = _r(_d[25]),
      I = _r(_d[26]),
      w = _r(_d[27]),
      R = _r(_d[28]),
      z = _r(_d[29]),
      P = _r(_d[30]),
      T = _r(_d[31]),
      q = _r(_d[32]),
      E = _r(_d[33]),
      _ = _r(_d[34]),
      N = e(_r(_d[35])),
      O = _r(_d[36]),
      A = _r(_d[37]),
      F = _r(_d[38]),
      W = _r(_d[39]),
      B = _r(_d[40]),
      H = _r(_d[41]),
      M = _r(_d[42]),
      V = _r(_d[43]),
      U = _r(_d[44]),
      G = _r(_d[45]),
      J = _r(_d[46]),
      $ = _r(_d[47]),
      K = _r(_d[48]),
      X = _r(_d[49]),
      Q = _r(_d[50]),
      Y = _r(_d[51]),
      Z = _r(_d[52]),
      ee = _r(_d[53]),
      te = _r(_d[54]),
      ne = _r(_d[55]),
      oe = _r(_d[56]),
      re = _r(_d[57]),
      ie = _r(_d[58]),
      se = _r(_d[59]),
      ae = _r(_d[60]),
      ce = _r(_d[61]),
      le = _r(_d[62]);
    const de = () => ({ ...(0, u.calParts)(new Date()), hour: 12, minute: 0 }),
      ue = (e) => {
        const t = (0, u.calToGregorian)(e.year, e.month, e.day),
          n = (e) => String(e).padStart(2, '0');
        return `${t.year}-${n(t.month)}-${n(t.day)}`;
      },
      me = (e) => Math.round(e).toLocaleString((0, D.numberLocale)()),
      pe = (e) => me((0, _.localAmount)(e)),
      fe = (e) =>
        e.toLocaleString((0, D.numberLocale)(), { maximumFractionDigits: 4 }),
      ye = (e) => '\u2066\u2212' + pe(e) + '\u2069',
      he = (e) => {
        const t = Number(
          e
            .replace(/[\u06f0-\u06f9]/g, (e) =>
              String(
                '\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9'.indexOf(
                  e,
                ),
              ),
            )
            .replace(/[\u0660-\u0669]/g, (e) =>
              String(
                '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669'.indexOf(
                  e,
                ),
              ),
            )
            .replace(/[,\u066c\s]/g, ''),
        );
        return Number.isFinite(t) && t > 0 ? Math.round(t) : void 0;
      },
      be = [
        { value: 'cash', label: () => (0, D.L)('\u0646\u0642\u062f') },
        {
          value: 'card',
          label: () =>
            (0, D.L)(
              '\u06a9\u0627\u0631\u062a \u0628\u0647 \u06a9\u0627\u0631\u062a',
            ),
        },
        { value: 'cheque', label: () => (0, D.L)('\u0686\u06a9') },
        { value: 'credit', label: () => (0, D.L)('\u0646\u0633\u06cc\u0647') },
      ];
    class ge extends Error {
      constructor(e) {
        (super('new_name_taken'), (this.product = e));
      }
    }
    function xe({
      document: e,
      sale: o,
      onView: s,
      onPrint: l,
      onNew: d,
      onDismiss: u,
    }) {
      const { colors: m, mode: p } = (0, S.useTheme)(),
        f = (0, t.useRef)(new n.default.Value(0)).current,
        y = 'dark' === p ? ne.SUCCESS_GREEN.dark : ne.SUCCESS_GREEN.light,
        h = !1,
        b = (0, t.useRef)(new n.default.Value(0)).current,
        x = (0, t.useRef)(160),
        v = (0, t.useRef)(!1),
        k = (0, t.useRef)(u);
      function j() {
        v.current ||
          ((v.current = !0),
          n.default
            .timing(b, {
              toValue: x.current + 48,
              duration: 200,
              useNativeDriver: h,
            })
            .start(() => k.current()));
      }
      ((k.current = u),
        (0, t.useEffect)(() => {
          n.default
            .spring(f, {
              toValue: 1,
              useNativeDriver: h,
              bounciness: 9,
              speed: 14,
            })
            .start();
        }, [f]));
      const L = () =>
          n.default
            .spring(b, {
              toValue: 0,
              useNativeDriver: h,
              bounciness: 6,
              speed: 16,
            })
            .start(),
        I = (0, t.useRef)(
          r.default.create({
            onMoveShouldSetPanResponder: (e, t) =>
              !v.current && (0, Q.savedCardClaims)(t.dx, t.dy),
            onMoveShouldSetPanResponderCapture: (e, t) =>
              !v.current && (0, Q.savedCardClaims)(t.dx, t.dy),
            onPanResponderTerminationRequest: () => !1,
            onPanResponderGrant: () => b.stopAnimation(),
            onPanResponderMove: (e, t) =>
              b.setValue((0, Q.savedCardDrag)(t.dy)),
            onPanResponderRelease: (e, t) => {
              (0, Q.savedCardDismiss)(t.dy, t.vy, x.current) ? j() : L();
            },
            onPanResponderTerminate: () => L(),
          }),
        ).current,
        w = b.interpolate({
          inputRange: [0, 220],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
        R =
          e.receiptNo > 0
            ? o
              ? (0, D.L)(
                  '\u0641\u0627\u06a9\u062a\u0648\u0631 \u0634\u0645\u0627\u0631\u0647\u0654 {n}',
                  { n: (0, D.localDigits)(e.receiptNo) },
                )
              : (0, D.L)(
                  '\u0631\u0633\u06cc\u062f \u0634\u0645\u0627\u0631\u0647\u0654 {n}',
                  { n: (0, D.localDigits)(e.receiptNo) },
                )
            : '',
        z =
          void 0 !== e.totalToman
            ? (0, D.L)('\u062c\u0645\u0639 {n}', {
                n: (0, _.money)(e.totalToman),
              })
            : '',
        P = (e, t, n, o = !1) =>
          (0, le.jsx)(
            i.default,
            {
              testID: n,
              accessibilityRole: 'button',
              onPress: t,
              style: ({ pressed: e }) => ({
                height: 42,
                paddingHorizontal: 14,
                borderRadius: 21,
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: o ? y : m.line,
                backgroundColor: o ? y : m.surface,
                opacity: e ? 0.8 : 1,
              }),
              children: (0, le.jsx)(C.Copy, {
                style: {
                  fontSize: 14,
                  color: o ? '#ffffff' : m.text,
                  fontFamily: 'Vazirmatn_600SemiBold',
                },
                children: e,
              }),
            },
            n,
          );
      return (0, le.jsx)(c.default, {
        style: { marginTop: 4, alignItems: 'center' },
        children: (0, le.jsxs)(n.default.View, {
          testID: 'basket-saved',
          accessibilityRole: 'alert',
          ...I.panHandlers,
          ...re.noSwipe,
          onLayout: (e) => {
            x.current = e.nativeEvent.layout.height;
          },
          style: {
            width: '100%',
            maxWidth: 560,
            paddingHorizontal: 16,
            paddingBottom: 16,
            paddingTop: 6,
            gap: 10,
            borderRadius: 22,
            borderWidth: 2,
            borderColor: y,
            backgroundColor: 'dark' === p ? m.surface : '#f0fdf4',
            transform: [
              { translateY: b },
              {
                scale: f.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.92, 1],
                }),
              },
            ],
            opacity: n.default.multiply(f, w),
          },
          children: [
            (0, le.jsx)(i.default, {
              testID: 'basket-saved-handle',
              accessibilityRole: 'button',
              accessibilityLabel: (0, D.L)('\u0628\u0633\u062a\u0646'),
              accessibilityHint: (0, D.L)(
                '\u0628\u0631\u0627\u06cc \u0628\u0633\u062a\u0646\u060c \u06a9\u0627\u0631\u062a \u0631\u0627 \u067e\u0627\u06cc\u06cc\u0646 \u0628\u06a9\u0634',
              ),
              hitSlop: { top: 10, bottom: 6, left: 24, right: 24 },
              onPress: j,
              style: ({ pressed: e }) => ({
                alignSelf: 'center',
                paddingVertical: 4,
                paddingHorizontal: 18,
                opacity: e ? 0.6 : 1,
                cursor: 'grab',
              }),
              children: (0, le.jsx)(c.default, {
                style: {
                  width: 40,
                  height: 5,
                  borderRadius: 3,
                  backgroundColor: y,
                  opacity: 0.45,
                },
              }),
            }),
            (0, le.jsxs)(c.default, {
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 10,
              },
              children: [
                (0, le.jsx)(n.default.View, {
                  style: {
                    width: 44,
                    height: 44,
                    borderRadius: 22,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: y,
                    transform: [{ scale: f }],
                  },
                  children: (0, le.jsx)(g.Icon, {
                    name: 'check',
                    size: 26,
                    color: '#ffffff',
                  }),
                }),
                (0, le.jsxs)(c.default, {
                  style: { flex: 1, minWidth: 0 },
                  children: [
                    (0, le.jsx)(C.Copy, {
                      style: {
                        fontSize: 17,
                        lineHeight: 28,
                        fontFamily: 'Vazirmatn_700Bold',
                        color: y,
                      },
                      children: o
                        ? (0, D.L)(
                            '\u0641\u0627\u06a9\u062a\u0648\u0631 \u062b\u0628\u062a \u0634\u062f \u2713',
                          )
                        : (0, D.L)(
                            '\u0648\u0631\u0648\u062f \u06a9\u0627\u0644\u0627 \u062b\u0628\u062a \u0634\u062f \u2713',
                          ),
                    }),
                    !(!R && !z) &&
                      (0, le.jsx)(C.Copy, {
                        testID: 'basket-saved-info',
                        numberOfLines: 1,
                        style: { fontSize: 13, color: m.text },
                        children: [R, z].filter(Boolean).join(' \xb7 '),
                      }),
                  ],
                }),
              ],
            }),
            (0, le.jsxs)(c.default, {
              style: { flexDirection: 'row-reverse', flexWrap: 'wrap', gap: 8 },
              children: [
                P(
                  o
                    ? (0, D.L)(
                        '\u062f\u06cc\u062f\u0646 \u0641\u0627\u06a9\u062a\u0648\u0631',
                      )
                    : (0, D.L)(
                        '\u062f\u06cc\u062f\u0646 \u0631\u0633\u06cc\u062f',
                      ),
                  s,
                  'basket-saved-view',
                  !0,
                ),
                P((0, D.L)('\u0686\u0627\u067e'), l, 'basket-saved-print'),
                P(
                  o
                    ? (0, D.L)(
                        '\u0641\u0627\u06a9\u062a\u0648\u0631 \u062a\u0627\u0632\u0647',
                      )
                    : (0, D.L)(
                        '\u0648\u0631\u0648\u062f \u062a\u0627\u0632\u0647',
                      ),
                  d,
                  'basket-saved-new',
                ),
              ],
            }),
          ],
        }),
      });
    }
    const ve = (e, t) => {
      const [n, o, r] = e.split('-').map(Number),
        i = (0, u.calToGregorian)(t.year, t.month, t.day);
      return n === i.year && o === i.month && r === i.day
        ? `${(0, D.localDigits)(t.year)}/${(0, D.localDigits)(t.month)}/${(0, D.localDigits)(t.day)}`
        : e;
    };
    function Ce({
      value: e,
      chequeDate: n,
      total: o,
      onChequeDate: r,
      onChange: i,
      onClose: s,
    }) {
      const { colors: l } = (0, S.useTheme)(),
        u = 'cheque' === e.payment.method,
        [m, p] = (0, t.useState)(
          e.payment.paidToman
            ? e.payment.paidToman.toLocaleString((0, D.numberLocale)())
            : '',
        ),
        f = (t) => i({ ...e, payment: { ...e.payment, ...t } }),
        y = (t) =>
          f({
            cheque: {
              dueDate: e.payment.cheque?.dueDate || ue(n),
              ...e.payment.cheque,
              ...t,
            },
          });
      return (0, le.jsx)(x.Sheet, {
        visible: !0,
        title: u
          ? (0, D.L)('\u0686\u06a9')
          : (0, D.L)('\u0646\u0633\u06cc\u0647'),
        onClose: s,
        children: (0, le.jsxs)(d.ScrollView, {
          keyboardShouldPersistTaps: 'handled',
          contentContainerStyle: { gap: 10 },
          children: [
            (0, le.jsx)(C.Copy, {
              style: { fontSize: 12, color: l.muted },
              children: u
                ? (0, D.L)(
                    '\u0645\u0628\u0644\u063a \u0686\u06a9\u061b \u062e\u0627\u0644\u06cc = \u06a9\u0644 \u0641\u0627\u06a9\u062a\u0648\u0631 ({n})',
                    { n: (0, _.money)(o) },
                  )
                : (0, D.L)(
                    '\u0627\u06af\u0631 \u0628\u062e\u0634\u06cc \u0631\u0627 \u0647\u0645\u06cc\u0646 \u0627\u0644\u0627\u0646 \u062f\u0627\u062f\u060c \u0645\u0628\u0644\u063a\u0634 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u061b \u0628\u0642\u06cc\u0647 \u0628\u0647 \u062d\u0633\u0627\u0628\u0634 \u0645\u06cc\u200c\u0631\u0648\u062f.',
                  ),
            }),
            (0, le.jsx)(T.MoneyInput, {
              value: m,
              onChange: (e) => {
                p(e);
                const t = he(e);
                f({ paidToman: t && t <= o ? t : void 0 });
              },
              placeholder: u
                ? (0, D.L)('\u0645\u0628\u0644\u063a \u0686\u06a9')
                : (0, D.L)(
                    '\u0645\u0628\u0644\u063a \u067e\u0631\u062f\u0627\u062e\u062a\u200c\u0634\u062f\u0647',
                  ),
            }),
            u &&
              (0, le.jsxs)(le.Fragment, {
                children: [
                  (0, le.jsx)(C.Copy, {
                    style: { fontSize: 12, color: l.muted },
                    children: E.notebookW5Fa.chequeDue,
                  }),
                  (0, le.jsx)(h.JalaliDateField, {
                    dateOnly: !0,
                    id: 'basket-cheque-due',
                    value: n,
                    onChange: r,
                  }),
                  (0, le.jsxs)(c.default, {
                    style: { flexDirection: 'row-reverse', gap: 8 },
                    children: [
                      (0, le.jsx)(c.default, {
                        style: { flex: 1 },
                        children: (0, le.jsx)(C.Input, {
                          testID: 'basket-cheque-number',
                          value: e.payment.cheque?.number || '',
                          maxLength: 80,
                          onChangeText: (e) => y({ number: e || void 0 }),
                          placeholder: (0, D.L)(
                            '\u0634\u0645\u0627\u0631\u0647\u0654 \u0686\u06a9 (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)',
                          ),
                          keyboardType: 'number-pad',
                          inputMode: 'numeric',
                        }),
                      }),
                      (0, le.jsx)(c.default, {
                        style: { flex: 1 },
                        children: (0, le.jsx)(C.Input, {
                          testID: 'basket-cheque-bank',
                          value: e.payment.cheque?.bank || '',
                          maxLength: 100,
                          onChangeText: (e) => y({ bank: e || void 0 }),
                          placeholder: (0, D.L)(
                            '\u0628\u0627\u0646\u06a9 (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)',
                          ),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            (0, le.jsx)(C.Button, {
              testID: 'basket-pay-ok',
              onPress: s,
              children: (0, D.L)('\u062a\u0623\u06cc\u06cc\u062f'),
            }),
          ],
        }),
      });
    }
  },
  962,
  [
    2, 92, 207, 212, 94, 232, 17, 99, 257, 380, 440, 460, 806, 827, 830, 619,
    691, 385, 539, 480, 407, 382, 415, 489, 692, 311, 963, 519, 433, 779, 429,
    614, 964, 580, 435, 258, 534, 886, 685, 464, 799, 965, 967, 909, 911, 913,
    461, 462, 968, 807, 969, 970, 473, 973, 815, 971, 595, 384, 481, 974, 975,
    966, 338,
  ],
);
