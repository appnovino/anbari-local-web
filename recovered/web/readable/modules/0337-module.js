// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 337; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    function n(n, t) {
      const o = globalThis[`${__METRO_GLOBAL_PREFIX__ ?? ''}__loadBundleAsync`];
      if (null != o) {
        const s = String(n);
        if (null != t) {
          const n = t[s];
          if (null != n) return o(n);
        }
      }
    }
    function t(t, o, s) {
      const u = () => r.importAll(t, s);
      try {
        return u();
      } catch (s) {
        const c = n(t, o);
        if (null != c) return c.then(u);
        throw s;
      }
      const c = n(t, o);
      return null != c ? c.then(u) : u();
    }
    function o(n, o, s) {
      const u = t(n, o, s),
        c = Promise.resolve(u);
      return ((c._result = u), c);
    }
    ((o.unstable_importMaybeSync = function (n, o) {
      return t(n, o);
    }),
      (o.prefetch = function (t, o, s) {
        n(t, o)?.then(
          () => {},
          () => {},
        );
      }),
      (o.unstable_resolve = function (n, t) {
        if (!t)
          throw new Error(
            'Bundle splitting is required for Web Worker imports',
          );
        const o = t[n];
        if (!o)
          throw new Error(
            'Worker import is missing from split bundle paths: ' + o,
          );
        return o;
      }),
      (o.unstable_createWorker = function (n, t) {
        if ('undefined' == typeof crossOriginIsolated || !crossOriginIsolated)
          return new Worker(n, t);
        try {
          const s =
            ((o = n),
            `\n    const ASYNC_WORKER_BASE = ${JSON.stringify(o)};\n    const IMPORT_SCRIPTS = importScripts;\n    const FETCH = fetch;\n    const fromBaseURL = (input) => new URL(input, ASYNC_WORKER_BASE).href;\n    self.fetch = function(input, init) {\n      return FETCH(typeof input === 'string' ? fromBaseURL(input) : input, init);\n    };\n    self.importScripts = function(...urls) {\n      return IMPORT_SCRIPTS.apply(self, urls.map(fromBaseURL));\n    };\n    importScripts(ASYNC_WORKER_BASE);\n  `);
          return (
            (n = URL.createObjectURL(
              new Blob([s], { type: 'text/javascript' }),
            )),
            new Worker(n, t)
          );
        } finally {
          URL.revokeObjectURL(n);
        }
        var o;
      }),
      (m.exports = o));
  },
  337,
  [],
);
