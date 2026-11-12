// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 229; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return v;
        },
      }));
    var t = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        return (
          e &&
            Object.keys(e).forEach(function (n) {
              var u = Object.getOwnPropertyDescriptor(e, n);
              Object.defineProperty(
                t,
                n,
                u.get
                  ? u
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[n];
                      },
                    },
              );
            }),
          (t.default = e),
          t
        );
      })(r(_d[0])),
      n = e(r(_d[1])),
      u = e(r(_d[2])),
      c = e(r(_d[3])),
      o = e(r(_d[4])),
      l = e(r(_d[5])),
      f = () =>
        (0, u.default)('div', {
          role: 'none',
          tabIndex: 0,
          style: E.focusBracket,
        });
    function s(e) {
      if (!l.default) return !1;
      try {
        e.focus();
      } catch (e) {}
      return document.activeElement === e;
    }
    function d(e) {
      for (var t = 0; t < e.childNodes.length; t++) {
        var n = e.childNodes[t];
        if (s(n) || d(n)) return !0;
      }
      return !1;
    }
    function i(e) {
      for (var t = e.childNodes.length - 1; t >= 0; t--) {
        var n = e.childNodes[t];
        if (s(n) || i(n)) return !0;
      }
      return !1;
    }
    var v = (e) => {
        var u = e.active,
          c = e.children,
          s = t.useRef(),
          v = t.useRef({ trapFocusInProgress: !1, lastFocusedElement: null });
        return (
          t.useEffect(() => {
            if (l.default) {
              var e = () => {
                if (null != s.current && !v.current.trapFocusInProgress && u) {
                  try {
                    if (
                      ((v.current.trapFocusInProgress = !0),
                      document.activeElement instanceof Node &&
                        !s.current.contains(document.activeElement))
                    ) {
                      var e = d(s.current);
                      (v.current.lastFocusedElement ===
                        document.activeElement && (e = i(s.current)),
                        !e &&
                          null != s.current &&
                          document.activeElement &&
                          o.default.focus(s.current));
                    }
                  } finally {
                    v.current.trapFocusInProgress = !1;
                  }
                  v.current.lastFocusedElement = document.activeElement;
                }
              };
              return (
                e(),
                document.addEventListener('focus', e, !0),
                () => document.removeEventListener('focus', e, !0)
              );
            }
          }, [u]),
          t.useEffect(function () {
            if (l.default) {
              var e = document.activeElement;
              return function () {
                e && document.contains(e) && o.default.focus(e);
              };
            }
          }, []),
          t.createElement(
            t.Fragment,
            null,
            t.createElement(f, null),
            t.createElement(n.default, { ref: s }, c),
            t.createElement(f, null),
          )
        );
      },
      E = c.default.create({ focusBracket: { outlineStyle: 'none' } });
  },
  229,
  [2, 99, 5, 17, 85, 26],
);
