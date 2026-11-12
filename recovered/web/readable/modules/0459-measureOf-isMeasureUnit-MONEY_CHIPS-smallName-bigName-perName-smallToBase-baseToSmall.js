// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 459; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, i, a, _m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.measureOf = u),
      Object.defineProperty(e, 'isMeasureUnit', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      Object.defineProperty(e, 'MONEY_CHIPS', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      Object.defineProperty(e, 'smallName', {
        enumerable: !0,
        get: function () {
          return b;
        },
      }),
      Object.defineProperty(e, 'bigName', {
        enumerable: !0,
        get: function () {
          return M;
        },
      }),
      Object.defineProperty(e, 'perName', {
        enumerable: !0,
        get: function () {
          return h;
        },
      }),
      (e.smallToBase = v),
      (e.baseToSmall = y),
      (e.parseSmall = P),
      (e.stepSmall = function (t, n, r) {
        return Math.max(0, (t || 0) + n * r.step);
      }),
      (e.measureText = $),
      (e.chipText = function (n, r) {
        return 2 * n === r.factor
          ? (0, t.L)('\u0646\u06cc\u0645 {unit}', { unit: M(r) })
          : $(v(n, r), r.base);
      }),
      (e.moneyChipText = function (n) {
        const o = (0, r.localAmount)(n);
        return o >= 1e6 && o % 1e6 == 0
          ? (0, t.L)('{n} \u0645\u06cc\u0644\u06cc\u0648\u0646', {
              n: p(o / 1e6),
            })
          : o % 1e3 == 0
            ? (0, t.L)('{n} \u0647\u0632\u0627\u0631', { n: p(o / 1e3) })
            : p(o, 0);
      }),
      (e.shownUnitPrice = N),
      (e.perText = L),
      (e.fromMoney = O),
      Object.defineProperty(e, 'MONEY_ROUNDING_MIN_SMALL', {
        enumerable: !0,
        get: function () {
          return G;
        },
      }),
      (e.isMoneyRounding = function (t, r, o, s) {
        const c = u(s);
        if (
          !(
            c &&
            t > 0 &&
            o > 0 &&
            r > 0 &&
            Number.isFinite(t * r) &&
            Number.isFinite(t * o)
          )
        )
          return !1;
        const l = t * c.factor;
        return (
          !(Math.abs(l - Math.round(l)) > 1e-6 || Math.round(l) < G) &&
          Math.abs((0, n.lineGross)(t, r) - t * o) <=
            o / c.factor / 2 + 1 + 1e-6
        );
      }),
      (e.moneyOf = S),
      (e.savedSaleText = function ({
        name: o,
        quantity: u,
        unit: s,
        unitPrice: c,
        stock: l,
      }) {
        const f = void 0 !== c ? (0, n.lineGross)(u, c) : void 0;
        return [
          `${o}: ${$(u, s)}`,
          ...(void 0 !== f ? [(0, r.money)(f, { full: !0, hint: !1 })] : []),
          (0, t.L)('\u0645\u0648\u062c\u0648\u062f\u06cc {n}', { n: $(l, s) }),
        ].join(' \xb7 ');
      }),
      (e.measureLine = function ({
        quantity: t,
        unit: o,
        unitPrice: s,
        total: c,
      }) {
        const l = $(t, o);
        if (null == s || !o || !u(o)) return l;
        const f = c ?? (0, n.lineGross)(Math.abs(t), s);
        return `${l} \xd7 ${L(s, o)} = ${p((0, r.localAmount)(Math.abs(f)), 0)}`;
      }),
      (e.measureTimes = function (t, n, r) {
        const o = $(t, n);
        return null != r && u(n) ? `${o} \xd7 ${L(r, n)}` : o;
      }),
      (e.weightBoxModel = function (t, n, r, o) {
        const s = u(t);
        if (!s) return;
        if ('money' === n) {
          const t = P(r),
            u = void 0 !== t ? O(t, o, s) : void 0;
          return {
            m: s,
            mode: n,
            small: u?.small,
            quantity: u?.quantity,
            unitPrice: u?.unitPrice,
            total: u?.total,
            said: t,
          };
        }
        const c = P(r),
          l = void 0 !== c ? v(c, s) : void 0,
          f = void 0 !== c ? S(c, o, s) : void 0;
        return {
          m: s,
          mode: n,
          small: c,
          quantity: void 0 !== l && l >= 0.001 ? l : void 0,
          unitPrice: void 0,
          total: f,
          said: void 0,
        };
      }));
    var t = _r(d[0]),
      n = _r(d[1]),
      r = _r(d[2]);
    const o = {
      kg: { base: 'kg', factor: 1e3, step: 50, chips: [250, 500, 750, 1e3] },
      l: { base: 'l', factor: 1e3, step: 50, chips: [250, 500, 1e3, 2e3] },
      m: { base: 'm', factor: 100, step: 10, chips: [50, 100, 150, 200] },
    };
    function u(t) {
      return t ? o[t] : void 0;
    }
    const s = (t) => !!u(t),
      c = [1e5, 2e5, 5e5, 1e6],
      l = {
        kg: '\u06af\u0631\u0645',
        l: '\u0645\u06cc\u0644\u06cc\u200c\u0644\u06cc\u062a\u0631',
        m: '\u0633\u0627\u0646\u062a',
      },
      f = {
        kg: '\u06a9\u06cc\u0644\u0648',
        l: '\u0644\u06cc\u062a\u0631',
        m: '\u0645\u062a\u0631',
      },
      m = {
        kg: '\u06a9\u06cc\u0644\u0648\u06cc\u06cc',
        l: '\u0644\u06cc\u062a\u0631\u06cc',
        m: '\u0645\u062a\u0631\u06cc',
      },
      b = (n) => (0, t.L)(l[n.base]),
      M = (n) => (0, t.L)(f[n.base]),
      h = (n) => (0, t.L)(m[n.base]),
      p = (n, r = 3) =>
        n.toLocaleString((0, t.numberLocale)(), {
          maximumFractionDigits: r,
          useGrouping: !0,
        });
    function v(t, n) {
      return Math.round((t / n.factor) * 1e3) / 1e3;
    }
    function y(t, n) {
      return Math.round(t * n.factor);
    }
    function P(n) {
      const r = (0, t.localDigits)(String(n ?? ''), 'en').replace(
        /[,\u066c\s]/g,
        '',
      );
      if (!/^\d+$/.test(r)) return;
      const o = Number(r);
      return o > 0 && Number.isSafeInteger(o) ? o : void 0;
    }
    function $(t, n) {
      const r = u(n);
      if (!r) return p(t);
      const o = t < 0 ? '\u2212' : '',
        s = Math.abs(t);
      return o + (s < 1 ? `${p(y(s, r), 0)} ${b(r)}` : `${p(s)} ${M(r)}`);
    }
    function N(t) {
      return Math.round(t);
    }
    function L(t, n) {
      const o = u(n),
        s = p(Math.round((0, r.localAmount)(N(t))), 0);
      return o ? `${h(o)} ${s}` : s;
    }
    function O(t, r, o) {
      if (!(t > 0 && Number.isFinite(t) && void 0 !== r && r > 0)) return;
      const u = Math.round(t),
        s = Math.round((u / r) * o.factor);
      if (s < 1) return;
      const c = v(s, o);
      if (!(c >= 0.001)) return;
      if ((0, n.lineGross)(c, r) === u)
        return { small: s, quantity: c, unitPrice: r, total: u };
      const l = Math.round((u / c) * 100) / 100;
      return (0, n.lineGross)(c, l) === u
        ? { small: s, quantity: c, unitPrice: l, total: u }
        : {
            small: s,
            quantity: c,
            unitPrice: l,
            total: (0, n.lineGross)(c, l),
          };
    }
    const G = 10;
    function S(t, r, o) {
      return void 0 !== r && r > 0 && t > 0
        ? (0, n.lineGross)(v(t, o), r)
        : void 0;
    }
  },
  459,
  [311, 460, 435],
);
