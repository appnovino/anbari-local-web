// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 578; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'CURRENCIES', {
        enumerable: !0,
        get: function () {
          return u.CURRENCIES;
        },
      }),
      (_e.CurrencyProvider = function ({ children: e }) {
        const [n, c] = (0, t.useState)((0, u.chosenCurrency)()),
          [v, w] = (0, t.useState)((0, u.usdHintsOn)()),
          [x, O] = (0, t.useState)(!0),
          [I, H] = (0, t.useState)((0, u.moneyUnit)()),
          [P, E] = (0, t.useState)(0),
          [R, _] = (0, t.useState)(null);
        return (
          (0, t.useEffect)(() => {}, []),
          (0, t.useEffect)(() => {
            let t = !0;
            async function e() {
              const e = !!b(C(l))?.latest,
                n = await U();
              t &&
                n &&
                ((0, u.setFx)(n),
                S(l, JSON.stringify(n)),
                _(n.updatedAt || null),
                e || 'IRT' === (0, u.currency)() || E((t) => t + 1));
            }
            e();
            const n = setInterval(() => {
              e();
            }, h);
            return () => {
              ((t = !1), clearInterval(n));
            };
          }, []),
          x
            ? (0, s.jsx)(p.Provider, {
                value: {
                  currency: (0, u.currency)(),
                  chosen: n,
                  setChoice: function (t) {
                    if (t === n) return;
                    ((0, u.setCurrency)(t), c(t), S(o, t), E((t) => t + 1));
                  },
                  updatedAt: R,
                  usdHints: v,
                  setUsdHintsOn: function (t) {
                    ((0, u.setUsdHints)(t), w(t), S(f, t ? '1' : '0'));
                  },
                  unit: I,
                  setShopUnit: function (t) {
                    if (t === (0, u.moneyUnit)()) return;
                    ((0, u.setMoneyUnit)(t), H(t), S(y, t));
                  },
                },
                children: (0, s.jsx)(j, { children: e }, P),
              })
            : null
        );
      }),
      Object.defineProperty(_e, 'useCurrency', {
        enumerable: !0,
        get: function () {
          return v;
        },
      }),
      Object.defineProperty(_e, 'returnToProfile', {
        enumerable: !0,
        get: function () {
          return x;
        },
      }));
    var t = r(d[0]);
    r(d[1]);
    var e,
      n = r(d[2]),
      u = ((e = n) && e.__esModule, r(d[3])),
      c = r(d[4]),
      s = r(d[5]);
    const o = 'anbari.currency',
      l = 'anbari.fx',
      f = 'anbari.usd-hint',
      y = 'anbari.money-unit',
      h = 18e5;
    function C(t) {
      try {
        return 'undefined' != typeof window
          ? window.localStorage.getItem(t)
          : null;
      } catch {
        return null;
      }
    }
    function S(t, e) {
      try {
        window.localStorage.setItem(t, e);
      } catch {}
    }
    function b(t) {
      try {
        const e = t ? JSON.parse(t) : null;
        return e && 'object' == typeof e ? e : null;
      } catch {
        return null;
      }
    }
    {
      const t = C(o);
      ((0, u.isCurrency)(t) && (0, u.setCurrency)(t),
        (0, u.setFx)(b(C(l))),
        (0, u.setUsdHints)('1' === C(f)),
        'rial' === C(y) && (0, u.setMoneyUnit)('rial'));
    }
    async function U() {
      try {
        const t = await fetch((0, c.baseUrl)() + '/v1/fx');
        if (!t.ok) return null;
        const e = await t.json();
        return e?.latest ? e : null;
      } catch {
        return null;
      }
    }
    const p = (0, t.createContext)({
      currency: 'IRT',
      chosen: null,
      setChoice: () => {},
      updatedAt: null,
      usdHints: !0,
      setUsdHintsOn: () => {},
      unit: 'toman',
      setShopUnit: () => {},
    });
    function j({ children: t }) {
      return (0, s.jsx)(s.Fragment, { children: t });
    }
    const v = () => (0, t.useContext)(p);
    let w = !1;
    const x = {
      set() {
        w = !0;
      },
      take() {
        const t = w;
        return ((w = !1), t);
      },
    };
  },
  578,
  [2, 94, 258, 435, 415, 338],
);
