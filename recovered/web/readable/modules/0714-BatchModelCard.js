// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 714; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.BatchModelCard = function ({
        model: e,
        index: b,
        canSplit: x,
        onCounts: j,
        onSplit: C,
        onRename: z,
      }) {
        const { colors: L } = (0, s.useTheme)(),
          S = e.sizes.length ? e.sizes : [''],
          I = e.colors.length ? e.colors : [''],
          [w, _] = (0, u.useColorBlocks)(I, 84),
          v = (e) => e.toLocaleString((0, h.numberLocale)()),
          B = v((0, y.modelTotal)(e)),
          D =
            e.sizes.length && e.colors.length
              ? (0, h.L)(
                  '{c} \u0631\u0646\u06af\u060c {s} \u0633\u0627\u06cc\u0632\u060c {n} \u0639\u062f\u062f',
                  { c: v(e.colors.length), s: v(e.sizes.length), n: B },
                )
              : e.sizes.length
                ? (0, h.L)(
                    '{s} \u0633\u0627\u06cc\u0632\u060c {n} \u0639\u062f\u062f',
                    { s: v(e.sizes.length), n: B },
                  )
                : (0, h.L)(
                    '{c} \u0631\u0646\u06af\u060c {n} \u0639\u062f\u062f',
                    { c: v(e.colors.length), n: B },
                  ),
          H = (t) => {
            try {
              return ((0, y.cellCount)(e, t), !1);
            } catch {
              return !0;
            }
          };
        return (0, f.jsxs)(i.Card, {
          testID: 'batch-model-' + b,
          style: { gap: 10 },
          children: [
            e.photo &&
              (0, f.jsx)(t.default, {
                source: { uri: e.photo },
                style: { height: 90, borderRadius: 12 },
                resizeMode: 'contain',
              }),
            (0, f.jsxs)(o.default, {
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 10,
              },
              children: [
                (0, f.jsxs)(o.default, {
                  style: { flex: 1, gap: 2 },
                  children: [
                    z
                      ? (0, f.jsx)(i.Input, {
                          testID: 'batch-model-name-' + b,
                          accessibilityLabel: (0, h.L)(
                            '\u0646\u0627\u0645 \u0645\u062f\u0644',
                          ),
                          value: e.model,
                          maxLength: 100,
                          onChangeText: z,
                          style: {
                            fontSize: 15,
                            fontFamily: 'Vazirmatn_600SemiBold',
                          },
                        })
                      : (0, f.jsx)(i.Copy, {
                          style: {
                            fontSize: 16,
                            fontFamily: 'Vazirmatn_600SemiBold',
                          },
                          children: e.model,
                        }),
                    !e.model.trim() &&
                      (0, f.jsx)(i.Copy, {
                        style: { fontSize: 12, color: L.danger },
                        children: (0, h.L)(
                          '\u0646\u0627\u0645 \u0645\u062f\u0644 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633.',
                        ),
                      }),
                    (0, f.jsxs)(i.Copy, {
                      style: { fontSize: 12, color: L.muted },
                      children: [
                        D,
                        e.isNew
                          ? '\u060c ' +
                            (0, h.L)(
                              '\u0645\u062f\u0644 \u062c\u062f\u06cc\u062f',
                            )
                          : '',
                      ],
                    }),
                  ],
                }),
                (0, f.jsx)(l.default, {
                  testID: 'batch-model-split-' + b,
                  accessibilityRole: 'button',
                  accessibilityState: { disabled: !x },
                  disabled: !x,
                  onPress: C,
                  style: ({ pressed: e }) => [
                    p.split,
                    {
                      borderColor: L.line,
                      backgroundColor: L.soft,
                      opacity: x ? (e ? 0.85 : 1) : 0.4,
                    },
                  ],
                  children: (0, f.jsx)(i.Copy, {
                    style: { fontSize: 12 },
                    children: (0, h.L)(
                      '\u062c\u062f\u0627 \u062b\u0628\u062a \u06a9\u0646',
                    ),
                  }),
                }),
              ],
            }),
            (0, f.jsx)(o.default, {
              onLayout: _,
              style: { gap: 12 },
              children: w.map((t, l) =>
                (0, f.jsxs)(
                  o.default,
                  {
                    style: [
                      p.block,
                      l > 0 && {
                        borderTopWidth: n.default.hairlineWidth,
                        borderTopColor: L.line,
                        paddingTop: 12,
                      },
                    ],
                    children: [
                      !!(0, u.blockLabel)(w, l) &&
                        (0, f.jsx)(i.Copy, {
                          style: { fontSize: 12, color: L.muted },
                          children: (0, u.blockLabel)(w, l),
                        }),
                      (0, f.jsxs)(o.default, {
                        style: p.gridRow,
                        children: [
                          (0, f.jsx)(o.default, { style: p.gridHead }),
                          t.map((e) =>
                            (0, f.jsx)(
                              o.default,
                              {
                                style: p.gridCell,
                                children: (0, f.jsx)(i.Copy, {
                                  numberOfLines: 1,
                                  style: {
                                    fontSize: 12,
                                    fontFamily: 'Vazirmatn_600SemiBold',
                                  },
                                  children:
                                    e ||
                                    (0, h.L)('\u062a\u0639\u062f\u0627\u062f'),
                                }),
                              },
                              'h' + e,
                            ),
                          ),
                        ],
                      }),
                      S.map((l) =>
                        (0, f.jsxs)(
                          o.default,
                          {
                            style: p.gridRow,
                            children: [
                              (0, f.jsx)(o.default, {
                                style: p.gridHead,
                                children: (0, f.jsx)(i.Copy, {
                                  style: {
                                    fontSize: 14,
                                    fontFamily: 'Vazirmatn_700Bold',
                                  },
                                  children: (0, h.localDigits)(l || '\u2014'),
                                }),
                              }),
                              t.map((t) => {
                                const n = (0, y.variantKey)(l, t);
                                return (0, f.jsx)(
                                  o.default,
                                  {
                                    style: p.gridCell,
                                    children: (0, f.jsx)(c.QuantityInput, {
                                      testID: 'batch-model-count-' + n,
                                      accessibilityLabel: [e.model, l, t]
                                        .filter(Boolean)
                                        .join(' '),
                                      value: e.counts[n] || '',
                                      selectTextOnFocus: !0,
                                      onChange: (t) =>
                                        j({ ...e.counts, [n]: t }),
                                      style: [
                                        {
                                          width: 76,
                                          minWidth: 0,
                                          paddingHorizontal: 4,
                                          textAlign: 'center',
                                          minHeight: 44,
                                        },
                                        H(n) && {
                                          borderWidth: 2,
                                          borderColor: L.danger,
                                        },
                                      ],
                                    }),
                                  },
                                  n,
                                );
                              }),
                            ],
                          },
                          'r' + l,
                        ),
                      ),
                    ],
                  },
                  'b' + l,
                ),
              ),
            }),
          ],
        });
      }));
    var t = e(r(d[0])),
      l = e(r(d[1])),
      n = e(r(d[2])),
      o = e(r(d[3])),
      i = r(d[4]),
      s = r(d[5]),
      c = r(d[6]),
      u = r(d[7]),
      h = r(d[8]),
      y = r(d[9]),
      f = r(d[10]);
    const p = n.default.create({
      split: {
        minHeight: 40,
        paddingHorizontal: 12,
        borderRadius: 12,
        borderWidth: n.default.hairlineWidth,
        alignItems: 'center',
        justifyContent: 'center',
      },
      gridRow: { flexDirection: 'row-reverse', alignItems: 'center', gap: 6 },
      gridHead: { width: 56, alignItems: 'center', justifyContent: 'center' },
      gridCell: { width: 84, alignItems: 'center', justifyContent: 'center' },
      block: { gap: 6 },
    });
  },
  714,
  [168, 232, 17, 99, 407, 382, 614, 715, 311, 716, 338],
);
