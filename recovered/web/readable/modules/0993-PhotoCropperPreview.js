// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 993; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.PhotoCropperPreview = function () {
        const { colors: e, mode: x, toggle: C } = (0, s.useTheme)(),
          [w, y] = (0, t.useState)(''),
          [v, k] = (0, t.useState)(!0);
        return (
          (0, t.useEffect)(() => {
            ('undefined' != typeof window &&
              window.location.hash.includes('dark')) !==
              ('dark' === x) && C();
          }, []),
          (0, c.jsx)(l.SafeAreaInsetsContext.Provider, {
            value: p,
            children: (0, c.jsxs)(n.default, {
              testID: 'dev-photo-cropper',
              style: { flex: 1, backgroundColor: e.bg, padding: 16, gap: 12 },
              children: [
                (0, c.jsx)(f.Copy, {
                  style: { fontSize: 12, color: e.muted },
                  children:
                    '\u067e\u06cc\u0634\u200c\u0646\u0645\u0627\u06cc\u0634 \u0628\u0627 \u062f\u0627\u062f\u0647 \u0633\u0627\u062e\u062a\u06af\u06cc (\u0641\u0642\u0637 \u0646\u0633\u062e\u0647\u0654 \u062a\u0648\u0633\u0639\u0647)',
                }),
                !!w &&
                  (0, c.jsx)(o.default, {
                    testID: 'dev-photo-cropper-saved',
                    source: { uri: w },
                    style: {
                      width: 240,
                      height: 240,
                      borderWidth: 1,
                      borderColor: e.line,
                    },
                  }),
                v &&
                  (0, c.jsx)(h.PhotoCropper, {
                    source: u,
                    name: '\u06a9\u0641\u0634 \u0646\u0645\u0648\u0646\u0647',
                    onCancel: () => k(!1),
                    onSave: (e) => {
                      (y(e), k(!1));
                    },
                  }),
              ],
            }),
          })
        );
      }));
    var t = r(d[0]),
      o = e(r(d[1])),
      n = e(r(d[2])),
      l = r(d[3]),
      s = r(d[4]),
      f = r(d[5]),
      h = r(d[6]),
      c = r(d[7]);
    const u = {
        uri:
          'data:image/svg+xml;charset=utf-8,' +
          encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">\n<rect width="1200" height="900" fill="#dfe6ee"/>\n<path d="M40 560 C60 380 200 300 330 330 C420 350 470 420 560 430 C700 445 760 380 860 420 C990 470 1150 520 1170 640 L1170 700 C1170 740 1140 760 1100 760 L90 760 C50 760 30 730 32 690 Z" fill="#1d1f24"/>\n<path d="M32 660 L1170 660 L1170 720 C1170 760 1140 790 1100 790 L80 790 C45 790 30 760 32 720 Z" fill="#ecebe6"/>\n<path d="M300 520 C460 470 640 560 820 520" stroke="#ffffff" stroke-width="26" fill="none" stroke-linecap="round"/>\n<path d="M330 330 C360 250 420 230 470 260" stroke="#ffffff" stroke-width="16" fill="none"/>\n<g stroke="#f5f5f2" stroke-width="10" stroke-linecap="round"><line x1="520" y1="420" x2="560" y2="380"/><line x1="580" y1="430" x2="620" y2="390"/><line x1="640" y1="435" x2="680" y2="395"/><line x1="700" y1="432" x2="740" y2="392"/></g>\n<text x="600" y="860" font-family="Tahoma, sans-serif" font-size="34" text-anchor="middle" fill="#9a9a96">FAKE PRODUCT \u2014 preview only</text>\n</svg>',
          ),
        width: 1200,
        height: 900,
      },
      p = { top: 30, bottom: 48, left: 0, right: 0 };
  },
  993,
  [2, 168, 99, 342, 382, 407, 775, 338],
);
