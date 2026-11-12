// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 693; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.modelKey = i),
      (e.trailingVariant = l),
      (e.rowVariant = s),
      (e.oneModelPerNote = function (t, a = []) {
        const l = new Set(
            a
              .filter(
                (n) =>
                  !n.archivedAt && 'string' == typeof n.name && n.name.trim(),
              )
              .map((o) => (0, n.normalizeName)(o.name)),
          ),
          c = t.map((o) =>
            !o ||
            'string' != typeof o.name ||
            o.productId ||
            l.has((0, n.normalizeName)(o.name))
              ? null
              : s(o),
          ),
          f = new Map();
        c.forEach((n, o) => {
          if (!n || !n.model) return;
          const t = i(n.model);
          t && f.set(t, [...(f.get(t) || []), o]);
        });
        const u = [...t];
        for (const [n, l] of f) {
          if (l.length < 2 || !l.some((n) => c[n].size || c[n].color)) continue;
          if (
            !l.some(
              (n) =>
                (0, o.isClothingSize)(c[n].size) ||
                !!(t[n].model || '').trim() ||
                !!(0, o.cleanVariantValue)(t[n].size || ''),
            )
          )
            continue;
          const s = a
              .find((o) => !o.archivedAt && o.model && i(o.model) === n)
              ?.model?.trim(),
            f = l.map((n) => c[n].model.replace(/\s+/g, ' ').trim()),
            z =
              s ||
              [...f].sort(
                (n, o) =>
                  n.length - o.length ||
                  f.filter((n) => n === o).length -
                    f.filter((o) => o === n).length,
              )[0];
          for (const n of l) {
            const { size: i, color: a } = c[n],
              l = t[n];
            i || a
              ? (u[n] = {
                  ...l,
                  name: (0, o.variantName)(z, i, a),
                  model: z,
                  ...(i ? { size: i } : {}),
                  ...(a ? { color: a } : {}),
                })
              : (u[n] = { ...l, name: z });
          }
        }
        return u;
      }),
      Object.defineProperty(e, 'variantName', {
        enumerable: !0,
        get: function () {
          return o.variantName;
        },
      }));
    var n = r(d[0]),
      o = r(d[1]);
    const t = (n) =>
      /[\u0627\u0648\u0622]\u06cc$/.test(n) && n.length > 2
        ? n.slice(0, -1)
        : n;
    function i(o) {
      return (0, n.normalizeName)(o)
        .replace(/[\u064a]/g, '\u06cc')
        .replace(/[\u0643]/g, '\u06a9')
        .split(' ')
        .filter((n) => n && '\u06cc' !== n)
        .map(t)
        .join('');
    }
    const a = new Set([
      '\u0633\u0627\u06cc\u0632',
      '\u0631\u0646\u06af',
      'size',
      'color',
      'colour',
    ]);
    function l(t) {
      const i = t.trim().split(/\s+/).filter(Boolean);
      let l = '',
        s = '',
        c = i.length;
      for (; c > 1; ) {
        const t =
            c >= 2 ? (0, o.cleanVariantValue)(i[c - 2] + ' ' + i[c - 1]) : '',
          f = (0, o.cleanVariantValue)(i[c - 1]);
        if (
          !l &&
          t &&
          (0, o.isClothingSize)(t) &&
          void 0 !== i[c - 2] &&
          !a.has((0, n.normalizeName)(i[c - 2]))
        )
          ((l = t), (c -= 2));
        else if (!l && (0, o.isClothingSize)(f)) ((l = f), (c -= 1));
        else {
          if (s || !(0, o.isColorWord)(f)) break;
          ((s = f), (c -= 1));
        }
        c > 1 && a.has((0, n.normalizeName)(i[c - 1])) && (c -= 1);
      }
      const f = i.slice(0, c).join(' ');
      return !f || a.has((0, n.normalizeName)(f)) || (!l && !s)
        ? { model: t.trim() }
        : { model: f, ...(l ? { size: l } : {}), ...(s ? { color: s } : {}) };
    }
    function s(n) {
      const t = (0, o.cleanVariantValue)(n.size || ''),
        i = (0, o.cleanVariantValue)(n.color || ''),
        a = l((n.model || '').trim() || n.name.trim());
      return {
        model: a.model,
        size: t || a.size || '',
        color: i || a.color || '',
      };
    }
  },
  693,
  [439, 453],
);
