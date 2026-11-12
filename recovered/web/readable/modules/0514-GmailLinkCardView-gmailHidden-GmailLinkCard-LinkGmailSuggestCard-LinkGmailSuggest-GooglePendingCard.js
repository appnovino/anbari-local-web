// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 514; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (_g, r, i, a, _m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.GmailLinkCardView = H),
      (_e.gmailHidden = v),
      (_e.GmailLinkCard = function ({ staff: e = !1 }) {
        const [n, l] = (0, t.useState)(null),
          [o, s] = (0, t.useState)(''),
          [c, g] = (0, t.useState)(!1),
          [m, y] = (0, t.useState)(''),
          [j, b] = (0, f.useConfirm)();
        (0, t.useEffect)(() => {
          if (e) return;
          let t = !0;
          return (
            (0, C.request)('/v1/auth/identities')
              .then((e) => {
                t && l(e);
              })
              .catch((e) => {
                t && y((0, C.message)(e));
              }),
            w().then((e) => {
              t && (s(e), g(!0));
            }),
            () => {
              t = !1;
            }
          );
        }, [e]);
        const p = (0, t.useCallback)((e) => {
            (y(''),
              (0, C.request)('/v1/auth/google/link', 'POST', { credential: e })
                .then((e) => {
                  (l(e),
                    (0, x.showToast)(
                      (0, u.L)(
                        '\u062c\u06cc\u0645\u06cc\u0644 \u0628\u0647 \u0627\u06cc\u0646 \u062d\u0633\u0627\u0628 \u0648\u0635\u0644 \u0634\u062f',
                      ),
                    ));
                })
                .catch((e) => y((0, C.message)(e))));
          }, []),
          L = (0, t.useCallback)(
            () => y((0, C.message)(Error('google_unavailable'))),
            [],
          );
        if (e || !n)
          return m && !e
            ? (0, k.jsx)(h.Card, {
                children: (0, k.jsx)(h.Copy, {
                  accessibilityRole: 'alert',
                  children: m,
                }),
              })
            : null;
        if (v(n, { native: !1, methodsRead: c, clientId: o })) return null;
        return (0, k.jsxs)(k.Fragment, {
          children: [
            (0, k.jsx)(H, {
              state: n,
              clientId: o,
              onCredential: p,
              onGoogleError: L,
              onUnlink: () =>
                j({
                  title: (0, u.L)(
                    '\u062c\u06cc\u0645\u06cc\u0644 \u0627\u0632 \u0627\u06cc\u0646 \u062d\u0633\u0627\u0628 \u062c\u062f\u0627 \u0634\u0648\u062f\u061f',
                  ),
                  text: (0, u.L)(
                    '\u0627\u0632 \u0627\u06cc\u0646 \u0628\u0647 \u0628\u0639\u062f \u0628\u0627 \u062c\u06cc\u0645\u06cc\u0644 {email} \u0646\u0645\u06cc\u200c\u0634\u0648\u062f \u0648\u0627\u0631\u062f \u0627\u06cc\u0646 \u062d\u0633\u0627\u0628 \u0634\u062f\u061b \u0628\u0627 \u0634\u0645\u0627\u0631\u0647\u0654 \u0645\u0648\u0628\u0627\u06cc\u0644 \u0645\u062b\u0644 \u0642\u0628\u0644 \u0648\u0627\u0631\u062f \u0645\u06cc\u200c\u0634\u0648\u06cc. \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u067e\u0627\u06a9 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f.',
                    { email: I(n.google.email || '') },
                  ),
                  ok: (0, u.L)(
                    '\u0642\u0637\u0639 \u0627\u062a\u0635\u0627\u0644',
                  ),
                  run: async () => {
                    try {
                      (l(
                        await (0, C.request)('/v1/auth/google/link', 'DELETE'),
                      ),
                        (0, x.showToast)(
                          (0, u.L)(
                            '\u0627\u062a\u0635\u0627\u0644 \u062c\u06cc\u0645\u06cc\u0644 \u0642\u0637\u0639 \u0634\u062f',
                          ),
                        ));
                    } catch (e) {
                      y((0, C.message)(e));
                    }
                  },
                }),
              error: m,
            }),
            b,
          ],
        });
      }),
      (_e.LinkGmailSuggestCard = z),
      (_e.LinkGmailSuggest = function () {
        const e = (0, g.useSafeAreaInsets)(),
          [n, h] = (0, t.useState)(''),
          [m, f] = (0, t.useState)(!1),
          [j, b] = (0, t.useState)('');
        (0, t.useEffect)(() => {
          let e = !0;
          const t = setTimeout(() => {
            Promise.all([(0, C.request)('/v1/auth/identities'), w()])
              .then(([t, n]) => {
                e && t.suggest && n && (h(n), f(!0));
              })
              .catch(() => {});
          }, 1500);
          return () => {
            ((e = !1), clearTimeout(t));
          };
        }, []);
        const p = (0, t.useCallback)(async () => {
            (f(!1),
              await (0, C.request)('/v1/me/preferences', 'PATCH', {
                lifecycle: { key: 'link_gmail', action: 'dismissed' },
              }).catch(() => {}));
          }, []),
          I = (0, t.useCallback)((e) => {
            (b(''),
              (0, C.request)('/v1/auth/google/link', 'POST', { credential: e })
                .then(() => {
                  (f(!1),
                    (0, x.showToast)(
                      (0, u.L)(
                        '\u062c\u06cc\u0645\u06cc\u0644 \u0628\u0647 \u0627\u06cc\u0646 \u062d\u0633\u0627\u0628 \u0648\u0635\u0644 \u0634\u062f',
                      ),
                    ));
                })
                .catch((e) => b((0, C.message)(e))));
          }, []),
          L = (0, t.useCallback)(
            () => b((0, C.message)(Error('google_unavailable'))),
            [],
          );
        return m
          ? (0, k.jsx)(o.Modal, {
              visible: !0,
              transparent: !0,
              animationType: 'fade',
              onRequestClose: () => {
                p();
              },
              children: (0, k.jsxs)(l.default, {
                style: {
                  flex: 1,
                  backgroundColor: '#08090bbb',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: e.top + 16,
                  paddingBottom: e.bottom + 16,
                  paddingHorizontal: 16,
                },
                children: [
                  (0, k.jsx)(y.Backdrop, {
                    testID: 'gmail-suggest-backdrop',
                    onClose: () => {
                      p();
                    },
                  }),
                  (0, k.jsx)(s.PullCard, {
                    onClose: () => {
                      p();
                    },
                    style: { width: '100%', maxWidth: 460, maxHeight: '100%' },
                    children: (0, k.jsx)(c.ScrollView, {
                      bounces: !1,
                      keyboardShouldPersistTaps: 'handled',
                      children: (0, k.jsx)(z, {
                        clientId: n,
                        onCredential: I,
                        onGoogleError: L,
                        onLater: p,
                        error: j,
                      }),
                    }),
                  }),
                ],
              }),
            })
          : null;
      }),
      (_e.GooglePendingCard = function ({
        email: e,
        busy: t = !1,
        onPhone: n,
        onNew: o,
        onBack: s,
        error: c,
      }) {
        const { colors: g } = (0, j.useTheme)();
        return (0, k.jsxs)(l.default, {
          testID: 'google-pending',
          style: { gap: 12 },
          children: [
            (0, k.jsxs)(l.default, {
              style: h.common.row,
              children: [
                (0, k.jsx)(l.default, {
                  style: {
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    backgroundColor: g.soft,
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                  children: (0, k.jsx)(h.Copy, {
                    style: {
                      fontSize: 20,
                      lineHeight: 26,
                      fontFamily: 'Vazirmatn_700Bold',
                      color: '#4285F4',
                    },
                    children: 'G',
                  }),
                }),
                (0, k.jsx)(h.Copy, {
                  style: {
                    flex: 1,
                    fontSize: 14,
                    lineHeight: 22,
                    color: g.muted,
                  },
                  children: I(e),
                }),
              ],
            }),
            (0, k.jsx)(h.Copy, {
              accessibilityRole: 'header',
              style: {
                fontSize: 18,
                lineHeight: 30,
                fontFamily: 'Vazirmatn_600SemiBold',
              },
              children: (0, u.L)(
                '\u0627\u06cc\u0646 \u062c\u06cc\u0645\u06cc\u0644 \u0628\u0647 \u0647\u06cc\u0686 \u062d\u0633\u0627\u0628\u06cc \u0648\u0635\u0644 \u0646\u06cc\u0633\u062a. \u0642\u0628\u0644\u0627\u064b \u0628\u0627 \u0634\u0645\u0627\u0631\u0647\u0654 \u0645\u0648\u0628\u0627\u06cc\u0644 \u062b\u0628\u062a\u200c\u0646\u0627\u0645 \u06a9\u0631\u062f\u0647\u200c\u0627\u06cc\u062f\u061f',
              ),
            }),
            (0, k.jsx)(h.Copy, {
              style: { fontSize: 13, lineHeight: 22, color: g.muted },
              children: (0, u.L)(
                '\u0627\u06af\u0631 \u0628\u0627 \u0634\u0645\u0627\u0631\u0647 \u062b\u0628\u062a\u200c\u0646\u0627\u0645 \u06a9\u0631\u062f\u0647\u200c\u0627\u06cc\u062f\u060c \u0628\u0627 \u0647\u0645\u0627\u0646 \u0634\u0645\u0627\u0631\u0647 \u06a9\u062f \u0628\u06af\u06cc\u0631\u06cc\u062f\u061b \u0628\u0639\u062f \u0627\u0632 \u0648\u0631\u0648\u062f\u060c \u0627\u06cc\u0646 \u062c\u06cc\u0645\u06cc\u0644 \u0647\u0645 \u0628\u0647 \u0647\u0645\u0627\u0646 \u062d\u0633\u0627\u0628 \u0648\u0635\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f \u0648 \u0627\u0637\u0644\u0627\u0639\u0627\u062a\u062a\u0627\u0646 \u0633\u0631 \u062c\u0627\u06cc\u0634 \u0627\u0633\u062a.',
              ),
            }),
            (0, k.jsx)(h.Button, {
              testID: 'google-pending-phone',
              disabled: t,
              onPress: n,
              children: (0, u.L)(
                '\u0628\u0644\u0647\u060c \u0628\u0627 \u0634\u0645\u0627\u0631\u0647 \u0648\u0627\u0631\u062f \u0645\u06cc\u200c\u0634\u0648\u0645',
              ),
            }),
            (0, k.jsx)(h.Button, {
              testID: 'google-pending-new',
              secondary: !0,
              disabled: t,
              onPress: o,
              children: (0, u.L)(
                '\u0646\u0647\u060c \u062d\u0633\u0627\u0628 \u062a\u0627\u0632\u0647 \u0628\u0633\u0627\u0632',
              ),
            }),
            !!c &&
              (0, k.jsx)(h.Copy, {
                accessibilityRole: 'alert',
                style: { color: g.danger, lineHeight: 24 },
                children: c,
              }),
            (0, k.jsx)(h.Button, {
              ghost: !0,
              disabled: t,
              onPress: s,
              children: (0, u.L)(
                '\u0628\u0627\u0632\u06af\u0634\u062a \u0628\u0647 \u0648\u0631\u0648\u062f',
              ),
            }),
          ],
        });
      }));
    var t = r(d[0]);
    r(d[1]);
    var n = e(r(d[2])),
      l = e(r(d[3])),
      o = r(d[4]),
      s = r(d[5]),
      c = r(d[6]),
      g = r(d[7]),
      u = r(d[8]),
      h = r(d[9]),
      m = r(d[10]),
      y = r(d[11]),
      f = r(d[12]),
      x = r(d[13]),
      j = r(d[14]),
      C = r(d[15]),
      b = r(d[16]),
      p = r(d[17]),
      k = r(d[18]);
    const I = (e) => '\u2066' + e + '\u2069',
      L = (0, u.L)(
        '\u0627\u06af\u0631 \u067e\u06cc\u0627\u0645\u06a9 \u06a9\u062f \u0646\u0631\u0633\u06cc\u062f\u060c \u0628\u0627 \xab\u0648\u0631\u0648\u062f \u0628\u0627 \u062c\u06cc\u0645\u06cc\u0644\xbb \u0648\u0627\u0631\u062f \u0647\u0645\u06cc\u0646 \u062d\u0633\u0627\u0628 \u0645\u06cc\u200c\u0634\u0648\u06cc \u0648 \u0627\u0637\u0644\u0627\u0639\u0627\u062a\u062a \u0633\u0631 \u062c\u0627\u06cc\u0634 \u0627\u0633\u062a.',
      );
    let S = null;
    function w() {
      return (
        S ||
          (S = (0, C.request)('/v1/auth/methods')
            .then((e) => (e.google && e.clientId ? e.clientId : ''))
            .catch(() => ((S = null), ''))),
        S
      );
    }
    function H({
      state: e,
      googleKey: t,
      clientId: o,
      onCredential: s,
      onGoogleError: c,
      onUnlink: g,
      error: y,
      native: f = !1,
    }) {
      const { colors: x } = (0, j.useTheme)(),
        C = e.google;
      return (0, k.jsxs)(h.Card, {
        testID: 'gmail-link-card',
        style: { gap: 8 },
        children: [
          (0, k.jsxs)(l.default, {
            style: h.common.row,
            children: [
              (0, k.jsx)(l.default, {
                style: {
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  backgroundColor: x.soft,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                children: (0, k.jsx)(h.Copy, {
                  style: {
                    fontSize: 20,
                    lineHeight: 26,
                    fontFamily: 'Vazirmatn_700Bold',
                    color: '#4285F4',
                  },
                  children: 'G',
                }),
              }),
              (0, k.jsx)(h.Copy, {
                accessibilityRole: 'header',
                style: [h.common.title, { flex: 1 }],
                children: C.linked
                  ? (0, u.L)(
                      '\u0648\u0631\u0648\u062f \u0628\u0627 \u062c\u06cc\u0645\u06cc\u0644',
                    )
                  : (0, u.L)(
                      '\u0627\u062a\u0635\u0627\u0644 \u062c\u06cc\u0645\u06cc\u0644',
                    ),
              }),
              C.linked &&
                (0, k.jsx)(h.Copy, {
                  testID: 'gmail-linked-chip',
                  style: {
                    fontSize: 12,
                    lineHeight: 18,
                    color: x.success,
                    backgroundColor: x.soft,
                    borderRadius: 8,
                    paddingHorizontal: 8,
                    paddingVertical: 2,
                    overflow: 'hidden',
                  },
                  children: (0, u.L)('\u0648\u0635\u0644 \u0627\u0633\u062a'),
                }),
            ],
          }),
          C.linked
            ? (0, k.jsxs)(k.Fragment, {
                children: [
                  (0, k.jsx)(h.Copy, {
                    testID: 'gmail-linked-email',
                    children: (0, u.L)(
                      '\u062c\u06cc\u0645\u06cc\u0644 \u0627\u06cc\u0646 \u062d\u0633\u0627\u0628: {email}',
                      {
                        email: I(
                          C.email ||
                            (0, u.L)(
                              '(\u0646\u0634\u0627\u0646\u06cc \u062b\u0628\u062a \u0646\u0634\u062f\u0647)',
                            ),
                        ),
                      },
                    ),
                  }),
                  (0, k.jsx)(h.Copy, {
                    style: { fontSize: 13, lineHeight: 22, color: x.muted },
                    children: L,
                  }),
                  e.canUnlink
                    ? g &&
                      (0, k.jsx)(h.Button, {
                        testID: 'gmail-unlink',
                        secondary: !0,
                        onPress: g,
                        children: (0, u.L)(
                          '\u0642\u0637\u0639 \u0627\u062a\u0635\u0627\u0644',
                        ),
                      })
                    : (0, k.jsx)(h.Copy, {
                        testID: 'gmail-unlink-blocked',
                        style: { fontSize: 13, lineHeight: 22, color: x.muted },
                        children: (0, u.L)(
                          '\u0642\u0637\u0639 \u0627\u062a\u0635\u0627\u0644 \u0645\u0645\u06a9\u0646 \u0646\u06cc\u0633\u062a\u060c \u0686\u0648\u0646 \u062c\u06cc\u0645\u06cc\u0644 \u062a\u0646\u0647\u0627 \u0631\u0627\u0647 \u0648\u0631\u0648\u062f \u0627\u06cc\u0646 \u062d\u0633\u0627\u0628 \u0627\u0633\u062a. \u0627\u0648\u0644 \u0634\u0645\u0627\u0631\u0647\u0654 \u0645\u0648\u0628\u0627\u06cc\u0644\u062a \u0631\u0627 \u062a\u0623\u06cc\u06cc\u062f \u06a9\u0646.',
                        ),
                      }),
                ],
              })
            : (0, k.jsxs)(k.Fragment, {
                children: [
                  (0, k.jsx)(h.Copy, {
                    style: { lineHeight: 26 },
                    children: (0, u.L)(
                      '\u062c\u06cc\u0645\u06cc\u0644\u062a \u0631\u0627 \u0628\u0647\u200c\u0639\u0646\u0648\u0627\u0646 \u0631\u0627\u0647 \u0648\u0631\u0648\u062f \u062f\u0648\u0645 \u0628\u0647 \u0647\u0645\u06cc\u0646 \u062d\u0633\u0627\u0628 \u0648\u0635\u0644 \u06a9\u0646.',
                    ),
                  }),
                  (0, k.jsx)(h.Copy, {
                    style: { fontSize: 13, lineHeight: 22, color: x.muted },
                    children: L,
                  }),
                  !f && t
                    ? t
                    : !f && o && s
                      ? (0, k.jsx)(l.default, {
                          testID: 'gmail-link-google',
                          style: {
                            minHeight: 50,
                            borderRadius: 12,
                            borderWidth: n.default.hairlineWidth,
                            borderColor: x.line,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingVertical: 3,
                            overflow: 'hidden',
                          },
                          children: (0, k.jsx)(b.GoogleButton, {
                            clientId: o,
                            text: 'continue_with',
                            width: 300,
                            onCredential: s,
                            onError: c || (() => {}),
                          }),
                        })
                      : f || o
                        ? (0, k.jsxs)(l.default, {
                            testID: 'gmail-link-web-only',
                            style: [
                              h.common.row,
                              {
                                backgroundColor: x.soft,
                                borderRadius: 12,
                                padding: 12,
                                alignItems: 'flex-start',
                              },
                            ],
                            children: [
                              (0, k.jsx)(m.Icon, {
                                name: 'browser',
                                size: 20,
                                color: x.text,
                              }),
                              (0, k.jsx)(h.Copy, {
                                style: {
                                  flex: 1,
                                  fontSize: 14,
                                  lineHeight: 24,
                                },
                                children: (0, u.L)(
                                  '\u0627\u062a\u0635\u0627\u0644 \u062c\u06cc\u0645\u06cc\u0644 \u0641\u0639\u0644\u0627\u064b \u0627\u0632 \u0633\u0627\u06cc\u062a \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f: {site} \u0631\u0627 \u062f\u0631 \u0645\u0631\u0648\u0631\u06af\u0631 \u06af\u0648\u0634\u06cc \u0628\u0627\u0632 \u06a9\u0646\u060c \u0628\u0627 \u0647\u0645\u06cc\u0646 \u0634\u0645\u0627\u0631\u0647 \u0648\u0627\u0631\u062f \u0634\u0648 \u0648 \u0627\u0632 \xab\u062d\u0633\u0627\u0628 \u0648 \u062f\u0633\u062a\u06af\u0627\u0647\u200c\u0647\u0627\xbb \u062f\u06a9\u0645\u0647\u0654 \u06af\u0648\u06af\u0644 \u0631\u0627 \u0628\u0632\u0646.',
                                  { site: I('myanbari.ir') },
                                ),
                              }),
                            ],
                          })
                        : (0, k.jsx)(h.Copy, {
                            style: {
                              fontSize: 13,
                              lineHeight: 22,
                              color: x.muted,
                            },
                            children: (0, u.L)(
                              '\u0648\u0631\u0648\u062f \u0628\u0627 \u062c\u06cc\u0645\u06cc\u0644 \u0647\u0646\u0648\u0632 \u0631\u0648\u06cc \u0627\u06cc\u0646 \u0633\u0631\u0648\u0631 \u0641\u0639\u0627\u0644 \u0646\u0634\u062f\u0647 \u0627\u0633\u062a.',
                            ),
                          }),
                ],
              }),
          !!y &&
            (0, k.jsx)(h.Copy, {
              accessibilityRole: 'alert',
              style: { color: x.danger, lineHeight: 24 },
              children: y,
            }),
        ],
      });
    }
    function v(e, { native: t, methodsRead: n, clientId: l }) {
      return !e.google.linked && (!1 === e.google.available || (!t && n && !l));
    }
    function z({
      clientId: e,
      googleKey: n,
      onCredential: o,
      onGoogleError: s,
      onLater: c,
      error: g,
    }) {
      const { colors: m } = (0, j.useTheme)(),
        [y, f] = (0, t.useState)(0);
      return (0, k.jsxs)(h.Card, {
        testID: 'gmail-suggest-card',
        style: { gap: 14, paddingVertical: 22 },
        children: [
          (0, k.jsxs)(l.default, {
            style: { alignItems: 'center', gap: 10 },
            children: [
              (0, k.jsx)(l.default, {
                style: {
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  backgroundColor: m.soft,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                children: (0, k.jsx)(p.GoogleG, { size: 30 }),
              }),
              (0, k.jsx)(h.Copy, {
                accessibilityRole: 'header',
                style: {
                  fontSize: 19,
                  lineHeight: 30,
                  fontFamily: 'Vazirmatn_700Bold',
                  textAlign: 'center',
                },
                children: (0, u.L)(
                  '\u062c\u06cc\u0645\u06cc\u0644\u062a \u0631\u0627 \u0647\u0645 \u0648\u0635\u0644 \u06a9\u0646',
                ),
              }),
              (0, k.jsx)(h.Copy, {
                style: {
                  fontSize: 14,
                  lineHeight: 24,
                  color: m.muted,
                  textAlign: 'center',
                },
                children: (0, u.L)(
                  '\u0627\u06af\u0631 \u067e\u06cc\u0627\u0645\u06a9 \u06a9\u062f \u0646\u0631\u0633\u06cc\u062f\u060c \u0628\u0627 \u06cc\u06a9 \u0636\u0631\u0628\u0647 \u0631\u0648\u06cc \u062f\u06a9\u0645\u0647\u0654 \u06af\u0648\u06af\u0644 \u0648\u0627\u0631\u062f \u0647\u0645\u06cc\u0646 \u062d\u0633\u0627\u0628 \u0645\u06cc\u200c\u0634\u0648\u06cc.',
                ),
              }),
            ],
          }),
          n ||
            (0, k.jsx)(l.default, {
              testID: 'gmail-suggest-google',
              onLayout: (e) => f(Math.round(e.nativeEvent.layout.width)),
              style: {
                minHeight: 44,
                alignItems: 'center',
                justifyContent: 'center',
              },
              children:
                y > 0 &&
                (0, k.jsx)(b.GoogleButton, {
                  clientId: e,
                  text: 'continue_with',
                  width: Math.max(200, Math.min(400, y)),
                  onCredential: o,
                  onError: s,
                }),
            }),
          !!g &&
            (0, k.jsx)(h.Copy, {
              accessibilityRole: 'alert',
              style: { color: m.danger, lineHeight: 24, textAlign: 'center' },
              children: g,
            }),
          (0, k.jsx)(h.Button, {
            testID: 'gmail-suggest-later',
            ghost: !0,
            onPress: c,
            children: (0, u.L)('\u0628\u0639\u062f\u0627\u064b'),
          }),
        ],
      });
    }
  },
  514,
  [
    2, 94, 17, 99, 381, 515, 380, 342, 311, 407, 385, 533, 534, 525, 382, 415,
    513, 536, 338,
  ],
);
