// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 965; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, i, a, _m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.discountText = function (e, t) {
        if (!e) return '';
        return (
          '\u2066\u2212' +
          ('percent' === e.kind && void 0 === e.newPrice
            ? (0, u.localDigits)(e.value) + '\u066a'
            : D(t)) +
          '\u2069' +
          (e.reason ? ' ' + e.reason : '')
        );
      }),
      (_e.DiscountChip = function ({ text: e, testID: t }) {
        const { colors: n } = (0, c.useTheme)();
        return (0, b.jsx)(o.default, {
          testID: t,
          style: {
            paddingHorizontal: 8,
            paddingVertical: 1,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: n.warningBorder,
            backgroundColor: n.warningSoft,
          },
          children: (0, b.jsx)(r.Copy, {
            numberOfLines: 1,
            style: { fontSize: 11, lineHeight: 18, color: n.warning },
            children: e,
          }),
        });
      }),
      (_e.LineSheet = function ({
        line: e,
        sale: d,
        showPrice: C,
        priceEditable: S = !0,
        canDiscount: z,
        limit: N,
        newId: A,
        onApply: T,
        onDelete: B,
        onClose: F,
      }) {
        const { colors: O } = (0, c.useTheme)(),
          [_, U] = (0, t.useState)(e),
          [q, R] = (0, t.useState)(() => P(e?.discount)),
          [H, M] = (0, t.useState)(''),
          [E, V] = (0, t.useState)(!1),
          [$, G] = (0, t.useState)('');
        if (!e || !_) return null;
        const X = d && z && C,
          J = X ? w(q) : void 0,
          Q = { ..._, discount: J },
          K = (d ? _.unitPrice : _.unitCost) || '',
          Y = j.notebookFa.units[_.unit] || _.unit,
          Z = E && H ? { ...Q, quantity: H } : Q,
          ee = Number((0, x.normalizeQuantityText)(Z.quantity) || 0),
          te = (0, m.grossOf)(Z, d),
          ne = J ? (0, p.discountOn)(te, (0, m.lineDiscount)(Z, te)) : 0;
        return (0, b.jsxs)(s.Sheet, {
          visible: !0,
          title: X
            ? (0, u.L)(
                '\u062a\u062e\u0641\u06cc\u0641 \u0631\u0648\u06cc \xab{name}\xbb',
                { name: e.product.name },
              )
            : e.product.name,
          onClose: F,
          children: [
            d && (0, h.isWeighLine)(_)
              ? (0, b.jsx)(y.WeightBox, {
                  testID: 'line-weight',
                  unit: _.product.unit || 'piece',
                  price:
                    void 0 !== _.unitPrice && '' !== _.unitPrice
                      ? Number(_.unitPrice)
                      : void 0,
                  showPrices: C,
                  value: _.quantity,
                  onChange: (e) =>
                    U({
                      ..._,
                      quantity: e.quantity,
                      said: 'money' === e.mode ? e.money : void 0,
                    }),
                })
              : (0, b.jsxs)(o.default, {
                  style: { gap: 6 },
                  children: [
                    (0, b.jsx)(r.Copy, {
                      style: { fontSize: 12, color: O.muted },
                      children: j.notebookW5Fa.quantity,
                    }),
                    (0, b.jsx)(x.UnitInput, {
                      testID: 'line-quantity',
                      value: _.quantity,
                      onChange: (e) => U({ ..._, quantity: e }),
                      unit: _.unit,
                      baseUnit: _.product.unit,
                      onUnitChange: function (e) {
                        const t = (0, m.withUnit)(Q, e, d);
                        (U({ ...t, discount: _.discount }),
                          'price' === q.mode &&
                            void 0 !== t.discount?.newPrice &&
                            R({ ...q, text: t.discount.newPrice }));
                      },
                      packSize: _.product.packSize,
                      packUnit: _.product.packUnit,
                    }),
                  ],
                }),
            C &&
              (0, b.jsxs)(o.default, {
                style: { gap: 6 },
                children: [
                  (0, b.jsxs)(r.Copy, {
                    style: { fontSize: 12, color: O.muted },
                    children: [
                      d ? j.notebookW5Fa.unitPrice : j.notebookW5Fa.unitCost,
                      _.unit !== (_.product.unit || 'piece')
                        ? ' \xb7 ' + Y
                        : '',
                    ],
                  }),
                  S
                    ? (0, b.jsx)(x.MoneyInput, {
                        testID: 'line-price',
                        value: K,
                        onChange: (e) =>
                          U(d ? { ..._, unitPrice: e } : { ..._, unitCost: e }),
                      })
                    : (0, b.jsx)(r.Copy, {
                        testID: 'line-price-text',
                        style: {
                          fontSize: 15,
                          lineHeight: 24,
                          fontFamily: 'Vazirmatn_600SemiBold',
                        },
                        children: K
                          ? D(Number(K)) + ' ' + (0, v.tomanWord)()
                          : '\u2014',
                      }),
                  !d &&
                    (0, f.needsBuyPriceHint)(_.product) &&
                    (0, b.jsx)(r.Copy, {
                      testID: 'buy-price-hint',
                      style: { fontSize: 11, color: O.muted },
                      children: (0, f.buyPriceHint)(Y),
                    }),
                  !!_.product.packSize &&
                    _.product.packUnit === _.unit &&
                    (0, b.jsxs)(r.Copy, {
                      style: { fontSize: 11, color: O.muted },
                      children: [
                        j.notebookW5Fa.perBaseUnit,
                        ': ',
                        D(Number(K || 0) / _.product.packSize),
                        ' ',
                        (0, v.tomanWord)(),
                      ],
                    }),
                ],
              }),
            !d &&
              (0, b.jsxs)(o.default, {
                style: { gap: 6 },
                children: [
                  (0, b.jsx)(r.Copy, {
                    style: { fontSize: 12, color: O.muted },
                    children: j.notebookW5Fa.expiryDate,
                  }),
                  _.expiresAt
                    ? (0, b.jsxs)(b.Fragment, {
                        children: [
                          (0, b.jsx)(l.JalaliDateField, {
                            dateOnly: !0,
                            id: 'line-expiry-' + _.id,
                            value: L(_.expiresAt),
                            onChange: (e) => U({ ..._, expiresAt: I(e) }),
                          }),
                          (0, b.jsx)(r.Button, {
                            secondary: !0,
                            onPress: () => U({ ..._, expiresAt: void 0 }),
                            children: j.notebookW5Fa.removeExpiry,
                          }),
                        ],
                      })
                    : (0, b.jsx)(r.Button, {
                        secondary: !0,
                        onPress: () => U({ ..._, expiresAt: I(L()) }),
                        children: j.notebookW5Fa.addExpiry,
                      }),
                ],
              }),
            X &&
              (0, b.jsxs)(b.Fragment, {
                children: [
                  (0, b.jsx)(k, {
                    draft: q,
                    onChange: R,
                    newPrice: !0,
                    unitWord: Y,
                  }),
                  E &&
                    (0, b.jsxs)(o.default, {
                      style: { gap: 6 },
                      children: [
                        (0, b.jsx)(r.Copy, {
                          style: { fontSize: 12, color: O.muted },
                          children: (0, u.L)(
                            '\u062a\u062e\u0641\u06cc\u0641 \u0641\u0642\u0637 \u0631\u0648\u06cc \u0686\u0646\u062f {unit} \u0627\u0632 {all}\u061f',
                            { unit: Y, all: (0, u.localDigits)(_.quantity) },
                          ),
                        }),
                        (0, b.jsx)(x.MoneyInput, {
                          testID: 'line-part',
                          decimals: 3,
                          suffix: Y,
                          value: H,
                          onChange: M,
                        }),
                      ],
                    }),
                  te > 0 &&
                    (0, b.jsx)(W, {
                      rows: [
                        [
                          (0, u.L)('\u0647\u0631 {unit}', { unit: Y }),
                          D(ee > 0 ? (te - ne) / ee : 0),
                          ne > 0 && Number(K) > 0 ? D(Number(K)) : void 0,
                        ],
                        [
                          E && H
                            ? (0, u.L)('\u0627\u06cc\u0646 \u0628\u062e\u0634')
                            : (0, u.L)(
                                '\u0627\u06cc\u0646 \u0631\u062f\u06cc\u0641',
                              ),
                          D(te - ne),
                          ne > 0 ? D(te) : void 0,
                        ],
                      ],
                    }),
                  N < 100 &&
                    (0, b.jsx)(r.Copy, {
                      style: { fontSize: 11, color: O.muted },
                      children: (0, u.L)(
                        '\u0633\u0642\u0641 \u062a\u062e\u0641\u06cc\u0641 \u0634\u0645\u0627: {n}\u066a \u0627\u0632 \u06a9\u0644 \u0641\u0627\u06a9\u062a\u0648\u0631.',
                        { n: (0, u.localDigits)(N) },
                      ),
                    }),
                ],
              }),
            !!$ &&
              (0, b.jsx)(r.Copy, {
                accessibilityRole: 'alert',
                style: { color: O.danger },
                children: $,
              }),
            (0, b.jsxs)(o.default, {
              style: { flexDirection: 'row-reverse', gap: 10 },
              children: [
                (0, b.jsx)(o.default, {
                  style: { flex: 1 },
                  children: (0, b.jsx)(r.Button, {
                    testID: 'line-apply',
                    onPress: function () {
                      G('');
                      try {
                        (0, m.normalizedLine)(Q, d);
                      } catch {
                        return void G(j.notebookW5Fa.invalidBasket);
                      }
                      if (E && H) {
                        const e = (0, m.splitLine)(Q, H, J, A());
                        return e
                          ? void T(e)
                          : void G(
                              (0, u.L)(
                                '\u0628\u062e\u0634 \u062a\u062e\u0641\u06cc\u0641\u200c\u062f\u0627\u0631 \u0628\u0627\u06cc\u062f \u06a9\u0645\u062a\u0631 \u0627\u0632 \u06a9\u0644 \u0627\u06cc\u0646 \u0631\u062f\u06cc\u0641 \u0628\u0627\u0634\u062f.',
                              ),
                            );
                      }
                      T([Q]);
                    },
                    children:
                      J && !e.discount
                        ? (0, u.L)(
                            '\u0627\u0639\u0645\u0627\u0644 \u062a\u062e\u0641\u06cc\u0641',
                          )
                        : (0, u.L)('\u062a\u0623\u06cc\u06cc\u062f'),
                  }),
                }),
                X &&
                  ee > 1 &&
                  (0, b.jsx)(o.default, {
                    style: { flex: 1 },
                    children: (0, b.jsx)(r.Button, {
                      testID: 'line-part-toggle',
                      secondary: !0,
                      onPress: () => {
                        (V(!E), M(''));
                      },
                      children: E
                        ? (0, u.L)(
                            '\u0647\u0645\u0647\u0654 \u0631\u062f\u06cc\u0641',
                          )
                        : (0, u.L)(
                            '\u0641\u0642\u0637 \u0628\u062e\u0634\u06cc \u0627\u0632 {all}',
                            { all: (0, u.localDigits)(_.quantity) },
                          ),
                    }),
                  }),
              ],
            }),
            X &&
              !!e.discount &&
              (0, b.jsx)(r.Button, {
                testID: 'line-discount-remove',
                secondary: !0,
                onPress: () => T([{ ...Q, discount: void 0 }]),
                children: (0, u.L)(
                  '\u0628\u0631\u062f\u0627\u0634\u062a\u0646 \u062a\u062e\u0641\u06cc\u0641',
                ),
              }),
            (0, b.jsx)(n.default, {
              testID: 'line-delete',
              accessibilityRole: 'button',
              onPress: B,
              style: {
                minHeight: 44,
                alignItems: 'center',
                justifyContent: 'center',
              },
              children: (0, b.jsx)(r.Copy, {
                style: { color: O.danger },
                children: (0, u.L)(
                  '\u062d\u0630\u0641 \u0627\u0632 \u0641\u0627\u06a9\u062a\u0648\u0631',
                ),
              }),
            }),
            X &&
              (0, b.jsx)(r.Copy, {
                style: { fontSize: 11, color: O.muted },
                children: (0, u.L)(
                  '\u062a\u062e\u0641\u06cc\u0641 \u0641\u0642\u0637 \u0631\u0648\u06cc \u0647\u0645\u06cc\u0646 \u0631\u062f\u06cc\u0641 \u0627\u0633\u062a\u061b \u0642\u06cc\u0645\u062a \u06a9\u0627\u0644\u0627 \u062f\u0631 \u0627\u0646\u0628\u0627\u0631 \u0639\u0648\u0636 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f. \u0633\u0648\u062f \u0648\u0627\u0642\u0639\u06cc \u062f\u0631 \u06af\u0632\u0627\u0631\u0634 \u0628\u0627 \u0647\u0645\u06cc\u0646 \u062a\u062e\u0641\u06cc\u0641 \u062d\u0633\u0627\u0628 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                ),
              }),
          ],
        });
      }),
      (_e.InvoiceDiscountSheet = function ({
        value: e,
        base: n,
        limit: o,
        onApply: l,
        onClose: d,
      }) {
        const { colors: x } = (0, c.useTheme)(),
          [y, h] = (0, t.useState)(() => P(e)),
          m = w(y),
          f = (0, p.discountOn)(n, m);
        return (0, b.jsxs)(s.Sheet, {
          visible: !0,
          title: (0, u.L)(
            '\u062a\u062e\u0641\u06cc\u0641 \u06a9\u0644 \u0641\u0627\u06a9\u062a\u0648\u0631',
          ),
          onClose: d,
          children: [
            (0, b.jsx)(k, { draft: y, onChange: h }),
            n > 0 &&
              (0, b.jsx)(W, {
                rows: [
                  [
                    (0, u.L)(
                      '\u0642\u0627\u0628\u0644 \u067e\u0631\u062f\u0627\u062e\u062a',
                    ),
                    D(n - f),
                    f > 0 ? D(n) : void 0,
                  ],
                ],
              }),
            o < 100 &&
              (0, b.jsx)(r.Copy, {
                style: { fontSize: 11, color: x.muted },
                children: (0, u.L)(
                  '\u0633\u0642\u0641 \u062a\u062e\u0641\u06cc\u0641 \u0634\u0645\u0627: {n}\u066a \u0627\u0632 \u06a9\u0644 \u0641\u0627\u06a9\u062a\u0648\u0631.',
                  { n: (0, u.localDigits)(o) },
                ),
              }),
            (0, b.jsx)(r.Button, {
              testID: 'invoice-discount-apply',
              onPress: () => l(m || null),
              children: m
                ? (0, u.L)(
                    '\u0627\u0639\u0645\u0627\u0644 \u062a\u062e\u0641\u06cc\u0641',
                  )
                : (0, u.L)('\u062a\u0623\u06cc\u06cc\u062f'),
            }),
            !!e &&
              (0, b.jsx)(r.Button, {
                testID: 'invoice-discount-remove',
                secondary: !0,
                onPress: () => l(null),
                children: (0, u.L)(
                  '\u0628\u0631\u062f\u0627\u0634\u062a\u0646 \u062a\u062e\u0641\u06cc\u0641',
                ),
              }),
          ],
        });
      }));
    var t = _r(_d[0]),
      n = e(_r(_d[1])),
      o = e(_r(_d[2])),
      s = _r(_d[3]),
      r = _r(_d[4]),
      l = _r(_d[5]),
      c = _r(_d[6]),
      u = _r(_d[7]),
      d = _r(_d[8]),
      p = _r(_d[9]),
      x = _r(_d[10]),
      y = _r(_d[11]),
      h = _r(_d[12]),
      m = _r(_d[13]),
      f = _r(_d[14]),
      j = _r(_d[15]),
      v = _r(_d[16]),
      b = _r(_d[17]);
    const C = (e) => Math.round(e).toLocaleString((0, u.numberLocale)()),
      D = (e) => C((0, v.localAmount)(e)),
      S = (e) => String(e).padStart(2, '0'),
      I = (e) => {
        const t = (0, d.calToGregorian)(e.year, e.month, e.day);
        return `${t.year}-${S(t.month)}-${S(t.day)}`;
      },
      L = (e) => {
        const [t, n, o] = (e || '').split('-').map(Number),
          s = t && n && o ? new Date(t, n - 1, o, 12) : new Date();
        return { ...(0, d.calParts)(s), hour: 12, minute: 0 };
      };
    function P(e) {
      if (!e) return { mode: 'percent', text: '', reason: '' };
      const t = e.newPrice;
      return void 0 !== t
        ? { mode: 'price', text: t, reason: e.reason || '' }
        : { mode: e.kind, text: String(e.value), reason: e.reason || '' };
    }
    function w(e) {
      const t = e.reason.trim().slice(0, p.DISCOUNT_REASON_MAX),
        n = t ? { reason: t } : {};
      return 'price' === e.mode
        ? '' !== e.text
          ? { kind: 'amount', value: 0, newPrice: e.text, ...n }
          : void 0
        : (0, p.cleanDiscount)({
            kind: e.mode,
            value: Number(e.text || 0),
            ...n,
          }) || void 0;
    }
    function z({ active: e, label: t, onPress: o, testID: s }) {
      const { colors: l } = (0, c.useTheme)();
      return (0, b.jsx)(n.default, {
        testID: s,
        accessibilityRole: 'button',
        accessibilityState: { selected: e },
        onPress: o,
        style: ({ pressed: t }) => ({
          minHeight: 36,
          paddingHorizontal: 14,
          borderRadius: 18,
          borderWidth: 1,
          borderColor: e ? l.accent : l.line,
          backgroundColor: e ? l.accent : 'transparent',
          justifyContent: 'center',
          opacity: t ? 0.75 : 1,
        }),
        children: (0, b.jsx)(r.Copy, {
          style: {
            fontSize: 13,
            lineHeight: 20,
            color: e ? l.onAccent : l.text,
          },
          children: t,
        }),
      });
    }
    function k({ draft: e, onChange: n, newPrice: s = !1, unitWord: l = '' }) {
      const { colors: d } = (0, c.useTheme)(),
        [y, h] = (0, t.useState)(
          !!e.reason &&
            !p.DISCOUNT_REASONS.some((t) => (0, u.L)(t) === e.reason),
        ),
        m = [
          {
            value: 'percent',
            label: (0, u.L)('\u062f\u0631\u0635\u062f \u066a'),
            testID: 'discount-mode-percent',
          },
          {
            value: 'amount',
            label: (0, v.shopUnitText)(
              (0, u.L)(
                '\u0645\u0628\u0644\u063a (\u062a\u0648\u0645\u0627\u0646)',
              ),
            ),
            testID: 'discount-mode-amount',
          },
          ...(s
            ? [
                {
                  value: 'price',
                  label: (0, u.L)(
                    '\u0642\u06cc\u0645\u062a \u062a\u0627\u0632\u0647',
                  ),
                  testID: 'discount-mode-price',
                },
              ]
            : []),
        ];
      return (0, b.jsxs)(o.default, {
        style: { gap: 10 },
        children: [
          (0, b.jsx)(r.Segmented, {
            items: m,
            value: e.mode,
            onChange: (t) => n({ ...e, mode: t, text: '' }),
            height: 42,
          }),
          'percent' === e.mode
            ? (0, b.jsx)(x.MoneyInput, {
                testID: 'discount-value',
                decimals: 2,
                suffix: '\u066a',
                value: e.text,
                onChange: (t) => n({ ...e, text: t }),
              })
            : (0, b.jsx)(x.MoneyInput, {
                testID: 'discount-value',
                value: e.text,
                onChange: (t) => n({ ...e, text: t }),
                placeholder:
                  'price' === e.mode
                    ? (0, u.L)('\u0642\u06cc\u0645\u062a \u0647\u0631 {unit}', {
                        unit: l,
                      })
                    : void 0,
              }),
          'percent' === e.mode &&
            (0, b.jsx)(o.default, {
              style: { flexDirection: 'row-reverse', flexWrap: 'wrap', gap: 8 },
              children: [5, 10, 15, 20].map((t) =>
                (0, b.jsx)(
                  z,
                  {
                    testID: 'discount-quick-' + t,
                    active: Number(e.text) === t,
                    label: (0, u.localDigits)(t) + '\u066a',
                    onPress: () => n({ ...e, text: String(t) }),
                  },
                  t,
                ),
              ),
            }),
          (0, b.jsx)(r.Copy, {
            style: { fontSize: 12, color: d.muted },
            children: (0, u.L)(
              '\u062f\u0644\u06cc\u0644 (\u0631\u0648\u06cc \u0641\u0627\u06a9\u062a\u0648\u0631 \u0647\u0645 \u0646\u0648\u0634\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f)',
            ),
          }),
          (0, b.jsxs)(o.default, {
            style: { flexDirection: 'row-reverse', flexWrap: 'wrap', gap: 8 },
            children: [
              p.DISCOUNT_REASONS.map((t) => {
                const o = (0, u.L)(t);
                return (0, b.jsx)(
                  z,
                  {
                    active: !y && e.reason === o,
                    label: o,
                    onPress: () => {
                      (h(!1), n({ ...e, reason: e.reason === o ? '' : o }));
                    },
                  },
                  t,
                );
              }),
              (0, b.jsx)(z, {
                testID: 'discount-reason-other',
                active: y,
                label: (0, u.L)(
                  '+ \u062f\u0644\u06cc\u0644 \u062f\u06cc\u06af\u0631',
                ),
                onPress: () => {
                  (h(!y), n({ ...e, reason: '' }));
                },
              }),
            ],
          }),
          y &&
            (0, b.jsx)(r.Input, {
              testID: 'discount-reason',
              value: e.reason,
              maxLength: p.DISCOUNT_REASON_MAX,
              onChangeText: (t) => n({ ...e, reason: t }),
              placeholder: (0, u.L)(
                '\u062f\u0644\u06cc\u0644 \u062a\u062e\u0641\u06cc\u0641',
              ),
            }),
        ],
      });
    }
    function W({ rows: e }) {
      const { colors: t } = (0, c.useTheme)();
      return (0, b.jsx)(o.default, {
        style: {
          flexDirection: 'row-reverse',
          flexWrap: 'wrap',
          gap: 14,
          padding: 12,
          borderRadius: 14,
          borderWidth: 1,
          borderColor: t.line,
        },
        children: e.map(([e, n, s]) =>
          (0, b.jsxs)(
            o.default,
            {
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'baseline',
                gap: 6,
                flexGrow: 1,
              },
              children: [
                (0, b.jsx)(r.Copy, {
                  style: { fontSize: 12, color: t.muted },
                  children: e,
                }),
                (0, b.jsx)(r.Copy, {
                  style: { fontSize: 16, fontFamily: 'Vazirmatn_700Bold' },
                  children: n,
                }),
                !!s &&
                  (0, b.jsx)(r.Copy, {
                    style: {
                      fontSize: 12,
                      color: t.muted,
                      textDecorationLine: 'line-through',
                    },
                    children: s,
                  }),
              ],
            },
            e,
          ),
        ),
      });
    }
  },
  965,
  [
    2, 232, 99, 539, 407, 619, 382, 311, 440, 460, 614, 834, 966, 464, 833, 580,
    435, 338,
  ],
);
