// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 983; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.StockChangeConfirm = function ({
        visible: e,
        changes: C,
        busy: k,
        error: w,
        onConfirm: S,
        onEdit: D,
      }) {
        const { colors: I } = (0, x.useTheme)(),
          [_, v] = (0, t.useState)({});
        (0, t.useEffect)(() => {
          e && v({});
        }, [e]);
        const z = (e) => e.toLocaleString((0, f.numberLocale)()),
          L = (0, h.flipped)() ? '\u2192' : '\u2190',
          B = D;
        return (0, j.jsx)(l.TapModal, {
          visible: e,
          transparent: !0,
          animationType: 'fade',
          onRequestClose: B,
          children: (0, j.jsxs)(s.default, {
            style: {
              flex: 1,
              backgroundColor: '#08090bbb',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 20,
            },
            children: [
              (0, j.jsx)(b.Backdrop, {
                testID: 'stock-confirm-backdrop',
                label: (0, f.L)('\u0648\u06cc\u0631\u0627\u06cc\u0634'),
                locked: k,
                onClose: B,
              }),
              (0, j.jsx)(s.default, {
                style: { width: '100%', maxWidth: 420 },
                children: (0, j.jsxs)(p.Card, {
                  testID: 'stock-confirm',
                  style: { backgroundColor: I.bg },
                  children: [
                    (0, j.jsx)(b.PopupHeader, {
                      testID: 'stock-confirm-close',
                      title: (0, f.L)(
                        '\u062b\u0628\u062a \u062a\u063a\u06cc\u06cc\u0631 \u0645\u0648\u062c\u0648\u062f\u06cc',
                      ),
                      titleStyle: [p.common.title, { fontSize: 20 }],
                      onClose: B,
                    }),
                    (0, j.jsx)(c.ScrollView, {
                      style: { maxHeight: 360 },
                      contentContainerStyle: { gap: 0 },
                      children: C.map((e, t) => {
                        const o = 'received' !== e.kind,
                          l =
                            'received' === e.kind
                              ? 'count'
                              : (_[e.id] ?? 'waste' === e.kind)
                                ? 'waste'
                                : 'count';
                        return (0, j.jsxs)(
                          s.default,
                          {
                            style: [
                              p.common.row,
                              { minHeight: 44, paddingVertical: 6 },
                              t > 0 && {
                                borderTopWidth: i.default.hairlineWidth,
                                borderTopColor: I.line,
                              },
                            ],
                            children: [
                              (0, j.jsx)(p.Copy, {
                                numberOfLines: 1,
                                style: {
                                  flex: 1,
                                  fontFamily: 'Vazirmatn_600SemiBold',
                                },
                                children: e.label,
                              }),
                              (0, j.jsx)(p.Copy, {
                                style: { color: I.muted },
                                children:
                                  z(e.before) + ' ' + L + ' ' + z(e.after),
                              }),
                              (0, j.jsx)(p.Copy, {
                                style: { fontFamily: 'Vazirmatn_600SemiBold' },
                                children: z(e.quantity),
                              }),
                              o
                                ? (0, j.jsxs)(n.default, {
                                    testID: 'stock-confirm-kind-' + e.id,
                                    accessibilityRole: 'button',
                                    disabled: k,
                                    onPress: () =>
                                      v((t) => ({
                                        ...t,
                                        [e.id]: 'waste' !== l,
                                      })),
                                    style: ({ pressed: e }) => ({
                                      flexDirection: 'row-reverse',
                                      alignItems: 'center',
                                      gap: 4,
                                      paddingHorizontal: 10,
                                      minHeight: 32,
                                      borderRadius: 999,
                                      borderWidth: 1,
                                      borderColor:
                                        'waste' === l ? I.warning : I.accent,
                                      backgroundColor: I.soft,
                                      opacity: e ? 0.8 : 1,
                                    }),
                                    children: [
                                      (0, j.jsx)(p.Copy, {
                                        style: {
                                          fontSize: 13,
                                          color:
                                            'waste' === l
                                              ? I.warning
                                              : I.accent,
                                        },
                                        children: y.kindChip[l],
                                      }),
                                      (0, j.jsx)(p.Copy, {
                                        style: { fontSize: 12, color: I.muted },
                                        children: '\u21c4',
                                      }),
                                    ],
                                  })
                                : (0, j.jsx)(p.Copy, {
                                    style: { fontSize: 13, color: I.success },
                                    children: y.kindChip.count,
                                  }),
                            ],
                          },
                          e.id,
                        );
                      }),
                    }),
                    k && (0, j.jsx)(o.default, { color: I.text }),
                    !!w &&
                      (0, j.jsx)(p.Copy, {
                        accessibilityRole: 'alert',
                        style: { color: I.danger },
                        children: w,
                      }),
                    (0, j.jsxs)(s.default, {
                      style: p.common.row,
                      children: [
                        (0, j.jsx)(s.default, {
                          style: p.common.flex,
                          children: (0, j.jsx)(p.Button, {
                            testID: 'stock-confirm-edit',
                            secondary: !0,
                            onPress: D,
                            children: (0, f.L)(
                              '\u0648\u06cc\u0631\u0627\u06cc\u0634',
                            ),
                          }),
                        }),
                        (0, j.jsx)(s.default, {
                          style: p.common.flex,
                          children: (0, j.jsx)(p.Button, {
                            testID: 'stock-confirm-ok',
                            disabled: k || !C.length,
                            onPress: () => {
                              !k && C.length && S((0, u.countDrafts)(C, _));
                            },
                            children: (0, f.L)(
                              '\u062a\u0623\u06cc\u06cc\u062f',
                            ),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }));
    var t = r(d[0]),
      o = e(r(d[1])),
      n = e(r(d[2])),
      i = e(r(d[3])),
      s = e(r(d[4])),
      l = r(d[5]),
      c = r(d[6]),
      u = r(d[7]),
      f = r(d[8]),
      y = r(d[9]),
      h = r(d[10]),
      x = r(d[11]),
      p = r(d[12]),
      b = r(d[13]),
      j = r(d[14]);
  },
  983,
  [2, 217, 232, 17, 99, 515, 380, 717, 311, 692, 1, 382, 407, 533, 338],
);
