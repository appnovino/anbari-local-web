// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 382; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'ACCENT', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      Object.defineProperty(_e, 'BRAND', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      Object.defineProperty(_e, 'SPARK', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      Object.defineProperty(_e, 'PEARL', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      Object.defineProperty(_e, 'themeStorageKey', {
        enumerable: !0,
        get: function () {
          return w;
        },
      }),
      (_e.ThemeProvider = function ({ children: e }) {
        const [c, s] = (0, t.useState)(k),
          [u, l] = (0, t.useState)(!0),
          h = (0, t.useRef)(c);
        return (
          (h.current = c),
          (0, t.useEffect)(() => {
            x(c);
          }, [c]),
          (0, t.useEffect)(() => {}, []),
          (0, t.useEffect)(() => {
            u && n.default.setItem(w, c).catch(() => {});
          }, [c, u]),
          u
            ? (0, o.jsx)(y.Provider, {
                value: {
                  mode: c,
                  colors: p[c],
                  toggle: function () {
                    const e = 'light' === h.current ? 'dark' : 'light',
                      t = () => {
                        ((h.current = e), s(e));
                      };
                    if ((x(e), 'undefined' != typeof document))
                      try {
                        const e = document,
                          n =
                            'undefined' != typeof window &&
                            !!window.matchMedia?.(
                              '(prefers-reduced-motion: reduce)',
                            ).matches;
                        if ('function' == typeof e.startViewTransition && !n) {
                          const { flushSync: n } = r(d[5]);
                          return (
                            P(),
                            void e.startViewTransition(() => {
                              n(t);
                            })
                          );
                        }
                      } catch {}
                    t();
                  },
                },
                children: e,
              })
            : (0, o.jsx)(f.default, {
                style: { flex: 1, backgroundColor: p.dark.bg },
              })
        );
      }),
      Object.defineProperty(_e, 'useTheme', {
        enumerable: !0,
        get: function () {
          return j;
        },
      }),
      (_e.ThemeScope = function ({ mode: e, children: n }) {
        const f = (0, t.useContext)(y);
        return (0, o.jsx)(y.Provider, {
          value: { ...f, mode: e, colors: p[e] },
          children: n,
        });
      }));
    var t = r(d[0]),
      n = e(r(d[1]));
    r(d[2]);
    var f = e(r(d[3])),
      o = r(d[4]);
    const c = {
        light: '#0d9488',
        onLight: '#ffffff',
        dark: '#14b8a6',
        onDark: '#ffffff',
        focus: '#0f766e',
      },
      s = {
        stops: ['#0a4f4b', '#0f766e', '#0a7f88'],
        pressed: ['#083f3b', '#0c615b', '#086c74'],
        locations: [0, 0.55, 1],
        on: '#ffffff',
      },
      u = {
        light: { base: '#c3c9d1', shine: ['#9aa3ae', '#ffffff', '#7c8592'] },
        dark: { base: '#6b7280', shine: ['#aab2bd', '#ffffff', '#d6dbe1'] },
        teal: {
          base: '#7fb8b2',
          from: '#c3c9d1',
          to: '#0d9488',
          shine: ['#9aa3ae', '#ffffff', '#7c8592'],
        },
      },
      l = {
        stops: ['#ffffff', '#f4f7f7', '#d9e1e0', '#b9c4c2'],
        locations: [0, 0.38, 0.7, 1],
        ink: '#16201f',
        shadow: 'rgba(0,0,0,0.28)',
      },
      h = (e, t) => `${e}${t}`,
      b = {
        brand: s.stops,
        brandPressed: s.pressed,
        brandLocations: s.locations,
        onBrand: s.on,
      },
      p = {
        light: {
          bg: '#f2f2f7',
          surface: '#ffffff',
          glass: '#ffffffeb',
          text: '#111114',
          muted: '#5c5c63',
          line: '#e5e5ea',
          soft: '#ececf0',
          accent: c.light,
          onAccent: c.onLight,
          accentActive: c.focus,
          accentSoft: h(c.light, '1f'),
          ...b,
          spark: u.light,
          yellow: c.light,
          yellowSoft: h(c.light, '1f'),
          warning: '#856000',
          warningSoft: '#fff4c2',
          warningBorder: '#dfb63c',
          danger: '#a03434',
          hero: ['#ffffff', '#e0f5f2'],
          glassHighlight: '#ffffff59',
          glassMuted: '#5c5c63',
          success: '#16a34a',
          onSuccess: '#ffffff',
          whatsapp: '#178a43',
        },
        dark: {
          bg: '#0b0b0d',
          surface: '#1c1c1e',
          glass: '#1c1c1eeb',
          text: '#f5f5f7',
          muted: '#a1a1a8',
          line: '#3a3a3c',
          soft: '#2c2c2e',
          accent: c.dark,
          onAccent: c.onDark,
          accentActive: c.focus,
          accentSoft: h(c.dark, '33'),
          ...b,
          spark: u.dark,
          yellow: c.dark,
          yellowSoft: h(c.dark, '33'),
          warning: '#fcd34d',
          warningSoft: '#3a3015',
          warningBorder: '#826b2b',
          danger: '#ffaaa6',
          hero: ['#1c1c1e', '#0b0b0d'],
          glassHighlight: '#ffffff1f',
          glassMuted: '#a1a1a8',
          success: '#22c55e',
          onSuccess: '#ffffff',
          whatsapp: '#25d366',
        },
      },
      w = 'anbar.theme',
      y = (0, t.createContext)({
        mode: 'light',
        colors: p.light,
        toggle: () => {},
      });
    function k() {
      try {
        return 'undefined' != typeof window &&
          'dark' === window.localStorage.getItem(w)
          ? 'dark'
          : 'light';
      } catch {
        return 'light';
      }
    }
    const S = 'anbari-theme-wipe',
      v =
        '::view-transition-old(root),::view-transition-new(root){animation:none;mix-blend-mode:normal}::view-transition-new(root){animation:anbari-wipe .7s ease-in-out}@keyframes anbari-wipe{from{clip-path:inset(0 0 0 100%)}to{clip-path:inset(0 0 0 0)}}';
    function P() {
      if ('undefined' == typeof document || document.getElementById(S)) return;
      const e = document.createElement('style');
      ((e.id = S), (e.textContent = v), document.head.appendChild(e));
    }
    function x(e) {
      if ('undefined' != typeof document)
        try {
          document.documentElement.style.colorScheme = e;
        } catch {}
    }
    const j = () => (0, t.useContext)(y);
  },
  382,
  [2, 258, 94, 99, 338, 81],
);
