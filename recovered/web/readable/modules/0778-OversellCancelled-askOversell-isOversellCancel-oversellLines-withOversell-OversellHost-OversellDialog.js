// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 778; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, _a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'OversellCancelled', {
        enumerable: !0,
        get: function () {
          return u.OversellCancelled;
        },
      }),
      Object.defineProperty(_e, 'askOversell', {
        enumerable: !0,
        get: function () {
          return u.askOversell;
        },
      }),
      Object.defineProperty(_e, 'isOversellCancel', {
        enumerable: !0,
        get: function () {
          return u.isOversellCancel;
        },
      }),
      Object.defineProperty(_e, 'oversellLines', {
        enumerable: !0,
        get: function () {
          return u.oversellLines;
        },
      }),
      Object.defineProperty(_e, 'withOversell', {
        enumerable: !0,
        get: function () {
          return u.withOversell;
        },
      }),
      (_e.OversellHost = function () {
        const [e, n] = (0, l.useState)(null);
        (0, l.useEffect)(
          () =>
            (0, u.setOversellHost)((e) => {
              try {
                (o.default.State?.currentlyFocusedInput?.()?.blur?.(),
                  t.default.dismiss());
              } catch {}
              n((l) => (l?.answer(!1), e));
            }),
          [],
        );
        return (0, x.jsx)(p, {
          lines: e?.lines || null,
          verb: e?.verb || 'sell',
          fill: !!e?.fill,
          onAnswer: (l) => {
            const t = e;
            (n(null), t?.answer(l));
          },
        });
      }),
      (_e.OversellDialog = p));
    var l = _r(d[0]),
      t = e(_r(d[1]));
    _r(d[2]);
    var n = e(_r(d[3])),
      r = e(_r(d[4])),
      o = e(_r(d[5])),
      s = e(_r(d[6])),
      i = _r(d[7]),
      a = _r(d[8]),
      c = _r(d[9]),
      u = _r(d[10]),
      f = _r(d[11]),
      h = _r(d[12]),
      y = _r(d[13]),
      b = _r(d[14]),
      x = _r(d[15]);
    function p({ lines: e, verb: l, fill: t = !1, onAnswer: o }) {
      const { colors: u } = (0, f.useTheme)(),
        y = e?.length ? (0, c.oversellQuestion)(e, l, t) : null,
        p = (0, x.jsx)(n.default, {
          testID: 'oversell-ok',
          accessibilityRole: 'button',
          onPress: () => o(!0),
          style: ({ pressed: e }) => ({
            minHeight: 48,
            borderRadius: 14,
            paddingHorizontal: 12,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: u.danger,
            borderWidth: r.default.hairlineWidth,
            borderColor: u.danger,
            opacity: e ? 0.85 : 1,
          }),
          children: (0, x.jsx)(h.Copy, {
            style: { color: u.bg, fontFamily: 'Vazirmatn_600SemiBold' },
            children: y?.ok,
          }),
        });
      return (0, x.jsx)(i.TapModal, {
        visible: !!y,
        transparent: !0,
        animationType: 'fade',
        onRequestClose: () => o(!1),
        children: (0, x.jsxs)(s.default, {
          style: {
            flex: 1,
            backgroundColor: '#08090bbb',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
          },
          children: [
            (0, x.jsx)(b.Backdrop, {
              testID: 'oversell-backdrop',
              label: (0, a.L)('\u0627\u0646\u0635\u0631\u0627\u0641'),
              onClose: () => o(!1),
            }),
            (0, x.jsx)(s.default, {
              style: { width: '100%', maxWidth: 420 },
              children: (0, x.jsxs)(h.Card, {
                testID: 'oversell-dialog',
                style: { backgroundColor: u.bg },
                children: [
                  (0, x.jsx)(b.PopupHeader, {
                    testID: 'oversell-close',
                    title: y?.title || '',
                    titleStyle: h.common.title,
                    onClose: () => o(!1),
                  }),
                  (0, x.jsx)(h.Copy, {
                    style: { lineHeight: 24 },
                    children: y?.text,
                  }),
                  !!y?.rows.length &&
                    (0, x.jsxs)(s.default, {
                      testID: 'oversell-rows',
                      style: {
                        borderRadius: 12,
                        borderWidth: r.default.hairlineWidth,
                        borderColor: u.line,
                        overflow: 'hidden',
                      },
                      children: [
                        y.rows
                          .slice(0, 8)
                          .map((e, l) =>
                            (0, x.jsxs)(
                              s.default,
                              {
                                style: {
                                  flexDirection: 'row-reverse',
                                  alignItems: 'center',
                                  gap: 8,
                                  paddingHorizontal: 12,
                                  paddingVertical: 8,
                                  borderTopWidth: l
                                    ? r.default.hairlineWidth
                                    : 0,
                                  borderColor: u.line,
                                },
                                children: [
                                  (0, x.jsx)(h.Copy, {
                                    numberOfLines: 1,
                                    style: {
                                      flex: 1,
                                      minWidth: 0,
                                      fontFamily: 'Vazirmatn_600SemiBold',
                                    },
                                    children: e.name,
                                  }),
                                  (0, x.jsx)(h.Copy, {
                                    style: { fontSize: 13, color: u.muted },
                                    children: e.amount,
                                  }),
                                  (0, x.jsx)(h.Copy, {
                                    style: {
                                      fontSize: 13,
                                      minWidth: 36,
                                      textAlign: 'left',
                                      color: u.danger,
                                      fontFamily: 'Vazirmatn_700Bold',
                                    },
                                    children: e.after,
                                  }),
                                ],
                              },
                              l,
                            ),
                          ),
                        y.rows.length > 8 &&
                          (0, x.jsx)(h.Copy, {
                            style: {
                              fontSize: 12,
                              color: u.muted,
                              paddingHorizontal: 12,
                              paddingBottom: 8,
                            },
                            children: (0, a.L)(
                              '\u0648 {n} \u06a9\u0627\u0644\u0627\u06cc \u062f\u06cc\u06af\u0631',
                              {
                                n: (y.rows.length - 8).toLocaleString('fa-IR'),
                              },
                            ),
                          }),
                      ],
                    }),
                  (0, x.jsx)(s.default, {
                    style: {
                      borderRadius: 12,
                      padding: 12,
                      backgroundColor: u.danger + '14',
                    },
                    children: (0, x.jsx)(h.Copy, {
                      testID: 'oversell-box',
                      style: { fontSize: 14, lineHeight: 23, color: u.text },
                      children: y?.box,
                    }),
                  }),
                  t && y?.fill
                    ? (0, x.jsxs)(s.default, {
                        style: { gap: 8 },
                        children: [
                          (0, x.jsx)(h.Copy, {
                            testID: 'oversell-fill-hint',
                            style: {
                              fontSize: 12.5,
                              lineHeight: 21,
                              color: u.muted,
                            },
                            children: y.fillHint,
                          }),
                          (0, x.jsx)(h.Button, {
                            testID: 'oversell-fill',
                            onPress: () => o('fill'),
                            children: y.fill,
                          }),
                          p,
                          (0, x.jsx)(h.Button, {
                            testID: 'oversell-cancel',
                            secondary: !0,
                            onPress: () => o(!1),
                            children:
                              y.cancel ||
                              (0, a.L)('\u0627\u0646\u0635\u0631\u0627\u0641'),
                          }),
                        ],
                      })
                    : (0, x.jsxs)(s.default, {
                        style: h.common.row,
                        children: [
                          (0, x.jsx)(s.default, {
                            style: h.common.flex,
                            children: (0, x.jsx)(h.Button, {
                              testID: 'oversell-cancel',
                              secondary: !0,
                              onPress: () => o(!1),
                              children:
                                y?.cancel ||
                                (0, a.L)(
                                  '\u0627\u0646\u0635\u0631\u0627\u0641',
                                ),
                            }),
                          }),
                          (0, x.jsx)(s.default, {
                            style: h.common.flex,
                            children: p,
                          }),
                        ],
                      }),
                ],
              }),
            }),
          ],
        }),
      });
    }
    (0, y.ensureModalStacking)();
  },
  778,
  [2, 207, 94, 232, 17, 242, 99, 515, 311, 433, 779, 382, 407, 535, 533, 338],
);
