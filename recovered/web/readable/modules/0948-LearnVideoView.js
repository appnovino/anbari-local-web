// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 948; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.LearnVideoView = function ({
        lesson: e,
        onClose: b,
        onTry: j,
        tryDisabled: w = !1,
        tryLabel: C,
        nextTitle: v,
        onNext: I,
      }) {
        const { colors: L } = (0, h.useTheme)(),
          z = (0, l.useSafeAreaInsets)(),
          [D, S] = (0, t.useState)({ w: 0, h: 0 });
        (0, t.useEffect)(() => {
          if ('undefined' == typeof window) return;
          const e = (e) => {
            'Escape' === e.key && b();
          };
          return (
            window.addEventListener('keydown', e),
            () => window.removeEventListener('keydown', e)
          );
        }, [b]);
        const _ = Math.min(D.h, (16 * D.w) / 9),
          k = (9 * _) / 16,
          A = (e, t, { secondary: o = !1, testID: s, disabled: l = !1 } = {}) =>
            (0, p.jsx)(n.default, {
              testID: s,
              accessibilityRole: 'button',
              disabled: l,
              onPress: t,
              style: ({ pressed: e }) => ({
                minHeight: 54,
                borderRadius: 16,
                paddingHorizontal: 18,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: o ? L.soft : e ? L.accentActive : L.accent,
                opacity: l ? 0.5 : 1,
                transform: [{ scale: e ? 0.98 : 1 }],
              }),
              children: (0, p.jsx)(f.Copy, {
                style: {
                  fontSize: 16,
                  lineHeight: 24,
                  fontFamily: 'Vazirmatn_700Bold',
                  color: o ? L.text : L.onAccent,
                  textAlign: 'center',
                },
                children: e,
              }),
            });
        return (0, p.jsx)(s.PageModal, {
          visible: !0,
          animationType: 'slide',
          onRequestClose: b,
          children: (0, p.jsx)(o.default, {
            testID: 'learn-lesson',
            style: {
              flex: 1,
              backgroundColor: L.bg,
              paddingTop: z.top + 10,
              paddingBottom: Math.max(z.bottom, 12),
            },
            children: (0, p.jsxs)(o.default, {
              style: {
                flex: 1,
                width: '100%',
                maxWidth: 520,
                alignSelf: 'center',
                paddingHorizontal: 16,
                gap: 12,
              },
              children: [
                (0, p.jsxs)(o.default, {
                  style: {
                    flexDirection: 'row',
                    direction: 'ltr',
                    alignItems: 'center',
                    gap: 12,
                  },
                  children: [
                    (0, p.jsx)(n.default, {
                      testID: 'tour-close',
                      accessibilityRole: 'button',
                      accessibilityLabel: (0, x.L)('\u0628\u0633\u062a\u0646'),
                      onPress: b,
                      hitSlop: 8,
                      style: ({ pressed: e }) => ({
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: L.soft,
                        opacity: e ? 0.7 : 1,
                      }),
                      children: (0, p.jsx)(u.Icon, {
                        name: 'close',
                        size: 20,
                        color: L.text,
                      }),
                    }),
                    (0, p.jsxs)(o.default, {
                      style: { flex: 1, minWidth: 0 },
                      children: [
                        (0, p.jsx)(f.Copy, {
                          numberOfLines: 1,
                          style: {
                            fontSize: 18,
                            lineHeight: 28,
                            fontFamily: 'Vazirmatn_700Bold',
                            textAlign: 'right',
                          },
                          children: e.title,
                        }),
                        !!e.video &&
                          (0, p.jsx)(f.Copy, {
                            style: {
                              fontSize: 11,
                              lineHeight: 16,
                              color: L.muted,
                              textAlign: 'right',
                            },
                            children: (0, x.L)(
                              '\u0648\u06cc\u062f\u06cc\u0648\u06cc {n} \u062b\u0627\u0646\u06cc\u0647\u200c\u0627\u06cc \u0628\u0627 \u0635\u062f\u0627',
                              { n: (0, c.formatGrouped)(e.video.seconds, 0) },
                            ),
                          }),
                      ],
                    }),
                  ],
                }),
                e.video
                  ? (0, p.jsx)(o.default, {
                      onLayout: (e) => {
                        const { width: t, height: n } = e.nativeEvent.layout;
                        (Math.abs(t - D.w) > 1 || Math.abs(n - D.h) > 1) &&
                          S({ w: t, h: n });
                      },
                      style: {
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      },
                      children:
                        D.w > 0 &&
                        (0, p.jsx)(y.LearnVideo, {
                          video: e.video.video,
                          poster: e.video.poster,
                          width: k,
                          height: _,
                        }),
                    })
                  : (0, p.jsx)(o.default, {
                      style: {
                        flex: 1,
                        justifyContent: 'center',
                        gap: 12,
                        padding: 20,
                        borderRadius: 24,
                        backgroundColor: L.surface,
                        borderWidth: 1,
                        borderColor: L.line,
                      },
                      children: e.steps.map((e, t) =>
                        (0, p.jsxs)(
                          o.default,
                          {
                            style: {
                              flexDirection: 'row-reverse',
                              alignItems: 'flex-start',
                              gap: 10,
                            },
                            children: [
                              (0, p.jsx)(o.default, {
                                style: {
                                  width: 30,
                                  height: 30,
                                  borderRadius: 15,
                                  backgroundColor: L.accent,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                },
                                children: (0, p.jsx)(f.Copy, {
                                  style: {
                                    color: L.onAccent,
                                    fontFamily: 'Vazirmatn_700Bold',
                                  },
                                  children: (0, c.formatGrouped)(t + 1, 0),
                                }),
                              }),
                              (0, p.jsx)(f.Copy, {
                                style: {
                                  flex: 1,
                                  fontSize: 16,
                                  lineHeight: 28,
                                },
                                children: e,
                              }),
                            ],
                          },
                          t,
                        ),
                      ),
                    }),
                (0, p.jsx)(f.Copy, {
                  style: {
                    fontSize: 13,
                    lineHeight: 22,
                    color: L.muted,
                    textAlign: 'center',
                  },
                  children: e.benefit,
                }),
                (0, p.jsxs)(o.default, {
                  style: { gap: 8 },
                  children: [
                    A(C, j, { testID: 'tour-try', disabled: w }),
                    I && v
                      ? A(
                          (0, x.L)(
                            '\u062f\u0631\u0633 \u0628\u0639\u062f\u06cc: {title}',
                            { title: v },
                          ),
                          I,
                          { secondary: !0, testID: 'tour-next-guide' },
                        )
                      : A(
                          (0, x.L)(
                            '\u0628\u0627\u0632\u06af\u0634\u062a \u0628\u0647 \u0622\u0645\u0648\u0632\u0634',
                          ),
                          b,
                          { secondary: !0, testID: 'tour-finish' },
                        ),
                  ],
                }),
              ],
            }),
          }),
        });
      }));
    var t = r(d[0]);
    r(d[1]);
    var n = e(r(d[2])),
      o = e(r(d[3])),
      s = r(d[4]),
      l = r(d[5]),
      c = r(d[6]),
      u = r(d[7]),
      f = r(d[8]),
      h = r(d[9]),
      y = r(d[10]),
      x = r(d[11]),
      p = r(d[12]);
  },
  948,
  [2, 94, 232, 99, 515, 342, 434, 385, 407, 382, 709, 311, 338],
);
