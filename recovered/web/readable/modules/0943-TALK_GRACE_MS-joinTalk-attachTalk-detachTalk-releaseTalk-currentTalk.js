// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 943; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'TALK_GRACE_MS', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      (e.joinTalk = function (n, u, o = '') {
        if (t && !t.released && n && t.page === n && t.tag === o) return t;
        t && !t.released && l(t);
        const { view: s, live: f } = u();
        return ((t = c(n, o, s, f)), t);
      }),
      (e.attachTalk = function (t, n) {
        (clearTimeout(t.idle),
          (t.idle = void 0),
          t.attached++,
          t.started || t.released || ((t.started = !0), n(t)));
      }),
      (e.detachTalk = function (t, c, u = n) {
        if (
          ((t.attached = Math.max(0, t.attached - 1)),
          t.released || t.attached > 0)
        )
          return;
        if (!c) return l(t);
        (clearTimeout(t.idle),
          (t.idle = setTimeout(() => {
            t.attached <= 0 && l(t);
          }, u)));
      }),
      (e.releaseTalk = l),
      (e.currentTalk = function () {
        return t;
      }));
    let t = null;
    const n = 9e4;
    function c(t, n, c, l) {
      const u = new Set(),
        o = {
          page: t,
          tag: n,
          view: c,
          live: l,
          started: !1,
          released: !1,
          attached: 0,
          set(t) {
            const n = 'function' == typeof t ? t(o.view) : t;
            ((o.view = { ...o.view, ...n }), u.forEach((t) => t()));
          },
          subscribe: (t) => (
            u.add(t),
            () => {
              u.delete(t);
            }
          ),
        };
      return o;
    }
    function l(t) {
      if (!t.released) {
        ((t.released = !0), clearTimeout(t.idle), (t.idle = void 0));
        try {
          t.stop?.();
        } catch {}
      }
    }
  },
  943,
  [],
);
