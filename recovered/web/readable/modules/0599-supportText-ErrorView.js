// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 599; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.supportText = w),
      (_e.ErrorView = function ({
        error: e,
        info: l,
        variant: p = 'inline',
        detailsOpen: I = !1,
        labels: v = {},
        testID: z = 'error-view',
        primaryTestID: D,
        style: T,
        ...H
      }) {
        const { colors: L } = (0, h.useTheme)(),
          _ = (0, c.useSafeAreaInsets)(),
          B = l ?? (0, u.describeError)(e),
          [R, k] = (0, t.useState)(I),
          [q] = (0, t.useState)(() => new Date().toISOString()),
          F = (0, b.primaryAction)(B, H),
          M = (0, b.errorTone)(B.category),
          P =
            'danger' === M ? L.danger : 'warning' === M ? L.warning : L.accent,
          A =
            'danger' === M
              ? L.danger + '1f'
              : 'warning' === M
                ? L.warningSoft
                : L.accentSoft,
          O = 'screen' === p,
          V = F ? H[F] : void 0,
          W = H.back ? 'back' : H.home ? 'home' : null,
          $ = (!O && V) || !W || 'back' === F || 'home' === F ? void 0 : H[W],
          E = O ? H.signOut : void 0,
          G = (e) => v[e] || (0, b.actionLabel)(e),
          J = w(B, q),
          K = (0, j.jsxs)(s.default, {
            testID: z + '-support',
            style: [C.support, { borderColor: L.line }],
            children: [
              !!B.requestId &&
                (0, j.jsxs)(o.default, {
                  testID: z + '-request-id',
                  accessibilityRole: 'button',
                  accessibilityLabel: (0, y.L)(
                    '\u06a9\u067e\u06cc \u06a9\u062f \u067e\u06cc\u06af\u06cc\u0631\u06cc',
                  ),
                  accessibilityHint: (0, y.L)(
                    '\u06a9\u062f \u0631\u0627 \u0628\u0631\u0627\u06cc \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u06a9\u067e\u06cc \u0645\u06cc\u200c\u06a9\u0646\u062f',
                  ),
                  hitSlop: 6,
                  onPress: () =>
                    S(
                      B.requestId,
                      (0, y.L)(
                        '\u06a9\u062f \u067e\u06cc\u06af\u06cc\u0631\u06cc \u06a9\u067e\u06cc \u0634\u062f.',
                      ),
                    ),
                  style: ({ pressed: e }) => [C.row, { opacity: e ? 0.6 : 1 }],
                  children: [
                    (0, j.jsx)(x.Copy, {
                      style: [C.small, { color: L.muted }],
                      children: (0, y.L)(
                        '\u06a9\u062f \u067e\u06cc\u06af\u06cc\u0631\u06cc',
                      ),
                    }),
                    (0, j.jsx)(n.default, {
                      selectable: !0,
                      numberOfLines: 1,
                      style: [C.code, { color: L.text, flex: 1 }],
                      children: B.requestId,
                    }),
                    (0, j.jsx)(x.Copy, {
                      style: [
                        C.small,
                        {
                          color: L.accent,
                          fontFamily: 'Vazirmatn_600SemiBold',
                        },
                      ],
                      children: (0, y.L)('\u06a9\u067e\u06cc'),
                    }),
                  ],
                }),
              (0, j.jsxs)(o.default, {
                testID: z + '-details-toggle',
                accessibilityRole: 'button',
                accessibilityState: { expanded: R },
                hitSlop: 6,
                onPress: () => k((e) => !e),
                style: ({ pressed: e }) => [C.row, { opacity: e ? 0.6 : 1 }],
                children: [
                  (0, j.jsx)(x.Copy, {
                    style: [C.small, { color: L.muted, flex: 1 }],
                    children: (0, y.L)(
                      '\u062c\u0632\u0626\u06cc\u0627\u062a \u0628\u0631\u0627\u06cc \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc',
                    ),
                  }),
                  (0, j.jsx)(s.default, {
                    style: { transform: [{ rotate: R ? '90deg' : '-90deg' }] },
                    children: (0, j.jsx)(f.Icon, {
                      name: 'chevron',
                      size: 16,
                      color: L.muted,
                    }),
                  }),
                ],
              }),
              R &&
                (0, j.jsxs)(s.default, {
                  testID: z + '-details',
                  style: [
                    C.details,
                    { backgroundColor: L.soft, borderColor: L.line },
                  ],
                  children: [
                    (0, j.jsx)(n.default, {
                      selectable: !0,
                      style: [
                        C.code,
                        { color: L.text, fontSize: 11, lineHeight: 18 },
                      ],
                      children: J,
                    }),
                    (0, j.jsx)(o.default, {
                      testID: z + '-copy-details',
                      accessibilityRole: 'button',
                      hitSlop: 6,
                      onPress: () =>
                        S(
                          J,
                          (0, y.L)(
                            '\u062c\u0632\u0626\u06cc\u0627\u062a \u06a9\u067e\u06cc \u0634\u062f.',
                          ),
                        ),
                      style: ({ pressed: e }) => ({
                        alignSelf: 'flex-end',
                        opacity: e ? 0.6 : 1,
                      }),
                      children: (0, j.jsx)(x.Copy, {
                        style: [
                          C.small,
                          {
                            color: L.accent,
                            fontFamily: 'Vazirmatn_600SemiBold',
                          },
                        ],
                        children: (0, y.L)(
                          '\u06a9\u067e\u06cc \u062c\u0632\u0626\u06cc\u0627\u062a',
                        ),
                      }),
                    }),
                  ],
                }),
            ],
          }),
          N = (0, j.jsxs)(s.default, {
            style: { gap: 8, alignSelf: 'stretch' },
            children: [
              V &&
                (0, j.jsx)(x.Button, {
                  testID: D || z + '-primary',
                  onPress: V,
                  children: G(F),
                }),
              $ &&
                (0, j.jsx)(x.Button, {
                  ghost: !!V,
                  secondary: !V,
                  testID: z + '-back',
                  onPress: $,
                  children: G(W),
                }),
              E &&
                (0, j.jsx)(x.Button, {
                  ghost: !0,
                  testID: z + '-sign-out',
                  onPress: E,
                  children: G('signOut'),
                }),
            ],
          });
        return O
          ? (0, j.jsx)(s.default, {
              testID: z,
              accessibilityRole: 'alert',
              style: [
                C.screen,
                {
                  backgroundColor: L.bg,
                  paddingTop: Math.max(24, _.top + 16),
                  paddingBottom: Math.max(24, _.bottom + 16),
                },
                T,
              ],
              children: (0, j.jsxs)(s.default, {
                style: C.column,
                children: [
                  (0, j.jsx)(s.default, {
                    style: [
                      C.badge,
                      {
                        width: 72,
                        height: 72,
                        borderRadius: 22,
                        backgroundColor: A,
                      },
                    ],
                    children: (0, j.jsx)(f.Icon, {
                      name: (0, b.errorIcon)(B.category),
                      size: 34,
                      color: P,
                    }),
                  }),
                  (0, j.jsx)(x.Copy, {
                    accessibilityRole: 'header',
                    style: [C.title, { textAlign: 'center' }],
                    children: B.title,
                  }),
                  (0, j.jsx)(x.Copy, {
                    style: [C.why, { color: L.muted, textAlign: 'center' }],
                    children: B.why,
                  }),
                  !!B.action &&
                    (0, j.jsx)(x.Copy, {
                      style: [C.action, { textAlign: 'center' }],
                      children: B.action,
                    }),
                  N,
                  K,
                ],
              }),
            })
          : (0, j.jsxs)(x.Card, {
              testID: z,
              accessibilityRole: 'alert',
              style: [{ gap: 10, padding: 14 }, T],
              children: [
                (0, j.jsxs)(s.default, {
                  style: {
                    flexDirection: 'row-reverse',
                    gap: 12,
                    alignItems: 'flex-start',
                  },
                  children: [
                    (0, j.jsx)(s.default, {
                      style: [
                        C.badge,
                        {
                          width: 40,
                          height: 40,
                          borderRadius: 12,
                          backgroundColor: A,
                        },
                      ],
                      children: (0, j.jsx)(f.Icon, {
                        name: (0, b.errorIcon)(B.category),
                        size: 21,
                        color: P,
                      }),
                    }),
                    (0, j.jsxs)(s.default, {
                      style: { flex: 1, gap: 2 },
                      children: [
                        (0, j.jsx)(x.Copy, {
                          style: {
                            fontSize: 15,
                            lineHeight: 24,
                            fontFamily: 'Vazirmatn_700Bold',
                          },
                          children: B.title,
                        }),
                        (0, j.jsx)(x.Copy, {
                          style: {
                            fontSize: 13,
                            lineHeight: 22,
                            color: L.muted,
                          },
                          children: B.why,
                        }),
                        !!B.action &&
                          (0, j.jsx)(x.Copy, {
                            style: { fontSize: 13, lineHeight: 22 },
                            children: B.action,
                          }),
                      ],
                    }),
                  ],
                }),
                (V || $) && N,
                K,
              ],
            });
      }));
    var t = r(d[0]);
    (r(d[1]), r(d[2]));
    var o = e(r(d[3])),
      l = e(r(d[4])),
      n = e(r(d[5])),
      s = e(r(d[6])),
      c = r(d[7]),
      u = r(d[8]),
      h = r(d[9]),
      y = r(d[10]),
      f = r(d[11]),
      p = r(d[12]),
      x = r(d[13]),
      b = r(d[14]),
      j = r(d[15]);
    async function I(e) {
      if ('undefined' != typeof navigator && navigator.clipboard)
        return void (await navigator.clipboard.writeText(e));
      const t = globalThis.document.createElement('textarea');
      ((t.value = e),
        (t.style.position = 'fixed'),
        (t.style.opacity = '0'),
        globalThis.document.body.appendChild(t));
      try {
        if ((t.select(), !globalThis.document.execCommand('copy')))
          throw Error('clipboard_unavailable');
      } finally {
        t.remove();
      }
    }
    function S(e, t) {
      I(e).then(
        () => (0, p.showToast)(t),
        () =>
          (0, p.showToast)(
            (0, y.L)(
              '\u06a9\u067e\u06cc \u0646\u0634\u062f\u061b \u0645\u062a\u0646 \u0631\u0627 \u0646\u06af\u0647 \u062f\u0627\u0631 \u0648 \u062f\u0633\u062a\u06cc \u0628\u0646\u0648\u06cc\u0633.',
            ),
          ),
      );
    }
    function w(e, t) {
      return [
        `code: ${e.code}`,
        `category: ${e.category}`,
        void 0 !== e.status && `status: ${e.status}`,
        e.requestId && `request: ${e.requestId}`,
        `time: ${t}`,
        e.technical,
      ]
        .filter(Boolean)
        .join('\n');
    }
    const C = l.default.create({
      screen: {
        flex: 1,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
      },
      column: { width: '100%', maxWidth: 440, alignItems: 'center', gap: 12 },
      badge: { alignItems: 'center', justifyContent: 'center' },
      title: {
        fontSize: 22,
        lineHeight: 34,
        fontFamily: 'Vazirmatn_700Bold',
        marginTop: 4,
      },
      why: { fontSize: 15, lineHeight: 26 },
      action: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Vazirmatn_500Medium',
        marginBottom: 6,
      },
      support: {
        alignSelf: 'stretch',
        borderTopWidth: l.default.hairlineWidth,
        paddingTop: 10,
        gap: 8,
      },
      row: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        gap: 8,
        minHeight: 32,
      },
      small: { fontSize: 12, lineHeight: 20 },
      code: {
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
        fontSize: 12,
        lineHeight: 20,
        textAlign: 'left',
        writingDirection: 'ltr',
      },
      details: {
        borderRadius: 12,
        borderWidth: l.default.hairlineWidth,
        padding: 10,
        gap: 6,
      },
    });
  },
  599,
  [2, 205, 94, 232, 17, 178, 99, 342, 429, 382, 1, 385, 525, 407, 600, 338],
);
