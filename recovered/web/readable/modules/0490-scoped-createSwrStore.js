// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 490; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.scoped = o),
      (e.createSwrStore = function (c) {
        const s = c.storage,
          u = c.now || Date.now,
          f = c.maxBytes ?? 262144,
          l = c.maxEntries ?? n,
          h = new Map(),
          y = new Map(),
          w = new Map(),
          p = new Map(),
          v = new Map();
        let D = 0,
          b = null;
        const S = (n) => t + n,
          k = (t) => p.get(t) || 0,
          I = (t) => w.get(t)?.forEach((t) => t());
        function M(t, n) {
          const o = (v.get(t) || Promise.resolve())
            .catch(() => {})
            .then(n)
            .catch(() => {});
          return (
            v.set(t, o),
            o.finally(() => {
              v.get(t) === o && v.delete(t);
            }),
            o
          );
        }
        function P(t) {
          const n = k(t) + 1;
          return (p.set(t, n), n);
        }
        function E() {
          for (; h.size > l; ) {
            const t = h.keys().next().value;
            if (void 0 === t) return;
            (h.delete(t), P(t), M(t, () => s.removeItem(S(t))));
          }
        }
        function O(t) {
          let n = h.get(t);
          return (
            n ||
              ((n = { data: void 0, at: 0, hasData: !1, hydrated: !1 }),
              h.set(t, n),
              E()),
            n
          );
        }
        function _(t, n, o) {
          return D === t && k(n) === o;
        }
        function j(t) {
          let n = 0;
          for (const o of t) {
            const t = o.codePointAt(0) || 0;
            n += t <= 127 ? 1 : t <= 2047 ? 2 : t <= 65535 ? 3 : 4;
          }
          return n;
        }
        async function x(t, n, o, c) {
          let u;
          try {
            u = JSON.stringify(n);
          } catch {
            return;
          }
          var l;
          (l = u).length > f || (!(3 * l.length <= f) && j(l) > f)
            ? await M(t, async () => {
                _(o, t, c) && (await s.removeItem(S(t)));
              })
            : await M(t, async () => {
                _(o, t, c) &&
                  (await s.setItem(S(t), u),
                  _(o, t, c) || (await s.removeItem(S(t))));
              });
        }
        async function A(t, n) {
          const o = O(t);
          ((o.data = n),
            (o.at = u()),
            (o.hasData = !0),
            (o.hydrated = !0),
            h.delete(t),
            h.set(t, o),
            E(),
            I(t));
          const c = D,
            s = k(t);
          await x(t, { data: n, at: o.at }, c, s);
        }
        async function N(t) {
          P(t);
          const n = h.get(t);
          (n &&
            ((n.hasData = !1),
            (n.data = void 0),
            (n.at = 0),
            (n.hydrated = !0)),
            I(t),
            await M(t, () => s.removeItem(S(t))));
        }
        function $(t) {
          return t && 'object' == typeof t && 'status' in t
            ? Number(t.status)
            : 0;
        }
        function z(t) {
          new Set([...h.keys(), ...y.keys(), ...w.keys()]).forEach((n) => {
            if (!t(n)) return;
            P(n);
            const o = h.get(n);
            (o?.hasData && (o.at = 0), I(n));
          });
        }
        return {
          peek: function (t) {
            const n = h.get(t);
            return n?.hasData ? n.data : void 0;
          },
          stale: function (t) {
            const n = h.get(t);
            return !n?.hasData || 0 === n.at;
          },
          fresh: function (t, n) {
            const o = h.get(t);
            if (!o?.hasData || 0 === o.at) return !1;
            const c = u() - o.at;
            return c >= 0 && c < n;
          },
          hydrate: function (t) {
            const n = O(t);
            if (n.hydrated) return Promise.resolve();
            if (n.hydration) return n.hydration;
            const o = D,
              c = k(t),
              u = (async () => {
                let u = null;
                try {
                  u = await s.getItem(S(t));
                } catch {}
                if (_(o, t, c) && h.get(t) === n && ((n.hydrated = !0), u))
                  try {
                    const o = JSON.parse(u);
                    if (
                      'number' != typeof o.at ||
                      !Object.prototype.hasOwnProperty.call(o, 'data')
                    )
                      return;
                    (!n.hasData || o.at > n.at) &&
                      ((n.data = o.data),
                      (n.at = o.at),
                      (n.hasData = !0),
                      I(t));
                  } catch {}
              })();
            return (
              (n.hydration = u),
              u.finally(() => {
                h.get(t) === n && n.hydration === u && delete n.hydration;
              }),
              u
            );
          },
          set: A,
          revalidate: function (t, n) {
            const o = y.get(t);
            if (o) return o.promise;
            const c = D,
              s = k(t),
              u = (async () => {
                let o = s;
                for (let s = 0; s < 2; s += 1)
                  try {
                    const u = await n();
                    if (D !== c) return;
                    if (k(t) !== o) {
                      if (0 === s) {
                        o = k(t);
                        continue;
                      }
                      return;
                    }
                    if ((await A(t, u), D !== c)) return;
                    if (k(t) !== o) {
                      if (0 === s) {
                        o = k(t);
                        continue;
                      }
                      return;
                    }
                    return u;
                  } catch (n) {
                    throw (
                      D !== c || (401 !== $(n) && 403 !== $(n)) || (await N(t)),
                      n
                    );
                  }
              })();
            return (
              y.set(t, { promise: u, generation: s, epoch: c }),
              u
                .finally(() => {
                  y.get(t)?.promise === u && y.delete(t);
                })
                .catch(() => {}),
              u
            );
          },
          invalidate: function (t) {
            z((n) => n.startsWith(t));
          },
          invalidateShop: function (t) {
            z((n) => n.split(':')[1] === t);
          },
          drop: N,
          subscribe: function (t, n) {
            let o = w.get(t);
            return (
              o || ((o = new Set()), w.set(t, o)),
              o.add(n),
              () => {
                (o?.delete(n), 0 === o?.size && w.delete(t));
              }
            );
          },
          clearAll: async function () {
            ((D += 1),
              (b = null),
              y.clear(),
              await Promise.all([...v.values()].map((t) => t.catch(() => {}))));
            try {
              const n = (await s.getAllKeys()).filter((n) => n.startsWith(t));
              n.length && (await s.multiRemove(n));
            } catch {}
            const n = [...h.keys()];
            (n.forEach((t) => P(t)), h.clear(), n.forEach(I));
          },
          setScope: function (t) {
            b = t;
          },
          scoped: function (t, n) {
            return b ? o(b, t, n) : null;
          },
        };
      }));
    const t = 'anbari.swr:',
      n = 64;
    function o(t, n, o) {
      return `${t}:${n}:${o}`;
    }
  },
  490,
  [],
);
