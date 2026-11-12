// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 676; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.encodeURLChars = function (t) {
        let c = (0, n.resolve)(t);
        '/' === t.charAt(t.length - 1) &&
          c[c.length - 1] !== n.sep &&
          (c += '/');
        ((c = O(c)), -1 !== c.indexOf('?') && (c = c.replace(o, '%3F')));
        -1 !== c.indexOf('#') && (c = c.replace(s, '%23'));
        return c;
      }),
      (e.isUrl = function (n) {
        try {
          return !!new URL(n);
        } catch (n) {
          return !1;
        }
      }),
      (e.asUrl = function (n) {
        try {
          const t = new URL(n);
          return ((t.hash = ''), t);
        } catch (n) {
          return null;
        }
      }));
    var n = r(d[0]);
    const t = /%/g,
      c = /\\/g,
      l = /\n/g,
      u = /\r/g,
      f = /\t/g,
      o = /\?/g,
      s = /#/g,
      p = / /g;
    function O(n) {
      return (
        -1 !== n.indexOf('%') && (n = n.replace(t, '%25')),
        -1 !== n.indexOf('\\') && (n = n.replace(c, '%5C')),
        -1 !== n.indexOf('\n') && (n = n.replace(l, '%0A')),
        -1 !== n.indexOf('\r') && (n = n.replace(u, '%0D')),
        -1 !== n.indexOf('\t') && (n = n.replace(f, '%09')),
        -1 !== n.indexOf(' ') && (n = n.replace(p, '%20')),
        n
      );
    }
  },
  676,
  [675],
);
