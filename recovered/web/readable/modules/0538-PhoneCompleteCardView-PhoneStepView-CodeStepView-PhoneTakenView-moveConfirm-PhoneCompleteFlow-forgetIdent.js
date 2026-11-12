// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 538; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.PhoneCompleteCardView = D),
      (_e.PhoneStepView = T),
      (_e.CodeStepView = _),
      (_e.PhoneTakenView = F),
      (_e.moveConfirm = B),
      (_e.PhoneCompleteFlow = H),
      (_e.forgetIdentities = function () {
        z = null;
      }),
      (_e.PhoneCompleteCard = function ({ user: e, onSupport: o }) {
        const [n, c] = (0, t.useState)(!1),
          [h, u] = (0, t.useState)(!1);
        (0, t.useEffect)(() => {
          if (e.staff || e.phoneVerified) return;
          let t = !0;
          return (
            R().then((e) => {
              t && c(!!e?.available && !!e.needed);
            }),
            () => {
              t = !1;
            }
          );
        }, [e.staff, e.phoneVerified]);
        const f = (0, t.useCallback)(() => {
          (u(!1), c(!1), (z = null));
        }, []);
        return n
          ? (0, k.jsxs)(k.Fragment, {
              children: [
                (0, k.jsx)(D, { onStart: () => u(!0) }),
                (0, k.jsx)(p.Sheet, {
                  visible: h,
                  title: (0, l.L)(
                    '\u062a\u06a9\u0645\u06cc\u0644 \u0634\u0645\u0627\u0631\u0647\u0654 \u0645\u0648\u0628\u0627\u06cc\u0644',
                  ),
                  onClose: () => u(!1),
                  children: (0, k.jsx)(s.ScrollView, {
                    keyboardShouldPersistTaps: 'handled',
                    contentContainerStyle: { gap: 14, paddingBottom: 4 },
                    children:
                      h &&
                      (0, k.jsx)(H, {
                        onAttached: f,
                        onSupport: o
                          ? () => {
                              (u(!1), o());
                            }
                          : void 0,
                      }),
                  }),
                }),
              ],
            })
          : null;
      }),
      (_e.PhoneSuggestIntroView = A),
      (_e.PhoneCompleteSuggest = function () {
        const [e, o] = (0, t.useState)(!1),
          [n, l] = (0, t.useState)(!1);
        (0, t.useEffect)(() => {
          let e = !0;
          const t = setTimeout(() => {
            R().then((t) => {
              e && t?.suggest && o(!0);
            });
          }, 1500);
          return () => {
            ((e = !1), clearTimeout(t));
          };
        }, []);
        const c = (0, t.useCallback)(async () => {
            (o(!1),
              await (0, C.request)('/v1/me/preferences', 'PATCH', {
                lifecycle: { key: 'add_phone', action: 'dismissed' },
              }).catch(() => {}));
          }, []),
          h = (0, t.useCallback)(() => {
            ((z = null), c());
          }, [c]);
        return (0, k.jsx)(p.Sheet, {
          visible: e,
          title: P,
          onClose: () => {
            c();
          },
          children: (0, k.jsx)(s.ScrollView, {
            keyboardShouldPersistTaps: 'handled',
            contentContainerStyle: { gap: 14, paddingBottom: 4 },
            children: n
              ? (0, k.jsx)(H, { onAttached: h })
              : (0, k.jsx)(A, {
                  onStart: () => l(!0),
                  onLater: () => {
                    c();
                  },
                }),
          }),
        });
      }),
      Object.defineProperty(_e, 'shownPhone', {
        enumerable: !0,
        get: function () {
          return N;
        },
      }));
    var t = r(d[0]),
      o = e(r(d[1])),
      n = e(r(d[2])),
      s = r(d[3]),
      l = r(d[4]),
      c = r(d[5]),
      h = r(d[6]),
      u = r(d[7]),
      p = r(d[8]),
      f = r(d[9]),
      y = r(d[10]),
      x = r(d[11]),
      C = r(d[12]),
      j = r(d[13]),
      S = r(d[14]),
      L = r(d[15]),
      b = r(d[16]),
      v = r(d[17]),
      k = r(d[18]);
    const I = (e) => '\u2066' + e + '\u2069',
      P = (0, l.L)(
        '\u0627\u0645\u0646\u06cc\u062a \u062d\u0633\u0627\u0628\u062a',
      ),
      w = (0, l.L)(
        '\u0628\u0631\u0627\u06cc \u0627\u0645\u0646\u06cc\u062a \u062d\u0633\u0627\u0628\u062a\u060c \u0634\u0645\u0627\u0631\u0647\u0654 \u0645\u0648\u0628\u0627\u06cc\u0644\u062a \u0631\u0627 \u0647\u0645 \u062b\u0628\u062a \u06a9\u0646 \u062a\u0627 \u0627\u06af\u0631 \u0631\u0648\u0632\u06cc \u062c\u06cc\u0645\u06cc\u0644 \u06cc\u0627 \u0631\u0645\u0632\u062a \u062f\u0631 \u062f\u0633\u062a\u0631\u0633 \u0646\u0628\u0648\u062f\u060c \u0628\u0627\u0632 \u0647\u0645 \u0648\u0627\u0631\u062f \u0647\u0645\u06cc\u0646 \u062d\u0633\u0627\u0628 \u0634\u0648\u06cc.',
      );
    function D({ onStart: e }) {
      const { colors: t } = (0, x.useTheme)();
      return (0, k.jsxs)(h.Card, {
        testID: 'phone-complete-card',
        style: { gap: 10, borderColor: t.accent, borderWidth: 1.5 },
        children: [
          (0, k.jsxs)(n.default, {
            style: h.common.row,
            children: [
              (0, k.jsx)(n.default, {
                style: {
                  width: 44,
                  height: 44,
                  borderRadius: 14,
                  backgroundColor: t.accentSoft,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                children: (0, k.jsx)(u.Icon, {
                  name: 'phone',
                  size: 24,
                  color: t.accent,
                }),
              }),
              (0, k.jsx)(h.Copy, {
                accessibilityRole: 'header',
                style: [h.common.title, { flex: 1 }],
                children: P,
              }),
            ],
          }),
          (0, k.jsx)(h.Copy, {
            style: { lineHeight: 26 },
            children: (0, l.L)(
              '\u0627\u06cc\u0646 \u062d\u0633\u0627\u0628 \u0647\u0646\u0648\u0632 \u0634\u0645\u0627\u0631\u0647\u0654 \u0645\u0648\u0628\u0627\u06cc\u0644 \u0646\u062f\u0627\u0631\u062f. {why}',
              { why: w },
            ),
          }),
          (0, k.jsx)(h.Copy, {
            style: { fontSize: 13, lineHeight: 22, color: t.muted },
            children: (0, l.L)(
              '\u0627\u06af\u0631 \u0642\u0628\u0644\u0627\u064b \u0628\u0627 \u0634\u0645\u0627\u0631\u0647\u200c\u0627\u062a \u062b\u0628\u062a\u200c\u0646\u0627\u0645 \u06a9\u0631\u062f\u0647\u200c\u0627\u06cc\u060c \u0647\u0645\u06cc\u0646\u200c\u062c\u0627 \u0645\u06cc\u200c\u0641\u0647\u0645\u06cc \u0648 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc \u0628\u0647 \u0647\u0645\u0627\u0646 \u062d\u0633\u0627\u0628 \u0627\u0635\u0644\u06cc \u0628\u0631\u06af\u0631\u062f\u06cc.',
            ),
          }),
          (0, k.jsx)(h.Button, {
            testID: 'phone-complete-start',
            onPress: e,
            children: (0, l.L)(
              '\u062a\u06a9\u0645\u06cc\u0644 \u0634\u0645\u0627\u0631\u0647\u0654 \u0645\u0648\u0628\u0627\u06cc\u0644',
            ),
          }),
        ],
      });
    }
    function T({
      phone: e,
      onPhone: t,
      phoneError: o,
      busy: s = !1,
      onSend: c,
    }) {
      const { colors: u } = (0, x.useTheme)();
      return (0, k.jsxs)(n.default, {
        style: { gap: 10 },
        children: [
          (0, k.jsx)(h.Copy, { style: { lineHeight: 26 }, children: w }),
          (0, k.jsx)(h.Copy, {
            style: h.common.label,
            children: b.platformFa.phoneLabel,
          }),
          (0, k.jsx)(h.Input, {
            ltr: !0,
            testID: 'phone-complete-input',
            accessibilityLabel: b.platformFa.phoneLabel,
            placeholder: b.platformFa.phonePlaceholder,
            autoComplete: 'tel',
            textContentType: 'telephoneNumber',
            keyboardType: 'phone-pad',
            value: e,
            onChangeText: t,
            onSubmitEditing: c,
            returnKeyType: 'send',
          }),
          !!o &&
            (0, k.jsx)(h.Copy, {
              accessibilityRole: 'alert',
              style: { fontSize: 13, lineHeight: 20, color: u.danger },
              children: o,
            }),
          (0, k.jsx)(h.Copy, {
            style: { fontSize: 13, lineHeight: 22, color: u.muted },
            children: (0, l.L)(
              '\u06cc\u06a9 \u06a9\u062f \u06f4 \u0631\u0642\u0645\u06cc \u0628\u0647 \u0627\u06cc\u0646 \u0634\u0645\u0627\u0631\u0647 \u067e\u06cc\u0627\u0645\u06a9 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645.',
            ),
          }),
          (0, k.jsx)(h.Button, {
            testID: 'phone-complete-send',
            disabled: s,
            onPress: c,
            children: s
              ? (0, l.L)(
                  '\u062f\u0631 \u062d\u0627\u0644 \u0627\u0646\u062c\u0627\u0645\u2026',
                )
              : (0, l.L)('\u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u062f'),
          }),
        ],
      });
    }
    function _({
      masked: e,
      code: t,
      codeLen: o,
      codeState: s,
      busy: c = !1,
      autoCode: u,
      resendLeft: p,
      called: f,
      onCode: y,
      onComplete: C,
      onResend: L,
      onCall: v,
      onChangePhone: P,
      onNoCode: w,
    }) {
      const { colors: D } = (0, x.useTheme)(),
        T = 'success' === s;
      return (0, k.jsxs)(n.default, {
        style: { gap: 12 },
        children: [
          (0, k.jsx)(h.Copy, {
            style: {
              fontSize: 18,
              lineHeight: 28,
              fontFamily: 'Vazirmatn_600SemiBold',
            },
            children: b.platformFa.otpTitle,
          }),
          (0, k.jsx)(h.Copy, {
            style: { fontSize: 13, lineHeight: 20, color: D.muted },
            children: (0, b.interpolate)(b.platformFa.otpSentTo, {
              target: I(e),
            }),
          }),
          (0, k.jsx)(j.CodeBoxes, {
            testID: 'phone-complete-code',
            length: o,
            value: t,
            state: s,
            disabled: c,
            onChange: y,
            onComplete: C,
            autoCode: u,
            onNoCode: w,
          }),
          (0, k.jsx)(n.default, {
            style: { alignItems: 'center', gap: 6 },
            children: (0, k.jsx)(h.Button, {
              testID: 'phone-complete-resend',
              ghost: !0,
              disabled: p > 0 || c || T,
              onPress: L,
              children:
                p > 0
                  ? (0, b.interpolate)(b.platformFa.otpResendIn, {
                      time: (0, S.countdown)(p),
                    })
                  : b.platformFa.otpResend,
            }),
          }),
          p <= 0 &&
            !f &&
            !T &&
            (0, k.jsx)(h.Button, {
              testID: 'phone-complete-call',
              secondary: !0,
              disabled: c,
              onPress: v,
              children: (0, l.L)(
                '\u06a9\u062f \u0631\u0627 \u0628\u0627 \u062a\u0645\u0627\u0633 \u0635\u0648\u062a\u06cc \u0628\u06af\u06cc\u0631',
              ),
            }),
          (0, k.jsx)(h.Button, {
            ghost: !0,
            disabled: c || T,
            onPress: P,
            children: (0, l.L)(
              '\u062a\u063a\u06cc\u06cc\u0631 \u0634\u0645\u0627\u0631\u0647',
            ),
          }),
        ],
      });
    }
    function F({
      taken: e,
      phone: t,
      busy: s = !1,
      onMove: p,
      onSupport: f,
      onBack: y,
    }) {
      const { colors: C } = (0, x.useTheme)(),
        j =
          e.main.name ||
          (0, l.L)('\u062d\u0633\u0627\u0628 \u062f\u06cc\u06af\u0631'),
        S = e.canMove
          ? ''
          : 'both_have_data' === e.reason
            ? (0, l.L)(
                '\u0647\u0631 \u062f\u0648 \u062d\u0633\u0627\u0628 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u062f\u0627\u0631\u0646\u062f (\u06a9\u0627\u0644\u0627\u060c \u0641\u0627\u06a9\u062a\u0648\u0631 \u06cc\u0627 \u062f\u0641\u062a\u0631). \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646\u06a9\u0647 \u0647\u06cc\u0686 \u0686\u06cc\u0632 \u06af\u0645 \u0646\u0634\u0648\u062f\u060c \u06cc\u06a9\u06cc \u06a9\u0631\u062f\u0646 \u062f\u0648 \u062d\u0633\u0627\u0628 \u0631\u0627 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc\u200c\u062f\u0647\u062f\u061b \u062e\u0648\u062f\u06a9\u0627\u0631 \u0627\u0646\u062c\u0627\u0645 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f.',
              )
            : 'current_has_data' === e.reason
              ? (0, l.L)(
                  '\u062f\u0631 \u0647\u0645\u06cc\u0646 \u062d\u0633\u0627\u0628\u06cc \u06a9\u0647 \u0627\u0644\u0627\u0646 \u062f\u0631 \u0622\u0646 \u0647\u0633\u062a\u06cc \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u062b\u0628\u062a \u0634\u062f\u0647 \u0627\u0633\u062a. \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646\u06a9\u0647 \u0647\u06cc\u0686 \u0686\u06cc\u0632 \u06af\u0645 \u0646\u0634\u0648\u062f\u060c \u06cc\u06a9\u06cc \u06a9\u0631\u062f\u0646 \u062f\u0648 \u062d\u0633\u0627\u0628 \u0631\u0627 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc\u200c\u062f\u0647\u062f.',
                )
              : 'both_google' === e.reason
                ? (0, l.L)(
                    '\u062d\u0633\u0627\u0628 \xab{name}\xbb \u062e\u0648\u062f\u0634 \u062c\u06cc\u0645\u06cc\u0644 \u062f\u06cc\u06af\u0631\u06cc \u062f\u0627\u0631\u062f\u061b \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646\u06a9\u0647 \u0627\u06cc\u0646 \u062c\u06cc\u0645\u06cc\u0644 \u0647\u0645 \u0628\u0647 \u0622\u0646 \u0648\u0635\u0644 \u0634\u0648\u062f\u060c \u0628\u0627 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0647\u0645\u0627\u0647\u0646\u06af \u06a9\u0646.',
                    { name: j },
                  )
                : 'main_disabled' === e.reason
                  ? (0, l.L)(
                      '\u062d\u0633\u0627\u0628 \xab{name}\xbb \u0628\u0633\u062a\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a\u061b \u0628\u0631\u0627\u06cc \u0628\u0627\u0632 \u06a9\u0631\u062f\u0646 \u06cc\u0627 \u06cc\u06a9\u06cc \u06a9\u0631\u062f\u0646 \u0622\u0646 \u0628\u0627 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u062a\u0645\u0627\u0633 \u0628\u06af\u06cc\u0631.',
                      { name: j },
                    )
                  : (0, l.L)(
                      '\u0627\u0646\u062a\u0642\u0627\u0644 \u062e\u0648\u062f\u06a9\u0627\u0631 \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646 \u062f\u0648 \u062d\u0633\u0627\u0628 \u0645\u0645\u06a9\u0646 \u0646\u06cc\u0633\u062a\u061b \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0622\u0646\u200c\u0647\u0627 \u0631\u0627 \u06cc\u06a9\u06cc \u0645\u06cc\u200c\u06a9\u0646\u062f.',
                    ),
        L = [
          ...(e.google
            ? [
                (0, l.L)(
                  '\u062c\u06cc\u0645\u06cc\u0644 {email} \u0628\u0647 \u062d\u0633\u0627\u0628 \xab{name}\xbb \u0648\u0635\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                  { email: I(e.google), name: j },
                ),
              ]
            : e.email
              ? [
                  (0, l.L)(
                    '\u0627\u06cc\u0645\u06cc\u0644 {email} \u0628\u0647 \u062d\u0633\u0627\u0628 \xab{name}\xbb \u0645\u0646\u062a\u0642\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                    { email: I(e.email), name: j },
                  ),
                ]
              : []),
          (0, l.L)(
            '\u0627\u06cc\u0646 \u062d\u0633\u0627\u0628 \u062e\u0627\u0644\u06cc \u0628\u0633\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.',
          ),
          (0, l.L)(
            '\u0648\u0627\u0631\u062f \u062d\u0633\u0627\u0628 \u0627\u0635\u0644\u06cc\u200c\u0627\u062a \u0645\u06cc\u200c\u0634\u0648\u06cc\u061b \u0627\u0632 \u0627\u06cc\u0646 \u0628\u0647 \u0628\u0639\u062f \u0628\u0627 \u0634\u0645\u0627\u0631\u0647 \u06cc\u0627 \u062c\u06cc\u0645\u06cc\u0644 \u0648\u0627\u0631\u062f \u0647\u0645\u0627\u0646 \u062d\u0633\u0627\u0628 \u0645\u06cc\u200c\u0634\u0648\u06cc.',
          ),
          (0, l.L)(
            '\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u062d\u0633\u0627\u0628 \u0627\u0635\u0644\u06cc \u062f\u0633\u062a \u0646\u0645\u06cc\u200c\u062e\u0648\u0631\u062f.',
          ),
        ];
      return (0, k.jsxs)(n.default, {
        testID: 'phone-taken',
        style: { gap: 12 },
        children: [
          (0, k.jsxs)(n.default, {
            style: h.common.row,
            children: [
              (0, k.jsx)(n.default, {
                style: {
                  width: 44,
                  height: 44,
                  borderRadius: 14,
                  backgroundColor: C.soft,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                children: (0, k.jsx)(u.Icon, {
                  name: 'user',
                  size: 24,
                  color: C.text,
                }),
              }),
              (0, k.jsx)(h.Copy, {
                accessibilityRole: 'header',
                style: [h.common.title, { flex: 1 }],
                children: (0, l.L)(
                  '\u0627\u06cc\u0646 \u0634\u0645\u0627\u0631\u0647 \u0642\u0628\u0644\u0627\u064b \u062d\u0633\u0627\u0628 \u062f\u06cc\u06af\u0631\u06cc \u062f\u0627\u0631\u062f',
                ),
              }),
            ],
          }),
          (0, k.jsx)(h.Copy, {
            style: { lineHeight: 26 },
            children: (0, l.L)(
              '\u0634\u0645\u0627\u0631\u0647\u0654 {phone} \u0645\u0627\u0644 \u062d\u0633\u0627\u0628 \xab{name}\xbb \u0627\u0633\u062a.',
              { phone: I(t), name: j },
            ),
          }),
          e.canMove
            ? (0, k.jsxs)(k.Fragment, {
                children: [
                  (0, k.jsx)(h.Copy, {
                    style: { lineHeight: 26 },
                    children: (0, l.L)(
                      '\u062d\u0633\u0627\u0628\u06cc \u06a9\u0647 \u0627\u0644\u0627\u0646 \u062f\u0631 \u0622\u0646 \u0647\u0633\u062a\u06cc \u0647\u0646\u0648\u0632 \u062e\u0627\u0644\u06cc \u0627\u0633\u062a\u061b \u067e\u0633 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc \u0628\u0647 \u0647\u0645\u0627\u0646 \u062d\u0633\u0627\u0628 \u0627\u0635\u0644\u06cc \u0628\u0631\u06af\u0631\u062f\u06cc:',
                    ),
                  }),
                  (0, k.jsx)(n.default, {
                    style: {
                      gap: 6,
                      backgroundColor: C.soft,
                      borderRadius: 14,
                      padding: 12,
                    },
                    children: L.map((e) =>
                      (0, k.jsxs)(
                        n.default,
                        {
                          style: [h.common.row, { alignItems: 'flex-start' }],
                          children: [
                            (0, k.jsx)(u.Icon, {
                              name: 'check',
                              size: 18,
                              color: C.accent,
                            }),
                            (0, k.jsx)(h.Copy, {
                              style: { flex: 1, fontSize: 14, lineHeight: 24 },
                              children: e,
                            }),
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
                  (0, k.jsx)(h.Button, {
                    testID: 'phone-move',
                    disabled: s,
                    onPress: p,
                    children: s
                      ? (0, l.L)(
                          '\u062f\u0631 \u062d\u0627\u0644 \u0627\u0646\u062c\u0627\u0645\u2026',
                        )
                      : (0, l.L)(
                          '\u0627\u0646\u062a\u0642\u0627\u0644 \u0628\u0647 \u062d\u0633\u0627\u0628 \u0627\u0635\u0644\u06cc',
                        ),
                  }),
                  (0, k.jsx)(h.Button, {
                    ghost: !0,
                    disabled: s,
                    onPress: y,
                    children: (0, l.L)(
                      '\u0634\u0645\u0627\u0631\u0647\u0654 \u062f\u06cc\u06af\u0631\u06cc \u0645\u06cc\u200c\u0632\u0646\u0645',
                    ),
                  }),
                ],
              })
            : (0, k.jsxs)(k.Fragment, {
                children: [
                  (0, k.jsx)(h.Copy, {
                    testID: 'phone-taken-why',
                    style: { lineHeight: 26 },
                    children: S,
                  }),
                  f &&
                    (0, k.jsx)(h.Button, {
                      testID: 'phone-taken-support',
                      onPress: f,
                      children: (0, l.L)(
                        '\u067e\u06cc\u0627\u0645 \u0628\u0647 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc',
                      ),
                    }),
                  (0, k.jsx)(h.Button, {
                    testID: 'phone-taken-call',
                    secondary: !0,
                    onPress: () => {
                      o.default
                        .openURL('tel:' + c.BRAND.telephone)
                        .catch(() => {});
                    },
                    children: (0, l.L)(
                      '\u062a\u0645\u0627\u0633 \u0628\u0627 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc {phone}',
                      { phone: I(c.BRAND.telephoneDisplay) },
                    ),
                  }),
                  (0, k.jsx)(h.Copy, {
                    style: { fontSize: 13, lineHeight: 22, color: C.muted },
                    children: (0, l.L)(
                      '\u062a\u0627 \u0622\u0646 \u0645\u0648\u0642\u0639 \u0628\u0627 \u0647\u0645\u06cc\u0646 \u062d\u0633\u0627\u0628 \u06a9\u0627\u0631 \u06a9\u0646\u061b \u0686\u06cc\u0632\u06cc \u067e\u0627\u06a9 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f.',
                    ),
                  }),
                  (0, k.jsx)(h.Button, {
                    ghost: !0,
                    onPress: y,
                    children: (0, l.L)(
                      '\u0634\u0645\u0627\u0631\u0647\u0654 \u062f\u06cc\u06af\u0631\u06cc \u0645\u06cc\u200c\u0632\u0646\u0645',
                    ),
                  }),
                ],
              }),
        ],
      });
    }
    function B(e, t) {
      const o =
          e.main.name ||
          (0, l.L)('\u062d\u0633\u0627\u0628 \u062f\u06cc\u06af\u0631'),
        n = e.google
          ? (0, l.L)('\u062c\u06cc\u0645\u06cc\u0644 {email}', {
              email: I(e.google),
            })
          : e.email
            ? (0, l.L)('\u0627\u06cc\u0645\u06cc\u0644 {email}', {
                email: I(e.email),
              })
            : (0, l.L)(
                '\u0627\u06cc\u0646 \u0631\u0627\u0647 \u0648\u0631\u0648\u062f',
              );
      return {
        title: (0, l.L)(
          '\u0627\u0646\u062a\u0642\u0627\u0644 \u0628\u0647 \u062d\u0633\u0627\u0628 \u0627\u0635\u0644\u06cc\u061f',
        ),
        text: (0, l.L)(
          '{what} \u0628\u0647 \u062d\u0633\u0627\u0628 \xab{name}\xbb \u0648\u0635\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f \u0648 \u0627\u06cc\u0646 \u062d\u0633\u0627\u0628 \u062e\u0627\u0644\u06cc \u0628\u0631\u0627\u06cc \u0647\u0645\u06cc\u0634\u0647 \u0628\u0633\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f. \u0628\u0639\u062f \u0648\u0627\u0631\u062f \u0647\u0645\u0627\u0646 \u062d\u0633\u0627\u0628 \u0627\u0635\u0644\u06cc \u0645\u06cc\u200c\u0634\u0648\u06cc.',
          { what: n, name: o },
        ),
        ok: (0, l.L)(
          '\u0627\u0646\u062a\u0642\u0627\u0644 \u0648 \u0648\u0631\u0648\u062f',
        ),
        tone: 'accent',
        run: t,
      };
    }
    function H({ onAttached: e, onSupport: o }) {
      const { colors: s } = (0, x.useTheme)(),
        [c, u] = (0, t.useState)('phone'),
        [p, P] = (0, t.useState)(''),
        [w, D] = (0, t.useState)(''),
        [H, z] = (0, t.useState)(''),
        [R, A] = (0, t.useState)(''),
        [N, E] = (0, t.useState)(j.codeLength),
        [V, M] = (0, t.useState)(''),
        [q, O] = (0, t.useState)('idle'),
        [U, K] = (0, t.useState)(''),
        [W, G] = (0, t.useState)(0),
        [J, Q] = (0, t.useState)(0),
        [X, Y] = (0, t.useState)(!1),
        [Z, $] = (0, t.useState)(!1),
        [ee, te] = (0, t.useState)(''),
        [oe, ne] = (0, t.useState)(''),
        [se, le] = (0, t.useState)(null),
        [ae, ie] = (0, f.useConfirm)();
      ((0, t.useEffect)(() => {
        if (J <= 0) return;
        const e = setTimeout(() => Q((e) => e - 1), 1e3);
        return () => clearTimeout(e);
      }, [J]),
        (0, L.useSmsCode)({
          enabled: 'code' === c && 'success' !== q && V.length < N,
          length: N,
          attempt: W,
          onCode: K,
        }));
      const re = (e) =>
        te(
          e && 'backend_missing' !== e.code
            ? (0, C.message)(Error(e.code))
            : b.platformFa.otpUnavailable,
        );
      async function ce() {
        if (Z) return;
        if (!(0, S.isMobile)(p)) return void D(b.platformFa.phoneInvalid);
        const e = (0, S.toE164)(p);
        (D(''), te(''), ne(''), $(!0));
        try {
          const t = await (0, S.otpCall)('/v1/me/phone/request', {
            phone: e,
          }).catch(() => null);
          if (t?.ok)
            return (
              z(e),
              A(String(t.data?.masked || '') || (0, S.maskPhone)(e)),
              E(Number(t.data?.codeLength) || j.codeLength),
              Q(Number(t.data?.resendAfter) || 90),
              M(''),
              K(''),
              O('idle'),
              Y(!1),
              G((e) => e + 1),
              u('code'),
              void ne(
                t.data?.test
                  ? (0, b.interpolate)(
                      (0, l.L)(
                        '\u062d\u0627\u0644\u062a \u0622\u0632\u0645\u0627\u06cc\u0634\u06cc: \u06a9\u062f {code} \u0627\u0633\u062a.',
                      ),
                      {
                        code: (0, S.persianDigits)(
                          String(t.data.testCode || ''),
                        ),
                      },
                    )
                  : '',
              )
            );
          if ('otp_too_soon' === t?.code)
            return (
              Q(Number((0, S.otpDetail)(t, 'retryAfter')) || 90),
              H === e ? void u('code') : void te(b.platformFa.otpTooSoon)
            );
          if ('invalid_phone' === t?.code)
            return void D(b.platformFa.phoneInvalid);
          re(t);
        } finally {
          $(!1);
        }
      }
      async function de(t) {
        if (Z || 'success' === q) return;
        ($(!0), te(''), ne(''));
        const o = await (0, S.otpCall)('/v1/me/phone/verify', {
          code: (0, S.latinDigits)(t),
        }).catch(() => null);
        if (($(!1), o?.ok && 'attached' === o.data?.status))
          return (
            O('success'),
            (0, y.showToast)(
              (0, l.L)(
                '\u0634\u0645\u0627\u0631\u0647\u0654 {phone} \u0628\u0647 \u0647\u0645\u06cc\u0646 \u062d\u0633\u0627\u0628 \u0648\u0635\u0644 \u0634\u062f\u061b \u0627\u0632 \u0627\u06cc\u0646 \u0628\u0647 \u0628\u0639\u062f \u0628\u0627 \u0634\u0645\u0627\u0631\u0647 \u0647\u0645 \u0648\u0627\u0631\u062f \u0647\u0645\u06cc\u0646 \u062d\u0633\u0627\u0628 \u0645\u06cc\u200c\u0634\u0648\u06cc.',
                { phone: I(R) },
              ),
            ),
            void e(o.data.user)
          );
        if (o?.ok && 'taken' === o.data?.status)
          return (O('success'), le(o.data), void u('taken'));
        if ((O('error'), M(''), K(''), 'otp_invalid' === o?.code)) {
          const e = Number((0, S.otpDetail)(o, 'attemptsLeft'));
          return void te(
            Number.isFinite(e)
              ? (0, b.interpolate)(b.platformFa.otpInvalidLeft, {
                  left: (0, S.persianDigits)(e),
                })
              : b.platformFa.otpInvalid,
          );
        }
        'otp_expired' !== o?.code ? re(o) : te(b.platformFa.otpExpired);
      }
      async function he() {
        if (!Z) {
          ($(!0), te(''));
          try {
            const e = await (0, S.otpCall)('/v1/me/phone/call', {}).catch(
              () => null,
            );
            if (e?.ok)
              return (
                Y(!0),
                void ne(
                  e.data?.test
                    ? (0, b.interpolate)(
                        (0, l.L)(
                          '\u062d\u0627\u0644\u062a \u0622\u0632\u0645\u0627\u06cc\u0634\u06cc: \u062a\u0645\u0627\u0633\u06cc \u06af\u0631\u0641\u062a\u0647 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f\u061b \u06a9\u062f {code} \u0627\u0633\u062a.',
                        ),
                        {
                          code: (0, S.persianDigits)(
                            String(e.data.testCode || ''),
                          ),
                        },
                      )
                    : (0, b.interpolate)(
                        (0, l.L)(
                          '\u0627\u0644\u0627\u0646 \u0628\u0627 {phone} \u062a\u0645\u0627\u0633 \u0645\u06cc\u200c\u06af\u06cc\u0631\u06cc\u0645 \u0648 \u06a9\u062f \u0631\u0627 \u062f\u0648 \u0628\u0627\u0631 \u0645\u06cc\u200c\u062e\u0648\u0627\u0646\u06cc\u0645\u061b \u0647\u0645\u0627\u0646 \u06a9\u062f \u0631\u0627 \u0627\u06cc\u0646\u062c\u0627 \u0628\u0632\u0646.',
                        ),
                        { phone: I(R) },
                      ),
                )
              );
            if ('otp_too_soon' === e?.code)
              return (
                Q(Number((0, S.otpDetail)(e, 'retryAfter')) || 30),
                void te(
                  (0, l.L)(
                    '\u06a9\u0645\u06cc \u0635\u0628\u0631 \u06a9\u0646\u061b \u062a\u0645\u0627\u0633 \u0635\u0648\u062a\u06cc \u0628\u0639\u062f \u0627\u0632 \u062a\u0645\u0627\u0645 \u0634\u062f\u0646 \u0632\u0645\u0627\u0646 \xab\u0627\u0631\u0633\u0627\u0644 \u062f\u0648\u0628\u0627\u0631\u0647\xbb \u0645\u0645\u06a9\u0646 \u0627\u0633\u062a.',
                  ),
                )
              );
            if ('otp_expired' === e?.code)
              return void te(b.platformFa.otpExpired);
            re(e);
          } finally {
            $(!1);
          }
        }
      }
      async function ue() {
        if (se?.ticket && !Z) {
          ($(!0), te(''));
          try {
            const e = await (0, C.request)('/v1/me/phone/move', 'POST', {
              ticket: se.ticket,
              deviceName: 'myAnbari',
            });
            (await (0, C.storeToken)(e.token || null),
              (0, y.showToast)(
                (0, l.L)(
                  '\u0628\u0647 \u062d\u0633\u0627\u0628 \u0627\u0635\u0644\u06cc\u200c\u0627\u062a \u0645\u0646\u062a\u0642\u0644 \u0634\u062f\u06cc\u061b \u0627\u0632 \u0627\u06cc\u0646 \u0628\u0647 \u0628\u0639\u062f \u0628\u0627 \u0634\u0645\u0627\u0631\u0647 \u06cc\u0627 \u062c\u06cc\u0645\u06cc\u0644 \u0648\u0627\u0631\u062f \u0647\u0645\u06cc\u0646 \u062d\u0633\u0627\u0628 \u0645\u06cc\u200c\u0634\u0648\u06cc.',
                ),
              ),
              setTimeout(() => {
                (0, v.restartApp)();
              }, 900));
          } catch (e) {
            if (
              e instanceof Error &&
              ('device_limit' === e.message ||
                'device_limit_plan' === e.message)
            )
              return;
            te((0, C.message)(e));
          } finally {
            $(!1);
          }
        }
      }
      const pe = () => {
        (u('phone'), le(null), M(''), O('idle'), te(''), ne(''));
      };
      return (0, k.jsxs)(n.default, {
        style: { gap: 12 },
        children: [
          'phone' === c &&
            (0, k.jsx)(T, {
              phone: p,
              onPhone: (e) => {
                (P(e), D(''));
              },
              phoneError: w,
              busy: Z,
              onSend: () => {
                ce();
              },
            }),
          'code' === c &&
            (0, k.jsx)(_, {
              masked: R,
              code: V,
              codeLen: N,
              codeState: q,
              busy: Z,
              autoCode: U,
              resendLeft: J,
              called: X,
              onCode: (e) => {
                (M(e), 'error' === q && (O('idle'), te('')));
              },
              onComplete: (e) => {
                de(e);
              },
              onResend: () => {
                ce();
              },
              onCall: () => {
                he();
              },
              onChangePhone: pe,
              onNoCode: () => {
                (O('error'),
                  te(
                    (0, b.interpolate)(b.platformFa.otpNoCode, {
                      n: (0, S.persianDigits)(N),
                    }),
                  ));
              },
            }),
          'taken' === c &&
            se &&
            (0, k.jsx)(F, {
              taken: se,
              phone: (0, S.persianDigits)('0' + H.replace(/^\+98/, '')),
              busy: Z,
              onMove: () =>
                ae(
                  B(se, () => {
                    ue();
                  }),
                ),
              onSupport: o,
              onBack: pe,
            }),
          !!oe &&
            (0, k.jsx)(h.Copy, {
              accessibilityRole: 'alert',
              style: { fontSize: 13, lineHeight: 22, color: s.text },
              children: oe,
            }),
          !!ee &&
            (0, k.jsx)(h.Copy, {
              accessibilityRole: 'alert',
              style: { fontSize: 13, lineHeight: 22, color: s.danger },
              children: ee,
            }),
          ie,
        ],
      });
    }
    let z = null;
    function R() {
      return (
        z ||
          (z = (0, C.request)('/v1/auth/identities')
            .then((e) => e.phoneLink || null)
            .catch(() => ((z = null), null))),
        z
      );
    }
    function A({ onStart: e, onLater: t }) {
      const { colors: o } = (0, x.useTheme)();
      return (0, k.jsxs)(n.default, {
        testID: 'phone-suggest',
        style: { gap: 12 },
        children: [
          (0, k.jsx)(n.default, {
            style: {
              alignSelf: 'center',
              width: 64,
              height: 64,
              borderRadius: 20,
              backgroundColor: o.accentSoft,
              alignItems: 'center',
              justifyContent: 'center',
            },
            children: (0, k.jsx)(u.Icon, {
              name: 'phone',
              size: 34,
              color: o.accent,
            }),
          }),
          (0, k.jsx)(h.Copy, {
            style: { fontSize: 16, lineHeight: 28, textAlign: 'center' },
            children: w,
          }),
          (0, k.jsx)(h.Copy, {
            style: {
              fontSize: 13,
              lineHeight: 22,
              color: o.muted,
              textAlign: 'center',
            },
            children: (0, l.L)(
              '\u0627\u06af\u0631 \u067e\u06cc\u0627\u0645\u06a9 \u0646\u0631\u0633\u06cc\u062f \u06cc\u0627 \u0628\u0627 \u062c\u06cc\u0645\u06cc\u0644 \u0622\u0645\u062f\u06cc\u060c \u0628\u0627\u0632 \u0647\u0645 \u0647\u0645\u06cc\u0646 \u062d\u0633\u0627\u0628 \u0648 \u0647\u0645\u06cc\u0646 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0631\u0627 \u0645\u06cc\u200c\u0628\u06cc\u0646\u06cc.',
            ),
          }),
          (0, k.jsx)(h.Button, {
            testID: 'phone-suggest-start',
            onPress: e,
            children: (0, l.L)(
              '\u062a\u06a9\u0645\u06cc\u0644 \u0634\u0645\u0627\u0631\u0647\u0654 \u0645\u0648\u0628\u0627\u06cc\u0644',
            ),
          }),
          (0, k.jsx)(h.Button, {
            testID: 'phone-suggest-later',
            ghost: !0,
            onPress: t,
            children: (0, l.L)('\u0628\u0639\u062f\u0627\u064b'),
          }),
          (0, k.jsx)(h.Copy, {
            style: {
              fontSize: 12,
              lineHeight: 20,
              color: o.muted,
              textAlign: 'center',
            },
            children: (0, l.L)(
              '\u0647\u0631 \u0648\u0642\u062a \u062e\u0648\u0627\u0633\u062a\u06cc \u0627\u0632 \u0628\u0627\u0644\u0627\u06cc \xab\u067e\u0631\u0648\u0641\u0627\u06cc\u0644\xbb \u0647\u0645 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc \u062a\u06a9\u0645\u06cc\u0644\u0634 \u06a9\u0646\u06cc.',
            ),
          }),
        ],
      });
    }
    const N = (e) => (0, l.localDigits)('0' + e.replace(/^\+98/, ''));
  },
  538,
  [
    2, 210, 99, 380, 311, 437, 407, 385, 539, 534, 525, 382, 415, 510, 512, 542,
    502, 543, 338,
  ],
);
