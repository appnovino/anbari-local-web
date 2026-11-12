// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 691; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.momentWords = b),
      (_e.MovementDate = function ({
        value: e,
        onChange: j,
        id: v = 'movement-date',
        initialOpen: S = !1,
        label: z = f.fa.movementTime,
        onOpen: C,
        asKey: D = !1,
      }) {
        const { colors: H } = (0, u.useTheme)(),
          [_, T] = (0, t.useState)(S),
          [w, I] = (0, t.useState)(() => x(e)),
          M = () => {
            (_ || I(x(e)), T(!_), C?.(!_));
          },
          P = !!e && (0, c.validTimestamp)(e);
        return (0, p.jsxs)(n.default, {
          style: { gap: 7 },
          children: [
            D
              ? (0, p.jsxs)(o.default, {
                  testID: v + '-toggle',
                  accessibilityRole: 'button',
                  accessibilityState: { expanded: _ },
                  accessibilityLabel: `${z}: ${b(e)}`,
                  onPress: M,
                  style: ({ pressed: e }) => ({
                    minHeight: 46,
                    paddingHorizontal: 12,
                    borderRadius: 14,
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    gap: 8,
                    borderWidth: 1,
                    borderColor: P || _ ? H.accent : H.line,
                    backgroundColor: P ? H.accentSoft : H.surface,
                    opacity: e ? 0.75 : 1,
                  }),
                  children: [
                    (0, p.jsx)(s.Icon, {
                      name: 'clock',
                      size: 18,
                      color: P ? H.accent : H.muted,
                    }),
                    (0, p.jsxs)(l.Copy, {
                      numberOfLines: 1,
                      style: { flex: 1, fontSize: 14, lineHeight: 22 },
                      children: [
                        (0, p.jsxs)(l.Copy, {
                          style: {
                            fontSize: 14,
                            lineHeight: 22,
                            color: H.muted,
                          },
                          children: [z, ': '],
                        }),
                        (0, p.jsx)(l.Copy, {
                          testID: v + '-value',
                          style: {
                            fontSize: 14,
                            lineHeight: 22,
                            fontFamily: 'Vazirmatn_600SemiBold',
                            color: P ? H.accent : H.text,
                          },
                          children: b(e),
                        }),
                      ],
                    }),
                    (0, p.jsx)(l.Copy, {
                      style: {
                        fontSize: 13,
                        lineHeight: 22,
                        color: H.accent,
                        fontFamily: 'Vazirmatn_600SemiBold',
                      },
                      children: _
                        ? (0, h.L)('\u0628\u0633\u062a\u0646')
                        : f.fa.edit,
                    }),
                  ],
                })
              : (0, p.jsx)(o.default, {
                  testID: v + '-toggle',
                  accessibilityRole: 'button',
                  onPress: M,
                  children: (0, p.jsxs)(l.Copy, {
                    style: { fontSize: 12, color: H.muted },
                    children: [z, ': ', b(e), '\u060c ', f.fa.edit],
                  }),
                }),
            _ &&
              (0, p.jsxs)(p.Fragment, {
                children: [
                  (0, p.jsx)(l.Copy, {
                    style: { fontSize: 10, color: H.muted },
                    children: f.fa.dateEntryHint,
                  }),
                  (0, p.jsx)(y.JalaliDateField, {
                    id: v,
                    value: w,
                    onChange: (e, t) => {
                      (I(e), j(t));
                    },
                  }),
                  (0, p.jsx)(l.Button, {
                    secondary: !0,
                    onPress: () => {
                      (j(void 0), I(x()), T(!1), C?.(!1));
                    },
                    children: f.fa.useNowTime,
                  }),
                ],
              }),
          ],
        });
      }));
    var t = r(d[0]),
      n = e(r(d[1])),
      o = e(r(d[2])),
      l = r(d[3]),
      s = r(d[4]),
      c = r(d[5]),
      u = r(d[6]),
      f = r(d[7]),
      y = r(d[8]),
      h = r(d[9]),
      p = r(d[10]);
    function x(e) {
      const t = e && (0, c.validTimestamp)(e) ? new Date(e) : new Date();
      return {
        ...(0, c.calParts)(t),
        hour: t.getHours(),
        minute: t.getMinutes(),
      };
    }
    function b(e) {
      return e && (0, c.validTimestamp)(e)
        ? (0, c.formatMoment)(e)
        : e
          ? f.fa.invalidDate
          : f.fa.nowTime;
    }
  },
  691,
  [2, 99, 232, 407, 385, 440, 382, 492, 619, 311, 338],
);
