// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 453; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (_g, r, _i, _a, m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'MODEL_MAX', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      Object.defineProperty(e, 'VARIANT_VALUE_MAX', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      Object.defineProperty(e, 'MAX_SIZES', {
        enumerable: !0,
        get: function () {
          return i;
        },
      }),
      Object.defineProperty(e, 'MAX_COLORS', {
        enumerable: !0,
        get: function () {
          return a;
        },
      }),
      Object.defineProperty(e, 'MAX_VARIANTS_PER_CALL', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      Object.defineProperty(e, 'SIZE_PRESETS', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      Object.defineProperty(e, 'COLOR_PRESETS', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      (e.cleanVariantValue = d),
      Object.defineProperty(e, 'isClothingSize', {
        enumerable: !0,
        get: function () {
          return g;
        },
      }),
      Object.defineProperty(e, 'isColorWord', {
        enumerable: !0,
        get: function () {
          return h;
        },
      }),
      Object.defineProperty(e, 'sameValue', {
        enumerable: !0,
        get: function () {
          return S;
        },
      }),
      (e.sortSizes = E),
      (e.variantName = b),
      (e.variantModel = function (n, o, i) {
        const a = d(o || ''),
          l = d(i || ''),
          s = n.trim().split(/\s+/).filter(Boolean),
          c = a ? a.split(' ') : [],
          f = l ? l.split(' ') : [],
          p = (t, n) => n.length > 0 && n.every((n, o) => S(s[t + o], n)),
          g = [];
        let L = !1;
        for (let n = 0; n < s.length; n++) {
          const o = A.has((0, t.normalizeName)(s[n]));
          if (o && p(n + 1, c)) ((n += c.length), (L = !0));
          else if (o && p(n + 1, f)) ((n += f.length), (L = !0));
          else if (p(n, f)) ((n += f.length - 1), (L = !0));
          else {
            if (a && u.includes(a)) {
              const t = void 0 !== s[n + 1] && S(s[n] + ' ' + s[n + 1], a);
              if (t || S(s[n], a)) {
                ((n += t ? 1 : 0), (L = !0));
                continue;
              }
            }
            g.push(s[n]);
          }
        }
        return L
          ? g.every((n) => A.has((0, t.normalizeName)(n)))
            ? ''
            : g.join(' ')
          : n.trim();
      }),
      (e.groupModels = function (n) {
        const o = new Map();
        for (const i of n) {
          if (i.archivedAt || !i.model?.trim()) continue;
          const n = (0, t.normalizeName)(i.model);
          let a = o.get(n);
          (a ||
            ((a = {
              key: n,
              model: i.model.trim(),
              variants: [],
              sizes: [],
              colors: [],
              stock: 0,
            }),
            o.set(n, a)),
            a.variants.push(i),
            (a.stock += 'made' === i.kind ? 0 : i.stock));
        }
        for (const t of o.values())
          ((t.sizes = E(
            t.variants.map((t) => d(t.size || '')).filter(Boolean),
          )),
            (t.colors = [
              ...new Set(
                t.variants.map((t) => d(t.color || '')).filter(Boolean),
              ),
            ]),
            (t.stock = Math.round(1e3 * t.stock) / 1e3));
        return o;
      }),
      (e.findVariant = function (t, n, o) {
        return t.variants.find((t) => S(t.size, n) && S(t.color, o));
      }),
      (e.variantRequest = function (t) {
        const o =
          'string' == typeof t.model
            ? t.model
                .replace(/[\x00-\x1f]/g, '')
                .replace(/\s+/g, ' ')
                .trim()
            : '';
        if (!o || o.length > n) throw Error('invalid_model');
        const s = (t, n) => {
            if (void 0 !== t && !Array.isArray(t))
              throw Error('invalid_variants');
            const o = [...new Set((t || []).map(d).filter(Boolean))];
            if (o.length > n) throw Error('invalid_variants');
            return o;
          },
          c = E(s(t.sizes, i)),
          u = s(t.colors, a);
        if (!c.length && !u.length) throw Error('invalid_variants');
        const f = (c.length ? c : ['']).flatMap((t) =>
          (u.length ? u : ['']).map((n) => ({ size: t, color: n })),
        );
        if (f.length > l) throw Error('too_many_variants');
        return {
          model: o,
          sizes: c,
          colors: u,
          pairs: f.map((t) => ({ ...t, name: b(o, t.size, t.color) })),
        };
      }),
      (e.colorBlocks = function (t, n) {
        if (!t.length) return [];
        const o = Math.max(1, Math.floor(n) || 1),
          i = Math.ceil(t.length / o),
          a = Math.floor(t.length / i),
          l = t.length % i,
          s = [];
        let c = 0;
        for (let n = 0; n < i; n++) {
          const o = a + (n < l ? 1 : 0);
          (s.push(t.slice(c, c + o)), (c += o));
        }
        return s;
      }),
      (e.pricesDiffer = function (t) {
        return (
          new Set(
            t
              .map((t) => t.price)
              .filter((t) => 'number' == typeof t && Number.isFinite(t)),
          ).size > 1
        );
      }));
    var t = r(_d[0]);
    const n = 100,
      o = 20,
      i = 30,
      a = 12,
      l = 120,
      s = {
        shoes: [
          '36',
          '37',
          '38',
          '39',
          '40',
          '41',
          '42',
          '43',
          '44',
          '45',
          '46',
        ],
        clothes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
        pants: ['28', '30', '32', '34', '36', '38', '40'],
        kids: ['1', '2', '3', '4', '5', '6', '7', '8'],
      },
      c = [
        '\u0645\u0634\u06a9\u06cc',
        '\u0633\u0641\u06cc\u062f',
        '\u0637\u0648\u0633\u06cc',
        '\u0633\u0631\u0645\u0647\u200c\u0627\u06cc',
        '\u0622\u0628\u06cc',
        '\u0642\u0631\u0645\u0632',
        '\u0633\u0628\u0632',
        '\u06a9\u0631\u0645',
        '\u0642\u0647\u0648\u0647\u200c\u0627\u06cc',
        '\u0635\u0648\u0631\u062a\u06cc',
      ],
      u = [
        'XXS',
        'XS',
        'S',
        'M',
        'L',
        'XL',
        'XXL',
        '2XL',
        '3XL',
        '4XL',
        '5XL',
        'FREE',
        '\u0641\u0631\u06cc \u0633\u0627\u06cc\u0632',
      ],
      f = {
        '\u0644\u0627\u0631\u062c': 'L',
        '\u0627\u0644': 'L',
        '\u0645\u062f\u06cc\u0648\u0645': 'M',
        '\u0627\u0645': 'M',
        '\u0627\u0633\u0645\u0627\u0644': 'S',
        '\u0627\u0633': 'S',
        '\u0627\u06cc\u06a9\u0633 \u0644\u0627\u0631\u062c': 'XL',
        '\u0627\u06cc\u06a9\u0633 \u0627\u0644': 'XL',
        '\u0627\u06a9\u0633 \u0644\u0627\u0631\u062c': 'XL',
        '\u0627\u06cc\u06a9\u0633 \u0627\u06cc\u06a9\u0633 \u0644\u0627\u0631\u062c':
          'XXL',
        '\u062f\u0628\u0644 \u0627\u06cc\u06a9\u0633 \u0644\u0627\u0631\u062c':
          'XXL',
        '\u062f\u0648 \u0627\u06cc\u06a9\u0633 \u0644\u0627\u0631\u062c': 'XXL',
        '\u0627\u06cc\u06a9\u0633 \u0627\u0633\u0645\u0627\u0644': 'XS',
        '\u0627\u06a9\u0633 \u0627\u0633\u0645\u0627\u0644': 'XS',
        '\u0648\u0627\u06cc\u062a': '\u0633\u0641\u06cc\u062f',
        '\u0628\u0644\u06a9': '\u0645\u0634\u06a9\u06cc',
        '\u0631\u062f': '\u0642\u0631\u0645\u0632',
        '\u0628\u0644\u0648': '\u0622\u0628\u06cc',
        '\u06af\u0631\u06cc\u0646': '\u0633\u0628\u0632',
        '\u06af\u0631\u06cc': '\u0637\u0648\u0633\u06cc',
        '\u0628\u0631\u0627\u0648\u0646':
          '\u0642\u0647\u0648\u0647\u200c\u0627\u06cc',
        '\u067e\u06cc\u0646\u06a9': '\u0635\u0648\u0631\u062a\u06cc',
        '\u0646\u06cc\u0648\u06cc':
          '\u0633\u0631\u0645\u0647\u200c\u0627\u06cc',
      },
      p = {
        WHITE: '\u0633\u0641\u06cc\u062f',
        BLACK: '\u0645\u0634\u06a9\u06cc',
        RED: '\u0642\u0631\u0645\u0632',
        BLUE: '\u0622\u0628\u06cc',
        GREEN: '\u0633\u0628\u0632',
        GREY: '\u0637\u0648\u0633\u06cc',
        GRAY: '\u0637\u0648\u0633\u06cc',
        BROWN: '\u0642\u0647\u0648\u0647\u200c\u0627\u06cc',
        PINK: '\u0635\u0648\u0631\u062a\u06cc',
        NAVY: '\u0633\u0631\u0645\u0647\u200c\u0627\u06cc',
        LARGE: 'L',
        MEDIUM: 'M',
        SMALL: 'S',
        'X LARGE': 'XL',
        'EXTRA LARGE': 'XL',
        'X SMALL': 'XS',
        'FREE SIZE': 'FREE',
      };
    function d(t) {
      if ('string' != typeof t) return '';
      const n = t
          .normalize('NFKC')
          .replace(/[\u06f0-\u06f9]/g, (t) => String(t.charCodeAt(0) - 1776))
          .replace(/[\u0660-\u0669]/g, (t) => String(t.charCodeAt(0) - 1632))
          .replace(/[\x00-\x1f]/g, '')
          .replace(/\s+/g, ' ')
          .trim(),
        i =
          f[
            n
              .toLowerCase()
              .replace(/\u064a/g, '\u06cc')
              .replace(/[\u200c-]/g, ' ')
          ];
      return (
        i || (/^[a-z0-9 .\/-]+$/i.test(n) ? n.toUpperCase() : n).slice(0, o)
      );
    }
    const g = (t) => u.includes(d(t).toUpperCase()),
      L = new Set([
        ...c,
        '\u0632\u0631\u062f',
        '\u0646\u0627\u0631\u0646\u062c\u06cc',
        '\u0628\u0646\u0641\u0634',
        '\u0637\u0644\u0627\u06cc\u06cc',
        '\u0646\u0642\u0631\u0647\u200c\u0627\u06cc',
        '\u06cc\u0634\u0645\u06cc',
        '\u0632\u0631\u0634\u06a9\u06cc',
        '\u062e\u0627\u06a9\u0633\u062a\u0631\u06cc',
        '\u06a9\u0631\u0645',
        '\u0633\u0631\u0645\u0647 \u0627\u06cc',
        '\u0646\u0642\u0631\u0647 \u0627\u06cc',
      ]),
      h = (n) => {
        const o = d(n);
        return (
          !!o &&
          [...L].some(
            (n) => (0, t.normalizeName)(n) === (0, t.normalizeName)(p[o] || o),
          )
        );
      },
      X = (n) => {
        const o = d(n || '');
        return (0, t.normalizeName)(p[o] || o);
      },
      S = (t, n) => X(t) === X(n);
    function E(t) {
      const n = (t) => {
        const n = u.indexOf(t.toUpperCase());
        if (n >= 0) return [0, n];
        const o = Number(t.replace(',', '.'));
        return Number.isFinite(o) ? [1, o] : [2, 0];
      };
      return [...new Set(t)].sort((t, o) => {
        const i = n(t),
          a = n(o);
        return i[0] - a[0] || i[1] - a[1] || t.localeCompare(o, 'fa');
      });
    }
    function b(t, n, o) {
      return [t.trim(), d(n || ''), d(o || '')]
        .filter(Boolean)
        .join(' ')
        .slice(0, 100);
    }
    const A = new Set([
      '\u0633\u0627\u06cc\u0632',
      '\u0631\u0646\u06af',
      '\u0634\u0645\u0627\u0631\u0647',
      'size',
      'color',
      'colour',
    ]);
  },
  453,
  [439],
);
