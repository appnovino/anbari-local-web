// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 689; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'listTelegramDrafts', {
        enumerable: !0,
        get: function () {
          return j;
        },
      }),
      (_e.TelegramInbox = function ({
        shop: e,
        products: S,
        onSaved: I,
        onClose: L,
      }) {
        const { colors: v } = (0, u.useTheme)(),
          [P, w] = (0, t.useState)(null),
          [z, D] = (0, t.useState)(''),
          [T, _] = (0, t.useState)(''),
          {
            data: R,
            error: k,
            reload: B,
          } = (0, y.useSwr)((0, y.scoped)(e.id, 'telegram-drafts'), () => j(e));
        async function q(e, t) {
          (D(''), _(''));
          try {
            (await e(), _(t), w(null), await B(), I());
          } catch (e) {
            D((0, p.message)(e));
          }
        }
        return (0, x.jsxs)(o.ScrollView, {
          testID: 'telegram-inbox',
          keyboardShouldPersistTaps: 'handled',
          contentContainerStyle: {
            gap: 12,
            paddingBottom: 24,
            width: '100%',
            maxWidth: 760,
            alignSelf: 'center',
          },
          children: [
            (0, x.jsxs)(s.default, {
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 10,
              },
              children: [
                (0, x.jsx)(l.PageTitle, {
                  title: (0, h.L)(
                    '\u0627\u0632 \u062a\u0644\u06af\u0631\u0627\u0645',
                  ),
                  sub: (0, h.L)(
                    '\u067e\u06cc\u0627\u0645\u200c\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0628\u0647 \u0631\u0628\u0627\u062a \u0641\u0631\u0633\u062a\u0627\u062f\u06cc\u061b \u062a\u0627 \u062a\u0627\u06cc\u06cc\u062f \u0646\u06a9\u0646\u06cc \u0686\u06cc\u0632\u06cc \u062b\u0628\u062a \u0646\u0645\u06cc\u200c\u0634\u0648\u062f.',
                  ),
                  style: { flex: 1 },
                }),
                (0, x.jsx)(l.Button, {
                  secondary: !0,
                  onPress: L,
                  children: (0, h.L)('\u0628\u0633\u062a\u0646'),
                }),
              ],
            }),
            void 0 === R &&
              (0, x.jsx)(l.Card, {
                children: (0, x.jsx)(l.Copy, {
                  style: { color: v.muted },
                  children: (0, h.L)(
                    '\u062f\u0631 \u062d\u0627\u0644 \u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc\u2026',
                  ),
                }),
              }),
            void 0 !== R &&
              !R.length &&
              (0, x.jsx)(l.Card, {
                children: (0, x.jsx)(l.Copy, {
                  style: { color: v.muted, lineHeight: 24 },
                  children: (0, h.L)(
                    '\u067e\u06cc\u0634\u200c\u0646\u0648\u06cc\u0633\u06cc \u0627\u0632 \u062a\u0644\u06af\u0631\u0627\u0645 \u0645\u0646\u062a\u0638\u0631 \u0646\u06cc\u0633\u062a.',
                  ),
                }),
              }),
            R?.map((t) =>
              (0, x.jsxs)(
                l.Card,
                {
                  testID: 'telegram-draft',
                  style: { gap: 10 },
                  children: [
                    (0, x.jsxs)(n.default, {
                      accessibilityRole: 'button',
                      onPress: () => w(P === t.id ? null : t.id),
                      style: {
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        gap: 10,
                      },
                      children: [
                        (0, x.jsx)(c.Icon, {
                          name: 'voice' === t.source ? 'mic' : 'chat',
                          size: 18,
                          color: v.accent,
                        }),
                        (0, x.jsxs)(s.default, {
                          style: { flex: 1 },
                          children: [
                            (0, x.jsxs)(l.Copy, {
                              style: {
                                fontSize: 14,
                                fontFamily: 'Vazirmatn_600SemiBold',
                              },
                              children: [
                                (0, h.L)('{n} \u0631\u062f\u06cc\u0641', {
                                  n: t.lines.length.toLocaleString(
                                    (0, h.numberLocale)(),
                                  ),
                                }),
                                '\u060c ',
                                t.lines
                                  .slice(0, 3)
                                  .map((e) => e.name)
                                  .join('\u060c '),
                                t.lines.length > 3 ? '\u2026' : '',
                              ],
                            }),
                            (0, x.jsxs)(l.Copy, {
                              style: { fontSize: 12, color: v.muted },
                              children: [
                                (0, f.formatMoment)(t.createdAt),
                                t.mine ? '' : '\u060c ' + t.userName,
                              ],
                            }),
                          ],
                        }),
                        (0, x.jsx)(c.Icon, {
                          name: P === t.id ? 'up' : 'down',
                          size: 16,
                          color: v.muted,
                        }),
                      ],
                    }),
                    P === t.id &&
                      (0, x.jsxs)(x.Fragment, {
                        children: [
                          (0, x.jsx)(d.DraftReview, {
                            result: C(t),
                            products: S,
                            onConfirm: async (n) => {
                              await q(
                                () => b(e, t.id, 'confirm', n),
                                (0, h.L)('\u062b\u0628\u062a \u0634\u062f.'),
                              );
                            },
                          }),
                          (0, x.jsx)(l.Button, {
                            secondary: !0,
                            onPress: () => {
                              q(
                                () => b(e, t.id, 'cancel'),
                                (0, h.L)('\u0644\u063a\u0648 \u0634\u062f.'),
                              );
                            },
                            children: (0, h.L)(
                              '\u0644\u063a\u0648 \u0627\u06cc\u0646 \u067e\u06cc\u0634\u200c\u0646\u0648\u06cc\u0633',
                            ),
                          }),
                        ],
                      }),
                  ],
                },
                t.id,
              ),
            ),
            !!T &&
              (0, x.jsx)(l.Copy, { accessibilityRole: 'alert', children: T }),
            !(!z && !k) &&
              (0, x.jsx)(l.Copy, {
                accessibilityRole: 'alert',
                style: { color: v.danger },
                children: z || k,
              }),
          ],
        });
      }),
      (_e.TelegramNotice = function ({ shop: e, onOpen: s }) {
        const { colors: o } = (0, u.useTheme)(),
          { data: d, reload: p } = (0, y.useSwr)(
            e ? (0, y.scoped)(e.id, 'telegram-drafts') : null,
            () => j(e),
          ),
          f = d?.length || 0;
        return (
          (0, t.useEffect)(() => {
            if (!e) return;
            const t = setInterval(() => {
              p();
            }, 6e4);
            return () => clearInterval(t);
          }, [e?.id, p]),
          f
            ? (0, x.jsxs)(n.default, {
                testID: 'telegram-notice',
                accessibilityRole: 'button',
                onPress: s,
                style: ({ pressed: e }) => ({
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  gap: 10,
                  padding: 12,
                  borderRadius: 16,
                  backgroundColor: o.accentSoft,
                  borderWidth: 1,
                  borderColor: o.accent,
                  opacity: e ? 0.85 : 1,
                }),
                children: [
                  (0, x.jsx)(c.Icon, {
                    name: 'chat',
                    size: 18,
                    color: o.accent,
                  }),
                  (0, x.jsx)(l.Copy, {
                    style: { flex: 1, fontSize: 13, lineHeight: 22 },
                    children: (0, h.L)(
                      '{n} \u067e\u06cc\u0627\u0645 \u0627\u0632 \u062a\u0644\u06af\u0631\u0627\u0645 \u0645\u0646\u062a\u0638\u0631 \u062a\u0627\u06cc\u06cc\u062f \u062a\u0648\u0633\u062a.',
                      { n: f.toLocaleString((0, h.numberLocale)()) },
                    ),
                  }),
                  (0, x.jsx)(l.Copy, {
                    style: {
                      fontSize: 12,
                      color: o.accent,
                      fontFamily: 'Vazirmatn_600SemiBold',
                    },
                    children: (0, h.L)('\u0628\u0631\u0631\u0633\u06cc'),
                  }),
                ],
              })
            : null
        );
      }));
    var t = r(_d[0]),
      n = e(r(_d[1])),
      s = e(r(_d[2])),
      o = r(_d[3]),
      l = r(_d[4]),
      c = r(_d[5]),
      d = r(_d[6]),
      u = r(_d[7]),
      p = r(_d[8]),
      f = r(_d[9]),
      h = r(_d[10]),
      y = r(_d[11]),
      x = r(_d[12]);
    const j = (e) =>
        (0, p.request)((0, p.shopPath)(e, '/telegram/drafts')).then(
          (e) => e.drafts,
        ),
      b = (e, t, n, s) =>
        (0, p.request)(
          (0, p.shopPath)(e, `/telegram/drafts/${t}/${n}`),
          'POST',
          s ? { lines: s } : {},
          { key: (0, p.randomUUID)() },
        ),
      C = (e) => ({
        transcript: (0, h.L)(
          '\u0627\u0632 \u062a\u0644\u06af\u0631\u0627\u0645',
        ),
        clarification: '',
        actions: e.lines.map((e) => ({
          name: e.name,
          quantity: e.quantity,
          kind: e.kind,
          ...(e.unit ? { unit: e.unit } : {}),
          ...(void 0 !== e.unitCost ? { unitCost: e.unitCost } : {}),
          ...(void 0 !== e.unitPrice ? { unitPrice: e.unitPrice } : {}),
          ...(e.expiresAt ? { expiresAt: e.expiresAt } : {}),
          ...(e.timestamp ? { timestamp: e.timestamp } : {}),
          ...(e.productId ? { productId: e.productId } : {}),
        })),
      });
  },
  689,
  [2, 232, 99, 380, 407, 385, 690, 382, 415, 440, 311, 489, 338],
);
