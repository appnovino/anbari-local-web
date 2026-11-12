// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 507; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'legalKinds', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      Object.defineProperty(e, 'legalTitles', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      Object.defineProperty(e, 'BUSINESS', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }),
      Object.defineProperty(e, 'legalStyles', {
        enumerable: !0,
        get: function () {
          return x;
        },
      }),
      (e.LegalPage = function ({ kind: l }) {
        return (0, s.jsxs)('article', {
          className: 'lp-legal',
          'data-testid': 'legal-' + l,
          children: [
            (0, s.jsx)('a', {
              className: 'lp-legal-back',
              href: '#main',
              children:
                '\u2192 \u0628\u0627\u0632\u06af\u0634\u062a \u0628\u0647 \u0635\u0641\u062d\u0647\u0654 \u0627\u0635\u0644\u06cc',
            }),
            (0, s.jsx)('h1', { children: c[l] }),
            'contact' === l
              ? (0, s.jsx)(j, {})
              : 'about' === l
                ? (0, s.jsx)(f, {})
                : (0, s.jsx)(u, {}),
          ],
        });
      }),
      (e.EnamadBadge = b),
      (e.BitpayBadge = y),
      (e.FooterPageLinks = function () {
        return (0, s.jsx)('nav', {
          className: 'lp-footer-pages',
          'aria-label':
            '\u0635\u0641\u062d\u0647\u200c\u0647\u0627\u06cc \u0633\u0627\u06cc\u062a',
          children: N.map(([l, n]) =>
            (0, s.jsx)('a', { href: l, children: n }, l),
          ),
        });
      }),
      (e.FooterLegalLinks = function () {
        return (0, s.jsxs)('nav', {
          className: 'lp-footer-legal',
          'aria-label':
            '\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u06a9\u0633\u0628\u200c\u0648\u06a9\u0627\u0631',
          children: [
            o
              .filter((l) => 'contact' !== l)
              .map((l) =>
                (0, s.jsx)('a', { href: '#' + l, children: c[l] }, l),
              ),
            (0, s.jsx)('a', {
              href: '/privacy',
              children:
                '\u062d\u0631\u06cc\u0645 \u062e\u0635\u0648\u0635\u06cc',
            }),
            (0, s.jsx)('a', { href: p.phoneHref, children: p.phone }),
            (0, s.jsx)('a', { href: 'mailto:' + p.email, children: p.email }),
            (0, s.jsx)(b, {}),
            (0, s.jsx)(y, {}),
          ],
        });
      }));
    var l = r(d[0]),
      n = r(d[1]),
      t = r(d[2]),
      s = r(d[3]);
    const o = ['contact', 'about', 'terms'],
      c = {
        contact: '\u062a\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627',
        about: '\u062f\u0631\u0628\u0627\u0631\u0647 \u0645\u0627',
        terms:
          '\u0642\u0648\u0627\u0646\u06cc\u0646 \u0648 \u0634\u0631\u0627\u06cc\u0637',
      },
      p = {
        name: n.BRAND.name,
        domain: 'myanbari.ir',
        phone: n.BRAND.telephoneDisplay,
        phoneHref: 'tel:' + n.BRAND.telephone,
        email: n.BRAND.email,
        enamad: { id: '8074675', code: 'lEz4YTcEwUWcqPnv0OlevXpV2ELEoryR' },
        bitpay: n.BRAND.bitpay,
        hours:
          '\u0634\u0646\u0628\u0647 \u062a\u0627 \u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647\u060c \u06f9 \u0635\u0628\u062d \u062a\u0627 \u06f5 \u0628\u0639\u062f\u0627\u0632\u0638\u0647\u0631',
        hoursNote:
          '\u0628\u0647\u200c\u0632\u0648\u062f\u06cc \u067e\u0627\u0633\u062e\u200c\u06af\u0648\u06cc\u06cc \u06f2\u06f4 \u0633\u0627\u0639\u062a\u0647',
      },
      x =
        '\n.lp-legal{width:min(760px,calc(100% - 32px));margin-inline:auto;padding-block:32px 48px}\n.lp-legal-back{display:inline-flex;align-items:center;gap:6px;color:var(--accent);font-size:14px;text-decoration:none;margin-bottom:16px}\n.lp-legal h1{font-size:28px;line-height:40px;margin:0 0 8px}\n.lp-legal>p{color:var(--ink2);font-size:15px;line-height:28px;margin:0 0 20px}\n.lp-legal-card{background:var(--card);border:1px solid var(--line);border-radius:20px;padding:20px;margin-bottom:16px}\n.lp-legal-card h2{font-size:18px;line-height:28px;margin:0 0 8px}\n.lp-legal-card p,.lp-legal-card li{color:var(--ink2);font-size:15px;line-height:28px;margin:0}\n.lp-legal-card ul,.lp-legal-card ol{margin:0;padding-inline-start:20px}\n.lp-legal-rows{display:grid;gap:12px;margin:0}\n.lp-legal-rows div{display:flex;flex-wrap:wrap;justify-content:space-between;gap:4px 12px;padding-bottom:12px;border-bottom:1px solid var(--line)}\n.lp-legal-rows div:last-child{border-bottom:0;padding-bottom:0}\n.lp-legal-rows dt{color:var(--muted);font-size:14px}\n.lp-legal-rows dd{margin:0;font-size:15px;color:var(--ink)}\n.lp-legal-rows a{color:var(--accent);text-decoration:none;direction:ltr;unicode-bidi:isolate}\n.lp-footer-legal{display:flex;flex-wrap:wrap;gap:8px 16px;margin-top:12px}\n.lp-footer-legal a{color:var(--ink2);font-size:14px;text-decoration:none}\n.lp-footer-pages{display:flex;flex-wrap:wrap;gap:8px 16px;margin-top:12px}\n.lp-footer-pages a{color:var(--ink2);font-size:14px;text-decoration:none}\n.lp-footer-legal .lp-enamad{display:inline-flex;background:#fff;border-radius:12px;padding:4px}\n.lp-footer-legal .lp-enamad img{width:72px;height:auto;display:block}\n.lp-footer-legal .lp-bitpay{display:inline-flex;background:#fff;border-radius:12px;padding:4px}\n.lp-footer-legal .lp-bitpay img{width:72px;height:auto;display:block}\n.lp-footer-legal .lp-bitpay:not(.is-loaded){background:transparent;padding:0}\n.lp-footer-legal .lp-bitpay:not(.is-loaded) img{width:1px;height:1px;opacity:0}\n.lp-footer-legal .lp-enamad:not(.is-loaded){background:transparent;padding:0}\n.lp-footer-legal .lp-enamad:not(.is-loaded) img{width:1px;height:1px;opacity:0}\n';
    function h({ items: l }) {
      return (0, s.jsx)('dl', {
        className: 'lp-legal-rows',
        children: l
          .filter(([, l]) => l)
          .map(([l, n, t]) =>
            (0, s.jsxs)(
              'div',
              {
                children: [
                  (0, s.jsx)('dt', { children: l }),
                  (0, s.jsx)('dd', {
                    children: t ? (0, s.jsx)('a', { href: t, children: n }) : n,
                  }),
                ],
              },
              l,
            ),
          ),
      });
    }
    function j() {
      const l = p;
      return (0, s.jsxs)(s.Fragment, {
        children: [
          (0, s.jsx)('p', {
            children:
              '\u0628\u0631\u0627\u06cc \u067e\u0631\u0633\u0634\u060c \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u06cc\u0627 \u067e\u06cc\u06af\u06cc\u0631\u06cc \u062e\u0631\u06cc\u062f \u0627\u0634\u062a\u0631\u0627\u06a9\u060c \u0627\u0632 \u0647\u0631 \u06a9\u062f\u0627\u0645 \u0627\u0632 \u0631\u0627\u0647\u200c\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0628\u0627 \u0645\u0627 \u062f\u0631 \u062a\u0645\u0627\u0633 \u0628\u0627\u0634\u06cc\u062f.',
          }),
          (0, s.jsxs)('section', {
            className: 'lp-legal-card',
            children: [
              (0, s.jsx)('h2', {
                children:
                  '\u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc',
              }),
              (0, s.jsx)(h, {
                items: [
                  ['\u062a\u0644\u0641\u0646', l.phone, l.phoneHref],
                  [
                    '\u0627\u06cc\u0645\u06cc\u0644 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc',
                    l.email,
                    'mailto:' + l.email,
                  ],
                  [
                    '\u0633\u0627\u0639\u062a \u067e\u0627\u0633\u062e\u200c\u06af\u0648\u06cc\u06cc',
                    (0, s.jsxs)(s.Fragment, {
                      children: [
                        l.hours,
                        (0, s.jsx)('br', {}),
                        (0, s.jsxs)('small', {
                          children: ['(', l.hoursNote, ')'],
                        }),
                      ],
                    }),
                  ],
                  [
                    '\u0648\u0628\u200c\u0633\u0627\u06cc\u062a',
                    l.domain,
                    'https://' + l.domain,
                  ],
                ],
              }),
            ],
          }),
        ],
      });
    }
    function f() {
      return (0, s.jsxs)(s.Fragment, {
        children: [
          (0, s.jsx)('p', {
            children:
              'myAnbari \u06cc\u06a9 \u0628\u0631\u0646\u0627\u0645\u0647\u0654 \u0633\u0627\u062f\u0647 \u0628\u0631\u0627\u06cc \u0645\u062f\u06cc\u0631\u06cc\u062a \u0645\u0648\u062c\u0648\u062f\u06cc \u0648 \u0641\u0631\u0648\u0634 \u0645\u063a\u0627\u0632\u0647\u200c\u0647\u0627\u0633\u062a\u061b \u0631\u0648\u06cc \u06af\u0648\u0634\u06cc \u0648 \u06a9\u0627\u0645\u067e\u06cc\u0648\u062a\u0631.',
          }),
          (0, s.jsxs)('section', {
            className: 'lp-legal-card',
            children: [
              (0, s.jsx)('h2', {
                children:
                  'myAnbari \u0686\u0647 \u0645\u06cc\u200c\u06a9\u0646\u062f\u061f',
              }),
              (0, s.jsxs)('p', {
                children: [
                  '\u0628\u0627 myAnbari \u0635\u0627\u062d\u0628 \u0645\u063a\u0627\u0632\u0647 \u06a9\u0627\u0644\u0627\u0647\u0627\u06cc\u0634 \u0631\u0627 ',
                  t.AI_PHOTOS
                    ? '\u0628\u0627 \u0635\u062f\u0627\u060c \u0639\u06a9\u0633 \u06cc\u0627 \u0628\u0627\u0631\u06a9\u062f'
                    : '\u0628\u0627 \u0635\u062f\u0627\u060c \u0628\u0627\u0631\u06a9\u062f \u06cc\u0627 \u0686\u0646\u062f \u06a9\u0644\u0645\u0647',
                  ' \u062b\u0628\u062a \u0645\u06cc\u200c\u06a9\u0646\u062f\u060c \u0648\u0631\u0648\u062f \u0648 \u062e\u0631\u0648\u062c \u06a9\u0627\u0644\u0627 \u0631\u0627 \u0645\u06cc\u200c\u0628\u06cc\u0646\u062f\u060c \u0641\u0631\u0648\u0634 \u0648 \u0633\u0648\u062f\u0634 \u0631\u0627 \u062f\u0646\u0628\u0627\u0644 \u0645\u06cc\u200c\u06a9\u0646\u062f \u0648 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0647\u0645\u06a9\u0627\u0631\u0627\u0646\u0634 \u0631\u0627 \u0628\u0627 \u062f\u0633\u062a\u0631\u0633\u06cc \u0645\u062d\u062f\u0648\u062f \u0628\u0647 \u062d\u0633\u0627\u0628 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u062f. \u0647\u062f\u0641 \u0645\u0627 \u0627\u06cc\u0646 \u0627\u0633\u062a \u06a9\u0647 \u062d\u0633\u0627\u0628\u200c\u0648\u06a9\u062a\u0627\u0628 \u0627\u0646\u0628\u0627\u0631 \u0628\u0631\u0627\u06cc \u0647\u0631 \u0645\u063a\u0627\u0632\u0647\u200c\u062f\u0627\u0631\u06cc\u060c \u0628\u062f\u0648\u0646 \u062f\u0627\u0646\u0634 \u0641\u0646\u06cc\u060c \u0633\u0627\u062f\u0647 \u0628\u0627\u0634\u062f.',
                ],
              }),
            ],
          }),
          (0, s.jsxs)('section', {
            className: 'lp-legal-card',
            children: [
              (0, s.jsx)('h2', {
                children:
                  '\u0645\u0627 \u0686\u0647 \u06a9\u0633\u06cc \u0647\u0633\u062a\u06cc\u0645\u061f',
              }),
              (0, s.jsxs)('p', {
                children: [
                  'myAnbari \u0631\u0627 \u062a\u06cc\u0645 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u0645\u06cc\u200c\u0633\u0627\u0632\u062f \u0648 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0645\u06cc\u200c\u06a9\u0646\u062f. \u0628\u0631\u0627\u06cc \u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627 \u0645\u0627 \u0628\u0647 \u0635\u0641\u062d\u0647\u0654 ',
                  (0, s.jsx)('a', {
                    href: '#contact',
                    children:
                      '\u062a\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627',
                  }),
                  ' \u0633\u0631 \u0628\u0632\u0646\u06cc\u062f.',
                ],
              }),
            ],
          }),
        ],
      });
    }
    function u() {
      return (0, s.jsxs)(s.Fragment, {
        children: [
          (0, s.jsx)('p', {
            children:
              '\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 myAnbari \u06cc\u0639\u0646\u06cc \u067e\u0630\u06cc\u0631\u0641\u062a\u0646 \u0627\u06cc\u0646 \u0642\u0648\u0627\u0646\u06cc\u0646. \u0644\u0637\u0641\u0627\u064b \u067e\u06cc\u0634 \u0627\u0632 \u062e\u0631\u06cc\u062f \u0627\u0634\u062a\u0631\u0627\u06a9 \u0622\u0646\u200c\u0647\u0627 \u0631\u0627 \u0628\u062e\u0648\u0627\u0646\u06cc\u062f.',
          }),
          (0, s.jsxs)('section', {
            className: 'lp-legal-card',
            children: [
              (0, s.jsx)('h2', {
                children: '\u06f1. \u062e\u062f\u0645\u062a',
              }),
              (0, s.jsx)('p', {
                children:
                  'myAnbari \u06cc\u06a9 \u0646\u0631\u0645\u200c\u0627\u0641\u0632\u0627\u0631 \u0622\u0646\u0644\u0627\u06cc\u0646 \u0645\u062f\u06cc\u0631\u06cc\u062a \u0645\u0648\u062c\u0648\u062f\u06cc \u0627\u0633\u062a \u06a9\u0647 \u0628\u0627 \u0637\u0631\u062d \u0631\u0627\u06cc\u06af\u0627\u0646 \u0648 \u0627\u0634\u062a\u0631\u0627\u06a9 \u0627\u0631\u0627\u0626\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f. \u0647\u0631 \u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc \u06cc\u06a9 \u0627\u0646\u0628\u0627\u0631 \u062f\u0627\u0631\u062f.',
              }),
            ],
          }),
          (0, s.jsxs)('section', {
            className: 'lp-legal-card',
            children: [
              (0, s.jsx)('h2', {
                children:
                  '\u06f2. \u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc',
              }),
              (0, s.jsxs)('ul', {
                children: [
                  (0, s.jsx)('li', {
                    children:
                      '\u062b\u0628\u062a\u200c\u0646\u0627\u0645 \u0628\u0627 \u0634\u0645\u0627\u0631\u0647\u0654 \u0645\u0648\u0628\u0627\u06cc\u0644 \u0648 \u06a9\u062f \u062a\u0623\u06cc\u06cc\u062f \u067e\u06cc\u0627\u0645\u06a9\u06cc \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                  }),
                  (0, s.jsx)('li', {
                    children:
                      '\u0646\u06af\u0647\u200c\u062f\u0627\u0631\u06cc \u062d\u0633\u0627\u0628 \u0648 \u062f\u0633\u062a\u0631\u0633\u06cc \u0647\u0645\u06a9\u0627\u0631\u0627\u0646 \u0628\u0631 \u0639\u0647\u062f\u0647\u0654 \u0635\u0627\u062d\u0628 \u062d\u0633\u0627\u0628 \u0627\u0633\u062a.',
                  }),
                  (0, s.jsx)('li', {
                    children:
                      '\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u062b\u0628\u062a\u200c\u0634\u062f\u0647 \u0628\u0627\u06cc\u062f \u062f\u0631\u0633\u062a \u0648 \u0645\u062a\u0639\u0644\u0642 \u0628\u0647 \u062e\u0648\u062f \u06a9\u0627\u0631\u0628\u0631 \u0628\u0627\u0634\u062f.',
                  }),
                ],
              }),
            ],
          }),
          (0, s.jsxs)('section', {
            className: 'lp-legal-card',
            children: [
              (0, s.jsx)('h2', {
                children: '\u06f3. \u0627\u0634\u062a\u0631\u0627\u06a9',
              }),
              (0, s.jsxs)('ul', {
                children: [
                  (0, s.jsx)('li', {
                    children:
                      'myAnbari \u0637\u0631\u062d \xab\u0631\u0627\u06cc\u06af\u0627\u0646\xbb \u062f\u0627\u0631\u062f: \u0647\u0631 \u062d\u0633\u0627\u0628 \u062a\u0627\u0632\u0647 \u0648 \u0647\u0631 \u0641\u0631\u0648\u0634\u06af\u0627\u0647\u06cc \u06a9\u0647 \u0627\u0634\u062a\u0631\u0627\u06a9\u0634 \u062a\u0645\u0627\u0645 \u0634\u062f\u0647\u060c \u062e\u0648\u062f\u06a9\u0627\u0631 \u0631\u0648\u06cc \u0622\u0646 \u0627\u0633\u062a\u061b \u06f2\u06f0 \u06a9\u0627\u0631 \u0628\u0631\u0627\u06cc \u0627\u0645\u062a\u062d\u0627\u0646 myAnbari\u060c \u0642\u0628\u0644 \u0627\u0632 \u062e\u0631\u06cc\u062f\u060c \u0628\u0631\u0627\u06cc \u06cc\u06a9 \u0646\u0641\u0631 (\u0647\u0631 \u062b\u0628\u062a \u0628\u0627 \u0635\u062f\u0627\u060c \u0627\u0641\u0632\u0648\u062f\u0646 \u06a9\u0627\u0644\u0627\u060c \u0641\u0631\u0648\u0634\u060c \u0648\u0631\u0648\u062f \u0648 \u062e\u0631\u0648\u062c\u060c \u0646\u0633\u06cc\u0647\u060c \u0686\u06a9 \u06cc\u0627 \u0647\u0632\u06cc\u0646\u0647 \u06cc\u06a9 \u06a9\u0627\u0631 \u062d\u0633\u0627\u0628 \u0645\u06cc\u200c\u0634\u0648\u062f). \u0648\u0642\u062a\u06cc \u06a9\u0627\u0631\u0647\u0627\u06cc \u0627\u0645\u062a\u062d\u0627\u0646\u06cc \u062a\u0645\u0627\u0645 \u0634\u062f\u060c \u0628\u0631\u0627\u06cc \u06a9\u0627\u0631 \u0646\u0627\u0645\u062d\u062f\u0648\u062f \u0627\u0634\u062a\u0631\u0627\u06a9 \u0628\u06af\u06cc\u0631\u06cc\u062f\u061b \u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u0642\u0628\u0644\u06cc \u0647\u0645\u06cc\u0634\u0647 \u062f\u06cc\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                  }),
                  (0, s.jsx)('li', {
                    children:
                      '\u0628\u0631\u0627\u06cc \u06a9\u0627\u0631 \u0628\u06cc\u0634\u062a\u0631\u060c \u0627\u0634\u062a\u0631\u0627\u06a9 \xab\u0627\u0633\u062a\u0627\u0646\u062f\u0627\u0631\u062f\xbb \u06cc\u0627 \xab\u067e\u0644\u0627\u0633\xbb \u0645\u0627\u0647\u0627\u0646\u0647\u060c \u0633\u0647\u200c\u0645\u0627\u0647\u0647 \u06cc\u0627 \u0633\u0627\u0644\u0627\u0646\u0647 \u062e\u0631\u06cc\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f\u061b \u062f\u0641\u062a\u0631 \u062d\u0633\u0627\u0628\u060c \u0646\u0633\u06cc\u0647 \u0648 \u0686\u06a9 \u062f\u0631 \u0647\u0645\u0647\u0654 \u0637\u0631\u062d\u200c\u0647\u0627 (\u0631\u0627\u06cc\u06af\u0627\u0646 \u0647\u0645) \u0647\u0633\u062a \u0648 \u0647\u0645\u06a9\u0627\u0631\u0627\u0646 \u0641\u0642\u0637 \u062f\u0631 \xab\u067e\u0644\u0627\u0633\xbb. \u0642\u06cc\u0645\u062a \u0647\u0631 \u0637\u0631\u062d \u062f\u0631 \u0635\u0641\u062d\u0647\u0654 \u0627\u0635\u0644\u06cc \u0633\u0627\u06cc\u062a \u0646\u0648\u0634\u062a\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a.',
                  }),
                  (0, s.jsx)('li', {
                    children:
                      '\u06af\u0627\u0647\u06cc \u0628\u0631\u0627\u06cc \u0645\u062f\u062a \u0645\u062d\u062f\u0648\u062f \u062f\u0648\u0631\u0647\u0654 \u0622\u0632\u0645\u0627\u06cc\u0634\u06cc \u0631\u0627\u06cc\u06af\u0627\u0646 \u067e\u06cc\u0634\u0646\u0647\u0627\u062f \u0645\u06cc\u200c\u0634\u0648\u062f\u061b \u0634\u0631\u0627\u06cc\u0637 \u0622\u0646 \u0647\u0645\u0627\u0646\u200c\u062c\u0627 \u06a9\u0647 \u067e\u06cc\u0634\u0646\u0647\u0627\u062f \u0645\u06cc\u200c\u0634\u0648\u062f \u0646\u0648\u0634\u062a\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a.',
                  }),
                  (0, s.jsx)('li', {
                    children:
                      '\u067e\u0631\u062f\u0627\u062e\u062a \u0627\u0632 \u0637\u0631\u06cc\u0642 \u062f\u0631\u06af\u0627\u0647 \u0627\u0645\u0646 \u0628\u0627\u0646\u06a9\u06cc (\u0628\u06cc\u062a\u200c\u067e\u06cc) \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f \u0648 \u0627\u0634\u062a\u0631\u0627\u06a9 \u062e\u0648\u062f\u06a9\u0627\u0631 \u062a\u0645\u062f\u06cc\u062f \u0646\u0645\u06cc\u200c\u0634\u0648\u062f.',
                  }),
                ],
              }),
            ],
          }),
          (0, s.jsxs)('section', {
            className: 'lp-legal-card',
            children: [
              (0, s.jsx)('h2', {
                children:
                  '\u06f4. \u0628\u0627\u0632\u06af\u0634\u062a \u0648\u062c\u0647',
              }),
              (0, s.jsxs)('ul', {
                children: [
                  (0, s.jsx)('li', {
                    children:
                      '\u0628\u0627\u0632\u06af\u0634\u062a \u0648\u062c\u0647 \u0641\u0642\u0637 \u0628\u0631\u0627\u06cc \u0627\u0648\u0644\u06cc\u0646 \u062e\u0631\u06cc\u062f \u0647\u0631 \u06a9\u0627\u0631\u0628\u0631 \u062c\u062f\u06cc\u062f \u0627\u0633\u062a: \u062f\u0631 \u0647\u0641\u062a\u0647\u0654 \u0627\u0648\u0644 \u067e\u0633 \u0627\u0632 \u0622\u0646 \u062e\u0631\u06cc\u062f \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u062f\u0631 \u0627\u067e \u0627\u0632 \xab\u0644\u063a\u0648 \u0627\u0634\u062a\u0631\u0627\u06a9\xbb \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0628\u0627\u0632\u06af\u0634\u062a \u0648\u062c\u0647 \u0628\u062f\u0647\u06cc\u062f.',
                  }),
                  (0, s.jsx)('li', {
                    children:
                      '\u0628\u0627 \u062b\u0628\u062a \u062f\u0631\u062e\u0648\u0627\u0633\u062a\u060c \u062f\u0633\u062a\u0631\u0633\u06cc \u0647\u0645\u0627\u0646 \u0644\u062d\u0638\u0647 \u0628\u0633\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f \u0648 \u0645\u0628\u0644\u063a \u067e\u0631\u062f\u0627\u062e\u062a\u060c \u067e\u0633 \u0627\u0632 \u06a9\u0633\u0631 \u06f1\u06f0\u066a \u06a9\u0627\u0631\u0645\u0632\u062f \u0648 \u0645\u0627\u0644\u06cc\u0627\u062a\u060c \u06cc\u06a9 \u0647\u0641\u062a\u0647 \u0628\u0639\u062f \u0628\u0647 \u06a9\u0627\u0631\u062a\u06cc \u06a9\u0647 \u062e\u0648\u062f\u062a\u0627\u0646 \u0648\u0627\u0631\u062f \u0648 \u062a\u0623\u06cc\u06cc\u062f \u06a9\u0631\u062f\u0647\u200c\u0627\u06cc\u062f \u0648\u0627\u0631\u06cc\u0632 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                  }),
                  (0, s.jsx)('li', {
                    children:
                      '\u067e\u0633 \u0627\u0632 \u0627\u06cc\u0646 \u0645\u0647\u0644\u062a\u060c \u06cc\u0627 \u0628\u0631\u0627\u06cc \u062e\u0631\u06cc\u062f\u0647\u0627\u06cc \u0628\u0639\u062f\u06cc \u0648 \u06a9\u0627\u0631\u0628\u0631\u0627\u0646\u06cc \u06a9\u0647 \u0642\u0628\u0644\u0627\u064b \u062e\u0631\u06cc\u062f \u06a9\u0631\u062f\u0647\u200c\u0627\u0646\u062f\u060c \u0645\u0628\u0644\u063a \u0627\u0634\u062a\u0631\u0627\u06a9 \u0628\u0631\u06af\u0631\u062f\u0627\u0646\u062f\u0647 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f \u0648 \u0627\u0634\u062a\u0631\u0627\u06a9 \u062a\u0627 \u067e\u0627\u06cc\u0627\u0646 \u062f\u0648\u0631\u0647 \u0641\u0639\u0627\u0644 \u0645\u06cc\u200c\u0645\u0627\u0646\u062f\u061b \u0644\u063a\u0648 \u0627\u0634\u062a\u0631\u0627\u06a9 \u0641\u0642\u0637 \u062a\u0645\u062f\u06cc\u062f \u0628\u0639\u062f\u06cc \u0631\u0627 \u0645\u062a\u0648\u0642\u0641 \u0645\u06cc\u200c\u06a9\u0646\u062f (\u062a\u0645\u062f\u06cc\u062f \u062e\u0648\u062f\u06a9\u0627\u0631 \u0646\u062f\u0627\u0631\u06cc\u0645). \u062e\u0631\u06cc\u062f\u0647\u0627\u06cc \u06a9\u0627\u0641\u0647\u200c\u0628\u0627\u0632\u0627\u0631 \u0627\u0632 \u0637\u0631\u06cc\u0642 \u062e\u0648\u062f \u0628\u0627\u0632\u0627\u0631 \u0628\u0631\u06af\u0631\u062f\u0627\u0646\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f.',
                  }),
                  (0, s.jsx)('li', {
                    children:
                      '\u062f\u0631 \u0637\u0648\u0644 \u062f\u0648\u0631\u0647 \u0647\u0631 \u0632\u0645\u0627\u0646 \u0628\u062e\u0648\u0627\u0647\u06cc\u062f \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0637\u0631\u062d \u062e\u0648\u062f \u0631\u0627 \u0628\u0647 \u0637\u0631\u062d \u0628\u0627\u0644\u0627\u062a\u0631 \u0627\u0631\u062a\u0642\u0627 \u062f\u0647\u06cc\u062f.',
                  }),
                  (0, s.jsx)('li', {
                    children:
                      '\u0627\u06af\u0631 \u0628\u0647\u200c\u062e\u0627\u0637\u0631 \u062e\u0637\u0627\u06cc \u0645\u0627 \u067e\u0631\u062f\u0627\u062e\u062a\u06cc \u062f\u0648\u0628\u0627\u0631 \u0627\u0646\u062c\u0627\u0645 \u0634\u062f\u0647 \u06cc\u0627 \u0627\u0634\u062a\u0631\u0627\u06a9 \u0641\u0639\u0627\u0644 \u0646\u0634\u062f\u0647 \u0628\u0627\u0634\u062f\u060c \u0628\u0627 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u062a\u0645\u0627\u0633 \u0628\u06af\u06cc\u0631\u06cc\u062f \u062a\u0627 \u0628\u0631\u0631\u0633\u06cc \u0648 \u062c\u0628\u0631\u0627\u0646 \u0634\u0648\u062f.',
                  }),
                ],
              }),
            ],
          }),
          (0, s.jsxs)('section', {
            className: 'lp-legal-card',
            children: [
              (0, s.jsx)('h2', {
                children:
                  '\u06f5. \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0648 \u062d\u0631\u06cc\u0645 \u062e\u0635\u0648\u0635\u06cc',
              }),
              (0, s.jsxs)('ul', {
                children: [
                  (0, s.jsx)('li', {
                    children:
                      '\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0627\u0646\u0628\u0627\u0631 \u0648 \u0641\u0631\u0648\u0634 \u0647\u0631 \u062d\u0633\u0627\u0628 \u0641\u0642\u0637 \u0628\u0647 \u0635\u0627\u062d\u0628 \u0622\u0646 \u0648 \u0647\u0645\u06a9\u0627\u0631\u0627\u0646\u06cc \u06a9\u0647 \u0627\u0648 \u0627\u062c\u0627\u0632\u0647 \u062f\u0627\u062f\u0647 \u062a\u0639\u0644\u0642 \u062f\u0627\u0631\u062f \u0648 \u0628\u0647 \u06a9\u0633\u06cc \u0641\u0631\u0648\u062e\u062a\u0647 \u06cc\u0627 \u062f\u0627\u062f\u0647 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f.',
                  }),
                  (0, s.jsx)('li', {
                    children:
                      '\u06a9\u0627\u0631\u0628\u0631 \u0647\u0631 \u0632\u0645\u0627\u0646 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0627\u0632 \u0627\u0637\u0644\u0627\u0639\u0627\u062a\u0634 \u062e\u0631\u0648\u062c\u06cc \u0628\u06af\u06cc\u0631\u062f.',
                  }),
                  (0, s.jsx)('li', {
                    children:
                      '\u062f\u0648\u0631\u0628\u06cc\u0646 \u0648 \u0645\u06cc\u06a9\u0631\u0648\u0641\u0648\u0646 \u0641\u0642\u0637 \u0647\u0646\u06af\u0627\u0645 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0631\u0648\u0634\u0646 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f.',
                  }),
                ],
              }),
            ],
          }),
          (0, s.jsxs)('section', {
            className: 'lp-legal-card',
            children: [
              (0, s.jsx)('h2', {
                children:
                  '\u06f6. \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0648 \u067e\u06cc\u06af\u06cc\u0631\u06cc',
              }),
              (0, s.jsxs)('p', {
                children: [
                  '\u0628\u0631\u0627\u06cc \u0647\u0631 \u0645\u0634\u06a9\u0644 \u06cc\u0627 \u0634\u06a9\u0627\u06cc\u062a\u060c \u0627\u0632 \u0631\u0627\u0647\u200c\u0647\u0627\u06cc \u0635\u0641\u062d\u0647\u0654 ',
                  (0, s.jsx)('a', {
                    href: '#contact',
                    children:
                      '\u062a\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627',
                  }),
                  ' \u0628\u0627 \u0645\u0627 \u062f\u0631 \u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627\u0634\u06cc\u062f\u061b \u062f\u0631 \u0633\u0627\u0639\u062a \u06a9\u0627\u0631\u06cc \u067e\u0627\u0633\u062e \u0645\u06cc\u200c\u062f\u0647\u06cc\u0645.',
                ],
              }),
            ],
          }),
        ],
      });
    }
    function b() {
      const [n, t] = (0, l.useState)(!1),
        { id: o, code: c } = p.enamad;
      if (!o || !c) return null;
      const x = `id=${encodeURIComponent(o)}&Code=${encodeURIComponent(c)}`;
      return (0, s.jsx)('a', {
        className: 'lp-enamad' + (n ? ' is-loaded' : ''),
        'aria-label':
          '\u0646\u0645\u0627\u062f \u0627\u0639\u062a\u0645\u0627\u062f \u0627\u0644\u06a9\u062a\u0631\u0648\u0646\u06cc\u06a9\u06cc',
        referrerPolicy: 'origin',
        target: '_blank',
        rel: 'noopener',
        href: 'https://trustseal.enamad.ir/?' + x,
        children: (0, s.jsx)('img', {
          referrerPolicy: 'origin',
          src: 'https://trustseal.enamad.ir/logo.aspx?' + x,
          alt: '',
          style: { cursor: 'pointer' },
          code: c,
          ref: (l) => {
            l?.complete && l.naturalWidth > 0 && !n && t(!0);
          },
          onLoad: (l) => {
            l.currentTarget.naturalWidth > 0 && t(!0);
          },
        }),
      });
    }
    function y() {
      const [n, t] = (0, l.useState)(!1),
        { href: o, logo: c } = p.bitpay;
      return o && c
        ? (0, s.jsx)('a', {
            className: 'lp-bitpay' + (n ? ' is-loaded' : ''),
            'aria-label':
              '\u0646\u0645\u0627\u062f \u0627\u0639\u062a\u0645\u0627\u062f \u062f\u0631\u06af\u0627\u0647 \u067e\u0631\u062f\u0627\u062e\u062a \u0628\u06cc\u062a\u200c\u067e\u06cc',
            target: '_blank',
            rel: 'noopener',
            href: o,
            children: (0, s.jsx)('img', {
              src: c,
              alt: '',
              ref: (l) => {
                l?.complete && l.naturalWidth > 0 && !n && t(!0);
              },
              onLoad: (l) => {
                l.currentTarget.naturalWidth > 0 && t(!0);
              },
            }),
          })
        : null;
    }
    const N = [
      [
        '/install',
        '\u062f\u0627\u0646\u0644\u0648\u062f \u0648 \u0646\u0635\u0628',
      ],
      ['/guide', '\u0631\u0627\u0647\u0646\u0645\u0627'],
      [
        '/hesabdari-maghazeh',
        '\u062d\u0633\u0627\u0628\u062f\u0627\u0631\u06cc \u0645\u063a\u0627\u0632\u0647',
      ],
      [
        '/faq',
        '\u0633\u0624\u0627\u0644\u0627\u062a \u0645\u062a\u062f\u0627\u0648\u0644',
      ],
      [
        '/pricing',
        '\u0637\u0631\u062d\u200c\u0647\u0627 \u0648 \u0627\u0634\u062a\u0631\u0627\u06a9',
      ],
      ['/compare', '\u0645\u0642\u0627\u06cc\u0633\u0647'],
      [
        '/for',
        '\u0628\u0631\u0627\u06cc \u0635\u0646\u0641 \u0634\u0645\u0627',
      ],
      ['/blog', '\u0628\u0644\u0627\u06af'],
    ];
  },
  507,
  [2, 437, 494, 338],
);
