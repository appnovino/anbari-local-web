// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 968; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.ClubRewardRow = function ({
        rewards: e,
        points: f,
        base: b,
        picked: w,
        off: y,
        onPick: h,
        minus: p,
      }) {
        const { colors: x } = (0, c.useTheme)(),
          { ready: C, next: _ } = (0, o.rewardChoices)(e, f, b),
          j = e.find(
            (e) =>
              e.minToman &&
              'club_reward_min_total' === (0, o.rewardRefusal)(e, f, b) &&
              b > 0,
          );
        return C.length || _ || j
          ? (0, u.jsxs)(t.default, {
              testID: 'basket-club-rewards',
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 6,
              },
              children: [
                (0, u.jsx)(s.Icon, { name: 'gift', size: 16, color: x.accent }),
                (0, u.jsxs)(t.default, {
                  style: {
                    flex: 1,
                    minWidth: 0,
                    flexDirection: 'row-reverse',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: 6,
                  },
                  children: [
                    C.map((e) => {
                      const t = e.id === w;
                      return (0, u.jsx)(
                        r.default,
                        {
                          testID: 'basket-club-reward-' + e.id,
                          accessibilityRole: 'switch',
                          accessibilityState: { checked: t },
                          accessibilityLabel: (0, l.rewardSentence)(e),
                          onPress: () => h(t ? '' : e.id),
                          style: ({ pressed: e }) => ({
                            minHeight: 34,
                            paddingHorizontal: 12,
                            borderRadius: 17,
                            borderWidth: 1,
                            justifyContent: 'center',
                            borderColor: x.accent,
                            backgroundColor: t ? x.accentSoft : x.surface,
                            opacity: e ? 0.75 : 1,
                          }),
                          children: (0, u.jsx)(n.Copy, {
                            numberOfLines: 1,
                            style: {
                              fontSize: 12,
                              color: x.accent,
                              fontFamily: t
                                ? 'Vazirmatn_700Bold'
                                : 'Vazirmatn_400Regular',
                            },
                            children:
                              t && y > 0
                                ? (0, l.rewardChip)(e, y) + ' ' + p(y)
                                : (0, l.rewardChip)(
                                    e,
                                    (0, o.rewardDiscount)(e, b),
                                  ),
                          }),
                        },
                        e.id,
                      );
                    }),
                    !!j &&
                      (0, u.jsx)(n.Copy, {
                        testID: 'basket-club-reward-min',
                        numberOfLines: 2,
                        style: { fontSize: 11, color: x.muted },
                        children: (0, l.minimumLine)(j),
                      }),
                    !!_ &&
                      (0, u.jsx)(n.Copy, {
                        testID: 'basket-club-reward-next',
                        numberOfLines: 1,
                        style: { fontSize: 11, color: x.muted },
                        children: (0, l.missingLine)(_.missing, _.reward),
                      }),
                  ],
                }),
              ],
            })
          : null;
      }),
      (_e.pickedReward = function (e, r, t, n) {
        return (
          (r && (0, o.rewardChoices)(e, t, n).ready.find((e) => e.id === r)) ||
          null
        );
      }));
    var r = e(_r(d[0])),
      t = e(_r(d[1])),
      n = _r(d[2]),
      s = _r(d[3]),
      c = _r(d[4]),
      o = _r(d[5]),
      l = _r(d[6]),
      u = _r(d[7]);
  },
  968,
  [232, 99, 407, 385, 382, 462, 807, 338],
);
