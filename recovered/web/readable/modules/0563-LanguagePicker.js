// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 563; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.LanguagePicker = function ({ testID: e = 'language-picker' }) {
        const { colors: f } = (0, s.useTheme)(),
          { lang: b, setLang: p } = (0, c.useLang)();
        return (0, u.jsx)(n.default, {
          testID: e,
          style: {
            flexDirection: 'row-reverse',
            backgroundColor: f.soft,
            borderRadius: 999,
            padding: 3,
          },
          children: o.LANGS.map((e) =>
            (0, u.jsx)(
              t.default,
              {
                testID: 'language-' + e,
                accessibilityRole: 'button',
                accessibilityLanguage: e,
                accessibilityState: { selected: b === e },
                onPress: () => p(e),
                style: {
                  paddingHorizontal: 12,
                  paddingVertical: 5,
                  borderRadius: 999,
                  backgroundColor: b === e ? f.accentSoft : 'transparent',
                },
                children: (0, u.jsx)(l.Copy, {
                  style: { fontSize: 11, lineHeight: 18, textAlign: 'center' },
                  children: c.langNames[e],
                }),
              },
              e,
            ),
          ),
        });
      }));
    var t = e(r(d[0])),
      n = e(r(d[1])),
      s = r(d[2]),
      l = r(d[3]),
      o = r(d[4]),
      c = r(d[5]),
      u = r(d[6]);
  },
  563,
  [232, 99, 382, 407, 311, 1, 338],
);
