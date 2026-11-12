// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 771; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.rememberedPage = function (t, n, l = 24) {
        const o = t.page || 1,
          u = t.focus,
          s = u && u.page === o ? n.indexOf(u.id) : -1;
        return s < 0 ? o : Math.floor(s / l) + 1;
      }),
      Object.defineProperty(e, 'shellScroll', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      (e.shellVisibility = function (t, n, l) {
        if (n) return void (t.away = !0);
        if (!t.away) return;
        ((t.away = !1), (t.restore = t.tab === l && t.y > 0 ? t.y : null));
      }),
      (e.shellScrolled = function (t, n, l) {
        ((t.at = n), null === t.restore && ((t.y = n), (t.tab = l)));
      }),
      (e.takeRestore = function (t, n) {
        const l = t.restore;
        return null === l || (void 0 !== n && n - t.viewport < l)
          ? null
          : ((t.restore = null), (t.y = l), (t.at = l), l);
      }),
      (e.revealTarget = function (t, n, l) {
        t.restore = null;
        const o = t.viewport || 800;
        if (n >= 60 && n + l <= o - 120) return null;
        const u = Math.max(0, Math.round(t.at + n - 0.3 * o));
        return ((t.y = u), (t.at = u), u);
      }));
    const t = () => ({
      tab: null,
      y: 0,
      at: 0,
      viewport: 0,
      restore: null,
      away: !1,
    });
  },
  771,
  [],
);
