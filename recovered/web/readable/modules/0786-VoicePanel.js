// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 786; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (e, t, n, i, r, o, s) {
    'use strict';
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(o, '__esModule', { value: !0 }),
      (o.VoicePanel = function ({
        records: e,
        onPlans: t,
        onSaleSaved: n,
        onPrices: i,
        products: r,
        movements: o = [],
        draftKey: s,
        aiAllowance: c,
        inline: l = !1,
        shopName: f,
        onDirtyChange: m,
        onClose: C,
        onConfirm: L,
        onUndoMoves: X,
        oversell: Q = 'ask',
        askStock: Z,
      }) {
        const { colors: ee } = (0, se.useTheme)(),
          re = (0, T.useVoiceRecorder)(),
          oe = (0, ce.useReducedMotion)(),
          { height: fe } = (0, P.default)(),
          me = xe.activeShop,
          ye = me?.role,
          Ie = me?.businessType,
          ze = (0, ge.movementKinds)(Ie, (0, De.roleKinds)(ye, me?.access)),
          Be = {
            ...(0, H.priceRights)(me),
            salePrice: (0, De.canEditSalePrice)(me?.role, me?.access),
          },
          Me = !!i && (Be.price || Be.costPrice),
          We = (e) =>
            Be.salePrice ? e : e.map((e) => (0, H.saleAtOwnPrice)(e, r)),
          [Ue, Ke] = (0, a.useState)(!1),
          [Je, Xe] = (0, a.useState)(null),
          [Qe, Ge] = (0, a.useState)(!1);
        (0, a.useEffect)(() => (0, z.onDeviceVoiceProgress)(Xe), []);
        const [Ye, $e] = (0, a.useState)('loading'),
          [Ze, et] = (0, a.useState)(0),
          [tt, nt] = (0, a.useState)(0),
          [it, rt] = (0, a.useState)(''),
          [ot, st] = (0, a.useState)(''),
          ct = (0, a.useRef)(0),
          [at, lt] = (0, a.useState)(null),
          [dt, ut] = (0, a.useState)(''),
          [pt, ht] = (0, a.useState)(''),
          [ft, mt] = (0, a.useState)({}),
          [yt, gt] = (0, a.useState)(!1),
          [vt, xt] = (0, a.useState)(null),
          [bt, St] = (0, a.useReducer)(H.stackReducer, H.emptyStack),
          jt = (0, a.useRef)(bt);
        jt.current = bt;
        const wt = (0, a.useRef)(!1),
          Ct = (0, a.useRef)(new Set()),
          It = (0, a.useRef)(void 0),
          Dt = (0, a.useRef)(!0),
          kt = (0, a.useRef)(!1),
          Pt = (0, a.useRef)(null),
          Rt = (0, a.useRef)(re);
        Rt.current = re;
        const Lt = (0, a.useRef)(Ye);
        Lt.current = Ye;
        const Et = (0, a.useRef)(0),
          Tt = (0, a.useRef)(r),
          zt = (0, a.useRef)('');
        Tt.current = r;
        const [Ft, Nt] = (0, a.useState)(!1),
          At = (0, a.useRef)(void 0),
          Ht = (0, a.useRef)(0),
          Vt = (0, a.useRef)(null),
          Bt = (0, a.useRef)(0),
          _t = (0, a.useRef)(!1),
          [Ot, qt] = (0, a.useState)(null),
          [Mt, Wt] = (0, a.useState)(null),
          [Ut, Kt] = (0, a.useState)(!1),
          [Jt, Xt] = (0, a.useState)(''),
          [Qt, Gt] = (0, a.useState)({}),
          [Yt, $t] = (0, a.useState)(0),
          [Zt, en] = (0, B.useConfirm)(),
          [tn, nn] = (0, a.useState)(!1),
          rn = (0, a.useRef)(void 0),
          [on, sn] = (0, a.useState)(!1),
          [cn, an] = (0, a.useState)(''),
          ln = (0, a.useRef)(new Map()),
          dn = (0, a.useRef)(new Map()),
          [un, pn] = (0, a.useState)({ reminders: [], contacts: [] }),
          [hn, fn] = (0, a.useState)({}),
          [mn, yn] = (0, a.useState)({}),
          [gn, vn] = (0, a.useState)(!1),
          [xn, bn] = (0, a.useState)(''),
          [Sn, jn] = (0, a.useState)('idle'),
          [wn, Cn] = (0, a.useState)(!1),
          [In, Dn] = (0, a.useState)(null),
          [kn, Pn] = (0, a.useState)(null),
          Rn = (e) => {
            ((jt.current = (0, H.stackReducer)(jt.current, e)), St(e));
          },
          [Ln, En] = (0, a.useState)(!1),
          Tn = (0, a.useRef)((0, h.emptyUndo)()),
          [zn, Fn] = (0, a.useState)('idle'),
          [Nn, An] = (0, a.useState)(''),
          [Hn, Vn] = (0, a.useState)(void 0),
          Bn = (0, a.useRef)(Hn);
        Bn.current = Hn;
        const [_n, On] = (0, a.useState)({}),
          qn = (0, a.useRef)(_n);
        qn.current = _n;
        const Mn = (0, a.useRef)({}),
          [Wn, Un] = (0, a.useState)(!1),
          [Kn, Jn] = (0, a.useState)([]),
          [Xn, Qn] = (0, a.useState)(null),
          [Gn, Yn] = (0, a.useState)({}),
          $n = (0, a.useRef)(Gn);
        $n.current = Gn;
        const Zn = (0, a.useRef)(new Map()),
          ei = (0, a.useRef)(vt);
        ei.current = vt;
        const ti = vt?.sales || [],
          ni = (e, t = ti, n = _n, i = Hn) => {
            const r = t[e];
            if (!r) return !1;
            const o = n[e] || {};
            return (
              (0, J.voiceSaleCustomer)(r, i, o.contactId).ready &&
              !(
                'cheque' === r.payment &&
                (!o.cheque?.dueDate || 0 === r.paidToman)
              )
            );
          },
          ii =
            (ti.some(
              (e, t) =>
                bt.items.some((e) => (0, J.rowSale)(e, ti) === t) && !ni(t),
            ),
            !!vt?.ledger?.length || ti.some(J.accountSale)),
          ri = (e, t) => On((n) => ({ ...n, [e]: { ...n[e], ...t } })),
          oi = (e) => {
            const t = {
              id: e.id,
              name: e.name,
              ...(e.phone ? { phone: e.phone } : {}),
            };
            ((Bn.current = Bn.current ? [...Bn.current, t] : Bn.current),
              Vn((e) => (e ? [...e, t] : e)));
          };
        (0, a.useEffect)(() => {
          if (!ii) return;
          if (!xe.activeShop) return void Vn(null);
          const e = xe.activeShop;
          let t = !0;
          return (
            Vn(void 0),
            Te(e)
              .then((e) => {
                t && Vn(e);
              })
              .catch(() => {
                t && Vn(null);
              }),
            () => {
              t = !1;
            }
          );
        }, [ii]);
        const si = (0, a.useRef)(new S.default.Value(0)).current,
          ci = (0, a.useRef)(null);
        ((0, a.useEffect)(() => {
          oe
            ? si.setValue(1)
            : S.default
                .timing(si, {
                  toValue: 1,
                  duration: 300,
                  easing: w.default.out(w.default.cubic),
                  useNativeDriver: Le,
                })
                .start();
        }, []),
          (0, a.useEffect)(() => {
            ((Dt.current = !0),
              Promise.all([
                (0, be.loadDrafts)(s).catch(() => ({})),
                (0, W.voiceExplainerSeen)(),
                (0, be.loadVoiceAudio)(s),
              ]).then(([e, t, n]) => {
                if (!Dt.current) return;
                const i =
                  e.voicePendingSales && Object.keys(e.voicePendingSales).length
                    ? Object.fromEntries(
                        Object.entries(e.voicePendingSales).map(([e, t]) => [
                          Number(e),
                          t,
                        ]),
                      )
                    : e.voicePendingSale
                      ? { 0: e.voicePendingSale }
                      : void 0;
                if (
                  ((At.current = e.voiceJob),
                  e.voice && (0, O.draftHasRows)(e.voice))
                ) {
                  if (i || !(0, O.draftExpired)(e.voiceAt))
                    return (
                      di(e.voice, !1, i),
                      void (
                        (0, O.draftBannerText)(e.voiceAt) &&
                        Wt(e.voiceAt || null)
                      )
                    );
                  ((0, be.clearDraftPart)(s, 'voice'),
                    (0, be.clearDraftPart)(s, 'voiceAt'),
                    (0, $.showToast)(
                      (0, je.L)(
                        '\u067e\u06cc\u0634\u200c\u0646\u0648\u06cc\u0633 \u0635\u0648\u062a\u06cc \u0628\u06cc\u0634 \u0627\u0632 \u06f7 \u0631\u0648\u0632 \u0645\u0627\u0646\u062f\u0647 \u0628\u0648\u062f \u0648 \u067e\u0627\u06a9 \u0634\u062f.',
                      ),
                    ));
                }
                if (n) {
                  if (!(0, O.draftExpired)(n.at)) {
                    const { at: e, reason: t, ...i } = n;
                    return ((Vt.current = i), qt(t), void $e('stopped'));
                  }
                  ((0, be.clearVoiceAudio)(s),
                    (0, $.showToast)(
                      (0, je.L)(
                        '\u0635\u062f\u0627\u06cc \u0636\u0628\u0637\u200c\u0634\u062f\u0647\u0654 \u0642\u062f\u06cc\u0645\u06cc \u0628\u06cc\u0634 \u0627\u0632 \u06f7 \u0631\u0648\u0632 \u0645\u0627\u0646\u062f\u0647 \u0628\u0648\u062f \u0648 \u067e\u0627\u06a9 \u0634\u062f.',
                      ),
                    ));
                }
                if (
                  (e.voice && (0, be.clearDraftPart)(s, 'voice'),
                  c && 0 === c.limit)
                )
                  return (rt(E.fa.notInPlan), void $e('failed'));
                yi(t);
              }));
            const e = j.default.addEventListener('change', (e) => {
              'background' === e &&
                'recording' === Lt.current &&
                (Rt.current.keepsInBackground
                  ? hi('background')
                  : (Pt.current?.abort(),
                    Rt.current.cancel(),
                    (kt.current = !1),
                    Dt.current &&
                      (rt(
                        (0, je.L)(
                          '\u0636\u0628\u0637 \u0642\u0637\u0639 \u0634\u062f \u0686\u0648\u0646 \u0628\u0631\u0646\u0627\u0645\u0647 \u0628\u0633\u062a\u0647 \u06cc\u0627 \u0635\u0641\u062d\u0647 \u0642\u0641\u0644 \u0634\u062f\u061b \u062f\u0648\u0628\u0627\u0631\u0647 \u0636\u0628\u0637 \u06a9\u0646.',
                        ),
                      ),
                      st('background'),
                      $e('failed'))));
            });
            return () => {
              if (
                ((Dt.current = !1),
                Pt.current?.abort(),
                e.remove(),
                'recording' === Lt.current)
              ) {
                const e = Rt.current;
                e.stop()
                  .then((e) =>
                    (0, be.saveVoiceAudio)(s, {
                      ...e,
                      at: new Date().toISOString(),
                      reason: 'left',
                    }),
                  )
                  .catch(() => e.cancel());
              } else Rt.current.cancel();
            };
          }, []),
          (0, a.useEffect)(() => {
            if ('recording' !== Ye) return;
            const e = setInterval(() => et((e) => e + 1), 1e3);
            return () => clearInterval(e);
          }, [Ye]));
        const ai = Math.min(
          _.MAX_VOICE_SECONDS,
          re.maxSeconds || _.MAX_VOICE_SECONDS,
        );
        ((0, a.useEffect)(() => {
          'recording' === Ye &&
            (Ze >= ai
              ? hi('limit')
              : _t.current &&
                Ze - Bt.current >= O.SILENCE_STOP_SECONDS &&
                hi('silence'));
        }, [Ze, Ye]),
          (0, a.useEffect)(() => {
            'recording' === Ye &&
              (re.level > 0.02 && (_t.current = !0),
              re.level > A.SPEECH_LEVEL &&
                ((Bt.current = Ze), (Et.current = Date.now())));
          }, [re.level, Ye]),
          (0, a.useEffect)(() => {
            if ('recording' !== Ye || ci.current) return;
            ((Et.current = 0), (zt.current = ''));
            const e = setInterval(() => {
              const t = Rt.current.live || '',
                n = Date.now() - Et.current;
              !Et.current ||
                !t ||
                n < A.END_OF_SPEECH_MS ||
                t === zt.current ||
                ((zt.current = t),
                (0, A.speechEnded)({
                  heard: !0,
                  quietMs: n,
                  text: t,
                  products: Tt.current,
                }) && (clearInterval(e), pi()));
            }, 100);
            return () => clearInterval(e);
          }, [Ye]));
        const li = () => (Ut ? Ne().slice(2) : Ne());
        function di(e, t, n, i = !1, o = !1) {
          const c = (0, J.withVoiceSales)(e);
          if (
            (sn(i),
            an(''),
            (Ct.current = new Set()),
            (Zn.current = new Map()),
            (Tn.current = (0, h.emptyUndo)()),
            Fn('idle'),
            An(''),
            En(t),
            nn(t && !o),
            clearTimeout(rn.current),
            t && !o)
          ) {
            const e = () => {
              wt.current ? (rn.current = setTimeout(e, 2e3)) : nn(!1);
            };
            rn.current = setTimeout(e, 3e4);
          }
          ((Mn.current = { ...n }),
            Un(!!n && Object.keys(n).length > 0),
            On(
              Object.fromEntries(
                Object.entries(n || {}).map(([e, t]) => [
                  e,
                  {
                    contactId: t.body.contactId,
                    cheque: t.body.payment.cheque,
                  },
                ]),
              ),
            ),
            Jn([]),
            Qn(null),
            Yn({}),
            (ln.current = new Map()),
            (dn.current = new Map()),
            fn({}),
            bn(''),
            jn('idle'),
            Cn(!1),
            pn(
              i
                ? {
                    reminders: (c.toBuy || []).map(() => ({ status: 'draft' })),
                    contacts: (c.contacts || []).map(() => ({
                      status: 'draft',
                    })),
                  }
                : {
                    reminders: (c.toBuy || []).map(() => ({
                      status: t ? 'saving' : 'saved',
                    })),
                    contacts: t
                      ? (c.contacts || []).map(() => ({ status: 'saving' }))
                      : [],
                  },
            ),
            t && Di(c));
          const a = c.sales?.map((e, t) => {
            const i = n?.[t],
              r =
                e.customerPhone ||
                (e.customerName
                  ? (0, H.phoneAfter)(c.transcript, e.customerName)
                  : ''),
              o = r ? { ...e, customerPhone: r } : e;
            return i
              ? {
                  ...o,
                  payment: i.body.payment.method,
                  paidToman: i.body.payment.paidToman ?? null,
                }
              : o;
          });
          (xt(a ? { ...c, sales: a } : c),
            St({
              type: 'reset',
              items: (0, H.stackFromResult)(c, ze).map((e) =>
                (0, G.namedPriceAnswered)(e, (0, H.resolvedProduct)(e, r)),
              ),
            }),
            $e('review'),
            m?.(c.actions.length > 0 || !!c.expenses?.length),
            (t || i) &&
              (0, be.patchDrafts)(s, {
                voice: Re(c),
                voiceAt: new Date().toISOString(),
                ...(At.current ? { voiceJob: At.current } : {}),
                voicePendingSale: void 0,
                voicePendingSales: void 0,
              }),
            Gt({}),
            Xt(''),
            $t((e) => e + 1));
        }
        async function ui() {
          if (kt.current) return;
          if (0 === (0, ie.recordsLeft)(e, me?.timezone))
            return (
              rt((0, le.errorText)(Error('free_limit_reached'))),
              st('free_limit_reached'),
              lt(null),
              void $e('failed')
            );
          ((kt.current = !0), rt(''), st(''), lt(null), Ge(!1), $e('starting'));
          const t = new AbortController();
          Pt.current = t;
          const n = setTimeout(() => t.abort(), 1e4);
          try {
            if (
              (await (0, F.checkVoice)(t.signal), clearTimeout(n), !Dt.current)
            )
              return;
            if (!ci.current && !(0, z.deviceVoiceEnabled)())
              throw new Error(
                (0, z.deviceVoiceNeedsUpdate)()
                  ? 'device_voice_update'
                  : 'device_voice_app',
              );
            if (!ci.current) {
              const e = await (0, N.voiceStartPlan)({
                modelReady: z.deviceVoiceReady,
                serverOn: N.serverVoiceAvailable,
                warm: z.warmDeviceVoice,
                serverOnly: !0,
              });
              if (!Dt.current) return;
              if ('server_off' === e) throw new Error('voice_server_off');
              if ('wait' === e) {
                Ke(!0);
                const e = await (0, z.prepareDeviceVoice)();
                if (!Dt.current) return;
                if ((Ke(!1), !e)) throw new Error('device_voice_download');
                return (Ge(!0), void $e('failed'));
              }
            }
            if (
              (await re.start(),
              Dt.current &&
                'active' !== j.default.currentState &&
                (await ((i = 4e3),
                new Promise((e) => {
                  if ('active' === j.default.currentState) return void e();
                  const t = setTimeout(r, i),
                    n = j.default.addEventListener('change', (e) => {
                      'active' === e && r();
                    });
                  function r() {
                    (clearTimeout(t), n.remove(), e());
                  }
                }))),
              !Dt.current || 'active' !== j.default.currentState)
            )
              return (re.cancel(), void (Dt.current && $e('failed')));
            ((0, W.rememberVoiceExplainer)(),
              (ct.current = 0),
              et(0),
              (Bt.current = 0),
              (_t.current = !1),
              qt(null),
              $e('recording'),
              m?.(!0));
          } catch (e) {
            if (!Dt.current) return;
            if (
              e instanceof Error &&
              'cancelled' === e.message &&
              ct.current < 1
            )
              return (
                ct.current++,
                (kt.current = !1),
                clearTimeout(n),
                void setTimeout(() => {
                  Dt.current && ui();
                }, 500)
              );
            const t =
                e instanceof Error &&
                ('NotAllowedError' === e.name || 'permission' === e.message),
              i = (0, Se.voiceReason)('start', e);
            (rt(t ? E.fa.voiceErrors.permission : i.text),
              st(i.code),
              lt(t ? 'settings' : 'retry'),
              $e('failed'));
          } finally {
            (clearTimeout(n), (kt.current = !1));
          }
          var i;
        }
        async function pi() {
          if (kt.current) return;
          let e;
          ((kt.current = !0), rt(''), st(''), $e('processing'));
          try {
            e = await re.stop();
          } catch (e) {
            if (((kt.current = !1), Dt.current)) {
              const t = (0, Se.voiceReason)('send', e);
              (rt(t.text), st(t.code), $e('processError'));
            }
            return;
          }
          ((kt.current = !1), Dt.current && (await fi(e)));
        }
        async function hi(e) {
          if (!kt.current && 'recording' === Lt.current) {
            kt.current = !0;
            try {
              const t = await Rt.current.stop();
              ((Vt.current = t),
                (0, be.saveVoiceAudio)(s, {
                  ...t,
                  at: new Date().toISOString(),
                  reason: e,
                }),
                Dt.current && (qt(e), $e('stopped')));
            } catch (e) {
              if (Dt.current) {
                const t = (0, Se.voiceReason)('send', e);
                (rt(t.text), st(t.code), $e('failed'));
              }
            } finally {
              kt.current = !1;
            }
          }
        }
        async function fi(e = Vt.current) {
          if (!e || kt.current) return;
          ((kt.current = !0),
            (Vt.current = e),
            rt(''),
            st(''),
            $e('processing'));
          const t = new AbortController();
          Pt.current = t;
          const n = setTimeout(() => t.abort(), 24e4),
            i = ci.current ? null : (0, A.quickVoiceResult)(e.transcript, r);
          i && Dt.current && (Nt(!0), di(i, !1));
          try {
            const n = await (0, F.sendVoice)(
              e,
              r.map((e) => e.name),
              t.signal,
              (e) => {
                At.current = e;
              },
            );
            ((Ht.current = e.duration),
              (Vt.current = null),
              (0, be.clearVoiceAudio)(s),
              Dt.current && (qt(null), Nt(!1), di(n, !0, void 0, !1, !!i)));
          } catch (e) {
            if (Dt.current) {
              const n = (0, Se.voiceReason)(
                'send',
                t.signal.aborted ? Error('timeout') : e,
              );
              (i && (0, be.clearDraftPart)(s, 'voice'),
                Nt(!1),
                rt(n.text),
                st(n.code),
                $e('processError'));
            }
          } finally {
            (clearTimeout(n), (kt.current = !1));
          }
        }
        async function mi(e) {
          const t = e.trim().slice(0, F.MAX_REREAD_CHARS);
          if (!t) return (Xt(H.voiceFa.rereadEmpty), !1);
          if (wt.current || kt.current) return !1;
          ((kt.current = !0), Kt(!0), Xt(''));
          const n = new AbortController();
          Pt.current = n;
          const i = setTimeout(() => n.abort(), 12e4);
          try {
            const e = await (0, F.rereadVoice)(
              t,
              r.filter((e) => !e.archivedAt).map((e) => e.name),
              n.signal,
              { reread: At.current, duration: Ht.current || void 0 },
            );
            return (Dt.current && (di(e, !1, void 0, !0), Wt(null)), !0);
          } catch (e) {
            return (
              Dt.current &&
                Xt(
                  (0, Se.voiceReason)(
                    'send',
                    n.signal.aborted ? Error('timeout') : e,
                  ).text,
                ),
              !1
            );
          } finally {
            (clearTimeout(i), (kt.current = !1), Dt.current && Kt(!1));
          }
        }
        async function yi(e) {
          if ((0, q.voiceDemoRequested)()) {
            const e = new AbortController(),
              t = setTimeout(() => e.abort(), 8e3),
              n = await (0, F.aiMockActive)(e.signal)
                .catch(() => !1)
                .finally(() => clearTimeout(t));
            if (!Dt.current) return;
            if (n || (0, q.localHost)())
              return ((ci.current = { mock: n }), void gi());
          }
          e ? ui() : ((0, W.rememberVoiceExplainer)(), $e('permission'));
        }
        async function gi() {
          if (kt.current || !ci.current) return;
          ((kt.current = !0), rt(''), st(''), $e('processing'));
          const e = new AbortController();
          Pt.current = e;
          const t = setTimeout(() => e.abort(), 6e4),
            n = r.filter((e) => !e.archivedAt).map((e) => e.name);
          try {
            let t = null;
            if (ci.current.mock)
              try {
                t = await (0, F.sendVoice)(
                  (0, q.silentWav)(),
                  n,
                  e.signal,
                  (e) => {
                    At.current = e;
                  },
                );
              } catch (t) {
                if (e.signal.aborted) throw t;
              }
            if (!t) {
              await new Promise((e) => setTimeout(e, 1500));
              const e = (0, _.validateVoiceResult)((0, M.voiceFixture)(n));
              t = { ...e, actions: (0, Ce.linkActions)(e.actions, r) };
            }
            Dt.current && di(t, !0);
          } catch (t) {
            if (Dt.current) {
              const n = (0, Se.voiceReason)(
                'send',
                e.signal.aborted ? Error('timeout') : t,
              );
              (rt(n.text), st(n.code), $e('processError'));
            }
          } finally {
            (clearTimeout(t), (kt.current = !1));
          }
        }
        ((0, a.useEffect)(() => {
          if ('processing' !== Ye && !Ut) return;
          nt(0);
          const e = setInterval(
            () => nt((e) => Math.min(e + 1, li().length - 1)),
            1e3,
          );
          return () => clearInterval(e);
        }, [Ye, Ut]),
          (0, a.useEffect)(() => {
            vt &&
              bt.total &&
              (bt.items.length
                ? (0, be.patchDrafts)(s, {
                    voice: Re((0, H.remainingResult)(vt, bt)),
                  })
                : ((0, be.clearDraftPart)(s, 'voice'), m?.(!1)));
          }, [bt.items, bt.total, vt]));
        function vi() {
          ((Vt.current = null),
            (At.current = void 0),
            Wt(null),
            qt(null),
            (0, be.clearDraftPart)(s, 'voice'),
            (0, be.clearDraftPart)(s, 'voiceAt'),
            (0, be.clearDraftPart)(s, 'voiceJob'),
            (0, be.clearVoiceAudio)(s));
        }
        function xi(e) {
          'recording' === Lt.current ||
          ('review' === Lt.current &&
            jt.current.items.some((e) => !Ct.current.has(e.id))) ||
          ('stopped' === Lt.current && Vt.current)
            ? Zt({
                title: (0, je.L)(
                  '\u062d\u0630\u0641 \u067e\u06cc\u0634\u200c\u0646\u0648\u06cc\u0633',
                ),
                text:
                  'recording' === Lt.current
                    ? (0, je.L)(
                        '\u0636\u0628\u0637 \u0644\u063a\u0648 \u0648 \u0635\u062f\u0627 \u062d\u0630\u0641 \u0634\u0648\u062f\u061f',
                      )
                    : 'stopped' === Lt.current
                      ? (0, je.L)(
                          '\u0635\u062f\u0627\u06cc \u0636\u0628\u0637\u200c\u0634\u062f\u0647 \u0647\u0646\u0648\u0632 \u0641\u0631\u0633\u062a\u0627\u062f\u0647 \u0646\u0634\u062f\u0647\u061b \u062d\u0630\u0641 \u0634\u0648\u062f\u061f',
                        )
                      : (0, je.L)(
                          '\u0627\u06cc\u0646 \u0641\u0647\u0631\u0633\u062a \u0647\u0646\u0648\u0632 \u062b\u0628\u062a \u0646\u0634\u062f\u0647\u061b \u062d\u0630\u0641 \u0634\u0648\u062f\u061f',
                        ),
                ok: (0, je.L)('\u062d\u0630\u0641'),
                tone: 'danger',
                run: e,
              })
            : e();
        }
        function bi() {
          xi(() => {
            ((ct.current = 0),
              ht(''),
              Pt.current?.abort(),
              re.cancel(),
              (kt.current = !1),
              xt(null),
              St({ type: 'reset', items: [] }),
              vi(),
              ci.current ? gi() : ui());
          });
        }
        function Si() {
          xi(() => {
            (('review' !== Lt.current && 'stopped' !== Lt.current) || vi(),
              Pt.current?.abort(),
              re.cancel(),
              (kt.current = !1),
              m?.(!1),
              C());
          });
        }
        async function ji(t, o, c = !1) {
          const a = ei.current;
          if (wt.current || !a) return;
          const l = a.sales || [],
            d = Object.keys(Mn.current).length > 0,
            u =
              'card' === (0, J.walkInMethod)(a)
                ? { paymentMethod: 'card' }
                : void 0,
            p = (e) => {
              const t = [];
              let n = {
                products: r,
                movements: [],
                categories: [],
                alarmRules: [],
                alerts: [],
              };
              for (const [i, o] of e.entries()) {
                if (
                  o.ledger ||
                  o.expense ||
                  Ct.current.has(o.id) ||
                  !['sold', 'used', 'waste'].includes(o.kind || '')
                )
                  continue;
                const e = (0, H.resolvedProduct)(o, r);
                if (e && 'made' !== e.kind)
                  try {
                    n = (0, y.applyDraft)(
                      n,
                      (0, H.itemDraft)(o, e),
                      'oversell-' + i,
                      'voice',
                      { short: t },
                    );
                  } catch {}
              }
              return t.length ? (0, y.stockError)(t).details.lines : [];
            },
            h = (e) =>
              !(
                o?.has(e.id) ||
                (t &&
                  (null === t.saleIndex
                    ? e.ledger ||
                      'sold' !== e.kind ||
                      null !== (0, J.rowSale)(e, l)
                    : (0, J.rowSale)(e, l) !== t.saleIndex))
              );
          if (!d) {
            if (
              xe.activeShop &&
              Bn.current &&
              (jt.current.items.some(
                (e) => h(e) && !!e.ledger && !e.ledger.contactId,
              ) ||
                l.some((e, t) => !!e.customerName && !qn.current[t]?.contactId))
            ) {
              const I = Bn.current;
              let D = null;
              ((wt.current = !0), gt(!0));
              try {
                D = await Ee(xe.activeShop, I, [
                  ...jt.current.items
                    .filter((e) => h(e) && !!e.ledger && !e.ledger.contactId)
                    .map((e) => e.ledger.contactName),
                  ...l.map((e) => e.customerName || '').filter(Boolean),
                ]);
              } catch {
              } finally {
                ((wt.current = !1), Dt.current && gt(!1));
              }
              if (D && Dt.current) {
                ((Bn.current = D), Vn(D));
                const k = D.filter((e) => !I.some((t) => t.id === e.id)),
                  P = {},
                  R = (e, t) => {
                    const n = (0, H.personChoices)(e, t, D),
                      i = k.find((e) => n.some((t) => t.id === e.id));
                    return i
                      ? (0, je.L)(
                          '\u0645\u062e\u0627\u0637\u0628 \u062a\u0627\u0632\u0647 \xab{name}\xbb \u062f\u0631 \u0647\u0645\u06cc\u0646 \u0641\u0627\u0635\u0644\u0647 \u0627\u0636\u0627\u0641\u0647 \u0634\u062f\u061b \u0645\u0639\u0644\u0648\u0645 \u06a9\u0646 \u0627\u06cc\u0646 \u0628\u0631\u0627\u06cc \u06a9\u062f\u0627\u0645 \u0627\u0633\u062a.',
                          { name: i.name },
                        )
                      : (0, je.L)(
                          '\u0686\u0646\u062f \u0634\u062e\u0635 \u0628\u0627 \u0646\u0627\u0645 \xab{name}\xbb \u0647\u0633\u062a\u061b \u0645\u0639\u0644\u0648\u0645 \u06a9\u0646 \u0627\u06cc\u0646 \u0628\u0631\u0627\u06cc \u06a9\u062f\u0627\u0645 \u0627\u0633\u062a.',
                          { name: e },
                        );
                  };
                for (const E of jt.current.items)
                  h(E) &&
                    E.ledger &&
                    !E.ledger.contactId &&
                    !(0, H.resolvedContact)(E.ledger, D) &&
                    (0, H.personChoices)(
                      E.ledger.contactName,
                      E.ledger.contactPhone,
                      D,
                    ).length > 0 &&
                    (P[E.id] = R(E.ledger.contactName, E.ledger.contactPhone));
                if (
                  (l.forEach((e, n) => {
                    if (
                      (!t || t.saleIndex === n) &&
                      jt.current.items.some(
                        (e) => (0, J.rowSale)(e, l) === n,
                      ) &&
                      !ni(n, l, qn.current, D) &&
                      e.customerName
                    ) {
                      const t = (0, J.voiceSaleCustomer)(
                        e,
                        D,
                        qn.current[n]?.contactId,
                      ).phone;
                      ri(n, {
                        error: t ? t.text : R(e.customerName, e.customerPhone),
                      });
                    }
                  }),
                  Object.keys(P).length)
                ) {
                  if ((Gt(P), !o)) return;
                  for (const T of Object.keys(P)) o.add(T);
                }
              }
            }
            Gt((e) =>
              o
                ? Object.fromEntries(
                    Object.entries(e).filter(([e]) => o.has(e)),
                  )
                : {},
            );
            const b = jt.current.items,
              S =
                ((0, H.priceBases)(
                  b.map((e) => (0, H.priceVisible)(e, Be)),
                  r,
                ),
                l
                  .map((e, t) => t)
                  .filter(
                    (e) =>
                      (!t || t.saleIndex === e) &&
                      b.some((t) => h(t) && (0, J.rowSale)(t, l) === e) &&
                      !ni(e, l, qn.current, Bn.current),
                  ));
            if (S.length) {
              if (!c || !o) return;
              for (const z of b)
                S.includes((0, J.rowSale)(z, l) ?? -1) && o.add(z.id);
            }
            const j = b.filter((e) => h(e) && !Ct.current.has(e.id)),
              w = (0, ie.recordsLeft)(e, me?.timezone),
              C = (0, ie.recordsNeeded)({
                goods: j.filter(
                  (e) =>
                    !e.ledger && !e.expense && null === (0, J.rowSale)(e, l),
                ).length,
                sales: new Set(
                  j.map((e) => (0, J.rowSale)(e, l)).filter((e) => null !== e),
                ).size,
                expenses: j.filter(
                  (e) =>
                    !(
                      (!e.expense && !e.ledger) ||
                      null !== (0, J.rowSale)(e, l)
                    ),
                ).length,
              });
            if (null !== w && C > w)
              return void ut(
                w <= 0
                  ? (0, le.errorText)(Error('free_limit_reached'))
                  : (0, je.L)(
                      '\u0627\u06cc\u0646 \u06cc\u0627\u062f\u062f\u0627\u0634\u062a {need} \u062b\u0628\u062a \u062c\u062f\u0627 \u062f\u0627\u0631\u062f \u0648 \u0647\u0631 \u06a9\u062f\u0627\u0645 \u06cc\u06a9 \u06a9\u0627\u0631 \u0627\u0633\u062a\u060c \u0648\u0644\u06cc \u0641\u0642\u0637 {left} \u06a9\u0627\u0631 \u0627\u0645\u062a\u062d\u0627\u0646\u06cc \u0645\u0627\u0646\u062f\u0647\u061b \u0686\u06cc\u0632\u06cc \u0630\u062e\u06cc\u0631\u0647 \u0646\u0634\u062f. \u0631\u062f\u06cc\u0641\u200c\u0647\u0627\u06cc \u0627\u0636\u0627\u0641\u0647 \u0631\u0627 \u062d\u0630\u0641 \u06a9\u0646 \u06cc\u0627 \u0627\u0634\u062a\u0631\u0627\u06a9 \u0628\u06af\u06cc\u0631.',
                      {
                        need: C.toLocaleString((0, je.numberLocale)()),
                        left: w.toLocaleString((0, je.numberLocale)()),
                      },
                    ),
              );
            ut('');
          }
          ((wt.current = !0),
            gt(!0),
            mt({}),
            On((e) =>
              Object.fromEntries(
                Object.entries(e).map(([e, t]) => [e, { ...t, error: void 0 }]),
              ),
            ));
          const f = [],
            m = [];
          let g = !1,
            x = !1;
          try {
            const F = jt.current.items.filter(h),
              N = d
                ? F.filter((e) => {
                    const t = (0, J.rowSale)(e, l);
                    return null !== t && !!Mn.current[t];
                  })
                : F,
              A = (0, H.priceBases)(
                N.map((e) => (0, H.priceVisible)(e, Be)),
                r,
              ),
              V = () =>
                Re(
                  (0, H.remainingResult)(ei.current, {
                    ...jt.current,
                    items: jt.current.items.filter(
                      (e) => !Ct.current.has(e.id),
                    ),
                  }),
                );
            {
              const U = 'ask' === Q && Z ? p(N) : [],
                K = U.length ? Z(U) : null;
              It.current = K ? await K : void 0;
            }
            const B = () =>
              void 0 === It.current ? u : { ...u, allowNegative: It.current };
            async function _(e) {
              const t = N.indexOf(e),
                n = (0, H.resolvedProduct)(e, r),
                o =
                  e.ledger || e.expense || !Me
                    ? void 0
                    : (0, H.itemPrices)((0, H.priceVisible)(e, Be), A[t]);
              if (o && i)
                try {
                  await i(
                    { productId: n?.id || e.productId, name: e.name.trim() },
                    o,
                  );
                } catch (t) {
                  x = !0;
                  const n =
                    H.voiceFa.priceNotSaved +
                    ' ' +
                    e.name.trim() +
                    ' ' +
                    (0, le.errorText)(t);
                  ht((e) => (e ? e + '\n' + n : n));
                }
              i &&
                'sold' === e.kind &&
                e.unit &&
                n &&
                (0, H.packedProduct)(e, n) !== n &&
                (await i(
                  { productId: n.id, name: e.name.trim() },
                  { packSize: e.packSize, packUnit: e.unit },
                ).catch(() => {}));
            }
            const O = (e, t) => {
                if (Array.isArray(e)) {
                  const n = e.filter((e) => !!e?.id),
                    i = n.filter((e) => !e.parentMovementId);
                  (Tn.current.moves.push(...i.map((e) => e.id)),
                    m.push(...n.filter((e) => 'sold' === e.kind)),
                    t.forEach((e, n) => {
                      const r =
                        i.length === t.length
                          ? i[n]
                          : i.find(
                              (t) =>
                                (0, y.normalizeName)(t.name) ===
                                (0, y.normalizeName)(e.name),
                            );
                      r &&
                        ln.current.set(e.id, {
                          moves: [r.id],
                          line: r,
                          at: r.timestamp,
                        });
                    }));
                }
              },
              q = N.filter(
                (e) =>
                  !Ct.current.has(e.id) &&
                  !e.ledger &&
                  !e.expense &&
                  null === (0, J.rowSale)(e, l),
              );
            if (q.length > 1) {
              try {
                O(
                  await L(
                    We(q).map((e) =>
                      (0, H.itemDraft)(e, (0, H.resolvedProduct)(e, r)),
                    ),
                    B(),
                  ),
                  q,
                );
                for (const X of q) Ct.current.add(X.id);
              } catch (G) {
                G instanceof Error &&
                  'oversell_cancelled' === G.message &&
                  (It.current = !1);
              }
              if (q.every((e) => Ct.current.has(e.id))) {
                const Y = Promise.all(q.map((e) => _(e))),
                  $ = o ? 0 : Math.min(110, Math.floor(600 / q.length));
                for (const ee of q) {
                  if (!Dt.current) break;
                  (St({ type: 'commit', id: ee.id }),
                    $ >= 16 && (await new Promise((e) => setTimeout(e, $))));
                }
                await Y;
              }
            }
            const M =
                c && q.length > 1 && !q.every((e) => Ct.current.has(e.id)),
              W = new Set();
            for (const te of N) {
              if (Ct.current.has(te.id)) {
                St({ type: 'commit', id: te.id });
                continue;
              }
              if (W.has(te.id)) continue;
              const ne = (0, J.rowSale)(te, l),
                re = N.slice(N.indexOf(te)),
                oe = re.findIndex(
                  (e) =>
                    !!e.ledger ||
                    !!e.expense ||
                    e.kind !== te.kind ||
                    null !== (0, J.rowSale)(e, l),
                ),
                se =
                  null !== ne
                    ? N.filter(
                        (e) =>
                          (0, J.rowSale)(e, l) === ne && !Ct.current.has(e.id),
                      )
                    : te.ledger || te.expense || M
                      ? [te]
                      : re
                          .slice(0, oe < 0 ? void 0 : oe)
                          .filter((e) => !Ct.current.has(e.id));
              try {
                if (null !== ne)
                  f.push({ index: ne, document: await wi(ne, se, V) });
                else {
                  te.expense
                    ? await Ii(te)
                    : te.ledger
                      ? await Ci(te)
                      : O(
                          await L(
                            We(se).map((e) =>
                              (0, H.itemDraft)(e, (0, H.resolvedProduct)(e, r)),
                            ),
                            B(),
                          ),
                          se,
                        );
                  for (const ce of se) Ct.current.add(ce.id);
                }
              } catch (ae) {
                if (
                  null !== ne &&
                  (0, J.voiceSaleRejected)(
                    ae instanceof xe.ApiError ? ae : void 0,
                  )
                ) {
                  const { [ne]: de, ...ue } = Mn.current;
                  ((Mn.current = ue),
                    Un(Object.keys(ue).length > 0),
                    await (0, be.patchDrafts)(s, {
                      voicePendingSales: ue,
                      voicePendingSale: void 0,
                    }));
                }
                if (
                  ae instanceof Error &&
                  'sale_draft_not_saved' === ae.message
                )
                  return void (
                    null !== ne &&
                    ri(ne, {
                      error: (0, je.L)(
                        '\u062d\u0627\u0641\u0638\u0647\u0654 \u062f\u0633\u062a\u06af\u0627\u0647 \u067e\u0631 \u0627\u0633\u062a\u061b \u06a9\u0645\u06cc \u0641\u0636\u0627 \u062e\u0627\u0644\u06cc \u06a9\u0646\u06cc\u062f \u0648 \u062f\u0648\u0628\u0627\u0631\u0647 \u062b\u0628\u062a \u06a9\u0646\u06cc\u062f.',
                      ),
                    })
                  );
                if (
                  ae instanceof xe.ApiError &&
                  'product_choice_required' === ae.message &&
                  Array.isArray(ae.details?.candidates)
                )
                  St({
                    type: 'edit',
                    id: te.id,
                    patch: {
                      familyName: te.name,
                      productId: void 0,
                      brand: void 0,
                      needsChoice: !0,
                      candidates: ae.details.candidates,
                    },
                  });
                else if (
                  ae instanceof xe.ApiError &&
                  'unit_switch_in_recipe' === ae.message
                ) {
                  const pe =
                    'string' == typeof ae.details?.productId
                      ? ae.details.productId
                      : void 0;
                  for (const he of se)
                    !he.unitSwitch ||
                      (pe && (0, H.resolvedProduct)(he, r)?.id !== pe) ||
                      St({
                        type: 'edit',
                        id: he.id,
                        patch: { unitSwitch: void 0, unitSwitchBlocked: !0 },
                      });
                } else if (
                  ae instanceof xe.ApiError &&
                  'insufficient_stock' === ae.message &&
                  ae.details &&
                  'string' == typeof ae.details.name
                ) {
                  const fe = ae.details,
                    ye =
                      Array.isArray(fe.lines) && fe.lines.length
                        ? fe.lines
                        : [fe];
                  for (const ge of ye) {
                    const Se =
                      se.find(
                        (e) =>
                          (0, H.resolvedProduct)(e, r)?.id === ge.productId,
                      ) || (1 === ye.length ? te : void 0);
                    if (!Se) continue;
                    const we =
                      (0, H.faNumber)(Math.max(0, Number(ge.stock) || 0)) +
                      ' ' +
                      (ve.notebookFa.units[ge.unit || 'piece'] || '');
                    Gt((e) => ({
                      ...e,
                      [Se.id]:
                        fe.changedBy && ge.productId === fe.productId
                          ? (0, je.L)(
                              '\u0645\u0648\u062c\u0648\u062f\u06cc \xab{name}\xbb \u062f\u0631 \u0647\u0645\u06cc\u0646 \u0641\u0627\u0635\u0644\u0647 \u062a\u0648\u0633\u0637 {who} \u06a9\u0645 \u0634\u062f\u061b \u0627\u0644\u0627\u0646 {left} \u0645\u0627\u0646\u062f\u0647.',
                              { name: ge.name, who: fe.changedBy, left: we },
                            )
                          : (0, je.L)(
                              '\u0645\u0648\u062c\u0648\u062f\u06cc \xab{name}\xbb \u06a9\u0627\u0641\u06cc \u0646\u06cc\u0633\u062a\u061b \u0627\u0644\u0627\u0646 {left} \u0645\u0627\u0646\u062f\u0647.',
                              { name: ge.name, left: we },
                            ) +
                            ('forbid' === fe.oversell
                              ? ' ' + (0, je.L)(v.OVERSELL_FORBID_HINT)
                              : ''),
                    }));
                  }
                } else {
                  const Ce =
                    ae instanceof Error && 'insufficient_stock' === ae.message
                      ? H.voiceFa.insufficient
                      : (0, le.errorText)(ae);
                  (mt((e) => ({ ...e, [te.id]: Ce })),
                    null !== ne && ri(ne, { error: Ce }));
                }
                if (!c) return;
                for (const Ie of se) W.add(Ie.id);
                continue;
              }
              for (const De of se)
                (await _(De), St({ type: 'commit', id: De.id }));
            }
            g = jt.current.items.every((e) => Ct.current.has(e.id));
          } finally {
            ((wt.current = !1), Dt.current && gt(!1));
            {
              const Fe = jt.current.items.filter((e) => !Ct.current.has(e.id));
              Fe.length
                ? (0, be.patchDrafts)(s, {
                    voice: Re(
                      (0, H.remainingResult)(a, { ...jt.current, items: Fe }),
                    ),
                  })
                : Object.keys(Mn.current).length ||
                  ((0, be.clearDraftPart)(s, 'voice'),
                  (0, be.clearDraftPart)(s, 'voiceAt'));
            }
            const ke = (0, J.movementsReceipt)(m, r, (0, J.walkInMethod)(a)),
              Pe = (e) => {
                const t = l[e],
                  n = qn.current[e] || {};
                return (0, J.saleHeading)(
                  t,
                  (0, J.voiceSaleCustomer)(t, Bn.current, n.contactId).target
                    ?.name,
                );
              },
              Le = [
                ...f.map(({ index: e, document: t }) => ({
                  key: t.id,
                  title: Pe(e),
                  total: t.totalToman,
                  document: t,
                  saleIndex: e,
                })),
                ...(ke
                  ? [
                      {
                        key: ke.id,
                        title: (0, J.saleHeading)(void 0),
                        total: ke.lines.every((e) => void 0 !== e.saleTotal)
                          ? ke.lines.reduce((e, t) => e + (t.saleTotal || 0), 0)
                          : void 0,
                        document: ke,
                        saleIndex: null,
                      },
                    ]
                  : []),
              ];
            if (
              (Le.length &&
                Dt.current &&
                Jn((e) => [
                  ...e.filter((e) => !Le.some((t) => t.key === e.key)),
                  ...Le,
                ]),
              l.length <= 1 && 1 === f.length)
            )
              n?.(f[0].document, !t && !!l[f[0].index]?.sendInvoice && g && !x);
            else for (const Ne of f) n?.(Ne.document, !1);
            const Te =
                l.length > 1 && !t && g && !x
                  ? f.find((e) => l[e.index]?.sendInvoice)
                  : void 0,
              ze = t
                ? null === t.saleIndex
                  ? ke
                  : f.find((e) => e.index === t.saleIndex)?.document
                : Te?.document;
            (o && Dt.current && (clearTimeout(rn.current), nn(!1)),
              ze && Dt.current && Qn({ document: ze, send: !!Te }));
          }
        }
        async function wi(e, t, n) {
          const i = xe.activeShop,
            o = ei.current?.sales?.[e],
            c = qn.current[e] || {},
            a = Mn.current[e];
          if (!i || !o) throw Error('ledger_unavailable');
          const l = (0, J.voiceSaleCustomer)(o, Bn.current, c.contactId);
          if (!a && !l.ready) throw Error('ledger_unavailable');
          let d = l.target?.id || '';
          if (!a && l.create) {
            const t = (0, H.newPersonPhone)(o.customerPhone),
              n = (
                await (0, U.createContact)(i, {
                  spoken: !0,
                  name: o.customerName.trim(),
                  kind: 'customer',
                  ...(t ? { phone: t } : {}),
                })
              ).contact;
            (Tn.current.contacts.push({ id: n.id }),
              (d = n.id),
              oi(n),
              ri(e, { contactId: n.id }),
              (qn.current = { ...qn.current, [e]: { ...c, contactId: n.id } }));
          }
          const u = a?.body ?? (0, J.voiceSaleBody)(o, We(t), r, d, c.cheque),
            p = (0, J.voiceSaleRequest)(a ?? null, u, U.idempotencyKey);
          if (
            ((Mn.current = { ...Mn.current, [e]: p }),
            Un(!0),
            !(await (0, be.patchDrafts)(s, {
              voice: n(),
              voicePendingSales: { ...Mn.current },
              voicePendingSale: void 0,
            })))
          )
            throw Error('sale_draft_not_saved');
          let h;
          const f = (e, t) =>
              void 0 !== It.current
                ? (0, U.postSale)(
                    i,
                    It.current
                      ? { ...e, ...(0, g.oversellMark)(It.current) }
                      : e,
                    t,
                  )
                : (0, g.withOversell)(
                    (n) =>
                      (0, U.postSale)(
                        i,
                        n ? { ...e, ...(0, g.oversellMark)(n) } : e,
                        t,
                      ),
                    { mode: Q },
                  ).catch((e) => {
                    throw ((0, g.isOversellCancel)(e) && (It.current = !1), e);
                  }),
            m = await (0, J.saveVoiceSale)(p, async (e, t) => {
              const n = await f(e, t);
              return ((h = n.chequeId), n);
            }),
            y = c.photos;
          h &&
            (y?.front || y?.back) &&
            (ri(e, { photos: {} }),
            (0, Y.attachChequePhotos)(i, h, {
              front: y.front?.dataUrl,
              back: y.back?.dataUrl,
            })
              .then((e) => {
                const t = (0, Y.photoSaveNote)(e);
                t && (0, $.showToast)(t);
              })
              .catch(() => {}));
          for (const n of t)
            (Ct.current.add(n.id),
              ln.current.set(n.id, { saleIndex: e, at: m?.occurredAt }));
          m?.id && (Tn.current.sales.push(m), dn.current.set(e, m));
          const { [e]: v, ...x } = Mn.current;
          return (
            (Mn.current = x),
            await (0, be.patchDrafts)(s, {
              voice: n(),
              voicePendingSales: x,
              voicePendingSale: void 0,
            }),
            Un(Object.keys(x).length > 0),
            m
          );
        }
        async function Ci(e) {
          const t = e.ledger,
            n = xe.activeShop,
            i = Bn.current;
          if (!n || !i) throw Error('ledger_unavailable');
          let r = (0, H.resolvedContact)(t, i);
          if (!r) {
            const i = (0, H.newPersonPhone)(t.contactPhone),
              o = (
                await (0, U.createContact)(n, {
                  spoken: !0,
                  name: t.contactName.trim(),
                  kind: 'in' === t.direction ? 'customer' : 'supplier',
                  ...(i ? { phone: i } : {}),
                })
              ).contact;
            ((r = { id: o.id, name: o.name }),
              oi(o),
              Tn.current.contacts.push({ id: o.id }),
              St({
                type: 'edit',
                id: e.id,
                patch: { ledger: { ...t, contactId: o.id } },
              }));
          }
          if ('debt' === t.type) {
            const i = (0, H.ledgerDebt)(t),
              o = (0, K.rowKey)(
                Zn.current,
                e.id,
                JSON.stringify({ contactId: r.id, ...i }),
                U.idempotencyKey,
              ),
              s = {
                id: (await (0, U.recordDebt)(n, r.id, i, o)).debt.id,
                contactId: r.id,
              };
            return (
              Tn.current.debts.push(s),
              void ln.current.set(e.id, { debt: s })
            );
          }
          const o = (0, H.ledgerPayment)(t, r.id),
            s = (0, K.rowKey)(
              Zn.current,
              e.id,
              JSON.stringify(o),
              U.idempotencyKey,
            ),
            c = await (0, U.recordPayment)(n, o, s);
          if (c.cheque?.id) {
            const t = c.cheque.id;
            (Tn.current.cheques.push(t),
              ln.current.set(e.id, { cheque: t }),
              fn((n) => ({ ...n, [e.id]: t })));
          } else if (c.payment?.id) {
            const t = { id: c.payment.id, contactId: r.id };
            (Tn.current.payments.push(t), ln.current.set(e.id, { payment: t }));
          } else Tn.current.ledger++;
          const a = $n.current[e.id];
          c.cheque?.id &&
            (a?.front || a?.back) &&
            (0, Y.attachChequePhotos)(n, c.cheque.id, {
              front: a.front?.dataUrl,
              back: a.back?.dataUrl,
            })
              .then((e) => {
                const t = (0, Y.photoSaveNote)(e);
                t && (0, $.showToast)(t);
              })
              .catch((e) =>
                (0, $.showToast)(
                  (0, je.L)(
                    '\u0686\u06a9 \u062b\u0628\u062a \u0634\u062f \u0648\u0644\u06cc \u0639\u06a9\u0633 \u0630\u062e\u06cc\u0631\u0647 \u0646\u0634\u062f: {reason}',
                    { reason: (0, le.errorText)(e) },
                  ),
                ),
              );
        }
        async function Ii(e) {
          const t = xe.activeShop;
          if (!t) throw Error('ledger_unavailable');
          const n = (0, ne.todayIn)(t.timezone || 'Asia/Tehran'),
            i = (0, H.expenseBody)(e.expense, n),
            r = e.expense.monthly
              ? {
                  ...i,
                  reminder: {
                    repeat: 'monthly',
                    monthDay: (0, x.calParts)(new Date()).day,
                  },
                }
              : i,
            o = (0, K.rowKey)(
              Zn.current,
              e.id,
              JSON.stringify(r),
              U.idempotencyKey,
            ),
            s = await (0, te.createExpense)(t, r, o);
          if (s?.expense?.id) {
            const t = {
              id: s.expense.id,
              version: Number(s.expense.version) || 1,
            };
            (Tn.current.expenses.push(t), ln.current.set(e.id, { expense: t }));
          }
        }
        async function Di(e) {
          const t = xe.activeShop,
            n = e.toBuy || [],
            i = e.contacts || [];
          if (t) {
            n.length &&
              (await Li(
                n.map((e, t) => t),
                e,
              ));
            for (let t = 0; t < i.length; t++) await Ei(t, e);
          } else
            pn({
              reminders: n.map(() => ({
                status: 'failed',
                error: H.voiceFa.ledgerOff,
              })),
              contacts: i.map(() => ({
                status: 'failed',
                error: H.voiceFa.ledgerOff,
              })),
            });
        }
        const ki = (0, a.useRef)({ key: null, value: null });
        if (ki.current.key !== kn) {
          const e = kn,
            t = null === e ? null : vt?.toBuy?.[e],
            n = null === e ? void 0 : un.reminders[e]?.id;
          ki.current = {
            key: kn,
            value:
              t && n
                ? {
                    item: {
                      id: n,
                      name: t.name,
                      status: 'open',
                      createdAt: '',
                      ...(t.when ? { remindAt: t.when } : {}),
                    },
                    again: !1,
                  }
                : null,
          };
        }
        const Pi = ki.current.value;
        async function Ri(e) {
          const t = xe.activeShop,
            n = un.reminders[e]?.id;
          if (t && n)
            try {
              (await (0, d.patchToBuy)(t, n, { status: 'cancelled' }),
                pn((t) => ({
                  ...t,
                  reminders: t.reminders.map((t, n) =>
                    n === e ? { ...t, status: 'removed' } : t,
                  ),
                })));
            } catch (t) {
              pn((n) => ({
                ...n,
                reminders: n.reminders.map((n, i) =>
                  i === e ? { ...n, error: (0, le.errorText)(t) } : n,
                ),
              }));
            }
        }
        async function Li(e, t = ei.current) {
          const n = xe.activeShop,
            i = t?.toBuy || [];
          if (!n || !e.length) return;
          const o = (t) =>
            pn((n) => ({
              ...n,
              reminders: n.reminders.map((n, i) => (e.includes(i) ? t(i) : n)),
            }));
          o(() => ({ status: 'saving' }));
          try {
            const t = (e) =>
                r.find(
                  (t) =>
                    !t.archivedAt &&
                    (0, y.normalizeName)(t.name) === (0, y.normalizeName)(e),
                ),
              s = await (0, d.addToBuy)(
                n,
                e.map((e) => {
                  const n = i[e],
                    r = n.task ? void 0 : t(n.name);
                  return {
                    name: n.name,
                    ...(n.quantity ? { quantity: n.quantity } : {}),
                    ...(n.unit
                      ? { unit: n.unit }
                      : r?.unit
                        ? { unit: r.unit }
                        : {}),
                    ...(n.when ? { remindAt: n.when } : {}),
                    ...(n.task ? { note: p.TASK_NOTE } : {}),
                    ...(r ? { productId: r.id } : {}),
                  };
                }),
              );
            (Tn.current.toBuy.push(...s.map((e) => e.id)),
              o((t) => ({ status: 'saved', id: s[e.indexOf(t)]?.id })));
          } catch (e) {
            o(() => ({ status: 'failed', error: (0, le.errorText)(e) }));
          }
        }
        async function Ei(e, t = ei.current, n) {
          const i = xe.activeShop,
            r = t?.contacts?.[e];
          if (!i || !r) return;
          const o = (t) =>
            pn((n) => ({
              ...n,
              contacts: n.contacts.map((n, i) => (i === e ? t : n)),
            }));
          o({ status: 'saving' });
          try {
            const e = (0, H.newPersonPhone)(n || r.phone),
              t = (
                await (0, U.createContact)(i, {
                  name: r.name,
                  kind: 'customer',
                  ...(e ? { phone: e } : {}),
                })
              ).contact;
            (Tn.current.contacts.push(t),
              oi(t),
              o({ status: 'saved', id: t.id, contact: t }));
          } catch (e) {
            o({ status: 'failed', error: (0, le.errorText)(e) });
          }
        }
        async function Ti(e) {
          const t = xe.activeShop,
            n = ei.current?.toBuy?.[e];
          if (t && n) {
            pn((t) => ({
              ...t,
              reminders: t.reminders.map((t, n) =>
                n === e ? { ...t, monthly: 'busy' } : t,
              ),
            }));
            try {
              const i = n.when ? new Date(n.when) : new Date(),
                r =
                  n.name
                    .replace(/^\u067e\u0631\u062f\u0627\u062e\u062a\s+/, '')
                    .trim() || n.name,
                o = await (0, te.createExpenseReminder)(t, {
                  category: (0, ne.voiceExpenseCategory)(r),
                  label: r,
                  schedule: {
                    repeat: 'monthly',
                    monthDay: (0, x.calParts)(i).day,
                    minute: 60 * i.getHours() + i.getMinutes(),
                  },
                });
              (Tn.current.expenseReminders.push(o.reminder.id),
                pn((t) => ({
                  ...t,
                  reminders: t.reminders.map((t, n) =>
                    n === e ? { ...t, monthly: 'done' } : t,
                  ),
                })),
                (0, $.showToast)(
                  (0, je.L)(
                    '\u0647\u0631 \u0645\u0627\u0647 \u0647\u0645\u06cc\u0646 \u0631\u0648\u0632 \u06cc\u0627\u062f\u062a \u0645\u06cc\u200c\u0627\u0646\u062f\u0627\u0632\u0645\u061b \u062f\u0631 \xab\u0647\u0632\u06cc\u0646\u0647\u200c\u0647\u0627\xbb \u0645\u06cc\u200c\u0628\u06cc\u0646\u06cc\u200c\u0627\u0634.',
                  ),
                ));
            } catch (t) {
              (pn((t) => ({
                ...t,
                reminders: t.reminders.map((t, n) =>
                  n === e ? { ...t, monthly: void 0 } : t,
                ),
              })),
                (0, $.showToast)(
                  (0, je.L)(
                    '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u0645\u0627\u0647\u0627\u0646\u0647 \u0633\u0627\u062e\u062a\u0647 \u0646\u0634\u062f: {reason}',
                    { reason: (0, le.errorText)(t) },
                  ),
                ));
            }
          }
        }
        async function zi(e) {
          const t = xe.activeShop;
          if (!e.length) return !0;
          if (wt.current || gn) return !1;
          (vn(!0), bn(''));
          const n = ei.current?.sales || [],
            i = jt.current.done,
            r = new Set();
          let o = !1;
          for (const t of e) {
            const e = i.find((e) => e.id === t.id);
            for (const i of [e, t.next])
              if (i && !i.ledger && !i.expense && 'sold' === i.kind) {
                const e = (0, J.rowSale)(i, n);
                null === e ? (o = !0) : r.add(e);
              }
          }
          const s = new Map(e.map((e) => [e.id, e.next]));
          for (const e of i)
            if (!s.has(e.id)) {
              const t = (0, J.rowSale)(e, n);
              null !== t && r.has(t) && s.set(e.id, e);
            }
          try {
            for (const e of r) {
              const n = dn.current.get(e);
              if (n && t) {
                try {
                  await (0, U.cancelDocument)(t, n, (0, U.idempotencyKey)(), {
                    withPayment: !0,
                  });
                } catch (e) {
                  if (!Pe(e)) throw e;
                }
                (dn.current.delete(e),
                  (Tn.current.sales = Tn.current.sales.filter(
                    (e) => e.id !== n.id,
                  )),
                  Jn((e) => e.filter((e) => e.document.id !== n.id)));
              }
            }
            for (const e of s.keys()) {
              const n = ln.current.get(e);
              n
                ? (await (0, K.takeBackRow)(
                    e,
                    { ...(t ? n : {}), moves: X ? n.moves : void 0 },
                    Tn.current,
                    Zn.current,
                    {
                      gone: Pe,
                      undoMove: (e) => X([e]),
                      deleteExpense: (e) =>
                        (0, te.deleteExpense)(t, e.id, { version: e.version }),
                      cancelCheque: (e) =>
                        (0, U.transitionCheque)(t, e, 'cancelled'),
                      reverseDebt: (e) =>
                        (0, U.reverseDebt)(
                          t,
                          e.contactId,
                          e.id,
                          (0, U.idempotencyKey)(),
                        ),
                      reversePayment: (e) =>
                        (0, U.reversePayment)(t, e.id, (0, U.idempotencyKey)()),
                    },
                  ),
                  n.cheque && fn(({ [e]: t, ...n }) => n),
                  ln.current.delete(e),
                  Ct.current.delete(e))
                : Zn.current.delete(e);
            }
          } catch (e) {
            return (
              Dt.current &&
                (bn(
                  (0, je.L)(
                    '\u062a\u063a\u06cc\u06cc\u0631 \u062b\u0628\u062a \u0646\u0634\u062f: {reason}',
                    { reason: (0, le.errorText)(e) },
                  ),
                ),
                vn(!1)),
              !1
            );
          }
          o && Jn((e) => e.filter((e) => null !== e.saleIndex));
          const c = [];
          for (const [e, t] of s) t ? c.push(t) : Rn({ type: 'drop', id: e });
          if (
            (c.length && Rn({ type: 'reopen', items: c }), vn(!1), c.length)
          ) {
            const e = new Set(
              jt.current.items.filter((e) => !s.has(e.id)).map((e) => e.id),
            );
            await ji(void 0, e);
          }
          return !0;
        }
        async function Fi(e) {
          const t = jt.current.done.find((t) => t.id === e),
            n = mn[e];
          t &&
            n &&
            (await zi([
              { id: e, next: { ...t, ...(0, H.suggestionPatch)(n, r, t) } },
            ])) &&
            yn(({ [e]: t, ...n }) => n);
        }
        async function Ni(e) {
          if ('idle' !== Sn || !e.length) return;
          jn('busy');
          const t = (e) => {
            const t = jt.current.done.find(
                (t) =>
                  'sold' === t.kind &&
                  (0, H.resolvedProduct)(t, r)?.id === e.id,
              ),
              n = t && ln.current.get(t.id)?.at,
              i = n ? Date.parse(n) : NaN;
            return new Date(
              (Number.isFinite(i) ? i : Date.now()) - h.TOP_UP_LEAD_MS,
            ).toISOString();
          };
          try {
            const n = await L(
              e.map(({ product: e, cost: n }) => ({
                name: e.name,
                productId: e.id,
                quantity: -e.stock,
                kind: 'received',
                ...(e.unit ? { unit: e.unit } : {}),
                ...(void 0 !== n ? { unitCost: n } : {}),
                timestamp: t(e),
              })),
            );
            Array.isArray(n) &&
              Tn.current.topUps.push(
                ...n
                  .filter((e) => !!e?.id && !e.parentMovementId)
                  .map((e) => e.id),
              );
            for (const { product: t, cost: n, price: r } of e)
              if (i && (void 0 !== n || void 0 !== r))
                try {
                  const e = {
                    ...(void 0 !== r ? { price: r } : {}),
                    ...(void 0 !== n ? { costPrice: n } : {}),
                  };
                  (await i({ productId: t.id, name: t.name }, e),
                    Tn.current.prices.push({
                      productId: t.id,
                      name: t.name,
                      set: e,
                      previous: {
                        ...(void 0 !== r && void 0 !== t.price
                          ? { price: t.price }
                          : {}),
                        ...(void 0 !== n && void 0 !== t.costPrice
                          ? { costPrice: t.costPrice }
                          : {}),
                      },
                    }));
                } catch (e) {
                  (0, $.showToast)(
                    H.voiceFa.priceNotSaved +
                      ' ' +
                      t.name +
                      ' ' +
                      (0, le.errorText)(e),
                  );
                }
            Dt.current && jn('done');
          } catch (e) {
            Dt.current &&
              (jn('idle'),
              (0, $.showToast)(
                (0, je.L)(
                  '\u0645\u0648\u062c\u0648\u062f\u06cc \u0627\u0636\u0627\u0641\u0647 \u0646\u0634\u062f: {reason}',
                  { reason: (0, le.errorText)(e) },
                ),
              ));
          }
        }
        function Ai() {
          const e = Tn.current,
            t = xe.activeShop,
            n = async () => {
              throw Error('ledger_unavailable');
            };
          return (0, K.runUndoAll)(e, {
            gone: Pe,
            code: (e) => (e instanceof Error ? e.message : ''),
            reason: le.errorText,
            cancelSale: t
              ? (e) =>
                  (0, U.cancelDocument)(t, e, (0, U.idempotencyKey)(), {
                    withPayment: !0,
                  })
              : n,
            undoMove: X
              ? (e) => X([e])
              : async () => {
                  throw Error('ledger_unavailable');
                },
            deleteExpense: t
              ? (e) => (0, te.deleteExpense)(t, e.id, { version: e.version })
              : n,
            cancelCheque: t
              ? (e) => (0, U.transitionCheque)(t, e, 'cancelled')
              : n,
            reverseDebt: t
              ? (e) =>
                  (0, U.reverseDebt)(
                    t,
                    e.contactId,
                    e.id,
                    (0, U.idempotencyKey)(),
                  )
              : n,
            reversePayment: t
              ? (e) => (0, U.reversePayment)(t, e.id, (0, U.idempotencyKey)())
              : n,
            cancelToBuy: t
              ? (e) => (0, d.patchToBuy)(t, e, { status: 'cancelled' })
              : n,
            deleteExpenseReminder: t
              ? (e) => (0, te.deleteExpenseReminder)(t, e)
              : n,
            archiveContact: t
              ? async (e) => {
                  const { contact: n } = await (0, xe.request)(
                    (0, xe.shopPath)(
                      t,
                      '/contacts/' + encodeURIComponent(e.id) + '?limit=1',
                    ),
                  );
                  if (!n.archivedAt && !n.balanceToman)
                    return (0, U.archiveContact)(t, n);
                }
              : n,
            currentPrices: (e) => {
              const t = r.find((t) => t.id === e);
              return t ? { price: t.price, costPrice: t.costPrice } : void 0;
            },
            restorePrices: (e, t) =>
              i ? i({ productId: e.productId, name: e.name }, t) : n(),
          });
        }
        (0, a.useEffect)(() => {
          if (!Yt) return;
          const e = {};
          for (const t of jt.current.items) {
            if (t.ledger || t.expense) continue;
            const n = (0, H.cardWarnings)(t, r).find(
              (e) => 'close' === e.type && e.suggestion?.productId,
            );
            n?.suggestion && (e[t.id] = n.suggestion);
          }
          yn(e);
        }, [Yt]);
        const Hi = (e, t) => {
          const n = (0, K.keptText)(t);
          return [
            ...(e.length
              ? [
                  H.voiceFa.undoFailed.replace(
                    '{reason}',
                    [...new Set(e)].join('\u060c '),
                  ),
                ]
              : []),
            ...(n ? [n] : []),
          ].join('\n');
        };
        async function Vi() {
          if (wt.current) return;
          const e = jt.current.items
            .filter((e) => !Ct.current.has(e.id))
            .map((e) => e.id);
          if ((an(''), await ji(void 0, new Set(), !0), !Dt.current)) return;
          const t = ei.current,
            n = (e) =>
              e
                .map((e, t) => ('draft' === e.status ? t : -1))
                .filter((e) => e >= 0),
            i = n(un.reminders),
            r = n(un.contacts);
          i.length && (await Li(i, t));
          for (const e of r) await Ei(e, t);
          const o = e.filter((e) => Ct.current.has(e)).length,
            s = e.length - o;
          Dt.current &&
            s &&
            an(
              (0, je.L)(
                '{saved} \u062b\u0628\u062a \u0634\u062f\u060c {left} \u062b\u0628\u062a \u0646\u0634\u062f',
                { saved: (0, H.faNumber)(o), left: (0, H.faNumber)(s) },
              ),
            );
        }
        const Bi = (0, h.undoScope)(Tn.current).undo > 0,
          _i = 'free_limit_reached' === ot || it === E.fa.notInPlan,
          Oi =
            'starting' === Ye ||
            'recording' === Ye ||
            'stopped' === Ye ||
            'failed' === Ye ||
            'processing' === Ye ||
            'processError' === Ye,
          qi = ai - Ze,
          Mi = 'recording' === Ye && qi <= _.VOICE_COUNTDOWN_SECONDS,
          Wi = (0, ke.jsxs)(ke.Fragment, {
            children: [
              Oi &&
                (0, ke.jsxs)(k.default, {
                  testID: 'voice-recording',
                  style: {
                    minHeight: l ? Math.max(420, 0.6 * fe) : 420,
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 18,
                    paddingVertical: 12,
                  },
                  children: [
                    (0, ke.jsx)(He, {
                      level: re.level,
                      active: 'recording' === Ye,
                      reduced: oe,
                      label:
                        'recording' === Ye
                          ? H.voiceFa.finish
                          : 'stopped' === Ye
                            ? (0, je.L)('\u0628\u0641\u0631\u0633\u062a')
                            : 'failed' === Ye
                              ? _i
                                ? (0, je.L)(
                                    '\u062f\u06cc\u062f\u0646 \u0637\u0631\u062d\u200c\u0647\u0627',
                                  )
                                : H.voiceFa.rerecord
                              : E.fa.voicePreparing,
                      onPress: () => {
                        'recording' === Ye
                          ? pi()
                          : 'stopped' === Ye
                            ? fi()
                            : 'failed' === Ye && (_i ? t?.() : bi());
                      },
                      onLongPress: Si,
                    }),
                    (0, ke.jsx)(ae.Copy, {
                      testID: 'voice-timer',
                      accessibilityLiveRegion: 'polite',
                      style: {
                        fontSize: 28,
                        lineHeight: 40,
                        fontFamily: 'Vazirmatn_600SemiBold',
                        fontVariant: ['tabular-nums'],
                      },
                      children: Ae(Ze),
                    }),
                    Mi &&
                      (0, ke.jsx)(ae.Copy, {
                        testID: 'voice-countdown',
                        accessibilityLiveRegion: 'assertive',
                        style: {
                          fontSize: 14,
                          lineHeight: 22,
                          color: ee.warning,
                          fontFamily: 'Vazirmatn_600SemiBold',
                          textAlign: 'center',
                        },
                        children:
                          ai >= 120
                            ? (0, je.L)(
                                '{n} \u062b\u0627\u0646\u06cc\u0647 \u062a\u0627 \u067e\u0627\u06cc\u0627\u0646 \u0636\u0628\u0637 (\u062d\u062f\u0627\u06a9\u062b\u0631 \u06f4 \u062f\u0642\u06cc\u0642\u0647)',
                                { n: Fe(String(Math.max(0, qi))) },
                              )
                            : (0, je.L)(
                                '{n} \u062b\u0627\u0646\u06cc\u0647 \u062a\u0627 \u067e\u0627\u06cc\u0627\u0646 \u0636\u0628\u0637 (\u062d\u062f\u0627\u06a9\u062b\u0631 \u06cc\u06a9 \u062f\u0642\u06cc\u0642\u0647)',
                                { n: Fe(String(Math.max(0, qi))) },
                              ),
                      }),
                    'stopped' === Ye &&
                      (0, ke.jsx)(ae.Copy, {
                        testID: 'voice-stopped',
                        accessibilityRole: 'alert',
                        style: {
                          fontSize: 13,
                          lineHeight: 22,
                          color: ee.warning,
                          textAlign: 'center',
                        },
                        children: (0, O.stopReasonText)(Ot, ai),
                      }),
                    (0, ke.jsx)(ae.Copy, {
                      style: {
                        fontSize: 14,
                        color: ee.muted,
                        textAlign: 'center',
                      },
                      children:
                        'starting' === Ye
                          ? Ue
                            ? null !== Je
                              ? (0, je.L)(
                                  '\u062f\u0631 \u062d\u0627\u0644 \u062f\u0627\u0646\u0644\u0648\u062f \u0645\u062f\u0644 \u062a\u0634\u062e\u06cc\u0635 \u0635\u062f\u0627: {p}\u066a \u2014 \u0686\u0646\u062f \u0644\u062d\u0638\u0647 \u0635\u0628\u0631 \u06a9\u0646\u061b \u0641\u0642\u0637 \u0628\u0627\u0631 \u0627\u0648\u0644.',
                                  { p: Fe(String(Je)) },
                                )
                              : (0, je.L)(
                                  '\u062f\u0631 \u062d\u0627\u0644 \u0622\u0645\u0627\u062f\u0647\u200c\u0633\u0627\u0632\u06cc \u062a\u0634\u062e\u06cc\u0635 \u0635\u062f\u0627 \u0631\u0648\u06cc \u06af\u0648\u0634\u06cc\u2026',
                                )
                            : E.fa.voicePreparing
                          : H.voiceFa.hint,
                    }),
                    'starting' === Ye &&
                      (0, ke.jsx)(I.default, {
                        testID: 'voice-cancel-starting',
                        accessibilityRole: 'button',
                        hitSlop: 8,
                        onPress: Si,
                        children: (0, ke.jsx)(ae.Copy, {
                          style: {
                            fontSize: 13,
                            color: ee.accent,
                            fontFamily: 'Vazirmatn_600SemiBold',
                            textAlign: 'center',
                          },
                          children: (0, je.L)(
                            '\u0627\u0646\u0635\u0631\u0627\u0641',
                          ),
                        }),
                      }),
                    'recording' === Ye &&
                      (0, ke.jsx)(I.default, {
                        testID: 'voice-cancel-recording',
                        accessibilityRole: 'button',
                        accessibilityLabel: H.voiceFa.cancel,
                        hitSlop: 10,
                        onPress: function () {
                          'recording' === Lt.current &&
                            (Pt.current?.abort(),
                            re.cancel(),
                            (kt.current = !1),
                            m?.(!1),
                            C());
                        },
                        style: ({ pressed: e }) => ({
                          height: 34,
                          paddingHorizontal: 18,
                          borderRadius: 17,
                          justifyContent: 'center',
                          borderWidth: 1,
                          borderColor: ee.line,
                          backgroundColor: ee.surface,
                          opacity: e ? 0.7 : 1,
                        }),
                        children: (0, ke.jsx)(ae.Copy, {
                          style: {
                            fontSize: 13,
                            color: ee.muted,
                            fontFamily: 'Vazirmatn_600SemiBold',
                          },
                          children: H.voiceFa.cancel,
                        }),
                      }),
                    ('stopped' === Ye || 'failed' === Ye) &&
                      (0, ke.jsxs)(k.default, {
                        style: {
                          flexDirection: 'row-reverse',
                          justifyContent: 'center',
                          gap: 18,
                        },
                        children: [
                          'stopped' === Ye &&
                            (0, ke.jsx)(I.default, {
                              testID: 'voice-rerecord',
                              accessibilityRole: 'button',
                              hitSlop: 8,
                              onPress: bi,
                              children: (0, ke.jsx)(ae.Copy, {
                                style: {
                                  fontSize: 13,
                                  color: ee.accent,
                                  fontFamily: 'Vazirmatn_600SemiBold',
                                },
                                children: H.voiceFa.rerecord,
                              }),
                            }),
                          (0, ke.jsx)(I.default, {
                            testID: 'voice-cancel',
                            accessibilityRole: 'button',
                            hitSlop: 8,
                            onPress: Si,
                            children: (0, ke.jsx)(ae.Copy, {
                              style: {
                                fontSize: 13,
                                color: ee.muted,
                                fontFamily: 'Vazirmatn_600SemiBold',
                              },
                              children: H.voiceFa.cancel,
                            }),
                          }),
                        ],
                      }),
                    'starting' !== Ye &&
                      'processing' !== Ye &&
                      !('failed' === Ye && _i) &&
                      (0, ke.jsx)(ae.Copy, {
                        testID: 'voice-orb-hint',
                        style: {
                          fontSize: 12.5,
                          lineHeight: 20,
                          color: ee.muted,
                          textAlign: 'center',
                        },
                        children:
                          'recording' === Ye
                            ? H.voiceFa.orbFinish
                            : 'stopped' === Ye
                              ? H.voiceFa.orbSend
                              : H.voiceFa.orbAgain,
                      }),
                    'failed' === Ye &&
                      Qe &&
                      (0, ke.jsx)(ae.Copy, {
                        testID: 'voice-model-ready',
                        accessibilityRole: 'alert',
                        style: {
                          fontSize: 14,
                          color: ee.accent,
                          fontFamily: 'Vazirmatn_600SemiBold',
                          textAlign: 'center',
                        },
                        children: (0, je.L)(
                          '\u062a\u0634\u062e\u06cc\u0635 \u0635\u062f\u0627 \u0622\u0645\u0627\u062f\u0647 \u0634\u062f\u061b \u062d\u0627\u0644\u0627 \u062f\u0627\u06cc\u0631\u0647 \u0631\u0627 \u0628\u0632\u0646 \u0648 \u0628\u06af\u0648.',
                        ),
                      }),
                    'failed' === Ye &&
                      !!it &&
                      (0, ke.jsx)(ae.Copy, {
                        accessibilityRole: 'alert',
                        style: {
                          fontSize: 13,
                          color: ee.danger,
                          textAlign: 'center',
                        },
                        children: it,
                      }),
                    'failed' === Ye &&
                      !!ot &&
                      (0, ke.jsx)(ae.Copy, {
                        testID: 'voice-error-code',
                        selectable: !0,
                        style: {
                          fontSize: 11,
                          lineHeight: 16,
                          color: ee.muted,
                          textAlign: 'center',
                          writingDirection: 'ltr',
                        },
                        children: (0, je.L)('\u06a9\u062f: {code}', {
                          code: ot,
                        }),
                      }),
                    'failed' === Ye &&
                      it === E.fa.voiceErrors.permission &&
                      (0, ke.jsx)(he.PermissionHelp, {}),
                    'failed' === Ye &&
                      'free_limit_reached' === ot &&
                      !!t &&
                      (0, ke.jsx)(ae.Button, {
                        testID: 'voice-free-plans',
                        onPress: t,
                        children: (0, je.L)(
                          '\u062f\u06cc\u062f\u0646 \u0637\u0631\u062d\u200c\u0647\u0627',
                        ),
                      }),
                    'failed' === Ye && !1,
                    'recording' === Ye &&
                      (0, ke.jsx)(k.default, {
                        testID: 'voice-live-box',
                        style: {
                          alignSelf: 'stretch',
                          minHeight: 64,
                          maxHeight: 150,
                          borderRadius: 14,
                          paddingHorizontal: 14,
                          paddingVertical: 10,
                          justifyContent: 'flex-end',
                          backgroundColor: ee.soft,
                          borderWidth: D.default.hairlineWidth,
                          borderColor: ee.line,
                          overflow: 'hidden',
                        },
                        children: re.live
                          ? (0, ke.jsx)(ae.Copy, {
                              testID: 'voice-live-text',
                              accessibilityLiveRegion: 'polite',
                              style: {
                                fontSize: 16,
                                lineHeight: 28,
                                textAlign: 'right',
                              },
                              children: (0, we.transcriptForDisplay)(re.live)
                                .split(' ')
                                .slice(-40)
                                .join(' '),
                            })
                          : (0, ke.jsx)(ae.Copy, {
                              style: {
                                fontSize: 13,
                                lineHeight: 22,
                                color: ee.muted,
                                textAlign: 'center',
                              },
                              children: H.voiceFa.listening,
                            }),
                      }),
                    c &&
                      c.limit > 0 &&
                      (0, ke.jsx)(ae.Copy, {
                        style: {
                          fontSize: 11,
                          color: ee.muted,
                          textAlign: 'center',
                        },
                        children: E.fa.aiAllowance
                          .replace(
                            '{remaining}',
                            Math.max(0, c.limit - c.used).toLocaleString(
                              (0, je.numberLocale)(),
                            ),
                          )
                          .replace(
                            '{limit}',
                            c.limit.toLocaleString((0, je.numberLocale)()),
                          ),
                      }),
                  ],
                }),
              'loading' === Ye &&
                (0, ke.jsx)(k.default, {
                  style: {
                    minHeight: 200,
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                  children: (0, ke.jsx)(b.default, { color: ee.accent }),
                }),
              'review' === Ye &&
                !!dt &&
                (0, ke.jsxs)(k.default, {
                  testID: 'voice-free-limit',
                  style: {
                    gap: 8,
                    padding: 12,
                    borderRadius: 14,
                    borderWidth: 1,
                    borderColor: ee.warningBorder,
                    backgroundColor: ee.warningSoft,
                  },
                  children: [
                    (0, ke.jsx)(ae.Copy, {
                      accessibilityRole: 'alert',
                      style: {
                        fontSize: 13,
                        lineHeight: 22,
                        color: ee.warning,
                        textAlign: 'center',
                        fontFamily: 'Vazirmatn_600SemiBold',
                      },
                      children: dt,
                    }),
                    !!t &&
                      (0, ke.jsx)(ae.Button, {
                        onPress: t,
                        children: (0, je.L)(
                          '\u062f\u06cc\u062f\u0646 \u0637\u0631\u062d\u200c\u0647\u0627',
                        ),
                      }),
                  ],
                }),
              'review' === Ye &&
                !tn &&
                !!pt &&
                (0, ke.jsx)(ae.Copy, {
                  accessibilityRole: 'alert',
                  style: {
                    fontSize: 12,
                    color: ee.danger,
                    textAlign: 'center',
                  },
                  children: pt,
                }),
              'review' === Ye &&
                !!Mt &&
                !!(0, O.draftBannerText)(Mt) &&
                (0, ke.jsx)(V.DraftBanner, {
                  text: (0, O.draftBannerText)(Mt),
                  onContinue: () => Wt(null),
                  onDiscard: () => Si(),
                }),
              'review' === Ye &&
                !tn &&
                Wn &&
                (0, ke.jsx)(ae.Copy, {
                  accessibilityRole: 'alert',
                  children: (0, je.L)(
                    '\u067e\u0627\u0633\u062e \u062b\u0628\u062a \u0641\u0627\u06a9\u062a\u0648\u0631 \u0647\u0646\u0648\u0632 \u0646\u0631\u0633\u06cc\u062f\u0647\u061b \xab\u062b\u0628\u062a \u0648 \u0635\u062f\u0648\u0631 \u0641\u0627\u06a9\u062a\u0648\u0631\xbb \u0631\u0627 \u0628\u0632\u0646\u06cc\u062f \u062a\u0627 \u0646\u062a\u06cc\u062c\u0647\u0654 \u0647\u0645\u0627\u0646 \u062b\u0628\u062a \u0628\u0631\u0631\u0633\u06cc \u0634\u0648\u062f.',
                  ),
                }),
              'review' === Ye &&
                vt &&
                (0, ke.jsx)(k.default, {
                  style: tn ? { display: 'none' } : void 0,
                  children: (0, ke.jsx)(
                    Ve,
                    {
                      result: vt,
                      stack: bt,
                      contacts: Hn,
                      products: r,
                      movements: o,
                      kinds: ze,
                      businessType: Ie,
                      role: ye,
                      rights: Be,
                      pricesEditable: Me,
                      busy: yt || Ft,
                      rowErrors: ft,
                      conflicts: Qt,
                      dispatch: St,
                      salePending: Wn,
                      saleUi: _n,
                      saleReady: (e) => ni(e),
                      onSale: (e, t) =>
                        xt((n) =>
                          n?.sales
                            ? {
                                ...n,
                                sales: n.sales.map((n, i) => (i === e ? t : n)),
                              }
                            : n,
                        ),
                      onSaleUi: ri,
                      onConfirmSale: (e) => ji({ saleIndex: e }),
                      autoSave: Ln,
                      onAutoSave: (e) => {
                        e
                          ? ji(void 0, e)
                              .catch(() => {})
                              .finally(() => {
                                (clearTimeout(rn.current),
                                  Dt.current && nn(!1));
                              })
                          : nn(!1);
                      },
                      peopleLoading: ii && void 0 === Hn,
                      onSaveRow: (e) => {
                        ji(
                          void 0,
                          new Set(
                            jt.current.items
                              .filter((t) => t.id !== e)
                              .map((e) => e.id),
                          ),
                        );
                      },
                      onSaveAll: () => {
                        ji();
                      },
                      extras: un,
                      onRetryReminders: () => {
                        Li(
                          un.reminders
                            .map((e, t) => ('failed' === e.status ? t : -1))
                            .filter((e) => e >= 0),
                        );
                      },
                      onContact: (e, t) => {
                        Ei(e, ei.current, t);
                      },
                      onMonthly: (e) => {
                        Ti(e);
                      },
                      chequeIds: hn,
                      chequePhotos: Gn,
                      onChequePhoto: function (e, t, n) {
                        Yn((i) => {
                          const r = { ...i[e] };
                          return (
                            n ? (r[t] = n) : delete r[t],
                            { ...i, [e]: r }
                          );
                        });
                        const i = xe.activeShop,
                          r = hn[e];
                        i &&
                          r &&
                          n &&
                          (0, Y.attachChequePhotos)(i, r, { [t]: n.dataUrl })
                            .then((e) => {
                              const t = (0, Y.photoSaveNote)(e);
                              t && (0, $.showToast)(t);
                            })
                            .catch((e) =>
                              (0, $.showToast)(
                                (0, je.L)(
                                  '\u0639\u06a9\u0633 \u0686\u06a9 \u0630\u062e\u06cc\u0631\u0647 \u0646\u0634\u062f: {reason}',
                                  { reason: (0, le.errorText)(e) },
                                ),
                              ),
                            );
                      },
                      nearHints: mn,
                      onNear: (e) => {
                        Fi(e);
                      },
                      fixing: gn,
                      fixError: wn ? '' : xn,
                      saleDoc: (e) => dn.current.get(e),
                      walkInDoc: (e) =>
                        (0, J.movementsReceipt)(
                          e
                            .map((e) => ln.current.get(e)?.line)
                            .filter((e) => !!e),
                          r,
                          (0, J.walkInMethod)(vt),
                        ),
                      onInvoice: (e) => Qn({ document: e, send: !0 }),
                      stockFix: Sn,
                      onFillStock: (e) => {
                        Ni(e);
                      },
                      onFullEdit: () => {
                        (bn(''), Cn(!0));
                      },
                      onEditLine: (e) => {
                        (bn(''), Dn(e));
                      },
                      onLinePrice: (e, t) => {
                        (bn(''),
                          zi([{ id: e, next: t }]).then((e) => {
                            !e &&
                              Dt.current &&
                              bn(
                                (e) =>
                                  e ||
                                  (0, je.L)(
                                    '\u062a\u063a\u06cc\u06cc\u0631 \u062b\u0628\u062a \u0646\u0634\u062f: {reason}',
                                    {
                                      reason: (0, je.L)(
                                        '\u0686\u0646\u062f \u062b\u0627\u0646\u06cc\u0647 \u0635\u0628\u0631 \u06a9\u0646 \u0648 \u062f\u0648\u0628\u0627\u0631\u0647 \u0628\u0632\u0646.',
                                      ),
                                    },
                                  ),
                              );
                          }));
                      },
                      onEditReminder: (e) => Pn(e),
                      onDeleteReminder: (e) =>
                        Zt({
                          title: (0, je.L)(
                            '\u062d\u0630\u0641 \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc',
                          ),
                          text: (0, je.L)(
                            '\u0627\u06cc\u0646 \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u062d\u0630\u0641 \u0634\u0648\u062f\u061f',
                          ),
                          ok: (0, je.L)('\u062d\u0630\u0641'),
                          tone: 'danger',
                          run: () => {
                            Ri(e);
                          },
                        }),
                      onDeleteLine: (e) =>
                        Zt({
                          title: (0, je.L)(
                            '\u062d\u0630\u0641 \u0627\u06cc\u0646 \u0631\u062f\u06cc\u0641',
                          ),
                          text: (0, je.L)(
                            '\u0627\u06cc\u0646 \u0631\u062f\u06cc\u0641 \u0627\u0632 \u062b\u0628\u062a\u200c\u0647\u0627 \u0628\u0631\u062f\u0627\u0634\u062a\u0647 \u0634\u0648\u062f\u061f',
                          ),
                          ok: (0, je.L)('\u062d\u0630\u0641'),
                          tone: 'danger',
                          run: () => {
                            zi([{ id: e, next: null }]);
                          },
                        }),
                      onUndoAll:
                        (!Bi && 'idle' === zn) || Wn
                          ? void 0
                          : function () {
                              'idle' === zn &&
                                Zt({
                                  title: H.voiceFa.undoAll,
                                  text: H.voiceFa.undoAllAsk,
                                  ok: H.voiceFa.undoAllOk,
                                  tone: 'danger',
                                  run: () => {
                                    (async () => {
                                      (Fn('busy'), An(''));
                                      const { failed: e, kept: t } = await Ai();
                                      Dt.current &&
                                        (An(Hi(e, t)),
                                        Fn(e.length ? 'idle' : 'done'),
                                        e.length ||
                                          ((0, $.showToast)(H.voiceFa.undoDone),
                                          (0, be.clearDraftPart)(s, 'voice'),
                                          (0, be.clearDraftPart)(s, 'voiceAt'),
                                          m?.(!1)));
                                    })();
                                  },
                                });
                            },
                      undoState: zn,
                      undoNote: Nn,
                      onNew: bi,
                      onClose: Si,
                      rereading: Ut,
                      rereadError: Jt,
                      onRetryText: function (e) {
                        const t = e.trim().slice(0, F.MAX_REREAD_CHARS);
                        if (!t) return void Xt(H.voiceFa.rereadEmpty);
                        if (
                          wt.current ||
                          kt.current ||
                          gn ||
                          Ut ||
                          'busy' === zn
                        )
                          return;
                        const n = (0, K.retryStep)(Tn.current, Wn);
                        'refuse' !== n
                          ? 'read' !== n
                            ? Zt({
                                title: H.voiceFa.retryText,
                                text: H.voiceFa.retryAsk,
                                ok: H.voiceFa.retryText,
                                tone: 'danger',
                                run: () => {
                                  (async () => {
                                    (Kt(!0), Xt(''), Fn('busy'), An(''));
                                    const { failed: e, kept: n } = await Ai();
                                    if (!Dt.current) return;
                                    const i = Hi(e, n);
                                    if (i)
                                      return (
                                        An(i),
                                        Fn(e.length ? 'idle' : 'done'),
                                        Xt(i),
                                        void Kt(!1)
                                      );
                                    (Fn('done'),
                                      (0, be.clearDraftPart)(s, 'voice'),
                                      (0, be.clearDraftPart)(s, 'voiceAt'),
                                      await mi(t));
                                  })();
                                },
                              })
                            : mi(t)
                          : Xt(H.voiceFa.rereadSaved);
                      },
                      onEditText: () => Xt(''),
                      draft: on,
                      draftNote: cn,
                      onConfirmDraft: () => {
                        Vi();
                      },
                    },
                    Yt,
                  ),
                }),
              'review' === Ye &&
                vt &&
                (0, ke.jsx)(Oe, {
                  visible: wn,
                  transcript: vt.transcript,
                  done: bt.done,
                  contacts: Hn,
                  products: r,
                  movements: o,
                  kinds: ze,
                  businessType: Ie,
                  role: ye,
                  rights: Be,
                  pricesEditable: Me,
                  sales: vt.sales || [],
                  busy: gn || yt,
                  error: xn,
                  onClose: () => Cn(!1),
                  onSave: (e, t) => {
                    (async () => {
                      const n = e.trim();
                      (n &&
                        n !==
                          (0, we.transcriptForDisplay)(vt.transcript).trim() &&
                        xt((e) => (e ? { ...e, transcript: n } : e)),
                        (await zi(t)) && Dt.current && Cn(!1));
                    })();
                  },
                }),
              'review' === Ye &&
                vt &&
                In &&
                (() => {
                  const e = bt.done.find((e) => e.id === In);
                  return e
                    ? (0, ke.jsx)(
                        _e,
                        {
                          item: e,
                          contacts: Hn,
                          products: r,
                          movements: o,
                          kinds: ze,
                          businessType: Ie,
                          role: ye,
                          rights: Be,
                          pricesEditable: Me,
                          sales: vt.sales || [],
                          busy: gn || yt,
                          error: xn,
                          onClose: () => Dn(null),
                          onSave: (e) => {
                            (async () => {
                              (await zi(e)) && Dt.current && Dn(null);
                            })();
                          },
                        },
                        In,
                      )
                    : null;
                })(),
              (0, ke.jsx)(u.WhenSheet, {
                target: Pi,
                onClose: () => Pn(null),
                onSave: async (e, t) => {
                  const n = xe.activeShop,
                    i = kn;
                  n &&
                    null !== i &&
                    (await (0, d.patchToBuy)(n, e.id, { remindAt: t }),
                    xt((e) =>
                      e
                        ? {
                            ...e,
                            toBuy: (e.toBuy || []).map((e, n) =>
                              n === i ? { ...e, when: t } : e,
                            ),
                          }
                        : e,
                    ),
                    Pn(null));
                },
              }),
              en,
              Xn &&
                (0, ke.jsx)(qe, {
                  document: Xn.document,
                  send: Xn.send,
                  shopName: f || xe.activeShop?.name || '',
                  onClose: () => Qn(null),
                }),
              (0, ke.jsx)(ue.Sheet, {
                visible: 'permission' === Ye,
                title: E.fa.voiceModalTitle,
                onClose: Si,
                children: (0, ke.jsxs)(k.default, {
                  testID: 'voice-permission-sheet',
                  style: { gap: 12 },
                  children: [
                    (0, ke.jsx)(ae.Copy, {
                      style: { fontSize: 14, lineHeight: 24, color: ee.muted },
                      children: E.fa.voiceModalBody,
                    }),
                    (0, ke.jsx)(ae.Copy, {
                      style: { fontSize: 13, color: ee.muted },
                      children: E.fa.voiceExample,
                    }),
                    !!it &&
                      (0, ke.jsx)(ae.Copy, {
                        accessibilityRole: 'alert',
                        style: { fontSize: 13, color: ee.danger },
                        children: it,
                      }),
                    (0, ke.jsx)(ae.Button, {
                      testID: 'voice-permission-go',
                      onPress: ui,
                      children: H.voiceFa.permissionGo,
                    }),
                    (0, ke.jsx)(he.PermissionHelp, {}),
                  ],
                }),
              }),
              (0, ke.jsx)(R.TapModal, {
                visible:
                  'processing' === Ye ||
                  'processError' === Ye ||
                  ('review' === Ye && (tn || Ut)),
                transparent: !0,
                animationType: 'fade',
                onRequestClose: () => 'processError' === Ye && Si(),
                children: (0, ke.jsxs)(k.default, {
                  style: {
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#08090b73',
                    padding: 24,
                  },
                  children: [
                    (0, ke.jsx)(pe.Backdrop, {
                      testID: 'voice-processing-backdrop',
                      locked: 'processError' !== Ye,
                      onClose: Si,
                    }),
                    (0, ke.jsx)(k.default, {
                      testID: 'voice-processing',
                      accessibilityViewIsModal: !0,
                      style: {
                        width: '100%',
                        maxWidth: 280,
                        padding: 20,
                        gap: 14,
                        borderRadius: 20,
                        alignItems: 'center',
                        backgroundColor: ee.surface,
                        borderWidth: D.default.hairlineWidth,
                        borderColor: ee.line,
                      },
                      children:
                        'processError' !== Ye
                          ? (0, ke.jsxs)(ke.Fragment, {
                              children: [
                                (0, ke.jsx)(b.default, {
                                  size: 'large',
                                  color: ee.accent,
                                }),
                                (0, ke.jsx)(ae.Copy, {
                                  testID: 'voice-processing-line',
                                  accessibilityLiveRegion: 'polite',
                                  style: { fontSize: 14, textAlign: 'center' },
                                  children:
                                    'review' !== Ye || Ut
                                      ? li()[Math.min(tt, li().length - 1)]
                                      : H.voiceFa.savingNote,
                                }),
                              ],
                            })
                          : (0, ke.jsxs)(ke.Fragment, {
                              children: [
                                (0, ke.jsx)(de.Icon, {
                                  name: 'mic',
                                  size: 26,
                                  color: ee.danger,
                                }),
                                (0, ke.jsx)(ae.Copy, {
                                  accessibilityRole: 'alert',
                                  style: {
                                    fontSize: 14,
                                    lineHeight: 24,
                                    textAlign: 'center',
                                    color: ee.danger,
                                  },
                                  children: it,
                                }),
                                !!ot &&
                                  (0, ke.jsx)(ae.Copy, {
                                    testID: 'voice-error-code',
                                    selectable: !0,
                                    style: {
                                      fontSize: 11,
                                      lineHeight: 16,
                                      color: ee.muted,
                                      textAlign: 'center',
                                      writingDirection: 'ltr',
                                    },
                                    children: (0, je.L)(
                                      '\u06a9\u062f: {code}',
                                      { code: ot },
                                    ),
                                  }),
                                (0, ke.jsxs)(k.default, {
                                  style: { alignSelf: 'stretch', gap: 8 },
                                  children: [
                                    !!Vt.current &&
                                      (0, ke.jsx)(ae.Button, {
                                        testID: 'voice-error-resend',
                                        onPress: () => fi(),
                                        children: (0, je.L)(
                                          '\u062f\u0648\u0628\u0627\u0631\u0647 \u0628\u0641\u0631\u0633\u062a',
                                        ),
                                      }),
                                    (0, ke.jsx)(ae.Button, {
                                      testID: 'voice-error-rerecord',
                                      secondary: !!Vt.current,
                                      onPress: bi,
                                      children: H.voiceFa.rerecord,
                                    }),
                                    (0, ke.jsx)(ae.Button, {
                                      ghost: !0,
                                      onPress: Si,
                                      children: H.voiceFa.cancel,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                    }),
                  ],
                }),
              }),
            ],
          });
        return (0, ke.jsx)(S.default.View, {
          testID: 'voice-flow',
          style: {
            gap: 12,
            opacity: si,
            transform: [
              {
                scale: si.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.94, 1],
                }),
              },
            ],
          },
          children: Wi,
        });
      }));
    var a = t(s[0]),
      l = t(s[1]),
      d = t(s[2]),
      u = t(s[3]),
      p = t(s[4]),
      h = t(s[5]),
      f = t(s[6]),
      m = t(s[7]),
      y = t(s[8]),
      g = t(s[9]),
      v = t(s[10]),
      x = t(s[11]),
      b = c(t(s[12])),
      S = c(t(s[13])),
      j = c(t(s[14])),
      w = c(t(s[15])),
      C = c(t(s[16]));
    c(t(s[17]));
    t(s[18]);
    var I = c(t(s[19])),
      D = c(t(s[20])),
      k = c(t(s[21])),
      P = c(t(s[22])),
      R = t(s[23]),
      L = t(s[24]),
      E = t(s[25]),
      T = t(s[26]),
      z = t(s[27]),
      F = t(s[28]),
      N = t(s[29]),
      A = t(s[30]),
      H = t(s[31]),
      V = t(s[32]),
      B = t(s[33]),
      _ = t(s[34]),
      O = t(s[35]),
      q = t(s[36]),
      M = t(s[37]),
      W = t(s[38]),
      U = t(s[39]),
      K = t(s[40]),
      J = t(s[41]),
      X = t(s[42]),
      Q = t(s[43]),
      G = t(s[44]),
      Y = t(s[45]),
      $ = t(s[46]),
      Z = t(s[47]),
      ee = t(s[48]),
      te = t(s[49]),
      ne = t(s[50]),
      ie = t(s[51]),
      re = t(s[52]),
      oe = t(s[53]),
      se = t(s[54]),
      ce = t(s[55]),
      ae = t(s[56]),
      le = t(s[57]),
      de = t(s[58]),
      ue = t(s[59]),
      pe = t(s[60]),
      he = t(s[61]),
      fe = t(s[62]),
      me = t(s[63]),
      ye = t(s[64]),
      ge = t(s[65]),
      ve = t(s[66]),
      xe = t(s[67]),
      be = t(s[68]),
      Se = t(s[69]),
      je = t(s[70]),
      we = t(s[71]),
      Ce = t(s[72]),
      Ie = t(s[73]),
      De = t(s[74]),
      ke = t(s[75]);
    const Pe = (e) =>
        e instanceof xe.ApiError && K.GONE_CODES.includes(e.message),
      Re = (e) => {
        const { toBuy: t, contacts: n, ...i } = e;
        return i;
      },
      Le = !1;
    async function Ee(e, t, n) {
      const i = [
          ...new Set(
            n
              .map(
                (e) =>
                  (0, re.contactKey)((0, re.spokenName)(e))
                    .split(' ')
                    .filter(Boolean)
                    .pop() || '',
              )
              .filter((e) => e.length >= 2),
          ),
        ].slice(0, 10),
        r = new Map((t || []).map((e) => [e.id, e]));
      for (const t of i) {
        const n = await (0, U.listContacts)(e, { q: t });
        for (const e of n.contacts)
          r.set(e.id, {
            id: e.id,
            name: e.name,
            ...(e.phone ? { phone: e.phone } : {}),
            ...(void 0 !== e.balanceToman
              ? { balanceToman: e.balanceToman }
              : {}),
          });
      }
      return [...r.values()];
    }
    async function Te(e) {
      const t = [];
      let n;
      do {
        const i = await (0, U.listContacts)(e, { cursor: n });
        (t.push(
          ...i.contacts.map((e) => ({
            id: e.id,
            name: e.name,
            ...(e.phone ? { phone: e.phone } : {}),
            ...(void 0 !== e.balanceToman
              ? { balanceToman: e.balanceToman }
              : {}),
          })),
        ),
          (n = i.next?.cursor));
      } while (n && t.length < 2e3);
      return t;
    }
    const ze = (e) => {
        const t = e
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
          .replace(/\D/g, '')
          .slice(0, 13);
        return t ? Number(t) : void 0;
      },
      Fe = (e) => (0, je.localDigits)(e),
      Ne = () => [
        H.voiceFa.processingAudio,
        (0, je.L)(
          '\u062f\u0631 \u062d\u0627\u0644 \u062a\u0628\u062f\u06cc\u0644 \u0635\u062f\u0627 \u0628\u0647 \u0645\u062a\u0646\u2026',
        ),
        H.voiceFa.processingItems,
        (0, je.L)(
          '\u062f\u0631 \u062d\u0627\u0644 \u067e\u06cc\u062f\u0627 \u06a9\u0631\u062f\u0646 \u06a9\u0627\u0644\u0627\u0647\u0627 \u062f\u0631 \u0627\u0646\u0628\u0627\u0631\u062a\u2026',
        ),
        (0, je.L)(
          '\u062f\u0631 \u062d\u0627\u0644 \u0628\u0631\u0631\u0633\u06cc \u062a\u0639\u062f\u0627\u062f \u0648 \u0648\u0627\u062d\u062f\u0647\u0627\u2026',
        ),
        (0, je.L)(
          '\u062f\u0631 \u062d\u0627\u0644 \u0628\u0631\u0631\u0633\u06cc \u0642\u06cc\u0645\u062a\u200c\u0647\u0627\u2026',
        ),
        (0, je.L)(
          '\u062f\u0631 \u062d\u0627\u0644 \u067e\u06cc\u062f\u0627 \u06a9\u0631\u062f\u0646 \u062e\u0631\u06cc\u062f\u0627\u0631 \u0648 \u0641\u0631\u0648\u0634\u0646\u062f\u0647\u2026',
        ),
        (0, je.L)(
          '\u062f\u0631 \u062d\u0627\u0644 \u0686\u06cc\u062f\u0646 \u0641\u0647\u0631\u0633\u062a\u2026',
        ),
        (0, je.L)(
          '\u062a\u0642\u0631\u06cc\u0628\u0627\u064b \u062a\u0645\u0627\u0645 \u0634\u062f\u2026',
        ),
      ],
      Ae = (e) =>
        Fe(Math.floor(e / 60) + ':' + String(e % 60).padStart(2, '0'));
    function He({
      level: e,
      active: t,
      reduced: n,
      label: i,
      onPress: r,
      onLongPress: o,
    }) {
      const { colors: s } = (0, se.useTheme)(),
        c = (0, a.useRef)(new S.default.Value(0)).current,
        l = (0, a.useRef)(new S.default.Value(0)).current;
      return (
        (0, a.useEffect)(() => {
          if (!t || n) return void c.stopAnimation();
          const e = S.default.loop(
            S.default.timing(c, {
              toValue: 1,
              duration: 6e3,
              easing: w.default.linear,
              useNativeDriver: Le,
            }),
          );
          return (c.setValue(0), e.start(), () => e.stop());
        }, [t, n]),
        (0, a.useEffect)(() => {
          const i = t ? Math.min(1, e) : 0;
          n
            ? l.setValue(0.5 * i)
            : S.default
                .timing(l, { toValue: i, duration: 120, useNativeDriver: Le })
                .start();
        }, [e, t, n]),
        (0, ke.jsxs)(I.default, {
          testID: 'voice-orb',
          accessibilityRole: 'button',
          accessibilityLabel: i || H.voiceFa.hint,
          accessibilityHint: H.voiceFa.orbHold,
          accessibilityActions: [
            { name: 'activate' },
            { name: 'longpress', label: H.voiceFa.cancel },
          ],
          onAccessibilityAction: (e) => {
            'longpress' === e.nativeEvent.actionName ? o?.() : r?.();
          },
          onPress: r,
          onLongPress: o,
          delayLongPress: 900,
          style: ({ pressed: e }) => ({
            width: 220,
            height: 220,
            alignItems: 'center',
            justifyContent: 'center',
            transform: [{ scale: e ? 0.96 : 1 }],
          }),
          children: [
            (0, ke.jsx)(S.default.View, {
              style: {
                position: 'absolute',
                width: 160,
                height: 160,
                borderRadius: 80,
                backgroundColor: s.accentSoft,
                opacity: l.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.55, 1],
                }),
                transform: [
                  {
                    scale: l.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1.05, 1.36],
                    }),
                  },
                ],
              },
            }),
            (0, ke.jsx)(S.default.View, {
              style: {
                position: 'absolute',
                width: 188,
                height: 188,
                borderRadius: 94,
                borderWidth: 2,
                borderColor: s.accentSoft,
                borderTopColor: t ? s.accent : s.accentSoft,
                borderRightColor: t ? s.accent : s.accentSoft,
                transform: [
                  {
                    rotate: c.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '360deg'],
                    }),
                  },
                ],
              },
            }),
            (0, ke.jsx)(k.default, {
              style: {
                width: 160,
                height: 160,
                borderRadius: 80,
                backgroundColor: t ? s.accent : s.muted,
                alignItems: 'center',
                justifyContent: 'center',
              },
              children: (0, ke.jsx)(de.Icon, {
                name: t ? 'stop' : 'mic',
                size: 56,
                color: s.onAccent,
              }),
            }),
          ],
        })
      );
    }
    function Ve({
      result: e,
      stack: t,
      contacts: n,
      products: i,
      movements: r,
      kinds: o,
      businessType: s,
      role: c,
      rights: l,
      pricesEditable: d,
      busy: u,
      rowErrors: p,
      conflicts: g,
      dispatch: v,
      salePending: S,
      saleUi: j,
      saleReady: w,
      onSale: C,
      onSaleUi: P,
      onConfirmSale: R,
      autoSave: L,
      onAutoSave: E,
      peopleLoading: T,
      onSaveRow: z,
      onSaveAll: F,
      extras: N,
      onRetryReminders: A,
      onContact: B,
      onMonthly: O,
      chequeIds: q,
      chequePhotos: M,
      onChequePhoto: W,
      nearHints: U,
      onNear: K,
      fixing: Y,
      fixError: $,
      saleDoc: Z,
      walkInDoc: te,
      onInvoice: ie,
      stockFix: ce,
      onFillStock: le,
      onFullEdit: pe,
      onEditLine: he,
      onLinePrice: fe,
      onDeleteLine: me,
      onEditReminder: ge,
      onDeleteReminder: be,
      onUndoAll: Se,
      undoState: we,
      undoNote: Ce,
      onNew: De,
      onClose: Pe,
      rereading: Re,
      rereadError: Le,
      onRetryText: Ee,
      onEditText: Te,
      draft: Fe,
      draftNote: Ne,
      onConfirmDraft: Ae,
    }) {
      const { colors: He } = (0, se.useTheme)(),
        Ve = (0, a.useRef)({}),
        [_e, Oe] = (0, a.useState)(null),
        [qe, Ke] = (0, a.useState)(null),
        [Je, Ye] = (0, a.useState)(!1),
        [$e, Ze] = (0, a.useState)({}),
        [et, tt] = (0, a.useState)({}),
        nt = (0, m.useReceiptOffer)(xe.activeShop?.id),
        it = e.sales || [],
        rt = (e) =>
          ve.notebookFa.units[
            e.unit || i.find((t) => t.id === e.productId)?.unit || 'piece'
          ],
        ot = (e) => {
          try {
            return (0, H.faNumber)((0, y.parseQuantity)(e.quantity));
          } catch {
            return '\u2014';
          }
        },
        st = (0, H.priceBases)(
          t.items.map((e) => (0, H.priceVisible)(e, l)),
          i,
        ),
        ct = (e, n, r = !1) => {
          const o = (0, H.resolvedProduct)(e, i),
            s = t.items.indexOf(e),
            c = s >= 0 ? st[s] : void 0,
            a =
              (l.salePrice ?? (d && l.price))
                ? (0, G.voiceChipPrice)(e, o, c)
                : null;
          return o && null !== a
            ? (0, ke.jsx)(Q.PriceChoice, {
                testID: 'voice-price-choice-' + e.id,
                product: (0, G.voiceChipProduct)(o, c),
                price: a,
                disabled: r,
                onPick: (t, i) => n((0, G.voicePricePatch)(e, t, i, o, c)),
              })
            : null;
        },
        at = t.items.map((e, t) => ({
          item: e,
          warnings: (0, H.cardWarnings)(
            (0, H.priceVisible)(e, l),
            i,
            r,
            n,
            st[t],
          ).filter((e) => 'priceChange' !== e.type && 'close' !== e.type),
        })),
        lt = (e) => at.find((t) => t.item.id === e)?.warnings || [],
        dt = t.items.find((e) => e.id === _e),
        ut = (0, a.useRef)(L ? 'wait' : 'off');
      (0, a.useEffect)(() => {
        if ('wait' !== ut.current) return;
        if (!t.items.length || _e) return ((ut.current = 'off'), void E(null));
        if (u || S || T) return;
        const e = new Set();
        for (const { item: t, warnings: n } of at)
          (0, H.cardBlocked)(n) && e.add(t.id);
        (it.forEach((n, i) => {
          const r = t.items.filter((e) => (0, J.rowSale)(e, it) === i);
          if (!w(i) || r.some((t) => e.has(t.id)))
            for (const t of r) e.add(t.id);
        }),
          (ut.current = t.items.some((t) => !e.has(t.id)) ? 'fired' : 'off'),
          'fired' === ut.current ? E(e) : E(null));
      }, [u, S, T, _e, t.items.length]);
      const pt = e.toBuy || [],
        ht = e.contacts || [],
        ft = [
          ...t.done.map((e) => (0, h.itemEntry)(e, it, !0)),
          ...t.items.map((e) => (0, h.itemEntry)(e, it, !1)),
          ...(0, h.reminderEntries)(pt).map((e, t) => ({
            ...e,
            done: 'failed' !== N.reminders[t]?.status,
          })),
          ...(0, h.contactEntries)(ht).map((e, t) => ({
            ...e,
            done: 'failed' !== N.contacts[t]?.status,
          })),
        ],
        mt = (0, h.voiceCards)(e.transcript, ft),
        yt = (0, h.cardCounts)(ft),
        gt = new Map([...t.done, ...t.items].map((e) => [e.id, e])),
        vt = (e) => {
          const t = it[e],
            i = j[e] || {};
          return t
            ? (0, J.voiceSaleCustomer)(t, n, i.contactId).target?.name
            : void 0;
        },
        xt = (e) => (e ? (0, Ie.money)(e, { full: !0, hint: !1 }) : '\u2014'),
        bt =
          o.includes('received') && 'done' !== ce
            ? (0, h.stockShortfalls)(
                t.done
                  .filter((e) => 'sold' === e.kind && !e.ledger && !e.expense)
                  .map((e) => ({ product: (0, H.resolvedProduct)(e, i) })),
              )
            : [],
        St =
          t.done.length > 0 ||
          N.reminders.some((e) => 'saved' === e.status) ||
          N.contacts.some((e) => 'saved' === e.status),
        jt = (0, ke.jsx)(Be, {
          transcript: e.transcript,
          busy: Re || u || Y || 'busy' === we,
          error: Le,
          onRetry: Ee,
          onEdit: Te,
        });
      if (!ft.length)
        return (0, ke.jsxs)(k.default, {
          style: { gap: 12 },
          children: [
            (0, ke.jsx)(ae.Copy, {
              testID: 'voice-empty-why',
              children: (0, je.L)(
                _.EMPTY_NOTE[(0, _.emptyNoteReason)(e.transcript)],
              ),
            }),
            jt,
            (0, ke.jsx)(ae.Button, {
              onPress: De,
              children: H.voiceFa.rerecord,
            }),
            (0, ke.jsx)(ae.Button, {
              ghost: !0,
              onPress: Pe,
              children: H.voiceFa.close,
            }),
          ],
        });
      const wt =
          Fe &&
          (t.items.length > 0 ||
            N.reminders.some((e) => 'draft' === e.status) ||
            N.contacts.some((e) => 'draft' === e.status)),
        Ct =
          'done' === we
            ? { text: H.voiceFa.undoDone, tone: He.muted, icon: 'refresh' }
            : wt && !u
              ? { text: H.voiceFa.retryDraft, tone: He.warning, icon: 'alert' }
              : u && yt.missing === yt.total
                ? { text: H.voiceFa.savingNote, tone: He.muted, icon: 'clock' }
                : 0 === yt.missing
                  ? {
                      text: (0, je.L)('\u062b\u0628\u062a \u0634\u062f'),
                      tone: He.success,
                      icon: 'check',
                    }
                  : {
                      text: yt.done
                        ? (0, je.L)(
                            '\u0627\u0632 {total} \u06a9\u0627\u0631\u06cc \u06a9\u0647 \u06af\u0641\u062a\u06cc\u060c {done} \u062a\u0627 \u062b\u0628\u062a \u0634\u062f\u061b {missing} \u062a\u0627 \u0646\u0627\u0642\u0635 \u0627\u0633\u062a\u060c \u06a9\u0627\u0645\u0644\u0634\u0627\u0646 \u06a9\u0646.',
                            {
                              total: (0, H.faNumber)(yt.total),
                              done: (0, H.faNumber)(yt.done),
                              missing: (0, H.faNumber)(yt.missing),
                            },
                          )
                        : (0, je.L)(
                            '{missing} \u0645\u0648\u0631\u062f \u0646\u0627\u0642\u0635 \u0627\u0633\u062a\u061b \u06a9\u0627\u0645\u0644\u0634\u0627\u0646 \u06a9\u0646 \u062a\u0627 \u062b\u0628\u062a \u0634\u0648\u062f.',
                            { missing: (0, H.faNumber)(yt.missing) },
                          ),
                      tone: He.warning,
                      icon: 'alert',
                    },
        It = (e, n, r) => {
          const o = (0, H.packKey)(e, n);
          for (const s of t.items)
            s.ledger ||
              s.expense ||
              s.unit !== n ||
              (0, H.resolvedProduct)(s, i)?.id !== e.id ||
              v({ type: 'edit', id: s.id, patch: { packSize: r, packFor: o } });
        },
        Dt = (e, t) => {
          const n = gt.get(e);
          if (!n) return null;
          const r = lt(e),
            o = n.ledger,
            s = n.expense,
            a = (Ve.current[e] ||= new Set());
          for (const e of r)
            ('amount' !== e.type && 'due' !== e.type && 'pack' !== e.type) ||
              a.add(e.type);
          const l = o || s ? void 0 : (0, H.resolvedProduct)(n, i),
            d = a.has('amount'),
            h = a.has('due'),
            f = a.has('pack') && !!l && (0, H.packAskable)(n.unit, l),
            m = r.find((e) => 'person' === e.type && e.blocking),
            y = r.find((e) => 'phone' === e.type),
            x = r.filter(
              (e) =>
                e.blocking &&
                ![
                  'amount',
                  'due',
                  'person',
                  'phone',
                  'pack',
                  'unitSwitch',
                ].includes(e.type),
            ),
            b = r.find((e) => 'unitSwitch' === e.type),
            S = s
              ? s.label.trim() || ne.expenseCategoryFa[s.category]
              : o
                ? o.contactName
                : n.name,
            j = s
              ? (0, je.L)('\u0647\u0632\u06cc\u0646\u0647')
              : o
                ? (0, H.ledgerLabel)(o)
                : n.kind
                  ? (0, H.voiceRowText)(n.kind, ot(n), rt(n))
                  : '',
            w = (t) => v({ type: 'edit', id: e, patch: t });
          return (0, ke.jsxs)(
            k.default,
            {
              testID: 'voice-incomplete-row',
              style: {
                gap: 8,
                paddingHorizontal: 12,
                paddingVertical: 10,
                borderTopWidth: t ? D.default.hairlineWidth : 0,
                borderColor: He.line,
              },
              children: [
                (0, ke.jsxs)(k.default, {
                  style: {
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    gap: 8,
                  },
                  children: [
                    (0, ke.jsx)(ae.Copy, {
                      numberOfLines: 2,
                      style: {
                        flex: 1,
                        fontSize: 14,
                        lineHeight: 22,
                        fontFamily: 'Vazirmatn_600SemiBold',
                      },
                      children: S || '\u2014',
                    }),
                    (0, ke.jsx)(ae.Copy, {
                      style: { fontSize: 12.5, color: He.muted },
                      children: j,
                    }),
                  ],
                }),
                f &&
                  (0, ke.jsx)(Ue, {
                    question: (0, H.packQuestionText)(n, l),
                    value:
                      n.packFor === (0, H.packKey)(l, n.unit)
                        ? n.packSize
                        : void 0,
                    onChange: (e) => It(l, n.unit, e),
                  }),
                d &&
                  (0, ke.jsx)(ye.MoneyInput, {
                    testID: 'voice-fill-amount',
                    accessibilityLabel: (0, je.L)(
                      '\u0645\u0628\u0644\u063a \u0646\u062f\u0627\u0631\u062f',
                    ),
                    placeholder: (0, je.L)(
                      '\u0645\u0628\u0644\u063a \u0646\u062f\u0627\u0631\u062f',
                    ),
                    value: o ? o.amount : s.amount,
                    onChange: (e) =>
                      w(
                        o
                          ? { ledger: { ...o, amount: e } }
                          : { expense: { ...s, amount: e } },
                      ),
                  }),
                o &&
                  'cheque' === o.type &&
                  h &&
                  (0, ke.jsx)(k.default, {
                    testID: 'voice-fill-due',
                    style: { gap: 4 },
                    children: o.dueDate
                      ? (0, ke.jsx)(oe.JalaliDateField, {
                          dateOnly: !0,
                          id: 'voice-fill-due-' + e,
                          value: (0, re.isoToParts)(o.dueDate),
                          onChange: (e) =>
                            w({
                              ledger: { ...o, dueDate: (0, re.partsToIso)(e) },
                            }),
                        })
                      : (0, ke.jsx)(ae.Button, {
                          secondary: !0,
                          onPress: () =>
                            w({
                              ledger: {
                                ...o,
                                dueDate: (0, re.partsToIso)(
                                  (0, re.todayParts)(),
                                ),
                              },
                            }),
                          children: (0, je.L)(
                            '\u062a\u0627\u0631\u06cc\u062e \u0646\u062f\u0627\u0631\u062f\u061b \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646',
                          ),
                        }),
                  }),
                o &&
                  m &&
                  !!m.contacts?.length &&
                  (0, ke.jsx)(V.PersonChoice, {
                    testKey: 'voice-fill-person',
                    people: m.contacts,
                    disabled: u,
                    onPick: (e) =>
                      w({
                        name: e.name,
                        ledger: { ...o, contactId: e.id, contactName: e.name },
                      }),
                    onNew: () =>
                      w({ ledger: { ...o, contactId: re.NEW_CONTACT } }),
                  }),
                o &&
                  y &&
                  (0, ke.jsx)(V.SameNamePrompt, {
                    testKey: 'voice-fill-same-name',
                    text: y.text,
                    people: y.contacts || [],
                    phone: o.contactPhone,
                    disabled: u,
                    onPick: (e) =>
                      w({
                        name: e.name,
                        ledger: { ...o, contactId: e.id, contactName: e.name },
                      }),
                    onPhone: (e) =>
                      w({ ledger: { ...o, contactPhone: e || void 0 } }),
                  }),
                b &&
                  (0, ke.jsx)(We, {
                    warning: b,
                    item: n,
                    canSwitch: Me(c, xe.activeShop?.access),
                    onEdit: w,
                  }),
                x.map((t) =>
                  (0, ke.jsx)(
                    I.default,
                    {
                      testID: 'voice-fill-fix',
                      accessibilityRole: 'button',
                      onPress: () => Oe(e),
                      children: (0, ke.jsxs)(ae.Copy, {
                        style: {
                          fontSize: 12.5,
                          lineHeight: 20,
                          color: He.danger,
                        },
                        children: [
                          t.text + ' ',
                          (0, ke.jsx)(ae.Copy, {
                            style: {
                              fontSize: 12.5,
                              color: He.accent,
                              fontFamily: 'Vazirmatn_600SemiBold',
                            },
                            children: (0, je.L)(
                              '\u062f\u0631\u0633\u062a \u06a9\u0631\u062f\u0646',
                            ),
                          }),
                        ],
                      }),
                    },
                    t.type,
                  ),
                ),
                !(!p[e] && !g[e]) &&
                  (0, ke.jsx)(ae.Copy, {
                    accessibilityRole: 'alert',
                    style: {
                      fontSize: 12,
                      lineHeight: 20,
                      color: g[e] ? He.warning : He.danger,
                    },
                    children: p[e] || g[e],
                  }),
                (0, ke.jsx)(ae.Button, {
                  testID: 'voice-fill-save',
                  secondary: !0,
                  disabled: u || (0, H.cardBlocked)(r),
                  onPress: () => z(e),
                  children: (0, je.L)('\u062b\u0628\u062a'),
                }),
              ],
            },
            e,
          );
        },
        kt = [
          ...new Set(
            mt.incomplete
              .map((e) => gt.get(e))
              .filter((e) => !!e && null !== (0, J.rowSale)(e, it))
              .map((e) => (0, J.rowSale)(e, it)),
          ),
        ],
        Pt = mt.incomplete.filter((e) => {
          const t = gt.get(e);
          return !!t && null === (0, J.rowSale)(t, it);
        }),
        Rt = pt
          .map((e, t) => ({ r: e, i: t, e: N.reminders[t] }))
          .filter((e) => 'failed' === e.e?.status),
        Lt = ht
          .map((e, t) => ({ c: e, i: t, e: N.contacts[t] }))
          .filter((e) => 'failed' === e.e?.status),
        Et = (e, n) => {
          const i = n.ledger;
          if (
            !he ||
            !t.done.some((t) => t.id === e) ||
            (i && 'cheque' !== i.type && 'debt' !== i.type)
          )
            return;
          const r = u || Y || 'busy' === we;
          return (0, ke.jsxs)(k.default, {
            style: { flexDirection: 'row-reverse', gap: 2 },
            children: [
              (0, ke.jsx)(I.default, {
                testID: 'voice-line-edit',
                accessibilityRole: 'button',
                accessibilityLabel: H.voiceFa.editRow,
                disabled: r,
                hitSlop: 6,
                onPress: () => he(e),
                style: ({ pressed: e }) => ({
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: e ? He.soft : 'transparent',
                  opacity: r ? 0.4 : 1,
                }),
                children: (0, ke.jsx)(de.Icon, {
                  name: 'edit',
                  size: 15,
                  color: He.accent,
                }),
              }),
              (0, ke.jsx)(I.default, {
                testID: 'voice-line-delete',
                accessibilityRole: 'button',
                accessibilityLabel: (0, je.L)('\u062d\u0630\u0641'),
                disabled: r,
                hitSlop: 6,
                onPress: () => me?.(e),
                style: ({ pressed: e }) => ({
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: e ? He.soft : 'transparent',
                  opacity: r ? 0.4 : 1,
                }),
                children: (0, ke.jsx)(de.Icon, {
                  name: 'close',
                  size: 14,
                  color: He.danger,
                }),
              }),
            ],
          });
        },
        Tt = (e, n) => {
          const i = gt.get(e);
          if (!i) return null;
          const r = i.ledger,
            o = i.expense,
            s = U[e];
          if ('debt' === r?.type)
            return (0, ke.jsx)(
              f.VoiceSavedLine,
              {
                testID: 'voice-debt-line',
                first: !n,
                name: r.contactName,
                sub: (0, _.cleanVoiceNote)(r.note),
                detail: xt((0, H.ledgerAmount)(r)),
                tools: Et(e, i),
              },
              e,
            );
          if (r)
            return (0, ke.jsx)(
              f.VoiceSavedLine,
              {
                first: !n,
                name: r.contactName,
                sub:
                  'cheque' === r.type
                    ? r.dueDate
                      ? H.voiceFa.due_short.replace(
                          '{date}',
                          (0, re.jalaliDay)(r.dueDate),
                        )
                      : ''
                    : (0, H.ledgerLabel)(r),
                detail: xt((0, H.ledgerAmount)(r)),
                tools: Et(e, i),
              },
              e,
            );
          if (o)
            return (0, ke.jsx)(
              f.VoiceSavedLine,
              {
                first: !n,
                name: o.label.trim() || ne.expenseCategoryFa[o.category],
                sub: o.monthly
                  ? (0, je.L)('\u0647\u0631 \u0645\u0627\u0647')
                  : '',
                detail: xt((0, H.expenseAmount)(o)),
                tools: Et(e, i),
              },
              e,
            );
          const c =
            'sold' === i.kind
              ? i.unitPrice
              : 'received' === i.kind
                ? i.unitCost
                : void 0;
          let a = '';
          if (c) {
            let e = 0;
            try {
              e = (0, y.parseQuantity)(i.quantity);
            } catch {}
            a =
              (0, je.L)('\u0641\u06cc {each}', { each: xt(c) }) +
              (e > 1
                ? (0, je.partSep)() +
                  (0, je.L)('\u062c\u0645\u0639 {total}', {
                    total: xt(Math.round(e * c)),
                  })
                : '');
          }
          return (0, ke.jsxs)(
            f.VoiceSavedLine,
            {
              first: !n,
              name: i.name,
              sub: a,
              detail: (0, H.voiceRowText)(
                'sold' === i.kind || 'received' === i.kind ? null : i.kind,
                ot(i),
                rt(i),
              ),
              tools: Et(e, i),
              children: [
                !!fe &&
                  t.done.some((t) => t.id === e) &&
                  null === (0, J.rowSale)(i, it) &&
                  ct(i, (t) => fe(e, { ...i, ...t }), u || Y || 'busy' === we),
                !!s &&
                  (0, ke.jsx)(f.VoiceNearCard, {
                    name: s.name,
                    busy: Y,
                    onUse: () => K(e),
                  }),
              ],
            },
            e,
          );
        };
      return (0, ke.jsxs)(k.default, {
        style: { gap: 12 },
        children: [
          (0, ke.jsxs)(k.default, {
            testID: 'voice-status',
            accessibilityLiveRegion: 'polite',
            style: {
              flexDirection: 'row-reverse',
              alignItems: 'center',
              gap: 8,
              paddingHorizontal: 4,
            },
            children: [
              (0, ke.jsx)(de.Icon, { name: Ct.icon, size: 16, color: Ct.tone }),
              (0, ke.jsx)(ae.Copy, {
                testID: 'voice-status-text',
                style: {
                  flex: 1,
                  fontSize: 13.5,
                  lineHeight: 22,
                  color: Ct.tone,
                  fontFamily: 'Vazirmatn_600SemiBold',
                },
                children: Ct.text,
              }),
            ],
          }),
          !!Ce &&
            (0, ke.jsx)(ae.Copy, {
              accessibilityRole: 'alert',
              style: { fontSize: 12, lineHeight: 20, color: He.warning },
              children: Ce,
            }),
          !!Ne &&
            (0, ke.jsx)(ae.Copy, {
              testID: 'voice-retry-summary',
              accessibilityRole: 'alert',
              style: {
                fontSize: 13,
                lineHeight: 21,
                color: He.warning,
                fontFamily: 'Vazirmatn_600SemiBold',
              },
              children: Ne,
            }),
          wt &&
            (0, ke.jsx)(ae.Button, {
              testID: 'voice-retry-confirm',
              disabled: u || S,
              onPress: Ae,
              children: u ? H.voiceFa.savingNote : H.voiceFa.confirmAll,
            }),
          !!$ &&
            (0, ke.jsx)(ae.Copy, {
              accessibilityRole: 'alert',
              style: { fontSize: 12, lineHeight: 20, color: He.danger },
              children: $,
            }),
          'done' !== we &&
            (0, ke.jsxs)(ke.Fragment, {
              children: [
                bt.length > 0 &&
                  !u &&
                  (0, ke.jsxs)(k.default, {
                    testID: 'voice-stock-ask',
                    style: {
                      gap: 8,
                      padding: 12,
                      borderRadius: 14,
                      backgroundColor: He.warningSoft,
                      borderWidth: D.default.hairlineWidth,
                      borderColor: He.warningBorder,
                    },
                    children: [
                      (0, ke.jsx)(ae.Copy, {
                        style: {
                          fontSize: 13,
                          lineHeight: 21,
                          color: He.warning,
                        },
                        children:
                          1 === bt.length
                            ? (0, je.L)(
                                '\xab{name}\xbb \u062f\u0631 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0646\u06cc\u0633\u062a\u061b \u0627\u0648\u0644 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u0645 \u0628\u0639\u062f \u06a9\u0645 \u06a9\u0646\u0645\u061f',
                                { name: bt[0].name },
                              )
                            : (0, je.L)(
                                '{n} \u06a9\u0627\u0644\u0627\u06cc\u06cc \u06a9\u0647 \u0641\u0631\u0648\u062e\u062a\u06cc \u062f\u0631 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0646\u06cc\u0633\u062a\u061b \u0627\u0648\u0644 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u0645 \u0628\u0639\u062f \u06a9\u0645 \u06a9\u0646\u0645\u061f',
                                { n: (0, H.faNumber)(bt.length) },
                              ),
                      }),
                      Je
                        ? (0, ke.jsxs)(k.default, {
                            style: { gap: 10 },
                            children: [
                              bt.map((e) => {
                                const t = $e[e.id] || { cost: '', price: '' },
                                  n = (n) =>
                                    Ze((i) => ({
                                      ...i,
                                      [e.id]: { ...t, ...n },
                                    }));
                                return (0, ke.jsxs)(
                                  k.default,
                                  {
                                    style: { gap: 6 },
                                    children: [
                                      (0, ke.jsx)(ae.Copy, {
                                        style: {
                                          fontSize: 13,
                                          fontFamily: 'Vazirmatn_600SemiBold',
                                        },
                                        children: (0, je.L)(
                                          '{n} {unit} \xab{name}\xbb \u0627\u0636\u0627\u0641\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f',
                                          {
                                            name: e.name,
                                            n: (0, H.faNumber)(-e.stock),
                                            unit: ve.notebookFa.units[
                                              e.unit || 'piece'
                                            ],
                                          },
                                        ),
                                      }),
                                      (0, ke.jsxs)(k.default, {
                                        style: {
                                          flexDirection: 'row-reverse',
                                          gap: 8,
                                        },
                                        children: [
                                          (0, ke.jsx)(k.default, {
                                            style: { flex: 1 },
                                            children: (0, ke.jsx)(
                                              ye.MoneyInput,
                                              {
                                                testID: 'voice-stock-cost',
                                                accessibilityLabel: (0, je.L)(
                                                  '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f',
                                                ),
                                                placeholder: (0, je.L)(
                                                  '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f',
                                                ),
                                                value: t.cost,
                                                onChange: (e) => n({ cost: e }),
                                              },
                                            ),
                                          }),
                                          (0, ke.jsx)(k.default, {
                                            style: { flex: 1 },
                                            children: (0, ke.jsx)(
                                              ye.MoneyInput,
                                              {
                                                testID: 'voice-stock-price',
                                                accessibilityLabel: (0, je.L)(
                                                  '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634',
                                                ),
                                                placeholder: (0, je.L)(
                                                  '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634',
                                                ),
                                                value: t.price,
                                                onChange: (e) =>
                                                  n({ price: e }),
                                              },
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  e.id,
                                );
                              }),
                              (0, ke.jsx)(ae.Button, {
                                testID: 'voice-stock-save',
                                disabled: 'busy' === ce,
                                onPress: () =>
                                  le(
                                    bt.map((e) => ({
                                      product: e,
                                      cost: ze($e[e.id]?.cost || ''),
                                      price: ze($e[e.id]?.price || ''),
                                    })),
                                  ),
                                children:
                                  'busy' === ce
                                    ? (0, je.L)(
                                        '\u062f\u0631 \u062d\u0627\u0644 \u062b\u0628\u062a\u2026',
                                      )
                                    : (0, je.L)('\u062b\u0628\u062a'),
                              }),
                            ],
                          })
                        : (0, ke.jsx)(k.default, {
                            style: { alignSelf: 'flex-end' },
                            children: (0, ke.jsx)(I.default, {
                              testID: 'voice-stock-yes',
                              accessibilityRole: 'button',
                              onPress: () => Ye(!0),
                              style: ({ pressed: e }) => ({
                                minHeight: 34,
                                paddingHorizontal: 14,
                                borderRadius: 10,
                                justifyContent: 'center',
                                backgroundColor: e ? He.line : He.surface,
                              }),
                              children: (0, ke.jsx)(ae.Copy, {
                                style: {
                                  fontSize: 13,
                                  color: He.accent,
                                  fontFamily: 'Vazirmatn_600SemiBold',
                                },
                                children: (0, je.L)(
                                  '\u0622\u0631\u0647\u060c \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646',
                                ),
                              }),
                            }),
                          }),
                    ],
                  }),
                mt.incomplete.length > 0 &&
                  (0, ke.jsxs)(ae.Card, {
                    testID: 'voice-incomplete',
                    style: {
                      padding: 0,
                      gap: 0,
                      overflow: 'hidden',
                      borderWidth: 1,
                      borderColor: He.warningBorder,
                    },
                    children: [
                      (0, ke.jsxs)(k.default, {
                        style: {
                          flexDirection: 'row-reverse',
                          alignItems: 'center',
                          gap: 8,
                          paddingHorizontal: 12,
                          paddingVertical: 9,
                          backgroundColor: He.warningSoft,
                        },
                        children: [
                          (0, ke.jsx)(de.Icon, {
                            name: 'alert',
                            size: 15,
                            color: He.warning,
                          }),
                          (0, ke.jsx)(ae.Copy, {
                            style: {
                              flex: 1,
                              fontSize: 14,
                              lineHeight: 22,
                              color: He.warning,
                              fontFamily: 'Vazirmatn_700Bold',
                            },
                            children: Fe
                              ? (0, je.L)('\u0628\u0631\u0631\u0633\u06cc')
                              : (0, je.L)(
                                  '\u06a9\u0627\u0645\u0644 \u06a9\u0646',
                                ),
                          }),
                          (0, ke.jsx)(ae.Copy, {
                            style: { fontSize: 12, color: He.warning },
                            children: (0, H.faNumber)(mt.incomplete.length),
                          }),
                        ],
                      }),
                      Pt.map((e, t) => Dt(e, t)),
                      !L &&
                        !Fe &&
                        Pt.filter((e) => !(0, H.cardBlocked)(lt(e))).length >
                          1 &&
                        (0, ke.jsx)(k.default, {
                          style: { padding: 10 },
                          children: (0, ke.jsx)(ae.Button, {
                            testID: 'voice-fill-save-all',
                            disabled: u,
                            onPress: F,
                            children: (0, je.L)(
                              '\u062b\u0628\u062a \u0647\u0645\u0647',
                            ),
                          }),
                        }),
                      kt.map((e) => {
                        const r = t.items.filter(
                            (t) => (0, J.rowSale)(t, it) === e,
                          ),
                          o = j[e] || {};
                        return (0, ke.jsx)(
                          k.default,
                          {
                            style: { padding: 8 },
                            children: (0, ke.jsx)(X.VoiceSaleCard, {
                              sale: it[e],
                              count: r.length,
                              total: (0, J.saleTotal)(r, i),
                              contacts: n,
                              contactId: o.contactId,
                              cheque: o.cheque,
                              busy: u || S,
                              blocked:
                                r.some((e) => (0, H.cardBlocked)(lt(e.id))) ||
                                !w(e),
                              error: o.error,
                              onChange: (t) => C(e, t),
                              onPick: (t) => P(e, { contactId: t?.id }),
                              onCheque: (t) => P(e, { cheque: t }),
                              photos: o.photos || {},
                              onPhotos: (t) => P(e, { photos: t }),
                              onInvoice: () => R(e),
                              when:
                                r.find((e) => e.timestamp)?.timestamp || void 0,
                              onWhen: (e) => {
                                for (const t of r)
                                  v({
                                    type: 'edit',
                                    id: t.id,
                                    patch: { timestamp: e },
                                  });
                              },
                              children: r.map((e, t) =>
                                (0, ke.jsxs)(
                                  f.VoiceSavedLine,
                                  {
                                    first: !t,
                                    name: e.name,
                                    detail: (0, H.voiceRowText)(
                                      null,
                                      ot(e),
                                      rt(e),
                                    ),
                                    children: [
                                      ct(
                                        e,
                                        (t) =>
                                          v({
                                            type: 'edit',
                                            id: e.id,
                                            patch: t,
                                          }),
                                        u || S,
                                      ),
                                      lt(e.id)
                                        .filter((e) => e.blocking)
                                        .map((t) =>
                                          (0, ke.jsx)(
                                            I.default,
                                            {
                                              onPress: () => Oe(e.id),
                                              children: (0, ke.jsx)(ae.Copy, {
                                                style: {
                                                  fontSize: 12,
                                                  lineHeight: 19,
                                                  color: He.danger,
                                                },
                                                children: t.text,
                                              }),
                                            },
                                            t.type,
                                          ),
                                        ),
                                    ],
                                  },
                                  e.id,
                                ),
                              ),
                            }),
                          },
                          'sale-' + e,
                        );
                      }),
                      Rt.map(({ r: e, e: t }) =>
                        (0, ke.jsxs)(
                          k.default,
                          {
                            style: {
                              gap: 6,
                              paddingHorizontal: 12,
                              paddingVertical: 10,
                              borderTopWidth: D.default.hairlineWidth,
                              borderColor: He.line,
                            },
                            children: [
                              (0, ke.jsx)(ae.Copy, {
                                style: { fontSize: 14, lineHeight: 22 },
                                children:
                                  (0, je.L)(
                                    '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc',
                                  ) +
                                  ': ' +
                                  e.name,
                              }),
                              (0, ke.jsx)(ae.Copy, {
                                style: {
                                  fontSize: 12,
                                  lineHeight: 19,
                                  color: He.danger,
                                },
                                children: t.error || '',
                              }),
                            ],
                          },
                          'r-' + e.name,
                        ),
                      ),
                      Rt.length > 0 &&
                        (0, ke.jsx)(k.default, {
                          style: { padding: 10 },
                          children: (0, ke.jsx)(ae.Button, {
                            secondary: !0,
                            onPress: A,
                            children: (0, je.L)(
                              '\u062b\u0628\u062a \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc',
                            ),
                          }),
                        }),
                      Lt.map(({ c: e, i: t, e: n }) =>
                        (0, ke.jsxs)(
                          k.default,
                          {
                            style: {
                              gap: 6,
                              paddingHorizontal: 12,
                              paddingVertical: 10,
                              borderTopWidth: D.default.hairlineWidth,
                              borderColor: He.line,
                            },
                            children: [
                              (0, ke.jsx)(ae.Copy, {
                                style: { fontSize: 14, lineHeight: 22 },
                                children:
                                  (0, je.L)(
                                    '\u0645\u062e\u0627\u0637\u0628 \u062c\u062f\u06cc\u062f',
                                  ) +
                                  ': ' +
                                  e.name,
                              }),
                              (0, ke.jsx)(ae.Copy, {
                                style: {
                                  fontSize: 12,
                                  lineHeight: 19,
                                  color: He.danger,
                                },
                                children: n.error || '',
                              }),
                              (0, ke.jsx)(ae.Input, {
                                testID: 'voice-fill-contact-phone',
                                accessibilityLabel: (0, je.L)(
                                  '\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644',
                                ),
                                placeholder: (0, je.L)(
                                  '\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644\u060c \u0645\u062b\u0644\u0627\u064b \u06f0\u06f9\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9',
                                ),
                                value: et[t] || '',
                                onChangeText: (e) =>
                                  tt((n) => ({
                                    ...n,
                                    [t]: (0, x.latinDigits)(e)
                                      .replace(/[^0-9]/g, '')
                                      .slice(0, 15),
                                  })),
                                keyboardType: 'phone-pad',
                                inputMode: 'tel',
                                ltr: !0,
                              }),
                              (0, ke.jsx)(ae.Button, {
                                secondary: !0,
                                onPress: () => B(t, et[t]),
                                children: (0, je.L)('\u062b\u0628\u062a'),
                              }),
                            ],
                          },
                          'c-' + t,
                        ),
                      ),
                    ],
                  }),
                mt.cards.map((e) => {
                  const t = e.ids,
                    n = e.key;
                  if ('reminder' === e.kind)
                    return (0, ke.jsx)(
                      f.VoiceCardShell,
                      {
                        testID: 'voice-card-reminder',
                        title: (0, je.L)(
                          '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc',
                        ),
                        count: t.length,
                        saved: t.every((e) =>
                          ['saved', 'removed'].includes(
                            N.reminders[Number(e.split('-')[1])]?.status || '',
                          ),
                        ),
                        children: t.map((e, t) => {
                          const n = Number(e.split('-')[1]),
                            i = pt[n],
                            r = N.reminders[n];
                          if (!i || 'removed' === r?.status) return null;
                          const o = u || Y || 'busy' === we,
                            s =
                              'saved' === r?.status && r.id && ge
                                ? (0, ke.jsxs)(k.default, {
                                    style: {
                                      flexDirection: 'row-reverse',
                                      gap: 2,
                                    },
                                    children: [
                                      (0, ke.jsx)(I.default, {
                                        testID: 'voice-reminder-edit',
                                        accessibilityRole: 'button',
                                        accessibilityLabel: (0, je.L)(
                                          '\u0632\u0645\u0627\u0646 \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc',
                                        ),
                                        disabled: o,
                                        hitSlop: 6,
                                        onPress: () => ge(n),
                                        style: ({ pressed: e }) => ({
                                          width: 32,
                                          height: 32,
                                          borderRadius: 16,
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          backgroundColor: e
                                            ? He.soft
                                            : 'transparent',
                                          opacity: o ? 0.4 : 1,
                                        }),
                                        children: (0, ke.jsx)(de.Icon, {
                                          name: 'edit',
                                          size: 15,
                                          color: He.accent,
                                        }),
                                      }),
                                      (0, ke.jsx)(I.default, {
                                        testID: 'voice-reminder-delete',
                                        accessibilityRole: 'button',
                                        accessibilityLabel: (0, je.L)(
                                          '\u062d\u0630\u0641',
                                        ),
                                        disabled: o,
                                        hitSlop: 6,
                                        onPress: () => be?.(n),
                                        style: ({ pressed: e }) => ({
                                          width: 32,
                                          height: 32,
                                          borderRadius: 16,
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          backgroundColor: e
                                            ? He.soft
                                            : 'transparent',
                                          opacity: o ? 0.4 : 1,
                                        }),
                                        children: (0, ke.jsx)(de.Icon, {
                                          name: 'close',
                                          size: 14,
                                          color: He.danger,
                                        }),
                                      }),
                                    ],
                                  })
                                : void 0,
                            c = i.task
                              ? ''
                              : [
                                  (0, je.L)(
                                    '\u0644\u06cc\u0633\u062a \u062e\u0631\u06cc\u062f',
                                  ),
                                  i.quantity
                                    ? (0, je.L)('{n} \u0639\u062f\u062f', {
                                        n: (0, H.faNumber)(i.quantity),
                                      })
                                    : '',
                                ]
                                  .filter(Boolean)
                                  .join((0, je.partSep)());
                          return (0, ke.jsx)(
                            f.VoiceSavedLine,
                            {
                              testID: 'voice-reminder-line',
                              first: !t,
                              lead: (0, h.reminderTime)(i.when),
                              name: i.name,
                              sub: c,
                              detail: 'saving' === r?.status ? '\u2026' : '',
                              tools: s,
                              children:
                                i.task &&
                                (0, h.paymentReminder)(i.name) &&
                                'saved' === r?.status &&
                                (0, ke.jsxs)(k.default, {
                                  style: {
                                    flexDirection: 'row-reverse',
                                    alignItems: 'center',
                                    gap: 8,
                                  },
                                  children: [
                                    (0, ke.jsx)(ae.Copy, {
                                      style: {
                                        flex: 1,
                                        fontSize: 11.5,
                                        lineHeight: 18,
                                        color: He.muted,
                                      },
                                      children:
                                        'done' === r.monthly
                                          ? (0, je.L)(
                                              '\u0647\u0631 \u0645\u0627\u0647 \u06cc\u0627\u062f\u062a \u0645\u06cc\u200c\u0627\u0646\u062f\u0627\u0632\u0645.',
                                            )
                                          : (0, je.L)(
                                              '\u0627\u06af\u0631 \u062f\u0631 \u0647\u0632\u06cc\u0646\u0647\u200c\u0647\u0627 \u062b\u0628\u062a\u0634 \u06a9\u0646\u06cc\u060c \u0647\u0631 \u0645\u0627\u0647 \u06cc\u0627\u062f\u062a \u0645\u06cc\u200c\u0627\u0646\u062f\u0627\u0632\u0645',
                                            ),
                                    }),
                                    'done' !== r.monthly &&
                                      (0, ke.jsx)(I.default, {
                                        testID: 'voice-reminder-monthly',
                                        accessibilityRole: 'button',
                                        disabled: 'busy' === r.monthly,
                                        onPress: () => O(n),
                                        style: ({ pressed: e }) => ({
                                          minHeight: 30,
                                          paddingHorizontal: 10,
                                          borderRadius: 9,
                                          justifyContent: 'center',
                                          backgroundColor: e
                                            ? He.line
                                            : He.soft,
                                        }),
                                        children: (0, ke.jsx)(ae.Copy, {
                                          style: {
                                            fontSize: 11.5,
                                            color: He.accent,
                                            fontFamily: 'Vazirmatn_600SemiBold',
                                          },
                                          children: (0, je.L)(
                                            '\u0647\u0631 \u0645\u0627\u0647 \u06cc\u0627\u062f\u0645 \u0628\u0646\u062f\u0627\u0632',
                                          ),
                                        }),
                                      }),
                                  ],
                                }),
                            },
                            e,
                          );
                        }),
                      },
                      n,
                    );
                  if ('contact' === e.kind)
                    return (0, ke.jsx)(
                      f.VoiceCardShell,
                      {
                        testID: 'voice-card-contact',
                        title: (0, je.L)(
                          '\u0645\u062e\u0627\u0637\u0628 \u062c\u062f\u06cc\u062f',
                        ),
                        count: t.length,
                        saved: t.every(
                          (e) =>
                            'saved' ===
                            N.contacts[Number(e.split('-')[1])]?.status,
                        ),
                        children: t.map((e, t) => {
                          const n = Number(e.split('-')[1]),
                            i = ht[n];
                          return i
                            ? (0, ke.jsx)(
                                f.VoiceSavedLine,
                                {
                                  first: !t,
                                  name: i.name,
                                  sub: i.phone
                                    ? (0, je.localDigits)(i.phone)
                                    : '',
                                  detail: '',
                                },
                                e,
                              )
                            : null;
                        }),
                      },
                      n,
                    );
                  const i = t.map((e) => gt.get(e)).filter((e) => !!e);
                  let r,
                    o = '',
                    s = null;
                  if ('sale' === e.kind) {
                    const n = e.saleIndex ?? null,
                      i = null === n ? te(t) : Z(n);
                    ((o =
                      null === n
                        ? (0, je.L)(
                            '\u0645\u0634\u062a\u0631\u06cc \u062d\u0636\u0648\u0631\u06cc',
                          )
                        : (0, J.saleHeading)(it[n], vt(n))),
                      i &&
                        (r = {
                          label: (0, je.L)(
                            '\u0627\u0631\u0633\u0627\u0644 \u0641\u0627\u06a9\u062a\u0648\u0631',
                          ),
                          icon: 'send',
                          testID: 'voice-card-invoice',
                          onPress: () => ie(i),
                        }));
                  } else if ('received' === e.kind)
                    ((o = (0, je.L)(
                      '\u0648\u0631\u0648\u062f \u06a9\u0627\u0644\u0627',
                    )),
                      nt &&
                        (r = {
                          label: (0, je.L)(
                            '\u062b\u0628\u062a \u0641\u0627\u06a9\u062a\u0648\u0631 \u062e\u0631\u06cc\u062f',
                          ),
                          icon: 'receipt',
                          testID: 'voice-card-receipt-photo',
                          onPress: () => Ke(qe === n ? null : n),
                        }),
                      qe === n &&
                        (s = (0, ke.jsx)(k.default, {
                          style: { padding: 10 },
                          children: (0, ke.jsx)(m.ReceiptPhotoPrompt, {
                            shop: xe.activeShop,
                            testID: 'voice-receipt-photo',
                          }),
                        })));
                  else if ('chequeIn' === e.kind || 'chequeOut' === e.kind) {
                    o =
                      'chequeIn' === e.kind
                        ? (0, je.L)(
                            '\u0686\u06a9 \u062f\u0631\u06cc\u0627\u0641\u062a\u06cc',
                          )
                        : (0, je.L)(
                            '\u0686\u06a9 \u067e\u0631\u062f\u0627\u062e\u062a\u06cc',
                          );
                    const i = t.filter((e) => !!q[e]);
                    (i.length &&
                      (r = {
                        label: (0, je.L)(
                          '\u062b\u0628\u062a \u0639\u06a9\u0633 \u0686\u06a9',
                        ),
                        icon: 'camera',
                        testID: 'voice-card-cheque-photo',
                        onPress: () => Ke(qe === n ? null : n),
                      }),
                      qe === n &&
                        (s = (0, ke.jsx)(k.default, {
                          testID: 'voice-cheque-photo-drawer',
                          style: { padding: 12, gap: 12 },
                          children: i.map((e) => {
                            const t = M[e] || {};
                            return (0, ke.jsxs)(
                              k.default,
                              {
                                style: { gap: 6 },
                                children: [
                                  i.length > 1 &&
                                    (0, ke.jsx)(ae.Copy, {
                                      style: {
                                        fontSize: 12.5,
                                        color: He.muted,
                                      },
                                      children: gt.get(e)?.ledger?.contactName,
                                    }),
                                  (0, ke.jsx)(ee.ChequePhotosField, {
                                    testID: 'voice-cheque-photos',
                                    value: {
                                      ...(t.front
                                        ? { front: { uri: t.front.uri } }
                                        : {}),
                                      ...(t.back
                                        ? { back: { uri: t.back.uri } }
                                        : {}),
                                    },
                                    onPick: (t, n) => W(e, t, n),
                                    onRemove: (t) => W(e, t, null),
                                  }),
                                ],
                              },
                              e,
                            );
                          }),
                        })));
                  } else
                    o =
                      'debt' === e.kind
                        ? 'in' === i[0]?.ledger?.direction
                          ? (0, je.L)('\u0637\u0644\u0628')
                          : (0, je.L)('\u0628\u062f\u0647\u06cc')
                        : 'money' === e.kind
                          ? (0, je.L)(
                              '\u062f\u0631\u06cc\u0627\u0641\u062a \u0648 \u067e\u0631\u062f\u0627\u062e\u062a',
                            )
                          : 'expense' === e.kind
                            ? (0, je.L)(
                                '\u0647\u0632\u06cc\u0646\u0647\u200c\u0647\u0627',
                              )
                            : 'used' === e.kind
                              ? (0, je.L)(
                                  '\u0645\u0635\u0631\u0641 \u0648 \u062f\u0648\u0631\u0631\u06cc\u0632',
                                )
                              : (0, je.L)('\u0633\u0627\u06cc\u0631');
                  return (0, ke.jsxs)(
                    f.VoiceCardShell,
                    {
                      testID: 'voice-card-' + e.kind,
                      title: o,
                      count: i.length,
                      action: r,
                      children: [i.map((e, t) => Tt(e.id, t)), s],
                    },
                    n,
                  );
                }),
              ],
            }),
          jt,
          St &&
            'done' !== we &&
            (0, ke.jsx)(k.default, {
              style: { flexDirection: 'row-reverse', gap: 10 },
              children:
                !!Se &&
                (0, ke.jsxs)(I.default, {
                  testID: 'voice-undo-all',
                  accessibilityRole: 'button',
                  accessibilityState: {
                    busy: 'busy' === we,
                    disabled: 'busy' === we || u,
                  },
                  disabled: 'busy' === we || u || Y,
                  onPress: Se,
                  style: ({ pressed: e }) => ({
                    flex: 1,
                    minHeight: 48,
                    borderRadius: 14,
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                    borderWidth: D.default.hairlineWidth,
                    borderColor: He.line,
                    backgroundColor: e ? He.soft : 'transparent',
                  }),
                  children: [
                    'busy' === we
                      ? (0, ke.jsx)(b.default, {
                          size: 'small',
                          color: He.danger,
                        })
                      : null,
                    (0, ke.jsx)(ae.Copy, {
                      style: {
                        fontSize: 14,
                        color: He.danger,
                        fontFamily: 'Vazirmatn_600SemiBold',
                      },
                      children: H.voiceFa.undoAll,
                    }),
                  ],
                }),
            }),
          (0, ke.jsxs)(k.default, {
            style: { flexDirection: 'row-reverse', gap: 10 },
            children: [
              (0, ke.jsx)(k.default, {
                style: { flex: 1 },
                children: (0, ke.jsx)(ae.Button, {
                  testID: 'voice-next',
                  disabled: u || Y || 'busy' === we,
                  onPress: De,
                  children: (0, je.L)(
                    '\u0636\u0628\u0637 \u062c\u062f\u06cc\u062f',
                  ),
                }),
              }),
              (0, ke.jsx)(k.default, {
                style: { flex: 1 },
                children: (0, ke.jsx)(ae.Button, {
                  testID: 'voice-back',
                  ghost: !0,
                  disabled: u || 'busy' === we,
                  onPress: Pe,
                  children: (0, je.L)('\u0628\u0627\u0632\u06af\u0634\u062a'),
                }),
              }),
            ],
          }),
          (0, ke.jsx)(ue.Sheet, {
            visible: !!dt,
            title: H.voiceFa.editRow,
            onClose: () => Oe(null),
            children:
              dt &&
              (dt.expense
                ? (0, ke.jsx)(Ge, {
                    item: dt,
                    onEdit: (e) => v({ type: 'edit', id: dt.id, patch: e }),
                    onRemove: () => {
                      (v({ type: 'discard', id: dt.id }), Oe(null));
                    },
                    onDone: () => Oe(null),
                  })
                : dt.ledger
                  ? (0, ke.jsx)(Qe, {
                      item: dt,
                      contacts: n,
                      onEdit: (e) => v({ type: 'edit', id: dt.id, patch: e }),
                      onRemove: () => {
                        (v({ type: 'discard', id: dt.id }), Oe(null));
                      },
                      onDone: () => Oe(null),
                    })
                  : (0, ke.jsx)(Xe, {
                      item: dt,
                      onPack: It,
                      rights: l,
                      pricesEditable: d,
                      products: i,
                      base: st[t.items.indexOf(dt)],
                      movements: r,
                      kinds: o,
                      businessType: s,
                      role: c,
                      sales: it,
                      contacts: n,
                      onEdit: (e) => v({ type: 'edit', id: dt.id, patch: e }),
                      onRemove: () => {
                        (v({ type: 'discard', id: dt.id }), Oe(null));
                      },
                      onDone: () => Oe(null),
                    })),
          }),
        ],
      });
    }
    function Be({ transcript: e, busy: t, error: n, onRetry: i, onEdit: r }) {
      const { colors: o } = (0, se.useTheme)(),
        [s, c] = (0, a.useState)(!1),
        [l, d] = (0, a.useState)(!1),
        [u, p] = (0, a.useState)(''),
        h = e ? (0, we.transcriptForDisplay)(e) : '';
      return l
        ? (0, ke.jsxs)(ae.Card, {
            testID: 'voice-transcript-editor',
            style: { gap: 8, padding: 12 },
            children: [
              (0, ke.jsx)(ae.Copy, {
                style: { fontSize: 12, color: o.muted },
                children: H.voiceFa.youSaid,
              }),
              (0, ke.jsx)(ae.Input, {
                testID: 'voice-transcript-input',
                accessibilityLabel: H.voiceFa.editTranscript,
                multiline: !0,
                autoFocus: !0,
                editable: !t,
                value: u,
                maxLength: F.MAX_REREAD_CHARS,
                onChangeText: p,
                style: {
                  minHeight: 110,
                  maxHeight: 260,
                  fontSize: 15,
                  lineHeight: 26,
                  paddingVertical: 8,
                  textAlignVertical: 'top',
                },
              }),
              (0, ke.jsx)(ae.Copy, {
                style: { fontSize: 11.5, lineHeight: 18, color: o.muted },
                children: H.voiceFa.rereadHint,
              }),
              !!n &&
                (0, ke.jsx)(ae.Copy, {
                  testID: 'voice-transcript-error',
                  accessibilityRole: 'alert',
                  style: { fontSize: 12.5, lineHeight: 20, color: o.danger },
                  children: n,
                }),
              (0, ke.jsxs)(k.default, {
                style: { flexDirection: 'row-reverse', gap: 10 },
                children: [
                  (0, ke.jsx)(k.default, {
                    style: { flex: 1.4 },
                    children: (0, ke.jsx)(ae.Button, {
                      testID: 'voice-transcript-retry',
                      disabled: t || !u.trim(),
                      onPress: () => i(u),
                      children: t ? H.voiceFa.rereading : H.voiceFa.retryText,
                    }),
                  }),
                  (0, ke.jsx)(k.default, {
                    style: { flex: 1 },
                    children: (0, ke.jsx)(ae.Button, {
                      testID: 'voice-transcript-cancel',
                      ghost: !0,
                      disabled: t,
                      onPress: () => {
                        (d(!1), r());
                      },
                      children: H.voiceFa.cancel,
                    }),
                  }),
                ],
              }),
            ],
          })
        : (0, ke.jsxs)(k.default, {
            style: {
              flexDirection: 'row-reverse',
              alignItems: 'flex-start',
              gap: 8,
              paddingHorizontal: 4,
            },
            children: [
              (0, ke.jsxs)(I.default, {
                testID: 'voice-transcript',
                accessibilityRole: 'button',
                onPress: () => c((e) => !e),
                style: { flex: 1, minWidth: 0, gap: 2 },
                children: [
                  (0, ke.jsx)(ae.Copy, {
                    style: { fontSize: 11.5, color: o.muted },
                    children: H.voiceFa.youSaid,
                  }),
                  (0, ke.jsx)(ae.Copy, {
                    numberOfLines: s ? void 0 : 2,
                    style: { fontSize: 13, lineHeight: 22, color: o.muted },
                    children: h || E.fa.voiceNoSpeech,
                  }),
                ],
              }),
              (0, ke.jsx)(I.default, {
                testID: 'voice-transcript-edit',
                accessibilityRole: 'button',
                accessibilityLabel: H.voiceFa.editTranscript,
                hitSlop: 8,
                disabled: t,
                onPress: () => {
                  (p(h), d(!0), r());
                },
                style: ({ pressed: e }) => ({
                  width: 36,
                  height: 36,
                  borderRadius: 18,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: e ? o.line : o.soft,
                  opacity: t ? 0.5 : 1,
                }),
                children: (0, ke.jsx)(de.Icon, {
                  name: 'edit',
                  size: 16,
                  color: o.accent,
                }),
              }),
            ],
          });
    }
    function _e({
      item: e,
      contacts: t,
      products: n,
      movements: i,
      kinds: r,
      businessType: o,
      role: s,
      rights: c,
      pricesEditable: l,
      sales: d,
      busy: u,
      error: p,
      onSave: h,
      onClose: f,
    }) {
      const { colors: m } = (0, se.useTheme)(),
        [y, g] = (0, a.useState)(e),
        v = (e) => g((t) => ({ ...t, ...e })),
        x = () => {
          u ||
            (JSON.stringify(y) === JSON.stringify(e)
              ? f()
              : h([{ id: e.id, next: y }]));
        },
        S = () => {
          u || h([{ id: e.id, next: null }]);
        };
      return (0, ke.jsxs)(ue.Sheet, {
        visible: !0,
        title: H.voiceFa.editRow,
        onClose: f,
        children: [
          y.expense
            ? (0, ke.jsx)(Ge, { item: y, onEdit: v, onRemove: S, onDone: x })
            : y.ledger
              ? (0, ke.jsx)(Qe, {
                  item: y,
                  contacts: t,
                  onEdit: v,
                  onRemove: S,
                  onDone: x,
                })
              : (0, ke.jsx)(Xe, {
                  item: y,
                  rights: c,
                  pricesEditable: l,
                  products: n,
                  movements: i,
                  kinds: r,
                  businessType: o,
                  role: s,
                  sales: d,
                  contacts: t,
                  onEdit: v,
                  onRemove: S,
                  onDone: x,
                }),
          u && (0, ke.jsx)(b.default, { color: m.accent }),
          !!p &&
            (0, ke.jsx)(ae.Copy, {
              accessibilityRole: 'alert',
              style: { fontSize: 12.5, lineHeight: 20, color: m.danger },
              children: p,
            }),
        ],
      });
    }
    function Oe({
      visible: e,
      transcript: t,
      done: n,
      contacts: i,
      products: r,
      movements: o,
      kinds: s,
      businessType: c,
      role: d,
      rights: u,
      pricesEditable: p,
      sales: f,
      busy: m,
      error: g,
      onSave: v,
      onClose: x,
    }) {
      const { colors: b } = (0, se.useTheme)(),
        S = (0, l.useSafeAreaInsets)(),
        [j, w] = (0, a.useState)({}),
        [P, E] = (0, a.useState)(''),
        [T, z] = (0, a.useState)(null);
      (0, a.useEffect)(() => {
        e &&
          (w(Object.fromEntries(n.map((e) => [e.id, e]))),
          E(t ? (0, we.transcriptForDisplay)(t) : ''),
          z(null));
      }, [e]);
      const N = (0, h.voiceCards)(
          t,
          n.map((e) => (0, h.itemEntry)(e, f, !0)),
        ).cards.flatMap((e) => e.ids),
        A = [...n].sort(
          (e, t) => (N.indexOf(e.id) + 1 || 999) - (N.indexOf(t.id) + 1 || 999),
        ),
        V = n
          .filter(
            (e) => e.id in j && JSON.stringify(j[e.id]) !== JSON.stringify(e),
          )
          .map((e) => ({ id: e.id, next: j[e.id] ?? null })),
        B =
          !!P.trim() &&
          P.trim() !== (t ? (0, we.transcriptForDisplay)(t) : '').trim(),
        _ = T ? j[T] : null,
        O = (e, t) => w((n) => (n[e] ? { ...n, [e]: { ...n[e], ...t } } : n)),
        q = (e) => {
          try {
            return (0, H.faNumber)((0, y.parseQuantity)(e.quantity));
          } catch {
            return '\u2014';
          }
        },
        M = (e) =>
          ve.notebookFa.units[
            e.unit || r.find((t) => t.id === e.productId)?.unit || 'piece'
          ];
      return (0, ke.jsxs)(R.PageModal, {
        visible: e,
        animationType: 'slide',
        onRequestClose: x,
        children: [
          (0, ke.jsx)(C.default, {
            behavior: void 0,
            style: { flex: 1 },
            children: (0, ke.jsxs)(k.default, {
              testID: 'voice-full-editor',
              style: {
                flex: 1,
                backgroundColor: b.bg,
                paddingTop: Math.max(S.top, 12),
                paddingBottom: Math.max(S.bottom, 12),
                paddingHorizontal: 16,
                gap: 10,
              },
              children: [
                (0, ke.jsxs)(k.default, {
                  style: {
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    gap: 8,
                  },
                  children: [
                    (0, ke.jsx)(ae.Copy, {
                      accessibilityRole: 'header',
                      style: {
                        flex: 1,
                        fontSize: 18,
                        lineHeight: 28,
                        fontFamily: 'Vazirmatn_700Bold',
                      },
                      children: H.voiceFa.fullEdit,
                    }),
                    (0, ke.jsx)(I.default, {
                      testID: 'voice-full-edit-close',
                      accessibilityRole: 'button',
                      accessibilityLabel: H.voiceFa.close,
                      hitSlop: 8,
                      onPress: x,
                      style: {
                        width: 36,
                        height: 36,
                        borderRadius: 18,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: b.soft,
                      },
                      children: (0, ke.jsx)(de.Icon, {
                        name: 'close',
                        size: 16,
                        color: b.text,
                      }),
                    }),
                  ],
                }),
                (0, ke.jsxs)(L.ScrollView, {
                  style: { flex: 1 },
                  keyboardShouldPersistTaps: 'handled',
                  contentContainerStyle: { gap: 12, paddingBottom: 16 },
                  children: [
                    (0, ke.jsxs)(ae.Card, {
                      style: { gap: 6, padding: 12 },
                      children: [
                        (0, ke.jsx)(ae.Copy, {
                          style: { fontSize: 12, color: b.muted },
                          children: H.voiceFa.youSaid,
                        }),
                        (0, ke.jsx)(ae.Input, {
                          testID: 'voice-full-edit-text',
                          accessibilityLabel: H.voiceFa.youSaid,
                          multiline: !0,
                          value: P,
                          maxLength: F.MAX_REREAD_CHARS,
                          onChangeText: E,
                          style: {
                            minHeight: 96,
                            fontSize: 15,
                            lineHeight: 26,
                            paddingVertical: 8,
                            textAlignVertical: 'top',
                          },
                        }),
                      ],
                    }),
                    (0, ke.jsx)(ae.Card, {
                      style: { padding: 0, gap: 0, overflow: 'hidden' },
                      children: A.map((e, t) => {
                        const n = j[e.id],
                          i = e.ledger,
                          r = !!i && 'cheque' !== i.type && 'debt' !== i.type;
                        if (null === n)
                          return (0, ke.jsxs)(
                            k.default,
                            {
                              style: {
                                flexDirection: 'row-reverse',
                                alignItems: 'center',
                                gap: 8,
                                paddingHorizontal: 12,
                                paddingVertical: 10,
                                borderTopWidth: t ? D.default.hairlineWidth : 0,
                                borderColor: b.line,
                              },
                              children: [
                                (0, ke.jsx)(ae.Copy, {
                                  style: {
                                    flex: 1,
                                    fontSize: 14,
                                    color: b.muted,
                                    textDecorationLine: 'line-through',
                                  },
                                  children: e.name,
                                }),
                                (0, ke.jsx)(I.default, {
                                  accessibilityRole: 'button',
                                  onPress: () =>
                                    w((t) => ({ ...t, [e.id]: e })),
                                  children: (0, ke.jsx)(ae.Copy, {
                                    style: { fontSize: 12.5, color: b.accent },
                                    children: H.voiceFa.undo,
                                  }),
                                }),
                              ],
                            },
                            e.id,
                          );
                        const o = n || e,
                          s = o.expense,
                          c = o.ledger,
                          a = s
                            ? (0, Ie.money)((0, H.expenseAmount)(s) || 0, {
                                hint: !1,
                              })
                            : c
                              ? (0, Ie.money)((0, H.ledgerAmount)(c) || 0, {
                                  hint: !1,
                                })
                              : (0, H.voiceRowText)(o.kind, q(o), M(o));
                        return (0, ke.jsxs)(
                          I.default,
                          {
                            testID: 'voice-full-edit-row',
                            accessibilityRole: 'button',
                            disabled: r || m,
                            onPress: () => z(e.id),
                            style: ({ pressed: e }) => ({
                              flexDirection: 'row-reverse',
                              alignItems: 'center',
                              gap: 10,
                              paddingHorizontal: 12,
                              paddingVertical: 10,
                              minHeight: 52,
                              backgroundColor: e ? b.soft : 'transparent',
                              borderTopWidth: t ? D.default.hairlineWidth : 0,
                              borderColor: b.line,
                            }),
                            children: [
                              (0, ke.jsxs)(k.default, {
                                style: { flex: 1, minWidth: 0 },
                                children: [
                                  (0, ke.jsx)(ae.Copy, {
                                    numberOfLines: 2,
                                    style: { fontSize: 14.5, lineHeight: 23 },
                                    children: s
                                      ? s.label ||
                                        ne.expenseCategoryFa[s.category]
                                      : c
                                        ? c.contactName
                                        : o.name,
                                  }),
                                  r &&
                                    (0, ke.jsx)(ae.Copy, {
                                      style: {
                                        fontSize: 11.5,
                                        lineHeight: 17,
                                        color: b.muted,
                                      },
                                      children: (0, je.L)(
                                        '\u067e\u0631\u062f\u0627\u062e\u062a \u062b\u0628\u062a\u200c\u0634\u062f\u0647\u061b \u0627\u0632 \xab\u062d\u0633\u0627\u0628\u200c\u0647\u0627\xbb \u0627\u0635\u0644\u0627\u062d\u0634 \u06a9\u0646.',
                                      ),
                                    }),
                                ],
                              }),
                              (0, ke.jsx)(ae.Copy, {
                                style: { fontSize: 12.5, color: b.muted },
                                children: a,
                              }),
                              !r &&
                                (0, ke.jsx)(de.Icon, {
                                  name: 'edit',
                                  size: 15,
                                  color: b.accent,
                                }),
                            ],
                          },
                          e.id,
                        );
                      }),
                    }),
                    !!g &&
                      (0, ke.jsx)(ae.Copy, {
                        accessibilityRole: 'alert',
                        style: {
                          fontSize: 12.5,
                          lineHeight: 20,
                          color: b.danger,
                        },
                        children: g,
                      }),
                  ],
                }),
                (0, ke.jsxs)(k.default, {
                  style: { flexDirection: 'row-reverse', gap: 10 },
                  children: [
                    (0, ke.jsx)(k.default, {
                      style: { flex: 1.4 },
                      children: (0, ke.jsx)(ae.Button, {
                        testID: 'voice-full-edit-save',
                        disabled: m || (!V.length && !B),
                        onPress: () => v(P, V),
                        children: m
                          ? (0, je.L)(
                              '\u062f\u0631 \u062d\u0627\u0644 \u062b\u0628\u062a\u2026',
                            )
                          : (0, je.L)(
                              '\u0630\u062e\u06cc\u0631\u0647 \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a',
                            ),
                      }),
                    }),
                    (0, ke.jsx)(k.default, {
                      style: { flex: 1 },
                      children: (0, ke.jsx)(ae.Button, {
                        ghost: !0,
                        disabled: m,
                        onPress: x,
                        children: H.voiceFa.cancel,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, ke.jsx)(ue.Sheet, {
            visible: !!_,
            title: H.voiceFa.editRow,
            onClose: () => z(null),
            children:
              _ &&
              T &&
              (_.expense
                ? (0, ke.jsx)(Ge, {
                    item: _,
                    onEdit: (e) => O(T, e),
                    onRemove: () => {
                      (w((e) => ({ ...e, [T]: null })), z(null));
                    },
                    onDone: () => z(null),
                  })
                : _.ledger
                  ? (0, ke.jsx)(Qe, {
                      item: _,
                      contacts: i,
                      onEdit: (e) => O(T, e),
                      onRemove: () => {
                        (w((e) => ({ ...e, [T]: null })), z(null));
                      },
                      onDone: () => z(null),
                    })
                  : (0, ke.jsx)(Xe, {
                      item: _,
                      rights: u,
                      pricesEditable: p,
                      products: r,
                      movements: o,
                      kinds: s,
                      businessType: c,
                      role: d,
                      sales: f,
                      contacts: i,
                      onEdit: (e) => O(T, e),
                      onRemove: () => {
                        (w((e) => ({ ...e, [T]: null })), z(null));
                      },
                      onDone: () => z(null),
                    })),
          }),
        ],
      });
    }
    function qe({ document: e, send: t, shopName: n, onClose: i }) {
      const { colors: r } = (0, se.useTheme)(),
        o = (0, l.useSafeAreaInsets)();
      return (0, ke.jsxs)(R.PageModal, {
        visible: !0,
        animationType: 'slide',
        onRequestClose: i,
        children: [
          (0, ke.jsx)(C.default, {
            behavior: void 0,
            style: { flex: 1 },
            children: (0, ke.jsx)(k.default, {
              testID: 'voice-invoice',
              style: {
                flex: 1,
                backgroundColor: r.bg,
                paddingHorizontal: 16,
                paddingTop: Math.max(o.top, 12),
                paddingBottom: Math.max(o.bottom, 12),
              },
              children: (0, ke.jsx)(Z.Receipt, {
                document: e,
                shopName: n,
                sendReady: t,
                onClose: i,
              }),
            }),
          }),
          (0, ke.jsx)($.ToastHost, {}),
        ],
      });
    }
    const Me = (e, t) =>
      !e ||
      (0, De.canLead)(e, t ?? void 0) ||
      ('staff' === e && !!t?.do?.catalog);
    function We({ warning: e, item: t, canSwitch: n, onEdit: i }) {
      const { colors: r } = (0, se.useTheme)(),
        o = e.product,
        s = ve.notebookFa.units[t.unit || 'piece'] || '';
      let c = '';
      try {
        c = (0, H.faNumber)((0, y.parseQuantity)(t.quantity));
      } catch {}
      const a = (e, t, n, i) =>
        (0, ke.jsx)(I.default, {
          testID: e,
          accessibilityRole: 'button',
          onPress: n,
          style: {
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderRadius: 999,
            alignItems: 'center',
            backgroundColor: i ? r.accent : r.surface,
            borderWidth: i ? 0 : D.default.hairlineWidth,
            borderColor: r.line,
          },
          children: (0, ke.jsx)(ae.Copy, {
            style: {
              fontSize: 12.5,
              color: i ? r.onAccent : r.text,
              fontFamily: 'Vazirmatn_600SemiBold',
            },
            children: t,
          }),
        });
      return (0, ke.jsxs)(k.default, {
        testID: 'voice-unit-switch',
        style: {
          gap: 8,
          padding: 10,
          borderRadius: 12,
          backgroundColor: r.warningSoft,
          borderWidth: D.default.hairlineWidth,
          borderColor: r.warningBorder,
        },
        children: [
          (0, ke.jsx)(ae.Copy, {
            style: { fontSize: 12.5, lineHeight: 21, color: r.text },
            children: e.text,
          }),
          t.unitSwitchBlocked &&
            !!o &&
            (0, ke.jsx)(ae.Copy, {
              testID: 'voice-unit-switch-recipe',
              style: { fontSize: 12, lineHeight: 20, color: r.muted },
              children: H.voiceFa.unitSwitchInRecipe.replace('{name}', o.name),
            }),
          (0, ke.jsxs)(k.default, {
            style: { flexDirection: 'row-reverse', flexWrap: 'wrap', gap: 8 },
            children: [
              n &&
                !t.unitSwitchBlocked &&
                !!o &&
                a(
                  'voice-unit-switch-yes',
                  H.voiceFa.unitSwitchYes
                    .replace('{name}', o.name)
                    .replace('{unit}', s),
                  () => i({ unitSwitch: !0 }),
                  !0,
                ),
              a(
                'voice-unit-switch-no',
                H.voiceFa.unitSwitchNo.replace('{qty}', c),
                () => i({ unit: o?.unit || 'piece', unitSwitch: void 0 }),
                !n || !!t.unitSwitchBlocked,
              ),
            ],
          }),
        ],
      });
    }
    function Ue({ question: e, value: t, onChange: n }) {
      const { colors: i } = (0, se.useTheme)(),
        r = (e) =>
          e ? (0, je.localDigits)(String(e)).replace('.', '\u066b') : '',
        [o, s] = (0, a.useState)(r(t));
      return (
        (0, a.useEffect)(() => {
          s((e) => {
            const n = Number((0, x.latinDigits)(e).replace('\u066b', '.'));
            return (n > 0 ? n : void 0) === t ? e : r(t);
          });
        }, [t]),
        (0, ke.jsxs)(k.default, {
          testID: 'voice-fill-pack',
          style: { gap: 4 },
          children: [
            !!e &&
              (0, ke.jsx)(ae.Copy, {
                style: { fontSize: 12.5, lineHeight: 20, color: i.danger },
                children: e,
              }),
            (0, ke.jsx)(ae.Input, {
              testID: 'voice-pack-size',
              accessibilityLabel:
                e ||
                (0, je.L)(
                  '\u062a\u0639\u062f\u0627\u062f \u062f\u0631 \u0647\u0631 \u0628\u0633\u062a\u0647',
                ),
              placeholder: (0, je.L)('\u0645\u062b\u0644\u0627\u064b \u06f6'),
              value: o,
              keyboardType: 'decimal-pad',
              inputMode: 'decimal',
              maxLength: 8,
              onChangeText: (e) => {
                const t = (0, x.latinDigits)(e)
                    .replace(/[\u066b,/]/g, '.')
                    .replace(/[^0-9.]/g, '')
                    .replace(/(\..*)\./g, '$1')
                    .slice(0, 8),
                  i = Number(t);
                (s((0, je.localDigits)(t).replace('.', '\u066b')),
                  n(
                    i > 0 && Math.abs(1e3 * i - Math.round(1e3 * i)) < 1e-7
                      ? i
                      : void 0,
                  ));
              },
            }),
          ],
        })
      );
    }
    function Ke({ warning: e, answer: t, disabled: n, onAnswer: i }) {
      return (0, ke.jsx)(Je, {
        testID: 'voice-price-change',
        chipIds: ['voice-price-change-yes', 'voice-price-change-no'],
        text: e.text,
        labels: [H.voiceFa.priceChangeYes, H.voiceFa.priceChangeNo],
        answer: t,
        disabled: n,
        onAnswer: i,
        note: t
          ? 'yes' === t
            ? H.voiceFa.priceChangeSaved
            : H.voiceFa.priceChangeKept
          : '',
      });
    }
    function Je({
      testID: e,
      chipIds: t,
      text: n,
      labels: i,
      answer: r,
      disabled: o,
      onAnswer: s,
      note: c,
    }) {
      const { colors: a } = (0, se.useTheme)(),
        l = (e, n) => {
          const i = r === e;
          return (0, ke.jsx)(
            I.default,
            {
              testID: t['yes' === e ? 0 : 1],
              accessibilityRole: 'radio',
              accessibilityState: { checked: i, disabled: o },
              disabled: o,
              onPress: () => s(e),
              style: {
                flex: 1,
                minHeight: 40,
                paddingHorizontal: 10,
                borderRadius: 12,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: i ? a.accent : a.surface,
                borderWidth: D.default.hairlineWidth,
                borderColor: i ? a.accent : a.line,
              },
              children: (0, ke.jsx)(ae.Copy, {
                style: {
                  fontSize: 13,
                  lineHeight: 20,
                  color: i ? a.onAccent : a.text,
                  fontFamily: 'Vazirmatn_600SemiBold',
                },
                children: n,
              }),
            },
            e,
          );
        };
      return (0, ke.jsxs)(k.default, {
        testID: e,
        style: {
          gap: 8,
          padding: 10,
          borderRadius: 12,
          backgroundColor: a.warningSoft,
          borderWidth: D.default.hairlineWidth,
          borderColor: a.warningBorder,
        },
        children: [
          (0, ke.jsx)(ae.Copy, {
            style: { fontSize: 12, lineHeight: 20, color: a.warning },
            children: n,
          }),
          (0, ke.jsxs)(k.default, {
            style: { flexDirection: 'row-reverse', gap: 8 },
            children: [l('yes', i[0]), l('no', i[1])],
          }),
          !!c &&
            (0, ke.jsx)(ae.Copy, {
              style: { fontSize: 11, color: a.muted },
              children: c,
            }),
        ],
      });
    }
    function Xe({
      onPack: e,
      sales: t = [],
      contacts: n,
      pricesEditable: i,
      rights: r,
      base: o,
      item: s,
      products: c,
      movements: a,
      kinds: l,
      businessType: d,
      role: u,
      onEdit: p,
      onRemove: h,
      onDone: f,
    }) {
      const { colors: m } = (0, se.useTheme)(),
        y = 'sold' === s.kind && (r.salePrice ?? r.price),
        g = (0, H.priceVisible)(s, y && !r.price ? { ...r, price: !0 } : r),
        v = (0, H.resolvedProduct)(s, c),
        x = o || v,
        b = (0, H.itemChoice)(s, c),
        S = (0, H.cardWarnings)(g, c, a, void 0, o),
        j = (0, H.reviewPrices)(g, x),
        w = i ? S.find((e) => 'priceChange' === e.type) : void 0,
        C = {
          productId: void 0,
          familyName: void 0,
          brand: void 0,
          needsChoice: void 0,
          candidates: void 0,
          matchedFrom: void 0,
          model: void 0,
          size: void 0,
          color: void 0,
        };
      return (0, ke.jsxs)(k.default, {
        testID: 'voice-card-editor',
        style: { gap: 12 },
        children: [
          (0, ke.jsxs)(k.default, {
            style: { zIndex: 2, gap: 10 },
            children: [
              (0, ke.jsx)(ae.Input, {
                testID: 'voice-card-name',
                accessibilityLabel: E.fa.productName,
                value: s.name,
                maxLength: 100,
                onChangeText: (e) => p({ ...C, name: e }),
              }),
              (0, ke.jsx)(me.ProductSuggest, {
                showCreate: !1,
                products: c,
                value: s.name,
                productId: s.productId,
                onPick: (e) =>
                  p(
                    e
                      ? {
                          ...C,
                          name: e.name,
                          productId: e.id,
                          ...(e.unit ? { unit: e.unit } : {}),
                        }
                      : { productId: void 0 },
                  ),
              }),
              !!s.name.trim() &&
                !v &&
                !b.pending &&
                (0, ke.jsx)(k.default, {
                  testID: 'voice-new-chip',
                  style: {
                    alignSelf: 'flex-end',
                    paddingHorizontal: 10,
                    paddingVertical: 3,
                    borderRadius: 999,
                    backgroundColor: m.accentSoft,
                  },
                  children: (0, ke.jsx)(ae.Copy, {
                    style: { fontSize: 11, lineHeight: 18, color: m.accent },
                    children: (0, je.L)(
                      '\u06a9\u0627\u0644\u0627\u06cc \u062c\u062f\u06cc\u062f',
                    ),
                  }),
                }),
            ],
          }),
          !!s.matchedFrom &&
            !!s.productId &&
            (0, ke.jsx)(ae.Copy, {
              testID: 'voice-card-matched',
              style: { fontSize: 12, color: m.muted },
              children: (0, je.L)(
                '\u0634\u0646\u06cc\u062f\u0647 \u0634\u062f \xab{spoken}\xbb\u061b \u06a9\u0627\u0644\u0627\u06cc \u0645\u0648\u062c\u0648\u062f \u0634\u0645\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u0634\u062f.',
                { spoken: s.matchedFrom },
              ),
            }),
          b.options.length > 0 &&
            (0, ke.jsx)(fe.BrandChoice, {
              name: b.family,
              options: b.options,
              selectedId: s.productId,
              newBrand: s.brand,
              testKey: s.id,
              onPick: (e) =>
                p({
                  familyName: b.family,
                  name: e.name,
                  productId: e.id,
                  brand: void 0,
                  ...(e.unit && !s.unit ? { unit: e.unit } : {}),
                }),
              onNewBrand: (e) =>
                p({
                  familyName: b.family,
                  name: (b.family.trim() + ' ' + e).slice(0, 100),
                  productId: void 0,
                  brand: e,
                }),
            }),
          (0, ke.jsx)(ye.UnitInput, {
            testID: 'voice-card-quantity',
            value: s.quantity,
            onChange: (e) => p({ quantity: e }),
            unit: s.unit || v?.unit || 'piece',
            baseUnit: v?.unit,
            onUnitChange: (e) => p({ unit: e }),
            packSize: v?.packSize,
            packUnit: v?.packUnit,
          }),
          (0, ke.jsx)(ge.MovementKindPicker, {
            value: s.kind || l[0] || 'received',
            onChange: (e) => p({ kind: e }),
            allowed: l,
            businessType: d,
            role: u,
          }),
          'sold' === s.kind &&
            t.length > 0 &&
            (0, ke.jsxs)(k.default, {
              testID: 'voice-card-buyer',
              style: { gap: 6 },
              children: [
                (0, ke.jsx)(ae.Copy, {
                  style: { fontSize: 12, color: m.muted },
                  children: (0, je.L)(
                    '\u0641\u0631\u0648\u062e\u062a\u0647 \u0634\u062f \u0628\u0647',
                  ),
                }),
                (0, ke.jsx)(k.default, {
                  accessibilityRole: 'radiogroup',
                  style: {
                    flexDirection: 'row-reverse',
                    flexWrap: 'wrap',
                    gap: 6,
                  },
                  children: [
                    ...t.map((e, t) => ({
                      index: t,
                      label:
                        (n && (0, J.voiceSaleCustomer)(e, n).target?.name) ||
                        e.customerName?.trim() ||
                        (0, J.saleHeading)(e),
                    })),
                    {
                      index: void 0,
                      label: (0, je.L)(
                        '\u0645\u0634\u062a\u0631\u06cc \u062d\u0636\u0648\u0631\u06cc',
                      ),
                    },
                  ].map((e) => {
                    const n = (0, J.rowSale)(s, t) === (e.index ?? null);
                    return (0, ke.jsx)(
                      I.default,
                      {
                        testID: 'voice-card-buyer-' + (e.index ?? 'walk-in'),
                        accessibilityRole: 'radio',
                        accessibilityState: { checked: n },
                        onPress: () => p({ saleIndex: e.index }),
                        style: {
                          minHeight: 40,
                          paddingHorizontal: 12,
                          borderRadius: 12,
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: n ? m.accent : m.soft,
                        },
                        children: (0, ke.jsx)(ae.Copy, {
                          style: {
                            fontSize: 13,
                            color: n ? m.onAccent : m.text,
                          },
                          children: e.label,
                        }),
                      },
                      String(e.index),
                    );
                  }),
                }),
              ],
            }),
          w &&
            (0, ke.jsx)(Ke, {
              warning: w,
              answer: w.blocking ? void 0 : s.priceChange,
              onAnswer: (e) =>
                p({ priceChange: e, priceChangeFor: w.signature }),
            }),
          S.filter((e) => 'close' === e.type && e.suggestion).map((e) =>
            (0, ke.jsx)(
              V.NearHint,
              {
                testKey: 'voice-warning-near',
                name: e.suggestion.name,
                onUse: () => p((0, H.suggestionPatch)(e.suggestion, c, s)),
              },
              'close',
            ),
          ),
          !!v &&
            (0, H.packAskable)(s.unit, v) &&
            (0, ke.jsx)(Ue, {
              question: (0, H.packQuestionText)(s, v),
              value:
                s.packFor === (0, H.packKey)(v, s.unit) ? s.packSize : void 0,
              onChange: (t) =>
                e
                  ? e(v, s.unit, t)
                  : p({ packSize: t, packFor: (0, H.packKey)(v, s.unit) }),
            }),
          S.filter((e) => 'unitSwitch' === e.type || 'unitNote' === e.type).map(
            (e) =>
              'unitSwitch' === e.type
                ? (0, ke.jsx)(
                    We,
                    {
                      warning: e,
                      item: s,
                      canSwitch: Me(u, xe.activeShop?.access),
                      onEdit: p,
                    },
                    e.type,
                  )
                : (0, ke.jsx)(
                    ae.Copy,
                    {
                      testID: 'voice-unit-note',
                      style: { fontSize: 12, lineHeight: 20, color: m.muted },
                      children: e.text,
                    },
                    e.type,
                  ),
          ),
          S.filter(
            (e) =>
              'new' !== e.type &&
              'price' !== e.type &&
              'priceChange' !== e.type &&
              'close' !== e.type &&
              'pack' !== e.type &&
              'unitSwitch' !== e.type &&
              'unitNote' !== e.type,
          ).map((e) =>
            (0, ke.jsxs)(
              k.default,
              {
                testID: 'voice-warning-' + e.type,
                style: {
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  gap: 8,
                  padding: 10,
                  borderRadius: 12,
                  backgroundColor:
                    'close' === e.type ? 'transparent' : m.danger + '14',
                  borderWidth: 'close' === e.type ? 0 : D.default.hairlineWidth,
                  borderColor: m.danger + '40',
                },
                children: [
                  (0, ke.jsx)(ae.Copy, {
                    style: {
                      flex: 1,
                      fontSize: 12,
                      lineHeight: 20,
                      color: 'close' === e.type ? m.muted : m.danger,
                    },
                    children: e.text,
                  }),
                  'close' === e.type &&
                    e.suggestion &&
                    (0, ke.jsx)(I.default, {
                      testID: 'voice-warning-swap',
                      accessibilityRole: 'button',
                      onPress: () =>
                        p((0, H.suggestionPatch)(e.suggestion, c, s)),
                      style: {
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        borderRadius: 999,
                        backgroundColor: m.surface,
                        borderWidth: D.default.hairlineWidth,
                        borderColor: m.line,
                      },
                      children: (0, ke.jsx)(ae.Copy, {
                        style: { fontSize: 12, color: m.accent },
                        children: H.voiceFa.swap,
                      }),
                    }),
                ],
              },
              e.type,
            ),
          ),
          (i || y) &&
            ('received' === s.kind || 'sold' === s.kind) &&
            (0, ke.jsx)(k.default, {
              style: { gap: 12 },
              children: ('sold' === s.kind
                ? ['price', 'costPrice']
                : ['costPrice', 'price']
              )
                .filter((e) =>
                  'price' === e && 'sold' === s.kind ? y : i && r[e],
                )
                .map((e) => {
                  const t = 'costPrice' === e,
                    n = j[e],
                    i = t
                      ? (0, je.L)(
                          '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f \u0647\u0631 \u0648\u0627\u062d\u062f',
                        )
                      : (0, je.L)(
                          '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634 \u0647\u0631 \u0648\u0627\u062d\u062f',
                        );
                  return (0, ke.jsxs)(
                    k.default,
                    {
                      style: { gap: 6 },
                      children: [
                        (0, ke.jsx)(ae.Copy, {
                          style: { fontSize: 12, color: m.muted },
                          children: i,
                        }),
                        (0, ke.jsx)(ye.MoneyInput, {
                          testID: t ? 'voice-card-cost' : 'voice-card-price',
                          accessibilityLabel: i,
                          placeholder: i,
                          value: void 0 !== n ? String(n) : '',
                          onChange: (t) =>
                            p({
                              ...(0, H.editReviewPrice)(s, e, ze(t), v),
                              ...('price' === e ? { namedPrice: void 0 } : {}),
                            }),
                        }),
                        !t &&
                          !!v &&
                          !1 !== r.salePrice &&
                          (() => {
                            const e = (0, G.voiceChipPrice)(s, v, o);
                            return (
                              null !== e &&
                              (0, ke.jsx)(Q.PriceChoice, {
                                testID: 'voice-card-price-choice',
                                product: (0, G.voiceChipProduct)(v, o),
                                price: e,
                                onPick: (e, t) =>
                                  p((0, G.voicePricePatch)(s, e, t, v, o)),
                              })
                            );
                          })(),
                        void 0 === n &&
                          (0, ke.jsx)(ae.Copy, {
                            testID: 'voice-price-missing',
                            style: {
                              fontSize: 12,
                              lineHeight: 20,
                              color: m.warning,
                            },
                            children: (0, je.L)(
                              '\u0642\u06cc\u0645\u062a \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f \u062a\u0627 \u0633\u0648\u062f \u062f\u0631\u0633\u062a \u062d\u0633\u0627\u0628 \u0634\u0648\u062f.',
                            ),
                          }),
                      ],
                    },
                    e,
                  );
                }),
            }),
          (0, ke.jsxs)(k.default, {
            style: { flexDirection: 'row-reverse', gap: 10 },
            children: [
              (0, ke.jsx)(k.default, {
                style: { flex: 1.4 },
                children: (0, ke.jsx)(ae.Button, {
                  testID: 'voice-edit-done',
                  onPress: f,
                  children: H.voiceFa.doneEdit,
                }),
              }),
              (0, ke.jsx)(k.default, {
                style: { flex: 1 },
                children: (0, ke.jsx)(ae.Button, {
                  testID: 'voice-card-remove',
                  ghost: !0,
                  onPress: h,
                  children: H.voiceFa.removeRow,
                }),
              }),
            ],
          }),
        ],
      });
    }
    function Qe({ item: e, contacts: t, onEdit: n, onRemove: i, onDone: r }) {
      const { colors: o } = (0, se.useTheme)(),
        s = e.ledger,
        c = (0, H.cardWarnings)(e, [], [], t),
        a = (e) => {
          const t = { ...s, ...e };
          n({ ledger: t, name: t.contactName });
        },
        l = { minHeight: 44, paddingVertical: 8 };
      return (0, ke.jsxs)(k.default, {
        testID: 'voice-card-editor',
        style: { gap: 10 },
        children: [
          (0, ke.jsx)(ae.Copy, {
            style: {
              fontSize: 13,
              color: o.accent,
              fontFamily: 'Vazirmatn_600SemiBold',
            },
            children: (0, H.ledgerLabel)(s),
          }),
          (0, ke.jsx)(ae.Input, {
            accessibilityLabel: H.voiceFa.person,
            placeholder: H.voiceFa.person,
            value: s.contactName,
            maxLength: 100,
            onChangeText: (e) => a({ contactName: e, contactId: void 0 }),
            style: l,
          }),
          (0, ke.jsx)(ye.MoneyInput, {
            testID: 'voice-card-amount',
            accessibilityLabel: (0, Ie.shopUnitText)(H.voiceFa.amount),
            placeholder: (0, Ie.shopUnitText)(H.voiceFa.amount),
            value: s.amount,
            onChange: (e) => a({ amount: e }),
            style: l,
          }),
          'cheque' === s.type &&
            (0, ke.jsxs)(k.default, {
              style: { flexDirection: 'row-reverse', gap: 8 },
              children: [
                (0, ke.jsx)(k.default, {
                  style: { flex: 1 },
                  children: (0, ke.jsx)(ae.Input, {
                    placeholder: H.voiceFa.chequeNumber,
                    value: s.chequeNumber || '',
                    maxLength: 80,
                    onChangeText: (e) => a({ chequeNumber: e || void 0 }),
                    style: l,
                  }),
                }),
                (0, ke.jsx)(k.default, {
                  style: { flex: 1 },
                  children: (0, ke.jsx)(ae.Input, {
                    placeholder: H.voiceFa.bank,
                    value: s.bank || '',
                    maxLength: 100,
                    onChangeText: (e) => a({ bank: e || void 0 }),
                    style: l,
                  }),
                }),
              ],
            }),
          (0, ke.jsx)(ae.Input, {
            testID: 'voice-card-note',
            accessibilityLabel: H.voiceFa.noteLabel,
            placeholder:
              H.voiceFa.noteLabel + ' (' + H.voiceFa.notePlaceholder + ')',
            value: s.note || '',
            maxLength: 200,
            onChangeText: (e) => a({ note: e }),
            style: l,
          }),
          'cheque' === s.type &&
            (0, ke.jsxs)(k.default, {
              testID: 'voice-card-due',
              style: { gap: 4 },
              children: [
                (0, ke.jsx)(ae.Copy, {
                  style: { fontSize: 12, color: o.muted },
                  children: H.voiceFa.due,
                }),
                (0, ke.jsx)(oe.JalaliDateField, {
                  dateOnly: !0,
                  id: 'voice-due-' + e.id,
                  value: s.dueDate
                    ? (0, re.isoToParts)(s.dueDate)
                    : (0, re.todayParts)(),
                  onChange: (e) => a({ dueDate: (0, re.partsToIso)(e) }),
                }),
              ],
            }),
          c.map((e) => {
            const t =
              'new' === e.type
                ? o.success
                : 'phone' === e.type
                  ? o.warning
                  : o.danger;
            return (0, ke.jsxs)(
              k.default,
              {
                testID: 'voice-warning-' + e.type,
                style: {
                  gap: 8,
                  padding: 10,
                  borderRadius: 12,
                  backgroundColor: t + '14',
                  borderWidth: D.default.hairlineWidth,
                  borderColor: t + '40',
                },
                children: [
                  (0, ke.jsx)(ae.Copy, {
                    style: { fontSize: 12, lineHeight: 20, color: t },
                    children: e.text,
                  }),
                  !!e.contacts?.length &&
                    (0, ke.jsxs)(k.default, {
                      style: {
                        flexDirection: 'row-reverse',
                        flexWrap: 'wrap',
                        gap: 6,
                      },
                      children: [
                        e.contacts.map((e) =>
                          (0, ke.jsx)(
                            I.default,
                            {
                              accessibilityRole: 'button',
                              onPress: () =>
                                a({ contactId: e.id, contactName: e.name }),
                              style: {
                                paddingHorizontal: 10,
                                paddingVertical: 5,
                                borderRadius: 999,
                                backgroundColor: o.surface,
                                borderWidth: D.default.hairlineWidth,
                                borderColor: o.line,
                              },
                              children: (0, ke.jsx)(ae.Copy, {
                                style: { fontSize: 12, color: o.accent },
                                children: e.name,
                              }),
                            },
                            e.id,
                          ),
                        ),
                        'person' === e.type &&
                          (0, ke.jsx)(I.default, {
                            testID: 'voice-person-new',
                            accessibilityRole: 'button',
                            onPress: () => a({ contactId: re.NEW_CONTACT }),
                            style: {
                              paddingHorizontal: 10,
                              paddingVertical: 5,
                              borderRadius: 999,
                              backgroundColor: o.surface,
                              borderWidth: D.default.hairlineWidth,
                              borderColor: o.line,
                            },
                            children: (0, ke.jsx)(ae.Copy, {
                              style: { fontSize: 12, color: o.success },
                              children: H.voiceFa.makeNew,
                            }),
                          }),
                      ],
                    }),
                  'phone' === e.type &&
                    (0, ke.jsx)(ae.Input, {
                      testID: 'voice-card-phone',
                      accessibilityLabel: (0, je.L)(
                        '\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644 \u0634\u062e\u0635 \u062c\u062f\u06cc\u062f',
                      ),
                      placeholder: (0, je.L)(
                        '\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644 \u0634\u062e\u0635 \u062c\u062f\u06cc\u062f\u060c \u0645\u062b\u0644\u0627\u064b \u06f0\u06f9\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9',
                      ),
                      value: s.contactPhone || '',
                      onChangeText: (e) =>
                        a({
                          contactPhone:
                            (0, x.latinDigits)(e)
                              .replace(/[^0-9]/g, '')
                              .slice(0, 15) || void 0,
                        }),
                      keyboardType: 'phone-pad',
                      inputMode: 'tel',
                      maxLength: 20,
                      ltr: !0,
                      style: l,
                    }),
                ],
              },
              e.type,
            );
          }),
          (0, ke.jsxs)(k.default, {
            style: { flexDirection: 'row-reverse', gap: 10 },
            children: [
              (0, ke.jsx)(k.default, {
                style: { flex: 1.4 },
                children: (0, ke.jsx)(ae.Button, {
                  testID: 'voice-edit-done',
                  onPress: r,
                  children: H.voiceFa.doneEdit,
                }),
              }),
              (0, ke.jsx)(k.default, {
                style: { flex: 1 },
                children: (0, ke.jsx)(ae.Button, {
                  testID: 'voice-card-remove',
                  ghost: !0,
                  onPress: i,
                  children: H.voiceFa.removeRow,
                }),
              }),
            ],
          }),
        ],
      });
    }
    function Ge({ item: e, onEdit: t, onRemove: n, onDone: i }) {
      const { colors: r } = (0, se.useTheme)(),
        o = e.expense,
        s = (0, H.cardWarnings)(e, []),
        c = (e) => {
          const n = { ...o, ...e };
          t({ expense: n, name: n.label });
        },
        a = { minHeight: 44, paddingVertical: 8 };
      return (0, ke.jsxs)(k.default, {
        testID: 'voice-card-editor',
        style: { gap: 10 },
        children: [
          (0, ke.jsx)(k.default, {
            accessibilityRole: 'radiogroup',
            style: { flexDirection: 'row-reverse', flexWrap: 'wrap', gap: 6 },
            children: ne.EXPENSE_CATEGORIES.map((e) => {
              const t = o.category === e;
              return (0, ke.jsx)(
                I.default,
                {
                  testID: 'voice-expense-category-' + e,
                  accessibilityRole: 'radio',
                  accessibilityState: { checked: t },
                  onPress: () => c({ category: e }),
                  style: {
                    minHeight: 40,
                    paddingHorizontal: 12,
                    borderRadius: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: t ? r.accent : r.soft,
                  },
                  children: (0, ke.jsx)(ae.Copy, {
                    style: { fontSize: 13, color: t ? r.onAccent : r.text },
                    children: ne.expenseCategoryFa[e],
                  }),
                },
                e,
              );
            }),
          }),
          (0, ke.jsx)(ae.Input, {
            testID: 'voice-expense-label',
            accessibilityLabel: (0, je.L)(
              '\u0628\u0631\u0627\u06cc \u0686\u0647\u061f',
            ),
            placeholder: (0, je.L)(
              '\u0628\u0631\u0627\u06cc \u0686\u0647\u061f',
            ),
            value: o.label,
            maxLength: 100,
            onChangeText: (e) => c({ label: e }),
            style: a,
          }),
          (0, ke.jsx)(ye.MoneyInput, {
            testID: 'voice-card-amount',
            accessibilityLabel: (0, Ie.shopUnitText)(H.voiceFa.amount),
            placeholder: (0, Ie.shopUnitText)(H.voiceFa.amount),
            value: o.amount,
            onChange: (e) => c({ amount: e }),
            style: a,
          }),
          (0, ke.jsx)(ae.Input, {
            testID: 'voice-card-note',
            accessibilityLabel: H.voiceFa.noteLabel,
            placeholder:
              H.voiceFa.noteLabel + ' (' + H.voiceFa.notePlaceholder + ')',
            value: o.note || '',
            maxLength: 200,
            onChangeText: (e) => c({ note: e }),
            style: a,
          }),
          s.map((e) =>
            (0, ke.jsx)(
              ae.Copy,
              {
                testID: 'voice-warning-' + e.type,
                style: { fontSize: 12, lineHeight: 20, color: r.danger },
                children: e.text,
              },
              e.type,
            ),
          ),
          (0, ke.jsx)(ae.Copy, {
            style: { fontSize: 11, lineHeight: 17, color: r.muted },
            children: (0, je.L)(
              '\u0628\u0627 \u062a\u0623\u06cc\u06cc\u062f\u060c \u0627\u0645\u0631\u0648\u0632 \u0648 \u0646\u0642\u062f\u06cc \u062f\u0631 \xab\u0647\u0632\u06cc\u0646\u0647\u200c\u0647\u0627\xbb \u062b\u0628\u062a \u0645\u06cc\u200c\u0634\u0648\u062f.',
            ),
          }),
          (0, ke.jsxs)(k.default, {
            style: { flexDirection: 'row-reverse', gap: 10 },
            children: [
              (0, ke.jsx)(k.default, {
                style: { flex: 1.4 },
                children: (0, ke.jsx)(ae.Button, {
                  testID: 'voice-edit-done',
                  onPress: i,
                  children: H.voiceFa.doneEdit,
                }),
              }),
              (0, ke.jsx)(k.default, {
                style: { flex: 1 },
                children: (0, ke.jsx)(ae.Button, {
                  testID: 'voice-card-remove',
                  ghost: !0,
                  onPress: n,
                  children: H.voiceFa.removeRow,
                }),
              }),
            ],
          }),
        ],
      });
    }
  },
  786,
  [
    2, 342, 613, 620, 622, 787, 789, 790, 439, 779, 433, 440, 217, 92, 203, 196,
    224, 210, 94, 232, 17, 99, 257, 515, 380, 492, 587, 549, 592, 588, 793, 692,
    794, 534, 465, 795, 582, 796, 590, 519, 797, 788, 798, 799, 800, 654, 525,
    801, 627, 522, 443, 442, 529, 619, 382, 414, 407, 690, 385, 539, 533, 824,
    695, 694, 614, 696, 580, 415, 707, 591, 311, 586, 452, 435, 473, 338,
  ],
);
