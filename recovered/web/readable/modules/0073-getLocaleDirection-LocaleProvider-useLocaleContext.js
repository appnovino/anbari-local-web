// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 73; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.getLocaleDirection = u),
      (_e.LocaleProvider = function (e) {
        var t = e.direction,
          o = e.locale,
          l = e.children;
        return t || o
          ? n.default.createElement(c.Provider, {
              children: l,
              value: { direction: o ? u(o) : t, locale: o },
            })
          : l;
      }),
      (_e.useLocaleContext = function () {
        return (0, t.useContext)(c);
      }));
    var e,
      t = r(d[0]),
      n = (e = t) && e.__esModule ? e : { default: e },
      o = r(d[1]),
      l = { direction: 'ltr', locale: 'en-US' },
      c = (0, t.createContext)(l);
    function u(e) {
      return (0, o.isLocaleRTL)(e) ? 'rtl' : 'ltr';
    }
  },
  73,
  [2, 74],
);
