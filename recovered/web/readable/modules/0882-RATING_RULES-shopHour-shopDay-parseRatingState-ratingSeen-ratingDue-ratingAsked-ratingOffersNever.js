// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 882; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'RATING_RULES', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      (e.shopHour = s),
      (e.shopDay = u),
      (e.parseRatingState = function (t) {
        try {
          const n = t ? JSON.parse(t) : null;
          if (n && 'object' == typeof n)
            return {
              ...(Number.isFinite(n.firstSeen)
                ? { firstSeen: Number(n.firstSeen) }
                : {}),
              asks: Array.isArray(n.asks)
                ? n.asks.map(Number).filter(Number.isFinite)
                : [],
              ...(!0 === n.never ? { never: !0 } : {}),
              ...(!0 === n.rated ? { rated: !0 } : {}),
            };
        } catch {}
        return { asks: [] };
      }),
      (e.ratingSeen = o),
      (e.ratingDue = function (n, { now: o, timezone: f, startedAt: c }) {
        const l = n || { asks: [] },
          y = t;
        if (l.rated || l.never) return !1;
        if (o - c < y.quietAfterStartMs) return !1;
        const h = u(f, o),
          d = l.firstSeen ?? o;
        if (h - u(f, d) < y.firstAfterDays) return !1;
        const D = l.asks.filter((t) => t <= o),
          b = D.length ? Math.max(...D) : void 0;
        if (void 0 !== b && h - u(f, b) < y.gapDays) return !1;
        if (D.filter((t) => o - t < 2592e6).length >= y.monthCap) return !1;
        const p = s(f, o);
        return (
          p >= y.eveningFrom ||
          p < y.nightUntil ||
          h - u(f, b ?? d) >= y.dayFallbackDays
        );
      }),
      (e.ratingAsked = function (t, n) {
        return {
          ...o(t, n),
          asks: [...t.asks.filter((t) => n - t < 5184e6 && t <= n), n],
        };
      }),
      (e.ratingOffersNever = function (t) {
        return t.asks.length >= 1;
      }));
    const t = {
        gapDays: 6,
        monthCap: 5,
        eveningFrom: 20,
        nightUntil: 2,
        quietAfterStartMs: 18e4,
        firstAfterDays: 2,
        dayFallbackDays: 12,
      },
      n = 864e5;
    function s(t, n) {
      try {
        const s = new Intl.DateTimeFormat('en-US', {
            timeZone: t || 'Asia/Tehran',
            hour: 'numeric',
            hourCycle: 'h23',
          })
            .formatToParts(n)
            .find((t) => 'hour' === t.type)?.value,
          u = Number(s);
        if (Number.isInteger(u)) return u % 24;
      } catch {}
      return new Date(n).getHours();
    }
    function u(t, s) {
      try {
        const u = new Intl.DateTimeFormat('en-CA', {
            timeZone: t || 'Asia/Tehran',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }).formatToParts(s),
          o = (t) => Number(u.find((n) => n.type === t)?.value),
          f = Date.UTC(o('year'), o('month') - 1, o('day')) / n;
        if (Number.isFinite(f)) return f;
      } catch {}
      const u = new Date(s);
      return Date.UTC(u.getFullYear(), u.getMonth(), u.getDate()) / n;
    }
    function o(t, n) {
      return void 0 === t.firstSeen ? { ...t, firstSeen: n } : t;
    }
  },
  882,
  [],
);
