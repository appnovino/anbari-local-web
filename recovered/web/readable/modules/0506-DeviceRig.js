// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 506; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (_g, _r, _i, a, m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.DeviceRig = function ({ laptop: s, phone: i }) {
        const o = (0, t.useRef)(null),
          l = (0, t.useRef)(null),
          d = (0, t.useRef)(null);
        return (
          (0, t.useEffect)(() => {
            const t = l.current,
              n = o.current;
            if (!t || !n) return;
            const r = () => {
              const r = n.getBoundingClientRect().width;
              r && t.style.setProperty('--k', String(r / 500));
            };
            (r(), window.addEventListener('resize', r, { passive: !0 }));
            const s =
              'undefined' == typeof ResizeObserver
                ? null
                : new ResizeObserver(r);
            return (
              s?.observe(n),
              () => {
                (window.removeEventListener('resize', r), s?.disconnect());
              }
            );
          }, []),
          (0, t.useEffect)(() => {
            const t = d.current;
            if (t) {
              if (!t.complete || !t.naturalWidth) {
                const n = () => c(t);
                return (
                  t.addEventListener('load', n, { once: !0 }),
                  () => t.removeEventListener('load', n)
                );
              }
              c(t);
            }
          }, []),
          (0, r.jsxs)('div', {
            className: 'lp-rig',
            ref: o,
            'data-reveal': !0,
            children: [
              (0, r.jsxs)('div', {
                className: 'lp-rig-art',
                ref: l,
                children: [
                  (0, r.jsx)('div', {
                    className: 'lp-scr lp-scr-lap',
                    'aria-hidden': 'true',
                    children: (0, r.jsx)('div', {
                      className: 'lp-scr-inner',
                      children: s,
                    }),
                  }),
                  (0, r.jsx)('div', {
                    className: 'lp-scr lp-scr-ph',
                    'aria-hidden': 'true',
                    children: (0, r.jsx)('div', {
                      className: 'lp-scr-inner',
                      children: i,
                    }),
                  }),
                  (0, r.jsx)('img', {
                    className: 'lp-dev',
                    ref: d,
                    src: '/images/device-mockup.jpg',
                    width: 500,
                    height: 500,
                    alt: '',
                    'aria-hidden': 'true',
                  }),
                ],
              }),
              n.landingFa.rigCards.map(([t, n, s], i) =>
                (0, r.jsxs)(
                  'div',
                  {
                    className: 'lp-glass lp-g' + (i + 1),
                    'aria-hidden': 'true',
                    children: [
                      (0, r.jsx)('span', { className: 'k', children: t }),
                      (0, r.jsx)('span', { className: 'v', children: n }),
                      (0, r.jsx)('span', { className: 's', children: s }),
                    ],
                  },
                  t,
                ),
              ),
            ],
          })
        );
      }));
    var t = _r(_d[0]),
      n = _r(_d[1]),
      r = _r(_d[2]);
    const s = 246,
      i = 40;
    function c(t) {
      if (t.dataset.keyed) return;
      let n;
      t.dataset.keyed = 'busy';
      try {
        const r = document.createElement('canvas'),
          c = (r.width = t.naturalWidth),
          o = (r.height = t.naturalHeight),
          l = r.getContext('2d', { willReadFrequently: !0 });
        if (!l) throw new Error('no 2d context');
        l.drawImage(t, 0, 0);
        const d = l.getImageData(0, 0, c, o),
          u = d.data,
          f = new Float32Array(c * o);
        for (let t = 0, n = 0; t < u.length; t += 4, n++)
          f[n] = 0.2126 * u[t] + 0.7152 * u[t + 1] + 0.0722 * u[t + 2];
        const h = new Uint8Array(c * o),
          p = [],
          v = (t, n) => {
            const r = n * c + t;
            !h[r] && f[r] >= s && ((h[r] = 1), p.push(r));
          };
        for (let t = 0; t < c; t++) (v(t, 0), v(t, o - 1));
        for (let t = 0; t < o; t++) (v(0, t), v(c - 1, t));
        for (; p.length; ) {
          const t = p.pop(),
            n = t % c,
            r = (t / c) | 0;
          (n > 0 && v(n - 1, r),
            n < c - 1 && v(n + 1, r),
            r > 0 && v(n, r - 1),
            r < o - 1 && v(n, r + 1));
        }
        const g = (t, n, r) => {
            const s = [t],
              i = [];
            for (r[t] = 1; s.length; ) {
              const t = s.pop(),
                l = t % c,
                d = (t / c) | 0;
              i.push(t);
              const u = (t, i) => {
                if (t < 0 || i < 0 || t >= c || i >= o) return;
                const l = i * c + t;
                !r[l] && n(l) && ((r[l] = 1), s.push(l));
              };
              (u(l - 1, d), u(l + 1, d), u(l, d - 1), u(l, d + 1));
            }
            return i;
          },
          y = new Uint8Array(c * o);
        for (let t = 0; t < c * o; t++)
          if (!(h[t] || y[t] || f[t] < s))
            for (const n of g(t, (t) => !h[t] && f[t] >= s, y)) h[n] = 1;
        const w = new Uint8Array(c * o);
        for (let t = 0; t < c * o; t++) {
          if (h[t] || w[t]) continue;
          const n = g(t, (t) => !h[t], w);
          if (n.length < i) for (const t of n) h[t] = 1;
        }
        const x = 2;
        for (let t = 0; t < o; t++)
          for (let n = 0; n < c; n++) {
            const r = t * c + n,
              s = 4 * r;
            if (h[r]) {
              u[s + 3] = 0;
              continue;
            }
            let i = !1;
            for (let r = -2; r <= x && !i; r++)
              for (let s = -2; s <= x; s++) {
                const l = n + s,
                  d = t + r;
                if (!(l < 0 || d < 0 || l >= c || d >= o) && h[d * c + l]) {
                  i = !0;
                  break;
                }
              }
            if (!i) {
              u[s + 3] = 255;
              continue;
            }
            const l = Math.max(0, Math.min(1, (252 - f[r]) / 132));
            if (l <= 0) u[s + 3] = 0;
            else {
              u[s + 3] = Math.round(255 * l);
              for (let t = 0; t < 3; t++)
                u[s + t] = Math.max(
                  0,
                  Math.min(255, Math.round((u[s + t] - 255 * (1 - l)) / l)),
                );
            }
          }
        (l.putImageData(d, 0, 0), (n = r.toDataURL('image/png')));
      } catch {
        return void (t.dataset.keyed = 'failed');
      }
      (t.addEventListener(
        'load',
        () => {
          t.dataset.keyed = 'ready';
        },
        { once: !0 },
      ),
        t.addEventListener(
          'error',
          () => {
            t.dataset.keyed = 'failed';
          },
          { once: !0 },
        ),
        (t.src = n));
    }
  },
  506,
  [2, 492, 338],
);
