// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 896; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.StatementFrame = function ({
        visible: e,
        title: y,
        subtitle: p,
        onClose: j,
        children: S,
      }) {
        const { colors: C } = (0, h.useTheme)(),
          _ = (0, o.useSafeAreaInsets)();
        return (0, x.jsxs)(s.PageModal, {
          visible: e,
          animationType: 'slide',
          onRequestClose: j,
          children: [
            (0, x.jsxs)(l.default, {
              testID: 'statement-page',
              style: { flex: 1, backgroundColor: C.bg },
              children: [
                (0, x.jsx)(l.default, {
                  style: {
                    paddingTop: _.top + 10,
                    paddingBottom: 10,
                    paddingHorizontal: 14,
                    borderBottomWidth: t.default.hairlineWidth,
                    borderColor: C.line,
                    backgroundColor: C.bg,
                  },
                  children: (0, x.jsxs)(l.default, {
                    style: {
                      width: '100%',
                      maxWidth: 1040,
                      alignSelf: 'center',
                      gap: 4,
                    },
                    children: [
                      (0, x.jsx)(l.default, {
                        style: { flexDirection: 'row-reverse' },
                        children: (0, x.jsx)(b.SmallKey, {
                          testID: 'statement-back',
                          kind: 'text',
                          icon: 'arrow',
                          label: (0, f.L)(
                            '\u0628\u0627\u0632\u06af\u0634\u062a',
                          ),
                          onPress: j,
                        }),
                      }),
                      (0, x.jsx)(u.Copy, {
                        accessibilityRole: 'header',
                        numberOfLines: 1,
                        style: {
                          fontSize: 20,
                          lineHeight: 31,
                          fontFamily: 'Vazirmatn_700Bold',
                        },
                        children: y,
                      }),
                      !!p &&
                        (0, x.jsx)(u.Copy, {
                          numberOfLines: 1,
                          style: {
                            fontSize: 13,
                            lineHeight: 20,
                            color: C.muted,
                          },
                          children: p,
                        }),
                    ],
                  }),
                }),
                (0, x.jsx)(n.ScrollView, {
                  keyboardShouldPersistTaps: 'handled',
                  contentContainerStyle: {
                    width: '100%',
                    maxWidth: 1040,
                    alignSelf: 'center',
                    padding: 14,
                    paddingBottom: _.bottom + 40,
                  },
                  children: S,
                }),
              ],
            }),
            (0, x.jsx)(c.ToastHost, {}),
          ],
        });
      }));
    var t = e(r(d[0])),
      l = e(r(d[1])),
      n = r(d[2]),
      o = r(d[3]),
      s = r(d[4]),
      c = r(d[5]),
      u = r(d[6]),
      h = r(d[7]),
      f = r(d[8]),
      b = r(d[9]),
      x = r(d[10]);
  },
  896,
  [17, 99, 380, 342, 515, 525, 407, 382, 311, 517, 338],
);
