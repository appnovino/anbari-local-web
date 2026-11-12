// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 605; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.linkPreviewRoute = function () {
        if ('undefined' == typeof window) return null;
        try {
          const [e, n, t] = window.location.hash.slice(1).split(':');
          return 'link-preview' === e && (0, p.localHost)()
            ? k.includes(n)
              ? { view: n, mode: 'dark' === t ? 'dark' : 'light' }
              : { view: 'gallery' }
            : null;
        } catch {
          return null;
        }
      }),
      (_e.LinkPreview = function ({ route: e }) {
        return (
          (0, n.useEffect)(() => {
            const e = () => window.location.reload();
            return (
              window.addEventListener('hashchange', e),
              () => window.removeEventListener('hashchange', e)
            );
          }, []),
          'gallery' !== e.view
            ? (0, C.jsx)(a.ThemeScope, {
                mode: e.mode,
                children: (0, C.jsx)(F, { view: e.view }),
              })
            : (0, C.jsxs)(l.ScrollView, {
                style: { flex: 1 },
                contentContainerStyle: {
                  padding: 16,
                  gap: 16,
                  flexDirection: 'row-reverse',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start',
                },
                children: [
                  (0, C.jsx)(a.ThemeScope, {
                    mode: 'light',
                    children: (0, C.jsx)(R, { mode: 'light' }),
                  }),
                  (0, C.jsx)(a.ThemeScope, {
                    mode: 'dark',
                    children: (0, C.jsx)(R, { mode: 'dark' }),
                  }),
                ],
              })
        );
      }));
    var n = r(d[0]);
    r(d[1]);
    var t = e(r(d[2])),
      o = e(r(d[3])),
      l = r(d[4]),
      a = r(d[5]),
      s = r(d[6]),
      c = r(d[7]),
      h = r(d[8]),
      u = r(d[9]),
      f = r(d[10]),
      p = r(d[11]),
      x = r(d[12]),
      j = r(d[13]),
      y = r(d[14]),
      b = r(d[15]),
      C = r(d[16]);
    const k = [
      'card',
      'linked',
      'app',
      'suggest',
      'pending',
      'otp',
      'phone-card',
      'phone-suggest',
      'phone-code',
      'phone-taken',
      'phone-confirm',
      'phone-support',
    ];
    const w = {
        google: { available: !0, linked: !1, email: null, linkedAt: null },
        phone: '+989121234567',
        email: null,
        emailVerified: !1,
        canUnlink: !1,
        suggest: !0,
      },
      v = {
        ...w,
        google: {
          available: !0,
          linked: !0,
          email: 'ali.rezaei.shop@gmail.com',
          linkedAt: '2026-10-20T08:30:00Z',
        },
        canUnlink: !0,
        suggest: !1,
      },
      S = () => {};
    function z() {
      const { colors: e, mode: n } = (0, a.useTheme)();
      return (0, C.jsx)(o.default, {
        style: {
          minHeight: 50,
          borderRadius: 12,
          borderWidth: t.default.hairlineWidth,
          borderColor: e.line,
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 3,
        },
        children: (0, C.jsxs)(o.default, {
          style: {
            width: 300,
            maxWidth: '100%',
            height: 40,
            borderRadius: 4,
            borderWidth: 1,
            borderColor: 'light' === n ? '#dadce0' : '#5f6368',
            backgroundColor: 'light' === n ? '#fff' : '#131314',
            flexDirection: 'row-reverse',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
          },
          children: [
            (0, C.jsx)(s.Copy, {
              style: {
                fontSize: 18,
                lineHeight: 22,
                fontFamily: 'Vazirmatn_700Bold',
                color: '#4285F4',
              },
              children: 'G',
            }),
            (0, C.jsx)(s.Copy, {
              style: {
                fontSize: 14,
                lineHeight: 20,
                color: 'light' === n ? '#1f1f1f' : '#e3e3e3',
              },
              children: '\u0627\u062f\u0627\u0645\u0647 \u0628\u0627 Google',
            }),
          ],
        }),
      });
    }
    function T() {
      const { colors: e, mode: n } = (0, a.useTheme)(),
        l = 'light' === n;
      return (0, C.jsxs)(o.default, {
        style: {
          borderRadius: 24,
          padding: 24,
          gap: 14,
          backgroundColor: l ? 'rgba(255,255,255,.62)' : 'rgba(28,28,30,.55)',
          borderWidth: t.default.hairlineWidth,
          borderColor: l ? 'rgba(255,255,255,.85)' : 'rgba(255,255,255,.14)',
        },
        children: [
          (0, C.jsx)(s.Copy, {
            style: {
              fontSize: 20,
              lineHeight: 26,
              fontFamily: 'Vazirmatn_600SemiBold',
            },
            children: j.platformFa.otpTitle,
          }),
          (0, C.jsx)(s.Copy, {
            style: { fontSize: 13, lineHeight: 19, color: e.muted },
            children: (0, j.interpolate)(j.platformFa.otpSentTo, {
              target:
                '\u2066\u06f0\u06f9\u06f1\u06f2***\u06f4\u06f5\u06f6\u06f7\u2069',
            }),
          }),
          (0, C.jsx)(u.CodeBoxes, {
            value: '',
            state: 'idle',
            onChange: S,
            onComplete: S,
          }),
          (0, C.jsxs)(o.default, {
            style: { alignItems: 'center', gap: 4 },
            children: [
              (0, C.jsx)(h.TextKey, {
                label: j.platformFa.otpResend,
                onPress: S,
              }),
              (0, C.jsx)(o.default, {
                style: { alignSelf: 'stretch' },
                children: (0, C.jsx)(h.OutlineKey, {
                  testID: 'auth-otp-call',
                  icon: 'phone',
                  label: (0, x.L)(
                    '\u06a9\u062f \u0631\u0627 \u0628\u0627 \u062a\u0645\u0627\u0633 \u0635\u0648\u062a\u06cc \u0628\u06af\u06cc\u0631',
                  ),
                  onPress: S,
                }),
              }),
              (0, C.jsx)(h.TextKey, {
                label: j.platformFa.backToLogin,
                onPress: S,
              }),
            ],
          }),
        ],
      });
    }
    const L = {
        status: 'taken',
        canMove: !0,
        ticket: 'preview',
        main: {
          name: '\u0622\u0642\u0627\u06cc \u0639\u0644\u06cc \u0631\u0636\u0627\u06cc\u06cc',
        },
        google: 'ali.rezaei.shop@gmail.com',
        email: 'ali.rezaei.shop@gmail.com',
        moves: ['google', 'email', 'archive', 'disable'],
      },
      V = {
        status: 'taken',
        canMove: !1,
        reason: 'both_have_data',
        main: {
          name: '\u0622\u0642\u0627\u06cc \u0639\u0644\u06cc \u0631\u0636\u0627\u06cc\u06cc',
        },
      };
    function H({ title: e, children: n }) {
      const { colors: t } = (0, a.useTheme)();
      return (0, C.jsx)(o.default, {
        style: {
          flexGrow: 1,
          backgroundColor: '#08090ba6',
          minHeight: 700,
          justifyContent: 'flex-end',
        },
        children: (0, C.jsxs)(o.default, {
          style: {
            backgroundColor: t.surface,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            padding: 18,
            paddingBottom: 28,
            gap: 14,
          },
          children: [
            (0, C.jsx)(o.default, {
              style: {
                alignSelf: 'center',
                width: 40,
                height: 5,
                borderRadius: 3,
                backgroundColor: t.line,
              },
            }),
            (0, C.jsx)(s.Copy, {
              style: {
                fontSize: 18,
                lineHeight: 28,
                fontFamily: 'Vazirmatn_700Bold',
              },
              children: e,
            }),
            n,
          ],
        }),
      });
    }
    function P() {
      const { colors: e } = (0, a.useTheme)();
      return (0, C.jsxs)(o.default, {
        style: { padding: 16, gap: 16, backgroundColor: e.bg, minHeight: 700 },
        children: [
          (0, C.jsx)(s.PageTitle, {
            title: (0, x.L)('\u062a\u0646\u0638\u06cc\u0645\u0627\u062a'),
          }),
          (0, C.jsx)(y.PhoneCompleteCardView, { onStart: S }),
          (0, C.jsxs)(s.Card, {
            style: { padding: 12, gap: 6 },
            children: [
              (0, C.jsxs)(s.Copy, {
                style: {
                  fontSize: 20,
                  lineHeight: 30,
                  fontFamily: 'Vazirmatn_700Bold',
                },
                children: [
                  (0, C.jsx)(s.Copy, {
                    style: {
                      fontSize: 20,
                      lineHeight: 30,
                      fontFamily: 'Vazirmatn_600SemiBold',
                      color: e.muted,
                    },
                    children: '\u0641\u0631\u0648\u0634\u06af\u0627\u0647 ',
                  }),
                  '\u0645\u0646',
                ],
              }),
              (0, C.jsx)(s.Copy, {
                style: { fontSize: 14, lineHeight: 22, color: e.muted },
                children: 'Ali Rezaei',
              }),
            ],
          }),
        ],
      });
    }
    function _({ view: e }) {
      const { colors: n, mode: l } = (0, a.useTheme)(),
        s = 'light' === l;
      return 'card' === e
        ? (0, C.jsx)(o.default, {
            style: { padding: 16, backgroundColor: n.bg },
            children: (0, C.jsx)(c.GmailLinkCardView, {
              state: w,
              native: !1,
              googleKey: (0, C.jsx)(z, {}),
            }),
          })
        : 'linked' === e
          ? (0, C.jsx)(o.default, {
              style: { padding: 16, backgroundColor: n.bg },
              children: (0, C.jsx)(c.GmailLinkCardView, {
                state: v,
                native: !1,
                onUnlink: S,
              }),
            })
          : 'app' === e
            ? (0, C.jsx)(o.default, {
                style: { padding: 16, backgroundColor: n.bg },
                children: (0, C.jsx)(c.GmailLinkCardView, {
                  state: w,
                  native: !0,
                }),
              })
            : 'suggest' === e
              ? (0, C.jsx)(o.default, {
                  style: {
                    flexGrow: 1,
                    backgroundColor: '#08090bbb',
                    padding: 16,
                    minHeight: 560,
                    justifyContent: 'center',
                  },
                  children: (0, C.jsx)(o.default, {
                    style: {
                      width: '100%',
                      maxWidth: 460,
                      alignSelf: 'center',
                    },
                    children: (0, C.jsx)(c.LinkGmailSuggestCard, {
                      clientId: 'preview',
                      googleKey: (0, C.jsx)(z, {}),
                      onCredential: S,
                      onGoogleError: S,
                      onLater: S,
                    }),
                  }),
                })
              : 'pending' === e
                ? (0, C.jsxs)(o.default, {
                    style: {
                      padding: 16,
                      backgroundColor: n.bg,
                      minHeight: 560,
                      justifyContent: 'center',
                    },
                    children: [
                      (0, C.jsx)(f.AuthBackdrop, {}),
                      (0, C.jsx)(o.default, {
                        style: {
                          borderRadius: 24,
                          padding: 24,
                          backgroundColor: s
                            ? 'rgba(255,255,255,.62)'
                            : 'rgba(28,28,30,.55)',
                          borderWidth: t.default.hairlineWidth,
                          borderColor: s
                            ? 'rgba(255,255,255,.85)'
                            : 'rgba(255,255,255,.14)',
                        },
                        children: (0, C.jsx)(c.GooglePendingCard, {
                          email: 'ali.rezaei.shop@gmail.com',
                          onPhone: S,
                          onNew: S,
                          onBack: S,
                        }),
                      }),
                    ],
                  })
                : 'otp' === e
                  ? (0, C.jsxs)(o.default, {
                      style: {
                        padding: 16,
                        backgroundColor: n.bg,
                        minHeight: 560,
                        justifyContent: 'center',
                      },
                      children: [
                        (0, C.jsx)(f.AuthBackdrop, {}),
                        (0, C.jsx)(T, {}),
                      ],
                    })
                  : (0, C.jsx)(B, { view: e });
    }
    function B({ view: e }) {
      if ('phone-card' === e) return (0, C.jsx)(P, {});
      if ('phone-suggest' === e)
        return (0, C.jsx)(H, {
          title: (0, x.L)(
            '\u0627\u0645\u0646\u06cc\u062a \u062d\u0633\u0627\u0628\u062a',
          ),
          children: (0, C.jsx)(y.PhoneSuggestIntroView, {
            onStart: S,
            onLater: S,
          }),
        });
      if ('phone-code' === e)
        return (0, C.jsx)(H, {
          title: (0, x.L)(
            '\u062a\u06a9\u0645\u06cc\u0644 \u0634\u0645\u0627\u0631\u0647\u0654 \u0645\u0648\u0628\u0627\u06cc\u0644',
          ),
          children: (0, C.jsx)(y.CodeStepView, {
            masked: '\u06f0\u06f9\u06f1\u06f2***\u06f4\u06f5\u06f6\u06f7',
            code: '',
            codeLen: 4,
            codeState: 'idle',
            resendLeft: 0,
            called: !1,
            onCode: S,
            onComplete: S,
            onResend: S,
            onCall: S,
            onChangePhone: S,
          }),
        });
      if ('phone-support' === e)
        return (0, C.jsx)(H, {
          title: (0, x.L)(
            '\u062a\u06a9\u0645\u06cc\u0644 \u0634\u0645\u0627\u0631\u0647\u0654 \u0645\u0648\u0628\u0627\u06cc\u0644',
          ),
          children: (0, C.jsx)(y.PhoneTakenView, {
            taken: V,
            phone:
              '\u06f0\u06f9\u06f1\u06f2\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7',
            onMove: S,
            onSupport: S,
            onBack: S,
          }),
        });
      const n = (0, C.jsx)(H, {
        title: (0, x.L)(
          '\u062a\u06a9\u0645\u06cc\u0644 \u0634\u0645\u0627\u0631\u0647\u0654 \u0645\u0648\u0628\u0627\u06cc\u0644',
        ),
        children: (0, C.jsx)(y.PhoneTakenView, {
          taken: L,
          phone:
            '\u06f0\u06f9\u06f1\u06f2\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7',
          onMove: S,
          onBack: S,
        }),
      });
      return 'phone-confirm' === e
        ? (0, C.jsxs)(C.Fragment, {
            children: [
              n,
              (0, C.jsx)(b.ConfirmDialog, {
                ask: (0, y.moveConfirm)(L, S),
                onClose: S,
              }),
            ],
          })
        : n;
    }
    function R({ mode: e }) {
      const { colors: n } = (0, a.useTheme)();
      return (0, C.jsxs)(o.default, {
        style: {
          flex: 1,
          minWidth: 340,
          maxWidth: 480,
          gap: 10,
          backgroundColor: n.bg,
          padding: 12,
          borderRadius: 20,
        },
        children: [
          (0, C.jsx)(s.Copy, {
            style: {
              fontSize: 18,
              lineHeight: 28,
              fontFamily: 'Vazirmatn_700Bold',
            },
            children: 'light' === e ? '\u0631\u0648\u0632' : '\u0634\u0628',
          }),
          k.map((e) =>
            (0, C.jsxs)(
              o.default,
              {
                style: { gap: 4 },
                children: [
                  (0, C.jsx)(s.Copy, {
                    style: {
                      fontSize: 12,
                      lineHeight: 18,
                      color: n.muted,
                      textAlign: 'left',
                    },
                    children: e,
                  }),
                  (0, C.jsx)(_, { view: e }),
                ],
              },
              e,
            ),
          ),
        ],
      });
    }
    function F({ view: e }) {
      const { colors: n } = (0, a.useTheme)();
      return (0, C.jsx)(l.ScrollView, {
        style: { flex: 1, backgroundColor: n.bg },
        contentContainerStyle: {
          flexGrow: 1,
          justifyContent: ['card', 'linked', 'app'].includes(e)
            ? 'flex-start'
            : 'center',
        },
        children: (0, C.jsx)(_, { view: e }),
      });
    }
  },
  605,
  [
    2, 94, 17, 99, 380, 382, 407, 514, 379, 510, 509, 582, 311, 502, 538, 534,
    338,
  ],
);
