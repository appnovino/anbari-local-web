// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 433; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'OVERSELL_MODES', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      (e.oversellMode = function (t) {
        const n = t && 'object' == typeof t ? t.oversell : void 0;
        return 'allow' === n || 'forbid' === n ? n : 'ask';
      }),
      (e.oversellPasses = function (t, n) {
        return 'allow' === t || ('ask' === t && !0 === n);
      }),
      (e.stockShortage = function ({
        kind: t,
        quantity: n,
        stock: o,
        tracksStock: c = !0,
      }) {
        return c && u.includes(t) && s(n) > s(o);
      }),
      Object.defineProperty(e, 'OUT_OF_STOCK', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      (e.isOutOfStock = function (t) {
        return !(t > 0 || t < 0);
      }),
      (e.isNegativeStock = function (t) {
        return Number(t) < 0;
      }),
      Object.defineProperty(e, 'NEGATIVE_STOCK', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }),
      (e.stockNumber = L),
      (e.basketShortageText = function ({
        name: o,
        need: u,
        stock: c,
        missing: s,
        unit: l,
        more: f = 0,
      }) {
        const L = k(l),
          p = (n) => (0, t.formatGrouped)(Number(n) || 0),
          b =
            Number(c) > 0
              ? (0, n.L)(
                  '{need} {unit} \u0627\u0632 \xab{name}\xbb \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0631\u062f\u06cc\u060c \u0648\u0644\u06cc \u06a9\u0644\u0627\u064b {stock} {unit} \u062f\u0631 \u0627\u0646\u0628\u0627\u0631 \u062f\u0627\u0631\u06cc\u0645. \u0627\u06af\u0631 \u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u06cc\u060c {missing} {unit} \u0628\u0647 \u0645\u0648\u062c\u0648\u062f\u06cc \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u0645 \u062a\u0627 \u0628\u062a\u0648\u0627\u0646\u06cc \u0628\u0641\u0631\u0648\u0634\u06cc.',
                  { need: p(u), stock: p(c), missing: p(s), unit: L, name: o },
                )
              : (0, n.L)(
                  '{need} {unit} \u0627\u0632 \xab{name}\xbb \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0631\u062f\u06cc\u060c \u0648\u0644\u06cc \u0686\u06cc\u0632\u06cc \u0627\u0632 \u0622\u0646 \u062f\u0631 \u0627\u0646\u0628\u0627\u0631 \u0646\u062f\u0627\u0631\u06cc\u0645. \u0627\u06af\u0631 \u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u06cc\u060c {missing} {unit} \u0628\u0647 \u0645\u0648\u062c\u0648\u062f\u06cc \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u0645 \u062a\u0627 \u0628\u062a\u0648\u0627\u0646\u06cc \u0628\u0641\u0631\u0648\u0634\u06cc.',
                  { need: p(u), missing: p(s), unit: L, name: o },
                );
        return f > 0
          ? b +
              (0, n.L)(
                ' \u0648 {n} \u06a9\u0627\u0644\u0627\u06cc \u062f\u06cc\u06af\u0631 \u0647\u0645 \u0647\u0645\u06cc\u0646\u200c\u0637\u0648\u0631.',
                { n: (0, t.formatGrouped)(f) },
              )
          : b;
      }),
      (e.receiveMissingLabel = function (o) {
        return 1 === o.length
          ? (0, n.L)(
              '{missing} {unit} \u0628\u0647 \u0645\u0648\u062c\u0648\u062f\u06cc \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646 \u0648 \u0628\u0641\u0631\u0648\u0634',
              {
                missing: (0, t.formatGrouped)(o[0].missing),
                unit: k(o[0].unit),
              },
            )
          : (0, n.L)(
              '\u06a9\u0633\u0631\u06cc\u200c\u0647\u0627 \u0631\u0627 \u0628\u0647 \u0645\u0648\u062c\u0648\u062f\u06cc \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646 \u0648 \u0628\u0641\u0631\u0648\u0634',
            );
      }),
      (e.shortageText = function ({ name: o, stock: u, unit: s }) {
        return (0, n.L)(
          '\u0645\u0648\u062c\u0648\u062f\u06cc \xab{name}\xbb \u06a9\u0627\u0641\u06cc \u0646\u06cc\u0633\u062a ({qty}). \u0627\u0648\u0644 \u0648\u0631\u0648\u062f \u06a9\u0627\u0644\u0627 \u0631\u0627 \u062b\u0628\u062a \u06a9\u0646.',
          {
            name: o,
            qty: `${(0, t.formatGrouped)(Math.max(0, Number(u) || 0))} ${c[s || 'piece'] || c.piece}`,
          },
        );
      }),
      (e.stockAmount = function (t, n) {
        return L(t) + ' ' + (c[n || 'piece'] || c.piece);
      }),
      (e.oversellQuestion = function (t, o = 'sell', u = !1) {
        const s = p(t, o);
        if (!u) return { ...s, fill: '', fillHint: '' };
        const l = 1 === t.length ? t[0] : null;
        return {
          ...s,
          ok:
            'save' === o
              ? (0, n.L)(
                  '\u062b\u0628\u062a \u06a9\u0646\u060c \u0645\u0646\u0641\u06cc \u0634\u0648\u062f',
                )
              : 'invoice' === o
                ? (0, n.L)(
                    '\u062b\u0628\u062a \u0641\u0627\u06a9\u062a\u0648\u0631\u060c \u0645\u0646\u0641\u06cc \u0634\u0648\u062f',
                  )
                : (0, n.L)(
                    '\u0628\u0641\u0631\u0648\u0634\u060c \u0645\u0646\u0641\u06cc \u0634\u0648\u062f',
                  ),
          fill:
            'save' === o
              ? (0, n.L)(
                  '\u062f\u0627\u0631\u0645\u0634\u061b \u0645\u0648\u062c\u0648\u062f\u06cc \u0631\u0627 \u062f\u0631\u0633\u062a \u06a9\u0646 \u0648 \u062b\u0628\u062a \u06a9\u0646',
                )
              : 'invoice' === o
                ? (0, n.L)(
                    '\u062f\u0627\u0631\u0645\u0634\u061b \u0645\u0648\u062c\u0648\u062f\u06cc \u0631\u0627 \u062f\u0631\u0633\u062a \u06a9\u0646 \u0648 \u062b\u0628\u062a \u0641\u0627\u06a9\u062a\u0648\u0631',
                  )
                : (0, n.L)(
                    '\u062f\u0627\u0631\u0645\u0634\u061b \u0645\u0648\u062c\u0648\u062f\u06cc \u0631\u0627 \u062f\u0631\u0633\u062a \u06a9\u0646 \u0648 \u0628\u0641\u0631\u0648\u0634',
                  ),
          fillHint: l
            ? (0, n.L)(
                '\u0627\u06af\u0631 \u0648\u0627\u0642\u0639\u0627\u064b \u062f\u0627\u0631\u06cc\u060c \xab\u062f\u0627\u0631\u0645\u0634\xbb \u0645\u0648\u062c\u0648\u062f\u06cc \xab{name}\xbb \u0631\u0627 \u0627\u0648\u0644 {stock} \u2190 {wanted} {unit} \u0627\u0635\u0644\u0627\u062d \u0645\u06cc\u200c\u06a9\u0646\u062f\u061b \u0628\u0639\u062f \u0627\u0632 \u062b\u0628\u062a \u06f0 \u0645\u06cc\u200c\u0645\u0627\u0646\u062f\u060c \u0645\u0646\u0641\u06cc \u0646\u0647.',
                {
                  name: l.name,
                  stock: L(l.stock),
                  wanted: L(l.wanted),
                  unit: ((f = l.unit), c[f || 'piece'] || c.piece),
                },
              )
            : (0, n.L)(
                '\u0627\u06af\u0631 \u0648\u0627\u0642\u0639\u0627\u064b \u062f\u0627\u0631\u06cc\u060c \xab\u062f\u0627\u0631\u0645\u0634\xbb \u0645\u0648\u062c\u0648\u062f\u06cc \u0647\u0631 \u06a9\u0627\u0644\u0627 \u0631\u0627 \u0627\u0648\u0644 \u0628\u0647 \u0627\u0646\u062f\u0627\u0632\u0647\u0654 \u0647\u0645\u06cc\u0646 \u062b\u0628\u062a \u0627\u0635\u0644\u0627\u062d \u0645\u06cc\u200c\u06a9\u0646\u062f\u061b \u0628\u0639\u062f \u0627\u0632 \u062b\u0628\u062a \u06f0 \u0645\u06cc\u200c\u0645\u0627\u0646\u062f\u060c \u0645\u0646\u0641\u06cc \u0646\u0647.',
              ),
        };
        var f;
      }),
      (e.fillAmounts = function (t) {
        return t
          .map((t) => ({
            productId: t.productId,
            name: t.name,
            unit: t.unit,
            from: t.stock,
            to: t.wanted,
            add: Math.round(1e3 * (t.wanted - t.stock)) / 1e3,
          }))
          .filter((t) => t.add > 0);
      }),
      (e.oversellFillText = function (o) {
        return (0, n.L)(
          '\u0627\u0635\u0644\u0627\u062d \u0645\u0648\u062c\u0648\u062f\u06cc: +{n}\u060c \u0647\u0646\u06af\u0627\u0645 \u0641\u0631\u0648\u0634',
          { n: (0, t.formatGrouped)(o) },
        );
      }),
      Object.defineProperty(e, 'OVERSELL_FORBID_HINT', {
        enumerable: !0,
        get: function () {
          return b;
        },
      }));
    var t = r(d[0]),
      n = r(d[1]);
    const o = ['ask', 'allow', 'forbid'];
    const u = ['sold', 'used', 'waste'],
      c = (0, n.localized)({
        piece: '\u0639\u062f\u062f',
        kg: '\u06a9\u06cc\u0644\u0648',
        g: '\u06af\u0631\u0645',
        l: '\u0644\u06cc\u062a\u0631',
        ml: '\u0645\u06cc\u0644\u06cc\u200c\u0644\u06cc\u062a\u0631',
        m: '\u0645\u062a\u0631',
        box: '\u0628\u0627\u06a9\u0633',
        carton: '\u06a9\u0627\u0631\u062a\u0646',
        pack: '\u0628\u0633\u062a\u0647',
        km: '\u06a9\u06cc\u0644\u0648\u0645\u062a\u0631',
        bag: '\u06a9\u06cc\u0633\u0647',
        sack: '\u06af\u0648\u0646\u06cc',
        roll: '\u0631\u0648\u0644',
        bottle: '\u0628\u0637\u0631\u06cc',
        can: '\u0642\u0648\u0637\u06cc',
        dozen: '\u062f\u0648\u062c\u06cc\u0646',
      }),
      s = (t) => Math.round(1e3 * t);
    const l = '\u0639\u062f\u0645 \u0645\u0648\u062c\u0648\u062f\u06cc';
    const f = '\u0645\u0646\u0641\u06cc';
    function L(n) {
      const o = Number(n);
      return Number.isFinite(o)
        ? o < 0
          ? (0, t.formatGrouped)(-o) + '\u2212'
          : (0, t.formatGrouped)(o)
        : (0, t.formatGrouped)(0);
    }
    const k = (t) =>
      t && 'piece' !== t ? c[t] || c.piece : (0, n.L)('\u062a\u0627');
    function p(o, u) {
      const s = (t) => c[t || 'piece'] || c.piece,
        l =
          'save' === u
            ? (0, n.L)(
                '\u0628\u0644\u0647\u060c \u062b\u0628\u062a \u06a9\u0646',
              )
            : 'invoice' === u
              ? (0, n.L)(
                  '\u0628\u0644\u0647\u060c \u062b\u0628\u062a \u0641\u0627\u06a9\u062a\u0648\u0631',
                )
              : (0, n.L)(
                  '\u0628\u0644\u0647\u060c \u0628\u0641\u0631\u0648\u0634',
                );
      if (1 === o.length) {
        const t = o[0],
          c = {
            name: t.name,
            stock: L(t.stock),
            wanted: L(t.wanted),
            unit: s(t.unit),
          };
        return {
          title: (0, n.L)(
            '\u0645\u0648\u062c\u0648\u062f\u06cc \u06a9\u0627\u0641\u06cc \u0646\u06cc\u0633\u062a',
          ),
          text:
            'save' === u
              ? (0, n.L)(
                  '\u0627\u0632 \xab{name}\xbb \u0641\u0642\u0637 {stock} {unit} \u062f\u0631 \u0627\u0646\u0628\u0627\u0631 \u062b\u0628\u062a \u0634\u062f\u0647\u060c \u0648\u0644\u06cc {wanted} {unit} \u06a9\u0645 \u0645\u06cc\u200c\u06a9\u0646\u06cc.',
                  c,
                )
              : (0, n.L)(
                  '\u0627\u0632 \xab{name}\xbb \u0641\u0642\u0637 {stock} {unit} \u062f\u0631 \u0627\u0646\u0628\u0627\u0631 \u062b\u0628\u062a \u0634\u062f\u0647\u060c \u0648\u0644\u06cc {wanted} {unit} \u0645\u06cc\u200c\u0641\u0631\u0648\u0634\u06cc.',
                  c,
                ),
          box:
            ('save' === u
              ? (0, n.L)(
                  '\u0627\u06af\u0631 \u062b\u0628\u062a \u06a9\u0646\u06cc\u060c \u0645\u0648\u062c\u0648\u062f\u06cc \u0645\u06cc\u200c\u0634\u0648\u062f {after} {unit}.',
                  { after: L(t.after), unit: s(t.unit) },
                )
              : (0, n.L)(
                  '\u0627\u06af\u0631 \u0628\u0641\u0631\u0648\u0634\u06cc\u060c \u0645\u0648\u062c\u0648\u062f\u06cc \u0645\u06cc\u200c\u0634\u0648\u062f {after} {unit}.',
                  { after: L(t.after), unit: s(t.unit) },
                )) +
            ' ' +
            (0, n.L)(
              '\u0647\u0631 \u0648\u0642\u062a \u062c\u0646\u0633 \u0631\u0633\u06cc\u062f\u060c \u0628\u0627 \xab\u0648\u0631\u0648\u062f \u06a9\u0627\u0644\u0627\xbb \u06cc\u0627 \xab\u0634\u0645\u0627\u0631\u0634\xbb \u062f\u0631\u0633\u062a \u0645\u06cc\u200c\u0634\u0648\u062f.',
            ),
          rows: [],
          ok: l,
          cancel: (0, n.L)('\u0627\u0646\u0635\u0631\u0627\u0641'),
        };
      }
      return {
        title: (0, n.L)(
          '{n} \u06a9\u0627\u0644\u0627 \u06a9\u0645 \u0627\u0633\u062a',
          { n: (0, t.formatGrouped)(o.length) },
        ),
        text:
          'invoice' === u
            ? (0, n.L)(
                '\u0627\u06cc\u0646 \u0641\u0627\u06a9\u062a\u0648\u0631 \u0627\u0632 \u0645\u0648\u062c\u0648\u062f\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0627\u0633\u062a:',
              )
            : (0, n.L)(
                '\u0627\u06cc\u0646 \u062b\u0628\u062a \u0627\u0632 \u0645\u0648\u062c\u0648\u062f\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0627\u0633\u062a:',
              ),
        box:
          'invoice' === u
            ? (0, n.L)(
                '\u0628\u0627 \u062b\u0628\u062a \u0641\u0627\u06a9\u062a\u0648\u0631\u060c \u0645\u0648\u062c\u0648\u062f\u06cc \u0627\u06cc\u0646\u200c\u0647\u0627 \u0645\u0646\u0641\u06cc \u0645\u06cc\u200c\u0634\u0648\u062f.',
              )
            : (0, n.L)(
                '\u0628\u0627 \u0627\u06cc\u0646 \u062b\u0628\u062a\u060c \u0645\u0648\u062c\u0648\u062f\u06cc \u0627\u06cc\u0646\u200c\u0647\u0627 \u0645\u0646\u0641\u06cc \u0645\u06cc\u200c\u0634\u0648\u062f.',
              ),
        rows: o.map((t) => ({
          name: t.name,
          amount: (0, n.L)('{wanted} \u0627\u0632 {stock}', {
            wanted: L(t.wanted),
            stock: L(t.stock),
          }),
          after: L(t.after),
        })),
        ok: l,
        cancel: (0, n.L)(
          '\u062a\u0639\u062f\u0627\u062f \u0631\u0627 \u062f\u0631\u0633\u062a \u0645\u06cc\u200c\u06a9\u0646\u0645',
        ),
      };
    }
    const b =
      '\u0635\u0627\u062d\u0628 \u06cc\u0627 \u0645\u062f\u06cc\u0631 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0627\u06cc\u0646 \u0631\u0627 \u062f\u0631 \xab\u067e\u0631\u0648\u0641\u0627\u06cc\u0644\xbb \u203a \xab\u0641\u0631\u0648\u0634 \u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 \u0645\u0648\u062c\u0648\u062f\u06cc\xbb \u0639\u0648\u0636 \u06a9\u0646\u062f.';
  },
  433,
  [434, 311],
);
