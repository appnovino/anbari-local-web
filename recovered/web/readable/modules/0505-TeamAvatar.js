// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 505; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.TeamAvatar = function ({ index: n }) {
        const { skin: t, hair: h } = c[n] ?? c[0];
        return (0, s.jsxs)('svg', {
          className: 'lp-avatar-face',
          viewBox: '0 0 44 44',
          width: '44',
          height: '44',
          fill: 'none',
          'aria-hidden': 'true',
          focusable: 'false',
          children: [
            (0, s.jsx)('path', { d: l, fill: h }),
            4 === n
              ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)('path', {
                      d: 'M22 5.5c8 0 12.2 6 12.2 13.2 0 6.4-2.2 8.8-2.2 12.9H12c0-4.1-2.2-6.5-2.2-12.9C9.8 11.5 14 5.5 22 5.5Z',
                      fill: h,
                    }),
                    (0, s.jsx)('ellipse', {
                      cx: '22',
                      cy: '19.4',
                      rx: '7',
                      ry: '8.4',
                      fill: t,
                    }),
                  ],
                })
              : (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)('circle', {
                      cx: '22',
                      cy: '18.2',
                      r: '9',
                      fill: t,
                    }),
                    0 === n &&
                      (0, s.jsx)('path', {
                        d: 'M13 17.4c0-5.3 4-8.6 9-8.6s9 3.3 9 8.6c0 0-2.2-3.4-9-3.4s-9 3.4-9 3.4Z',
                        fill: h,
                      }),
                    1 === n &&
                      (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)('path', {
                            d: 'M13.2 16.8c.6-5 4.2-8 8.8-8s8.2 3 8.8 8c0 0-2.6-3-8.8-3s-8.8 3-8.8 3Z',
                            fill: h,
                          }),
                          (0, s.jsx)('path', {
                            d: 'M13.6 19.8c0 5.4 3.7 8.4 8.4 8.4s8.4-3 8.4-8.4c0 0-1.6 3.4-8.4 3.4s-8.4-3.4-8.4-3.4Z',
                            fill: h,
                          }),
                        ],
                      }),
                    2 === n &&
                      (0, s.jsx)('path', {
                        d: 'M22 7.4c6.1 0 11 4.5 11 10.8v13h-4.2V18.6c0-4-3-6.6-6.8-6.6s-6.8 2.6-6.8 6.6v12.6H11v-13C11 11.9 15.9 7.4 22 7.4Z',
                        fill: h,
                      }),
                    3 === n &&
                      (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)('path', {
                            d: 'M12.9 17.6c0-5.2 4.1-8.4 9.1-8.4 4.4 0 7.7 2.4 8.7 6.2 0 0-4.3-1.4-8.9-1.4-3.7 0-6.4 1.9-8.9 3.6Z',
                            fill: h,
                          }),
                          (0, s.jsxs)('g', {
                            stroke: h,
                            strokeWidth: '1.5',
                            fill: 'none',
                            children: [
                              (0, s.jsx)('circle', {
                                cx: '17.6',
                                cy: '19.4',
                                r: '3.5',
                              }),
                              (0, s.jsx)('circle', {
                                cx: '26.4',
                                cy: '19.4',
                                r: '3.5',
                              }),
                              (0, s.jsx)('path', {
                                d: 'M21.1 19.4h1.8M14.1 18.6l-1.7.5m19.2-.5-1.7.5',
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
          ],
        });
      }));
    var s = r(d[0]);
    const c = [
        { skin: '#a9683c', hair: '#2b1d16' },
        { skin: '#e8b07e', hair: '#2f2119' },
        { skin: '#f3d0ae', hair: '#7a3f22' },
        { skin: '#c98a5a', hair: '#1f1a17' },
        { skin: '#eec09a', hair: '#3f5a8a' },
      ],
      l = 'M6.5 44c0-8.6 6.9-13.4 15.5-13.4S37.5 35.4 37.5 44Z';
  },
  505,
  [338],
);
