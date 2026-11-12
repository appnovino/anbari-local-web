// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 695; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'brandFa', {
        enumerable: !0,
        get: function () {
          return h;
        },
      }),
      (_e.brandOptions = function (e, n, t = []) {
        if (t.length) {
          const n = new Map(e.map((e) => [e.id, e])),
            o = t.filter((e) => n.has(e.id)).map((e) => f(n.get(e.id)));
          return o.length ? o : t.map(f);
        }
        const o = (0, s.productFamily)(e, n);
        return !o.exact && o.candidates.length > 1
          ? o.candidates.slice(0, 8).map(f)
          : [];
      }),
      (_e.BrandChoice = function ({
        name: e,
        options: s,
        selectedId: f,
        newBrand: y,
        testKey: x,
        onPick: w,
        onNewBrand: j,
      }) {
        const { colors: B } = (0, c.useTheme)(),
          [S, z] = (0, n.useState)(!1),
          [C, k] = (0, n.useState)(y || ''),
          v = (e) => ({
            flexDirection: 'row-reverse',
            alignItems: 'center',
            gap: 6,
            paddingHorizontal: 12,
            paddingVertical: 7,
            borderRadius: 999,
            borderWidth: 1,
            borderColor: e ? B.accent : B.line,
            backgroundColor: e ? B.accent : B.surface,
          }),
          I = () => {
            const e = C.trim().replace(/\s+/g, ' ');
            !e || e.length > 60 || (j(e), z(!1));
          };
        return (0, p.jsxs)(o.default, {
          testID: 'brand-card-' + x,
          style: {
            gap: 10,
            padding: 12,
            borderRadius: 14,
            borderWidth: 1,
            borderColor: B.line,
            backgroundColor: B.soft,
          },
          children: [
            (0, p.jsx)(u.Copy, {
              style: { fontSize: 13, lineHeight: 21 },
              children: h.title
                .replace('{name}', e.trim())
                .replace(
                  '{count}',
                  s.length.toLocaleString((0, b.numberLocale)()),
                ),
            }),
            (0, p.jsxs)(o.default, {
              style: { flexDirection: 'row-reverse', flexWrap: 'wrap', gap: 8 },
              children: [
                s.map((e) => {
                  const n = e.id === f;
                  return (0, p.jsxs)(
                    t.default,
                    {
                      testID: `brand-choice-${x}-${e.id}`,
                      accessibilityRole: 'button',
                      accessibilityState: { selected: n },
                      accessibilityLabel: e.name,
                      onPress: () => {
                        (z(!1), w(e));
                      },
                      style: v(n),
                      children: [
                        (0, p.jsxs)(u.Copy, {
                          style: {
                            fontSize: 13,
                            color: n ? B.onAccent : B.text,
                          },
                          children: [
                            e.brand || h.noBrand,
                            e.size ? '\u060c ' + e.size : '',
                          ],
                        }),
                        (0, p.jsx)(u.Copy, {
                          style: {
                            fontSize: 11,
                            color: n ? B.onAccent : B.muted,
                            opacity: n ? 0.8 : 1,
                          },
                          children:
                            0 !== e.stock
                              ? h.stock.replace(
                                  '{count}',
                                  e.stock.toLocaleString((0, b.numberLocale)()),
                                )
                              : (0, b.L)(l.OUT_OF_STOCK),
                        }),
                      ],
                    },
                    e.id,
                  );
                }),
                (0, p.jsx)(t.default, {
                  testID: `brand-new-${x}`,
                  accessibilityRole: 'button',
                  accessibilityState: { selected: !!y },
                  onPress: () => z((e) => !e),
                  style: v(!!y && !S),
                  children: (0, p.jsx)(u.Copy, {
                    style: {
                      fontSize: 13,
                      color: y && !S ? B.onAccent : B.accent,
                    },
                    children: y && !S ? y : h.newBrand,
                  }),
                }),
              ],
            }),
            S &&
              (0, p.jsxs)(o.default, {
                style: { gap: 8 },
                children: [
                  (0, p.jsx)(u.Input, {
                    testID: `brand-new-input-${x}`,
                    accessibilityLabel: h.newBrandName,
                    placeholder: h.newBrandName,
                    value: C,
                    maxLength: 60,
                    onChangeText: k,
                    onSubmitEditing: I,
                    autoFocus: !0,
                  }),
                  (0, p.jsx)(u.Button, {
                    testID: `brand-new-save-${x}`,
                    disabled: !C.trim(),
                    onPress: I,
                    children: h.saveBrand,
                  }),
                ],
              }),
          ],
        });
      }));
    var n = r(d[0]),
      t = e(r(d[1])),
      o = e(r(d[2])),
      s = r(d[3]),
      c = r(d[4]),
      l = r(d[5]),
      u = r(d[6]),
      b = r(d[7]),
      p = r(d[8]);
    const h = (0, b.localized)({
        title:
          '\u0627\u0632 \xab{name}\xbb {count} \u0628\u0631\u0646\u062f \u062f\u0627\u0631\u06cc\u061b \u06a9\u062f\u0627\u0645 \u0631\u0627 \u062b\u0628\u062a \u06a9\u0646\u0645\u061f',
        noBrand: '\u0628\u062f\u0648\u0646 \u0628\u0631\u0646\u062f',
        stock: '\u0645\u0648\u062c\u0648\u062f\u06cc {count}',
        newBrand: '+ \u0628\u0631\u0646\u062f \u062c\u062f\u06cc\u062f',
        newBrandName:
          '\u0627\u0633\u0645 \u0628\u0631\u0646\u062f \u062c\u062f\u06cc\u062f',
        saveBrand: '\u062b\u0628\u062a \u0628\u0631\u0646\u062f',
        pendingRows:
          '\u0628\u0631\u0646\u062f \u0686\u0646\u062f \u0631\u062f\u06cc\u0641 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646',
        pendingManual:
          '\u0627\u0648\u0644 \u0628\u0631\u0646\u062f \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646',
      }),
      f = (e) => ({
        id: e.id,
        name: e.name,
        stock: e.stock,
        ...(e.brand ? { brand: e.brand } : {}),
        ...(e.size ? { size: e.size } : {}),
        ...(e.unit ? { unit: e.unit } : {}),
      });
  },
  695,
  [2, 232, 99, 452, 382, 433, 407, 311, 338],
);
