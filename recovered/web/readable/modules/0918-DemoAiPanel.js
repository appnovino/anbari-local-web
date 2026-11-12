// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 918; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.DemoAiPanel = function ({
        kind: e,
        products: o = [],
        onApply: f,
        onClose: j,
      }) {
        const { colors: x } = (0, n.useTheme)(),
          C = (0, t.useMemo)(() => (0, u.demoAiAnswer)(e, o), [e]),
          [L, S] = (0, t.useState)(!1),
          [_, z] = (0, t.useState)(''),
          A = 'image' === e && p.AI_PHOTOS,
          P =
            'voice' === e
              ? (0, c.L)(
                  '\u0635\u062f\u0627\u06cc \u0646\u0645\u0648\u0646\u0647',
                )
              : A
                ? (0, c.L)('\u0639\u06a9\u0633 \u0646\u0645\u0648\u0646\u0647')
                : (0, c.L)('\u0686\u062a \u0646\u0645\u0648\u0646\u0647');
        async function b() {
          (S(!0), z(''));
          try {
            await f(C.drafts);
          } catch (e) {
            z((0, y.message)(e));
          } finally {
            S(!1);
          }
        }
        return (0, h.jsxs)(s.default, {
          testID: 'demo-ai-panel',
          style: l.common.gap,
          children: [
            (0, h.jsx)(l.Copy, { style: l.common.title, children: P }),
            (0, h.jsxs)(l.Card, {
              style: { borderColor: x.accent, gap: 8 },
              children: [
                (0, h.jsx)(l.Copy, {
                  style: { fontSize: 12, color: x.muted },
                  children: A
                    ? (0, c.L)(
                        '\u0627\u06cc\u0646 \u0639\u06a9\u0633 \u0631\u0627 \u0641\u0631\u0633\u062a\u0627\u062f\u06cc:',
                      )
                    : (0, c.L)(
                        '\u0627\u06cc\u0646 \u0631\u0627 \u06af\u0641\u062a\u06cc:',
                      ),
                }),
                (0, h.jsx)(l.Copy, {
                  testID: 'demo-ai-said',
                  style: { fontFamily: 'Vazirmatn_600SemiBold' },
                  children: C.said,
                }),
                (0, h.jsx)(l.Copy, {
                  style: { fontSize: 12, color: x.muted },
                  children: (0, c.L)(
                    '\u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u0627\u06cc\u0646\u200c\u0647\u0627 \u0631\u0627 \u0646\u0648\u0634\u062a:',
                  ),
                }),
                C.lines.map((e) => (0, h.jsx)(l.Copy, { children: e }, e)),
                (0, h.jsx)(l.Copy, {
                  style: { fontSize: 12, lineHeight: 20, color: x.muted },
                  children: (0, c.L)(
                    '\u0627\u06cc\u0646 \u06cc\u06a9 \u062c\u0648\u0627\u0628 \u0646\u0645\u0648\u0646\u0647 \u0627\u0633\u062a \u0648 \u0628\u0647 \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc \u0641\u0631\u0633\u062a\u0627\u062f\u0647 \u0646\u0634\u062f. \u062f\u0631 \u0645\u063a\u0627\u0632\u0647\u0654 \u062e\u0648\u062f\u062a \u0647\u0631 \u0686\u0647 \u0628\u06af\u0648\u06cc\u06cc\u060c \u0647\u0645\u06cc\u0646\u200c\u0637\u0648\u0631 \u0646\u0648\u0634\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                  ),
                }),
              ],
            }),
            !!_ &&
              (0, h.jsx)(l.Copy, {
                accessibilityRole: 'alert',
                style: { color: x.danger, fontSize: 13 },
                children: _,
              }),
            (0, h.jsx)(l.Button, {
              testID: 'demo-ai-apply',
              disabled: L || !C.drafts.length,
              onPress: () => {
                b();
              },
              children: (0, c.L)(
                '\u062b\u0628\u062a \u062f\u0631 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0646\u0645\u0648\u0646\u0647',
              ),
            }),
            (0, h.jsx)(l.Button, {
              secondary: !0,
              onPress: j,
              children: (0, c.L)('\u0628\u0627\u0632\u06af\u0634\u062a'),
            }),
          ],
        });
      }));
    var e,
      t = r(d[0]),
      o = r(d[1]),
      s = (e = o) && e.__esModule ? e : { default: e },
      l = r(d[2]),
      n = r(d[3]),
      c = r(d[4]),
      y = r(d[5]),
      u = r(d[6]),
      p = r(d[7]),
      h = r(d[8]);
  },
  918,
  [2, 99, 407, 382, 311, 415, 919, 494, 338],
);
