// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 74; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.isLocaleRTL = function (s) {
        var l = c.get(s);
        if (l) return l;
        var o = !1;
        if (Intl.Locale)
          try {
            var u = new Intl.Locale(s).maximize().script;
            o = t.has(u);
          } catch (t) {
            var h = s.split('-')[0];
            o = n.has(h);
          }
        else {
          var v = s.split('-')[0];
          o = n.has(v);
        }
        return (c.set(s, o), o);
      }));
    var t = new Set([
        'Arab',
        'Syrc',
        'Samr',
        'Mand',
        'Thaa',
        'Mend',
        'Nkoo',
        'Adlm',
        'Rohg',
        'Hebr',
      ]),
      n = new Set([
        'ae',
        'ar',
        'arc',
        'bcc',
        'bqi',
        'ckb',
        'dv',
        'fa',
        'far',
        'glk',
        'he',
        'iw',
        'khw',
        'ks',
        'ku',
        'mzn',
        'nqo',
        'pnb',
        'ps',
        'sd',
        'ug',
        'ur',
        'yi',
      ]),
      c = new Map();
  },
  74,
  [],
);
