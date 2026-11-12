// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 768; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.useRowMenu = function () {
        const e = (0, p.useDesktop)(),
          [n, i] = (0, t.useState)(null),
          o = e && !0;
        return {
          enabled: o,
          openAt(e, t, n) {
            if (!o) return;
            const l = e;
            l.preventDefault?.();
            const s =
                l.clientX ??
                l.nativeEvent?.clientX ??
                l.nativeEvent?.pageX ??
                0,
              c =
                l.clientY ??
                l.nativeEvent?.clientY ??
                l.nativeEvent?.pageY ??
                0;
            i({ x: s, y: c, title: t, items: n });
          },
          openNear(e, t, n, l) {
            o && i({ x: e, y: t, title: n, items: l });
          },
          close() {
            i(null);
          },
          element:
            o && n ? (0, h.jsx)(j, { menu: n, onClose: () => i(null) }) : null,
        };
      }),
      (_e.RowHoverKeys = function ({
        onMinus: e,
        onPlus: t,
        onMore: n,
        minusLabel: l,
        plusLabel: s,
        testID: p,
      }) {
        const { colors: y } = (0, f.useTheme)(),
          b = (e, t, n, o) =>
            (0, h.jsx)(
              i.default,
              {
                testID: p ? p + '-' + e : void 0,
                accessibilityRole: 'button',
                accessibilityLabel: t,
                onPress: (e) => {
                  (e.stopPropagation?.(), o(e));
                },
                style: ({ pressed: e, hovered: t }) => ({
                  width: 30,
                  height: 28,
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: y.line,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: e ? y.line : t ? y.soft : y.surface,
                }),
                children: n,
              },
              e,
            );
        return (0, h.jsxs)(o.default, {
          testID: p,
          style: {
            flexDirection: 'row',
            direction: 'ltr',
            alignItems: 'center',
            gap: 6,
          },
          children: [
            n &&
              b(
                'more',
                '\u22ef',
                (0, h.jsx)(u.Icon, { name: 'more', size: 16, color: y.text }),
                (e) => {
                  const t = e.nativeEvent;
                  n(t?.clientX ?? t?.pageX ?? 0, t?.clientY ?? t?.pageY ?? 0);
                },
              ),
            e &&
              b(
                'minus',
                l || '\u2212',
                (0, h.jsx)(c.Copy, {
                  style: {
                    fontSize: 16,
                    lineHeight: 20,
                    fontFamily: 'Vazirmatn_600SemiBold',
                  },
                  children: '\u2212',
                }),
                () => e(),
              ),
            t &&
              b(
                'plus',
                s || '+',
                (0, h.jsx)(c.Copy, {
                  style: {
                    fontSize: 16,
                    lineHeight: 20,
                    fontFamily: 'Vazirmatn_600SemiBold',
                  },
                  children: '+',
                }),
                () => t(),
              ),
          ],
        });
      }));
    var t = r(d[0]),
      n = r(d[1]);
    r(d[2]);
    var i = e(r(d[3])),
      o = e(r(d[4])),
      l = e(r(d[5])),
      s = r(d[6]),
      c = r(d[7]),
      u = r(d[8]),
      f = r(d[9]),
      p = r(d[10]),
      y = r(d[11]),
      h = r(d[12]);
    const b = 244,
      x = 40,
      v = (e) =>
        'Delete' === e || 'Backspace' === e
          ? 'Del'
          : /^Key[A-Z]$/.test(e)
            ? e.slice(3)
            : '';
    function j({ menu: e, onClose: p }) {
      const { colors: j, mode: C } = (0, f.useTheme)(),
        { width: H, height: k } = (0, l.default)(),
        [w, z] = (0, t.useState)(-1),
        D = (0, t.useRef)(e);
      D.current = e;
      const I =
          e.items.length * x +
          (e.title ? 30 : 0) +
          16 +
          (e.items.some((e) => e.danger) ? 9 : 0),
        S = Math.max(8, Math.min(e.x - 122, H - b - 8)),
        M = Math.max(8, Math.min(e.y + 6, k - I - 8));
      function R(e) {
        e.disabled || (p(), e.run());
      }
      return (
        (0, t.useEffect)(() => {
          if ('undefined' == typeof document) return;
          const e = (e) => {
            if (e.ctrlKey || e.metaKey || e.altKey) return;
            const t = v(e.code || '');
            if (!t) return;
            const n = D.current.items.find((e) => e.keyHint === t);
            n && (e.preventDefault(), e.stopPropagation(), R(n));
          };
          return (
            document.addEventListener('keydown', e, !0),
            () => document.removeEventListener('keydown', e, !0)
          );
        }, []),
        (0, h.jsx)(s.TapModal, {
          visible: !0,
          transparent: !0,
          animationType: 'none',
          onRequestClose: p,
          children: (0, h.jsxs)(o.default, {
            style: { flex: 1 },
            children: [
              (0, h.jsx)(n.Backdrop, {
                testID: 'row-menu-backdrop',
                onClose: p,
                color: 'transparent',
              }),
              (0, h.jsxs)(i.default, {
                testID: 'row-menu',
                onPress: () => {},
                style: {
                  position: 'absolute',
                  left: S,
                  top: M,
                  width: b,
                  paddingVertical: 6,
                  borderRadius: 16,
                  borderWidth: 1,
                  borderColor: j.line,
                  backgroundColor: j.surface,
                  boxShadow:
                    'light' === C
                      ? '0 14px 40px rgba(16,24,40,.18)'
                      : '0 14px 40px rgba(0,0,0,.55)',
                },
                children: [
                  !!e.title &&
                    (0, h.jsx)(c.Copy, {
                      numberOfLines: 1,
                      style: {
                        fontSize: 11.5,
                        lineHeight: 18,
                        color: j.muted,
                        paddingHorizontal: 14,
                        paddingTop: 4,
                        paddingBottom: 8,
                      },
                      children: e.title,
                    }),
                  e.items.map((e, t) =>
                    (0, h.jsxs)(
                      o.default,
                      {
                        children: [
                          e.danger &&
                            t > 0 &&
                            (0, h.jsx)(o.default, {
                              style: {
                                height: 1,
                                backgroundColor: j.line,
                                marginVertical: 4,
                                marginHorizontal: 10,
                              },
                            }),
                          (0, h.jsxs)(i.default, {
                            testID: 'row-menu-' + e.id,
                            accessibilityRole: 'menuitem',
                            accessibilityState: { disabled: !!e.disabled },
                            disabled: e.disabled,
                            onHoverIn: () => z(t),
                            onHoverOut: () => z((e) => (e === t ? -1 : e)),
                            onPress: () => R(e),
                            style: {
                              height: x,
                              marginHorizontal: 6,
                              paddingHorizontal: 10,
                              borderRadius: 10,
                              flexDirection: 'row-reverse',
                              alignItems: 'center',
                              gap: 10,
                              opacity: e.disabled ? 0.45 : 1,
                              backgroundColor:
                                w !== t || e.disabled
                                  ? 'transparent'
                                  : e.danger
                                    ? j.danger + '14'
                                    : j.accentSoft,
                            },
                            children: [
                              (0, h.jsx)(u.Icon, {
                                name: e.icon,
                                size: 17,
                                color: e.danger
                                  ? j.danger
                                  : w === t
                                    ? j.accent
                                    : j.muted,
                              }),
                              (0, h.jsx)(c.Copy, {
                                numberOfLines: 1,
                                style: {
                                  flex: 1,
                                  fontSize: 13.5,
                                  lineHeight: 22,
                                  fontFamily: 'Vazirmatn_600SemiBold',
                                  color: e.danger ? j.danger : j.text,
                                },
                                children: e.label,
                              }),
                              !!e.keyHint &&
                                (0, h.jsx)(y.KeyCap, { children: e.keyHint }),
                            ],
                          }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                ],
              }),
            ],
          }),
        })
      );
    }
  },
  768,
  [2, 533, 94, 232, 99, 257, 515, 407, 385, 382, 481, 531, 338],
);
