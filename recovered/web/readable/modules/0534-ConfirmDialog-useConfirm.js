// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 534; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.ConfirmDialog = b),
      (_e.useConfirm = function () {
        const [e, n] = (0, t.useState)(null);
        return [
          (0, t.useCallback)((e) => n(e), []),
          (0, x.jsx)(b, { ask: e, onClose: () => n(null) }, 'confirm-dialog'),
        ];
      }));
    var t = r(d[0]);
    r(d[1]);
    var n = e(r(d[2])),
      o = e(r(d[3])),
      l = e(r(d[4])),
      s = r(d[5]),
      c = r(d[6]),
      u = r(d[7]),
      f = r(d[8]),
      y = r(d[9]),
      h = r(d[10]),
      x = r(d[11]);
    function b({ ask: e, onClose: t }) {
      const { colors: y } = (0, u.useTheme)(),
        b = 'accent' === e?.tone ? y.accent : y.danger,
        C = 'accent' === e?.tone ? y.onAccent : y.bg;
      return (0, x.jsx)(s.TapModal, {
        visible: !!e,
        transparent: !0,
        animationType: 'fade',
        onRequestClose: t,
        children: (0, x.jsxs)(l.default, {
          style: {
            flex: 1,
            backgroundColor: '#08090bbb',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
          },
          children: [
            (0, x.jsx)(h.Backdrop, {
              testID: 'confirm-backdrop',
              label: (0, c.L)('\u0627\u0646\u0635\u0631\u0627\u0641'),
              onClose: t,
            }),
            (0, x.jsx)(l.default, {
              style: { width: '100%', maxWidth: 420 },
              children: (0, x.jsxs)(f.Card, {
                testID: 'confirm-dialog',
                style: { backgroundColor: y.bg },
                children: [
                  (0, x.jsx)(h.PopupHeader, {
                    testID: 'confirm-close',
                    title: e?.title || '',
                    titleStyle: f.common.title,
                    onClose: t,
                  }),
                  (0, x.jsx)(f.Copy, {
                    style: { lineHeight: 24 },
                    children: e?.text,
                  }),
                  (0, x.jsxs)(l.default, {
                    style: f.common.row,
                    children: [
                      (0, x.jsx)(l.default, {
                        style: f.common.flex,
                        children: (0, x.jsx)(f.Button, {
                          testID: 'confirm-cancel',
                          secondary: !0,
                          onPress: () => {
                            const n = e?.onCancel;
                            (t(), n?.());
                          },
                          children:
                            e?.cancel ||
                            (0, c.L)('\u0627\u0646\u0635\u0631\u0627\u0641'),
                        }),
                      }),
                      (0, x.jsx)(l.default, {
                        style: f.common.flex,
                        children: (0, x.jsx)(n.default, {
                          testID: 'confirm-ok',
                          accessibilityRole: 'button',
                          onPress: () => {
                            const n = e?.run;
                            (t(), n?.());
                          },
                          style: ({ pressed: e }) => ({
                            minHeight: 48,
                            borderRadius: 14,
                            paddingHorizontal: 12,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: b,
                            borderWidth: o.default.hairlineWidth,
                            borderColor: b,
                            opacity: e ? 0.85 : 1,
                            transform: [{ scale: e ? 0.98 : 1 }],
                          }),
                          children: (0, x.jsx)(f.Copy, {
                            style: {
                              color: C,
                              fontFamily: 'Vazirmatn_600SemiBold',
                            },
                            children: e?.ok,
                          }),
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
    }
    (0, y.ensureModalStacking)();
  },
  534,
  [2, 94, 232, 17, 99, 515, 311, 382, 407, 535, 533, 338],
);
