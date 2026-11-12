// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 779; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.oversellMark = function (e) {
        return 'fill' === e
          ? { allowNegative: !0, fillShortage: !0 }
          : e
            ? { allowNegative: !0 }
            : {};
      }),
      Object.defineProperty(_e, 'OversellCancelled', {
        enumerable: !0,
        get: function () {
          return e;
        },
      }),
      Object.defineProperty(_e, 'isOversellCancel', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      (_e.oversellLines = l),
      (_e.setOversellFill = function (e) {
        s = e;
      }),
      (_e.setOversellHost = function (e) {
        return (
          (t = e),
          () => {
            t === e && (t = null);
          }
        );
      }),
      (_e.askOversell = o),
      (_e.withOversell = async function (
        n,
        { verb: t = 'sell', known: c, mode: u = 'ask', fill: f = s } = {},
      ) {
        if (c?.length && 'ask' === u) {
          const l = o(c, t, f);
          if (l) {
            const t = await l;
            if (!t) throw new e();
            return n(t);
          }
        }
        try {
          return await n(!1);
        } catch (s) {
          const c = l(s);
          if (!c) throw s;
          const u = o(c, t, f);
          if (!u) throw s;
          const v = await u;
          if (!v) throw new e();
          return n(v);
        }
      }));
    class e extends Error {
      constructor() {
        super('oversell_cancelled');
      }
    }
    const n = (e) => e instanceof Error && 'oversell_cancelled' === e.message;
    function l(e) {
      const n =
        e instanceof Error && 'insufficient_stock' === e.message
          ? e.details
          : void 0;
      return n &&
        'ask' === n.oversell &&
        Array.isArray(n.lines) &&
        n.lines.length
        ? n.lines
        : null;
    }
    let t = null,
      s = !1;
    function o(e, n = 'sell', l = s) {
      const o = t;
      return o
        ? new Promise((t) => o({ lines: e, verb: n, fill: l, answer: t }))
        : null;
    }
  },
  779,
  [],
);
