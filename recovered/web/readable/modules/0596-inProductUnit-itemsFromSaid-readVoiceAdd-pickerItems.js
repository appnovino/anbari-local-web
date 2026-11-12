// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 596; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.inProductUnit = q),
      (e.itemsFromSaid = y),
      (e.readVoiceAdd = function (t, n) {
        const i = s(t);
        if (!i) return { items: [], misses: [], leftovers: [] };
        const u = n.filter((t) => !t.archivedAt).map((t) => t.name),
          o = i
            .split(
              /\s+\u0648\s+|\s*[\u060c,\u061b;]\s*|\s+\u0628\u0639\u062f\s+/,
            )
            .map((t) => t.trim())
            .filter(Boolean),
          c = [],
          a = [];
        for (let t = 0; t < o.length; ) {
          let n = 0;
          for (let i = o.length; i > t; i--) {
            const s = f(o.slice(t, i).join(' \u0648 '), u);
            if (s) {
              (c.push(
                ...s.map((t) => ({
                  name: t.name,
                  quantity: t.quantity,
                  unit: t.unit,
                })),
              ),
                (n = i - t));
              break;
            }
          }
          if (n) {
            t += n;
            continue;
          }
          const i = o[t++];
          if (l(i)) {
            a.push(i);
            continue;
          }
          const s = p(i);
          s && c.push({ name: s, quantity: 1, unit: null });
        }
        return { ...y(c, n), leftovers: a };
      }),
      Object.defineProperty(e, 'pickerItems', {
        enumerable: !0,
        get: function () {
          return h;
        },
      }));
    var t = r(d[0]),
      n = r(d[1]),
      i = r(d[2]),
      u = r(d[3]),
      o = r(d[4]);
    const s = (t) =>
        String(t || '')
          .normalize('NFKC')
          .replace(/\u064a/g, '\u06cc')
          .replace(/\u0643/g, '\u06a9')
          .replace(/[\u200c\u200d]/g, ' ')
          .replace(/\s+/g, ' ')
          .trim(),
      c = new Set([
        '\u0627\u0636\u0627\u0641\u0647',
        '\u06a9\u0646',
        '\u0628\u06a9\u0646',
        '\u0628\u0632\u0646',
        '\u0628\u0630\u0627\u0631',
        '\u0628\u06af\u0630\u0627\u0631',
        '\u0628\u0646\u0648\u06cc\u0633',
        '\u0644\u0637\u0641\u0627',
        '\u0644\u0637\u0641\u0627\u064b',
        '\u0647\u0645',
        '\u062f\u06cc\u06af\u0647',
        '\u062f\u06cc\u06af\u0631',
        '\u062e\u0628',
        '\u062e\u0648\u0628',
        '\u0622\u0642\u0627',
        '\u0641\u0627\u06a9\u062a\u0648\u0631',
        '\u062a\u0648',
        '\u062a\u0648\u06cc',
        '\u0628\u0647',
        '\u0631\u0648',
        '\u0631\u0627',
        '\u0648',
        '\u0628\u0627',
        '\u0628\u0639\u062f',
        '\u0628\u0639\u062f\u0634',
        '\u0647\u0645\u0686\u0646\u06cc\u0646',
        '\u0645\u0645\u0646\u0648\u0646',
        '\u0645\u0631\u0633\u06cc',
        '\u0627\u0648\u0645',
        '\u0627\u0645',
        '\u0622\u0631\u0647',
        '\u0628\u0627\u0634\u0647',
        '\u06cc\u0647',
        '\u06cc\u06a9',
        '\u0639\u062f\u062f',
        '\u062a\u0627',
        '\u062f\u0648\u0646\u0647',
        '\u062f\u0627\u0646\u0647',
      ]),
      a = /[0-9\u06f0-\u06f9\u0660-\u0669]/;
    function l(t) {
      return (
        a.test(t) ||
        s(t)
          .split(' ')
          .some(
            (t) =>
              o.SPOKEN_NUMBER_WORDS.has(t) ||
              '\u0646\u06cc\u0645' === t ||
              '\u0647\u0632\u0627\u0631' === t,
          )
      );
    }
    function p(t) {
      return s(t)
        .replace(/[.!?\u061f\xab\xbb"()]/g, ' ')
        .split(' ')
        .filter((t) => t && !c.has(t))
        .join(' ');
    }
    function f(t, n) {
      for (const u of [t + ' _sold_', t]) {
        const t = (0, i.parseShopNote)(u, n);
        if ('complete' === t.status) return t.actions;
      }
      return null;
    }
    function q(i, u, o) {
      const s = o.unit || 'piece';
      try {
        if (!u || 'piece' === u || u === s) return { qty: (0, n.q3)(i) };
        if (o.packUnit === u && o.packSize)
          return { qty: (0, n.q3)((0, n.convertPack)(i, o.packSize)) };
        if ((0, t.fixedFactor)(u, s))
          return { qty: (0, n.q3)((0, t.convertFixed)(i, u, s)) };
      } catch {}
      return { qty: (0, n.q3)(i), unit: u };
    }
    function y(n, i) {
      const o = [],
        s = [],
        c = i.filter((t) => !t.archivedAt),
        a = n.filter((t) => t.name && t.name.trim()),
        l = (0, u.linkActions)(
          a.map((n) => ({
            name: n.name.trim(),
            unit: n.unit && (0, t.isUnit)(n.unit) ? n.unit : null,
          })),
          c,
        );
      return (
        a.forEach((n, i) => {
          const a = l[i],
            p = a.productId
              ? c.find((t) => t.id === a.productId)
              : a.needsChoice
                ? void 0
                : (0, u.closestProduct)(c, n.name);
          if (!p)
            return void s.push({
              said: n.name.trim(),
              kind: a.needsChoice ? 'choose' : 'unknown',
            });
          const f = q(
            null !== n.quantity && void 0 !== n.quantity && n.quantity > 0
              ? n.quantity
              : 1,
            n.unit && (0, t.isUnit)(n.unit) ? n.unit : null,
            p,
          );
          f.qty > 0 &&
            o.push({
              productId: p.id,
              name: p.name,
              qty: f.qty,
              ...(f.unit ? { unit: f.unit } : {}),
              baseUnit: p.unit || 'piece',
              said: n.name.trim(),
            });
        }),
        { items: o, misses: s }
      );
    }
    const h = (t) =>
      t.map((t) => ({
        productId: t.productId,
        qty: t.qty,
        ...(t.unit ? { unit: t.unit } : {}),
      }));
  },
  596,
  [432, 431, 597, 452, 586],
);
