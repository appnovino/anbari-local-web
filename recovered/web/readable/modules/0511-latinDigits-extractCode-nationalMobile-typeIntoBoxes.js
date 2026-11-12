// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 511; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.latinDigits = o),
      (e.extractCode = f),
      (e.nationalMobile = function (t) {
        const n = o(String(t ?? '').normalize('NFKC')).replace(/\D/g, ''),
          c = n.slice(-10),
          s = n.slice(0, -10);
        return /^9\d{9}$/.test(c) && /^(|0|98|098|0098|980)$/.test(s) ? c : '';
      }),
      (e.typeIntoBoxes = function (t, n, c, s) {
        const l = Array.from({ length: s }, (n, o) => t[o] || ''),
          i = o(String(c ?? '')),
          u = i.replace(/\D/g, '');
        if (i.length > 2 || (u && /\D/.test(i))) {
          const t = f(i, s);
          if (t) return { cells: t.split(''), focus: s - 1, noCode: !1 };
          if (i.length > 2 && (u.length > s || /\p{L}/u.test(i)))
            return { cells: l, focus: null, noCode: !0 };
        }
        if (!u) return ((l[n] = ''), { cells: l, focus: null, noCode: !1 });
        if (1 === u.length)
          return ((l[n] = u), { cells: l, focus: n + 1, noCode: !1 });
        const h = l[n];
        if (h && u.startsWith(h) && n < s - 1) {
          const t = u.slice(1);
          for (let o = 0; o < t.length && n + 1 + o < s; o++)
            l[n + 1 + o] = t[o];
          return { cells: l, focus: n + 1 + t.length, noCode: !1 };
        }
        if (h && 2 === u.length && (u[0] === h || u[1] === h))
          return (
            (l[n] = u[0] === h ? u[1] : u[0]),
            { cells: l, focus: n + 1, noCode: !1 }
          );
        for (let t = 0; t < u.length && n + t < s; t++) l[n + t] = u[t];
        return { cells: l, focus: n + u.length, noCode: !1 };
      }));
    const t = '\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9',
      n = '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669';
    function o(o) {
      return [...o]
        .map((o) => {
          const c = t.indexOf(o),
            s = n.indexOf(o);
          return c >= 0 ? String(c) : s >= 0 ? String(s) : o;
        })
        .join('');
    }
    const c = /\d[ \t\u00a0\-\u2013/.]{1,3}$/,
      s = /^[ \t\u00a0\-\u2013/.]{1,3}\d/,
      l =
        /(?:\u06a9\u062f[\s\u200c]*\u0648\u0631\u0648\u062f|\u0631\u0645\u0632[\s\u200c]*\u0648\u0631\u0648\u062f|\u06a9\u062f[\s\u200c]*\u062a\u0623\u06cc\u06cc\u062f|\u06a9\u062f[\s\u200c]*\u062a\u0627\u06cc\u06cc\u062f|login\s*code|verification\s*code)[^\d\n]{0,24}(\d+)/gi,
      i = /(?:\u06a9\u062f|\u0631\u0645\u0632|code|pin)[^\d\n]{0,24}(\d+)/gi,
      u = /@(?:(?:www|test)\.)?myanbari\.(?:ir|com)\s+#(\d+)/gi;
    function f(t, n) {
      try {
        const f = o(String(t || ''));
        if (!(f && n > 0)) return '';
        const h = (t, o) =>
            o.length === n &&
            !c.test(f.slice(0, t)) &&
            !s.test(f.slice(t + o.length)),
          p = [...f.matchAll(u)].at(-1)?.[1];
        if (p && p.length === n) return p;
        const C = /^\s*#(\d+)\s*$/.exec(f)?.[1];
        if (C && C.length === n) return C;
        for (const t of [l, i])
          for (const n of f.matchAll(t)) {
            const t = n[1];
            if (h((n.index ?? 0) + n[0].length - t.length, t)) return t;
          }
        for (const t of f.matchAll(/\d+/g))
          if (h(t.index ?? 0, t[0])) return t[0];
        if (/^[\d\s\-\u2013\u2014]+$/.test(f)) {
          const t = f.replace(/\D/g, '');
          if (t.length === n) return t;
        }
        return '';
      } catch {
        return '';
      }
    }
  },
  511,
  [],
);
