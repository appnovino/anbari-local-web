// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 610; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.installIntlCache = p));
    const t = 64;
    function n(t, n) {
      if (void 0 !== n && (null === n || 'object' != typeof n)) return null;
      if (void 0 !== t && 'string' != typeof t && !Array.isArray(t))
        return null;
      try {
        return JSON.stringify([t ?? null, n ?? null]);
      } catch {
        return null;
      }
    }
    function o(n, o, l) {
      let u = n.map.get(o);
      return (
        void 0 === u &&
          ((u = l()), n.map.size >= t && n.map.clear(), n.map.set(o, u)),
        u
      );
    }
    const l = ['weekday', 'year', 'month', 'day'],
      u = ['dayPeriod', 'hour', 'minute', 'second', 'fractionalSecondDigits'];
    function c(t, n, o) {
      const c = { ...(t || {}) };
      if (void 0 !== c.dateStyle || void 0 !== c.timeStyle)
        return ('date' === n && void 0 !== c.timeStyle) ||
          ('time' === n && void 0 !== c.dateStyle)
          ? null
          : c;
      const s = (t) => t.some((t) => void 0 !== c[t]),
        p = 'date' === n ? !s(l) : !(('time' !== n && s(l)) || s(u));
      if (p && ('date' === o || 'all' === o))
        for (const t of ['year', 'month', 'day']) c[t] = 'numeric';
      if (p && ('time' === o || 'all' === o))
        for (const t of ['hour', 'minute', 'second']) c[t] = 'numeric';
      return c;
    }
    let s = !1;
    function p(t = !1) {
      if (s || 'undefined' == typeof Intl) return !1;
      if (!t && void 0 === globalThis.HermesInternal) return !1;
      s = !0;
      const l = { map: new Map() },
        u = { map: new Map() },
        p = { map: new Map() },
        f = Number.prototype.toLocaleString,
        y = String.prototype.localeCompare,
        h = Date.prototype.toLocaleString,
        S = Date.prototype.toLocaleDateString,
        b = Date.prototype.toLocaleTimeString;
      function v(t, l, s) {
        return function (p, f) {
          const y = this instanceof Date ? this.getTime() : NaN,
            h = Number.isFinite(y) ? n(p, f) : null;
          if (null !== h)
            try {
              return o(u, l + ':' + h, () => {
                const t = c(f, l, s);
                if (!t) throw Error('options');
                return new Intl.DateTimeFormat(p, t);
              }).format(y);
            } catch {}
          return t.call(this, p, f);
        };
      }
      const D = (t, n, o) =>
        Object.defineProperty(t, n, {
          value: o,
          writable: !0,
          configurable: !0,
          enumerable: !1,
        });
      return (
        D(Number.prototype, 'toLocaleString', function (t, u) {
          const c =
            'number' == typeof this || this instanceof Number ? n(t, u) : null;
          if (null !== c)
            try {
              return o(l, c, () => new Intl.NumberFormat(t, u)).format(
                Number(this),
              );
            } catch {}
          return f.call(this, t, u);
        }),
        D(Date.prototype, 'toLocaleString', v(h, 'any', 'all')),
        D(Date.prototype, 'toLocaleDateString', v(S, 'date', 'date')),
        D(Date.prototype, 'toLocaleTimeString', v(b, 'time', 'time')),
        D(String.prototype, 'localeCompare', function (t, l, u) {
          const c =
            'string' == typeof this || this instanceof String ? n(l, u) : null;
          if (null !== c)
            try {
              return o(p, c, () => new Intl.Collator(l, u)).compare(
                String(this),
                String(t),
              );
            } catch {}
          return y.call(this, t, l, u);
        }),
        !0
      );
    }
    p();
  },
  610,
  [],
);
