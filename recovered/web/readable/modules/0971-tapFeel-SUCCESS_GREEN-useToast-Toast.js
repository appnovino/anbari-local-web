// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 971; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.tapFeel = function (e = 'light') {}),
      Object.defineProperty(_e, 'SUCCESS_GREEN', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }),
      (_e.useToast = function () {
        const [e, n] = (0, t.useState)(null);
        return [e, (e) => n((t) => ({ text: e, tick: (t?.tick || 0) + 1 }))];
      }),
      (_e.Toast = function ({ toast: e, bottom: c = 96 }) {
        const { mode: p } = (0, l.useTheme)(),
          h = (0, t.useRef)(new n.default.Value(0)).current,
          [v, y] = (0, t.useState)('');
        return (
          (0, t.useEffect)(() => {
            if (!e) return;
            (y(e.text), h.setValue(0));
            const t = n.default.sequence([
              n.default.timing(h, {
                toValue: 1,
                duration: 140,
                useNativeDriver: !1,
              }),
              n.default.delay(1300),
              n.default.timing(h, {
                toValue: 0,
                duration: 220,
                useNativeDriver: !1,
              }),
            ]);
            return (
              t.start(({ finished: e }) => {
                e && y('');
              }),
              () => t.stop()
            );
          }, [e?.tick]),
          v
            ? (0, s.jsx)(o.default, {
                pointerEvents: 'none',
                style: {
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: c,
                  alignItems: 'center',
                },
                children: (0, s.jsx)(n.default.View, {
                  testID: 'invoice-toast',
                  accessibilityRole: 'alert',
                  style: {
                    opacity: h,
                    transform: [
                      {
                        translateY: h.interpolate({
                          inputRange: [0, 1],
                          outputRange: [8, 0],
                        }),
                      },
                    ],
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    gap: 6,
                    paddingHorizontal: 14,
                    paddingVertical: 8,
                    borderRadius: 20,
                    backgroundColor: 'dark' === p ? f.softDark : f.light,
                  },
                  children: (0, s.jsx)(u.Copy, {
                    style: {
                      fontSize: 14,
                      lineHeight: 22,
                      color: '#ffffff',
                      fontFamily: 'Vazirmatn_600SemiBold',
                    },
                    children: '\u2713 ' + v,
                  }),
                }),
              })
            : null
        );
      }));
    var t = r(d[0]),
      n = e(r(d[1]));
    (r(d[2]), r(d[3]));
    var o = e(r(d[4]));
    r(d[5]);
    var u = r(d[6]),
      l = r(d[7]),
      s = r(d[8]);
    const f = {
      light: '#15803d',
      dark: '#22c55e',
      softLight: '#dcfce7',
      softDark: '#14532d',
    };
  },
  971,
  [2, 92, 94, 216, 99, 313, 407, 382, 338],
);
