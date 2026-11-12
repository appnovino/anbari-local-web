// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 917; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.FeatureGuide = function ({ tip: e, onClose: j, onAction: _ }) {
        const { colors: k } = (0, h.useTheme)(),
          I = (0, u.useSafeAreaInsets)();
        if (!e) return null;
        const S = C[e];
        return (0, b.jsx)(l.Modal, {
          visible: !0,
          transparent: !0,
          animationType: 'fade',
          onRequestClose: j,
          children: (0, b.jsxs)(o.default, {
            style: {
              flex: 1,
              backgroundColor: '#08090baa',
              padding: 12,
              paddingTop: I.top + 12,
              paddingBottom: I.bottom + 12,
              justifyContent: 'center',
              alignItems: 'center',
            },
            children: [
              (0, b.jsx)(p.Backdrop, { testID: 'guide-backdrop', onClose: j }),
              (0, b.jsx)(s.PullCard, {
                onClose: j,
                style: {
                  width: '100%',
                  maxWidth: 500,
                  maxHeight: '94%',
                  flexShrink: 1,
                },
                children: (0, b.jsx)(f.Card, {
                  style: { flexShrink: 1, padding: 0 },
                  children: (0, b.jsxs)(c.ScrollView, {
                    contentContainerStyle: { padding: 18, gap: 14 },
                    children: [
                      (0, b.jsx)(o.default, {
                        style: {
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
                        },
                        children: (0, b.jsx)(t.default, {
                          accessibilityRole: 'button',
                          accessibilityLabel: (0, y.L)(
                            '\u0628\u0633\u062a\u0646',
                          ),
                          onPress: j,
                          style: {
                            width: 36,
                            height: 36,
                            borderRadius: 10,
                            borderWidth: n.default.hairlineWidth,
                            borderColor: k.line,
                            backgroundColor: k.soft,
                            alignItems: 'center',
                            justifyContent: 'center',
                          },
                          children: (0, b.jsx)(x.Icon, {
                            name: 'close',
                            color: k.text,
                          }),
                        }),
                      }),
                      (0, b.jsx)(f.Copy, {
                        style: f.common.title,
                        children: S.title,
                      }),
                      S.steps.map((e, t) =>
                        (0, b.jsxs)(
                          o.default,
                          {
                            style: {
                              flexDirection: 'row-reverse',
                              alignItems: 'flex-start',
                              gap: 10,
                            },
                            children: [
                              (0, b.jsx)(o.default, {
                                style: {
                                  width: 31,
                                  height: 31,
                                  borderRadius: 10,
                                  backgroundColor: k.accentSoft,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                },
                                children: (0, b.jsx)(f.Copy, {
                                  children: (t + 1).toLocaleString(
                                    (0, y.numberLocale)(),
                                  ),
                                }),
                              }),
                              (0, b.jsx)(f.Copy, {
                                style: [f.common.flex, { lineHeight: 25 }],
                                children: e,
                              }),
                            ],
                          },
                          e,
                        ),
                      ),
                      (0, b.jsx)(f.Button, {
                        onPress: () => {
                          (j(), _(e));
                        },
                        children: S.action,
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        });
      }));
    var t = e(r(d[0])),
      n = e(r(d[1])),
      o = e(r(d[2])),
      l = r(d[3]),
      s = r(d[4]),
      c = r(d[5]),
      u = r(d[6]),
      h = r(d[7]),
      f = r(d[8]),
      x = r(d[9]),
      p = r(d[10]),
      y = r(d[11]),
      j = r(d[12]),
      b = r(d[13]);
    const C = (0, y.localized)({
      low_stock_alarm: {
        title:
          '\u0647\u0634\u062f\u0627\u0631 \u06a9\u0645\u0628\u0648\u062f \u0645\u0648\u062c\u0648\u062f\u06cc',
        steps: [
          '\u062f\u0627\u0645\u0646\u0647 \xab\u0647\u0645\u0647 \u06a9\u0627\u0644\u0627\u0647\u0627\xbb \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f.',
          '\u0634\u0631\u0637 \xab\u0645\u0648\u062c\u0648\u062f\u06cc \u06a9\u0645\u062a\u0631 \u06cc\u0627 \u0645\u0633\u0627\u0648\u06cc\xbb \u0648 \u062d\u062f \u062f\u0644\u062e\u0648\u0627\u0647 \u0631\u0627 \u0628\u06af\u0630\u0627\u0631\u06cc\u062f.',
          '\u0647\u0634\u062f\u0627\u0631 \u0631\u0627 \u0630\u062e\u06cc\u0631\u0647 \u06a9\u0646\u06cc\u062f \u062a\u0627 \u06a9\u0645\u0628\u0648\u062f\u0647\u0627 \u0631\u0627 \u0628\u0647\u200c\u0645\u0648\u0642\u0639 \u0628\u0628\u06cc\u0646\u06cc\u062f.',
        ],
        action:
          '\u0633\u0627\u062e\u062a \u0647\u0634\u062f\u0627\u0631 \u06a9\u0645\u0628\u0648\u062f',
      },
      team_invite: {
        title: '\u062f\u0639\u0648\u062a \u0647\u0645\u06a9\u0627\u0631',
        steps: [
          '\u062f\u0631 \xab\u062f\u0627\u0634\u0628\u0648\u0631\u062f\xbb \u062f\u06a9\u0645\u0647\u0654 \xab\u06a9\u0627\u0631\u06a9\u0646\u0627\u0646\xbb \u0631\u0627 \u0628\u0632\u0646\u06cc\u062f.',
          '\u0627\u06cc\u0645\u06cc\u0644 \u0648 \u0646\u0642\u0634 \u0647\u0645\u06a9\u0627\u0631 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u0648 \u062f\u0639\u0648\u062a \u062e\u0635\u0648\u0635\u06cc \u0631\u0627 \u0627\u0631\u0633\u0627\u0644 \u06a9\u0646\u06cc\u062f.',
        ],
        action:
          '\u0631\u0641\u062a\u0646 \u0628\u0647 \u0628\u062e\u0634 \u0647\u0645\u06a9\u0627\u0631\u0627\u0646',
      },
      barcode: {
        title:
          '\u0627\u062a\u0635\u0627\u0644 \u0628\u0627\u0631\u06a9\u062f \u0628\u0647 \u06a9\u0627\u0644\u0627',
        steps: [
          '\u06a9\u0627\u0644\u0627\u06cc \u0645\u0648\u0631\u062f\u0646\u0638\u0631 \u0631\u0627 \u0627\u0632 \u0645\u0648\u062c\u0648\u062f\u06cc \u0628\u0627\u0632 \u06a9\u0646\u06cc\u062f.',
          '\u062f\u0631 \u0648\u06cc\u0631\u0627\u06cc\u0634 \u06a9\u0627\u0644\u0627\u060c \u0628\u0627\u0631\u06a9\u062f \u0631\u0627 \u062b\u0628\u062a \u0648 \u0630\u062e\u06cc\u0631\u0647 \u06a9\u0646\u06cc\u062f.',
        ],
        action:
          '\u0628\u0627\u0632\u06a9\u0631\u062f\u0646 \u0645\u0648\u062c\u0648\u062f\u06cc',
      },
      excel_import: {
        title:
          '\u0648\u0631\u0648\u062f \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0627\u0632 \u0627\u06a9\u0633\u0644',
        steps: [
          '\u0641\u0627\u06cc\u0644 \u0627\u06a9\u0633\u0644 \u06cc\u0627 \u0633\u06cc\u200c\u0627\u0633\u200c\u0648\u06cc \u0631\u0627 \u062f\u0631 \u0628\u062e\u0634 \u062f\u0627\u062f\u0647\u200c\u0647\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f.',
          '\u067e\u06cc\u0634\u200c\u0646\u0645\u0627\u06cc\u0634 \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0631\u0627 \u0628\u0631\u0631\u0633\u06cc \u0648 \u0633\u067e\u0633 \u062a\u0623\u06cc\u06cc\u062f \u06a9\u0646\u06cc\u062f.',
        ],
        action:
          '\u0631\u0641\u062a\u0646 \u0628\u0647 \u0648\u0631\u0648\u062f \u0627\u06a9\u0633\u0644',
      },
      batch_chat: {
        title:
          '\u062b\u0628\u062a \u06af\u0631\u0648\u0647\u06cc \u06a9\u0627\u0644\u0627\u0647\u0627',
        steps: [
          j.AI_PHOTOS
            ? '\u0628\u0631\u0627\u06cc \u0647\u0631 \u067e\u06cc\u0627\u0645\u060c \u0639\u06a9\u0633 \u06cc\u0627 \u0646\u0627\u0645 \u06a9\u0627\u0644\u0627 \u0648 \u062a\u0648\u0636\u06cc\u062d \u06a9\u0648\u062a\u0627\u0647 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u062f.'
            : '\u0628\u0631\u0627\u06cc \u0647\u0631 \u067e\u06cc\u0627\u0645\u060c \u0646\u0627\u0645 \u06a9\u0627\u0644\u0627 \u0648 \u062a\u0648\u0636\u06cc\u062d \u06a9\u0648\u062a\u0627\u0647 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u062f.',
          '\u0647\u0645\u0647 \u067e\u06cc\u0627\u0645\u200c\u0647\u0627 \u0631\u0627 \u06cc\u06a9\u200c\u062c\u0627 \u0628\u0631\u0627\u06cc \u0628\u0631\u0631\u0633\u06cc \u0628\u0641\u0631\u0633\u062a\u06cc\u062f \u0648 \u067e\u06cc\u0634\u200c\u0646\u0648\u06cc\u0633 \u0631\u0627 \u062a\u0623\u06cc\u06cc\u062f \u06a9\u0646\u06cc\u062f.',
        ],
        action:
          '\u0628\u0627\u0632\u06a9\u0631\u062f\u0646 \u062b\u0628\u062a \u06af\u0631\u0648\u0647\u06cc',
      },
    });
  },
  917,
  [232, 17, 99, 381, 515, 380, 342, 382, 407, 385, 533, 311, 494, 338],
);
