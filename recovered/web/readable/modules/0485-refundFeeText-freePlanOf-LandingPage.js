// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 485; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'refundFeeText', {
        enumerable: !0,
        get: function () {
          return T;
        },
      }),
      (_e.freePlanOf = A),
      (_e.LandingPage = function ({ onLogin: n, onRegister: l, onDemo: u }) {
        const [w, L] = (0, e.useState)(!1),
          [S, z] = (0, e.useState)(
            () =>
              'off' ===
              new URLSearchParams(window.location.search).get('motion'),
          ),
          { mode: _, toggle: H } = (0, o.useTheme)(),
          B = 'dark' === _,
          { lang: R, setLang: I } = (0, f.useLang)(),
          Z = (0, e.useRef)(null),
          U = () => {
            const e = window.location.hash.slice(1);
            return b.legalKinds.includes(e) ? e : null;
          },
          [V, $] = (0, e.useState)(U);
        (0, e.useEffect)(() => {
          q('view');
        }, []);
        const [K, W] = (0, e.useState)(!1),
          J = () => {
            (q('start'), W(!0));
          };
        ((0, e.useEffect)(() => {
          const e = () => {
            const e = U();
            ($(e), e && window.scrollTo(0, 0));
          };
          return (
            window.addEventListener('hashchange', e),
            () => window.removeEventListener('hashchange', e)
          );
        }, []),
          (0, p.useLandingMotion)(Z, S));
        const Q = (0, s.useBilling)(),
          G = Q.data?.refundDays ?? 0,
          X = Q.data?.refundFee ?? 0,
          Y = A(Q.data);
        return (
          (0, e.useEffect)(() => {
            const e = Z.current;
            if (!e) return;
            const a =
              'function' == typeof window.matchMedia &&
              window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            (e.classList.toggle('lp-motion-ready', !S && !a),
              e.classList.toggle('lp-tab-hidden', document.hidden));
          }),
          (0, e.useEffect)(() => {
            const e = new URLSearchParams(window.location.search)
              .get('ref')
              ?.trim()
              .toUpperCase();
            e &&
              /^[A-Z0-9-]{6,32}$/.test(e) &&
              sessionStorage.setItem('anbari.referral', e);
          }, []),
          (0, e.useEffect)(() => {
            const e = document.title;
            document.title = 'fa' === R ? N.brandHomeTitle : i.landingFa.title;
            let a = document.querySelector('meta[name="description"]');
            const n = a?.content,
              s = !a;
            return (
              a ||
                ((a = document.createElement('meta')),
                (a.name = 'description'),
                document.head.appendChild(a)),
              (a.content =
                'fa' === R
                  ? (0, N.brandHomeDescription)(y.AI_PHOTOS)
                  : i.landingFa.description),
              () => {
                ((document.title = e),
                  s ? a?.remove() : a && (a.content = n || ''));
              }
            );
          }, [R]),
          (0, e.useEffect)(() => {
            function e() {
              const e = document.getElementById(window.location.hash.slice(1));
              e &&
                Z.current?.contains(e) &&
                (e instanceof HTMLDetailsElement && (e.open = !0),
                e.scrollIntoView({ block: 'start', behavior: 'instant' }));
            }
            const a = requestAnimationFrame(e),
              n = () => {
                '#pricing' === window.location.hash && e();
              };
            return (
              window.addEventListener('hashchange', n),
              () => {
                (cancelAnimationFrame(a),
                  window.removeEventListener('hashchange', n));
              }
            );
          }, []),
          (0, e.useEffect)(() => {
            const e = Z.current,
              a = document.documentElement;
            if (!e) return;
            const n = () => {
              const n = getComputedStyle(e).backgroundColor;
              ((a.style.backgroundColor = n),
                (document.body.style.backgroundColor = n));
            };
            n();
            const s = setTimeout(n, 400);
            return () => {
              (clearTimeout(s),
                (a.style.backgroundColor = ''),
                (document.body.style.backgroundColor = ''));
            };
          }, [B]),
          (0, e.useEffect)(() => {
            if (!w) return;
            const e = (e) => {
              'Escape' === e.key &&
                (L(!1), Z.current?.querySelector('.lp-menu-toggle')?.focus());
            };
            return (
              window.addEventListener('keydown', e),
              () => window.removeEventListener('keydown', e)
            );
          }, [w]),
          (0, k.jsxs)('div', {
            ref: Z,
            className:
              'anbari-landing ' +
              (S ? 'lp-paused ' : '') +
              (B ? 'lp-night' : ''),
            dir: 'en' === (0, F.localeLang)() ? 'ltr' : 'rtl',
            lang: (0, F.localeLang)(),
            'data-testid': 'landing-page',
            children: [
              (0, k.jsx)('style', {
                children: t.landingStyles + b.legalStyles,
              }),
              K &&
                (0, k.jsx)(c.StartChooser, {
                  onWeb: () => {
                    (W(!1), l());
                  },
                  onLogin: () => {
                    (W(!1), n());
                  },
                  onClose: () => W(!1),
                }),
              (0, k.jsx)('a', {
                href: '#main',
                className: 'lp-skip',
                children: i.landingFa.skipContent,
              }),
              (0, k.jsx)('header', {
                className: 'lp-header',
                children: (0, k.jsxs)('div', {
                  className: 'lp-nav-wrap',
                  children: [
                    (0, k.jsxs)('a', {
                      href: '#main',
                      className: 'lp-brand',
                      'aria-label': i.landingFa.brandHome,
                      children: [
                        (0, k.jsx)(a.BrandMark, { tone: 'blue', size: 37 }),
                        (0, k.jsx)('span', { children: i.landingFa.brand }),
                      ],
                    }),
                    (0, k.jsxs)('nav', {
                      'aria-label': i.landingFa.navigation,
                      id: 'landing-navigation',
                      className: w ? 'lp-navigation is-open' : 'lp-navigation',
                      children: [
                        i.landingFa.nav.map(([e, a]) =>
                          (0, k.jsx)(
                            'a',
                            {
                              href: '#' + e,
                              onClick: () => L(!1),
                              children: a,
                            },
                            e,
                          ),
                        ),
                        i.landingFa.navPages.map(([e, a]) =>
                          (0, k.jsx)('a', { href: e, children: a }, e),
                        ),
                        (0, k.jsx)('button', {
                          className: 'lp-mobile-theme lp-mobile-cta',
                          onClick: () => {
                            (L(!1), J());
                          },
                          children: i.landingFa.startFree,
                        }),
                        (0, k.jsx)('button', {
                          className: 'lp-mobile-theme',
                          onClick: () => {
                            (L(!1), n());
                          },
                          children: (0, F.L)(
                            '\u0648\u0631\u0648\u062f / \u062b\u0628\u062a\u200c\u0646\u0627\u0645',
                          ),
                        }),
                        (0, k.jsx)('button', {
                          className: 'lp-mobile-theme',
                          'data-testid': 'landing-demo-menu',
                          onClick: () => {
                            (L(!1), u());
                          },
                          children: (0, F.L)(
                            '\u0627\u0648\u0644 \u0628\u0628\u06cc\u0646\u0645\u060c \u0628\u0639\u062f \u0628\u062e\u0631\u0645',
                          ),
                        }),
                        (0, k.jsxs)('button', {
                          className: 'lp-mobile-theme',
                          onClick: H,
                          children: [
                            (0, k.jsx)(M, {
                              name: B ? 'sun' : 'moon',
                              size: 18,
                            }),
                            B ? i.landingFa.lightMode : i.landingFa.darkMode,
                          ],
                        }),
                      ],
                    }),
                    (0, k.jsxs)('div', {
                      className: 'lp-nav-actions',
                      children: [
                        (0, k.jsxs)('label', {
                          className: 'lp-lang-top',
                          children: [
                            (0, k.jsxs)('span', {
                              className: 'lp-lang-code',
                              'aria-hidden': 'true',
                              children: [
                                (0, k.jsx)(M, { name: 'globe', size: 15 }),
                                R.toUpperCase(),
                              ],
                            }),
                            (0, k.jsx)('select', {
                              'data-testid': 'landing-language-top',
                              'aria-label': (0, F.L)(
                                '\u0632\u0628\u0627\u0646',
                              ),
                              value: R,
                              onChange: (e) => I(e.target.value),
                              children: ['fa', 'en', 'ar'].map((e) =>
                                (0, k.jsx)(
                                  'option',
                                  {
                                    value: e,
                                    lang: e,
                                    children: f.langNames[e],
                                  },
                                  e,
                                ),
                              ),
                            }),
                          ],
                        }),
                        (0, k.jsx)('button', {
                          className: 'lp-icon-button lp-theme-toggle',
                          'aria-label': B
                            ? i.landingFa.lightMode
                            : i.landingFa.darkMode,
                          onClick: H,
                          children: (0, k.jsx)(M, {
                            name: B ? 'sun' : 'moon',
                            size: 19,
                          }),
                        }),
                        (0, k.jsx)('button', {
                          className: 'lp-login',
                          onClick: n,
                          children: (0, F.L)(
                            '\u0648\u0631\u0648\u062f / \u062b\u0628\u062a\u200c\u0646\u0627\u0645',
                          ),
                        }),
                        (0, k.jsxs)('button', {
                          className: 'lp-button lp-button-small',
                          onClick: J,
                          children: [
                            i.landingFa.startFree,
                            ' ',
                            (0, k.jsx)(M, { name: 'arrow', size: 16 }),
                          ],
                        }),
                        (0, k.jsx)('button', {
                          className: 'lp-icon-button lp-menu-toggle',
                          'aria-label': w
                            ? i.landingFa.closeMenu
                            : i.landingFa.openMenu,
                          'aria-expanded': w,
                          'aria-controls': 'landing-navigation',
                          onClick: () => L(!w),
                          children: (0, k.jsx)(M, {
                            name: w ? 'close' : 'menu',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, k.jsxs)('main', {
                id: 'main',
                tabIndex: -1,
                children: [
                  !!V && (0, k.jsx)(b.LegalPage, { kind: V }),
                  (0, k.jsxs)('div', {
                    hidden: !!V,
                    children: [
                      (0, k.jsx)('section', {
                        className: 'lp-hero lp-reveal',
                        children: (0, k.jsxs)('div', {
                          className: 'lp-section lp-hero-copy',
                          children: [
                            (0, k.jsxs)('span', {
                              className: 'lp-label lp-hero-label lp-hero-step',
                              children: [
                                (0, k.jsx)('i', {}),
                                i.landingFa.heroEyebrow,
                                (0, k.jsx)(M, { name: 'arrow', size: 13 }),
                              ],
                            }),
                            (0, k.jsxs)('h1', {
                              children: [
                                (0, k.jsx)('span', {
                                  className: 'lp-hero-step',
                                  children: i.landingFa.billowHeadline,
                                }),
                                (0, k.jsx)('br', {}),
                                (0, k.jsx)('span', {
                                  className: 'lp-hero-step',
                                  children: i.landingFa.billowHeadlineAccent,
                                }),
                              ],
                            }),
                            (0, k.jsxs)('p', {
                              className: 'lp-hero-step',
                              children: [
                                (0, k.jsx)('strong', {
                                  children: i.landingFa.billowLead,
                                }),
                                ' ',
                                i.landingFa.billowDescription,
                              ],
                            }),
                            (0, k.jsxs)('div', {
                              className: 'lp-hero-actions lp-hero-step',
                              children: [
                                (0, k.jsxs)('button', {
                                  className: 'lp-button',
                                  onClick: J,
                                  children: [
                                    i.landingFa.getStarted,
                                    (0, k.jsx)(M, { name: 'arrow', size: 19 }),
                                  ],
                                }),
                                (0, k.jsx)('button', {
                                  className: 'lp-hero-sample lp-demo-key',
                                  'data-testid': 'landing-demo',
                                  onClick: u,
                                  children: (0, F.L)(
                                    '\u0627\u0648\u0644 \u0628\u0628\u06cc\u0646\u0645\u060c \u0628\u0639\u062f \u0628\u062e\u0631\u0645',
                                  ),
                                }),
                                (0, k.jsxs)('a', {
                                  className: 'lp-text-button',
                                  href: '#install',
                                  children: [
                                    i.landingFa.installHeroLink,
                                    (0, k.jsx)(M, { name: 'arrow', size: 16 }),
                                  ],
                                }),
                              ],
                            }),
                            (0, k.jsxs)('div', {
                              className: 'lp-hero-footnote lp-hero-step',
                              children: [
                                G > 0 &&
                                  (0, k.jsxs)('span', {
                                    children: [
                                      (0, k.jsx)(M, {
                                        name: 'check',
                                        size: 14,
                                      }),
                                      (0, h.interpolate)(
                                        i.landingFa.noPurchaseNeeded,
                                        { n: C(G) },
                                      ),
                                    ],
                                  }),
                                (0, k.jsx)('span', {
                                  children: i.landingFa.persianSimple,
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, k.jsx)(j.CastSection, {
                        paused: S,
                        action: (0, k.jsxs)('button', {
                          className: 'lp-button lp-cast-cta',
                          onClick: J,
                          children: [
                            i.landingFa.getStarted,
                            (0, k.jsx)(M, { name: 'arrow', size: 18 }),
                          ],
                        }),
                      }),
                      (0, k.jsx)('div', {
                        className: 'lp-benefit-strip',
                        children: (0, k.jsxs)('div', {
                          children: [
                            (0, k.jsx)('span', {
                              children: i.landingFa.audienceEyebrow,
                            }),
                            (0, k.jsxs)('b', {
                              children: [
                                (0, k.jsx)(M, { name: 'box', size: 19 }),
                                i.landingFa.supermarkets,
                              ],
                            }),
                            (0, k.jsx)('i', { children: '\u2726' }),
                            (0, k.jsxs)('b', {
                              children: [
                                (0, k.jsx)(M, { name: 'scan', size: 19 }),
                                i.landingFa.physicalShops,
                              ],
                            }),
                            (0, k.jsx)('i', { children: '\u2726' }),
                            (0, k.jsxs)('b', {
                              children: [
                                (0, k.jsx)(M, { name: 'team', size: 19 }),
                                i.landingFa.onlineShops,
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, k.jsx)(E, { onDemo: u }),
                      (0, k.jsx)('section', {
                        className: 'lp-section lp-devices-section lp-reveal',
                        children: (0, k.jsxs)('div', {
                          className: 'lp-devices-card',
                          children: [
                            (0, k.jsxs)('div', {
                              className: 'lp-midway',
                              children: [
                                (0, k.jsxs)('div', {
                                  children: [
                                    (0, k.jsxs)('span', {
                                      className: 'lp-brand',
                                      children: [
                                        (0, k.jsx)(a.BrandMark, {
                                          tone: 'blue',
                                          size: 37,
                                        }),
                                        (0, k.jsx)('span', {
                                          children: i.landingFa.brand,
                                        }),
                                      ],
                                    }),
                                    (0, k.jsx)('h2', {
                                      children: i.landingFa.midwayHeading,
                                    }),
                                    (0, k.jsx)('p', {
                                      children:
                                        G > 0
                                          ? (0, h.interpolate)(
                                              i.landingFa.midwayDescription,
                                              { n: C(G) },
                                            )
                                          : i.landingFa.midwayDescriptionPlain,
                                    }),
                                  ],
                                }),
                                (0, k.jsxs)('button', {
                                  className: 'lp-button',
                                  onClick: J,
                                  children: [
                                    i.landingFa.createAccount,
                                    (0, k.jsx)(M, { name: 'arrow' }),
                                  ],
                                }),
                              ],
                            }),
                            (0, k.jsxs)('div', {
                              className: 'lp-devices',
                              children: [
                                (0, k.jsxs)('div', {
                                  className: 'lp-section-copy',
                                  'data-reveal': !0,
                                  children: [
                                    (0, k.jsx)('span', {
                                      className: 'lp-eyebrow',
                                      children: i.landingFa.devicesEyebrow,
                                    }),
                                    (0, k.jsxs)('h2', {
                                      children: [
                                        i.landingFa.devicesHeading,
                                        (0, k.jsx)('br', {}),
                                        (0, k.jsx)('span', {
                                          children:
                                            i.landingFa.devicesHeadingAccent,
                                        }),
                                      ],
                                    }),
                                    (0, k.jsx)('p', {
                                      children: i.landingFa.devicesDescription,
                                    }),
                                    (0, k.jsxs)('div', {
                                      className: 'lp-device-scale',
                                      children: [
                                        (0, k.jsx)('h3', {
                                          children:
                                            i.landingFa.devicesMigrateHeading,
                                        }),
                                        (0, k.jsx)('p', {
                                          children:
                                            i.landingFa
                                              .devicesMigrateDescription,
                                        }),
                                      ],
                                    }),
                                    (0, k.jsxs)('div', {
                                      className: 'lp-device-scale',
                                      children: [
                                        (0, k.jsx)('h3', {
                                          children:
                                            i.landingFa.devicesScaleHeading,
                                        }),
                                        (0, k.jsx)('p', {
                                          children:
                                            i.landingFa.devicesScaleDescription,
                                        }),
                                      ],
                                    }),
                                    (0, k.jsx)('div', {
                                      className: 'lp-device-tags',
                                      children: i.landingFa.devicePills.map(
                                        (e) =>
                                          (0, k.jsx)(
                                            'span',
                                            { children: e },
                                            e,
                                          ),
                                      ),
                                    }),
                                    (0, k.jsxs)('button', {
                                      className: 'lp-button lp-device-start',
                                      onClick: J,
                                      children: [
                                        i.landingFa.getStarted,
                                        (0, k.jsx)(M, { name: 'arrow' }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, k.jsx)(v.DeviceRig, {
                                  laptop: (0, k.jsx)(D, {}),
                                  phone: (0, k.jsx)(P, {}),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, k.jsx)(x.InstallSection, {}),
                      (0, k.jsx)(O, {
                        onStart: J,
                        billing: Q,
                        refundDays: G,
                        refundFee: X,
                      }),
                      (0, k.jsxs)('section', {
                        id: 'questions',
                        className: 'lp-section lp-faq lp-faq-centred lp-reveal',
                        children: [
                          (0, k.jsxs)('div', {
                            className: 'lp-section-copy',
                            'data-reveal': !0,
                            children: [
                              (0, k.jsx)('span', {
                                className: 'lp-eyebrow',
                                children: i.landingFa.faqEyebrow,
                              }),
                              (0, k.jsx)('h2', {
                                children: i.landingFa.faqHeading,
                              }),
                              (0, k.jsx)('p', {
                                children: i.landingFa.faqDescription,
                              }),
                            ],
                          }),
                          (0, k.jsx)('div', {
                            className: 'lp-faq-list',
                            'data-reveal': !0,
                            children: i.landingFa.faqs
                              .filter(([, e]) => G > 0 || !e.includes('{n}'))
                              .map(([e, a], n) =>
                                (0, k.jsxs)(
                                  'details',
                                  {
                                    style: { '--i': n },
                                    children: [
                                      (0, k.jsxs)('summary', {
                                        children: [
                                          e,
                                          (0, k.jsx)('span', {
                                            children: (0, k.jsx)(M, {
                                              name: 'chevron',
                                              size: 19,
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, k.jsx)('p', {
                                        children: (0, h.interpolate)(a, {
                                          n: C(G),
                                          fee: T(X),
                                          r: C(Y.records),
                                        }),
                                      }),
                                    ],
                                  },
                                  e,
                                ),
                              ),
                          }),
                          (0, k.jsxs)('a', {
                            className: 'lp-faq-all',
                            href: '/faq',
                            children: [
                              i.landingFa.faqAll,
                              (0, k.jsx)(M, { name: 'arrow', size: 16 }),
                            ],
                          }),
                        ],
                      }),
                      (0, k.jsx)('section', {
                        className: 'lp-section lp-last-section lp-reveal',
                        children: (0, k.jsxs)('div', {
                          className: 'lp-last-cta lp-last-blue',
                          children: [
                            (0, k.jsx)('span', {
                              className: 'lp-eyebrow',
                              children: i.landingFa.ctaEyebrow,
                            }),
                            (0, k.jsxs)('h2', {
                              children: [
                                i.landingFa.ctaHeading,
                                (0, k.jsx)('br', {}),
                                i.landingFa.ctaHeadingEnd,
                              ],
                            }),
                            (0, k.jsx)('p', {
                              children: i.landingFa.ctaDescription,
                            }),
                            (0, k.jsxs)('button', {
                              className: 'lp-button lp-last-key',
                              onClick: J,
                              children: [
                                i.landingFa.createAccount,
                                ' ',
                                (0, k.jsx)(M, { name: 'arrow', size: 19 }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, k.jsxs)('footer', {
                className: 'lp-footer lp-section',
                children: [
                  (0, k.jsxs)('div', {
                    className: 'lp-footer-top',
                    children: [
                      (0, k.jsxs)('a', {
                        className: 'lp-brand',
                        href: '#main',
                        children: [
                          (0, k.jsx)(a.BrandMark, { tone: 'blue', size: 33 }),
                          (0, k.jsx)('span', {
                            children: i.landingFa.footerBrand,
                          }),
                        ],
                      }),
                      (0, k.jsx)('p', { children: i.landingFa.footerTagline }),
                      (0, k.jsxs)('div', {
                        children: [
                          i.landingFa.nav.map(([e, a]) =>
                            (0, k.jsx)('a', { href: '#' + e, children: a }, e),
                          ),
                          (0, k.jsx)('button', {
                            onClick: n,
                            children: i.landingFa.enterApp,
                          }),
                          (0, k.jsx)('span', {
                            className: 'lp-lang',
                            role: 'group',
                            'aria-label': (0, F.L)('\u0632\u0628\u0627\u0646'),
                            'data-testid': 'landing-language',
                            children: ['fa', 'en', 'ar'].map((e) =>
                              (0, k.jsx)(
                                'a',
                                {
                                  href: '?lang=' + e,
                                  lang: e,
                                  hrefLang: e,
                                  'aria-current': R === e ? 'true' : void 0,
                                  onClick: (a) => {
                                    (a.preventDefault(), I(e));
                                  },
                                  children: f.langNames[e],
                                },
                                e,
                              ),
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, k.jsx)(b.FooterPageLinks, {}),
                  (0, k.jsx)(b.FooterLegalLinks, {}),
                  (0, k.jsxs)('div', {
                    className: 'lp-footer-bottom',
                    children: [
                      (0, k.jsxs)('span', {
                        children: [
                          '\xa9 ',
                          new Date().toLocaleDateString((0, F.numberLocale)(), {
                            year: 'numeric',
                          }),
                          '  ',
                          i.landingFa.copyright,
                        ],
                      }),
                      (0, k.jsxs)('button', {
                        onClick: () => z(!S),
                        'aria-pressed': S,
                        children: [
                          (0, k.jsx)(M, {
                            name: S ? 'play' : 'pause',
                            size: 14,
                          }),
                          S
                            ? i.landingFa.resumeMotion
                            : i.landingFa.pauseMotion,
                        ],
                      }),
                      (0, k.jsxs)('span', {
                        children: [
                          i.landingFa.footerMadeFor,
                          ' ',
                          (0, k.jsx)('span', {
                            className: 'lp-footer-star',
                            children: '\u2726',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }));
    var e = r(d[0]),
      a = r(d[1]),
      n = r(d[2]),
      s = r(d[3]),
      l = r(d[4]),
      i = r(d[5]),
      t = r(d[6]),
      c = r(d[7]),
      o = r(d[8]),
      p = r(d[9]),
      h = r(d[10]),
      x = r(d[11]),
      j = r(d[12]),
      u = r(d[13]),
      v = r(d[14]),
      F = r(d[15]),
      f = r(d[16]),
      b = r(d[17]),
      N = r(d[18]),
      y = r(d[19]),
      w = r(d[20]),
      k = r(d[21]);
    function M({ name: e, size: a = 22 }) {
      const n = {
        globe: (0, k.jsxs)(k.Fragment, {
          children: [
            (0, k.jsx)('circle', { cx: '12', cy: '12', r: '9' }),
            (0, k.jsx)('path', {
              d: 'M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z',
            }),
          ],
        }),
        chevron: (0, k.jsx)('path', { d: 'm9 5 7 7-7 7' }),
        arrow:
          'en' === (0, F.localeLang)()
            ? (0, k.jsx)('path', { d: 'M5 12h14m-6-6 6 6-6 6' })
            : (0, k.jsx)('path', { d: 'M19 12H5m6-6-6 6 6 6' }),
        box: (0, k.jsx)(k.Fragment, {
          children: (0, k.jsx)('path', {
            d: 'm12 3 9 5v9l-9 5-9-5V8Zm-9 5 9 5 9-5M12 13v9M7 5.8l9 5v5',
          }),
        }),
        mic: (0, k.jsxs)(k.Fragment, {
          children: [
            (0, k.jsx)('rect', {
              x: '9',
              y: '2',
              width: '6',
              height: '13',
              rx: '3',
            }),
            (0, k.jsx)('path', {
              d: 'M5 10v2a7 7 0 0 0 14 0v-2M12 19v3m-4 0h8',
            }),
          ],
        }),
        scan: (0, k.jsx)(k.Fragment, {
          children: (0, k.jsx)('path', {
            d: 'M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5M7 7v10m4-10v10m3-10v10m3-10v10',
          }),
        }),
        chart: (0, k.jsx)(k.Fragment, {
          children: (0, k.jsx)('path', {
            d: 'M4 3v17h17M8 15v-4m5 4V7m5 8v-6',
          }),
        }),
        check: (0, k.jsx)('path', { d: 'm5 12 4 4L19 6' }),
        team: (0, k.jsxs)(k.Fragment, {
          children: [
            (0, k.jsx)('circle', { cx: '9', cy: '8', r: '3' }),
            (0, k.jsx)('path', {
              d: 'M3 21v-3a6 6 0 0 1 12 0v3m1-15a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 5',
            }),
          ],
        }),
        photo: (0, k.jsxs)(k.Fragment, {
          children: [
            (0, k.jsx)('rect', {
              x: '3',
              y: '4',
              width: '18',
              height: '16',
              rx: '3',
            }),
            (0, k.jsx)('circle', { cx: '8', cy: '9', r: '1' }),
            (0, k.jsx)('path', { d: 'm3 17 5-5 4 4 4-6 5 7' }),
          ],
        }),
        plus: (0, k.jsx)('path', { d: 'M12 5v14M5 12h14' }),
        sun: (0, k.jsxs)(k.Fragment, {
          children: [
            (0, k.jsx)('circle', { cx: '12', cy: '12', r: '4' }),
            (0, k.jsx)('path', {
              d: 'M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1 1m12 12 1 1M5 19l1-1M18 6l1-1',
            }),
          ],
        }),
        moon: (0, k.jsx)('path', {
          d: 'M20 15A9 9 0 0 1 9 4a9 9 0 1 0 11 11Z',
        }),
        pause: (0, k.jsx)('path', { d: 'M9 5v14M15 5v14' }),
        play: (0, k.jsx)('path', { d: 'm8 4 12 8-12 8Z' }),
        close: (0, k.jsx)('path', { d: 'm6 6 12 12M6 18 18 6' }),
        menu: (0, k.jsx)('path', { d: 'M4 6h16M4 12h16M4 18h16' }),
        shield: (0, k.jsxs)(k.Fragment, {
          children: [
            (0, k.jsx)('path', { d: 'm12 2 9 4v6c0 6-9 10-9 10S3 18 3 12V6Z' }),
            (0, k.jsx)('path', { d: 'm8 11 3 3 5-5' }),
          ],
        }),
        bolt: (0, k.jsx)('path', { d: 'm14 2-10 12h7l-1 8 10-12h-7Z' }),
      };
      return (0, k.jsx)('svg', {
        width: a,
        height: a,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: '1.7',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        'aria-hidden': 'true',
        children: n[e],
      });
    }
    const C = (e) => e.toLocaleString((0, F.numberLocale)());
    function L({ small: e = !1 }) {
      return (0, k.jsx)('span', {
        className: 'lp-wave ' + (e ? 'lp-wave-small' : ''),
        'aria-hidden': 'true',
        children: Array.from({ length: e ? 19 : 37 }, (e, a) =>
          (0, k.jsx)(
            'i',
            {
              style: {
                '--h': 14 + ((17 * a + 11) % 41) + 'px',
                '--delay': -0.13 * a + 's',
              },
            },
            a,
          ),
        ),
      });
    }
    const S = (e) => ({ '--d': `${e}ms` }),
      z = ['#ffd7a8', '#ccfbf1', '#d9c8ff', '#c8f0d4', '#ffc9d2'];
    function E({ onDemo: a }) {
      const [n, s] = (0, e.useState)(-1),
        l = [
          [i.landingFa.rice, C(48)],
          [i.landingFa.milk, C(12)],
          [i.landingFa.oil, C(5)],
        ];
      return (0, k.jsx)('section', {
        id: 'features',
        className: 'lp-features lp-features-band lp-reveal',
        children: (0, k.jsxs)('div', {
          className: 'lp-section lp-features-inner',
          children: [
            (0, k.jsxs)('div', {
              className: 'lp-section-heading lp-heading-split',
              'data-reveal': !0,
              children: [
                (0, k.jsxs)('div', {
                  children: [
                    (0, k.jsx)('span', {
                      className: 'lp-eyebrow lp-rise',
                      style: S(0),
                      children: i.landingFa.featuresEyebrow,
                    }),
                    (0, k.jsx)('h2', {
                      className: 'lp-rise lp-rise-alt',
                      style: S(80),
                      children: i.landingFa.billowFeaturesHeading,
                    }),
                    (0, k.jsx)('p', {
                      className: 'lp-features-subline lp-rise',
                      style: S(160),
                      children: i.landingFa.featuresSubline,
                    }),
                  ],
                }),
                (0, k.jsxs)('a', {
                  className: 'lp-text-button lp-rise lp-rise-alt',
                  style: S(240),
                  href: '#features',
                  onClick: (e) => {
                    (e.preventDefault(), a());
                  },
                  children: [
                    i.landingFa.tour,
                    (0, k.jsx)(M, { name: 'arrow' }),
                  ],
                }),
              ],
            }),
            (0, k.jsxs)('div', {
              className: 'lp-feature-grid',
              children: [
                (0, k.jsxs)('article', {
                  className: 'lp-feature lp-feature-blue lp-feature-voice',
                  'data-reveal': !0,
                  children: [
                    (0, k.jsxs)('div', {
                      className: 'lp-gallery-caption',
                      children: [
                        (0, k.jsx)('span', {
                          className: 'lp-step-tag lp-rise',
                          style: S(0),
                          children: i.landingFa.stepOne,
                        }),
                        (0, k.jsxs)('h3', {
                          className: 'lp-rise lp-rise-alt',
                          style: S(80),
                          children: [
                            i.landingFa.stepAddTitle,
                            ' ',
                            (0, k.jsx)('small', {
                              children: i.landingFa.stepAddHint,
                            }),
                          ],
                        }),
                        (0, k.jsx)('p', {
                          className: 'lp-rise',
                          style: S(160),
                          children: i.landingFa.stepAddBody,
                        }),
                      ],
                    }),
                    (0, k.jsxs)('div', {
                      className:
                        'lp-gallery-art lp-reveal lp-art-voice lp-rise lp-rise-alt',
                      style: S(240),
                      children: [
                        (0, k.jsxs)('div', {
                          className: 'lp-step-tiles',
                          children: [
                            (0, k.jsx)('span', {
                              className: 'lp-step-tile',
                              children: (0, k.jsx)(M, {
                                name: 'scan',
                                size: 30,
                              }),
                            }),
                            (0, k.jsx)('span', {
                              className: 'lp-step-tile lp-step-tile-mic',
                              children: (0, k.jsx)(M, {
                                name: 'mic',
                                size: 30,
                              }),
                            }),
                            (0, k.jsx)('span', {
                              className: 'lp-step-tile',
                              children: (0, k.jsx)(M, {
                                name: 'photo',
                                size: 30,
                              }),
                            }),
                          ],
                        }),
                        (0, k.jsxs)('div', {
                          className: 'lp-feature-voice-visual',
                          children: [
                            (0, k.jsx)(L, {}),
                            (0, k.jsx)('div', {
                              children: i.landingFa.stepAddExample,
                            }),
                            (0, k.jsxs)('span', {
                              children: [
                                (0, k.jsx)(M, { name: 'check', size: 14 }),
                                i.landingFa.stepAddChip,
                              ],
                            }),
                          ],
                        }),
                        (0, k.jsx)('span', {
                          className: 'lp-feature-caption',
                          children: i.landingFa.aiQuotaCaption,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, k.jsxs)('article', {
                  className: 'lp-feature lp-feature-white lp-feature-stock',
                  'data-reveal': !0,
                  children: [
                    (0, k.jsxs)('div', {
                      className: 'lp-gallery-caption',
                      children: [
                        (0, k.jsx)('span', {
                          className: 'lp-step-tag lp-rise',
                          style: S(0),
                          children: i.landingFa.stepTwo,
                        }),
                        (0, k.jsx)('h3', {
                          className: 'lp-rise lp-rise-alt',
                          style: S(80),
                          children: i.landingFa.stepStockTitle,
                        }),
                        (0, k.jsx)('p', {
                          className: 'lp-rise',
                          style: S(160),
                          children: i.landingFa.stepStockBody,
                        }),
                      ],
                    }),
                    (0, k.jsx)('div', {
                      className:
                        'lp-gallery-art lp-reveal lp-art-stock lp-rise lp-rise-alt',
                      style: S(240),
                      children: (0, k.jsx)('div', {
                        className: 'lp-stock-list',
                        'aria-hidden': 'true',
                        children: l.map(([e, a], n) =>
                          (0, k.jsxs)(
                            'div',
                            {
                              className:
                                'lp-stock-row' + (0 === n ? ' is-active' : ''),
                              children: [
                                (0, k.jsx)('span', {
                                  className: 'lp-stock-name',
                                  children: e,
                                }),
                                (0, k.jsxs)('span', {
                                  className: 'lp-stepper',
                                  children: [
                                    (0, k.jsx)('i', { children: '\u2212' }),
                                    (0, k.jsx)('b', {
                                      children: C(
                                        0 === n ? 6 : 1 === n ? 3 : 1,
                                      ),
                                    }),
                                    (0, k.jsx)('i', { children: '+' }),
                                  ],
                                }),
                                (0, k.jsxs)('span', {
                                  className: 'lp-stock-count',
                                  children: [
                                    a,
                                    (0, k.jsx)('small', {
                                      children: i.landingFa.inventory,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            e,
                          ),
                        ),
                      }),
                    }),
                  ],
                }),
                (0, k.jsxs)('article', {
                  className: 'lp-feature lp-feature-blue lp-feature-report',
                  'data-reveal': !0,
                  children: [
                    (0, k.jsxs)('div', {
                      className: 'lp-gallery-caption',
                      children: [
                        (0, k.jsx)('span', {
                          className: 'lp-step-tag lp-rise',
                          style: S(0),
                          children: i.landingFa.stepThree,
                        }),
                        (0, k.jsx)('h3', {
                          className: 'lp-rise lp-rise-alt',
                          style: S(80),
                          children: i.landingFa.stepProfitTitle,
                        }),
                        (0, k.jsx)('p', {
                          className: 'lp-rise',
                          style: S(160),
                          children: i.landingFa.stepProfitBody,
                        }),
                      ],
                    }),
                    (0, k.jsx)('div', {
                      className:
                        'lp-gallery-art lp-reveal lp-art-report lp-rise lp-rise-alt',
                      style: S(240),
                      children: (0, k.jsxs)('div', {
                        className: 'lp-mini-chart',
                        children: [
                          (0, k.jsxs)('div', {
                            children: [
                              (0, k.jsx)('span', {
                                children: i.landingFa.sampleReport,
                              }),
                              (0, k.jsxs)('b', {
                                children: [
                                  C(1248e4),
                                  ' ',
                                  (0, k.jsx)('small', {
                                    children: i.landingFa.toman,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, k.jsx)('div', {
                            className: 'lp-chart-bars',
                            'aria-hidden': 'true',
                            children: [32, 52, 40, 71, 58, 86, 100].map(
                              (e, a) =>
                                (0, k.jsx)(
                                  'span',
                                  {
                                    style: {
                                      '--bar': `${e}%`,
                                      '--delay': 0.12 * a + 's',
                                    },
                                  },
                                  a,
                                ),
                            ),
                          }),
                          (0, k.jsxs)('div', {
                            className: 'lp-chart-days',
                            children: [
                              (0, k.jsx)('span', {
                                children: i.landingFa.saturday,
                              }),
                              (0, k.jsx)('span', {
                                children: i.landingFa.friday,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, k.jsxs)('div', {
              className: 'lp-team-summary lp-feature-blue lp-rise',
              'data-reveal': !0,
              style: S(0),
              children: [
                (0, k.jsx)(M, { name: 'team' }),
                (0, k.jsxs)('div', {
                  children: [
                    (0, k.jsx)('h3', { children: i.landingFa.teamStepHeading }),
                    (0, k.jsx)('p', {
                      children: i.landingFa.teamStepDescription,
                    }),
                    (0, k.jsx)('div', {
                      className: 'lp-avatar-group',
                      children: i.landingFa.teamMembers.map(([e, a], l) =>
                        (0, k.jsxs)(
                          'button',
                          {
                            type: 'button',
                            'aria-label': e + ' \xb7 ' + a,
                            className:
                              'lp-avatar' +
                              (0 === l ? ' is-you' : '') +
                              (n === l ? ' is-open' : ''),
                            style: { '--i': l, '--tone': z[l] },
                            onClick: () => s(n === l ? -1 : l),
                            onBlur: () => s(-1),
                            children: [
                              (0, k.jsx)('span', {
                                className: 'lp-avatar-disc',
                                'aria-hidden': 'true',
                                children: (0, k.jsx)(u.TeamAvatar, {
                                  index: l,
                                }),
                              }),
                              (0, k.jsxs)('span', {
                                className: 'lp-avatar-tip',
                                'aria-hidden': 'true',
                                children: [
                                  (0, k.jsx)('b', { children: e }),
                                  (0, k.jsx)('small', { children: a }),
                                ],
                              }),
                            ],
                          },
                          e,
                        ),
                      ),
                    }),
                    (0, k.jsx)('small', {
                      className: 'lp-team-add',
                      children: i.landingFa.teamAddLine,
                    }),
                  ],
                }),
              ],
            }),
            (0, k.jsxs)('div', {
              className: 'lp-feature-foot',
              'data-reveal': !0,
              children: [
                (0, k.jsxs)('span', {
                  className: 'lp-rise',
                  style: S(0),
                  children: [
                    (0, k.jsx)(M, { name: 'shield', size: 18 }),
                    i.landingFa.historyFeature,
                  ],
                }),
                (0, k.jsxs)('span', {
                  className: 'lp-rise lp-rise-alt',
                  style: S(80),
                  children: [
                    (0, k.jsx)(M, { name: 'photo', size: 18 }),
                    i.landingFa.photosFeature,
                  ],
                }),
                (0, k.jsxs)('span', {
                  className: 'lp-rise',
                  style: S(160),
                  children: [
                    (0, k.jsx)(M, { name: 'chart', size: 18 }),
                    i.landingFa.excelFeature,
                  ],
                }),
              ],
            }),
          ],
        }),
      });
    }
    function P({ device: e = !1 }) {
      return (0, k.jsxs)('figure', {
        className: 'lp-showcase',
        'aria-label': i.landingFa.mobileCaption,
        children: [
          (0, k.jsxs)('div', {
            className: 'lp-phone',
            children: [
              e &&
                (0, k.jsx)('div', {
                  className: 'lp-phone-camera',
                  'aria-hidden': 'true',
                }),
              (0, k.jsxs)('div', {
                className: 'lp-phone-header',
                children: [
                  (0, k.jsx)(a.BrandMark, { tone: 'blue', size: 28 }),
                  (0, k.jsx)('b', { children: i.landingFa.brand }),
                  (0, k.jsx)(M, { name: 'sun', size: 18 }),
                ],
              }),
              (0, k.jsx)('h3', { children: i.landingFa.phoneHeading }),
              (0, k.jsx)('p', { children: i.landingFa.voiceTagline }),
              (0, k.jsxs)('div', {
                className: 'lp-orb-wrap',
                children: [
                  (0, k.jsx)('div', {
                    className: 'lp-voice-orb',
                    children: (0, k.jsx)(n.Icon, {
                      name: 'ai',
                      size: 44,
                      color: '#fff',
                    }),
                  }),
                  (0, k.jsx)('b', { children: i.landingFa.voice }),
                  (0, k.jsx)('small', { children: i.landingFa.voiceHint }),
                ],
              }),
              (0, k.jsxs)('div', {
                className: 'lp-preview-keys',
                children: [
                  (0, k.jsxs)('span', {
                    children: [
                      (0, k.jsx)(M, { name: 'box', size: 16 }),
                      i.landingFa.typed,
                    ],
                  }),
                  (0, k.jsxs)('span', {
                    children: [
                      (0, k.jsx)(M, { name: 'scan', size: 16 }),
                      i.landingFa.scannerHeading,
                    ],
                  }),
                  y.AI_PHOTOS &&
                    (0, k.jsxs)('span', {
                      children: [
                        (0, k.jsx)(M, { name: 'photo', size: 16 }),
                        i.landingFa.photo,
                      ],
                    }),
                ],
              }),
              (0, k.jsxs)('div', {
                className: 'lp-manual-card',
                children: [
                  (0, k.jsx)('h4', { children: i.landingFa.manualEntry }),
                  (0, k.jsxs)('div', {
                    children: [
                      (0, k.jsx)('span', { children: i.landingFa.product }),
                      (0, k.jsx)('b', { children: i.landingFa.milk }),
                    ],
                  }),
                  (0, k.jsxs)('div', {
                    children: [
                      (0, k.jsx)('span', {
                        children: i.landingFa.receiptDetails,
                      }),
                      (0, k.jsx)('b', { children: C(12) }),
                    ],
                  }),
                  (0, k.jsxs)('div', {
                    className: 'lp-preview-save',
                    children: [
                      i.landingFa.saveSample,
                      (0, k.jsx)(M, { name: 'check', size: 17 }),
                    ],
                  }),
                ],
              }),
              (0, k.jsxs)('div', {
                className: 'lp-phone-dock',
                'aria-hidden': 'true',
                children: [
                  (0, k.jsx)(M, { name: 'box', size: 19 }),
                  (0, k.jsx)('span', {
                    children: (0, k.jsx)(M, { name: 'plus', size: 23 }),
                  }),
                  (0, k.jsx)(M, { name: 'chart', size: 19 }),
                  (0, k.jsx)(M, { name: 'team', size: 19 }),
                ],
              }),
            ],
          }),
          (0, k.jsx)('figcaption', {
            children: e
              ? i.landingFa.mobileCaption
              : i.landingFa.dashboardCaption,
          }),
        ],
      });
    }
    function D() {
      return (0, k.jsxs)('div', {
        className: 'lp-rig-desk',
        'aria-hidden': 'true',
        children: [
          (0, k.jsxs)('div', {
            className: 'lp-rd-top',
            children: [
              (0, k.jsx)(a.BrandMark, { tone: 'blue', size: 18 }),
              (0, k.jsx)('b', { children: i.landingFa.brand }),
              (0, k.jsx)('span', { children: i.landingFa.dashboardPath }),
            ],
          }),
          (0, k.jsx)('div', {
            className: 'lp-rd-stats',
            children: [
              [i.landingFa.inventory, C(248)],
              [i.landingFa.rigIn, C(36)],
              [i.landingFa.rigOut, C(19)],
            ].map(([e, a]) =>
              (0, k.jsxs)(
                'div',
                {
                  children: [
                    (0, k.jsx)('span', { children: e }),
                    (0, k.jsx)('b', { children: a }),
                  ],
                },
                e,
              ),
            ),
          }),
          (0, k.jsx)('div', {
            className: 'lp-rd-table',
            children: i.landingFa.rigProducts.map(([e, a, n]) =>
              (0, k.jsxs)(
                'div',
                {
                  children: [
                    (0, k.jsx)('span', { children: e }),
                    (0, k.jsx)('em', { children: n }),
                    (0, k.jsx)('b', { children: (0, F.localDigits)(a) }),
                  ],
                },
                e,
              ),
            ),
          }),
        ],
      });
    }
    function _({ items: e }) {
      return (0, k.jsxs)('div', {
        className: 'lp-plan-features',
        children: [
          (0, k.jsx)('span', { children: i.landingFa.planFeatures }),
          (0, k.jsx)('ul', {
            children: e.map((e, a) =>
              (0, k.jsxs)(
                'li',
                {
                  style: { '--i': a },
                  children: [(0, k.jsx)(M, { name: 'check', size: 16 }), e],
                },
                e,
              ),
            ),
          }),
        ],
      });
    }
    const T = (e) =>
        e > 0 ? (0, h.interpolate)(i.landingFa.refundFeePart, { p: C(e) }) : '',
      H = ['team', 'integrations'];
    function A(e) {
      const a = e?.free,
        n = e?.plans?.find((e) => 'standard' === e.id),
        s =
          a?.features ||
          Object.fromEntries(
            Object.entries(n?.features || {}).filter(([e]) => !H.includes(e)),
          );
      return {
        records: a?.monthly_record_limit ?? l.FREE_RECORD_LIMIT,
        members: a?.member_limit ?? 1,
        features: s,
      };
    }
    function O({ onStart: a, billing: n, refundDays: s, refundFee: l = 0 }) {
      const [t, c] = (0, e.useState)(1),
        { data: o, error: p, reload: x } = n,
        j = o?.trialDays || 0,
        u = (o?.plans || [])
          .filter((e) => 'standard' === e.id || 'pro' === e.id)
          .sort(
            (e, a) =>
              ('standard' === e.id ? 0 : 1) - ('standard' === a.id ? 0 : 1),
          ),
        v = u.find((e) => 'pro' === e.id),
        f = A(o),
        b = (e) =>
          (o?.features || [])
            .filter((a) => e[a.key] && (y.AI_PHOTOS || 'image' !== a.key))
            .map((e) => (0, F.L)(e.label)),
        N = (e) =>
          e
            ? [
                (0, h.interpolate)(i.landingFa.aiPerDay, {
                  n: C(e.ai_daily_limit),
                }),
                e.member_limit > 1
                  ? (0, h.interpolate)(i.landingFa.memberTeam, {
                      n: C(e.member_limit - 1),
                    })
                  : (0, h.interpolate)(i.landingFa.memberCount, {
                      n: C(e.member_limit),
                    }),
                ...b(e.features),
              ]
            : [],
        w = (e) => {
          const a = v?.periods.find((a) => a.months === e);
          return a && a.discount_percent > 0
            ? (0, h.interpolate)(i.landingFa.discountBadge, {
                p: C(Math.round(a.discount_percent)),
              })
            : '';
        },
        L =
          1 === f.members
            ? i.landingFa.freeOnePerson
            : (0, h.interpolate)(i.landingFa.freePeople, { n: C(f.members) });
      return (0, k.jsxs)('section', {
        id: 'start',
        className: 'lp-section lp-pricing-band lp-reveal',
        children: [
          (0, k.jsxs)('div', {
            className: 'lp-pricing-head',
            'data-reveal': !0,
            children: [
              (0, k.jsxs)('span', {
                className: 'lp-chip',
                children: [
                  (0, k.jsx)(M, { name: 'bolt', size: 15 }),
                  i.landingFa.pricingEyebrow,
                ],
              }),
              (0, k.jsx)('h2', { children: i.landingFa.pricingHeading }),
              (0, k.jsx)('p', {
                children:
                  s > 0
                    ? (0, h.interpolate)(i.landingFa.pricingDescription, {
                        n: C(s),
                      })
                    : i.landingFa.pricingDescriptionPlain,
              }),
            ],
          }),
          (0, k.jsx)('div', {
            className: 'lp-periods lp-period-switch',
            role: 'group',
            'aria-label': i.landingFa.billingPeriod,
            'data-reveal': !0,
            children: [1, 3, 12].map((e, a) =>
              (0, k.jsxs)(
                'button',
                {
                  type: 'button',
                  'aria-pressed': t === e,
                  onClick: () => c(e),
                  children: [
                    [
                      i.landingFa.monthly,
                      i.landingFa.quarterly,
                      i.landingFa.annually,
                    ][a],
                    !!w(e) &&
                      (0, k.jsx)(
                        'span',
                        { className: 'lp-period-badge', children: w(e) },
                        (t === e ? 'on' : 'off') + e,
                      ),
                  ],
                },
                e,
              ),
            ),
          }),
          p &&
            (0, k.jsxs)('p', {
              className: 'lp-pricing-state',
              role: 'alert',
              children: [
                p,
                ' ',
                (0, k.jsx)('button', {
                  onClick: x,
                  children: i.landingFa.retry,
                }),
              ],
            }),
          !o &&
            !p &&
            (0, k.jsx)('p', {
              className: 'lp-pricing-state',
              children: i.landingFa.plansLoading,
            }),
          (0, k.jsxs)('div', {
            id: 'pricing',
            className: 'lp-plans',
            'data-reveal': !0,
            children: [
              !!o &&
                (0, k.jsxs)('article', {
                  className: 'lp-plan lp-plan-free',
                  'data-plan': 'free',
                  style: S(0),
                  children: [
                    (0, k.jsxs)('div', {
                      className: 'lp-plan-top',
                      children: [
                        (0, k.jsxs)('div', {
                          children: [
                            (0, k.jsx)('h3', {
                              children: i.landingFa.planTitles.free,
                            }),
                            (0, k.jsx)('small', {
                              className: 'lp-plan-members',
                              children: L,
                            }),
                          ],
                        }),
                        (0, k.jsx)('span', {
                          className: 'lp-plan-tag',
                          children: i.landingFa.freeTag,
                        }),
                      ],
                    }),
                    (0, k.jsx)('div', {
                      className: 'lp-plan-price',
                      children: (0, k.jsx)('strong', {
                        children: (0, h.interpolate)(i.landingFa.freeRecords, {
                          n: C(f.records),
                        }),
                      }),
                    }),
                    (0, k.jsx)('div', {
                      className: 'lp-plan-saving',
                      children: i.landingFa.freeReset,
                    }),
                    (0, k.jsx)('p', {
                      className: 'lp-plan-desc',
                      children: i.landingFa.freeCounts,
                    }),
                    j > 0 &&
                      (0, k.jsx)('p', {
                        className: 'lp-plan-desc',
                        children: (0, h.interpolate)(
                          i.landingFa.freeDescription,
                          { plan: i.landingFa.planTitles.pro, n: C(j) },
                        ),
                      }),
                    (0, k.jsx)('button', {
                      className: 'lp-button lp-plan-cta',
                      onClick: a,
                      children: i.landingFa.freeAction,
                    }),
                    (0, k.jsx)(
                      _,
                      {
                        items: [
                          (0, h.interpolate)(i.landingFa.memberCount, {
                            n: C(f.members),
                          }),
                          ...b(f.features),
                          i.landingFa.freeKeeps,
                        ],
                      },
                      'features' + t,
                    ),
                  ],
                }),
              u.map((e, n) => {
                const s = e.periods.find((e) => e.months === t),
                  l = 'standard' === e.id,
                  c = i.landingFa.planTitles[e.id] || (0, F.L)(e.title),
                  p =
                    s && o?.launch && (o.launch.months || [1]).includes(t)
                      ? o.launch.percent
                      : 0,
                  x =
                    s && p
                      ? Math.max(
                          1e3,
                          Math.floor((s.total_toman * (100 - p)) / 100),
                        )
                      : 0;
                return (0, k.jsxs)(
                  'article',
                  {
                    className:
                      'lp-plan' + (l ? ' lp-plan-hero lp-plan-ring' : ''),
                    style: S(90 * (n + 1)),
                    children: [
                      (0, k.jsxs)('div', {
                        className: 'lp-plan-top',
                        children: [
                          (0, k.jsxs)('div', {
                            children: [
                              (0, k.jsx)('h3', { children: c }),
                              (0, k.jsx)('small', {
                                className: 'lp-plan-members',
                                children:
                                  1 === e.member_limit
                                    ? (0, h.interpolate)(
                                        i.landingFa.singlePlan,
                                        { n: C(1) },
                                      )
                                    : (0, h.interpolate)(
                                        i.landingFa.groupPlan,
                                        { n: C(e.member_limit - 1) },
                                      ),
                              }),
                            ],
                          }),
                          (0, k.jsx)('span', {
                            className: 'lp-plan-tag',
                            children: l
                              ? i.landingFa.planTagPick
                              : i.landingFa.planTagFull,
                          }),
                        ],
                      }),
                      (0, k.jsxs)(
                        'div',
                        {
                          className: 'lp-plan-price',
                          children: [
                            (0, k.jsx)('strong', {
                              children: s
                                ? C(p ? x : s.total_toman) +
                                  ' ' +
                                  i.landingFa.toman
                                : '\u2014',
                            }),
                            (0, k.jsx)('span', {
                              children: (0, h.interpolate)(
                                i.landingFa.pricePeriod,
                                { n: C(t) },
                              ),
                            }),
                          ],
                        },
                        'price' + t,
                      ),
                      (0, k.jsx)(
                        'div',
                        {
                          className: 'lp-plan-saving',
                          children: p
                            ? (0, k.jsxs)(k.Fragment, {
                                children: [
                                  (0, k.jsx)('span', {
                                    children: (0, h.interpolate)(
                                      i.landingFa.launchLine,
                                      { p: C(p) },
                                    ),
                                  }),
                                  (0, k.jsx)('del', {
                                    children:
                                      C(s.total_toman) +
                                      ' ' +
                                      i.landingFa.toman,
                                  }),
                                ],
                              })
                            : s && s.savings_toman > 0
                              ? (0, k.jsxs)(k.Fragment, {
                                  children: [
                                    (0, k.jsx)('span', {
                                      children: (0, h.interpolate)(
                                        i.landingFa.savingLine,
                                        {
                                          m: C(Math.trunc(s.total_toman / t)),
                                          p: C(Math.round(s.discount_percent)),
                                        },
                                      ),
                                    }),
                                    (0, k.jsx)('del', {
                                      children:
                                        C(s.subtotal_toman) +
                                        ' ' +
                                        i.landingFa.toman,
                                    }),
                                  ],
                                })
                              : i.landingFa.monthlyRate,
                        },
                        'saving' + t,
                      ),
                      (0, k.jsx)('p', {
                        className: 'lp-plan-desc',
                        children: (0, F.L)(e.description),
                      }),
                      (0, k.jsx)('button', {
                        className: 'lp-button lp-plan-cta',
                        onClick: a,
                        children: (0, h.interpolate)(i.landingFa.ctaPlan, {
                          plan: c,
                        }),
                      }),
                      (0, k.jsx)(_, { items: N(e) }, 'features' + t),
                    ],
                  },
                  e.id,
                );
              }),
            ],
          }),
          s > 0 &&
            (0, k.jsxs)('p', {
              className: 'lp-pricing-note',
              children: [
                (0, k.jsx)(M, { name: 'shield', size: 18 }),
                (0, h.interpolate)(i.landingFa.pricingNote, {
                  n: C(s),
                  fee: T(l),
                }),
              ],
            }),
        ],
      });
    }
    function q(e) {
      'view' === e && (0, w.rememberCameFrom)();
      try {
        const a =
          new URLSearchParams(window.location.search).get('utm_source') ||
          void 0;
        fetch('/v1/visit', {
          method: 'POST',
          keepalive: !0,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: e,
            ref: document.referrer || void 0,
            utm: a,
          }),
        }).catch(() => {});
      } catch {}
    }
  },
  485,
  [
    2, 486, 385, 488, 442, 492, 496, 497, 382, 501, 502, 498, 503, 505, 506,
    311, 1, 507, 437, 494, 508, 338,
  ],
);
