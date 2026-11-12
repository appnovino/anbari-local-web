// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 536; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.GoogleG = C),
      (_e.AuthTiles = function ({
        tab: e,
        tiles: o,
        handlers: l,
        google: s,
        compact: c = !1,
        disabled: f = !1,
      }) {
        const { colors: b } = (0, u.useTheme)(),
          [z, C] = (0, t.useState)(!1),
          [I, S] = (0, t.useState)(!1),
          k = {
            ...l,
            google: () => {
              s.ready ? C(!0) : S(!0);
            },
          };
        return (0, x.jsxs)(n.default, {
          testID: 'auth-tiles-' + e,
          style: { gap: c ? 6 : 10 },
          children: [
            (0, x.jsx)(n.default, {
              style: {
                flexDirection: 'row-reverse',
                direction: (0, y.flipped)() ? 'rtl' : 'ltr',
                gap: c ? 8 : 10,
              },
              children: o.map((t) =>
                (0, x.jsx)(
                  A,
                  {
                    id: t,
                    tab: e,
                    compact: c,
                    disabled: f && 'google' !== t,
                    onPress: (0, p.tileAction)(t, k),
                  },
                  t,
                ),
              ),
            }),
            z &&
              s.ready &&
              (0, x.jsxs)(n.default, {
                testID: 'auth-google-open',
                style: { gap: 6 },
                children: [
                  (0, x.jsx)(h.Copy, {
                    style: {
                      fontSize: 12,
                      lineHeight: 18,
                      color: b.muted,
                      textAlign: 'center',
                    },
                    children: j.googleTap,
                  }),
                  s.button,
                ],
              }),
            I &&
              !s.ready &&
              (0, x.jsx)(h.Copy, {
                testID: 'auth-google-soon',
                accessibilityRole: 'alert',
                style: {
                  fontSize: 13,
                  lineHeight: 18,
                  color: b.muted,
                  textAlign: 'center',
                },
                children: j.googleSoon,
              }),
          ],
        });
      }),
      (_e.DemoCard = function ({
        label: e,
        onPress: t,
        compact: l = !1,
        testID: s = 'auth-demo',
      }) {
        const { colors: c } = (0, u.useTheme)();
        return (0, x.jsxs)(o.default, {
          testID: s,
          accessibilityRole: 'button',
          accessibilityLabel: e,
          accessibilityHint: j.demoHint,
          onPress: t,
          style: ({ pressed: e }) => ({
            flexDirection: 'row-reverse',
            direction: (0, y.flipped)() ? 'rtl' : 'ltr',
            alignItems: 'center',
            gap: 12,
            paddingHorizontal: 14,
            paddingVertical: l ? 8 : 12,
            borderRadius: 16,
            borderWidth: 1.5,
            borderStyle: 'dashed',
            borderColor: c.accent + '66',
            backgroundColor: e ? c.accentSoft : 'transparent',
          }),
          children: [
            (0, x.jsx)(n.default, {
              style: {
                width: l ? 34 : 40,
                height: l ? 34 : 40,
                borderRadius: 12,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: c.accentSoft,
              },
              children: (0, x.jsx)(f.Icon, {
                name: 'store',
                size: l ? 19 : 22,
                color: c.accent,
              }),
            }),
            (0, x.jsxs)(n.default, {
              style: { flex: 1, minWidth: 0, gap: 1 },
              children: [
                (0, x.jsx)(h.Copy, {
                  style: {
                    fontSize: l ? 14 : 15,
                    lineHeight: l ? 20 : 22,
                    fontFamily: 'Vazirmatn_600SemiBold',
                    color: c.text,
                  },
                  children: e,
                }),
                !l &&
                  (0, x.jsx)(h.Copy, {
                    style: { fontSize: 12, lineHeight: 18, color: c.muted },
                    children: j.demoHint,
                  }),
              ],
            }),
            (0, x.jsx)(f.Icon, { name: 'chevron', size: 16, color: c.muted }),
          ],
        });
      }));
    var t = r(d[0]),
      o = e(r(d[1])),
      l = e(r(d[2])),
      n = e(r(d[3])),
      s = r(d[4]),
      c = e(s),
      h = r(d[5]),
      f = r(d[6]),
      u = r(d[7]),
      y = r(d[8]),
      b = r(d[9]),
      p = r(d[10]),
      x = r(d[11]);
    const j = (0, b.localized)({
        phone: '\u0645\u0648\u0628\u0627\u06cc\u0644',
        email: '\u0627\u06cc\u0645\u06cc\u0644',
        google: '\u062c\u06cc\u0645\u06cc\u0644',
        phoneA11y:
          '\u062b\u0628\u062a\u200c\u0646\u0627\u0645 \u0628\u0627 \u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644',
        emailInA11y:
          '\u0648\u0631\u0648\u062f \u0628\u0627 \u0627\u06cc\u0645\u06cc\u0644',
        emailUpA11y:
          '\u0633\u0627\u062e\u062a \u062d\u0633\u0627\u0628 \u0628\u0627 \u0627\u06cc\u0645\u06cc\u0644',
        googleInA11y:
          '\u0648\u0631\u0648\u062f \u0628\u0627 \u062c\u06cc\u0645\u06cc\u0644',
        googleUpA11y:
          '\u062b\u0628\u062a\u200c\u0646\u0627\u0645 \u0628\u0627 \u062c\u06cc\u0645\u06cc\u0644',
        googleSoon:
          '\u0648\u0631\u0648\u062f \u0628\u0627 \u062c\u06cc\u0645\u06cc\u0644 \u0628\u0647\u200c\u0632\u0648\u062f\u06cc \u0641\u0639\u0627\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f',
        googleTap:
          '\u0631\u0648\u06cc \u062f\u06a9\u0645\u0647\u0654 Google \u0628\u0632\u0646 \u0648 \u062d\u0633\u0627\u0628 \u062c\u06cc\u0645\u06cc\u0644\u062a \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646.',
        demoHint:
          '\u06cc\u06a9 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0646\u0645\u0648\u0646\u0647\u061b \u0628\u062f\u0648\u0646 \u062b\u0628\u062a\u200c\u0646\u0627\u0645',
      }),
      z = {
        google: {
          light: { bg: '#ffffff', line: '#dadce0', ink: '#1f1f1f' },
          dark: { bg: '#131314', line: '#8e918f', ink: '#e3e3e3' },
        },
        email: {
          light: { bg: '#eef2ff', line: '#dbe2fe', ink: '#3446a8' },
          dark: {
            bg: 'rgba(129,140,248,.14)',
            line: 'rgba(129,140,248,.32)',
            ink: '#c7d2fe',
          },
        },
      };
    function C({ size: e = 28 }) {
      return (0, x.jsxs)(c.default, {
        width: e,
        height: e,
        viewBox: '0 0 48 48',
        accessible: !1,
        children: [
          (0, x.jsx)(s.Path, {
            fill: '#EA4335',
            d: 'M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z',
          }),
          (0, x.jsx)(s.Path, {
            fill: '#4285F4',
            d: 'M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z',
          }),
          (0, x.jsx)(s.Path, {
            fill: '#FBBC05',
            d: 'M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z',
          }),
          (0, x.jsx)(s.Path, {
            fill: '#34A853',
            d: 'M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z',
          }),
        ],
      });
    }
    function A({ id: e, tab: t, compact: n, disabled: s, onPress: c }) {
      const { colors: y, mode: b } = (0, u.useTheme)(),
        p =
          'phone' === e
            ? { bg: y.accentSoft, line: y.accent + '55', ink: y.accent }
            : z[e][b],
        A = 'phone' === e ? j.phone : 'email' === e ? j.email : j.google,
        I =
          'phone' === e
            ? j.phoneA11y
            : 'email' === e
              ? 'signin' === t
                ? j.emailInA11y
                : j.emailUpA11y
              : 'signin' === t
                ? j.googleInA11y
                : j.googleUpA11y,
        S = 'google' === e ? 'auth-google' : 'auth-' + t + '-' + e;
      return (0, x.jsxs)(o.default, {
        testID: S,
        accessibilityRole: 'button',
        accessibilityLabel: I,
        accessibilityState: { disabled: !!s },
        disabled: s || !c,
        onPress: c,
        style: ({ pressed: e }) => ({
          flex: 1,
          minWidth: 0,
          height: n ? 78 : 96,
          borderRadius: 18,
          borderWidth: 2 * l.default.hairlineWidth,
          borderColor: p.line,
          backgroundColor: p.bg,
          alignItems: 'center',
          justifyContent: 'center',
          gap: n ? 4 : 7,
          opacity: s ? 0.5 : e ? 0.86 : 1,
          transform: [{ scale: e ? 0.97 : 1 }],
        }),
        children: [
          'google' === e
            ? (0, x.jsx)(C, { size: n ? 24 : 28 })
            : (0, x.jsx)(f.Icon, {
                name: 'phone' === e ? 'phone' : 'mail',
                size: n ? 24 : 28,
                color: p.ink,
              }),
          (0, x.jsx)(h.Copy, {
            style: {
              fontSize: n ? 13 : 14,
              lineHeight: n ? 18 : 20,
              fontFamily: 'Vazirmatn_600SemiBold',
              color: p.ink,
              textAlign: 'center',
            },
            children: A,
          }),
        ],
      });
    }
  },
  536,
  [2, 232, 17, 99, 386, 407, 385, 382, 1, 311, 537, 338],
);
