// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 621; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, _m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.TimeWheel = function ({
        value: e,
        onChange: t,
        testID: p = 'time-wheel',
      }) {
        const { colors: x } = (0, s.useTheme)(),
          y = (0, h.hourValues)().map((e) => ({ value: e, label: f(e) })),
          b = (0, h.minuteValues)(e.minute).map((e) => ({
            value: e,
            label: f(e),
          }));
        return (0, c.jsxs)(l.default, {
          testID: p,
          style: { gap: 6 },
          children: [
            (0, c.jsxs)(l.default, {
              style: {
                flexDirection: 'row',
                direction: 'ltr',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 4,
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderRadius: 16,
                backgroundColor: x.surface,
                borderWidth: 1,
                borderColor: x.line,
              },
              children: [
                (0, c.jsx)(l.default, {
                  style: { width: 92 },
                  children: (0, c.jsx)(o.Wheel, {
                    testID: p + '-hour',
                    label: '',
                    big: !0,
                    rowHeight: m,
                    items: y,
                    value: e.hour,
                    onChange: (l) => t({ ...e, hour: l }),
                  }),
                }),
                (0, c.jsx)(n.Copy, {
                  style: {
                    fontSize: 26,
                    lineHeight: 34,
                    fontFamily: 'Vazirmatn_700Bold',
                    textAlign: 'center',
                    width: 14,
                  },
                  children: ':',
                }),
                (0, c.jsx)(l.default, {
                  style: { width: 92 },
                  children: (0, c.jsx)(o.Wheel, {
                    testID: p + '-minute',
                    label: '',
                    big: !0,
                    rowHeight: m,
                    items: b,
                    value: e.minute,
                    onChange: (l) => t({ ...e, minute: l }),
                  }),
                }),
              ],
            }),
            (0, c.jsx)(n.Copy, {
              testID: p + '-text',
              style: {
                fontSize: 13,
                lineHeight: 22,
                textAlign: 'center',
                color: x.muted,
              },
              children: (0, u.L)('\u0633\u0627\u0639\u062a {time} {part}', {
                time: (0, h.clockText)(e),
                part: (0, h.partOfDay)(e.hour),
              }),
            }),
          ],
        });
      }));
    var e,
      t = r(d[0]),
      l = (e = t) && e.__esModule ? e : { default: e },
      n = r(d[1]),
      o = r(d[2]),
      s = r(d[3]),
      u = r(d[4]),
      h = r(d[5]),
      c = r(d[6]);
    const m = 44,
      f = (e) => (0, u.localDigits)(String(e).padStart(2, '0'));
  },
  621,
  [99, 407, 619, 382, 311, 622, 338],
);
