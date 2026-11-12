// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 497; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.StartChooser = function ({ onWeb: h, onLogin: b, onClose: u }) {
        const [f] = (0, e.useState)(c),
          k = (0, e.useRef)(null),
          v = (0, e.useRef)(null),
          [w, L] = (0, e.useState)(null);
        ((0, e.useEffect)(() => {
          let e = !0;
          return (
            fetch('/download/android.json', { cache: 'no-store' })
              .then((e) => (e.ok ? e.json() : null))
              .then((s) => {
                e &&
                  L(
                    !(!s?.available || !s.version) && {
                      version: s.version,
                      sizeMb: s.sizeBytes
                        ? String(Math.round(s.sizeBytes / 1048576))
                        : '',
                    },
                  );
              })
              .catch(() => {
                e && L(!1);
              }),
            () => {
              e = !1;
            }
          );
        }, []),
          (0, e.useEffect)(() => {
            const e = (e) => {
              'Escape' === e.key && u();
            };
            return (
              window.addEventListener('keydown', e),
              k.current?.focus(),
              () => window.removeEventListener('keydown', e)
            );
          }, [u]));
        const j = w
            ? [
                (0, s.L)('\u0646\u0633\u062e\u0647\u0654 {v}', {
                  v: (0, s.localDigits)(w.version),
                }),
                w.sizeMb &&
                  (0, s.L)('{n} \u0645\u06af\u0627\u0628\u0627\u06cc\u062a', {
                    n: (0, s.localDigits)(w.sizeMb),
                  }),
              ]
                .filter(Boolean)
                .join(' \xb7 ')
            : '',
          y = (0, s.L)('\u0627\u0646\u062f\u0631\u0648\u06cc\u062f'),
          z = (0, s.L)('\u0622\u06cc\u0641\u0648\u0646'),
          N = {
            bazaar: {
              kind: 'bazaar',
              title: (0, s.L)(
                '\u06a9\u0627\u0641\u0647\u200c\u0628\u0627\u0632\u0627\u0631',
              ),
              sub: (0, s.L)(
                '\u0646\u0635\u0628 \u0627\u0632 \u06a9\u0627\u0641\u0647\u200c\u0628\u0627\u0632\u0627\u0631\u061b \u0628\u0647\u200c\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc \u062e\u0648\u062f\u06a9\u0627\u0631.',
              ),
              tag: y,
              href: t.storeLinks.bazaar || void 0,
              soon: !t.storeLinks.bazaar,
              action: (0, s.L)(
                '\u0646\u0635\u0628 \u0627\u0632 \u06a9\u0627\u0641\u0647\u200c\u0628\u0627\u0632\u0627\u0631',
              ),
              mark: (0, o.jsx)(l, {}),
            },
            apk: {
              kind: 'apk',
              title: (0, s.L)(
                '\u062f\u0627\u0646\u0644\u0648\u062f \u0645\u0633\u062a\u0642\u06cc\u0645',
              ),
              sub: j
                ? (0, s.L)(
                    '\u0641\u0627\u06cc\u0644 \u0646\u0635\u0628 \u0627\u0646\u062f\u0631\u0648\u06cc\u062f (APK)\u061b {meta}',
                    { meta: j },
                  )
                : (0, s.L)(
                    '\u0641\u0627\u06cc\u0644 \u0646\u0635\u0628 \u0627\u0646\u062f\u0631\u0648\u06cc\u062f (APK)\u060c \u0628\u062f\u0648\u0646 \u0641\u0631\u0648\u0634\u06af\u0627\u0647.',
                  ),
              tag: y,
              href: w ? '/download/anbari.apk' : void 0,
              download: !0,
              soon: !1 === w,
              waiting: null === w,
              action: (0, s.L)('\u062f\u0627\u0646\u0644\u0648\u062f APK'),
              mark: (0, o.jsx)(n.AndroidMark, { size: 22 }),
            },
            sibche: {
              kind: 'sibche',
              title: (0, s.L)('\u0633\u06cc\u0628\u0686\u0647'),
              sub: (0, s.L)(
                '\u0646\u0633\u062e\u0647\u0654 \u0622\u06cc\u0641\u0648\u0646 \u062f\u0631 \u0633\u06cc\u0628\u0686\u0647.',
              ),
              tag: z,
              href: t.storeLinks.sibche || void 0,
              soon: !t.storeLinks.sibche,
              action: (0, s.L)(
                '\u0646\u0635\u0628 \u0627\u0632 \u0633\u06cc\u0628\u0686\u0647',
              ),
              mark: (0, o.jsx)(n.AppleMark, { size: 22 }),
              badge: (0, t.iphoneBadge)('sibche').src,
            },
            anardoni: {
              kind: 'anardoni',
              title: (0, s.L)(
                '\u0627\u0646\u0627\u0631\u062f\u0648\u0646\u06cc',
              ),
              sub: (0, s.L)(
                '\u0646\u0633\u062e\u0647\u0654 \u0622\u06cc\u0641\u0648\u0646 \u062f\u0631 \u0627\u0646\u0627\u0631\u062f\u0648\u0646\u06cc.',
              ),
              tag: z,
              href: t.storeLinks.anardoni || void 0,
              soon: !t.storeLinks.anardoni,
              action: (0, s.L)(
                '\u0646\u0635\u0628 \u0627\u0632 \u0627\u0646\u0627\u0631\u062f\u0648\u0646\u06cc',
              ),
              mark: (0, o.jsx)(n.AppleMark, { size: 22 }),
              badge: (0, t.iphoneBadge)('anardoni').src,
            },
            sibapp: {
              kind: 'sibapp',
              title: (0, s.L)('\u0633\u06cc\u0628\u200c\u0627\u067e'),
              sub: (0, s.L)(
                '\u0646\u0633\u062e\u0647\u0654 \u0622\u06cc\u0641\u0648\u0646 \u062f\u0631 \u0633\u06cc\u0628\u200c\u0627\u067e.',
              ),
              tag: z,
              href: t.storeLinks.sibapp || void 0,
              soon: !t.storeLinks.sibapp,
              action: (0, s.L)(
                '\u0646\u0635\u0628 \u0627\u0632 \u0633\u06cc\u0628\u200c\u0627\u067e',
              ),
              mark: (0, o.jsx)(n.AppleMark, { size: 22 }),
              badge: (0, t.iphoneBadge)('sibapp').src,
            },
            web: {
              kind: 'web',
              title: (0, s.L)('\u0646\u0633\u062e\u0647\u0654 \u0648\u0628'),
              sub: (0, s.L)(
                '\u0628\u062f\u0648\u0646 \u0646\u0635\u0628\u060c \u0647\u0645\u06cc\u0646 \u062d\u0627\u0644\u0627 \u062f\u0631 \u0645\u0631\u0648\u0631\u06af\u0631.',
              ),
              action: (0, s.L)(
                '\u0634\u0631\u0648\u0639 \u062f\u0631 \u0645\u0631\u0648\u0631\u06af\u0631',
              ),
              mark: (0, o.jsx)(p, {}),
            },
          },
          M =
            'android' === f
              ? ['bazaar', 'apk', 'web', 'sibapp', 'sibche', 'anardoni']
              : 'ios' === f
                ? ['sibapp', 'sibche', 'anardoni', 'web', 'bazaar', 'apk']
                : ['web', 'bazaar', 'apk', 'sibapp', 'sibche', 'anardoni'],
          B = M.find((e) => !N[e].soon && !N[e].waiting),
          C = (e) => {
            const n = (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)('span', { className: 'sc-mark', children: e.mark }),
                (0, o.jsxs)('span', {
                  className: 'sc-copy',
                  children: [
                    (0, o.jsxs)('span', {
                      className: 'sc-title',
                      children: [
                        e.title,
                        e.tag &&
                          (0, o.jsx)('span', {
                            className: 'sc-tag',
                            children: e.tag,
                          }),
                        e.kind === B &&
                          (0, o.jsx)('span', {
                            className: 'sc-best',
                            children: (0, s.L)(
                              '\u067e\u06cc\u0634\u0646\u0647\u0627\u062f \u0645\u0627',
                            ),
                          }),
                      ],
                    }),
                    (0, o.jsx)('span', {
                      className: 'sc-sub',
                      children: e.sub,
                    }),
                  ],
                }),
                e.badge && !e.soon
                  ? (0, o.jsx)('img', {
                      className: 'sc-badge',
                      src: e.badge,
                      alt: e.action,
                    })
                  : (0, o.jsx)('span', {
                      className: 'sc-action' + (e.soon ? ' is-soon' : ''),
                      children: e.soon
                        ? (0, s.L)('\u0628\u0647\u200c\u0632\u0648\u062f\u06cc')
                        : e.action,
                    }),
              ],
            });
            return e.soon
              ? (0, o.jsx)(
                  'div',
                  {
                    className: 'sc-card is-soon',
                    'data-testid': 'start-' + e.kind,
                    'aria-disabled': 'true',
                    children: n,
                  },
                  e.kind,
                )
              : e.waiting
                ? (0, o.jsx)(
                    'div',
                    {
                      className: 'sc-card is-soon',
                      'data-testid': 'start-' + e.kind,
                      'aria-disabled': 'true',
                      'aria-busy': 'true',
                      children: n,
                    },
                    e.kind,
                  )
                : 'web' === e.kind
                  ? (0, o.jsx)(
                      'button',
                      {
                        type: 'button',
                        className: 'sc-card' + (e.kind === B ? ' is-best' : ''),
                        'data-testid': 'start-web',
                        onClick: h,
                        children: n,
                      },
                      e.kind,
                    )
                  : (0, o.jsx)(
                      'a',
                      {
                        className:
                          'sc-card' +
                          (e.kind === B ? ' is-best' : '') +
                          (e.badge ? ' has-badge' : ''),
                        'data-testid': 'start-' + e.kind,
                        href: e.href,
                        ...(e.download
                          ? { download: !0 }
                          : { target: '_blank', rel: 'noopener' }),
                        children: n,
                      },
                      e.kind,
                    );
          };
        return (0, o.jsxs)('div', {
          className: 'sc-backdrop',
          'data-testid': 'start-backdrop',
          onPointerDown: (e) => {
            v.current =
              e.target === e.currentTarget ? { x: e.pageX, y: e.pageY } : null;
          },
          onClick: (e) => {
            const s = v.current;
            ((v.current = null),
              e.target === e.currentTarget &&
                (s || 0 === e.detail) &&
                (0, r.backdropCloses)({
                  start: s,
                  end: { x: e.pageX, y: e.pageY },
                }) &&
                u());
          },
          children: [
            (0, o.jsx)('style', { children: x }),
            (0, o.jsxs)('div', {
              ref: k,
              className: 'sc-sheet',
              role: 'dialog',
              'aria-modal': 'true',
              'aria-labelledby': 'sc-heading',
              tabIndex: -1,
              'data-testid': 'start-chooser',
              onClick: (e) => e.stopPropagation(),
              children: [
                (0, o.jsx)('button', {
                  type: 'button',
                  className: 'sc-close',
                  'aria-label': (0, s.L)('\u0628\u0633\u062a\u0646'),
                  onClick: u,
                  children: '\u2715',
                }),
                (0, o.jsx)('h2', {
                  id: 'sc-heading',
                  children: (0, s.L)(
                    '\u0627\u0632 \u06a9\u062c\u0627 \u0634\u0631\u0648\u0639 \u06a9\u0646\u06cc\u061f',
                  ),
                }),
                (0, o.jsx)('p', {
                  className: 'sc-lead',
                  children: (0, s.L)(
                    '\u062f\u0631 \u0627\u067e\u060c \u062b\u0628\u062a\u200c\u0646\u0627\u0645 \u0648 \u0622\u0645\u0648\u0632\u0634 \u0642\u062f\u0645\u200c\u0628\u0647\u200c\u0642\u062f\u0645 \u0647\u0645\u0631\u0627\u0647\u062a \u0627\u0633\u062a.',
                  ),
                }),
                (0, o.jsx)('div', {
                  className: 'sc-list',
                  children: M.map((e) => C(N[e])),
                }),
                (0, o.jsx)('button', {
                  type: 'button',
                  className: 'sc-login',
                  'data-testid': 'start-login',
                  onClick: b,
                  children: (0, s.L)(
                    '\u062d\u0633\u0627\u0628 \u062f\u0627\u0631\u0645\u060c \u0648\u0627\u0631\u062f \u0645\u06cc\u200c\u0634\u0648\u0645',
                  ),
                }),
              ],
            }),
          ],
        });
      }));
    var e = _r(d[0]),
      s = _r(d[1]),
      n = _r(d[2]),
      t = _r(d[3]),
      r = _r(d[4]),
      o = _r(d[5]);
    function c() {
      const e = 'undefined' == typeof navigator ? '' : navigator.userAgent;
      return /iPhone|iPod|iPad/.test(e) ||
        (/Macintosh/.test(e) &&
          'undefined' != typeof navigator &&
          navigator.maxTouchPoints > 1)
        ? 'ios'
        : /Android/i.test(e)
          ? 'android'
          : 'desktop';
    }
    function l() {
      return (0, o.jsxs)('svg', {
        viewBox: '0 0 24 24',
        width: 22,
        height: 22,
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        'aria-hidden': 'true',
        children: [
          (0, o.jsx)('path', { d: 'M5 8h14l-1.2 12H6.2L5 8z' }),
          (0, o.jsx)('path', { d: 'M9 8V6a3 3 0 0 1 6 0v2' }),
        ],
      });
    }
    function p() {
      return (0, o.jsxs)('svg', {
        viewBox: '0 0 24 24',
        width: 22,
        height: 22,
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        'aria-hidden': 'true',
        children: [
          (0, o.jsx)('circle', { cx: '12', cy: '12', r: '9' }),
          (0, o.jsx)('path', {
            d: 'M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z',
          }),
        ],
      });
    }
    const x = String.raw`
.sc-backdrop{position:fixed;inset:0;z-index:60;background:rgba(0,0,0,.42);display:flex;align-items:flex-end;justify-content:center;padding:16px;animation:sc-fade .18s ease-out}
.sc-sheet{position:relative;width:100%;max-width:520px;max-height:calc(100% - 24px);overflow:auto;background:var(--ground);color:var(--ink);border-radius:26px;padding:26px 18px 18px;box-shadow:0 24px 60px rgba(0,0,0,.3);outline:none;animation:sc-up .24s cubic-bezier(.2,.8,.2,1)}
@media (min-width:700px){.sc-backdrop{align-items:center}}
.sc-sheet h2{font-size:24px;line-height:36px;text-align:center}
.sc-lead{margin-top:4px!important;text-align:center;color:var(--ink2);font-size:15px;line-height:24px}
.anbari-landing .sc-close{position:absolute;top:14px;inset-inline-start:14px;width:36px;height:36px;border-radius:18px;border:0;background:var(--card2);color:var(--ink2);font-size:15px}
.sc-list{display:flex;flex-direction:column;gap:10px;margin-top:16px}
.sc-card{display:flex;align-items:center;gap:12px;width:100%;min-height:76px;padding:12px 14px;border-radius:18px;border:1px solid var(--line);background:var(--card);text-align:start;transition:transform .12s ease,border-color .12s ease}
.sc-card:not(.is-soon):hover{border-color:var(--accent)}.sc-card:not(.is-soon):active{transform:scale(.985)}
.sc-card.is-best{border:2px solid var(--accent);box-shadow:0 8px 24px rgba(13,148,136,.16)}
.sc-card.is-soon{opacity:.62;cursor:default}
.sc-mark{width:46px;height:46px;border-radius:14px;background:var(--tint);color:var(--accent);display:flex;align-items:center;justify-content:center;flex-shrink:0}
.sc-copy{display:flex;flex-direction:column;flex:1;min-width:0;gap:2px}
.sc-title{display:flex;align-items:center;flex-wrap:wrap;gap:6px;font-family:Vazirmatn_700Bold,Vazirmatn,Tahoma,sans-serif;font-weight:700;font-size:16px;line-height:24px}
.sc-tag,.sc-best{font-family:Vazirmatn_600SemiBold,Vazirmatn,Tahoma,sans-serif;font-weight:600;font-size:11px;line-height:18px;padding:1px 8px;border-radius:9px;background:var(--card2);color:var(--ink2)}
.sc-best{background:var(--accent);color:#fff}
.sc-sub{font-size:13px;line-height:21px;color:var(--ink2)}
.sc-action{flex-shrink:0;padding:8px 12px;border-radius:12px;background:var(--accent);color:#fff;font-family:Vazirmatn_600SemiBold,Vazirmatn,Tahoma,sans-serif;font-weight:600;font-size:13px;line-height:20px;white-space:nowrap}
.sc-card.has-badge{flex-wrap:wrap}.sc-card.has-badge .sc-copy{flex-basis:calc(100% - 58px)}.sc-badge{flex-shrink:0;height:44px;width:auto;display:block;margin-inline-start:58px}
.sc-action.is-soon{background:var(--card2);color:var(--ink2)}
.anbari-landing .sc-login{display:block;width:100%;margin-top:14px;min-height:48px;border:0;border-radius:14px;background:transparent;color:var(--accent);font-family:Vazirmatn_600SemiBold,Vazirmatn,Tahoma,sans-serif;font-weight:600;font-size:15px}
@media (max-width:380px){.sc-action{padding:7px 9px;font-size:12px}.sc-mark{width:40px;height:40px}}
@keyframes sc-fade{from{opacity:0}to{opacity:1}}@keyframes sc-up{from{transform:translateY(24px);opacity:.6}to{transform:none;opacity:1}}
@media (prefers-reduced-motion:reduce){.sc-backdrop,.sc-sheet{animation:none}}
`;
  },
  497,
  [2, 311, 498, 499, 500, 338],
);
