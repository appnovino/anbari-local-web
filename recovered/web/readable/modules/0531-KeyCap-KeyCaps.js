// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 531; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.KeyCap = f),
      (_e.KeyCaps = function ({ keys: e, tone: n }) {
        return (0, l.jsx)(t.default, {
          style: {
            flexDirection: 'row',
            direction: 'ltr',
            gap: 3,
            alignItems: 'center',
          },
          children: e.map((e, t) => (0, l.jsx)(f, { tone: n, children: e }, t)),
        });
      }),
      r(d[0]));
    var e,
      n = r(d[1]),
      t = (e = n) && e.__esModule ? e : { default: e },
      o = r(d[2]),
      i = r(d[3]),
      l = r(d[4]);
    const s = 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';
    function f({ children: e, tone: n, testID: f }) {
      const { colors: c } = (0, i.useTheme)(),
        u = 'onBrand' === n;
      return (0, l.jsx)(t.default, {
        testID: f,
        style: {
          minWidth: 20,
          height: 20,
          paddingHorizontal: 5,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: u ? '#ffffff55' : c.line,
          backgroundColor: u ? '#ffffff1f' : c.surface,
          alignItems: 'center',
          justifyContent: 'center',
        },
        children: (0, l.jsx)(o.Copy, {
          style: {
            fontSize: 10.5,
            lineHeight: 16,
            fontFamily: s,
            color: u ? c.onBrand : c.muted,
            writingDirection: 'ltr',
          },
          children: e,
        }),
      });
    }
  },
  531,
  [94, 99, 407, 382, 338],
);
