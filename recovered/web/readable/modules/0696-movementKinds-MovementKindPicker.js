// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 696; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.movementKinds = v),
      (_e.MovementKindPicker = function ({
        value: e,
        onChange: b,
        allowed: p = ['received', 'sold'],
        businessType: h,
        role: y,
        produce: w,
        labels: _,
        strong: k = !1,
      }) {
        const { colors: x, mode: C } = (0, l.useTheme)(),
          j = v(h, p).filter((e) =>
            'receive' === y
              ? 'received' === e || 'used' === e || 'waste' === e
              : 'sell' === y
                ? 'sold' === e
                : 'read' !== y,
          ),
          W = !!w && 'reseller' !== h && !!h && j.includes('received'),
          z = (e, n, o, l) =>
            (0, f.jsx)(
              t.default,
              {
                testID: 'kind-' + e,
                accessibilityRole: 'button',
                accessibilityState: { selected: o },
                onPress: l,
                style: {
                  flexGrow: 1,
                  minWidth: 72,
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: k ? 34 : 44,
                  paddingHorizontal: 8,
                  borderRadius: k ? 17 : 10,
                  backgroundColor: o
                    ? k && 'dark' === C
                      ? x.line
                      : x.surface
                    : 'transparent',
                },
                children: (0, f.jsx)(s.Copy, {
                  style: {
                    fontSize: k ? 13 : 12,
                    ...(k && o ? { fontFamily: 'Vazirmatn_700Bold' } : {}),
                  },
                  children: n,
                }),
              },
              e,
            );
        return (0, f.jsxs)(o.default, {
          style: {
            flexDirection: 'row-reverse',
            flexWrap: 'wrap',
            backgroundColor: x.soft,
            borderWidth: n.default.hairlineWidth,
            borderColor: x.line,
            borderRadius: k ? 21 : 14,
            padding: k ? 3 : 4,
            gap: k ? 2 : 4,
          },
          children: [
            W &&
              z(
                'produced',
                (0, u.L)('\u062a\u0648\u0644\u06cc\u062f \u0634\u062f'),
                'received' === e && !!w?.on,
                () => {
                  (b('received'), w.set(!0));
                },
              ),
            j.map((t) =>
              z(
                t,
                _?.[t] || c.notebookFa.movement[t],
                e === t && !('received' === t && W && w?.on),
                () => {
                  (b(t), w?.on && w.set(!1));
                },
              ),
            ),
          ],
        });
      }));
    var t = e(r(d[0])),
      n = e(r(d[1])),
      o = e(r(d[2])),
      s = r(d[3]),
      l = r(d[4]),
      c = r(d[5]),
      u = r(d[6]),
      f = r(d[7]);
    function v(e, t) {
      const n = 'reseller' === e ? ['waste'] : e ? ['used', 'waste'] : [];
      return [...new Set([...t, ...n])].filter(
        (e) => t.includes(e) || n.includes(e),
      );
    }
  },
  696,
  [232, 17, 99, 407, 382, 580, 311, 338],
);
