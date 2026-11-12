// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 865; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.ConfirmDiscard = function ({
        visible: e,
        onKeep: l,
        onDiscard: o,
        inline: c = !1,
      }) {
        return c
          ? e
            ? (0, f.jsx)(t.TapLayer, {
                children: (0, f.jsx)(n.default, {
                  testID: 'discard-inline',
                  accessibilityViewIsModal: !0,
                  style: [
                    s.default.absoluteFill,
                    { zIndex: 1e3, elevation: 1e3 },
                  ],
                  children: (0, f.jsx)(x, { onKeep: l, onDiscard: o }),
                }),
              })
            : null
          : (0, f.jsx)(t.TapModal, {
              visible: e,
              transparent: !0,
              animationType: 'fade',
              onRequestClose: l,
              children: (0, f.jsx)(x, { onKeep: l, onDiscard: o }),
            });
      }));
    var s = e(r(d[0])),
      n = e(r(d[1])),
      t = r(d[2]),
      l = r(d[3]),
      o = r(d[4]),
      c = r(d[5]),
      u = r(d[6]),
      f = r(d[7]);
    function x({ onKeep: e, onDiscard: s }) {
      const { colors: t } = (0, l.useTheme)();
      return (0, f.jsxs)(n.default, {
        style: {
          flex: 1,
          backgroundColor: '#08090bbb',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
        },
        children: [
          (0, f.jsx)(u.Backdrop, {
            testID: 'discard-backdrop',
            label: o.fa.keepDraft,
            onClose: e,
          }),
          (0, f.jsx)(n.default, {
            style: { width: '100%', maxWidth: 420 },
            children: (0, f.jsxs)(c.Card, {
              style: { backgroundColor: t.bg },
              children: [
                (0, f.jsx)(u.PopupHeader, {
                  testID: 'discard-close',
                  title: o.fa.discardTitle,
                  titleStyle: c.common.title,
                  onClose: e,
                }),
                (0, f.jsx)(c.Copy, {
                  style: { color: t.muted },
                  children: o.fa.discardBody,
                }),
                (0, f.jsxs)(n.default, {
                  style: c.common.row,
                  children: [
                    (0, f.jsx)(n.default, {
                      style: c.common.flex,
                      children: (0, f.jsx)(c.Button, {
                        secondary: !0,
                        onPress: e,
                        children: o.fa.keepDraft,
                      }),
                    }),
                    (0, f.jsx)(n.default, {
                      style: c.common.flex,
                      children: (0, f.jsx)(c.Button, {
                        onPress: s,
                        children: o.fa.discardDraft,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
    }
  },
  865,
  [17, 99, 515, 382, 492, 407, 533, 338],
);
