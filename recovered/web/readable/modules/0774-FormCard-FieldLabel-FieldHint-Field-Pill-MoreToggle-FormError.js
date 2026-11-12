// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 774; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.FormCard = function ({ style: e, children: t, testID: n }) {
        return (0, u.jsx)(l.Card, {
          testID: n,
          style: [{ padding: 14, gap: 14, borderRadius: 18 }, e],
          children: t,
        });
      }),
      (_e.FieldLabel = h),
      (_e.FieldHint = f),
      (_e.Field = function ({
        label: e,
        hint: t,
        children: n,
        style: l,
        testID: s,
      }) {
        return (0, u.jsxs)(o.default, {
          testID: s,
          style: [{ gap: 6 }, l],
          children: [
            (0, u.jsx)(h, { children: e }),
            n,
            !!t && (0, u.jsx)(f, { children: t }),
          ],
        });
      }),
      (_e.Pill = function ({ label: e, active: n, onPress: o, testID: s }) {
        const { colors: h } = (0, c.useTheme)();
        return (0, u.jsx)(t.default, {
          testID: s,
          accessibilityRole: 'button',
          accessibilityState: { selected: n },
          onPress: o,
          style: ({ pressed: e }) => ({
            minHeight: 36,
            paddingHorizontal: 14,
            borderRadius: 999,
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: n ? h.accent : h.line,
            backgroundColor: n ? h.accentSoft : e ? h.line : h.soft,
          }),
          children: (0, u.jsx)(l.Copy, {
            numberOfLines: 1,
            style: {
              fontSize: 14,
              lineHeight: 22,
              color: n ? h.accent : h.text,
              fontFamily: n ? 'Vazirmatn_700Bold' : 'Vazirmatn_600SemiBold',
            },
            children: e,
          }),
        });
      }),
      (_e.MoreToggle = function ({ label: e, open: h, onPress: f, testID: y }) {
        const { colors: b } = (0, c.useTheme)();
        return (0, u.jsxs)(t.default, {
          testID: y,
          accessibilityRole: 'button',
          accessibilityState: { expanded: h },
          onPress: f,
          style: ({ pressed: e }) => ({
            minHeight: 44,
            flexDirection: 'row-reverse',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 10,
            opacity: e ? 0.7 : 1,
          }),
          children: [
            (0, u.jsx)(l.Copy, {
              style: {
                fontSize: 15,
                lineHeight: 24,
                fontFamily: 'Vazirmatn_600SemiBold',
              },
              children: e,
            }),
            (0, u.jsx)(o.default, {
              style: {
                width: 30,
                height: 30,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: b.soft,
                borderWidth: n.default.hairlineWidth,
                borderColor: b.line,
              },
              children: (0, u.jsx)(s.Icon, {
                name: h ? 'up' : 'down',
                size: 16,
                color: b.muted,
              }),
            }),
          ],
        });
      }),
      (_e.FormError = function ({ children: e }) {
        const { colors: t } = (0, c.useTheme)();
        return (0, u.jsx)(o.default, {
          style: {
            borderRadius: 12,
            paddingHorizontal: 12,
            paddingVertical: 8,
            backgroundColor: t.danger + '1a',
            borderWidth: n.default.hairlineWidth,
            borderColor: t.danger,
          },
          children: (0, u.jsx)(l.Copy, {
            accessibilityRole: 'alert',
            style: { fontSize: 14, lineHeight: 22, color: t.danger },
            children: e,
          }),
        });
      }));
    var t = e(r(d[0])),
      n = e(r(d[1])),
      o = e(r(d[2])),
      l = r(d[3]),
      s = r(d[4]),
      c = r(d[5]),
      u = r(d[6]);
    function h({ children: e }) {
      const { colors: t } = (0, c.useTheme)();
      return (0, u.jsx)(l.Copy, {
        style: {
          fontSize: 13,
          lineHeight: 20,
          color: t.muted,
          fontFamily: 'Vazirmatn_600SemiBold',
        },
        children: e,
      });
    }
    function f({ children: e }) {
      const { colors: t } = (0, c.useTheme)();
      return (0, u.jsx)(l.Copy, {
        style: { fontSize: 12, lineHeight: 19, color: t.muted },
        children: e,
      });
    }
  },
  774,
  [232, 17, 99, 407, 385, 382, 338],
);
