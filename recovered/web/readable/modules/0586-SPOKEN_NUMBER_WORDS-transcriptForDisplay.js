// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 586; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'SPOKEN_NUMBER_WORDS', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      (e.transcriptForDisplay = function (n) {
        const c =
            n.match(
              /[\p{L}\p{M}\p{N}\u200c]+(?:[.\u066b/][0-9\u06f0-\u06f9\u0660-\u0669]+)?|[^\s]/gu,
            ) || [],
          o = c.map(u),
          s = [];
        for (let n = 0; n < c.length; ) {
          const u = o[n].match(
            /^(?:\u06cc\u0647|\u06cc)\u200c?(\u062f\u0648\u0646\u0647|\u062f\u0627\u0646\u0647)$/u,
          );
          if (u) {
            (s.push(l(1), u[1]), n++);
            continue;
          }
          const p = f(o, n);
          if (p) {
            (s.push(
              p.scaled
                ? l(
                    p.value.toLocaleString('fa-IR', {
                      maximumFractionDigits: 10,
                    }),
                  )
                : l(p.value),
            ),
              (n = p.end));
            continue;
          }
          const v = c[n++];
          s.push(
            /^[0-9\u06f0-\u06f9\u0660-\u0669]+(?:[.\u066b/][0-9\u06f0-\u06f9\u0660-\u0669]+)?$/.test(
              v,
            )
              ? l(v)
              : (0, t.localDigits)(v, 'fa').replace(/\p{P}/gu, ' '),
          );
        }
        return s.join(' ').replace(/\s+/g, ' ').trim();
      }));
    var t = r(d[0]);
    const n = new Map(
        Object.entries({
          '\u0635\u0641\u0631': 0,
          '\u06cc\u06a9': 1,
          '\u06cc\u06a9\u06cc': 1,
          '\u06cc\u0647': 1,
          '\u062f\u0648': 2,
          '\u0633\u0647': 3,
          '\u0686\u0627\u0631': 4,
          '\u0686\u0647\u0627\u0631': 4,
          '\u067e\u0646\u062c': 5,
          '\u0634\u0634': 6,
          '\u0634\u06cc\u0634': 6,
          '\u0647\u0641\u062a': 7,
          '\u0647\u0634\u062a': 8,
          '\u0646\u0647': 9,
          '\u062f\u0647': 10,
          '\u06cc\u0627\u0632\u062f\u0647': 11,
          '\u062f\u0648\u0627\u0632\u062f\u0647': 12,
          '\u0633\u06cc\u0632\u062f\u0647': 13,
          '\u0686\u0647\u0627\u0631\u062f\u0647': 14,
          '\u0686\u0627\u0631\u062f\u0647': 14,
          '\u067e\u0627\u0646\u0632\u062f\u0647': 15,
          '\u067e\u0648\u0646\u0632\u062f\u0647': 15,
          '\u0634\u0627\u0646\u0632\u062f\u0647': 16,
          '\u0634\u0648\u0646\u0632\u062f\u0647': 16,
          '\u0647\u0641\u062f\u0647': 17,
          '\u0647\u06cc\u0641\u062f\u0647': 17,
          '\u0647\u062c\u062f\u0647': 18,
          '\u0647\u06cc\u062c\u062f\u0647': 18,
          '\u0646\u0648\u0632\u062f\u0647': 19,
          '\u0628\u06cc\u0633\u062a': 20,
          '\u0633\u06cc': 30,
          '\u0686\u0647\u0644': 40,
          '\u0686\u0644': 40,
          '\u067e\u0646\u062c\u0627\u0647': 50,
          '\u0634\u0635\u062a': 60,
          '\u0647\u0641\u062a\u0627\u062f': 70,
          '\u0647\u0634\u062a\u0627\u062f': 80,
          '\u0646\u0648\u062f': 90,
          '\u0635\u062f': 100,
          '\u06cc\u06a9\u0635\u062f': 100,
          '\u062f\u0648\u06cc\u0633\u062a': 200,
          '\u0633\u06cc\u0635\u062f': 300,
          '\u0686\u0647\u0627\u0631\u0635\u062f': 400,
          '\u0686\u0627\u0631\u0635\u062f': 400,
          '\u067e\u0627\u0646\u0635\u062f': 500,
          '\u067e\u0648\u0646\u0635\u062f': 500,
          '\u0634\u0634\u0635\u062f': 600,
          '\u0634\u06cc\u0634\u0635\u062f': 600,
          '\u0647\u0641\u062a\u0635\u062f': 700,
          '\u0647\u0634\u062a\u0635\u062f': 800,
          '\u0646\u0647\u0635\u062f': 900,
        }),
      ),
      c = n,
      o = new Map(
        Object.entries({
          '\u0647\u0632\u0627\u0631': 1e3,
          '\u0645\u06cc\u0644\u06cc\u0648\u0646': 1e6,
          '\u0645\u0644\u06cc\u0648\u0646': 1e6,
          '\u0645\u06cc\u0644\u06cc\u0627\u0631\u062f': 1e9,
        }),
      ),
      s = new Set([
        '\u062a\u0627',
        '\u062f\u0648\u0646\u0647',
        '\u062f\u0627\u0646\u0647',
        '\u0639\u062f\u062f',
        '\u06a9\u06cc\u0644\u0648',
        '\u06a9\u06cc\u0644\u0648\u06af\u0631\u0645',
        '\u06af\u0631\u0645',
        '\u06a9\u0627\u0631\u062a\u0646',
        '\u06a9\u0627\u0631\u062a\u0648\u0646',
        '\u0628\u0633\u062a\u0647',
        '\u0644\u06cc\u062a\u0631',
        '\u0645\u062a\u0631',
        '\u062c\u0639\u0628\u0647',
        '\u0628\u0627\u06a9\u0633',
        '\u0634\u06cc\u0634\u0647',
        '\u0628\u0637\u0631\u06cc',
        '\u067e\u0627\u06a9\u062a',
        '\u0642\u0648\u0637\u06cc',
        '\u06a9\u06cc\u0633\u0647',
        '\u062c\u0641\u062a',
        '\u062f\u0633\u062a',
        '\u0631\u0648\u0644',
      ]),
      u = (t) => t.replace(/\u064a/g, '\u06cc').replace(/\u0643/g, '\u06a9'),
      l = (n) => (0, t.localDigits)(n, 'fa').replace(/[.\u066b]/g, '/'),
      p = (n) =>
        /^[0-9\u06f0-\u06f9\u0660-\u0669]+$/.test(n || '')
          ? Number((0, t.localDigits)(n, 'en'))
          : void 0;
    function f(t, c) {
      if ('\u06cc\u0647' === t[c] && !s.has(t[c + 1])) return;
      const u = p(t[c]);
      if (
        !(
          n.has(t[c]) ||
          o.has(t[c]) ||
          (void 0 !== u && u <= 999 && o.has(t[c + 1]))
        )
      )
        return;
      let l,
        f = 0,
        v = 0,
        h = 1 / 0,
        b = c,
        D = !1;
      for (; b < t.length; ) {
        const u = b > c && '\u0648' === t[b],
          O = b + (u ? 1 : 0),
          _ = t[O];
        if (b > c && ('\u0646\u06cc\u0645' === _ || '\u0646\u0635\u0641' === _))
          return { value: f + v + 0.5, end: O + 1, scaled: D };
        const j = o.get(_),
          M = p(_),
          N =
            n.get(_) ??
            (void 0 !== M && M <= 999 && o.has(t[O + 1]) ? M : void 0);
        if (void 0 !== j && j < h)
          ((D = !0),
            (f += (void 0 === l ? 1 : v) * j),
            (v = 0),
            (h = j),
            (l = void 0));
        else {
          if (
            void 0 === N ||
            ('\u06cc\u0647' === _ && !s.has(t[O + 1])) ||
            !(
              b === c ||
              void 0 === l ||
              (u &&
                ((l >= 100 && N > 0 && N < 100) ||
                  (l >= 20 && l < 100 && N > 0 && N < 10)))
            )
          )
            break;
          ((v += N), (l = N));
        }
        b = O + 1;
      }
      return { value: f + v, end: b, scaled: D };
    }
  },
  586,
  [311],
);
