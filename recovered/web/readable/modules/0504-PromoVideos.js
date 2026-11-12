// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 504; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.PromoVideos = function () {
        const i = (0, s.useRef)([]),
          [t, p] = (0, s.useState)(-1),
          c = (s) => {
            (i.current.forEach((o, l) => {
              o && l !== s && o.pause();
            }),
              p(s));
          },
          h = (s) => {
            (c(s), i.current[s]?.play().catch(() => p(-1)));
          };
        return (0, l.jsxs)('div', {
          className: 'lp-promos',
          'data-testid': 'landing-promos',
          children: [
            (0, l.jsx)('p', {
              className: 'lp-promos-title',
              children: o.landingFa.promosTitle,
            }),
            (0, l.jsx)('div', {
              className: 'lp-promo-row',
              children: n.map((s, n) => {
                const u = o.landingFa.promos[n],
                  j = t === n;
                return (0, l.jsxs)(
                  'figure',
                  {
                    className: 'lp-promo' + (j ? ' is-on' : ''),
                    children: [
                      (0, l.jsxs)('div', {
                        className: 'lp-promo-frame',
                        children: [
                          (0, l.jsx)('video', {
                            ref: (s) => {
                              i.current[n] = s;
                            },
                            src: `/promos/promo-${s}.mp4`,
                            poster: `/promos/promo-${s}.jpg`,
                            width: 720,
                            height: 1280,
                            preload: 'none',
                            playsInline: !0,
                            controls: j,
                            'aria-label': u.title,
                            onPlay: () => c(n),
                            onEnded: () => p(-1),
                          }),
                          !j &&
                            (0, l.jsx)('button', {
                              type: 'button',
                              className: 'lp-promo-play',
                              'aria-label':
                                o.landingFa.promoPlay + ': ' + u.title,
                              onClick: () => h(n),
                              children: (0, l.jsx)('span', {
                                'aria-hidden': 'true',
                                children: (0, l.jsx)('svg', {
                                  viewBox: '0 0 24 24',
                                  children: (0, l.jsx)('path', {
                                    d: 'M8 5.5v13l11-6.5Z',
                                  }),
                                }),
                              }),
                            }),
                        ],
                      }),
                      (0, l.jsxs)('figcaption', {
                        children: [
                          (0, l.jsx)('b', { children: u.title }),
                          (0, l.jsx)('small', { children: u.line }),
                        ],
                      }),
                    ],
                  },
                  s,
                );
              }),
            }),
          ],
        });
      }));
    var s = r(d[0]),
      o = r(d[1]),
      l = r(d[2]);
    const n = ['latte', 'baba', 'nesyeh'];
  },
  504,
  [2, 492, 338],
);
