// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 516; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.useDeskPage = h),
      (_e.useDeskPages = function () {
        return (0, t.useSyncExternalStore)(
          p.deskPages.subscribe,
          p.deskPages.pages,
          p.deskPages.pages,
        );
      }),
      (_e.useDeskTabLabel = P),
      (_e.DeskPage = function ({
        id: e,
        title: t,
        onClose: s,
        testID: o,
        children: i,
      }) {
        const { colors: c } = (0, f.useTheme)();
        return (
          h(e, t, s),
          (0, k.jsx)(l.default, {
            testID: o || 'desk-page-' + e,
            style: [
              n.default.absoluteFill,
              { zIndex: 40, backgroundColor: c.bg },
            ],
            children: i,
          })
        );
      }),
      Object.defineProperty(_e, 'KeyCap', {
        enumerable: !0,
        get: function () {
          return u.KeyCap;
        },
      }),
      Object.defineProperty(_e, 'KeyCaps', {
        enumerable: !0,
        get: function () {
          return u.KeyCaps;
        },
      }),
      (_e.PageClose = function ({
        testID: e,
        label: n,
        onPress: x,
        title: h,
        extra: D,
      }) {
        const { colors: j } = (0, f.useTheme)(),
          I = (0, b.useDesktop)(),
          C = P(),
          [S, v] = (0, t.useState)(!1);
        if (!I)
          return (0, k.jsx)(c.SmallKey, {
            testID: e,
            label: n || (0, y.L)('\u0628\u0633\u062a\u0646'),
            onPress: x,
          });
        const z = (0, p.breadcrumb)(C, h, D);
        return (0, k.jsxs)(l.default, {
          testID: 'desk-breadcrumb',
          style: {
            flexDirection: 'row-reverse',
            alignItems: 'center',
            gap: 14,
          },
          children: [
            (0, k.jsx)(l.default, {
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 6,
              },
              children: z.map((e, t) => {
                const n = t === z.length - 1;
                return (0, k.jsxs)(
                  l.default,
                  {
                    style: {
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      gap: 6,
                    },
                    children: [
                      t > 0 &&
                        (0, k.jsx)(i.Icon, {
                          name: 'chevron',
                          size: 12,
                          color: j.muted,
                        }),
                      0 !== t || n
                        ? (0, k.jsx)(o.Copy, {
                            numberOfLines: 1,
                            style: {
                              fontSize: 13,
                              lineHeight: 20,
                              color: n ? j.text : j.muted,
                              fontFamily: n
                                ? 'Vazirmatn_600SemiBold'
                                : 'Vazirmatn_400Regular',
                              maxWidth: 260,
                            },
                            children: e,
                          })
                        : (0, k.jsx)(s.default, {
                            testID: 'desk-crumb-tab',
                            accessibilityRole: 'link',
                            onPress: () => p.deskPages.closeAll(),
                            children: (0, k.jsx)(o.Copy, {
                              style: {
                                fontSize: 13,
                                lineHeight: 20,
                                color: j.muted,
                              },
                              children: e,
                            }),
                          }),
                    ],
                  },
                  t,
                );
              }),
            }),
            (0, k.jsxs)(s.default, {
              testID: e,
              accessibilityRole: 'button',
              accessibilityLabel: (0, y.L)('\u0628\u0631\u06af\u0634\u062a'),
              onPress: x,
              onHoverIn: () => v(!0),
              onHoverOut: () => v(!1),
              style: ({ pressed: e }) => ({
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 6,
                height: 32,
                paddingHorizontal: 10,
                borderRadius: 10,
                backgroundColor: e ? j.line : S ? j.soft : 'transparent',
              }),
              children: [
                (0, k.jsx)(o.Copy, {
                  style: { fontSize: 13, lineHeight: 20, color: j.muted },
                  children: (0, y.L)('\u0628\u0631\u06af\u0634\u062a'),
                }),
                (0, k.jsx)(u.KeyCap, { children: 'Esc' }),
              ],
            }),
          ],
        });
      }));
    var t = r(d[0]),
      s = e(r(d[1])),
      n = e(r(d[2])),
      l = e(r(d[3])),
      o = r(d[4]),
      i = r(d[5]),
      c = r(d[6]),
      u = r(d[7]),
      f = r(d[8]),
      b = r(d[9]),
      y = r(d[10]),
      p = r(d[11]),
      k = r(d[12]);
    let x = 0;
    function h(e, s, n, l = !0) {
      const o = (0, b.useDesktop)(),
        i = (0, t.useRef)(n),
        c = (0, t.useRef)('');
      ((i.current = n),
        c.current || (c.current = 'desk-' + ++x),
        (0, t.useEffect)(() => {
          if (o && l && e)
            return p.deskPages.open({
              key: c.current,
              id: e,
              title: s,
              close: () => i.current(),
            });
        }, [o, l, e, s]));
    }
    function P() {
      return (0, t.useSyncExternalStore)(
        p.deskPages.subscribe,
        p.deskPages.tabLabel,
        p.deskPages.tabLabel,
      );
    }
  },
  516,
  [2, 232, 17, 99, 407, 385, 517, 531, 382, 481, 311, 532, 338],
);
