// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 659; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.DeskTick = function ({
        on: e,
        onPress: n,
        label: s,
        testID: u,
        mixed: f = !1,
      }) {
        const { colors: y } = (0, c.useTheme)();
        return (0, h.jsx)(t.default, {
          testID: u,
          accessibilityRole: 'checkbox',
          accessibilityLabel: s,
          accessibilityState: { checked: f ? 'mixed' : e },
          hitSlop: 8,
          onPress: n,
          style: ({ pressed: t }) => ({
            width: 20,
            height: 20,
            borderRadius: 6,
            borderWidth: 1.5,
            borderColor: e || f ? y.accent : y.muted + '99',
            backgroundColor: e ? y.accent : f ? y.accentSoft : 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: t ? 0.75 : 1,
          }),
          children: e
            ? (0, h.jsx)(l.Icon, { name: 'check', size: 13, color: y.onAccent })
            : f
              ? (0, h.jsx)(o.default, {
                  style: {
                    width: 9,
                    height: 2,
                    borderRadius: 1,
                    backgroundColor: y.accent,
                  },
                })
              : null,
        });
      }),
      (_e.DeskHead = function ({
        label: e,
        sortKey: n,
        sort: l,
        onSort: u,
        style: f,
        end: y = !1,
      }) {
        const { colors: b } = (0, c.useTheme)(),
          p = !!n && l?.key === n,
          x = (0, h.jsx)(s.Copy, {
            numberOfLines: 1,
            style: {
              flexShrink: 1,
              fontSize: 12,
              lineHeight: 18,
              color: p ? b.accent : b.muted,
              fontFamily: 'Vazirmatn_600SemiBold',
            },
            children: e,
          });
        return n && u
          ? (0, h.jsxs)(t.default, {
              testID: 'desk-sort-' + n,
              accessibilityRole: 'button',
              accessibilityLabel: e,
              accessibilityState: { selected: p },
              onPress: () => u(n),
              style: ({ pressed: e, hovered: t }) => [
                {
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  justifyContent: y ? 'flex-end' : 'flex-start',
                  gap: 3,
                  minWidth: 0,
                  opacity: e ? 0.7 : t ? 0.85 : 1,
                },
                f,
              ],
              children: [
                x,
                (0, h.jsx)(s.Copy, {
                  style: {
                    fontSize: 9,
                    lineHeight: 14,
                    color: p ? b.accent : b.muted,
                    opacity: p ? 1 : 0.5,
                  },
                  children: p
                    ? 'desc' === l?.dir
                      ? '\u25bc'
                      : '\u25b2'
                    : '\u25be',
                }),
              ],
            })
          : (0, h.jsx)(o.default, {
              style: [
                {
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  justifyContent: y ? 'flex-end' : 'flex-start',
                  minWidth: 0,
                },
                f,
              ],
              children: x,
            });
      }),
      (_e.DeskHeadRow = function ({ children: e, style: t }) {
        const { colors: s } = (0, c.useTheme)();
        return (0, h.jsx)(o.default, {
          style: [
            {
              flexDirection: 'row-reverse',
              alignItems: 'center',
              gap: 12,
              paddingHorizontal: 16,
              minHeight: 40,
              borderBottomWidth: n.default.hairlineWidth,
              borderColor: s.line,
            },
            t,
          ],
          children: e,
        });
      }),
      (_e.DeskKey = function ({
        label: e,
        icon: o,
        onPress: u,
        testID: y,
        disabled: b,
        tone: p = 'soft',
        hint: x,
      }) {
        const { colors: j } = (0, c.useTheme)(),
          C = 'primary' === p ? j.onAccent : 'danger' === p ? j.danger : j.text;
        return (0, h.jsxs)(t.default, {
          testID: y,
          accessibilityRole: 'button',
          accessibilityLabel: e,
          accessibilityState: { disabled: !!b },
          disabled: b,
          onPress: u,
          style: ({ pressed: e, hovered: t }) => ({
            height: 34,
            paddingHorizontal: 12,
            borderRadius: 11,
            flexDirection: 'row-reverse',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            backgroundColor:
              'primary' === p
                ? e
                  ? j.accentActive
                  : j.accent
                : 'danger' === p
                  ? 'transparent'
                  : 'surface' === p
                    ? j.surface
                    : t
                      ? j.line
                      : j.soft,
            borderWidth: 'danger' === p ? 1 : n.default.hairlineWidth,
            borderColor:
              'danger' === p
                ? j.danger + '99'
                : 'primary' === p
                  ? j.accent
                  : j.line,
            opacity: b ? 0.45 : e ? 0.8 : 1,
          }),
          children: [
            !!o && (0, h.jsx)(l.Icon, { name: o, size: 15, color: C }),
            (0, h.jsx)(s.Copy, {
              numberOfLines: 1,
              style: {
                fontSize: 13,
                lineHeight: 20,
                color: C,
                fontFamily: 'Vazirmatn_600SemiBold',
              },
              children: e,
            }),
            !!x && (0, h.jsx)(f, { label: x, on: 'primary' === p }),
          ],
        });
      }),
      (_e.KeyCap = f),
      (_e.KeyHints = function ({ items: e }) {
        const { colors: t } = (0, c.useTheme)();
        return (0, h.jsx)(o.default, {
          style: {
            flexDirection: 'row-reverse',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 14,
            paddingVertical: 6,
          },
          children: e.map(([e, n]) =>
            (0, h.jsxs)(
              o.default,
              {
                style: {
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  gap: 4,
                },
                children: [
                  e.map((e) => (0, h.jsx)(f, { label: e }, e)),
                  (0, h.jsx)(s.Copy, {
                    style: { fontSize: 11.5, lineHeight: 18, color: t.muted },
                    children: n,
                  }),
                ],
              },
              n,
            ),
          ),
        });
      }),
      (_e.DeskChip = function ({
        label: e,
        on: o,
        onPress: l,
        testID: f,
        count: y,
        tone: b,
      }) {
        const { colors: p } = (0, c.useTheme)(),
          x = o
            ? p.onAccent
            : 'warn' === b
              ? p.warning
              : 'bad' === b
                ? p.danger
                : p.text,
          j = o
            ? p.accent
            : 'warn' === b
              ? p.warningSoft
              : 'bad' === b
                ? p.danger + '14'
                : p.soft;
        return (0, h.jsxs)(t.default, {
          testID: f,
          accessibilityRole: 'button',
          accessibilityState: { selected: o },
          onPress: l,
          style: ({ pressed: e }) => ({
            height: 32,
            paddingHorizontal: 12,
            borderRadius: 16,
            flexDirection: 'row-reverse',
            alignItems: 'center',
            gap: 6,
            backgroundColor: j,
            borderWidth: n.default.hairlineWidth,
            borderColor: o
              ? p.accent
              : 'warn' === b
                ? p.warningBorder
                : 'bad' === b
                  ? p.danger + '55'
                  : p.line,
            opacity: e ? 0.85 : 1,
          }),
          children: [
            (0, h.jsx)(s.Copy, {
              numberOfLines: 1,
              style: {
                fontSize: 13,
                lineHeight: 20,
                color: x,
                fontFamily: o ? 'Vazirmatn_600SemiBold' : 'Vazirmatn_500Medium',
              },
              children: e,
            }),
            void 0 !== y &&
              (0, h.jsx)(s.Copy, {
                style: { fontSize: 11, lineHeight: 16, color: x, opacity: 0.8 },
                children: y.toLocaleString((0, u.numberLocale)()),
              }),
          ],
        });
      }));
    var t = e(r(d[0])),
      n = e(r(d[1])),
      o = e(r(d[2])),
      s = r(d[3]),
      l = r(d[4]),
      c = r(d[5]),
      u = r(d[6]),
      h = r(d[7]);
    function f({ label: e, on: t = !1 }) {
      const { colors: l } = (0, c.useTheme)();
      return (0, h.jsx)(o.default, {
        style: {
          minWidth: 18,
          height: 18,
          paddingHorizontal: 4,
          borderRadius: 5,
          borderWidth: n.default.hairlineWidth,
          borderColor: t ? l.onAccent + '88' : l.line,
          backgroundColor: t ? 'transparent' : l.surface,
          alignItems: 'center',
          justifyContent: 'center',
        },
        children: (0, h.jsx)(s.Copy, {
          style: {
            fontSize: 10,
            lineHeight: 14,
            color: t ? l.onAccent : l.muted,
            writingDirection: 'ltr',
          },
          children: e,
        }),
      });
    }
  },
  659,
  [232, 17, 99, 407, 385, 382, 311, 338],
);
