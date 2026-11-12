// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 445; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'BACK_TO_PRIMARY_MS', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      Object.defineProperty(e, 'RETRY_TIMEOUT_MS', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      Object.defineProperty(e, 'transportFailed', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      Object.defineProperty(e, 'isRead', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      (e.apiBases = function (
        { api: s, fallback: f, web: l },
        {
          now: p = Date.now,
          send: b = (t, n) => fetch(t, n),
          timeout: _ = (t) => AbortSignal.timeout(t),
        } = {},
      ) {
        const h = o(s || (l ? '' : 'http://127.0.0.1:8086')),
          y = l ? '' : o(f || ''),
          w = y && y !== h ? y : '';
        let O = h,
          M = 0;
        const P = (t) => {
          t !== O && ((O = t), (M = p()));
        };
        return {
          primary: () => h,
          active: () => O,
          fetchApi: async function (o, s = {}, f = 15e3) {
            const l = u(s.method),
              y = l ? (O !== h && p() - M >= t && (O = h), O) : O,
              T = (t, n) => b(t + o, { ...s, signal: s.signal || _(n) });
            try {
              return await T(y, f);
            } catch (t) {
              if (!l) throw ((O = h), t);
              const o = c(s.signal) ? (w ? (y === h ? w : h) : '') : '';
              if (!o) throw t;
              const u = await T(o, Math.min(f, n));
              return (P(o), u);
            }
          },
        };
      }));
    const t = 6e5,
      n = 8e3,
      o = (t) => t.replace(/\/$/, ''),
      c = (t) => !t?.aborted,
      u = (t = 'GET') => ['GET', 'HEAD'].includes(t.toUpperCase());
  },
  445,
  [],
);
