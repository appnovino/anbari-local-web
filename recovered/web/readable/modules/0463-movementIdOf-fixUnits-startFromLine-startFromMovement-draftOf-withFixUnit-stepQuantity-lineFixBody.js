// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 463; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, _m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.movementIdOf = c),
      (e.fixUnits = d),
      (e.startFromLine = function (t, n, m, l) {
        const p = c(t.activityId);
        if (!(p && o.includes(n) && Number(t.quantity) > 0)) return null;
        const v = n,
          f = Number(t.quantity),
          y = l?.unit || 'piece',
          b = u(t.unit) ? t.unit : y,
          h =
            ('sold' !== v && 'received' !== v) ||
            void 0 === t.amount ||
            !Number.isFinite(Number(t.amount))
              ? void 0
              : s(Number(t.amount) / f, 2);
        return {
          movementId: p,
          kind: v,
          name: t.name,
          quantity: f,
          unit: b,
          baseUnit: y,
          units: d(l, b),
          ...(void 0 !== h ? { price: h } : {}),
          at: m,
        };
      }),
      (e.startFromMovement = function (t, n) {
        if (!o.includes(t.kind)) return null;
        const u = t.kind,
          c = t.enteredQuantity ?? t.quantity,
          m = n?.unit || 'piece',
          l = t.enteredUnit || m,
          p =
            'sold' === u
              ? (t.revenueTotal ??
                (void 0 !== t.unitPrice ? t.unitPrice * t.quantity : void 0))
              : 'received' === u
                ? (t.costTotal ??
                  (void 0 !== t.unitCost ? t.unitCost * t.quantity : void 0))
                : void 0;
        return c > 0
          ? {
              movementId: t.id,
              kind: u,
              name: t.name,
              quantity: c,
              unit: l,
              baseUnit: m,
              units: d(n, l),
              ...(void 0 !== p ? { price: s(p / c, 2) } : {}),
              at: t.timestamp || new Date().toISOString(),
            }
          : null;
      }),
      (e.draftOf = function (t) {
        return {
          name: t.name,
          quantity: String(t.quantity),
          unit: t.unit,
          price: void 0 === t.price ? '' : String(t.price),
          at: t.at,
        };
      }),
      (e.withFixUnit = function (t, u, o, c) {
        if (u === t.unit) return t;
        const d = c?.unit || 'piece',
          s = l(t.price),
          m =
            'sold' === o && c && t.unit === d && Number.isFinite(s)
              ? (0, n.priceChoiceOf)(c, s)
              : null;
        return m && !m.typed && m.current
          ? { ...t, unit: u, price: '' }
          : { ...t, unit: u };
      }),
      (e.stepQuantity = function (t, n) {
        const u = l(t),
          o = Number.isFinite(u) ? u : 0,
          c = s(o + n, 3);
        return String(c >= 1 ? c : o >= 1 ? o : 1);
      }),
      (e.lineFixBody = function (t, n) {
        const u = n.name.trim(),
          o = l(n.quantity),
          c = void 0 === t.price ? void 0 : l(n.price);
        if (
          !u ||
          u.length > 100 ||
          !(o > 0) ||
          Math.abs(1e3 * o - Math.round(1e3 * o)) > 1e-7 ||
          (void 0 !== c && !(c >= 0))
        )
          return 'invalid';
        const d = u !== t.name.trim(),
          s = o !== t.quantity || n.unit !== t.unit,
          m = void 0 !== c && c !== t.price,
          p = !!n.at && n.at !== t.at;
        if (!(d || s || m || p)) return null;
        const v = n.unit !== t.baseUnit;
        return {
          quantity: o,
          ...(d ? { name: u } : {}),
          ...(v ? { unit: n.unit } : {}),
          ...(m
            ? {
                ['sold' === t.kind ? 'unitPrice' : 'unitCost']: c,
                ...(v ? { pricesInEnteredUnit: !0 } : {}),
              }
            : {}),
          ...(p ? { timestamp: n.at } : {}),
        };
      }),
      (e.fixTrail = function (t) {
        const n = new Set(
            t
              .filter(
                (t) =>
                  'correction' === t.source &&
                  !t.correctsMovementId &&
                  t.recordedAt,
              )
              .map((t) => t.recordedAt),
          ),
          u = new Map();
        for (const o of t)
          o.correctsMovementId &&
            u.set(
              o.correctsMovementId,
              o.recordedAt && n.has(o.recordedAt) ? 'edited' : 'removed',
            );
        return u;
      }));
    var t = r(_d[0]),
      n = r(_d[1]);
    const u = (n) => 'string' == typeof n && t.UNITS.includes(n),
      o = ['received', 'sold', 'used', 'waste'];
    function c(t) {
      return t && t.startsWith('mv:') && t.length > 3 ? t.slice(3) : void 0;
    }
    function d(n, u) {
      const o = n?.unit || 'piece',
        c = [o];
      n?.packUnit && n.packSize && c.push(n.packUnit);
      for (const n of t.UNITS)
        n !== o &&
          'dozen' !== n &&
          'dozen' !== o &&
          (0, t.fixedFactor)(n, o) &&
          c.push(n);
      return (u && !c.includes(u) && c.push(u), [...new Set(c)]);
    }
    const s = (t, n) => {
      const u = 10 ** n;
      return Math.round(t * u) / u;
    };
    const m = (t) =>
        t
          .replace(/[\u06f0-\u06f9]/g, (t) =>
            String(
              '\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9'.indexOf(
                t,
              ),
            ),
          )
          .replace(/[\u0660-\u0669]/g, (t) =>
            String(
              '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669'.indexOf(
                t,
              ),
            ),
          )
          .replace(/[\u066b/]/g, '.')
          .replace(/[\u066c,\s]/g, ''),
      l = (t) => {
        const n = m(t);
        return /^\d+(?:\.\d+)?$/.test(n) ? Number(n) : NaN;
      };
  },
  463,
  [432, 464],
);
