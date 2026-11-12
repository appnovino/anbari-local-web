// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 708; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.BatchTutorial = function ({ visible: e, onClose: j, onSupport: y }) {
        const { colors: v } = (0, c.useTheme)(),
          C = (0, i.useSafeAreaInsets)(),
          { width: I, height: L } = (0, o.default)(),
          M = b.learnVideos.batch,
          _ = Math.min(420, I - 40),
          k = Math.max(
            160,
            Math.min(
              (16 * (_ - 36)) / 9,
              L - C.top - C.bottom - (y ? 250 : 190),
            ),
          ),
          B = (9 * k) / 16;
        return (0, x.jsx)(s.Modal, {
          visible: e,
          transparent: !0,
          animationType: 'fade',
          onRequestClose: j,
          children: (0, x.jsxs)(t.default, {
            style: {
              flex: 1,
              backgroundColor: '#08090bbb',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 20,
              paddingTop: C.top + 20,
              paddingBottom: C.bottom + 20,
            },
            children: [
              (0, x.jsx)(u.Backdrop, {
                testID: 'batch-video-backdrop',
                onClose: j,
              }),
              (0, x.jsx)(n.PullCard, {
                onClose: j,
                style: { width: '100%', maxWidth: 420 },
                children: (0, x.jsxs)(h.Card, {
                  testID: 'batch-video-popup',
                  style: { backgroundColor: v.bg },
                  children: [
                    (0, x.jsx)(u.PopupHeader, {
                      testID: 'batch-video-close',
                      title: (0, f.L)(
                        '\u062b\u0628\u062a \u0628\u0627 \u0686\u062a',
                      ),
                      titleStyle: h.common.title,
                      onClose: j,
                    }),
                    M
                      ? (0, x.jsx)(t.default, {
                          style: { alignItems: 'center' },
                          children:
                            e &&
                            (0, x.jsx)(p.LearnVideo, {
                              video: M.video,
                              poster: M.poster,
                              width: B,
                              height: k,
                            }),
                        })
                      : (0, x.jsx)(t.default, {
                          style: { gap: 10 },
                          children: l.fa.batchTutorial.map((e, t) =>
                            (0, x.jsxs)(
                              h.Copy,
                              {
                                style: { fontSize: 14, lineHeight: 26 },
                                children: [
                                  (t + 1).toLocaleString((0, f.numberLocale)()),
                                  '\u060c ',
                                  e,
                                ],
                              },
                              e,
                            ),
                          ),
                        }),
                    (0, x.jsx)(h.Button, {
                      testID: 'batch-video-ok',
                      onPress: j,
                      children: (0, f.L)('\u062a\u0623\u06cc\u06cc\u062f'),
                    }),
                    y &&
                      (0, x.jsx)(h.Button, {
                        testID: 'batch-video-support',
                        secondary: !0,
                        onPress: y,
                        children: (0, f.L)(
                          '\u0633\u0624\u0627\u0644 \u062f\u0627\u0631\u0645',
                        ),
                      }),
                  ],
                }),
              }),
            ],
          }),
        });
      }));
    var t = e(r(d[0])),
      o = e(r(d[1])),
      s = r(d[2]),
      n = r(d[3]),
      i = r(d[4]),
      l = r(d[5]),
      c = r(d[6]),
      h = r(d[7]),
      u = r(d[8]),
      p = r(d[9]),
      b = r(d[10]),
      f = r(d[11]),
      x = r(d[12]);
  },
  708,
  [99, 257, 381, 515, 342, 492, 382, 407, 533, 709, 713, 311, 338],
);
