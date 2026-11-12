// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 949; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.LearnGuideText = function ({ onClose: e }) {
        const { colors: p } = (0, u.useTheme)(),
          j = (0, o.useSafeAreaInsets)();
        (0, t.useEffect)(() => {
          if ('undefined' == typeof window) return;
          const t = (t) => {
            'Escape' === t.key && e();
          };
          return (
            window.addEventListener('keydown', t),
            () => window.removeEventListener('keydown', t)
          );
        }, [e]);
        const C = { fontSize: 15, lineHeight: 27 },
          w = { color: p.muted },
          S = { fontFamily: 'Vazirmatn_600SemiBold' },
          z = { fontFamily: 'Vazirmatn_700Bold' },
          R = (e) =>
            e
              .split(/(\xab[^\xbb]*\xbb|\u201c[^\u201d]*\u201d)/)
              .map((e, l) =>
                e.startsWith('\xab') || e.startsWith('\u201c')
                  ? (0, x.jsx)(h.Copy, { style: [C, S], children: e }, l)
                  : (0, x.jsx)(t.Fragment, { children: e }, l),
              ),
          H = (e) =>
            (0, x.jsxs)(
              i.default,
              {
                testID: 'guide-lesson-' + e.id,
                style: {
                  gap: 8,
                  paddingTop: 14,
                  borderTopWidth: 1,
                  borderColor: p.line,
                },
                children: [
                  (0, x.jsx)(h.Copy, {
                    selectable: !0,
                    accessibilityRole: 'header',
                    style: { fontSize: 17, lineHeight: 28, ...z },
                    children: e.title,
                  }),
                  (0, x.jsx)(h.Copy, {
                    selectable: !0,
                    style: [C, w],
                    children: e.summary,
                  }),
                  !!e.note &&
                    (0, x.jsx)(h.Copy, {
                      selectable: !0,
                      style: { fontSize: 13, lineHeight: 22, color: p.accent },
                      children: e.note,
                    }),
                  (0, x.jsx)(i.default, {
                    style: { gap: 6 },
                    children: e.steps.map((e, t) =>
                      (0, x.jsxs)(
                        i.default,
                        {
                          style: {
                            flexDirection: 'row-reverse',
                            alignItems: 'flex-start',
                            gap: 10,
                          },
                          children: [
                            (0, x.jsx)(i.default, {
                              style: {
                                width: 26,
                                height: 26,
                                marginTop: 1,
                                borderRadius: 13,
                                backgroundColor: p.accentSoft,
                                alignItems: 'center',
                                justifyContent: 'center',
                              },
                              children: (0, x.jsx)(h.Copy, {
                                style: {
                                  fontSize: 13,
                                  lineHeight: 20,
                                  color: p.accent,
                                  ...z,
                                },
                                children: (0, c.faDigits)(t + 1),
                              }),
                            }),
                            (0, x.jsx)(h.Copy, {
                              selectable: !0,
                              style: [C, { flex: 1 }],
                              children: R(e),
                            }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                ],
              },
              e.id,
            );
        return (0, x.jsx)(n.PageModal, {
          visible: !0,
          animationType: 'slide',
          onRequestClose: e,
          children: (0, x.jsxs)(i.default, {
            testID: 'learn-guide-text',
            style: { flex: 1, backgroundColor: p.bg, paddingTop: j.top + 10 },
            children: [
              (0, x.jsxs)(i.default, {
                style: {
                  width: '100%',
                  maxWidth: 720,
                  alignSelf: 'center',
                  paddingHorizontal: 16,
                  paddingBottom: 10,
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  gap: 12,
                },
                children: [
                  (0, x.jsx)(h.Copy, {
                    accessibilityRole: 'header',
                    numberOfLines: 1,
                    style: { flex: 1, fontSize: 22, lineHeight: 34, ...z },
                    children: b.title,
                  }),
                  (0, x.jsx)(l.default, {
                    testID: 'learn-guide-close',
                    accessibilityRole: 'button',
                    accessibilityLabel: (0, f.L)('\u0628\u0633\u062a\u0646'),
                    onPress: e,
                    hitSlop: 8,
                    style: ({ pressed: e }) => ({
                      width: 40,
                      height: 40,
                      borderRadius: 20,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: p.soft,
                      opacity: e ? 0.7 : 1,
                    }),
                    children: (0, x.jsx)(y.Icon, {
                      name: 'close',
                      size: 20,
                      color: p.text,
                    }),
                  }),
                ],
              }),
              (0, x.jsxs)(s.ScrollView, {
                style: { flex: 1 },
                contentContainerStyle: {
                  width: '100%',
                  maxWidth: 720,
                  alignSelf: 'center',
                  paddingHorizontal: 16,
                  paddingTop: 6,
                  paddingBottom: Math.max(j.bottom, 16) + 24,
                  gap: 22,
                },
                children: [
                  (0, x.jsxs)(i.default, {
                    style: {
                      gap: 8,
                      padding: 16,
                      borderRadius: 20,
                      backgroundColor: p.surface,
                      borderWidth: 1,
                      borderColor: p.line,
                    },
                    children: [
                      (0, x.jsx)(h.Copy, {
                        selectable: !0,
                        accessibilityRole: 'header',
                        style: { fontSize: 18, lineHeight: 30, ...z },
                        children: b.introTitle,
                      }),
                      b.intro.map((e, t) =>
                        (0, x.jsx)(
                          h.Copy,
                          { selectable: !0, style: C, children: R(e) },
                          t,
                        ),
                      ),
                    ],
                  }),
                  b.groups.map((e) =>
                    (0, x.jsxs)(
                      i.default,
                      {
                        testID: 'guide-group-' + e.id,
                        style: { gap: 12 },
                        children: [
                          (0, x.jsx)(h.Copy, {
                            selectable: !0,
                            accessibilityRole: 'header',
                            style: {
                              fontSize: 20,
                              lineHeight: 32,
                              color: p.accent,
                              ...z,
                            },
                            children: e.title,
                          }),
                          e.lessons.map(H),
                        ],
                      },
                      e.id,
                    ),
                  ),
                  (0, x.jsxs)(i.default, {
                    style: {
                      gap: 10,
                      padding: 16,
                      borderRadius: 20,
                      backgroundColor: p.surface,
                      borderWidth: 1,
                      borderColor: p.line,
                    },
                    children: [
                      (0, x.jsx)(h.Copy, {
                        selectable: !0,
                        accessibilityRole: 'header',
                        style: { fontSize: 18, lineHeight: 30, ...z },
                        children: b.tipsTitle,
                      }),
                      b.tips.map((e, t) =>
                        (0, x.jsxs)(
                          i.default,
                          {
                            style: {
                              flexDirection: 'row-reverse',
                              alignItems: 'flex-start',
                              gap: 10,
                            },
                            children: [
                              (0, x.jsx)(i.default, {
                                style: {
                                  width: 6,
                                  height: 6,
                                  marginTop: 11,
                                  borderRadius: 3,
                                  backgroundColor: p.accent,
                                },
                              }),
                              (0, x.jsx)(h.Copy, {
                                selectable: !0,
                                style: [C, { flex: 1 }],
                                children: R(e),
                              }),
                            ],
                          },
                          t,
                        ),
                      ),
                    ],
                  }),
                  (0, x.jsx)(h.Copy, {
                    selectable: !0,
                    style: {
                      fontSize: 12,
                      lineHeight: 20,
                      textAlign: 'center',
                      color: p.muted,
                    },
                    children: (0, f.L)(
                      '\u0646\u0633\u062e\u0647\u0654 \u0648\u0628 \u0627\u06cc\u0646 \u0631\u0627\u0647\u0646\u0645\u0627: /guide',
                    ),
                  }),
                ],
              }),
            ],
          }),
        });
      }));
    var t = r(d[0]);
    r(d[1]);
    var l = e(r(d[2])),
      i = e(r(d[3])),
      s = r(d[4]),
      n = r(d[5]),
      o = r(d[6]),
      c = r(d[7]),
      h = r(d[8]),
      y = r(d[9]),
      u = r(d[10]),
      p = r(d[11]),
      f = r(d[12]),
      x = r(d[13]);
    const b = (0, f.localized)(p.learnGuide);
  },
  949,
  [2, 94, 232, 99, 380, 515, 342, 434, 407, 385, 382, 950, 311, 338],
);
