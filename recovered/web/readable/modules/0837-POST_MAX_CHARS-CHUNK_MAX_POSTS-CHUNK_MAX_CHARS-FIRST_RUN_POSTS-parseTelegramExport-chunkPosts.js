// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 837; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'POST_MAX_CHARS', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      Object.defineProperty(e, 'CHUNK_MAX_POSTS', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      Object.defineProperty(e, 'CHUNK_MAX_CHARS', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      Object.defineProperty(e, 'FIRST_RUN_POSTS', {
        enumerable: !0,
        get: function () {
          return a;
        },
      }),
      (e.parseTelegramExport = function (o) {
        const s = o;
        if (!s || 'object' != typeof s || !Array.isArray(s.messages))
          throw Error('telegram_export_invalid');
        const a = [];
        let u = 0;
        for (const t of s.messages) {
          if (!t || 'object' != typeof t || 'message' !== t.type) continue;
          u++;
          const o = (c(t.text) || c(t.caption))
            .replace(/\r/g, '')
            .replace(/[ \t]+/g, ' ')
            .replace(/\n{3,}/g, '\n\n')
            .trim();
          o.length < 3 ||
            (!l(o) && o.length < 20) ||
            a.push({
              id: Number.isSafeInteger(t.id) ? t.id : a.length,
              ...('string' == typeof t.date
                ? { date: t.date.slice(0, 19) }
                : {}),
              text: o.slice(0, n),
            });
        }
        a.sort(
          (t, n) => (n.date || '').localeCompare(t.date || '') || n.id - t.id,
        );
        const f = new Set(),
          p = a.filter((n) => {
            const o = (0, t.normalizeName)(n.text);
            return !f.has(o) && (f.add(o), !0);
          });
        return {
          name: 'string' == typeof s.name ? s.name.slice(0, 100) : '',
          total: u,
          posts: p,
        };
      }),
      (e.chunkPosts = function (t, n = o, a = s) {
        const c = [];
        let l = [],
          u = 0;
        for (const o of t)
          (l.length &&
            (l.length >= n || u + o.text.length > a) &&
            (c.push(l), (l = []), (u = 0)),
            l.push(o),
            (u += o.text.length));
        l.length && c.push(l);
        return c;
      }));
    var t = r(d[0]);
    const n = 1500,
      o = 40,
      s = 18e3,
      a = 120;
    function c(t) {
      return 'string' == typeof t
        ? t
        : Array.isArray(t)
          ? t.map(c).join('')
          : t && 'object' == typeof t && 'string' == typeof t.text
            ? t.text
            : '';
    }
    const l = (t) => /[0-9\u06f0-\u06f9\u0660-\u0669]/.test(t);
  },
  837,
  [439],
);
