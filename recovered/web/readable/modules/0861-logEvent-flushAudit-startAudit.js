// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 861; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.logEvent = async function (t, e, n = 0, o) {
        if (c.activeShop) return;
        (await S(),
          s.push({
            event: t,
            source: e,
            count: n,
            actions: o,
            clientTime: new Date().toISOString(),
            eventId:
              'event-' +
              Date.now().toString(36) +
              '-' +
              Math.random().toString(36).slice(2),
          }),
          await y(),
          p());
      }),
      (_e.flushAudit = p),
      (_e.startAudit = function () {
        f ||
          ((f = !0),
          p(),
          setInterval(() => {
            p();
          }, 15e3));
      }));
    var t,
      e = r(d[0]),
      n = (t = e) && t.__esModule ? t : { default: t },
      o = r(d[1]),
      c = r(d[2]);
    let u,
      s = [],
      f = !1,
      l = !1,
      h = Promise.resolve();
    const v = 'anbar.audit-outbox';
    function S() {
      return (u ??= n.default
        .getItem(v)
        .then((t) => {
          if (t) {
            const e = JSON.parse(t);
            Array.isArray(e) && (s = e);
          }
        })
        .catch(() => {}));
    }
    function y() {
      const t = JSON.stringify(s);
      return ((h = h.catch(() => {}).then(() => n.default.setItem(v, t))), h);
    }
    async function p() {
      if (!c.activeShop && (await S(), !l)) {
        l = !0;
        try {
          for (; s.length; )
            (await (0, o.apiRequest)(
              '/api/events',
              s[0],
              AbortSignal.timeout(1e4),
            ),
              s.shift(),
              await y());
        } catch {
        } finally {
          l = !1;
        }
      }
    }
  },
  861,
  [258, 592, 415],
);
