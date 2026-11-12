// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 976; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'RECIPE_TEAL', {
        enumerable: !0,
        get: function () {
          return x;
        },
      }),
      (_e.RecipeHubButton = function ({
        onPress: e,
        testID: p = 'add-recipe',
      }) {
        const y = (0, s.useContext)(l.AddTileContext),
          { mode: h } = (0, c.useTheme)(),
          j = x['dark' === h ? 'dark' : 'light'],
          C = (0, u.L)(
            '\u062f\u0633\u062a\u0648\u0631 \u0633\u0627\u062e\u062a',
          );
        return y
          ? (0, b.jsxs)(t.default, {
              testID: p,
              accessibilityRole: 'button',
              accessibilityLabel: C,
              onPress: e,
              style: ({ pressed: e }) => ({
                flex: 1,
                minWidth: 0,
                minHeight: y,
                padding: 18,
                justifyContent: 'space-between',
                gap: 12,
                borderRadius: 22,
                backgroundColor: e ? j.pressed : j.fill,
              }),
              children: [
                (0, b.jsx)(n.default, {
                  style: {
                    alignSelf: 'flex-end',
                    width: 46,
                    height: 46,
                    borderRadius: 23,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: j.text + '24',
                  },
                  children: (0, b.jsx)(o.Icon, {
                    name: 'recipe',
                    size: 24,
                    color: j.text,
                  }),
                }),
                (0, b.jsx)(n.default, {
                  style: { gap: 2 },
                  children: (0, b.jsx)(f.Copy, {
                    numberOfLines: 1,
                    style: {
                      fontSize: 20,
                      lineHeight: 32,
                      color: j.text,
                      fontFamily: 'Vazirmatn_700Bold',
                    },
                    children: C,
                  }),
                }),
              ],
            })
          : (0, b.jsxs)(t.default, {
              testID: p,
              accessibilityRole: 'button',
              accessibilityLabel: C,
              onPress: e,
              style: ({ pressed: e }) => ({
                minHeight: 52,
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 10,
                paddingHorizontal: 16,
                borderRadius: 16,
                backgroundColor: e ? j.pressed : j.fill,
              }),
              children: [
                (0, b.jsx)(o.Icon, { name: 'recipe', size: 20, color: j.text }),
                (0, b.jsx)(f.Copy, {
                  numberOfLines: 1,
                  style: {
                    flex: 1,
                    fontSize: 16,
                    lineHeight: 26,
                    color: j.text,
                    fontFamily: 'Vazirmatn_700Bold',
                  },
                  children: C,
                }),
              ],
            });
      }));
    var t = e(r(d[0])),
      n = e(r(d[1])),
      s = r(d[2]),
      l = r(d[3]),
      o = r(d[4]),
      f = r(d[5]),
      c = r(d[6]),
      u = r(d[7]),
      b = r(d[8]);
    const x = {
      light: { fill: '#0d9488', pressed: '#0f766e', text: '#ffffff' },
      dark: { fill: '#0d9488', pressed: '#0f766e', text: '#ffffff' },
    };
  },
  976,
  [232, 99, 2, 885, 385, 407, 382, 311, 338],
);
