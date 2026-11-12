// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 805; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (_g, r, _i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.numberWords = function (t) {
        if (!Number.isFinite(t)) return '';
        let n = Math.round(Math.abs(t));
        if (0 === n) return '\u0635\u0641\u0631';
        const o = [];
        for (let t = 0; n > 0 && t < s.length; t++, n = Math.floor(n / 1e3)) {
          const u = n % 1e3;
          u && o.unshift(i(u) + (s[t] ? ' ' + s[t] : ''));
        }
        return (t < 0 ? '\u0645\u0646\u0641\u06cc ' : '') + o.join(' \u0648 ');
      }));
    const t = [
        '',
        '\u06cc\u06a9',
        '\u062f\u0648',
        '\u0633\u0647',
        '\u0686\u0647\u0627\u0631',
        '\u067e\u0646\u062c',
        '\u0634\u0634',
        '\u0647\u0641\u062a',
        '\u0647\u0634\u062a',
        '\u0646\u0647',
      ],
      n = [
        '\u062f\u0647',
        '\u06cc\u0627\u0632\u062f\u0647',
        '\u062f\u0648\u0627\u0632\u062f\u0647',
        '\u0633\u06cc\u0632\u062f\u0647',
        '\u0686\u0647\u0627\u0631\u062f\u0647',
        '\u067e\u0627\u0646\u0632\u062f\u0647',
        '\u0634\u0627\u0646\u0632\u062f\u0647',
        '\u0647\u0641\u062f\u0647',
        '\u0647\u062c\u062f\u0647',
        '\u0646\u0648\u0632\u062f\u0647',
      ],
      o = [
        '',
        '',
        '\u0628\u06cc\u0633\u062a',
        '\u0633\u06cc',
        '\u0686\u0647\u0644',
        '\u067e\u0646\u062c\u0627\u0647',
        '\u0634\u0635\u062a',
        '\u0647\u0641\u062a\u0627\u062f',
        '\u0647\u0634\u062a\u0627\u062f',
        '\u0646\u0648\u062f',
      ],
      u = [
        '',
        '\u0635\u062f',
        '\u062f\u0648\u06cc\u0633\u062a',
        '\u0633\u06cc\u0635\u062f',
        '\u0686\u0647\u0627\u0631\u0635\u062f',
        '\u067e\u0627\u0646\u0635\u062f',
        '\u0634\u0634\u0635\u062f',
        '\u0647\u0641\u062a\u0635\u062f',
        '\u0647\u0634\u062a\u0635\u062f',
        '\u0646\u0647\u0635\u062f',
      ],
      s = [
        '',
        '\u0647\u0632\u0627\u0631',
        '\u0645\u06cc\u0644\u06cc\u0648\u0646',
        '\u0645\u06cc\u0644\u06cc\u0627\u0631\u062f',
        '\u062a\u0631\u06cc\u0644\u06cc\u0648\u0646',
        '\u06a9\u0648\u0627\u062f\u0631\u06cc\u0644\u06cc\u0648\u0646',
      ];
    function i(s) {
      const i = [],
        f = Math.floor(s / 100),
        h = s % 100;
      if ((f && i.push(u[f]), h >= 10 && h < 20)) i.push(n[h - 10]);
      else {
        const n = Math.floor(h / 10),
          u = h % 10;
        (n && i.push(o[n]), u && i.push(t[u]));
      }
      return i.join(' \u0648 ');
    }
  },
  805,
  [],
);
