// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 781; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.StatusBar = s),
      Object.defineProperty(_e, 'setStatusBarStyle', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      Object.defineProperty(_e, 'setStatusBarHidden', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }));
    var t = e(r(d[0])),
      n = e(r(d[1])),
      u = e(r(d[2])),
      l = e(r(d[3])),
      o = r(d[4]);
    function s({
      style: e,
      hideTransitionAnimation: n,
      animated: s,
      hidden: c,
    }) {
      const f = (0, l.default)(),
        y = t.default.useMemo(() => h(e, f), [e, f]);
      return (0, o.jsx)(u.default, {
        animated: s,
        hidden: c,
        barStyle: y,
        showHideTransition: 'none' === n ? void 0 : n,
      });
    }
    s.setStyle = (e, t) => u.default.setBarStyle(h(e), t);
    const c = s.setStyle;
    s.setHidden = (e, t) => u.default.setHidden(e, t);
    const f = s.setHidden;
    function h(e = 'auto', t = n.default?.getColorScheme() ?? 'light') {
      t || (t = 'light');
      let u = e;
      return (
        'auto' === e
          ? (u = 'light' === t ? 'dark' : 'light')
          : 'inverted' === e && (u = 'light' === t ? 'light' : 'dark'),
        'light' === u ? 'light-content' : 'dark-content'
      );
    }
  },
  781,
  [2, 199, 239, 255, 338],
);
