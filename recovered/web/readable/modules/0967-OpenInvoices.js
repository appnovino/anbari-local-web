// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 967; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.OpenInvoices = function ({
        carts: t,
        active: i,
        sale: b,
        canAdd: y,
        onPick: p,
        onNew: S,
      }) {
        const { colors: v } = (0, s.useTheme)(),
          w = (0, e.useRef)(null),
          x = (e, t, i, n, s, c = !1) =>
            (0, h.jsx)(
              o.default,
              {
                testID: s,
                accessibilityRole: c ? 'button' : 'tab',
                accessibilityState: c ? void 0 : { selected: i },
                onPress: n,
                style: ({ pressed: e }) => ({
                  minHeight: 40,
                  paddingHorizontal: 14,
                  borderRadius: 14,
                  borderWidth: i ? 1.5 : 1,
                  borderColor: i ? v.accent : v.line,
                  backgroundColor: i ? v.accentSoft : v.surface,
                  justifyContent: 'center',
                  opacity: e ? 0.75 : 1,
                }),
                children: (0, h.jsx)(l.Copy, {
                  numberOfLines: 1,
                  style: {
                    fontSize: 13,
                    lineHeight: 20,
                    color: i || c ? v.accent : v.text,
                    fontFamily: i
                      ? 'Vazirmatn_600SemiBold'
                      : 'Vazirmatn_400Regular',
                  },
                  children: t,
                }),
              },
              e,
            );
        return (0, h.jsxs)(n.ScrollView, {
          ref: w,
          horizontal: !0,
          ...f.noSwipe,
          accessibilityRole: 'tablist',
          showsHorizontalScrollIndicator: !1,
          keyboardShouldPersistTaps: 'handled',
          onContentSizeChange: () => {},
          style: { flexGrow: 0, flexShrink: 0, height: 42, marginBottom: 8 },
          contentContainerStyle: {
            flexDirection: 'row-reverse',
            alignItems: 'center',
            gap: 8,
            flexGrow: 1,
          },
          children: [
            t.map((e, t) =>
              x(
                e.id,
                (0, u.cartLabel)(e, t, b, c.L, c.localDigits),
                e.id === i,
                () => p(e.id),
                'open-invoice-' + t,
              ),
            ),
            y &&
              x(
                'new',
                b
                  ? (0, c.L)(
                      '+ \u0641\u0627\u06a9\u062a\u0648\u0631 \u062a\u0627\u0632\u0647',
                    )
                  : (0, c.L)(
                      '+ \u0648\u0631\u0648\u062f \u062a\u0627\u0632\u0647',
                    ),
                !1,
                S,
                'open-invoice-new',
                !0,
              ),
          ],
        });
      }));
    var e = r(d[0]);
    r(d[1]);
    var t,
      i = r(d[2]),
      o = (t = i) && t.__esModule ? t : { default: t },
      n = r(d[3]),
      l = r(d[4]),
      s = r(d[5]),
      c = r(d[6]),
      u = r(d[7]),
      f = r(d[8]),
      h = r(d[9]);
  },
  967,
  [2, 94, 232, 380, 407, 382, 311, 886, 384, 338],
);
