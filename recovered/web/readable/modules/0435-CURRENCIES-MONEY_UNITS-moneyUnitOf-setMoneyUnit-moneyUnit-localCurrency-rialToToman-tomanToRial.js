// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 435; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'CURRENCIES', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      Object.defineProperty(e, 'MONEY_UNITS', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      (e.moneyUnitOf = function (n) {
        return 'rial' === (n && 'object' == typeof n ? n.moneyUnit : void 0)
          ? 'rial'
          : 'toman';
      }),
      (e.setMoneyUnit = function (n) {
        o = 'rial' === n ? 'rial' : 'toman';
      }),
      (e.moneyUnit = function () {
        return o;
      }),
      (e.localCurrency = s),
      (e.rialToToman = f),
      (e.tomanToRial = l),
      (e.tomanWord = function () {
        return 'rial' === o
          ? (0, n.L)('\u0631\u06cc\u0627\u0644')
          : (0, n.L)('\u062a\u0648\u0645\u0627\u0646');
      }),
      (e.localAmount = function (n) {
        return 'rial' === o ? l(n) : n;
      }),
      (e.shopUnitText = function (t) {
        return 'rial' === o
          ? t.replace(
              /\u062a\u0648\u0645\u0627\u0646|\btomans?\b/gi,
              (0, n.L)('\u0631\u06cc\u0627\u0644'),
            )
          : t;
      }),
      Object.defineProperty(e, 'isCurrency', {
        enumerable: !0,
        get: function () {
          return R;
        },
      }),
      (e.setCurrency = function (n) {
        b = n;
      }),
      (e.chosenCurrency = function () {
        return b;
      }),
      (e.defaultCurrency = L),
      (e.currency = I),
      (e.setFx = function (n) {
        ((h = n?.latest && n.latest.USD > 0 ? n.latest : null),
          (d = n?.history || {}),
          (y = Object.keys(d)
            .filter((n) => /^\d{4}-\d\d-\d\d$/.test(n))
            .sort()));
      }),
      (e.fxLatest = function () {
        return h;
      }),
      (e.rateOn = N),
      (e.convertToman = p),
      (e.shownCurrency = D),
      (e.moneyDecimals = function () {
        return !c(D());
      }),
      (e.fullToman = function (n) {
        const t = s();
        return v(p(n, t) ?? n, t);
      }),
      (e.currencyUnit = C),
      Object.defineProperty(e, 'currencyNames', {
        enumerable: !0,
        get: function () {
          return P;
        },
      }),
      (e.moneyNumber = $),
      (e.moneyParts = function (t, u) {
        const o = D(),
          c = $(t, u),
          s = C(o);
        for (const t of [
          (0, n.L)('\u0645\u06cc\u0644\u06cc\u0627\u0631\u062f'),
          (0, n.L)('\u0645\u06cc\u0644\u06cc\u0648\u0646'),
          (0, n.L)('\u0647\u0632\u0627\u0631'),
        ])
          if (c.endsWith(' ' + t))
            return { value: c.slice(0, -t.length - 1), unit: t + ' ' + s };
        return { value: c, unit: s };
      }),
      (e.setUsdHints = function (n) {
        x = n;
      }),
      (e.usdHintsOn = function () {
        return x;
      }),
      (e.usdHint = E),
      (e.money = _),
      (e.planCurrency = w),
      (e.planMoney = function (n, t = {}) {
        return _(n, { ...t, plan: !0 });
      }),
      (e.inputToToman = function (n) {
        const t = D();
        if (!Number.isFinite(n)) return n;
        if ('IRT' === t) return n;
        if ('IRR' === t) return f(n);
        const u = N(t);
        return u ? Math.round(n * u) : n;
      }),
      (e.tomanToInput = function (n) {
        const t = D();
        if (!Number.isFinite(n) || 'IRT' === t) return n;
        if ('IRR' === t) return l(n);
        const u = p(n, t);
        return null === u ? n : F(u, 2);
      }),
      (e.swapUnit = function (n) {
        const t = D();
        return 'IRT' === t
          ? n
          : n.replace(/\u062a\u0648\u0645\u0627\u0646|\btomans?\b/gi, C(t));
      }),
      (e.displayAmount = W),
      (e.displayParts = function (t) {
        const u = D(),
          o = O(Number(t) || 0, u),
          c = C(u);
        for (const t of [
          (0, n.L)('\u0645\u06cc\u0644\u06cc\u0627\u0631\u062f'),
          (0, n.L)('\u0645\u06cc\u0644\u06cc\u0648\u0646'),
          (0, n.L)('\u0647\u0632\u0627\u0631'),
        ])
          if (o.endsWith(' ' + t))
            return { value: o.slice(0, -t.length - 1), unit: t + ' ' + c };
        return { value: o, unit: c };
      }),
      (e.shortDisplayParts = H),
      (e.shortParts = function (n, t) {
        return H(W(Number(n) || 0, t));
      }),
      (e.moneyShort = function (t, u) {
        const o = D(),
          s = p(Number(t) || 0, o, u) ?? 0;
        if (!c(o)) return j(A(O(s, o), o));
        const f = s < 0 ? '-' : '',
          l = Math.abs(s);
        let b;
        if (l >= 1e6) {
          const t = l >= 1e9 ? 1e9 : 1e6;
          b =
            (Math.trunc(l / (t / 10)) / 10).toLocaleString(
              (0, n.numberLocale)(),
              { minimumFractionDigits: 1, maximumFractionDigits: 1 },
            ) +
            ' ' +
            (0, n.L)(
              1e9 === t
                ? '\u0645\u06cc\u0644\u06cc\u0627\u0631\u062f'
                : '\u0645\u06cc\u0644\u06cc\u0648\u0646',
            );
        } else if (l >= 1e3) {
          const t = l / 1e3;
          b =
            (t >= 100 || Number.isInteger(t)
              ? U(Math.trunc(t), 0)
              : U(Math.trunc(10 * t) / 10, 1)) +
            ' ' +
            (0, n.L)('\u0647\u0632\u0627\u0631');
        } else b = U(Math.trunc(l), 0);
        return f + b + ' ' + C(o);
      }),
      (e.shortToman = k),
      (e.shortMoney = function (n) {
        const t = D();
        return c(t) ? k(p(n, t) ?? n) : $(n);
      }));
    var n = r(_d[0]);
    const t = ['IRT', 'USD', 'AED'],
      u = ['toman', 'rial'];
    let o = 'toman';
    const c = (n) => 'IRT' === n || 'IRR' === n;
    function s() {
      return 'rial' === o ? 'IRR' : 'IRT';
    }
    function f(n) {
      return Number.isFinite(n) ? Math.round(n / 10) : n;
    }
    function l(n) {
      return Number.isFinite(n) ? Math.round(10 * n * 1e3) / 1e3 : n;
    }
    let b = null,
      h = null,
      y = [],
      d = {};
    const R = (n) => t.includes(n);
    function L(t = (0, n.localeLang)()) {
      return 'fa' === t ? 'IRT' : 'USD';
    }
    function I() {
      const n = b ?? L();
      return 'IRT' === n ? s() : n;
    }
    let T = null;
    function M(n) {
      if (!n) return '';
      if ('string' == typeof n && /^\d{4}-\d\d-\d\d/.test(n) && 10 === n.length)
        return n;
      const t = n instanceof Date ? n : new Date(n);
      if (!Number.isFinite(t.getTime())) return '';
      try {
        return (
          (T ??= new Intl.DateTimeFormat('en-CA', {
            timeZone: 'Asia/Tehran',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })),
          T.format(t)
        );
      } catch {
        return t.toISOString().slice(0, 10);
      }
    }
    function N(n, t) {
      const u = M(t);
      if (u && y.length) {
        let t = '';
        for (const n of y) {
          if (!(n <= u)) break;
          t = n;
        }
        t || (t = y[0]);
        const o = d[t]?.[n];
        if (o && o > 0) return o;
      }
      return h?.[n] || null;
    }
    function p(n, t = I(), u) {
      if (!Number.isFinite(n)) return null;
      if ('IRT' === t) return n;
      if ('IRR' === t) return l(n);
      const o = N(t, u);
      return o ? n / o : null;
    }
    function D(n = I()) {
      return c(n) || h ? n : s();
    }
    const U = (t, u) =>
        t.toLocaleString((0, n.numberLocale)(), {
          maximumFractionDigits: u,
          minimumFractionDigits: 0,
        }),
      S = (n) => (Math.abs(n) >= 100 ? 0 : 2),
      F = (n, t = 0) => {
        const [u, o = '0'] = String(n).split('e');
        return Math.trunc(Number(u + 'e' + (Number(o) + t))) / 10 ** t;
      };
    function O(t, u) {
      const o = t < 0 ? '-' : '',
        s = Math.abs(t);
      if (c(u)) {
        if (s < 1e6) return o + U(Math.trunc(s), 0);
        const t = s >= 1e9 ? 1e9 : 1e6,
          u = t / 1e3,
          c = Math.trunc(s / t),
          f = Math.trunc((s % t) / u);
        return (
          o +
          U(c, 0) +
          ' ' +
          (0, n.L)(
            1e9 === t
              ? '\u0645\u06cc\u0644\u06cc\u0627\u0631\u062f'
              : '\u0645\u06cc\u0644\u06cc\u0648\u0646',
          ) +
          (f
            ? ' ' +
              (0, n.L)('\u0648') +
              ' ' +
              U(f, 0) +
              ' ' +
              (0, n.L)(
                1e9 === t
                  ? '\u0645\u06cc\u0644\u06cc\u0648\u0646'
                  : '\u0647\u0632\u0627\u0631',
              )
            : '')
        );
      }
      if (s < 1e6) return o + U(F(s, S(s)), S(s));
      const f = s >= 1e9 ? 1e9 : 1e6;
      return (
        o +
        U(Math.trunc(s / (f / 10)) / 10, 1) +
        ' ' +
        (0, n.L)(
          1e9 === f
            ? '\u0645\u06cc\u0644\u06cc\u0627\u0631\u062f'
            : '\u0645\u06cc\u0644\u06cc\u0648\u0646',
        )
      );
    }
    function v(n, t) {
      return U(F(n, c(t) ? 0 : S(n)), c(t) ? 0 : S(n));
    }
    function C(t = D()) {
      return 'IRT' === t
        ? (0, n.L)('\u062a\u0648\u0645\u0627\u0646')
        : 'IRR' === t
          ? (0, n.L)('\u0631\u06cc\u0627\u0644')
          : 'USD' === t
            ? 'en' === (0, n.localeLang)()
              ? '$'
              : (0, n.L)('\u062f\u0644\u0627\u0631')
            : (0, n.L)('\u062f\u0631\u0647\u0645');
    }
    const P = {
        IRT: '\u062a\u0648\u0645\u0627\u0646',
        IRR: '\u0631\u06cc\u0627\u0644',
        USD: '\u062f\u0644\u0627\u0631',
        AED: '\u062f\u0631\u0647\u0645',
      },
      j = (n) => '\u2068' + n + '\u2069';
    function A(t, u) {
      return 'USD' === u && 'en' === (0, n.localeLang)()
        ? t.startsWith('-')
          ? '-$' + t.slice(1)
          : '$' + t
        : t + ' ' + C(u);
    }
    function $(n, t) {
      const u = D();
      return O(p(Number(n) || 0, u, t) ?? 0, u);
    }
    let x = !1;
    function E(t, u) {
      const o = Number(t);
      if (!(x && c(D()) && o && Number.isFinite(o))) return '';
      const s = p(o, 'USD', u);
      if (null === s) return '';
      const f = A(O(s, 'USD'), 'USD');
      return '\u2248 ' + ('en' === (0, n.localeLang)() ? j(f) : f);
    }
    function _(n, { day: t, full: u = !1, hint: o = !0, plan: s = !1 } = {}) {
      const f = s ? w() : D(),
        l = Number(n) || 0,
        b = p(l, f, t) ?? 0,
        h = A(u ? v(b, f) : O(b, f), f),
        y = c(f) ? h : j(h),
        d = o ? E(l, t) : '';
      return d ? `${y}\u060c ${d}` : y;
    }
    function w() {
      const n = D();
      return 'IRR' === n ? 'IRT' : n;
    }
    function W(n, t) {
      return p(Number(n) || 0, D(), t) ?? 0;
    }
    function H(t) {
      const u = D(),
        o = Number(t) || 0,
        s = o < 0 ? '-' : '',
        f = Math.abs(o),
        l = C(u);
      if (!c(u) || f < 1e6) return { value: O(o, u), unit: l };
      const b = f >= 1e9 ? 1e9 : 1e6,
        h = Math.trunc(f / (b / 10)) / 10;
      return {
        value: s + U(h, 1),
        unit:
          (0, n.L)(
            1e9 === b
              ? '\u0645\u06cc\u0644\u06cc\u0627\u0631\u062f'
              : '\u0645\u06cc\u0644\u06cc\u0648\u0646',
          ) +
          ' ' +
          l,
      };
    }
    function k(t) {
      if (!Number.isFinite(t)) return U(0, 0);
      const u = t < 0 ? '-' : '',
        o = Math.abs(t);
      if (o < 1e3) return u + U(Math.trunc(o), 0);
      const c = o >= 1e9 ? 1e9 : o >= 1e6 ? 1e6 : 1e3,
        s = 1e3 === c ? 1 : 3;
      return (
        u +
        U(Math.trunc(o / (c / 10 ** s)) / 10 ** s, s) +
        ' ' +
        (0, n.L)(
          1e9 === c
            ? '\u0645\u06cc\u0644\u06cc\u0627\u0631\u062f'
            : 1e6 === c
              ? '\u0645\u06cc\u0644\u06cc\u0648\u0646'
              : '\u0647\u0632\u0627\u0631',
        )
      );
    }
  },
  435,
  [311],
);
