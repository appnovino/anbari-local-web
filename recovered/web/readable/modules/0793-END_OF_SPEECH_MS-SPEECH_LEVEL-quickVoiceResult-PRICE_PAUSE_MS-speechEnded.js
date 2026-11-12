// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 793; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'END_OF_SPEECH_MS', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      Object.defineProperty(e, 'SPEECH_LEVEL', {
        enumerable: !0,
        get: function () {
          return a;
        },
      }),
      (e.quickVoiceResult = f),
      Object.defineProperty(e, 'PRICE_PAUSE_MS', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }),
      (e.speechEnded = function ({
        heard: t,
        quietMs: n,
        text: c,
        products: o,
        endMs: u = l,
      }) {
        if (!t || n < u) return !1;
        const s = f(c, o);
        if (!s) return !1;
        return (
          !s.actions.some((t) => 'received' === t.kind && null == t.unitCost) ||
          n >= Math.max(u, p)
        );
      }));
    var t = r(d[0]),
      n = r(d[1]),
      c = r(d[2]),
      o = r(d[3]),
      u = r(d[4]),
      s = r(d[5]);
    const l = 650,
      a = 0.12;
    function f(l, a) {
      const f = String(l || '').trim();
      if (!f) return null;
      const p = a.filter((t) => !t.archivedAt);
      if (!p.length) return null;
      const E = (0, c.parseShopNote)(
        f,
        p.map((t) => t.name),
        {
          requireKnown: !0,
          units: Object.fromEntries(
            p.flatMap((t) =>
              t.unit ? [[(0, c.noteKey)(t.name), t.unit]] : [],
            ),
          ),
        },
      );
      if ('complete' !== E.status || !E.actions.length || E.actions.length > 20)
        return null;
      const _ = (0, u.applyDebtRule)(
        (0, s.applyTopicRule)(
          (0, o.validateVoiceResult)({
            transcript: f,
            clarification: '',
            actions: E.actions,
            toBuy: [],
            ledger: [],
          }),
          (0, t.clientClock)(),
        ),
      );
      return { ..._, actions: (0, n.linkActions)(_.actions, p) };
    }
    const p = 2e3;
  },
  793,
  [440, 452, 597, 465, 594, 593],
);
