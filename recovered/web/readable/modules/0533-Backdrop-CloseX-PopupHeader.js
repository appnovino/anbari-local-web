// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 533; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.Backdrop = function ({
        onClose: e,
        locked: o = !1,
        label: c,
        color: u,
        testID: b = 'popup-backdrop',
      }) {
        const h = (0, t.useRef)(e),
          I = (0, t.useRef)(o);
        ((h.current = e), (I.current = o));
        const x = (0, t.useMemo)(
          () =>
            (0, f.backdropHandlers)(
              () => h.current(),
              () => I.current,
            ),
          [],
        );
        return (0, y.jsx)(s.default, {
          testID: b,
          accessibilityRole: 'button',
          accessibilityLabel: c || (0, n.L)('\u0628\u0633\u062a\u0646'),
          accessibilityState: { disabled: o },
          ...p,
          onPressIn: x.onPressIn,
          onPress: x.onPress,
          style: [l.default.absoluteFill, u ? { backgroundColor: u } : null],
        });
      }),
      (_e.CloseX = h),
      (_e.PopupHeader = function ({
        title: e,
        onClose: t,
        disabled: s,
        testID: l,
        titleStyle: n,
      }) {
        return (0, y.jsxs)(o.default, {
          style: {
            flexDirection: 'row',
            direction: 'ltr',
            alignItems: 'center',
            gap: 12,
          },
          children: [
            (0, y.jsx)(h, { testID: l, disabled: s, onPress: t }),
            void 0 !== e
              ? (0, y.jsx)(b.Copy, {
                  accessibilityRole: 'header',
                  style: [
                    {
                      flex: 1,
                      fontSize: 18,
                      fontFamily: 'Vazirmatn_600SemiBold',
                    },
                    n,
                  ],
                  children: e,
                })
              : (0, y.jsx)(o.default, { style: { flex: 1 } }),
          ],
        });
      }));
    var t = r(d[0]),
      s = e(r(d[1])),
      l = e(r(d[2])),
      o = e(r(d[3])),
      n = r(d[4]),
      c = r(d[5]),
      u = r(d[6]),
      b = r(d[7]),
      f = r(d[8]),
      y = r(d[9]);
    const p = { delayPressIn: 0 };
    function h({
      onPress: e,
      disabled: t = !1,
      testID: l,
      label: o,
      style: b,
    }) {
      const { colors: f } = (0, c.useTheme)();
      return (0, y.jsx)(s.default, {
        testID: l,
        accessibilityRole: 'button',
        accessibilityLabel: o || (0, n.L)('\u0628\u0633\u062a\u0646'),
        accessibilityState: { disabled: t },
        disabled: t,
        hitSlop: 6,
        onPress: e,
        style: ({ pressed: e }) => [
          {
            width: 36,
            height: 36,
            borderRadius: 18,
            backgroundColor: f.soft,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: f.glassHighlight,
            opacity: t ? 0.45 : e ? 0.8 : 1,
          },
          b,
        ],
        children: (0, y.jsx)(u.Icon, {
          name: 'close',
          color: f.text,
          size: 20,
        }),
      });
    }
  },
  533,
  [2, 232, 17, 99, 311, 382, 385, 407, 500, 338],
);
