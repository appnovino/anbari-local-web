// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 988; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.StockCountList = function ({
        state: e,
        onSave: C,
        onRefresh: L,
        onClose: b,
      }) {
        const { colors: k } = (0, x.useTheme)(),
          [S, T] = (0, t.useState)({}),
          [_, D] = (0, t.useState)(''),
          [I, v] = (0, t.useState)(!1),
          [w, z] = (0, t.useState)(''),
          M = (0, t.useRef)(!1),
          H = (0, t.useMemo)(
            () =>
              e.products
                .filter((e) => !e.archivedAt && 'made' !== e.kind)
                .map((e) => ({
                  id: e.id,
                  name: e.name,
                  label: e.name,
                  stock: e.stock,
                  unit: e.unit,
                }))
                .sort((e, t) => e.name.localeCompare(t.name, 'fa')),
            [e.products],
          ),
          N = (0, t.useMemo)(() => {
            const e = (0, l.normalizeName)(_);
            return e
              ? H.filter((t) => (0, l.normalizeName)(t.name).includes(e))
              : H;
          }, [H, _]),
          A = H.filter((e) => {
            const t = S[e.id]?.trim();
            if (!t) return !1;
            try {
              return ((0, a.parseCount)(t), !1);
            } catch {
              return !0;
            }
          }).map((e) => e.id),
          B = A.length ? [] : (0, a.countChanges)(H, S),
          O = (e) =>
            e.toLocaleString((0, c.numberLocale)(), {
              maximumFractionDigits: 3,
            });
        async function P() {
          if (!M.current && B.length && !A.length)
            if (B.length > l.COUNT_MAX)
              z(
                (0, c.L)(
                  '\u062f\u0631 \u0647\u0631 \u062b\u0628\u062a \u062d\u062f\u0627\u06a9\u062b\u0631 {n} \u06a9\u0627\u0644\u0627 \u0634\u0645\u0627\u0631\u0634 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                  { n: O(l.COUNT_MAX) },
                ),
              );
            else {
              ((M.current = !0), v(!0), z(''));
              try {
                (await C((0, a.countDrafts)(B)),
                  (0, p.showToast)(
                    (0, c.L)(
                      '\u0634\u0645\u0627\u0631\u0634 {n} \u06a9\u0627\u0644\u0627 \u062b\u0628\u062a \u0634\u062f',
                      { n: O(B.length) },
                    ),
                  ),
                  T({}),
                  b());
              } catch (e) {
                (z((0, y.errorText)(e)),
                  e instanceof Error &&
                    'stock_changed' === e.message &&
                    L?.().catch(() => {}));
              } finally {
                ((M.current = !1), v(!1));
              }
            }
        }
        return (0, j.jsxs)(o.default, {
          testID: 'stock-count',
          style: { flex: 1, minHeight: 0, gap: 12 },
          children: [
            (0, j.jsxs)(o.default, {
              style: u.common.between,
              children: [
                (0, j.jsxs)(o.default, {
                  style: { flex: 1 },
                  children: [
                    (0, j.jsx)(u.Copy, {
                      style: u.common.title,
                      children: (0, c.L)(
                        '\u0634\u0645\u0627\u0631\u0634 \u0627\u0646\u0628\u0627\u0631',
                      ),
                    }),
                    (0, j.jsx)(u.Copy, {
                      style: { fontSize: 12, lineHeight: 20, color: k.muted },
                      children: (0, c.L)(
                        '\u0639\u062f\u062f \u0648\u0627\u0642\u0639\u06cc \u0647\u0631 \u06a9\u0627\u0644\u0627 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633. \u062e\u0627\u0644\u06cc \u06cc\u0639\u0646\u06cc \u0628\u062f\u0648\u0646 \u062a\u063a\u06cc\u06cc\u0631. \u0641\u0631\u0648\u0634 \u0648 \u062e\u0631\u06cc\u062f \u062d\u0633\u0627\u0628 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f.',
                      ),
                    }),
                  ],
                }),
                (0, j.jsx)(u.Button, {
                  testID: 'stock-count-close',
                  secondary: !0,
                  onPress: b,
                  children: (0, c.L)('\u0628\u0633\u062a\u0646'),
                }),
              ],
            }),
            H.length > 8 &&
              (0, j.jsx)(u.Input, {
                testID: 'stock-count-search',
                value: _,
                onChangeText: D,
                placeholder: (0, c.L)(
                  '\u062c\u0633\u062a\u062c\u0648\u06cc \u06a9\u0627\u0644\u0627',
                ),
              }),
            (0, j.jsx)(s.ScrollView, {
              keyboardShouldPersistTaps: 'handled',
              style: { flex: 1 },
              contentContainerStyle: { paddingBottom: 6 },
              children: (0, j.jsx)(o.default, {
                testID: 'stock-count-body',
                ...i.plainTouchScrolls,
                children: (0, j.jsxs)(u.Card, {
                  style: { padding: 0, gap: 0 },
                  children: [
                    !H.length &&
                      (0, j.jsx)(u.Copy, {
                        style: { padding: 14, color: k.muted },
                        children: (0, c.L)(
                          '\u0647\u0646\u0648\u0632 \u06a9\u0627\u0644\u0627\u06cc\u06cc \u0646\u062f\u0627\u0631\u06cc.',
                        ),
                      }),
                    N.map((e, t) => {
                      const s = B.find((t) => t.id === e.id),
                        i = A.includes(e.id),
                        l = (0, f.unitName)(e.unit);
                      return (0, j.jsxs)(
                        o.default,
                        {
                          testID: 'stock-count-row',
                          style: [
                            u.common.between,
                            {
                              paddingHorizontal: 14,
                              paddingVertical: 10,
                              gap: 10,
                            },
                            t > 0 && {
                              borderTopWidth: n.default.hairlineWidth,
                              borderTopColor: k.line,
                            },
                          ],
                          children: [
                            (0, j.jsxs)(o.default, {
                              style: { flex: 1, minWidth: 0 },
                              children: [
                                (0, j.jsx)(u.Copy, {
                                  numberOfLines: 1,
                                  style: {
                                    fontFamily: 'Vazirmatn_600SemiBold',
                                  },
                                  children: e.name,
                                }),
                                (0, j.jsx)(u.Copy, {
                                  style: {
                                    fontSize: 12,
                                    color: i
                                      ? k.danger
                                      : s
                                        ? k.accent
                                        : k.muted,
                                  },
                                  children: i
                                    ? (0, c.L)(
                                        '\u0639\u062f\u062f \u062f\u0631\u0633\u062a \u0628\u0646\u0648\u06cc\u0633',
                                      )
                                    : s
                                      ? (0, c.L)(
                                          '{before} \u2190 {after} {unit}',
                                          {
                                            before: O(s.before),
                                            after: O(s.after),
                                            unit: l,
                                          },
                                        )
                                      : (0, c.L)(
                                          '\u0627\u0644\u0627\u0646: {n} {unit}',
                                          { n: O(e.stock), unit: l },
                                        ),
                                }),
                              ],
                            }),
                            (0, j.jsx)(h.QuantityInput, {
                              testID: 'stock-count-input-' + e.id,
                              accessibilityLabel: (0, c.L)(
                                '\u0639\u062f\u062f \u0648\u0627\u0642\u0639\u06cc {name}',
                                { name: e.name },
                              ),
                              value: S[e.id] ?? '',
                              onChange: (t) => T((n) => ({ ...n, [e.id]: t })),
                              placeholder: O(e.stock),
                              style: {
                                width: 96,
                                minWidth: 0,
                                minHeight: 40,
                                paddingHorizontal: 4,
                                textAlign: 'center',
                              },
                            }),
                          ],
                        },
                        e.id,
                      );
                    }),
                  ],
                }),
              }),
            }),
            !!w &&
              (0, j.jsx)(u.Copy, {
                accessibilityRole: 'alert',
                style: { color: k.danger },
                children: w,
              }),
            (0, j.jsx)(u.Button, {
              testID: 'stock-count-save',
              disabled: I || !B.length || A.length > 0,
              onPress: () => {
                P();
              },
              children: B.length
                ? (0, c.L)(
                    '\u062b\u0628\u062a \u0634\u0645\u0627\u0631\u0634 ({n} \u06a9\u0627\u0644\u0627)',
                    { n: O(B.length) },
                  )
                : (0, c.L)('\u062b\u0628\u062a \u0634\u0645\u0627\u0631\u0634'),
            }),
          ],
        });
      }));
    var t = r(d[0]),
      n = e(r(d[1])),
      o = e(r(d[2])),
      s = r(d[3]),
      i = r(d[4]),
      l = r(d[5]),
      a = r(d[6]),
      c = r(d[7]),
      u = r(d[8]),
      h = r(d[9]),
      f = r(d[10]),
      y = r(d[11]),
      p = r(d[12]),
      x = r(d[13]),
      j = r(d[14]);
  },
  988,
  [2, 17, 99, 380, 480, 439, 717, 311, 407, 614, 585, 690, 525, 382, 338],
);
