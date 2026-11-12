// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 379; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, i, a, _m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.PrimaryKey = de),
      (_e.OutlineKey = ue),
      (_e.TextKey = me),
      Object.defineProperty(_e, 'DEMO_KEY_LABEL', {
        enumerable: !0,
        get: function () {
          return he;
        },
      }),
      (_e.AccountGate = function (e) {
        const [o, s] = (0, t.useState)(0);
        return (
          (0, t.useEffect)(
            () => (0, D.onAppRestart)(() => s((e) => e + 1)),
            [],
          ),
          (0, oe.jsx)(ge, { ...e }, o)
        );
      }));
    var t = _r(d[0]),
      o = e(_r(d[1])),
      s = e(_r(d[2]));
    _r(d[3]);
    var n = e(_r(d[4])),
      r = e(_r(d[5])),
      l = e(_r(d[6])),
      c = e(_r(d[7])),
      u = _r(d[8]),
      p = _r(d[9]),
      m = _r(d[10]),
      h = e(_r(d[11])),
      f = _r(d[12]),
      b = _r(d[13]),
      y = _r(d[14]),
      x = _r(d[15]),
      w = _r(d[16]),
      j = _r(d[17]),
      S = _r(d[18]),
      v = _r(d[19]),
      C = _r(d[20]),
      I = _r(d[21]),
      L = _r(d[22]),
      F = _r(d[23]),
      T = _r(d[24]),
      k = _r(d[25]),
      P = _r(d[26]),
      E = _r(d[27]),
      D = _r(d[28]),
      _ = _r(d[29]),
      A = _r(d[30]),
      N = _r(d[31]),
      z = _r(d[32]),
      R = (_r(d[33]), _r(d[34])),
      O = _r(d[35]),
      q = _r(d[36]),
      H = _r(d[37]),
      M = _r(d[38]),
      W = _r(d[39]),
      B = _r(d[40]),
      U = _r(d[41]),
      V = _r(d[42]),
      G = _r(d[43]),
      K = _r(d[44]),
      $ = _r(d[45]),
      J = _r(d[46]),
      Y = _r(d[47]),
      Z = _r(d[48]),
      Q = _r(d[49]),
      X = _r(d[50]),
      ee = _r(d[51]),
      te = _r(d[52]),
      oe = _r(d[53]);
    const ae = (e, t) =>
        Promise.race([e.catch(() => {}), new Promise((e) => setTimeout(e, t))]),
      se = {
        login: 'login',
        join: 'join',
        email: 'email',
        signup: 'signup',
        register: 'signup-email',
        staff: 'staff',
        reset: 'reset',
        forgot: 'forgot',
        demo: 'demo',
      },
      ne = {
        '#login': 'login',
        '#join': 'join',
        '#email': 'email',
        '#signup': 'register',
        '#signup-email': 'register',
        '#staff': 'staff',
        '#reset': 'reset',
        '#forgot': 'forgot',
      },
      re = (0, t.createContext)({ compact: !1, ultra: !1 }),
      ie = () => (0, t.useContext)(re),
      le = r.default.create({
        input: {
          flex: 1,
          minWidth: 0,
          borderWidth: 0,
          borderRadius: 0,
          backgroundColor: 'transparent',
          paddingHorizontal: 0,
          paddingVertical: 6,
          fontSize: 16,
        },
      });
    function ce({ label: e, icon: t, hint: o, error: s, children: n }) {
      const { colors: c, mode: u } = (0, b.useTheme)(),
        { compact: p, ultra: h } = ie();
      return (0, oe.jsxs)(l.default, {
        style: { gap: h ? 3 : p ? 4 : 6 },
        children: [
          !h &&
            (0, oe.jsx)(f.Copy, {
              style: {
                fontSize: p ? 13 : 14,
                lineHeight: p ? 17 : 19,
                fontFamily: 'Vazirmatn_600SemiBold',
                color: c.text,
              },
              children: e,
            }),
          (0, oe.jsxs)(l.default, {
            style: {
              flexDirection: 'row-reverse',
              direction: (0, G.flipped)() ? 'rtl' : 'ltr',
              alignItems: 'center',
              gap: 8,
              height: h ? 42 : p ? 44 : 48,
              borderRadius: 12,
              borderWidth: r.default.hairlineWidth,
              borderColor: s ? c.danger : c.line,
              backgroundColor:
                'light' === u
                  ? 'rgba(255,255,255,.72)'
                  : 'rgba(255,255,255,.06)',
              paddingHorizontal: 9,
            },
            children: [
              (0, oe.jsx)(l.default, {
                style: {
                  width: 28,
                  height: 28,
                  borderRadius: 14,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: c.soft,
                },
                children: (0, oe.jsx)(m.Icon, {
                  name: t,
                  size: 17,
                  color: c.text,
                }),
              }),
              n,
            ],
          }),
          !!s &&
            (0, oe.jsx)(f.Copy, {
              accessibilityRole: 'alert',
              style: { fontSize: 12, lineHeight: 16, color: c.danger },
              children: s,
            }),
          !s &&
            !!o &&
            !h &&
            (0, oe.jsx)(f.Copy, {
              style: { fontSize: 12, lineHeight: 16, color: c.muted },
              children: o,
            }),
        ],
      });
    }
    function de({
      label: e,
      busy: t = !1,
      disabled: s = !1,
      onPress: r,
      testID: l,
    }) {
      const { colors: c, mode: u } = (0, b.useTheme)(),
        { compact: p, ultra: m } = ie(),
        h = t || s;
      return (0, oe.jsxs)(n.default, {
        testID: l,
        accessibilityRole: 'button',
        accessibilityState: { disabled: h, busy: t },
        disabled: h,
        onPress: r,
        style: ({ pressed: e }) => ({
          height: m ? 42 : p ? 46 : 50,
          borderRadius: 14,
          backgroundColor: c.accent,
          flexDirection: 'row-reverse',
          direction: (0, G.flipped)() ? 'rtl' : 'ltr',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          opacity: h ? 0.5 : e ? 0.92 : 1,
        }),
        children: [
          t && (0, oe.jsx)(o.default, { size: 'small', color: c.onAccent }),
          (0, oe.jsx)(f.Copy, {
            style: {
              fontSize: 16,
              lineHeight: 21,
              fontFamily: 'Vazirmatn_600SemiBold',
              color: c.onAccent,
            },
            children: t
              ? (0, V.L)(
                  '\u062f\u0631 \u062d\u0627\u0644 \u0627\u0646\u062c\u0627\u0645\u2026',
                )
              : e,
          }),
        ],
      });
    }
    function ue({
      label: e,
      icon: t,
      glyph: o,
      disabled: s = !1,
      onPress: l,
      testID: c,
    }) {
      const { colors: u } = (0, b.useTheme)(),
        { compact: p, ultra: h } = ie();
      return (0, oe.jsxs)(n.default, {
        testID: c,
        accessibilityRole: 'button',
        accessibilityState: { disabled: s },
        disabled: s,
        onPress: l,
        style: ({ pressed: e }) => ({
          height: h ? 40 : p ? 44 : 48,
          borderRadius: 14,
          borderWidth: 2 * r.default.hairlineWidth,
          borderColor: u.accentActive,
          backgroundColor: e ? u.accentSoft : 'transparent',
          flexDirection: 'row-reverse',
          direction: (0, G.flipped)() ? 'rtl' : 'ltr',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          opacity: s ? 0.45 : 1,
        }),
        children: [
          !!t && (0, oe.jsx)(m.Icon, { name: t, size: 17, color: u.text }),
          o,
          (0, oe.jsx)(f.Copy, {
            style: {
              fontSize: 15,
              lineHeight: 20,
              fontFamily: 'Vazirmatn_600SemiBold',
              color: u.text,
            },
            children: e,
          }),
        ],
      });
    }
    function pe({ methods: e, onCredential: o, onError: s }) {
      const { colors: n } = (0, b.useTheme)(),
        [r, c] = (0, t.useState)(!1),
        [u, p] = (0, t.useState)(0);
      return e.google && e.clientId
        ? (0, oe.jsx)(l.default, {
            testID: 'auth-google',
            onLayout: (e) => p(Math.round(e.nativeEvent.layout.width)),
            style: {
              minHeight: 44,
              alignItems: 'center',
              justifyContent: 'center',
            },
            children:
              u > 0 &&
              (0, oe.jsx)(k.GoogleButton, {
                clientId: e.clientId,
                width: Math.max(200, Math.min(400, u)),
                onError: s,
                onCredential: o,
              }),
          })
        : (0, oe.jsxs)(l.default, {
            style: { gap: 6 },
            children: [
              (0, oe.jsx)(ue, {
                testID: 'auth-google',
                glyph: (0, oe.jsx)(f.Copy, {
                  style: {
                    fontSize: 17,
                    lineHeight: 21,
                    fontFamily: 'Vazirmatn_700Bold',
                    color: '#4285F4',
                  },
                  children: 'G',
                }),
                label: (0, V.L)(
                  '\u0648\u0631\u0648\u062f \u0628\u0627 \u062c\u06cc\u0645\u06cc\u0644',
                ),
                onPress: () => c(!0),
              }),
              r &&
                (0, oe.jsx)(f.Copy, {
                  testID: 'auth-google-soon',
                  accessibilityRole: 'alert',
                  style: {
                    fontSize: 13,
                    lineHeight: 18,
                    color: n.muted,
                    textAlign: 'center',
                  },
                  children: (0, V.L)(
                    '\u0648\u0631\u0648\u062f \u0628\u0627 \u062c\u06cc\u0645\u06cc\u0644 \u0628\u0647\u200c\u0632\u0648\u062f\u06cc \u0641\u0639\u0627\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f',
                  ),
                }),
            ],
          });
    }
    function me({
      label: e,
      onPress: t,
      compact: o = !1,
      testID: s,
      disabled: r = !1,
    }) {
      const { colors: l } = (0, b.useTheme)();
      return (0, oe.jsx)(n.default, {
        testID: s,
        accessibilityRole: 'button',
        accessibilityState: { disabled: r },
        disabled: r,
        onPress: t,
        style: ({ pressed: e }) => ({
          opacity: r ? 0.45 : e ? 0.6 : 1,
          paddingVertical: o ? 2 : 6,
          paddingHorizontal: o ? 6 : 2,
        }),
        children: (0, oe.jsx)(f.Copy, {
          style: {
            fontSize: 13,
            lineHeight: 18,
            fontFamily: 'Vazirmatn_500Medium',
            color: r ? l.muted : l.text,
          },
          children: e,
        }),
      });
    }
    const he =
      '\u0627\u0648\u0644 \u0628\u0628\u06cc\u0646\u0645\u060c \u0628\u0639\u062f \u0628\u062e\u0631\u0645';
    function fe({ children: e }) {
      const { data: t } = (0, C.useBilling)(),
        o = t?.free?.monthly_record_limit ?? I.FREE_RECORD_LIMIT;
      return (0, oe.jsx)(oe.Fragment, {
        children: e(
          (0, v.interpolate)(v.platformFa.freeStart, {
            n: o.toLocaleString((0, V.numberLocale)()),
          }),
        ),
      });
    }
    function ge({ children: e }) {
      const { colors: C, mode: I } = (0, b.useTheme)(),
        [k, ie] = (0, t.useState)({ google: !1 }),
        [ge, be] = (0, t.useState)(null),
        [ye, xe] = (0, t.useState)([]),
        [we, je] = (0, t.useState)(null),
        [Se, ve] = (0, t.useState)(!1),
        [Ce, Ie] = (0, t.useState)({ shopLimit: 1, canAddShop: !1 }),
        [Le, Fe] = (0, t.useState)(!1),
        [Te, ke] = (0, t.useState)(!0),
        [Pe, Ee] = (0, t.useState)(!1),
        [De, Ae] = (0, t.useState)(''),
        [Ne, ze] = (0, t.useState)(''),
        [Re, Oe] = (0, t.useState)('login'),
        [qe, He] = (0, t.useState)(1),
        [Me, We] = (0, t.useState)(''),
        [Be, Ue] = (0, t.useState)(''),
        [Ve, Ge] = (0, t.useState)(''),
        [Ke, $e] = (0, t.useState)(!1),
        [Je, Ye] = (0, t.useState)(''),
        [Ze, Qe] = (0, t.useState)(''),
        [Xe, et] = (0, t.useState)(''),
        [tt, ot] = (0, t.useState)(''),
        [at, st] = (0, t.useState)(!0),
        [nt, rt] = (0, t.useState)(!1),
        [it, lt] = (0, t.useState)(null),
        [ct, dt] = (0, t.useState)(!1),
        [ut, pt] = (0, t.useState)(!1),
        [mt, ht] = (0, t.useState)(F.codeLength),
        ft = (0, t.useRef)(null),
        gt = (0, t.useRef)(''),
        [bt, yt] = (0, t.useState)(''),
        [xt, wt] = (0, t.useState)(''),
        [jt, St] = (0, t.useState)(!1),
        [vt, Ct] = (0, t.useState)('form'),
        [It, Lt] = (0, t.useState)(null),
        [Ft, Tt] = (0, t.useState)(!1),
        [kt, Pt] = (0, t.useState)(null),
        [Et, Dt] = (0, t.useState)(''),
        [_t, At] = (0, t.useState)(''),
        [Nt, zt] = (0, t.useState)(0),
        [Rt, Ot] = (0, t.useState)('idle'),
        [qt, Ht] = (0, t.useState)('phone'),
        [Mt, Wt] = (0, t.useState)('verify'),
        [Bt, Ut] = (0, t.useState)(''),
        [Vt, Gt] = (0, t.useState)(0),
        [Kt, $t] = (0, t.useState)(!1),
        { height: Jt, width: Yt } = (0, c.default)(),
        Zt = (0, p.useSafeAreaInsets)(),
        Qt = Jt < 640 || ('register' === Re && 'form' === vt && Jt < 700),
        Xt =
          Qt ||
          Jt < 720 ||
          Yt < 360 ||
          ('register' === Re && 'form' === vt && Jt < 900),
        eo = { compact: Xt, ultra: Qt },
        to = (0, t.useRef)(null);
      ((to.current = ge),
        (0, W.useSeenSession)(!!ge),
        (0, W.useDefaultTab)((e) => {
          'signup' === e && Oe((e) => ('login' === e ? 'join' : e));
        }),
        (0, W.useResumeFunnel)(() => pt(!0)));
      const oo = (0, t.useRef)(!0),
        ao = () => '#demo' === window.location.hash,
        so = () => ({
          id: K.DEMO_SHOP_ID,
          name: (0, J.demoShopName)(),
          role: 'owner',
          timezone: 'Asia/Tehran',
          businessType: 'reseller',
          businessExample: (0, V.L)(
            '\u067e\u0648\u0634\u0627\u06a9\u060c \u06a9\u06cc\u0641 \u0648 \u06a9\u0641\u0634',
          ),
          ...(0, $.staffPreview)(),
        }),
        no = () => ({
          id: (0, K.demoUserId)(),
          name: (0, V.L)('\u0645\u0647\u0645\u0627\u0646'),
          email: null,
          emailVerified: !1,
        }),
        ro = (0, t.useCallback)((e) => {
          ((to.current = e), (0, y.selectUser)(e), be(e));
        }, []),
        [io, lo] = (0, t.useState)(!1),
        [co, uo] = (0, t.useState)(!1),
        [po, mo] = (0, t.useState)(null),
        [ho, fo] = (0, t.useState)(!1),
        [go, bo] = (0, t.useState)(''),
        [yo, xo] = (0, t.useState)(1),
        [wo, jo] = (0, t.useState)(''),
        [So, vo] = (0, t.useState)('idle'),
        [Co, Io] = (0, t.useState)(F.codeLength);
      function Lo(e) {
        ((0, K.startDemo)(),
          (0, J.resetDemo)({
            field: e?.fieldId,
            custom: e?.customField,
            shopName: e?.shopName?.trim(),
          }),
          (0, y.selectShop)(so()),
          (0, y.selectUser)(no()),
          je(null),
          Fe(!0));
      }
      function Fo() {
        ((0, K.demoActive)() && (0, K.stopDemo)(),
          (0, J.clearDemo)(),
          Y.ledgerEntries.close(),
          (0, y.selectShop)(null),
          (0, y.selectUser)(to.current),
          Fe(!1));
      }
      function To() {
        (Fo(),
          '#demo' === window.location.hash &&
            window.history.replaceState(
              null,
              '',
              window.location.pathname + window.location.search,
            ));
      }
      function ko() {
        (ea(null), (ta.current = !1), To(), Do('home'));
      }
      async function Po() {
        Xo
          ? await oa()
          : (await h.default
              .setItem(H.STORE_KEY, JSON.stringify({ step: 'field' }))
              .catch(() => {}),
            (ta.current = !0),
            To(),
            Do('signup'));
      }
      function Eo(e) {
        return e.find((e) => 'owner' === e.role) || e[0] || null;
      }
      function Do(e) {
        (pt('signup' === e),
          'signup' !== e && Pt(null),
          'demo' === e
            ? Lo()
            : ((0, K.demoActive)() && Fo(),
              Fe(!1),
              st('home' === e),
              'home' !== e && (Oe('signup' === e ? 'register' : e), He(1))),
          Ae(''),
          ze(''),
          Ue(''),
          Ge(''),
          _o(),
          Ct('form'),
          wt(''),
          bo(''),
          xo(1),
          jo(''),
          vo('idle'),
          (window.location.hash = 'home' === e ? 'main' : se[e]));
      }
      function _o() {
        (Dt(''), At(''), Ot('idle'), Ut(''), Gt(0), $t(!1), Tt(!1));
      }
      async function Ao() {
        const e = await (0, y.request)('/v1/shops');
        return (
          xe(e.shops),
          Ie({ shopLimit: e.shopLimit ?? 1, canAddShop: !!e.canAddShop }),
          ve(!0),
          e.shops
        );
      }
      async function No(e) {
        if (!Pe) {
          (Ee(!0), Ae(''), ze(''));
          try {
            await e();
          } catch (e) {
            Ae((0, y.message)(e));
          } finally {
            Ee(!1);
          }
        }
      }
      async function zo(e, t = ge) {
        To();
        const o = e;
        if (!o.businessType)
          try {
            const s = await h.default.getItem((0, q.businessKey)(t, e)),
              n = s ? JSON.parse(s) : null;
            n?.businessType
              ? Object.assign(o, {
                  businessType: n.businessType,
                  businessExample: n.businessExample,
                })
              : Object.assign(o, { businessType: 'both' });
          } catch {
            Object.assign(o, { businessType: 'both' });
          }
        ((0, y.selectShop)(o), je(o));
      }
      function Ro() {
        No(async () => {
          await ae((0, Z.disableWebPush)(), 4e3);
          try {
            await (0, y.request)('/v1/auth/logout', 'POST', {});
          } catch (e) {
            if (!(e instanceof y.ApiError && 401 === e.status))
              return void (0, _.showToast)(
                (0, V.L)(
                  '\u062e\u0631\u0648\u062c \u0627\u0646\u062c\u0627\u0645 \u0646\u0634\u062f\u061b \u0627\u06cc\u0646\u062a\u0631\u0646\u062a \u0631\u0627 \u0628\u0631\u0631\u0633\u06cc \u06a9\u0646 \u0648 \u062f\u0648\u0628\u0627\u0631\u0647 \xab\u062e\u0631\u0648\u062c\xbb \u0631\u0627 \u0628\u0632\u0646.',
                ),
              );
          }
          (te.swrStore.setScope(null),
            await te.swrStore.clearAll(),
            (0, E.forgetIdentities)(),
            mo(null),
            fo(!1),
            await (0, y.storeToken)(null),
            await (0, x.forgetOffline)(),
            (0, K.demoActive)() && (0, K.stopDemo)(),
            (0, y.selectShop)(null),
            je(null),
            xe([]),
            ve(!1),
            ro(null),
            Fe(!1),
            _o(),
            Ct('form'),
            Oe('login'),
            pt(!1),
            Ae(''),
            ze(''),
            (window.location.hash = 'main'),
            st(!0));
        });
      }
      async function Oo(e, t = !1) {
        (To(),
          (0, E.forgetIdentities)(),
          mo(e.replaced && !e.replaced.sameDevice ? e.replaced : null),
          await (0, y.storeToken)(e.token || null),
          ve(!1),
          ro(e.user));
        const o = await Ao();
        ((0, x.saveSession)(e.user, o), _o(), Ct('form'), Ue(''), Ge(''));
        const s = Eo(o);
        s && (await zo(s, e.user));
      }
      function qo(e) {
        const t = e.trim().toUpperCase();
        /^[A-Z0-9-]{6,32}$/.test(t) &&
          sessionStorage.setItem('anbari.referral', t);
      }
      async function Ho(e, t, o = !1) {
        const s = await (0, T.otpCall)('/v1/auth/otp/request', {
          target: e,
          purpose: t,
          ...('phone' === e
            ? { phone: (0, T.toE164)(bt) }
            : { email: Me.trim() }),
        });
        return s.ok
          ? (bo(''),
            Ht(e),
            Wt(t),
            Dt(''),
            At(''),
            zt((e) => e + 1),
            Ot('idle'),
            Ae(''),
            Ut(
              String(s.data?.masked || '') ||
                ('phone' === e ? (0, T.maskPhone)(bt) : (0, T.maskEmail)(Me)),
            ),
            Gt(Number(s.data?.resendAfter) || 90),
            ht(Number(s.data?.codeLength) || F.codeLength),
            Tt(!1),
            ze(o ? '' : v.platformFa.otpResent),
            !0)
          : (bo(s.code),
            'otp_too_soon' === s.code
              ? (Gt(Number((0, T.otpDetail)(s, 'retryAfter')) || 90),
                Ae(v.platformFa.otpTooSoon),
                !1)
              : 'otp_no_account' === s.code
                ? (Ae(
                    (0, V.L)(
                      '\u0627\u06cc\u0646 \u0634\u0645\u0627\u0631\u0647 \u0647\u0646\u0648\u0632 \u062d\u0633\u0627\u0628\u06cc \u0646\u062f\u0627\u0631\u062f\u061b \u0632\u0628\u0627\u0646\u0647\u0654 \xab\u062b\u0628\u062a\u200c\u0646\u0627\u0645\xbb \u0631\u0627 \u0628\u0632\u0646.',
                    ),
                  ),
                  !1)
                : (Ae(
                    'backend_missing' === s.code
                      ? v.platformFa.otpUnavailable
                      : (0, y.message)(Error(s.code)),
                  ),
                  !1));
      }
      async function Mo(e) {
        if (Kt || 'success' === Rt) return;
        ($t(!0), Ae(''), ze(''));
        const t = await (0, T.otpCall)('/v1/auth/otp/verify', {
          target: qt,
          purpose: Mt,
          code: (0, T.latinDigits)(e),
          deviceName: 'myAnbari',
          ...('phone' === qt
            ? { phone: (0, T.toE164)(bt) }
            : { email: Me.trim() }),
          ...(It?.asked ? { googleTicket: It.ticket } : {}),
        }).catch(() => null);
        if (($t(!1), t?.ok)) {
          (Ot('success'), ze(v.platformFa.otpSuccess));
          const e = t.data?.googleLink;
          return (
            e &&
              (Lt(null),
              (0, _.showToast)(
                e.linked
                  ? (0, V.L)(
                      '\u062c\u06cc\u0645\u06cc\u0644 {email} \u0647\u0645 \u0628\u0647 \u0647\u0645\u06cc\u0646 \u062d\u0633\u0627\u0628 \u0648\u0635\u0644 \u0634\u062f\u061b \u0627\u0632 \u0627\u06cc\u0646 \u0628\u0647 \u0628\u0639\u062f \u0628\u0627 \xab\u0648\u0631\u0648\u062f \u0628\u0627 \u062c\u06cc\u0645\u06cc\u0644\xbb \u0647\u0645 \u0648\u0627\u0631\u062f \u0647\u0645\u06cc\u0646 \u062d\u0633\u0627\u0628 \u0645\u06cc\u200c\u0634\u0648\u06cc.',
                      { email: '\u2066' + String(e.email || '') + '\u2069' },
                    )
                  : (0, y.message)(
                      Error(String(e.reason || 'google_ticket_expired')),
                    ),
              )),
            void setTimeout(() => {
              (async () => {
                Ee(!0);
                try {
                  await Oo(t.data, 'verify' === Mt);
                } catch (e) {
                  (Ot('idle'), Ae((0, y.message)(e)));
                } finally {
                  Ee(!1);
                }
              })();
            }, 340)
          );
        }
        if ('google_ticket_expired' === t?.code)
          return (
            Lt(null),
            Ot('idle'),
            void Ae((0, y.message)(Error('google_ticket_expired')))
          );
        if ((Ot('error'), Dt(''), At(''), 'otp_invalid' === t?.code)) {
          const e = Number((0, T.otpDetail)(t, 'attemptsLeft'));
          return void Ae(
            Number.isFinite(e)
              ? (0, v.interpolate)(v.platformFa.otpInvalidLeft, {
                  left: (0, T.persianDigits)(e),
                })
              : v.platformFa.otpInvalid,
          );
        }
        Ae(
          'otp_expired' !== t?.code
            ? t && 'backend_missing' !== t.code
              ? (0, y.message)(Error(t.code))
              : v.platformFa.otpUnavailable
            : v.platformFa.otpExpired,
        );
      }
      function Wo() {
        io &&
          ((0, T.isMobile)(bt)
            ? (wt(''),
              No(async () => {
                (await Ho('phone', 'login', !0)) && Ct('otp');
              }))
            : wt(v.platformFa.phoneInvalid));
      }
      async function Bo() {
        if (!(0, T.isMobile)(bt)) return void wt(v.platformFa.phoneInvalid);
        wt('');
        const e = await (0, T.otpCall)('/v1/auth/otp/request', {
          target: 'phone',
          purpose: 'reset',
          phone: (0, T.toE164)(bt),
        });
        return e.ok
          ? (xo(2),
            jo(''),
            vo('idle'),
            Io(Number(e.data?.codeLength) || F.codeLength),
            bo(''),
            Ut(String(e.data?.masked || '') || (0, T.maskPhone)(bt)),
            Gt(Number(e.data?.resendAfter) || 90),
            Ae(''),
            void ze(
              e.data?.test
                ? (0, v.interpolate)(
                    (0, V.L)(
                      '\u062d\u0627\u0644\u062a \u0622\u0632\u0645\u0627\u06cc\u0634\u06cc: \u06a9\u062f {code} \u0627\u0633\u062a.',
                    ),
                    {
                      code: (0, T.persianDigits)(String(e.data.testCode || '')),
                    },
                  )
                : '',
            ))
          : (bo(e.code),
            'otp_too_soon' === e.code
              ? (Gt(Number((0, T.otpDetail)(e, 'retryAfter')) || 90),
                void Ae(v.platformFa.otpTooSoon))
              : void ('otp_no_account' !== e.code
                  ? Ae(
                      'backend_missing' === e.code
                        ? v.platformFa.otpUnavailable
                        : (0, y.message)(Error(e.code)),
                    )
                  : Ae(
                      (0, V.L)(
                        '\u0627\u06cc\u0646 \u0634\u0645\u0627\u0631\u0647 \u0647\u0646\u0648\u0632 \u062d\u0633\u0627\u0628\u06cc \u0646\u062f\u0627\u0631\u062f\u061b \u0632\u0628\u0627\u0646\u0647\u0654 \xab\u062b\u0628\u062a\u200c\u0646\u0627\u0645\xbb \u0631\u0627 \u0628\u0632\u0646.',
                      ),
                    )));
      }
      async function Uo() {
        if (1 === yo) return void (await Bo());
        if (wo.length < Co)
          return (
            vo('error'),
            void Ae(
              (0, v.interpolate)(v.platformFa.otpNoCode, {
                n: (0, T.persianDigits)(Co),
              }),
            )
          );
        if (Be.length < 10) return void Ae(v.platformFa.passwordMin);
        if (Be !== Ve) return void Ae(v.platformFa.passwordMismatch);
        const e = await (0, T.otpCall)('/v1/auth/password/reset-code', {
          phone: (0, T.toE164)(bt),
          code: (0, T.latinDigits)(wo),
          password: Be,
          deviceName: 'myAnbari',
        }).catch(() => null);
        if (e?.ok)
          return (
            vo('success'),
            (0, _.showToast)(
              (0, V.L)(
                '\u0631\u0645\u0632 \u062a\u0627\u0632\u0647 \u0630\u062e\u06cc\u0631\u0647 \u0634\u062f \u0648 \u0648\u0627\u0631\u062f \u0634\u062f\u06cc\u061b \u062f\u0633\u062a\u06af\u0627\u0647\u200c\u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u0627\u0632 \u062d\u0633\u0627\u0628 \u062e\u0627\u0631\u062c \u0634\u062f\u0646\u062f.',
              ),
            ),
            void (await Oo(e.data))
          );
        if ((vo('error'), jo(''), 'otp_invalid' === e?.code)) {
          const t = Number((0, T.otpDetail)(e, 'attemptsLeft'));
          return void Ae(
            Number.isFinite(t)
              ? (0, v.interpolate)(v.platformFa.otpInvalidLeft, {
                  left: (0, T.persianDigits)(t),
                })
              : v.platformFa.otpInvalid,
          );
        }
        Ae(
          'otp_expired' !== e?.code && 'otp_locked' !== e?.code
            ? 'invalid_request' !== e?.code
              ? e && 'backend_missing' !== e.code
                ? (0, y.message)(Error(e.code))
                : v.platformFa.otpUnavailable
              : v.platformFa.passwordMin
            : v.platformFa.otpExpired,
        );
      }
      async function Vo() {
        const e = await (0, T.requestVoiceCall)((0, T.toE164)(bt)).catch(
          () => null,
        );
        return e?.ok
          ? (Tt(!0),
            Ae(''),
            void ze(
              e.data?.test
                ? (0, v.interpolate)(
                    (0, V.L)(
                      '\u062d\u0627\u0644\u062a \u0622\u0632\u0645\u0627\u06cc\u0634\u06cc: \u062a\u0645\u0627\u0633\u06cc \u06af\u0631\u0641\u062a\u0647 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f\u061b \u06a9\u062f {code} \u0627\u0633\u062a.',
                    ),
                    {
                      code: (0, T.persianDigits)(String(e.data.testCode || '')),
                    },
                  )
                : (0, v.interpolate)(
                    (0, V.L)(
                      '\u0627\u0644\u0627\u0646 \u0628\u0627 {phone} \u062a\u0645\u0627\u0633 \u0645\u06cc\u200c\u06af\u06cc\u0631\u06cc\u0645 \u0648 \u06a9\u062f \u0631\u0627 \u062f\u0648 \u0628\u0627\u0631 \u0645\u06cc\u200c\u062e\u0648\u0627\u0646\u06cc\u0645\u061b \u0647\u0645\u0627\u0646 \u06a9\u062f \u0631\u0627 \u0627\u06cc\u0646\u062c\u0627 \u0628\u0632\u0646.',
                    ),
                    {
                      phone: '\u2066' + (Bt || (0, T.maskPhone)(bt)) + '\u2069',
                    },
                  ),
            ))
          : 'otp_too_soon' === e?.code
            ? (Gt(Number((0, T.otpDetail)(e, 'retryAfter')) || 30),
              void Ae(
                (0, V.L)(
                  '\u06a9\u0645\u06cc \u0635\u0628\u0631 \u06a9\u0646\u061b \u062a\u0645\u0627\u0633 \u0635\u0648\u062a\u06cc \u0628\u0639\u062f \u0627\u0632 \u062a\u0645\u0627\u0645 \u0634\u062f\u0646 \u0632\u0645\u0627\u0646 \xab\u0627\u0631\u0633\u0627\u0644 \u062f\u0648\u0628\u0627\u0631\u0647\xbb \u0645\u0645\u06a9\u0646 \u0627\u0633\u062a.',
                ),
              ))
            : void Ae(
                'otp_expired' !== e?.code
                  ? e && 'backend_missing' !== e.code
                    ? (0, y.message)(Error(e.code))
                    : v.platformFa.otpUnavailable
                  : v.platformFa.otpExpired,
              );
      }
      async function Go() {
        if ('forgot' === Re) return void (await Uo());
        if ('reset' === Re)
          return 1 === qe
            ? (await (0, y.request)('/v1/auth/password/request', 'POST', {
                email: Me,
              }),
              He(2),
              void ze(v.platformFa.resetRequested))
            : Be.length < 10
              ? void Ae(v.platformFa.passwordMin)
              : Be !== Ve
                ? void Ae(v.platformFa.passwordMismatch)
                : (await (0, y.request)('/v1/auth/password/reset', 'POST', {
                    token: Xe.trim(),
                    password: Be,
                  }),
                  ze(v.platformFa.resetDone),
                  Oe('email'),
                  He(1),
                  Ue(''),
                  Ge(''),
                  void et(''));
        if ('staff' === Re) {
          const e = Ze.trim().toLowerCase();
          if (!e || !Be)
            return void Ae(
              (0, V.L)(
                '\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0648 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f',
              ),
            );
          try {
            await Oo(
              await (0, y.request)('/v1/auth/login', 'POST', {
                username: e,
                password: Be,
                deviceName: 'myAnbari',
              }),
            );
          } catch (e) {
            if (
              e instanceof y.ApiError &&
              ['invalid_credentials', 'invalid_request'].includes(e.message)
            )
              return void Ae(
                (0, V.L)(
                  '\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc \u06cc\u0627 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u062f\u0631\u0633\u062a \u0646\u06cc\u0633\u062a',
                ),
              );
            throw e;
          }
          return;
        }
        if ('login' === Re) {
          const e = bt.trim().toLowerCase(),
            t = /^[a-z0-9][a-z0-9._-]{2,31}$/.test(e),
            o = !(0, T.isMobile)(bt) && t;
          if (!(0, T.isMobile)(bt) && !o)
            return void wt(v.platformFa.phoneInvalid);
          if (!Be)
            return void Ae(
              (0, V.L)(
                '\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f',
              ),
            );
          const s = o
              ? (0, V.L)(
                  '\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc \u06cc\u0627 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u062f\u0631\u0633\u062a \u0646\u06cc\u0633\u062a',
                )
              : (0, V.L)(
                  '\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644 \u06cc\u0627 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u062f\u0631\u0633\u062a \u0646\u06cc\u0633\u062a',
                ),
            n = (e) =>
              (0, y.request)('/v1/auth/login', 'POST', {
                ...e,
                password: Be,
                deviceName: 'myAnbari',
              });
          try {
            await Oo(
              await n(o ? { username: e } : { phone: (0, T.toE164)(bt) }),
            );
          } catch (r) {
            if (r instanceof y.ApiError && 'phone_unverified' === r.message)
              return void Ae(
                (0, V.L)(
                  '\u0627\u06cc\u0646 \u0634\u0645\u0627\u0631\u0647 \u0647\u0646\u0648\u0632 \u062a\u0623\u06cc\u06cc\u062f \u0646\u0634\u062f\u0647\u061b \u06cc\u06a9 \u0628\u0627\u0631 \u0628\u0627 \xab\u0648\u0631\u0648\u062f \u0628\u0627 \u06a9\u062f \u067e\u06cc\u0627\u0645\u06a9\u06cc\xbb \u0648\u0627\u0631\u062f \u0634\u0648\u060c \u0628\u0639\u062f \u0631\u0645\u0632\u062a \u0647\u0645 \u06a9\u0627\u0631 \u0645\u06cc\u200c\u06a9\u0646\u062f.',
                ),
              );
            if (
              r instanceof y.ApiError &&
              'invalid_credentials' === r.message &&
              !o &&
              t
            ) {
              try {
                return void (await Oo(await n({ username: e })));
              } catch (e) {
                if (
                  !(
                    e instanceof y.ApiError &&
                    ['invalid_credentials', 'invalid_request'].includes(
                      e.message,
                    )
                  )
                )
                  throw e;
              }
              return void Ae(
                (0, V.L)(
                  '\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644\u060c \u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc \u06cc\u0627 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u062f\u0631\u0633\u062a \u0646\u06cc\u0633\u062a',
                ),
              );
            }
            if (
              r instanceof y.ApiError &&
              ['invalid_credentials', 'invalid_request'].includes(r.message)
            )
              return void Ae(s);
            throw r;
          }
          return;
        }
        if ('register' === Re)
          return Be.length < 10
            ? void Ae(v.platformFa.passwordMin)
            : Be !== Ve
              ? void Ae(v.platformFa.passwordMismatch)
              : (qo(tt),
                void (await Oo(
                  await (0, y.request)('/v1/auth/register', 'POST', {
                    email: Me,
                    password: Be,
                    name: Je,
                    deviceName: 'myAnbari',
                  }),
                  !0,
                )));
        const e = await (0, y.request)('/v1/auth/login', 'POST', {
          email: Me,
          password: Be,
          deviceName: 'myAnbari',
        });
        await Oo(e, !1);
      }
      ((0, t.useEffect)(() => {
        let e,
          t = !0;
        const o = () => {
          (0, y.request)('/v1/auth/methods')
            .then((s) => {
              t &&
                (s && 'object' == typeof s
                  ? (ie(s), lo(!0))
                  : (e = setTimeout(o, 3e3)));
            })
            .catch(() => {
              t && (e = setTimeout(o, 3e3));
            });
        };
        return (
          o(),
          () => {
            ((t = !1), e && clearTimeout(e));
          }
        );
      }, []),
        (0, t.useEffect)(() => {
          const e =
              new URLSearchParams(window.location.search)
                .get('ref')
                ?.trim()
                .toUpperCase() || '',
            t =
              sessionStorage.getItem('anbari.referral')?.trim().toUpperCase() ||
              '',
            o = /^[A-Z0-9-]{6,32}$/.test(e) ? e : t;
          /^[A-Z0-9-]{6,32}$/.test(o)
            ? (sessionStorage.setItem('anbari.referral', o), ot(o), St(!0))
            : sessionStorage.removeItem('anbari.referral');
        }, []),
        (0, t.useEffect)(() => {
          let e = !0;
          return (
            (0, z.loadInventory)()
              .then(async (t) => {
                if (!e || !t) return;
                const o = new Set(['milk', 'rice', 'oil', 'water']);
                (t.products.some((e) => !o.has(e.id)) ||
                  t.movements.some((e) => !e.id.startsWith('sample-'))) &&
                  (lt(t),
                  '1' !==
                    (await h.default.getItem('anbari.legacy-export-seen')) &&
                    dt(!0));
              })
              .catch(() => {}),
            () => {
              e = !1;
            }
          );
        }, []),
        (0, t.useEffect)(() => {
          function e() {
            const e = window.location.hash;
            (rt(
              [
                '#main',
                '#features',
                '#how-it-works',
                '#install',
                '#start',
                '#pricing',
                '#questions',
                '#contact',
                '#about',
                '#terms',
              ].includes(e),
            ),
              '#demo' === e
                ? (0, K.demoActive)() || oo.current || Lo()
                : (0, K.demoActive)() && Fo(),
              st(!(e in ne) && '#demo' !== e),
              pt('#signup' === e),
              '#signup' !== e && Pt(null),
              ne[e] && Oe(ne[e]));
          }
          return (
            e(),
            window.addEventListener('hashchange', e),
            () => window.removeEventListener('hashchange', e)
          );
        }, []),
        (0, t.useEffect)(() => {
          !io ||
            ((k.otp?.email || ('register' !== Re && 'reset' !== Re)) &&
              (k.otp?.sms || 'forgot' !== Re)) ||
            Oe('login');
        }, [io, k, Re]),
        (0, t.useEffect)(() => {
          (0, Q.pingAppOpen)();
        }, []),
        (0, t.useEffect)(
          () => (0, X.startPresence)(ge && !Le && we ? we.id : null),
          [ge?.id, ge?.userId, Le, we?.id],
        ),
        (0, t.useEffect)(
          () =>
            (0, ee.startDeviceReport)(
              (ge && !Le && (ge.id || ge.userId)) || null,
            ),
          [ge?.id, ge?.userId, Le],
        ),
        (0, t.useEffect)(
          () => (
            (async () => {
              try {
                await (0, y.restoreToken)();
                const e = await (0, y.request)('/v1/auth/session');
                ro(e.user);
                const t = await Ao(),
                  o =
                    (await (0, w.rememberedShop)(
                      e.user.id || e.user.userId,
                      t,
                    )) || Eo(t);
                ((0, x.saveSession)(e.user, t),
                  o && !ao() && (await zo(o, e.user)));
              } catch (e) {
                if ((0, x.isNetworkError)(e)) {
                  const e = await (0, x.cachedSession)();
                  if (e?.user && Array.isArray(e.shops)) {
                    (ro(e.user), xe(e.shops), ve(!0));
                    const t = Eo(e.shops);
                    return void (t && !ao() && (await zo(t, e.user)));
                  }
                }
                ro(null);
              } finally {
                ((oo.current = !1),
                  ke(!1),
                  ao() && !(0, K.demoActive)() && Lo());
              }
            })(),
            () => {
              ((0, y.selectShop)(null), (0, y.selectUser)(null));
            }
          ),
          [ro],
        ),
        (0, t.useEffect)(() => {}, [we?.id]),
        (0, t.useEffect)(() => {
          if (Vt <= 0) return;
          const e = setTimeout(() => Gt((e) => e - 1), 1e3);
          return () => clearTimeout(e);
        }, [Vt]),
        (0, A.useSmsCode)({
          enabled:
            !ge &&
            'otp' === vt &&
            'phone' === qt &&
            'success' !== Rt &&
            Et.length < mt,
          length: mt,
          attempt: Nt,
          onCode: At,
        }));
      const Ko = () => {
          No(Go);
        },
        $o = (0, t.useCallback)((e) => {
          No(async () => {
            try {
              await Oo(
                await (0, y.request)('/v1/auth/google', 'POST', {
                  credential: e,
                  deviceName: 'myAnbari',
                }),
              );
            } catch (e) {
              if (
                (pt(!1),
                Oe('login'),
                e instanceof y.ApiError &&
                  'google_not_linked' === e.message &&
                  'string' == typeof e.details?.ticket)
              )
                return (
                  Ct('form'),
                  Lt({
                    ticket: e.details.ticket,
                    email: String(e.details.email || ''),
                    asked: !1,
                  }),
                  void (window.location.hash = 'login')
                );
              throw e;
            }
          });
        }, []),
        Jo = (0, t.useCallback)(() => Ae(v.platformFa.googleUnavailable), []),
        Yo = async (e) => {
          const t = await (0, y.request)('/v1/shops', 'POST', {
            ...e,
            ...(0, N.signupOrigin)(),
            ...(tt ? { referralCode: tt } : {}),
          });
          if (tt) {
            sessionStorage.removeItem('anbari.referral');
            const e = new URL(window.location.href);
            (e.searchParams.delete('ref'),
              window.history.replaceState(
                null,
                '',
                e.pathname + e.search + e.hash,
              ));
          }
          return (ot(''), t.shop);
        };
      (0, t.useEffect)(() => {
        (0, K.setDemoHandlers)({
          startOwn: () => {
            Po();
          },
          leave: ko,
        });
      });
      const [Zo, Qo] = (0, t.useState)(!1),
        [Xo, ea] = (0, t.useState)(null),
        ta = (0, t.useRef)(!1);
      async function oa() {
        (Xo &&
          (await h.default
            .setItem(
              H.STORE_KEY,
              JSON.stringify({ step: 'phone', answers: Xo }),
            )
            .catch(() => {})),
          (ta.current = !0),
          ea(null),
          To(),
          pt(!0));
      }
      function aa() {
        (ea(null), (ta.current = !1), Do('login'));
      }
      function sa() {
        const e = ft.current;
        e &&
          ((ft.current = null),
          (gt.current = ''),
          To(),
          pt(!1),
          st(!1),
          (0, E.forgetIdentities)(),
          ro(e.user),
          xe(e.shops),
          ve(!0),
          (0, x.saveSession)(e.user, e.shops),
          mo(e.replaced && !e.replaced.sameDevice ? e.replaced : null),
          e.shop &&
            (e.created
              ? ((0, y.selectShop)(e.shop), je(e.shop))
              : zo(e.shop, e.user)),
          window.history.replaceState(
            null,
            '',
            window.location.pathname + window.location.search,
          ));
      }
      async function na() {
        (dt(!1),
          await h.default
            .setItem('anbari.legacy-export-seen', '1')
            .catch(() => {}));
      }
      if (it && ct)
        return (0, oe.jsxs)(u.ScrollView, {
          style: { flex: 1, backgroundColor: C.bg },
          contentContainerStyle: {
            width: '100%',
            maxWidth: 900,
            alignSelf: 'center',
            padding: 20,
            paddingTop: 40,
            gap: 18,
          },
          children: [
            (0, oe.jsxs)(f.Card, {
              style: { borderColor: C.accent },
              children: [
                (0, oe.jsx)(f.Copy, {
                  style: f.common.title,
                  children: (0, V.L)(
                    '\u062d\u0627\u0644\u062a \u0630\u062e\u06cc\u0631\u0647\u200c\u0633\u0627\u0632\u06cc \u0631\u0648\u06cc \u062f\u0633\u062a\u06af\u0627\u0647 \u067e\u0627\u06cc\u0627\u0646 \u06cc\u0627\u0641\u062a\u0647 \u0627\u0633\u062a',
                  ),
                }),
                (0, oe.jsx)(f.Copy, {
                  children: (0, V.L)(
                    '\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0642\u062f\u06cc\u0645\u06cc \u0634\u0645\u0627 \u0647\u0645\u0686\u0646\u0627\u0646 \u0631\u0648\u06cc \u0647\u0645\u06cc\u0646 \u062f\u0633\u062a\u06af\u0627\u0647 \u0628\u0627\u0642\u06cc \u0645\u06cc\u200c\u0645\u0627\u0646\u062f \u0648 \u062d\u0630\u0641 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f. \u0627\u06a9\u0646\u0648\u0646 \u06cc\u06a9 \u0646\u0633\u062e\u0647 \u0627\u06a9\u0633\u0644 \u06cc\u0627 \u062c\u06cc\u200c\u0633\u0627\u0646 \u0627\u0632 \u0622\u0646 \u0628\u06af\u06cc\u0631\u06cc\u062f\u061b \u067e\u0633 \u0627\u0632 \u0628\u0633\u062a\u0646 \u0627\u06cc\u0646 \u0635\u0641\u062d\u0647 \u0646\u06cc\u0632 \u0627\u0632 \u0635\u0641\u062d\u0647 \u0648\u0631\u0648\u062f \u0628\u0647 \u062e\u0631\u0648\u062c\u06cc \u062f\u0633\u062a\u0631\u0633\u06cc \u062f\u0627\u0631\u06cc\u062f.',
                  ),
                }),
              ],
            }),
            (0, oe.jsx)(t.Suspense, {
              fallback: (0, oe.jsx)(l.default, {
                style: {
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: C.bg,
                },
                children: (0, oe.jsx)(o.default, { color: C.text }),
              }),
              children: (0, oe.jsx)(R.DataPanel, {
                exportOnly: !0,
                state: it,
                onImport: () => {},
                onTelegram: () => {},
                onCorrect: () => {},
                canMutate: !1,
              }),
            }),
            (0, oe.jsx)(f.Button, {
              secondary: !0,
              onPress: () => {
                na();
              },
              children: (0, V.L)(
                '\u0628\u0627\u0632\u06af\u0634\u062a \u0628\u0647 \u0648\u0631\u0648\u062f',
              ),
            }),
          ],
        });
      if (Zo && ft.current?.shop)
        return (0, oe.jsx)(M.StartTour, {
          start: ta.current ? 'plans' : void 0,
          shop: ft.current.shop,
          name: ft.current.user?.name,
          onEnter: () => {
            (Qo(!1), sa());
          },
        });
      if (ut && !Te && !ge)
        return (0, oe.jsx)(H.Funnel, {
          ready: io,
          passwordSignup: !!k.otp && !k.otp.sms,
          emailCodes: !!k.otp?.email,
          google:
            k.google && k.clientId
              ? {
                  clientId: k.clientId,
                  ticket: kt,
                  onGoogle: async function (e) {
                    const t = (e) =>
                      (0, y.request)('/v1/auth/google/create', 'POST', {
                        ticket: e,
                        deviceName: 'myAnbari',
                      });
                    if ('ticket' in e)
                      try {
                        return await t(e.ticket);
                      } finally {
                        Pt(null);
                      }
                    try {
                      return await (0, y.request)('/v1/auth/google', 'POST', {
                        credential: e.credential,
                        deviceName: 'myAnbari',
                      });
                    } catch (e) {
                      if (
                        e instanceof y.ApiError &&
                        'google_not_linked' === e.message &&
                        'string' == typeof e.details?.ticket
                      )
                        return t(e.details.ticket);
                      throw e;
                    }
                  },
                }
              : null,
          onLogin: () => Do('login'),
          onBack: () => Do('join'),
          onSession: async function (e, t) {
            await (0, y.storeToken)(e.token || null).catch((e) => {
              (0, y.reportError)(e, { where: 'funnel-token' });
            });
            const o = (await (0, y.request)('/v1/shops')).shops;
            let s = Eo(o),
              n = !1;
            const r = e.user.id || e.user.userId || '',
              l = (0, B.funnelShop)(t),
              c = l
                ? {
                    businessType: l.businessType,
                    ...(l.businessExample
                      ? { businessExample: l.businessExample }
                      : {}),
                  }
                : null;
            return (
              !s && l
                ? ((gt.current = r),
                  (s = Object.assign(await Yo(l), {
                    businessType: l.businessType,
                    businessExample: l.businessExample ?? null,
                  })),
                  (n = !0))
                : s &&
                  r &&
                  gt.current === r &&
                  'owner' === s.role &&
                  ((n = !0),
                  l &&
                    Object.assign(s, {
                      businessType: l.businessType,
                      businessExample: l.businessExample ?? null,
                    })),
              n &&
                s &&
                c &&
                (0, q.rememberBusiness)(e.user, s, c).catch(() => {}),
              (ft.current = {
                user: e.user,
                shops: n && s && !o.includes(s) ? [s, ...o] : o,
                shop: s,
                created: n,
                replaced: e.replaced || null,
              }),
              { user: e.user, shopName: s?.name || '', existing: !n && !!s }
            );
          },
          onExplore: ta.current
            ? void 0
            : function (e) {
                (ea(e), pt(!1), st(!1), Lo(e));
              },
          onEnter: () => {
            ft.current?.created && ft.current.shop ? Qo(!0) : sa();
          },
        });
      if (!Te && at && (!ge || nt))
        return (0, oe.jsx)(j.LandingPage, {
          onLogin: () => Do('login'),
          onRegister: () => Do('signup'),
          onDemo: () => Do('demo'),
        });
      if (ge && !Le && !we && !Te && Se && 0 === ye.length)
        return (0, oe.jsx)(O.Onboarding, {
          user: ge,
          onExit: Ro,
          onCreate: Yo,
          onDone: (e, t) => {
            To();
            const o = Object.assign(e, {
              businessType: t.businessType,
              businessExample: t.businessExample ?? null,
            });
            ((0, y.selectShop)(o), je(o), xe([o]));
          },
        });
      if (Le && !we)
        return (0, oe.jsx)(oe.Fragment, {
          children: e(
            so(),
            no(),
            ko,
            !0,
            () => {
              Po();
            },
            ko,
            Xo
              ? {
                  fieldId: Xo.fieldId,
                  customField: Xo.customField,
                  name: (0, B.greetingName)(Xo.title, Xo.personName),
                  shopName: Xo.shopName.trim(),
                  onWant: () => {
                    oa();
                  },
                  onNotebook: () => ea(null),
                  onLogin: aa,
                }
              : null,
          ),
        });
      if (we && ho && !Le)
        return (0, oe.jsx)(M.StartTour, {
          start: 'plans',
          shop: we,
          name: ge?.name,
          onEnter: () => fo(!1),
        });
      if (we)
        return (0, oe.jsx)(w.ShopSwitchContext.Provider, {
          value: {
            shops: ye,
            current: we,
            shopLimit: Ce.shopLimit,
            canAddShop: Ce.canAddShop,
            switchTo: (e) => {
              e.id !== we?.id &&
                ((0, w.rememberShop)(ge?.id || ge?.userId, e.id), zo(e));
            },
            addShop: async (e) => {
              const t = await (0, y.request)('/v1/shops', 'POST', {
                name: e,
                timezone: we?.timezone || 'Asia/Tehran',
              });
              return (await Ao(), t.shop);
            },
          },
          children: (0, oe.jsxs)(
            t.Fragment,
            {
              children: [
                e(
                  we,
                  ge,
                  Ro,
                  !1,
                  () => Do('signup'),
                  Ro,
                  Le && !we && Xo
                    ? {
                        fieldId: Xo.fieldId,
                        customField: Xo.customField,
                        name: (0, B.greetingName)(Xo.title, Xo.personName),
                        shopName: Xo.shopName.trim(),
                        onWant: () => {
                          oa();
                        },
                        onNotebook: () => ea(null),
                        onLogin: aa,
                      }
                    : null,
                ),
                !Le &&
                  !!po &&
                  (0, oe.jsx)(D.ReplacedDevicePopup, {
                    info: po,
                    owner: 'owner' === we.role,
                    onUpgrade: () => fo(!0),
                    onClose: () => mo(null),
                  }),
                !Le &&
                  !po &&
                  !!ge &&
                  !ge.staff &&
                  !!ge.phoneVerified &&
                  (0, oe.jsx)(P.LinkGmailSuggest, {}),
                !Le &&
                  !po &&
                  !!ge &&
                  !ge.staff &&
                  !ge.phoneVerified &&
                  (0, oe.jsx)(E.PhoneCompleteSuggest, {}),
              ],
            },
            we.id,
          ),
        });
      const ra =
          'otp' === vt
            ? v.platformFa.otpTitle
            : 'register' === Re
              ? (0, V.L)(
                  '\u0633\u0627\u062e\u062a \u062d\u0633\u0627\u0628 \u0628\u0627 \u0627\u06cc\u0645\u06cc\u0644',
                )
              : 'reset' === Re || 'forgot' === Re
                ? (0, V.L)(
                    '\u0628\u0627\u0632\u06cc\u0627\u0628\u06cc \u0631\u0645\u0632',
                  )
                : 'email' === Re
                  ? (0, V.L)(
                      '\u0648\u0631\u0648\u062f \u0628\u0627 \u0627\u06cc\u0645\u06cc\u0644',
                    )
                  : 'staff' === Re
                    ? (0, V.L)(
                        '\u0648\u0631\u0648\u062f \u06a9\u0627\u0631\u0645\u0646\u062f',
                      )
                    : 'join' === Re
                      ? W.authText.signupTitle
                      : W.authText.signinTitle,
        ia =
          'register' === Re
            ? v.platformFa.createAccount
            : 'reset' === Re
              ? 1 === qe
                ? (0, V.L)('\u0627\u0631\u0633\u0627\u0644 \u06a9\u062f')
                : (0, V.L)('\u062a\u063a\u06cc\u06cc\u0631 \u0631\u0645\u0632')
              : (0, V.Lc)('auth', '\u0648\u0631\u0648\u062f'),
        la = (0, oe.jsxs)(oe.Fragment, {
          children: [
            !!Ne &&
              (0, oe.jsx)(f.Copy, {
                accessibilityRole: 'alert',
                style: { fontSize: 13, lineHeight: 18, color: C.text },
                children: Ne,
              }),
            !!De &&
              (0, oe.jsx)(f.Copy, {
                accessibilityRole: 'alert',
                style: { fontSize: 13, lineHeight: 18, color: C.danger },
                children: De,
              }),
          ],
        }),
        ca = 'light' === I,
        da = {
          borderRadius: 24,
          padding: Qt ? 13 : Xt ? 16 : 24,
          gap: Qt ? 8 : Xt ? 10 : 14,
          backgroundColor: ca ? 'rgba(255,255,255,.62)' : 'rgba(28,28,30,.55)',
          borderWidth: r.default.hairlineWidth,
          borderColor: ca ? 'rgba(255,255,255,.85)' : 'rgba(255,255,255,.14)',
          boxShadow: ca
            ? 'inset 0 1px 0 rgba(255,255,255,.95), 0 24px 60px rgba(17,17,20,.14)'
            : 'inset 0 1px 0 rgba(255,255,255,.14), 0 24px 60px rgba(0,0,0,.5)',
        },
        ua = {
          backdropFilter: 'blur(24px) saturate(1.6)',
          WebkitBackdropFilter: 'blur(24px) saturate(1.6)',
        },
        pa = (0, oe.jsx)(f.Copy, {
          style: {
            fontSize: Qt ? 17 : Xt ? 18 : 20,
            lineHeight: Qt ? 22 : Xt ? 24 : 26,
            fontFamily: 'Vazirmatn_600SemiBold',
            color: C.text,
          },
          children: ra,
        }),
        ma = (e) =>
          (0, oe.jsx)(f.Copy, {
            style: {
              fontSize: Xt ? 12 : 13,
              lineHeight: Xt ? 17 : 19,
              color: C.muted,
            },
            children: e,
          }),
        ha = jt,
        fa = !!Me.trim() && 'verify' === Mt && !!k.otp?.email,
        ga = (!!k.otp && !k.otp.sms) || co,
        ba = 'email' === Re || 'staff' === Re || ('login' === Re && ga),
        ya = (0, oe.jsxs)(ce, {
          label: (0, V.L)('\u0631\u0645\u0632 \u0639\u0628\u0648\u0631'),
          icon: 'lock',
          children: [
            (0, oe.jsx)(f.Input, {
              testID: 'auth-password',
              style: le.input,
              accessibilityLabel: (0, V.L)(
                '\u0631\u0645\u0632 \u0639\u0628\u0648\u0631',
              ),
              placeholder: ba
                ? (0, V.L)('\u0631\u0645\u0632 \u0639\u0628\u0648\u0631')
                : v.platformFa.passwordHint,
              secureTextEntry: !Ke,
              autoComplete: ba ? 'current-password' : 'new-password',
              textContentType: ba ? 'password' : 'newPassword',
              value: Be,
              onChangeText: Ue,
              onSubmitEditing: ba ? Ko : void 0,
            }),
            (0, oe.jsx)(me, {
              compact: !0,
              label: Ke ? v.platformFa.hidePassword : v.platformFa.showPassword,
              onPress: () => $e((e) => !e),
            }),
          ],
        }),
        xa = (0, oe.jsxs)(l.default, {
          style: {
            flexDirection: 'row-reverse',
            direction: (0, G.flipped)() ? 'rtl' : 'ltr',
            alignItems: 'center',
            gap: 10,
          },
          children: [
            (0, oe.jsx)(l.default, {
              style: {
                flex: 1,
                height: r.default.hairlineWidth,
                backgroundColor: C.line,
              },
            }),
            (0, oe.jsx)(f.Copy, {
              style: { fontSize: 13, lineHeight: 18, color: C.muted },
              children: v.platformFa.orWith,
            }),
            (0, oe.jsx)(l.default, {
              style: {
                flex: 1,
                height: r.default.hairlineWidth,
                backgroundColor: C.line,
              },
            }),
          ],
        }),
        wa = (0, oe.jsx)(pe, { methods: k, onCredential: $o, onError: Jo }),
        ja = k.google && !!k.clientId,
        Sa = !!k.otp?.email;
      return (0, oe.jsx)(re.Provider, {
        value: eo,
        children: (0, oe.jsxs)(l.default, {
          style: { flex: 1, backgroundColor: C.bg },
          children: [
            (0, oe.jsx)(L.AuthBackdrop, {}),
            (0, oe.jsx)(s.default, {
              style: { flex: 1 },
              behavior: void 0,
              children: (0, oe.jsx)(u.ScrollView, {
                style: { flex: 1 },
                contentContainerStyle: {
                  flexGrow: 1,
                  justifyContent: 'center',
                  padding: Qt ? 8 : Xt ? 12 : 20,
                  paddingTop: Zt.top + (Qt ? 10 : Xt ? 14 : 28),
                  paddingBottom: Zt.bottom + (Qt ? 10 : Xt ? 14 : 28),
                  gap: Qt ? 6 : Xt ? 8 : 12,
                  maxWidth: 420,
                  width: '100%',
                  alignSelf: 'center',
                },
                keyboardShouldPersistTaps: 'handled',
                children: Te
                  ? (0, oe.jsx)(o.default, {})
                  : ge
                    ? (0, oe.jsxs)(oe.Fragment, {
                        children: [
                          !Se && !De && (0, oe.jsx)(o.default, {}),
                          Se || De
                            ? (0, oe.jsx)(de, {
                                label: (0, V.L)(
                                  '\u062a\u0644\u0627\u0634 \u062f\u0648\u0628\u0627\u0631\u0647',
                                ),
                                busy: Pe,
                                onPress: () => {
                                  No(async () => {
                                    const e = Eo(await Ao());
                                    e && (await zo(e));
                                  });
                                },
                              })
                            : null,
                          (0, oe.jsx)(l.default, {
                            style: { alignItems: 'center' },
                            children: (0, oe.jsx)(me, {
                              label: S.fa.logout,
                              onPress: Ro,
                            }),
                          }),
                          la,
                          (0, oe.jsx)(l.default, {
                            style: { alignItems: 'center' },
                            children: (0, oe.jsx)(me, {
                              label: S.landingFa.installAccountLink,
                              onPress: () => {
                                ((window.location.hash = 'install'), st(!0));
                              },
                            }),
                          }),
                        ],
                      })
                    : (0, oe.jsxs)(oe.Fragment, {
                        children: [
                          'form' === vt &&
                            ('login' === Re || 'join' === Re) &&
                            !Qt &&
                            (0, oe.jsx)(W.AuthBrand, { compact: Xt }),
                          'otp' === vt
                            ? (0, oe.jsxs)(l.default, {
                                testID: 'auth-card',
                                style: [da, ua],
                                children: [
                                  pa,
                                  ma(
                                    (0, v.interpolate)(v.platformFa.otpSentTo, {
                                      target:
                                        '\u2066' +
                                        (Bt ||
                                          ('phone' === qt
                                            ? (0, T.maskPhone)(bt)
                                            : (0, T.maskEmail)(Me))) +
                                        '\u2069',
                                    }),
                                  ),
                                  (0, oe.jsx)(F.CodeBoxes, {
                                    testID: 'auth-otp-box',
                                    length: mt,
                                    value: Et,
                                    state: Rt,
                                    disabled: Kt,
                                    onChange: (e) => {
                                      (Dt(e),
                                        'error' === Rt && (Ot('idle'), Ae('')));
                                    },
                                    onComplete: (e) => {
                                      Mo(e);
                                    },
                                    autoCode: 'phone' === qt ? _t : void 0,
                                    onNoCode: () => {
                                      (Ot('error'),
                                        Ae(
                                          (0, v.interpolate)(
                                            v.platformFa.otpNoCode,
                                            { n: (0, T.persianDigits)(mt) },
                                          ),
                                        ));
                                    },
                                  }),
                                  Kt && ma(v.platformFa.otpCheck),
                                  la,
                                  (0, oe.jsxs)(l.default, {
                                    style: {
                                      alignItems: 'center',
                                      gap: Xt ? 2 : 4,
                                    },
                                    children: [
                                      (0, oe.jsx)(me, {
                                        testID: 'auth-otp-resend',
                                        disabled:
                                          Vt > 0 || Kt || 'success' === Rt,
                                        label:
                                          Vt > 0
                                            ? (0, v.interpolate)(
                                                v.platformFa.otpResendIn,
                                                { time: (0, T.countdown)(Vt) },
                                              )
                                            : v.platformFa.otpResend,
                                        onPress: () => {
                                          No(async () => {
                                            await Ho(qt, Mt);
                                          });
                                        },
                                      }),
                                      'phone' === qt &&
                                        Vt <= 0 &&
                                        !Ft &&
                                        'success' !== Rt &&
                                        (0, oe.jsx)(l.default, {
                                          style: { alignSelf: 'stretch' },
                                          children: (0, oe.jsx)(ue, {
                                            testID: 'auth-otp-call',
                                            icon: 'phone',
                                            label: (0, V.L)(
                                              '\u06a9\u062f \u0631\u0627 \u0628\u0627 \u062a\u0645\u0627\u0633 \u0635\u0648\u062a\u06cc \u0628\u06af\u06cc\u0631',
                                            ),
                                            disabled: Pe || Kt,
                                            onPress: () => {
                                              No(Vo);
                                            },
                                          }),
                                        }),
                                      fa &&
                                        (0, oe.jsx)(me, {
                                          testID: 'auth-otp-switch',
                                          disabled: 'success' === Rt,
                                          label:
                                            'phone' === qt
                                              ? v.platformFa.otpSwitchToEmail
                                              : v.platformFa.otpSwitchToPhone,
                                          onPress: () => {
                                            No(async () => {
                                              await Ho(
                                                'phone' === qt
                                                  ? 'email'
                                                  : 'phone',
                                                Mt,
                                                !0,
                                              );
                                            });
                                          },
                                        }),
                                      (0, oe.jsx)(me, {
                                        disabled: 'success' === Rt,
                                        label: v.platformFa.backToLogin,
                                        onPress: () => {
                                          (_o(),
                                            Ct('form'),
                                            Oe('login'),
                                            Ae(''),
                                            ze(''));
                                        },
                                      }),
                                    ],
                                  }),
                                ],
                              })
                            : (0, oe.jsxs)(l.default, {
                                testID: 'auth-card',
                                style: [da, ua],
                                children: [
                                  ('login' === Re || 'join' === Re) &&
                                    (0, oe.jsx)(W.AuthTabs, {
                                      tab: 'join' === Re ? 'signup' : 'signin',
                                      compact: Xt,
                                      onChange: (e) =>
                                        Do('signup' === e ? 'join' : 'login'),
                                    }),
                                  pa,
                                  'login' === Re && It && !It.asked
                                    ? (0, oe.jsx)(P.GooglePendingCard, {
                                        email: It.email,
                                        busy: Pe,
                                        error: De,
                                        onPhone: () => {
                                          (Lt((e) => e && { ...e, asked: !0 }),
                                            Ae(''),
                                            ze(''));
                                        },
                                        onNew: function () {
                                          const e = It;
                                          e &&
                                            (Pt({
                                              ticket: e.ticket,
                                              email: e.email,
                                            }),
                                            Lt(null),
                                            Do('signup'));
                                        },
                                        onBack: () => {
                                          (Lt(null), Ae(''));
                                        },
                                      })
                                    : 'login' === Re &&
                                      (0, oe.jsxs)(oe.Fragment, {
                                        children: [
                                          It?.asked &&
                                            (0, oe.jsx)(f.Copy, {
                                              testID: 'google-pending-hint',
                                              style: {
                                                fontSize: 13,
                                                lineHeight: 21,
                                                color: C.accent,
                                                fontFamily:
                                                  'Vazirmatn_600SemiBold',
                                              },
                                              children: (0, v.interpolate)(
                                                (0, V.L)(
                                                  '\u0628\u0627 \u0634\u0645\u0627\u0631\u0647\u200c\u0627\u06cc \u06a9\u0647 \u062b\u0628\u062a\u200c\u0646\u0627\u0645 \u06a9\u0631\u062f\u0647\u200c\u0627\u06cc \u06a9\u062f \u0628\u06af\u06cc\u0631\u061b \u0628\u0639\u062f \u0627\u0632 \u0648\u0631\u0648\u062f\u060c \u062c\u06cc\u0645\u06cc\u0644 {email} \u0647\u0645 \u0628\u0647 \u0647\u0645\u0627\u0646 \u062d\u0633\u0627\u0628 \u0648\u0635\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                                                ),
                                                {
                                                  email:
                                                    '\u2066' +
                                                    It.email +
                                                    '\u2069',
                                                },
                                              ),
                                            }),
                                          !Qt &&
                                            ma(
                                              ga
                                                ? (0, V.L)(
                                                    '\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644 (\u06cc\u0627 \u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc) \u0648 \u0631\u0645\u0632\u062a \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633',
                                                  )
                                                : v.platformFa.quickLoginHint,
                                            ),
                                          (0, oe.jsx)(ce, {
                                            label: ga
                                              ? (0, V.L)(
                                                  '\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644 \u06cc\u0627 \u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc',
                                                )
                                              : v.platformFa.phoneLabel,
                                            icon: 'phone',
                                            error: xt,
                                            children: (0, oe.jsx)(f.Input, {
                                              ltr: !0,
                                              testID: 'auth-phone',
                                              style: le.input,
                                              accessibilityLabel: ga
                                                ? (0, V.L)(
                                                    '\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644 \u06cc\u0627 \u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc',
                                                  )
                                                : v.platformFa.phoneLabel,
                                              placeholder:
                                                v.platformFa.phonePlaceholder,
                                              autoCapitalize: 'none',
                                              autoCorrect: !1,
                                              autoComplete: ga
                                                ? 'username'
                                                : 'tel',
                                              textContentType: ga
                                                ? 'username'
                                                : 'telephoneNumber',
                                              keyboardType: ga
                                                ? 'default'
                                                : 'phone-pad',
                                              value: bt,
                                              onChangeText: (e) => {
                                                (yt(e), wt(''));
                                              },
                                              onSubmitEditing: ga ? void 0 : Wo,
                                            }),
                                          }),
                                          ga && ya,
                                          ga &&
                                            !!k.otp?.sms &&
                                            (0, oe.jsx)(l.default, {
                                              style: {
                                                alignItems: 'flex-end',
                                                marginTop: -4,
                                              },
                                              children: (0, oe.jsx)(me, {
                                                testID: 'auth-forgot',
                                                compact: !0,
                                                label:
                                                  v.platformFa.forgotPassword,
                                                onPress: () => Do('forgot'),
                                              }),
                                            }),
                                          (0, oe.jsx)(de, {
                                            testID: 'auth-submit',
                                            label: ga
                                              ? (0, V.Lc)(
                                                  'auth',
                                                  '\u0648\u0631\u0648\u062f',
                                                )
                                              : v.platformFa.sendCode,
                                            busy: Pe,
                                            disabled: !io,
                                            onPress: ga ? Ko : Wo,
                                          }),
                                          !(k.otp && !k.otp.sms) &&
                                            (0, oe.jsx)(l.default, {
                                              style: {
                                                alignItems: 'center',
                                                marginTop: -4,
                                              },
                                              children: (0, oe.jsx)(me, {
                                                testID: 'auth-password-toggle',
                                                compact: !0,
                                                label: co
                                                  ? (0, V.L)(
                                                      '\u0648\u0631\u0648\u062f \u0628\u0627 \u06a9\u062f \u067e\u06cc\u0627\u0645\u06a9\u06cc',
                                                    )
                                                  : (0, V.L)(
                                                      '\u0648\u0631\u0648\u062f \u0628\u0627 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631',
                                                    ),
                                                onPress: () => {
                                                  (uo((e) => !e), Ae(''));
                                                },
                                              }),
                                            }),
                                          !io &&
                                            ma(
                                              (0, V.L)(
                                                '\u062f\u0631 \u062d\u0627\u0644 \u0627\u062a\u0635\u0627\u0644 \u0628\u0647 \u0633\u0631\u0648\u0631\u2026',
                                              ),
                                            ),
                                          la,
                                          'otp_no_account' === go &&
                                            (0, oe.jsx)(l.default, {
                                              style: { alignItems: 'center' },
                                              children: (0, oe.jsx)(me, {
                                                testID:
                                                  'auth-no-account-signup',
                                                label:
                                                  v.platformFa.noAccountSignup,
                                                onPress: () => Do('signup'),
                                              }),
                                            }),
                                          ja && xa,
                                          ja && wa,
                                          (0, oe.jsx)(l.default, {
                                            style: { alignItems: 'center' },
                                            children: (0, oe.jsx)(me, {
                                              testID: 'auth-staff-login',
                                              label: (0, V.L)(
                                                '\u0648\u0631\u0648\u062f \u06a9\u0627\u0631\u0645\u0646\u062f',
                                              ),
                                              onPress: () => Do('staff'),
                                            }),
                                          }),
                                        ],
                                      }),
                                  'join' === Re &&
                                    (0, oe.jsxs)(oe.Fragment, {
                                      children: [
                                        !Qt && ma(W.authText.signupHint),
                                        (0, oe.jsx)(de, {
                                          testID: 'auth-join-start',
                                          label: (0, V.L)(
                                            '\u0628\u0632\u0646 \u0628\u0631\u06cc\u0645',
                                          ),
                                          onPress: () => Do('signup'),
                                        }),
                                        (0, oe.jsx)(l.default, {
                                          style: {
                                            alignItems: 'center',
                                            marginTop: -4,
                                          },
                                          children: (0, oe.jsx)(me, {
                                            testID: 'auth-join-demo',
                                            compact: !0,
                                            label: (0, V.L)(he),
                                            onPress: () => Do('demo'),
                                          }),
                                        }),
                                        la,
                                      ],
                                    }),
                                  'staff' === Re &&
                                    (0, oe.jsxs)(oe.Fragment, {
                                      children: [
                                        !Qt &&
                                          ma(
                                            (0, V.L)(
                                              '\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0648 \u0631\u0645\u0632\u06cc \u0631\u0627 \u06a9\u0647 \u0635\u0627\u062d\u0628 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0628\u0631\u0627\u06cc\u062a\u0627\u0646 \u0633\u0627\u062e\u062a\u0647 \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f',
                                            ),
                                          ),
                                        (0, oe.jsx)(ce, {
                                          label: (0, V.L)(
                                            '\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc',
                                          ),
                                          icon: 'user',
                                          children: (0, oe.jsx)(f.Input, {
                                            ltr: !0,
                                            testID: 'auth-username',
                                            style: le.input,
                                            accessibilityLabel: (0, V.L)(
                                              '\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc',
                                            ),
                                            placeholder: (0, V.L)(
                                              '\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc',
                                            ),
                                            autoCapitalize: 'none',
                                            autoCorrect: !1,
                                            autoComplete: 'username',
                                            textContentType: 'username',
                                            value: Ze,
                                            onChangeText: Qe,
                                          }),
                                        }),
                                        ya,
                                        (0, oe.jsx)(de, {
                                          testID: 'auth-submit',
                                          label: ia,
                                          busy: Pe,
                                          onPress: Ko,
                                        }),
                                        la,
                                        (0, oe.jsx)(l.default, {
                                          style: { alignItems: 'center' },
                                          children: (0, oe.jsx)(me, {
                                            label: v.platformFa.backToLogin,
                                            onPress: () => Do('login'),
                                          }),
                                        }),
                                      ],
                                    }),
                                  'forgot' === Re &&
                                    (0, oe.jsxs)(oe.Fragment, {
                                      children: [
                                        !Qt &&
                                          ma(
                                            1 === yo
                                              ? (0, V.L)(
                                                  '\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644 \u062d\u0633\u0627\u0628\u062a \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u061b \u06cc\u06a9 \u06a9\u062f \u067e\u06cc\u0627\u0645\u06a9\u06cc \u0645\u06cc\u200c\u0641\u0631\u0633\u062a\u06cc\u0645 \u0648 \u0628\u0639\u062f \u0631\u0645\u0632 \u062a\u0627\u0632\u0647 \u0645\u06cc\u200c\u06af\u0630\u0627\u0631\u06cc.',
                                                )
                                              : (0, v.interpolate)(
                                                  v.platformFa.otpSentTo,
                                                  {
                                                    target:
                                                      '\u2066' +
                                                      (Bt ||
                                                        (0, T.maskPhone)(bt)) +
                                                      '\u2069',
                                                  },
                                                ),
                                          ),
                                        1 === yo
                                          ? (0, oe.jsx)(ce, {
                                              label: v.platformFa.phoneLabel,
                                              icon: 'phone',
                                              error: xt,
                                              children: (0, oe.jsx)(f.Input, {
                                                ltr: !0,
                                                testID: 'auth-forgot-phone',
                                                style: le.input,
                                                accessibilityLabel:
                                                  v.platformFa.phoneLabel,
                                                placeholder:
                                                  v.platformFa.phonePlaceholder,
                                                autoComplete: 'tel',
                                                textContentType:
                                                  'telephoneNumber',
                                                keyboardType: 'phone-pad',
                                                value: bt,
                                                onChangeText: (e) => {
                                                  (yt(e), wt(''));
                                                },
                                                onSubmitEditing: Ko,
                                              }),
                                            })
                                          : (0, oe.jsxs)(oe.Fragment, {
                                              children: [
                                                (0, oe.jsx)(F.CodeBoxes, {
                                                  testID: 'auth-forgot-code',
                                                  length: Co,
                                                  value: wo,
                                                  state: So,
                                                  disabled: Pe,
                                                  onChange: (e) => {
                                                    (jo(e),
                                                      'error' === So &&
                                                        (vo('idle'), Ae('')));
                                                  },
                                                  onComplete: () => {},
                                                  onNoCode: () => {
                                                    (vo('error'),
                                                      Ae(
                                                        (0, v.interpolate)(
                                                          v.platformFa
                                                            .otpNoCode,
                                                          {
                                                            n: (0,
                                                            T.persianDigits)(
                                                              Co,
                                                            ),
                                                          },
                                                        ),
                                                      ));
                                                  },
                                                }),
                                                ya,
                                                (0, oe.jsx)(ce, {
                                                  label:
                                                    v.platformFa
                                                      .confirmPassword,
                                                  icon: 'lock',
                                                  children: (0, oe.jsx)(
                                                    f.Input,
                                                    {
                                                      testID:
                                                        'auth-forgot-confirm',
                                                      style: le.input,
                                                      accessibilityLabel:
                                                        v.platformFa
                                                          .confirmPassword,
                                                      placeholder:
                                                        v.platformFa
                                                          .confirmPassword,
                                                      secureTextEntry: !Ke,
                                                      autoComplete:
                                                        'new-password',
                                                      textContentType:
                                                        'newPassword',
                                                      value: Ve,
                                                      onChangeText: Ge,
                                                      onSubmitEditing: Ko,
                                                    },
                                                  ),
                                                }),
                                              ],
                                            }),
                                        (0, oe.jsx)(de, {
                                          testID: 'auth-submit',
                                          label:
                                            1 === yo
                                              ? v.platformFa.sendCode
                                              : (0, V.L)(
                                                  '\u0630\u062e\u06cc\u0631\u0647\u0654 \u0631\u0645\u0632 \u062a\u0627\u0632\u0647 \u0648 \u0648\u0631\u0648\u062f',
                                                ),
                                          busy: Pe,
                                          disabled: !io,
                                          onPress: Ko,
                                        }),
                                        2 === yo &&
                                          (0, oe.jsx)(l.default, {
                                            style: { alignItems: 'center' },
                                            children: (0, oe.jsx)(me, {
                                              testID: 'auth-forgot-resend',
                                              disabled: Vt > 0 || Pe,
                                              label:
                                                Vt > 0
                                                  ? (0, v.interpolate)(
                                                      v.platformFa.otpResendIn,
                                                      {
                                                        time: (0, T.countdown)(
                                                          Vt,
                                                        ),
                                                      },
                                                    )
                                                  : v.platformFa.otpResend,
                                              onPress: () => {
                                                No(Bo);
                                              },
                                            }),
                                          }),
                                        la,
                                        'otp_no_account' === go &&
                                          (0, oe.jsx)(l.default, {
                                            style: { alignItems: 'center' },
                                            children: (0, oe.jsx)(me, {
                                              label:
                                                v.platformFa.noAccountSignup,
                                              onPress: () => Do('signup'),
                                            }),
                                          }),
                                        (0, oe.jsx)(l.default, {
                                          style: { alignItems: 'center' },
                                          children: (0, oe.jsx)(me, {
                                            label: v.platformFa.backToLogin,
                                            onPress: () => Do('login'),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ('email' === Re ||
                                    'register' === Re ||
                                    'reset' === Re) &&
                                    (0, oe.jsxs)(oe.Fragment, {
                                      children: [
                                        'register' === Re &&
                                          !Qt &&
                                          (0, oe.jsx)(fe, { children: ma }),
                                        'register' === Re &&
                                          (0, oe.jsx)(ce, {
                                            label: (0, V.L)(
                                              '\u0646\u0627\u0645',
                                            ),
                                            icon: 'user',
                                            children: (0, oe.jsx)(f.Input, {
                                              style: le.input,
                                              accessibilityLabel: (0, V.L)(
                                                '\u0646\u0627\u0645',
                                              ),
                                              placeholder: (0, V.L)(
                                                '\u0646\u0627\u0645',
                                              ),
                                              autoComplete: 'name',
                                              textContentType: 'name',
                                              value: Je,
                                              onChangeText: Ye,
                                            }),
                                          }),
                                        ('reset' !== Re || 1 === qe) &&
                                          (0, oe.jsx)(ce, {
                                            label: (0, V.L)(
                                              '\u0627\u06cc\u0645\u06cc\u0644',
                                            ),
                                            icon: 'mail',
                                            children: (0, oe.jsx)(f.Input, {
                                              ltr: !0,
                                              testID: 'auth-email',
                                              style: le.input,
                                              accessibilityLabel: (0, V.L)(
                                                '\u0627\u06cc\u0645\u06cc\u0644',
                                              ),
                                              placeholder: (0, V.L)(
                                                '\u0627\u06cc\u0645\u06cc\u0644',
                                              ),
                                              autoCapitalize: 'none',
                                              autoCorrect: !1,
                                              autoComplete: 'email',
                                              textContentType: 'emailAddress',
                                              keyboardType: 'email-address',
                                              value: Me,
                                              onChangeText: We,
                                              onSubmitEditing:
                                                'reset' === Re ? Ko : void 0,
                                            }),
                                          }),
                                        'reset' === Re &&
                                          2 === qe &&
                                          (0, oe.jsx)(ce, {
                                            label: v.platformFa.resetCode,
                                            icon: 'lock',
                                            children: (0, oe.jsx)(f.Input, {
                                              ltr: !0,
                                              style: le.input,
                                              accessibilityLabel:
                                                v.platformFa.resetCode,
                                              placeholder:
                                                v.platformFa.resetCode,
                                              autoCapitalize: 'none',
                                              autoCorrect: !1,
                                              value: Xe,
                                              onChangeText: et,
                                            }),
                                          }),
                                        ('reset' !== Re || 2 === qe) &&
                                          (0, oe.jsxs)(oe.Fragment, {
                                            children: [
                                              ya,
                                              ('register' === Re ||
                                                'reset' === Re) &&
                                                (0, oe.jsx)(ce, {
                                                  label:
                                                    v.platformFa
                                                      .confirmPassword,
                                                  icon: 'lock',
                                                  children: (0, oe.jsx)(
                                                    f.Input,
                                                    {
                                                      style: le.input,
                                                      accessibilityLabel:
                                                        v.platformFa
                                                          .confirmPassword,
                                                      placeholder:
                                                        v.platformFa
                                                          .confirmPassword,
                                                      secureTextEntry: !Ke,
                                                      autoComplete:
                                                        'new-password',
                                                      textContentType:
                                                        'newPassword',
                                                      value: Ve,
                                                      onChangeText: Ge,
                                                      onSubmitEditing:
                                                        'register' === Re
                                                          ? void 0
                                                          : Ko,
                                                    },
                                                  ),
                                                }),
                                            ],
                                          }),
                                        'register' === Re &&
                                          (0, oe.jsxs)(l.default, {
                                            style: { gap: Xt ? 6 : 8 },
                                            children: [
                                              (0, oe.jsxs)(n.default, {
                                                testID: 'auth-referral-toggle',
                                                accessibilityRole: 'checkbox',
                                                accessibilityState: {
                                                  checked: ha,
                                                },
                                                onPress: () => St((e) => !e),
                                                style: ({ pressed: e }) => ({
                                                  flexDirection: 'row-reverse',
                                                  direction: (0, G.flipped)()
                                                    ? 'rtl'
                                                    : 'ltr',
                                                  alignItems: 'center',
                                                  gap: 8,
                                                  opacity: e ? 0.6 : 1,
                                                }),
                                                children: [
                                                  (0, oe.jsx)(l.default, {
                                                    style: {
                                                      width: 20,
                                                      height: 20,
                                                      borderRadius: 6,
                                                      borderWidth:
                                                        2 *
                                                        r.default.hairlineWidth,
                                                      borderColor: ha
                                                        ? C.accent
                                                        : C.line,
                                                      backgroundColor: ha
                                                        ? C.accent
                                                        : 'transparent',
                                                      alignItems: 'center',
                                                      justifyContent: 'center',
                                                    },
                                                    children:
                                                      ha &&
                                                      (0, oe.jsx)(m.Icon, {
                                                        name: 'check',
                                                        size: 13,
                                                        color: C.onAccent,
                                                      }),
                                                  }),
                                                  (0, oe.jsx)(f.Copy, {
                                                    style: {
                                                      fontSize: 13,
                                                      lineHeight: 18,
                                                      fontFamily:
                                                        'Vazirmatn_500Medium',
                                                      color: C.muted,
                                                    },
                                                    children:
                                                      v.platformFa
                                                        .referralToggle,
                                                  }),
                                                ],
                                              }),
                                              ha &&
                                                (0, oe.jsx)(ce, {
                                                  label:
                                                    v.platformFa.referralLabel,
                                                  icon: 'gift',
                                                  children: (0, oe.jsx)(
                                                    f.Input,
                                                    {
                                                      ltr: !0,
                                                      testID: 'auth-referral',
                                                      style: le.input,
                                                      accessibilityLabel:
                                                        v.platformFa
                                                          .referralLabel,
                                                      placeholder:
                                                        v.platformFa
                                                          .referralPlaceholder,
                                                      autoCapitalize:
                                                        'characters',
                                                      autoCorrect: !1,
                                                      value: tt,
                                                      onChangeText: (e) =>
                                                        ot(e.toUpperCase()),
                                                      onSubmitEditing: Ko,
                                                    },
                                                  ),
                                                }),
                                            ],
                                          }),
                                        'email' === Re &&
                                          Sa &&
                                          (0, oe.jsx)(l.default, {
                                            style: { alignItems: 'flex-end' },
                                            children: (0, oe.jsx)(me, {
                                              label:
                                                v.platformFa.forgotPassword,
                                              onPress: () => Do('reset'),
                                            }),
                                          }),
                                        'email' === Re &&
                                          !Sa &&
                                          ma(
                                            (0, V.L)(
                                              '\u0631\u0645\u0632 \u06cc\u0627\u062f\u062a \u0631\u0641\u062a\u0647\u061f \u0628\u0627 \u0634\u0645\u0627\u0631\u0647\u0654 \u0645\u0648\u0628\u0627\u06cc\u0644 \u06a9\u062f \u0628\u06af\u06cc\u0631 \u06cc\u0627 \u0628\u0627 \u062c\u06cc\u0645\u06cc\u0644 \u0648\u0627\u0631\u062f \u0634\u0648.',
                                            ),
                                          ),
                                        (0, oe.jsx)(de, {
                                          testID: 'auth-submit',
                                          label: ia,
                                          busy: Pe,
                                          onPress: Ko,
                                        }),
                                        'email' === Re &&
                                          (0, oe.jsx)(ue, {
                                            testID: 'auth-quick-login',
                                            icon: 'phone',
                                            label: v.platformFa.quickLoginTitle,
                                            onPress: () => Do('login'),
                                          }),
                                        'register' === Re &&
                                          (0, oe.jsx)(ue, {
                                            testID: 'auth-phone-signup',
                                            icon: 'phone',
                                            label: (0, V.L)(
                                              '\u062b\u0628\u062a\u200c\u0646\u0627\u0645 \u0628\u0627 \u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644',
                                            ),
                                            onPress: () => Do('signup'),
                                          }),
                                        la,
                                        (0, oe.jsx)(l.default, {
                                          style: { alignItems: 'center' },
                                          children:
                                            'email' === Re
                                              ? Sa &&
                                                (0, oe.jsx)(me, {
                                                  testID: 'auth-email-signup',
                                                  label: (0, V.L)(
                                                    '\u0633\u0627\u062e\u062a \u062d\u0633\u0627\u0628 \u0628\u0627 \u0627\u06cc\u0645\u06cc\u0644',
                                                  ),
                                                  onPress: () => Do('register'),
                                                })
                                              : (0, oe.jsx)(me, {
                                                  label:
                                                    'register' === Re
                                                      ? v.platformFa
                                                          .haveAccountLogin
                                                      : v.platformFa
                                                          .backToLogin,
                                                  onPress: () =>
                                                    Do(
                                                      'register' === Re
                                                        ? 'login'
                                                        : 'email',
                                                    ),
                                                }),
                                        }),
                                      ],
                                    }),
                                  it &&
                                    (0, oe.jsx)(l.default, {
                                      style: { alignItems: 'center' },
                                      children: (0, oe.jsx)(me, {
                                        label: (0, V.L)(
                                          '\u062e\u0631\u0648\u062c\u06cc \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0642\u062f\u06cc\u0645\u06cc \u062f\u0633\u062a\u06af\u0627\u0647',
                                        ),
                                        onPress: () => dt(!0),
                                      }),
                                    }),
                                ],
                              }),
                          (0, oe.jsxs)(l.default, {
                            style: {
                              flexDirection: 'row-reverse',
                              direction: (0, G.flipped)() ? 'rtl' : 'ltr',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: 14,
                            },
                            children: [
                              (0, oe.jsx)(me, {
                                label: S.landingFa.backHome,
                                onPress: () => Do('home'),
                              }),
                              (0, oe.jsx)(me, {
                                label: S.landingFa.installAccountLink,
                                onPress: () => {
                                  ((window.location.hash = 'install'), st(!0));
                                },
                              }),
                            ],
                          }),
                          (0, oe.jsx)(l.default, {
                            style: { alignItems: 'center' },
                            children: (0, oe.jsx)(U.LanguagePicker, {
                              testID: 'gate-language',
                            }),
                          }),
                        ],
                      }),
              }),
            }),
          ],
        }),
      });
    }
  },
  379,
  [
    2, 217, 224, 94, 232, 17, 99, 257, 380, 342, 385, 258, 407, 382, 415, 427,
    484, 485, 492, 502, 488, 442, 509, 510, 512, 513, 514, 538, 543, 525, 542,
    508, 547, 549, 550, 552, 519, 554, 556, 562, 555, 563, 311, 1, 448, 472,
    449, 527, 545, 564, 565, 567, 489, 338,
  ],
);
