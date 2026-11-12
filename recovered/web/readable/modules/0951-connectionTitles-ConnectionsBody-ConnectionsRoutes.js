// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 951; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'connectionTitles', {
        enumerable: !0,
        get: function () {
          return L;
        },
      }),
      (_e.ConnectionsBody = R),
      (_e.ConnectionsRoutes = function ({ onBlocked: e, onTelegram: j, ...f }) {
        const { colors: y } = (0, b.useTheme)(),
          C = (0, p.useSafeInsets)(),
          B = (0, u.useDesktop)(),
          [_, E] = (0, n.useState)(null);
        if (((0, n.useEffect)(() => P.connectionsEntries.subscribe(E), []), !_))
          return null;
        const [A, D] = L[_],
          I = B ? 28 : 14,
          S = () => P.connectionsEntries.close(),
          z = (0, k.jsx)(R, {
            part: _,
            ...f,
            onBlocked: (n) => {
              (S(), e(n));
            },
            onTelegram: () => {
              (S(), j());
            },
          });
        return (0, k.jsx)(s.PageModal, {
          visible: !0,
          animationType: 'slide',
          onRequestClose: S,
          desk: { id: 'page', title: A },
          children: (0, k.jsxs)(o.default, {
            behavior: h.keyboardBehavior,
            style: { flex: 1, backgroundColor: y.bg },
            children: [
              f.demo &&
                (0, k.jsx)(t.default, {
                  style: { paddingHorizontal: I, paddingTop: C.top + 10 },
                  children: (0, k.jsx)(T.DemoBanner, {}),
                }),
              (0, k.jsxs)(t.default, {
                testID: 'connections-page',
                style: [
                  x.common.between,
                  {
                    paddingHorizontal: I,
                    paddingTop: f.demo ? 10 : C.top + (B ? 24 : 14),
                    width: '100%',
                    maxWidth: (0, c.pageColumnWidth)(B),
                    alignSelf: 'center',
                  },
                ],
                children: [
                  (0, k.jsxs)(t.default, {
                    style: { flex: 1, minWidth: 0 },
                    children: [
                      (0, k.jsx)(x.Copy, {
                        accessibilityRole: 'header',
                        style: {
                          fontSize: 20,
                          lineHeight: 30,
                          fontFamily: 'Vazirmatn_700Bold',
                        },
                        children: A,
                      }),
                      (0, k.jsx)(x.Copy, {
                        style: [x.common.small, { color: y.muted }],
                        children: D,
                      }),
                    ],
                  }),
                  (0, k.jsx)(l.PageClose, {
                    testID: 'connections-close',
                    title: A,
                    onPress: S,
                  }),
                ],
              }),
              (0, k.jsx)(h.KeyboardScrollView, {
                contentContainerStyle: {
                  width: '100%',
                  maxWidth: (0, c.pageColumnWidth)(B),
                  alignSelf: 'center',
                  padding: I,
                  paddingBottom: C.bottom + 40,
                },
                children: z,
              }),
            ],
          }),
        });
      }));
    var n = r(d[0]),
      o = e(r(d[1])),
      t = e(r(d[2])),
      s = r(d[3]),
      l = r(d[4]),
      c = r(d[5]),
      u = r(d[6]),
      p = r(d[7]),
      h = r(d[8]),
      x = r(d[9]),
      j = r(d[10]),
      f = r(d[11]),
      y = r(d[12]),
      C = r(d[13]),
      T = r(d[14]),
      b = r(d[15]),
      B = r(d[16]),
      _ = r(d[17]),
      E = r(d[18]),
      P = r(d[19]),
      k = r(d[20]);
    const L = (0, E.localized)({
      ai: [
        '\u0627\u062a\u0635\u0627\u0644 \u0628\u0647 \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc',
        'ChatGPT \u06cc\u0627 Claude \u0641\u0631\u0648\u0634 \u0648 \u06a9\u0627\u0644\u0627 \u0631\u0627 \u0628\u0627 \u06cc\u06a9 \u062c\u0645\u0644\u0647 \u062b\u0628\u062a \u06a9\u0646\u062f',
      ],
      api: [
        '\u0627\u062a\u0635\u0627\u0644 \u0633\u0627\u06cc\u062a (API)',
        '\u0645\u0648\u062c\u0648\u062f\u06cc \u0648 \u0642\u06cc\u0645\u062a \u0633\u0627\u06cc\u062a\u062a \u062e\u0648\u062f\u06a9\u0627\u0631 \u0628\u0627 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u06cc\u06a9\u06cc \u0634\u0648\u062f',
      ],
    });
    function R({
      part: e,
      shop: n,
      demo: o,
      blocked: s,
      linksOk: l,
      connectorLocked: c,
      onBlocked: u,
      onTelegram: p,
    }) {
      const { colors: h } = (0, b.useTheme)();
      return o
        ? (0, k.jsxs)(t.default, {
            style: { gap: 14 },
            children: [
              (0, k.jsx)(x.Card, {
                children: (0, k.jsx)(x.Copy, {
                  children: (0, E.L)(
                    '\u0627\u062a\u0635\u0627\u0644\u200c\u0647\u0627 \u062f\u0631 \u0646\u0633\u062e\u0647 \u0646\u0645\u0627\u06cc\u0634\u06cc \u063a\u06cc\u0631\u0641\u0639\u0627\u0644\u200c\u0627\u0646\u062f.',
                  ),
                }),
              }),
              'api' === e && (0, k.jsx)(f.Integrations, { demo: !0 }),
            ],
          })
        : s
          ? (0, k.jsxs)(x.Card, {
              children: [
                (0, k.jsx)(x.Copy, {
                  children: _.platformFa.subscriptionRequired,
                }),
                (0, k.jsx)(x.Button, {
                  onPress: () => u(),
                  children: (0, E.L)(
                    '\u0645\u0634\u0627\u0647\u062f\u0647 \u0637\u0631\u062d\u200c\u0647\u0627',
                  ),
                }),
              ],
            })
          : l
            ? (0, k.jsxs)(t.default, {
                style: { gap: 14 },
                children: [
                  'ai' === e &&
                    (0, k.jsx)(j.AiConnections, {
                      locked: c,
                      onPlans: () =>
                        u(
                          (0, E.L)(
                            '\u0627\u062a\u0635\u0627\u0644 \u0628\u0647 ChatGPT \u0648 Claude \u0645\u062e\u0635\u0648\u0635 \u0627\u0634\u062a\u0631\u0627\u06a9\u200c\u0647\u0627\u0633\u062a',
                          ),
                        ),
                    }),
                  'api' === e &&
                    C.TELEGRAM_BOT &&
                    (0, k.jsxs)(x.Card, {
                      testID: 'connections-telegram',
                      style: { gap: 10 },
                      children: [
                        (0, k.jsx)(x.Copy, {
                          style: {
                            fontSize: 18,
                            fontFamily: 'Vazirmatn_700Bold',
                          },
                          children: (0, E.L)(
                            '\u062a\u0644\u06af\u0631\u0627\u0645',
                          ),
                        }),
                        (0, k.jsx)(x.Copy, {
                          style: [x.common.small, { color: h.muted }],
                          children: B.fa.telegramShort,
                        }),
                        (0, k.jsx)(x.Button, {
                          testID: 'connections-telegram-open',
                          disabled: !y.TELEGRAM_BOT_READY,
                          onPress: p,
                          children: y.TELEGRAM_BOT_READY
                            ? (0, E.L)(
                                '\u0628\u0627\u0632 \u06a9\u0631\u062f\u0646 \u0627\u062a\u0635\u0627\u0644 \u062a\u0644\u06af\u0631\u0627\u0645',
                              )
                            : (0, E.L)(
                                '\u0631\u0628\u0627\u062a \u062a\u0644\u06af\u0631\u0627\u0645 \u2014 \u0628\u0647\u200c\u0632\u0648\u062f\u06cc',
                              ),
                        }),
                      ],
                    }),
                  'api' === e &&
                    y.TELEGRAM_BOT_READY &&
                    (0, k.jsx)(y.TelegramGuide, { compact: !0 }),
                  'api' === e &&
                    (!n || 'owner' === n.role) &&
                    (0, k.jsx)(f.Integrations, {
                      onPlans: () =>
                        u(
                          (0, E.L)(
                            '\u0627\u062a\u0635\u0627\u0644 \u0633\u0627\u06cc\u062a \u0628\u0627 API \u0645\u062e\u0635\u0648\u0635 \u0637\u0631\u062d \u067e\u0644\u0627\u0633 \u0627\u0633\u062a',
                          ),
                        ),
                    }),
                ],
              })
            : (0, k.jsx)(x.Card, {
                children: (0, k.jsx)(x.Copy, {
                  children: _.platformFa.subscriptionRequired,
                }),
              });
    }
  },
  951,
  [
    2, 224, 99, 515, 516, 482, 481, 540, 480, 407, 952, 953, 777, 494, 863, 382,
    492, 502, 311, 954, 338,
  ],
);
