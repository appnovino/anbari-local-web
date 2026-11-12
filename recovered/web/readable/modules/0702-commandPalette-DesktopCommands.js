// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 702; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'commandPalette', {
        enumerable: !0,
        get: function () {
          return T;
        },
      }),
      (_e.DesktopCommands = function ({
        products: e,
        showPrice: n,
        actions: o,
        onProduct: i,
      }) {
        const l = (0, j.useDesktop)(),
          [s, a] = (0, t.useState)(null),
          c = (0, t.useRef)({ actions: o, view: s });
        return (
          (c.current = { actions: o, view: s }),
          (0, t.useEffect)(() => {
            const e = (e) => a(e);
            return (
              w.add(e),
              () => {
                w.delete(e);
              }
            );
          }, []),
          (0, t.useEffect)(() => {
            if (!l || 'undefined' == typeof document) return;
            const e = (0, k.createShortcutMatcher)(),
              t = (t) => {
                if (c.current.view || t.defaultPrevented) return;
                const n = (0, k.isTypingTarget)(t.target);
                if (S()) return;
                const o = e(t, n);
                if (!o || 'pending' === o) return;
                if ('palette' === o || 'help' === o)
                  return (t.preventDefault(), void a(o));
                const i = c.current.actions.find((e) => e.shortcut === o);
                i && (t.preventDefault(), i.run());
              },
              n = (e) => {
                'Escape' !== e.key ||
                  c.current.view ||
                  S() ||
                  (b.deskPages.closeTop() && e.preventDefault());
              };
            return (
              document.addEventListener('keydown', t, !0),
              document.addEventListener('keyup', n),
              () => {
                (document.removeEventListener('keydown', t, !0),
                  document.removeEventListener('keyup', n));
              }
            );
          }, [l]),
          l
            ? (0, v.jsxs)(v.Fragment, {
                children: [
                  'palette' === s &&
                    (0, v.jsx)(z, {
                      products: e,
                      showPrice: n,
                      actions: o,
                      onClose: () => a(null),
                      onHelp: () => a('help'),
                      onProduct: (e) => {
                        (a(null), i(e));
                      },
                    }),
                  'help' === s &&
                    (0, v.jsx)(D, { actions: o, onClose: () => a(null) }),
                ],
              })
            : null
        );
      }));
    var t = r(d[0]),
      n = r(d[1]);
    r(d[2]);
    var o = e(r(d[3])),
      i = e(r(d[4])),
      l = e(r(d[5])),
      s = r(d[6]),
      a = r(d[7]),
      c = r(d[8]),
      u = r(d[9]),
      p = r(d[10]),
      h = r(d[11]),
      f = r(d[12]),
      y = r(d[13]),
      x = r(d[14]),
      j = r(d[15]),
      C = r(d[16]),
      b = r(d[17]),
      k = r(d[18]),
      v = r(d[19]);
    const S = () =>
        'undefined' != typeof document &&
        !!document.querySelector('[aria-modal="true"]'),
      w = new Set(),
      T = {
        open(e = 'palette') {
          w.forEach((t) => t(e));
        },
      };
    function z({
      products: e,
      showPrice: j,
      actions: b,
      onClose: S,
      onHelp: w,
      onProduct: T,
    }) {
      const { colors: z } = (0, x.useTheme)(),
        [D, E] = (0, t.useState)(''),
        [L, I] = (0, t.useState)(0),
        P = (0, t.useRef)(null),
        R = (0, t.useMemo)(() => (0, k.paletteProducts)(e, D, 6), [e, D]),
        _ = (0, k.foldSearch)(D),
        K = (0, t.useMemo)(
          () => b.filter((e) => !_ || (0, k.foldSearch)(e.label).includes(_)),
          [b, _],
        ),
        B = [
          ...R.map((e) => ({ kind: 'product', product: e })),
          ...K.map((e) => ({ kind: 'action', action: e })),
        ];
      function W(e) {
        e && ('product' !== e.kind ? (S(), e.action.run()) : T(e.product));
      }
      ((0, t.useEffect)(() => {
        I(0);
      }, [D]),
        (0, t.useEffect)(() => {
          const e = setTimeout(() => P.current?.focus(), 30);
          return () => clearTimeout(e);
        }, []));
      const M = (e) =>
          (0, v.jsx)(h.Copy, {
            style: {
              fontSize: 11.5,
              lineHeight: 18,
              color: z.muted,
              paddingHorizontal: 14,
              paddingTop: 10,
              paddingBottom: 4,
            },
            children: e,
          }),
        O = (e, t) => {
          const n = t === L,
            i =
              'product' === e.kind
                ? (0, v.jsxs)(v.Fragment, {
                    children: [
                      (0, v.jsx)(l.default, {
                        style: {
                          width: 30,
                          height: 30,
                          borderRadius: 8,
                          overflow: 'hidden',
                        },
                        children: (0, v.jsx)(y.ProductPhoto, {
                          product: e.product,
                          height: 30,
                        }),
                      }),
                      (0, v.jsxs)(h.Copy, {
                        numberOfLines: 1,
                        style: {
                          flex: 1,
                          minWidth: 0,
                          fontSize: 14,
                          lineHeight: 22,
                        },
                        children: [
                          (0, v.jsx)(h.Copy, {
                            style: { fontFamily: 'Vazirmatn_600SemiBold' },
                            children: e.product.name,
                          }),
                          (0, v.jsx)(h.Copy, {
                            style: { fontSize: 12, color: z.muted },
                            children:
                              '  ' +
                              (0, p.L)(
                                '\u0645\u0648\u062c\u0648\u062f\u06cc {n}',
                                { n: (0, c.formatGrouped)(e.product.stock) },
                              ) +
                              (j && null != e.product.price
                                ? ' \xb7 ' +
                                  (0, u.money)(e.product.price, { hint: !1 })
                                : ''),
                          }),
                        ],
                      }),
                      n && (0, v.jsx)(C.KeyCap, { children: 'Enter' }),
                    ],
                  })
                : (0, v.jsxs)(v.Fragment, {
                    children: [
                      (0, v.jsx)(l.default, {
                        style: {
                          width: 30,
                          height: 30,
                          borderRadius: 8,
                          backgroundColor: n ? z.surface : z.soft,
                          alignItems: 'center',
                          justifyContent: 'center',
                        },
                        children: (0, v.jsx)(f.Icon, {
                          name: e.action.icon,
                          size: 17,
                          color: z.accent,
                        }),
                      }),
                      (0, v.jsx)(h.Copy, {
                        numberOfLines: 1,
                        style: {
                          flex: 1,
                          minWidth: 0,
                          fontSize: 14,
                          lineHeight: 22,
                          fontFamily: 'Vazirmatn_600SemiBold',
                        },
                        children: e.action.label,
                      }),
                      e.action.shortcut &&
                        (0, v.jsx)(C.KeyCaps, {
                          keys: k.SHORTCUT_KEYS[e.action.shortcut][0],
                        }),
                    ],
                  });
          return (0, v.jsx)(
            o.default,
            {
              testID:
                'product' === e.kind
                  ? 'palette-product-' + e.product.id
                  : 'palette-action-' + e.action.id,
              accessibilityRole: 'button',
              onHoverIn: () => I(t),
              onPress: () => W(e),
              style: {
                marginHorizontal: 6,
                minHeight: 44,
                paddingHorizontal: 10,
                borderRadius: 12,
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 10,
                backgroundColor: n ? z.accentSoft : 'transparent',
              },
              children: i,
            },
            'product' === e.kind ? 'p-' + e.product.id : 'a-' + e.action.id,
          );
        };
      return (0, v.jsx)(s.TapModal, {
        visible: !0,
        transparent: !0,
        animationType: 'fade',
        onRequestClose: S,
        children: (0, v.jsxs)(l.default, {
          style: {
            flex: 1,
            alignItems: 'center',
            paddingTop: 96,
            paddingHorizontal: 16,
          },
          children: [
            (0, v.jsx)(n.Backdrop, {
              testID: 'command-palette-backdrop',
              onClose: S,
              color: '#08090b80',
            }),
            (0, v.jsxs)(o.default, {
              testID: 'command-palette',
              onPress: () => {},
              style: {
                width: '100%',
                maxWidth: 640,
                maxHeight: '78%',
                borderRadius: 18,
                borderWidth: 1,
                borderColor: z.line,
                backgroundColor: z.surface,
                overflow: 'hidden',
                boxShadow: '0 24px 64px rgba(0,0,0,.28)',
              },
              children: [
                (0, v.jsxs)(l.default, {
                  style: {
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    gap: 10,
                    paddingHorizontal: 16,
                    height: 56,
                    borderBottomWidth: 1,
                    borderColor: z.line,
                  },
                  children: [
                    (0, v.jsx)(f.Icon, {
                      name: 'search',
                      size: 19,
                      color: z.muted,
                    }),
                    (0, v.jsx)(i.default, {
                      ref: P,
                      testID: 'command-palette-input',
                      value: D,
                      onChangeText: E,
                      placeholder: (0, p.L)(
                        '\u062c\u0633\u062a\u062c\u0648\u06cc \u06a9\u0627\u0644\u0627 \u06cc\u0627 \u06a9\u0627\u0631\u2026',
                      ),
                      placeholderTextColor: z.muted,
                      onKeyPress: (e) => {
                        return (
                          (t = e.nativeEvent.key),
                          (n = () => e.preventDefault?.()),
                          void ('ArrowDown' === t
                            ? (n(),
                              I((e) => (B.length ? (e + 1) % B.length : 0)))
                            : 'ArrowUp' === t
                              ? (n(),
                                I((e) =>
                                  B.length ? (e - 1 + B.length) % B.length : 0,
                                ))
                              : 'Enter' === t
                                ? (n(), W(B[L]))
                                : '?' !== t || D || (n(), w()))
                        );
                        var t, n;
                      },
                      style: {
                        flex: 1,
                        fontSize: 16,
                        fontFamily: 'Vazirmatn_500Medium',
                        color: z.text,
                        textAlign: 'right',
                        writingDirection: 'rtl',
                        outlineStyle: 'none',
                      },
                    }),
                    (0, v.jsx)(C.KeyCap, { children: 'Esc' }),
                  ],
                }),
                (0, v.jsxs)(a.ScrollView, {
                  keyboardShouldPersistTaps: 'handled',
                  contentContainerStyle: { paddingBottom: 8 },
                  children: [
                    R.length > 0 &&
                      M((0, p.L)('\u06a9\u0627\u0644\u0627\u0647\u0627')),
                    R.map((e, t) => O({ kind: 'product', product: e }, t)),
                    !!D &&
                      !R.length &&
                      (0, v.jsx)(h.Copy, {
                        style: {
                          fontSize: 13,
                          color: z.muted,
                          paddingHorizontal: 16,
                          paddingTop: 12,
                        },
                        children: (0, p.L)(
                          '\u06a9\u0627\u0644\u0627\u06cc\u06cc \u0628\u0627 \u0627\u06cc\u0646 \u0646\u0627\u0645 \u0646\u06cc\u0633\u062a.',
                        ),
                      }),
                    K.length > 0 &&
                      M((0, p.L)('\u06a9\u0627\u0631\u0647\u0627')),
                    K.map((e, t) =>
                      O({ kind: 'action', action: e }, R.length + t),
                    ),
                  ],
                }),
                (0, v.jsxs)(l.default, {
                  style: {
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    gap: 14,
                    paddingHorizontal: 14,
                    height: 40,
                    borderTopWidth: 1,
                    borderColor: z.line,
                    backgroundColor: z.soft,
                  },
                  children: [
                    (0, v.jsx)(H, {
                      keys: ['\u2191', '\u2193'],
                      label: (0, p.L)('\u0627\u0646\u062a\u062e\u0627\u0628'),
                    }),
                    (0, v.jsx)(H, {
                      keys: ['Enter'],
                      label: (0, p.L)(
                        '\u0628\u0627\u0632 \u06a9\u0631\u062f\u0646',
                      ),
                    }),
                    (0, v.jsx)(H, {
                      keys: ['Ctrl', 'K'],
                      label: (0, p.L)('\u0647\u0645\u0647\u200c\u062c\u0627'),
                    }),
                    (0, v.jsx)(l.default, { style: { flex: 1 } }),
                    (0, v.jsx)(o.default, {
                      testID: 'palette-help',
                      onPress: w,
                      children: (0, v.jsx)(H, {
                        keys: ['?'],
                        label: (0, p.L)(
                          '\u0647\u0645\u0647\u0654 \u0645\u06cc\u0627\u0646\u200c\u0628\u0631\u0647\u0627',
                        ),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      });
    }
    function H({ keys: e, label: t }) {
      const { colors: n } = (0, x.useTheme)();
      return (0, v.jsxs)(l.default, {
        style: { flexDirection: 'row-reverse', alignItems: 'center', gap: 6 },
        children: [
          (0, v.jsx)(C.KeyCaps, { keys: e }),
          (0, v.jsx)(h.Copy, {
            style: { fontSize: 11.5, lineHeight: 18, color: n.muted },
            children: t,
          }),
        ],
      });
    }
    function D({ actions: e, onClose: t }) {
      const { colors: i } = (0, x.useTheme)(),
        a = [
          [
            (0, p.L)(
              '\u062c\u0633\u062a\u062c\u0648\u06cc \u06a9\u0627\u0644\u0627 \u0648 \u06a9\u0627\u0631\u0647\u0627',
            ),
            k.SHORTCUT_KEYS.palette,
          ],
          [
            (0, p.L)('\u0647\u0645\u06cc\u0646 \u0641\u0647\u0631\u0633\u062a'),
            k.SHORTCUT_KEYS.help,
          ],
          ...e
            .filter((e) => e.shortcut)
            .map((e) => [e.label, k.SHORTCUT_KEYS[e.shortcut]]),
          [
            (0, p.L)(
              '\u0628\u0633\u062a\u0646 \u0635\u0641\u062d\u0647 \u06cc\u0627 \u067e\u0646\u062c\u0631\u0647',
            ),
            [['Esc']],
          ],
          [
            (0, p.L)('\u062b\u0628\u062a \u0641\u0631\u0645'),
            [['Ctrl', 'Enter']],
          ],
        ];
      return (0, v.jsx)(s.TapModal, {
        visible: !0,
        transparent: !0,
        animationType: 'fade',
        onRequestClose: t,
        children: (0, v.jsxs)(l.default, {
          style: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 16,
          },
          children: [
            (0, v.jsx)(n.Backdrop, {
              testID: 'shortcut-help-backdrop',
              onClose: t,
              color: '#08090b80',
            }),
            (0, v.jsxs)(o.default, {
              testID: 'shortcut-help',
              onPress: () => {},
              style: {
                width: '100%',
                maxWidth: 520,
                borderRadius: 18,
                borderWidth: 1,
                borderColor: i.line,
                backgroundColor: i.surface,
                padding: 20,
                gap: 6,
              },
              children: [
                (0, v.jsxs)(l.default, {
                  style: {
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 6,
                  },
                  children: [
                    (0, v.jsx)(h.Copy, {
                      style: {
                        fontSize: 17,
                        lineHeight: 26,
                        fontFamily: 'Vazirmatn_700Bold',
                      },
                      children: (0, p.L)(
                        '\u0645\u06cc\u0627\u0646\u200c\u0628\u0631\u0647\u0627\u06cc \u0635\u0641\u062d\u0647\u200c\u06a9\u0644\u06cc\u062f',
                      ),
                    }),
                    (0, v.jsx)(C.KeyCap, { children: 'Esc' }),
                  ],
                }),
                a.map(([e, t]) =>
                  (0, v.jsxs)(
                    l.default,
                    {
                      style: {
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        minHeight: 34,
                        borderTopWidth: 1,
                        borderColor: i.line,
                      },
                      children: [
                        (0, v.jsx)(h.Copy, {
                          style: { fontSize: 13.5, lineHeight: 22 },
                          children: e,
                        }),
                        (0, v.jsx)(l.default, {
                          style: {
                            flexDirection: 'row',
                            direction: 'ltr',
                            alignItems: 'center',
                            gap: 8,
                          },
                          children: t.map((e, t) =>
                            (0, v.jsxs)(
                              l.default,
                              {
                                style: {
                                  flexDirection: 'row',
                                  direction: 'ltr',
                                  alignItems: 'center',
                                  gap: 8,
                                },
                                children: [
                                  t > 0 &&
                                    (0, v.jsx)(h.Copy, {
                                      style: { fontSize: 11, color: i.muted },
                                      children: (0, p.L)('\u06cc\u0627'),
                                    }),
                                  (0, v.jsx)(C.KeyCaps, { keys: e }),
                                ],
                              },
                              t,
                            ),
                          ),
                        }),
                      ],
                    },
                    e,
                  ),
                ),
                (0, v.jsx)(h.Copy, {
                  style: {
                    fontSize: 12,
                    lineHeight: 20,
                    color: i.muted,
                    marginTop: 6,
                  },
                  children: (0, p.L)(
                    '\u0645\u06cc\u0627\u0646\u200c\u0628\u0631\u0647\u0627 \u0648\u0642\u062a\u06cc \u062f\u0631 \u06cc\u06a9 \u06a9\u0627\u062f\u0631 \u0645\u06cc\u200c\u0646\u0648\u06cc\u0633\u06cc \u06a9\u0627\u0631 \u0646\u0645\u06cc\u200c\u06a9\u0646\u0646\u062f.',
                  ),
                }),
              ],
            }),
          ],
        }),
      });
    }
  },
  702,
  [
    2, 533, 94, 232, 242, 99, 515, 380, 434, 435, 311, 407, 385, 628, 382, 481,
    516, 532, 703, 338,
  ],
);
