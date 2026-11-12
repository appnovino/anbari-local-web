// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 712; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'LEARN_SAVE_ROW', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }),
      (_e.LearnVideoSave = function ({ state: e, onSave: y }) {
        const { colors: h } = (0, c.useTheme)(),
          j = (e, n, c = h.muted) =>
            (0, v.jsxs)(s.default, {
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
                minHeight: p,
              },
              children: [
                e
                  ? (0, v.jsx)(o.Icon, { name: e, size: 16, color: c })
                  : (0, v.jsx)(t.default, { size: 'small', color: h.accent }),
                (0, v.jsx)(l.Copy, {
                  style: {
                    fontSize: 13,
                    lineHeight: 20,
                    color: c,
                    fontFamily: 'Vazirmatn_700Bold',
                  },
                  children: n,
                }),
              ],
            });
        return 'saved' === e
          ? (0, v.jsx)(s.default, {
              testID: 'lesson-video-saved',
              children: j(
                'check',
                (0, f.L)(
                  '\u0630\u062e\u06cc\u0631\u0647 \u0634\u062f\u061b \u0628\u062f\u0648\u0646 \u0627\u06cc\u0646\u062a\u0631\u0646\u062a \u0647\u0645 \u067e\u062e\u0634 \u0645\u06cc\u200c\u0634\u0648\u062f',
                ),
              ),
            })
          : 'object' == typeof e
            ? (0, v.jsx)(s.default, {
                testID: 'lesson-video-saving',
                accessibilityLiveRegion: 'polite',
                children: j(
                  null,
                  null === e.progress
                    ? (0, f.L)(
                        '\u062f\u0631 \u062d\u0627\u0644 \u0630\u062e\u06cc\u0631\u0647\u2026',
                      )
                    : (0, f.L)(
                        '\u062f\u0631 \u062d\u0627\u0644 \u0630\u062e\u06cc\u0631\u0647\u2026 {n}\u066a',
                        {
                          n: (0, u.formatGrouped)(
                            Math.round(100 * e.progress),
                            0,
                          ),
                        },
                      ),
                ),
              })
            : (0, v.jsx)(n.default, {
                testID: 'lesson-video-save',
                accessibilityRole: 'button',
                onPress: y,
                hitSlop: 6,
                style: ({ pressed: e }) => ({ opacity: e ? 0.6 : 1 }),
                children:
                  'failed' === e
                    ? j(
                        'alert',
                        (0, f.L)(
                          '\u0630\u062e\u06cc\u0631\u0647 \u0646\u0634\u062f\u061b \u062f\u0648\u0628\u0627\u0631\u0647 \u0628\u0632\u0646',
                        ),
                        h.text,
                      )
                    : j(
                        'download',
                        (0, f.L)(
                          '\u0630\u062e\u06cc\u0631\u0647 \u0628\u0631\u0627\u06cc \u0628\u062f\u0648\u0646 \u0627\u06cc\u0646\u062a\u0631\u0646\u062a',
                        ),
                        h.accent,
                      ),
              });
      }));
    var t = e(r(d[0])),
      n = e(r(d[1])),
      s = e(r(d[2])),
      o = r(d[3]),
      l = r(d[4]),
      c = r(d[5]),
      u = r(d[6]),
      f = r(d[7]),
      v = r(d[8]);
    const p = 40;
  },
  712,
  [217, 232, 99, 385, 407, 382, 434, 311, 338],
);
