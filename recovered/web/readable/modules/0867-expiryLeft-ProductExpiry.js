// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 867; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, _m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.expiryLeft = j),
      (_e.ProductExpiry = function ({
        product: e,
        movements: n,
        canEdit: L,
        onSave: S,
      }) {
        const { colors: D } = (0, y.useTheme)(),
          [b, w] = (0, t.useState)(null),
          [C, P] = (0, t.useState)(!1),
          [_, v] = (0, t.useState)('');
        if ('made' === e.kind) return null;
        const z = (0, x.batchExpiry)(n, e.id, e.stock, (e) => j(e)),
          I = e.expiresAt || z,
          T = I ? j(I) : null;
        async function B(e) {
          if (S) {
            (P(!0), v(''));
            try {
              (await S(e), w(null));
            } catch (e) {
              v((0, u.errorText)(e));
            } finally {
              P(!1);
            }
          }
        }
        return I || L
          ? (0, p.jsxs)(d.Card, {
              testID: 'product-expiry',
              style: { gap: 8 },
              children: [
                (0, p.jsxs)(l.default, {
                  style: d.common.between,
                  children: [
                    (0, p.jsxs)(l.default, {
                      style: { flex: 1, gap: 2 },
                      children: [
                        (0, p.jsx)(d.Copy, {
                          style: { fontSize: 11, color: D.muted },
                          children: (0, s.L)(
                            '\u062a\u0627\u0631\u06cc\u062e \u0627\u0646\u0642\u0636\u0627',
                          ),
                        }),
                        I
                          ? (0, p.jsx)(d.Copy, {
                              testID: 'product-expiry-date',
                              style: {
                                fontSize: 15,
                                fontFamily: 'Vazirmatn_600SemiBold',
                              },
                              children: new Intl.DateTimeFormat(
                                (0, s.dateLocale)(),
                                { dateStyle: 'long' },
                              ).format(h(I)),
                            })
                          : (0, p.jsx)(d.Copy, {
                              style: { fontSize: 13, color: D.muted },
                              children: (0, s.L)(
                                '\u062b\u0628\u062a \u0646\u0634\u062f\u0647',
                              ),
                            }),
                        !e.expiresAt &&
                          !!z &&
                          (0, p.jsx)(d.Copy, {
                            style: { fontSize: 11, color: D.muted },
                            children: (0, s.L)(
                              '\u0627\u0632 \u0648\u0631\u0648\u062f \u06a9\u0627\u0644\u0627',
                            ),
                          }),
                      ],
                    }),
                    null !== T &&
                      (0, p.jsx)(d.Copy, {
                        style: {
                          fontSize: 13,
                          color: T < 0 ? D.danger : T <= 7 ? D.warning : D.text,
                        },
                        children:
                          T < 0
                            ? (0, s.L)(
                                '\u0645\u0646\u0642\u0636\u06cc \u0634\u062f\u0647',
                              )
                            : 0 === T
                              ? (0, s.L)(
                                  '\u0627\u0645\u0631\u0648\u0632 \u062a\u0645\u0627\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f',
                                )
                              : (0, s.L)(
                                  '{n} \u0631\u0648\u0632 \u0645\u0627\u0646\u062f\u0647',
                                  {
                                    n: T.toLocaleString((0, s.numberLocale)()),
                                  },
                                ),
                      }),
                  ],
                }),
                L &&
                  S &&
                  !b &&
                  (0, p.jsx)(d.Button, {
                    testID: 'product-expiry-edit',
                    secondary: !0,
                    onPress: () => {
                      (v(''),
                        w(
                          I
                            ? f(I)
                            : {
                                ...(0, o.calParts)(new Date()),
                                hour: 12,
                                minute: 0,
                              },
                        ));
                    },
                    children: I
                      ? (0, s.L)(
                          '\u062a\u063a\u06cc\u06cc\u0631 \u062a\u0627\u0631\u06cc\u062e \u0627\u0646\u0642\u0636\u0627',
                        )
                      : (0, s.L)(
                          '\u062b\u0628\u062a \u062a\u0627\u0631\u06cc\u062e \u0627\u0646\u0642\u0636\u0627',
                        ),
                  }),
                b &&
                  (0, p.jsxs)(l.default, {
                    style: { gap: 8 },
                    children: [
                      (0, p.jsx)(c.JalaliDateField, {
                        dateOnly: !0,
                        quick: 'future',
                        id: 'product-expiry-field',
                        value: b,
                        onChange: (e) => w(e),
                      }),
                      (0, p.jsxs)(l.default, {
                        style: d.common.row,
                        children: [
                          (0, p.jsx)(l.default, {
                            style: d.common.flex,
                            children: (0, p.jsx)(d.Button, {
                              testID: 'product-expiry-save',
                              disabled: C,
                              onPress: () => {
                                B(m(b));
                              },
                              children: (0, s.L)(
                                '\u0630\u062e\u06cc\u0631\u0647',
                              ),
                            }),
                          }),
                          (0, p.jsx)(l.default, {
                            style: d.common.flex,
                            children: (0, p.jsx)(d.Button, {
                              secondary: !0,
                              disabled: C,
                              onPress: () => w(null),
                              children: (0, s.L)(
                                '\u0627\u0646\u0635\u0631\u0627\u0641',
                              ),
                            }),
                          }),
                        ],
                      }),
                      !!e.expiresAt &&
                        (0, p.jsx)(d.Button, {
                          testID: 'product-expiry-clear',
                          danger: !0,
                          disabled: C,
                          onPress: () => {
                            B(null);
                          },
                          children: (0, s.L)(
                            '\u062d\u0630\u0641 \u062a\u0627\u0631\u06cc\u062e \u0627\u0646\u0642\u0636\u0627',
                          ),
                        }),
                    ],
                  }),
                !!_ &&
                  (0, p.jsx)(d.Copy, {
                    accessibilityRole: 'alert',
                    style: { color: D.danger },
                    children: _,
                  }),
              ],
            })
          : null;
      }));
    var e,
      t = r(_d[0]),
      n = r(_d[1]),
      l = (e = n) && e.__esModule ? e : { default: e },
      o = r(_d[2]),
      s = r(_d[3]),
      d = r(_d[4]),
      c = r(_d[5]),
      u = r(_d[6]),
      y = r(_d[7]),
      x = r(_d[8]),
      p = r(_d[9]);
    const m = (e) => {
        const t = (0, o.calToGregorian)(e.year, e.month, e.day),
          n = (e) => String(e).padStart(2, '0');
        return `${t.year}-${n(t.month)}-${n(t.day)}`;
      },
      f = (e) => {
        const [t, n, l] = e.split('-').map(Number);
        return {
          ...(0, o.calParts)(new Date(t, n - 1, l, 12)),
          hour: 12,
          minute: 0,
        };
      },
      h = (e) => {
        const [t, n, l] = e.split('-').map(Number);
        return new Date(t, n - 1, l);
      };
    function j(e, t = new Date()) {
      const n = new Date(t);
      return (
        n.setHours(0, 0, 0, 0),
        Math.round((h(e).getTime() - n.getTime()) / 864e5)
      );
    }
  },
  867,
  [2, 99, 440, 311, 407, 619, 690, 382, 705, 338],
);
