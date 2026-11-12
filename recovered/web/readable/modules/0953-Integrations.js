// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 953; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.Integrations = function ({ onPlans: e, demo: L = !1 } = {}) {
        const { colors: P } = (0, y.useTheme)(),
          T = p.activeShop,
          I =
            (0, p.primaryBaseUrl)() ||
            ('undefined' != typeof window && window.location
              ? window.location.origin
              : ''),
          [B, A] = (0, h.useConfirm)(),
          [z, D] = (0, t.useState)([]),
          [E, R] = (0, t.useState)('loading'),
          [O, q] = (0, t.useState)(''),
          [F, V] = (0, t.useState)(['inventory:read']),
          [G, H] = (0, t.useState)(90),
          [K, U] = (0, t.useState)(''),
          [Y, $] = (0, t.useState)(''),
          [M, N] = (0, t.useState)(''),
          [W, J] = (0, t.useState)(!1),
          [Q, X] = (0, t.useState)(''),
          [Z, ee] = (0, t.useState)(''),
          [te, ne] = (0, t.useState)(''),
          oe = (0, t.useRef)(0);
        async function se() {
          if (L) return (R('demo'), void D(_()));
          if (T)
            if ('owner' === T.role)
              try {
                const e = await (0, p.request)((0, p.shopPath)(T, '/billing')),
                  t = !!e.subscription?.features?.integrations;
                (R(t ? 'ready' : 'locked'),
                  D(
                    (
                      await (0, p.request)(
                        (0, p.shopPath)(T, '/integrations/keys'),
                      )
                    ).keys || [],
                  ),
                  X(''),
                  (oe.current = 0));
              } catch (e) {
                if ((0, x.isServerBusy)(e) && oe.current < 5)
                  return void setTimeout(
                    () => {
                      se();
                    },
                    (0, x.busyRetryDelay)(oe.current++),
                  );
                X(k(e));
              }
            else R('owner');
        }
        function re(e) {
          (n.default.setString(e),
            ee((0, f.L)('\u06a9\u067e\u06cc \u0634\u062f.')));
        }
        function ae(e) {
          V((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
        }
        function ie(e) {
          const t = async () => {
              (N(''), X(''));
              try {
                (await (0, p.request)(
                  (0, p.shopPath)(T, '/integrations/keys/' + e.id),
                  'DELETE',
                ),
                  ee(
                    (0, f.L)(
                      '\u06a9\u0644\u06cc\u062f \u0644\u063a\u0648 \u0634\u062f.',
                    ),
                  ),
                  await se());
              } catch (e) {
                X(k(e));
              }
            },
            n = (0, f.L)(
              '\u06a9\u0644\u06cc\u062f \xab{name}\xbb \u0644\u063a\u0648 \u0634\u0648\u062f\u061f \u0647\u0631 \u0627\u067e\u06cc \u06a9\u0647 \u0627\u0632 \u0622\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u062f \u0642\u0637\u0639 \u0645\u06cc\u200c\u0634\u0648\u062f.',
              { name: e.name },
            );
          B({
            title: (0, f.L)('\u0644\u063a\u0648 \u06a9\u0644\u06cc\u062f'),
            text: n,
            ok: (0, f.L)('\u0644\u063a\u0648 \u06a9\u0644\u06cc\u062f'),
            run: () => {
              t();
            },
          });
        }
        (0, t.useEffect)(() => {
          se();
        }, [T?.id, T?.role, L]);
        const le = (e, t) =>
            (0, j.jsxs)(l.default, {
              style: { gap: 8 },
              children: [
                (0, j.jsx)(c.Copy, {
                  style: [c.common.small, { color: P.muted }],
                  children: t,
                }),
                (0, j.jsx)(l.default, {
                  style: {
                    backgroundColor: P.soft,
                    borderRadius: 12,
                    padding: 10,
                  },
                  children: (0, j.jsx)(c.Copy, {
                    selectable: !0,
                    style: {
                      fontFamily: S,
                      fontSize: 12,
                      lineHeight: 19,
                      textAlign: 'left',
                      writingDirection: 'ltr',
                    },
                    children: e,
                  }),
                }),
                (0, j.jsx)(c.Button, {
                  secondary: !0,
                  onPress: () => re(e),
                  children: (0, f.L)('\u06a9\u067e\u06cc'),
                }),
              ],
            }),
          ce = (e) =>
            !e.revoked_at && new Date(e.expires_at).getTime() > Date.now(),
          de = (e) =>
            e.revoked_at
              ? (0, f.L)('\u0644\u063a\u0648\u0634\u062f\u0647')
              : ce(e)
                ? (0, f.L)('\u0641\u0639\u0627\u0644')
                : (0, f.L)('\u0645\u0646\u0642\u0636\u06cc');
        return (0, j.jsxs)(l.default, {
          style: { gap: 14 },
          children: [
            A,
            (0, j.jsx)(c.Copy, {
              style: { fontSize: 20, fontFamily: 'Vazirmatn_600SemiBold' },
              children: (0, f.L)(
                '\u0627\u062a\u0635\u0627\u0644 \u0628\u0647 \u0627\u067e\u200c\u0647\u0627\u06cc \u062f\u06cc\u06af\u0631',
              ),
            }),
            (0, j.jsx)(c.Copy, {
              style: [c.common.small, { color: P.muted }],
              children: (0, f.L)(
                '\u06cc\u06a9 \u06a9\u0644\u06cc\u062f \u0628\u0633\u0627\u0632 \u0648 \u0628\u0647 \u0645\u0646\u0648\u060c \u0633\u0627\u06cc\u062a\u060c \u0627\u067e \u0641\u0631\u0648\u0634 \u06cc\u0627 \u062f\u0633\u062a\u06cc\u0627\u0631 \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc \u0628\u062f\u0647 \u062a\u0627 \u0645\u0648\u062c\u0648\u062f\u06cc \u0631\u0627 \u0628\u062e\u0648\u0627\u0646\u062f \u06cc\u0627 \u0641\u0631\u0648\u0634 \u062b\u0628\u062a \u06a9\u0646\u062f.',
              ),
            }),
            'owner' === E &&
              (0, j.jsx)(c.Card, {
                children: (0, j.jsx)(c.Copy, {
                  children: (0, f.L)(
                    '\u0641\u0642\u0637 \u0645\u0627\u0644\u06a9 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u06a9\u0644\u06cc\u062f \u0627\u062a\u0635\u0627\u0644 \u0628\u0633\u0627\u0632\u062f.',
                  ),
                }),
              }),
            'locked' === E &&
              (0, j.jsxs)(c.Card, {
                testID: 'api-plus-only',
                style: { gap: 8 },
                children: [
                  (0, j.jsxs)(l.default, {
                    style: {
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      gap: 8,
                    },
                    children: [
                      (0, j.jsx)(u.Icon, {
                        name: 'lock',
                        size: 18,
                        color: P.accent,
                      }),
                      (0, j.jsx)(c.Copy, {
                        style: { flex: 1, fontFamily: 'Vazirmatn_600SemiBold' },
                        children: (0, f.L)(
                          '\u0627\u062a\u0635\u0627\u0644 \u0633\u0627\u06cc\u062a \u0628\u0627 API \u0645\u062e\u0635\u0648\u0635 \u0637\u0631\u062d \u067e\u0644\u0627\u0633 \u0627\u0633\u062a',
                        ),
                      }),
                    ],
                  }),
                  (0, j.jsx)(c.Copy, {
                    style: [c.common.small, { color: P.muted }],
                    children: (0, f.L)(
                      '\u0628\u0627 \u0637\u0631\u062d \u067e\u0644\u0627\u0633\u060c \u0633\u0627\u06cc\u062a \u0641\u0631\u0648\u0634\u06af\u0627\u0647\u062a \u0645\u0648\u062c\u0648\u062f\u06cc \u0631\u0627 \u0645\u06cc\u200c\u0628\u06cc\u0646\u062f\u060c \u06a9\u0627\u0644\u0627 \u0627\u0636\u0627\u0641\u0647 \u0645\u06cc\u200c\u06a9\u0646\u062f \u0648 \u0641\u0631\u0648\u0634 \u062b\u0628\u062a \u0645\u06cc\u200c\u06a9\u0646\u062f. \u062f\u0631 \u062a\u0627\u0631\u06cc\u062e\u0686\u0647 \u0647\u0645 \u0645\u0639\u0644\u0648\u0645 \u0627\u0633\u062a \u0647\u0631 \u0641\u0631\u0648\u0634 \u0627\u0632 \u0633\u0627\u06cc\u062a \u0622\u0645\u062f\u0647 \u06cc\u0627 \u0627\u0632 \u0627\u067e.',
                    ),
                  }),
                  z.some(ce) &&
                    (0, j.jsx)(c.Copy, {
                      style: [c.common.small, { color: P.muted }],
                      children: (0, f.L)(
                        '\u06a9\u0644\u06cc\u062f\u0647\u0627\u06cc \u0642\u0628\u0644\u06cc \u0646\u06af\u0647 \u062f\u0627\u0634\u062a\u0647 \u0634\u062f\u0647\u200c\u0627\u0646\u062f \u0648 \u0628\u0627 \u0637\u0631\u062d \u067e\u0644\u0627\u0633 \u062f\u0648\u0628\u0627\u0631\u0647 \u06a9\u0627\u0631 \u0645\u06cc\u200c\u06a9\u0646\u0646\u062f.',
                      ),
                    }),
                  !!e &&
                    (0, j.jsx)(c.Button, {
                      testID: 'api-plans',
                      onPress: e,
                      children: (0, f.L)(
                        '\u062f\u06cc\u062f\u0646 \u0637\u0631\u062d\u200c\u0647\u0627',
                      ),
                    }),
                ],
              }),
            'demo' === E &&
              (0, j.jsxs)(c.Card, {
                testID: 'api-demo',
                style: { gap: 6 },
                children: [
                  (0, j.jsx)(c.Copy, {
                    style: { fontFamily: 'Vazirmatn_600SemiBold' },
                    children: (0, f.L)(
                      '\u0646\u0645\u0648\u0646\u0647: \u0633\u0627\u06cc\u062a \u0641\u0631\u0648\u0634\u06af\u0627\u0647',
                    ),
                  }),
                  (0, j.jsx)(c.Copy, {
                    style: [c.common.small, { color: P.muted }],
                    children: (0, f.L)(
                      '\u0628\u0627 \u0627\u06cc\u0646 \u06a9\u0644\u06cc\u062f\u060c \u0633\u0627\u06cc\u062a \u0645\u0648\u062c\u0648\u062f\u06cc \u0631\u0627 \u0645\u06cc\u200c\u0628\u06cc\u0646\u062f\u060c \u06a9\u0627\u0644\u0627 \u0627\u0636\u0627\u0641\u0647 \u0645\u06cc\u200c\u06a9\u0646\u062f \u0648 \u0641\u0631\u0648\u0634 \u062b\u0628\u062a \u0645\u06cc\u200c\u06a9\u0646\u062f. \u062f\u0631 \u0646\u0633\u062e\u0647 \u0646\u0645\u0627\u06cc\u0634\u06cc \u06a9\u0644\u06cc\u062f \u0648\u0627\u0642\u0639\u06cc \u0633\u0627\u062e\u062a\u0647 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f.',
                    ),
                  }),
                ],
              }),
            'ready' === E &&
              (0, j.jsxs)(c.Card, {
                children: [
                  (0, j.jsx)(c.Copy, {
                    style: { fontFamily: 'Vazirmatn_600SemiBold' },
                    children: (0, f.L)(
                      '\u0633\u0627\u062e\u062a \u06a9\u0644\u06cc\u062f \u062a\u0627\u0632\u0647',
                    ),
                  }),
                  (0, j.jsx)(c.Input, {
                    placeholder: (0, f.L)(
                      '\u0646\u0627\u0645 \u06a9\u0644\u06cc\u062f\u060c \u0645\u062b\u0644\u0627\u064b \u0633\u0627\u06cc\u062a \u0645\u0646\u0648',
                    ),
                    value: O,
                    onChangeText: q,
                    maxLength: 80,
                  }),
                  (0, j.jsx)(c.Copy, {
                    style: [c.common.small, { color: P.muted }],
                    children: (0, f.L)(
                      '\u0627\u06cc\u0646 \u06a9\u0644\u06cc\u062f \u0686\u0647 \u06a9\u0627\u0631\u06cc \u0628\u062a\u0648\u0627\u0646\u062f \u0628\u06a9\u0646\u062f\u061f',
                    ),
                  }),
                  C.map((e) => {
                    const t = F.includes(e);
                    return (0, j.jsxs)(
                      s.default,
                      {
                        accessibilityRole: 'checkbox',
                        accessibilityState: { checked: t },
                        onPress: () => ae(e),
                        style: [
                          c.common.row,
                          {
                            padding: 10,
                            borderRadius: 12,
                            borderWidth: 1,
                            borderColor: t ? P.accent : P.line,
                            backgroundColor: t ? P.accentSoft : 'transparent',
                          },
                        ],
                        children: [
                          (0, j.jsx)(l.default, {
                            style: {
                              width: 24,
                              height: 24,
                              borderRadius: 7,
                              borderWidth: 1.5,
                              borderColor: t ? P.accent : P.muted,
                              alignItems: 'center',
                              justifyContent: 'center',
                            },
                            children:
                              t &&
                              (0, j.jsx)(u.Icon, {
                                name: 'check',
                                size: 16,
                                color: P.text,
                              }),
                          }),
                          (0, j.jsxs)(l.default, {
                            style: c.common.flex,
                            children: [
                              (0, j.jsx)(c.Copy, { children: v[e][0] }),
                              (0, j.jsx)(c.Copy, {
                                style: [c.common.small, { color: P.muted }],
                                children: v[e][1],
                              }),
                            ],
                          }),
                        ],
                      },
                      e,
                    );
                  }),
                  (0, j.jsx)(c.Segmented, {
                    numberLine: !0,
                    items: [
                      {
                        value: 90,
                        label: (0, f.L)(
                          '\u0627\u0639\u062a\u0628\u0627\u0631 \u06f3 \u0645\u0627\u0647',
                        ),
                      },
                      {
                        value: 365,
                        label: (0, f.L)(
                          '\u0627\u0639\u062a\u0628\u0627\u0631 \u06f1 \u0633\u0627\u0644',
                        ),
                      },
                    ],
                    value: G,
                    onChange: (e) => H(e),
                  }),
                  (0, j.jsx)(c.Button, {
                    disabled: W || !O.trim() || !F.length,
                    onPress: async function () {
                      if (T) {
                        (J(!0), X(''), ee(''), N(''));
                        try {
                          const e = await (0, p.request)(
                            (0, p.shopPath)(T, '/integrations/keys'),
                            'POST',
                            {
                              name: O.trim(),
                              scopes: C.filter((e) => F.includes(e)),
                              expiresInDays: G,
                            },
                          );
                          (U(e.key), $(e.key), q(''), await se());
                        } catch (e) {
                          X(k(e));
                        } finally {
                          J(!1);
                        }
                      }
                    },
                    children: (0, f.L)(
                      '\u0633\u0627\u062e\u062a \u06a9\u0644\u06cc\u062f',
                    ),
                  }),
                  !!K &&
                    (0, j.jsxs)(c.Card, {
                      style: { borderColor: P.accent },
                      children: [
                        (0, j.jsx)(c.Copy, {
                          children: (0, f.L)(
                            '\u0627\u06cc\u0646 \u06a9\u0644\u06cc\u062f \u0641\u0642\u0637 \u0647\u0645\u06cc\u0646 \u06cc\u06a9\u200c\u0628\u0627\u0631 \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f\u061b \u0627\u06a9\u0646\u0648\u0646 \u0622\u0646 \u0631\u0627 \u06a9\u067e\u06cc \u06a9\u0646\u06cc\u062f.',
                          ),
                        }),
                        (0, j.jsx)(c.Copy, {
                          selectable: !0,
                          style: {
                            fontFamily: S,
                            fontSize: 13,
                            textAlign: 'left',
                            writingDirection: 'ltr',
                          },
                          children: K,
                        }),
                        (0, j.jsx)(c.Button, {
                          onPress: () => re(K),
                          children: (0, f.L)(
                            '\u06a9\u067e\u06cc \u06a9\u0644\u06cc\u062f',
                          ),
                        }),
                        (0, j.jsx)(c.Button, {
                          secondary: !0,
                          onPress: () => U(''),
                          children: (0, f.L)(
                            '\u06a9\u067e\u06cc \u06a9\u0631\u062f\u0645\u060c \u067e\u0646\u0647\u0627\u0646 \u06a9\u0646',
                          ),
                        }),
                      ],
                    }),
                ],
              }),
            'ready' === E &&
              (0, j.jsxs)(c.Card, {
                children: [
                  (0, j.jsx)(c.Copy, {
                    style: { fontFamily: 'Vazirmatn_600SemiBold' },
                    children: (0, f.L)(
                      '\u0622\u0632\u0645\u0627\u06cc\u0634 \u0627\u062a\u0635\u0627\u0644',
                    ),
                  }),
                  (0, j.jsx)(c.Copy, {
                    style: [c.common.small, { color: P.muted }],
                    children: (0, f.L)(
                      '\u06a9\u0644\u06cc\u062f \u0631\u0627 \u0628\u0686\u0633\u0628\u0627\u0646 \u062a\u0627 \u0628\u0628\u06cc\u0646\u06cc \u06a9\u0627\u0631 \u0645\u06cc\u200c\u06a9\u0646\u062f.',
                    ),
                  }),
                  (0, j.jsx)(c.Input, {
                    ltr: !0,
                    value: Y,
                    onChangeText: (e) => {
                      ($(e), N(''), ne(''));
                    },
                    placeholder: 'API key',
                    autoCapitalize: 'none',
                    autoCorrect: !1,
                    secureTextEntry: !1,
                  }),
                  (0, j.jsx)(c.Button, {
                    secondary: !0,
                    disabled: W || !Y.trim(),
                    onPress: async function () {
                      (J(!0), X(''), ee(''), N(''), ne(''));
                      try {
                        const e = await fetch(I + '/api/v1/me', {
                            headers: { Authorization: 'Bearer ' + Y.trim() },
                            credentials: 'omit',
                            signal: AbortSignal.timeout(15e3),
                          }),
                          t = await e.json().catch(() => null);
                        if (!e.ok)
                          throw new p.ApiError(
                            t?.error?.code || 'backend_missing',
                            e.status,
                            t?.error,
                          );
                        (N(
                          (0, f.L)(
                            '\u0648\u0635\u0644 \u0634\u062f: {shop}\u060c {scopes}',
                            {
                              shop: t.shop.name,
                              scopes: t.key.scopes
                                .map((e) => v[e]?.[0] || e)
                                .join('\u060c '),
                            },
                          ),
                        ),
                          se());
                      } catch (e) {
                        ne(
                          (0, f.L)(
                            '\u0648\u0635\u0644 \u0646\u0634\u062f: {reason}',
                            { reason: k(e) },
                          ),
                        );
                      } finally {
                        J(!1);
                      }
                    },
                    children: (0, f.L)(
                      '\u0622\u0632\u0645\u0627\u06cc\u0634 \u0627\u062a\u0635\u0627\u0644',
                    ),
                  }),
                  !!M &&
                    (0, j.jsx)(c.Copy, {
                      testID: 'api-test-ok',
                      accessibilityRole: 'alert',
                      style: { color: P.success },
                      children: M,
                    }),
                  !!te &&
                    (0, j.jsx)(c.Copy, {
                      testID: 'api-test-fail',
                      accessibilityRole: 'alert',
                      style: { color: P.danger },
                      children: te,
                    }),
                ],
              }),
            z.length > 0 &&
              (0, j.jsxs)(c.Card, {
                children: [
                  (0, j.jsx)(c.Copy, {
                    style: { fontFamily: 'Vazirmatn_600SemiBold' },
                    children: (0, f.L)(
                      '\u06a9\u0644\u06cc\u062f\u0647\u0627\u06cc \u0627\u062a\u0635\u0627\u0644',
                    ),
                  }),
                  z.map((e) =>
                    (0, j.jsxs)(
                      l.default,
                      {
                        style: [
                          c.common.gap,
                          {
                            borderTopWidth: 1,
                            borderTopColor: P.line,
                            paddingTop: 10,
                          },
                        ],
                        children: [
                          (0, j.jsxs)(l.default, {
                            style: c.common.between,
                            children: [
                              (0, j.jsx)(c.Copy, {
                                style: c.common.flex,
                                children: e.name,
                              }),
                              (0, j.jsx)(c.Copy, {
                                style: {
                                  fontSize: 12,
                                  color: ce(e) ? P.success : P.muted,
                                },
                                children: de(e),
                              }),
                            ],
                          }),
                          (0, j.jsx)(c.Copy, {
                            style: [c.common.small, { color: P.muted }],
                            children: (e.scopes || [])
                              .map((e) => v[e]?.[0] || e)
                              .join('\u060c '),
                          }),
                          (0, j.jsxs)(c.Copy, {
                            style: [c.common.small, { color: P.muted }],
                            children: [
                              (0, f.L)(
                                '\u0633\u0627\u062e\u062a\u0647: {created}\u060c \u0627\u0646\u0642\u0636\u0627: {expires}',
                                {
                                  created: w(e.created_at),
                                  expires: w(e.expires_at),
                                },
                              ),
                              '\u060c ',
                              e.last_used_at
                                ? (0, f.L)(
                                    '\u0622\u062e\u0631\u06cc\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647: {date}',
                                    { date: w(e.last_used_at) },
                                  )
                                : (0, f.L)(
                                    '\u0647\u0646\u0648\u0632 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0646\u0634\u062f\u0647',
                                  ),
                            ],
                          }),
                          ce(e) &&
                            'demo' !== E &&
                            (0, j.jsx)(c.Button, {
                              secondary: !0,
                              onPress: () => ie(e),
                              children: (0, f.L)(
                                '\u0644\u063a\u0648 \u06a9\u0644\u06cc\u062f',
                              ),
                            }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                ],
              }),
            'ready' === E &&
              (0, j.jsxs)(c.Card, {
                children: [
                  (0, j.jsx)(c.Copy, {
                    style: { fontFamily: 'Vazirmatn_600SemiBold' },
                    children: (0, f.L)(
                      '\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0627\u062a\u0635\u0627\u0644',
                    ),
                  }),
                  (0, j.jsx)(c.Copy, {
                    style: [c.common.small, { color: P.muted }],
                    children: (0, f.L)(
                      '\u06a9\u0644\u06cc\u062f \u0631\u0627 \u0641\u0642\u0637 \u062f\u0631 \u0633\u0631\u0648\u0631 \u06cc\u0627 \u0646\u0632\u062f \u062f\u0633\u062a\u06cc\u0627\u0631 \u0646\u06af\u0647 \u062f\u0627\u0631\u060c \u0646\u0647 \u062f\u0631 \u06a9\u062f \u0635\u0641\u062d\u0647\u200c\u06cc \u0633\u0627\u06cc\u062a. \u0628\u0631\u0627\u06cc \u0647\u0631 \u0627\u067e \u06cc\u06a9 \u06a9\u0644\u06cc\u062f \u062c\u062f\u0627 \u0628\u0633\u0627\u0632 \u062a\u0627 \u0627\u06af\u0631 \u0644\u0627\u0632\u0645 \u0634\u062f \u0641\u0642\u0637 \u0647\u0645\u0627\u0646 \u0631\u0627 \u0644\u063a\u0648 \u06a9\u0646\u06cc.',
                    ),
                  }),
                  le(
                    I + '/api/v1',
                    (0, f.L)('\u0646\u0634\u0627\u0646\u06cc API'),
                  ),
                  le(
                    `curl -H "Authorization: Bearer YOUR_KEY" "${I}/api/v1/inventory?available=true"`,
                    (0, f.L)(
                      '\u062e\u0648\u0627\u0646\u062f\u0646 \u0645\u0648\u062c\u0648\u062f\u06cc (curl)',
                    ),
                  ),
                  le(
                    `// Server side (Node.js 18+). Keep the key in an environment variable.\nconst res = await fetch('${I}/api/v1/inventory?limit=500', {\n  headers: { Authorization: 'Bearer ' + process.env.ANBARI_KEY }\n});\nconst { products } = await res.json();\nconst menu = products.filter(p => p.available).map(p => ({ name: p.name, price: p.price }));`,
                    (0, f.L)(
                      '\u0645\u0646\u0648\u06cc \u0633\u0627\u06cc\u062a (JavaScript\u060c \u0633\u0645\u062a \u0633\u0631\u0648\u0631)',
                    ),
                  ),
                  le(
                    b(I),
                    (0, f.L)(
                      '\u0645\u062a\u0646 \u0622\u0645\u0627\u062f\u0647 \u0628\u0631\u0627\u06cc \u062f\u0633\u062a\u06cc\u0627\u0631 \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc (\u0645\u062b\u0644 Claude)\u061b \u0647\u0645\u0631\u0627\u0647 \u06a9\u0644\u06cc\u062f \u0628\u0647 \u0622\u0646 \u0628\u062f\u0647',
                    ),
                  ),
                  (0, j.jsx)(c.Button, {
                    secondary: !0,
                    onPress: () => {
                      o.default.openURL(I + '/api/docs');
                    },
                    children: (0, f.L)(
                      '\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u06a9\u0627\u0645\u0644 API',
                    ),
                  }),
                ],
              }),
            !!Z &&
              (0, j.jsx)(c.Copy, { accessibilityRole: 'alert', children: Z }),
            !!Q &&
              (0, j.jsx)(c.Copy, {
                accessibilityRole: 'alert',
                style: { color: P.danger },
                children: Q,
              }),
          ],
        });
      }));
    var t = r(d[0]),
      n = e(r(d[1])),
      o = e(r(d[2]));
    r(d[3]);
    var s = e(r(d[4])),
      l = e(r(d[5])),
      c = r(d[6]),
      u = r(d[7]),
      y = r(d[8]),
      p = r(d[9]),
      h = r(d[10]),
      x = r(d[11]),
      f = r(d[12]),
      j = r(d[13]);
    const C = [
        'inventory:read',
        'inventory:sell',
        'inventory:receive',
        'prices',
        'import',
        'catalog',
      ],
      v = (0, f.localized)({
        'inventory:read': [
          '\u062f\u06cc\u062f\u0646 \u0645\u0648\u062c\u0648\u062f\u06cc \u0648 \u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634',
          '\u0628\u0631\u0627\u06cc \u0645\u0646\u0648 \u0648 \u0633\u0627\u06cc\u062a',
        ],
        'inventory:sell': [
          '\u062b\u0628\u062a \u0641\u0631\u0648\u0634',
          '\u0628\u0631\u0627\u06cc \u0627\u067e \u0641\u0631\u0648\u0634 \u06cc\u0627 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0627\u06cc\u0646\u062a\u0631\u0646\u062a\u06cc',
        ],
        'inventory:receive': [
          '\u062b\u0628\u062a \u0648\u0631\u0648\u062f \u06a9\u0627\u0644\u0627',
          '\u0628\u0631\u0627\u06cc \u062e\u0631\u06cc\u062f \u0648 \u0627\u0646\u0628\u0627\u0631',
        ],
        prices: [
          '\u062a\u063a\u06cc\u06cc\u0631 \u0642\u06cc\u0645\u062a\u200c\u0647\u0627',
          '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f \u0647\u0645 \u062f\u06cc\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f',
        ],
        import: [
          '\u0627\u0631\u0633\u0627\u0644 \u0641\u0627\u06cc\u0644 \u0634\u0645\u0627\u0631\u0634 \u0645\u0648\u062c\u0648\u062f\u06cc',
          '\u0627\u06a9\u0633\u0644 \u06cc\u0627 CSV\u061b \u0645\u0648\u062c\u0648\u062f\u06cc \u0628\u0631\u0627\u0628\u0631 \u0641\u0627\u06cc\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f',
        ],
        catalog: [
          '\u0633\u0627\u062e\u062a \u0648 \u0648\u06cc\u0631\u0627\u06cc\u0634 \u06a9\u0627\u0644\u0627',
          '\u0628\u0631\u0627\u06cc \u0633\u0627\u06cc\u062a\u06cc \u06a9\u0647 \u06a9\u0627\u0644\u0627\u06cc \u062a\u0627\u0632\u0647 \u0627\u0636\u0627\u0641\u0647 \u0645\u06cc\u200c\u06a9\u0646\u062f',
        ],
      }),
      L = (0, f.localized)({
        api_key_missing:
          '\u0627\u0648\u0644 \u06a9\u0644\u06cc\u062f \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646.',
        api_key_invalid:
          '\u0627\u06cc\u0646 \u06a9\u0644\u06cc\u062f \u062f\u0631\u0633\u062a \u0646\u06cc\u0633\u062a.',
        api_key_revoked:
          '\u0627\u06cc\u0646 \u06a9\u0644\u06cc\u062f \u0644\u063a\u0648 \u0634\u062f\u0647 \u0627\u0633\u062a.',
        api_key_expired:
          '\u0627\u06cc\u0646 \u06a9\u0644\u06cc\u062f \u0645\u0646\u0642\u0636\u06cc \u0634\u062f\u0647 \u0627\u0633\u062a.',
        too_many_keys:
          '\u062d\u062f\u0627\u06a9\u062b\u0631 \u06f2\u06f0 \u06a9\u0644\u06cc\u062f \u0641\u0639\u0627\u0644\u061b \u0627\u0648\u0644 \u06cc\u06a9\u06cc \u0631\u0627 \u0644\u063a\u0648 \u06a9\u0646.',
        rate_limited:
          '\u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0632\u06cc\u0627\u062f \u0628\u0648\u062f\u061b \u06a9\u0645\u06cc \u0628\u0639\u062f \u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646.',
        feature_not_in_plan:
          '\u0627\u062a\u0635\u0627\u0644 \u062f\u0631 \u0637\u0631\u062d \u0641\u0639\u0644\u06cc \u0646\u06cc\u0633\u062a.',
      }),
      S = 'monospace',
      k = (e) => (e instanceof Error && L[e.message]) || (0, p.message)(e),
      w = (e) => new Date(e).toLocaleDateString((0, f.dateLocale)());
    function _() {
      const e = Date.now();
      return [
        {
          id: 'demo-site',
          name: (0, f.L)(
            '\u0633\u0627\u06cc\u062a \u0641\u0631\u0648\u0634\u06af\u0627\u0647',
          ),
          scopes: ['inventory:read', 'inventory:sell', 'catalog'],
          created_at: new Date(e - 1728e6).toISOString(),
          expires_at: new Date(e + 6048e6).toISOString(),
          revoked_at: null,
          last_used_at: new Date(e - 36e5).toISOString(),
        },
      ];
    }
    function b(e) {
      return `You can read and update my shop's stock in Anbari (an inventory app) through its HTTP API.\nBase URL: ${e}/api/v1\nSend "Authorization: Bearer <KEY>" on every request. I will give you the key; never repeat it or put it in a URL.\n- GET /me: check the connection (shop name, what the key may do).\n- GET /inventory?available=true&limit=500: products with id, name, brand, category, unit, stock, available, price (toman). Next page: ?cursor=<nextCursor>. Search: ?q=\n- GET /products/lookup?barcode=|sku=|name=: one product. GET /stock?status=available|low|out: stock levels and counts.\n- GET /inventory.xlsx or /inventory.csv: the whole stock as a file.\n- POST /sales {"lines":[{"productId"|"name"|"barcode","quantity","unitPrice"?}],"paymentMethod":"cash"|"card","note"?}: record a sale.\n- POST /receipts {"lines":[{"productId"|"name","quantity","unitCost"?}]}: record incoming stock.\n- PATCH /products/{id}/price {"price":number}: change a selling price.\n- POST /products {"name","sku"?,"category"?,"price"?}: add a product; PATCH /products/{id}: edit it (key scope "catalog").\n- GET /sales, GET /movements: recent sales and stock changes, each with "origin" (website, app, staff or ChatGPT / Claude).\n- POST /import?dryRun=true, then POST /import with {"rows":[{"name","stock",...}]} or an Excel/CSV file: set stock to counted amounts.\nRules: every POST needs a new "Idempotency-Key: <uuid>" header (reuse it only to retry the same request). Before any POST or PATCH, show me a short summary and wait for my OK. Always run an import as a dry run first. Quantities may have 3 decimals. If you get 409 insufficient_stock or product_choice_required, ask me instead of guessing. A 403 insufficient_scope means this key is not allowed to do that.\nFull reference: ${e}/api/docs`;
    }
  },
  953,
  [2, 205, 210, 94, 232, 99, 407, 385, 382, 415, 534, 479, 311, 338],
);
