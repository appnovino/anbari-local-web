// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 498; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.AppleMark = c),
      (e.AndroidMark = h),
      Object.defineProperty(e, 'apkConfig', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      (e.InstallSection = function () {
        const [j] = (0, t.useState)(x),
          [N, u] = (0, t.useState)(() => (x().android ? 'android' : 'ios')),
          [y, b] = (0, t.useState)(N),
          [w, f] = (0, t.useState)(!1),
          [v, F] = (0, t.useState)(!1),
          M = (0, t.useRef)(null),
          k = (0, t.useRef)(null);
        (0, t.useEffect)(() => {
          if (N === y) return void f(!1);
          f(!0);
          const s = window.setTimeout(() => {
            (b(N), f(!1));
          }, 120);
          return () => window.clearTimeout(s);
        }, [N, y]);
        const [S, A] = (0, t.useState)(null);
        (0, t.useEffect)(() => {
          let s = !0;
          return (
            fetch('/download/android.json', { cache: 'no-store' })
              .then((s) => (s.ok ? s.json() : null))
              .then((t) => {
                s &&
                  t &&
                  A(
                    !(!t.available || !t.version) && {
                      version: t.version,
                      sizeMb: t.sizeBytes
                        ? String(Math.round(t.sizeBytes / 1048576))
                        : '',
                    },
                  );
              })
              .catch(() => {}),
            () => {
              s = !1;
            }
          );
        }, []);
        const B = S ? '/download/anbari.apk' : !1 === S ? '' : o.apkUrl,
          D = S ? S.version : !1 === S ? '' : o.apkVersion,
          z = S ? S.sizeMb : !1 === S ? '' : o.apkSizeMb,
          O = Boolean(B),
          P = [
            D && `${l.landingFa.apkVersion} ${(0, n.localDigits)(D)}`,
            z &&
              `${l.landingFa.apkSize} ${(0, n.L)('{n} \u0645\u06af\u0627\u0628\u0627\u06cc\u062a', { n: (0, n.localDigits)(z) })}`,
          ]
            .filter(Boolean)
            .join('\u060c ');
        (0, t.useEffect)(() => {
          const s = M.current;
          if (!s) return;
          const t = new IntersectionObserver(([s]) => F(s.isIntersecting), {
            threshold: 0.12,
          });
          return (t.observe(s), () => t.disconnect());
        }, []);
        const T = 'install-panel ' + (w ? 'is-out' : 'is-in'),
          Z = {
            sibapp: (0, n.L)(
              '\u0646\u0635\u0628 \u0627\u0632 \u0633\u06cc\u0628\u200c\u0627\u067e',
            ),
            sibche: (0, n.L)(
              '\u0646\u0635\u0628 \u0627\u0632 \u0633\u06cc\u0628\u0686\u0647',
            ),
            anardoni: (0, n.L)(
              '\u0646\u0635\u0628 \u0627\u0632 \u0627\u0646\u0627\u0631\u062f\u0648\u0646\u06cc',
            ),
          };
        return (0, r.jsx)('section', {
          ref: M,
          id: 'install',
          className: 'lp-install-band install-section lp-reveal',
          children: (0, r.jsxs)('div', {
            className: 'lp-section install-inner',
            children: [
              (0, r.jsxs)('div', {
                className: 'install-heading',
                children: [
                  (0, r.jsx)('span', {
                    className: 'lp-eyebrow',
                    children: l.landingFa.installEyebrow,
                  }),
                  (0, r.jsx)('h2', { children: l.landingFa.installHeading }),
                  (0, r.jsx)('p', { children: l.landingFa.installDescription }),
                ],
              }),
              (0, r.jsxs)('div', {
                className: 'install-tabs',
                role: 'tablist',
                'aria-label': l.landingFa.installTabsLabel,
                ref: k,
                onKeyDown: (s) => {
                  if (
                    'ArrowLeft' !== s.key &&
                    'ArrowRight' !== s.key &&
                    'Home' !== s.key &&
                    'End' !== s.key
                  )
                    return;
                  s.preventDefault();
                  const t =
                    'Home' === s.key
                      ? 'ios'
                      : 'End' === s.key || 'ios' === N
                        ? 'android'
                        : 'ios';
                  (u(t),
                    k.current?.querySelector('#install-tab-' + t)?.focus());
                },
                children: [
                  (0, r.jsxs)('button', {
                    type: 'button',
                    role: 'tab',
                    'aria-selected': 'ios' === N,
                    'aria-controls': 'install-ios',
                    id: 'install-tab-ios',
                    tabIndex: 'ios' === N ? 0 : -1,
                    onClick: () => u('ios'),
                    children: [
                      (0, r.jsx)('span', {
                        className: 'install-device-icon',
                        children: (0, r.jsx)(c, {}),
                      }),
                      l.landingFa.installIosTab,
                    ],
                  }),
                  (0, r.jsxs)('button', {
                    type: 'button',
                    role: 'tab',
                    'aria-selected': 'android' === N,
                    'aria-controls': 'install-android',
                    id: 'install-tab-android',
                    tabIndex: 'android' === N ? 0 : -1,
                    onClick: () => u('android'),
                    children: [
                      (0, r.jsx)('span', {
                        className: 'install-device-icon',
                        children: (0, r.jsx)(h, {}),
                      }),
                      l.landingFa.installAndroidTab,
                    ],
                  }),
                ],
              }),
              'ios' === y
                ? (0, r.jsxs)(
                    'div',
                    {
                      id: 'install-ios',
                      role: 'tabpanel',
                      'aria-labelledby': 'install-tab-ios',
                      className: T,
                      children: [
                        j.standalone && j.ios
                          ? (0, r.jsx)('div', {
                              className:
                                'install-card lp-feature lp-feature-white',
                              children: (0, r.jsxs)('div', {
                                className: 'install-complete',
                                children: [
                                  (0, r.jsx)('span', { children: '\u2713' }),
                                  (0, r.jsxs)('div', {
                                    children: [
                                      (0, r.jsx)('h3', {
                                        children: l.landingFa.installed,
                                      }),
                                      (0, r.jsx)('p', {
                                        children:
                                          l.landingFa.installedDescription,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            })
                          : (0, r.jsxs)(r.Fragment, {
                              children: [
                                (0, r.jsx)('div', {
                                  className: 'ios-stores',
                                  'data-testid': 'install-ios-stores',
                                  children: s.BRAND.iphone.map((s) =>
                                    (0, r.jsx)(
                                      'a',
                                      {
                                        href: s.url,
                                        target: '_blank',
                                        rel: 'noopener',
                                        children: (0, r.jsx)('img', {
                                          src: s.badge.src,
                                          width: s.badge.width,
                                          height: s.badge.height,
                                          alt: Z[s.id],
                                        }),
                                      },
                                      s.id,
                                    ),
                                  ),
                                }),
                                (0, r.jsxs)('div', {
                                  className:
                                    'install-card lp-feature lp-feature-white',
                                  children: [
                                    (0, r.jsx)('p', {
                                      className: 'install-reason',
                                      children: l.landingFa.iosReason,
                                    }),
                                    (0, r.jsx)(p, {
                                      items: l.landingFa.iosSteps,
                                      arts: [
                                        'safari',
                                        'share',
                                        'home',
                                        'added',
                                      ],
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)('div', {
                                  className: 'install-tips',
                                  children: [
                                    (0, r.jsxs)('p', {
                                      children: [
                                        (0, r.jsx)('span', { children: '!' }),
                                        l.landingFa.iosNotificationsTip,
                                      ],
                                    }),
                                    (0, r.jsxs)('p', {
                                      children: [
                                        (0, r.jsx)('span', {
                                          children: '\u2197',
                                        }),
                                        l.landingFa.iosSafariTip,
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        v &&
                          j.ios &&
                          j.safari &&
                          !j.standalone &&
                          (0, r.jsxs)('div', {
                            className:
                              'share-pointer ' +
                              (j.ipad ? 'is-ipad' : 'is-iphone'),
                            'aria-hidden': 'true',
                            children: [
                              (0, r.jsx)('span', {
                                children: l.landingFa.sharePointer,
                              }),
                              (0, r.jsx)('i', { children: '\u2193' }),
                            ],
                          }),
                      ],
                    },
                    'ios',
                  )
                : (0, r.jsxs)(
                    'div',
                    {
                      id: 'install-android',
                      role: 'tabpanel',
                      'aria-labelledby': 'install-tab-android',
                      className: T,
                      children: [
                        (0, r.jsxs)('div', {
                          className: 'apk-action',
                          children: [
                            (0, r.jsx)('a', {
                              className:
                                'lp-button ' + (O ? '' : 'is-disabled'),
                              href: O ? B : void 0,
                              download: O || void 0,
                              'aria-disabled': !O,
                              children: O
                                ? l.landingFa.apkDownload
                                : l.landingFa.apkSoon,
                            }),
                            P && (0, r.jsx)('small', { children: P }),
                          ],
                        }),
                        (0, r.jsx)('div', {
                          className: 'install-card lp-feature lp-feature-white',
                          children: O
                            ? (0, r.jsxs)(r.Fragment, {
                                children: [
                                  (0, r.jsx)('p', {
                                    className: 'install-reason',
                                    children: l.landingFa.apkSafety,
                                  }),
                                  (0, r.jsx)(p, {
                                    items: l.landingFa.androidApkSteps,
                                    arts: ['download', 'permission', 'apk'],
                                  }),
                                ],
                              })
                            : (0, r.jsxs)(r.Fragment, {
                                children: [
                                  (0, r.jsx)('p', {
                                    className: 'install-reason',
                                    children:
                                      l.landingFa.androidBrowserFallback,
                                  }),
                                  (0, r.jsx)(p, {
                                    items: l.landingFa.androidBrowserSteps,
                                    arts: ['menu', 'install', 'confirm'],
                                  }),
                                ],
                              }),
                        }),
                      ],
                    },
                    'android',
                  ),
            ],
          }),
        });
      }),
      Object.defineProperty(e, 'installStyles', {
        enumerable: !0,
        get: function () {
          return N;
        },
      }));
    var s = _r(d[0]),
      t = _r(d[1]),
      l = _r(d[2]),
      n = _r(d[3]),
      r = _r(d[4]);
    function c({ size: s = 19 }) {
      return (0, r.jsx)('svg', {
        viewBox: '0 0 24 24',
        width: s,
        height: s,
        fill: 'currentColor',
        role: 'img',
        'aria-hidden': 'true',
        children: (0, r.jsx)('path', {
          d: 'M16.37 1.43c0 1.14-.42 2.2-1.25 3.03-.99.99-2.13 1.56-3.34 1.46-.02-1.1.44-2.22 1.23-3.02.86-.87 2.3-1.5 3.36-1.47Zm4.13 15.62c-.37.85-.55 1.23-1.02 1.98-.66 1.05-1.6 2.36-2.76 2.37-1.03.01-1.3-.67-2.7-.66-1.4.01-1.69.68-2.72.67-1.16-.01-2.05-1.19-2.71-2.24-1.85-2.93-2.05-6.37-.9-8.2.81-1.3 2.1-2.06 3.31-2.06 1.23 0 2 .67 3.02.67.99 0 1.59-.67 3.01-.67 1.08 0 2.22.59 3.04 1.6-2.67 1.46-2.24 5.27.43 6.54Z',
        }),
      });
    }
    function h({ size: s = 19 }) {
      return (0, r.jsxs)('svg', {
        viewBox: '0 0 24 24',
        width: s,
        height: s,
        fill: 'currentColor',
        role: 'img',
        'aria-hidden': 'true',
        children: [
          (0, r.jsx)('path', {
            d: 'M7.2 5.6 6.3 4.1a.45.45 0 0 1 .78-.45l.93 1.55A6.6 6.6 0 0 1 12 4.5c1.05 0 2.04.23 2.99.7l.93-1.55a.45.45 0 1 1 .78.45l-.9 1.5A5.3 5.3 0 0 1 18.3 10H5.7a5.3 5.3 0 0 1 1.5-4.4Zm2.1 2.05a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Zm5.4 0a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Z',
          }),
          (0, r.jsx)('path', {
            d: 'M5.8 11.2h12.4v6.4a1.4 1.4 0 0 1-1.4 1.4h-1.1v2.1a1.2 1.2 0 0 1-2.4 0v-2.1h-2.2v2.1a1.2 1.2 0 0 1-2.4 0v-2.1H7.2a1.4 1.4 0 0 1-1.4-1.4v-6.4Z',
          }),
          (0, r.jsx)('rect', {
            x: '2.1',
            y: '11.2',
            width: '2.4',
            height: '6.4',
            rx: '1.2',
          }),
          (0, r.jsx)('rect', {
            x: '19.5',
            y: '11.2',
            width: '2.4',
            height: '6.4',
            rx: '1.2',
          }),
        ],
      });
    }
    const o = {
      apkUrl: '/download/anbari.apk',
      apkVersion: '0.9.0',
      apkSizeMb: '101',
    };
    function x() {
      const s = navigator.userAgent,
        t =
          /iPad/.test(s) ||
          (/Macintosh/.test(s) && navigator.maxTouchPoints > 1),
        l = /iPhone|iPod/.test(s) || t;
      return {
        ios: l,
        android: /Android/i.test(s),
        ipad: t,
        safari:
          l &&
          /Safari/i.test(s) &&
          !/CriOS|FxiOS|EdgiOS|OPiOS|DuckDuckGo|GSA|Instagram|FBAN|FBAV/i.test(
            s,
          ),
        standalone:
          window.matchMedia('(display-mode: standalone)').matches ||
          Boolean(navigator.standalone),
      };
    }
    function j({ kind: s }) {
      const t = (s) =>
        (0, r.jsxs)('svg', {
          viewBox: '0 0 230 162',
          role: 'img',
          'aria-hidden': 'true',
          children: [
            (0, r.jsx)('rect', {
              x: '59',
              y: '5',
              width: '112',
              height: '152',
              rx: '21',
              className: 'is-phone',
            }),
            (0, r.jsx)('rect', {
              x: '66',
              y: '18',
              width: '98',
              height: '127',
              rx: '12',
              className: 'is-screen',
            }),
            (0, r.jsx)('rect', {
              x: '99',
              y: '10',
              width: '32',
              height: '4',
              rx: '2',
              className: 'is-notch',
            }),
            s,
          ],
        });
      return t(
        'safari' === s
          ? (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)('rect', {
                  x: '73',
                  y: '29',
                  width: '84',
                  height: '16',
                  rx: '8',
                  className: 'is-bar',
                }),
                (0, r.jsx)('circle', {
                  cx: '148',
                  cy: '37',
                  r: '3',
                  className: 'is-highlight',
                }),
                (0, r.jsx)('path', {
                  d: 'M78 115h74M83 127h64',
                  className: 'is-line',
                }),
                (0, r.jsx)('rect', {
                  x: '69',
                  y: '132',
                  width: '92',
                  height: '10',
                  rx: '5',
                  className: 'is-toolbar',
                }),
                (0, r.jsx)('circle', {
                  cx: '115',
                  cy: '137',
                  r: '8',
                  className: 'is-highlight-ring',
                }),
                (0, r.jsx)('path', {
                  d: 'M115 140v-11m-5 5 5-5 5 5',
                  className: 'is-accent-line',
                }),
              ],
            })
          : 'share' === s
            ? (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)('rect', {
                    x: '74',
                    y: '30',
                    width: '82',
                    height: '74',
                    rx: '9',
                    className: 'is-card',
                  }),
                  (0, r.jsx)('path', { d: 'M82 113h66', className: 'is-line' }),
                  (0, r.jsx)('rect', {
                    x: '69',
                    y: '132',
                    width: '92',
                    height: '10',
                    rx: '5',
                    className: 'is-toolbar',
                  }),
                  (0, r.jsx)('circle', {
                    cx: '115',
                    cy: '137',
                    r: '12',
                    className: 'is-highlight-ring',
                  }),
                  (0, r.jsx)('path', {
                    d: 'M115 139v-17m-6 6 6-6 6 6M107 132v9h16v-9',
                    className: 'is-accent-line',
                  }),
                ],
              })
            : 'home' === s
              ? (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)('rect', {
                      x: '72',
                      y: '26',
                      width: '86',
                      height: '105',
                      rx: '10',
                      className: 'is-sheet',
                    }),
                    (0, r.jsx)('path', {
                      d: 'M82 42h32M82 53h59M82 64h49M82 78h60',
                      className: 'is-line',
                    }),
                    (0, r.jsx)('rect', {
                      x: '78',
                      y: '88',
                      width: '74',
                      height: '27',
                      rx: '7',
                      className: 'is-highlight-soft',
                    }),
                    (0, r.jsx)('path', {
                      d: 'M87 101h42',
                      className: 'is-accent-line',
                    }),
                    (0, r.jsx)('path', {
                      d: 'm137 96 5 5-5 5',
                      className: 'is-accent-line',
                    }),
                  ],
                })
              : 'added' === s
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsxs)('g', {
                        className: 'is-apps',
                        children: [
                          (0, r.jsx)('rect', {
                            x: '75',
                            y: '31',
                            width: '20',
                            height: '20',
                            rx: '5',
                          }),
                          (0, r.jsx)('rect', {
                            x: '105',
                            y: '31',
                            width: '20',
                            height: '20',
                            rx: '5',
                          }),
                          (0, r.jsx)('rect', {
                            x: '135',
                            y: '31',
                            width: '20',
                            height: '20',
                            rx: '5',
                          }),
                          (0, r.jsx)('rect', {
                            x: '75',
                            y: '65',
                            width: '20',
                            height: '20',
                            rx: '5',
                          }),
                          (0, r.jsx)('rect', {
                            x: '135',
                            y: '65',
                            width: '20',
                            height: '20',
                            rx: '5',
                          }),
                        ],
                      }),
                      (0, r.jsx)('rect', {
                        x: '102',
                        y: '61',
                        width: '27',
                        height: '27',
                        rx: '7',
                        className: 'is-highlight',
                      }),
                      (0, r.jsx)('path', {
                        d: 'm108 69 7-4 8 4v10l-8 4-7-4Z',
                        className: 'is-logo',
                      }),
                      (0, r.jsx)('text', {
                        x: '115',
                        y: '99',
                        textAnchor: 'middle',
                        className: 'is-label',
                        children: l.landingFa.brand,
                      }),
                    ],
                  })
                : 'menu' === s
                  ? (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)('rect', {
                          x: '72',
                          y: '27',
                          width: '86',
                          height: '14',
                          rx: '7',
                          className: 'is-bar',
                        }),
                        (0, r.jsx)('circle', {
                          cx: '150',
                          cy: '34',
                          r: '12',
                          className: 'is-highlight-ring',
                        }),
                        (0, r.jsx)('circle', {
                          cx: '150',
                          cy: '29',
                          r: '1.6',
                          className: 'is-dot',
                        }),
                        (0, r.jsx)('circle', {
                          cx: '150',
                          cy: '34',
                          r: '1.6',
                          className: 'is-dot',
                        }),
                        (0, r.jsx)('circle', {
                          cx: '150',
                          cy: '39',
                          r: '1.6',
                          className: 'is-dot',
                        }),
                        (0, r.jsx)('rect', {
                          x: '87',
                          y: '49',
                          width: '69',
                          height: '75',
                          rx: '8',
                          className: 'is-sheet',
                        }),
                        (0, r.jsx)('path', {
                          d: 'M96 63h45M96 76h52M96 89h39M96 103h47',
                          className: 'is-line',
                        }),
                      ],
                    })
                  : 'install' === s
                    ? (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)('rect', {
                            x: '72',
                            y: '28',
                            width: '86',
                            height: '98',
                            rx: '10',
                            className: 'is-sheet',
                          }),
                          (0, r.jsx)('path', {
                            d: 'M82 43h58M82 56h47M82 69h60',
                            className: 'is-line',
                          }),
                          (0, r.jsx)('rect', {
                            x: '78',
                            y: '82',
                            width: '74',
                            height: '30',
                            rx: '7',
                            className: 'is-highlight-soft',
                          }),
                          (0, r.jsx)('path', {
                            d: 'M87 97h43',
                            className: 'is-accent-line',
                          }),
                          (0, r.jsx)('path', {
                            d: 'M140 91v12m-6-6h12',
                            className: 'is-accent-line',
                          }),
                        ],
                      })
                    : 'confirm' === s
                      ? (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)('rect', {
                              x: '77',
                              y: '46',
                              width: '76',
                              height: '61',
                              rx: '12',
                              className: 'is-sheet',
                            }),
                            (0, r.jsx)('circle', {
                              cx: '115',
                              cy: '65',
                              r: '9',
                              className: 'is-highlight',
                            }),
                            (0, r.jsx)('path', {
                              d: 'm111 65 3 3 6-7',
                              className: 'is-logo',
                            }),
                            (0, r.jsx)('path', {
                              d: 'M91 83h48',
                              className: 'is-line',
                            }),
                            (0, r.jsx)('rect', {
                              x: '91',
                              y: '91',
                              width: '48',
                              height: '10',
                              rx: '5',
                              className: 'is-highlight-soft',
                            }),
                          ],
                        })
                      : 'download' === s
                        ? (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)('path', {
                                d: 'M115 40v45m-14-14 14 14 14-14',
                                className: 'is-accent-line is-heavy',
                              }),
                              (0, r.jsx)('rect', {
                                x: '83',
                                y: '95',
                                width: '64',
                                height: '17',
                                rx: '8',
                                className: 'is-highlight-soft',
                              }),
                              (0, r.jsx)('path', {
                                d: 'M94 120h42',
                                className: 'is-line',
                              }),
                            ],
                          })
                        : 'permission' === s
                          ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                (0, r.jsx)('rect', {
                                  x: '74',
                                  y: '42',
                                  width: '82',
                                  height: '68',
                                  rx: '12',
                                  className: 'is-sheet',
                                }),
                                (0, r.jsx)('path', {
                                  d: 'M85 58h60M85 70h48',
                                  className: 'is-line',
                                }),
                                (0, r.jsx)('rect', {
                                  x: '84',
                                  y: '84',
                                  width: '61',
                                  height: '16',
                                  rx: '8',
                                  className: 'is-highlight-soft',
                                }),
                                (0, r.jsx)('circle', {
                                  cx: '135',
                                  cy: '92',
                                  r: '6',
                                  className: 'is-highlight',
                                }),
                                (0, r.jsx)('path', {
                                  d: 'm132 92 2 2 4-5',
                                  className: 'is-logo',
                                }),
                              ],
                            })
                          : (0, r.jsxs)(r.Fragment, {
                              children: [
                                (0, r.jsx)('path', {
                                  d: 'M115 39 91 49v26c0 19 24 31 24 31s24-12 24-31V49Z',
                                  className: 'is-shield',
                                }),
                                (0, r.jsx)('path', {
                                  d: 'm104 72 8 8 16-19',
                                  className: 'is-accent-line is-heavy',
                                }),
                                (0, r.jsx)('rect', {
                                  x: '88',
                                  y: '117',
                                  width: '54',
                                  height: '13',
                                  rx: '6',
                                  className: 'is-highlight-soft',
                                }),
                              ],
                            }),
      );
    }
    function p({ items: s, arts: t }) {
      return (0, r.jsx)('ol', {
        className: 'install-steps',
        children: s.map(([s, c], h) =>
          (0, r.jsxs)(
            'li',
            {
              style: { '--i': h },
              children: [
                (0, r.jsx)(j, { kind: t[h] }),
                (0, r.jsxs)('div', {
                  className: 'install-step-copy',
                  children: [
                    (0, r.jsxs)('span', {
                      className: 'install-step-tag',
                      children: [
                        l.landingFa.installStep,
                        ' ',
                        (0, n.localDigits)(h + 1),
                      ],
                    }),
                    (0, r.jsx)('h3', { children: s }),
                    (0, r.jsx)('p', { children: c }),
                  ],
                }),
              ],
            },
            s,
          ),
        ),
      });
    }
    const N = '';
  },
  498,
  [437, 2, 492, 311, 338],
);
