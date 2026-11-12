// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 744; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.OversellSetting = function ({ shop: e, style: l }) {
        const { colors: f } = (0, v.useTheme)(),
          S = (0, h.scoped)(e.id, 'notebook-shop'),
          { data: y } = (0, h.useSwr)(S, () => (0, c.readNotebookShop)(e)),
          [k, _] = (0, t.useState)(null),
          [j, w] = (0, t.useState)(''),
          x = k ?? (0, n.oversellMode)(y?.settings);
        async function D(t) {
          if (t === x) return;
          const l = x;
          (_(t), w(''));
          try {
            (await (0, c.patchNotebookSettings)(e, { oversell: t }),
              S &&
                h.swrStore
                  .revalidate(S, () => (0, c.readNotebookShop)(e))
                  .catch(() => {}));
          } catch (e) {
            (_(l), w((0, u.message)(e)));
          }
        }
        return (0, p.jsxs)(o.default, {
          testID: 'oversell-setting',
          style: [{ gap: 8 }, l],
          children: [
            (0, p.jsx)(b.Copy, {
              children: (0, s.L)(
                '\u0641\u0631\u0648\u0634 \u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 \u0645\u0648\u062c\u0648\u062f\u06cc',
              ),
            }),
            (0, p.jsx)(b.Segmented, {
              compact: !0,
              height: 36,
              value: x,
              onChange: (e) => {
                D(e);
              },
              items: [
                {
                  value: 'ask',
                  label: (0, s.L)('\u0628\u067e\u0631\u0633'),
                  testID: 'oversell-ask',
                },
                {
                  value: 'allow',
                  label: (0, s.L)(
                    '\u0628\u062f\u0648\u0646 \u067e\u0631\u0633\u0634 \u0628\u0641\u0631\u0648\u0634',
                  ),
                  testID: 'oversell-allow',
                },
                {
                  value: 'forbid',
                  label: (0, s.L)(
                    '\u0627\u062c\u0627\u0632\u0647 \u0646\u062f\u0647',
                  ),
                  testID: 'oversell-forbid',
                },
              ],
            }),
            !!j &&
              (0, p.jsx)(b.Copy, {
                accessibilityRole: 'alert',
                style: { fontSize: 12, color: f.danger },
                children: j,
              }),
          ],
        });
      }));
    var e,
      t = r(d[0]),
      l = r(d[1]),
      o = (e = l) && e.__esModule ? e : { default: e },
      s = r(d[2]),
      n = r(d[3]),
      c = r(d[4]),
      u = r(d[5]),
      h = r(d[6]),
      v = r(d[7]),
      b = r(d[8]),
      p = r(d[9]);
  },
  744,
  [2, 99, 311, 433, 519, 415, 489, 382, 407, 338],
);
