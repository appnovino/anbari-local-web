// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 432; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (_g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'UNITS', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      Object.defineProperty(e, 'CONTENT_UNITS', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      (e.isCountUnit = u),
      (e.validContent = function (n) {
        const { contentSize: c, contentUnit: l } = n;
        return (
          (void 0 === c && void 0 === l) ||
          (void 0 !== c &&
            void 0 !== l &&
            (0, t.validQuantity)(c) &&
            o.includes(l) &&
            u(n.unit || 'piece'))
        );
      }),
      (e.unitSwitchable = function (t, n) {
        return (
          !!t &&
          !!n &&
          'piece' === (t.unit || 'piece') &&
          c(n) &&
          !u(n) &&
          null == t.packSize &&
          null == t.packUnit &&
          'made' !== t.kind &&
          null == t.contentSize &&
          null == t.contentUnit
        );
      }),
      (e.isUnit = c),
      (e.fixedFactor = p),
      (e.convertFixed = function (n, o, u) {
        const c = p(o, u);
        if (!c) throw Error('invalid');
        if ('multiply' in c) return (0, t.convertPack)(n, c.multiply);
        if (!(0, t.validQuantity)(n)) throw Error('invalid');
        const l = Math.round((0, t.quantityScaled)(n) / c.divide);
        if (l < 1) throw Error('quantity_too_small');
        if (l > t.QUANTITY_MAX * t.SCALE) throw Error('invalid');
        return l / t.SCALE;
      }),
      Object.defineProperty(e, 'UNIT_GROUPS', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      (e.unitWheelRows = function (t) {
        return s
          .map((n) => ({
            ...n,
            units: n.units.filter((n) => !t || t.includes(n)),
          }))
          .filter((t) => t.units.length)
          .flatMap((t) => [
            { type: 'header', group: t.key },
            ...t.units.map((n) => ({ type: 'unit', unit: n, group: t.key })),
          ]);
      }),
      Object.defineProperty(e, 'COUNT_UNITS', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }),
      (e.unitCompatible = function (t, n) {
        const o = n.unit || 'piece';
        return (
          !t ||
          t === o ||
          (n.packUnit === t && void 0 !== n.packSize && null !== n.packSize) ||
          !!p(t, o)
        );
      }));
    var t = r(d[0]);
    const n = [
        'piece',
        'kg',
        'g',
        'l',
        'ml',
        'm',
        'box',
        'carton',
        'pack',
        'km',
        'bag',
        'sack',
        'roll',
        'bottle',
        'can',
        'dozen',
      ],
      o = ['l', 'ml', 'kg', 'g'];
    function u(t = 'piece') {
      return 'piece' === t || f.includes(t);
    }
    function c(t) {
      return 'string' == typeof t && n.includes(t);
    }
    const l = {
      km: { m: 1e3 },
      kg: { g: 1e3 },
      l: { ml: 1e3 },
      dozen: { piece: 12 },
    };
    function p(t, n) {
      const o = l[t]?.[n];
      if (o) return { multiply: o };
      const u = l[n]?.[t];
      return u ? { divide: u } : void 0;
    }
    const s = [
      {
        key: 'count',
        units: [
          'piece',
          'pack',
          'box',
          'carton',
          'bag',
          'sack',
          'roll',
          'bottle',
          'can',
          'dozen',
        ],
      },
      { key: 'weight', units: ['kg', 'g'] },
      { key: 'volume', units: ['l', 'ml'] },
      { key: 'length', units: ['m', 'km'] },
    ];
    const f = [
      'pack',
      'box',
      'carton',
      'bag',
      'sack',
      'roll',
      'bottle',
      'can',
      'dozen',
    ];
  },
  432,
  [431],
);
