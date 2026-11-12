// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 975; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.tillKey = function (
        n,
        {
          inSearch: l = !1,
          typing: u = !1,
          wedgeBusy: y = !1,
          hasQuery: c = !1,
        } = {},
      ) {
        if (n.ctrlKey || n.metaKey || n.altKey) return null;
        if ('F2' === n.key) return 'search';
        if (u) return null;
        if ('Escape' === n.key) return l && c ? 'clear' : null;
        if ('Enter' === n.key) return y ? null : 'enter';
        const o = t[n.key];
        return o && (!l || ('left' !== o && 'right' !== o)) ? o : null;
      }),
      (e.tillMove = function (t, n, l, u) {
        if (u <= 0) return 0;
        const y = u - 1,
          c = Math.max(1, l),
          o =
            'left' === n
              ? t + 1
              : 'right' === n
                ? t - 1
                : 'down' === n
                  ? Math.min(y, t + c)
                  : 'up' === n && t - c >= 0
                    ? t - c
                    : t;
        return Math.max(0, Math.min(y, o));
      }),
      (e.basketKey = function (t, { typing: n = !1, sheetOpen: l = !1 } = {}) {
        return l
          ? null
          : (t.ctrlKey || t.metaKey) && 'Enter' === t.key
            ? 'save'
            : t.ctrlKey || t.metaKey || t.altKey
              ? null
              : 'Escape' === t.key
                ? 'close'
                : n
                  ? null
                  : '+' === t.key
                    ? 'plus'
                    : '-' === t.key || '\u2212' === t.key
                      ? 'minus'
                      : null;
      }),
      (e.stepLineQuantity = function (t, n, l = 1) {
        const u = Number(
            String(t)
              .replace(/[\u06f0-\u06f9]/g, (t) =>
                String(
                  '\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9'.indexOf(
                    t,
                  ),
                ),
              )
              .replace(/[\u066b]/g, '.')
              .replace(/[,\u066c\s]/g, ''),
          ),
          y = Number.isFinite(u) ? u : 0;
        if (n < 0 && !(y > l)) return null;
        const c = Math.round(1e3 * (y + n * l)) / 1e3;
        return c >= 0.001 ? String(c) : null;
      }));
    const t = {
      ArrowLeft: 'left',
      ArrowRight: 'right',
      ArrowUp: 'up',
      ArrowDown: 'down',
    };
  },
  975,
  [],
);
