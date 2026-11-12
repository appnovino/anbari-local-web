// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 613; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'listToBuy', {
        enumerable: !0,
        get: function () {
          return j;
        },
      }),
      (_e.addToBuy = S),
      (_e.patchToBuy = async function (e, t, n) {
        const s = (0, p.scoped)(e.id, 'to-buy');
        n.remindAt &&
          Date.parse(n.remindAt) > Date.now() &&
          (await (0, x.ensureReminderNotifications)());
        const i = await (0, l.request)(
          (0, l.shopPath)(e, '/to-buy/' + t),
          'PATCH',
          n,
          { key: (0, l.randomUUID)() },
        );
        return (await I(e, s, [i.item]), i.item);
      }),
      Object.defineProperty(_e, 'listRoutines', {
        enumerable: !0,
        get: function () {
          return D;
        },
      }),
      (_e.addRoutine = async function (e, t) {
        const n = (0, p.scoped)(e.id, 'to-buy-routines'),
          { routine: s } = await (0, l.request)(
            (0, l.shopPath)(e, '/to-buy/routines'),
            'POST',
            t,
            { key: (0, l.randomUUID)() },
          );
        await L(e, n, s.id, s);
      }),
      (_e.removeRoutine = async function (e, t) {
        const n = (0, p.scoped)(e.id, 'to-buy-routines');
        (await (0, l.request)(
          (0, l.shopPath)(e, '/to-buy/routines/' + t),
          'DELETE',
          void 0,
          { key: (0, l.randomUUID)() },
        ),
          await L(e, n, t));
      }),
      (_e.setRoutineActive = async function (e, t, n) {
        const s = (0, p.scoped)(e.id, 'to-buy-routines');
        n && (await (0, x.ensureReminderNotifications)());
        const { routine: i } = await (0, l.request)(
          (0, l.shopPath)(e, '/to-buy/routines/' + t),
          'PATCH',
          { active: n },
          { key: (0, l.randomUUID)() },
        );
        return (await L(e, s, t, i), i);
      }),
      (_e.ToBuySuggest = function ({ shop: e, items: f, products: p }) {
        const { colors: x } = (0, u.useTheme)(),
          [j, I] = (0, t.useState)('idle'),
          [D, L] = (0, t.useState)(''),
          [C, P] = (0, t.useState)(() =>
            (f || []).map((e) => ({
              name: e.name,
              qty: e.quantity ? String(e.quantity) : '',
              unit: e.unit,
              when: e.when,
            })),
          ),
          [q, R] = (0, t.useState)(null),
          [k, z] = (0, t.useState)(null);
        if (!e || !f?.length) return null;
        const T = (e, t) =>
          P((n) => n.map((n, s) => (s === e ? { ...n, ...t } : n)));
        async function U() {
          (I('busy'), L(''));
          try {
            const t = C.filter((e) => e.name.trim()).map((e) => {
              let t;
              e.qty.trim() && (t = (0, c.parseQuantity)(e.qty));
              const n = p.find(
                (t) => !t.archivedAt && t.name.trim() === e.name.trim(),
              );
              return {
                name: e.name.trim(),
                ...(t ? { quantity: t } : {}),
                ...(e.unit
                  ? { unit: e.unit }
                  : n?.unit
                    ? { unit: n.unit }
                    : {}),
                ...(e.when ? { remindAt: e.when } : {}),
                ...(n ? { productId: n.id } : {}),
              };
            });
            if (!t.length) return void I('idle');
            (await S(e, t), I('done'), R(null), z(null));
          } catch (e) {
            (L(
              e instanceof Error && 'invalid_quantity' === e.message
                ? (0, h.L)(
                    '\u062a\u0639\u062f\u0627\u062f \u062f\u0631\u0633\u062a \u0646\u06cc\u0633\u062a.',
                  )
                : (0, l.message)(e),
            ),
              I('idle'));
          }
        }
        const A = 'done' === j;
        return (0, w.jsxs)(s.default, {
          testID: 'to-buy-suggest',
          style: {
            gap: 10,
            padding: 14,
            borderRadius: 18,
            borderWidth: 1.5,
            borderColor: x.accent,
            backgroundColor: x.surface,
          },
          children: [
            (0, w.jsxs)(s.default, {
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 10,
              },
              children: [
                (0, w.jsx)(s.default, {
                  style: {
                    width: 38,
                    height: 38,
                    borderRadius: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: x.accentSoft,
                  },
                  children: (0, w.jsx)(r.Icon, {
                    name: A ? 'check' : 'cart',
                    size: 20,
                    color: x.accent,
                  }),
                }),
                (0, w.jsxs)(s.default, {
                  style: { flex: 1, minWidth: 0 },
                  children: [
                    (0, w.jsx)(i.Copy, {
                      style: { fontSize: 16, fontFamily: 'Vazirmatn_700Bold' },
                      children: A
                        ? (0, h.L)(
                            '\u0628\u0647 \u0644\u06cc\u0633\u062a \u062e\u0631\u06cc\u062f \u0627\u0636\u0627\u0641\u0647 \u0634\u062f',
                          )
                        : (0, h.L)(
                            '\u0628\u0631\u0627\u06cc \u0644\u06cc\u0633\u062a \u062e\u0631\u06cc\u062f',
                          ),
                    }),
                    (0, w.jsx)(i.Copy, {
                      style: { fontSize: 12, color: x.muted },
                      children: A
                        ? (0, h.L)(
                            '\u062f\u0631 \xab\u0627\u0641\u0632\u0648\u062f\u0646 \u2190 \u0644\u06cc\u0633\u062a \u062e\u0631\u06cc\u062f\xbb \u0645\u06cc\u200c\u0628\u06cc\u0646\u06cc\u200c\u0627\u0634.',
                          )
                        : (0, h.L)(
                            '\u0627\u06cc\u0646\u200c\u0647\u0627 \u0631\u0627 \u0627\u0632 \u062d\u0631\u0641\u062a \u0628\u0631\u062f\u0627\u0634\u062a\u06cc\u0645\u061b \u0627\u06af\u0631 \u0644\u0627\u0632\u0645 \u0627\u0633\u062a \u0648\u06cc\u0631\u0627\u06cc\u0634 \u06a9\u0646.',
                          ),
                    }),
                  ],
                }),
              ],
            }),
            C.map((e, t) =>
              (0, w.jsxs)(
                s.default,
                {
                  testID: 'to-buy-suggest-row-' + t,
                  style: {
                    gap: 8,
                    padding: 10,
                    borderRadius: 14,
                    backgroundColor: x.soft,
                    opacity: A ? 0.7 : 1,
                  },
                  children: [
                    q === t
                      ? (0, w.jsxs)(s.default, {
                          style: { gap: 8 },
                          children: [
                            (0, w.jsxs)(s.default, {
                              style: { flexDirection: 'row-reverse', gap: 8 },
                              children: [
                                (0, w.jsx)(s.default, {
                                  style: { flex: 2 },
                                  children: (0, w.jsx)(i.Input, {
                                    testID: 'to-buy-suggest-name-' + t,
                                    value: e.name,
                                    onChangeText: (e) => T(t, { name: e }),
                                    placeholder: (0, h.L)(
                                      '\u0646\u0627\u0645 \u06a9\u0627\u0644\u0627',
                                    ),
                                    maxLength: 100,
                                  }),
                                }),
                                (0, w.jsx)(s.default, {
                                  style: { flex: 1 },
                                  children: (0, w.jsx)(o.QuantityInput, {
                                    testID: 'to-buy-suggest-qty-' + t,
                                    value: e.qty,
                                    onChange: (e) => T(t, { qty: e }),
                                    placeholder: (0, h.L)(
                                      '\u062a\u0639\u062f\u0627\u062f',
                                    ),
                                  }),
                                }),
                              ],
                            }),
                            (0, w.jsx)(i.Button, {
                              secondary: !0,
                              onPress: () => R(null),
                              children: (0, h.L)('\u062a\u0645\u0627\u0645'),
                            }),
                          ],
                        })
                      : (0, w.jsxs)(s.default, {
                          style: {
                            flexDirection: 'row-reverse',
                            alignItems: 'center',
                            gap: 8,
                          },
                          children: [
                            (0, w.jsxs)(s.default, {
                              style: { flex: 1, minWidth: 0 },
                              children: [
                                (0, w.jsx)(i.Copy, {
                                  numberOfLines: 2,
                                  style: {
                                    fontSize: 15,
                                    fontFamily: 'Vazirmatn_600SemiBold',
                                  },
                                  children: e.name || '\u2014',
                                }),
                                (0, w.jsx)(i.Copy, {
                                  style: { fontSize: 12, color: x.muted },
                                  children: e.qty
                                    ? `${v(e.qty)} ${y.notebookFa.units[e.unit || 'piece']}`
                                    : (0, h.L)(
                                        '\u0628\u062f\u0648\u0646 \u062a\u0639\u062f\u0627\u062f',
                                      ),
                                }),
                              ],
                            }),
                            !A &&
                              (0, w.jsxs)(w.Fragment, {
                                children: [
                                  (0, w.jsxs)(n.default, {
                                    testID: 'to-buy-suggest-edit-' + t,
                                    accessibilityRole: 'button',
                                    onPress: () => {
                                      (z(null), R(t));
                                    },
                                    style: {
                                      flexDirection: 'row-reverse',
                                      alignItems: 'center',
                                      gap: 4,
                                      paddingHorizontal: 10,
                                      height: 34,
                                      borderRadius: 10,
                                      backgroundColor: x.surface,
                                    },
                                    children: [
                                      (0, w.jsx)(r.Icon, {
                                        name: 'edit',
                                        size: 15,
                                        color: x.text,
                                      }),
                                      (0, w.jsx)(i.Copy, {
                                        style: { fontSize: 12 },
                                        children: (0, h.L)(
                                          '\u0648\u06cc\u0631\u0627\u06cc\u0634',
                                        ),
                                      }),
                                    ],
                                  }),
                                  C.length > 1 &&
                                    (0, w.jsx)(n.default, {
                                      testID: 'to-buy-suggest-remove-' + t,
                                      accessibilityRole: 'button',
                                      accessibilityLabel: (0, h.L)(
                                        '\u062d\u0630\u0641',
                                      ),
                                      onPress: () =>
                                        P((e) => e.filter((e, n) => n !== t)),
                                      style: {
                                        width: 34,
                                        height: 34,
                                        borderRadius: 10,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: x.surface,
                                      },
                                      children: (0, w.jsx)(r.Icon, {
                                        name: 'close',
                                        size: 15,
                                        color: x.danger,
                                      }),
                                    }),
                                ],
                              }),
                          ],
                        }),
                    (0, w.jsxs)(n.default, {
                      testID: 'to-buy-suggest-when-' + t,
                      accessibilityRole: 'button',
                      disabled: A,
                      onPress: () => {
                        (R(null), z(k === t ? null : t));
                      },
                      style: {
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        gap: 6,
                        alignSelf: 'flex-start',
                        paddingHorizontal: 10,
                        paddingVertical: 6,
                        borderRadius: 10,
                        backgroundColor: x.surface,
                      },
                      children: [
                        (0, w.jsx)(r.Icon, {
                          name: 'bell',
                          size: 14,
                          color: e.when ? x.accent : x.muted,
                        }),
                        (0, w.jsx)(i.Copy, {
                          style: {
                            fontSize: 12,
                            color: e.when ? x.text : x.muted,
                          },
                          children: (0, b.reminderText)(e.when),
                        }),
                      ],
                    }),
                    (0, w.jsx)(b.ReminderSheet, {
                      visible: k === t && !A,
                      value: e.when,
                      title: (0, h.L)(
                        '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc: {name}',
                        { name: e.name },
                      ),
                      onClose: () => z(null),
                      onPick: (e) => {
                        (T(t, { when: e }), z(null));
                      },
                    }),
                  ],
                },
                t,
              ),
            ),
            !!D &&
              (0, w.jsx)(i.Copy, {
                style: { color: x.danger, fontSize: 12 },
                children: D,
              }),
            !A &&
              (0, w.jsx)(i.Button, {
                testID: 'to-buy-suggest-add',
                disabled: 'busy' === j || !C.some((e) => e.name.trim()),
                onPress: () => {
                  U();
                },
                children:
                  C.length > 1
                    ? (0, h.L)(
                        '\u0627\u0641\u0632\u0648\u062f\u0646 {n} \u0645\u0648\u0631\u062f \u0628\u0647 \u0644\u06cc\u0633\u062a \u062e\u0631\u06cc\u062f',
                        { n: C.length.toLocaleString((0, h.numberLocale)()) },
                      )
                    : (0, h.L)(
                        '\u0627\u0641\u0632\u0648\u062f\u0646 \u0628\u0647 \u0644\u06cc\u0633\u062a \u062e\u0631\u06cc\u062f',
                      ),
              }),
          ],
        });
      }));
    var t = _r(d[0]),
      n = e(_r(d[1])),
      s = e(_r(d[2])),
      i = _r(d[3]),
      o = _r(d[4]),
      r = _r(d[5]),
      u = _r(d[6]),
      l = _r(d[7]),
      c = _r(d[8]),
      y = _r(d[9]),
      h = _r(d[10]),
      f = _r(d[11]),
      b = _r(d[12]),
      p = _r(d[13]),
      x = _r(d[14]),
      w = _r(d[15]);
    const j = (e) =>
      (0, l.request)((0, l.shopPath)(e, '/to-buy')).then((e) =>
        Object.assign(e.items, {
          complete: e.items.filter((e) => 'open' === e.status).length < 200,
        }),
      );
    async function I(e, t, n) {
      if (t !== (0, p.scoped)(e.id, 'to-buy')) return;
      const s = t ? p.swrStore.peek(t) : void 0;
      t &&
        s &&
        (await p.swrStore.set(
          t,
          Object.assign(
            [...s.filter((e) => !n.some((t) => t.id === e.id)), ...n],
            { complete: s.complete },
          ),
        ));
    }
    async function S(e, t) {
      const n = (0, p.scoped)(e.id, 'to-buy');
      t.some((e) => e.remindAt && Date.parse(e.remindAt) > Date.now()) &&
        (await (0, x.ensureReminderNotifications)());
      const s = await (0, l.request)(
        (0, l.shopPath)(e, '/to-buy'),
        'POST',
        { items: t },
        { key: (0, l.randomUUID)() },
      );
      return (await I(e, n, s.items), s.items);
    }
    const D = (e) =>
      (0, l.request)((0, l.shopPath)(e, '/to-buy/routines')).then(
        (e) => e.routines,
      );
    async function L(e, t, n, s) {
      if (t !== (0, p.scoped)(e.id, 'to-buy-routines')) return;
      const i = t ? p.swrStore.peek(t) : void 0;
      t &&
        i &&
        (await p.swrStore.set(t, [
          ...i.filter((e) => e.id !== n),
          ...(s ? [s] : []),
        ]));
    }
    const v = (e) => {
      const t = Number((0, f.latinDigits)(e).replace('\u066b', '.'));
      return Number.isFinite(t) ? t.toLocaleString((0, h.numberLocale)()) : e;
    };
  },
  613,
  [2, 232, 99, 407, 614, 385, 382, 415, 439, 580, 311, 440, 618, 489, 523, 338],
);
