// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 554; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, _a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'STORE_KEY', {
        enumerable: !0,
        get: function () {
          return E;
        },
      }),
      (_e.Funnel = function ({
        onLogin: e,
        onBack: r,
        onSession: j,
        onEnter: W,
        onExplore: G,
        passwordSignup: Q = !1,
        emailCodes: X = !1,
        google: U = null,
        ready: q = !0,
      }) {
        const { colors: Y, mode: J } = (0, S.useTheme)(),
          $ = (0, h.useSafeAreaInsets)(),
          { width: Z } = (0, c.default)(),
          ee = Z < 360,
          te = (0, b.useReducedMotion)(),
          [ne, ie] = (0, t.useState)('intro'),
          [oe, re] = (0, t.useState)(k.emptyAnswers),
          [le, se] = (0, t.useState)(!1),
          [ae, de] = (0, t.useState)(''),
          [ce, ue] = (0, t.useState)(!1),
          [he, fe] = (0, t.useState)(!1),
          pe = Q && !he,
          [ge, me] = (0, t.useState)(''),
          [ye, xe] = (0, t.useState)('idle'),
          [be, je] = (0, t.useState)(w.codeLength),
          [Se, Ce] = (0, t.useState)(''),
          [ve, we] = (0, t.useState)(''),
          [Ie, Re] = (0, t.useState)(0),
          [ke, ze] = (0, t.useState)(''),
          [De, He] = (0, t.useState)(''),
          [Pe, Te] = (0, t.useState)(0),
          [Ee, Fe] = (0, t.useState)(!1),
          [Le, Ae] = (0, t.useState)(''),
          [Ve, Ne] = (0, t.useState)(null),
          [We, Me] = (0, t.useState)(''),
          [Be, Oe] = (0, t.useState)(!1),
          Ge = (0, t.useRef)(new n.default.Value(1)).current,
          Ke = (0, t.useRef)(new n.default.Value(0)).current,
          Qe = (0, t.useRef)(new n.default.Value(0)).current,
          Xe = (0, t.useRef)(null),
          Ue = (0, t.useRef)(!1),
          qe = (0, t.useRef)(null),
          [Ye, Je] = (0, t.useState)(!1),
          $e = (0, t.useRef)(null),
          Ze = (0, t.useRef)(''),
          et = (0, t.useRef)(null),
          [tt, nt] = (0, t.useState)(!1),
          [it, ot] = (0, t.useState)(!1),
          rt = tt || it,
          lt = (e) => {
            (re((t) => ({ ...t, ...e })), de(''));
          },
          [st, at] = (0, t.useState)(U?.ticket ? 'google' : 'phone'),
          [dt, ct] = (0, t.useState)(''),
          [ut, ht] = (0, t.useState)(0),
          ft = X && 'email' === st,
          pt = !!U && 'google' === st,
          gt = (pt && U?.ticket) || null;
        function mt(e) {
          (de(''), ie(e));
        }
        function yt() {
          if (
            !(ce || ('success' === ye && !rt) || Ye) &&
            'intro' !== ne &&
            'done' !== ne
          ) {
            if ('field' !== ne)
              return 'code' === ne
                ? (rt && zt(), void mt('phone'))
                : void mt((0, k.previousStep)(ne));
            mt('intro');
          }
        }
        ((0, t.useEffect)(() => {
          let e = !0;
          return (
            f.default
              .getItem(E)
              .then((t) => {
                if (!e || !t) return;
                const n = JSON.parse(t);
                re((0, k.restoreAnswers)(n?.answers));
                const i = k.PROGRESS_STEPS.includes(n?.step) ? n.step : 'intro';
                ie('code' === i ? 'phone' : i);
              })
              .catch(() => {})
              .finally(() => {
                e && se(!0);
              }),
            () => {
              e = !1;
            }
          );
        }, []),
          (0, t.useEffect)(() => {
            le &&
              'done' !== ne &&
              f.default
                .setItem(E, JSON.stringify({ step: ne, answers: oe }))
                .catch(() => {});
          }, [le, ne, oe]),
          (0, t.useEffect)(() => {
            Xe.current?.scrollTo({ y: 0, animated: !1 });
            const e = (0, k.progressOf)(ne) / k.PROGRESS_STEPS.length;
            if (te) return (Ge.setValue(1), void Ke.setValue(e));
            Ge.setValue(0);
            const t = n.default.parallel([
              n.default.timing(Ge, {
                toValue: 1,
                duration: 260,
                easing: i.default.out(i.default.cubic),
                useNativeDriver: !1,
              }),
              n.default.timing(Ke, {
                toValue: e,
                duration: 360,
                easing: i.default.out(i.default.cubic),
                useNativeDriver: !1,
              }),
            ]);
            return (t.start(), () => t.stop());
          }, [ne, te, Ge, Ke]),
          (0, t.useEffect)(() => {
            if ('done' !== ne) return void Qe.setValue(0);
            const e = n.default.spring(Qe, {
              toValue: 1,
              friction: 5,
              tension: 90,
              useNativeDriver: !1,
            });
            return (te ? Qe.setValue(1) : e.start(), () => e.stop());
          }, [ne, te, Qe]),
          (0, t.useEffect)(() => {
            if (Ie <= 0) return;
            const e = setTimeout(() => Re((e) => e - 1), 1e3);
            return () => clearTimeout(e);
          }, [Ie]),
          (0, R.useSmsCode)({
            enabled: 'code' === ne && 'success' !== ye && ge.length < be,
            length: be,
            attempt: Pe,
            onCode: He,
          }),
          (0, t.useEffect)(() => {
            'code' !== ne && He('');
          }, [ne]),
          (0, t.useEffect)(() => {}, [ne, ce, ye, Ye, r, rt]));
        const xt = (0, k.displayName)(oe.title, oe.personName);
        async function bt() {
          if (Ue.current) return;
          const e = dt.trim().toLowerCase();
          if (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e)) {
            if (ke === e && Ie > 0)
              return (me(''), xe('idle'), void mt('code'));
            ((Ue.current = !0), ue(!0), de(''));
            try {
              const t = await (0, I.otpCall)('/v1/auth/email/start', {
                email: e,
                name: xt || oe.personName.trim() || 'myAnbari',
              }).catch(() => null);
              if (t?.ok)
                return (
                  je(Number(t.data?.codeLength) || w.codeLength),
                  we(t.data?.test ? String(t.data.testCode || '') : ''),
                  Ce(String(t.data?.masked || e)),
                  Re(Number(t.data?.resendAfter) || 90),
                  ze(e),
                  me(''),
                  xe('idle'),
                  He(''),
                  (Ze.current = ''),
                  ($e.current = null),
                  nt(!1),
                  Fe(!1),
                  Ae(''),
                  void mt('code')
                );
              if ('otp_too_soon' === t?.code)
                return (
                  Re(Number((0, I.otpDetail)(t, 'retryAfter')) || 90),
                  ke === e ? void mt('code') : void de(T.tooSoon)
                );
              de(
                t && 'backend_missing' !== t.code
                  ? 'invalid_request' === t.code
                    ? T.emailInvalid
                    : (0, C.message)(Error(t.code))
                  : T.unavailable,
              );
            } finally {
              ((Ue.current = !1), ue(!1));
            }
          } else de(T.emailInvalid);
        }
        async function jt() {
          if (ft) return void (await bt());
          if (Ue.current) return;
          if (!(0, I.isMobile)(oe.phone)) return void de(T.phoneInvalid);
          const e = (0, I.toE164)(oe.phone);
          if (ke === e && Ie > 0) return (me(''), xe('idle'), void mt('code'));
          ((Ue.current = !0), ue(!0), de(''));
          try {
            const t = await (0, I.otpCall)('/v1/auth/phone/start', {
              phone: e,
              name: xt || oe.personName.trim() || 'myAnbari',
            }).catch(() => null);
            if (t?.ok)
              return (
                je(Number(t.data?.codeLength) || w.codeLength),
                we(t.data?.test ? String(t.data.testCode || '') : ''),
                Ce(
                  t.data?.masked
                    ? (0, I.persianDigits)(String(t.data.masked))
                    : (0, I.maskPhone)(oe.phone),
                ),
                Re(Number(t.data?.resendAfter) || 90),
                ze(e),
                me(''),
                xe('idle'),
                He(''),
                (Ze.current = ''),
                ($e.current = null),
                nt(!1),
                Te((e) => e + 1),
                Fe(!1),
                Ae(''),
                void mt('code')
              );
            if ('otp_too_soon' === t?.code)
              return (
                Re(Number((0, I.otpDetail)(t, 'retryAfter')) || 90),
                ke === e
                  ? (Te((e) => e + 1), void mt('code'))
                  : void de(T.tooSoon)
              );
            de(
              t && 'backend_missing' !== t.code
                ? 'invalid_phone' === t.code
                  ? T.phoneInvalid
                  : (0, C.message)(Error(t.code))
                : T.unavailable,
            );
          } finally {
            ((Ue.current = !1), ue(!1));
          }
        }
        async function St() {
          if (!Ue.current && ke) {
            ((Ue.current = !0), ue(!0), de(''));
            try {
              const e = await (0, I.requestVoiceCall)(ke).catch(() => null);
              if (e?.ok)
                return (
                  Fe(!0),
                  void Ae(
                    e.data?.test
                      ? _(T.voiceTest, {
                          code: (0, I.persianDigits)(
                            String(e.data.testCode || ''),
                          ),
                        })
                      : _(T.voiceCalling, { phone: '\u2066' + Se + '\u2069' }),
                  )
                );
              if ('otp_too_soon' === e?.code)
                return (
                  Re(Number((0, I.otpDetail)(e, 'retryAfter')) || 30),
                  void de(T.voiceWait)
                );
              de(
                e && 'backend_missing' !== e.code
                  ? 'otp_expired' === e.code
                    ? T.codeExpired
                    : (0, C.message)(Error(e.code))
                  : T.unavailable,
              );
            } finally {
              ((Ue.current = !1), ue(!1));
            }
          }
        }
        async function Ct(e) {
          if (!Ue.current && U) {
            ((Ue.current = !0), ue(!0), de(''));
            try {
              const t = await U.onGoogle(e),
                n = await j(t, oe);
              (Ne(n),
                await f.default.removeItem(E).catch(() => {}),
                mt('done'));
            } catch (e) {
              de((0, C.message)(e));
            } finally {
              ((Ue.current = !1), ue(!1));
            }
          }
        }
        const vt = (0, t.useRef)(Ct);
        vt.current = Ct;
        const wt = (0, t.useCallback)((e) => {
            vt.current({ credential: e });
          }, []),
          It = (0, t.useCallback)(() => de(T.googleOff), []);
        async function Rt() {
          if (Ue.current) return;
          if (!qe.current && !(0, I.isMobile)(oe.phone))
            return void de(T.phoneInvalid);
          if (!qe.current && We.length < 10) return void de(T.passwordShort);
          ((Ue.current = !0), ue(!0), de(''));
          let e = !1;
          try {
            if (!qe.current) {
              const t = (0, I.toE164)(oe.phone),
                n = await (0, I.otpCall)('/v1/auth/phone/register', {
                  phone: t,
                  name: xt || oe.personName.trim() || 'myAnbari',
                  password: We,
                  deviceName: 'myAnbari',
                }).catch(() => null);
              if ('not_enabled' === n?.code) return ((e = !0), void fe(!0));
              if (!n?.ok)
                return void de(
                  n && 'backend_missing' !== n.code
                    ? 'invalid_phone' === n.code
                      ? T.phoneInvalid
                      : 'registration_unavailable' === n.code
                        ? T.phoneTaken
                        : 'invalid_request' === n.code
                          ? T.passwordShort
                          : (0, C.message)(Error(n.code))
                    : T.unavailable,
                );
              ((qe.current = { phone: t, session: n.data }), Je(!0));
            }
            try {
              const e = await j(qe.current.session, oe);
              (Ne(e),
                Me(''),
                (qe.current = null),
                await f.default.removeItem(E).catch(() => {}),
                mt('done'));
            } catch (e) {
              de(_(T.madeRetry, { reason: (0, C.message)(e) }));
            }
          } finally {
            ((Ue.current = !1), ue(!1), e && (await jt()));
          }
        }
        async function kt(e) {
          let t = null;
          for (let n = 0; n < 3; n++) {
            n && (await new Promise((e) => setTimeout(e, 1500 * n)));
            try {
              const t = await j(e, oe);
              return (
                ($e.current = null),
                nt(!1),
                Ne(t),
                await f.default.removeItem(E).catch(() => {}),
                void setTimeout(() => mt('done'), te ? 0 : 350)
              );
            } catch (e) {
              if (
                ((t = e),
                e instanceof C.ApiError && e.status >= 400 && e.status < 500)
              )
                break;
            }
          }
          (0, C.reportError)(t, { where: 'funnel-finish' });
          const n = t instanceof C.ApiError ? t.status : 0,
            i = t instanceof Error ? t.message : '';
          if (
            401 === n ||
            403 === n ||
            ['session_ended', 'unauthorized', 'rate_limited'].includes(i)
          )
            return (
              zt(401 !== n && 'session_ended' !== i),
              void de((0, C.message)(t))
            );
          (nt(!0),
            de(
              _(!1 === e.signedUp ? T.finishFailedLogin : T.finishFailed, {
                reason: (0, C.message)(t),
              }),
            ));
        }
        function zt(e = !0) {
          ($e.current &&
            (e &&
              (et.current = (0, C.request)('/v1/auth/logout', 'POST').catch(
                () => {},
              )),
            (0, C.storeToken)(null).catch(() => {})),
            ($e.current = null),
            nt(!1),
            ot(!1),
            xe('idle'),
            me(''),
            He(''));
        }
        async function Dt() {
          (qe.current &&
            (($e.current = qe.current.session), (qe.current = null), Je(!1)),
            $e.current && zt());
          const t = et.current;
          (t &&
            (await Promise.race([t, new Promise((e) => setTimeout(e, 4e3))]),
            (et.current = null)),
            e());
        }
        async function Ht() {
          if (!Ue.current && $e.current) {
            ((Ue.current = !0), ue(!0), de(''));
            try {
              await kt($e.current);
            } finally {
              ((Ue.current = !1), ue(!1));
            }
          }
        }
        async function Pt() {
          if (!Ue.current && $e.current) {
            ((Ue.current = !0), ue(!0), de(''), ot(!1));
            try {
              await kt($e.current);
            } finally {
              ((Ue.current = !1), ue(!1));
            }
          }
        }
        async function Tt(e) {
          if (Ue.current || 'success' === ye) return;
          const t = (0, I.latinDigits)(e);
          if (Ze.current && t === Ze.current)
            return (xe('error'), me(''), He(''), void de(T.codeUsed));
          ((Ue.current = !0), ue(!0), de(''));
          try {
            et.current && (await et.current, (et.current = null));
            const e = await (0, I.otpCall)('/v1/auth/otp/verify', {
              ...(ke.includes('@')
                ? { target: 'email', email: ke }
                : { target: 'phone', phone: ke }),
              purpose: 'start',
              code: t,
              deviceName: 'myAnbari',
            }).catch(() => null);
            if (!e?.ok) {
              if (
                (xe('error'),
                me(''),
                He(''),
                ('device_limit' !== e?.code &&
                  'device_limit_plan' !== e?.code) ||
                  (Ze.current = t),
                'otp_invalid' === e?.code)
              ) {
                const t = Number((0, I.otpDetail)(e, 'attemptsLeft'));
                de(
                  Number.isFinite(t)
                    ? _(T.codeWrongLeft, { left: (0, I.persianDigits)(t) })
                    : T.codeWrong,
                );
              } else
                de(
                  'otp_expired' === e?.code
                    ? T.codeExpired
                    : 'otp_locked' === e?.code
                      ? T.codeLocked
                      : e && 'backend_missing' !== e.code
                        ? (0, C.message)(Error(e.code))
                        : T.unavailable,
                );
              return;
            }
            if (
              (xe('success'),
              ($e.current = e.data),
              (Ze.current = t),
              !ke.includes('@') && !1 === e.data?.signedUp)
            )
              return void ot(!0);
            await kt(e.data);
          } finally {
            ((Ue.current = !1), ue(!1));
          }
        }
        function _t() {
          if ((0, k.canLeave)(ne, oe) && !ce) {
            if ('phone' === ne) {
              if (!q) return;
              return pt
                ? void (gt && Ct({ ticket: gt.ticket }))
                : void (pe && !ft ? Rt() : jt());
            }
            'done' !== ne
              ? 'heard' === ne && G
                ? G(oe)
                : mt((0, k.nextStep)(ne))
              : W();
          }
        }
        const Et = ee ? 16 : 20,
          Ft = 'light' === J,
          Lt = Ge.interpolate({ inputRange: [0, 1], outputRange: [28, 0] }),
          At = 'intro' !== ne && 'done' !== ne,
          Vt = (0, k.progressOf)(ne),
          Nt = (() => {
            switch (ne) {
              case 'intro':
                return (0, P.jsxs)(a.default, {
                  style: {
                    flex: 1,
                    justifyContent: 'center',
                    gap: 22,
                    paddingVertical: 24,
                  },
                  children: [
                    (0, P.jsxs)(a.default, {
                      style: { alignItems: 'center', gap: 14 },
                      children: [
                        (0, P.jsx)(a.default, {
                          style: {
                            width: 112,
                            height: 112,
                            borderRadius: 36,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: Y.accentSoft,
                          },
                          children: (0, P.jsx)(x.BrandMark, {
                            size: 84,
                            tone: 'blue',
                          }),
                        }),
                        (0, P.jsx)(p.Copy, {
                          style: {
                            fontSize: 30,
                            lineHeight: 44,
                            fontFamily: 'Vazirmatn_700Bold',
                            textAlign: 'center',
                          },
                          children: (0, z.L)(
                            '\u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc',
                          ),
                        }),
                      ],
                    }),
                    (0, P.jsxs)(F, {
                      bare: !0,
                      children: [
                        (0, P.jsx)(p.Copy, {
                          style: {
                            fontSize: 17,
                            lineHeight: 27,
                            fontFamily: 'Vazirmatn_700Bold',
                          },
                          children: T.introHello,
                        }),
                        (0, P.jsx)(p.Copy, {
                          style: {
                            fontSize: 15,
                            lineHeight: 25,
                            color: Y.muted,
                          },
                          children: T.introBody,
                        }),
                      ],
                    }),
                    (0, P.jsx)(M, {}),
                  ],
                });
              case 'field':
                return (0, P.jsxs)(P.Fragment, {
                  children: [
                    (0, P.jsx)(F, {
                      children: (0, P.jsx)(L, { children: T.field }),
                    }),
                    (0, P.jsx)(a.default, {
                      accessibilityRole: 'radiogroup',
                      style: {
                        flexDirection: 'row-reverse',
                        flexWrap: 'wrap',
                        gap: ee ? 8 : 10,
                      },
                      children: v.SHOP_FIELDS.map((e) =>
                        (0, P.jsx)(
                          V,
                          {
                            testID: 'funnel-field-' + e.id,
                            label: (0, z.L)(e.label),
                            selected: oe.fieldId === e.id,
                            onPress: () =>
                              lt({
                                fieldId: e.id,
                                ...('other' !== e.id
                                  ? { customField: '' }
                                  : {}),
                              }),
                          },
                          e.id,
                        ),
                      ),
                    }),
                    (0, P.jsx)(p.Input, {
                      testID: 'funnel-field-custom',
                      accessibilityLabel: T.fieldCustom,
                      placeholder: T.fieldCustom,
                      maxLength: v.FIELD_TEXT_MAX,
                      returnKeyType: 'next',
                      value: oe.customField,
                      onFocus: () =>
                        setTimeout(
                          () => Xe.current?.scrollToEnd({ animated: !0 }),
                          250,
                        ),
                      onChangeText: (e) =>
                        lt({
                          customField: e,
                          ...(e.trim() ? { fieldId: 'other' } : {}),
                        }),
                      onSubmitEditing: _t,
                      style: {
                        height: 50,
                        fontSize: 15,
                        borderRadius: 14,
                        paddingHorizontal: 14,
                      },
                    }),
                  ],
                });
              case 'role':
                return (0, P.jsxs)(P.Fragment, {
                  children: [
                    (0, P.jsx)(F, {
                      children: (0, P.jsx)(L, { children: T.role }),
                    }),
                    (0, P.jsx)(a.default, {
                      accessibilityRole: 'radiogroup',
                      style: { gap: 10 },
                      children: k.ROLES.map((e) =>
                        (0, P.jsx)(
                          A,
                          {
                            testID: 'funnel-role-' + e.id,
                            label: e.label,
                            emoji: e.emoji,
                            selected: oe.role === e.id,
                            onPress: () => lt({ role: e.id }),
                          },
                          e.id,
                        ),
                      ),
                    }),
                  ],
                });
              case 'method':
                return (0, P.jsxs)(P.Fragment, {
                  children: [
                    (0, P.jsx)(F, {
                      children: (0, P.jsx)(L, { children: T.method }),
                    }),
                    (0, P.jsx)(a.default, {
                      accessibilityRole: 'radiogroup',
                      style: { gap: 10 },
                      children: k.STOCK_METHODS.map((e) =>
                        (0, P.jsx)(
                          A,
                          {
                            testID: 'funnel-method-' + e.id,
                            label: e.label,
                            emoji: e.emoji,
                            selected: oe.stockMethod === e.id,
                            onPress: () => lt({ stockMethod: e.id }),
                          },
                          e.id,
                        ),
                      ),
                    }),
                  ],
                });
              case 'goals':
                return (0, P.jsxs)(P.Fragment, {
                  children: [
                    (0, P.jsxs)(F, {
                      children: [
                        (0, P.jsx)(L, { children: T.goals }),
                        (0, P.jsx)(p.Copy, {
                          style: {
                            fontSize: 13,
                            lineHeight: 20,
                            color: Y.muted,
                          },
                          children: T.goalsHint,
                        }),
                      ],
                    }),
                    (0, P.jsx)(a.default, {
                      style: { gap: 10 },
                      children: k.GOALS.map((e) =>
                        (0, P.jsx)(
                          A,
                          {
                            multi: !0,
                            testID: 'funnel-goal-' + e.id,
                            label: e.label,
                            emoji: e.emoji,
                            selected: oe.goals.includes(e.id),
                            onPress: () =>
                              lt({ goals: (0, k.toggleGoal)(oe.goals, e.id) }),
                          },
                          e.id,
                        ),
                      ),
                    }),
                  ],
                });
              case 'plan': {
                const e = (0, k.planPromises)(oe.goals),
                  t = (0, k.fieldLabel)(oe);
                return (0, P.jsxs)(P.Fragment, {
                  children: [
                    (0, P.jsxs)(F, {
                      children: [
                        (0, P.jsx)(L, { children: T.planTitle }),
                        !!t &&
                          (0, P.jsxs)(p.Copy, {
                            style: {
                              fontSize: 14,
                              lineHeight: 22,
                              color: Y.muted,
                            },
                            children: [
                              _(T.planFor, { field: t }),
                              ' \xb7 ',
                              k.ROLES.find((e) => e.id === oe.role)?.label ||
                                '',
                            ],
                          }),
                      ],
                    }),
                    (0, P.jsxs)(a.default, {
                      style: {
                        borderRadius: 20,
                        padding: 18,
                        gap: 14,
                        backgroundColor: Y.surface,
                        borderWidth: s.default.hairlineWidth,
                        borderColor: Y.line,
                      },
                      children: [
                        (0, P.jsx)(p.Copy, {
                          style: {
                            fontSize: 15,
                            lineHeight: 24,
                            fontFamily: 'Vazirmatn_600SemiBold',
                          },
                          children: (0, z.L)(
                            '{method} \u0628\u0627 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc:',
                            { method: (0, k.methodLine)(oe.stockMethod) },
                          ),
                        }),
                        e.map((e, t) =>
                          (0, P.jsx)(
                            O,
                            { text: e, delay: te ? 0 : 180 + 160 * t },
                            e,
                          ),
                        ),
                      ],
                    }),
                  ],
                });
              }
              case 'title':
                return (0, P.jsxs)(P.Fragment, {
                  children: [
                    (0, P.jsx)(F, {
                      children: (0, P.jsx)(L, { children: T.title }),
                    }),
                    (0, P.jsx)(a.default, {
                      accessibilityRole: 'radiogroup',
                      style: { flexDirection: 'row-reverse', gap: 12 },
                      children: k.TITLES.map((e) => {
                        const t = oe.title === e.id;
                        return (0, P.jsxs)(
                          l.default,
                          {
                            testID: 'funnel-title-' + e.id,
                            accessibilityRole: 'radio',
                            accessibilityState: { selected: t, checked: t },
                            onPress: () => lt({ title: e.id }),
                            style: ({ pressed: e }) => ({
                              flex: 1,
                              height: 150,
                              borderRadius: 20,
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: 8,
                              borderWidth: t ? 2 : 2 * s.default.hairlineWidth,
                              borderColor: t ? Y.accent : Y.line,
                              backgroundColor: t ? Y.accentSoft : Y.surface,
                              transform: [{ scale: e ? 0.97 : 1 }],
                            }),
                            children: [
                              (0, P.jsx)(p.Copy, {
                                style: {
                                  fontSize: 48,
                                  lineHeight: 60,
                                  textAlign: 'center',
                                },
                                children: e.emoji,
                              }),
                              (0, P.jsx)(p.Copy, {
                                style: {
                                  fontSize: 18,
                                  lineHeight: 26,
                                  fontFamily: 'Vazirmatn_700Bold',
                                  textAlign: 'center',
                                },
                                children: e.label,
                              }),
                            ],
                          },
                          e.id,
                        );
                      }),
                    }),
                  ],
                });
              case 'name':
                return (0, P.jsxs)(P.Fragment, {
                  children: [
                    (0, P.jsx)(F, {
                      children: (0, P.jsx)(L, {
                        children: xt
                          ? _(T.nameHello, {
                              name: (0, k.greetingName)(
                                oe.title,
                                oe.personName,
                              ),
                            })
                          : T.name,
                      }),
                    }),
                    (0, P.jsx)(
                      p.Input,
                      {
                        testID: 'funnel-name',
                        autoFocus: !0,
                        accessibilityLabel: T.name,
                        placeholder: T.namePlaceholder,
                        maxLength: k.PERSON_NAME_MAX,
                        autoComplete: 'name',
                        textContentType: 'name',
                        returnKeyType: 'next',
                        value: oe.personName,
                        onChangeText: (e) => lt({ personName: e }),
                        onSubmitEditing: _t,
                        style: {
                          height: 58,
                          fontSize: 18,
                          borderRadius: 16,
                          paddingHorizontal: 16,
                        },
                      },
                      'funnel-name',
                    ),
                  ],
                });
              case 'shop':
                return (0, P.jsxs)(P.Fragment, {
                  children: [
                    (0, P.jsx)(F, {
                      children: (0, P.jsx)(L, { children: T.shop }),
                    }),
                    (0, P.jsx)(
                      p.Input,
                      {
                        testID: 'funnel-shop',
                        autoFocus: !0,
                        accessibilityLabel: T.shop,
                        placeholder: T.shopPlaceholder,
                        maxLength: v.SHOP_NAME_MAX,
                        returnKeyType: 'next',
                        value: oe.shopName,
                        onChangeText: (e) => lt({ shopName: e }),
                        onSubmitEditing: _t,
                        style: {
                          height: 58,
                          fontSize: 18,
                          borderRadius: 16,
                          paddingHorizontal: 16,
                        },
                      },
                      'funnel-shop',
                    ),
                  ],
                });
              case 'heard':
                return (0, P.jsxs)(P.Fragment, {
                  children: [
                    (0, P.jsx)(F, {
                      children: (0, P.jsx)(L, { children: T.heard }),
                    }),
                    (0, P.jsx)(a.default, {
                      accessibilityRole: 'radiogroup',
                      style: {
                        flexDirection: 'row-reverse',
                        flexWrap: 'wrap',
                        gap: ee ? 8 : 10,
                      },
                      children: v.HEARD_FROM.map((e) =>
                        (0, P.jsx)(
                          V,
                          {
                            testID: 'funnel-heard-' + e.id,
                            label: (0, z.L)(e.label),
                            selected: oe.heardFrom === e.id,
                            onPress: () =>
                              lt({
                                heardFrom: oe.heardFrom === e.id ? null : e.id,
                              }),
                          },
                          e.id,
                        ),
                      ),
                    }),
                  ],
                });
              case 'phone':
                return (0, P.jsxs)(P.Fragment, {
                  children: [
                    (0, P.jsxs)(F, {
                      children: [
                        (0, P.jsx)(L, {
                          children: pt
                            ? gt
                              ? T.googleTicketQuestion
                              : T.googleQuestion
                            : ft
                              ? T.emailQuestion
                              : T.phone,
                        }),
                        (0, P.jsx)(p.Copy, {
                          style: {
                            fontSize: 13,
                            lineHeight: 21,
                            color: Y.muted,
                          },
                          children: pt
                            ? T.googleHint
                            : ft
                              ? T.emailHint
                              : pe
                                ? T.phoneHintPassword
                                : T.phoneHint,
                        }),
                      ],
                    }),
                    (X || !!U) &&
                      (0, P.jsxs)(a.default, {
                        accessibilityRole: 'radiogroup',
                        style: {
                          flexDirection: 'row-reverse',
                          justifyContent: 'center',
                          gap: 8,
                        },
                        children: [
                          (0, P.jsx)(V, {
                            testID: 'funnel-via-phone',
                            label: T.viaPhone,
                            selected: 'phone' === st,
                            onPress: () => {
                              Ye || ce || (at('phone'), de(''));
                            },
                          }),
                          !!U &&
                            (0, P.jsx)(V, {
                              testID: 'funnel-via-google',
                              label: T.viaGoogle,
                              selected: pt,
                              onPress: () => {
                                Ye || ce || (at('google'), de(''));
                              },
                            }),
                          X &&
                            (0, P.jsx)(V, {
                              testID: 'funnel-via-email',
                              label: T.viaEmail,
                              selected: ft,
                              onPress: () => {
                                Ye || ce || (at('email'), de(''));
                              },
                            }),
                        ],
                      }),
                    pt
                      ? gt
                        ? (0, P.jsxs)(a.default, {
                            testID: 'funnel-google-ticket',
                            style: {
                              flexDirection: 'row-reverse',
                              direction: (0, D.flipped)() ? 'rtl' : 'ltr',
                              alignItems: 'center',
                              gap: 10,
                              height: 58,
                              borderRadius: 16,
                              borderWidth: 2 * s.default.hairlineWidth,
                              borderColor: Y.line,
                              backgroundColor: Ft
                                ? '#fff'
                                : 'rgba(255,255,255,.06)',
                              paddingHorizontal: 12,
                            },
                            children: [
                              (0, P.jsx)(a.default, {
                                style: {
                                  width: 34,
                                  height: 34,
                                  borderRadius: 17,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  backgroundColor: Y.soft,
                                },
                                children: (0, P.jsx)(y.Icon, {
                                  name: 'mail',
                                  size: 18,
                                  color: Y.text,
                                }),
                              }),
                              (0, P.jsx)(p.Copy, {
                                style: {
                                  flex: 1,
                                  minWidth: 0,
                                  fontSize: 16,
                                  lineHeight: 24,
                                  fontFamily: 'Vazirmatn_600SemiBold',
                                },
                                children: '\u2066' + gt.email + '\u2069',
                              }),
                            ],
                          })
                        : (0, P.jsx)(a.default, {
                            testID: 'funnel-google',
                            onLayout: (e) =>
                              ht(Math.round(e.nativeEvent.layout.width)),
                            pointerEvents: ce ? 'none' : 'auto',
                            style: {
                              minHeight: 44,
                              alignItems: 'center',
                              justifyContent: 'center',
                              opacity: ce ? 0.5 : 1,
                            },
                            children:
                              ut > 0 &&
                              !!U &&
                              (0, P.jsx)(H.GoogleButton, {
                                clientId: U.clientId,
                                text: 'continue_with',
                                width: Math.max(200, Math.min(400, ut)),
                                onCredential: wt,
                                onError: It,
                              }),
                          })
                      : (0, P.jsxs)(P.Fragment, {
                          children: [
                            (0, P.jsxs)(a.default, {
                              style: {
                                flexDirection: 'row-reverse',
                                direction: (0, D.flipped)() ? 'rtl' : 'ltr',
                                alignItems: 'center',
                                gap: 10,
                                height: 58,
                                borderRadius: 16,
                                borderWidth: 2 * s.default.hairlineWidth,
                                borderColor:
                                  ae && ae !== T.passwordShort
                                    ? Y.danger
                                    : Y.line,
                                backgroundColor: Ft
                                  ? '#fff'
                                  : 'rgba(255,255,255,.06)',
                                paddingHorizontal: 12,
                              },
                              children: [
                                (0, P.jsx)(a.default, {
                                  style: {
                                    width: 34,
                                    height: 34,
                                    borderRadius: 17,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: Y.soft,
                                  },
                                  children: (0, P.jsx)(y.Icon, {
                                    name: ft ? 'mail' : 'phone',
                                    size: 18,
                                    color: Y.text,
                                  }),
                                }),
                                ft
                                  ? (0, P.jsx)(
                                      p.Input,
                                      {
                                        ltr: !0,
                                        testID: 'funnel-email',
                                        autoFocus: !0,
                                        editable: !ce,
                                        accessibilityLabel: T.viaEmail,
                                        placeholder: 'name@example.com',
                                        autoComplete: 'email',
                                        textContentType: 'emailAddress',
                                        keyboardType: 'email-address',
                                        inputMode: 'email',
                                        autoCapitalize: 'none',
                                        autoCorrect: !1,
                                        value: dt,
                                        onChangeText: (e) => {
                                          (ct(e), de(''));
                                        },
                                        onSubmitEditing: _t,
                                        style: {
                                          flex: 1,
                                          minWidth: 0,
                                          borderWidth: 0,
                                          backgroundColor: 'transparent',
                                          paddingHorizontal: 0,
                                          fontSize: 17,
                                        },
                                      },
                                      'funnel-email',
                                    )
                                  : (0, P.jsx)(
                                      p.Input,
                                      {
                                        ltr: !0,
                                        testID: 'funnel-phone',
                                        autoFocus: !0,
                                        editable: !Ye && !ce,
                                        accessibilityLabel: T.phone,
                                        placeholder: T.phonePlaceholder,
                                        autoComplete: 'tel',
                                        textContentType: 'telephoneNumber',
                                        keyboardType: 'phone-pad',
                                        inputMode: 'tel',
                                        value: oe.phone,
                                        onChangeText: (e) => lt({ phone: e }),
                                        onSubmitEditing: _t,
                                        style: {
                                          flex: 1,
                                          minWidth: 0,
                                          borderWidth: 0,
                                          backgroundColor: 'transparent',
                                          paddingHorizontal: 0,
                                          fontSize: 19,
                                          letterSpacing: 1,
                                        },
                                      },
                                      'funnel-phone',
                                    ),
                              ],
                            }),
                            pe &&
                              !ft &&
                              (0, P.jsxs)(a.default, {
                                style: {
                                  flexDirection: 'row-reverse',
                                  direction: (0, D.flipped)() ? 'rtl' : 'ltr',
                                  alignItems: 'center',
                                  gap: 10,
                                  height: 58,
                                  borderRadius: 16,
                                  borderWidth: 2 * s.default.hairlineWidth,
                                  borderColor:
                                    ae === T.passwordShort ? Y.danger : Y.line,
                                  backgroundColor: Ft
                                    ? '#fff'
                                    : 'rgba(255,255,255,.06)',
                                  paddingHorizontal: 12,
                                },
                                children: [
                                  (0, P.jsx)(a.default, {
                                    style: {
                                      width: 34,
                                      height: 34,
                                      borderRadius: 17,
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      backgroundColor: Y.soft,
                                    },
                                    children: (0, P.jsx)(y.Icon, {
                                      name: 'lock',
                                      size: 18,
                                      color: Y.text,
                                    }),
                                  }),
                                  (0, P.jsx)(p.Input, {
                                    testID: 'funnel-password',
                                    editable: !Ye && !ce,
                                    accessibilityLabel: T.password,
                                    placeholder: T.passwordPlaceholder,
                                    secureTextEntry: !Be,
                                    autoComplete: 'new-password',
                                    textContentType: 'newPassword',
                                    autoCapitalize: 'none',
                                    autoCorrect: !1,
                                    value: We,
                                    onChangeText: (e) => {
                                      (Me(e), de(''));
                                    },
                                    onFocus: () =>
                                      setTimeout(
                                        () =>
                                          Xe.current?.scrollToEnd({
                                            animated: !0,
                                          }),
                                        250,
                                      ),
                                    onSubmitEditing: _t,
                                    style: {
                                      flex: 1,
                                      minWidth: 0,
                                      borderWidth: 0,
                                      backgroundColor: 'transparent',
                                      paddingHorizontal: 0,
                                      fontSize: 17,
                                    },
                                  }),
                                  (0, P.jsx)(B, {
                                    testID: 'funnel-password-show',
                                    label: Be ? T.hidePassword : T.showPassword,
                                    onPress: () => Oe((e) => !e),
                                  }),
                                ],
                              }),
                          ],
                        }),
                    !q &&
                      (0, P.jsx)(p.Copy, {
                        style: {
                          fontSize: 13,
                          lineHeight: 20,
                          color: Y.muted,
                          textAlign: 'center',
                        },
                        children: (0, z.L)(
                          '\u062f\u0631 \u062d\u0627\u0644 \u0627\u062a\u0635\u0627\u0644 \u0628\u0647 \u0633\u0631\u0648\u0631\u2026',
                        ),
                      }),
                    (0, P.jsx)(M, {}),
                  ],
                });
              case 'code':
                return (0, P.jsxs)(P.Fragment, {
                  children: [
                    (0, P.jsxs)(F, {
                      children: [
                        (0, P.jsx)(L, { children: T.code }),
                        (0, P.jsx)(p.Copy, {
                          style: {
                            fontSize: 13,
                            lineHeight: 21,
                            color: Y.muted,
                          },
                          children: _(
                            ke.includes('@') ? T.codeMailed : T.codeSent,
                            { target: '\u2066' + Se + '\u2069' },
                          ),
                        }),
                        !!ve &&
                          (0, P.jsx)(p.Copy, {
                            testID: 'funnel-test-code',
                            style: {
                              fontSize: 13,
                              lineHeight: 21,
                              color: Y.accent,
                              fontFamily: 'Vazirmatn_600SemiBold',
                            },
                            children: _(T.codeTest, {
                              code: (0, I.persianDigits)(ve),
                            }),
                          }),
                      ],
                    }),
                    (0, P.jsx)(a.default, {
                      style: { alignItems: 'center' },
                      children: (0, P.jsx)(a.default, {
                        style: { width: '100%', maxWidth: 64 * be },
                        children: (0, P.jsx)(w.CodeBoxes, {
                          testID: 'funnel-code',
                          length: be,
                          value: ge,
                          state: ye,
                          disabled: ce,
                          onChange: (e) => {
                            (me(e), 'error' === ye && (xe('idle'), de('')));
                          },
                          onComplete: (e) => {
                            Tt(e);
                          },
                          autoCode: De,
                          onNoCode: () => {
                            (xe('error'),
                              de(
                                _(T.codeNoCode, {
                                  n: (0, I.persianDigits)(be),
                                }),
                              ));
                          },
                        }),
                      }),
                    }),
                    ce &&
                      (0, P.jsx)(p.Copy, {
                        style: {
                          fontSize: 13,
                          lineHeight: 20,
                          color: Y.muted,
                          textAlign: 'center',
                        },
                        children: 'success' === ye ? T.preparing : T.codeCheck,
                      }),
                    it &&
                      !ce &&
                      (0, P.jsxs)(a.default, {
                        testID: 'funnel-known',
                        style: { gap: 12 },
                        children: [
                          (0, P.jsx)(p.Copy, {
                            accessibilityRole: 'alert',
                            style: {
                              fontSize: 14,
                              lineHeight: 22,
                              textAlign: 'center',
                            },
                            children: T.phoneKnown,
                          }),
                          (0, P.jsx)(N, {
                            testID: 'funnel-known-login',
                            label: T.login,
                            onPress: () => {
                              Pt();
                            },
                          }),
                        ],
                      }),
                    tt &&
                      !ce &&
                      (0, P.jsx)(a.default, {
                        style: { alignItems: 'center' },
                        children: (0, P.jsx)(B, {
                          testID: 'funnel-finish-retry',
                          label: T.finishRetry,
                          onPress: () => {
                            Ht();
                          },
                        }),
                      }),
                    (0, P.jsxs)(a.default, {
                      style: {
                        flexDirection: 'row-reverse',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: 8,
                      },
                      children: [
                        (0, P.jsx)(B, {
                          testID: 'funnel-resend',
                          disabled: Ie > 0 || ce || ('success' === ye && !tt),
                          label:
                            Ie > 0
                              ? _(T.resendIn, { time: (0, I.countdown)(Ie) })
                              : T.resend,
                          onPress: () => {
                            (ze(''), jt());
                          },
                        }),
                        (0, P.jsx)(B, {
                          testID: 'funnel-change-phone',
                          disabled: ce || ('success' === ye && !rt),
                          label: ke.includes('@')
                            ? T.changeEmail
                            : T.changePhone,
                          onPress: () => {
                            (rt && zt(), mt('phone'));
                          },
                        }),
                      ],
                    }),
                    Ie <= 0 &&
                      !Ee &&
                      !ke.includes('@') &&
                      'success' !== ye &&
                      (0, P.jsx)(a.default, {
                        style: { alignItems: 'center' },
                        children: (0, P.jsx)(B, {
                          testID: 'funnel-voice-call',
                          disabled: ce,
                          label: T.voiceCall,
                          onPress: () => {
                            St();
                          },
                        }),
                      }),
                    !!Le &&
                      (0, P.jsx)(p.Copy, {
                        testID: 'funnel-voice-note',
                        accessibilityRole: 'alert',
                        style: {
                          fontSize: 13,
                          lineHeight: 21,
                          color: Y.text,
                          textAlign: 'center',
                        },
                        children: Le,
                      }),
                  ],
                });
              case 'done': {
                const e =
                  Ve?.user?.name && Ve.user.name !== xt
                    ? Ve.user.name
                    : (0, k.greetingName)(oe.title, oe.personName) ||
                      Ve?.user?.name ||
                      xt;
                return (0, P.jsxs)(a.default, {
                  style: {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 18,
                    paddingVertical: 24,
                  },
                  children: [
                    (0, P.jsxs)(n.default.View, {
                      style: {
                        transform: [
                          {
                            scale: Qe.interpolate({
                              inputRange: [0, 1],
                              outputRange: [0.4, 1],
                            }),
                          },
                        ],
                        opacity: Qe,
                      },
                      children: [
                        (0, P.jsx)(a.default, {
                          style: {
                            width: 132,
                            height: 132,
                            borderRadius: 66,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: Y.accentSoft,
                          },
                          children: (0, P.jsx)(p.Copy, {
                            style: {
                              fontSize: 64,
                              lineHeight: 80,
                              textAlign: 'center',
                            },
                            children: '\ud83c\udf89',
                          }),
                        }),
                        (0, P.jsx)(K, { pop: Qe }),
                      ],
                    }),
                    (0, P.jsx)(p.Copy, {
                      accessibilityRole: 'header',
                      style: {
                        fontSize: ee ? 22 : 25,
                        lineHeight: ee ? 34 : 38,
                        fontFamily: 'Vazirmatn_700Bold',
                        textAlign: 'center',
                      },
                      children: _(Ve?.existing ? T.doneBack : T.doneNew, {
                        name: e,
                      }),
                    }),
                    !!Ve?.shopName &&
                      (0, P.jsx)(p.Copy, {
                        style: {
                          fontSize: 16,
                          lineHeight: 26,
                          textAlign: 'center',
                          fontFamily: 'Vazirmatn_600SemiBold',
                        },
                        children: _(T.doneShop, { shop: Ve.shopName }),
                      }),
                    !Ve?.existing &&
                      (0, P.jsx)(p.Copy, {
                        style: {
                          fontSize: 15,
                          lineHeight: 25,
                          color: Y.muted,
                          textAlign: 'center',
                        },
                        children: T.doneTourBody,
                      }),
                  ],
                });
              }
            }
          })(),
          Wt =
            'intro' === ne
              ? T.introStart
              : 'phone' === ne
                ? gt || (pe && !ft && !pt)
                  ? T.createAccount
                  : T.sendCode
                : 'done' === ne
                  ? Ve && !Ve.existing
                    ? T.doneTour
                    : T.doneEnter
                  : T.next;
        return (0, P.jsx)(a.default, {
          testID: 'funnel',
          style: {
            flex: 1,
            backgroundColor: Y.bg,
            paddingTop: Math.max($.top, 12),
            paddingBottom: Math.max($.bottom, 12),
          },
          children: (0, P.jsx)(o.default, {
            style: { flex: 1 },
            behavior: void 0,
            children: (0, P.jsxs)(a.default, {
              style: {
                flex: 1,
                width: '100%',
                maxWidth: 480,
                alignSelf: 'center',
              },
              children: [
                'intro' === ne &&
                  (0, P.jsxs)(a.default, {
                    style: {
                      flexDirection: 'row',
                      direction: 'ltr',
                      alignItems: 'center',
                      gap: 12,
                      paddingHorizontal: Et,
                      paddingTop: 4,
                      paddingBottom: 8,
                    },
                    children: [
                      (0, P.jsx)(l.default, {
                        testID: 'funnel-signin',
                        accessibilityRole: 'button',
                        onPress: () => {
                          Dt();
                        },
                        hitSlop: 8,
                        style: ({ pressed: e }) => ({
                          height: 36,
                          paddingHorizontal: 14,
                          borderRadius: 18,
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: Y.soft,
                          opacity: e ? 0.7 : 1,
                        }),
                        children: (0, P.jsx)(p.Copy, {
                          style: {
                            fontSize: 13,
                            lineHeight: 20,
                            fontFamily: 'Vazirmatn_600SemiBold',
                          },
                          children: (0, z.L)('\u0648\u0631\u0648\u062f'),
                        }),
                      }),
                      !!r &&
                        (0, P.jsx)(l.default, {
                          testID: 'funnel-intro-back',
                          accessibilityRole: 'button',
                          accessibilityLabel: T.back,
                          onPress: r,
                          hitSlop: 8,
                          style: ({ pressed: e }) => ({
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: Y.soft,
                            opacity: e ? 0.7 : 1,
                          }),
                          children: (0, P.jsx)(y.Icon, {
                            name: 'arrow',
                            size: 20,
                            color: Y.text,
                          }),
                        }),
                    ],
                  }),
                At &&
                  (0, P.jsxs)(a.default, {
                    style: {
                      flexDirection: 'row',
                      direction: 'ltr',
                      alignItems: 'center',
                      gap: 12,
                      paddingHorizontal: Et,
                      paddingTop: 4,
                      paddingBottom: 8,
                    },
                    children: [
                      (0, P.jsx)(l.default, {
                        testID: 'funnel-signin',
                        accessibilityRole: 'button',
                        onPress: () => {
                          Dt();
                        },
                        hitSlop: 8,
                        style: ({ pressed: e }) => ({
                          height: 36,
                          paddingHorizontal: 14,
                          borderRadius: 18,
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: Y.soft,
                          opacity: e ? 0.7 : 1,
                        }),
                        children: (0, P.jsx)(p.Copy, {
                          style: {
                            fontSize: 13,
                            lineHeight: 20,
                            fontFamily: 'Vazirmatn_600SemiBold',
                          },
                          children: (0, z.L)('\u0648\u0631\u0648\u062f'),
                        }),
                      }),
                      (0, P.jsx)(l.default, {
                        testID: 'funnel-back',
                        accessibilityRole: 'button',
                        accessibilityLabel: T.back,
                        disabled: ce || ('success' === ye && !rt) || Ye,
                        onPress: yt,
                        hitSlop: 8,
                        style: ({ pressed: e }) => ({
                          width: 40,
                          height: 40,
                          borderRadius: 20,
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: Y.soft,
                          opacity: ce ? 0.4 : e ? 0.7 : 1,
                        }),
                        children: (0, P.jsx)(y.Icon, {
                          name: 'arrow',
                          size: 20,
                          color: Y.text,
                        }),
                      }),
                      (0, P.jsx)(a.default, {
                        accessibilityRole: 'progressbar',
                        accessibilityValue: {
                          min: 1,
                          max: k.PROGRESS_STEPS.length,
                          now: Vt,
                        },
                        style: {
                          flex: 1,
                          height: 10,
                          borderRadius: 5,
                          backgroundColor: Y.line,
                          overflow: 'hidden',
                          flexDirection: 'row',
                        },
                        children: (0, P.jsx)(n.default.View, {
                          style: {
                            height: 10,
                            borderRadius: 5,
                            backgroundColor: Y.accent,
                            width: Ke.interpolate({
                              inputRange: [0, 1],
                              outputRange: ['0%', '100%'],
                            }),
                          },
                        }),
                      }),
                      (0, P.jsxs)(p.Copy, {
                        style: {
                          fontSize: 13,
                          lineHeight: 18,
                          color: Y.muted,
                          minWidth: 36,
                          textAlign: 'right',
                        },
                        children: [
                          (0, I.persianDigits)(Vt),
                          '/',
                          (0, I.persianDigits)(k.PROGRESS_STEPS.length),
                        ],
                      }),
                    ],
                  }),
                (0, P.jsx)(u.ScrollView, {
                  ref: Xe,
                  style: { flex: 1 },
                  contentContainerStyle: {
                    flexGrow: 1,
                    paddingHorizontal: Et,
                    paddingTop: ee ? 12 : 20,
                    paddingBottom: 16,
                  },
                  keyboardShouldPersistTaps: 'handled',
                  showsVerticalScrollIndicator: !1,
                  children: (0, P.jsxs)(n.default.View, {
                    style: {
                      flexGrow: 1,
                      gap: ee ? 16 : 20,
                      opacity: Ge,
                      transform: [{ translateX: Lt }],
                    },
                    children: [
                      Nt,
                      !!ae &&
                        (0, P.jsx)(p.Copy, {
                          accessibilityRole: 'alert',
                          style: {
                            fontSize: 14,
                            lineHeight: 21,
                            color: Y.danger,
                            textAlign: 'code' === ne ? 'center' : 'right',
                          },
                          children: ae,
                        }),
                      'phone' === ne &&
                        ae === T.phoneTaken &&
                        (0, P.jsx)(B, {
                          testID: 'funnel-login',
                          label: T.login,
                          onPress: () => {
                            Dt();
                          },
                        }),
                    ],
                  }),
                }),
                'code' !== ne &&
                  !('phone' === ne && pt && !gt) &&
                  (0, P.jsxs)(a.default, {
                    style: { paddingHorizontal: Et, paddingTop: 8, gap: 4 },
                    children: [
                      (0, P.jsx)(N, {
                        testID:
                          'funnel-' +
                          ('intro' === ne
                            ? 'start'
                            : 'done' === ne
                              ? 'enter'
                              : 'next'),
                        label: Wt,
                        busy: ce,
                        disabled:
                          !(0, k.canLeave)(ne, oe) ||
                          ('phone' === ne &&
                            (!q ||
                              (pt
                                ? !gt
                                : ft
                                  ? !dt.trim()
                                  : !oe.phone.trim() || (pe && !We)))),
                        onPress: () => {
                          'intro' !== ne ? _t() : mt('field');
                        },
                      }),
                      'heard' === ne &&
                        (0, P.jsx)(B, {
                          testID: 'funnel-skip',
                          label: T.skip,
                          onPress: () => {
                            (lt({ heardFrom: null }),
                              G
                                ? G({ ...oe, heardFrom: null })
                                : mt((0, k.nextStep)(ne)));
                          },
                        }),
                    ],
                  }),
              ],
            }),
          }),
        });
      }));
    var t = _r(d[0]),
      n = e(_r(d[1])),
      i = (e(_r(d[2])), e(_r(d[3]))),
      o = e(_r(d[4])),
      r = e(_r(d[5]));
    _r(d[6]);
    var l = e(_r(d[7])),
      s = e(_r(d[8])),
      a = e(_r(d[9])),
      c = e(_r(d[10])),
      u = _r(d[11]),
      h = _r(d[12]),
      f = e(_r(d[13])),
      p = _r(d[14]),
      y = _r(d[15]),
      x = _r(d[16]),
      b = _r(d[17]),
      j = _r(d[18]),
      S = _r(d[19]),
      C = _r(d[20]),
      v = _r(d[21]),
      w = _r(d[22]),
      I = _r(d[23]),
      R = _r(d[24]),
      k = _r(d[25]),
      z = _r(d[26]),
      D = _r(d[27]),
      H = _r(d[28]),
      P = _r(d[29]);
    const T = (0, z.localized)({
        introHello:
          '\u0633\u0644\u0627\u0645! \u0645\u0646 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u0647\u0633\u062a\u0645 \ud83d\udc4b',
        introBody:
          '\u0686\u0646\u062f \u062a\u0627 \u0633\u0624\u0627\u0644 \u06a9\u0648\u062a\u0627\u0647 \u0645\u06cc\u200c\u067e\u0631\u0633\u0645 \u062a\u0627 \u0627\u0646\u0628\u0627\u0631\u062a \u0631\u0648 \u062f\u0642\u06cc\u0642\u0627\u064b \u0628\u0631\u0627\u06cc \u06a9\u0627\u0631 \u062e\u0648\u062f\u062a \u0622\u0645\u0627\u062f\u0647 \u06a9\u0646\u0645. \u06a9\u0645\u062a\u0631 \u0627\u0632 \u06cc\u06a9 \u062f\u0642\u06cc\u0642\u0647 \u0637\u0648\u0644 \u0645\u06cc\u200c\u06a9\u0634\u0647.',
        introStart: '\u0634\u0631\u0648\u0639 \u06a9\u0646\u06cc\u0645',
        login:
          '\u0648\u0631\u0648\u062f \u0628\u0627 \u0647\u0645\u06cc\u0646 \u0634\u0645\u0627\u0631\u0647',
        field:
          '\u06a9\u0627\u0631\u062a \u0686\u06cc\u0647\u061f \u0641\u0631\u0648\u0634\u06af\u0627\u0647\u062a \u062f\u0631 \u0686\u0647 \u0632\u0645\u06cc\u0646\u0647\u200c\u0627\u06cc\u0647\u061f',
        fieldCustom:
          '\u0627\u06af\u0631 \u0646\u0628\u0648\u062f\u060c \u0627\u06cc\u0646\u062c\u0627 \u0628\u0646\u0648\u06cc\u0633',
        role: '\u062a\u0648 \u0627\u06cc\u0646 \u06a9\u0633\u0628\u200c\u0648\u06a9\u0627\u0631 \u0686\u0647\u200c\u06a9\u0627\u0631\u0647\u200c\u0627\u06cc\u061f',
        method:
          '\u0627\u0644\u0627\u0646 \u0645\u0648\u062c\u0648\u062f\u06cc \u0648 \u0641\u0631\u0648\u0634 \u0631\u0648 \u0686\u0637\u0648\u0631 \u0646\u06af\u0647 \u0645\u06cc\u200c\u062f\u0627\u0631\u06cc\u061f',
        goals:
          '\u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u0628\u06cc\u0634\u062a\u0631 \u062a\u0648 \u0686\u06cc \u06a9\u0645\u06a9\u062a \u06a9\u0646\u0647\u061f',
        goalsHint:
          '\u0647\u0631 \u0686\u0646\u062f\u062a\u0627 \u06a9\u0647 \u0645\u06cc\u200c\u062e\u0648\u0627\u06cc \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646',
        planTitle:
          '\u0628\u0631\u0646\u0627\u0645\u0647\u200c\u0627\u062a \u0622\u0645\u0627\u062f\u0647\u200c\u0633\u062a! \ud83c\udfaf',
        planFor: '\u0628\u0631\u0627\u06cc {field}',
        title:
          '\u062f\u0648\u0633\u062a \u062f\u0627\u0631\u06cc \u0686\u0637\u0648\u0631 \u0635\u062f\u0627\u062a \u06a9\u0646\u06cc\u0645\u061f',
        name: '\u0627\u0633\u0645\u062a \u0686\u06cc\u0647\u061f',
        namePlaceholder: '\u0645\u062b\u0644\u0627\u064b \u0639\u0644\u06cc',
        nameHello:
          '\u062e\u0648\u0634\u0628\u062e\u062a\u0645\u060c {name}! \ud83d\ude0a',
        shop: '\u0627\u0633\u0645 \u0641\u0631\u0648\u0634\u06af\u0627\u0647\u062a \u0686\u06cc\u0647\u061f',
        shopPlaceholder:
          '\u0645\u062b\u0644\u0627\u064b \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0646\u0648\u0631',
        heard:
          '\u0627\u0632 \u06a9\u062c\u0627 \u0628\u0627 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u0622\u0634\u0646\u0627 \u0634\u062f\u06cc\u061f',
        phone:
          '\u0622\u062e\u0631\u06cc\u0646 \u0642\u062f\u0645! \u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644\u062a \u0631\u0648 \u0628\u0632\u0646',
        phoneHint:
          '\u06cc\u0647 \u06a9\u062f \u0628\u0631\u0627\u062a \u067e\u06cc\u0627\u0645\u06a9 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645\u061b \u0628\u0627 \u0647\u0645\u06cc\u0646 \u0634\u0645\u0627\u0631\u0647 \u0647\u0645\u06cc\u0634\u0647 \u0648\u0627\u0631\u062f \u0645\u06cc\u200c\u0634\u06cc.',
        phonePlaceholder:
          '\u06f0\u06f9\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9',
        phoneInvalid:
          '\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644 \u062f\u0631\u0633\u062a \u0646\u06cc\u0633\u062a\u061b \u0645\u062b\u0644 \u06f0\u06f9\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9 \u0628\u0646\u0648\u06cc\u0633.',
        sendCode: '\u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u062f',
        code: '\u06a9\u062f \u0631\u0648 \u0648\u0627\u0631\u062f \u06a9\u0646',
        codeSent:
          '\u06a9\u062f \u0628\u0647 {target} \u067e\u06cc\u0627\u0645\u06a9 \u0634\u062f.',
        codeTest:
          '\u062d\u0627\u0644\u062a \u0622\u0632\u0645\u0627\u06cc\u0634\u06cc: \u06a9\u062f {code} \u0627\u0633\u062a.',
        codeWrong:
          '\u06a9\u062f \u062f\u0631\u0633\u062a \u0646\u06cc\u0633\u062a.',
        codeWrongLeft:
          '\u06a9\u062f \u062f\u0631\u0633\u062a \u0646\u06cc\u0633\u062a\u061b {left} \u0628\u0627\u0631 \u062f\u06cc\u06af\u0647 \u0645\u06cc\u200c\u062a\u0648\u0646\u06cc \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646\u06cc.',
        codeExpired:
          '\u06a9\u062f \u0645\u0646\u0642\u0636\u06cc \u0634\u062f\u0647\u061b \u062f\u0648\u0628\u0627\u0631\u0647 \u0628\u06af\u06cc\u0631.',
        codeLocked:
          '\u062a\u0644\u0627\u0634\u200c\u0647\u0627 \u062a\u0645\u0648\u0645 \u0634\u062f\u061b \u06a9\u062f \u062c\u062f\u06cc\u062f \u0628\u06af\u06cc\u0631.',
        codeNoCode:
          '\u062f\u0631 \u0645\u062a\u0646\u06cc \u06a9\u0647 \u0686\u0633\u0628\u0627\u0646\u062f\u06cc \u06a9\u062f {n} \u0631\u0642\u0645\u06cc \u067e\u06cc\u062f\u0627 \u0646\u0634\u062f\u061b \u062e\u0648\u062f \u06a9\u062f \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646.',
        codeCheck:
          '\u062f\u0631 \u062d\u0627\u0644 \u0628\u0631\u0631\u0633\u06cc\u2026',
        resend:
          '\u0627\u0631\u0633\u0627\u0644 \u062f\u0648\u0628\u0627\u0631\u0647 \u06a9\u062f',
        voiceCall:
          '\u06a9\u062f \u0631\u0627 \u0628\u0627 \u062a\u0645\u0627\u0633 \u0635\u0648\u062a\u06cc \u0628\u06af\u06cc\u0631',
        voiceCalling:
          '\u0627\u0644\u0627\u0646 \u0628\u0627 {phone} \u062a\u0645\u0627\u0633 \u0645\u06cc\u200c\u06af\u06cc\u0631\u06cc\u0645 \u0648 \u06a9\u062f \u0631\u0627 \u062f\u0648 \u0628\u0627\u0631 \u0645\u06cc\u200c\u062e\u0648\u0627\u0646\u06cc\u0645\u061b \u0647\u0645\u0627\u0646 \u06a9\u062f \u0631\u0627 \u0627\u06cc\u0646\u062c\u0627 \u0628\u0632\u0646.',
        voiceTest:
          '\u062d\u0627\u0644\u062a \u0622\u0632\u0645\u0627\u06cc\u0634\u06cc: \u062a\u0645\u0627\u0633\u06cc \u06af\u0631\u0641\u062a\u0647 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f\u061b \u06a9\u062f {code} \u0627\u0633\u062a.',
        voiceWait:
          '\u06a9\u0645\u06cc \u0635\u0628\u0631 \u06a9\u0646\u061b \u062a\u0645\u0627\u0633 \u0635\u0648\u062a\u06cc \u0628\u0639\u062f \u0627\u0632 \u062a\u0645\u0627\u0645 \u0634\u062f\u0646 \u0632\u0645\u0627\u0646 \xab\u0627\u0631\u0633\u0627\u0644 \u062f\u0648\u0628\u0627\u0631\u0647\xbb \u0645\u0645\u06a9\u0646 \u0627\u0633\u062a.',
        resendIn:
          '\u0627\u0631\u0633\u0627\u0644 \u062f\u0648\u0628\u0627\u0631\u0647 \u062a\u0627 {time}',
        changePhone:
          '\u062a\u063a\u06cc\u06cc\u0631 \u0634\u0645\u0627\u0631\u0647',
        tooSoon:
          '\u06a9\u0645\u06cc \u0635\u0628\u0631 \u06a9\u0646 \u0648 \u062f\u0648\u0628\u0627\u0631\u0647 \u06a9\u062f \u0628\u06af\u06cc\u0631.',
        preparing:
          '\u062f\u0631 \u062d\u0627\u0644 \u0622\u0645\u0627\u062f\u0647 \u06a9\u0631\u062f\u0646 \u0627\u0646\u0628\u0627\u0631\u062a\u2026',
        finishFailed:
          '\u062d\u0633\u0627\u0628\u062a \u0633\u0627\u062e\u062a\u0647 \u0634\u062f\u060c \u0641\u0642\u0637 \u0622\u0645\u0627\u062f\u0647 \u06a9\u0631\u062f\u0646 \u0627\u0646\u0628\u0627\u0631 \u06a9\u0627\u0645\u0644 \u0646\u0634\u062f. {reason} \xab\u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646\xbb \u0631\u0648 \u0628\u0632\u0646\u061b \u06a9\u062f \u0644\u0627\u0632\u0645 \u0646\u06cc\u0633\u062a.',
        finishFailedLogin:
          '\u0648\u0627\u0631\u062f \u0634\u062f\u06cc\u060c \u0641\u0642\u0637 \u0622\u0645\u0627\u062f\u0647 \u06a9\u0631\u062f\u0646 \u0627\u0646\u0628\u0627\u0631 \u06a9\u0627\u0645\u0644 \u0646\u0634\u062f. {reason} \xab\u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646\xbb \u0631\u0648 \u0628\u0632\u0646\u061b \u06a9\u062f \u0644\u0627\u0632\u0645 \u0646\u06cc\u0633\u062a.',
        codeUsed:
          '\u0627\u06cc\u0646 \u06a9\u062f \u06cc\u06a9 \u0628\u0627\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647\u061b \xab\u0627\u0631\u0633\u0627\u0644 \u062f\u0648\u0628\u0627\u0631\u0647 \u06a9\u062f\xbb \u0631\u0648 \u0628\u0632\u0646 \u0648 \u06a9\u062f \u062a\u0627\u0632\u0647 \u0628\u06af\u06cc\u0631.',
        finishRetry:
          '\u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646',
        unavailable:
          '\u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627 \u0633\u0631\u0648\u0631 \u0628\u0631\u0642\u0631\u0627\u0631 \u0646\u0634\u062f\u061b \u062f\u0648\u0628\u0627\u0631\u0647 \u062a\u0644\u0627\u0634 \u06a9\u0646.',
        doneNew:
          '\u0628\u0647 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u062e\u0648\u0634 \u0627\u0648\u0645\u062f\u06cc\u060c {name}!',
        doneBack:
          '\u062e\u0648\u0634 \u0628\u0631\u06af\u0634\u062a\u06cc\u060c {name}!',
        doneShop:
          '\u0627\u0646\u0628\u0627\u0631 \xab{shop}\xbb \u0622\u0645\u0627\u062f\u0647\u200c\u0633\u062a.',
        doneBody: j.AI_PHOTOS
          ? '\u0627\u0632 \u0635\u0641\u062d\u0647\u0654 \u0627\u0641\u0632\u0648\u062f\u0646\u060c \u0627\u0648\u0644\u06cc\u0646 \u06a9\u0627\u0644\u0627\u062a \u0631\u0648 \u0628\u0627 \u0635\u062f\u0627\u060c \u0628\u0627\u0631\u06a9\u062f \u06cc\u0627 \u0639\u06a9\u0633 \u062b\u0628\u062a \u06a9\u0646.'
          : '\u0627\u0632 \u0635\u0641\u062d\u0647\u0654 \u0627\u0641\u0632\u0648\u062f\u0646\u060c \u0627\u0648\u0644\u06cc\u0646 \u06a9\u0627\u0644\u0627\u062a \u0631\u0648 \u0628\u0627 \u0635\u062f\u0627\u060c \u0628\u0627\u0631\u06a9\u062f \u06cc\u0627 \u0646\u0648\u0634\u062a\u0646 \u062b\u0628\u062a \u06a9\u0646.',
        doneEnter:
          '\u0648\u0631\u0648\u062f \u0628\u0647 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc',
        doneTour: '\u0627\u062f\u0627\u0645\u0647',
        doneTourBody:
          '\u062d\u0633\u0627\u0628\u062a \u0633\u0627\u062e\u062a\u0647 \u0634\u062f\u061b \u06cc\u0647 \u0646\u06af\u0627\u0647 \u06a9\u0648\u062a\u0627\u0647 \u0628\u0647 \u0628\u0631\u0646\u0627\u0645\u0647\u060c \u0628\u0639\u062f \u0637\u0631\u062d\u062a \u0631\u0648 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646.',
        next: '\u0627\u062f\u0627\u0645\u0647',
        skip: '\u0631\u062f \u06a9\u0631\u062f\u0646',
        back: '\u0642\u0628\u0644\u06cc',
        phoneHintPassword:
          '\u06cc\u0647 \u0631\u0645\u0632 \u0647\u0645 \u0628\u0630\u0627\u0631\u061b \u0627\u0632 \u0627\u06cc\u0646 \u0628\u0647 \u0628\u0639\u062f \u0628\u0627 \u0647\u0645\u06cc\u0646 \u0634\u0645\u0627\u0631\u0647 \u0648 \u0631\u0645\u0632 \u0648\u0627\u0631\u062f \u0645\u06cc\u200c\u0634\u06cc.',
        password: '\u0631\u0645\u0632 \u0639\u0628\u0648\u0631',
        passwordPlaceholder:
          '\u062d\u062f\u0627\u0642\u0644 \u06f1\u06f0 \u062d\u0631\u0641 \u06cc\u0627 \u0639\u062f\u062f',
        passwordShort:
          '\u0631\u0645\u0632 \u0628\u0627\u06cc\u062f \u062d\u062f\u0627\u0642\u0644 \u06f1\u06f0 \u062d\u0631\u0641 \u06cc\u0627 \u0639\u062f\u062f \u0628\u0627\u0634\u0647.',
        privacy:
          '\u0627\u0633\u0645 \u0648 \u0634\u0645\u0627\u0631\u0647\u200c\u0627\u062a \u0641\u0642\u0637 \u0628\u0631\u0627\u06cc \u0633\u0627\u062e\u062a \u062d\u0633\u0627\u0628 \u0648 \u0648\u0631\u0648\u062f \u0628\u0647 \u06a9\u0627\u0631 \u0645\u06cc\u200c\u0631\u0647 \u0648 \u0628\u0647 \u06a9\u0633\u06cc \u062f\u0627\u062f\u0647 \u0646\u0645\u06cc\u200c\u0634\u0647.',
        privacyLink: '\u062d\u0631\u06cc\u0645 \u062e\u0635\u0648\u0635\u06cc',
        viaPhone: '\u0645\u0648\u0628\u0627\u06cc\u0644',
        viaEmail: '\u0627\u06cc\u0645\u06cc\u0644',
        viaGoogle: '\u062c\u06cc\u0645\u06cc\u0644',
        googleQuestion:
          '\u0622\u062e\u0631\u06cc\u0646 \u0642\u062f\u0645! \u0628\u0627 \u062c\u06cc\u0645\u06cc\u0644\u062a \u0648\u0627\u0631\u062f \u0634\u0648',
        googleHint:
          '\u06af\u0648\u06af\u0644 \u062c\u06cc\u0645\u06cc\u0644\u062a \u0631\u0648 \u062a\u0623\u06cc\u06cc\u062f \u0645\u06cc\u200c\u06a9\u0646\u0647\u061b \u06a9\u062f \u0648 \u0631\u0645\u0632 \u0644\u0627\u0632\u0645 \u0646\u06cc\u0633\u062a.',
        googleTicketQuestion:
          '\u0622\u062e\u0631\u06cc\u0646 \u0642\u062f\u0645! \u062d\u0633\u0627\u0628\u062a \u0628\u0627 \u0627\u06cc\u0646 \u062c\u06cc\u0645\u06cc\u0644 \u0633\u0627\u062e\u062a\u0647 \u0645\u06cc\u200c\u0634\u0647',
        googleOff:
          '\u0648\u0631\u0648\u062f \u0628\u0627 \u062c\u06cc\u0645\u06cc\u0644 \u0627\u0644\u0627\u0646 \u062f\u0631 \u062f\u0633\u062a\u0631\u0633 \u0646\u06cc\u0633\u062a\u061b \u0628\u0627 \u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644 \u0627\u062f\u0627\u0645\u0647 \u0628\u062f\u0647.',
        emailQuestion:
          '\u0622\u062e\u0631\u06cc\u0646 \u0642\u062f\u0645! \u0627\u06cc\u0645\u06cc\u0644\u062a \u0631\u0648 \u0628\u0646\u0648\u06cc\u0633',
        emailHint:
          '\u06cc\u0647 \u06a9\u062f \u0628\u0647 \u0627\u06cc\u0645\u06cc\u0644\u062a \u0645\u06cc\u200c\u0641\u0631\u0633\u062a\u06cc\u0645\u061b \u0628\u0627 \u0647\u0645\u06cc\u0646 \u0627\u06cc\u0645\u06cc\u0644 \u0647\u0645\u06cc\u0634\u0647 \u0648\u0627\u0631\u062f \u0645\u06cc\u200c\u0634\u06cc.',
        emailInvalid:
          '\u0627\u06cc\u0645\u06cc\u0644 \u062f\u0631\u0633\u062a \u0646\u06cc\u0633\u062a\u061b \u0645\u062b\u0644 name@example.com \u0628\u0646\u0648\u06cc\u0633.',
        codeMailed:
          '\u06a9\u062f \u0628\u0647 {target} \u0627\u06cc\u0645\u06cc\u0644 \u0634\u062f.',
        changeEmail:
          '\u062a\u063a\u06cc\u06cc\u0631 \u0627\u06cc\u0645\u06cc\u0644',
        showPassword: '\u0646\u0645\u0627\u06cc\u0634',
        hidePassword: '\u067e\u0646\u0647\u0627\u0646',
        createAccount: '\u0633\u0627\u062e\u062a \u062d\u0633\u0627\u0628',
        madeRetry:
          '\u062d\u0633\u0627\u0628\u062a \u0633\u0627\u062e\u062a\u0647 \u0634\u062f \u0648\u0644\u06cc \u0627\u0646\u0628\u0627\u0631\u062a \u0622\u0645\u0627\u062f\u0647 \u0646\u0634\u062f ({reason})\u061b \u062f\u0648\u0628\u0627\u0631\u0647 \xab\u0633\u0627\u062e\u062a \u062d\u0633\u0627\u0628\xbb \u0631\u0648 \u0628\u0632\u0646.',
        phoneTaken:
          '\u0628\u0627 \u0627\u06cc\u0646 \u0634\u0645\u0627\u0631\u0647 \u0642\u0628\u0644\u0627\u064b \u062d\u0633\u0627\u0628 \u0633\u0627\u062e\u062a\u0647 \u0634\u062f\u0647\u061b \u0627\u0632 \u0632\u0628\u0627\u0646\u0647\u0654 \xab\u0648\u0631\u0648\u062f\xbb \u0628\u0627 \u0634\u0645\u0627\u0631\u0647 \u0648 \u0631\u0645\u0632\u062a \u0648\u0627\u0631\u062f \u0634\u0648.',
        phoneKnown:
          '\u0642\u0628\u0644\u0627\u064b \u0628\u0627 \u0627\u06cc\u0646 \u0634\u0645\u0627\u0631\u0647 \u062d\u0633\u0627\u0628 \u0633\u0627\u062e\u062a\u0647 \u0634\u062f\u0647. \u0628\u0627 \xab\u0648\u0631\u0648\u062f \u0628\u0627 \u0647\u0645\u06cc\u0646 \u0634\u0645\u0627\u0631\u0647\xbb \u0628\u0647 \u0647\u0645\u0627\u0646 \u062d\u0633\u0627\u0628 \u0648 \u0627\u0646\u0628\u0627\u0631 \u062e\u0648\u062f\u062a \u0645\u06cc\u200c\u0631\u06cc\u061b \u0627\u0646\u0628\u0627\u0631 \u062a\u0627\u0632\u0647\u200c\u0627\u06cc \u0633\u0627\u062e\u062a\u0647 \u0646\u0645\u06cc\u200c\u0634\u0647.',
      }),
      _ = (e, t) => e.replace(/\{(\w+)\}/g, (e, n) => t[n] ?? ''),
      E = 'anbari.funnel.v1';
    function F({ children: e, bare: t = !1 }) {
      const { colors: n, mode: i } = (0, S.useTheme)();
      return (0, P.jsxs)(a.default, {
        style: {
          flexDirection: 'row-reverse',
          alignItems: 'flex-end',
          gap: 10,
        },
        children: [
          !t && (0, P.jsx)(x.BrandMark, { size: 52, tone: 'blue' }),
          (0, P.jsx)(a.default, {
            style: {
              flex: 1,
              borderRadius: 18,
              borderBottomRightRadius: 6,
              paddingHorizontal: 16,
              paddingVertical: 12,
              backgroundColor: n.surface,
              borderWidth: s.default.hairlineWidth,
              borderColor: n.line,
              boxShadow:
                'light' === i ? '0 6px 18px rgba(17,17,20,.06)' : 'none',
            },
            children: e,
          }),
        ],
      });
    }
    function L({ children: e }) {
      return (0, P.jsx)(p.Copy, {
        accessibilityRole: 'header',
        style: {
          fontSize: 20,
          lineHeight: 31,
          fontFamily: 'Vazirmatn_700Bold',
        },
        children: e,
      });
    }
    function A({
      label: e,
      emoji: t,
      selected: n,
      multi: i = !1,
      onPress: o,
      testID: r,
    }) {
      const { colors: c } = (0, S.useTheme)();
      return (0, P.jsxs)(l.default, {
        testID: r,
        accessibilityRole: i ? 'checkbox' : 'radio',
        accessibilityState: { selected: n, checked: n },
        onPress: o,
        style: ({ pressed: e }) => ({
          minHeight: 60,
          borderRadius: 16,
          paddingHorizontal: 14,
          flexDirection: 'row-reverse',
          alignItems: 'center',
          gap: 12,
          borderWidth: n ? 2 : 2 * s.default.hairlineWidth,
          borderColor: n ? c.accent : c.line,
          backgroundColor: n ? c.accentSoft : c.surface,
          transform: [{ scale: e ? 0.98 : 1 }],
        }),
        children: [
          (0, P.jsx)(p.Copy, {
            style: { fontSize: 24, lineHeight: 32 },
            children: t,
          }),
          (0, P.jsx)(p.Copy, {
            style: {
              flex: 1,
              fontSize: 16,
              lineHeight: 24,
              fontFamily: n ? 'Vazirmatn_600SemiBold' : 'Vazirmatn_500Medium',
            },
            children: e,
          }),
          (0, P.jsx)(a.default, {
            style: {
              width: 24,
              height: 24,
              borderRadius: i ? 7 : 12,
              borderWidth: n ? 0 : 3 * s.default.hairlineWidth,
              borderColor: c.line,
              backgroundColor: n ? c.accent : 'transparent',
              alignItems: 'center',
              justifyContent: 'center',
            },
            children:
              n &&
              (0, P.jsx)(y.Icon, {
                name: 'check',
                size: 15,
                color: c.onAccent,
              }),
          }),
        ],
      });
    }
    function V({ label: e, selected: t, onPress: n, testID: i }) {
      const { colors: o } = (0, S.useTheme)();
      return (0, P.jsxs)(l.default, {
        testID: i,
        accessibilityRole: 'radio',
        accessibilityState: { selected: t, checked: t },
        onPress: n,
        style: ({ pressed: e }) => ({
          minHeight: 46,
          paddingHorizontal: 16,
          borderRadius: 23,
          flexDirection: 'row-reverse',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          borderWidth: t ? 1 : s.default.hairlineWidth,
          borderColor: t ? o.accent : o.line,
          backgroundColor: t ? o.accent : o.surface,
          opacity: e ? 0.85 : 1,
        }),
        children: [
          t &&
            (0, P.jsx)(y.Icon, { name: 'check', size: 16, color: o.onAccent }),
          (0, P.jsx)(p.Copy, {
            style: {
              fontSize: 15,
              lineHeight: 22,
              fontFamily: t ? 'Vazirmatn_600SemiBold' : 'Vazirmatn_500Medium',
              color: t ? o.onAccent : o.text,
            },
            children: e,
          }),
        ],
      });
    }
    function N({
      label: e,
      disabled: t = !1,
      busy: n = !1,
      onPress: i,
      testID: o,
    }) {
      const { colors: r } = (0, S.useTheme)(),
        s = t || n;
      return (0, P.jsx)(l.default, {
        testID: o,
        accessibilityRole: 'button',
        accessibilityState: { disabled: s, busy: n },
        disabled: s,
        onPress: i,
        style: ({ pressed: e }) => ({
          height: 54,
          borderRadius: 16,
          backgroundColor: r.accent,
          alignItems: 'center',
          justifyContent: 'center',
          opacity: s ? 0.45 : 1,
          transform: [{ scale: e ? 0.98 : 1 }],
        }),
        children: (0, P.jsx)(p.Copy, {
          style: {
            fontSize: 17,
            lineHeight: 24,
            fontFamily: 'Vazirmatn_600SemiBold',
            color: r.onAccent,
          },
          children: n
            ? (0, z.L)(
                '\u062f\u0631 \u062d\u0627\u0644 \u0627\u0646\u062c\u0627\u0645\u2026',
              )
            : e,
        }),
      });
    }
    const W = 'https://myanbari.ir/privacy';
    function M() {
      const { colors: e } = (0, S.useTheme)();
      return (0, P.jsxs)(p.Copy, {
        testID: 'funnel-privacy',
        style: {
          fontSize: 12.5,
          lineHeight: 21,
          color: e.muted,
          textAlign: 'center',
        },
        children: [
          T.privacy,
          ' ',
          (0, P.jsx)(p.Copy, {
            testID: 'funnel-privacy-link',
            accessibilityRole: 'link',
            onPress: () => {
              r.default.openURL(W).catch(() => {});
            },
            style: {
              fontSize: 12.5,
              lineHeight: 21,
              color: e.accent,
              fontFamily: 'Vazirmatn_600SemiBold',
              textDecorationLine: 'underline',
            },
            children: T.privacyLink,
          }),
        ],
      });
    }
    function B({ label: e, onPress: t, disabled: n = !1, testID: i }) {
      const { colors: o } = (0, S.useTheme)();
      return (0, P.jsx)(l.default, {
        testID: i,
        accessibilityRole: 'button',
        accessibilityState: { disabled: n },
        disabled: n,
        onPress: t,
        style: ({ pressed: e }) => ({
          minHeight: 44,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 8,
          opacity: n ? 0.4 : e ? 0.6 : 1,
        }),
        children: (0, P.jsx)(p.Copy, {
          style: {
            fontSize: 15,
            lineHeight: 22,
            fontFamily: 'Vazirmatn_500Medium',
            color: o.muted,
          },
          children: e,
        }),
      });
    }
    function O({ text: e, delay: o }) {
      const { colors: r } = (0, S.useTheme)(),
        l = (0, t.useRef)(new n.default.Value(o ? 0 : 1)).current;
      return (
        (0, t.useEffect)(() => {
          if (!o) return;
          const e = n.default.timing(l, {
            toValue: 1,
            duration: 300,
            delay: o,
            easing: i.default.out(i.default.cubic),
            useNativeDriver: !1,
          });
          return (e.start(), () => e.stop());
        }, [o, l]),
        (0, P.jsxs)(n.default.View, {
          style: {
            flexDirection: 'row-reverse',
            alignItems: 'center',
            gap: 10,
            opacity: l,
            transform: [
              {
                translateY: l.interpolate({
                  inputRange: [0, 1],
                  outputRange: [8, 0],
                }),
              },
            ],
          },
          children: [
            (0, P.jsx)(a.default, {
              style: {
                width: 26,
                height: 26,
                borderRadius: 13,
                backgroundColor: r.success,
                alignItems: 'center',
                justifyContent: 'center',
              },
              children: (0, P.jsx)(y.Icon, {
                name: 'check',
                size: 15,
                color: r.onSuccess,
              }),
            }),
            (0, P.jsx)(p.Copy, {
              style: { flex: 1, fontSize: 15, lineHeight: 24 },
              children: e,
            }),
          ],
        })
      );
    }
    const G = [
      ['#0d9488', 0],
      ['#22c55e', 40],
      ['#f5b400', 80],
      ['#ff5a7a', 125],
      ['#0d9488', 170],
      ['#22c55e', 215],
      ['#f5b400', 260],
      ['#ff5a7a', 305],
    ];
    function K({ pop: e }) {
      return (0, P.jsx)(a.default, {
        pointerEvents: 'none',
        style: { position: 'absolute', left: 66, top: 66 },
        children: G.map(([t, i], o) => {
          const r = o % 2 ? 92 : 108,
            l = Math.cos((i * Math.PI) / 180) * r,
            s = Math.sin((i * Math.PI) / 180) * r;
          return (0, P.jsx)(
            n.default.View,
            {
              style: {
                position: 'absolute',
                width: o % 2 ? 8 : 10,
                height: o % 2 ? 8 : 10,
                borderRadius: 5,
                backgroundColor: t,
                opacity: e.interpolate({
                  inputRange: [0, 0.3, 1],
                  outputRange: [0, 1, 0.9],
                }),
                transform: [
                  {
                    translateX: e.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, l],
                    }),
                  },
                  {
                    translateY: e.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, s],
                    }),
                  },
                ],
              },
            },
            o,
          );
        }),
      });
    }
  },
  554,
  [
    2, 92, 204, 196, 224, 210, 94, 232, 17, 99, 257, 380, 342, 258, 407, 385,
    486, 414, 494, 382, 415, 553, 510, 512, 542, 555, 311, 1, 513, 338,
  ],
);
