// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 609; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (e, t, o, r, n, i, a) {
    'use strict';
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(i, '__esModule', { value: !0 }),
      Object.defineProperty(i, 'ChequePhotosPreview', {
        enumerable: !0,
        get: function () {
          return no.ChequePhotosPreview;
        },
      }),
      Object.defineProperty(i, 'PhotoCropperPreview', {
        enumerable: !0,
        get: function () {
          return io.PhotoCropperPreview;
        },
      }),
      Object.defineProperty(i, 'LiveAgentHost', {
        enumerable: !0,
        get: function () {
          return lo.LiveAgentHost;
        },
      }),
      Object.defineProperty(i, 'DataPanel', {
        enumerable: !0,
        get: function () {
          return Ee.DataPanel;
        },
      }),
      (i.Workspace = function ({
        shop: e,
        user: t,
        exit: o,
        demo: r,
        startTrial: n,
        logout: i,
        demoGuide: a = null,
      }) {
        const s = (0, P.useInventory)(e),
          yt = (0, Ye.useOfflineStatus)();
        (0, de.useEffect)(() => {
          e && (0, Ye.registerOfflineShell)();
        }, [e?.id]);
        const no = t ? (0, E.activeUserId)() : null,
          io = (0, de.useRef)(new Set()),
          lo = (0, l.useShopDay)(e?.timezone);
        (y.swrStore.setScope(no),
          (0, de.useEffect)(() => {
            if (!no || !e || r) return;
            const t = no + ':' + e.id;
            if (io.current.has(t)) return;
            io.current.add(t);
            const o = y.swrStore.scoped(
                e.id,
                'summary:' + Le.DEFAULT_REPORT_DAYS,
              ),
              n = y.swrStore.scoped(e.id, 'ledger-summary'),
              i = y.swrStore.scoped(e.id, 'referral'),
              a = y.swrStore.scoped(e.id, 'notebook-shop'),
              s = y.swrStore.scoped(
                e.id,
                'insight:' +
                  (0, eo.localeLang)() +
                  ':' +
                  lo +
                  ':' +
                  (0, to.insightSlot)(),
              ),
              l = y.swrStore.scoped(e.id, 'activity:6'),
              c = y.swrStore.scoped(e.id, 'to-buy'),
              u = y.swrStore.scoped(e.id, 'telegram-drafts'),
              p = y.swrStore.scoped(e.id, 'movements:p1'),
              f = [o, n, i, a, s, l, c, u, p].filter((e) => !!e);
            if (9 !== f.length) return;
            Promise.all(f.map((e) => y.swrStore.hydrate(e)));
            const m = (e, t) =>
                y.swrStore.fresh(e, y.SWR_FRESH_MS)
                  ? Promise.resolve(void 0)
                  : y.swrStore.revalidate(e, t),
              h = setTimeout(() => {
                (m(o, () =>
                  (0, Bt.readSummary)(e, Le.DEFAULT_REPORT_DAYS),
                ).catch(() => {}),
                  m(n, () => (0, Bt.readLedgerSummary)(e)).catch(() => {}),
                  m(i, () => (0, C.readReferral)(e)).catch(() => {}));
              }, 800),
              v = setTimeout(() => {
                (m(a, () => (0, Bt.readNotebookShop)(e)).catch(() => {}),
                  m(s, () => (0, Bt.readInsight)(e)).catch(() => {}),
                  m(l, () => (0, Bt.readActivity)(e, { limit: 6 })).catch(
                    () => {},
                  ),
                  m(c, () => (0, d.listToBuy)(e)).catch(() => {}),
                  S.TELEGRAM_BOT &&
                    m(u, () => (0, k.listTelegramDrafts)(e)).catch(() => {}),
                  m(p, () =>
                    (0, E.request)((0, E.shopPath)(e, '/movements?limit=100')),
                  ).catch(() => {}));
              }, 1500);
            return () => {
              (clearTimeout(h), clearTimeout(v));
            };
          }, [no, e?.id, r, lo]));
        const yo = s.snapshot?.revision,
          So = (0, de.useRef)({ openedAt: 0 }),
          wo = (0, de.useRef)(0);
        function jo() {
          (r && y.swrStore.setScope(null), o());
        }
        ((0, de.useEffect)(() => {
          if (e)
            return (0, E.onShopWrite)((t) => {
              t === e.id && (wo.current = Date.now());
            });
        }, [e?.id]),
          (0, de.useEffect)(() => {
            if (!e) return;
            const t = So.current,
              o = t.shop === e.id && t.role === e.role,
              r = Date.now();
            ((So.current = {
              shop: e.id,
              role: e.role,
              revision: yo,
              openedAt: o ? t.openedAt : r,
            }),
              (o &&
                (void 0 === t.revision ||
                  r - t.openedAt < po ||
                  r - wo.current < uo)) ||
                y.swrStore.invalidateShop(e.id));
          }, [e?.id, e?.role, yo]));
        const Po = (0, C.useShopAccess)(e),
          Co = (0, C.useBilling)(
            e ? (0, E.shopPath)(e, '/billing') : '/v1/billing/catalog',
          ),
          Io = Po.aiAllowance,
          [Eo, Lo] = (0, de.useState)({}),
          Ro = (0, de.useMemo)(
            () =>
              e &&
              !r &&
              s.snapshot?.products.some(
                (e) => 'made' === e.kind && !e.archivedAt,
              )
                ? s.snapshot.products
                    .map((e) => e.id + ':' + e.stock + ':' + (e.version || 0))
                    .join(',')
                : '',
            [e?.id, r, s.snapshot],
          );
        ((0, de.useEffect)(() => {
          if (!e || !Ro) return;
          let t = !0;
          const o = setTimeout(() => {
            (0, E.request)((0, E.shopPath)(e, '/products/makeable'))
              .then((e) => {
                t && Lo(e.makeable || {});
              })
              .catch(() => {});
          }, 300);
          return () => {
            ((t = !1), clearTimeout(o));
          };
        }, [e?.id, Ro]),
          (0, de.useEffect)(() => {
            if (s.snapshot) {
              const e = s.snapshot;
              ((ar.current = e),
                ir(
                  Object.keys(Eo).length
                    ? {
                        ...e,
                        products: e.products.map((e) =>
                          'made' === e.kind && e.id in Eo
                            ? { ...e, makeable: Eo[e.id] }
                            : e,
                        ),
                      }
                    : e,
                ),
                Tn(!0));
            }
          }, [s.snapshot, Eo]));
        const { mode: Bo, colors: Do, toggle: To } = (0, ze.useTheme)(),
          zo = (0, Se.useSafeInsets)(),
          { height: Ao, width: qo } = (0, be.default)(),
          _o = (0, D.useLayoutMode)(),
          Oo = 'desktop' === _o,
          Fo = (0, Rt.useReducedMotion)(),
          Uo = Lt.glassTokens[Bo].surface,
          Mo = (0, Lt.compositeHex)(
            Uo.slice(0, 7),
            Do.bg,
            parseInt(Uo.slice(7, 9), 16) / 255,
          ),
          [Ho, No] = (0, de.useState)(
            e?.name ||
              (r
                ? a?.shopName ||
                  (0, eo.L)(
                    '\u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0646\u0645\u0648\u0646\u0647',
                  )
                : Ae.fa.store),
          );
        (0, de.useEffect)(() => {
          e ||
            r ||
            J.default
              .getItem('anbari.profile.name')
              .then((e) => {
                e && No(e);
              })
              .catch(() => {});
        }, [r, e]);
        const [Wo, Ko] = (0, de.useState)(null),
          [Vo, Go] = (0, de.useState)(!1),
          [Yo, Jo] = (0, de.useState)(!1),
          [Qo, Xo] = (0, de.useState)(!1),
          [$o, Zo] = (0, de.useState)(0),
          er = (0, $.useSupportUnread)(e && t && !r ? e : null),
          tr = (0, de.useMemo)(() => {}, [!1]);
        (0, v.useShopMoneyUnit)(e);
        const [or, rr] = (0, de.useState)(() =>
            g.returnToProfile.take() ? 'profile' : 'home',
          ),
          [nr, ir] = (0, de.useState)(() =>
            r
              ? (0, st.freshDemoInventory)(a?.fieldId, a?.customField)
              : e
                ? { products: [], movements: [], categories: [] }
                : bo(),
          ),
          ar = (0, de.useRef)(nr);
        ((ar.current = nr),
          (0, de.useEffect)(() => {
            e &&
              J.default
                .getItem((0, Bt.starterKey)(t, e))
                .then((o) => {
                  if (!o) return;
                  const r = JSON.parse(o);
                  r?.name &&
                    r?.unit &&
                    (xr({
                      id: '',
                      name: r.name,
                      detail: '',
                      stock: 0,
                      unit: r.unit,
                      packSize: r.packSize,
                      packUnit: r.packUnit,
                      kind: 'simple',
                    }),
                    Sr(!0),
                    J.default.removeItem((0, Bt.starterKey)(t, e)));
                })
                .catch(() => {});
          }, [e?.id]));
        const sr = (0, de.useRef)(null),
          [lr, cr] = (0, de.useState)(null),
          [dr, ur] = (0, de.useState)(null);
        function pr(e, t = !1) {
          (s.refresh(),
            t && (cr(null), Er(e), ur(e.id), Ln(!1), kn(!1), gr('receipt')));
        }
        const [fr, mr] = (0, de.useState)(null),
          [hr, yr] = (0, de.useState)(null),
          [vr, gr] = (0, de.useState)(null),
          [br, xr] = (0, de.useState)(null),
          [kr, Sr] = (0, de.useState)(!1),
          [wr, jr] = (0, de.useState)(!1),
          [Pr, Cr] = (0, de.useState)(''),
          [Ir, Er] = (0, de.useState)(null);
        (0, de.useEffect)(() => {
          'basket' === vr && Mt.receiptOffer.close();
        }, [vr]);
        const [Lr, Rr] = (0, de.useState)(null);
        ((0, de.useEffect)(
          () =>
            f.basketEntries.subscribe((e) => {
              (pt.ledgerEntries.close(),
                Rr(e),
                gr('receive' === e.mode ? 'receiveBasket' : 'basket'));
            }),
          [],
        ),
          (0, de.useEffect)(() => {
            'basket' !== vr && 'receiveBasket' !== vr && Rr(null);
          }, [vr]));
        const Br = (0, de.useRef)(null),
          [Dr, Tr] = (0, de.useState)(),
          [zr, Ar] = (0, de.useState)(),
          [qr, _r] = (0, de.useState)([]),
          [Or, Fr] = (0, de.useState)('all'),
          [Ur, Mr] = (0, de.useState)(''),
          [Hr, Nr] = (0, de.useState)(''),
          [Wr, Kr] = (0, de.useState)(),
          [Vr, Gr] = (0, de.useState)('piece'),
          [Yr, Jr] = (0, de.useState)(''),
          [Qr, Xr] = (0, de.useState)(''),
          [$r, Zr] = (0, de.useState)(),
          [en, tn] = (0, de.useState)(),
          [on, rn] = (0, de.useState)(!1),
          [nn, an] = (0, de.useState)(''),
          [sn, ln] = (0, de.useState)(),
          [cn, dn] = (0, de.useState)('received'),
          [un, pn] = (0, de.useState)(),
          [fn, mn] = (0, de.useState)(''),
          [hn, yn] = (0, de.useState)(''),
          vn = (0, de.useRef)(!1),
          [gn, bn] = (0, de.useState)(!1);
        ((0, de.useEffect)(() => {
          if (!hn) return;
          const e = setTimeout(() => yn(''), 5e3);
          return () => clearTimeout(e);
        }, [hn]),
          (0, de.useEffect)(() => {
            if (!lr) return;
            const e = setTimeout(() => cr(null), 12e3);
            return () => clearTimeout(e);
          }, [lr, or]));
        const [xn, kn] = (0, de.useState)(!1),
          [Sn, wn] = (0, de.useState)(!1),
          [jn, Pn] = (0, de.useState)(''),
          [Cn, In] = (0, de.useState)(!1),
          [En, Ln] = (0, de.useState)(!1),
          [Rn, Bn] = (0, de.useState)(!1),
          [Dn, Tn] = (0, de.useState)(r),
          [zn, An] = (0, de.useState)(!1),
          [qn, _n] = (0, de.useState)(!1),
          [On, Fn] = (0, de.useState)(),
          [Un, Mn] = (0, de.useState)(!1),
          [Hn, Nn] = (0, de.useState)(null),
          [Wn, Kn] = (0, de.useState)(!1),
          [Vn, Gn] = (0, de.useState)(),
          [Yn, Jn] = (0, de.useState)(0);
        function Qn(e) {
          (Gn(e), Jn((e) => e + 1));
        }
        const Xn = (0, de.useRef)(Promise.resolve()),
          $n = (0, de.useRef)(!1),
          Zn = (0, de.useRef)(!1),
          ei = (0, de.useRef)(!1),
          ti = (0, de.useRef)(null),
          oi = (0, de.useRef)(null),
          ri = (0, de.useRef)(null),
          ni = (0, de.useRef)(!1);
        ni.current = En;
        const ii = Po.role ?? e?.role,
          ai = !!e && 'expired' === Po.access,
          si =
            r ||
            (!!e &&
              ('active' === Po.access ||
                'trial' === Po.access ||
                'free' === Po.access)),
          li = (0, We.draftStorageKey)(t?.id || t?.userId, e?.id),
          ci = e?.businessType,
          di = e ? (0, B.roleKinds)(ii, e.access) : ['received', 'sold'],
          ui = (0, gt.movementKinds)(ci, di);
        (0, le.setOversellFill)((0, B.canCount)(ii, e?.access));
        const pi = r && 'staff' !== ii,
          fi = (0, B.seeRules)(ii, e?.access),
          mi = (0, B.reportsVisible)(fi),
          hi = !fi || fi.ledger,
          yi = ui.length > 0,
          vi =
            pi ||
            !e ||
            (0, B.canLead)(ii, e?.access) ||
            ('staff' === ii && di.length > 0),
          gi = pi || !e || (0, B.canLead)(ii, e?.access),
          bi = pi || !e || (0, B.canEditSalePrice)(ii, e?.access),
          xi =
            Co.data?.subscription?.purchased_plan_id ||
            Co.data?.subscription?.plan_id ||
            (ai ? 'expired' : 'trial'),
          ki = r,
          Si = (0, B.staffTabs)(ii, e?.access),
          wi = Si ? vo.filter((e) => Si.includes(e.id)) : vo;
        (0, de.useEffect)(() => {
          Si && 'learn' !== or && !Si.includes(or) && rr(Si[0]);
        }, [Si?.join(), or]);
        const ji = Co.data?.subscription?.features,
          Pi = !!ji?.ledger,
          Ci = !!ji?.cheques;
        (0, de.useEffect)(() => {
          if (!no || !e || r || !Pi) return;
          const t = no + ':' + e.id + ':contacts';
          if (io.current.has(t)) return;
          io.current.add(t);
          const o = y.swrStore.scoped(e.id, 'contacts:all:'),
            n = y.swrStore.scoped(e.id, 'cheques');
          if (!o || !n) return;
          (y.swrStore.hydrate(o), y.swrStore.hydrate(n));
          const i = setTimeout(() => {
            (y.swrStore
              .revalidate(o, () => (0, Bt.listContacts)(e))
              .catch(() => {}),
              y.swrStore
                .revalidate(n, () => (0, Dt.loadAllCheques)(e))
                .catch(() => {}),
              (0, Tt.flushChequePhotos)(e).catch(() => {}));
          }, 1500);
          return () => clearTimeout(i);
        }, [no, e?.id, r, xi, Pi]);
        const [Ii, Ei] = (0, de.useState)([]),
          [Li, Ri] = (0, de.useState)('list'),
          [Bi, Di] = (0, de.useState)(0),
          Ti =
            Co.loading || Co.error || !Co.data || !yt.online
              ? null
              : Ci &&
                ('owner' === ii ||
                  'manager' === ii ||
                  ('staff' === ii && !!e?.access?.see.ledger));
        ((0, V.useReminderNotifications)(
          r ? null : e,
          no,
          Ti,
          (0, xt.expensesAllowedFor)(e),
        ),
          (0, G.useCampaignNotifications)(
            r || ('owner' !== ii && 'manager' !== ii) ? null : e,
            e ? Po.campaign : void 0,
            Po.reload,
          ));
        const zi =
          !!e &&
          !r &&
          (0, ft.ledgerReadOnlyFor)(xi, Pi) &&
          ('owner' === ii ||
            'manager' === ii ||
            ('staff' === ii && !!e?.access?.see.ledger));
        (0, de.useEffect)(
          () => (
            ft.ledgerReadOnly.set(
              !!e && !r && (0, ft.ledgerReadOnlyFor)(xi, Pi),
            ),
            () => ft.ledgerReadOnly.set(!1)
          ),
          [e?.id, r, xi, Pi],
        );
        const Ai = Co.data?.subscription?.plan_id,
          qi = !(r || !e || !Ai || (0, ht.clubPlanOpen)(Ai));
        function _i(e) {
          (Fn(
            e ||
              ('free' === Po.access
                ? (0, eo.L)(
                    '\u0627\u06cc\u0646 \u0627\u0645\u06a9\u0627\u0646 \u062f\u0631 \u0637\u0631\u062d \u0631\u0627\u06cc\u06af\u0627\u0646 \u0646\u06cc\u0633\u062a\u061b \u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0622\u0646 \u06cc\u06a9 \u0637\u0631\u062d \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646.',
                  )
                : void 0),
          ),
            _n(!0));
        }
        (0, de.useEffect)(
          () => (mt.clubLock.set(qi), () => mt.clubLock.set(!1)),
          [qi],
        );
        const Oi = 'basket' === vr || 'receiveBasket' === vr;
        function Fi(e) {
          if ('verified' === e)
            return (
              Po.reload(),
              void (0, Y.showToast)(
                (0, eo.L)(
                  '\u067e\u0631\u062f\u0627\u062e\u062a \u0645\u0648\u0641\u0642 \u0628\u0648\u062f \u0648 \u0627\u0634\u062a\u0631\u0627\u06a9\u062a \u0641\u0639\u0627\u0644 \u0634\u062f.',
                ),
              )
            );
          (Fn(
            'invalid' === e
              ? (0, eo.L)(
                  '\u0627\u06cc\u0646 \u067e\u0631\u062f\u0627\u062e\u062a \u067e\u06cc\u062f\u0627 \u0646\u0634\u062f \u06cc\u0627 \u0642\u0628\u0644\u0627\u064b \u0628\u0631\u0631\u0633\u06cc \u0634\u062f\u0647 \u0627\u0633\u062a. \u0627\u06af\u0631 \u067e\u0648\u0644\u06cc \u0627\u0632 \u062d\u0633\u0627\u0628\u062a \u06a9\u0645 \u0634\u062f\u0647\u060c \u0628\u0647 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u062e\u0628\u0631 \u0628\u062f\u0647: \u06f0\u06f2\u06f1-\u06f9\u06f1\u06f0\u06f3\u06f1\u06f9\u06f5\u06f3',
                )
              : 'cancelled' === e
                ? (0, eo.L)(
                    '\u067e\u0631\u062f\u0627\u062e\u062a \u062f\u0631 \u0635\u0641\u062d\u0647\u0654 \u0628\u0627\u0646\u06a9 \u0644\u063a\u0648 \u0634\u062f \u0648 \u067e\u0648\u0644\u06cc \u0627\u0632 \u062d\u0633\u0627\u0628\u062a \u06a9\u0645 \u0646\u0634\u062f. \u0647\u0631 \u0648\u0642\u062a \u062e\u0648\u0627\u0633\u062a\u06cc \u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646.',
                  )
                : (0, eo.L)(
                    '\u0628\u0627\u0646\u06a9 \u0627\u06cc\u0646 \u067e\u0631\u062f\u0627\u062e\u062a \u0631\u0627 \u062a\u0623\u06cc\u06cc\u062f \u0646\u06a9\u0631\u062f. \u0627\u06af\u0631 \u067e\u0648\u0644\u06cc \u0627\u0632 \u062d\u0633\u0627\u0628\u062a \u06a9\u0645 \u0634\u062f\u0647\u060c \u0628\u0627\u0646\u06a9 \u062a\u0627 \u06f7\u06f2 \u0633\u0627\u0639\u062a \u062e\u0648\u062f\u0634 \u0628\u0631\u0645\u06cc\u200c\u06af\u0631\u062f\u0627\u0646\u062f\u061b \u0648\u06af\u0631\u0646\u0647 \u0628\u0647 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u062e\u0628\u0631 \u0628\u062f\u0647: \u06f0\u06f2\u06f1-\u06f9\u06f1\u06f0\u06f3\u06f1\u06f9\u06f5\u06f3',
                  ),
          ),
            Mn(!0),
            _n(!0));
        }
        ((0, de.useEffect)(() => {
          if (!Oi || !e || !Pi) return void Ei([]);
          let t = !0;
          const o = () => {
            (async () => {
              let o,
                r = [];
              do {
                const t = await (0, Bt.listContacts)(e, { cursor: o });
                ((r = [...r, ...t.contacts]), (o = t.next?.cursor));
              } while (o);
              t && Ei(r);
            })().catch(() => {
              t && Ei([]);
            });
          };
          o();
          const r = (0, E.onShopWrite)((t) => {
            t === e.id && o();
          });
          return () => {
            ((t = !1), r());
          };
        }, [Oi, e?.id, xi, Pi]),
          (0, de.useEffect)(
            () =>
              (0, It.onTrialAiUsed)(() => {
                (_i(Et.notebookFa.trialFinished), Po.reload());
              }),
            [Po.reload],
          ),
          (0, de.useEffect)(() => {
            if ('undefined' == typeof window || !e) return;
            const t = new URLSearchParams(window.location.search),
              o = t.get('billing');
            if (!o) return;
            t.delete('billing');
            const r = t.toString();
            (window.history.replaceState(
              null,
              '',
              window.location.pathname +
                (r ? '?' + r : '') +
                window.location.hash,
            ),
              Fi(o));
          }, [e?.id]),
          (0, de.useEffect)(() => {}, [e?.id]),
          (0, de.useEffect)(
            () =>
              (0, E.onFreeLimit)((e) => {
                (_i(
                  (0, L.freeLimitMessage)(
                    new E.ApiError('free_limit_reached', 402, e),
                  ),
                ),
                  Po.reload());
              }),
            [Po.reload],
          ));
        const Ui =
            e && 'free' === Po.access
              ? (0, R.recordsLeft)(Po.records, e.timezone)
              : null,
          Mi = null !== Ui && Ui <= 0,
          Hi =
            e && 'free' === Po.access && Po.records
              ? {
                  left: Ui ?? Po.records.left,
                  limit: Po.records.limit,
                  onPlans:
                    'staff' === ii
                      ? void 0
                      : () => {
                          ((0, Q.openSubscriptionPage)(), za('profile'));
                        },
                }
              : null,
          Ni = (0, Ze.useSheetsOpen)(),
          Wi = (0, Ze.useCalmPrompts)({
            shop: e,
            role: ii,
            demo: r,
            access: Po,
            online: yt.online,
            calm: !(
              vr ||
              br ||
              kr ||
              xn ||
              En ||
              Rn ||
              qn ||
              Sn ||
              Hn ||
              Vo ||
              Qo ||
              Yo ||
              0 !== Ni
            ),
          });
        async function Ki() {
          An(!1);
          try {
            const e = await (0, ce.loadInventory)();
            (e && ((ar.current = e), ir(e)), ($n.current = !0), Tn(!0));
          } catch {
            An(!0);
          }
        }
        function Vi(e) {
          Xn.current = Xn.current
            .catch(() => {})
            .then(() => (0, ce.saveInventory)(e))
            .then(() => An(!1))
            .catch(() => An(!0));
        }
        function Gi(t) {
          if (ai && e)
            return (_i(), Promise.reject(Error('subscription_required')));
          if (e)
            return (async () => {
              try {
                JSON.stringify(t.alarmRules) !==
                JSON.stringify(ar.current.alarmRules)
                  ? await s.mutate('/alarms', 'PUT', {
                      rules: t.alarmRules || [],
                      revision: s.snapshot?.revision || 0,
                    })
                  : (await s.mutate('/alerts/read', 'POST', {
                      ids: (t.alerts || [])
                        .filter((e) => e.read)
                        .map((e) => e.id),
                    }),
                    (ar.current = t),
                    ir(t));
              } catch (e) {
                throw (yn((0, E.message)(e)), e);
              }
            })();
          const o = (0, N.evaluateAlarms)(ar.current, t);
          ((ar.current = o.state),
            ir(o.state),
            o.created.length &&
              (0, W.notifyStockAlerts)(o.created).catch(() =>
                yn(Ae.fa.notificationDeliveryFailed),
              ));
        }
        async function Yi(t, o) {
          if (ai && e) throw (_i(), Error('subscription_required'));
          const r = (0, qe.normalizeName)(t.name);
          if (e) {
            let n = t.productId;
            if (
              (n ||
                (n = (
                  await (0, Bt.listMovements)(e, '?limit=20')
                ).movements.find(
                  (e) => (0, qe.normalizeName)(e.name) === r,
                )?.productId),
              !n)
            )
              return;
            const { product: i } = await (0, E.request)(
              (0, E.shopPath)(e, '/products/' + n),
            );
            if (void 0 !== o.packSize && void 0 !== i.packSize) return;
            const a = { ...i, ...o };
            return (
              a.photo?.startsWith('/v1/') && delete a.photo,
              await s.mutate('/products/' + n, 'PUT', {
                details: a,
                version: i.version || 0,
              }),
              void s.refresh()
            );
          }
          const n = ar.current.products.find((e) =>
            t.productId
              ? e.id === t.productId
              : !e.archivedAt && (0, qe.normalizeName)(e.name) === r,
          );
          n && Gi((0, ie.saveProduct)(ar.current, n.id, { ...n, ...o }));
        }
        function Ji(e) {
          ((Br.current = { tab: or, panel: vr, modelKey: fr }),
            gr(null),
            xr(e),
            Sr(!e.id),
            jr(!1));
        }
        function Qi(t, o) {
          const r = ar.current.products.find(
            (e) => e.id === t && !e.archivedAt,
          );
          r &&
            (ai && e
              ? _i()
              : ((Br.current = { tab: or, panel: vr, modelKey: fr }),
                gr(null),
                xr(r),
                jr(o),
                Sr(!0)));
        }
        function Xi() {
          const e = Br.current;
          ((Br.current = null),
            me.default.dismiss(),
            xr(null),
            Sr(!1),
            jr(!1),
            e
              ? (rr(e.tab),
                mr(e.modelKey),
                gr(
                  'model' !== e.panel ||
                    (e.modelKey &&
                      (0, Gt.groupModels)(ar.current.products).has(e.modelKey))
                    ? e.panel
                    : null,
                ))
              : gr(null));
        }
        function $i() {
          br ? Xi() : gr(null);
        }
        async function Zi(t = !0) {
          br &&
            (ai && e
              ? _i()
              : (e
                  ? await s.mutate('/products/' + br.id + '/archive', 'POST', {
                      version: br.version || 1,
                    })
                  : Gi((0, ie.archiveProduct)(ar.current, br.id)),
                t && Xi(),
                yn(Ae.fa.archiveDone)));
        }
        async function ea() {
          br &&
            (ai && e
              ? _i()
              : (e
                  ? await s.mutate('/products/' + br.id, 'DELETE', {
                      version: br.version || 1,
                    })
                  : Gi((0, ie.deleteProducts)(ar.current, [br.id])),
                Xi(),
                yn(Ae.fa.deleteDone)));
        }
        async function ta(t, o) {
          if (ai && e) return void _i();
          if (e) {
            const e = await (0, le.withOversell)(
                (e) =>
                  s.mutate('/movements/' + t + '/correct', 'POST', {
                    ...(o ? { replacement: o } : {}),
                    ...(0, le.oversellMark)(e),
                  }),
                { verb: 'save' },
              ),
              r = e?.replacement,
              n =
                'string' == typeof e?.cancelledPurchaseId
                  ? e.cancelledPurchaseId
                  : '';
            return (
              n &&
                r?.walkInPurchaseId !== n &&
                Mt.receiptOffer.receiptCancelled(n),
              void yn(Ae.fa.correctionDone)
            );
          }
          const r = ar.current.movements.find((e) => e.id === t);
          if (
            !r ||
            r.correctsMovementId ||
            ar.current.movements.some((e) => e.correctsMovementId === t)
          )
            throw Error('invalid');
          const n = 'correction-' + Date.now() + '-' + ++ia.current,
            i =
              ar.current.products.find((e) => e.id === r.productId)?.stock ?? 0,
            a = (0, qe.applyDraft)(
              ar.current,
              'count' === r.kind
                ? {
                    name: r.name,
                    productId: r.productId,
                    quantity: r.quantity,
                    kind: 'count',
                    expectedStock: i,
                    countedStock:
                      Math.round(1e3 * (i - (r.stockEffect ?? 0))) / 1e3,
                  }
                : {
                    name: r.name,
                    productId: r.productId,
                    quantity: r.quantity,
                    kind: 'received' === r.kind ? 'sold' : 'received',
                  },
              n,
              'correction',
            ),
            l = {
              ...a,
              movements: a.movements.map((e) =>
                e.id === n
                  ? {
                      ...e,
                      unitPrice: r.unitPrice,
                      unitCost: r.unitCost,
                      correctsMovementId: t,
                    }
                  : e,
              ),
            };
          if (o) {
            Gi(
              (0, qe.applyDraft)(
                l,
                {
                  name: o.name || r.name,
                  productId: o.name ? void 0 : r.productId,
                  quantity: o.quantity || r.quantity,
                  kind: r.kind,
                  ...(o.unit ? { unit: o.unit } : {}),
                  ...(o.timestamp ? { timestamp: o.timestamp } : {}),
                },
                'replacement-' + Date.now() + '-' + ++ia.current,
                'correction',
              ),
            );
          } else Gi(l);
          yn(Ae.fa.correctionDone);
        }
        async function oa(t) {
          if (ai && e) throw (_i(), Error('subscription_required'));
          if (e) {
            for (const e of t) {
              const t = await s.mutate(
                '/movements/' + e + '/correct',
                'POST',
                {},
              );
              'string' == typeof t?.cancelledPurchaseId &&
                Mt.receiptOffer.receiptCancelled(t.cancelledPurchaseId);
            }
            s.refresh();
          } else for (const e of t) await ta(e);
        }
        ((0, de.useEffect)(() => {
          (0, C.rememberReferral)().catch(() => {});
        }, []),
          (0, de.useEffect)(() => {
            'owner' === e?.role &&
              (0, C.claimPendingReferral)(e).catch(() => {});
          }, [e?.id, e?.role]),
          (0, de.useEffect)(() => {
            if (e)
              return (0, E.onSubscriptionRequired)((t) => {
                t.startsWith('/v1/shops/' + e.id + '/') && _n(!0);
              });
          }, [e?.id]),
          (0, de.useEffect)(
            () =>
              (0, E.onUpgradeNeeded)((e) => {
                ('import_paid_only' === e
                  ? _i(
                      (0, eo.L)(
                        '\u0648\u0631\u0648\u062f \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0627\u0632 \u0641\u0627\u06cc\u0644 \u0645\u062e\u0635\u0648\u0635 \u0627\u0634\u062a\u0631\u0627\u06a9\u200c\u0647\u0627\u0633\u062a',
                      ),
                    )
                  : 'connector_paid_only' === e &&
                    _i(
                      (0, eo.L)(
                        '\u0627\u062a\u0635\u0627\u0644 \u0628\u0647 ChatGPT \u0648 Claude \u0645\u062e\u0635\u0648\u0635 \u0627\u0634\u062a\u0631\u0627\u06a9\u200c\u0647\u0627\u0633\u062a',
                      ),
                    ),
                  'api_plus_only' === e &&
                    _i(
                      (0, eo.L)(
                        '\u0627\u062a\u0635\u0627\u0644 \u0633\u0627\u06cc\u062a \u0648 \u0627\u067e\u200c\u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u0628\u0627 API \u0645\u062e\u0635\u0648\u0635 \u0637\u0631\u062d \u067e\u0644\u0627\u0633 \u0627\u0633\u062a',
                      ),
                    ));
              }),
            [Po.access],
          ),
          (0, de.useEffect)(() => {
            ai &&
              (vr && (gr(null), Ln(!1)),
              kr && Sr(!1),
              br && !br.id && xr(null),
              Vo && Go(!1));
          }, [ai]),
          (0, de.useEffect)(() => {
            e || r || Ki();
          }, [r, e]),
          (0, de.useEffect)(() => {
            !e && !r && Dn && $n.current && Vi(nr);
          }, [nr, Dn, r, e]),
          (0, de.useEffect)(() => {
            if (r) return;
            let e = !0;
            return (
              (0, We.loadDrafts)(li).then((t) => {
                if (!e) return;
                const o = t.manual;
                (o &&
                  (Mr(o.name),
                  Nr(o.quantity),
                  dn(ui.includes(o.kind) ? o.kind : ui[0] || 'received'),
                  Kr(o.productId),
                  pn(o.timestamp),
                  o.unit && (0, _e.isUnit)(o.unit) && Gr(o.unit),
                  Jr(o.cost || ''),
                  Xr(o.price || ''),
                  Zr(o.priceKey),
                  tn(o.expiresAt)),
                  (Zn.current = !0));
              }),
              () => {
                e = !1;
              }
            );
          }, [li, r]),
          (0, de.useEffect)(() => {
            !r &&
              Zn.current &&
              (0, We.patchDrafts)(li, {
                manual: {
                  name: Ur,
                  quantity: Hr,
                  kind: cn,
                  productId: Wr,
                  timestamp: un,
                  unit: Vr,
                  cost: Yr,
                  price: Qr,
                  expiresAt: en,
                  ...($r ? { priceKey: $r } : {}),
                },
              });
          }, [li, Ur, Hr, cn, Wr, un, Vr, Yr, Qr, $r, en, r]),
          (0, de.useEffect)(() => {
            if ('add' !== or || xn || r || Oo || ai) return;
            let e = !0;
            return (
              Promise.all([(0, We.loadDrafts)(li), (0, We.loadVoiceAudio)(li)])
                .then(([t, o]) => {
                  e &&
                    (((0, Ke.draftHasRows)(t.voice) &&
                      !(0, Ke.draftExpired)(t.voiceAt)) ||
                      (t.voicePendingSales &&
                        Object.keys(t.voicePendingSales).length > 0) ||
                      (o && !(0, Ke.draftExpired)(o.at))) &&
                    kn(!0);
                })
                .catch(() => {}),
              () => {
                e = !1;
              }
            );
          }, [or, li, r, Oo, ai]),
          (0, K.useNotificationDestination)(
            no + ':' + e?.id,
            Ti,
            (t, o) => {
              (xr(null),
                Sr(!1),
                mr(null),
                Ln(!1),
                'to-buy' === t
                  ? (Go(!1), Ri('list'), Di((e) => e + 1), gr('toBuy'))
                  : 'cheques' === t
                    ? (gr(null),
                      rr('home'),
                      !1 === Ti
                        ? _i()
                        : pt.ledgerEntries.open({ screen: 'cheques' }))
                    : 'support' === t
                      ? (o && (0, Z.openSupportTicket)(o),
                        gr(null),
                        (0, Q.openSupportPage)(),
                        za('profile'))
                      : 'expenses' === t
                        ? (gr(null),
                          (0, xt.openExpenses)(
                            o ? { newFrom: o } : { fresh: !0 },
                          ))
                        : 'plans' === t
                          ? (gr(null),
                            (0, Q.openSubscriptionPage)(),
                            za('profile'))
                          : 'sales' === t || 'history' === t
                            ? (gr(null),
                              Qn('sales' === t ? 'income' : 'history'),
                              za('data'))
                            : 'payments' === t
                              ? (gr(null),
                                rr('home'),
                                e &&
                                  pt.ledgerEntries.open({ screen: 'contacts' }))
                              : 'home' === t
                                ? (gr(null), rr('home'))
                                : (gr(null), rr('inventory'), Go(!0)));
            },
            { error: Co.error, reload: Co.reload, online: yt.online },
          ),
          (0, de.useEffect)(() => {
            if (!no || !e || r) return;
            const t = setTimeout(() => {
              (0, zt.warmLedger)(e, Dt.loadAllCheques).catch(() => {});
            }, 2500);
            return () => clearTimeout(t);
          }, [no, e?.id, r]));
        const ra = (0, de.useRef)(null),
          na = (0, de.useRef)(null),
          ia = (0, de.useRef)(0),
          aa = (0, de.useRef)(() => !1),
          [sa, la] = (0, de.useState)(!1),
          ca = (0, de.useRef)(new pe.default.Value(0)).current,
          da = ((0, de.useRef)(!1), (0, de.useRef)(''));
        function ua(e) {
          ni.current ? ((ti.current = e), Bn(!0)) : e();
        }
        function pa() {
          (r ||
            ('batch' !== vr && 'voice' !== vr && 'image' !== vr) ||
            (0, We.clearDraftPart)(li, vr),
            Ln(!1),
            Bn(!1));
          const e = ti.current;
          ((ti.current = null), e?.());
        }
        ((da.current = Ur),
          (0, de.useEffect)(() => {
            if (Oo) return;
            const e = na.current?.getScrollableNode?.();
            e?.style && (e.style.scrollPaddingBottom = zo.bottom + 110 + 'px');
          }, [Oo, zo.bottom, or]),
          (0, Ne.useKeyboardReveal)(na),
          (0, de.useEffect)(() => {
            r || (0, Fe.startAudit)();
            const e = me.default.addListener('keyboardDidShow', () => wn(!0)),
              t = me.default.addListener('keyboardDidHide', () => wn(!1));
            return () => {
              (e.remove(), t.remove());
            };
          }, [r]),
          (0, de.useEffect)(() => {
            const e = fe.default.addEventListener('hardwareBackPress', () =>
              !xn || vr || br
                ? vr || br
                  ? (ua(() => {
                      'recipe' !== vr
                        ? ($i(), 'batch' === vr && rr('add'))
                        : gr(null);
                    }),
                    !0)
                  : Vo
                    ? (Go(!1), !0)
                    : 'home' !== or && (rr('home'), !0)
                : (kn(!1), !0),
            );
            return () => e.remove();
          }, [or, vr, br, Vo, En, xn]));
        const fa = 'model' === vr || (!!br && !vr),
          ma = (0, de.useRef)(() => !1);
        ((ma.current = () => {
          const e = br && Br.current;
          return (
            br ? Xi() : gr(null),
            !(
              'model' !== e?.panel ||
              !e.modelKey ||
              !(0, Gt.groupModels)(ar.current.products).has(e.modelKey)
            )
          );
        }),
          (0, de.useEffect)(() => {
            if (fa) return (0, O.installPageBack)(window, () => ma.current());
          }, [fa]),
          (0, de.useEffect)(() => {
            if ('batch' !== vr) return;
            window.history.pushState({ anbariBatch: !0 }, '');
            const e = () => {
              (window.history.pushState({ anbariBatch: !0 }, ''),
                ua(() => {
                  (gr(null), rr('add'));
                }));
            };
            return (
              window.addEventListener('popstate', e),
              () => window.removeEventListener('popstate', e)
            );
          }, [vr]));
        const ha = () =>
            ua(() => {
              'recipe' !== vr ? ($i(), 'batch' === vr && rr('add')) : gr(null);
            }),
          ya =
            'toBuy' === vr
              ? 'reminders'
              : 'recipes' === vr || 'recipe' === vr
                ? 'recipes'
                : 'support' === vr
                  ? 'support'
                  : vr && (ho.includes(vr) || 'batch' === vr)
                    ? 'page'
                    : null;
        (0, z.useDeskPage)(ya, '', ha, !!ya);
        const va = (0, z.useDeskPages)(),
          ga = Oo && va.length ? va[va.length - 1].id : null,
          [ba, xa] = (0, b.useConfirm)(),
          [ka, Sa] = (0, de.useState)(null),
          wa = (0, y.useSwr)(
            Oo && e && !r && !0 === Ti ? (0, y.scoped)(e.id, 'cheques') : null,
            () => (0, Dt.loadAllCheques)(e),
          ),
          ja = (0, h.overdueCheques)(wa.data?.list, lo).length;
        function Pa(e) {
          ua(() => {
            (A.deskPages.closeAll(), gr(null), e());
          });
        }
        ((0, de.useEffect)(() => {
          A.deskPages.setTabLabel(go.find((e) => e.id === or)?.label || '');
        }, [or]),
          (0, de.useEffect)(() => {
            ((Ca.current.y = 0),
              (Ca.current.restore = null),
              na.current?.scrollTo({ y: 0, animated: !1 }));
          }, [or]));
        const Ca = (0, de.useRef)((0, oe.shellScroll)()),
          Ia = (0, de.useRef)({}),
          Ea =
            (!Oo && !!br && !vr) ||
            ho.includes(vr || '') ||
            'batch' === vr ||
            'support' === vr;
        function La(e) {
          const t = (0, oe.takeRestore)(Ca.current, e);
          null !== t && na.current?.scrollTo({ y: t, animated: !1 });
        }
        ((0, oe.shellVisibility)(Ca.current, Ea, or),
          (0, de.useEffect)(() => {
            if (Ea || null === Ca.current.restore) return;
            const e = setTimeout(() => La(), 1200);
            return () => clearTimeout(e);
          }, [Ea]));
        const Ra = (0, de.useRef)(new Set()),
          [Ba, Da] = (0, de.useState)(0);
        function Ta(e, t, o) {
          return (
            t && Ra.current.add(e),
            Ra.current.has(e)
              ? (0, so.jsx)(c.KeepTab, { active: t, children: o }, e)
              : null
          );
        }
        function za(e) {
          const t = Si && 'learn' !== e && !Si.includes(e) ? Si[0] : e;
          try {
            performance.mark('anbari:tab:' + t);
          } catch {}
          (me.default.dismiss(),
            (0, x.checkForUpdate)(),
            'add' !== t && kn(!1),
            'inventory' !== t && Go(!1),
            rr(t),
            yn(''),
            mn(''));
        }
        function Aa() {
          ((0, Q.openSubscriptionPage)(), za('profile'));
        }
        function qa(o) {
          if ('product' === o || 'units' === o)
            return (
              xr({
                id: '',
                name: '',
                detail: '',
                stock: 0,
                unit: 'piece',
                kind: 'simple',
              }),
              void Sr(!0)
            );
          if ('voice' !== o)
            if ('batch' !== o)
              if ('basket' === o && e) gr('basket');
              else if ('receipt' === o && e) gr('salesList');
              else if ('invoiceSign' === o && e) (0, Pt.openInvoices)();
              else if ('deliveries' !== o)
                if ('prices' !== o)
                  if ('club' === o && e)
                    qi
                      ? _i((0, eo.L)(mt.CLUB_LOCK_LINE))
                      : pt.ledgerEntries.open({ screen: 'club' });
                  else {
                    if ('devices' === o)
                      return (
                        e && t && !r && (0, Q.openAccountPage)(),
                        void za('profile')
                      );
                    if ('priceAdjust' === o && e && gi) gr('priceAdjust');
                    else if ('expiry' !== o)
                      if ('reminders' === o && e) Ka({ kind: 'to-buy' });
                      else if ('recipes' !== o) {
                        if ('receive' === o || 'waste' === o || 'sell' === o)
                          return (
                            dn(
                              'sell' === o
                                ? 'sold'
                                : 'waste' === o
                                  ? 'waste'
                                  : 'received',
                            ),
                            void za('add')
                          );
                        if (
                          !e ||
                          ('ledger' !== o &&
                            'statements' !== o &&
                            'cheques' !== o &&
                            'staff' !== o)
                        )
                          return 'report' === o ||
                            'income' === o ||
                            'history' === o
                            ? (Qn('report' === o ? 'analytics' : o),
                              void za('data'))
                            : void za('tour' !== o ? 'home' : 'add');
                        pt.ledgerEntries.open({
                          screen:
                            'cheques' === o
                              ? 'cheques'
                              : 'staff' === o
                                ? 'staff'
                                : 'contacts',
                        });
                      } else za('inventory');
                    else gr('expiryList');
                  }
                else za('inventory');
              else za('inventory');
            else Qa('batch');
          else Qa('voice');
        }
        ((0, ao.setAgentPlans)(
          'staff' === ii
            ? null
            : () => {
                ((0, Q.openSubscriptionPage)(), za('profile'));
              },
        ),
          (0, de.useEffect)(() => () => (0, ao.setAgentPlans)(null), []));
        const _a = (0, de.useRef)('profile'),
          [Oa, Fa] = (0, de.useState)(null),
          Ua = (e, t) => {
            ((_a.current = e), Fa(t ?? null), za('learn'));
          };
        (0, de.useEffect)(() => {
          'learn' === or && Oa && Fa(null);
        }, [or, Oa]);
        const Ma = (0, xt.expensesAllowedFor)(e),
          Ha = (0, B.connectorVisible)(e?.role) && gi,
          Na = (e) => (Ha ? () => St.connectionsEntries.open(e) : void 0),
          Wa = {
            cheques: e && Ma ? () => Ka({ kind: 'cheque' }) : void 0,
            ledger: e && Ma ? () => qa('ledger') : void 0,
            club:
              e && Ma
                ? () =>
                    qi
                      ? _i((0, eo.L)(mt.CLUB_LOCK_LINE))
                      : pt.ledgerEntries.open({ screen: 'club' })
                : void 0,
            expenses: e && Ma ? () => (0, xt.openExpenses)() : void 0,
            reminders: e ? () => Ka({ kind: 'to-buy' }) : void 0,
            reports: mi ? () => qa('report') : void 0,
            invoices: e ? () => (0, Pt.openInvoices)() : void 0,
            learn: () => Ua('home'),
            referral:
              e && 'owner' === ii
                ? r
                  ? () => (0, Y.showToast)((0, eo.L)(co), 'wait')
                  : () => {
                      ((0, Q.openReferralPage)(), za('profile'));
                    }
                : void 0,
            staff:
              !e || ('owner' !== ii && 'manager' !== ii)
                ? void 0
                : () =>
                    pt.ledgerEntries.open({
                      screen: 'staff',
                      staffPart: 'money',
                    }),
            ai: Na('ai'),
            api: Na('api'),
          };
        function Ka(e) {
          'expense' !== e.kind
            ? 'cheque' !== e.kind
              ? (Ri('routine' === e.kind ? 'weekly' : 'list'), gr('toBuy'))
              : !1 !== Ti || zi
                ? pt.ledgerEntries.open({ screen: 'cheques' })
                : _i()
            : (0, xt.openExpenses)({ newFrom: e.refId });
        }
        const Va = 'home' === or && !!e && !r,
          Ga =
            Va &&
            0 === $o &&
            (0, so.jsx)(ye.default, {
              testID: 'alarm-history-key',
              accessibilityRole: 'button',
              accessibilityLabel: (0, eo.L)(
                '\u062a\u0627\u0631\u06cc\u062e\u0686\u0647\u0654 \u0627\u0639\u0644\u0627\u0646\u200c\u0647\u0627',
              ),
              onPress: () => Xo(!0),
              style: ({ pressed: e }) => [
                ko.themeButton,
                {
                  backgroundColor: Do.soft,
                  borderColor: Do.line,
                  opacity: e ? 0.85 : 1,
                },
              ],
              children: (0, so.jsx)(De.Icon, {
                name: 'bell',
                size: 19,
                color: Do.text,
              }),
            }),
          Ya =
            'home' === or &&
            (0, so.jsx)(ye.default, {
              testID: 'home-menu',
              accessibilityRole: 'button',
              accessibilityLabel: (0, eo.L)(
                '\u0647\u0645\u0647\u0654 \u06a9\u0644\u06cc\u062f\u0647\u0627',
              ),
              onPress: () => Jo(!0),
              style: ({ pressed: e }) => [
                ko.themeButton,
                {
                  backgroundColor: Do.soft,
                  borderColor: Do.line,
                  opacity: e ? 0.85 : 1,
                },
              ],
              children: (0, so.jsx)(De.Icon, {
                name: 'menu',
                size: 20,
                color: Do.text,
              }),
            });
        function Ja() {
          (To(),
            r ||
              (0, Fe.logEvent)(
                'theme.changed',
                'light' === Bo ? 'dark' : 'light',
              ));
        }
        function Qa(t) {
          if (
            (me.default.dismiss(),
            mn(''),
            Ln(!1),
            e &&
              !r &&
              !yt.online &&
              ['voice', 'image', 'batch', 'telegram'].includes(t || ''))
          )
            return (
              kn(!1),
              rr('add'),
              void mn(
                (0, eo.L)(
                  '\u0635\u062f\u0627\u060c \u0686\u062a \u0648 \u0639\u06a9\u0633 \u0628\u0647 \u0627\u06cc\u0646\u062a\u0631\u0646\u062a \u0646\u06cc\u0627\u0632 \u062f\u0627\u0631\u0646\u062f. \u0628\u062f\u0648\u0646 \u0627\u06cc\u0646\u062a\u0631\u0646\u062a \u0628\u0627 \xab\u062b\u0628\u062a \u0633\u0631\u06cc\u0639\xbb \u06cc\u0627 \u0641\u0631\u0645 \u0647\u0645\u06cc\u0646 \u0635\u0641\u062d\u0647 \u062b\u0628\u062a \u06a9\u0646\u061b \u0628\u0639\u062f\u0627\u064b \u062e\u0648\u062f\u0634 \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                ),
              )
            );
          if (
            ai &&
            ['voice', 'image', 'batch', 'scan', 'telegram'].includes(t || '')
          )
            _i();
          else {
            if (!r && ['voice', 'image', 'batch'].includes(t || '')) {
              const e = (0, It.trialRemaining)(Io);
              if (e.trial && 0 === e.remaining)
                return void _i(Et.notebookFa.trialFinished);
            }
            if ('voice' === t && !r && !Oo) return (rr('add'), void kn(!0));
            ('image' === t && (sr.current = null), gr(t));
          }
        }
        function Xa(e) {
          const t = (0, Ut.movementsReceipt)(e, ar.current.products);
          t && cr(t);
        }
        async function $a(e, t) {
          let o = [];
          return (
            await ts(
              e,
              'voice',
              !0,
              void 0,
              void 0,
              (e) => {
                o = e;
              },
              t?.paymentMethod,
              { allowNegative: t?.allowNegative },
            ),
            o
          );
        }
        const { data: Za } = (0, y.useSwr)(
            e && !r ? (0, y.scoped)(e.id, 'notebook-shop') : null,
            () => (0, Bt.readNotebookShop)(e),
          ),
          es = (0, ae.oversellMode)(Za?.settings);
        async function ts(t, o, n = !1, i, a, l, c, d) {
          if (ai && e) throw (_i(), Error('subscription_required'));
          if (Mi) {
            const e = new E.ApiError('free_limit_reached', 402, {
              limit: Po.records?.limit,
            });
            throw (_i((0, L.freeLimitMessage)(e)), e);
          }
          if (void 0 === d?.allowNegative)
            return (0, le.withOversell)(
              (e) => ts(t, o, n, i, a, l, c, { ...d, allowNegative: e }),
              {
                verb: t.every((e) => 'sold' === e.kind) ? 'sell' : 'save',
                known: d?.known,
                mode: es,
              },
            );
          const u = d.allowNegative,
            p = 'local-' + Date.now() + '-' + ++ia.current,
            f =
              e &&
              t.some((e) => 'received' === e.kind && void 0 === e.expectedStock)
                ? Mt.receiptOffer.continueId(e.id)
                : void 0;
          if (e) {
            const r = s.mutate('/movements', 'POST', {
              drafts: t,
              source: o,
              ...('card' === c ? { paymentMethod: c } : {}),
              ...(f ? { receiptOf: f } : {}),
              ...(d?.supplierName ? { supplierName: d.supplierName } : {}),
              ...(0, le.oversellMark)(u),
            });
            i?.(u);
            const n = await r;
            ('string' == typeof n?.walkInPurchaseId
              ? Mt.receiptOffer.saved(
                  e.id,
                  n.walkInPurchaseId,
                  (0, Mt.receivedNames)(n.movements),
                )
              : t.some((e) => 'received' === e.kind) || Mt.receiptOffer.close(),
              a?.(Array.isArray(n?.products) ? n.products : []));
            const p = Array.isArray(n?.movements) ? n.movements : [];
            l ? l(p) : Xa(p);
          } else {
            (Gi(
              'scan' === o
                ? (0, qe.applyDraft)(ar.current, t[0], p, o, {
                    allowNegative: !!u,
                    fill: 'fill' === u,
                  })
                : (0, qe.applyDraftBatch)(ar.current, t, p, o, {
                    allowNegative: !!u,
                    fill: 'fill' === u,
                  }),
            ),
              i?.(u),
              a?.(ar.current.products));
          }
          (r ||
            (0, Fe.logEvent)(
              'scan' === o ? 'scan.confirmed' : 'inventory.confirmed',
              o,
              t.length,
              t.map((e) => ({
                name: e.name,
                quantity: e.quantity,
                kind: e.kind,
              })),
            ),
            (['voice', 'image', 'batch', 'pdf'].includes(o) ||
              'free' === Po.access) &&
              Po.reload(),
            n ||
              (gr(null),
              Fr('all'),
              (Ia.current = {}),
              (Ca.current.y = 0),
              Da((e) => e + 1),
              yn(Ae.fa.saved),
              rr('inventory')));
        }
        const os = (() => {
            const e = zr || (Wr || Dr ? '' : Ur),
              t = e ? (0, Ue.brandOptions)(nr.products, e, qr) : [];
            return {
              family: e,
              options: t,
              pending: t.length > 0 && !Wr && !Dr,
            };
          })(),
          rs = (0, de.useRef)(Wr);
        (0, de.useEffect)(() => {
          if (rs.current === Wr) return;
          const e = rs.current;
          ((rs.current = Wr),
            vn.current
              ? (vn.current = !1)
              : void 0 !== e && (Jr(''), Xr(''), Zr(void 0)));
        }, [Wr]);
        const ns = (e) => {
          if (!['sold', 'used', 'waste'].includes(e.kind)) return [];
          try {
            const t = (0, qe.previewBalance)(ar.current, e),
              o =
                ar.current.products.find((t) => t.id === e.productId) ||
                ar.current.products.find(
                  (t) =>
                    !t.archivedAt &&
                    (0, qe.normalizeName)(t.name) ===
                      (0, qe.normalizeName)(e.name),
                );
            return !('error' in t) &&
              o &&
              'made' !== o.kind &&
              (0, ae.stockShortage)({
                kind: e.kind,
                quantity: Math.round(1e3 * (t.before - t.after)) / 1e3,
                stock: t.before,
              })
              ? [
                  {
                    productId: o.id,
                    name: o.name,
                    unit: o.unit || 'piece',
                    stock: t.before,
                    wanted: Math.round(1e3 * (t.before - t.after)) / 1e3,
                    after: t.after,
                  },
                ]
              : [];
          } catch {
            return [];
          }
        };
        async function is(t, o, r) {
          if (
            !(
              (void 0 !== o && o !== t.price) ||
              (void 0 !== r && r !== t.costPrice)
            )
          )
            return;
          const n = {
            name: t.name,
            detail: t.detail || '',
            barcode: t.barcode,
            category: t.category,
            brand: t.brand,
            size: t.size,
            color: t.color,
            unit: t.unit,
            kind: t.kind,
            ...(void 0 !== t.packSize
              ? { packSize: t.packSize, packUnit: t.packUnit }
              : {}),
            contentSize: t.contentSize,
            contentUnit: t.contentUnit,
            price: o ?? t.price,
            costPrice: r ?? t.costPrice,
          };
          e
            ? await s.mutate('/products/' + t.id, 'PUT', {
                details: n,
                version: t.version || 0,
              })
            : await Gi(
                (0, ie.saveProduct)(ar.current, t.id, { ...n, photo: t.photo }),
              );
        }
        async function as(t, o, r) {
          if (ai && e) throw (_i(), Error('subscription_required'));
          if (!gi) throw Error('forbidden');
          const n = 'price' === o ? { price: r } : { costPrice: r };
          if (e) {
            const o = (0, E.shopPath)(e, '/products/' + encodeURIComponent(t)),
              { product: r } = await (0, E.request)(o);
            return (
              await (0, E.request)(
                o,
                'PUT',
                (0, Yt.modelUpdateBody)(r, n, { price: !0, costPrice: !0 }),
                { key: (0, E.randomUUID)() },
              ),
              void s.refresh().catch(() => {})
            );
          }
          const i = ar.current.products.find(
            (e) => e.id === t && !e.archivedAt,
          );
          if (!i) throw Error('not_found');
          await Gi(
            (0, ie.saveProduct)(ar.current, t, {
              ...(0, Yt.modelUpdateBody)(i, n, { price: !0, costPrice: !0 })
                .details,
              photo: i.photo,
            }),
          );
        }
        async function ss(t, o) {
          if (ai && e) throw (_i(), Error('subscription_required'));
          const r = {
            name: t.name,
            detail: t.detail || '',
            barcode: t.barcode,
            category: t.category,
            brand: t.brand,
            size: t.size,
            color: t.color,
            unit: t.unit,
            kind: t.kind,
            model: t.model,
            ...(void 0 !== t.packSize
              ? { packSize: t.packSize, packUnit: t.packUnit }
              : {}),
            contentSize: t.contentSize,
            contentUnit: t.contentUnit,
            price: t.price,
            costPrice: t.costPrice,
            photo: o,
          };
          if (e) {
            const n = t.version || 0;
            return (
              await s.mutate('/products/' + t.id, 'PUT', {
                details: r,
                version: n,
              }),
              xr((e) =>
                e?.id === t.id ? { ...e, photo: o, version: n + 1 } : e,
              ),
              (0, E.request)((0, E.shopPath)(e, '/products/' + t.id))
                .then(({ product: e }) =>
                  xr((o) =>
                    o?.id === t.id && (e.version || 0) >= (o.version || 0)
                      ? e
                      : o,
                  ),
                )
                .catch(() => {}),
              void s.refresh().catch(() => {})
            );
          }
          (await Gi((0, ie.saveProduct)(ar.current, t.id, r)),
            xr((e) => (e?.id === t.id ? { ...e, photo: o } : e)));
        }
        async function ls(t, o) {
          if (ai && e) throw (_i(), Error('subscription_required'));
          const r = {
              name: t.name,
              detail: t.detail || '',
              barcode: t.barcode,
              category: t.category,
              brand: t.brand,
              size: t.size,
              color: t.color,
              unit: t.unit,
              kind: t.kind,
              model: t.model,
              ...(o || { packSize: null, packUnit: null }),
              contentSize: t.contentSize,
              contentUnit: t.contentUnit,
              price: t.price,
              costPrice: t.costPrice,
              ...(e && t.photo?.startsWith('/v1/') ? {} : { photo: t.photo }),
            },
            n = { ...t, packSize: o?.packSize, packUnit: o?.packUnit };
          if (e) {
            const e = t.version || 0;
            return (
              await s.mutate('/products/' + t.id, 'PUT', {
                details: r,
                version: e,
              }),
              xr((o) => (o?.id === t.id ? { ...n, version: e + 1 } : o)),
              void s.refresh().catch(() => {})
            );
          }
          (await Gi((0, ie.saveProduct)(ar.current, t.id, r)),
            xr((e) => (e?.id === t.id ? n : e)));
        }
        function cs(e, t, o) {
          let r = () => {};
          const n = new Promise((e) => {
              r = e;
            }),
            i = ts(e, t, !0, () => r(), void 0, void 0, void 0, {
              allowNegative: o,
            });
          return { queued: Promise.race([n, i.then(() => {})]), confirmed: i };
        }
        const ds = (0, de.useMemo)(
            () =>
              (0, w.summarizeLocal)(nr.movements, 1, new Date(), nr.products)
                .totals,
            [nr.movements, nr.products, lo],
          ),
          us = nr.products.filter((e) => !e.archivedAt),
          ps = (0, de.useMemo)(
            () => (0, w.lowStockList)(nr.products, nr.alarmRules, 1 / 0),
            [nr.products, nr.alarmRules],
          ),
          fs = (0, de.useMemo)(
            () => ({
              ...ds,
              revenue: ds.revenue,
              costTotal: ds.cost,
              grossProfit: ds.profit,
              received: ds.receivedUnits,
              sold: ds.soldUnits,
              low: ps.length,
              zero: us.filter((e) => 0 === e.stock).length,
              negative: us.filter((e) => e.stock < 0).length,
            }),
            [nr.products, ds, ps],
          ),
          [ms, hs] = (0, de.useState)(null);
        (0, de.useEffect)(() => {
          let t = !0;
          if (e)
            return (
              (0, E.request)((0, E.shopPath)(e, '/dashboard'))
                .then((o) => {
                  t &&
                    hs({
                      shopId: e.id,
                      role: e.role,
                      value: {
                        ...o.today,
                        received: Number(o.today.received),
                        sold: Number(o.today.sold),
                        ...(void 0 !== o.today.revenue
                          ? { revenue: Number(o.today.revenue) }
                          : {}),
                        ...(void 0 !== o.today.costTotal
                          ? { costTotal: Number(o.today.costTotal) }
                          : {}),
                        ...(void 0 !== o.today.grossProfit
                          ? { grossProfit: Number(o.today.grossProfit) }
                          : {}),
                        low: o.low,
                        zero: o.zero,
                        negative: o.negative,
                      },
                    });
                })
                .catch(() => {}),
              () => {
                t = !1;
              }
            );
          hs(null);
        }, [e?.id, e?.role, lo, s.snapshot?.revision]);
        const ys = e
          ? ms?.shopId === e.id && ms.role === e.role
            ? ms.value
            : {
                received: fs.received,
                sold: fs.sold,
                low: fs.low,
                zero: fs.zero,
                negative: fs.negative,
              }
          : fs;
        if (e && !r && yt.locked)
          return (0, so.jsx)(vt.ErrorView, {
            variant: 'screen',
            testID: 'offline-lock',
            primaryTestID: 'offline-retry',
            retry: () => s.refresh().catch(() => {}),
            info: {
              category: 'offline',
              code: 'offline_lock',
              title: (0, eo.L)(
                '\u06cc\u06a9 \u0628\u0627\u0631 \u0628\u0647 \u0627\u06cc\u0646\u062a\u0631\u0646\u062a \u0648\u0635\u0644 \u0634\u0648',
              ),
              why: (0, eo.L)(
                '\u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u0628\u062f\u0648\u0646 \u0627\u06cc\u0646\u062a\u0631\u0646\u062a \u0647\u0645 \u06a9\u0627\u0631 \u0645\u06cc\u200c\u06a9\u0646\u062f\u060c \u0648\u0644\u06cc \u0647\u0631 {n} \u0631\u0648\u0632 \u06cc\u06a9 \u0628\u0627\u0631 \u0628\u0627\u06cc\u062f \u0648\u0635\u0644 \u0634\u0648\u062f \u062a\u0627 \u0627\u0637\u0644\u0627\u0639\u0627\u062a\u062a \u0627\u0631\u0633\u0627\u0644 \u0648 \u0627\u0645\u0646 \u0628\u0645\u0627\u0646\u062f. \u0627\u0637\u0644\u0627\u0639\u0627\u062a\u062a \u0631\u0648\u06cc \u0647\u0645\u06cc\u0646 \u06af\u0648\u0634\u06cc \u0645\u062d\u0641\u0648\u0638 \u0627\u0633\u062a.',
                { n: yt.days.toLocaleString((0, eo.numberLocale)()) },
              ),
              action: (0, eo.L)(
                '\u0627\u06cc\u0646\u062a\u0631\u0646\u062a \u06cc\u0627 \u0648\u0627\u06cc\u200c\u0641\u0627\u06cc \u0631\u0627 \u0631\u0648\u0634\u0646 \u06a9\u0646 \u0648 \xab\u062a\u0644\u0627\u0634 \u062f\u0648\u0628\u0627\u0631\u0647\xbb \u0631\u0627 \u0628\u0632\u0646.',
              ),
              retryable: !0,
              technical:
                'offline_lock | limit ' +
                yt.days +
                'd | last contact ' +
                (yt.lastOnline
                  ? new Date(yt.lastOnline).toISOString()
                  : 'never'),
            },
          });
        if (e && !s.snapshot && s.loadFailure)
          return (0, so.jsx)(vt.ErrorView, {
            variant: 'screen',
            testID: 'shop-load-error',
            error: s.loadFailure,
            retry: () => s.refresh().catch(() => {}),
            back: jo,
            labels: {
              back: (0, eo.L)(
                '\u0628\u0627\u0632\u06af\u0634\u062a \u0628\u0647 \u062d\u0633\u0627\u0628',
              ),
            },
          });
        if (e && !s.snapshot)
          return (0, so.jsxs)(ge.default, {
            style: { flex: 1, padding: 40, gap: 20 },
            children: [
              (0, so.jsx)(Te.Copy, {
                children:
                  s.error ||
                  (0, eo.L)(
                    '\u062f\u0631 \u062d\u0627\u0644 \u062f\u0631\u06cc\u0627\u0641\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0634\u0631\u06a9\u062a\u2026',
                  ),
              }),
              (0, so.jsx)(Te.Button, {
                onPress: () => {
                  s.refresh().catch(() => {});
                },
                children: (0, eo.L)(
                  '\u062a\u0644\u0627\u0634 \u062f\u0648\u0628\u0627\u0631\u0647',
                ),
              }),
              (0, so.jsx)(Te.Button, {
                secondary: !0,
                onPress: jo,
                children: (0, eo.L)(
                  '\u0628\u0627\u0632\u06af\u0634\u062a \u0628\u0647 \u062d\u0633\u0627\u0628',
                ),
              }),
            ],
          });
        if (!Dn)
          return (0, so.jsxs)(ge.default, {
            style: [
              ko.root,
              {
                backgroundColor: Do.bg,
                justifyContent: 'center',
                padding: 30,
                gap: 18,
              },
            ],
            children: [
              (0, so.jsx)(Te.Copy, {
                children: zn ? Ae.fa.storageError : Ae.fa.storageLoading,
              }),
              zn
                ? (0, so.jsx)(Te.Button, {
                    onPress: () => {
                      Ki();
                    },
                    children: Ae.fa.retry,
                  })
                : (0, so.jsx)(ue.default, { color: Do.text }),
            ],
          });
        const vs = !Oo && !!br && !vr,
          gs = (0, so.jsxs)(so.Fragment, {
            children: [
              br &&
                !kr &&
                (0, so.jsx)(Ve.ProductPage, {
                  onPack: gi
                    ? (e) =>
                        ls(
                          ar.current.products.find((e) => e.id === br.id) || br,
                          e,
                        )
                    : void 0,
                  inPage: vs,
                  canSeeBuyPrice: fi
                    ? fi.buyPrice
                    : nr.products.some((e) => void 0 !== e.costPrice),
                  canSeeSellPrice: fi
                    ? fi.sellPrice
                    : nr.products.some((e) => void 0 !== e.price),
                  product: br,
                  movements: nr.movements,
                  canManage: !!gi,
                  onEdit: () => {
                    ai ? _i() : (jr(!1), Sr(!0));
                  },
                  onEditPrice: () => {
                    ai ? _i() : (jr(!0), Sr(!0));
                  },
                  onDelete: () => ea(),
                  onRecipe:
                    e && 'made' === br.kind ? () => gr('recipe') : void 0,
                  onExpiry:
                    e && 'made' !== br.kind
                      ? async (e) => {
                          if (ai) throw (_i(), Error('subscription_required'));
                          const t = br.id,
                            o = ar.current.products.find((e) => e.id === t);
                          (await s.mutate(
                            '/products/' + t + '/expiry',
                            'PATCH',
                            {
                              version: o?.version || br.version || 1,
                              expiresAt: e,
                            },
                          ),
                            xr((o) =>
                              o?.id === t
                                ? {
                                    ...o,
                                    ...(e
                                      ? { expiresAt: e }
                                      : { expiresAt: void 0 }),
                                  }
                                : o,
                            ));
                        }
                      : void 0,
                  onPhoto: (e) => ss(br, e),
                  live: nr.products.find((e) => e.id === br.id),
                  onRefresh: e ? () => s.refresh() : void 0,
                  onSetStock: async (e, t) => {
                    const o = br.id;
                    let r;
                    (await ts(e, 'manual', !0, void 0, (e) => {
                      r = e.find((e) => e.id === o);
                    }),
                      xr((e) =>
                        e?.id === o ? { ...e, ...(r || { stock: t }) } : e,
                      ));
                  },
                  onClose: Xi,
                  onStock: () => {
                    ai
                      ? _i()
                      : (Mr(br.name),
                        Kr(br.id),
                        Gr(br.unit || 'piece'),
                        (Br.current = null),
                        xr(null),
                        Sr(!1),
                        za('add'));
                  },
                }),
              br &&
                kr &&
                (0, so.jsx)(
                  re.ProductEditor,
                  {
                    inPage: vs,
                    product: br,
                    focusPrice: wr,
                    categories: nr.categories || [],
                    businessType: ci,
                    canSeeBuyPrice: !!gi || void 0 !== br.costPrice,
                    canSeeSellPrice: !!gi || void 0 !== br.price,
                    onSave: async function (t) {
                      if (ai && e) throw (_i(), Error('subscription_required'));
                      if (e) {
                        const e = { ...t },
                          o = br?.id || (0, E.randomUUID)();
                        e.photo?.startsWith('/v1/') && delete e.photo;
                        const r = await s.mutate('/products/' + o, 'PUT', {
                            details: {
                              ...e,
                              contentSize: e.contentSize ?? null,
                              contentUnit: e.contentUnit ?? null,
                              ...(void 0 === e.packSize
                                ? { packSize: null, packUnit: null }
                                : {}),
                            },
                            version: br?.version || 0,
                          }),
                          n = r?.product || {
                            ...br,
                            ...t,
                            id: o,
                            stock: br?.stock || 0,
                          };
                        return (
                          (null == t.price && null == t.costPrice) ||
                            s.refresh(),
                          Sr(!1),
                          yn(Ae.fa.saved),
                          void ('made' !== t.kind || br?.id
                            ? Xi()
                            : (xr(n), gr('recipe')))
                        );
                      }
                      const o =
                        br?.id || 'catalog-' + Date.now() + '-' + ++ia.current;
                      (Gi((0, ie.saveProduct)(ar.current, o, t)),
                        Xi(),
                        yn(
                          r
                            ? (0, eo.L)(
                                '\u062f\u0631 \u062d\u0627\u0641\u0638\u0647 \u0646\u0633\u062e\u0647 \u0646\u0645\u0627\u06cc\u0634\u06cc \u062b\u0628\u062a \u0634\u062f.',
                              )
                            : Ae.fa.localSaved,
                        ),
                        r || (0, Fe.logEvent)('catalog.updated', 'catalog', 1));
                    },
                    onArchiveAsNew: br.id
                      ? async () => {
                          const e = { ...br, id: '', stock: 0, kind: 'made' };
                          (await Zi(!1), xr(e), Sr(!0));
                        }
                      : void 0,
                    onClose: Xi,
                    onStock: () => {
                      (Mr(br.name),
                        Kr(br.id),
                        Gr(br.unit || 'piece'),
                        (Br.current = null),
                        xr(null),
                        Sr(!1),
                        za('add'));
                    },
                  },
                  br.id || 'new',
                ),
            ],
          }),
          bs = fr ? (0, Gt.groupModels)(nr.products).get(fr) : void 0,
          xs =
            !!gi ||
            ('staff' === ii
              ? !!e?.access?.see.sellPrice
              : nr.products.some((e) => void 0 !== e.price)),
          ks =
            !!gi ||
            ('staff' === ii
              ? !!e?.access?.see.buyPrice
              : nr.products.some((e) => void 0 !== e.costPrice)),
          Ss = !!e && (!!gi || ('staff' === ii && !!e.access?.do.catalog));
        const ws =
            /\u06a9\u0641\u0634|\u067e\u0648\u0634\u0627\u06a9|\u0644\u0628\u0627\u0633|\u0645\u0627\u0646\u062a\u0648|\u06a9\u06cc\u0641|\u062c\u0648\u0631\u0627\u0628|\u067e\u06cc\u0631\u0627\u0647\u0646|\u0634\u0644\u0648\u0627\u0631|\u0628\u0648\u062a\u06cc\u06a9/.test(
              String(e?.businessExample || ''),
            ) || nr.products.some((e) => !!e.model),
          js = !!e && !!gi,
          Ps = () => {
            ai ? _i() : gr('recipes');
          },
          Cs = () => {
            ai ? _i() : (yr(null), gr('variants'));
          },
          Is = ui.includes('sold'),
          Es = () => {
            ai ? _i() : gr('basket');
          },
          Ls = () => {
            ai ? _i() : gr('receiveBasket');
          },
          Rs = (t) =>
            yi && e && Is
              ? (0, so.jsx)(_t.StartInvoiceButton, {
                  testID: t,
                  draftKey: li || e.id,
                  products: nr.products,
                  refresh: vr,
                  onPress: Es,
                  onReceive: Ds ? Ls : void 0,
                })
              : null,
          Bs =
            yi &&
            (() => {
              const t = [
                  ...(js
                    ? [
                        [
                          'add-variants',
                          'tag',
                          (0, eo.L)(
                            '\u0633\u0627\u06cc\u0632 \u0648 \u0631\u0646\u06af',
                          ),
                          Cs,
                        ],
                      ]
                    : []),
                  ...(e
                    ? [
                        [
                          'add-to-buy',
                          'bell',
                          (0, eo.L)(
                            '\u0644\u06cc\u0633\u062a \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc',
                          ),
                          () => {
                            (Ri('list'), gr('toBuy'));
                          },
                        ],
                      ]
                    : []),
                  ...(e && Is
                    ? [
                        [
                          'add-receipts',
                          'receipt',
                          (0, eo.L)(
                            '\u0631\u0633\u06cc\u062f\u0647\u0627\u06cc \u0641\u0631\u0648\u0634',
                          ),
                          () => gr('salesList'),
                        ],
                      ]
                    : []),
                  ...(gi
                    ? [
                        [
                          'add-import-link',
                          'upload',
                          (0, eo.L)(
                            '\u0627\u0646\u062a\u0642\u0627\u0644 \u0641\u0627\u06cc\u0644',
                          ),
                          () => {
                            (Qn('imports'), za('data'));
                          },
                        ],
                      ]
                    : []),
                ],
                o = Oo ? 2 : t.length,
                r = Oo
                  ? [t.slice(0, 2), t.slice(2, 4)].filter((e) => e.length)
                  : [t];
              return Oo
                ? (0, so.jsx)(ge.default, {
                    testID: 'add-shortcuts',
                    style: { gap: 8 },
                    children: r.map((e, t) =>
                      (0, so.jsxs)(
                        ge.default,
                        {
                          style: { flexDirection: 'row-reverse', gap: 8 },
                          children: [
                            e.map(([e, t, o, r]) =>
                              (0, so.jsxs)(
                                ye.default,
                                {
                                  testID: e,
                                  accessibilityRole: 'button',
                                  accessibilityLabel: o,
                                  onPress: r,
                                  style: ({ pressed: e }) => ({
                                    flex: 1,
                                    minWidth: 0,
                                    flexDirection: 'row-reverse',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 5,
                                    height: 36,
                                    paddingHorizontal: 6,
                                    borderRadius: 18,
                                    borderWidth: 1,
                                    borderColor: Do.accent,
                                    backgroundColor: e
                                      ? Do.accentSoft
                                      : 'transparent',
                                  }),
                                  children: [
                                    (0, so.jsx)(De.Icon, {
                                      name: t,
                                      size: 15,
                                      color: Do.accent,
                                    }),
                                    (0, so.jsx)(Te.Copy, {
                                      numberOfLines: 1,
                                      adjustsFontSizeToFit: !0,
                                      minimumFontScale: 0.8,
                                      style: {
                                        flexShrink: 1,
                                        fontSize: 12.5,
                                        color: Do.accent,
                                        fontFamily: 'Vazirmatn_600SemiBold',
                                      },
                                      children: o,
                                    }),
                                  ],
                                },
                                e,
                              ),
                            ),
                            Array.from({ length: o - e.length }, (e, t) =>
                              (0, so.jsx)(
                                ge.default,
                                { style: { flex: 1 } },
                                'pad' + t,
                              ),
                            ),
                          ],
                        },
                        t,
                      ),
                    ),
                  })
                : (0, so.jsx)(ke.ScrollView, {
                    ref: ri,
                    testID: 'add-shortcuts',
                    horizontal: !0,
                    ...O.noSwipe,
                    showsHorizontalScrollIndicator: !1,
                    keyboardShouldPersistTaps: 'handled',
                    onContentSizeChange: () => {},
                    style: { flexGrow: 0, direction: 'rtl' },
                    contentContainerStyle: {
                      flexGrow: 1,
                      flexDirection: 'row',
                      gap: 8,
                    },
                    children: t.map(([e, t, o, r]) =>
                      (0, so.jsxs)(
                        ye.default,
                        {
                          testID: e,
                          accessibilityRole: 'button',
                          accessibilityLabel: o,
                          onPress: r,
                          style: ({ pressed: e }) => ({
                            flexDirection: 'row-reverse',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 5,
                            minHeight: 44,
                            paddingHorizontal: 12,
                            borderRadius: 22,
                            borderWidth: 1,
                            borderColor: Do.accent,
                            backgroundColor: e ? Do.accentSoft : 'transparent',
                          }),
                          children: [
                            (0, so.jsx)(De.Icon, {
                              name: t,
                              size: 15,
                              color: Do.accent,
                            }),
                            (0, so.jsx)(Te.Copy, {
                              style: {
                                fontSize: 12.5,
                                color: Do.accent,
                                fontFamily: 'Vazirmatn_600SemiBold',
                              },
                              children: o,
                            }),
                          ],
                        },
                        e,
                      ),
                    ),
                  });
            })(),
          Ds = ui.includes('received'),
          Ts = Oo
            ? [
                yi && e && Is
                  ? {
                      id: 'new-invoice',
                      label: (0, eo.L)(
                        '\u0641\u0627\u06a9\u062a\u0648\u0631 \u062a\u0627\u0632\u0647',
                      ),
                      icon: 'cart',
                      shortcut: 'newInvoice',
                      run: () => Pa(Es),
                    }
                  : null,
                yi && Ds
                  ? {
                      id: 'goods-in',
                      label: (0, eo.L)(
                        '\u0648\u0631\u0648\u062f \u06a9\u0627\u0644\u0627',
                      ),
                      icon: 'plus',
                      shortcut: 'goodsIn',
                      run: () =>
                        Pa(() => {
                          if (e)
                            return ai ? void _i() : void gr('receiveBasket');
                          (dn('received'), za('add'));
                        }),
                    }
                  : null,
                e && Ma
                  ? {
                      id: 'new-expense',
                      label: (0, eo.L)(
                        '\u0647\u0632\u06cc\u0646\u0647\u0654 \u062a\u0627\u0632\u0647',
                      ),
                      icon: 'wallet',
                      run: () => Pa(() => (0, xt.openExpenses)({ fresh: !0 })),
                    }
                  : null,
                Wa.ledger
                  ? {
                      id: 'ledger',
                      label: (0, eo.L)(
                        '\u062d\u0633\u0627\u0628\u200c\u0647\u0627',
                      ),
                      icon: 'user',
                      shortcut: 'ledger',
                      run: () => Pa(Wa.ledger),
                    }
                  : null,
                Wa.cheques
                  ? {
                      id: 'cheques',
                      label: (0, eo.L)('\u0686\u06a9\u200c\u0647\u0627'),
                      icon: 'cheque',
                      shortcut: 'cheques',
                      run: () => Pa(Wa.cheques),
                    }
                  : null,
                Wa.invoices
                  ? {
                      id: 'invoices',
                      label: (0, eo.L)(
                        '\u0641\u0627\u06a9\u062a\u0648\u0631\u0647\u0627',
                      ),
                      icon: 'receipt',
                      shortcut: 'invoices',
                      run: () => Pa(Wa.invoices),
                    }
                  : null,
                Wa.expenses
                  ? {
                      id: 'expenses',
                      label: (0, eo.L)(
                        '\u0647\u0632\u06cc\u0646\u0647\u200c\u0647\u0627',
                      ),
                      icon: 'wallet',
                      shortcut: 'expenses',
                      run: () => Pa(Wa.expenses),
                    }
                  : null,
                Wa.reminders
                  ? {
                      id: 'reminders',
                      label: (0, eo.L)(
                        '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc\u200c\u0647\u0627',
                      ),
                      icon: 'bell',
                      shortcut: 'reminders',
                      run: () => Pa(Wa.reminders),
                    }
                  : null,
                Wa.reports
                  ? {
                      id: 'report',
                      label: (0, eo.L)(
                        '\u06af\u0632\u0627\u0631\u0634 \u0627\u0645\u0631\u0648\u0632',
                      ),
                      icon: 'chart',
                      shortcut: 'report',
                      run: () => Pa(Wa.reports),
                    }
                  : null,
                {
                  id: 'home',
                  label: (0, eo.L)(
                    '\u062f\u0627\u0634\u0628\u0648\u0631\u062f',
                  ),
                  icon: 'dashboard',
                  shortcut: 'home',
                  run: () => Pa(() => za('home')),
                },
                {
                  id: 'inventory',
                  label: (0, eo.L)('\u0645\u0648\u062c\u0648\u062f\u06cc'),
                  icon: 'inventory',
                  shortcut: 'inventory',
                  run: () => Pa(() => za('inventory')),
                },
              ].filter((e) => !!e)
            : [],
          zs = (e) => {
            (f.basketAdds.put({ productId: e.id, mode: 'sale' }), Pa(Es));
          },
          As = (e) => {
            ai
              ? _i()
              : (f.basketAdds.put({ productId: e.id, mode: 'receive' }),
                Pa(() => gr('receiveBasket')));
          };
        async function qs(t) {
          ai && e
            ? _i()
            : (e
                ? await s.mutate('/products/' + t.id, 'DELETE', {
                    version: t.version || 1,
                  })
                : Gi((0, ie.deleteProducts)(ar.current, [t.id])),
              yn(Ae.fa.deleteDone));
        }
        const _s = Oo
            ? {
                onMinus: yi && e && Is ? zs : void 0,
                onPlus: yi && e && Ds ? As : void 0,
                items: (t) =>
                  [
                    yi && e && Is
                      ? {
                          id: 'sell',
                          label: (0, eo.L)(
                            '\u0641\u0631\u0648\u0634 (\u0628\u0647 \u0641\u0627\u06a9\u062a\u0648\u0631 \u0628\u0627\u0632)',
                          ),
                          icon: 'cart',
                          keyHint: 'S',
                          run: () => zs(t),
                        }
                      : null,
                    yi && e && Ds
                      ? {
                          id: 'receive',
                          label: (0, eo.L)(
                            '\u0648\u0631\u0648\u062f \u06a9\u0627\u0644\u0627',
                          ),
                          icon: 'plus',
                          keyHint: 'R',
                          run: () => As(t),
                        }
                      : null,
                    gi
                      ? {
                          id: 'edit',
                          label: (0, eo.L)(
                            '\u0648\u06cc\u0631\u0627\u06cc\u0634',
                          ),
                          icon: 'edit',
                          keyHint: 'E',
                          run: () => {
                            ((Br.current = {
                              tab: or,
                              panel: vr,
                              modelKey: fr,
                            }),
                              gr(null),
                              xr(t),
                              Sr(!0),
                              jr(!1));
                          },
                        }
                      : null,
                    gi
                      ? {
                          id: 'prices',
                          label: (0, eo.L)(
                            '\u0642\u06cc\u0645\u062a\u200c\u0647\u0627 \u0648 \u0633\u0648\u062f',
                          ),
                          icon: 'chart',
                          run: () => Qi(t.id, 'price'),
                        }
                      : null,
                    {
                      id: 'history',
                      label: (0, eo.L)(
                        '\u06af\u0631\u062f\u0634 \u0627\u06cc\u0646 \u06a9\u0627\u0644\u0627',
                      ),
                      icon: 'clock',
                      keyHint: 'H',
                      run: () => Ji(t),
                    },
                    {
                      id: 'barcode',
                      label: (0, eo.L)(
                        '\u06a9\u067e\u06cc \u0628\u0627\u0631\u06a9\u062f',
                      ),
                      icon: 'barcode',
                      disabled: !t.barcode,
                      run: () => {
                        const e = t.barcode || '';
                        try {
                          navigator.clipboard?.writeText(e).then(
                            () =>
                              (0, Y.showToast)(
                                (0, eo.L)(
                                  '\u0628\u0627\u0631\u06a9\u062f \u06a9\u067e\u06cc \u0634\u062f',
                                ),
                              ),
                            () => (0, Y.showToast)(e),
                          );
                        } catch {
                          (0, Y.showToast)(e);
                        }
                      },
                    },
                    gi
                      ? {
                          id: 'delete',
                          label: (0, eo.L)('\u062d\u0630\u0641'),
                          icon: 'close',
                          keyHint: 'Del',
                          danger: !0,
                          run: () =>
                            ba({
                              title: (0, eo.L)(
                                '\u062d\u0630\u0641 \u06a9\u0627\u0644\u0627',
                              ),
                              text: (0, eo.L)(
                                '\xab{name}\xbb \u062d\u0630\u0641 \u0634\u0648\u062f\u061f \u0641\u0631\u0648\u0634\u200c\u0647\u0627\u06cc \u06af\u0630\u0634\u062a\u0647\u200c\u0627\u0634 \u0645\u06cc\u200c\u0645\u0627\u0646\u0646\u062f.',
                                { name: t.name },
                              ),
                              ok: (0, eo.L)('\u062d\u0630\u0641'),
                              tone: 'danger',
                              run: () => qs(t),
                            }),
                        }
                      : null,
                  ].filter((e) => !!e),
              }
            : void 0,
          Os =
            Oo &&
            (0, so.jsx)(q.DesktopCommands, {
              products: nr.products,
              showPrice: !fi || fi.sellPrice,
              actions: Ts,
              onProduct: (e) => Pa(() => Ji(e)),
            }),
          Fs =
            'ledger' === ga || 'people' === ga
              ? 'accounts'
              : 'cheques' === ga
                ? 'cheques'
                : 'invoices' === ga
                  ? 'invoices'
                  : 'expenses' === ga
                    ? 'expenses'
                    : 'staff' === ga
                      ? 'staff'
                      : 'toBuy' === vr
                        ? 'toBuy'
                        : 'recipes' === vr || 'recipe' === vr
                          ? 'recipes'
                          : 'receiveBasket' === vr
                            ? 'goodsIn'
                            : 'expiryList' === vr
                              ? 'expiry'
                              : ga
                                ? ''
                                : 'data' === or
                                  ? 'history' === Vn
                                    ? 'history'
                                    : 'report'
                                  : or,
          Us = [
            {
              id: 'money',
              label: (0, eo.L)('\u0645\u0627\u0644\u06cc'),
              icon: 'wallet',
              items: [
                {
                  id: 'accounts',
                  label: (0, eo.L)(
                    '\u062d\u0633\u0627\u0628\u200c\u0647\u0627',
                  ),
                  run: Wa.ledger,
                },
                {
                  id: 'cheques',
                  label: (0, eo.L)('\u0686\u06a9\u200c\u0647\u0627'),
                  run: Wa.cheques,
                  badge: ja,
                },
                {
                  id: 'invoices',
                  label: (0, eo.L)(
                    '\u0641\u0627\u06a9\u062a\u0648\u0631\u0647\u0627',
                  ),
                  run: Wa.invoices,
                },
                {
                  id: 'expenses',
                  label: (0, eo.L)(
                    '\u0647\u0632\u06cc\u0646\u0647\u200c\u0647\u0627',
                  ),
                  run: Wa.expenses,
                },
                {
                  id: 'report',
                  label: (0, eo.L)(
                    '\u06af\u0632\u0627\u0631\u0634 \u0648 \u062f\u0631\u0622\u0645\u062f',
                  ),
                  run: mi
                    ? () => {
                        (Qn('analytics'), za('data'));
                      }
                    : void 0,
                },
              ],
            },
            {
              id: 'stock',
              label: (0, eo.L)('\u0627\u0646\u0628\u0627\u0631'),
              icon: 'inventory',
              items: [
                {
                  id: 'inventory',
                  label: (0, eo.L)('\u0645\u0648\u062c\u0648\u062f\u06cc'),
                  run: () => za('inventory'),
                },
                {
                  id: 'goodsIn',
                  label: (0, eo.L)(
                    '\u0648\u0631\u0648\u062f \u06a9\u0627\u0644\u0627',
                  ),
                  run:
                    yi && Ds
                      ? () => {
                          if (e)
                            return ai ? void _i() : void gr('receiveBasket');
                          (dn('received'), za('add'));
                        }
                      : void 0,
                },
                {
                  id: 'expiry',
                  label: (0, eo.L)(
                    '\u0631\u0648 \u0628\u0647 \u0627\u0646\u0642\u0636\u0627',
                  ),
                  run: () => gr('expiryList'),
                },
                {
                  id: 'recipes',
                  label: (0, eo.L)(
                    '\u062f\u0633\u062a\u0648\u0631 \u0633\u0627\u062e\u062a',
                  ),
                  run: js ? Ps : void 0,
                },
                {
                  id: 'toBuy',
                  label: (0, eo.L)(
                    '\u0644\u06cc\u0633\u062a \u062e\u0631\u06cc\u062f',
                  ),
                  run: e
                    ? () => {
                        (Ri('list'), gr('toBuy'));
                      }
                    : void 0,
                },
              ],
            },
            {
              id: 'changes',
              label: (0, eo.L)('\u062a\u063a\u06cc\u06cc\u0631\u0627\u062a'),
              icon: 'clock',
              items: [
                {
                  id: 'history',
                  label: (0, eo.L)(
                    '\u062a\u0627\u0631\u06cc\u062e\u0686\u0647',
                  ),
                  run: () => {
                    (Qn('history'), za('data'));
                  },
                },
              ],
            },
            {
              id: 'staff',
              label: (0, eo.L)(
                '\u06a9\u0627\u0631\u0645\u0646\u062f\u0627\u0646',
              ),
              icon: 'user',
              items: [
                {
                  id: 'staff',
                  label: (0, eo.L)(
                    '\u0645\u062f\u06cc\u0631\u06cc\u062a \u062d\u0633\u0627\u0628\u200c\u0647\u0627',
                  ),
                  run: Wa.staff,
                },
                {
                  id: 'access',
                  label: (0, eo.L)(
                    '\u0627\u0641\u0632\u0648\u062f\u0646 \u0628\u0647 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc',
                  ),
                  run: Wa.staff
                    ? () =>
                        pt.ledgerEntries.open({
                          screen: 'staff',
                          staffPart: 'access',
                        })
                    : void 0,
                },
              ],
            },
          ]
            .map((e) => ({ ...e, items: e.items.filter((e) => !!e.run) }))
            .filter((e) => e.items.length > 0),
          Ms = (e, t, o, r, n, i, a = !1) =>
            (0, so.jsxs)(
              ye.default,
              {
                testID: e,
                accessibilityRole: 'tab',
                accessibilityLabel: o,
                accessibilityState: { selected: r },
                onPress: n,
                style: ({ pressed: e, hovered: t }) => ({
                  height: a ? 40 : 48,
                  paddingHorizontal: 14,
                  borderRadius: 13,
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  gap: 12,
                  backgroundColor:
                    r && !i ? Do.accentSoft : e || t ? Do.soft : 'transparent',
                }),
                children: [
                  (0, so.jsx)(De.Icon, {
                    name: t,
                    active: r,
                    size: a ? 18 : 21,
                    color: r ? Do.accent : Do.muted,
                  }),
                  (0, so.jsx)(Te.Copy, {
                    style: {
                      flex: 1,
                      fontSize: a ? 13 : 15,
                      lineHeight: a ? 20 : 24,
                      fontFamily: r
                        ? 'Vazirmatn_600SemiBold'
                        : 'Vazirmatn_400Regular',
                      color: r ? Do.accent : a ? Do.muted : Do.text,
                    },
                    children: o,
                  }),
                  i,
                ],
              },
              e,
            ),
          Hs = (e) =>
            (0, so.jsx)(ge.default, {
              style: {
                minWidth: 20,
                height: 20,
                paddingHorizontal: 6,
                borderRadius: 10,
                backgroundColor: Do.danger,
                alignItems: 'center',
                justifyContent: 'center',
              },
              children: (0, so.jsx)(Te.Copy, {
                style: {
                  fontSize: 11.5,
                  lineHeight: 18,
                  color: 'dark' === Bo ? '#3a0d0d' : '#ffffff',
                  fontFamily: 'Vazirmatn_600SemiBold',
                },
                children: (0, eo.localDigits)(e),
              }),
            }),
          Ns =
            Oo &&
            (0, so.jsxs)(ge.default, {
              testID: 'desk-nav',
              accessibilityRole: 'tablist',
              style: { gap: 4 },
              children: [
                Ms('tab-home', 'dashboard', Ae.fa.home, 'home' === Fs, () =>
                  Pa(() => za('home')),
                ),
                Us.map((e) => {
                  const t = ka === e.id,
                    o = e.items.some((e) => e.id === Fs),
                    r = e.items.reduce((e, t) => e + (t.badge || 0), 0);
                  return (0, so.jsxs)(
                    ge.default,
                    {
                      children: [
                        Ms(
                          'nav-group-' + e.id,
                          e.icon,
                          e.label,
                          o,
                          () => Sa(t ? null : e.id),
                          (0, so.jsxs)(ge.default, {
                            style: {
                              flexDirection: 'row-reverse',
                              alignItems: 'center',
                              gap: 8,
                            },
                            children: [
                              r > 0 && !t ? Hs(r) : null,
                              (0, so.jsx)(ge.default, {
                                style: {
                                  transform: [
                                    { rotate: t ? '-90deg' : '0deg' },
                                  ],
                                },
                                children: (0, so.jsx)(De.Icon, {
                                  name: 'chevron',
                                  size: 15,
                                  color: Do.muted,
                                }),
                              }),
                            ],
                          }),
                        ),
                        t &&
                          (0, so.jsx)(ge.default, {
                            testID: 'nav-items-' + e.id,
                            style: {
                              gap: 2,
                              marginRight: 24,
                              paddingRight: 10,
                              borderRightWidth: 1,
                              borderColor: Do.line,
                              marginTop: 2,
                              marginBottom: 6,
                            },
                            children: e.items.map((e) => {
                              const t = e.id === Fs;
                              return (0, so.jsxs)(
                                ye.default,
                                {
                                  testID: 'nav-' + e.id,
                                  accessibilityRole: 'tab',
                                  accessibilityLabel: e.label,
                                  accessibilityState: { selected: t },
                                  onPress: () => Pa(e.run),
                                  style: ({ pressed: e, hovered: o }) => ({
                                    height: 38,
                                    paddingHorizontal: 12,
                                    borderRadius: 11,
                                    flexDirection: 'row-reverse',
                                    alignItems: 'center',
                                    gap: 8,
                                    backgroundColor: t
                                      ? Do.accentSoft
                                      : e || o
                                        ? Do.soft
                                        : 'transparent',
                                  }),
                                  children: [
                                    (0, so.jsx)(Te.Copy, {
                                      style: {
                                        flex: 1,
                                        fontSize: 14,
                                        lineHeight: 22,
                                        fontFamily: t
                                          ? 'Vazirmatn_600SemiBold'
                                          : 'Vazirmatn_400Regular',
                                        color: t ? Do.accent : Do.text,
                                      },
                                      children: e.label,
                                    }),
                                    e.badge ? Hs(e.badge) : null,
                                  ],
                                },
                                e.id,
                              );
                            }),
                          }),
                      ],
                    },
                    e.id,
                  );
                }),
              ],
            }),
          Ws =
            Oo &&
            (0, so.jsxs)(ge.default, {
              style: {
                gap: 2,
                paddingTop: 12,
                borderTopWidth: 1,
                borderColor: Do.line,
              },
              children: [
                Ms(
                  'tab-learn',
                  'ai',
                  Et.notebookFa.learn,
                  'learn' === Fs,
                  () => Pa(() => za('learn')),
                  void 0,
                  !0,
                ),
                Ms(
                  'tab-profile',
                  'profile',
                  Ae.fa.profile,
                  'profile' === Fs,
                  () => Pa(() => za('profile')),
                  void 0,
                  !0,
                ),
              ],
            }),
          Ks =
            Oo &&
            (0, so.jsxs)(ge.default, {
              testID: 'desktop-sidebar',
              style: {
                width: (0, T.sidebarWidth)(qo),
                paddingHorizontal: 16,
                paddingTop: zo.top + 24,
                paddingBottom: zo.bottom + 18,
                gap: 18,
                backgroundColor: Do.surface,
                borderLeftWidth: 1,
                borderColor: Do.line,
                overflowY: 'auto',
              },
              children: [
                (0, so.jsxs)(ge.default, {
                  style: {
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    gap: 10,
                    paddingHorizontal: 6,
                  },
                  children: [
                    (0, so.jsx)(ee.BrandMark, { size: 42 }),
                    (0, so.jsxs)(ge.default, {
                      style: { flex: 1, minWidth: 0 },
                      children: [
                        (0, so.jsx)(Te.Copy, {
                          style: {
                            fontSize: 21,
                            lineHeight: 30,
                            fontFamily: 'Vazirmatn_700Bold',
                          },
                          children: Ae.fa.brand,
                        }),
                        (0, so.jsx)(Te.Copy, {
                          numberOfLines: 1,
                          style: {
                            fontSize: 11,
                            lineHeight: 16,
                            color: Do.muted,
                          },
                          children: Ho,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, so.jsx)(ye.default, {
                  testID: 'tab-add',
                  accessibilityRole: 'tab',
                  accessibilityLabel: Ae.fa.add,
                  accessibilityState: { selected: 'add' === or && !ga },
                  onPress: () => Pa(() => za('add')),
                  style: {
                    height: 50,
                    borderRadius: 15,
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    backgroundColor: Do.brand[1],
                  },
                  children: ({ pressed: e }) =>
                    (0, so.jsxs)(so.Fragment, {
                      children: [
                        (0, so.jsx)(Be.BrandFill, {
                          radius: 15,
                          pressed: e || ('add' === or && !ga),
                        }),
                        (0, so.jsx)(ge.default, {
                          children: (0, so.jsx)(De.Icon, {
                            name: 'plus',
                            size: 22,
                            color: Do.onBrand,
                          }),
                        }),
                        (0, so.jsx)(Te.Copy, {
                          style: {
                            fontSize: 15,
                            lineHeight: 24,
                            fontFamily: 'Vazirmatn_700Bold',
                            color: Do.onBrand,
                          },
                          children: Ae.fa.add,
                        }),
                      ],
                    }),
                }),
                Ns,
                (0, so.jsx)(ge.default, { style: { flex: 1 } }),
                Ws,
                (0, so.jsxs)(ge.default, {
                  style: {
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 10,
                    paddingTop: 14,
                    borderTopWidth: 1,
                    borderColor: Do.line,
                  },
                  children: [
                    e &&
                      (0, so.jsxs)(ge.default, {
                        style: { alignItems: 'flex-end', gap: 4 },
                        children: [
                          (0, so.jsx)(Ge.SyncChip, {
                            state: s.syncState,
                            notice: s.notice,
                            pending: s.pending,
                          }),
                          s.retryFailed &&
                            (0, so.jsx)(ye.default, {
                              testID: 'retry-failed-operation',
                              accessibilityRole: 'button',
                              onPress: s.retryFailed,
                              children: (0, so.jsx)(Te.Copy, {
                                style: { fontSize: 11, color: Do.danger },
                                children: I.platformFa.retryOperation,
                              }),
                            }),
                        ],
                      }),
                    (0, so.jsx)(ge.default, { style: { flex: 1 } }),
                    Ga,
                    Ya,
                    (0, so.jsx)(ye.default, {
                      testID: 'theme-toggle',
                      accessibilityRole: 'button',
                      accessibilityLabel:
                        'light' === Bo ? Ae.fa.darkMode : Ae.fa.lightMode,
                      onPress: Ja,
                      style: [
                        ko.themeButton,
                        { backgroundColor: Do.soft, borderColor: Do.line },
                      ],
                      children: (0, so.jsx)(De.Icon, {
                        name: 'light' === Bo ? 'moon' : 'sun',
                        size: 20,
                        color: Do.text,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          Vs = (e) =>
            Oo
              ? (0, so.jsxs)(ge.default, {
                  testID: 'desktop-shell',
                  style: [
                    ko.root,
                    { backgroundColor: Do.bg, flexDirection: 'row-reverse' },
                  ],
                  children: [
                    Ks,
                    (0, so.jsx)(ge.default, {
                      style: Te.common.flex,
                      children: e,
                    }),
                    Os,
                  ],
                })
              : e;
        if ('support' === vr && e && t && !r)
          return Vs(
            (0, so.jsxs)(ge.default, {
              style: [ko.root, { backgroundColor: Do.bg }],
              children: [
                (0, so.jsx)(we.StatusBar, { style: 'light' }),
                (0, so.jsx)(F.SwipeBack, {
                  onBack: ha,
                  children: (0, so.jsx)(X.SupportCenter, {
                    shop: e,
                    user: t,
                    access: Po.access,
                    planId: xi,
                    planEndsAt:
                      Co.data?.subscription?.expires_at ?? Po.trialEndsAt,
                    onClose: () => gr(null),
                    onAccount: () => {
                      (gr(null), (0, Q.openAccountPage)());
                    },
                  }),
                }),
              ],
            }),
          );
        const Gs = vs || ho.includes(vr || ''),
          Ys = Oo && !!br && !vr && (0, O.swipeBackOn)('web', _o),
          Js = 'scan' === vr && (0, O.swipeBackOn)('web', _o),
          Qs = (!!vr && !Gs) || (Oo && !!br),
          Xs = !1,
          $s = (0, so.jsx)(Me.ConfirmDiscard, {
            inline: Xs,
            visible: Rn,
            onKeep: () => Bn(!1),
            onDiscard: pa,
          }),
          Zs = (0, so.jsx)(Qe.UpgradePopup, {
            ownerOnly: 'staff' === ii,
            fresh: Po.fresh,
            visible: qn,
            offer: Po.offer,
            message: On,
            retry: Un,
            onClose: () => {
              (_n(!1), Fn(void 0), Mn(!1));
            },
            onUpgrade: () => {
              (vs && Xi(), (0, Q.openSubscriptionPage)(), za('profile'));
            },
            onExport: () => {
              (vs && Xi(), Qn('exports'), za('data'));
            },
          }),
          el = Gs
            ? (0, so.jsxs)(ge.default, {
                style: [
                  ko.root,
                  {
                    backgroundColor: Do.bg,
                    paddingHorizontal: 16,
                    paddingTop: Math.max(zo.top, 12),
                    paddingBottom: Math.max(zo.bottom, 12),
                  },
                ],
                children: [
                  (0, so.jsx)(we.StatusBar, {
                    style: 'dark' === Bo ? 'light' : 'dark',
                  }),
                  ki &&
                    (0, so.jsx)(ge.default, {
                      style: { marginBottom: 10 },
                      children: (0, so.jsx)(et.DemoBanner, { onTrial: n }),
                    }),
                  (0, so.jsxs)(he.default, {
                    style: [
                      Te.common.flex,
                      mo.includes(vr || '') &&
                        !(
                          Oo &&
                          ('basket' === vr || 'receiveBasket' === vr)
                        ) && {
                          width: '100%',
                          maxWidth: 760,
                          alignSelf: 'center',
                        },
                    ],
                    behavior: Ne.keyboardBehavior,
                    children: [
                      vs &&
                        br &&
                        (0, so.jsxs)(ge.default, {
                          testID: 'product-full-page',
                          style: {
                            flex: 1,
                            minHeight: 0,
                            gap: 14,
                            width: '100%',
                            maxWidth: 760,
                            alignSelf: 'center',
                          },
                          children: [
                            (0, so.jsxs)(ge.default, {
                              style: {
                                flexDirection: 'row-reverse',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: 10,
                              },
                              children: [
                                (0, so.jsxs)(ge.default, {
                                  style: { flex: 1, minWidth: 0 },
                                  children: [
                                    (0, so.jsx)(Te.Copy, {
                                      accessibilityRole: 'header',
                                      numberOfLines: 1,
                                      style: {
                                        fontSize: 21,
                                        lineHeight: 30,
                                        fontFamily: 'Vazirmatn_700Bold',
                                      },
                                      children: br.name || Ae.fa.newProduct,
                                    }),
                                    (0, so.jsx)(Te.Copy, {
                                      style: {
                                        fontSize: 12,
                                        lineHeight: 18,
                                        color: Do.muted,
                                      },
                                      children: Ae.fa.productDetails,
                                    }),
                                  ],
                                }),
                                (0, so.jsx)(ye.default, {
                                  testID: 'sheet-close',
                                  accessibilityRole: 'button',
                                  onPress: Xi,
                                  style: ({ pressed: e }) => ({
                                    minHeight: 40,
                                    paddingHorizontal: 16,
                                    borderRadius: 999,
                                    justifyContent: 'center',
                                    borderWidth: ve.default.hairlineWidth,
                                    borderColor: Do.line,
                                    backgroundColor: e ? Do.line : Do.soft,
                                  }),
                                  children: (0, so.jsx)(Te.Copy, {
                                    style: {
                                      fontSize: 14,
                                      lineHeight: 22,
                                      fontFamily: 'Vazirmatn_600SemiBold',
                                    },
                                    children: (0, eo.L)(
                                      '\u0628\u0633\u062a\u0646',
                                    ),
                                  }),
                                }),
                              ],
                            }),
                            s.retryFailed &&
                              (0, so.jsxs)(Te.Card, {
                                style: { padding: 10 },
                                children: [
                                  (0, so.jsx)(Te.Copy, { children: s.notice }),
                                  (0, so.jsx)(Te.Button, {
                                    secondary: !0,
                                    onPress: s.retryFailed,
                                    children: I.platformFa.retryOperation,
                                  }),
                                ],
                              }),
                            gs,
                            Oo &&
                              (0, so.jsx)(Qe.UpgradePopup, {
                                ownerOnly: 'staff' === ii,
                                fresh: Po.fresh,
                                visible: qn,
                                offer: Po.offer,
                                message: On,
                                retry: Un,
                                onClose: () => {
                                  (_n(!1), Fn(void 0), Mn(!1));
                                },
                                onUpgrade: () => {
                                  (Xi(),
                                    (0, Q.openSubscriptionPage)(),
                                    za('profile'));
                                },
                                onExport: () => {
                                  (Xi(), Qn('exports'), za('data'));
                                },
                              }),
                          ],
                        }),
                      ('basket' === vr || 'receiveBasket' === vr) &&
                        e &&
                        (0, so.jsx)(qt.Basket, {
                          sides:
                            yi && Is && Ds
                              ? {
                                  value: 'basket' === vr ? 'sale' : 'receive',
                                  onChange: (e) =>
                                    gr(
                                      'sale' === e ? 'basket' : 'receiveBasket',
                                    ),
                                }
                              : void 0,
                          draftKey: li,
                          shop: e,
                          state: nr,
                          contacts: Ii,
                          startContact:
                            Lr &&
                            ('receive' === Lr.mode) == ('receiveBasket' === vr)
                              ? Lr
                              : null,
                          mode: 'basket' === vr ? 'sale' : 'receive',
                          canSeeBuyPrice: fi
                            ? fi.buyPrice
                            : nr.products.some(
                                (e) =>
                                  void 0 !== e.avgCost ||
                                  void 0 !== e.costPrice,
                              ),
                          onClose: () => gr(null),
                          onRefresh: () => {
                            s.refresh();
                          },
                          onProGate: () => _i(Et.notebookFa.proRequired),
                          onAccountOption: (t, o) =>
                            Pi
                              ? (0, so.jsx)(pt.AccountOption, {
                                  shop: e,
                                  contacts: Ii,
                                  value: t,
                                  onAccountOption: o,
                                })
                              : (_i(Et.notebookFa.proRequired), null),
                          onSaved: (e) => {
                            (Er(e), gr('receipt'));
                          },
                        }),
                      'receipt' === vr &&
                        Ir &&
                        (0, so.jsx)(Ft.Receipt, {
                          document: Ir,
                          shopName: Ho,
                          sendReady: dr === Ir.id,
                          onClose: () => {
                            (Er(null), ur(null), gr(null));
                          },
                        }),
                      'salesList' === vr &&
                        e &&
                        (0, so.jsx)(Ft.SalesList, {
                          shop: e,
                          onClose: () => gr(null),
                          onOpen: (e) => {
                            (Er(e), gr('receipt'));
                          },
                        }),
                      'activity' === vr &&
                        e &&
                        (0, so.jsx)(dt.ActivityList, {
                          shop: e,
                          state: nr,
                          canNote: si && (0, B.canWriteNotes)(ii, e?.access),
                          onClose: () => gr(null),
                          onSelect: Ji,
                        }),
                      'stockCount' === vr &&
                        (gi || (0, B.canCount)(ii, e?.access)) &&
                        (0, so.jsx)(Zt.StockCountList, {
                          state: nr,
                          onClose: () => gr(null),
                          onRefresh: e ? () => s.refresh() : void 0,
                          onSave: (e) => ts(e, 'manual', !0),
                        }),
                      'expiryList' === vr &&
                        (0, so.jsx)($t.ExpiringList, {
                          shop: e,
                          state: nr,
                          onClose: () => gr(null),
                        }),
                      'priceAdjust' === vr &&
                        e &&
                        (0, so.jsx)(Xt.PriceAdjust, {
                          shop: e,
                          categories: nr.categories || [],
                          version: s.snapshot?.revision || 0,
                          onClose: () => gr(null),
                          onApplied: () => {
                            s.refresh();
                          },
                        }),
                      'model' === vr &&
                        bs &&
                        (0, so.jsx)(
                          Vt.ModelPage,
                          {
                            group: bs,
                            movements: nr.movements,
                            canManage: !!gi && !!e,
                            canEditPrices: Ss,
                            canSeeSellPrice: xs,
                            canSeeBuyPrice: ks,
                            onSaveVariant: async function (t, o) {
                              if (!e) throw Error('forbidden');
                              if (ai)
                                throw (_i(), Error('subscription_required'));
                              if (
                                !gi &&
                                Object.keys(o).some(
                                  (e) => 'price' !== e && 'costPrice' !== e,
                                )
                              )
                                throw Error('forbidden');
                              if (
                                !Ss ||
                                ('price' in o && !xs) ||
                                ('costPrice' in o && !ks)
                              )
                                throw Error('forbidden');
                              const r = (0, Yt.modelUpdateBody)(t, o, {
                                price: xs,
                                costPrice: ks,
                              });
                              return (
                                await (0, E.request)(
                                  (0, E.shopPath)(e, '/products/' + t.id),
                                  'PUT',
                                  r,
                                  { key: (0, E.randomUUID)() },
                                ),
                                { ...t, ...o, version: r.version + 1 }
                              );
                            },
                            onSetStock: async (t, o) => {
                              if (!e || !gi) throw Error('forbidden');
                              let r;
                              return (
                                await ts(o, 'manual', !0, void 0, (e) => {
                                  r = e.find((e) => e.id === t.id);
                                }),
                                r
                              );
                            },
                            onRefresh: () => s.refresh(),
                            onBulkPrice: async (t, o, r) => {
                              if (!e || !Ss || !('price' === t ? xs : ks))
                                throw Error('forbidden');
                              if (ai)
                                throw (_i(), Error('subscription_required'));
                              await (0, E.request)(
                                (0, E.shopPath)(e, '/products/bulk'),
                                'POST',
                                {
                                  ids: bs.variants.map((e) => e.id),
                                  action: 'price',
                                  field: t,
                                  mode: o,
                                  value: r,
                                },
                                { key: (0, E.randomUUID)() },
                              );
                            },
                            onSelect: Ji,
                            onRenamed: (e) => mr((0, qe.normalizeName)(e)),
                            onAddVariants: () => {
                              (yr({ model: bs.model }), gr('variants'));
                            },
                            onReceive: () => {
                              (yr({ model: bs.model, receiveOnly: !0 }),
                                gr('variants'));
                            },
                            onClose: () => gr(null),
                          },
                          bs.key,
                        ),
                      'variants' === vr &&
                        e &&
                        (0, so.jsx)(
                          Kt.VariantEditor,
                          {
                            products: nr.products,
                            initialModel: hr?.model,
                            receiveOnly: hr?.receiveOnly,
                            canSeeBuyPrice: !!gi,
                            onCreate: async (e) => {
                              if (ai)
                                throw (_i(), Error('subscription_required'));
                              (await s.mutate('/products/variants', 'POST', e),
                                await s.refresh());
                            },
                            onReceive: async (e) => {
                              await ts(e, 'manual', !0);
                            },
                            onRefresh: () => s.refresh(),
                            onClose: (e) => {
                              const t = e ? (0, qe.normalizeName)(e) : '';
                              (yr(null),
                                t && (0, Gt.groupModels)(nr.products).get(t)
                                  ? (mr(t), gr('model'))
                                  : gr(null));
                            },
                          },
                          (hr?.model || 'new') +
                            (hr?.receiveOnly ? '-stock' : ''),
                        ),
                      S.TELEGRAM_BOT &&
                        'telegramInbox' === vr &&
                        e &&
                        (0, so.jsx)(k.TelegramInbox, {
                          shop: e,
                          products: nr.products,
                          onSaved: () => {
                            s.refresh();
                          },
                          onClose: () => gr(null),
                        }),
                      'toBuy' === vr &&
                        e &&
                        (0, so.jsx)(
                          u.RemindersPanel,
                          {
                            start: 'weekly' === Li ? 'weekly' : 'all',
                            shop: e,
                            products: nr.products,
                            onBought: async (e) => {
                              if (!e.quantity) return;
                              const t = nr.products.find(
                                (t) => t.id === e.productId && !t.archivedAt,
                              );
                              await ts(
                                [
                                  {
                                    name: t?.name || e.name,
                                    quantity: e.quantity,
                                    kind: 'received',
                                    ...(t ? { productId: t.id } : {}),
                                    ...(!e.unit ||
                                    (t && e.unit === (t.unit || 'piece'))
                                      ? {}
                                      : { unit: e.unit }),
                                  },
                                ],
                                'manual',
                                !0,
                              );
                            },
                            onClose: () => gr(null),
                            onPay: (e) => {
                              (gr(null),
                                (0, xt.openExpenses)(e ? { newFrom: e } : {}));
                            },
                            onLearn: () => {
                              (gr(null), Ua('home', 'reminders'));
                            },
                          },
                          Bi,
                        ),
                      'recipes' === vr &&
                        e &&
                        (0, so.jsx)(Wt.RecipeHub, {
                          shop: e,
                          products: nr.products,
                          onSaved: () => {
                            s.refresh();
                          },
                          onClose: () => gr(null),
                          onProduce: (e, t) => cs(e, 'production', t),
                        }),
                      'recipe' === vr &&
                        e &&
                        br &&
                        (0, so.jsx)(Nt.RecipeEditor, {
                          shop: e,
                          product: br,
                          products: nr.products,
                          onClose: () => gr(null),
                          onSaved: () => {
                            s.refresh();
                          },
                        }),
                    ],
                  }),
                ],
              })
            : null;
        if (Gs && Oo)
          return Vs(
            (0, so.jsx)(F.SwipeBack, {
              backdrop: !0,
              onBack: ha,
              children: el,
            }),
          );
        if ('batch' === vr)
          return Vs(
            (0, so.jsx)(F.SwipeBack, {
              backdrop: !0,
              onBack: ha,
              children: (0, so.jsxs)(ge.default, {
                style: [
                  ko.root,
                  { backgroundColor: Do.bg, padding: r ? 12 : 0 },
                  r && {
                    paddingTop: zo.top + 12,
                    paddingBottom: zo.bottom + 12,
                  },
                ],
                children: [
                  (0, so.jsx)(we.StatusBar, {
                    style: 'dark' === Bo ? 'light' : 'dark',
                  }),
                  ki && (0, so.jsx)(et.DemoBanner, { onTrial: n }),
                  ' ',
                  s.retryFailed &&
                    (0, so.jsxs)(Te.Card, {
                      style: { margin: 10, padding: 10 },
                      children: [
                        (0, so.jsx)(Te.Copy, { children: s.notice }),
                        (0, so.jsx)(Te.Button, {
                          secondary: !0,
                          onPress: s.retryFailed,
                          children: I.platformFa.retryOperation,
                        }),
                      ],
                    }),
                  (0, so.jsx)(he.default, {
                    style: Te.common.flex,
                    behavior: Ne.keyboardBehavior,
                    children: r
                      ? (0, so.jsx)(ge.default, {
                          style: {
                            width: '100%',
                            maxWidth: 620,
                            alignSelf: 'center',
                            padding: 12,
                          },
                          children: (0, so.jsx)(at.DemoAiPanel, {
                            kind: 'batch',
                            products: nr.products,
                            onClose: () => gr(null),
                            onApply: (e) => ts(e, 'batch'),
                          }),
                        })
                      : (0, so.jsx)(U.BatchPanel, {
                          products: nr.products,
                          draftKey: li,
                          aiAllowance: Io,
                          onDirtyChange: Ln,
                          onClose: () =>
                            ua(() => {
                              (gr(null), rr('add'));
                            }),
                          onConfirm: (e, t) => ts(e, 'batch', t),
                          canCreateVariants:
                            !e ||
                            !!gi ||
                            ('staff' === e.role && !!e.access?.do?.catalog),
                          onSupport:
                            e && t
                              ? () =>
                                  ua(() => {
                                    (gr(null),
                                      (0, Q.openSupportPage)(),
                                      za('profile'));
                                  })
                              : void 0,
                          onCreateVariants: e
                            ? async (e) => {
                                if (ai)
                                  throw (_i(), Error('subscription_required'));
                                await s.mutate('/products/variants', 'POST', e);
                                try {
                                  (await s.refresh(), await s.refresh());
                                } catch {
                                  throw Error('catalog_refresh');
                                }
                                return s.latest()?.products;
                              }
                            : void 0,
                        }),
                  }),
                  (0, so.jsx)(Me.ConfirmDiscard, {
                    visible: Rn,
                    onKeep: () => Bn(!1),
                    onDiscard: pa,
                  }),
                ],
              }),
            }),
          );
        const tl =
          !Oo &&
          (0, so.jsxs)(ge.default, {
            testID: 'phone-header',
            style: [
              ko.header,
              'add' === or && { marginBottom: 12 },
              r && 'home' !== or && { marginTop: 12 },
              'home' === or && $o > 0 && { marginBottom: 14 },
            ],
            children: [
              (0, so.jsxs)(ge.default, {
                style: Te.common.row,
                children: [
                  (0, so.jsx)(ee.BrandMark, {}),
                  (0, so.jsxs)(ge.default, {
                    children: [
                      (0, so.jsx)(Te.Copy, {
                        style: ko.brand,
                        children: Ae.fa.brand,
                      }),
                      (0, so.jsx)(Te.Copy, {
                        numberOfLines: 1,
                        style: { fontSize: 11, color: Do.muted, maxWidth: 150 },
                        children: Ho,
                      }),
                    ],
                  }),
                ],
              }),
              (0, so.jsxs)(ge.default, {
                style: [Te.common.row, { justifyContent: 'flex-start' }],
                children: [
                  e &&
                    (0, so.jsxs)(ge.default, {
                      style: { alignItems: 'flex-end', gap: 4 },
                      children: [
                        (0, so.jsx)(Ge.SyncChip, {
                          state: s.syncState,
                          notice: s.notice,
                          pending: s.pending,
                        }),
                        s.retryFailed &&
                          (0, so.jsx)(ye.default, {
                            testID: 'retry-failed-operation',
                            accessibilityRole: 'button',
                            onPress: s.retryFailed,
                            children: (0, so.jsx)(Te.Copy, {
                              style: { fontSize: 11, color: Do.danger },
                              children: I.platformFa.retryOperation,
                            }),
                          }),
                      ],
                    }),
                  Ga,
                  Ya,
                  'home' === or &&
                    (0, so.jsx)(ye.default, {
                      testID: 'theme-toggle',
                      accessibilityRole: 'button',
                      accessibilityLabel:
                        'light' === Bo ? Ae.fa.darkMode : Ae.fa.lightMode,
                      onPress: Ja,
                      style: [
                        ko.themeButton,
                        { backgroundColor: Do.soft, borderColor: Do.line },
                      ],
                      children: (0, so.jsx)(De.Icon, {
                        name: 'light' === Bo ? 'moon' : 'sun',
                        size: 20,
                        color: Do.text,
                      }),
                    }),
                ],
              }),
            ],
          });
        return (0, so.jsxs)(ge.default, {
          testID: Oo ? 'desktop-shell' : 'mobile-shell',
          style: [
            ko.root,
            { backgroundColor: Do.bg },
            Oo && { flexDirection: 'row-reverse' },
          ],
          children: [
            (0, so.jsx)(se.OversellHost, {}),
            (0, so.jsx)(we.StatusBar, {
              style: 'dark' === Bo ? 'light' : 'dark',
            }),
            Ks,
            (0, so.jsxs)(ge.default, {
              style: Te.common.flex,
              children: [
                (0, so.jsx)(je.BlurTargetView, {
                  ref: ra,
                  style: Te.common.flex,
                  children: (0, so.jsx)(he.default, {
                    style: Te.common.flex,
                    behavior: Ne.keyboardBehavior,
                    children: (0, so.jsx)(ke.ScrollView, {
                      ref: na,
                      scrollEnabled: !0,
                      keyboardShouldPersistTaps: 'handled',
                      refreshControl: void 0,
                      scrollEventThrottle: 64,
                      onScroll: (e) =>
                        (0, oe.shellScrolled)(
                          Ca.current,
                          e.nativeEvent.contentOffset.y,
                          or,
                        ),
                      onLayout: (e) => {
                        Ca.current.viewport = e.nativeEvent.layout.height;
                      },
                      onContentSizeChange: (e, t) => La(t),
                      contentContainerStyle: [
                        ko.content,
                        {
                          maxWidth: (0, T.shellColumnWidth)(_o),
                          paddingTop: zo.top + 12,
                          paddingBottom: zo.bottom + 110,
                        },
                        'add' === or && { flexGrow: 1 },
                        Oo && {
                          maxWidth: T.DESKTOP_PAGE_MAX,
                          paddingHorizontal: 28,
                          paddingTop: zo.top + 28,
                          paddingBottom: zo.bottom + 40,
                        },
                      ],
                      children: (0, so.jsxs)(pe.default.View, {
                        testID: 'tab-refresh-pulse',
                        style: {
                          flexGrow: 1,
                          opacity: ca.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 0.4],
                          }),
                          transform: [
                            {
                              translateY: ca.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 7],
                              }),
                            },
                          ],
                        },
                        children: [
                          'home' === or && tl,
                          'home' === or &&
                            (0, so.jsx)(nt.WhatsNewCard, {
                              onLesson: (e) => Ua('home', e),
                            }),
                          'home' === or &&
                            e &&
                            !r &&
                            (0, so.jsx)(p.HomeAlarms, {
                              shop: e,
                              chequesAllowed: Ti,
                              onOpen: Ka,
                              onHistory: () => Xo(!0),
                              onCount: Zo,
                            }),
                          ki && (0, so.jsx)(et.DemoBanner, { onTrial: n }),
                          ' ',
                          e &&
                            (0, so.jsx)(rt.NudgeBanner, {
                              shop: e,
                              hideChequeCard: 'home' === or && !0 === Ti,
                              onUpgrade: Aa,
                              onTip: Nn,
                              onLifecycle: function (e) {
                                if ('set_password' === e)
                                  return (
                                    (0, Q.openPasswordPage)(),
                                    void za('profile')
                                  );
                                'add_more_items' === e
                                  ? za('add')
                                  : 'sales_summary' === e ||
                                      'weekly_report' === e ||
                                      'monthly_summary' === e
                                    ? za('data')
                                    : ('trial_ends_soon' !== e &&
                                        'trial_ends_tomorrow' !== e &&
                                        'paused_low_stock' !== e) ||
                                      Aa();
                              },
                            }),
                          Oo
                            ? (0, so.jsx)(ge.default, {
                                style: { height: r ? 16 : 0 },
                              })
                            : 'home' !== or && tl,
                          s.busy && (0, so.jsx)(ue.default, {}),
                          !!s.error &&
                            (0, so.jsx)(Te.Copy, {
                              accessibilityRole: 'alert',
                              style: { color: Do.danger },
                              children: s.error,
                            }),
                          '          ',
                          zn &&
                            (0, so.jsxs)(Te.Card, {
                              children: [
                                (0, so.jsx)(Te.Copy, {
                                  accessibilityRole: 'alert',
                                  style: { color: Do.danger },
                                  children: Ae.fa.storageError,
                                }),
                                (0, so.jsx)(Te.Button, {
                                  secondary: !0,
                                  onPress: () => Vi(ar.current),
                                  children: Ae.fa.retryStorage,
                                }),
                              ],
                            }),
                          ai &&
                            (0, so.jsx)(Je.Paywall, {
                              ownerOnly: 'staff' === ii,
                              fresh: Po.fresh,
                              refundDays: Po.refundDays,
                              offer: Po.offer,
                              onPlans: () => {
                                ((0, Q.openSubscriptionPage)(), za('profile'));
                              },
                              onExport: () => {
                                (Qn('exports'), za('data'));
                              },
                            }),
                          e &&
                            'staff' !== ii &&
                            'trial' === Po.access &&
                            Po.trialEndsAt &&
                            (0, so.jsx)(Je.TrialNotice, {
                              endsAt: Po.trialEndsAt,
                              onPlans: () => {
                                ((0, Q.openSubscriptionPage)(), za('profile'));
                              },
                            }),
                          S.TELEGRAM_BOT &&
                            ('home' === or || 'add' === or) &&
                            e &&
                            !r &&
                            (0, so.jsx)(k.TelegramNotice, {
                              shop: e,
                              onOpen: () => gr('telegramInbox'),
                            }),
                          Ta(
                            'home',
                            'home' === or,
                            (0, so.jsx)(ct.HomeCards, {
                              attention: Oo
                                ? (0, so.jsx)(_.AttentionCard, {
                                    shop: r ? null : e,
                                    state: nr,
                                    chequesAllowed: Ti,
                                    onCheques: Wa.cheques,
                                    onExpiring: () => gr('expiryList'),
                                    onLow: (t) => {
                                      const o = nr.products.find(
                                        (e) => e.id === t,
                                      );
                                      e && !r
                                        ? (Ri('list'), gr('toBuy'))
                                        : o && Ji(o);
                                    },
                                  })
                                : void 0,
                              menuSheet: Yo,
                              onMenuSheet: Jo,
                              onLowStock: () => {
                                e && !r
                                  ? (Ri('list'), gr('toBuy'))
                                  : za('inventory');
                              },
                              shop: e,
                              businessType: ci,
                              role: ii,
                              summary: ys,
                              state: nr,
                              onSelect: Ji,
                              onToday: () => e && gr('activity'),
                              onData: () => za('data'),
                              pro: Oo && Pi,
                              canWrite: yi,
                              canNote:
                                si && (0, B.canWriteNotes)(ii, e?.access),
                              onAdd: () => za('add'),
                              onActivity: e ? () => gr('activity') : void 0,
                              userName: t?.name,
                              shortcuts: Wa,
                              prices: {
                                sell: fi
                                  ? fi.sellPrice
                                  : nr.products.some((e) => void 0 !== e.price),
                                buy: fi
                                  ? fi.buyPrice
                                  : nr.products.some(
                                      (e) =>
                                        void 0 !== e.avgCost ||
                                        void 0 !== e.costPrice,
                                    ),
                              },
                              onFixTask: (e) => {
                                gi
                                  ? Ko((0, Jt.homeTaskFixKind)(e.kind))
                                  : (Fr('noPrice'),
                                    (Ia.current = {}),
                                    Da((e) => e + 1),
                                    za('inventory'));
                              },
                              startInvoice: Rs('home-start-invoice'),
                              free: Hi,
                            }),
                          ),
                          'add' === or &&
                            (0, so.jsxs)(ge.default, {
                              testID: 'quick-add-screen',
                              style: {
                                gap: Oo ? 18 : 12,
                                width: '100%',
                                maxWidth: Oo ? 1120 : void 0,
                                alignSelf: 'center',
                              },
                              children: [
                                (0, so.jsx)(Te.PageTitle, {
                                  title: Ae.fa.quickAdd,
                                  sub: Ao >= 650 ? Ae.fa.quickAddHint : void 0,
                                }),
                                (0, so.jsxs)(ge.default, {
                                  style: Oo
                                    ? {
                                        flexDirection: 'row-reverse',
                                        alignItems: 'flex-start',
                                        gap: 20,
                                      }
                                    : { gap: 12 },
                                  children: [
                                    yi &&
                                      (0, so.jsx)(ge.default, {
                                        style: Oo
                                          ? { width: 340, flexShrink: 0 }
                                          : void 0,
                                        children: (0, so.jsx)(ot.StepAside, {
                                          hidden: xn && !Oo,
                                          testID: 'add-top-aside',
                                          children: (0, so.jsxs)(tt.AddKeys, {
                                            desktop: Oo,
                                            voice:
                                              Oo && vi
                                                ? (0, so.jsx)(tt.AddVoiceKey, {
                                                    allowance: Io,
                                                    onBlocked: () =>
                                                      _i(
                                                        Et.notebookFa
                                                          .trialFinished,
                                                      ),
                                                    onVoice: () => Qa('voice'),
                                                  })
                                                : null,
                                            children: [
                                              Rs('add-start-invoice'),
                                              js &&
                                                (0, so.jsx)(
                                                  Ot.RecipeHubButton,
                                                  { onPress: Ps },
                                                ),
                                              Bs,
                                            ],
                                          }),
                                        }),
                                      }),
                                    !yi &&
                                      (0, so.jsx)(Te.Card, {
                                        children: (0, so.jsx)(Te.Copy, {
                                          children: Ae.fa.readOnlyAdd,
                                        }),
                                      }),
                                    yi &&
                                      (0, so.jsx)(ge.default, {
                                        style: Oo
                                          ? { flex: 1, minWidth: 0 }
                                          : void 0,
                                        children: (0, so.jsx)(tt.AddHub, {
                                          voiceElsewhere: Oo,
                                          canAI: vi,
                                          allowance: Io,
                                          onBlocked: () =>
                                            _i(Et.notebookFa.trialFinished),
                                          onVoice: () => Qa('voice'),
                                          onPhoto: () => Qa('image'),
                                          voiceActive: xn && !Oo,
                                          voice:
                                            xn && !Oo
                                              ? (0, so.jsx)(Pe.VoicePanel, {
                                                  oversell: es,
                                                  askStock: (e) =>
                                                    (0, le.askOversell)(
                                                      e,
                                                      'sell',
                                                    ),
                                                  records:
                                                    'free' === Po.access
                                                      ? Po.records
                                                      : null,
                                                  onPlans:
                                                    'staff' === ii
                                                      ? void 0
                                                      : () =>
                                                          _i(
                                                            (0, eo.L)(
                                                              '\u0628\u0631\u0627\u06cc \u06a9\u0627\u0631 \u0628\u06cc\u0634\u062a\u0631 \u0647\u0645\u06cc\u0646 \u062d\u0627\u0644\u0627 \u0627\u0631\u062a\u0642\u0627 \u0628\u062f\u0647\u061b \u0628\u0627 \u0627\u0634\u062a\u0631\u0627\u06a9 \u06a9\u0627\u0631 \u0646\u0627\u0645\u062d\u062f\u0648\u062f \u062f\u0627\u0631\u06cc.',
                                                            ),
                                                          ),
                                                  onSaleSaved: pr,
                                                  onPrices: Yi,
                                                  inline: !0,
                                                  products: nr.products,
                                                  movements: nr.movements,
                                                  draftKey: li,
                                                  aiAllowance: Io,
                                                  onDirtyChange: Ln,
                                                  onClose: () => {
                                                    (Ln(!1), kn(!1));
                                                  },
                                                  onConfirm: $a,
                                                  onUndoMoves: oa,
                                                  shopName: Ho,
                                                })
                                              : void 0,
                                          children: (0, so.jsx)(Ct.AddEntry, {
                                            state: nr,
                                            shop: e,
                                            kind: cn,
                                            onKind: (e) => {
                                              (dn(e), mn(''), Pn(''));
                                            },
                                            allowedKinds: ui,
                                            businessType: ci,
                                            role: ii || void 0,
                                            produce: { on: gn, set: bn },
                                            name: Ur,
                                            productId: Wr,
                                            nameRef: oi,
                                            onName: (e) => {
                                              (Mr(e),
                                                Kr(void 0),
                                                Tr(void 0),
                                                Ar(void 0),
                                                _r([]),
                                                Pn(''));
                                            },
                                            onPick: (e) => {
                                              (Mr(e?.name || Ur),
                                                Kr(e?.id),
                                                Gr(e?.unit || 'piece'),
                                                Tr(void 0),
                                                Ar(void 0),
                                                _r([]),
                                                Pn(''),
                                                mn(''));
                                            },
                                            choice: os,
                                            newBrand: Dr,
                                            onBrand: (e) => {
                                              (Ar(os.family),
                                                Mr(e.name),
                                                Kr(e.id),
                                                Gr(e.unit || 'piece'),
                                                Tr(void 0),
                                                mn(''),
                                                Pn(''));
                                            },
                                            onNewBrand: (e) => {
                                              (Ar(os.family),
                                                Mr(
                                                  (
                                                    os.family.trim() +
                                                    ' ' +
                                                    e
                                                  ).slice(0, 100),
                                                ),
                                                Kr(void 0),
                                                Tr(e),
                                                mn(''),
                                                Pn(''));
                                            },
                                            quantity: Hr,
                                            onQuantity: (e) => {
                                              (Nr(e), Pn(''));
                                            },
                                            unit: Vr,
                                            onUnit: Gr,
                                            onExactPrice: (e) =>
                                              ln(
                                                e
                                                  ? { ...e, productId: Wr }
                                                  : void 0,
                                              ),
                                            canManage: !!gi,
                                            canEditSalePrice: !!bi,
                                            showPrices: fi
                                              ? fi.sellPrice
                                              : nr.products.some(
                                                  (e) => void 0 !== e.price,
                                                ),
                                            cost: Yr,
                                            price: Qr,
                                            onCost: (e) => {
                                              (Jr(e), Cr(''));
                                            },
                                            onPrice: (e) => {
                                              const t = (0, m.manualPriceTyped)(
                                                e,
                                              );
                                              (Xr(t.price),
                                                Zr(t.priceKey),
                                                Cr(''));
                                            },
                                            onPickPrice: (e, t) => {
                                              const o = (0, m.manualPricePick)(
                                                e,
                                                t,
                                              );
                                              (Xr(o.price),
                                                Zr(o.priceKey),
                                                Cr(''));
                                            },
                                            details: on,
                                            onDetails: () => rn((e) => !e),
                                            supplier: nn,
                                            onSupplier: an,
                                            expiry: en,
                                            onExpiry: tn,
                                            timestamp: un,
                                            onDate: () => {
                                              (Ln(!1), gr('manualDate'));
                                            },
                                            shortage: '',
                                            error: fn,
                                            success: jn,
                                            priceNote: Pr,
                                            busy: Cn,
                                            saveLabel:
                                              'received' === cn && gn
                                                ? (0, eo.L)(
                                                    '\u062b\u0628\u062a \u062a\u0648\u0644\u06cc\u062f',
                                                  )
                                                : 'received' === cn
                                                  ? (0, eo.L)(
                                                      '\u062b\u0628\u062a \u0648\u0631\u0648\u062f \u06a9\u0627\u0644\u0627',
                                                    )
                                                  : 'sold' === cn
                                                    ? (0, eo.L)(
                                                        '\u062b\u0628\u062a \u0641\u0631\u0648\u0634',
                                                      )
                                                    : Ae.fa.saveEntry,
                                            onSave: function () {
                                              if (ai && e) return void _i();
                                              if (os.pending)
                                                return void mn(
                                                  Ue.brandFa.pendingManual,
                                                );
                                              if (ei.current) return;
                                              ((ei.current = !0),
                                                In(!0),
                                                Cr(''));
                                              let t = !1;
                                              try {
                                                const e =
                                                    'sold' === cn &&
                                                    sn &&
                                                    sn.quantity === Hr &&
                                                    sn.productId === Wr
                                                      ? sn.price
                                                      : void 0,
                                                  o = {
                                                    name: Ur.trim(),
                                                    quantity: (0,
                                                    qe.parseQuantity)(Hr),
                                                    kind: cn,
                                                    unit: Vr,
                                                    productId: Wr,
                                                    timestamp: un,
                                                    ...(Dr && !Wr
                                                      ? { brand: Dr }
                                                      : {}),
                                                    ...(('received' !== cn &&
                                                      'sold' !== cn) ||
                                                    !Yr
                                                      ? {}
                                                      : {
                                                          unitCost: Number(Yr),
                                                        }),
                                                    ...('sold' !== cn ||
                                                    (void 0 === e && !Qr)
                                                      ? {}
                                                      : {
                                                          unitPrice:
                                                            e ?? Number(Qr),
                                                        }),
                                                    ...('received' === cn && en
                                                      ? { expiresAt: en }
                                                      : {}),
                                                  },
                                                  n = (0, qe.previewBalance)(
                                                    ar.current,
                                                    o,
                                                  );
                                                if ('error' in n)
                                                  throw Error(n.error);
                                                const i = {
                                                    name: Ur,
                                                    quantity: Hr,
                                                    manualUnit: Vr,
                                                    productId: Wr,
                                                    manualTimestamp: un,
                                                    manualCost: Yr,
                                                    manualPrice: Qr,
                                                    manualPriceKey: $r,
                                                    manualExpiry: en,
                                                    manualBrand: Dr,
                                                    manualSupplier: nn,
                                                  },
                                                  a = (0, m.manualDefaultPrice)(
                                                    {
                                                      canManage: !!gi,
                                                      kind: cn,
                                                      price: Qr,
                                                      priceKey: $r,
                                                    },
                                                  ),
                                                  s =
                                                    gi && Yr
                                                      ? Number(Yr)
                                                      : void 0;
                                                ts(
                                                  [o],
                                                  'received' === cn && gn
                                                    ? 'production'
                                                    : 'manual',
                                                  !0,
                                                  (e) => {
                                                    ((t = !0),
                                                      Mr(''),
                                                      Nr(''),
                                                      Kr(void 0),
                                                      Tr(void 0),
                                                      Ar(void 0),
                                                      _r([]),
                                                      pn(void 0),
                                                      Jr(''),
                                                      Xr(''),
                                                      Zr(void 0),
                                                      tn(void 0),
                                                      an(''),
                                                      mn(''),
                                                      r ||
                                                        (0, We.clearDraftPart)(
                                                          li,
                                                          'manual',
                                                        ));
                                                    const i =
                                                      ar.current.products.find(
                                                        (e) => e.id === Wr,
                                                      );
                                                    (ln(void 0),
                                                      Pn(
                                                        'sold' === cn &&
                                                          i &&
                                                          (0, At.measureOf)(
                                                            i.unit,
                                                          ) &&
                                                          Vr === i.unit
                                                          ? (0,
                                                            At.savedSaleText)({
                                                              name: o.name,
                                                              quantity:
                                                                o.quantity,
                                                              unit:
                                                                i.unit || 'kg',
                                                              unitPrice:
                                                                o.unitPrice ??
                                                                i.price,
                                                              stock:
                                                                'fill' === e
                                                                  ? 0
                                                                  : n.after,
                                                            })
                                                          : Ae.fa.manualSaved
                                                              .replace(
                                                                '{name}',
                                                                o.name,
                                                              )
                                                              .replace(
                                                                '{balance}',
                                                                ('fill' === e
                                                                  ? 0
                                                                  : n.after
                                                                ).toLocaleString(
                                                                  (0,
                                                                  eo.numberLocale)(),
                                                                ),
                                                              ),
                                                      ),
                                                      me.default.dismiss(),
                                                      setTimeout(() => {
                                                        ((ei.current = !1),
                                                          In(!1));
                                                      }, 0));
                                                  },
                                                  (e) => {
                                                    const t =
                                                      e.find(
                                                        (e) => e.id === Wr,
                                                      ) ||
                                                      e.find(
                                                        (e) =>
                                                          (0, qe.normalizeName)(
                                                            e.name,
                                                          ) ===
                                                          (0, qe.normalizeName)(
                                                            o.name,
                                                          ),
                                                      );
                                                    void 0 !== a || void 0 !== s
                                                      ? t &&
                                                        is(t, a, s).catch((e) =>
                                                          mn(
                                                            (0, Oe.errorText)(
                                                              e,
                                                            ),
                                                          ),
                                                        )
                                                      : !gi ||
                                                        'received' !== o.kind ||
                                                        (t &&
                                                          !(0, ie.missingPrice)(
                                                            t,
                                                          )) ||
                                                        Cr(
                                                          (0, eo.L)(
                                                            '\u0642\u06cc\u0645\u062a \u062b\u0628\u062a \u0646\u0634\u062f\u061b \u0633\u0648\u062f \u0627\u06cc\u0646 \u06a9\u0627\u0644\u0627 \u062f\u0631 \u06af\u0632\u0627\u0631\u0634\u200c\u0647\u0627 \u0645\u0639\u0644\u0648\u0645 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f.',
                                                          ),
                                                        );
                                                  },
                                                  void 0,
                                                  void 0,
                                                  {
                                                    ...('received' === cn &&
                                                    !gn &&
                                                    i.manualSupplier.trim()
                                                      ? {
                                                          supplierName:
                                                            i.manualSupplier.trim(),
                                                        }
                                                      : {}),
                                                    known: ns(o),
                                                  },
                                                ).catch((e) => {
                                                  (Pn(''),
                                                    (0, le.isOversellCancel)(e)
                                                      ? (Mr(i.name),
                                                        Nr(i.quantity),
                                                        Gr(i.manualUnit),
                                                        Kr(i.productId),
                                                        pn(i.manualTimestamp),
                                                        (vn.current = !0),
                                                        Jr(i.manualCost),
                                                        Xr(i.manualPrice),
                                                        Zr(i.manualPriceKey),
                                                        tn(i.manualExpiry),
                                                        an(i.manualSupplier),
                                                        mn(''))
                                                      : e instanceof
                                                            E.ApiError &&
                                                          'product_choice_required' ===
                                                            e.message &&
                                                          Array.isArray(
                                                            e.details
                                                              ?.candidates,
                                                          )
                                                        ? (Mr(i.name),
                                                          Nr(i.quantity),
                                                          Gr(i.manualUnit),
                                                          Kr(i.productId),
                                                          pn(i.manualTimestamp),
                                                          (vn.current = !0),
                                                          Jr(i.manualCost),
                                                          Xr(i.manualPrice),
                                                          Zr(i.manualPriceKey),
                                                          tn(i.manualExpiry),
                                                          an(i.manualSupplier),
                                                          Tr(void 0),
                                                          Ar(i.name),
                                                          _r(
                                                            e.details
                                                              .candidates,
                                                          ),
                                                          Pn(''),
                                                          mn(''))
                                                        : (mn(
                                                            t
                                                              ? (0, eo.L)(
                                                                  '\u062b\u0628\u062a \u0646\u0634\u062f \u0648 \u0645\u0648\u062c\u0648\u062f\u06cc \u0628\u0647 \u0642\u0628\u0644 \u0628\u0631\u06af\u0634\u062a:',
                                                                ) +
                                                                  ' ' +
                                                                  (0,
                                                                  Oe.errorText)(
                                                                    e,
                                                                  )
                                                              : (0,
                                                                Oe.errorText)(
                                                                  e,
                                                                ),
                                                          ),
                                                          t &&
                                                            !da.current &&
                                                            (Mr(i.name),
                                                            Nr(i.quantity),
                                                            Gr(i.manualUnit),
                                                            Kr(i.productId))),
                                                    t ||
                                                      ((ei.current = !1),
                                                      In(!1)));
                                                });
                                              } catch (e) {
                                                (mn((0, Oe.errorText)(e)),
                                                  (ei.current = !1),
                                                  In(!1));
                                              }
                                            },
                                            previewDraft:
                                              Ur && xo(Hr)
                                                ? {
                                                    name: Ur,
                                                    quantity: xo(Hr),
                                                    kind: cn,
                                                    unit: Vr,
                                                    productId: Wr,
                                                    timestamp: un,
                                                  }
                                                : void 0,
                                            onScan: () => Qa('scan'),
                                            wide: Oo,
                                          }),
                                        }),
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          'inventory' === or &&
                            Vo &&
                            (0, so.jsx)(F.SwipeBack, {
                              enabled: (0, O.swipeBackOn)('web', _o),
                              bleed: 20,
                              onBack: () => {
                                (Go(!1), Kn(!1));
                              },
                              children: (0, so.jsx)(
                                M.Alarms,
                                {
                                  state: nr,
                                  onChange: Gi,
                                  onClose: () => {
                                    (Go(!1), Kn(!1));
                                  },
                                  onRoutines:
                                    e && !r
                                      ? () => {
                                          (Go(!1), Ri('weekly'), gr('toBuy'));
                                        }
                                      : void 0,
                                  canManage: !!gi,
                                  presetLowStock: Wn,
                                },
                                Wn ? 'preset' : 'normal',
                              ),
                            }),
                          Ta(
                            'inventory',
                            'inventory' === or && !Vo,
                            (0, so.jsxs)(ge.default, {
                              style: { gap: 16 },
                              children: [
                                !!hn &&
                                  (0, so.jsx)(Te.Card, {
                                    style: { padding: 12 },
                                    children: (0, so.jsx)(Te.Copy, {
                                      accessibilityRole: 'alert',
                                      children: hn,
                                    }),
                                  }),
                                e &&
                                  (0, so.jsx)(Ht.ReceiptPhotoPrompt, {
                                    shop: e,
                                  }),
                                (0, so.jsx)(
                                  te.Catalog,
                                  {
                                    rowActions: _s,
                                    memory: Ia.current,
                                    onReveal: (e, t) => {
                                      const o = (0, oe.revealTarget)(
                                        Ca.current,
                                        e,
                                        t,
                                      );
                                      null !== o &&
                                        na.current?.scrollTo({
                                          y: o,
                                          animated: !1,
                                        });
                                    },
                                    onModel: (e) => {
                                      (mr(e), gr('model'));
                                    },
                                    onVariants: js ? Cs : void 0,
                                    variantsProminent: ws,
                                    onAlarms: () => {
                                      ai ? _i() : (Kn(!0), Go(!0));
                                    },
                                    onPriceAdjust:
                                      e && gi
                                        ? () => gr('priceAdjust')
                                        : void 0,
                                    onStockCount:
                                      (0, B.canCount)(ii, e?.access) || pi
                                        ? () => {
                                            ai ? _i() : gr('stockCount');
                                          }
                                        : void 0,
                                    onBulk:
                                      e && gi
                                        ? async (e) => {
                                            if (ai)
                                              throw (
                                                _i(),
                                                Error('subscription_required')
                                              );
                                            (await s.mutate(
                                              '/products/bulk',
                                              'POST',
                                              e,
                                            ),
                                              await s.refresh());
                                          }
                                        : void 0,
                                    canSeeBuyPrice: fi
                                      ? fi.buyPrice
                                      : nr.products.some(
                                          (e) => void 0 !== e.costPrice,
                                        ),
                                    canSeeSellPrice: fi
                                      ? fi.sellPrice
                                      : nr.products.some(
                                          (e) => void 0 !== e.price,
                                        ),
                                    state: nr,
                                    initialStock: Or,
                                    onSelect: Ji,
                                    onCategory: async function (t, o) {
                                      if (ai && e)
                                        throw (
                                          _i(),
                                          Error('subscription_required')
                                        );
                                      e
                                        ? await s.mutate(
                                            '/categories',
                                            'POST',
                                            { previous: t, name: o },
                                          )
                                        : (Gi(
                                            (0, ie.editCategory)(
                                              ar.current,
                                              t,
                                              o,
                                            ),
                                          ),
                                          r ||
                                            (0, Fe.logEvent)(
                                              'category.updated',
                                              'catalog',
                                              1,
                                            ));
                                    },
                                    onRemoveCategory: async function (t) {
                                      if (ai && e)
                                        throw (
                                          _i(),
                                          Error('subscription_required')
                                        );
                                      e
                                        ? await s.mutate(
                                            '/categories',
                                            'POST',
                                            { previous: t, name: null },
                                          )
                                        : (Gi(
                                            (0, ie.removeCategory)(
                                              ar.current,
                                              t,
                                            ),
                                          ),
                                          r ||
                                            (0, Fe.logEvent)(
                                              'category.updated',
                                              'catalog',
                                              1,
                                            ));
                                    },
                                    onAdd: () => za('add'),
                                    canManage: !!gi,
                                  },
                                  Ba,
                                ),
                              ],
                            }),
                          ),
                          'data' === or &&
                            (0, so.jsx)(
                              Ee.DataPanel,
                              {
                                state: nr,
                                shop: e,
                                showReports: mi,
                                showLedger: hi,
                                onEditProduct: gi ? Qi : void 0,
                                onSavePrice: gi ? as : void 0,
                                onImport: async function (t, o) {
                                  if (r) throw Error('forbidden');
                                  if (ai && e)
                                    throw (
                                      _i(),
                                      Error('subscription_required')
                                    );
                                  if (e) {
                                    const e = (0, E.randomUUID)();
                                    for (let r = 0; r < t.length; r += fo)
                                      await s.mutate('/imports/apply', 'POST', {
                                        rows: t.slice(r, r + fo),
                                        source: o,
                                        importId: e,
                                      });
                                    return;
                                  }
                                  (Gi(
                                    (0, qe.applyImport)(
                                      ar.current,
                                      t,
                                      'import-' +
                                        Date.now() +
                                        '-' +
                                        ++ia.current,
                                      o,
                                    ),
                                  ),
                                    (0, Fe.logEvent)(
                                      'inventory.imported',
                                      o,
                                      t.length,
                                      t.map((e) => ({
                                        name: e.name,
                                        quantity: e.stock,
                                        kind: 'stock',
                                      })),
                                    ));
                                },
                                onCorrect: ta,
                                onTelegram: () => Qa('telegram'),
                                canMutate: !!gi,
                                blocked: ai,
                                importLocked: !r && !!e && 'free' === Po.access,
                                onBlocked: _i,
                                demo: r,
                                initialSection: Vn || (ai ? 'exports' : void 0),
                                documents:
                                  e && !r && vi && !ai
                                    ? (0, It.trialRemaining)(Io).trial &&
                                      0 === (0, It.trialRemaining)(Io).remaining
                                      ? (0, so.jsxs)(so.Fragment, {
                                          children: [
                                            (0, so.jsx)(It.TrialAiCounter, {
                                              allowance: Io,
                                            }),
                                            (0, so.jsx)(Te.Button, {
                                              onPress: () =>
                                                _i(Et.notebookFa.trialFinished),
                                              children: Et.notebookFa.plans,
                                            }),
                                          ],
                                        })
                                      : (0, so.jsxs)(so.Fragment, {
                                          children: [
                                            (0, so.jsx)(j.Documents, {
                                              products: nr.products.map(
                                                (e) => e.name,
                                              ),
                                              onConfirm: (e) => ts(e, 'pdf'),
                                            }),
                                            (0, so.jsx)(It.TrialAiCounter, {
                                              allowance: Io,
                                            }),
                                          ],
                                        })
                                    : void 0,
                              },
                              (Vn || 'data') + ':' + Yn,
                            ),
                          'learn' === or &&
                            (0, so.jsx)(F.SwipeBack, {
                              enabled: (0, O.swipeBackOn)('web', _o),
                              bleed: 20,
                              onBack: () => za(_a.current),
                              children: (0, so.jsx)(ut.LearnTab, {
                                businessType: ci,
                                initial: Oa,
                                onBack: () => za(_a.current),
                                onTry: qa,
                              }),
                            }),
                          Ta(
                            'profile',
                            'profile' === or,
                            (0, so.jsx)(Q.ProfilePanel, {
                              demo: r,
                              onStartOwn: r ? n : void 0,
                              name: Ho,
                              onName: async function (t) {
                                if (e) {
                                  const { shop: o } = await (0, E.request)(
                                    (0, E.shopPath)(e, ''),
                                  );
                                  return (
                                    await (0, E.request)(
                                      (0, E.shopPath)(e, ''),
                                      'PATCH',
                                      { name: t, version: o.revision },
                                      { key: (0, E.randomUUID)() },
                                    ),
                                    void No(t)
                                  );
                                }
                                (No(t),
                                  r ||
                                    J.default
                                      .setItem('anbari.profile.name', t)
                                      .catch(() => yn(Ae.fa.operationError)));
                              },
                              onExit: jo,
                              onLogout: function () {
                                (r && y.swrStore.setScope(null),
                                  (0, ro.clearPhoneWidgets)(),
                                  i());
                              },
                              hasSample: nr.products.some((e) =>
                                ['milk', 'rice', 'oil', 'water'].includes(e.id),
                              ),
                              onClearSamples: function () {
                                Gi(
                                  (0, ie.clearSampleData)(ar.current, [
                                    'milk',
                                    'rice',
                                    'oil',
                                    'water',
                                  ]),
                                );
                              },
                              onLearn: (e) => Ua('profile', e),
                              onConnector: () =>
                                St.connectionsEntries.open('ai'),
                              onSupport:
                                e && t && !r ? () => gr('support') : void 0,
                              shop: e,
                              user: t,
                              access: Po.access,
                              planId: xi,
                              planEndsAt:
                                Co.data?.subscription?.expires_at ??
                                Po.trialEndsAt,
                            }),
                          ),
                        ],
                      }),
                    }),
                  }),
                }),
                (0, so.jsx)(pt.NotebookLedgerRoutes, {
                  shop: e,
                  planId: xi,
                  ledger: Pi,
                  onUpgrade: _i,
                  clubLocked: qi,
                }),
                (0, so.jsx)(bt.ExpensesRoutes, { shop: e }),
                (0, so.jsx)(wt.InvoicesRoutes, { shop: e }),
                (0, so.jsx)(kt.ConnectionsRoutes, {
                  shop: e,
                  demo: r,
                  blocked: ai,
                  linksOk: Ha,
                  connectorLocked: !r && !!e && 'free' === Po.access,
                  onBlocked: _i,
                  onTelegram: () => Qa('telegram'),
                }),
                (0, so.jsx)(jt.DesignsRoutes, { shop: e }),
              ],
            }),
            a &&
              (0, so.jsx)(lt.GuideOverlay, {
                info: {
                  ...a,
                  lowItem: [...nr.products]
                    .filter((e) => void 0 !== e.price)
                    .sort((e, t) => e.stock - t.stock)[0]?.name,
                },
                tab: or,
                setTab: (e) => za(e),
              }),
            e &&
              !Sn &&
              !vr &&
              'add' !== or &&
              'inventory' !== or &&
              (0, so.jsx)(ge.default, {
                pointerEvents: 'box-none',
                style: {
                  position: 'absolute',
                  left: 12,
                  right: 12,
                  bottom:
                    (Oo ? 24 : Math.max(zo.bottom, 12) + 84) + (lr ? 66 : 0),
                  zIndex: 31,
                  maxWidth: 560,
                  alignSelf: 'center',
                },
                children: (0, so.jsx)(Ht.ReceiptPhotoPrompt, {
                  shop: e,
                  floating: !0,
                }),
              }),
            lr &&
              (0, so.jsxs)(ge.default, {
                testID: 'sale-receipt-offer',
                style: {
                  position: 'absolute',
                  left: 12,
                  right: 12,
                  bottom: Oo ? 24 : Math.max(zo.bottom, 12) + 84,
                  zIndex: 30,
                  maxWidth: 560,
                  alignSelf: 'center',
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  gap: 10,
                  padding: 10,
                  paddingRight: 14,
                  borderRadius: 16,
                  backgroundColor: Do.surface,
                  borderWidth: 1,
                  borderColor: Do.accent,
                  shadowColor: '#000',
                  shadowOpacity: 0.15,
                  shadowRadius: 14,
                  shadowOffset: { width: 0, height: 6 },
                  elevation: 6,
                },
                children: [
                  (0, so.jsx)(De.Icon, {
                    name: 'receipt',
                    size: 18,
                    color: Do.accent,
                  }),
                  (0, so.jsx)(Te.Copy, {
                    style: { flex: 1, fontSize: 13 },
                    children: (0, eo.L)(
                      '\u0641\u0631\u0648\u0634 \u062b\u0628\u062a \u0634\u062f.',
                    ),
                  }),
                  (0, so.jsx)(ye.default, {
                    testID: 'sale-receipt-open',
                    accessibilityRole: 'button',
                    onPress: () => {
                      (Er(lr), cr(null), gr('receipt'));
                    },
                    style: ({ pressed: e }) => ({
                      height: 36,
                      paddingHorizontal: 14,
                      borderRadius: 12,
                      justifyContent: 'center',
                      backgroundColor: Do.accent,
                      opacity: e ? 0.85 : 1,
                    }),
                    children: (0, so.jsx)(Te.Copy, {
                      style: {
                        fontSize: 13,
                        color: Do.onAccent,
                        fontFamily: 'Vazirmatn_600SemiBold',
                      },
                      children: (0, eo.L)(
                        '\u0635\u062f\u0648\u0631 \u0641\u0627\u06a9\u062a\u0648\u0631',
                      ),
                    }),
                  }),
                  (0, so.jsx)(ye.default, {
                    accessibilityRole: 'button',
                    accessibilityLabel: (0, eo.L)('\u0628\u0633\u062a\u0646'),
                    onPress: () => cr(null),
                    style: { padding: 6 },
                    children: (0, so.jsx)(De.Icon, {
                      name: 'close',
                      size: 16,
                      color: Do.muted,
                    }),
                  }),
                ],
              }),
            !Oo &&
              !Sn &&
              (0, so.jsxs)(ge.default, {
                testID: 'mobile-dock',
                pointerEvents: 'box-none',
                style: [ko.dockPosition, { bottom: Math.max(zo.bottom, 12) }],
                children: [
                  (0, so.jsxs)(je.BlurView, {
                    blurTarget: ra,
                    blurMethod: 'dimezisBlurViewSdk31Plus',
                    intensity: 72,
                    tint:
                      'light' === Bo
                        ? 'systemUltraThinMaterialLight'
                        : 'systemUltraThinMaterialDark',
                    style: [ko.dock, (0, Lt.glassStyle)(Bo, 'web')],
                    children: [
                      (0, so.jsx)(ge.default, {
                        pointerEvents: 'none',
                        style: [
                          ve.default.absoluteFill,
                          { backgroundColor: Lt.glassTokens[Bo].surface },
                        ],
                      }),
                      (0, so.jsx)(Re.DockBubble, {
                        activeIndex: wi.findIndex((e) => e.id === or),
                        hidden: 'add' === or,
                        color: Do.brand[1],
                        gradient: Do.brand,
                        locations: Do.brandLocations,
                        itemCount: wi.length,
                        children: (e) =>
                          wi.map((t, o) =>
                            'add' === t.id
                              ? (0, so.jsx)(
                                  ge.default,
                                  {
                                    onLayout: (t) => e(o, t),
                                    pointerEvents: 'none',
                                    accessibilityElementsHidden: !0,
                                    importantForAccessibility:
                                      'no-hide-descendants',
                                    style: ko.tab,
                                  },
                                  t.id,
                                )
                              : (0, so.jsxs)(
                                  ye.default,
                                  {
                                    onLayout: (t) => e(o, t),
                                    testID: 'tab-' + t.id,
                                    accessibilityRole: 'tab',
                                    accessibilityLabel: t.label,
                                    accessibilityState: {
                                      selected: or === t.id,
                                    },
                                    onPress: () => {
                                      ('data' === t.id && Vn && Qn(void 0),
                                        za(t.id));
                                    },
                                    style: ({ pressed: e }) => [
                                      ko.tab,
                                      {
                                        zIndex: 1,
                                        opacity: e ? 0.78 : 1,
                                        transform: [{ scale: e ? 0.98 : 1 }],
                                      },
                                    ],
                                    children: [
                                      (0, so.jsxs)(ge.default, {
                                        children: [
                                          (0, so.jsx)(De.Icon, {
                                            name: t.icon,
                                            active: or === t.id,
                                            size: 22,
                                            color:
                                              or === t.id
                                                ? Do.onBrand
                                                : Do.muted,
                                          }),
                                          'profile' === t.id &&
                                            er > 0 &&
                                            (0, so.jsx)(ge.default, {
                                              testID: 'dock-support-badge',
                                              style: {
                                                position: 'absolute',
                                                top: -5,
                                                left: -9,
                                                minWidth: 18,
                                                height: 18,
                                                paddingHorizontal: 4,
                                                borderRadius: 9,
                                                backgroundColor: Do.danger,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                              },
                                              children: (0, so.jsx)(Te.Copy, {
                                                style: {
                                                  color: Do.bg,
                                                  fontSize: 10.5,
                                                  lineHeight: 14,
                                                  fontFamily:
                                                    'Vazirmatn_700Bold',
                                                },
                                                children: (0, eo.localDigits)(
                                                  er > 99 ? '99+' : er,
                                                ),
                                              }),
                                            }),
                                        ],
                                      }),
                                      (0, so.jsx)(Te.Copy, {
                                        style: {
                                          fontSize: 11,
                                          textAlign: 'center',
                                          fontFamily:
                                            or === t.id
                                              ? 'Vazirmatn_600SemiBold'
                                              : 'Vazirmatn_400Regular',
                                          color:
                                            or === t.id ? Do.onBrand : Do.muted,
                                          lineHeight: 18,
                                        },
                                        children: t.label,
                                      }),
                                    ],
                                  },
                                  t.id,
                                ),
                          ),
                      }),
                    ],
                  }),
                  wi.some((e) => 'add' === e.id) &&
                    (0, so.jsx)(ge.default, {
                      pointerEvents: 'box-none',
                      style: ko.centreKeySlot,
                      children: (0, so.jsxs)(ye.default, {
                        testID: 'tab-add',
                        accessibilityRole: 'tab',
                        accessibilityLabel: Ae.fa.add,
                        accessibilityState: { selected: 'add' === or },
                        onPress: () => za('add'),
                        style: ({ pressed: e }) => [
                          ko.centreKeyHit,
                          {
                            transform: [{ scale: e && !Fo ? 0.94 : 1 }],
                            opacity: e && Fo ? 0.8 : 1,
                          },
                        ],
                        children: [
                          (0, so.jsx)(ge.default, {
                            style: [
                              ko.centreKeyRing,
                              {
                                backgroundColor:
                                  'add' === or ? Do.accentSoft : Mo,
                              },
                            ],
                            children: (0, so.jsxs)(ge.default, {
                              style: [
                                ko.centreKey,
                                { backgroundColor: Do.brand[1] },
                                { boxShadow: `0 8px 20px ${Do.brand[1]}66` },
                              ],
                              children: [
                                (0, so.jsx)(Be.BrandFill, { radius: 18 }),
                                (0, so.jsx)(ge.default, {
                                  children: (0, so.jsx)(De.Icon, {
                                    name: 'plus',
                                    size: 26,
                                    color: Do.onBrand,
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, so.jsx)(Te.Copy, {
                            style: {
                              fontSize: 11,
                              lineHeight: 16,
                              textAlign: 'center',
                              fontFamily:
                                'add' === or
                                  ? 'Vazirmatn_600SemiBold'
                                  : 'Vazirmatn_400Regular',
                              color: 'add' === or ? Do.accent : Do.muted,
                            },
                            children: Ae.fa.add,
                          }),
                        ],
                      }),
                    }),
                ],
              }),
            (0, so.jsxs)(xe.Modal, {
              visible: Qs,
              transparent: !0,
              animationType: 'none',
              onRequestClose: () => ua($i),
              children: [
                (0, so.jsx)(F.SwipeBack, {
                  bare: !Oo && !Js,
                  sheet: Js,
                  card: !0,
                  enabled: Ys || Js,
                  topRef: aa,
                  onBack: () => ua($i),
                  children: (0, so.jsxs)(he.default, {
                    style: [
                      ko.overlay,
                      'scan' === vr
                        ? { padding: 0 }
                        : { paddingTop: Math.max(16, zo.top + 8) },
                    ],
                    behavior: Ne.keyboardBehavior,
                    children: [
                      (0, so.jsx)(He.Backdrop, {
                        testID: 'overlay-backdrop',
                        onClose: () => ua($i),
                      }),
                      (0, so.jsxs)(F.PullCard, {
                        testID: 'overlay-card',
                        handle: 'scan' !== vr,
                        plain: Js,
                        onClose: () => ua($i),
                        isTop: Ys ? () => aa.current() : void 0,
                        style: [
                          ko.sheet,
                          { backgroundColor: Do.bg, borderColor: Do.line },
                          'scan' !== vr && !Sn && !1,
                          br && { maxHeight: '82%', padding: 16 },
                          Oo && { maxWidth: 620, padding: 26 },
                          'scan' === vr && {
                            height: '100%',
                            maxHeight: '100%',
                            maxWidth: 600,
                            borderRadius: 0,
                            paddingTop: Math.max(zo.top, 12),
                            paddingBottom: Math.max(zo.bottom, 12),
                          },
                        ],
                        children: [
                          s.retryFailed &&
                            (0, so.jsxs)(Te.Card, {
                              style: { padding: 10 },
                              children: [
                                (0, so.jsx)(Te.Copy, { children: s.notice }),
                                (0, so.jsx)(Te.Button, {
                                  secondary: !0,
                                  onPress: s.retryFailed,
                                  children: I.platformFa.retryOperation,
                                }),
                              ],
                            }),
                          !(Oo && br && !vr && !kr) &&
                            (0, so.jsx)(ge.default, {
                              style: {
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                direction: 'ltr',
                                marginBottom: 8,
                              },
                              children: (0, so.jsx)(ye.default, {
                                testID: 'sheet-close',
                                accessibilityRole: 'button',
                                accessibilityLabel: Ae.fa.dismiss,
                                onPress: () => ua($i),
                                style: {
                                  width: 36,
                                  height: 36,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  backgroundColor: Do.soft,
                                  borderRadius: 10,
                                  borderWidth: ve.default.hairlineWidth,
                                  borderColor: Do.line,
                                },
                                children: (0, so.jsx)(De.Icon, {
                                  name: 'close',
                                  color: Do.text,
                                  size: 20,
                                }),
                              }),
                            }),
                          'voice' === vr &&
                            (r
                              ? (0, so.jsx)(at.DemoAiPanel, {
                                  kind: 'voice',
                                  products: nr.products,
                                  onClose: () => gr(null),
                                  onApply: (e) => ts(e, 'voice'),
                                })
                              : (0, so.jsx)(Pe.VoicePanel, {
                                  oversell: es,
                                  askStock: (e) =>
                                    (0, le.askOversell)(e, 'sell'),
                                  records:
                                    'free' === Po.access ? Po.records : null,
                                  onPlans:
                                    'staff' === ii
                                      ? void 0
                                      : () =>
                                          _i(
                                            (0, eo.L)(
                                              '\u0628\u0631\u0627\u06cc \u06a9\u0627\u0631 \u0628\u06cc\u0634\u062a\u0631 \u0647\u0645\u06cc\u0646 \u062d\u0627\u0644\u0627 \u0627\u0631\u062a\u0642\u0627 \u0628\u062f\u0647\u061b \u0628\u0627 \u0627\u0634\u062a\u0631\u0627\u06a9 \u06a9\u0627\u0631 \u0646\u0627\u0645\u062d\u062f\u0648\u062f \u062f\u0627\u0631\u06cc.',
                                            ),
                                          ),
                                  onSaleSaved: pr,
                                  onPrices: Yi,
                                  products: nr.products,
                                  movements: nr.movements,
                                  draftKey: li,
                                  aiAllowance: Io,
                                  onDirtyChange: Ln,
                                  onClose: () => {
                                    (Ln(!1), gr(null));
                                  },
                                  onConfirm: $a,
                                  onUndoMoves: oa,
                                  shopName: Ho,
                                })),
                          'image' === vr &&
                            (r
                              ? (0, so.jsx)(at.DemoAiPanel, {
                                  kind: 'image',
                                  products: nr.products,
                                  onClose: () => gr(null),
                                  onApply: (e) => ts(e, 'image'),
                                })
                              : (0, so.jsx)(Ce.ImagePanel, {
                                  initialPhoto: sr.current,
                                  products: nr.products,
                                  draftKey: li,
                                  aiAllowance: Io,
                                  onDirtyChange: Ln,
                                  onClose: () => ua(() => gr(null)),
                                  onConfirm: (e) => ts(e, 'image'),
                                })),
                          'scan' === vr &&
                            (0, so.jsx)(Ie.ScanPanel, {
                              products: nr.products,
                              allowedKinds: ui,
                              startKind: cn,
                              showPrice: !!gi,
                              editSalePrice: !!bi,
                              businessType: ci,
                              role: ii || void 0,
                              onDirtyChange: Ln,
                              onClose: () => ua(() => gr(null)),
                              onConfirm: (e) => ts([e], 'scan', !0),
                            }),
                          'manualDate' === vr &&
                            (0, so.jsx)(H.MovementDate, {
                              initialOpen: !0,
                              value: un,
                              onChange: pn,
                            }),
                          S.TELEGRAM_BOT &&
                            'telegram' === vr &&
                            (0, so.jsx)(ne.TelegramPanel, {
                              onClose: () => gr(null),
                            }),
                          Oo && gs,
                        ],
                      }),
                    ],
                  }),
                }),
                (0, so.jsx)(Y.ToastHost, {}),
                Xs,
              ],
            }),
            Gs &&
              !Oo &&
              (0, so.jsx)(ge.default, {
                style: [
                  ve.default.absoluteFill,
                  { zIndex: 100, elevation: 100 },
                ],
                children: (0, so.jsx)(F.SwipeBack, {
                  sheet: !0,
                  enter: !0,
                  onBack: ha,
                  children: el,
                }),
              }),
            $s,
            Os,
            xa,
            Zs,
            (0, so.jsx)(Xe.CalmPrompts, {
              prompts: Wi,
              onPlans: () => {
                ((0, Q.openSubscriptionPage)(), za('profile'));
              },
            }),
            (0, so.jsx)($e.PermissionPrimer, {
              active: !(
                !e ||
                r ||
                vr ||
                br ||
                kr ||
                xn ||
                Rn ||
                qn ||
                Sn ||
                Hn ||
                Vo ||
                Qo ||
                Yo ||
                0 !== Ni
              ),
            }),
            (0, so.jsx)(Qt.HomePriceFix, {
              shop: e,
              state: nr,
              kind: Wo,
              onClose: () => Ko(null),
              onSave: gi ? as : void 0,
              onEditor: gi
                ? (e, t) => {
                    (Ko(null), Qi(e, t));
                  }
                : void 0,
            }),
            (0, so.jsx)(oo.PhoneWidgetSync, {
              shop: e,
              demo: r,
              chequesAllowed: Ti,
              salesToday: 'revenue' in ys ? ys.revenue : void 0,
              lowCount: e && ms?.shopId !== e.id ? void 0 : ys.low,
              lowNames: ps.slice(0, 3).map((e) => e.name),
            }),
            (0, so.jsx)(p.AlarmHistorySheet, {
              visible: Qo && Va,
              scope: e && !r ? e.id : null,
              preview: tr,
              onClose: () => Xo(!1),
              onOpen: (e) => {
                (Xo(!1), Ka(e));
              },
            }),
            (0, so.jsx)(it.FeatureGuide, {
              tip: Hn,
              onClose: () => Nn(null),
              onAction: (t) => {
                (e &&
                  (0, E.request)('/v1/me/preferences', 'PATCH', {
                    tip: { key: t, action: 'used' },
                  }).catch(() => {}),
                  'low_stock_alarm' === t
                    ? (Kn(!0), Go(!0), za('inventory'))
                    : 'excel_import' === t
                      ? (Qn('imports'), za('data'))
                      : 'batch_chat' === t
                        ? Qa('batch')
                        : za('barcode' === t ? 'inventory' : 'profile'));
              },
            }),
          ],
        });
      }),
      t(a[0]));
    var l = t(a[1]),
      c = t(a[2]),
      d = t(a[3]),
      u = t(a[4]),
      p = t(a[5]),
      f = t(a[6]),
      m = t(a[7]),
      h = t(a[8]),
      y = t(a[9]),
      v = t(a[10]),
      g = t(a[11]),
      b = t(a[12]);
    t(a[13]);
    var x = t(a[14]),
      k = t(a[15]),
      S = t(a[16]),
      w = t(a[17]),
      j = t(a[18]),
      P = t(a[19]),
      C = t(a[20]),
      I = t(a[21]),
      E = t(a[22]),
      L = t(a[23]),
      R = t(a[24]),
      B = t(a[25]),
      D = t(a[26]),
      T = t(a[27]),
      z = t(a[28]),
      A = t(a[29]),
      q = t(a[30]),
      _ = t(a[31]),
      O = t(a[32]),
      F = t(a[33]),
      U = t(a[34]),
      M = t(a[35]),
      H = t(a[36]),
      N = t(a[37]),
      W = t(a[38]),
      K = t(a[39]),
      V = t(a[40]),
      G = t(a[41]),
      Y = t(a[42]),
      J = s(t(a[43])),
      Q = t(a[44]),
      X = t(a[45]),
      $ = t(a[46]),
      Z = t(a[47]),
      ee = t(a[48]),
      te = t(a[49]),
      oe = t(a[50]),
      re = t(a[51]),
      ne = t(a[52]),
      ie = t(a[53]),
      ae = t(a[54]),
      se = t(a[55]),
      le = t(a[56]),
      ce = t(a[57]),
      de = t(a[58]),
      ue = s(t(a[59])),
      pe = s(t(a[60])),
      fe = s(t(a[61]));
    t(a[62]);
    var me = s(t(a[63])),
      he = s(t(a[64]));
    s(t(a[65]));
    t(a[66]);
    var ye = s(t(a[67]));
    t(a[68]);
    var ve = s(t(a[69])),
      ge = s(t(a[70])),
      be = s(t(a[71])),
      xe = t(a[72]),
      ke = t(a[73]),
      Se = t(a[74]),
      we = t(a[75]),
      je = t(a[76]),
      Pe = t(a[77]),
      Ce = t(a[78]),
      Ie = t(a[79]),
      Ee = t(a[80]),
      Le = t(a[81]),
      Re = t(a[82]),
      Be = t(a[83]),
      De = t(a[84]),
      Te = t(a[85]),
      ze = t(a[86]),
      Ae = t(a[87]),
      qe = t(a[88]),
      _e = t(a[89]),
      Oe = t(a[90]),
      Fe = t(a[91]),
      Ue = t(a[92]),
      Me = t(a[93]),
      He = t(a[94]),
      Ne = t(a[95]),
      We = t(a[96]),
      Ke = t(a[97]),
      Ve = t(a[98]),
      Ge = t(a[99]),
      Ye = t(a[100]),
      Je = t(a[101]),
      Qe = t(a[102]),
      Xe = t(a[103]),
      $e = t(a[104]),
      Ze = t(a[105]),
      et = t(a[106]),
      tt = t(a[107]),
      ot = t(a[108]),
      rt = t(a[109]),
      nt = t(a[110]),
      it = t(a[111]),
      at = t(a[112]),
      st = t(a[113]),
      lt = t(a[114]),
      ct = t(a[115]),
      dt = t(a[116]),
      ut = t(a[117]),
      pt = t(a[118]),
      ft = t(a[119]),
      mt = t(a[120]),
      ht = t(a[121]),
      yt = t(a[122]),
      vt = t(a[123]),
      gt = t(a[124]),
      bt = t(a[125]),
      xt = t(a[126]),
      kt = t(a[127]),
      St = t(a[128]),
      wt = t(a[129]),
      jt = t(a[130]),
      Pt = t(a[131]),
      Ct = t(a[132]),
      It = t(a[133]),
      Et = t(a[134]),
      Lt = t(a[135]),
      Rt = t(a[136]),
      Bt = t(a[137]),
      Dt = t(a[138]),
      Tt = t(a[139]),
      zt = t(a[140]),
      At = t(a[141]),
      qt = t(a[142]),
      _t = t(a[143]),
      Ot = t(a[144]),
      Ft = t(a[145]),
      Ut = t(a[146]),
      Mt = t(a[147]),
      Ht = t(a[148]),
      Nt = t(a[149]),
      Wt = t(a[150]),
      Kt = t(a[151]),
      Vt = t(a[152]),
      Gt = t(a[153]),
      Yt = t(a[154]),
      Jt = t(a[155]),
      Qt = t(a[156]),
      Xt = t(a[157]),
      $t = t(a[158]),
      Zt = t(a[159]),
      eo = t(a[160]),
      to = t(a[161]),
      oo = t(a[162]),
      ro = t(a[163]),
      no = t(a[164]),
      io = t(a[165]),
      ao = t(a[166]),
      so = t(a[167]),
      lo = t(a[168]);
    const co =
        '\u0627\u06cc\u0646 \u06a9\u0627\u0631 \u062f\u0631 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0646\u0645\u0648\u0646\u0647 \u0627\u0646\u062c\u0627\u0645 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f\u060c \u0686\u0648\u0646 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0646\u0645\u0648\u0646\u0647 \u0628\u0647 \u0633\u0631\u0648\u0631 \u0648\u0635\u0644 \u0646\u06cc\u0633\u062a\u061b \u0628\u0631\u0627\u06cc \u0627\u0646\u062c\u0627\u0645\u0634 \xab\u0633\u0627\u062e\u062a \u0645\u063a\u0627\u0632\u0647\u0654 \u062e\u0648\u062f\u0645\xbb \u0631\u0627 \u0628\u0632\u0646.',
      uo = 4e3,
      po = 1e4;
    (0, yt.onServerBusy)((e) => (0, Y.showToast)(e, 'wait'));
    const fo = 250,
      mo = [
        'basket',
        'receiveBasket',
        'receipt',
        'variants',
        'model',
        'toBuy',
        'recipe',
        'recipes',
        'telegramInbox',
      ],
      ho = [
        'basket',
        'receiveBasket',
        'receipt',
        'salesList',
        'expiryList',
        'priceAdjust',
        'recipe',
        'recipes',
        'model',
        'variants',
        'toBuy',
        'telegramInbox',
        'activity',
        'stockCount',
      ],
      yo = (0, eo.localized)([
        { id: 'home', label: Ae.fa.home, icon: 'dashboard' },
        { id: 'add', label: Ae.fa.add, icon: 'add' },
        { id: 'inventory', label: Ae.fa.inventory, icon: 'inventory' },
        { id: 'data', label: Ae.fa.data, icon: 'data' },
        { id: 'profile', label: Ae.fa.profile, icon: 'profile' },
      ]),
      vo = ['home', 'inventory', 'add', 'data', 'profile'].map((e) =>
        yo.find((t) => t.id === e),
      ),
      go = (0, eo.localized)([
        ...vo.slice(0, 4),
        { id: 'learn', label: Et.notebookFa.learn, icon: 'ai' },
        vo[4],
      ]),
      bo = () => ({
        categories: [Ae.fa.foodCategory],
        products: [
          {
            id: 'milk',
            category: Ae.fa.foodCategory,
            name: Ae.fa.milk,
            detail: Ae.fa.milkDetail,
            stock: 48,
          },
          {
            id: 'rice',
            category: Ae.fa.foodCategory,
            name: Ae.fa.rice,
            detail: Ae.fa.riceDetail,
            stock: 24,
          },
          {
            id: 'oil',
            category: Ae.fa.foodCategory,
            name: Ae.fa.oil,
            detail: Ae.fa.oilDetail,
            stock: 5,
          },
          {
            id: 'water',
            category: Ae.fa.foodCategory,
            name: Ae.fa.water,
            detail: Ae.fa.waterDetail,
            stock: 120,
          },
        ],
        movements: [
          {
            id: 'sample-1',
            productId: 'water',
            name: Ae.fa.water,
            kind: 'received',
            quantity: 24,
          },
          {
            id: 'sample-2',
            productId: 'rice',
            name: Ae.fa.rice,
            kind: 'sold',
            quantity: 3,
          },
          {
            id: 'sample-3',
            productId: 'milk',
            name: Ae.fa.milk,
            kind: 'received',
            quantity: 12,
          },
        ],
      });
    function xo(e) {
      try {
        return (0, qe.parseQuantity)(e);
      } catch {
        return;
      }
    }
    const ko = ve.default.create({
      root: { flex: 1 },
      content: {
        width: '100%',
        maxWidth: 580,
        alignSelf: 'center',
        paddingHorizontal: 20,
      },
      header: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 26,
      },
      brand: { fontSize: 25, fontFamily: 'Vazirmatn_700Bold', lineHeight: 40 },
      brandMark: {
        width: 34,
        height: 34,
        borderRadius: 11,
        alignItems: 'center',
        justifyContent: 'center',
      },
      themeButton: {
        width: 44,
        height: 44,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: ve.default.hairlineWidth,
      },
      heading: {
        fontSize: 26,
        fontFamily: 'Vazirmatn_700Bold',
        lineHeight: 43,
      },
      hero: { borderRadius: 27, padding: 22, borderWidth: 1 },
      total: {
        fontSize: 64,
        lineHeight: 98,
        fontFamily: 'Vazirmatn_500Medium',
      },
      pill: { paddingHorizontal: 11, paddingVertical: 3, borderRadius: 20 },
      stat: { flex: 1, alignItems: 'center', padding: 13, gap: 3 },
      symbol: {
        width: 39,
        height: 42,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
      },
      voiceShortcut: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        gap: 12,
        borderRadius: 22,
        padding: 17,
      },
      voiceIcon: {
        width: 42,
        height: 42,
        borderRadius: 14,
        backgroundColor: '#ffffff16',
        alignItems: 'center',
        justifyContent: 'center',
      },
      listRow: {
        flexDirection: 'row-reverse',
        gap: 11,
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: ve.default.hairlineWidth,
      },
      methods: { flexDirection: 'row-reverse', flexWrap: 'wrap', gap: 10 },
      method: {
        width: '48%',
        flexGrow: 1,
        borderRadius: 19,
        padding: 16,
        gap: 5,
        borderWidth: 1,
        alignItems: 'flex-end',
      },
      profileAvatar: {
        width: 90,
        height: 90,
        borderRadius: 30,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      dockPosition: {
        position: 'absolute',
        left: 14,
        right: 14,
        alignItems: 'center',
      },
      dock: {
        width: '100%',
        maxWidth: 480,
        borderRadius: 30,
        padding: 6,
        borderWidth: 1,
        overflow: 'hidden',
      },
      centreKeySlot: {
        position: 'absolute',
        top: -17,
        left: 0,
        right: 0,
        alignItems: 'center',
        zIndex: 2,
        elevation: 10,
      },
      centreKeyHit: { width: 76, alignItems: 'center', gap: 1 },
      centreKeyRing: { padding: 3, borderRadius: 21 },
      centreKey: {
        width: 56,
        height: 56,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
      },
      tabRow: { flexDirection: 'row', direction: 'ltr', gap: 3 },
      tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        minHeight: 58,
        borderRadius: 24,
      },
      overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#08090b99',
        padding: 16,
      },
      sheet: {
        width: '100%',
        maxWidth: 470,
        maxHeight: '93%',
        flexShrink: 1,
        padding: 18,
        borderRadius: 25,
        borderWidth: 1,
      },
    });
  },
  609,
  [
    610, 611, 612, 613, 620, 625, 685, 464, 686, 489, 687, 578, 534, 688, 572,
    689, 494, 455, 698, 699, 488, 502, 415, 429, 442, 473, 481, 482, 516, 532,
    702, 704, 384, 515, 706, 718, 691, 454, 523, 719, 721, 722, 525, 258, 723,
    748, 745, 746, 486, 766, 771, 773, 777, 452, 433, 778, 779, 547, 2, 217, 92,
    204, 196, 207, 224, 210, 94, 232, 122, 17, 99, 257, 381, 380, 540, 780, 782,
    786, 825, 826, 835, 839, 864, 410, 385, 407, 382, 492, 439, 432, 690, 861,
    695, 865, 533, 480, 707, 795, 866, 874, 427, 875, 876, 877, 878, 880, 863,
    883, 884, 887, 915, 917, 918, 467, 920, 922, 932, 947, 888, 518, 913, 461,
    479, 599, 696, 862, 623, 951, 954, 955, 960, 528, 831, 697, 580, 541, 414,
    519, 626, 654, 520, 459, 962, 885, 976, 801, 788, 792, 790, 977, 979, 981,
    984, 453, 817, 849, 985, 986, 987, 988, 311, 457, 989, 991, 992, 993, 606,
    338, 937,
  ],
);
