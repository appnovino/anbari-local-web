// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 579; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'ZOOM_STEPS', {
        enumerable: !0,
        get: function () {
          return y;
        },
      }),
      Object.defineProperty(_e, 'DEFAULT_ZOOM', {
        enumerable: !0,
        get: function () {
          return v;
        },
      }),
      (_e.LargeTextProvider = function ({ children: e }) {
        const [n, c] = (0, t.useState)(C);
        (0, t.useEffect)(() => {}, []);
        (0, u.default)().width;
        const [f, s] = (0, t.useState)(T);
        (0, t.useEffect)(() => {
          if ('undefined' == typeof window) return;
          const e = () => s(window.innerWidth);
          return (
            window.addEventListener('resize', e),
            () => window.removeEventListener('resize', e)
          );
        }, []);
        const w = (0, h.shownZoom)(n, f);
        function y(e) {
          const t = j(e) ? e : v;
          (c(t), l.default.setItem(x, String(t)).catch(() => {}));
        }
        return (
          (0, t.useEffect)(() => {
            S(w);
          }, [w]),
          (0, b.jsx)(h.LargeTextContext.Provider, {
            value: {
              enabled: n > 1,
              setEnabled: (e) => y(e ? 1.2 : 1),
              scale: n,
              setScale: y,
              shown: w,
            },
            children: (0, b.jsx)(o.default, {
              style: { flex: 1 },
              children: e,
            }),
          })
        );
      }),
      Object.defineProperty(_e, 'useLargeText', {
        enumerable: !0,
        get: function () {
          return E;
        },
      }),
      (_e.LargeTextSetting = function () {
        const { colors: e } = (0, f.useTheme)(),
          { enabled: t, setEnabled: u } = E();
        return (0, b.jsx)(c.Card, {
          children: (0, b.jsxs)(o.default, {
            style: c.common.between,
            children: [
              (0, b.jsxs)(o.default, {
                style: c.common.flex,
                children: [
                  (0, b.jsx)(c.Copy, {
                    style: t ? { fontSize: 17, lineHeight: 31 } : void 0,
                    children: s.notebookFa.largeText,
                  }),
                  (0, b.jsx)(c.Copy, {
                    style: {
                      fontSize: t ? 15 : 12,
                      lineHeight: t ? 27 : 22,
                      color: e.muted,
                    },
                    children: s.notebookFa.largeTextHint,
                  }),
                ],
              }),
              (0, b.jsx)(n.default, {
                value: t,
                onValueChange: u,
                trackColor: { false: e.soft, true: e.accent },
                thumbColor: '#ffffff',
                activeThumbColor: '#ffffff',
              }),
            ],
          }),
        });
      }));
    var t = r(d[0]);
    r(d[1]);
    var n = e(r(d[2])),
      o = e(r(d[3])),
      u = e(r(d[4])),
      l = e(r(d[5])),
      c = r(d[6]),
      f = r(d[7]),
      s = r(d[8]),
      h = r(d[9]),
      b = r(d[10]);
    const x = 'anbari.zoom',
      w = 'anbari.large-text',
      y = [0.8, 0.9, 1, 1.2],
      v = 0.9,
      j = (e) => y.includes(e),
      p = (e) =>
        !Number.isFinite(e) || e <= 0
          ? NaN
          : y.reduce((t, n) => (Math.abs(n - e) < Math.abs(t - e) ? n : t));
    function C() {
      if ('undefined' == typeof window) return v;
      try {
        const e = window.localStorage.getItem(x),
          t = e ? p(Number(e)) : NaN;
        if (j(t)) return t;
        if ('1' === window.localStorage.getItem(w)) return 1.2;
      } catch {}
      return v;
    }
    function S(e) {
      if ('undefined' == typeof document) return;
      let t = document.querySelector('style[data-anbari-large-text]');
      1 !== e
        ? (t ||
            ((t = document.createElement('style')),
            (t.dataset.anbariLargeText = '1'),
            document.head.appendChild(t)),
          (t.textContent = `html { zoom:${e} }`))
        : t?.remove();
    }
    function T() {
      return 'undefined' != typeof window ? window.innerWidth : 0;
    }
    S((0, h.shownZoom)(C(), T()));
    const E = () => (0, t.useContext)(h.LargeTextContext);
  },
  579,
  [2, 94, 240, 99, 257, 258, 407, 382, 580, 408, 338],
);
