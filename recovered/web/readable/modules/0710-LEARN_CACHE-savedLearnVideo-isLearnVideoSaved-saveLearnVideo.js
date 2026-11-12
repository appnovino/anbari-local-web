// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 710; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'LEARN_CACHE', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      (e.savedLearnVideo = async function (n) {
        if (!(0, t.learnFileName)(n)) return null;
        try {
          const t = await o(),
            c = await t?.match(n);
          if (!c) return null;
          const s = await c.blob();
          return s.size ? URL.createObjectURL(s) : null;
        } catch {
          return null;
        }
      }),
      (e.isLearnVideoSaved = async function (n) {
        try {
          return !(!(0, t.learnFileName)(n) || !(await (await o())?.match(n)));
        } catch {
          return !1;
        }
      }),
      (e.saveLearnVideo = function (n, l) {
        const u = (0, t.learnFileName)(n);
        if (!u) return Promise.resolve(!1);
        if (l) {
          const t = s.get(u) ?? new Set();
          (t.add(l), s.set(u, t));
        }
        const f = c.get(u);
        if (f) return f;
        const w = (async () => {
          try {
            const c = await o();
            if (!c) return !1;
            if (await c.match(n)) return !0;
            const l = await fetch(n);
            if (!l.ok) return !1;
            const f = Number(l.headers.get('content-length')) || 0,
              w = [];
            let h = 0;
            const p = l.body?.getReader();
            if (p)
              for (;;) {
                const { done: n, value: o } = await p.read();
                if (n) break;
                (w.push(o), (h += o.length));
                for (const n of s.get(u) ?? []) n((0, t.fraction)(h, f));
              }
            const y = p ? new Blob(w, { type: 'video/mp4' }) : await l.blob();
            if (!y.size) return !1;
            await c.put(
              n,
              new Response(y, {
                headers: {
                  'Content-Type': 'video/mp4',
                  'Content-Length': String(y.size),
                },
              }),
            );
            for (const n of await c.keys()) {
              const o = (0, t.learnFileName)(new URL(n.url).pathname);
              o && (0, t.isOlderLessonFile)(u, o) && (await c.delete(n));
            }
            return !0;
          } catch {
            return !1;
          } finally {
            (c.delete(u), s.delete(u));
          }
        })();
        return (c.set(u, w), w);
      }));
    var t = r(d[0]);
    const n = 'anbari-learn-v1',
      o = () =>
        'undefined' == typeof caches ? null : caches.open(n).catch(() => null),
      c = new Map(),
      s = new Map();
  },
  710,
  [711],
);
