// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 892; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.AddMenu = function ({
        visible: e,
        name: t,
        canInvoice: n,
        onClose: s,
        onPick: l,
      }) {
        const h = (e) => () => {
          (s(), l(e));
        };
        return (0, I.jsx)(c.Sheet, {
          visible: e,
          title: (0, x.L)(
            '\u062b\u0628\u062a \u0628\u0631\u0627\u06cc {name}',
            { name: t },
          ),
          onClose: s,
          children: (0, I.jsxs)(o.default, {
            testID: 'contact-add-menu',
            style: { gap: 2 },
            children: [
              (0, I.jsx)(v.SheetRow, {
                testID: 'contact-add-in',
                icon: 'down',
                title: D.ledgerFa.receiveMoney,
                hint: (0, x.L)(
                  '\u0646\u0642\u062f\u06cc\u060c \u06a9\u0627\u0631\u062a \u06cc\u0627 \u0686\u06a9',
                ),
                onPress: h('in'),
              }),
              (0, I.jsx)(v.SheetRow, {
                testID: 'contact-add-out',
                icon: 'up',
                title: D.ledgerFa.payMoney,
                hint: (0, x.L)(
                  '\u0646\u0642\u062f\u06cc\u060c \u06a9\u0627\u0631\u062a \u06cc\u0627 \u0686\u06a9',
                ),
                onPress: h('out'),
              }),
              n &&
                (0, I.jsx)(v.SheetRow, {
                  testID: 'contact-add-invoice',
                  icon: 'receipt',
                  title: (0, x.L)(
                    '\u0641\u0627\u06a9\u062a\u0648\u0631 \u062a\u0627\u0632\u0647',
                  ),
                  onPress: h('invoice'),
                }),
              (0, I.jsx)(v.SheetRow, {
                testID: 'contact-add-debt',
                icon: 'edit',
                title: (0, x.L)(
                  '\u0628\u062f\u0647\u06cc / \u0637\u0644\u0628 \u062f\u0633\u062a\u06cc',
                ),
                hint: (0, x.L)(
                  '\u0628\u062f\u0648\u0646 \u0641\u0627\u06a9\u062a\u0648\u0631\u060c \u0645\u062b\u0644\u0627\u064b \u0645\u0627\u0646\u062f\u0647\u200c\u06cc \u0642\u062f\u06cc\u0645\u06cc',
                ),
                onPress: h('debt'),
              }),
              (0, I.jsx)(v.SheetRow, {
                testID: 'contact-add-statement',
                icon: 'download',
                title: D.ledgerFa.statement,
                hint: (0, x.L)(
                  '\u0686\u0627\u067e\u060c \u0639\u06a9\u0633 \u06cc\u0627 \u0627\u0631\u0633\u0627\u0644',
                ),
                onPress: h('statement'),
              }),
            ],
          }),
        });
      }),
      (_e.PaymentDialog = function ({
        shop: e,
        contact: t,
        direction: n,
        initial: o,
        afterSave: s,
        onClose: l,
        onDone: h,
      }) {
        const u = o
          ? (0, x.L)('\u0627\u0635\u0644\u0627\u062d {what}', {
              what: 'in' === n ? D.ledgerFa.receiveMoney : D.ledgerFa.payMoney,
            })
          : 'in' === n
            ? D.ledgerFa.receiveMoney
            : D.ledgerFa.payMoney;
        return n
          ? (0, I.jsx)(
              j.PaymentSheet,
              {
                bare: !0,
                details: !0,
                shop: e,
                contact: t,
                direction: n,
                initial: o,
                afterSave: s,
                onCancel: l,
                onDone: h,
                frame: (e, t) =>
                  (0, I.jsx)(c.Sheet, {
                    visible: !0,
                    title: u,
                    onClose: l,
                    footer: t,
                    children: e,
                  }),
              },
              n + (o?.amountToman ?? ''),
            )
          : (0, I.jsx)(c.Sheet, {
              visible: !1,
              title: u,
              onClose: l,
              children: null,
            });
      }),
      (_e.DebtDialog = function ({
        shop: e,
        contact: t,
        visible: n,
        initial: o,
        afterSave: s,
        onClose: l,
        onDone: h,
      }) {
        const u = o
          ? (0, x.L)(
              '\u0627\u0635\u0644\u0627\u062d \u0628\u062f\u0647\u06cc / \u0637\u0644\u0628',
            )
          : (0, x.L)(
              '\u0628\u062f\u0647\u06cc / \u0637\u0644\u0628 \u062f\u0633\u062a\u06cc',
            );
        return n
          ? (0, I.jsx)(
              C,
              {
                shop: e,
                contact: t,
                initial: o,
                afterSave: s,
                onCancel: l,
                onDone: h,
                frame: (e, t) =>
                  (0, I.jsx)(c.Sheet, {
                    visible: !0,
                    title: u,
                    onClose: l,
                    footer: t,
                    children: e,
                  }),
              },
              o ? o.direction + o.amountToman : 'new',
            )
          : (0, I.jsx)(c.Sheet, {
              visible: !1,
              title: u,
              onClose: l,
              children: null,
            });
      }),
      (_e.RowFixSheet = function ({
        row: e,
        timeZone: t,
        canWrite: n,
        onClose: s,
        onFix: h,
        onRemove: w,
        onNote: S,
      }) {
        const { colors: j } = (0, u.useTheme)(),
          p = e ? (0, L.rowFix)(e) : null;
        return (0, I.jsx)(c.Sheet, {
          visible: !!e,
          title: e ? (0, y.rowTitle)(e) : '',
          onClose: s,
          children:
            e &&
            (0, I.jsxs)(o.default, {
              testID: 'row-fix-sheet',
              style: { gap: 2 },
              children: [
                (0, I.jsx)(l.Copy, {
                  style: {
                    fontSize: 13,
                    lineHeight: 21,
                    color: j.muted,
                    paddingHorizontal: 4,
                    paddingBottom: 6,
                  },
                  children: [
                    (0, y.dayText)(e.occurredAt, t),
                    (0, f.shopUnitText)(
                      (0, x.L)('{amount} \u062a\u0648\u0645\u0627\u0646', {
                        amount: (0, f.fullToman)(Math.abs(e.amountToman)),
                      }),
                    ),
                  ].join(' \xb7 '),
                }),
                n &&
                  p &&
                  (0, I.jsx)(v.SheetRow, {
                    testID: 'row-fix-edit',
                    icon: 'edit',
                    title: (0, x.L)('\u0627\u0635\u0644\u0627\u062d'),
                    hint: (0, x.L)(
                      '\u0645\u0628\u0644\u063a\u060c \u0631\u0648\u0634\u060c \u062a\u0627\u0631\u06cc\u062e \u06cc\u0627 \u062a\u0648\u0636\u06cc\u062d',
                    ),
                    onPress: () => {
                      (s(), h(e));
                    },
                  }),
                n &&
                  p &&
                  (0, I.jsx)(v.SheetRow, {
                    testID: 'row-fix-remove',
                    icon: 'close',
                    danger: !0,
                    title: (0, x.L)(
                      '\u062d\u0630\u0641 \u0627\u06cc\u0646 \u0631\u062f\u06cc\u0641',
                    ),
                    hint: (0, x.L)(
                      '\u0627\u0632 \u0645\u0627\u0646\u062f\u0647 \u0628\u0631\u0645\u06cc\u200c\u06af\u0631\u062f\u062f\u061b \u062f\u0631 \u062f\u0641\u062a\u0631 \u062f\u06cc\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f',
                    ),
                    onPress: () => {
                      (s(), w(e));
                    },
                  }),
                S &&
                  (0, I.jsx)(v.SheetRow, {
                    testID: 'row-fix-note',
                    icon: 'text',
                    title: (0, x.L)(
                      '\u06cc\u0627\u062f\u062f\u0627\u0634\u062a',
                    ),
                    onPress: () => {
                      (s(), S(e));
                    },
                  }),
              ],
            }),
        });
      }));
    var e,
      t = r(d[0]),
      n = r(d[1]),
      o = (e = n) && e.__esModule ? e : { default: e },
      s = r(d[2]),
      l = r(d[3]),
      c = r(d[4]),
      h = r(d[5]),
      u = r(d[6]),
      x = r(d[7]),
      f = r(d[8]),
      y = r(d[9]),
      w = r(d[10]),
      S = r(d[11]),
      v = r(d[12]),
      j = r(d[13]),
      p = r(d[14]),
      b = r(d[15]),
      D = r(d[16]),
      L = r(d[17]),
      I = r(d[18]);
    function C({
      shop: e,
      contact: n,
      initial: c,
      afterSave: f,
      onCancel: y,
      onDone: j,
      frame: C,
    }) {
      const { colors: T } = (0, u.useTheme)(),
        [P, F] = (0, t.useState)(
          c?.direction || ('supplier' === n.kind ? 'owe' : 'owed'),
        ),
        [M, R] = (0, t.useState)(c ? String(c.amountToman) : ''),
        [_, A] = (0, t.useState)(() => (0, b.todayParts)()),
        [k, H] = (0, t.useState)(c?.note || ''),
        [z, K] = (0, t.useState)('');
      const N = (0, I.jsxs)(o.default, {
        style: { flexDirection: 'row-reverse', gap: 8 },
        children: [
          (0, I.jsx)(v.SmallKey, {
            grow: !0,
            testID: 'debt-save',
            kind: 'primary',
            label: D.ledgerFa.save,
            onPress: async function () {
              const t = (0, b.parseToman)(M);
              if (!Number.isSafeInteger(t) || t <= 0)
                K(D.ledgerFa.invalidAmount);
              else {
                K('');
                try {
                  const o = (0, L.dayToOccurredAt)(
                    (0, b.partsToIso)(_),
                    (0, b.partsToIso)((0, b.todayParts)()),
                  );
                  if (
                    (await (0, w.recordDebt)(e, n.id, {
                      direction: P,
                      amountToman: t,
                      ...(k.trim() ? { note: k.trim() } : {}),
                      ...(o ? { occurredAt: o } : {}),
                    }),
                    f)
                  )
                    try {
                      await f();
                    } catch (e) {
                      (0, h.showToast)(
                        (0, x.L)(
                          '\u062b\u0628\u062a \u0634\u062f\u060c \u0648\u0644\u06cc \u0631\u062f\u06cc\u0641 \u0642\u0628\u0644\u06cc \u062d\u0630\u0641 \u0646\u0634\u062f: {reason}',
                          { reason: (0, s.message)(e) },
                        ),
                      );
                    }
                  j();
                } catch (e) {
                  K((0, s.message)(e));
                }
              }
            },
          }),
          (0, I.jsx)(v.SmallKey, {
            grow: !0,
            label: D.ledgerFa.cancel,
            onPress: y,
          }),
        ],
      });
      return C(
        (0, I.jsxs)(o.default, {
          testID: 'debt-sheet',
          style: { gap: 12 },
          children: [
            (0, I.jsx)(l.Segmented, {
              value: P,
              onChange: F,
              items: [
                {
                  value: 'owed',
                  label: (0, x.L)(
                    '\u0627\u0648 \u0628\u0647 \u0645\u0646 \u0628\u062f\u0647\u06a9\u0627\u0631 \u0634\u062f',
                  ),
                  testID: 'debt-owed',
                },
                {
                  value: 'owe',
                  label: (0, x.L)(
                    '\u0645\u0646 \u0628\u0647 \u0627\u0648 \u0628\u062f\u0647\u06a9\u0627\u0631 \u0634\u062f\u0645',
                  ),
                  testID: 'debt-owe',
                },
              ],
            }),
            (0, I.jsx)(o.default, {
              style: { width: '100%', maxWidth: 360, alignSelf: 'flex-end' },
              children: (0, I.jsx)(v.Field, {
                label: v.kitFa.amountLabel,
                children: (0, I.jsx)(S.MoneyInput, {
                  testID: 'debt-amount',
                  value: M,
                  onChange: R,
                  style: { minHeight: 44, paddingVertical: 8 },
                }),
              }),
            }),
            (0, I.jsx)(p.DayLine, { id: 'debt-day', value: _, onChange: A }),
            (0, I.jsx)(l.Input, {
              testID: 'debt-note',
              value: k,
              onChangeText: H,
              placeholder: (0, x.L)(
                '\u0628\u0627\u0628\u062a (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)',
              ),
              maxLength: 500,
              style: { minHeight: 44, paddingVertical: 8 },
            }),
            !!z &&
              (0, I.jsx)(l.Copy, {
                accessibilityRole: 'alert',
                style: { fontSize: 13, color: T.danger },
                children: z,
              }),
          ],
        }),
        N,
      );
    }
  },
  892,
  [
    2, 99, 415, 407, 539, 525, 382, 311, 435, 475, 519, 614, 517, 893, 894, 529,
    580, 890, 338,
  ],
);
