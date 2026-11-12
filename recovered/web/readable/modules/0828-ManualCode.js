// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 828; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.ManualCode = function ({ onScan: e, onEditing: n }) {
        const [f, h] = (0, t.useState)(''),
          x = () => {
            const t = (0, o.latinDigits)(f).trim();
            t && (e(t), h(''));
          };
        return (0, c.jsxs)(l.default, {
          testID: 'scan-manual-row',
          style: {
            width: '100%',
            flexDirection: 'row-reverse',
            gap: 8,
            alignItems: 'center',
          },
          children: [
            (0, c.jsx)(l.default, {
              style: { flex: 1, minWidth: 0 },
              children: (0, c.jsx)(s.Input, {
                testID: 'scan-manual-code',
                ltr: !0,
                value: f,
                onChangeText: h,
                placeholder: u.fa.typeBarcode,
                autoCapitalize: 'none',
                autoCorrect: !1,
                onFocus: () => n?.(!0),
                onBlur: () => n?.(!1),
                returnKeyType: 'done',
                onSubmitEditing: x,
                accessibilityLabel: u.fa.typeBarcode,
              }),
            }),
            (0, c.jsx)(l.default, {
              style: { width: 96, flexShrink: 0 },
              children: (0, c.jsx)(s.Button, {
                testID: 'scan-manual-find',
                disabled: !f.trim(),
                onPress: x,
                children: u.fa.find,
              }),
            }),
          ],
        });
      }));
    var e,
      t = r(d[0]),
      n = r(d[1]),
      l = (e = n) && e.__esModule ? e : { default: e },
      s = r(d[2]),
      o = r(d[3]),
      u = r(d[4]),
      c = r(d[5]);
  },
  828,
  [2, 99, 407, 440, 492, 338],
);
