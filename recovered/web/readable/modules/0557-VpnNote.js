// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 557; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.VpnNote = function ({ testID: e = 'pay-vpn-note' }) {
        const { colors: t } = (0, s.useTheme)();
        return (0, u.jsxs)(o.default, {
          testID: e,
          accessibilityRole: 'alert',
          style: {
            flexDirection: 'row-reverse',
            alignItems: 'center',
            gap: 10,
            padding: 12,
            borderRadius: 14,
            backgroundColor: t.warningSoft,
            borderWidth: 1,
            borderColor: t.warningBorder,
          },
          children: [
            (0, u.jsx)(l.Icon, { name: 'alert', size: 22, color: t.warning }),
            (0, u.jsxs)(o.default, {
              style: { flex: 1, gap: 2 },
              children: [
                (0, u.jsx)(n.Copy, {
                  style: {
                    fontSize: 14,
                    lineHeight: 22,
                    fontFamily: 'Vazirmatn_700Bold',
                    color: t.warning,
                  },
                  children: (0, c.L)(
                    '\u0642\u0628\u0644 \u0627\u0632 \u067e\u0631\u062f\u0627\u062e\u062a\u060c \u0641\u06cc\u0644\u062a\u0631\u0634\u06a9\u0646 (VPN) \u0631\u0627 \u062e\u0627\u0645\u0648\u0634 \u06a9\u0646',
                  ),
                }),
                (0, u.jsx)(n.Copy, {
                  style: { fontSize: 12, lineHeight: 20, color: t.text },
                  children: (0, c.L)(
                    '\u0628\u0627 \u0641\u06cc\u0644\u062a\u0631\u0634\u06a9\u0646 \u0631\u0648\u0634\u0646\u060c \u062f\u0631\u06af\u0627\u0647 \u0628\u0627\u0646\u06a9 \u067e\u0631\u062f\u0627\u062e\u062a \u0631\u0627 \u0631\u062f \u0645\u06cc\u200c\u06a9\u0646\u062f \u0648 \u062e\u0631\u06cc\u062f \u0646\u0627\u0645\u0648\u0641\u0642 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                  ),
                }),
              ],
            }),
          ],
        });
      }));
    var e,
      t = r(d[0]),
      o = (e = t) && e.__esModule ? e : { default: e },
      n = r(d[1]),
      l = r(d[2]),
      s = r(d[3]),
      c = r(d[4]),
      u = r(d[5]);
  },
  557,
  [99, 407, 385, 382, 311, 338],
);
