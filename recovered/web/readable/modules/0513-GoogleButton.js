// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 513; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.GoogleButton = function ({
        clientId: e,
        onCredential: n,
        onError: s,
        text: u = 'continue_with',
        width: h = 320,
      }) {
        const f = (0, t.useRef)(null),
          _ = (0, c.localeLang)();
        return (
          (0, t.useEffect)(() => {
            let t = !1,
              o = document.querySelector('script[data-anbari-google]');
            const c = () => {
              const o = globalThis.google;
              !t &&
                f.current &&
                o?.accounts?.id &&
                ((f.current.innerHTML = ''),
                o.accounts.id.initialize({
                  client_id: e,
                  callback: (e) => (e.credential ? n(e.credential) : s()),
                }),
                o.accounts.id.renderButton(f.current, {
                  theme: 'outline',
                  size: 'large',
                  text: u,
                  shape: 'rectangular',
                  width: h,
                  locale: _,
                  logo_alignment: 'center',
                }));
            };
            return globalThis.google?.accounts?.id
              ? (c(),
                () => {
                  t = !0;
                })
              : (o ||
                  ((o = document.createElement('script')),
                  (o.src = 'https://accounts.google.com/gsi/client?hl=' + _),
                  (o.async = !0),
                  (o.defer = !0),
                  (o.dataset.anbariGoogle = 'true'),
                  document.head.appendChild(o)),
                o.addEventListener('load', c),
                o.addEventListener('error', s),
                () => {
                  ((t = !0),
                    o?.removeEventListener('load', c),
                    o?.removeEventListener('error', s));
                });
          }, [e, n, s, u, h, _]),
          (0, l.jsx)(o.default, {
            ref: f,
            style: { minHeight: 44, alignItems: 'center' },
          })
        );
      }));
    var e,
      t = r(d[0]),
      n = r(d[1]),
      o = (e = n) && e.__esModule ? e : { default: e },
      c = r(d[2]),
      l = r(d[3]);
  },
  513,
  [2, 99, 311, 338],
);
