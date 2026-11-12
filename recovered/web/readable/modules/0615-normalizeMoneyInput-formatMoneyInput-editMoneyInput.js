// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 615; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.normalizeMoneyInput = l),
      (e.formatMoneyInput = c),
      (e.editMoneyInput = function (n, o, s = !1, u) {
        let h = 0;
        for (; h < n.length && h < o.length && n[h] === o[h]; ) h++;
        let f = 0;
        for (
          ;
          f < n.length - h &&
          f < o.length - h &&
          n[n.length - 1 - f] === o[o.length - 1 - f];

        )
          f++;
        let p = o.length - f;
        if (
          n.length === o.length + 1 &&
          /[\u066c,]/.test(n[h]) &&
          n.slice(0, h) + n.slice(h + 1) === o
        ) {
          const t = u?.start === h && u.end === h ? h : h - 1;
          t >= 0 && ((o = o.slice(0, t) + o.slice(t + 1)), (p = t));
        }
        const M = l(o, s),
          y = c(M, s),
          v = (0, t.localDigits)(o.slice(0, p), 'en').replace(
            /[^0-9.\u066b/]/g,
            '',
          ).length;
        let _ = 0,
          D = 0;
        for (; _ < y.length && D < v; )
          (/[0-9\u06f0-\u06f9\u0660-\u0669.\u066b]/.test(y[_]) && D++, _++);
        return { value: M, selection: { start: _, end: _ } };
      }));
    var t = r(d[0]);
    const n = (t) =>
      !0 === t
        ? 2
        : 'number' == typeof t
          ? Math.max(0, Math.min(6, Math.floor(t)))
          : 0;
    function l(l, c = !1) {
      const o = (0, t.localDigits)(l, 'en')
          .replace(/[\u066c,\s]/g, '')
          .replace(/[\u066b/]/g, '.')
          .replace(/[^0-9.]/g, ''),
        [s, ...u] = o.split('.'),
        h = s.replace(/^0+(?=\d)/, '').slice(0, 15),
        f = n(c);
      return f && u.length ? (h || '0') + '.' + u.join('').slice(0, f) : h;
    }
    function c(n, c = !1) {
      const o = l(n, c);
      if (!o) return '';
      const [s, u] = o.split('.'),
        h = 'en' === (0, t.localeLang)() ? ',' : '\u066c',
        f = 'en' === (0, t.localeLang)() ? '.' : '\u066b';
      return (0, t.localDigits)(
        s.replace(/\B(?=(\d{3})+(?!\d))/g, h) + (void 0 === u ? '' : f + u),
      );
    }
  },
  615,
  [311],
);
