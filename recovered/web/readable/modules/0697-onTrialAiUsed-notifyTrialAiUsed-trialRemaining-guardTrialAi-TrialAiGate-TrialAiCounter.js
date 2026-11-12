// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 697; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.onTrialAiUsed = function (n) {
        return (
          c.add(n),
          () => {
            c.delete(n);
          }
        );
      }),
      (e.notifyTrialAiUsed = function (n) {
        'trial_ai_used' === n && c.forEach((n) => n());
      }),
      (e.trialRemaining = u),
      (e.guardTrialAi = f),
      (e.TrialAiGate = function ({ allowance: t, onBlocked: o, children: l }) {
        const s = l.props.onPress;
        return (0, n.cloneElement)(l, { onPress: () => f(t, o, () => s?.()) });
      }),
      (e.TrialAiCounter = function ({ allowance: n }) {
        const { colors: c } = (0, o.useTheme)(),
          f = u(n);
        return f.trial
          ? (0, s.jsx)(t.Copy, {
              style: { fontSize: 11, color: f.remaining ? c.muted : c.danger },
              children: l.notebookFa.trialRemaining(f.remaining, f.total),
            })
          : null;
      }));
    var n = r(d[0]),
      t = r(d[1]),
      o = r(d[2]),
      l = r(d[3]),
      s = r(d[4]);
    const c = new Set();
    function u(n) {
      const t = n?.aiTotal ?? n?.limit ?? 10,
        o = n?.aiUsed ?? n?.used ?? 0;
      return {
        total: t,
        used: o,
        remaining: Math.max(0, t - o),
        trial: !!n?.isTrial || !!n?.trialEndsAt,
      };
    }
    function f(n, t, o) {
      const l = u(n);
      if (!l.trial || 0 !== l.remaining) return o();
      t();
    }
  },
  697,
  [2, 407, 382, 580, 338],
);
