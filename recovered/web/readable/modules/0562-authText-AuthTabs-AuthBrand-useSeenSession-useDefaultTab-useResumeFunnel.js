// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 562; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'authText', {
        enumerable: !0,
        get: function () {
          return x;
        },
      }),
      (_e.AuthTabs = function ({ tab: e, onChange: t, compact: l = !1 }) {
        const { colors: c, mode: h } = (0, f.useTheme)(),
          p = 'light' === h,
          S = (s, o, f) => {
            const b = e === s;
            return (0, y.jsxs)(
              n.default,
              {
                testID: 'auth-tab-' + s,
                accessibilityRole: 'tab',
                accessibilityState: { selected: b },
                accessibilityLabel: o + '\u060c ' + f,
                onPress: () => {
                  b || t(s);
                },
                style: ({ pressed: e }) => ({
                  flex: 1,
                  minHeight: l ? 44 : 52,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: l ? 3 : 5,
                  backgroundColor: b ? (p ? '#ffffff' : c.line) : 'transparent',
                  boxShadow: b
                    ? p
                      ? '0 1px 3px rgba(17,17,20,.14), 0 1px 1px rgba(17,17,20,.04)'
                      : '0 1px 2px rgba(0,0,0,.5)'
                    : 'none',
                  opacity: e && !b ? 0.7 : 1,
                }),
                children: [
                  (0, y.jsx)(u.Copy, {
                    style: {
                      fontSize: l ? 15 : 16,
                      lineHeight: l ? 20 : 22,
                      fontFamily: b
                        ? 'Vazirmatn_700Bold'
                        : 'Vazirmatn_600SemiBold',
                      color: b ? c.text : c.muted,
                      textAlign: 'center',
                    },
                    children: o,
                  }),
                  !l &&
                    (0, y.jsx)(u.Copy, {
                      style: {
                        fontSize: 11,
                        lineHeight: 15,
                        color: b ? c.accent : c.muted,
                        textAlign: 'center',
                        fontFamily: 'Vazirmatn_500Medium',
                      },
                      children: f,
                    }),
                ],
              },
              s,
            );
          };
        return (0, y.jsxs)(o.default, {
          testID: 'auth-tabs',
          accessibilityRole: 'tablist',
          style: {
            flexDirection: 'row-reverse',
            direction: (0, b.flipped)() ? 'rtl' : 'ltr',
            gap: 3,
            padding: 3,
            borderRadius: 13,
            backgroundColor: c.soft,
            borderWidth: p ? 0 : s.default.hairlineWidth,
            borderColor: c.line,
          },
          children: [
            S('signin', x.signin, x.signinSub),
            S('signup', x.signup, x.signupSub),
          ],
        });
      }),
      (_e.AuthBrand = function ({ compact: e = !1 }) {
        const { colors: t } = (0, f.useTheme)();
        return (0, y.jsxs)(o.default, {
          testID: 'auth-brand',
          style: {
            flexDirection: 'row-reverse',
            direction: (0, b.flipped)() ? 'rtl' : 'ltr',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            paddingBottom: e ? 0 : 4,
          },
          children: [
            (0, y.jsx)(o.default, {
              style: {
                width: e ? 34 : 40,
                height: e ? 34 : 40,
                borderRadius: 12,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: t.accentSoft,
              },
              children: (0, y.jsx)(c.BrandMark, {
                size: e ? 28 : 32,
                tone: 'blue',
              }),
            }),
            (0, y.jsx)(u.Copy, {
              style: {
                fontSize: e ? 18 : 20,
                lineHeight: e ? 26 : 30,
                fontFamily: 'Vazirmatn_700Bold',
                color: t.text,
              },
              children: (0, h.L)(
                '\u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc',
              ),
            }),
          ],
        });
      }),
      (_e.useSeenSession = function (e) {
        (0, t.useEffect)(() => {
          e && l.default.setItem(p.SEEN_KEY, '1').catch(() => {});
        }, [e]);
      }),
      (_e.useDefaultTab = function (e) {
        const n = (0, t.useRef)(!1);
        (0, t.useEffect)(() => {
          if (n.current) return;
          n.current = !0;
          ('undefined' != typeof window ? window.location.hash : '') ||
            l.default
              .getItem(p.SEEN_KEY)
              .then((t) =>
                e((0, p.defaultAuthTab)({ seen: (0, p.seenValue)(t) })),
              )
              .catch(() => e('signup'));
        }, []);
      }),
      (_e.useResumeFunnel = function (e) {
        (0, t.useEffect)(() => {}, []);
      }));
    var t = r(d[0]);
    r(d[1]);
    var n = e(r(d[2])),
      s = e(r(d[3])),
      o = e(r(d[4])),
      l = e(r(d[5])),
      u = r(d[6]),
      c = r(d[7]),
      f = r(d[8]),
      b = r(d[9]),
      h = r(d[10]),
      p = r(d[11]),
      y = (r(d[12]), r(d[13]));
    const x = (0, h.localized)({
      signin: '\u0648\u0631\u0648\u062f',
      signinSub: '\u062d\u0633\u0627\u0628 \u062f\u0627\u0631\u0645',
      signup: '\u062b\u0628\u062a\u200c\u0646\u0627\u0645',
      signupSub: '\u062d\u0633\u0627\u0628 \u0646\u062f\u0627\u0631\u0645',
      signinTitle: '\u062e\u0648\u0634 \u0628\u0631\u06af\u0634\u062a\u06cc',
      signupTitle:
        '\u0633\u0644\u0627\u0645! \u062d\u0633\u0627\u0628 \u062a\u0627\u0632\u0647 \u0628\u0633\u0627\u0632',
      signupHint:
        '\u06cc\u06a9\u06cc \u0627\u0632 \u0627\u06cc\u0646 \u0631\u0627\u0647\u200c\u0647\u0627 \u0631\u0627 \u0628\u0632\u0646\u061b \u06a9\u0645\u062a\u0631 \u0627\u0632 \u06cc\u06a9 \u062f\u0642\u06cc\u0642\u0647 \u0637\u0648\u0644 \u0645\u06cc\u200c\u06a9\u0634\u062f.',
    });
  },
  562,
  [2, 94, 232, 17, 99, 258, 407, 486, 382, 1, 311, 537, 554, 338],
);
