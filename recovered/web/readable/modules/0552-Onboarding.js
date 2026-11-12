// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 552; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.Onboarding = function ({
        user: e,
        onCreate: s,
        onDone: D,
        onExit: R,
      }) {
        const { colors: H } = (0, p.useTheme)(),
          _ = (0, y.useSafeAreaInsets)(),
          { width: w } = (0, c.default)(),
          k = w < 360,
          [F, P] = (0, t.useState)(1),
          [E, L] = (0, t.useState)(''),
          [v, M] = (0, t.useState)(null),
          [A, V] = (0, t.useState)(''),
          [B, W] = (0, t.useState)(null),
          [O, X] = (0, t.useState)(!1),
          [K, N] = (0, t.useState)(''),
          G = (0, t.useRef)(!1),
          q = (0, t.useRef)(null),
          J = () => {
            O || (N(''), 1 === F ? R() : P(3 === F ? 2 : 1));
          };
        async function Q(t) {
          if (G.current) return;
          const n = (0, j.journeyShop)({
            name: E,
            fieldId: v,
            customField: A,
            heardFrom: t ? null : B,
          });
          if (n) {
            ((G.current = !0), X(!0), N(''));
            try {
              const t = await s(n);
              ((0, x.rememberBusiness)(e, t, {
                businessType: n.businessType,
                ...(n.businessExample
                  ? { businessExample: n.businessExample }
                  : {}),
              }).catch(() => {}),
                D(t, n));
            } catch (e) {
              N((0, b.message)(e));
            } finally {
              ((G.current = !1), X(!1));
            }
          } else P(1);
        }
        (0, t.useEffect)(() => {}, [F, O]);
        const U =
          1 === F
            ? (0, j.canLeaveName)(E)
            : 2 === F
              ? (0, j.canLeaveField)(v, A)
              : !!B;
        function Y() {
          U && !O && (N(''), 1 === F ? P(2) : 2 === F ? P(3) : Q(!1));
        }
        const Z = 1 === F ? C.nameTitle : 2 === F ? C.fieldTitle : C.heardTitle,
          $ = k ? 16 : 20;
        return (0, z.jsx)(o.default, {
          testID: 'journey',
          style: {
            flex: 1,
            backgroundColor: H.bg,
            paddingTop: Math.max(_.top, 12),
            paddingBottom: Math.max(_.bottom, 12),
          },
          children: (0, z.jsx)(n.default, {
            style: { flex: 1 },
            behavior: void 0,
            children: (0, z.jsxs)(o.default, {
              style: {
                flex: 1,
                width: '100%',
                maxWidth: 480,
                alignSelf: 'center',
              },
              children: [
                (0, z.jsxs)(o.default, {
                  style: {
                    flexDirection: 'row',
                    direction: 'ltr',
                    alignItems: 'center',
                    gap: 12,
                    paddingHorizontal: $,
                    paddingTop: 4,
                    paddingBottom: 8,
                  },
                  children: [
                    1 === F
                      ? (0, z.jsx)(l.default, {
                          testID: 'journey-exit',
                          accessibilityRole: 'button',
                          onPress: J,
                          hitSlop: 8,
                          style: ({ pressed: e }) => ({
                            height: 40,
                            paddingHorizontal: 4,
                            justifyContent: 'center',
                            opacity: e ? 0.6 : 1,
                          }),
                          children: (0, z.jsx)(h.Copy, {
                            style: {
                              fontSize: 14,
                              lineHeight: 20,
                              fontFamily: 'Vazirmatn_500Medium',
                              color: H.muted,
                            },
                            children: C.exit,
                          }),
                        })
                      : (0, z.jsx)(l.default, {
                          testID: 'journey-back',
                          accessibilityRole: 'button',
                          accessibilityLabel: C.back,
                          disabled: O,
                          onPress: J,
                          hitSlop: 8,
                          style: ({ pressed: e }) => ({
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: H.soft,
                            opacity: O ? 0.4 : e ? 0.7 : 1,
                          }),
                          children: (0, z.jsx)(f.Icon, {
                            name: 'arrow',
                            size: 20,
                            color: H.text,
                          }),
                        }),
                    (0, z.jsx)(o.default, {
                      accessibilityRole: 'progressbar',
                      accessibilityValue: { min: 1, max: 3, now: F },
                      style: { flex: 1, flexDirection: 'row', gap: 6 },
                      children: [1, 2, 3].map((e) =>
                        (0, z.jsx)(
                          o.default,
                          {
                            style: {
                              flex: 1,
                              height: 4,
                              borderRadius: 2,
                              backgroundColor: e <= F ? H.accent : H.line,
                            },
                          },
                          e,
                        ),
                      ),
                    }),
                    (0, z.jsxs)(h.Copy, {
                      style: {
                        fontSize: 13,
                        lineHeight: 18,
                        color: H.muted,
                        minWidth: 28,
                        textAlign: 'right',
                      },
                      children: [I(F), '/', I(3)],
                    }),
                  ],
                }),
                (0, z.jsxs)(u.ScrollView, {
                  ref: q,
                  style: { flex: 1 },
                  contentContainerStyle: {
                    flexGrow: 1,
                    paddingHorizontal: $,
                    paddingTop: k ? 16 : 28,
                    paddingBottom: 16,
                    gap: k ? 16 : 20,
                  },
                  keyboardShouldPersistTaps: 'handled',
                  showsVerticalScrollIndicator: !1,
                  children: [
                    (0, z.jsx)(h.Copy, {
                      accessibilityRole: 'header',
                      style: {
                        fontSize: k ? 23 : 27,
                        lineHeight: k ? 34 : 40,
                        fontFamily: 'Vazirmatn_700Bold',
                      },
                      children: Z,
                    }),
                    1 === F &&
                      (0, z.jsx)(h.Input, {
                        testID: 'journey-name',
                        autoFocus: !0,
                        accessibilityLabel: C.nameTitle,
                        placeholder: C.namePlaceholder,
                        maxLength: j.SHOP_NAME_MAX,
                        returnKeyType: 'next',
                        value: E,
                        onChangeText: L,
                        onSubmitEditing: Y,
                        style: {
                          height: 58,
                          fontSize: 18,
                          borderRadius: 16,
                          paddingHorizontal: 16,
                        },
                      }),
                    2 === F &&
                      (0, z.jsxs)(z.Fragment, {
                        children: [
                          (0, z.jsx)(o.default, {
                            accessibilityRole: 'radiogroup',
                            style: {
                              flexDirection: 'row-reverse',
                              flexWrap: 'wrap',
                              gap: k ? 8 : 10,
                            },
                            children: j.SHOP_FIELDS.map((e) =>
                              (0, z.jsx)(
                                T,
                                {
                                  testID: 'journey-field-' + e.id,
                                  label: (0, S.L)(e.label),
                                  selected: v === e.id,
                                  onPress: () => {
                                    (M(e.id), 'other' !== e.id && V(''));
                                  },
                                },
                                e.id,
                              ),
                            ),
                          }),
                          (0, z.jsx)(h.Input, {
                            testID: 'journey-field-custom',
                            accessibilityLabel: C.fieldCustom,
                            placeholder: C.fieldCustom,
                            maxLength: j.FIELD_TEXT_MAX,
                            returnKeyType: 'next',
                            value: A,
                            onFocus: () =>
                              setTimeout(
                                () => q.current?.scrollToEnd({ animated: !0 }),
                                250,
                              ),
                            onChangeText: (e) => {
                              (V(e), e.trim() && M('other'));
                            },
                            onSubmitEditing: Y,
                            style: {
                              height: 50,
                              fontSize: 15,
                              borderRadius: 14,
                              paddingHorizontal: 14,
                            },
                          }),
                        ],
                      }),
                    3 === F &&
                      (0, z.jsx)(o.default, {
                        accessibilityRole: 'radiogroup',
                        style: {
                          flexDirection: 'row-reverse',
                          flexWrap: 'wrap',
                          gap: k ? 8 : 10,
                        },
                        children: j.HEARD_FROM.map((e) =>
                          (0, z.jsx)(
                            T,
                            {
                              testID: 'journey-heard-' + e.id,
                              label: (0, S.L)(e.label),
                              selected: B === e.id,
                              onPress: () => W(B === e.id ? null : e.id),
                            },
                            e.id,
                          ),
                        ),
                      }),
                    !!K &&
                      (0, z.jsx)(h.Copy, {
                        accessibilityRole: 'alert',
                        style: {
                          fontSize: 14,
                          lineHeight: 20,
                          color: H.danger,
                        },
                        children: K,
                      }),
                  ],
                }),
                (0, z.jsxs)(o.default, {
                  style: { paddingHorizontal: $, paddingTop: 8, gap: 6 },
                  children: [
                    (0, z.jsx)(l.default, {
                      testID: 3 === F ? 'journey-enter' : 'journey-next',
                      accessibilityRole: 'button',
                      accessibilityState: { disabled: !U || O, busy: O },
                      disabled: !U || O,
                      onPress: Y,
                      style: ({ pressed: e }) => ({
                        height: 54,
                        borderRadius: 16,
                        backgroundColor: H.accent,
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: !U || O ? 0.45 : e ? 0.9 : 1,
                      }),
                      children: (0, z.jsx)(h.Copy, {
                        style: {
                          fontSize: 17,
                          lineHeight: 24,
                          fontFamily: 'Vazirmatn_600SemiBold',
                          color: H.onAccent,
                        },
                        children: O ? C.busy : 3 === F ? C.enter : C.next,
                      }),
                    }),
                    3 === F &&
                      (0, z.jsx)(l.default, {
                        testID: 'journey-skip',
                        accessibilityRole: 'button',
                        disabled: O,
                        onPress: () => {
                          Q(!0);
                        },
                        style: ({ pressed: e }) => ({
                          height: 44,
                          alignItems: 'center',
                          justifyContent: 'center',
                          opacity: O ? 0.4 : e ? 0.6 : 1,
                        }),
                        children: (0, z.jsx)(h.Copy, {
                          style: {
                            fontSize: 15,
                            lineHeight: 22,
                            fontFamily: 'Vazirmatn_500Medium',
                            color: H.muted,
                          },
                          children: C.skip,
                        }),
                      }),
                  ],
                }),
              ],
            }),
          }),
        });
      }));
    var t = r(d[0]),
      n = (e(r(d[1])), e(r(d[2])));
    r(d[3]);
    var l = e(r(d[4])),
      s = e(r(d[5])),
      o = e(r(d[6])),
      c = e(r(d[7])),
      u = r(d[8]),
      y = r(d[9]),
      h = r(d[10]),
      f = r(d[11]),
      p = r(d[12]),
      b = r(d[13]),
      x = r(d[14]),
      j = r(d[15]),
      S = r(d[16]),
      z = r(d[17]);
    const C = (0, S.localized)({
        nameTitle:
          '\u0627\u0633\u0645 \u0641\u0631\u0648\u0634\u06af\u0627\u0647\u062a \u0686\u06cc\u0647\u061f',
        namePlaceholder:
          '\u0645\u062b\u0644\u0627\u064b \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0646\u0648\u0631',
        fieldTitle:
          '\u0641\u0631\u0648\u0634\u06af\u0627\u0647\u062a \u062f\u0631 \u0686\u0647 \u0632\u0645\u06cc\u0646\u0647\u200c\u0627\u06cc\u0647\u061f',
        fieldCustom:
          '\u0627\u06af\u0631 \u0646\u0628\u0648\u062f\u060c \u0627\u06cc\u0646\u062c\u0627 \u0628\u0646\u0648\u06cc\u0633',
        heardTitle:
          '\u0627\u0632 \u06a9\u062c\u0627 \u0628\u0627 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u0622\u0634\u0646\u0627 \u0634\u062f\u06cc\u061f',
        next: '\u0628\u0639\u062f\u06cc',
        enter:
          '\u0648\u0631\u0648\u062f \u0628\u0647 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc',
        skip: '\u0631\u062f \u06a9\u0631\u062f\u0646',
        back: '\u0642\u0628\u0644\u06cc',
        exit: '\u062e\u0631\u0648\u062c',
        busy: '\u062f\u0631 \u062d\u0627\u0644 \u0633\u0627\u062e\u062a\u2026',
      }),
      I = (e) => e.toLocaleString((0, S.numberLocale)());
    function T({ label: e, selected: t, onPress: n, testID: o }) {
      const { colors: c } = (0, p.useTheme)();
      return (0, z.jsxs)(l.default, {
        testID: o,
        accessibilityRole: 'radio',
        accessibilityState: { selected: t, checked: t },
        onPress: n,
        style: ({ pressed: e }) => ({
          minHeight: 46,
          paddingHorizontal: 16,
          borderRadius: 23,
          flexDirection: 'row-reverse',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          borderWidth: t ? 1 : s.default.hairlineWidth,
          borderColor: t ? c.accent : c.line,
          backgroundColor: t ? c.accent : c.surface,
          opacity: e ? 0.85 : 1,
        }),
        children: [
          t &&
            (0, z.jsx)(f.Icon, { name: 'check', size: 16, color: c.onAccent }),
          (0, z.jsx)(h.Copy, {
            style: {
              fontSize: 15,
              lineHeight: 22,
              fontFamily: t ? 'Vazirmatn_600SemiBold' : 'Vazirmatn_500Medium',
              color: t ? c.onAccent : c.text,
            },
            children: e,
          }),
        ],
      });
    }
  },
  552,
  [
    2, 204, 224, 94, 232, 17, 99, 257, 380, 342, 407, 385, 382, 415, 519, 553,
    311, 338,
  ],
);
