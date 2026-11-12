// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 503; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.CastSection = function ({ paused: h, action: p }) {
        const x = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            const s = x.current;
            if (!s) return;
            const t = Array.from(s.querySelectorAll('.lp-cast-person')),
              n = () => t.forEach((s) => s.classList.add('is-in')),
              c =
                'function' == typeof window.matchMedia &&
                window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (h || c || 'undefined' == typeof IntersectionObserver)
              return (s.classList.remove('is-armed'), void n());
            s.classList.add('is-armed');
            const l = window.matchMedia('(max-width:699px)'),
              o = s.closest('.anbari-landing'),
              p =
                o &&
                o.scrollHeight > o.clientHeight + 1 &&
                /(auto|scroll)/.test(getComputedStyle(o).overflowY)
                  ? o
                  : null;
            let j = !1;
            const w = new IntersectionObserver(
              (s) => {
                ((j = !0),
                  s.forEach((s) => {
                    s.isIntersecting &&
                      (l.matches
                        ? (s.target.classList.add('is-in'),
                          w.unobserve(s.target))
                        : (n(), w.disconnect()));
                  }));
              },
              { root: p, threshold: 0.12 },
            );
            t.forEach((s) => w.observe(s));
            const u = window.setTimeout(() => {
              j || n();
            }, 2e3);
            return () => {
              (w.disconnect(), window.clearTimeout(u));
            };
          }, [h]),
          (0, c.jsxs)('section', {
            ref: x,
            className: 'lp-cast',
            'aria-label': t.landingFa.castEyebrow,
            children: [
              (0, c.jsxs)('span', {
                className: 'lp-cast-eyebrow',
                children: [(0, c.jsx)('i', {}), t.landingFa.castEyebrow],
              }),
              (0, c.jsxs)('h2', {
                children: [
                  t.landingFa.castHeading,
                  ' ',
                  (0, c.jsx)('span', {
                    children: t.landingFa.castHeadingAccent,
                  }),
                ],
              }),
              (0, c.jsx)('div', {
                className: 'lp-cast-row',
                children: o.map((s, n) => {
                  const o = t.landingFa.castPeople[n];
                  return (0, c.jsxs)(
                    'div',
                    {
                      className:
                        'lp-cast-person' +
                        (s.hero ? ' is-hero' : '') +
                        (s.extra ? ' is-extra' : ''),
                      style: { '--i': s.delay },
                      children: [
                        (0, c.jsxs)('div', {
                          className: 'lp-cast-say',
                          children: [
                            (0, c.jsx)('span', {
                              className: 'lp-cast-icon lp-tone-' + s.tone,
                              'aria-hidden': 'true',
                              children: (0, c.jsx)('svg', {
                                viewBox: '0 0 24 24',
                                children: l[s.glyph],
                              }),
                            }),
                            (0, c.jsxs)('span', {
                              className: 'lp-cast-words',
                              children: [
                                (0, c.jsx)('b', { children: o.name }),
                                (0, c.jsx)('small', { children: o.role }),
                                (0, c.jsx)('em', { children: o.line }),
                              ],
                            }),
                          ],
                        }),
                        (0, c.jsx)('img', {
                          src: s.img,
                          width: s.w,
                          height: 900,
                          alt: '',
                          'aria-hidden': 'true',
                          loading: 'lazy',
                          decoding: 'async',
                          draggable: !1,
                        }),
                      ],
                    },
                    s.img,
                  );
                }),
              }),
              (0, c.jsx)(n.PromoVideos, {}),
              (0, c.jsxs)('p', {
                className: 'lp-cast-line',
                children: [
                  t.landingFa.castLine,
                  (0, c.jsx)('br', {}),
                  (0, c.jsx)('strong', {
                    children: t.landingFa.castLineStrong,
                  }),
                  ' ',
                  t.landingFa.castLineEnd,
                ],
              }),
              p,
            ],
          })
        );
      }));
    var s = r(d[0]),
      t = r(d[1]),
      n = r(d[2]),
      c = r(d[3]);
    const l = {
        bag: (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)('path', { d: 'M5 8h14l-1 12H6Z' }),
            (0, c.jsx)('path', { d: 'M9 8a3 3 0 0 1 6 0' }),
          ],
        }),
        card: (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)('rect', {
              x: '3',
              y: '6',
              width: '18',
              height: '12',
              rx: '2.5',
            }),
            (0, c.jsx)('path', { d: 'M3 10h18M7 15h4' }),
          ],
        }),
        box: (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)('path', { d: 'm12 3 9 5v9l-9 5-9-5V8Z' }),
            (0, c.jsx)('path', { d: 'm3 8 9 5 9-5M12 13v9' }),
          ],
        }),
        cup: (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)('path', {
              d: 'M5 9h12v5a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5Z',
            }),
            (0, c.jsx)('path', {
              d: 'M17 11h1.5a2.5 2.5 0 0 1 0 5H17M9 3v3M13 3v3',
            }),
          ],
        }),
        basket: (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)('path', { d: 'M3 10h18l-2 10H5Z' }),
            (0, c.jsx)('path', { d: 'm8 10 3-6M16 10l-3-6M9 14v3M15 14v3' }),
          ],
        }),
      },
      o = [
        {
          img: '/character/cast-fatemeh.webp',
          w: 494,
          glyph: 'bag',
          tone: 'pink',
          delay: 1,
        },
        {
          img: '/character/cast-ahmadi.webp',
          w: 542,
          glyph: 'card',
          tone: 'amber',
          delay: 2,
        },
        {
          img: '/character/cast-baba.webp',
          w: 604,
          glyph: 'box',
          tone: 'blue',
          hero: !0,
          delay: 0,
        },
        {
          img: '/character/cast-hosseini.webp',
          w: 426,
          glyph: 'cup',
          tone: 'coffee',
          extra: !0,
          delay: 3,
        },
        {
          img: '/character/cast-asghari.webp',
          w: 523,
          glyph: 'basket',
          tone: 'green',
          extra: !0,
          delay: 4,
        },
      ];
  },
  503,
  [2, 492, 504, 338],
);
