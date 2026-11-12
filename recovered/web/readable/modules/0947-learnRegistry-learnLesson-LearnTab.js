// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 947; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'learnRegistry', {
        enumerable: !0,
        get: function () {
          return k;
        },
      }),
      (_e.learnLesson = w),
      (_e.LearnTab = function ({
        businessType: e,
        onBack: v,
        onTry: I,
        initial: O,
      }) {
        const { colors: T } = (0, c.useTheme)(),
          V = (0, h.useDesktop)(),
          [_, R] = (0, t.useState)(() => w(O, e)),
          [W, B] = (0, t.useState)(!1),
          D = k.filter(
            (t) => !(t.hidden || (t.makersOnly && 'reseller' === e)),
          ),
          H = z.flatMap((e) => D.filter((t) => t.group === e.group)),
          P = _ ? H[H.indexOf(_) + 1] : void 0,
          F = (e) => {
            const t = x.learnVideos[e.id];
            return t
              ? (0, j.L)(
                  '\u0648\u06cc\u062f\u06cc\u0648\u060c {n} \u062b\u0627\u0646\u06cc\u0647',
                  { n: (0, f.formatGrouped)(t.seconds, 0) },
                )
              : (0, j.L)('{n} \u0642\u062f\u0645', {
                  n: (0, f.formatGrouped)(e.steps.length, 0),
                });
          },
          G = (e, t) =>
            (0, C.jsxs)(
              s.default,
              {
                testID: 'learn-' + e.id,
                accessibilityRole: 'button',
                onPress: () => R(e),
                style: ({ pressed: e }) => ({
                  minHeight: 72,
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  gap: 12,
                  paddingHorizontal: 16,
                  paddingVertical: 10,
                  borderTopWidth: t ? 1 : 0,
                  borderColor: T.line,
                  backgroundColor: e ? T.soft : 'transparent',
                }),
                children: [
                  (0, C.jsx)(o.default, {
                    style: {
                      width: 40,
                      height: 40,
                      borderRadius: 13,
                      backgroundColor: T.accentSoft,
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                    children: (0, C.jsx)(u.Icon, {
                      name: S(e.id),
                      size: 22,
                      color: T.accent,
                    }),
                  }),
                  (0, C.jsxs)(o.default, {
                    style: { flex: 1, minWidth: 0 },
                    children: [
                      (0, C.jsx)(l.Copy, {
                        numberOfLines: 1,
                        style: { fontFamily: 'Vazirmatn_600SemiBold' },
                        children: (0, j.L)(e.title),
                      }),
                      (0, C.jsx)(l.Copy, {
                        numberOfLines: 1,
                        style: { fontSize: 11, color: T.muted },
                        children: L(e.id),
                      }),
                    ],
                  }),
                  (0, C.jsx)(l.Copy, {
                    style: { fontSize: 11, color: T.accent },
                    children: F(e),
                  }),
                  (0, C.jsx)(u.Icon, {
                    name: 'chevron',
                    size: 18,
                    color: T.muted,
                  }),
                ],
              },
              e.id,
            ),
          q = (e) =>
            (0, C.jsxs)(
              s.default,
              {
                testID: 'learn-' + e.id,
                accessibilityRole: 'button',
                onPress: () => R(e),
                style: ({ pressed: e }) => ({
                  width: '31.5%',
                  flexGrow: 1,
                  minWidth: 220,
                  maxWidth: '33%',
                  minHeight: 148,
                  padding: 18,
                  gap: 10,
                  borderRadius: 18,
                  borderWidth: 1,
                  borderColor: e ? T.accent : T.line,
                  backgroundColor: T.surface,
                }),
                children: [
                  (0, C.jsx)(o.default, {
                    style: {
                      width: 44,
                      height: 44,
                      borderRadius: 14,
                      backgroundColor: T.accentSoft,
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                    children: (0, C.jsx)(u.Icon, {
                      name: S(e.id),
                      size: 24,
                      color: T.accent,
                    }),
                  }),
                  (0, C.jsx)(l.Copy, {
                    style: {
                      fontSize: 16,
                      lineHeight: 24,
                      fontFamily: 'Vazirmatn_600SemiBold',
                    },
                    children: (0, j.L)(e.title),
                  }),
                  (0, C.jsx)(l.Copy, {
                    numberOfLines: 2,
                    style: { fontSize: 12, lineHeight: 20, color: T.muted },
                    children: L(e.id),
                  }),
                  (0, C.jsx)(l.Copy, {
                    style: { fontSize: 12, lineHeight: 18, color: T.accent },
                    children: F(e),
                  }),
                ],
              },
              e.id,
            );
        return (0, C.jsxs)(n.ScrollView, {
          contentContainerStyle: {
            width: '100%',
            maxWidth: V ? 1120 : 720,
            alignSelf: 'center',
            padding: V ? 8 : 20,
            gap: 20,
          },
          children: [
            (0, C.jsxs)(o.default, {
              style: l.common.between,
              children: [
                (0, C.jsx)(l.PageTitle, {
                  style: { flex: 1, marginBottom: 0 },
                  title: p.notebookFa.learnTitle,
                  sub: (0, j.L)(
                    '\u0647\u0631 \u062f\u0631\u0633 \u06cc\u06a9 \u0648\u06cc\u062f\u06cc\u0648\u06cc \u06a9\u0648\u062a\u0627\u0647 \u0628\u0627 \u0635\u062f\u0627\u061b \u0628\u0639\u062f \u0647\u0645\u0627\u0646 \u0644\u062d\u0638\u0647 \u0627\u0645\u062a\u062d\u0627\u0646\u0634 \u06a9\u0646.',
                  ),
                }),
                !V &&
                  (0, C.jsx)(l.Button, {
                    secondary: !0,
                    onPress: v,
                    children: p.notebookFa.back,
                  }),
              ],
            }),
            z.map((e) => {
              const t = D.filter((t) => t.group === e.group);
              return t.length
                ? (0, C.jsxs)(
                    o.default,
                    {
                      style: { gap: 8 },
                      children: [
                        (0, C.jsx)(l.Copy, {
                          style: { fontFamily: 'Vazirmatn_600SemiBold' },
                          children: (0, j.L)(e.title),
                        }),
                        V
                          ? (0, C.jsx)(o.default, {
                              style: {
                                flexDirection: 'row-reverse',
                                flexWrap: 'wrap',
                                gap: 14,
                              },
                              children: t.map(q),
                            })
                          : (0, C.jsx)(l.Card, {
                              style: { padding: 0, gap: 0 },
                              children: t.map(G),
                            }),
                      ],
                    },
                    e.group,
                  )
                : null;
            }),
            (0, C.jsxs)(s.default, {
              testID: 'learn-text-guide',
              accessibilityRole: 'button',
              onPress: () => B(!0),
              style: ({ pressed: e }) => ({
                minHeight: 64,
                borderRadius: 18,
                paddingHorizontal: 18,
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 12,
                borderWidth: 1,
                borderColor: T.line,
                backgroundColor: e ? T.soft : T.surface,
              }),
              children: [
                (0, C.jsx)(o.default, {
                  style: {
                    width: 40,
                    height: 40,
                    borderRadius: 13,
                    backgroundColor: T.soft,
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                  children: (0, C.jsx)(u.Icon, {
                    name: 'text',
                    size: 22,
                    color: T.text,
                  }),
                }),
                (0, C.jsxs)(o.default, {
                  style: { flex: 1, minWidth: 0 },
                  children: [
                    (0, C.jsx)(l.Copy, {
                      style: { fontFamily: 'Vazirmatn_600SemiBold' },
                      children: (0, j.L)(
                        '\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0645\u062a\u0646\u06cc \u06a9\u0627\u0645\u0644',
                      ),
                    }),
                    (0, C.jsx)(l.Copy, {
                      numberOfLines: 1,
                      style: { fontSize: 11, color: T.muted },
                      children: (0, j.L)(
                        '\u0647\u0645\u0647\u0654 \u062f\u0631\u0633\u200c\u0647\u0627 \u0628\u0647\u200c\u0635\u0648\u0631\u062a \u0646\u0648\u0634\u062a\u0647\u060c \u0628\u0631\u0627\u06cc \u062e\u0648\u0627\u0646\u062f\u0646 \u06cc\u0627 \u0641\u0631\u0633\u062a\u0627\u062f\u0646',
                      ),
                    }),
                  ],
                }),
                (0, C.jsx)(u.Icon, {
                  name: 'chevron',
                  size: 18,
                  color: T.muted,
                }),
              ],
            }),
            W && (0, C.jsx)(b.LearnGuideText, { onClose: () => B(!1) }),
            _ &&
              (0, C.jsx)(
                y.LearnVideoView,
                {
                  lesson: {
                    title: (0, j.L)(_.title),
                    benefit: L(_.id),
                    steps: _.steps.map((e) => (0, j.L)(e)),
                    video: x.learnVideos[_.id],
                  },
                  onClose: () => R(null),
                  onTry: () => {
                    const e = _.id;
                    (R(null), I(e));
                  },
                  tryLabel: (0, j.L)(
                    '\u062f\u06cc\u062f\u0645\u060c \u0627\u0645\u062a\u062d\u0627\u0646\u0634 \u06a9\u0646',
                  ),
                  nextTitle: P && (0, j.L)(P.title),
                  onNext: P ? () => R(P) : void 0,
                },
                _.id,
              ),
          ],
        });
      }));
    var t = r(d[0]),
      s = e(r(d[1])),
      o = e(r(d[2])),
      n = r(d[3]),
      l = r(d[4]),
      c = r(d[5]),
      p = r(d[6]),
      u = r(d[7]),
      h = r(d[8]),
      f = r(d[9]),
      y = r(d[10]),
      b = r(d[11]),
      x = r(d[12]),
      j = r(d[13]),
      C = r(d[14]);
    const k = [
        {
          id: 'tour',
          group: 'start',
          title:
            '\u0622\u0634\u0646\u0627\u06cc\u06cc \u0628\u0627 \u0628\u0631\u0646\u0627\u0645\u0647',
          steps: [
            '\u067e\u0627\u06cc\u06cc\u0646 \u0635\u0641\u062d\u0647 \u067e\u0646\u062c \u0628\u062e\u0634 \u0627\u0633\u062a: \xab\u062f\u0627\u0634\u0628\u0648\u0631\u062f\xbb\u060c \xab\u0645\u0648\u062c\u0648\u062f\u06cc\xbb\u060c \xab\u0627\u0641\u0632\u0648\u062f\u0646\xbb\u060c \xab\u062f\u0627\u062f\u0647\u200c\u0647\u0627\xbb \u0648 \xab\u067e\u0631\u0648\u0641\u0627\u06cc\u0644\xbb.',
            '\u0647\u0631 \u06a9\u0627\u0644\u0627\u06cc \u0631\u0633\u06cc\u062f\u0647 \u0648 \u0647\u0631 \u0641\u0631\u0648\u0634 \u0631\u0627 \u062f\u0631 \xab\u0627\u0641\u0632\u0648\u062f\u0646\xbb \u062b\u0628\u062a \u06a9\u0646.',
            '\xab\u0645\u0648\u062c\u0648\u062f\u06cc\xbb \u06a9\u0627\u0644\u0627\u0647\u0627 \u0631\u0627 \u0646\u0634\u0627\u0646 \u0645\u06cc\u200c\u062f\u0647\u062f\u060c \xab\u062f\u0627\u062f\u0647\u200c\u0647\u0627\xbb \u06af\u0632\u0627\u0631\u0634\u060c \u062f\u0631\u0622\u0645\u062f\u060c \u0647\u0632\u06cc\u0646\u0647\u200c\u0647\u0627 \u0648 \u062a\u0627\u0631\u06cc\u062e\u0686\u0647\u060c \u0648 \xab\u067e\u0631\u0648\u0641\u0627\u06cc\u0644\xbb \u0627\u0634\u062a\u0631\u0627\u06a9\u060c \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0648 \u062a\u0646\u0638\u06cc\u0645\u0627\u062a.',
            '\xab\u0622\u0645\u0648\u0632\u0634\xbb \u06cc\u06a9\u06cc \u0627\u0632 \u062f\u06a9\u0645\u0647\u200c\u0647\u0627\u06cc \xab\u062f\u0627\u0634\u0628\u0648\u0631\u062f\xbb \u0627\u0633\u062a.',
          ],
        },
        {
          id: 'product',
          group: 'start',
          title:
            '\u062b\u0628\u062a \u0627\u0648\u0644\u06cc\u0646 \u06a9\u0627\u0644\u0627',
          steps: [
            '\xab\u0627\u0641\u0632\u0648\u062f\u0646\xbb \u0631\u0627 \u0628\u0632\u0646.',
            '\u0627\u0633\u0645 \u06a9\u0627\u0644\u0627 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633 \u0648 \xab\u0633\u0627\u062e\u062a \u06a9\u0627\u0644\u0627\u06cc \u062c\u062f\u06cc\u062f\xbb \u0631\u0627 \u0628\u0632\u0646.',
            '\u062a\u0639\u062f\u0627\u062f \u0648 \u0642\u06cc\u0645\u062a \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633.',
            '\xab\u062b\u0628\u062a\xbb \u0631\u0627 \u0628\u0632\u0646.',
          ],
        },
        {
          id: 'receive',
          group: 'start',
          title:
            '\u062b\u0628\u062a \u0648\u0631\u0648\u062f \u06a9\u0627\u0644\u0627',
          steps: [
            '\xab\u0627\u0641\u0632\u0648\u062f\u0646\xbb \u0631\u0627 \u0628\u0627\u0632 \u06a9\u0646.',
            '\xab\u0648\u0631\u0648\u062f \u06a9\u0627\u0644\u0627\xbb \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646.',
            '\u0627\u0633\u0645 \u0648 \u062a\u0639\u062f\u0627\u062f \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633.',
            '\xab\u062b\u0628\u062a\xbb \u0631\u0627 \u0628\u0632\u0646.',
          ],
        },
        {
          id: 'sell',
          group: 'start',
          title: '\u062b\u0628\u062a \u0641\u0631\u0648\u0634',
          steps: [
            '\xab\u0627\u0641\u0632\u0648\u062f\u0646\xbb \u0631\u0627 \u0628\u0627\u0632 \u06a9\u0646.',
            '\xab\u0641\u0631\u0648\u062e\u062a\u0647 \u0634\u062f\xbb \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646.',
            '\u0627\u0633\u0645 \u0648 \u062a\u0639\u062f\u0627\u062f \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633.',
            '\xab\u062b\u0628\u062a\xbb \u0631\u0627 \u0628\u0632\u0646.',
          ],
        },
        {
          id: 'recipes',
          group: 'start',
          title: '\u062f\u0633\u062a\u0648\u0631 \u0633\u0627\u062e\u062a',
          steps: [
            '\u062f\u0631 \xab\u0627\u0641\u0632\u0648\u062f\u0646\xbb \u062f\u06a9\u0645\u0647\u0654 \u0646\u0627\u0631\u0646\u062c\u06cc \xab\u062f\u0633\u062a\u0648\u0631 \u0633\u0627\u062e\u062a\xbb \u0631\u0627 \u0628\u0632\u0646.',
            '\xab\u062f\u0633\u062a\u0648\u0631 \u0633\u0627\u062e\u062a \u062c\u062f\u06cc\u062f\xbb \u0631\u0627 \u0628\u0632\u0646 \u0648 \u0645\u0648\u0627\u062f \u0644\u0627\u0632\u0645 \u0628\u0631\u0627\u06cc \u06f1 \u0639\u062f\u062f \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633.',
            '\u0647\u0632\u06cc\u0646\u0647\u200c\u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u0631\u0627 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646 \u0648 \u0630\u062e\u06cc\u0631\u0647 \u06a9\u0646.',
          ],
          makersOnly: !0,
        },
        {
          id: 'voice',
          group: 'daily',
          title: '\u062b\u0628\u062a \u0628\u0627 \u0635\u062f\u0627',
          steps: [
            '\u062f\u0631 \xab\u0627\u0641\u0632\u0648\u062f\u0646\xbb \xab\u0628\u0627 \u0635\u062f\u0627\xbb \u0631\u0627 \u0628\u0632\u0646.',
            '\u0628\u06af\u0648 \u0686\u0647 \u0631\u0633\u06cc\u062f \u0648 \u0686\u0647 \u0641\u0631\u0648\u062e\u062a\u06cc\u061b \u0686\u06a9 \u0648 \u0646\u0633\u06cc\u0647 \u0631\u0627 \u0647\u0645 \u0628\u06af\u0648.',
            '\u0631\u0648\u06cc \u062f\u0627\u06cc\u0631\u0647 \u0628\u0632\u0646\u061b \u0647\u0645\u0647 \u062e\u0648\u062f\u0634 \u062b\u0628\u062a \u0648 \u062f\u0631 \u06a9\u0627\u0631\u062a\u200c\u0647\u0627 \u0645\u0631\u062a\u0628 \u0645\u06cc\u200c\u0634\u0648\u062f.',
            '\u0627\u0634\u062a\u0628\u0627\u0647 \u0628\u0648\u062f\u061f \u0631\u0648\u06cc \u0645\u062f\u0627\u062f \u0647\u0645\u0627\u0646 \u0631\u062f\u06cc\u0641 \u0628\u0632\u0646.',
          ],
        },
        {
          id: 'basket',
          group: 'daily',
          title:
            '\u0634\u0631\u0648\u0639 \u0641\u0627\u06a9\u062a\u0648\u0631',
          steps: [
            '\u062f\u0631 \xab\u062f\u0627\u0634\u0628\u0648\u0631\u062f\xbb \u062f\u06a9\u0645\u0647\u0654 \xab\u0634\u0631\u0648\u0639 \u0641\u0627\u06a9\u062a\u0648\u0631\xbb \u0631\u0627 \u0628\u0632\u0646.',
            '\u0631\u0648\u06cc \xab+\xbb \u06a9\u0646\u0627\u0631 \u0645\u0634\u062a\u0631\u06cc \u0628\u0632\u0646 \u0648 \u0627\u0633\u0645\u0634 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u061b \u062e\u0627\u0644\u06cc \u0628\u0645\u0627\u0646\u062f\u060c \xab\u0645\u0634\u062a\u0631\u06cc \u062d\u0636\u0648\u0631\u06cc\xbb \u0627\u0633\u062a.',
            '\xab+ \u0627\u0641\u0632\u0648\u062f\u0646 \u06a9\u0627\u0644\u0627\xbb \u0631\u0627 \u0628\u0632\u0646 \u0648 \u0631\u0648\u06cc \u0639\u06a9\u0633 \u06a9\u0627\u0644\u0627\u0647\u0627 \u0628\u0632\u0646\u061b \xab\u0627\u0633\u06a9\u0646 \u0628\u0627\u0631\u06a9\u062f\xbb \u0648 \xab\u0635\u062f\u0627\xbb \u0647\u0645 \u0647\u0633\u062a.',
            '\u067e\u0631\u062f\u0627\u062e\u062a \u0631\u0627 \u0628\u0632\u0646: \xab\u0646\u0642\u062f\xbb\u060c \xab\u06a9\u0627\u0631\u062a \u0628\u0647 \u06a9\u0627\u0631\u062a\xbb\u060c \xab\u0686\u06a9\xbb \u06cc\u0627 \xab\u0646\u0633\u06cc\u0647\xbb.',
            '\xab\u062b\u0628\u062a \u0641\u0627\u06a9\u062a\u0648\u0631\xbb \u0631\u0627 \u0628\u0632\u0646\u061b \u06a9\u0627\u0631\u062a \u0633\u0628\u0632 \xab\u0641\u0627\u06a9\u062a\u0648\u0631 \u062b\u0628\u062a \u0634\u062f\xbb \u0645\u06cc\u200c\u0622\u06cc\u062f \u0648 \xab\u0686\u0627\u067e\xbb \u0647\u0645\u0627\u0646\u200c\u062c\u0627\u0633\u062a.',
          ],
        },
        {
          id: 'batch',
          group: 'daily',
          hidden: !0,
          title: '\u062b\u0628\u062a \u0628\u0627 \u0686\u062a',
          steps: [
            '\u062f\u0631 \xab\u0627\u0641\u0632\u0648\u062f\u0646\xbb \xab\u0686\u062a\xbb \u0631\u0627 \u0628\u0632\u0646.',
            '\u0645\u062f\u0644\u060c \u0633\u0627\u06cc\u0632\u060c \u0631\u0646\u06af \u0648 \u062a\u0639\u062f\u0627\u062f \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633 \u0648 \u06a9\u0644\u06cc\u062f \u0627\u0631\u0633\u0627\u0644 \u0631\u0627 \u0628\u0632\u0646.',
            '\xab\u062a\u0623\u06cc\u06cc\u062f \u0646\u0647\u0627\u06cc\u06cc\xbb \u0631\u0627 \u0628\u0632\u0646.',
            '\u06a9\u0627\u0631\u062a \u06a9\u0627\u0644\u0627 \u0631\u0627 \u0628\u0628\u06cc\u0646 \u0648 \xab\u062a\u0623\u06cc\u06cc\u062f \u0648 \u062b\u0628\u062a\xbb \u0631\u0627 \u0628\u0632\u0646.',
          ],
        },
        {
          id: 'waste',
          group: 'daily',
          title:
            '\u0645\u0635\u0631\u0641 \u0648 \u062f\u0648\u0631\u0631\u06cc\u0632',
          steps: [
            '\xab\u0627\u0641\u0632\u0648\u062f\u0646\xbb \u0631\u0627 \u0628\u0627\u0632 \u06a9\u0646.',
            '\xab\u062f\u0648\u0631\u0631\u06cc\u0632\xbb \u06cc\u0627 \xab\u0645\u0635\u0631\u0641 \u0634\u062f\xbb \u0631\u0627 \u0628\u0632\u0646.',
            '\u062a\u0639\u062f\u0627\u062f \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633 \u0648 \xab\u062b\u0628\u062a\xbb \u0631\u0627 \u0628\u0632\u0646.',
          ],
          makersOnly: !0,
        },
        {
          id: 'receipt',
          group: 'daily',
          title:
            '\u0630\u062e\u06cc\u0631\u0647 \u0648 \u0641\u0631\u0633\u062a\u0627\u062f\u0646 \u0631\u0633\u06cc\u062f \u0641\u0631\u0648\u0634',
          steps: [
            '\u062f\u0631 \xab\u0627\u0641\u0632\u0648\u062f\u0646\xbb \u062f\u06a9\u0645\u0647\u0654 \xab\u0631\u0633\u06cc\u062f\u0647\u0627\u06cc \u0641\u0631\u0648\u0634\xbb \u0631\u0627 \u0628\u0632\u0646.',
            '\u0641\u0631\u0648\u0634 \u0645\u0648\u0631\u062f\u0646\u0638\u0631 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646.',
            '\xab\u0686\u0627\u067e\xbb\u060c \xab\u0627\u0631\u0633\u0627\u0644\xbb \u06cc\u0627 \xab\u0641\u0627\u06cc\u0644\xbb \u0631\u0627 \u0628\u0632\u0646.',
          ],
        },
        {
          id: 'invoiceSign',
          group: 'daily',
          title:
            '\u0627\u0645\u0636\u0627\u06cc \u0641\u0627\u06a9\u062a\u0648\u0631',
          steps: [
            '\u0641\u0627\u06a9\u062a\u0648\u0631 \u0631\u0627 \u0628\u0627\u0632 \u06a9\u0646\u060c \u0645\u062b\u0644\u0627\u064b \u0628\u0627 \xab\u062f\u06cc\u062f\u0646 \u0641\u0627\u06a9\u062a\u0648\u0631\xbb \u0628\u0639\u062f \u0627\u0632 \u062b\u0628\u062a.',
            '\u0628\u0627\u0644\u0627\u06cc \u0641\u0627\u06a9\u062a\u0648\u0631 \xab\u0631\u0633\u0645\u06cc \u06a9\u0627\u0645\u0644\xbb \u0631\u0627 \u0628\u0632\u0646.',
            '\u0631\u0648\u06cc \u0628\u062e\u0634 \u0641\u0631\u0648\u0634\u0646\u062f\u0647 \u06cc\u0627 \u062e\u0631\u06cc\u062f\u0627\u0631 \u0628\u0632\u0646 \u0648 \u0646\u0627\u0645\u060c \u062a\u0644\u0641\u0646\u060c \u0646\u0634\u0627\u0646\u06cc \u06cc\u0627 \u06a9\u062f \u0627\u0642\u062a\u0635\u0627\u062f\u06cc \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633.',
            '\u0631\u0648\u06cc \xab\u0627\u0645\u0636\u0627\u06cc \u062e\u0631\u06cc\u062f\u0627\u0631\xbb \u06cc\u0627 \xab\u0645\u0647\u0631 \u0648 \u0627\u0645\u0636\u0627\u06cc \u0641\u0631\u0648\u0634\u0646\u062f\u0647\xbb \u0628\u0632\u0646\u060c \u0628\u0627 \u0627\u0646\u06af\u0634\u062a \u0627\u0645\u0636\u0627 \u06a9\u0646 \u0648 \xab\u0627\u0646\u062c\u0627\u0645 \u0634\u062f\xbb \u0631\u0627 \u0628\u0632\u0646.',
          ],
        },
        {
          id: 'reminders',
          group: 'daily',
          title: '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc\u200c\u0647\u0627',
          steps: [
            '\u062f\u0631 \xab\u062f\u0627\u0634\u0628\u0648\u0631\u062f\xbb \xab\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc\u200c\u0647\u0627\xbb \u0631\u0627 \u0628\u0627\u0632 \u06a9\u0646: \xab\u062e\u0631\u06cc\u062f\xbb\u060c \xab\u067e\u0631\u062f\u0627\u062e\u062a\xbb\u060c \xab\u0647\u0631 \u0647\u0641\u062a\u0647\xbb \u0648 \xab\u06a9\u0627\u0631\u0647\u0627\xbb.',
            '\xab+ \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u062a\u0627\u0632\u0647\xbb \u0631\u0627 \u0628\u0632\u0646 \u0648 \u06cc\u06a9\u06cc \u0627\u0632 \u0622\u0645\u0627\u062f\u0647\u200c\u0647\u0627 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u060c \u0645\u062b\u0644\u0627\u064b \xab\u0627\u06cc\u0646 \u06a9\u0627\u0644\u0627 \u0631\u0648 \u06cc\u0627\u062f\u0645 \u0628\u0646\u062f\u0627\u0632 \u0628\u062e\u0631\u0645\xbb.',
            '\u0631\u0648\u0632 \u0631\u0627 \u0628\u0632\u0646 (\xab\u0627\u0645\u0631\u0648\u0632\xbb\u060c \xab\u0641\u0631\u062f\u0627\xbb\u060c \xab\u067e\u0633\u200c\u0641\u0631\u062f\u0627\xbb \u06cc\u0627 \xab\u0631\u0648\u0632 \u062f\u06cc\u06af\u0631\xbb) \u0648 \u0633\u0627\u0639\u062a \u0631\u0627 \u0628\u0627 \u0627\u0646\u06af\u0634\u062a \u0631\u0648\u06cc \u0686\u0631\u062e \u0628\u0686\u0631\u062e\u0627\u0646.',
            '\u0633\u0631 \u0648\u0642\u062a \u062e\u0628\u0631\u062a \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645\u061b \u062f\u0631 \xab\u0627\u0631\u0633\u0627\u0644\u200c\u0634\u062f\u0647\xbb \u0628\u0627 \xab\u062f\u0648\u0628\u0627\u0631\u0647 \u06cc\u0627\u062f\u0645 \u0628\u0646\u062f\u0627\u0632\xbb \u0632\u0645\u0627\u0646 \u062a\u0627\u0632\u0647 \u0628\u06af\u0630\u0627\u0631.',
            '\u0628\u0627 \u0635\u062f\u0627 \u0647\u0645 \u0628\u06af\u0648 \xab\u0641\u0631\u062f\u0627 \u0628\u0627\u06cc\u062f \u06f5 \u062a\u0627 \u0634\u06cc\u0631 \u0628\u062e\u0631\u0645\xbb \u062a\u0627 \u0628\u0647 \u0644\u06cc\u0633\u062a \u062e\u0631\u06cc\u062f \u0628\u0631\u0648\u062f.',
          ],
        },
        {
          id: 'expiry',
          group: 'stock',
          title:
            '\u06a9\u0627\u0644\u0627\u0647\u0627\u06cc \u0631\u0648 \u0628\u0647 \u0627\u0646\u0642\u0636\u0627',
          steps: [
            '\u062f\u0631 \xab\u0645\u0648\u062c\u0648\u062f\u06cc\xbb \u0631\u0648\u06cc \u06a9\u0627\u0644\u0627 \u0628\u0632\u0646.',
            '\u062f\u0631 \u06a9\u0627\u0631\u062a \xab\u062a\u0627\u0631\u06cc\u062e \u0627\u0646\u0642\u0636\u0627\xbb\u060c \xab\u062b\u0628\u062a \u062a\u0627\u0631\u06cc\u062e \u0627\u0646\u0642\u0636\u0627\xbb \u0631\u0627 \u0628\u0632\u0646.',
            '\u0632\u0645\u0627\u0646 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646 \u0648 \xab\u0630\u062e\u06cc\u0631\u0647\xbb \u0631\u0627 \u0628\u0632\u0646.',
          ],
        },
        {
          id: 'units',
          group: 'stock',
          title:
            '\u0648\u0627\u062d\u062f\u0647\u0627 \u0648 \u06a9\u0627\u0631\u062a\u0646',
          steps: [
            '\u062f\u0631 \u0635\u0641\u062d\u0647\u0654 \u06a9\u0627\u0644\u0627 \xab\u0648\u06cc\u0631\u0627\u06cc\u0634\xbb \u0631\u0627 \u0628\u0632\u0646.',
            '\u062f\u0631 \xab\u0628\u0633\u062a\u0647\u200c\u0628\u0646\u062f\u06cc\xbb \u0628\u0646\u0648\u06cc\u0633 \u0647\u0631 \u06a9\u0627\u0631\u062a\u0646 \u0686\u0646\u062f \u062a\u0627\u0633\u062a.',
            '\u0645\u0648\u0642\u0639 \u062b\u0628\u062a \xab\u0648\u0631\u0648\u062f \u0628\u0627 \u0628\u0633\u062a\u0647\xbb \u0631\u0627 \u0631\u0648\u0634\u0646 \u06a9\u0646.',
          ],
        },
        {
          id: 'deliveries',
          group: 'stock',
          title:
            '\u0648\u0631\u0648\u062f\u06cc\u200c\u0647\u0627 \u0648 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f',
          steps: [
            '\u0645\u0648\u0642\u0639 \u062b\u0628\u062a \u0648\u0631\u0648\u062f \u06a9\u0627\u0644\u0627 \xab\u062c\u0632\u0626\u06cc\u0627\u062a \u0628\u06cc\u0634\u062a\u0631\xbb \u0631\u0627 \u0628\u0627\u0632 \u06a9\u0646 \u0648 \xab\u0641\u0631\u0648\u0634\u0646\u062f\u0647\xbb \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633.',
            '\u062f\u0631 \xab\u0645\u0648\u062c\u0648\u062f\u06cc\xbb \u0631\u0648\u06cc \u06a9\u0627\u0644\u0627 \u0628\u0632\u0646 \u0648 \u0632\u0628\u0627\u0646\u0647\u0654 \xab\u0648\u0631\u0648\u062f\u06cc\u200c\u0647\u0627\xbb \u0631\u0627 \u0628\u0627\u0632 \u06a9\u0646: \u0647\u0631 \u0628\u0627\u0631 \u0631\u0633\u06cc\u062f\u0646 \u06a9\u0627\u0644\u0627 \u0628\u0627 \u062a\u0627\u0631\u06cc\u062e\u060c \u062a\u0639\u062f\u0627\u062f\u060c \u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f \u0648 \u0641\u0631\u0648\u0634\u0646\u062f\u0647.',
            '\u062f\u0631 \xab\u062e\u0644\u0627\u0635\u0647\xbb\u060c \xab\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f\xbb \u06a9\u0646\u0627\u0631 \xab\u062e\u0631\u06cc\u062f \u0622\u062e\u0631\xbb \u0627\u0633\u062a\u061b \u0633\u0648\u062f \u0628\u0627 \u0647\u0645\u06cc\u0646 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u062d\u0633\u0627\u0628 \u0645\u06cc\u200c\u0634\u0648\u062f.',
          ],
        },
        {
          id: 'priceAdjust',
          group: 'stock',
          title:
            '\u062a\u063a\u06cc\u06cc\u0631 \u06af\u0631\u0648\u0647\u06cc \u0642\u06cc\u0645\u062a',
          steps: [
            '\u062f\u0631 \xab\u0645\u0648\u062c\u0648\u062f\u06cc\xbb \u0641\u06cc\u0644\u062a\u0631\u0647\u0627 \u0631\u0627 \u0628\u0627\u0632 \u06a9\u0646.',
            '\xab\u062a\u063a\u06cc\u06cc\u0631 \u06af\u0631\u0648\u0647\u06cc \u0642\u06cc\u0645\u062a\u200c\u0647\u0627\xbb \u0631\u0627 \u0628\u0632\u0646.',
            '\u062f\u0631\u0635\u062f \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u060c \u067e\u06cc\u0634\u200c\u0646\u0645\u0627\u06cc\u0634 \u0631\u0627 \u0628\u0628\u06cc\u0646 \u0648 \xab\u0627\u0639\u0645\u0627\u0644 \u062a\u063a\u06cc\u06cc\u0631\xbb \u0631\u0627 \u0628\u0632\u0646.',
          ],
        },
        {
          id: 'prices',
          group: 'stock',
          title:
            '\u0686\u0646\u062f \u0642\u06cc\u0645\u062a \u0628\u0631\u0627\u06cc \u06cc\u06a9 \u06a9\u0627\u0644\u0627',
          steps: [
            '\u062f\u0631 \xab\u0645\u0648\u062c\u0648\u062f\u06cc\xbb \u0631\u0648\u06cc \u06a9\u0627\u0644\u0627 \u0628\u0632\u0646 \u0648 \xab\u0648\u06cc\u0631\u0627\u06cc\u0634\xbb \u0631\u0627 \u0628\u0632\u0646.',
            '\u0632\u06cc\u0631 \xab\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634\xbb \xab\u0627\u0641\u0632\u0648\u062f\u0646 \u0642\u06cc\u0645\u062a \u062f\u06cc\u06af\u0631\xbb \u0631\u0627 \u0628\u0632\u0646\u061b \u0631\u062f\u06cc\u0641\u06cc \u0628\u0627 \u0646\u0627\u0645 \u0622\u0645\u0627\u062f\u0647 \u0645\u062b\u0644 \xab\u0642\u06cc\u0645\u062a \u0647\u0645\u06a9\u0627\u0631\xbb \u0645\u06cc\u200c\u0622\u06cc\u062f.',
            '\u0642\u06cc\u0645\u062a \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u061b \u0646\u0627\u0645 \u0631\u0627 \u0647\u0645 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc \u0639\u0648\u0636 \u06a9\u0646\u06cc. \u0647\u0631 \u06a9\u0627\u0644\u0627 \u062a\u0627 \u06f5 \u0642\u06cc\u0645\u062a \u062f\u0627\u0631\u062f \u0648 \xab\xd7\xbb \u0647\u0631 \u0631\u062f\u06cc\u0641 \u0631\u0627 \u0628\u0631\u0645\u06cc\u200c\u062f\u0627\u0631\u062f.',
            '\xab\u0630\u062e\u06cc\u0631\u0647 \u06a9\u0627\u0644\u0627\xbb \u0631\u0627 \u0628\u0632\u0646.',
            '\u0645\u0648\u0642\u0639 \u0641\u0631\u0648\u0634\u060c \u062f\u06a9\u0645\u0647\u0654 \u06a9\u0648\u0686\u06a9 \xab\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634\xbb \u0632\u06cc\u0631 \u0642\u06cc\u0645\u062a \u0631\u0627 \u0628\u0632\u0646 \u0648 \u062f\u0631 \xab\u06a9\u062f\u0627\u0645 \u0642\u06cc\u0645\u062a\u061f\xbb \u0642\u06cc\u0645\u062a \u062f\u06cc\u06af\u0631 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646.',
          ],
        },
        {
          id: 'home',
          group: 'reports',
          title:
            '\u062f\u0627\u0634\u0628\u0648\u0631\u062f \u0648 \u062a\u062d\u0644\u06cc\u0644 \u0631\u0648\u0632\u0627\u0646\u0647',
          steps: [
            '\u062f\u0631 \xab\u062f\u0627\u0634\u0628\u0648\u0631\u062f\xbb \u06a9\u0627\u0631\u062a \xab\u062a\u062d\u0644\u06cc\u0644 \u0631\u0648\u0632\u0627\u0646\u0647\xbb \u0631\u0627 \u0628\u0628\u06cc\u0646.',
            '\xab\u0622\u062e\u0631\u06cc\u0646 \u0641\u0639\u0627\u0644\u06cc\u062a\u200c\u0647\u0627\xbb \u0641\u0631\u0648\u0634 \u0648 \u0648\u0631\u0648\u062f \u062a\u0627\u0632\u0647 \u0631\u0627 \u0646\u0634\u0627\u0646 \u0645\u06cc\u200c\u062f\u0647\u062f.',
            '\u0628\u0631\u0627\u06cc \u062b\u0628\u062a \u0633\u0631\u06cc\u0639\u060c \xab\u0627\u0641\u0632\u0648\u062f\u0646\xbb \u0631\u0627 \u0628\u0632\u0646.',
          ],
        },
        {
          id: 'income',
          group: 'reports',
          title: '\u062f\u0631\u0622\u0645\u062f \u0648 \u0633\u0648\u062f',
          steps: [
            '\u062f\u0631 \xab\u062f\u0627\u062f\u0647\u200c\u0647\u0627\xbb \xab\u062f\u0631\u0622\u0645\u062f\xbb \u0631\u0627 \u0628\u0627\u0632 \u06a9\u0646.',
            '\u062f\u0631\u0622\u0645\u062f\u060c \u0647\u0632\u06cc\u0646\u0647 \u0648 \u0633\u0648\u062f \u0631\u0627 \u0628\u0628\u06cc\u0646.',
            '\u0628\u0627\u0632\u0647\u0654 \xab\u06f3\u06f0 \u0631\u0648\u0632\xbb \u0631\u0627 \u0628\u0631\u0627\u06cc \u06a9\u0644 \u0645\u0627\u0647 \u0628\u0632\u0646.',
          ],
        },
        {
          id: 'report',
          group: 'reports',
          title:
            '\u06af\u0632\u0627\u0631\u0634 \u0641\u0631\u0648\u0634 \u0648 \u0627\u0646\u0628\u0627\u0631',
          steps: [
            '\xab\u062f\u0627\u062f\u0647\u200c\u0647\u0627\xbb \u0631\u0627 \u0628\u0627\u0632 \u06a9\u0646.',
            '\u062f\u0631 \xab\u06af\u0632\u0627\u0631\u0634\xbb \u0628\u0627\u0632\u0647\u0654 \u0632\u0645\u0627\u0646\u06cc \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646.',
            '\u0646\u0645\u0648\u062f\u0627\u0631 \u0648 \u067e\u0631\u0641\u0631\u0648\u0634\u200c\u062a\u0631\u06cc\u0646 \u06a9\u0627\u0644\u0627\u0647\u0627 \u0631\u0627 \u0628\u0628\u06cc\u0646.',
          ],
        },
        {
          id: 'history',
          group: 'reports',
          title:
            '\u062a\u0627\u0631\u06cc\u062e\u0686\u0647 \u0648 \u0627\u0635\u0644\u0627\u062d',
          steps: [
            '\u062f\u0631 \xab\u062f\u0627\u062f\u0647\u200c\u0647\u0627\xbb \xab\u062a\u0627\u0631\u06cc\u062e\u0686\u0647\xbb \u0631\u0627 \u0628\u0627\u0632 \u06a9\u0646.',
            '\u0646\u0648\u0639 \u0648 \u0627\u0633\u0645 \u06a9\u0627\u0644\u0627 \u0631\u0627 \u0641\u06cc\u0644\u062a\u0631 \u06a9\u0646.',
            '\u062b\u0628\u062a \u0627\u0634\u062a\u0628\u0627\u0647 \u0631\u0627 \u0647\u0645\u0627\u0646\u200c\u062c\u0627 \u0627\u0635\u0644\u0627\u062d \u06a9\u0646.',
          ],
        },
        {
          id: 'ledger',
          group: 'accounts',
          title:
            '\u062f\u0641\u062a\u0631 \u062d\u0633\u0627\u0628 \u0627\u0634\u062e\u0627\u0635',
          steps: [
            '\u062f\u0631 \xab\u062f\u0627\u0634\u0628\u0648\u0631\u062f\xbb \xab\u062d\u0633\u0627\u0628\u200c\u0647\u0627\xbb \u0631\u0627 \u0628\u0632\u0646.',
            '\xab+ \u0634\u062e\u0635\xbb \u0631\u0627 \u0628\u0632\u0646 \u0648 \u0627\u0633\u0645 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633.',
            '\u0631\u0648\u06cc \u0627\u0633\u0645 \u0628\u0632\u0646 \u062a\u0627 \u062d\u0633\u0627\u0628\u0634 \u0631\u0627 \u0628\u0628\u06cc\u0646\u06cc.',
          ],
        },
        {
          id: 'cheques',
          group: 'accounts',
          title:
            '\u067e\u06cc\u06af\u06cc\u0631\u06cc \u0686\u06a9\u200c\u0647\u0627',
          steps: [
            '\u062f\u0631 \xab\u062f\u0627\u0634\u0628\u0648\u0631\u062f\xbb \xab\u0686\u06a9\u200c\u0647\u0627\xbb \u0631\u0627 \u0628\u0632\u0646 \u0648 \xab+ \u0686\u06a9\xbb \u0631\u0627 \u0628\u0632\u0646.',
            '\xab\u062b\u0628\u062a \u0686\u06a9\xbb \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646 \u0648 \u0637\u0631\u0641 \u062d\u0633\u0627\u0628 \u0648 \u0645\u0628\u0644\u063a \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633.',
            '\u0633\u0631\u0631\u0633\u06cc\u062f \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646 \u0648 \xab\u062b\u0628\u062a \u0686\u06a9\xbb \u0631\u0627 \u0628\u0632\u0646.',
          ],
        },
        {
          id: 'statements',
          group: 'accounts',
          title: '\u0635\u0648\u0631\u062a\u200c\u062d\u0633\u0627\u0628',
          steps: [
            '\u062f\u0631 \xab\u062d\u0633\u0627\u0628\u200c\u0647\u0627\xbb \u0631\u0648\u06cc \u0627\u0633\u0645 \u0634\u062e\u0635 \u0628\u0632\u0646.',
            '\xab+ \u062b\u0628\u062a\xbb \u0631\u0627 \u0628\u0632\u0646\u060c \xab\u0635\u0648\u0631\u062a\u200c\u062d\u0633\u0627\u0628\xbb \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646 \u0648 \u0628\u0627\u0632\u0647 \u0631\u0627 \u0628\u0632\u0646.',
            '\xab\u0627\u0631\u0633\u0627\u0644\xbb\u060c \xab\u0686\u0627\u067e\xbb \u06cc\u0627 \xab\u0630\u062e\u06cc\u0631\u0647 \u0639\u06a9\u0633 / PDF\xbb \u0631\u0627 \u0628\u0632\u0646.',
          ],
        },
        {
          id: 'club',
          group: 'accounts',
          title:
            '\u0628\u0627\u0634\u06af\u0627\u0647 \u0645\u0634\u062a\u0631\u06cc\u0627\u0646',
          steps: [
            '\u062f\u0631 \xab\u062f\u0627\u0634\u0628\u0648\u0631\u062f\xbb \u0631\u0648\u06cc \xab\u0628\u0627\u0634\u06af\u0627\u0647 \u0645\u0634\u062a\u0631\u06cc\u0627\u0646\xbb \u0628\u0632\u0646\u061b \u062f\u0631 \xab\u062d\u0633\u0627\u0628\u200c\u0647\u0627\xbb \u0647\u0645 \u062f\u06a9\u0645\u0647\u0654 \xab\u0628\u0627\u0634\u06af\u0627\u0647\xbb \u0647\u0633\u062a.',
            '\xab+ \u0639\u0636\u0648 \u062c\u062f\u06cc\u062f\xbb \u0631\u0627 \u0628\u0632\u0646\u060c \u0646\u0627\u0645 \u0648 \u0634\u0645\u0627\u0631\u0647\u0654 \u0645\u0648\u0628\u0627\u06cc\u0644 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633 \u0648 \xab\u0630\u062e\u06cc\u0631\u0647\xbb \u0631\u0627 \u0628\u0632\u0646\u061b \u0639\u0636\u0648 \u0628\u0627 \u0635\u0641\u0631 \u0627\u0645\u062a\u06cc\u0627\u0632 \u0645\u06cc\u200c\u0622\u06cc\u062f.',
            '\u062f\u0631 \xab\u0641\u0627\u06a9\u062a\u0648\u0631 \u0641\u0631\u0648\u0634\xbb \u0628\u0627 \xab+ \u0639\u0636\u0648 \u0628\u0627\u0634\u06af\u0627\u0647\xbb \u0645\u0634\u062a\u0631\u06cc \u0631\u0627 \u0647\u0645\u0627\u0646\u200c\u062c\u0627 \u0639\u0636\u0648 \u06a9\u0646\u061b \u0641\u0631\u0648\u0634 \u0628\u0647 \u0646\u0627\u0645 \u0627\u0648 \u062b\u0628\u062a \u0645\u06cc\u200c\u0634\u0648\u062f.',
            '\u0647\u0631 \u062e\u0631\u06cc\u062f \u0639\u0636\u0648 \u0627\u0645\u062a\u06cc\u0627\u0632 \u0645\u06cc\u200c\u0622\u0648\u0631\u062f\u061b \u062f\u0631 \u062e\u0631\u06cc\u062f \u0628\u0639\u062f\u06cc \xab\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u0645\u062a\u06cc\u0627\u0632\xbb \u0631\u0627 \u0628\u0632\u0646 \u062a\u0627 \u062a\u062e\u0641\u06cc\u0641 \u0628\u06af\u06cc\u0631\u062f.',
            '\u0631\u0648\u06cc \u0627\u0633\u0645 \u0639\u0636\u0648 \u0628\u0632\u0646 \u062a\u0627 \u0627\u0645\u062a\u06cc\u0627\u0632\u060c \u062c\u0645\u0639 \u062e\u0631\u06cc\u062f \u0648 \u0647\u0645\u0647\u0654 \u0627\u0645\u062a\u06cc\u0627\u0632\u0647\u0627\u06cc\u0634 \u0631\u0627 \u0628\u0628\u06cc\u0646\u06cc.',
          ],
        },
        {
          id: 'staff',
          group: 'accounts',
          title:
            '\u06a9\u0627\u0631\u0645\u0646\u062f\u0627\u0646: \u062f\u0633\u062a\u0631\u0633\u06cc \u0648 \u062d\u0642\u0648\u0642',
          steps: [
            '\u062f\u0631 \xab\u062f\u0627\u0634\u0628\u0648\u0631\u062f\xbb \xab\u06a9\u0627\u0631\u0645\u0646\u062f\u0627\u0646\xbb \u0631\u0627 \u0628\u0632\u0646.',
            '\xab\u0627\u0641\u0632\u0648\u062f\u0646 \u0628\u0647 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc\xbb \u0648 \xab\u0627\u0641\u0632\u0648\u062f\u0646 \u0647\u0645\u06a9\u0627\u0631\xbb \u0631\u0627 \u0628\u0632\u0646\u061b \u0646\u0627\u0645\u060c \u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0648 \u0631\u0645\u0632 \u0628\u06af\u0630\u0627\u0631.',
            '\u06cc\u06a9 \u0646\u0642\u0634 \u0631\u0627 \u0628\u0632\u0646\u060c \u0645\u062b\u0644\u0627\u064b \xab\u062d\u0633\u0627\u0628\u062f\u0627\u0631\xbb\u061b \u0628\u0627 \xab\u0634\u062e\u0635\u06cc\u200c\u0633\u0627\u0632\u06cc \u062f\u0633\u062a\u0631\u0633\u06cc\u200c\u0647\u0627\xbb \u0647\u0631 \u062a\u06cc\u06a9 \u0631\u0627 \u0639\u0648\u0636 \u06a9\u0646 \u0648 \xab\u0633\u0627\u062e\u062a \u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0645\u0646\u062f\xbb \u0631\u0627 \u0628\u0632\u0646.',
            '\u062f\u0631 \xab\u0645\u062f\u06cc\u0631\u06cc\u062a \u062d\u0633\u0627\u0628\u200c\u0647\u0627\xbb \u0628\u0627 \xab+ \u06a9\u0627\u0631\u0645\u0646\u062f \u062a\u0627\u0632\u0647\xbb \u06a9\u0627\u0631\u0645\u0646\u062f \u0631\u0627 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u060c \u0631\u0648\u06cc \u0627\u0633\u0645\u0634 \u0628\u0632\u0646 \u0648 \xab\u062d\u0642\u0648\u0642 \u0645\u0627\u0647\u0627\u0646\u0647 \u0648 \u0631\u0648\u0632 \u062d\u0642\u0648\u0642\xbb \u0631\u0627 \u0628\u06af\u0630\u0627\u0631.',
            '\u067e\u0631\u062f\u0627\u062e\u062a \u0648 \u0645\u0633\u0627\u0639\u062f\u0647 \u0631\u0627 \u0628\u0627 \xab\u2212 \u067e\u0631\u062f\u0627\u062e\u062a\xbb\u060c \u062c\u0631\u06cc\u0645\u0647 \u0631\u0627 \u0628\u0627 \xab\u2212 \u06a9\u0633\u0631\xbb \u0648 \u067e\u0627\u062f\u0627\u0634 \u0631\u0627 \u0628\u0627 \xab+ \u0637\u0644\u0628 \u062a\u0627\u0632\u0647\xbb \u062b\u0628\u062a \u06a9\u0646\u061b \xab\u0641\u06cc\u0634 \u062d\u0642\u0648\u0642\u06cc\xbb \u0647\u0645 \u0647\u0645\u0627\u0646\u200c\u062c\u0627\u0633\u062a.',
          ],
        },
        {
          id: 'devices',
          group: 'accounts',
          title:
            '\u062f\u0633\u062a\u06af\u0627\u0647\u200c\u0647\u0627 \u0648 \u0627\u0631\u062a\u0642\u0627',
          steps: [
            '\u062f\u0631 \xab\u0631\u0627\u06cc\u06af\u0627\u0646\xbb \u0648 \xab\u0627\u0633\u062a\u0627\u0646\u062f\u0627\u0631\u062f\xbb \u0647\u0645\u200c\u0632\u0645\u0627\u0646 \u06cc\u06a9 \u062f\u0633\u062a\u06af\u0627\u0647 \u06a9\u0627\u0631 \u0645\u06cc\u200c\u06a9\u0646\u062f: \u06af\u0648\u0634\u06cc\u060c \u062a\u0628\u0644\u062a \u06cc\u0627 \u0645\u0631\u0648\u0631\u06af\u0631.',
            '\u0648\u0631\u0648\u062f \u0628\u0627 \u062f\u0633\u062a\u06af\u0627\u0647 \u062a\u0627\u0632\u0647\u060c \u062f\u0633\u062a\u06af\u0627\u0647 \u0642\u0628\u0644\u06cc \u0631\u0627 \u062e\u0627\u0631\u062c \u0645\u06cc\u200c\u06a9\u0646\u062f \u0648 \u067e\u06cc\u0627\u0645\u06cc \u0645\u06cc\u200c\u0622\u06cc\u062f\u061b \xab\u0628\u0627\u0634\u0647\xbb \u0631\u0627 \u0628\u0632\u0646.',
            '\xab\u067e\u0644\u0627\u0633\xbb \u0647\u0645\u200c\u0632\u0645\u0627\u0646 \u06f2 \u062f\u0633\u062a\u06af\u0627\u0647 \u0648 \u062a\u0627 \u06f3 \u0647\u0645\u06a9\u0627\u0631 \u062f\u0627\u0631\u062f.',
            '\u0627\u06af\u0631 \u062f\u0631 \u06f7 \u0631\u0648\u0632 \u06af\u0630\u0634\u062a\u0647 \xab\u0627\u0633\u062a\u0627\u0646\u062f\u0627\u0631\u062f\xbb \u062e\u0631\u06cc\u062f\u06cc \u0648 \u062d\u0627\u0644\u0627 \xab\u067e\u0644\u0627\u0633\xbb \u0645\u06cc\u200c\u06af\u06cc\u0631\u06cc\u060c \u067e\u0648\u0644\u06cc \u06a9\u0647 \u062f\u0627\u062f\u06cc \u0627\u0632 \u0642\u06cc\u0645\u062a \u06a9\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f.',
            '\u062f\u0631 \xab\u067e\u0631\u0648\u0641\u0627\u06cc\u0644\xbb \xab\u0631\u0645\u0632 \u0639\u0628\u0648\u0631\xbb \u0631\u0627 \u0628\u0632\u0646 \u062a\u0627 \xab\u062f\u0633\u062a\u06af\u0627\u0647\u200c\u0647\u0627\u06cc \u0641\u0639\u0627\u0644\xbb \u0631\u0627 \u0628\u0628\u06cc\u0646\u06cc.',
          ],
        },
      ],
      v = (0, j.localized)({
        tour: '\u0628\u0628\u06cc\u0646 \u0647\u0631 \u0686\u06cc\u0632\u06cc \u062f\u0631 \u0628\u0631\u0646\u0627\u0645\u0647 \u06a9\u062c\u0627\u0633\u062a.',
        home: '\u0647\u0631 \u0631\u0648\u0632 \u06cc\u06a9 \u0646\u06af\u0627\u0647: \u0641\u0631\u0648\u0634\u060c \u0633\u0648\u062f \u0648 \u06cc\u06a9 \u067e\u06cc\u0634\u0646\u0647\u0627\u062f \u06a9\u0648\u062a\u0627\u0647.',
        batch:
          '\u0686\u0646\u062f \u06a9\u0627\u0644\u0627 \u0631\u0627 \u06cc\u06a9\u200c\u062c\u0627 \u0628\u0646\u0648\u06cc\u0633 \u0648 \u0628\u0627 \u06cc\u06a9 \u062a\u0623\u06cc\u06cc\u062f \u062b\u0628\u062a \u06a9\u0646.',
        basket:
          '\u0641\u0627\u06a9\u062a\u0648\u0631 \u0628\u0627\u0632 \u06a9\u0646\u060c \u06a9\u0627\u0644\u0627 \u0628\u0632\u0646\u060c \u067e\u0631\u062f\u0627\u062e\u062a \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646 \u0648 \u062b\u0628\u062a \u06a9\u0646.',
        receipt:
          '\u0631\u0633\u06cc\u062f \u0647\u0631 \u0641\u0631\u0648\u0634 \u0631\u0627 \u0628\u0631\u0627\u06cc \u0645\u0634\u062a\u0631\u06cc \u0628\u0641\u0631\u0633\u062a.',
        reminders:
          '\u062e\u0631\u06cc\u062f\u060c \u0642\u0633\u0637 \u0648 \u0642\u0628\u0636 \u0631\u0627 \u0633\u0631 \u0648\u0642\u062a \u06cc\u0627\u062f\u062a \u0645\u06cc\u200c\u0627\u0646\u062f\u0627\u0632\u062f.',
        priceAdjust:
          '\u0642\u06cc\u0645\u062a \u0686\u0646\u062f \u06a9\u0627\u0644\u0627 \u0631\u0627 \u06cc\u06a9\u200c\u062c\u0627 \u0628\u0627\u0644\u0627 \u06cc\u0627 \u067e\u0627\u06cc\u06cc\u0646 \u0628\u0628\u0631.',
        recipes:
          '\u0628\u0627 \u0641\u0631\u0648\u0634 \u0645\u062d\u0635\u0648\u0644\u060c \u0645\u0648\u0627\u062f \u0627\u0648\u0644\u06cc\u0647\u200c\u0627\u0634 \u062e\u0648\u062f\u06a9\u0627\u0631 \u06a9\u0645 \u0634\u0648\u062f.',
        report:
          '\u0641\u0631\u0648\u0634\u060c \u0633\u0648\u062f\u060c \u0648\u0631\u0648\u062f \u0648 \u062e\u0631\u0648\u062c \u06a9\u0627\u0644\u0627 \u062f\u0631 \u06cc\u06a9 \u0635\u0641\u062d\u0647.',
        income:
          '\u062f\u0631\u0622\u0645\u062f\u060c \u0647\u0632\u06cc\u0646\u0647 \u0648 \u0633\u0648\u062f \u0646\u0627\u062e\u0627\u0644\u0635 \u0647\u0631 \u0631\u0648\u0632 \u0648 \u0647\u0631 \u0645\u0627\u0647.',
        history:
          '\u0647\u0631 \u062b\u0628\u062a \u0631\u0627 \u067e\u06cc\u062f\u0627 \u06a9\u0646 \u0648 \u0627\u06af\u0631 \u0627\u0634\u062a\u0628\u0627\u0647 \u0628\u0648\u062f \u0627\u0635\u0644\u0627\u062d\u0634 \u06a9\u0646.',
        invoiceSign:
          '\u0641\u0627\u06a9\u062a\u0648\u0631 \u0631\u0633\u0645\u06cc \u0628\u0627 \u0645\u0634\u062e\u0635\u0627\u062a \u062e\u0631\u06cc\u062f\u0627\u0631 \u0648 \u0627\u0645\u0636\u0627\u06cc \u0627\u0648.',
        deliveries:
          '\u0628\u0628\u06cc\u0646 \u0647\u0631 \u06a9\u0627\u0644\u0627 \u06a9\u06cc\u060c \u0686\u0642\u062f\u0631 \u0648 \u0627\u0632 \u0686\u0647 \u06a9\u0633\u06cc \u0631\u0633\u06cc\u062f.',
        prices:
          '\u0628\u0631\u0627\u06cc \u0647\u0645\u06a9\u0627\u0631\u060c \u0639\u0645\u062f\u0647 \u06cc\u0627 \u0646\u0642\u062f\u06cc \u0642\u06cc\u0645\u062a \u062c\u062f\u0627 \u0628\u06af\u0630\u0627\u0631 \u0648 \u0645\u0648\u0642\u0639 \u0641\u0631\u0648\u0634 \u0627\u0646\u062a\u062e\u0627\u0628\u0634 \u06a9\u0646.',
        club: '\u0645\u0634\u062a\u0631\u06cc \u0628\u0627 \u0647\u0631 \u062e\u0631\u06cc\u062f \u0627\u0645\u062a\u06cc\u0627\u0632 \u0645\u06cc\u200c\u06af\u06cc\u0631\u062f \u0648 \u062f\u0631 \u062e\u0631\u06cc\u062f \u0628\u0639\u062f\u06cc \u062a\u062e\u0641\u06cc\u0641.',
        devices:
          '\u0647\u0631 \u0637\u0631\u062d \u0631\u0648\u06cc \u0686\u0646\u062f \u062f\u0633\u062a\u06af\u0627\u0647 \u06a9\u0627\u0631 \u0645\u06cc\u200c\u06a9\u0646\u062f \u0648 \u0627\u0631\u062a\u0642\u0627 \u0686\u0637\u0648\u0631 \u062d\u0633\u0627\u0628 \u0645\u06cc\u200c\u0634\u0648\u062f.',
      }),
      L = (e) => v[e] ?? p.learnBenefits[e] ?? '',
      S = (e) =>
        ({
          tour: 'home',
          home: 'home',
          product: 'add',
          receive: 'down',
          sell: 'up',
          voice: 'mic',
          batch: 'chat',
          basket: 'scan',
          receipt: 'receipt',
          reminders: 'bell',
          priceAdjust: 'edit',
          prices: 'tag',
          report: 'chart',
          income: 'wallet',
          history: 'data',
          ledger: 'user',
          cheques: 'cheque',
          statements: 'data',
          club: 'star',
          staff: 'profile',
          invoiceSign: 'edit',
          deliveries: 'list',
          devices: 'phone',
        })[e] || 'inventory',
      z = [
        { title: '\u0634\u0631\u0648\u0639', group: 'start' },
        {
          title: '\u062b\u0628\u062a \u0631\u0648\u0632\u0627\u0646\u0647',
          group: 'daily',
        },
        {
          title:
            '\u0645\u062f\u06cc\u0631\u06cc\u062a \u06a9\u0627\u0644\u0627',
          group: 'stock',
        },
        {
          title: '\u06af\u0632\u0627\u0631\u0634\u200c\u0647\u0627',
          group: 'reports',
        },
        {
          title:
            '\u062d\u0633\u0627\u0628\u200c\u0647\u0627 \u0648 \u062a\u06cc\u0645',
          group: 'accounts',
        },
      ];
    function w(e, t) {
      return (
        k.find(
          (s) =>
            !(s.id !== e || s.hidden || (s.makersOnly && 'reseller' === t)),
        ) ?? null
      );
    }
  },
  947,
  [2, 232, 99, 380, 407, 382, 580, 385, 481, 434, 948, 949, 713, 311, 338],
);
