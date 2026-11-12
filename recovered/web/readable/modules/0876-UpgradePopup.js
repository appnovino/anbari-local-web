// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 876; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.UpgradePopup = function ({
        visible: e,
        offer: I,
        message: v,
        onClose: _,
        onUpgrade: B,
        onExport: R,
        ownerOnly: z = !1,
        fresh: D = !1,
        retry: E = !1,
      }) {
        const { colors: T } = (0, f.useTheme)(),
          W = (0, w.useDesktop)(),
          A = (0, p.useSafeAreaInsets)(),
          [H, O] = (0, t.useState)(!1),
          [F, M] = (0, t.useState)(!1),
          N =
            !z &&
            (!L.fromBazaar ||
              ((0, L.bazaarDynamicPrice)() && 'offer' === I?.source)) &&
            !!I &&
            !H &&
            new Date(I.endsAt).getTime() > Date.now(),
          U = (0, t.useCallback)(() => O(!0), []);
        ((0, t.useEffect)(() => O(!1), [I?.endsAt]),
          (0, t.useEffect)(() => {
            e || M(!1);
          }, [e]));
        const V = F && !!C.activeShop && !z;
        return (0, P.jsx)(l.Modal, {
          visible: e,
          transparent: !0,
          animationType: 'fade',
          onRequestClose: _,
          children: (0, P.jsxs)(s.default, {
            style: {
              flex: 1,
              backgroundColor: '#08090baa',
              padding: 12,
              paddingTop: A.top + 12,
              paddingBottom: A.bottom + 12,
              justifyContent: 'center',
              alignItems: 'center',
            },
            children: [
              (0, P.jsx)(b.Backdrop, {
                testID: 'upgrade-backdrop',
                onClose: _,
              }),
              (0, P.jsx)(c.PullCard, {
                onClose: _,
                style: {
                  width: '100%',
                  maxWidth: V ? (W ? 1080 : 760) : 480,
                  maxHeight: '94%',
                  flexShrink: 1,
                },
                children: (0, P.jsx)(y.Card, {
                  style: { flexShrink: 1, padding: 0, overflow: 'hidden' },
                  children: (0, P.jsxs)(u.ScrollView, {
                    contentContainerStyle: { padding: 18, gap: 14 },
                    keyboardShouldPersistTaps: 'handled',
                    children: [
                      (0, P.jsxs)(s.default, {
                        style: y.common.between,
                        children: [
                          V
                            ? (0, P.jsx)(n.default, {
                                accessibilityRole: 'button',
                                onPress: () => M(!1),
                                style: ({ pressed: e }) => ({
                                  height: 36,
                                  paddingHorizontal: 12,
                                  borderRadius: 10,
                                  borderWidth: o.default.hairlineWidth,
                                  borderColor: T.line,
                                  backgroundColor: T.soft,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  opacity: e ? 0.8 : 1,
                                }),
                                children: (0, P.jsx)(y.Copy, {
                                  style: { fontSize: 13 },
                                  children: (0, k.L)(
                                    '\u0628\u0627\u0632\u06af\u0634\u062a',
                                  ),
                                }),
                              })
                            : (0, P.jsx)(s.default, {
                                style: {
                                  width: 44,
                                  height: 44,
                                  borderRadius: 14,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  backgroundColor: z ? T.soft : T.accentSoft,
                                },
                                children: (0, P.jsx)(x.Icon, {
                                  name: z ? 'lock' : 'bolt',
                                  size: 22,
                                  color: z ? T.muted : T.accent,
                                }),
                              }),
                          (0, P.jsx)(n.default, {
                            accessibilityRole: 'button',
                            accessibilityLabel: (0, k.L)(
                              '\u0628\u0633\u062a\u0646',
                            ),
                            onPress: _,
                            style: {
                              width: 36,
                              height: 36,
                              borderRadius: 10,
                              borderWidth: o.default.hairlineWidth,
                              borderColor: T.line,
                              backgroundColor: T.soft,
                              alignItems: 'center',
                              justifyContent: 'center',
                            },
                            children: (0, P.jsx)(x.Icon, {
                              name: 'close',
                              color: T.text,
                            }),
                          }),
                        ],
                      }),
                      !V &&
                        (0, P.jsx)(y.Copy, {
                          style: y.common.title,
                          children:
                            v ||
                            (D
                              ? (0, k.L)(
                                  '\u0628\u0631\u0627\u06cc \u0634\u0631\u0648\u0639\u060c \u06cc\u06a9 \u0637\u0631\u062d \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646',
                                )
                              : (0, k.L)(
                                  '\u0627\u0639\u062a\u0628\u0627\u0631 \u0637\u0631\u062d \u0634\u0645\u0627 \u0628\u0647 \u067e\u0627\u06cc\u0627\u0646 \u0631\u0633\u06cc\u062f\u0647 \u0627\u0633\u062a',
                                )),
                        }),
                      z
                        ? (0, P.jsxs)(P.Fragment, {
                            children: [
                              (0, P.jsx)(y.Copy, {
                                testID: 'upgrade-owner-only',
                                style: { lineHeight: 25, color: T.muted },
                                children: (0, k.L)(h.OWNER_ONLY_NOTE),
                              }),
                              (0, P.jsx)(y.Button, {
                                secondary: !0,
                                onPress: _,
                                children: (0, k.L)('\u0628\u0633\u062a\u0646'),
                              }),
                            ],
                          })
                        : (0, P.jsxs)(P.Fragment, {
                            children: [
                              !v &&
                                !V &&
                                (0, P.jsx)(y.Copy, {
                                  style: { lineHeight: 25, color: T.muted },
                                  children: D
                                    ? (0, k.L)(
                                        '\u0628\u0627 \u06cc\u06a9 \u0627\u0634\u062a\u0631\u0627\u06a9\u060c \u062b\u0628\u062a \u0645\u0648\u062c\u0648\u062f\u06cc\u060c \u0641\u0631\u0648\u0634\u060c \u0635\u062f\u0627 \u0648 \u062f\u0641\u062a\u0631 \u062d\u0633\u0627\u0628 \u0628\u0627\u0632 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                                      )
                                    : (0, k.L)(
                                        '\u0628\u0627 \u0641\u0639\u0627\u0644\u200c\u06a9\u0631\u062f\u0646 \u0627\u0634\u062a\u0631\u0627\u06a9\u060c \u062b\u0628\u062a \u0645\u0648\u062c\u0648\u062f\u06cc\u060c \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06cc \u0647\u0648\u0634\u0645\u0646\u062f \u0648 \u0647\u0645\u06a9\u0627\u0631\u06cc \u062a\u06cc\u0645\u06cc \u062f\u0648\u0628\u0627\u0631\u0647 \u062f\u0631 \u062f\u0633\u062a\u0631\u0633 \u0634\u0645\u0627\u0633\u062a. \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0641\u0639\u0644\u06cc \u0634\u0645\u0627 \u0627\u0645\u0646 \u0627\u0633\u062a.',
                                      ),
                                }),
                              N &&
                                (0, P.jsxs)(s.default, {
                                  style: {
                                    gap: 7,
                                    padding: 13,
                                    borderRadius: 14,
                                    backgroundColor: T.accentSoft,
                                  },
                                  children: [
                                    (0, P.jsx)(y.Copy, {
                                      style: {
                                        fontFamily: 'Vazirmatn_600SemiBold',
                                      },
                                      children: (0, k.L)(
                                        '\u0647\u0645\u06cc\u0646 \u062d\u0627\u0644\u0627 \u0628\u0627 {percent}\u066a \u062a\u062e\u0641\u06cc\u0641',
                                        {
                                          percent: I.percent.toLocaleString(
                                            (0, k.numberLocale)(),
                                          ),
                                        },
                                      ),
                                    }),
                                    'offer' === I.source &&
                                      (0, P.jsx)(y.Copy, {
                                        style: {
                                          fontSize: 12,
                                          lineHeight: 20,
                                          color: T.muted,
                                        },
                                        children: (0, k.L)(
                                          '\u0641\u0642\u0637 \u0628\u0631\u0627\u06cc \u0645\u0627\u0647 \u0627\u0648\u0644 \u0637\u0631\u062d \u0627\u0633\u062a\u0627\u0646\u062f\u0627\u0631\u062f \u06cc\u0627 \u067e\u0644\u0627\u0633',
                                        ),
                                      }),
                                    (0, P.jsx)(j.Countdown, {
                                      endsAt: I.endsAt,
                                      onExpire: U,
                                    }),
                                  ],
                                }),
                              V && C.activeShop
                                ? (0, P.jsx)(S.SubscriptionPanel, {
                                    shop: C.activeShop,
                                  })
                                : (0, P.jsxs)(P.Fragment, {
                                    children: [
                                      (0, P.jsx)(y.Button, {
                                        testID: 'upgrade-now',
                                        onPress: () => {
                                          C.activeShop ? M(!0) : (_(), B());
                                        },
                                        children: E
                                          ? (0, k.L)(
                                              '\u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646',
                                            )
                                          : v && N
                                            ? (0, k.L)(
                                                '\u0627\u0631\u062a\u0642\u0627 \u0628\u0627 {percent}\u066a \u062a\u062e\u0641\u06cc\u0641\u061b \u06a9\u0627\u0631 \u0646\u0627\u0645\u062d\u062f\u0648\u062f',
                                                {
                                                  percent:
                                                    I.percent.toLocaleString(
                                                      (0, k.numberLocale)(),
                                                    ),
                                                },
                                              )
                                            : v
                                              ? (0, k.L)(
                                                  '\u0647\u0645\u06cc\u0646 \u062d\u0627\u0644\u0627 \u0627\u0631\u062a\u0642\u0627 \u0628\u062f\u0647\u061b \u06a9\u0627\u0631 \u0646\u0627\u0645\u062d\u062f\u0648\u062f',
                                                )
                                              : D
                                                ? (0, k.L)(
                                                    '\u062f\u06cc\u062f\u0646 \u0637\u0631\u062d\u200c\u0647\u0627',
                                                  )
                                                : (0, k.L)(
                                                    '\u0627\u0631\u062a\u0642\u0627\u06cc \u0627\u0634\u062a\u0631\u0627\u06a9',
                                                  ),
                                      }),
                                      v
                                        ? (0, P.jsx)(y.Button, {
                                            secondary: !0,
                                            onPress: _,
                                            children: (0, k.L)(
                                              '\u0628\u0639\u062f\u0627\u064b',
                                            ),
                                          })
                                        : !D &&
                                          (0, P.jsx)(y.Button, {
                                            secondary: !0,
                                            onPress: () => {
                                              (_(), R());
                                            },
                                            children: (0, k.L)(
                                              '\u062e\u0631\u0648\u062c\u06cc \u06af\u0631\u0641\u062a\u0646 \u0627\u0632 \u062f\u0627\u062f\u0647\u200c\u0647\u0627',
                                            ),
                                          }),
                                    ],
                                  }),
                            ],
                          }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        });
      }));
    var t = r(d[0]),
      n = e(r(d[1])),
      o = e(r(d[2])),
      s = e(r(d[3])),
      l = r(d[4]),
      c = r(d[5]),
      u = r(d[6]),
      h = r(d[7]),
      p = r(d[8]),
      f = r(d[9]),
      y = r(d[10]),
      x = r(d[11]),
      b = r(d[12]),
      j = r(d[13]),
      C = r(d[14]),
      L = r(d[15]),
      S = r(d[16]),
      k = r(d[17]),
      w = r(d[18]),
      P = r(d[19]);
  },
  876,
  [
    2, 232, 17, 99, 381, 515, 380, 488, 342, 382, 407, 385, 533, 727, 415, 446,
    724, 311, 481, 338,
  ],
);
