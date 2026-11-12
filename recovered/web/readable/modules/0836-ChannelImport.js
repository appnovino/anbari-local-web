// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 836; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, a, m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.ChannelImport = function ({ products: e, onImport: b, onClose: z }) {
        const { colors: P } = (0, u.useTheme)(),
          [_, C] = (0, t.useState)(null),
          [v, I] = (0, t.useState)(0),
          [w, k] = (0, t.useState)([]),
          [O, D] = (0, t.useState)(''),
          [R, N] = (0, t.useState)(''),
          [T, E] = (0, t.useState)(''),
          F = (0, t.useRef)(null);
        async function B() {
          (N(''), E(''));
          try {
            const e = await s.getDocumentAsync({
              type: ['application/json', 'text/plain', '*/*'],
              multiple: !1,
              copyToCacheDirectory: !0,
            });
            if (e.canceled) return;
            const t = e.assets[0];
            if ((t.size || 0) > S) throw Error('too_large');
            D(
              (0, p.L)(
                '\u062f\u0631 \u062d\u0627\u0644 \u062e\u0648\u0627\u0646\u062f\u0646 \u0641\u0627\u06cc\u0644\u2026',
              ),
            );
            const n = await (await fetch(t.uri)).text();
            if (n.length > S) throw Error('too_large');
            const r = (0, f.parseTelegramExport)(JSON.parse(n));
            (C(r), I(0), k([]));
          } catch (e) {
            N(
              e instanceof SyntaxError ||
                (e instanceof Error && 'telegram_export_invalid' === e.message)
                ? (0, p.L)(
                    '\u0627\u06cc\u0646 \u0641\u0627\u06cc\u0644 \u062e\u0631\u0648\u062c\u06cc \u062a\u0644\u06af\u0631\u0627\u0645 \u0646\u06cc\u0633\u062a. \u062f\u0631 \u062a\u0644\u06af\u0631\u0627\u0645 \u062f\u0633\u06a9\u062a\u0627\u067e \xabExport chat history\xbb \u0631\u0627 \u0628\u0627 \u0642\u0627\u0644\u0628 JSON \u0628\u06af\u06cc\u0631 \u0648 \u0641\u0627\u06cc\u0644 result.json \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646.',
                  )
                : (0, d.message)(e),
            );
          } finally {
            D('');
          }
        }
        async function H() {
          if (!_) return;
          const e = _.posts.slice(v, v + f.FIRST_RUN_POSTS),
            t = (0, f.chunkPosts)(e);
          if (!t.length) return;
          const n = new AbortController();
          ((F.current = n), N(''), E(''));
          const r = new Map(w.map((e) => [(0, h.normalizeName)(e.name), e]));
          let o = v;
          try {
            for (const [e, l] of t.entries()) {
              D(
                (0, p.L)(
                  '\u062f\u0631 \u062d\u0627\u0644 \u0628\u0631\u0631\u0633\u06cc \u0628\u062e\u0634 {i} \u0627\u0632 {n}\u2026',
                  { i: L(e + 1), n: L(t.length) },
                ),
              );
              const s = (0, y.validateVoiceResult)(
                await (0, d.job)(
                  'channel',
                  {
                    messages: l.map((e) => ({
                      text: e.text,
                      ...(e.date ? { date: e.date } : {}),
                    })),
                    products: [],
                  },
                  n.signal,
                ),
                60,
              );
              for (const e of s.actions) {
                const t = (0, h.normalizeName)(e.name);
                t && !r.has(t) && r.set(t, { ...e, key: t });
              }
              ((o += l.length), I(o), k([...r.values()]));
            }
          } catch (e) {
            n.signal.aborted || N((0, d.message)(e));
          } finally {
            ((F.current = null), D(''));
          }
        }
        async function M() {
          const t = new Map(
              e
                .filter((e) => !e.archivedAt)
                .map((e) => [(0, h.normalizeName)(e.name), e]),
            ),
            n = w.map((n) => {
              const r =
                  (n.productId
                    ? e.find((e) => e.id === n.productId)
                    : void 0) || t.get((0, h.normalizeName)(n.name)),
                o = n.quantity ?? r?.stock ?? 0;
              return {
                name: r?.name || n.name,
                stock:
                  'received' === n.kind || null === n.quantity
                    ? o
                    : (r?.stock ?? 0),
                ...(void 0 !== n.unitPrice && null !== n.unitPrice
                  ? { price: n.unitPrice }
                  : {}),
                ...(n.unit && !r ? { unit: n.unit } : {}),
                ...(n.model ? { model: n.model } : {}),
                ...(n.size ? { size: String(n.size).slice(0, 60) } : {}),
                ...(n.color ? { color: String(n.color).slice(0, 60) } : {}),
              };
            });
          if (n.length) {
            (D(
              (0, p.L)(
                '\u062f\u0631 \u062d\u0627\u0644 \u0627\u0641\u0632\u0648\u062f\u0646 \u0628\u0647 \u0627\u0646\u0628\u0627\u0631\u2026',
              ),
            ),
              N(''));
            try {
              for (let e = 0; e < n.length; e += 200)
                await b(n.slice(e, e + 200));
              (E(
                (0, p.L)(
                  '{n} \u06a9\u0627\u0644\u0627 \u0628\u0647 \u0627\u0646\u0628\u0627\u0631 \u0627\u0636\u0627\u0641\u0647 \u06cc\u0627 \u0628\u0647\u200c\u0631\u0648\u0632 \u0634\u062f.',
                  { n: L(n.length) },
                ),
              ),
                k([]));
            } catch (e) {
              N((0, d.message)(e));
            } finally {
              D('');
            }
          }
        }
        const V = _ ? _.posts.length - v : 0,
          q = Math.min(V, f.FIRST_RUN_POSTS),
          A = _
            ? (0, f.chunkPosts)(_.posts.slice(v, v + f.FIRST_RUN_POSTS)).length
            : 0;
        return (0, j.jsxs)(i.Card, {
          testID: 'channel-import',
          style: { gap: 12 },
          children: [
            (0, j.jsxs)(o.default, {
              style: i.common.between,
              children: [
                (0, j.jsx)(i.Copy, {
                  style: { fontSize: 18, fontFamily: 'Vazirmatn_600SemiBold' },
                  children: (0, p.L)(
                    '\u0627\u0632 \u06a9\u0627\u0646\u0627\u0644 \u062a\u0644\u06af\u0631\u0627\u0645',
                  ),
                }),
                (0, j.jsx)(i.Button, {
                  secondary: !0,
                  onPress: () => {
                    (F.current?.abort(), z());
                  },
                  children: (0, p.L)('\u0628\u0633\u062a\u0646'),
                }),
              ],
            }),
            !_ &&
              (0, j.jsxs)(j.Fragment, {
                children: [
                  (0, j.jsx)(i.Copy, {
                    style: { fontSize: 13, lineHeight: 24, color: P.muted },
                    children: (0, p.L)(
                      '\u067e\u0633\u062a\u200c\u0647\u0627\u06cc \u0642\u062f\u06cc\u0645\u06cc \u06a9\u0627\u0646\u0627\u0644 \u062e\u0648\u062f\u062a \u0631\u0627 \u0628\u0647 \u06a9\u0627\u0644\u0627 \u0648 \u0645\u0648\u062c\u0648\u062f\u06cc \u062a\u0628\u062f\u06cc\u0644 \u06a9\u0646. \u062f\u0631 \u062a\u0644\u06af\u0631\u0627\u0645 \u062f\u0633\u06a9\u062a\u0627\u067e: \u06a9\u0627\u0646\u0627\u0644 \u2190 \u0633\u0647\u200c\u0646\u0642\u0637\u0647 \u2190 Export chat history \u2190 \u0642\u0627\u0644\u0628 JSON (\u0639\u06a9\u0633\u200c\u0647\u0627 \u0644\u0627\u0632\u0645 \u0646\u06cc\u0633\u062a). \u0628\u0639\u062f \u0641\u0627\u06cc\u0644 result.json \u0631\u0627 \u0627\u06cc\u0646\u062c\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646.',
                    ),
                  }),
                  (0, j.jsx)(i.Button, {
                    testID: 'channel-pick',
                    disabled: !!O,
                    onPress: () => {
                      B();
                    },
                    children: (0, p.L)(
                      '\u0627\u0646\u062a\u062e\u0627\u0628 \u0641\u0627\u06cc\u0644 result.json',
                    ),
                  }),
                ],
              }),
            !!_ &&
              (0, j.jsxs)(j.Fragment, {
                children: [
                  (0, j.jsxs)(o.default, {
                    style: {
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      gap: 10,
                    },
                    children: [
                      (0, j.jsx)(c.Icon, {
                        name: 'chat',
                        size: 20,
                        color: P.accent,
                      }),
                      (0, j.jsx)(i.Copy, {
                        style: { flex: 1, fontSize: 14, lineHeight: 24 },
                        children: (0, p.L)(
                          '\u06a9\u0627\u0646\u0627\u0644 \xab{name}\xbb: {total} \u067e\u0633\u062a\u060c {useful} \u067e\u0633\u062a \u062f\u0631\u0628\u0627\u0631\u0647\u0654 \u06a9\u0627\u0644\u0627.',
                          {
                            name:
                              _.name ||
                              (0, p.L)('\u0628\u06cc\u200c\u0646\u0627\u0645'),
                            total: L(_.total),
                            useful: L(_.posts.length),
                          },
                        ),
                      }),
                    ],
                  }),
                  V > 0 &&
                    !O &&
                    (0, j.jsxs)(j.Fragment, {
                      children: [
                        (0, j.jsx)(i.Copy, {
                          style: {
                            fontSize: 12,
                            lineHeight: 21,
                            color: P.muted,
                          },
                          children: (0, p.L)(
                            '\u0627\u0632 \u062c\u062f\u06cc\u062f\u062a\u0631\u06cc\u0646 \u067e\u0633\u062a\u200c\u0647\u0627 \u0634\u0631\u0648\u0639 \u0645\u06cc\u200c\u0634\u0648\u062f. \u0647\u0631 \u06f4\u06f0 \u067e\u0633\u062a = \u06f1 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc.',
                          ),
                        }),
                        (0, j.jsx)(i.Button, {
                          testID: 'channel-read',
                          onPress: () => {
                            H();
                          },
                          children: v
                            ? (0, p.L)(
                                '\u0627\u062f\u0627\u0645\u0647: {n} \u067e\u0633\u062a \u0642\u062f\u06cc\u0645\u06cc\u200c\u062a\u0631 ({r} \u062f\u0631\u062e\u0648\u0627\u0633\u062a)',
                                { n: L(q), r: L(A) },
                              )
                            : (0, p.L)(
                                '\u0628\u0631\u0631\u0633\u06cc {n} \u067e\u0633\u062a \u062c\u062f\u06cc\u062f\u062a\u0631 ({r} \u062f\u0631\u062e\u0648\u0627\u0633\u062a)',
                                { n: L(q), r: L(A) },
                              ),
                        }),
                      ],
                    }),
                  !V &&
                    !O &&
                    (0, j.jsx)(i.Copy, {
                      style: { fontSize: 12, color: P.muted },
                      children: (0, p.L)(
                        '\u0647\u0645\u0647 \u067e\u0633\u062a\u200c\u0647\u0627 \u0628\u0631\u0631\u0633\u06cc \u0634\u062f.',
                      ),
                    }),
                ],
              }),
            !!O &&
              (0, j.jsxs)(o.default, {
                style: {
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  gap: 10,
                },
                children: [
                  (0, j.jsx)(n.default, { color: P.text }),
                  (0, j.jsx)(i.Copy, {
                    style: { flex: 1, fontSize: 13 },
                    children: O,
                  }),
                  !!F.current &&
                    (0, j.jsx)(i.Button, {
                      secondary: !0,
                      onPress: () => F.current?.abort(),
                      children: (0, p.L)('\u062a\u0648\u0642\u0641'),
                    }),
                ],
              }),
            w.length > 0 &&
              (0, j.jsxs)(j.Fragment, {
                children: [
                  (0, j.jsx)(i.Copy, {
                    style: {
                      fontSize: 14,
                      fontFamily: 'Vazirmatn_600SemiBold',
                    },
                    children: (0, p.L)(
                      '{n} \u06a9\u0627\u0644\u0627 \u067e\u06cc\u062f\u0627 \u0634\u062f\u061b \u0647\u0631\u06a9\u062f\u0627\u0645 \u0631\u0627 \u0646\u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u06cc \u062d\u0630\u0641 \u06a9\u0646.',
                      { n: L(w.length) },
                    ),
                  }),
                  (0, j.jsx)(l.ScrollView, {
                    nestedScrollEnabled: !0,
                    style: { maxHeight: 340 },
                    contentContainerStyle: { gap: 6 },
                    children: w.map((e) =>
                      (0, j.jsxs)(
                        o.default,
                        {
                          testID: 'channel-row',
                          style: {
                            flexDirection: 'row-reverse',
                            alignItems: 'center',
                            gap: 8,
                            paddingVertical: 6,
                            borderTopWidth: 1,
                            borderColor: P.line,
                          },
                          children: [
                            (0, j.jsxs)(o.default, {
                              style: { flex: 1 },
                              children: [
                                (0, j.jsx)(i.Copy, {
                                  numberOfLines: 1,
                                  style: { fontSize: 13 },
                                  children: e.name,
                                }),
                                (0, j.jsx)(i.Copy, {
                                  style: { fontSize: 11, color: P.muted },
                                  children: [
                                    null !== e.quantity
                                      ? (0, p.L)(
                                          '\u0645\u0648\u062c\u0648\u062f\u06cc {n}',
                                          { n: L(e.quantity) },
                                        )
                                      : (0, p.L)(
                                          '\u0628\u062f\u0648\u0646 \u062a\u0639\u062f\u0627\u062f',
                                        ),
                                    void 0 !== e.unitPrice &&
                                    null !== e.unitPrice
                                      ? (0, p.L)('{amount}', {
                                          amount: (0, x.money)(e.unitPrice, {
                                            full: !0,
                                            hint: !1,
                                          }),
                                        })
                                      : '',
                                    e.productId
                                      ? (0, p.L)(
                                          '\u06a9\u0627\u0644\u0627\u06cc \u0645\u0648\u062c\u0648\u062f',
                                        )
                                      : (0, p.L)(
                                          '\u06a9\u0627\u0644\u0627\u06cc \u062c\u062f\u06cc\u062f',
                                        ),
                                  ]
                                    .filter(Boolean)
                                    .join('\u060c '),
                                }),
                              ],
                            }),
                            (0, j.jsx)(r.default, {
                              accessibilityRole: 'button',
                              accessibilityLabel: (0, p.L)(
                                '\u062d\u0630\u0641',
                              ),
                              onPress: () =>
                                k((t) => t.filter((t) => t.key !== e.key)),
                              style: { padding: 8 },
                              children: (0, j.jsx)(c.Icon, {
                                name: 'close',
                                size: 16,
                                color: P.muted,
                              }),
                            }),
                          ],
                        },
                        e.key,
                      ),
                    ),
                  }),
                  (0, j.jsx)(i.Copy, {
                    style: { fontSize: 12, lineHeight: 21, color: P.muted },
                    children: (0, p.L)(
                      '\u0645\u0648\u062c\u0648\u062f\u06cc \u06a9\u0627\u0644\u0627\u0647\u0627 \u0628\u0631\u0627\u0628\u0631 \u0639\u062f\u062f \u06af\u0641\u062a\u0647\u200c\u0634\u062f\u0647 \u062f\u0631 \u06a9\u0627\u0646\u0627\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f\u061b \u06a9\u0627\u0644\u0627\u06cc\u06cc \u06a9\u0647 \u0639\u062f\u062f \u0646\u062f\u0627\u0631\u062f \u0645\u0648\u062c\u0648\u062f\u06cc\u200c\u0627\u0634 \u0639\u0648\u0636 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f.',
                    ),
                  }),
                  (0, j.jsx)(i.Button, {
                    testID: 'channel-save',
                    disabled: !!O,
                    onPress: () => {
                      M();
                    },
                    children: (0, p.L)(
                      '\u0627\u0641\u0632\u0648\u062f\u0646 {n} \u06a9\u0627\u0644\u0627 \u0628\u0647 \u0627\u0646\u0628\u0627\u0631',
                      { n: L(w.length) },
                    ),
                  }),
                ],
              }),
            !!R &&
              (0, j.jsx)(i.Copy, {
                accessibilityRole: 'alert',
                style: { color: P.danger, lineHeight: 22 },
                children: R,
              }),
            !!T &&
              (0, j.jsx)(i.Copy, { accessibilityRole: 'alert', children: T }),
          ],
        });
      }));
    var t = _r(_d[0]),
      n = e(_r(_d[1]));
    _r(_d[2]);
    var r = e(_r(_d[3])),
      o = e(_r(_d[4])),
      l = _r(_d[5]),
      s = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        return (
          e &&
            Object.keys(e).forEach(function (n) {
              var r = Object.getOwnPropertyDescriptor(e, n);
              Object.defineProperty(
                t,
                n,
                r.get
                  ? r
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[n];
                      },
                    },
              );
            }),
          (t.default = e),
          t
        );
      })(_r(_d[6]));
    _r(_d[7]);
    var i = _r(_d[8]),
      c = _r(_d[9]),
      u = _r(_d[10]),
      d = _r(_d[11]),
      h = _r(_d[12]),
      y = _r(_d[13]),
      f = _r(_d[14]),
      p = _r(_d[15]),
      x = _r(_d[16]),
      j = _r(_d[17]);
    const S = 62914560,
      L = (e) => e.toLocaleString((0, p.numberLocale)());
  },
  836,
  [
    2, 217, 94, 232, 99, 380, 662, 665, 407, 385, 382, 415, 439, 465, 837, 311,
    435, 338,
  ],
);
