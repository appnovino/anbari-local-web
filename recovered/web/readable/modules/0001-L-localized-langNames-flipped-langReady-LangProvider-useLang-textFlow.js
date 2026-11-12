// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'L', {
        enumerable: !0,
        get: function () {
          return o.L;
        },
      }),
      Object.defineProperty(_e, 'localized', {
        enumerable: !0,
        get: function () {
          return o.localized;
        },
      }),
      Object.defineProperty(_e, 'langNames', {
        enumerable: !0,
        get: function () {
          return d;
        },
      }),
      Object.defineProperty(_e, 'flipped', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      Object.defineProperty(_e, 'langReady', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }),
      (_e.LangProvider = function ({ children: e }) {
        const [d, f] = (0, t.useState)((0, o.localeLang)()),
          [s, h] = (0, t.useState)(!0);
        return (
          (0, t.useEffect)(() => {}, []),
          s
            ? (0, l.jsx)(P.Provider, {
                value: {
                  lang: d,
                  setLang: function e(t) {
                    if (t === d) return;
                    try {
                      window.localStorage.setItem(u, t);
                      const e = new URL(window.location.href);
                      return (
                        e.searchParams.delete('lang'),
                        window.history.replaceState(
                          window.history.state,
                          '',
                          e.toString(),
                        ),
                        void window.location.reload()
                      );
                    } catch {}
                    if ('fa' !== t && !c.dictionaries[t])
                      return void (0, c.loadDictionary)(t).then(
                        () => e(t),
                        () => {},
                      );
                    (w(t),
                      f(t),
                      n.default
                        .setItem(u, t)
                        .catch(() => {})
                        .then(() => U(t)));
                  },
                },
                children: (0, l.jsx)(j, { children: e }, d),
              })
            : null
        );
      }),
      Object.defineProperty(_e, 'useLang', {
        enumerable: !0,
        get: function () {
          return L;
        },
      }),
      (_e.textFlow = function (e, t = !1) {
        if (!s()) return e;
        const n = e.textAlign,
          o =
            'center' === n ||
            'justify' === n ||
            (!t && 'ltr' === e.writingDirection && 'left' === n);
        return {
          ...e,
          writingDirection: 'ltr',
          textAlign: o ? n : t ? 'left' : 'left' === n ? 'right' : 'left',
        };
      }));
    var t = r(_d[0]);
    (r(_d[1]), e(r(_d[2])));
    r(_d[3]);
    var n = e(r(_d[4])),
      o =
        ((function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          (e &&
            Object.keys(e).forEach(function (n) {
              var o = Object.getOwnPropertyDescriptor(e, n);
              Object.defineProperty(
                t,
                n,
                o.get
                  ? o
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[n];
                      },
                    },
              );
            }),
            (t.default = e));
        })(r(_d[5])),
        r(_d[6])),
      c = r(_d[7]),
      l = r(_d[8]);
    const u = 'anbari.lang',
      d = {
        fa: '\u0641\u0627\u0631\u0633\u06cc',
        en: 'English',
        ar: '\u0627\u0644\u0639\u0631\u0628\u064a\u0629',
      },
      f = (e) => o.LANGS.includes(e),
      s = (e = (0, o.localeLang)()) => 'en' === e;
    function w(e) {
      ((0, o.setLocaleLang)(e),
        (0, o.setTranslator)(
          'fa' === e ? (e) => e : (t) => c.dictionaries[e]?.[t] ?? t,
        ),
        'undefined' != typeof document &&
          ((document.documentElement.lang = e),
          (document.documentElement.dir = s(e) ? 'rtl' : 'ltr'),
          'en' === e && y()));
    }
    const h =
      'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-200B,U+2010-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD';
    function y() {
      if (document.getElementById('anbari-latin-font')) return;
      const e = document.createElement('style');
      ((e.id = 'anbari-latin-font'),
        (e.textContent = [
          ['400Regular', 400],
          ['500Medium', 500],
          ['600SemiBold', 600],
          ['700Bold', 700],
        ]
          .map(
            ([e, t]) =>
              `@font-face{font-family:"Vazirmatn_${e}";src:url("/fonts/inter/inter-${t}.woff2") format("woff2");font-display:swap;unicode-range:${h}}`,
          )
          .join('\n')));
      const t = () => {
        document.head.lastElementChild !== e && document.head.appendChild(e);
      };
      (t(), new MutationObserver(t).observe(document.head, { childList: !0 }));
    }
    async function U(e) {}
    const b = (function () {
      if ('undefined' == typeof window) return 'fa';
      try {
        const e = new URL(window.location.href);
        e.searchParams.has('fresh') &&
          (e.searchParams.delete('fresh'),
          window.history.replaceState(window.history.state, '', e.toString()));
      } catch {}
      try {
        const e = new URLSearchParams(window.location.search).get('lang');
        if (f(e)) return (window.localStorage.setItem(u, e), e);
        const t = window.localStorage.getItem(u);
        if (f(t)) return t;
      } catch {}
      return 'fa';
    })();
    w(b);
    const p =
        'fa' === b
          ? Promise.resolve()
          : Promise.race([
              (0, c.loadDictionary)(b),
              new Promise((e, t) =>
                setTimeout(() => t(new Error('timeout')), 8e3),
              ),
            ]).then(
              () => w(b),
              () => w('fa'),
            ),
      P = (0, t.createContext)({ lang: 'fa', setLang: () => {} });
    function j({ children: e }) {
      return (0, l.jsx)(l.Fragment, { children: e });
    }
    const L = () => (0, t.useContext)(P);
  },
  1,
  [2, 4, 206, 94, 258, 264, 311, 312, 338],
);
