// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 863; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'DEMO_BANNER_TEXT', {
        enumerable: !0,
        get: function () {
          return h;
        },
      }),
      Object.defineProperty(_e, 'DEMO_OWN_LABEL', {
        enumerable: !0,
        get: function () {
          return y;
        },
      }),
      (_e.DemoBanner = function ({ onTrial: e, compact: p = !1 }) {
        const { colors: _ } = (0, c.useTheme)(),
          j = (0, o.default)().width < 430;
        return (0, f.demoActive)()
          ? (0, b.jsxs)(n.default, {
              testID: 'demo-banner',
              accessibilityRole: 'summary',
              style: {
                width: '100%',
                maxWidth: 760,
                alignSelf: 'center',
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 8,
                paddingVertical: p ? 5 : 6,
                paddingRight: j ? 10 : 12,
                paddingLeft: 5,
                borderRadius: 14,
                borderWidth: 1,
                borderColor: _.accent,
                backgroundColor: _.accentSoft,
              },
              children: [
                !j &&
                  (0, b.jsx)(s.Icon, {
                    name: 'store',
                    size: 16,
                    color: _.accent,
                  }),
                (0, b.jsx)(l.Copy, {
                  style: {
                    flex: 1,
                    minWidth: 0,
                    fontSize: j ? 11.5 : 12,
                    lineHeight: 18,
                    fontFamily: 'Vazirmatn_600SemiBold',
                    color: _.text,
                  },
                  children: (0, u.L)(h),
                }),
                (0, b.jsx)(t.default, {
                  testID: 'demo-own-shop',
                  hitSlop: 6,
                  accessibilityRole: 'button',
                  accessibilityLabel: (0, u.L)(y),
                  onPress: e || f.demoStartOwn,
                  style: ({ pressed: e }) => ({
                    minHeight: 34,
                    paddingHorizontal: j ? 9 : 12,
                    borderRadius: 10,
                    justifyContent: 'center',
                    backgroundColor: e ? _.accentActive : _.accent,
                  }),
                  children: (0, b.jsx)(l.Copy, {
                    style: {
                      fontSize: j ? 12 : 12.5,
                      lineHeight: 19,
                      fontFamily: 'Vazirmatn_700Bold',
                      color: _.onAccent,
                    },
                    children: (0, u.L)(y),
                  }),
                }),
              ],
            })
          : null;
      }));
    var t = e(r(d[0])),
      n = e(r(d[1])),
      o = e(r(d[2])),
      c = r(d[3]),
      l = r(d[4]),
      s = r(d[5]),
      u = r(d[6]),
      f = r(d[7]),
      b = r(d[8]);
    const h =
        '\u0627\u06cc\u0646 \u06cc\u06a9 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0646\u0645\u0648\u0646\u0647 \u0627\u0633\u062a\u061b \u0686\u06cc\u0632\u06cc \u0630\u062e\u06cc\u0631\u0647 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f',
      y =
        '\u0633\u0627\u062e\u062a \u0645\u063a\u0627\u0632\u0647\u0654 \u062e\u0648\u062f\u0645';
  },
  863,
  [232, 99, 257, 382, 407, 385, 311, 448, 338],
);
