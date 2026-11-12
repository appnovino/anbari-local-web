// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 612; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'KeepTab', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    var e,
      t = r(d[0]),
      n = r(d[1]),
      c = (e = n) && e.__esModule ? e : { default: e },
      u = r(d[2]);
    function o({ active: e, children: t }) {
      return (0, u.jsx)(c.default, { style: e ? void 0 : l, children: t });
    }
    const l = { display: 'none' },
      s = (0, t.memo)(o, (e, t) => !e.active && !t.active);
  },
  612,
  [2, 99, 338],
);
