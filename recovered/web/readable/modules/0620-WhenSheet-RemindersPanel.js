// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 620; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, _a, m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.WhenSheet = Y),
      (_e.RemindersPanel = function ({
        shop: e,
        products: c,
        onBought: h,
        onClose: f,
        onPay: x,
        onLearn: b,
        start: j = 'all',
        preview: z,
      }) {
        const { colors: T } = (0, S.useTheme)(),
          P = (0, L.useDesktop)(),
          F = (0, C.expensesAllowedFor)(e),
          [V, Q] = (0, t.useState)(j),
          [G, $] = (0, t.useState)('add' === z?.open || 'add-buy' === z?.open),
          [J, X] = (0, t.useState)(null),
          [Z, te] = (0, t.useState)(''),
          [ne, ie] = (0, t.useState)(''),
          [ae, se] = (0, t.useState)(!1),
          [le, oe] = (0, t.useState)(!z?.tourHidden),
          [de, ce] = (0, t.useState)(() => Date.now()),
          [ue, ye] = (0, u.useConfirm)(),
          me = (0, k.useSwr)(z ? null : (0, k.scoped)(e.id, 'to-buy'), () =>
            (0, D.listToBuy)(e),
          ),
          he = (0, k.useSwr)(
            z ? null : (0, k.scoped)(e.id, 'to-buy-routines'),
            () => (0, D.listRoutines)(e),
          ),
          fe = (0, k.useSwr)(
            !z && F ? (0, k.scoped)(e.id, 'expense-reminders') : null,
            () => (0, I.listExpenseReminders)(e),
          ),
          ge = z?.toBuy ?? me.data ?? null,
          pe = z?.routines ?? he.data ?? null,
          xe = z?.expenses ?? (F ? (fe.data ?? null) : []),
          be = me.error || he.error || (F ? fe.error : '');
        ((0, t.useEffect)(() => {
          if (z) return;
          let e = !0;
          return (
            r.default
              .getItem(M)
              .then((t) => {
                e && 'hidden' === t && oe(!1);
              })
              .catch(() => {}),
            () => {
              e = !1;
            }
          );
        }, []),
          (0, t.useEffect)(() => {
            const e = setInterval(() => ce(Date.now()), 3e4);
            return () => clearInterval(e);
          }, []),
          (0, t.useEffect)(() => {
            if ('again' === z?.open && ge) {
              const e = (0, B.splitOneTime)(ge, de).sent[0];
              e && X({ item: e, again: !0 });
            }
          }, []));
        const je = async (e) => {
          z ||
            ('weekly' === e
              ? await he.reload()
              : 'pay' === e
                ? await fe.reload()
                : await me.reload());
        };
        async function Le(t, n, i) {
          (te(t.id), ie(''));
          try {
            ('bought' !== n.status || (0, B.isTask)(t) || (await h(t)),
              z || (await (0, D.patchToBuy)(e, t.id, n)),
              X(null),
              (0, y.showToast)(i),
              await je(N(t)));
          } catch (e) {
            ie(
              (0, A.L)(
                '\xab{name}\xbb \u0630\u062e\u06cc\u0631\u0647 \u0646\u0634\u062f: {reason}',
                { name: t.name, reason: (0, w.message)(e) },
              ),
            );
          } finally {
            te('');
          }
        }
        const Se = (0, t.useMemo)(
            () => (0, B.splitOneTime)(ge || [], de),
            [ge, de],
          ),
          we = (t) =>
            (0, v.validRoutine)(t)
              ? (0, v.routineSlots)(t, e.timezone || 'Asia/Tehran', de).next
              : NaN,
          ke = (t) =>
            (0, H.nextReminderTime)(t, e.timezone || 'Asia/Tehran', de),
          De = (e) => {
            const t = (0, B.isTask)(e);
            return (0, W.jsxs)(W.Fragment, {
              children: [
                (0, W.jsx)(p.SmallKey, {
                  testID: 'item-done',
                  kind: 'tint',
                  icon: 'check',
                  label: t
                    ? (0, A.L)('\u0627\u0646\u062c\u0627\u0645 \u0634\u062f')
                    : e.quantity
                      ? (0, A.L)(
                          '\u062e\u0631\u06cc\u062f\u0645\u061b \u0628\u0647 \u0645\u0648\u062c\u0648\u062f\u06cc',
                        )
                      : (0, A.L)('\u062e\u0631\u06cc\u062f\u0645'),
                  disabled: Z === e.id,
                  onPress: () =>
                    Le(
                      e,
                      { status: 'bought' },
                      t
                        ? (0, A.L)(
                            '\xab{name}\xbb \u0627\u0646\u062c\u0627\u0645 \u0634\u062f.',
                            { name: e.name },
                          )
                        : e.quantity
                          ? (0, A.L)(
                              '\xab{name}\xbb \u062e\u0631\u06cc\u062f\u0647 \u0634\u062f \u0648 \u0628\u0647 \u0645\u0648\u062c\u0648\u062f\u06cc \u0627\u0636\u0627\u0641\u0647 \u0634\u062f.',
                              { name: e.name },
                            )
                          : (0, A.L)(
                              '\xab{name}\xbb \u062e\u0631\u06cc\u062f\u0647 \u0634\u062f.',
                              { name: e.name },
                            ),
                    ),
                }),
                (0, W.jsx)(p.SmallKey, {
                  testID: 'item-time',
                  icon: 'clock',
                  label: e.remindAt
                    ? (0, A.L)(
                        '\u062a\u063a\u06cc\u06cc\u0631 \u0632\u0645\u0627\u0646',
                      )
                    : (0, A.L)('\u0632\u0645\u0627\u0646'),
                  disabled: Z === e.id,
                  onPress: () => X({ item: e, again: !1 }),
                }),
                (0, W.jsx)(p.SmallKey, {
                  testID: 'item-cancel',
                  kind: 'text',
                  label: (0, A.L)('\u0644\u063a\u0648'),
                  disabled: Z === e.id,
                  onPress: () =>
                    ue({
                      title: (0, A.L)(
                        '\u0644\u063a\u0648 \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc',
                      ),
                      text: (0, A.L)(
                        '\xab{name}\xbb \u0627\u0632 \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc\u200c\u0647\u0627 \u0628\u0631\u062f\u0627\u0634\u062a\u0647 \u0634\u0648\u062f\u061f',
                        { name: e.name },
                      ),
                      ok: (0, A.L)('\u0644\u063a\u0648 \u06a9\u0646'),
                      run: () =>
                        Le(
                          e,
                          { status: 'cancelled' },
                          (0, A.L)(
                            '\xab{name}\xbb \u0628\u0631\u062f\u0627\u0634\u062a\u0647 \u0634\u062f.',
                            { name: e.name },
                          ),
                        ),
                    }),
                }),
              ],
            });
          },
          Ie = (e) =>
            (0, B.isTask)(e)
              ? (0, A.L)('\u06a9\u0627\u0631')
              : 'routine' === e.note
                ? (0, A.L)(
                    '\u0627\u0632 \u06a9\u0627\u0631 \u0647\u0641\u062a\u06af\u06cc',
                  )
                : (0, A.L)('\u0644\u06cc\u0633\u062a \u062e\u0631\u06cc\u062f'),
          Ce = (e) => ({
            key: e.id,
            kind: N(e),
            at: e.remindAt ? Date.parse(e.remindAt) : 0,
            node: (0, W.jsx)(
              U,
              {
                testID: 'reminder-item',
                kind: N(e),
                title: e.name,
                qty: O(e),
                sub: [e.remindAt ? q(e.remindAt) : '', Ie(e)]
                  .filter(Boolean)
                  .join(' \xb7 '),
                actions: De(e),
              },
              e.id,
            ),
          }),
          ve = (t) => {
            const n = we(t);
            return {
              key: 'r' + t.id,
              kind: 'weekly',
              at: Number.isFinite(n) ? n : 1 / 0,
              node: (0, W.jsx)(
                U,
                {
                  testID: 'routine-item',
                  kind: 'weekly',
                  faded: !t.active,
                  title: t.name,
                  qty: O(t),
                  sub:
                    t.active && Number.isFinite(n)
                      ? (0, A.L)('\u0647\u0631 {day}', {
                          day: _()[t.weekday],
                        }) +
                        ' \xb7 ' +
                        (0, A.L)('\u0628\u0639\u062f\u06cc: {when}', {
                          when: (0, B.whenText)(new Date(n), new Date(de)),
                        })
                      : (0, A.L)(
                          '\u0647\u0631 {day} \u0633\u0627\u0639\u062a {time}',
                          {
                            day: _()[t.weekday],
                            time: (0, B.clockText)(
                              (0, B.fromMinuteOfDay)(t.minute),
                            ),
                          },
                        ) +
                        ' \xb7 ' +
                        (0, A.L)('\u062e\u0627\u0645\u0648\u0634'),
                  side: (0, W.jsx)(a.default, {
                    testID: 'routine-active',
                    accessibilityLabel: (0, A.L)(
                      '\u0631\u0648\u0634\u0646 \u06cc\u0627 \u062e\u0627\u0645\u0648\u0634',
                    ),
                    disabled: Z === t.id,
                    value: t.active,
                    onValueChange: (n) => {
                      (async () => {
                        (te(t.id), ie(''));
                        try {
                          (z || (await (0, D.setRoutineActive)(e, t.id, n)),
                            await je('weekly'));
                        } catch (e) {
                          ie(
                            (0, A.L)(
                              '\xab{name}\xbb \u0630\u062e\u06cc\u0631\u0647 \u0646\u0634\u062f: {reason}',
                              { name: t.name, reason: (0, w.message)(e) },
                            ),
                          );
                        } finally {
                          te('');
                        }
                      })();
                    },
                    trackColor: { false: T.line, true: T.accent },
                    thumbColor: T.surface,
                    activeThumbColor: T.surface,
                  }),
                  actions: (0, W.jsx)(p.SmallKey, {
                    testID: 'routine-remove',
                    kind: 'text',
                    icon: 'close',
                    label: (0, A.L)('\u062d\u0630\u0641'),
                    disabled: Z === t.id,
                    onPress: () =>
                      ue({
                        title: (0, A.L)(
                          '\u062d\u0630\u0641 \u06a9\u0627\u0631 \u0647\u0641\u062a\u06af\u06cc',
                        ),
                        text: (0, A.L)(
                          '\xab{name}\xbb \u062f\u06cc\u06af\u0631 \u0647\u0631 \u0647\u0641\u062a\u0647 \u0628\u0647 \u0644\u06cc\u0633\u062a \u0646\u0645\u06cc\u200c\u0622\u06cc\u062f. \u062d\u0630\u0641 \u0634\u0648\u062f\u061f',
                          { name: t.name },
                        ),
                        ok: (0, A.L)('\u062d\u0630\u0641'),
                        run: async () => {
                          te(t.id);
                          try {
                            (z || (await (0, D.removeRoutine)(e, t.id)),
                              (0, y.showToast)(
                                (0, A.L)(
                                  '\u06a9\u0627\u0631 \u0647\u0641\u062a\u06af\u06cc \u062d\u0630\u0641 \u0634\u062f.',
                                ),
                              ),
                              await je('weekly'));
                          } catch (e) {
                            ie(
                              (0, A.L)(
                                '\u062d\u0630\u0641 \u0646\u0634\u062f: {reason}',
                                { reason: (0, w.message)(e) },
                              ),
                            );
                          } finally {
                            te('');
                          }
                        },
                      }),
                  }),
                },
                'r' + t.id,
              ),
            };
          },
          ze = (t) => {
            const n = ke(t),
              i =
                (t.label.trim() || H.expenseCategoryFa[t.category]) +
                (t.amountToman
                  ? '\u060c ' +
                    (0, R.money)(t.amountToman, { full: !0, hint: !1 })
                  : ''),
              a =
                'monthly' === t.repeat
                  ? (0, A.L)(
                      '\u0647\u0631 \u0645\u0627\u0647 \u0631\u0648\u0632 {day}',
                      { day: (0, A.localDigits)(String(t.monthDay || 1)) },
                    )
                  : 'weekly' === t.repeat
                    ? (0, A.L)('\u0647\u0631 {day}', {
                        day: _()[t.weekday || 0],
                      })
                    : (0, A.L)('\u06cc\u06a9 \u0628\u0627\u0631');
            return {
              key: 'p' + t.id,
              kind: 'pay',
              at: n ?? -1,
              node: (0, W.jsx)(
                U,
                {
                  testID: 'pay-item',
                  kind: 'pay',
                  faded: void 0 === n,
                  title: i,
                  sub:
                    a +
                    ' \xb7 ' +
                    (void 0 !== n
                      ? (0, A.L)('\u0628\u0639\u062f\u06cc: {when}', {
                          when: (0, B.whenText)(new Date(n), new Date(de)),
                        })
                      : (0, A.L)(
                          '\u0645\u0648\u0639\u062f\u0634 \u06af\u0630\u0634\u062a',
                        )),
                  actions: (0, W.jsxs)(W.Fragment, {
                    children: [
                      (0, W.jsx)(p.SmallKey, {
                        testID: 'pay-record',
                        kind: 'tint',
                        icon: 'wallet',
                        label: (0, A.L)(
                          '\u067e\u0631\u062f\u0627\u062e\u062a \u06a9\u0631\u062f\u0645\u060c \u062b\u0628\u062a \u06a9\u0646',
                        ),
                        onPress: () => x(t.id),
                      }),
                      (0, W.jsx)(p.SmallKey, {
                        testID: 'pay-remove',
                        kind: 'text',
                        icon: 'close',
                        label: (0, A.L)('\u062d\u0630\u0641'),
                        onPress: () =>
                          ue({
                            title: (0, A.L)(
                              '\u062d\u0630\u0641 \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc',
                            ),
                            text: (0, A.L)(
                              '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \xab{name}\xbb \u062d\u0630\u0641 \u0634\u0648\u062f\u061f \u0647\u0632\u06cc\u0646\u0647\u200c\u0647\u0627\u06cc \u062b\u0628\u062a\u200c\u0634\u062f\u0647 \u0645\u06cc\u200c\u0645\u0627\u0646\u0646\u062f.',
                              {
                                name:
                                  t.label.trim() ||
                                  H.expenseCategoryFa[t.category],
                              },
                            ),
                            ok: (0, A.L)(
                              '\u062d\u0630\u0641 \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc',
                            ),
                            run: async () => {
                              try {
                                (z ||
                                  (await (0, I.deleteExpenseReminder)(e, t.id)),
                                  (0, y.showToast)(
                                    (0, A.L)(
                                      '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u062d\u0630\u0641 \u0634\u062f.',
                                    ),
                                  ),
                                  await je('pay'));
                              } catch (e) {
                                ie(
                                  (0, A.L)(
                                    '\u062d\u0630\u0641 \u0646\u0634\u062f: {reason}',
                                    { reason: (0, w.message)(e) },
                                  ),
                                );
                              }
                            },
                          }),
                      }),
                    ],
                  }),
                },
                'p' + t.id,
              ),
            };
          },
          Te = [
            ...Se.upcoming.map(Ce),
            ...(pe || []).filter((e) => e.active).map(ve),
            ...(xe || []).filter((e) => void 0 !== ke(e)).map(ze),
          ].sort((e, t) => e.at - t.at),
          He = Se.list.map(Ce),
          Re = [
            ...Se.sent.map((e) => {
              const t = (0, B.isTask)(e);
              return {
                key: e.id,
                kind: N(e),
                at: Date.parse(e.remindAt),
                node: (0, W.jsx)(
                  U,
                  {
                    testID: 'reminder-sent',
                    faded: !0,
                    kind: N(e),
                    title: e.name,
                    qty: O(e),
                    sub:
                      (0, A.L)(
                        '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u0634\u062f: {when}',
                        {
                          when: (0, B.pastText)(
                            new Date(e.remindAt),
                            new Date(de),
                          ),
                        },
                      ) +
                      ' \xb7 ' +
                      Ie(e),
                    actions: (0, W.jsxs)(W.Fragment, {
                      children: [
                        (0, W.jsx)(p.SmallKey, {
                          testID: 'sent-again',
                          kind: 'tint',
                          icon: 'bell',
                          label: (0, A.L)(
                            '\u062f\u0648\u0628\u0627\u0631\u0647 \u06cc\u0627\u062f\u0645 \u0628\u0646\u062f\u0627\u0632',
                          ),
                          disabled: Z === e.id,
                          onPress: () => X({ item: e, again: !0 }),
                        }),
                        (0, W.jsx)(p.SmallKey, {
                          testID: 'sent-done',
                          icon: 'check',
                          label: t
                            ? (0, A.L)(
                                '\u0627\u0646\u062c\u0627\u0645 \u0634\u062f',
                              )
                            : (0, A.L)('\u062e\u0631\u06cc\u062f\u0645'),
                          disabled: Z === e.id,
                          onPress: () =>
                            Le(
                              e,
                              { status: 'bought' },
                              t
                                ? (0, A.L)(
                                    '\xab{name}\xbb \u0627\u0646\u062c\u0627\u0645 \u0634\u062f.',
                                    { name: e.name },
                                  )
                                : e.quantity
                                  ? (0, A.L)(
                                      '\xab{name}\xbb \u062e\u0631\u06cc\u062f\u0647 \u0634\u062f \u0648 \u0628\u0647 \u0645\u0648\u062c\u0648\u062f\u06cc \u0627\u0636\u0627\u0641\u0647 \u0634\u062f.',
                                      { name: e.name },
                                    )
                                  : (0, A.L)(
                                      '\xab{name}\xbb \u062e\u0631\u06cc\u062f\u0647 \u0634\u062f.',
                                      { name: e.name },
                                    ),
                            ),
                        }),
                        (0, W.jsx)(p.SmallKey, {
                          testID: 'sent-skip',
                          kind: 'text',
                          label: (0, A.L)(
                            '\u0644\u0627\u0632\u0645 \u0646\u0634\u062f',
                          ),
                          disabled: Z === e.id,
                          onPress: () =>
                            Le(
                              e,
                              { status: 'cancelled' },
                              (0, A.L)(
                                '\u0628\u0627\u0634\u0647\u061b \xab{name}\xbb \u06a9\u0646\u0627\u0631 \u0631\u0641\u062a.',
                                { name: e.name },
                              ),
                            ),
                        }),
                      ],
                    }),
                  },
                  e.id,
                ),
              };
            }),
            ...(xe || []).filter((e) => void 0 === ke(e)).map(ze),
          ],
          Ae = (pe || []).filter((e) => !e.active).map(ve),
          Pe = (e) => ('all' === V ? e : e.filter((e) => e.kind === V)),
          Be = {
            buy: [...Se.upcoming, ...Se.list, ...Se.sent].filter(
              (e) => !(0, B.isTask)(e),
            ).length,
            task: [...Se.upcoming, ...Se.list, ...Se.sent].filter(B.isTask)
              .length,
            weekly: (pe || []).length,
            pay: (xe || []).length,
          },
          We = { upcoming: Pe(Te), list: Pe(He), sent: Pe(Re), off: Pe(Ae) },
          Fe = Se.done.filter((e) => 'all' === V || N(e) === V).slice(0, 10),
          Ve = null === ge || null === pe || null === xe,
          Ee = !(
            Ve ||
            We.upcoming.length ||
            We.list.length ||
            We.sent.length ||
            We.off.length
          ),
          Oe = [
            {
              value: 'all',
              label: (0, A.L)('\u0647\u0645\u0647'),
              testID: 'filter-all',
            },
            {
              value: 'buy',
              label: (0, A.L)('\u062e\u0631\u06cc\u062f'),
              testID: 'filter-buy',
              badge: Be.buy ? E(Be.buy) : void 0,
            },
            ...(F
              ? [
                  {
                    value: 'pay',
                    label: (0, A.L)('\u067e\u0631\u062f\u0627\u062e\u062a'),
                    testID: 'filter-pay',
                    badge: Be.pay ? E(Be.pay) : void 0,
                  },
                ]
              : []),
            {
              value: 'weekly',
              label: (0, A.L)('\u0647\u0631 \u0647\u0641\u062a\u0647'),
              testID: 'filter-weekly',
              badge: Be.weekly ? E(Be.weekly) : void 0,
            },
            {
              value: 'task',
              label: (0, A.L)('\u06a9\u0627\u0631\u0647\u0627'),
              testID: 'filter-task',
              badge: Be.task ? E(Be.task) : void 0,
            },
          ],
          Me = Te.length;
        return (0, W.jsxs)(s.default, {
          style: { flex: 1 },
          children: [
            (0, W.jsxs)(l.ScrollView, {
              testID: 'reminders',
              keyboardShouldPersistTaps: 'handled',
              contentContainerStyle: {
                gap: 12,
                paddingBottom: 24,
                width: '100%',
                maxWidth: P ? 760 : 620,
                alignSelf: 'center',
              },
              children: [
                (0, W.jsxs)(s.default, {
                  style: {
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    gap: 8,
                  },
                  children: [
                    (0, W.jsxs)(s.default, {
                      style: { flex: 1, minWidth: 0 },
                      children: [
                        (0, W.jsx)(o.Copy, {
                          accessibilityRole: 'header',
                          style: {
                            fontSize: 24,
                            lineHeight: 34,
                            fontFamily: 'Vazirmatn_700Bold',
                          },
                          children: (0, A.L)(
                            '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc\u200c\u0647\u0627',
                          ),
                        }),
                        (0, W.jsx)(o.Copy, {
                          testID: 'reminders-summary',
                          style: {
                            fontSize: 12.5,
                            lineHeight: 20,
                            color: T.muted,
                          },
                          children: Ve
                            ? (0, A.L)(
                                '\u062f\u0631 \u062d\u0627\u0644 \u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc\u2026',
                              )
                            : Me
                              ? (0, A.L)(
                                  '{n} \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u067e\u06cc\u0634 \u0631\u0648',
                                  { n: E(Me) },
                                )
                              : (0, A.L)(
                                  '\u0641\u0639\u0644\u0627\u064b \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u067e\u06cc\u0634 \u0631\u0648 \u0646\u062f\u0627\u0631\u06cc',
                                ),
                        }),
                      ],
                    }),
                    !!b &&
                      (0, W.jsx)(p.SmallKey, {
                        testID: 'reminders-learn',
                        icon: 'play',
                        label: (0, A.L)('\u0622\u0645\u0648\u0632\u0634'),
                        onPress: b,
                      }),
                    (0, W.jsx)(p.SmallKey, {
                      testID: 'reminders-close',
                      label: (0, A.L)('\u0628\u0633\u062a\u0646'),
                      onPress: f,
                    }),
                  ],
                }),
                le &&
                  (0, W.jsx)(re, {
                    onLearn: b,
                    onClose: () => {
                      (oe(!1), r.default.setItem(M, 'hidden').catch(() => {}));
                    },
                  }),
                (0, W.jsx)(o.Button, {
                  testID: 'reminders-new',
                  onPress: () => $(!0),
                  children: (0, A.L)(
                    '+ \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u062a\u0627\u0632\u0647',
                  ),
                }),
                (0, W.jsx)(o.Segmented, {
                  role: 'tab',
                  scroll: !0,
                  value: V,
                  onChange: Q,
                  height: 44,
                  items: Oe,
                }),
                !(!ne && !be) &&
                  (0, W.jsxs)(s.default, {
                    style: {
                      flexDirection: 'row-reverse',
                      gap: 8,
                      padding: 12,
                      borderRadius: 14,
                      backgroundColor: T.soft,
                    },
                    children: [
                      (0, W.jsx)(d.Icon, {
                        name: 'alert',
                        size: 17,
                        color: T.danger,
                      }),
                      (0, W.jsx)(o.Copy, {
                        accessibilityRole: 'alert',
                        style: {
                          flex: 1,
                          fontSize: 13,
                          lineHeight: 22,
                          color: T.danger,
                        },
                        children:
                          ne ||
                          (0, A.L)(
                            '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc\u200c\u0647\u0627 \u0628\u0627\u0632 \u0646\u0634\u062f: {reason}',
                            { reason: be },
                          ),
                      }),
                    ],
                  }),
                Ve &&
                  !be &&
                  (0, W.jsx)(o.Copy, {
                    style: {
                      fontSize: 13,
                      color: T.muted,
                      textAlign: 'center',
                      paddingVertical: 12,
                    },
                    children: (0, A.L)(
                      '\u062f\u0631 \u062d\u0627\u0644 \u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc\u2026',
                    ),
                  }),
                Ee &&
                  (0, W.jsxs)(s.default, {
                    testID: 'reminders-empty',
                    style: {
                      alignItems: 'center',
                      gap: 8,
                      paddingVertical: 22,
                      paddingHorizontal: 16,
                      borderRadius: 18,
                      borderWidth: i.default.hairlineWidth,
                      borderColor: T.line,
                      backgroundColor: T.surface,
                    },
                    children: [
                      (0, W.jsx)(s.default, {
                        style: {
                          width: 48,
                          height: 48,
                          borderRadius: 24,
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: T.soft,
                        },
                        children: (0, W.jsx)(d.Icon, {
                          name: 'bell',
                          size: 22,
                          color: T.muted,
                        }),
                      }),
                      (0, W.jsx)(o.Copy, {
                        style: {
                          fontSize: 15,
                          lineHeight: 24,
                          textAlign: 'center',
                          fontFamily: 'Vazirmatn_600SemiBold',
                        },
                        children:
                          'all' === V
                            ? (0, A.L)(
                                '\u0647\u0646\u0648\u0632 \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u0646\u062f\u0627\u0631\u06cc.',
                              )
                            : (0, A.L)(
                                '\u062f\u0631 \u0627\u06cc\u0646 \u062f\u0633\u062a\u0647 \u0686\u06cc\u0632\u06cc \u0646\u06cc\u0633\u062a.',
                              ),
                      }),
                      (0, W.jsx)(o.Copy, {
                        style: {
                          fontSize: 12.5,
                          lineHeight: 21,
                          textAlign: 'center',
                          color: T.muted,
                          maxWidth: 320,
                        },
                        children: (0, A.L)(
                          '\xab+ \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u062a\u0627\u0632\u0647\xbb \u0631\u0627 \u0628\u0632\u0646 \u0648 \u06cc\u06a9\u06cc \u0627\u0632 \u0622\u0645\u0627\u062f\u0647\u200c\u0647\u0627 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646.',
                        ),
                      }),
                    ],
                  }),
                !!We.upcoming.length &&
                  (0, W.jsxs)(s.default, {
                    testID: 'reminders-upcoming',
                    style: { gap: 8 },
                    children: [
                      (0, W.jsx)(K, {
                        title: (0, A.L)('\u067e\u06cc\u0634 \u0631\u0648'),
                        n: We.upcoming.length,
                      }),
                      We.upcoming.map((e) => e.node),
                    ],
                  }),
                !!We.list.length &&
                  (0, W.jsxs)(s.default, {
                    testID: 'reminders-list',
                    style: { gap: 8 },
                    children: [
                      (0, W.jsx)(K, {
                        title: (0, A.L)(
                          '\u062f\u0631 \u0644\u06cc\u0633\u062a \u062e\u0631\u06cc\u062f',
                        ),
                        n: We.list.length,
                        hint: (0, A.L)(
                          '\u0628\u062f\u0648\u0646 \u0633\u0627\u0639\u062a',
                        ),
                      }),
                      We.list.map((e) => e.node),
                    ],
                  }),
                !!We.sent.length &&
                  (0, W.jsxs)(s.default, {
                    testID: 'reminders-sent',
                    style: {
                      gap: 8,
                      marginTop: 4,
                      paddingTop: 12,
                      borderTopWidth: 1,
                      borderColor: T.line,
                    },
                    children: [
                      (0, W.jsx)(K, {
                        title: (0, A.L)(
                          '\u0627\u0631\u0633\u0627\u0644\u200c\u0634\u062f\u0647',
                        ),
                        n: We.sent.length,
                        hint: (0, A.L)(
                          '\u0648\u0642\u062a\u0634 \u06af\u0630\u0634\u062a',
                        ),
                      }),
                      We.sent.map((e) => e.node),
                    ],
                  }),
                !!We.off.length &&
                  (0, W.jsxs)(s.default, {
                    testID: 'reminders-off',
                    style: { gap: 8 },
                    children: [
                      (0, W.jsx)(K, {
                        title: (0, A.L)('\u062e\u0627\u0645\u0648\u0634'),
                        n: We.off.length,
                      }),
                      We.off.map((e) => e.node),
                    ],
                  }),
                !!Fe.length &&
                  (0, W.jsxs)(s.default, {
                    style: { gap: 8 },
                    children: [
                      (0, W.jsxs)(n.default, {
                        testID: 'reminders-done-toggle',
                        accessibilityRole: 'button',
                        accessibilityState: { expanded: ae },
                        onPress: () => se(!ae),
                        style: ({ pressed: e }) => ({
                          flexDirection: 'row-reverse',
                          alignItems: 'center',
                          gap: 8,
                          minHeight: 44,
                          paddingHorizontal: 12,
                          borderRadius: 12,
                          opacity: e ? 0.7 : 1,
                        }),
                        children: [
                          (0, W.jsx)(d.Icon, {
                            name: 'check',
                            size: 15,
                            color: T.muted,
                          }),
                          (0, W.jsx)(o.Copy, {
                            style: {
                              flex: 1,
                              fontSize: 13,
                              lineHeight: 22,
                              color: T.muted,
                            },
                            children: (0, A.L)(
                              '\u062a\u0645\u0627\u0645\u200c\u0634\u062f\u0647\u200c\u0647\u0627 ({n})',
                              { n: E(Fe.length) },
                            ),
                          }),
                          (0, W.jsx)(o.Copy, {
                            style: {
                              fontSize: 13,
                              lineHeight: 22,
                              color: T.accent,
                            },
                            children: ae
                              ? (0, A.L)('\u0628\u0633\u062a\u0646')
                              : (0, A.L)('\u062f\u06cc\u062f\u0646'),
                          }),
                        ],
                      }),
                      ae &&
                        (0, W.jsx)(s.default, {
                          style: {
                            borderRadius: 16,
                            borderWidth: i.default.hairlineWidth,
                            borderColor: T.line,
                            backgroundColor: T.surface,
                            paddingHorizontal: 12,
                          },
                          children: Fe.map((e, t) =>
                            (0, W.jsxs)(
                              s.default,
                              {
                                style: {
                                  flexDirection: 'row-reverse',
                                  alignItems: 'center',
                                  gap: 8,
                                  paddingVertical: 10,
                                  borderTopWidth: t
                                    ? i.default.hairlineWidth
                                    : 0,
                                  borderColor: T.line,
                                },
                                children: [
                                  (0, W.jsx)(d.Icon, {
                                    name:
                                      'bought' === e.status ? 'check' : 'close',
                                    size: 14,
                                    color:
                                      'bought' === e.status
                                        ? T.success
                                        : T.muted,
                                  }),
                                  (0, W.jsxs)(o.Copy, {
                                    numberOfLines: 1,
                                    style: {
                                      flex: 1,
                                      fontSize: 13,
                                      lineHeight: 21,
                                      color: T.muted,
                                    },
                                    children: [
                                      e.name,
                                      e.quantity ? ' \u2014 ' + O(e) : '',
                                    ],
                                  }),
                                  (0, W.jsx)(o.Copy, {
                                    style: {
                                      fontSize: 12,
                                      lineHeight: 20,
                                      color: T.muted,
                                    },
                                    children:
                                      'bought' === e.status
                                        ? (0, B.isTask)(e)
                                          ? (0, A.L)(
                                              '\u0627\u0646\u062c\u0627\u0645 \u0634\u062f',
                                            )
                                          : (0, A.L)(
                                              '\u062e\u0631\u06cc\u062f\u0647 \u0634\u062f',
                                            )
                                        : (0, A.L)(
                                            '\u0644\u0627\u0632\u0645 \u0646\u0634\u062f',
                                          ),
                                  }),
                                ],
                              },
                              e.id,
                            ),
                          ),
                        }),
                    ],
                  }),
              ],
            }),
            (0, W.jsx)(ee, {
              visible: G,
              shop: e,
              products: c,
              payAllowed: F,
              start: 'add-buy' === z?.open ? 'buy' : null,
              onClose: () => $(!1),
              onSaved: async (e) => {
                ($(!1),
                  (0, y.showToast)(e.said),
                  Q((t) => ('all' === t || t === e.kind ? t : 'all')),
                  await je(e.kind));
              },
            }),
            (0, W.jsx)(Y, {
              target: J,
              onClose: () => X(null),
              onSave: async (e, t, n) => {
                await Le(e, { remindAt: t }, n);
              },
            }),
            ye,
            (0, W.jsx)(y.ToastHost, {}),
          ],
        });
      }));
    var t = _r(_d[0]),
      n = e(_r(_d[1])),
      i = e(_r(_d[2])),
      a = e(_r(_d[3])),
      s = e(_r(_d[4])),
      l = _r(_d[5]),
      r = e(_r(_d[6])),
      o = _r(_d[7]),
      d = _r(_d[8]),
      c = _r(_d[9]),
      u = _r(_d[10]),
      y = _r(_d[11]),
      h = _r(_d[12]),
      f = _r(_d[13]),
      p = _r(_d[14]),
      x = _r(_d[15]),
      b = _r(_d[16]),
      j = _r(_d[17]),
      L = _r(_d[18]),
      S = _r(_d[19]),
      w = _r(_d[20]),
      k = _r(_d[21]),
      D = _r(_d[22]),
      I = _r(_d[23]),
      C = _r(_d[24]),
      v = _r(_d[25]),
      z = _r(_d[26]),
      T = _r(_d[27]),
      H = _r(_d[28]),
      R = _r(_d[29]),
      A = _r(_d[30]),
      P = _r(_d[31]),
      B = _r(_d[32]),
      W = _r(_d[33]);
    const F = { buy: 'cart', task: 'bulb', weekly: 'refresh', pay: 'wallet' },
      V = [6, 0, 1, 2, 3, 4, 5],
      _ = () => [
        (0, A.L)('\u06cc\u06a9\u0634\u0646\u0628\u0647'),
        (0, A.L)('\u062f\u0648\u0634\u0646\u0628\u0647'),
        (0, A.L)('\u0633\u0647\u200c\u0634\u0646\u0628\u0647'),
        (0, A.L)('\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647'),
        (0, A.L)('\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647'),
        (0, A.L)('\u062c\u0645\u0639\u0647'),
        (0, A.L)('\u0634\u0646\u0628\u0647'),
      ],
      E = (e) => e.toLocaleString((0, A.numberLocale)()),
      O = (e) =>
        e.quantity
          ? `${E(e.quantity)} ${j.notebookFa.units[e.unit || 'piece']}`
          : '',
      M = 'anbar.reminders.tour',
      N = (e) => ((0, B.isTask)(e) ? 'task' : 'buy'),
      q = (e) => (e ? (0, B.whenText)(new Date(e)) : '');
    function K({ title: e, n: t, hint: n }) {
      const { colors: i } = (0, S.useTheme)();
      return (0, W.jsxs)(s.default, {
        style: {
          flexDirection: 'row-reverse',
          alignItems: 'baseline',
          gap: 8,
          paddingHorizontal: 4,
          marginTop: 6,
        },
        children: [
          (0, W.jsx)(o.Copy, {
            accessibilityRole: 'header',
            style: {
              fontSize: 14,
              lineHeight: 22,
              fontFamily: 'Vazirmatn_700Bold',
            },
            children: e,
          }),
          (0, W.jsx)(o.Copy, {
            style: { fontSize: 12, lineHeight: 20, color: i.muted },
            children: E(t),
          }),
          !!n &&
            (0, W.jsx)(o.Copy, {
              style: {
                flex: 1,
                fontSize: 11,
                lineHeight: 18,
                color: i.muted,
                textAlign: 'left',
              },
              children: n,
            }),
        ],
      });
    }
    function U({
      testID: e,
      kind: t,
      title: n,
      sub: a,
      qty: l,
      faded: r,
      actions: c,
      side: u,
    }) {
      const { colors: y } = (0, S.useTheme)();
      return (0, W.jsxs)(s.default, {
        testID: e,
        style: {
          gap: 10,
          paddingHorizontal: 12,
          paddingVertical: 11,
          borderRadius: 16,
          borderWidth: i.default.hairlineWidth,
          borderColor: y.line,
          backgroundColor: r ? y.soft : y.surface,
        },
        children: [
          (0, W.jsxs)(s.default, {
            style: {
              flexDirection: 'row-reverse',
              alignItems: 'center',
              gap: 10,
              opacity: r ? 0.72 : 1,
            },
            children: [
              (0, W.jsx)(s.default, {
                style: {
                  width: 36,
                  height: 36,
                  borderRadius: 11,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: r ? y.surface : y.accentSoft,
                },
                children: (0, W.jsx)(d.Icon, {
                  name: F[t],
                  size: 18,
                  color: r ? y.muted : y.accent,
                }),
              }),
              (0, W.jsxs)(s.default, {
                style: { flex: 1, minWidth: 0 },
                children: [
                  (0, W.jsx)(o.Copy, {
                    numberOfLines: 2,
                    style: {
                      fontSize: 15,
                      lineHeight: 23,
                      fontFamily: 'Vazirmatn_600SemiBold',
                    },
                    children: n,
                  }),
                  (0, W.jsx)(o.Copy, {
                    numberOfLines: 2,
                    style: { fontSize: 12, lineHeight: 19, color: y.muted },
                    children: a,
                  }),
                ],
              }),
              !!l &&
                (0, W.jsx)(s.default, {
                  style: {
                    paddingHorizontal: 9,
                    paddingVertical: 3,
                    borderRadius: 9,
                    backgroundColor: r ? y.surface : y.soft,
                  },
                  children: (0, W.jsx)(o.Copy, {
                    style: {
                      fontSize: 12,
                      lineHeight: 20,
                      fontFamily: 'Vazirmatn_600SemiBold',
                    },
                    children: l,
                  }),
                }),
              u,
            ],
          }),
          !!c &&
            (0, W.jsx)(s.default, {
              style: { flexDirection: 'row-reverse', flexWrap: 'wrap', gap: 8 },
              children: c,
            }),
        ],
      });
    }
    function Q({ children: e }) {
      return (0, W.jsx)(o.Copy, {
        style: {
          fontSize: 13,
          lineHeight: 20,
          fontFamily: 'Vazirmatn_600SemiBold',
        },
        children: e,
      });
    }
    function G({ text: e, error: t, testID: n }) {
      const { colors: i } = (0, S.useTheme)();
      return (0, W.jsxs)(s.default, {
        testID: n,
        style: {
          flexDirection: 'row-reverse',
          alignItems: 'center',
          gap: 8,
          padding: 12,
          borderRadius: 14,
          backgroundColor: t ? i.soft : i.accentSoft,
        },
        children: [
          (0, W.jsx)(d.Icon, {
            name: t ? 'alert' : 'bell',
            size: 17,
            color: t ? i.danger : i.accent,
          }),
          (0, W.jsx)(o.Copy, {
            accessibilityRole: t ? 'alert' : void 0,
            style: {
              flex: 1,
              fontSize: 13,
              lineHeight: 22,
              color: t ? i.danger : i.text,
              fontFamily: 'Vazirmatn_600SemiBold',
            },
            children: t || e,
          }),
        ],
      });
    }
    const $ = () => [
      {
        value: 0,
        label: (0, A.L)('\u0627\u0645\u0631\u0648\u0632'),
        testID: 'day-0',
      },
      {
        value: 1,
        label: (0, A.L)('\u0641\u0631\u062f\u0627'),
        testID: 'day-1',
      },
      {
        value: 2,
        label: (0, A.L)('\u067e\u0633\u200c\u0641\u0631\u062f\u0627'),
        testID: 'day-2',
      },
      {
        value: 'other',
        label: (0, A.L)('\u0631\u0648\u0632 \u062f\u06cc\u06af\u0631'),
        testID: 'day-other',
      },
    ];
    function J(e) {
      const t = new Date();
      t.setDate(t.getDate() + e);
      return { ...(0, P.calParts)(t), hour: 0, minute: 0 };
    }
    function X(e) {
      const [n, i] = (0, t.useState)(e.day),
        [a, l] = (0, t.useState)(() => J(3)),
        [r, d] = (0, t.useState)(e.clock);
      return {
        at: 'other' === n ? (0, B.atDate)(a, r) : (0, B.atDay)(n, r),
        node: (0, W.jsxs)(s.default, {
          style: { gap: 10 },
          children: [
            (0, W.jsx)(Q, {
              children: (0, A.L)(
                '\u06a9\u062f\u0627\u0645 \u0631\u0648\u0632\u061f',
              ),
            }),
            (0, W.jsx)(o.Segmented, {
              value: n,
              onChange: i,
              height: 44,
              items: $(),
            }),
            'other' === n &&
              (0, W.jsx)(f.JalaliDateField, {
                id: 'when-date',
                dateOnly: !0,
                quick: 'none',
                value: a,
                onChange: l,
              }),
            (0, W.jsx)(Q, {
              children: (0, A.L)(
                '\u0686\u0647 \u0633\u0627\u0639\u062a\u06cc\u061f',
              ),
            }),
            (0, W.jsx)(h.TimeWheel, { value: r, onChange: d }),
          ],
        }),
        reset: (e) => {
          (i(e.day), d(e.clock), l(J(3)));
        },
      };
    }
    function Y({ target: e, onClose: n, onSave: i }) {
      const { colors: a } = (0, S.useTheme)(),
        l = X((0, B.againStart)(e?.item.remindAt)),
        [r, d] = (0, t.useState)(!1),
        [u, y] = (0, t.useState)('');
      if (
        ((0, t.useEffect)(() => {
          if (!e) return;
          if ((y(''), e.again))
            return void l.reset((0, B.againStart)(e.item.remindAt));
          const t = e.item.remindAt ? new Date(e.item.remindAt) : null,
            n = t && t.getTime() > Date.now() ? (0, B.dayOffset)(t) : -1;
          l.reset(
            t && n >= 0 && n <= 2
              ? {
                  day: n,
                  clock: { hour: t.getHours(), minute: t.getMinutes() },
                }
              : { day: 1, clock: { hour: 10, minute: 0 } },
          );
        }, [e]),
        !e)
      )
        return (0, W.jsx)(c.Sheet, {
          visible: !1,
          title: '',
          onClose: n,
          children: null,
        });
      const h = (0, B.pastReason)(l.at),
        f = e.again ? (0, B.sayAgain)(l.at) : (0, B.sayNew)(l.at);
      async function p(t, n) {
        (d(!0), y(''));
        try {
          await i(e.item, t, n);
        } catch (e) {
          y(
            (0, A.L)(
              '\u0630\u062e\u06cc\u0631\u0647 \u0646\u0634\u062f: {reason}',
              { reason: (0, w.message)(e) },
            ),
          );
        } finally {
          d(!1);
        }
      }
      return (0, W.jsx)(c.Sheet, {
        visible: !0,
        title: e.again
          ? (0, A.L)(
              '\u062f\u0648\u0628\u0627\u0631\u0647 \u06cc\u0627\u062f\u0645 \u0628\u0646\u062f\u0627\u0632: {name}',
              { name: e.item.name },
            )
          : (0, A.L)(
              '\u0632\u0645\u0627\u0646 \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc: {name}',
              { name: e.item.name },
            ),
        onClose: n,
        children: (0, W.jsxs)(s.default, {
          testID: 'when-sheet',
          style: { gap: 14 },
          children: [
            e.again &&
              !!e.item.remindAt &&
              (0, W.jsx)(o.Copy, {
                style: { fontSize: 12.5, lineHeight: 21, color: a.muted },
                children: (0, A.L)(
                  '\u0628\u0627\u0631 \u0642\u0628\u0644 {when} \u06cc\u0627\u062f\u062a \u0627\u0646\u062f\u0627\u062e\u062a\u06cc\u0645. \u06a9\u06cc \u062f\u0648\u0628\u0627\u0631\u0647 \u0628\u06af\u0648\u06cc\u06cc\u0645\u061f',
                  { when: (0, B.pastText)(new Date(e.item.remindAt)) },
                ),
              }),
            l.node,
            (0, W.jsx)(G, { testID: 'when-say', text: f, error: h }),
            !!u &&
              (0, W.jsx)(o.Copy, {
                accessibilityRole: 'alert',
                style: { fontSize: 13, lineHeight: 22 },
                children: u,
              }),
            (0, W.jsx)(o.Button, {
              testID: 'when-save',
              disabled: !!h || r,
              onPress: () => p(l.at.toISOString(), f),
              children: e.again
                ? (0, A.L)(
                    '\u062f\u0648\u0628\u0627\u0631\u0647 \u06cc\u0627\u062f\u0645 \u0628\u0646\u062f\u0627\u0632',
                  )
                : (0, A.L)(
                    '\u0630\u062e\u06cc\u0631\u0647\u0654 \u0632\u0645\u0627\u0646',
                  ),
            }),
            !e.again &&
              !!e.item.remindAt &&
              (0, W.jsx)(o.Button, {
                testID: 'when-clear',
                ghost: !0,
                disabled: r,
                onPress: () =>
                  p(
                    null,
                    (0, A.L)(
                      '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \xab{name}\xbb \u0628\u0631\u062f\u0627\u0634\u062a\u0647 \u0634\u062f\u061b \u062f\u0631 \u0644\u06cc\u0633\u062a \u0645\u06cc\u200c\u0645\u0627\u0646\u062f.',
                      { name: e.item.name },
                    ),
                  ),
                children: (0, A.L)(
                  '\u0628\u062f\u0648\u0646 \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc',
                ),
              }),
          ],
        }),
      });
    }
    const Z = (e) => [
      {
        id: 'buy',
        icon: 'cart',
        title: (0, A.L)(
          '\u0627\u06cc\u0646 \u06a9\u0627\u0644\u0627 \u0631\u0648 \u06cc\u0627\u062f\u0645 \u0628\u0646\u062f\u0627\u0632 \u0628\u062e\u0631\u0645',
        ),
        hint: (0, A.L)(
          '\u0627\u0632 \u06a9\u0627\u0644\u0627\u0647\u0627\u06cc \u0645\u063a\u0627\u0632\u0647\u200c\u0627\u062a \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646',
        ),
        kind: 'buy',
      },
      ...(e
        ? [
            {
              id: 'installment',
              icon: 'wallet',
              title: (0, A.L)(
                '\u0627\u06cc\u0646 \u0642\u0633\u0637 \u0631\u0648 \u06cc\u0627\u062f\u0645 \u0628\u0646\u062f\u0627\u0632 \u067e\u0631\u062f\u0627\u062e\u062a \u06a9\u0646\u0645',
              ),
              hint: (0, A.L)(
                '\u0647\u0631 \u0645\u0627\u0647\u060c \u0631\u0648\u0632\u06cc \u06a9\u0647 \u0645\u06cc\u200c\u06af\u0648\u06cc\u06cc',
              ),
              kind: 'pay',
            },
            {
              id: 'bill',
              icon: 'store',
              title: (0, A.L)(
                '\u06a9\u0631\u0627\u06cc\u0647 \u06cc\u0627 \u0642\u0628\u0636',
              ),
              hint: (0, A.L)(
                '\u0627\u062c\u0627\u0631\u0647\u060c \u0628\u0631\u0642\u060c \u0622\u0628\u060c \u06af\u0627\u0632\u060c \u062a\u0644\u0641\u0646',
              ),
              kind: 'pay',
            },
          ]
        : []),
      {
        id: 'supplier',
        icon: 'refresh',
        title: (0, A.L)(
          '\u0633\u0641\u0627\u0631\u0634 \u0647\u0641\u062a\u06af\u06cc \u0627\u0632 \u067e\u062e\u0634\u200c\u06a9\u0646\u0646\u062f\u0647',
        ),
        hint: (0, A.L)(
          '\u0647\u0631 \u0647\u0641\u062a\u0647 \u0647\u0645\u0627\u0646 \u0631\u0648\u0632 \u0648 \u0633\u0627\u0639\u062a',
        ),
        kind: 'weekly',
      },
      {
        id: 'call',
        icon: 'phone',
        title: (0, A.L)(
          '\u0632\u0646\u06af \u0628\u0632\u0646\u0645 \u06cc\u0627 \u067e\u06cc\u06af\u06cc\u0631\u06cc \u06a9\u0646\u0645',
        ),
        hint: (0, A.L)(
          '\u0645\u062b\u0644\u0627\u064b \u0632\u0646\u06af \u0628\u0647 \u067e\u062e\u0634\u200c\u06a9\u0646\u0646\u062f\u0647',
        ),
        kind: 'task',
      },
      {
        id: 'other',
        icon: 'edit',
        title: (0, A.L)(
          '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u062f\u06cc\u06af\u0631',
        ),
        hint: (0, A.L)(
          '\u0647\u0631 \u06a9\u0627\u0631\u06cc \u06a9\u0647 \u0646\u0628\u0627\u06cc\u062f \u06cc\u0627\u062f\u062a \u0628\u0631\u0648\u062f',
        ),
        kind: 'task',
      },
    ];
    function ee({
      visible: e,
      shop: a,
      products: l,
      payAllowed: r,
      start: u,
      onClose: y,
      onSaved: h,
    }) {
      const { colors: f } = (0, S.useTheme)(),
        [p, x] = (0, t.useState)(null),
        b = Z(r);
      (0, t.useEffect)(() => {
        e && x((u && b.find((e) => e.id === u)) || null);
      }, [e, u]);
      return (0, W.jsx)(c.Sheet, {
        visible: e,
        title: p
          ? p.title
          : (0, A.L)(
              '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u062a\u0627\u0632\u0647',
            ),
        onClose: () => {
          (x(null), y());
        },
        children: p
          ? (0, W.jsxs)(s.default, {
              style: { gap: 14 },
              children: [
                (0, W.jsxs)(n.default, {
                  testID: 'preset-back',
                  accessibilityRole: 'button',
                  onPress: () => x(null),
                  style: ({ pressed: e }) => ({
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    gap: 6,
                    alignSelf: 'flex-end',
                    paddingVertical: 4,
                    opacity: e ? 0.7 : 1,
                  }),
                  children: [
                    (0, W.jsx)(s.default, {
                      style: { transform: [{ rotate: '180deg' }] },
                      children: (0, W.jsx)(d.Icon, {
                        name: 'chevron',
                        size: 15,
                        color: f.accent,
                      }),
                    }),
                    (0, W.jsx)(o.Copy, {
                      style: {
                        fontSize: 13,
                        lineHeight: 20,
                        color: f.accent,
                        fontFamily: 'Vazirmatn_600SemiBold',
                      },
                      children: (0, A.L)(
                        '\u0622\u0645\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u062f\u06cc\u06af\u0631',
                      ),
                    }),
                  ],
                }),
                'buy' === p.kind &&
                  (0, W.jsx)(ne, { shop: a, products: l, onSaved: h }),
                'task' === p.kind &&
                  (0, W.jsx)(ie, {
                    shop: a,
                    call: 'call' === p.id,
                    onSaved: h,
                  }),
                'weekly' === p.kind && (0, W.jsx)(ae, { shop: a, onSaved: h }),
                'pay' === p.kind &&
                  (0, W.jsx)(le, {
                    shop: a,
                    category: 'installment' === p.id ? 'loan' : 'rent',
                    onSaved: h,
                  }),
              ],
            })
          : (0, W.jsxs)(s.default, {
              testID: 'reminder-presets',
              style: { gap: 10 },
              children: [
                (0, W.jsx)(o.Copy, {
                  style: { fontSize: 13, lineHeight: 22, color: f.muted },
                  children: (0, A.L)(
                    '\u06cc\u06a9\u06cc \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u061b \u0628\u0642\u06cc\u0647\u200c\u0627\u0634 \u0686\u0646\u062f \u062b\u0627\u0646\u06cc\u0647 \u0627\u0633\u062a.',
                  ),
                }),
                (0, W.jsx)(s.default, {
                  style: {
                    flexDirection: 'row-reverse',
                    flexWrap: 'wrap',
                    gap: 8,
                  },
                  children: b.map((e) =>
                    (0, W.jsxs)(
                      n.default,
                      {
                        testID: 'preset-' + e.id,
                        accessibilityRole: 'button',
                        onPress: () => x(e),
                        style: ({ pressed: e }) => ({
                          flexBasis: '47%',
                          flexGrow: 1,
                          minHeight: 96,
                          padding: 12,
                          gap: 6,
                          borderRadius: 16,
                          borderWidth: i.default.hairlineWidth,
                          borderColor: f.line,
                          backgroundColor: e ? f.soft : f.surface,
                        }),
                        children: [
                          (0, W.jsx)(s.default, {
                            style: {
                              width: 34,
                              height: 34,
                              borderRadius: 10,
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: f.accentSoft,
                            },
                            children: (0, W.jsx)(d.Icon, {
                              name: e.icon,
                              size: 18,
                              color: f.accent,
                            }),
                          }),
                          (0, W.jsx)(o.Copy, {
                            style: {
                              fontSize: 14,
                              lineHeight: 22,
                              fontFamily: 'Vazirmatn_600SemiBold',
                            },
                            children: e.title,
                          }),
                          (0, W.jsx)(o.Copy, {
                            style: {
                              fontSize: 11.5,
                              lineHeight: 18,
                              color: f.muted,
                            },
                            children: e.hint,
                          }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                }),
              ],
            }),
      });
    }
    function te() {
      const [e, n] = (0, t.useState)(!1),
        [i, a] = (0, t.useState)('');
      return {
        busy: e,
        error: i,
        setError: a,
        run: async function (e) {
          (n(!0), a(''));
          try {
            await e();
          } catch (e) {
            a(
              (0, A.L)(
                '\u0630\u062e\u06cc\u0631\u0647 \u0646\u0634\u062f: {reason}',
                { reason: (0, w.message)(e) },
              ),
            );
          } finally {
            n(!1);
          }
        },
      };
    }
    function ne({ shop: e, products: i, onSaved: l }) {
      const { colors: r } = (0, S.useTheme)(),
        [c, u] = (0, t.useState)(''),
        [y, h] = (0, t.useState)(null),
        [f, p] = (0, t.useState)(''),
        [b, j] = (0, t.useState)(!0),
        L = X({ day: 1, clock: { hour: 10, minute: 0 } }),
        w = te(),
        k = (0, t.useRef)(null),
        I = (0, B.productMatches)(i, y ? '' : c),
        C = b ? (0, B.pastReason)(L.at) : '',
        v = b
          ? (0, B.sayNew)(L.at)
          : (0, A.L)(
              '\u0628\u0647 \u0644\u06cc\u0633\u062a \u062e\u0631\u06cc\u062f \u0627\u0636\u0627\u0641\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f\u060c \u0628\u062f\u0648\u0646 \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc.',
            ),
        z = c.trim();
      return (0, W.jsxs)(s.default, {
        testID: 'form-buy',
        style: { gap: 12 },
        children: [
          (0, W.jsx)(Q, {
            children: (0, A.L)(
              '\u06a9\u062f\u0627\u0645 \u06a9\u0627\u0644\u0627\u061f',
            ),
          }),
          (0, W.jsx)(o.Input, {
            ref: k,
            testID: 'buy-name',
            value: c,
            maxLength: 100,
            onChangeText: (e) => {
              (u(e), y && e !== y.name && h(null));
            },
            placeholder: (0, A.L)(
              '\u0627\u0633\u0645 \u06a9\u0627\u0644\u0627\u060c \u0645\u062b\u0644\u0627\u064b \u0686\u0627\u06cc',
            ),
          }),
          !!I.length &&
            (0, W.jsxs)(s.default, {
              style: { gap: 6 },
              children: [
                (0, W.jsx)(o.Copy, {
                  style: { fontSize: 11.5, lineHeight: 18, color: r.muted },
                  children:
                    c.trim() && !y
                      ? (0, A.L)(
                          '\u0627\u0632 \u06a9\u0627\u0644\u0627\u0647\u0627\u06cc \u0645\u063a\u0627\u0632\u0647',
                        )
                      : (0, A.L)(
                          '\u06a9\u0645\u200c\u0645\u0648\u062c\u0648\u062f\u062a\u0631\u0647\u0627',
                        ),
                }),
                (0, W.jsx)(s.default, {
                  style: {
                    flexDirection: 'row-reverse',
                    flexWrap: 'wrap',
                    gap: 6,
                  },
                  children: I.map((e) => {
                    const t = y?.id === e.id;
                    return (0, W.jsxs)(
                      n.default,
                      {
                        testID: 'buy-pick-' + e.id,
                        accessibilityRole: 'button',
                        accessibilityState: { selected: t },
                        onPress: () => {
                          (h(e), u(e.name));
                        },
                        style: ({ pressed: e }) => ({
                          flexDirection: 'row-reverse',
                          alignItems: 'center',
                          gap: 6,
                          minHeight: 36,
                          paddingHorizontal: 11,
                          borderRadius: 11,
                          borderWidth: 1,
                          borderColor: t ? r.accent : r.line,
                          backgroundColor: t ? r.accentSoft : r.surface,
                          opacity: e ? 0.8 : 1,
                        }),
                        children: [
                          t &&
                            (0, W.jsx)(d.Icon, {
                              name: 'check',
                              size: 14,
                              color: r.accent,
                            }),
                          (0, W.jsx)(o.Copy, {
                            numberOfLines: 1,
                            style: {
                              fontSize: 13,
                              lineHeight: 20,
                              fontFamily: t
                                ? 'Vazirmatn_600SemiBold'
                                : 'Vazirmatn_400Regular',
                            },
                            children: e.name,
                          }),
                          (0, W.jsx)(o.Copy, {
                            style: {
                              fontSize: 11,
                              lineHeight: 18,
                              color: r.muted,
                            },
                            children: (0, A.L)(
                              '\u0645\u0648\u062c\u0648\u062f\u06cc {n}',
                              { n: E(e.stock) },
                            ),
                          }),
                        ],
                      },
                      e.id,
                    );
                  }),
                }),
              ],
            }),
          (0, W.jsx)(Q, {
            children: (0, A.L)(
              '\u0686\u0646\u062f \u062a\u0627\u061f (\u0627\u06af\u0631 \u0645\u06cc\u200c\u062f\u0627\u0646\u06cc)',
            ),
          }),
          (0, W.jsx)(x.QuantityInput, {
            testID: 'buy-qty',
            value: f,
            onChange: p,
            placeholder: (0, A.L)(
              '\u0645\u062b\u0644\u0627\u064b \u06f1\u06f0',
            ),
          }),
          (0, W.jsxs)(s.default, {
            style: {
              flexDirection: 'row-reverse',
              alignItems: 'center',
              gap: 10,
            },
            children: [
              (0, W.jsx)(o.Copy, {
                style: { flex: 1, fontSize: 13, lineHeight: 22 },
                children: (0, A.L)(
                  '\u0633\u0631 \u0648\u0642\u062a \u06cc\u0627\u062f\u0645 \u0628\u0646\u062f\u0627\u0632',
                ),
              }),
              (0, W.jsx)(a.default, {
                testID: 'buy-timed',
                value: b,
                onValueChange: j,
                trackColor: { false: r.soft, true: r.accent },
                thumbColor: r.surface,
                activeThumbColor: r.surface,
              }),
            ],
          }),
          b && L.node,
          (0, W.jsx)(G, { testID: 'buy-say', text: v, error: C }),
          !!w.error &&
            (0, W.jsx)(o.Copy, {
              accessibilityRole: 'alert',
              style: { fontSize: 13, lineHeight: 22, color: r.danger },
              children: w.error,
            }),
          (0, W.jsx)(o.Button, {
            testID: 'buy-save',
            disabled: !!C || w.busy,
            onPress: async function () {
              if (!z)
                return void w.setError(
                  (0, A.L)(
                    '\u0627\u0633\u0645 \u06a9\u0627\u0644\u0627 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633 \u06cc\u0627 \u0627\u0632 \u0641\u0647\u0631\u0633\u062a \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646.',
                  ),
                );
              let t;
              try {
                f.trim() && (t = (0, T.parseQuantity)(f));
              } catch {
                return void w.setError(
                  (0, A.L)(
                    '\u062a\u0639\u062f\u0627\u062f \u062f\u0631\u0633\u062a \u0646\u06cc\u0633\u062a\u061b \u0641\u0642\u0637 \u0639\u062f\u062f \u0628\u0646\u0648\u06cc\u0633\u060c \u0645\u062b\u0644\u0627\u064b \u06f1\u06f0.',
                  ),
                );
              }
              const n =
                y && y.name === z
                  ? y
                  : i.find((e) => !e.archivedAt && e.name.trim() === z);
              await w.run(async () => {
                (await (0, D.addToBuy)(e, [
                  {
                    name: z,
                    ...(t ? { quantity: t } : {}),
                    ...(b ? { remindAt: L.at.toISOString() } : {}),
                    ...(n
                      ? { productId: n.id, ...(n.unit ? { unit: n.unit } : {}) }
                      : {}),
                  },
                ]),
                  await l({ said: v, kind: 'buy' }));
              });
            },
            children: b
              ? (0, A.L)(
                  '\u0627\u0641\u0632\u0648\u062f\u0646 \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc',
                )
              : (0, A.L)(
                  '\u0627\u0641\u0632\u0648\u062f\u0646 \u0628\u0647 \u0644\u06cc\u0633\u062a \u062e\u0631\u06cc\u062f',
                ),
          }),
        ],
      });
    }
    function ie({ shop: e, call: n, onSaved: i }) {
      const { colors: a } = (0, S.useTheme)(),
        [l, r] = (0, t.useState)(''),
        d = X({ day: 1, clock: { hour: 10, minute: 0 } }),
        c = te(),
        u = (0, B.pastReason)(d.at),
        y = (0, B.sayNew)(d.at);
      return (0, W.jsxs)(s.default, {
        testID: 'form-task',
        style: { gap: 12 },
        children: [
          (0, W.jsx)(Q, {
            children: (0, A.L)('\u0686\u0647 \u06a9\u0627\u0631\u06cc\u061f'),
          }),
          (0, W.jsx)(o.Input, {
            testID: 'task-name',
            value: l,
            maxLength: 100,
            onChangeText: r,
            placeholder: n
              ? (0, A.L)(
                  '\u0645\u062b\u0644\u0627\u064b \u0632\u0646\u06af \u0628\u0647 \u067e\u062e\u0634 \u0627\u0644\u0628\u0631\u0632',
                )
              : (0, A.L)(
                  '\u0645\u062b\u0644\u0627\u064b \u062a\u0627\u0631\u06cc\u062e \u0645\u0627\u0633\u062a\u200c\u0647\u0627 \u0631\u0627 \u0628\u0628\u06cc\u0646',
                ),
          }),
          d.node,
          (0, W.jsx)(G, { testID: 'task-say', text: y, error: u }),
          !!c.error &&
            (0, W.jsx)(o.Copy, {
              accessibilityRole: 'alert',
              style: { fontSize: 13, lineHeight: 22, color: a.danger },
              children: c.error,
            }),
          (0, W.jsx)(o.Button, {
            testID: 'task-save',
            disabled: !!u || c.busy,
            onPress: async function () {
              l.trim()
                ? await c.run(async () => {
                    (await (0, D.addToBuy)(e, [
                      {
                        name: l.trim(),
                        note: B.TASK_NOTE,
                        remindAt: d.at.toISOString(),
                      },
                    ]),
                      await i({ said: y, kind: 'task' }));
                  })
                : c.setError(
                    (0, A.L)(
                      '\u0628\u0646\u0648\u06cc\u0633 \u0686\u0647 \u06a9\u0627\u0631\u06cc \u0631\u0627 \u06cc\u0627\u062f\u062a \u0628\u06cc\u0646\u062f\u0627\u0632\u0645.',
                    ),
                  );
            },
            children: (0, A.L)(
              '\u0627\u0641\u0632\u0648\u062f\u0646 \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc',
            ),
          }),
        ],
      });
    }
    function ae({ shop: e, onSaved: i }) {
      const { colors: a } = (0, S.useTheme)(),
        [l, r] = (0, t.useState)(''),
        [d, c] = (0, t.useState)(''),
        [u, y] = (0, t.useState)(6),
        [f, p] = (0, t.useState)({ hour: 10, minute: 0 }),
        b = te(),
        j = (0, A.L)(
          '\u0647\u0631 {day} \u0633\u0627\u0639\u062a {time} \u0628\u0647 \u0644\u06cc\u0633\u062a \u062e\u0631\u06cc\u062f \u0645\u06cc\u200c\u0622\u06cc\u062f \u0648 \u06cc\u0627\u062f\u062a \u0645\u06cc\u200c\u0627\u0646\u062f\u0627\u0632\u0645.',
          { day: _()[u], time: (0, B.clockText)(f) },
        );
      return (0, W.jsxs)(s.default, {
        testID: 'form-weekly',
        style: { gap: 12 },
        children: [
          (0, W.jsx)(Q, {
            children: (0, A.L)('\u0686\u0647 \u0686\u06cc\u0632\u06cc\u061f'),
          }),
          (0, W.jsx)(o.Input, {
            testID: 'weekly-name',
            value: l,
            maxLength: 100,
            onChangeText: r,
            placeholder: (0, A.L)(
              '\u0645\u062b\u0644\u0627\u064b \u0633\u0641\u0627\u0631\u0634 \u0644\u0628\u0646\u06cc\u0627\u062a',
            ),
          }),
          (0, W.jsx)(Q, {
            children: (0, A.L)(
              '\u0686\u0646\u062f \u062a\u0627\u061f (\u0627\u06af\u0631 \u0645\u06cc\u200c\u062f\u0627\u0646\u06cc)',
            ),
          }),
          (0, W.jsx)(x.QuantityInput, {
            testID: 'weekly-qty',
            value: d,
            onChange: c,
            placeholder: (0, A.L)(
              '\u0645\u062b\u0644\u0627\u064b \u06f2\u06f0',
            ),
          }),
          (0, W.jsx)(Q, {
            children: (0, A.L)(
              '\u06a9\u062f\u0627\u0645 \u0631\u0648\u0632 \u0647\u0641\u062a\u0647\u061f',
            ),
          }),
          (0, W.jsx)(s.default, {
            style: { flexDirection: 'row-reverse', flexWrap: 'wrap', gap: 6 },
            children: V.map((e) => {
              const t = e === u;
              return (0, W.jsx)(
                n.default,
                {
                  testID: 'weekly-day-' + e,
                  accessibilityRole: 'button',
                  accessibilityState: { selected: t },
                  onPress: () => y(e),
                  style: ({ pressed: e }) => ({
                    minHeight: 38,
                    minWidth: 72,
                    flexGrow: 1,
                    paddingHorizontal: 10,
                    borderRadius: 11,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderColor: t ? a.accent : a.line,
                    backgroundColor: t ? a.accent : a.surface,
                    opacity: e ? 0.85 : 1,
                  }),
                  children: (0, W.jsx)(o.Copy, {
                    style: {
                      fontSize: 13,
                      lineHeight: 20,
                      color: t ? a.onAccent : a.text,
                      fontFamily: t
                        ? 'Vazirmatn_600SemiBold'
                        : 'Vazirmatn_400Regular',
                    },
                    children: _()[e],
                  }),
                },
                e,
              );
            }),
          }),
          (0, W.jsx)(Q, {
            children: (0, A.L)(
              '\u0686\u0647 \u0633\u0627\u0639\u062a\u06cc\u061f',
            ),
          }),
          (0, W.jsx)(h.TimeWheel, {
            testID: 'weekly-time',
            value: f,
            onChange: p,
          }),
          (0, W.jsx)(G, { testID: 'weekly-say', text: j }),
          !!b.error &&
            (0, W.jsx)(o.Copy, {
              accessibilityRole: 'alert',
              style: { fontSize: 13, lineHeight: 22, color: a.danger },
              children: b.error,
            }),
          (0, W.jsx)(o.Button, {
            testID: 'weekly-save',
            disabled: b.busy,
            onPress: async function () {
              if (!l.trim())
                return void b.setError(
                  (0, A.L)(
                    '\u0628\u0646\u0648\u06cc\u0633 \u0647\u0631 \u0647\u0641\u062a\u0647 \u0686\u0647 \u0686\u06cc\u0632\u06cc \u0633\u0641\u0627\u0631\u0634 \u0645\u06cc\u200c\u062f\u0647\u06cc.',
                  ),
                );
              let t;
              try {
                d.trim() && (t = (0, T.parseQuantity)(d));
              } catch {
                return void b.setError(
                  (0, A.L)(
                    '\u062a\u0639\u062f\u0627\u062f \u062f\u0631\u0633\u062a \u0646\u06cc\u0633\u062a\u061b \u0641\u0642\u0637 \u0639\u062f\u062f \u0628\u0646\u0648\u06cc\u0633\u060c \u0645\u062b\u0644\u0627\u064b \u06f1\u06f0.',
                  ),
                );
              }
              await b.run(async () => {
                (await (0, z.ensureReminderNotifications)(),
                  await (0, D.addRoutine)(e, {
                    name: l.trim(),
                    ...(t ? { quantity: t } : {}),
                    weekday: u,
                    minute: (0, B.toMinuteOfDay)(f),
                  }),
                  await i({ said: j, kind: 'weekly' }));
              });
            },
            children: (0, A.L)(
              '\u0630\u062e\u06cc\u0631\u0647\u0654 \u06a9\u0627\u0631 \u0647\u0641\u062a\u06af\u06cc',
            ),
          }),
        ],
      });
    }
    const se = ['loan', 'rent', 'bill', 'other'];
    function le({ shop: e, category: i, onSaved: a }) {
      const { colors: l } = (0, S.useTheme)(),
        [r, c] = (0, t.useState)(i),
        [u, y] = (0, t.useState)(''),
        [p, j] = (0, t.useState)(''),
        [L, w] = (0, t.useState)('monthly'),
        [k, D] = (0, t.useState)(() => (0, P.calParts)(new Date()).day),
        [C, v] = (0, t.useState)(
          (0, B.fromMinuteOfDay)(H.DEFAULT_REMINDER_MINUTE),
        ),
        [T, F] = (0, t.useState)(!1),
        V = X({
          day: 1,
          clock: (0, B.fromMinuteOfDay)(H.DEFAULT_REMINDER_MINUTE),
        }),
        _ = te(),
        E = (0, b.parseToman)(p),
        O = 'once' === L ? (0, B.pastReason)(V.at) : '',
        M =
          'monthly' === L
            ? (0, A.L)(
                '\u0647\u0631 \u0645\u0627\u0647 \u0631\u0648\u0632 {day} \u0633\u0627\u0639\u062a {time} \u06cc\u0627\u062f\u062a \u0645\u06cc\u200c\u0627\u0646\u062f\u0627\u0632\u0645.',
                {
                  day: (0, A.localDigits)(String(k)),
                  time: (0, B.clockText)(C),
                },
              )
            : (0, B.sayNew)(V.at);
      const N = Array.from({ length: 31 }, (e, t) => ({
        value: t + 1,
        label: (0, A.localDigits)(String(t + 1)),
      }));
      return (0, W.jsxs)(s.default, {
        testID: 'form-pay',
        style: { gap: 12 },
        children: [
          (0, W.jsx)(Q, {
            children: (0, A.L)(
              '\u0686\u0647 \u067e\u0631\u062f\u0627\u062e\u062a\u06cc\u061f',
            ),
          }),
          (0, W.jsx)(s.default, {
            style: { flexDirection: 'row-reverse', flexWrap: 'wrap', gap: 6 },
            children: se.map((e) => {
              const t = e === r;
              return (0, W.jsx)(
                n.default,
                {
                  testID: 'pay-category-' + e,
                  accessibilityRole: 'button',
                  accessibilityState: { selected: t },
                  onPress: () => c(e),
                  style: ({ pressed: e }) => ({
                    minHeight: 38,
                    flexGrow: 1,
                    paddingHorizontal: 10,
                    borderRadius: 11,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderColor: t ? l.accent : l.line,
                    backgroundColor: t ? l.accent : l.surface,
                    opacity: e ? 0.85 : 1,
                  }),
                  children: (0, W.jsx)(o.Copy, {
                    numberOfLines: 1,
                    style: {
                      fontSize: 13,
                      lineHeight: 20,
                      color: t ? l.onAccent : l.text,
                    },
                    children: H.expenseCategoryFa[e],
                  }),
                },
                e,
              );
            }),
          }),
          (0, W.jsx)(Q, {
            children: (0, A.L)(
              '\u0627\u0633\u0645\u0634 (\u0627\u06af\u0631 \u0644\u0627\u0632\u0645 \u0627\u0633\u062a)',
            ),
          }),
          (0, W.jsx)(o.Input, {
            testID: 'pay-label',
            value: u,
            maxLength: 100,
            onChangeText: y,
            placeholder: (0, A.L)('\u0645\u062b\u0644\u0627\u064b {hint}', {
              hint: H.expenseCategoryHint[r],
            }),
          }),
          (0, W.jsx)(Q, {
            children: (0, A.L)(
              '\u0645\u0628\u0644\u063a (\u0627\u06af\u0631 \u0645\u06cc\u200c\u062f\u0627\u0646\u06cc)',
            ),
          }),
          (0, W.jsx)(x.MoneyInput, {
            testID: 'pay-amount',
            value: p,
            onChange: j,
            placeholder: (0, R.shopUnitText)(
              (0, A.L)(
                '\u0645\u062b\u0644\u0627\u064b \u06f5\u066c\u06f0\u06f0\u06f0\u066c\u06f0\u06f0\u06f0 \u062a\u0648\u0645\u0627\u0646',
              ),
            ),
          }),
          (0, W.jsx)(Q, {
            children: (0, A.L)(
              '\u0647\u0631 \u0686\u0646\u062f \u0648\u0642\u062a\u061f',
            ),
          }),
          (0, W.jsx)(o.Segmented, {
            value: L,
            onChange: w,
            height: 44,
            items: [
              {
                value: 'monthly',
                label: (0, A.L)('\u0647\u0631 \u0645\u0627\u0647'),
                testID: 'pay-monthly',
              },
              {
                value: 'once',
                label: (0, A.L)('\u06cc\u06a9 \u0628\u0627\u0631'),
                testID: 'pay-once',
              },
            ],
          }),
          'monthly' === L
            ? (0, W.jsxs)(s.default, {
                style: { gap: 10 },
                children: [
                  (0, W.jsx)(Q, {
                    children: (0, A.L)(
                      '\u0631\u0648\u0632 \u0686\u0646\u062f\u0645 \u0645\u0627\u0647\u061f',
                    ),
                  }),
                  (0, W.jsx)(s.default, {
                    style: {
                      alignSelf: 'center',
                      width: 120,
                      paddingHorizontal: 8,
                      paddingVertical: 4,
                      borderRadius: 16,
                      borderWidth: 1,
                      borderColor: l.line,
                      backgroundColor: l.surface,
                    },
                    children: (0, W.jsx)(f.Wheel, {
                      testID: 'pay-day',
                      label: '',
                      big: !0,
                      rowHeight: 44,
                      items: N,
                      value: k,
                      onChange: D,
                    }),
                  }),
                  (0, W.jsxs)(n.default, {
                    testID: 'pay-clock',
                    accessibilityRole: 'button',
                    accessibilityState: { expanded: T },
                    onPress: () => F(!T),
                    style: ({ pressed: e }) => ({
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      gap: 8,
                      minHeight: 44,
                      paddingHorizontal: 12,
                      borderRadius: 12,
                      backgroundColor: l.soft,
                      opacity: e ? 0.8 : 1,
                    }),
                    children: [
                      (0, W.jsx)(d.Icon, {
                        name: 'clock',
                        size: 17,
                        color: l.muted,
                      }),
                      (0, W.jsx)(o.Copy, {
                        style: { flex: 1, fontSize: 13, lineHeight: 22 },
                        children: (0, A.L)(
                          '\u0633\u0627\u0639\u062a {time} {part}',
                          {
                            time: (0, B.clockText)(C),
                            part: (0, B.partOfDay)(C.hour),
                          },
                        ),
                      }),
                      (0, W.jsx)(o.Copy, {
                        style: {
                          fontSize: 13,
                          lineHeight: 22,
                          color: l.accent,
                          fontFamily: 'Vazirmatn_600SemiBold',
                        },
                        children: T
                          ? (0, A.L)('\u0628\u0633\u062a\u0646')
                          : (0, A.L)(
                              '\u062a\u063a\u06cc\u06cc\u0631 \u0633\u0627\u0639\u062a',
                            ),
                      }),
                    ],
                  }),
                  T &&
                    (0, W.jsx)(h.TimeWheel, {
                      testID: 'pay-time',
                      value: C,
                      onChange: v,
                    }),
                ],
              })
            : V.node,
          (0, W.jsx)(G, { testID: 'pay-say', text: M, error: O }),
          (0, W.jsx)(o.Copy, {
            style: { fontSize: 11.5, lineHeight: 18, color: l.muted },
            children: (0, A.L)(
              '\u0628\u0627 \u0632\u062f\u0646 \u0627\u0639\u0644\u0627\u0646\u060c \u0647\u0645\u06cc\u0646 \u067e\u0631\u062f\u0627\u062e\u062a \u0622\u0645\u0627\u062f\u0647\u0654 \u062b\u0628\u062a \u062f\u0631 \xab\u0647\u0632\u06cc\u0646\u0647\u200c\u0647\u0627\xbb \u0645\u06cc\u200c\u0634\u0648\u062f.',
            ),
          }),
          !!_.error &&
            (0, W.jsx)(o.Copy, {
              accessibilityRole: 'alert',
              style: { fontSize: 13, lineHeight: 22, color: l.danger },
              children: _.error,
            }),
          (0, W.jsx)(o.Button, {
            testID: 'pay-save',
            disabled: !!O || _.busy,
            onPress: async function () {
              if (p.trim() && !(Number.isSafeInteger(E) && E > 0))
                return void _.setError(
                  (0, A.L)(
                    '\u0645\u0628\u0644\u063a \u062f\u0631\u0633\u062a \u0646\u06cc\u0633\u062a\u061b \u0641\u0642\u0637 \u0639\u062f\u062f \u0628\u0646\u0648\u06cc\u0633 \u06cc\u0627 \u062e\u0627\u0644\u06cc \u0628\u06af\u0630\u0627\u0631.',
                  ),
                );
              const t = V.at,
                n =
                  'monthly' === L
                    ? {
                        repeat: 'monthly',
                        monthDay: k,
                        minute: (0, B.toMinuteOfDay)(C),
                      }
                    : {
                        repeat: 'once',
                        onceOn: (0, B.dayText)(t),
                        minute: 60 * t.getHours() + t.getMinutes(),
                      };
              await _.run(async () => {
                (await (0, z.ensureReminderNotifications)(),
                  await (0, I.createExpenseReminder)(e, {
                    category: r,
                    label: u.trim(),
                    ...(p.trim() ? { amountToman: E } : {}),
                    schedule: n,
                  }),
                  await a({ said: M, kind: 'pay' }));
              });
            },
            children: (0, A.L)(
              '\u0630\u062e\u06cc\u0631\u0647\u0654 \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u067e\u0631\u062f\u0627\u062e\u062a',
            ),
          }),
        ],
      });
    }
    function re({ onLearn: e, onClose: t }) {
      const { colors: i } = (0, S.useTheme)(),
        a = (e, t) =>
          (0, W.jsxs)(s.default, {
            style: {
              flexDirection: 'row-reverse',
              alignItems: 'center',
              gap: 8,
            },
            children: [
              (0, W.jsx)(d.Icon, { name: e, size: 15, color: i.accent }),
              (0, W.jsx)(o.Copy, {
                style: { flex: 1, fontSize: 12.5, lineHeight: 20 },
                children: t,
              }),
            ],
          });
      return (0, W.jsxs)(s.default, {
        testID: 'reminders-tour',
        style: {
          gap: 10,
          padding: 14,
          borderRadius: 18,
          backgroundColor: i.accentSoft,
        },
        children: [
          (0, W.jsxs)(s.default, {
            style: {
              flexDirection: 'row-reverse',
              alignItems: 'flex-start',
              gap: 10,
            },
            children: [
              (0, W.jsxs)(s.default, {
                style: { flex: 1, gap: 2 },
                children: [
                  (0, W.jsx)(o.Copy, {
                    style: {
                      fontSize: 15,
                      lineHeight: 24,
                      fontFamily: 'Vazirmatn_700Bold',
                    },
                    children: (0, A.L)(
                      '\u0686\u06cc\u0632\u06cc \u0627\u0632 \u0642\u0644\u0645 \u0646\u0645\u06cc\u200c\u0627\u0641\u062a\u062f',
                    ),
                  }),
                  (0, W.jsx)(o.Copy, {
                    style: { fontSize: 12.5, lineHeight: 20, color: i.muted },
                    children: (0, A.L)(
                      '\u0633\u0631 \u0648\u0642\u062a \u0631\u0648\u06cc \u06af\u0648\u0634\u06cc \u062e\u0628\u0631\u062a \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645\u061b \u0627\u06cc\u0646\u062c\u0627 \u0647\u0645 \u0645\u06cc\u200c\u0628\u06cc\u0646\u06cc \u0686\u0647 \u0686\u06cc\u0632\u06cc \u067e\u06cc\u0634 \u0631\u0648\u0633\u062a.',
                    ),
                  }),
                ],
              }),
              (0, W.jsx)(n.default, {
                testID: 'reminders-tour-close',
                accessibilityRole: 'button',
                accessibilityLabel: (0, A.L)(
                  '\u0628\u0633\u062a\u0646 \u0631\u0627\u0647\u0646\u0645\u0627',
                ),
                hitSlop: 10,
                onPress: t,
                style: ({ pressed: e }) => ({
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: i.surface,
                  opacity: e ? 0.7 : 1,
                }),
                children: (0, W.jsx)(d.Icon, {
                  name: 'close',
                  size: 15,
                  color: i.muted,
                }),
              }),
            ],
          }),
          (0, W.jsxs)(s.default, {
            style: { gap: 6 },
            children: [
              a(
                'cart',
                (0, A.L)(
                  '\u06a9\u0627\u0644\u0627\u06cc\u06cc \u06a9\u0647 \u0628\u0627\u06cc\u062f \u0628\u062e\u0631\u06cc\u060c \u0628\u0627 \u062a\u0639\u062f\u0627\u062f\u0634',
                ),
              ),
              a(
                'wallet',
                (0, A.L)(
                  '\u0642\u0633\u0637\u060c \u06a9\u0631\u0627\u06cc\u0647 \u0648 \u0642\u0628\u0636\u060c \u0647\u0631 \u0645\u0627\u0647 \u0633\u0631 \u0645\u0648\u0639\u062f',
                ),
              ),
              a(
                'refresh',
                (0, A.L)(
                  '\u0633\u0641\u0627\u0631\u0634 \u0647\u0631 \u0647\u0641\u062a\u0647 \u0627\u0632 \u067e\u062e\u0634\u200c\u06a9\u0646\u0646\u062f\u0647',
                ),
              ),
            ],
          }),
          !!e &&
            (0, W.jsxs)(n.default, {
              testID: 'reminders-tour-learn',
              accessibilityRole: 'button',
              onPress: e,
              style: ({ pressed: e }) => ({
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 6,
                alignSelf: 'flex-start',
                paddingVertical: 2,
                opacity: e ? 0.7 : 1,
              }),
              children: [
                (0, W.jsx)(d.Icon, { name: 'play', size: 14, color: i.accent }),
                (0, W.jsx)(o.Copy, {
                  style: {
                    fontSize: 13,
                    lineHeight: 20,
                    color: i.accent,
                    fontFamily: 'Vazirmatn_600SemiBold',
                  },
                  children: (0, A.L)(
                    '\u0622\u0645\u0648\u0632\u0634 \u06a9\u0648\u062a\u0627\u0647 \u0631\u0627 \u0628\u0628\u06cc\u0646',
                  ),
                }),
              ],
            }),
        ],
      });
    }
  },
  620,
  [
    2, 232, 17, 240, 99, 380, 258, 407, 385, 539, 534, 525, 621, 619, 517, 614,
    529, 580, 481, 382, 415, 489, 613, 522, 623, 624, 523, 439, 443, 435, 311,
    440, 622, 338,
  ],
);
