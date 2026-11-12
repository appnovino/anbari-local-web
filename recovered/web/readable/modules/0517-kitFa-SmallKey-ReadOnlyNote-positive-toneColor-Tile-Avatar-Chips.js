// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 517; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (_g, _r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'kitFa', {
        enumerable: !0,
        get: function () {
          return S;
        },
      }),
      (_e.SmallKey = w),
      (_e.ReadOnlyNote = function () {
        const { colors: e } = (0, u.useTheme)();
        return (0, f.useLedgerReadOnly)()
          ? (0, C.jsxs)(i.default, {
              testID: 'ledger-read-only',
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 8,
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 12,
                borderWidth: r.default.hairlineWidth,
                borderColor: e.line,
                backgroundColor: e.soft,
              },
              children: [
                (0, C.jsx)(c.Icon, { name: 'lock', size: 16, color: e.muted }),
                (0, C.jsx)(s.Copy, {
                  style: {
                    flex: 1,
                    minWidth: 0,
                    fontSize: 13,
                    lineHeight: 21,
                    color: e.muted,
                  },
                  children: (0, x.L)(f.LEDGER_READ_ONLY_LINE),
                }),
              ],
            })
          : null;
      }),
      Object.defineProperty(_e, 'positive', {
        enumerable: !0,
        get: function () {
          return z;
        },
      }),
      (_e.toneColor = function (e, t) {
        return e ? (e > 0 ? z : t.danger) : t.muted;
      }),
      (_e.Tile = function ({ label: e, value: t, tone: n, testID: o }) {
        const { colors: l } = (0, u.useTheme)(),
          c = (0, h.formatCompactParts)(t ?? 0);
        return (0, C.jsxs)(i.default, {
          testID: o,
          style: {
            flex: 1,
            minWidth: 0,
            padding: 10,
            borderRadius: 14,
            backgroundColor: l.surface,
            borderWidth: r.default.hairlineWidth,
            borderColor: l.line,
            gap: 2,
          },
          children: [
            (0, C.jsx)(s.Copy, {
              numberOfLines: 1,
              style: { fontSize: 11, lineHeight: 18, color: l.muted },
              children: e,
            }),
            (0, C.jsxs)(i.default, {
              style: {
                flexDirection: 'row-reverse',
                flexWrap: 'wrap',
                alignItems: 'baseline',
                gap: 4,
              },
              children: [
                (0, C.jsx)(s.Copy, {
                  adjustsFontSizeToFit: !0,
                  numberOfLines: c.value.length > 10 ? void 0 : 1,
                  style: {
                    fontSize: c.value.length > 10 ? 13 : 18,
                    flexShrink: 1,
                    lineHeight: 26,
                    fontFamily: 'Vazirmatn_700Bold',
                    color: n || l.text,
                  },
                  children: void 0 === t ? '\u2014' : c.value,
                }),
                !!c.unit &&
                  void 0 !== t &&
                  (0, C.jsx)(s.Copy, {
                    style: { fontSize: 11, lineHeight: 18, color: l.muted },
                    children: c.unit,
                  }),
              ],
            }),
          ],
        });
      }),
      (_e.Avatar = v),
      (_e.Chips = function ({ items: e, value: t, onChange: n, columns: l }) {
        const { colors: c } = (0, u.useTheme)(),
          h = ([e, i]) => {
            const u = e === t;
            return (0, C.jsx)(
              o.default,
              {
                testID: 'chip-' + e,
                accessibilityRole: 'button',
                accessibilityState: { selected: u },
                onPress: () => n(e),
                style: ({ pressed: e }) => ({
                  height: 32,
                  paddingHorizontal: l ? 6 : 12,
                  borderRadius: 16,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: u ? c.accent : c.soft,
                  borderWidth: r.default.hairlineWidth,
                  borderColor: u ? c.accent : c.line,
                  opacity: e ? 0.85 : 1,
                  ...(l ? { flex: 1, minWidth: 0 } : null),
                }),
                children: (0, C.jsx)(s.Copy, {
                  numberOfLines: 1,
                  style: {
                    fontSize: 13,
                    lineHeight: 20,
                    textAlign: 'center',
                    color: u ? c.onAccent : c.text,
                    fontFamily: u
                      ? 'Vazirmatn_600SemiBold'
                      : 'Vazirmatn_400Regular',
                  },
                  children: i,
                }),
              },
              e,
            );
          };
        if (!l)
          return (0, C.jsx)(i.default, {
            style: { flexDirection: 'row-reverse', flexWrap: 'wrap', gap: 6 },
            children: e.map(h),
          });
        const f = [];
        for (let t = 0; t < e.length; t += l) f.push(e.slice(t, t + l));
        return (0, C.jsx)(i.default, {
          style: { gap: 6 },
          children: f.map((e, t) =>
            (0, C.jsxs)(
              i.default,
              {
                style: { flexDirection: 'row-reverse', gap: 6 },
                children: [
                  e.map(h),
                  Array.from({ length: l - e.length }, (e, t) =>
                    (0, C.jsx)(i.default, { style: { flex: 1 } }, 'gap' + t),
                  ),
                ],
              },
              t,
            ),
          ),
        });
      }),
      (_e.StatusChip = function ({ label: e, tone: t, testID: n }) {
        const { colors: o } = (0, u.useTheme)(),
          r =
            'ok' === t
              ? z
              : 'bad' === t
                ? o.danger
                : 'wait' === t
                  ? o.accent
                  : 'warn' === t
                    ? o.warning
                    : o.muted,
          l =
            'warn' === t
              ? o.warningSoft
              : 'calm' === t || 'off' === t
                ? o.soft
                : r + '1a';
        return (0, C.jsx)(i.default, {
          testID: n,
          style: {
            flexShrink: 0,
            paddingHorizontal: 9,
            minHeight: 24,
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: l,
          },
          children: (0, C.jsx)(s.Copy, {
            style: {
              flexShrink: 0,
              fontSize: 11.5,
              lineHeight: 18,
              color: r,
              fontFamily: 'Vazirmatn_600SemiBold',
            },
            children: e,
          }),
        });
      }),
      (_e.SheetRow = function ({
        icon: e,
        title: t,
        hint: n,
        onPress: r,
        testID: l,
        danger: h,
      }) {
        const { colors: f } = (0, u.useTheme)(),
          g = h ? f.danger : f.text;
        return (0, C.jsxs)(o.default, {
          testID: l,
          accessibilityRole: 'button',
          onPress: r,
          style: ({ pressed: e }) => ({
            minHeight: 56,
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderRadius: 14,
            flexDirection: 'row-reverse',
            alignItems: 'center',
            gap: 12,
            backgroundColor: e ? f.soft : 'transparent',
          }),
          children: [
            (0, C.jsx)(i.default, {
              style: {
                width: 36,
                height: 36,
                borderRadius: 10,
                backgroundColor: f.soft,
                alignItems: 'center',
                justifyContent: 'center',
              },
              children: (0, C.jsx)(c.Icon, { name: e, size: 19, color: g }),
            }),
            (0, C.jsxs)(i.default, {
              style: { flex: 1, minWidth: 0 },
              children: [
                (0, C.jsx)(s.Copy, {
                  style: {
                    fontSize: 15,
                    lineHeight: 24,
                    color: g,
                    fontFamily: 'Vazirmatn_600SemiBold',
                  },
                  children: t,
                }),
                !!n &&
                  (0, C.jsx)(s.Copy, {
                    numberOfLines: 1,
                    style: { fontSize: 12, lineHeight: 19, color: f.muted },
                    children: n,
                  }),
              ],
            }),
            (0, C.jsx)(c.Icon, { name: 'chevron', size: 16, color: f.muted }),
          ],
        });
      }),
      (_e.Field = function ({ label: e, children: t }) {
        const { colors: n } = (0, u.useTheme)();
        return (0, C.jsxs)(i.default, {
          style: { gap: 4 },
          children: [
            (0, C.jsx)(s.Copy, {
              style: { fontSize: 12, lineHeight: 19, color: n.muted },
              children: e,
            }),
            t,
          ],
        });
      }),
      Object.defineProperty(_e, 'ContactProblem', {
        enumerable: !0,
        get: function () {
          return k;
        },
      }),
      (_e.resolvePick = async function (e, t, n) {
        if (t.contact) return t.contact;
        const o = t.newName?.trim();
        if (!o) throw Error(S.chooseContact);
        const r = t.newPhone?.trim() || void 0,
          i = await (0, y.contactSaveProblem)(e, o, r);
        if (i) throw new k(i);
        return (
          await (0, g.createContact)(e, {
            name: o,
            kind: n,
            ...(r ? { phone: r } : {}),
          })
        ).contact;
      }),
      (_e.ContactPicker = function ({
        shop: e,
        value: n,
        onChange: l,
        testID: h,
      }) {
        const { colors: f } = (0, u.useTheme)(),
          [x, z] = (0, t.useState)(''),
          [k, P] = (0, t.useState)('');
        (0, t.useEffect)(() => {
          const e = setTimeout(() => P(x.trim()), 200);
          return () => clearTimeout(e);
        }, [x]);
        const H = n.contact?.name || n.newName,
          L = H
            ? null
            : (0, j.scoped)(e.id, k ? 'contacts:q:' + k : 'contacts:all:'),
          { data: D, error: R } = (0, j.useSwr)(L, () =>
            (0, g.listContacts)(e, { q: k || void 0 }),
          ),
          W = D?.contacts ?? [];
        if (H && !n.contact)
          return (0, C.jsxs)(i.default, {
            style: { gap: 6 },
            children: [
              T(H),
              (0, C.jsx)(I, {
                shop: e,
                name: H,
                value: n.newPhone || '',
                onChange: (e) => l({ ...n, newPhone: e }),
              }),
            ],
          });
        if (H) return T(H);
        function T(e) {
          return (0, C.jsxs)(i.default, {
            testID: h,
            style: {
              flexDirection: 'row-reverse',
              alignItems: 'center',
              gap: 10,
              padding: 8,
              borderRadius: 14,
              backgroundColor: f.soft,
              borderWidth: r.default.hairlineWidth,
              borderColor: f.line,
            },
            children: [
              (0, C.jsx)(v, { name: e, size: 32 }),
              (0, C.jsxs)(i.default, {
                style: { flex: 1, minWidth: 0 },
                children: [
                  (0, C.jsx)(s.Copy, {
                    numberOfLines: 1,
                    style: {
                      fontSize: 14,
                      fontFamily: 'Vazirmatn_600SemiBold',
                    },
                    children: e,
                  }),
                  n.contact
                    ? (0, C.jsx)(y.PhoneLine, { phone: n.contact.phone })
                    : (0, C.jsx)(s.Copy, {
                        style: { fontSize: 11, color: f.muted },
                        children: S.newPerson,
                      }),
                ],
              }),
              (0, C.jsx)(w, {
                kind: 'text',
                label: S.change,
                onPress: () => {
                  (l({}), z(''));
                },
              }),
            ],
          });
        }
        const O = x.trim(),
          _ = W.some((e) => (0, b.contactKey)(e.name) === (0, b.contactKey)(O)),
          q = W.slice(0, 6),
          A = new Set(
            (0, p.confusableGroups)(q).flatMap((e) =>
              e.contacts.map((e) => e.id),
            ),
          );
        return (0, C.jsxs)(i.default, {
          testID: h,
          style: { gap: 6 },
          children: [
            (0, C.jsx)(s.Input, {
              value: x,
              onChangeText: z,
              placeholder: S.searchPerson,
              maxLength: 100,
              style: { minHeight: 44, paddingVertical: 8 },
            }),
            (0, C.jsx)(y.SameNameNotice, {
              contacts: q,
              onPick: (e) => l({ contact: e }),
            }),
            (0, C.jsxs)(i.default, {
              style: {
                borderRadius: 14,
                borderWidth: r.default.hairlineWidth,
                borderColor: f.line,
                overflow: 'hidden',
              },
              children: [
                q.map((e, t) =>
                  (0, C.jsxs)(
                    o.default,
                    {
                      accessibilityRole: 'button',
                      onPress: () => l({ contact: e }),
                      style: ({ pressed: e }) => ({
                        minHeight: 48,
                        paddingVertical: 4,
                        paddingHorizontal: 10,
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        gap: 10,
                        backgroundColor: e ? f.soft : f.surface,
                        borderTopWidth: t ? r.default.hairlineWidth : 0,
                        borderColor: f.line,
                      }),
                      children: [
                        (0, C.jsx)(v, { name: e.name, size: 28 }),
                        (0, C.jsxs)(i.default, {
                          style: { flex: 1, minWidth: 0 },
                          children: [
                            (0, C.jsx)(s.Copy, {
                              numberOfLines: 1,
                              style: { fontSize: 14, lineHeight: 21 },
                              children: e.name,
                            }),
                            (0, C.jsx)(y.PhoneLine, {
                              phone: e.phone,
                              shared: A.has(e.id),
                            }),
                          ],
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
                !!O &&
                  !_ &&
                  (0, C.jsxs)(o.default, {
                    accessibilityRole: 'button',
                    onPress: () => l({ newName: O }),
                    style: ({ pressed: e }) => ({
                      height: 44,
                      paddingHorizontal: 10,
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      gap: 10,
                      backgroundColor: e ? f.soft : f.surface,
                      borderTopWidth: W.length ? r.default.hairlineWidth : 0,
                      borderColor: f.line,
                    }),
                    children: [
                      (0, C.jsx)(i.default, {
                        style: {
                          width: 28,
                          height: 28,
                          borderRadius: 14,
                          backgroundColor: f.soft,
                          alignItems: 'center',
                          justifyContent: 'center',
                        },
                        children: (0, C.jsx)(c.Icon, {
                          name: 'plus',
                          size: 15,
                          color: f.accent,
                        }),
                      }),
                      (0, C.jsxs)(s.Copy, {
                        numberOfLines: 1,
                        style: { flex: 1, fontSize: 14, color: f.accent },
                        children: [S.newPerson, ': \xab', O, '\xbb'],
                      }),
                    ],
                  }),
              ],
            }),
            !!R &&
              (0, C.jsx)(s.Copy, {
                style: { fontSize: 12, color: f.danger },
                children: R,
              }),
          ],
        });
      }));
    var t = _r(d[0]),
      n = e(_r(d[1])),
      o = e(_r(d[2])),
      r = e(_r(d[3])),
      i = e(_r(d[4])),
      l = _r(d[5]),
      s = _r(d[6]),
      c = _r(d[7]),
      u = _r(d[8]),
      h = _r(d[9]),
      f = _r(d[10]),
      g = _r(d[11]),
      y = _r(d[12]),
      p = _r(d[13]),
      b = _r(d[14]),
      x = _r(d[15]),
      j = _r(d[16]),
      C = _r(d[17]);
    const S = (0, x.localized)({
      accounts: '\u062d\u0633\u0627\u0628\u200c\u0647\u0627',
      theyOweMe:
        '\u0628\u0647 \u0645\u0646 \u0628\u062f\u0647\u06a9\u0627\u0631\u0646\u062f',
      iOwe: '\u0645\u0646 \u0628\u062f\u0647\u06a9\u0627\u0631\u0645',
      chequesWeek:
        '\u0686\u06a9\u200c\u0647\u0627\u06cc \u0627\u06cc\u0646 \u0647\u0641\u062a\u0647',
      people: '\u0627\u0634\u062e\u0627\u0635',
      cheques: '\u0686\u06a9\u200c\u0647\u0627',
      statement: '\u0635\u0648\u0631\u062a\u200c\u062d\u0633\u0627\u0628',
      addPerson: '\u0634\u062e\u0635',
      addCheque: '\u0686\u06a9',
      newCheque: '\u062b\u0628\u062a \u0686\u06a9',
      receiveShort: '\u062f\u0631\u06cc\u0627\u0641\u062a',
      payShort: '\u067e\u0631\u062f\u0627\u062e\u062a',
      menuEdit: '\u0648\u06cc\u0631\u0627\u06cc\u0634',
      menuCall: '\u062a\u0645\u0627\u0633',
      menuArchive: '\u0628\u0627\u06cc\u06af\u0627\u0646\u06cc',
      personMenu:
        '\u06af\u0632\u06cc\u0646\u0647\u200c\u0647\u0627\u06cc \u0634\u062e\u0635',
      searchPerson:
        '\u062c\u0633\u062a\u200c\u0648\u062c\u0648\u06cc \u0634\u062e\u0635',
      newPerson: '\u0634\u062e\u0635 \u062c\u062f\u06cc\u062f',
      change: '\u062a\u063a\u06cc\u06cc\u0631',
      chosen: '\u0637\u0631\u0641 \u062d\u0633\u0627\u0628',
      kindLabel: '\u0646\u0648\u0639',
      contactLabel: '\u0637\u0631\u0641 \u062d\u0633\u0627\u0628',
      amountLabel: '\u0645\u0628\u0644\u063a',
      dueLabel: '\u0633\u0631\u0631\u0633\u06cc\u062f',
      numberLabel:
        '\u0634\u0645\u0627\u0631\u0647 \u0686\u06a9 (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)',
      bankLabel:
        '\u0628\u0627\u0646\u06a9 (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)',
      noteLabel:
        '\u062a\u0648\u0636\u06cc\u062d (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)',
      received: '\u062f\u0631\u06cc\u0627\u0641\u062a\u06cc',
      paid: '\u067e\u0631\u062f\u0627\u062e\u062a\u06cc',
      chooseContact:
        '\u0637\u0631\u0641 \u062d\u0633\u0627\u0628 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f.',
      chequeSaved: '\u0686\u06a9 \u062b\u0628\u062a \u0634\u062f.',
      filterAll: '\u0647\u0645\u0647',
      filterSoon:
        '\u0633\u0631\u0631\u0633\u06cc\u062f \u0646\u0632\u062f\u06cc\u06a9',
      filterBounced: '\u0628\u0631\u06af\u0634\u062a\u06cc',
      statusPending: '\u062f\u0631 \u0627\u0646\u062a\u0638\u0627\u0631',
      statusCashed: '\u067e\u0627\u0633 \u0634\u062f',
      statusBounced: '\u067e\u0627\u0633 \u0646\u0634\u062f',
      statusCancelled: '\u0644\u063a\u0648 \u0634\u062f',
      chequeActions: '\u0648\u0636\u0639\u06cc\u062a \u0686\u06a9',
      noActions:
        '\u0648\u0636\u0639\u06cc\u062a \u0627\u06cc\u0646 \u0686\u06a9 \u0646\u0647\u0627\u06cc\u06cc \u0627\u0633\u062a.',
      pickPerson:
        '\u0634\u062e\u0635 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f.',
      quickTitle: '\u0686\u06a9 \u0648 \u062d\u0633\u0627\u0628',
      quickCheque: '\u062b\u0628\u062a \u0686\u06a9',
      quickChequeHint:
        '\u062f\u0631\u06cc\u0627\u0641\u062a\u06cc \u06cc\u0627 \u067e\u0631\u062f\u0627\u062e\u062a\u06cc',
      quickPayment:
        '\u062f\u0631\u06cc\u0627\u0641\u062a \u06cc\u0627 \u067e\u0631\u062f\u0627\u062e\u062a',
      quickPaymentHint:
        '\u0646\u0642\u062f \u06cc\u0627 \u06a9\u0627\u0631\u062a',
      owesYou:
        '{name} \u0628\u0647 \u0634\u0645\u0627 {amount} \u0628\u062f\u0647\u06a9\u0627\u0631 \u0627\u0633\u062a',
      youOwe:
        '\u0634\u0645\u0627 \u0628\u0647 {name} {amount} \u0628\u062f\u0647\u06a9\u0627\u0631\u06cc\u062f',
      settled:
        '\u062d\u0633\u0627\u0628 {name} \u062a\u0633\u0648\u06cc\u0647 \u0627\u0633\u062a',
    });
    function w({
      label: e,
      onPress: h,
      kind: f = 'soft',
      icon: g,
      testID: y,
      disabled: p,
      accessibilityLabel: b,
      grow: x,
    }) {
      const { colors: j } = (0, u.useTheme)(),
        [S, w] = (0, t.useState)(!1),
        [z, v] = (0, t.useState)(''),
        k = (0, t.useRef)(!1);
      async function I() {
        if (!k.current && !p) {
          ((k.current = !0), w(!0), v(''));
          try {
            await h();
          } catch (e) {
            v((0, l.message)(e));
          } finally {
            ((k.current = !1), w(!1));
          }
        }
      }
      const P =
        'primary' === f
          ? j.onAccent
          : 'text' === f || 'tint' === f
            ? j.accent
            : j.text;
      return (0, C.jsxs)(i.default, {
        style: x ? { flex: 1 } : void 0,
        children: [
          (0, C.jsxs)(o.default, {
            testID: y,
            accessibilityRole: 'button',
            accessibilityLabel: b,
            accessibilityState: { disabled: !!p || S, busy: S },
            disabled: p || S,
            onPress: () => {
              I();
            },
            style: ({ pressed: e }) => ({
              height: 40,
              borderRadius: 12,
              paddingHorizontal: 'text' === f ? 8 : 14,
              flexDirection: 'row-reverse',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              backgroundColor:
                'primary' === f
                  ? e
                    ? j.accentActive
                    : j.accent
                  : 'soft' === f
                    ? j.soft
                    : 'tint' === f
                      ? j.accentSoft
                      : 'transparent',
              borderWidth: 'soft' === f ? r.default.hairlineWidth : 0,
              borderColor: j.line,
              opacity: p || S ? 0.45 : e ? 0.85 : 1,
            }),
            children: [
              S
                ? (0, C.jsx)(n.default, { size: 'small', color: P })
                : g
                  ? (0, C.jsx)(c.Icon, { name: g, size: 17, color: P })
                  : null,
              (0, C.jsx)(s.Copy, {
                numberOfLines: 1,
                style: {
                  fontSize: 14,
                  lineHeight: 22,
                  color: P,
                  fontFamily: 'Vazirmatn_600SemiBold',
                },
                children: e,
              }),
            ],
          }),
          !!z &&
            (0, C.jsx)(s.Copy, {
              accessibilityRole: 'alert',
              style: { fontSize: 12, color: j.danger },
              children: z,
            }),
        ],
      });
    }
    const z = '#23825b';
    function v({ name: e, size: t = 36 }) {
      const { colors: n } = (0, u.useTheme)(),
        o = ((0, b.contactKey)(e) || e).trim().charAt(0) || '\u061f';
      return (0, C.jsx)(i.default, {
        style: {
          width: t,
          height: t,
          borderRadius: t / 2,
          backgroundColor: n.accentSoft,
          alignItems: 'center',
          justifyContent: 'center',
        },
        children: (0, C.jsx)(s.Copy, {
          style: {
            fontSize: 0.42 * t,
            lineHeight: 0.62 * t,
            textAlign: 'center',
            color: n.accent,
            fontFamily: 'Vazirmatn_700Bold',
          },
          children: o,
        }),
      });
    }
    class k extends Error {}
    function I({ shop: e, name: n, value: o, onChange: r }) {
      const { colors: l } = (0, u.useTheme)(),
        [c, h] = (0, t.useState)(null);
      if (
        ((0, t.useEffect)(() => {
          let t = !0;
          return (
            (0, g.listSameName)(e, n).then(
              (e) => {
                t && h(e);
              },
              () => {
                t && h([]);
              },
            ),
            () => {
              t = !1;
            }
          );
        }, [e.id, n]),
        !c?.length)
      )
        return null;
      const f = (0, p.phoneRequirement)(n, o, c);
      return (0, C.jsxs)(i.default, {
        testID: 'new-person-phone',
        style: { gap: 4 },
        children: [
          (0, C.jsx)(s.Input, {
            testID: 'new-person-phone-input',
            value: o,
            onChangeText: r,
            placeholder: (0, x.L)(
              '\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644\u060c \u0645\u062b\u0644\u0627\u064b \u06f0\u06f9\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9',
            ),
            keyboardType: 'phone-pad',
            inputMode: 'tel',
            maxLength: 20,
            ltr: !0,
            style: { minHeight: 44, paddingVertical: 8 },
          }),
          !f.ok &&
            (0, C.jsx)(s.Copy, {
              style: { fontSize: 12, lineHeight: 19, color: l.warning },
              children: f.reason,
            }),
        ],
      });
    }
  },
  517,
  [
    2, 217, 232, 17, 99, 415, 407, 385, 382, 434, 518, 519, 526, 438, 529, 311,
    489, 338,
  ],
);
