// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 526; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.contactSaveProblem = async function (e, n, t, o) {
        let l;
        try {
          l = await (0, h.listSameName)(e, n.trim(), o);
        } catch {
          return '';
        }
        const s = (0, f.phoneRequirement)(n, t, l, o);
        return s.ok ? '' : s.reason;
      }),
      (_e.copyPlain = async function (e) {
        if (!globalThis.navigator?.clipboard)
          throw Error('clipboard_unavailable');
        await globalThis.navigator.clipboard.writeText(e);
      }),
      (_e.openPeople = x),
      (_e.PhoneLine = j),
      (_e.SameNameNotice = function ({
        contacts: e,
        onPick: h,
        testID: p = 'same-name-notice',
        goTo: b = x,
      }) {
        const { colors: w } = (0, c.useTheme)(),
          S = (0, f.confusableGroups)(e)[0];
        return S
          ? (0, y.jsxs)(o.default, {
              testID: p,
              accessibilityRole: 'alert',
              style: {
                gap: 8,
                padding: 12,
                borderRadius: 14,
                borderWidth: 1,
                borderColor: w.warningBorder,
                backgroundColor: w.warningSoft,
              },
              children: [
                (0, y.jsxs)(o.default, {
                  style: {
                    flexDirection: 'row-reverse',
                    gap: 8,
                    alignItems: 'flex-start',
                  },
                  children: [
                    (0, y.jsx)(s.Icon, {
                      name: 'alert',
                      size: 17,
                      color: w.warning,
                    }),
                    (0, y.jsx)(l.Copy, {
                      style: {
                        flex: 1,
                        minWidth: 0,
                        fontSize: 13,
                        lineHeight: 21,
                        color: w.warning,
                        fontFamily: 'Vazirmatn_600SemiBold',
                      },
                      children: (0, f.confusableText)(
                        S.core,
                        S.contacts.length,
                      ),
                    }),
                  ],
                }),
                !!h &&
                  (0, y.jsx)(o.default, {
                    style: { gap: 6 },
                    children: S.contacts.map((e) =>
                      (0, y.jsxs)(
                        n.default,
                        {
                          testID: p + '-pick',
                          accessibilityRole: 'button',
                          accessibilityLabel: e.name,
                          onPress: () => h(e),
                          style: ({ pressed: e }) => ({
                            minHeight: 44,
                            flexDirection: 'row-reverse',
                            alignItems: 'center',
                            gap: 8,
                            paddingHorizontal: 10,
                            borderRadius: 10,
                            borderWidth: t.default.hairlineWidth,
                            borderColor: w.warningBorder,
                            backgroundColor: e ? w.soft : w.surface,
                          }),
                          children: [
                            (0, y.jsxs)(o.default, {
                              style: { flex: 1, minWidth: 0 },
                              children: [
                                (0, y.jsx)(l.Copy, {
                                  numberOfLines: 1,
                                  style: {
                                    fontSize: 13.5,
                                    lineHeight: 21,
                                    fontFamily: 'Vazirmatn_600SemiBold',
                                  },
                                  children: e.name,
                                }),
                                (0, y.jsx)(j, { phone: e.phone, shared: !0 }),
                              ],
                            }),
                            (0, y.jsx)(l.Copy, {
                              style: {
                                fontSize: 12,
                                color: w.accent,
                                fontFamily: 'Vazirmatn_600SemiBold',
                              },
                              children: (0, u.L)('\u0647\u0645\u06cc\u0646'),
                            }),
                          ],
                        },
                        e.id,
                      ),
                    ),
                  }),
                (0, y.jsxs)(n.default, {
                  testID: p + '-go',
                  accessibilityRole: 'button',
                  onPress: () => b(S.core),
                  style: ({ pressed: e }) => ({
                    alignSelf: 'flex-start',
                    minHeight: 36,
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    gap: 6,
                    paddingHorizontal: 12,
                    borderRadius: 10,
                    backgroundColor: w.surface,
                    borderWidth: t.default.hairlineWidth,
                    borderColor: w.warningBorder,
                    opacity: e ? 0.8 : 1,
                  }),
                  children: [
                    (0, y.jsx)(s.Icon, {
                      name: 'user',
                      size: 15,
                      color: w.text,
                    }),
                    (0, y.jsx)(l.Copy, {
                      style: {
                        fontSize: 13,
                        lineHeight: 20,
                        fontFamily: 'Vazirmatn_600SemiBold',
                      },
                      children: (0, u.L)(
                        '\u0631\u0641\u062a\u0646 \u0628\u0647 \u062d\u0633\u0627\u0628\u200c\u0647\u0627',
                      ),
                    }),
                  ],
                }),
              ],
            })
          : null;
      }),
      r(d[0]),
      r(d[1]));
    var n = e(r(d[2])),
      t = e(r(d[3])),
      o = e(r(d[4])),
      l = r(d[5]),
      s = r(d[6]),
      c = r(d[7]),
      u = r(d[8]),
      f = r(d[9]),
      h = r(d[10]),
      p = r(d[11]),
      b = r(d[12]),
      y = r(d[13]);
    function x(e) {
      (b.invoicesEntries.close(),
        setTimeout(
          () => p.ledgerEntries.open({ screen: 'contacts', q: e }),
          0,
        ));
    }
    function j({ phone: e, shared: n = !1, style: t }) {
      const { colors: o } = (0, c.useTheme)(),
        s = (0, f.maskPhone)(e);
      return s || n
        ? (0, y.jsx)(l.Copy, {
            testID: 'contact-phone-line',
            numberOfLines: 1,
            style: [
              { fontSize: 11, lineHeight: 17, color: s ? o.muted : o.warning },
              t,
            ],
            children:
              s ||
              (0, u.L)(
                '\u0628\u062f\u0648\u0646 \u0634\u0645\u0627\u0631\u0647',
              ),
          })
        : null;
    }
  },
  526,
  [205, 94, 232, 17, 99, 407, 385, 382, 311, 438, 519, 527, 528, 338],
);
