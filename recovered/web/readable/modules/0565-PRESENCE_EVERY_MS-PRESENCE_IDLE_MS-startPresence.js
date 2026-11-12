// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 565; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'PRESENCE_EVERY_MS', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      Object.defineProperty(_e, 'PRESENCE_IDLE_MS', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      (_e.startPresence = function (e) {
        if (((0, u.clearLookups)(), !e)) return () => {};
        const n = '/v1/shops/' + encodeURIComponent(e) + '/presence';
        let f = null,
          v = null,
          p = Date.now(),
          y = !1,
          E = !1;
        const w = () =>
            'undefined' != typeof document &&
            'visible' === document.visibilityState,
          k = () => Date.now() - p > c;
        async function _() {
          if (y || E || !f) return;
          E = !0;
          const e = (0, u.takeLookups)();
          let t = !1;
          try {
            const u = await (0, o.request)(
              n,
              'POST',
              e ? { key: f, lookups: e } : { key: f },
            );
            ((t = !0),
              u?.renew &&
                !y &&
                ((f = (0, o.randomUUID)()),
                await (0, o.request)(n, 'POST', { key: f })));
          } catch {
            t || (0, u.giveBackLookups)(e);
          } finally {
            E = !1;
          }
        }
        const b = () => {
            y ||
              (w() && !k()
                ? (f || (f = (0, o.randomUUID)()), _())
                : (f = null));
          },
          L = () => {
            y || (b(), v || (v = setInterval(b, l)));
          },
          P = () => {
            (f && _(), (f = null), v && (clearInterval(v), (v = null)));
          },
          h = () => {
            const e = k();
            ((p = Date.now()), (!e && f) || !w() || L());
          },
          I = () => {
            w() ? L() : P();
          };
        let S = null;
        if ('undefined' != typeof document) {
          document.addEventListener('visibilitychange', I);
          for (const e of s)
            window.addEventListener(e, h, { passive: !0, capture: !0 });
        } else
          S = t.default.addEventListener('change', (e) => {
            'active' === e ? L() : P();
          });
        w() && L();
        return () => {
          if (
            ((y = !0),
            v && clearInterval(v),
            (v = null),
            (f = null),
            S?.remove(),
            'undefined' != typeof document)
          ) {
            document.removeEventListener('visibilitychange', I);
            for (const e of s)
              window.removeEventListener(e, h, { capture: !0 });
          }
        };
      }));
    var e,
      n = r(d[0]),
      t = (e = n) && e.__esModule ? e : { default: e };
    r(d[1]);
    var o = r(d[2]),
      u = r(d[3]);
    const l = 6e4,
      c = 3e5,
      s = ['pointerdown', 'keydown', 'wheel', 'touchstart', 'scroll'];
  },
  565,
  [203, 94, 415, 566],
);
