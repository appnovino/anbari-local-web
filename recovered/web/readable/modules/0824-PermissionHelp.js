// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 824; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.PermissionHelp = function () {
        const [s, t] = (0, e.useState)(!1),
          { colors: u } = (0, l.useTheme)();
        return (0, p.jsxs)(o.default, {
          style: { gap: 8 },
          children: [
            (0, p.jsx)(n.Button, {
              testID: 'permission-help',
              secondary: !0,
              onPress: () => t((e) => !e),
              children: c.fa.permissionHelp,
            }),
            s &&
              (0, p.jsx)(o.default, {
                style: { gap: 8 },
                children: [
                  c.fa.permissionSteps,
                  c.fa.permissionLimit,
                  c.fa.permissionPrivacy,
                ].map((e) =>
                  (0, p.jsx)(
                    n.Copy,
                    {
                      style: [n.common.small, { color: u.muted }],
                      children: e,
                    },
                    e,
                  ),
                ),
              }),
          ],
        });
      }));
    var e = r(d[0]);
    r(d[1]);
    var s,
      t = r(d[2]),
      o = (s = t) && s.__esModule ? s : { default: s },
      n = r(d[3]),
      l = r(d[4]),
      c = r(d[5]),
      p = r(d[6]);
  },
  824,
  [2, 94, 99, 407, 382, 492, 338],
);
