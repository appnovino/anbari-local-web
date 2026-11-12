// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 617; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'NUMBER_LINE', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      (_e.NumberLine = function ({ children: e, style: t, testID: u }) {
        return (0, l.jsx)(n.default, {
          testID: u,
          style: [s, { alignItems: 'center' }, t],
          children: e,
        });
      }),
      (_e.StepperRow = function ({
        minus: e,
        plus: t,
        children: u,
        style: c,
        testID: o,
      }) {
        return (0, l.jsxs)(n.default, {
          testID: o,
          style: [s, { alignItems: 'center' }, c],
          children: [e, u, t],
        });
      }));
    var e,
      t = r(d[0]),
      n = (e = t) && e.__esModule ? e : { default: e },
      l = r(d[1]);
    const s = { flexDirection: 'row', direction: 'ltr' };
  },
  617,
  [99, 338],
);
