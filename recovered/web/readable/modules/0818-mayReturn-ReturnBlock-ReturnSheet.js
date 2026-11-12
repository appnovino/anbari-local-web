// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 818; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, _a, m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.mayReturn = I),
      (_e.ReturnBlock = function ({ shop: e, document: n, onDone: i }) {
        const { colors: s } = (0, c.useTheme)(),
          [a, d] = (0, t.useState)(!1),
          h = n.returns || [],
          y = n.lines.filter((e) => (e.returned || 0) > 0),
          p =
            I(e, n.type) &&
            !!n.id &&
            n.receiptNo > 0 &&
            !n.corrected &&
            n.lines.some((e) => !!e.productId && C(e) > 0);
        if (!h.length && !p) return null;
        const S = { fontSize: 12.5, lineHeight: 20, color: s.muted };
        return (0, x.jsxs)(r.default, {
          testID: 'return-block',
          style: {
            gap: 8,
            padding: 12,
            borderRadius: 14,
            borderWidth: l.default.hairlineWidth,
            borderColor: s.line,
            backgroundColor: s.surface,
          },
          children: [
            h.length > 0 &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(u.Copy, {
                    style: {
                      fontSize: 14,
                      lineHeight: 22,
                      fontFamily: 'Vazirmatn_700Bold',
                    },
                    children: (0, o.L)(
                      '\u0645\u0631\u062c\u0648\u0639\u06cc\u200c\u0647\u0627',
                    ),
                  }),
                  h.map((e) =>
                    (0, x.jsxs)(
                      r.default,
                      {
                        testID: 'return-row',
                        style: {
                          flexDirection: 'row-reverse',
                          justifyContent: 'space-between',
                          gap: 8,
                        },
                        children: [
                          (0, x.jsx)(u.Copy, {
                            style: { fontSize: 13.5, lineHeight: 22 },
                            children: D(n.type, e.returnNo),
                          }),
                          (0, x.jsx)(u.Copy, {
                            style: {
                              fontSize: 13.5,
                              lineHeight: 22,
                              fontFamily: 'Vazirmatn_700Bold',
                            },
                            children: b(e.totalToman),
                          }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                  y.length > 0 &&
                    (0, x.jsx)(u.Copy, {
                      testID: 'return-lines',
                      style: S,
                      children: y
                        .map((e) =>
                          (0, o.L)(
                            '{name}: {n} \u0628\u0631\u06af\u0634\u062a',
                            { name: e.name, n: j(e.returned || 0) },
                          ),
                        )
                        .join((0, o.L)('\u060c ')),
                    }),
                ],
              }),
            p &&
              e &&
              (0, x.jsx)(r.default, {
                style: { flexDirection: 'row-reverse' },
                children: (0, x.jsx)(f.SmallKey, {
                  testID: 'return-open',
                  icon: 'refresh',
                  label: (0, o.L)('\u0645\u0631\u062c\u0648\u0639\u06cc'),
                  onPress: () => d(!0),
                }),
              }),
            a &&
              e &&
              (0, x.jsx)(v, {
                shop: e,
                document: n,
                onClose: () => d(!1),
                onSaved: () => {
                  (d(!1), i());
                },
              }),
          ],
        });
      }),
      (_e.ReturnSheet = v));
    var t = _r(_d[0]),
      n = e(_r(_d[1])),
      l = e(_r(_d[2])),
      r = e(_r(_d[3])),
      i = _r(_d[4]),
      s = _r(_d[5]),
      o = _r(_d[6]),
      a = _r(_d[7]),
      d = _r(_d[8]),
      c = _r(_d[9]),
      u = _r(_d[10]),
      h = _r(_d[11]),
      y = _r(_d[12]),
      f = _r(_d[13]),
      p = _r(_d[14]),
      S = _r(_d[15]),
      x = _r(_d[16]);
    const b = (e) => (0, a.money)(e, { full: !0, hint: !1 }),
      j = (e) =>
        e.toLocaleString((0, o.numberLocale)(), { maximumFractionDigits: 3 }),
      L = (e) => e.saleTotal ?? e.purchaseTotal,
      C = (e) =>
        e.corrected
          ? 0
          : (0, d.returnableQuantity)(e.quantity, e.returned || 0);
    function I(e, t) {
      return (
        !!e &&
        ('owner' === e.role ||
          'manager' === e.role ||
          ('staff' === e.role
            ? !(
                !e.access?.full &&
                !('sale' === t ? e.access?.do.sell : e.access?.do.receive)
              )
            : 'sale' === t
              ? 'sell' === e.role
              : 'receive' === e.role))
      );
    }
    const D = (e, t) =>
      'sale' === e
        ? (0, o.L)(
            '\u0628\u0631\u06af\u0634\u062a \u0627\u0632 \u0641\u0631\u0648\u0634 {no}',
            { no: (0, o.localDigits)(String(t)) },
          )
        : (0, o.L)(
            '\u0628\u0631\u06af\u0634\u062a \u0627\u0632 \u062e\u0631\u06cc\u062f {no}',
            { no: (0, o.localDigits)(String(t)) },
          );
    function v({ shop: e, document: a, onClose: f, onSaved: I }) {
      const { colors: D } = (0, c.useTheme)(),
        v = 'sale' === a.type,
        z = a.lines.filter((e) => !!e.productId && C(e) > 0),
        [H, _] = (0, t.useState)({}),
        [w, R] = (0, t.useState)(() => (0, d.defaultRefund)(a)),
        [T, B] = (0, t.useState)(!1),
        [F, V] = (0, t.useState)(''),
        [W] = (0, t.useState)(() => (0, s.randomUUID)()),
        M = z.filter((e) => (H[e.id] || 0) > 0),
        k = M.reduce((e, t) => {
          const n = L(t);
          return void 0 !== n && t.quantity > 0
            ? e + Math.round((n * (H[t.id] || 0)) / t.quantity)
            : e;
        }, 0);
      function q(e, t) {
        const n = C(e),
          l = H[e.id] || 0,
          r = Math.max(0, Math.min(n, Math.round(1e3 * (l + t)) / 1e3));
        (_((t) => ({ ...t, [e.id]: r })), V(''));
      }
      async function P() {
        if (M.length && !T) {
          (B(!0), V(''));
          try {
            (await (0, S.withOversell)(
              (t) =>
                (0, p.postReturn)(
                  e,
                  {
                    kind: v ? 'sale_return' : 'purchase_return',
                    ...(v ? { saleId: a.id } : { purchaseId: a.id }),
                    lines: M.map((e) => ({ lineId: e.id, quantity: H[e.id] })),
                    refund: w,
                    ...(t ? { allowNegative: !0 } : {}),
                  },
                  W,
                ),
              { verb: 'save', fill: !1 },
            ),
              I());
          } catch (e) {
            V((0, s.message)(e));
          } finally {
            B(!1);
          }
        }
      }
      const $ = [
          {
            value: 'cash',
            label: (0, o.L)('\u0646\u0642\u062f'),
            testID: 'return-refund-cash',
          },
          {
            value: 'card',
            label: (0, o.L)('\u06a9\u0627\u0631\u062a'),
            testID: 'return-refund-card',
          },
          ...(a.contactId
            ? [
                {
                  value: 'credit',
                  label: (0, o.L)(
                    '\u0628\u0647 \u062d\u0633\u0627\u0628 \u0637\u0631\u0641',
                  ),
                  testID: 'return-refund-credit',
                },
              ]
            : []),
        ],
        N = (e, t) => {
          const l = H[e.id] || 0,
            r = t < 0 ? l <= 0 : l >= C(e);
          return (0, x.jsx)(n.default, {
            testID: `return-${t > 0 ? 'plus' : 'minus'}-${e.id}`,
            accessibilityRole: 'button',
            accessibilityLabel:
              t > 0
                ? (0, o.L)('\u06cc\u06a9\u06cc \u0628\u06cc\u0634\u062a\u0631')
                : (0, o.L)('\u06cc\u06a9\u06cc \u06a9\u0645\u062a\u0631'),
            disabled: r,
            onPress: () => q(e, t),
            hitSlop: 4,
            style: ({ pressed: e }) => ({
              width: 40,
              height: 40,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: D.line,
              alignItems: 'center',
              justifyContent: 'center',
              opacity: r ? 0.35 : e ? 0.6 : 1,
            }),
            children: (0, x.jsx)(u.Copy, {
              style: { fontSize: 20, lineHeight: 26, color: D.accent },
              children: t > 0 ? '+' : '\u2212',
            }),
          });
        };
      return (0, x.jsxs)(h.Sheet, {
        visible: !0,
        title: v
          ? (0, o.L)(
              '\u0628\u0631\u06af\u0634\u062a \u0627\u0632 \u0641\u0631\u0648\u0634',
            )
          : (0, o.L)(
              '\u0628\u0631\u06af\u0634\u062a \u0627\u0632 \u062e\u0631\u06cc\u062f',
            ),
        onClose: f,
        onSubmit: () => {
          P();
        },
        busy: T,
        children: [
          (0, x.jsxs)(i.ScrollView, {
            testID: 'return-sheet',
            nestedScrollEnabled: !0,
            style: { maxHeight: 420 },
            contentContainerStyle: { gap: 4 },
            keyboardShouldPersistTaps: 'handled',
            children: [
              (0, x.jsx)(u.Copy, {
                style: { fontSize: 12.5, lineHeight: 20, color: D.muted },
                children: v
                  ? (0, o.L)(
                      '\u06a9\u0627\u0644\u0627\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0645\u0634\u062a\u0631\u06cc \u067e\u0633 \u0622\u0648\u0631\u062f\u0647 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u061b \u0628\u0647 \u0645\u0648\u062c\u0648\u062f\u06cc \u0628\u0631\u0645\u06cc\u200c\u06af\u0631\u062f\u0646\u062f.',
                    )
                  : (0, o.L)(
                      '\u06a9\u0627\u0644\u0627\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0628\u0647 \u0641\u0631\u0648\u0634\u0646\u062f\u0647 \u067e\u0633 \u0645\u06cc\u200c\u062f\u0647\u06cc \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u061b \u0627\u0632 \u0645\u0648\u062c\u0648\u062f\u06cc \u06a9\u0645 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f.',
                    ),
              }),
              z.map((e, t) =>
                (0, x.jsxs)(
                  r.default,
                  {
                    testID: 'return-line',
                    style: {
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      gap: 10,
                      paddingVertical: 10,
                      borderTopWidth: t ? l.default.hairlineWidth : 0,
                      borderColor: D.line,
                    },
                    children: [
                      (0, x.jsxs)(r.default, {
                        style: { flex: 1, minWidth: 0 },
                        children: [
                          (0, x.jsx)(u.Copy, {
                            numberOfLines: 2,
                            style: {
                              fontSize: 14.5,
                              lineHeight: 23,
                              fontFamily: 'Vazirmatn_600SemiBold',
                            },
                            children: e.name,
                          }),
                          (0, x.jsx)(u.Copy, {
                            style: {
                              fontSize: 12,
                              lineHeight: 19,
                              color: D.muted,
                            },
                            children: (0, o.L)('\u0627\u0632 {n}', {
                              n: j(C(e)),
                            }),
                          }),
                        ],
                      }),
                      (0, x.jsx)(y.StepperRow, {
                        testID: `return-stepper-${e.id}`,
                        minus: N(e, -1),
                        plus: N(e, 1),
                        style: { gap: 6 },
                        children: (0, x.jsx)(u.Copy, {
                          testID: `return-qty-${e.id}`,
                          style: {
                            minWidth: 34,
                            textAlign: 'center',
                            fontSize: 16,
                            lineHeight: 24,
                            fontFamily: 'Vazirmatn_700Bold',
                          },
                          children: j(H[e.id] || 0),
                        }),
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
            ],
          }),
          (0, x.jsxs)(r.default, {
            style: { gap: 8, paddingTop: 8 },
            children: [
              (0, x.jsx)(u.Copy, {
                style: {
                  fontSize: 13,
                  lineHeight: 21,
                  fontFamily: 'Vazirmatn_600SemiBold',
                },
                children: v
                  ? (0, o.L)(
                      '\u067e\u0648\u0644 \u0631\u0627 \u0686\u0637\u0648\u0631 \u067e\u0633 \u0645\u06cc\u200c\u062f\u0647\u06cc\u061f',
                    )
                  : (0, o.L)(
                      '\u0641\u0631\u0648\u0634\u0646\u062f\u0647 \u067e\u0648\u0644 \u0631\u0627 \u0686\u0637\u0648\u0631 \u067e\u0633 \u0645\u06cc\u200c\u062f\u0647\u062f\u061f',
                    ),
              }),
              (0, x.jsx)(u.Segmented, {
                compact: !0,
                items: $,
                value: w,
                onChange: R,
              }),
              M.length > 0 &&
                (0, x.jsx)(u.Copy, {
                  testID: 'return-total',
                  style: { fontSize: 14, lineHeight: 22 },
                  children: (0, o.L)(
                    '\u0645\u0628\u0644\u063a \u0628\u0631\u06af\u0634\u062a: {amount}',
                    { amount: b(k) },
                  ),
                }),
              !!F &&
                (0, x.jsx)(u.Copy, {
                  accessibilityRole: 'alert',
                  style: { fontSize: 13, lineHeight: 21, color: D.danger },
                  children: F,
                }),
              (0, x.jsx)(u.Button, {
                testID: 'return-save',
                disabled: !M.length || T,
                onPress: () => {
                  P();
                },
                children: T
                  ? (0, o.L)(
                      '\u062f\u0631 \u062d\u0627\u0644 \u062b\u0628\u062a\u2026',
                    )
                  : (0, o.L)(
                      '\u062b\u0628\u062a \u0628\u0631\u06af\u0634\u062a',
                    ),
              }),
            ],
          }),
        ],
      });
    }
  },
  818,
  [
    2, 232, 17, 99, 380, 415, 311, 435, 451, 382, 407, 539, 617, 517, 519, 779,
    338,
  ],
);
