// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 675; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, e, d) {
    'use strict';
    function t(t) {
      return '/' === t;
    }
    function n(n, l, i) {
      let c = '',
        f = 0,
        o = -1,
        h = 0,
        s = '';
      for (let u = 0; u <= n.length; ++u) {
        if (u < n.length) s = n.charAt(u);
        else {
          if (t(s)) break;
          s = '/';
        }
        if (t(s)) {
          if (o === u - 1 || 1 === h);
          else if (2 === h) {
            if (
              c.length < 2 ||
              2 !== f ||
              '.' !== c.charAt(c.length - 1) ||
              '.' !== c.charAt(c.length - 2)
            ) {
              if (c.length > 2) {
                const t = c.lastIndexOf(i);
                (-1 === t
                  ? ((c = ''), (f = 0))
                  : ((c = c.slice(0, t)),
                    (f = c.length - 1 - c.lastIndexOf(i))),
                  (o = u),
                  (h = 0));
                continue;
              }
              if (0 !== c.length) {
                ((c = ''), (f = 0), (o = u), (h = 0));
                continue;
              }
            }
            l && ((c += c.length > 0 ? `${i}..` : '..'), (f = 2));
          } else
            (c.length > 0
              ? (c += `${i}${n.slice(o + 1, u)}`)
              : (c = n.slice(o + 1, u)),
              (f = u - o - 1));
          ((o = u), (h = 0));
        } else '.' === s && -1 !== h ? ++h : (h = -1);
      }
      return c;
    }
    function l(...t) {
      let l = '',
        i = !1;
      for (let n = t.length - 1; n >= -1 && !i; n--) {
        const c = n >= 0 ? t[n] : '';
        c &&
          0 !== c.length &&
          ((l = `${c}/${l}`), (i = !(!c || '/' !== c.charAt(0))));
      }
      return ((l = n(l, !i, '/')), i ? `/${l}` : l.length > 0 ? l : '.');
    }
    function i(t) {
      if (0 === t.length) return '.';
      const l = '/' === t.charAt(0),
        i = '/' === t.charAt(t.length - 1);
      return 0 === (t = n(t, !l, '/')).length
        ? l
          ? '/'
          : i
            ? './'
            : '.'
        : (i && (t += '/'), l ? `/${t}` : t);
    }
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.format = function (t, n) {
        const l = n.dir || n.root,
          i =
            n.base ||
            `${n.name || ''}${((c = n.ext), c ? `${'.' === c[0] ? '' : '.'}${c}` : '')}`;
        var c;
        if (!l) return i;
        return l === n.root ? `${l}${i}` : `${l}${t}${i}`;
      }),
      (e.resolve = l),
      (e.normalize = i),
      (e.isAbsolute = function (t) {
        return t.length > 0 && '/' === t.charAt(0);
      }),
      (e.join = function (...t) {
        if (0 === t.length) return '.';
        const n = [];
        for (let l = 0; l < t.length; ++l) {
          const i = t[l];
          i && i.length > 0 && n.push(i);
        }
        return 0 === n.length ? '.' : i(n.join('/'));
      }),
      (e.relative = function (t, n) {
        if (t === n) return '';
        if (((t = l(t)), (n = l(n)), t === n)) return '';
        const i = t.length,
          c = i - 1,
          f = n.length - 1,
          o = c < f ? c : f;
        let h = -1,
          s = 0;
        for (; s < o; s++) {
          const l = t.charAt(1 + s);
          if (l !== n.charAt(1 + s)) break;
          '/' === l && (h = s);
        }
        if (s === o)
          if (f > o) {
            if ('/' === n.charAt(1 + s)) return n.slice(1 + s + 1);
            if (0 === s) return n.slice(1 + s);
          } else
            c > o && ('/' === t.charAt(1 + s) ? (h = s) : 0 === s && (h = 0));
        let u = '';
        for (s = 1 + h + 1; s <= i; ++s)
          (s !== i && '/' !== t.charAt(s)) ||
            (u += 0 === u.length ? '..' : '/..');
        return `${u}${n.slice(1 + h)}`;
      }),
      (e.toNamespacedPath = function (t) {
        return t;
      }),
      (e.dirname = function (t) {
        if (0 === t.length) return '.';
        const n = '/' === t.charAt(0);
        let l = -1,
          i = !0;
        for (let n = t.length - 1; n >= 1; --n)
          if ('/' === t.charAt(n)) {
            if (!i) {
              l = n;
              break;
            }
          } else i = !1;
        return -1 === l ? (n ? '/' : '.') : n && 1 === l ? '//' : t.slice(0, l);
      }),
      (e.basename = function (t, n) {
        let l = 0,
          i = -1,
          c = !0;
        if (void 0 !== n && n.length > 0 && n.length <= t.length) {
          if (n === t) return '';
          let f = n.length - 1,
            o = -1;
          for (let h = t.length - 1; h >= 0; --h) {
            const s = t.charAt(h);
            if ('/' === s) {
              if (!c) {
                l = h + 1;
                break;
              }
            } else
              (-1 === o && ((c = !1), (o = h + 1)),
                f >= 0 &&
                  (s === n.charAt(f)
                    ? -1 === --f && (i = h)
                    : ((f = -1), (i = o))));
          }
          return (
            l === i ? (i = o) : -1 === i && (i = t.length),
            t.slice(l, i)
          );
        }
        for (let n = t.length - 1; n >= 0; --n)
          if ('/' === t.charAt(n)) {
            if (!c) {
              l = n + 1;
              break;
            }
          } else -1 === i && ((c = !1), (i = n + 1));
        return -1 === i ? '' : t.slice(l, i);
      }),
      (e.extname = function (t) {
        let n = -1,
          l = 0,
          i = -1,
          c = !0,
          f = 0;
        for (let o = t.length - 1; o >= 0; --o) {
          const h = t.charAt(o);
          if ('/' !== h)
            (-1 === i && ((c = !1), (i = o + 1)),
              '.' === h
                ? -1 === n
                  ? (n = o)
                  : 1 !== f && (f = 1)
                : -1 !== n && (f = -1));
          else if (!c) {
            l = o + 1;
            break;
          }
        }
        if (
          -1 === n ||
          -1 === i ||
          0 === f ||
          (1 === f && n === i - 1 && n === l + 1)
        )
          return '';
        return t.slice(n, i);
      }),
      (e.parse = function (t) {
        const n = { root: '', dir: '', base: '', ext: '', name: '' };
        if (0 === t.length) return n;
        const l = '/' === t.charAt(0);
        let i;
        l ? ((n.root = '/'), (i = 1)) : (i = 0);
        let c = -1,
          f = 0,
          o = -1,
          h = !0,
          s = t.length - 1,
          u = 0;
        for (; s >= i; --s) {
          const n = t.charAt(s);
          if ('/' !== n)
            (-1 === o && ((h = !1), (o = s + 1)),
              '.' === n
                ? -1 === c
                  ? (c = s)
                  : 1 !== u && (u = 1)
                : -1 !== c && (u = -1));
          else if (!h) {
            f = s + 1;
            break;
          }
        }
        if (-1 !== o) {
          const i = 0 === f && l ? 1 : f;
          -1 === c || 0 === u || (1 === u && c === o - 1 && c === f + 1)
            ? (n.base = n.name = t.slice(i, o))
            : ((n.name = t.slice(i, c)),
              (n.base = t.slice(i, o)),
              (n.ext = t.slice(c, o)));
        }
        f > 0 ? (n.dir = t.slice(0, f - 1)) : l && (n.dir = '/');
        return n;
      }),
      Object.defineProperty(e, 'sep', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      Object.defineProperty(e, 'delimiter', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }));
    const c = '/',
      f = ':';
  },
  675,
  [],
);
