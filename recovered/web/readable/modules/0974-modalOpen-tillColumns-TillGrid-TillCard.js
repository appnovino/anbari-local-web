// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 974; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, _a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'modalOpen', {
        enumerable: !0,
        get: function () {
          return M;
        },
      }),
      Object.defineProperty(_e, 'tillColumns', {
        enumerable: !0,
        get: function () {
          return P;
        },
      }),
      (_e.TillGrid = function ({
        products: e,
        movements: h,
        priceOf: w,
        inInvoice: L,
        paused: R,
        onAdd: k,
        onScan: T,
        onVoice: E,
        notice: H,
        sale: W = !1,
      }) {
        const { colors: _ } = (0, y.useTheme)(),
          [O, B] = (0, t.useState)(''),
          [N, F] = (0, t.useState)(''),
          [V, G] = (0, t.useState)(null),
          [q, K] = (0, t.useState)(!1),
          [U, X] = (0, t.useState)(!1),
          [Q, Y] = (0, t.useState)(0),
          [J, Z] = (0, t.useState)(0),
          $ = (0, t.useRef)(null),
          ee = (0, t.useRef)(null),
          te = (0, t.useMemo)(
            () => (0, x.rankBigButtonProducts)(e, h, Number.MAX_SAFE_INTEGER),
            [e, h],
          ),
          ne = (0, t.useMemo)(() => {
            const e = new Map();
            for (const t of te)
              t.category && e.set(t.category, (e.get(t.category) || 0) + 1);
            return [...e.entries()].sort((e, t) => t[1] - e[1]).map(([e]) => e);
          }, [te]),
          re = (0, t.useMemo)(() => {
            const e = (0, a.normalizeName)(O.trim()),
              t = O.trim();
            return te.filter(
              (n) =>
                (!N || n.category === N) &&
                (!e ||
                  (0, a.normalizeName)(n.name).includes(e) ||
                  (!!n.barcode && n.barcode === t)),
            );
          }, [te, O, N]),
          oe = P(Q || 900),
          ie = Math.min(J, Math.max(0, re.length - 1)),
          le = (0, t.useMemo)(() => {
            const e = [];
            for (let t = 0; t < re.length; t += oe) e.push(re.slice(t, t + oe));
            return e;
          }, [re, oe]);
        function ae(e) {
          (0, b.isMeasured)(e) ? G(e) : k(e, { quantity: 1 });
        }
        function se(e) {
          const t = re[e];
          t && (Z(e), ae(t));
        }
        function de() {
          const t = O.trim(),
            n = t ? e.find((e) => e.barcode === t && !e.archivedAt) : void 0;
          if (n) return (ae(n), void B(''));
          const r = re[ie];
          r && (ae(r), O && B(''));
        }
        async function ce() {
          if (!U && E) {
            (X(!0), K(!1));
            try {
              await E((e) => {
                (F(''), B(e));
              });
            } finally {
              X(!1);
            }
          }
        }
        (0, t.useEffect)(() => {
          Z(0);
        }, [O, N]);
        const ue = (0, t.useRef)({
          paused: R,
          pad: !!V,
          at: ie,
          columns: oe,
          count: re.length,
          query: O,
          enter: de,
          addAt: se,
        });
        ((ue.current = {
          paused: R,
          pad: !!V,
          at: ie,
          columns: oe,
          count: re.length,
          query: O,
          enter: de,
          addAt: se,
        }),
          (0, t.useEffect)(() => {
            if ('undefined' == typeof window) return;
            const e = (e) => {
              const t = ue.current;
              if (t.paused || t.pad || M()) return;
              const n = e.target,
                r = !!n && n === $.current,
                o =
                  !!n &&
                  ('TEXTAREA' === n.tagName ||
                    ('INPUT' === n.tagName &&
                      !r &&
                      'barcode-wedge' !== n.getAttribute('data-testid'))),
                i =
                  'barcode-wedge' === n?.getAttribute('data-testid') &&
                  !!n.value,
                l = (0, S.tillKey)(e, {
                  inSearch: r,
                  typing: o,
                  wedgeBusy: i,
                  hasQuery: !!t.query,
                });
              if (!l) return;
              if ('clear' === l)
                return (
                  e.preventDefault(),
                  e.stopImmediatePropagation(),
                  void B('')
                );
              if ('search' === l)
                return (e.preventDefault(), void $.current?.focus());
              if ('enter' === l)
                return (
                  e.preventDefault(),
                  e.stopPropagation(),
                  void (r ? t.enter() : t.addAt(t.at))
                );
              const a = (0, S.tillMove)(t.at, l, t.columns, t.count);
              a !== t.at &&
                (e.preventDefault(),
                Z(a),
                ee.current?.scrollToIndex({
                  index: Math.floor(a / t.columns),
                  viewPosition: 0.5,
                  animated: !0,
                }));
            };
            return (
              window.addEventListener('keydown', e, !0),
              () => window.removeEventListener('keydown', e, !0)
            );
          }, []));
        const fe = (e, t) =>
          (0, z.jsxs)(i.default, {
            style: {
              flexDirection: 'row-reverse',
              alignItems: 'center',
              gap: 4,
            },
            children: [
              (0, z.jsx)(p.Copy, {
                style: { fontSize: 11, color: _.muted },
                children: t,
              }),
              (0, z.jsx)(i.default, {
                style: { ...f.NUMBER_LINE, gap: 3 },
                children: e.map((e) =>
                  (0, z.jsx)(
                    i.default,
                    {
                      style: {
                        paddingHorizontal: 5,
                        minWidth: 20,
                        height: 20,
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: _.line,
                        backgroundColor: _.surface,
                        alignItems: 'center',
                        justifyContent: 'center',
                      },
                      children: (0, z.jsx)(p.Copy, {
                        style: {
                          fontSize: 10,
                          lineHeight: 16,
                          color: _.text,
                          writingDirection: 'ltr',
                        },
                        children: e,
                      }),
                    },
                    e,
                  ),
                ),
              }),
            ],
          });
        return (0, z.jsxs)(i.default, {
          testID: 'till-grid',
          style: { flex: 1, minWidth: 0, gap: 8 },
          onLayout: (e) => Y(e.nativeEvent.layout.width),
          children: [
            (0, z.jsxs)(i.default, {
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 8,
              },
              children: [
                (0, z.jsxs)(i.default, {
                  style: {
                    flexGrow: 1,
                    flexShrink: 1,
                    maxWidth: 440,
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    height: 42,
                    paddingHorizontal: 12,
                    gap: 6,
                    borderRadius: 21,
                    backgroundColor: _.soft,
                  },
                  children: [
                    (0, z.jsx)(u.Icon, {
                      name: 'search',
                      size: 16,
                      color: _.muted,
                    }),
                    (0, z.jsx)(o.default, {
                      ref: $,
                      testID: 'till-search',
                      value: O,
                      onChangeText: B,
                      placeholder: (0, s.L)(
                        '\u062c\u0633\u062a\u200c\u0648\u062c\u0648\u06cc \u06a9\u0627\u0644\u0627 \u06cc\u0627 \u0628\u0627\u0631\u06a9\u062f',
                      ),
                      placeholderTextColor: _.muted,
                      returnKeyType: 'search',
                      autoCorrect: !1,
                      style: {
                        flex: 1,
                        minWidth: 0,
                        height: 42,
                        padding: 0,
                        fontSize: 14,
                        color: _.text,
                        textAlign: 'right',
                        fontFamily: 'Vazirmatn_400Regular',
                        outlineStyle: 'none',
                      },
                    }),
                    (0, z.jsx)(i.default, {
                      style: {
                        paddingHorizontal: 5,
                        height: 20,
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: _.line,
                        justifyContent: 'center',
                      },
                      children: (0, z.jsx)(p.Copy, {
                        style: { fontSize: 10, lineHeight: 16, color: _.muted },
                        children: 'F2',
                      }),
                    }),
                  ],
                }),
                (0, z.jsx)(j.BarKey, {
                  testID: 'till-scan',
                  icon: 'scan',
                  label: q
                    ? (0, s.L)(
                        '\u0628\u0633\u062a\u0646 \u0627\u0633\u06a9\u0646',
                      )
                    : (0, s.L)(
                        '\u0627\u0633\u06a9\u0646 \u0628\u0627\u0631\u06a9\u062f',
                      ),
                  on: q,
                  onPress: () => K((e) => !e),
                }),
                !!E &&
                  (0, v.voiceAddReady)() &&
                  (0, z.jsx)(j.BarKey, {
                    testID: 'till-voice',
                    icon: 'mic',
                    label: U
                      ? (0, s.L)(
                          '\u062f\u0631 \u062d\u0627\u0644 \u0634\u0646\u06cc\u062f\u0646\u2026',
                        )
                      : (0, s.L)('\u0635\u062f\u0627'),
                    on: U,
                    onPress: () => {
                      ce();
                    },
                  }),
              ],
            }),
            q &&
              (0, z.jsxs)(i.default, {
                testID: 'till-scanner',
                style: { gap: 4, maxWidth: 520 },
                children: [
                  (0, z.jsx)(c.Scanner, {
                    active: q && !V && !R,
                    onScan: T,
                    height: 130,
                  }),
                  (0, z.jsx)(p.Copy, {
                    style: { fontSize: 11, color: _.muted },
                    children: (0, s.L)(
                      '\u06a9\u0627\u0644\u0627\u0647\u0627 \u0631\u0627 \u067e\u0634\u062a\u200c\u0633\u0631\u0647\u0645 \u0627\u0633\u06a9\u0646 \u06a9\u0646\u061b \u0647\u0631 \u0628\u0627\u0631 \u06cc\u06a9\u06cc \u0627\u0636\u0627\u0641\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                    ),
                  }),
                ],
              }),
            ne.length > 0 &&
              (0, z.jsx)(l.ScrollView, {
                horizontal: !0,
                ...C.noSwipe,
                showsHorizontalScrollIndicator: !1,
                keyboardShouldPersistTaps: 'handled',
                style: { flexGrow: 0 },
                contentContainerStyle: {
                  flexDirection: 'row-reverse',
                  gap: 6,
                  flexGrow: 1,
                },
                children: ['', ...ne].map((e) => {
                  const t = N === e;
                  return (0, z.jsx)(
                    r.default,
                    {
                      testID: 'till-category-' + (e || 'all'),
                      accessibilityRole: 'button',
                      accessibilityState: { selected: t },
                      onPress: () => F(e),
                      style: ({ pressed: e }) => ({
                        height: 34,
                        paddingHorizontal: 14,
                        borderRadius: 17,
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: t ? _.accent : _.line,
                        backgroundColor: t ? _.accentSoft : _.surface,
                        opacity: e ? 0.75 : 1,
                      }),
                      children: (0, z.jsx)(p.Copy, {
                        numberOfLines: 1,
                        style: {
                          fontSize: 13,
                          lineHeight: 20,
                          color: t ? _.accent : _.text,
                        },
                        children: e || (0, s.L)('\u0647\u0645\u0647'),
                      }),
                    },
                    e || 'all',
                  );
                }),
              }),
            !!H &&
              (0, z.jsx)(p.Copy, {
                accessibilityRole: 'alert',
                style: { fontSize: 12, color: _.danger },
                children: H,
              }),
            re.length
              ? (0, z.jsx)(n.default, {
                  renderScrollComponent: l.pullScrollComponent,
                  ref: ee,
                  testID: 'till-cards',
                  style: { flex: 1 },
                  data: le,
                  keyExtractor: (e) => e.map((e) => e.id).join('|'),
                  extraData: [ie, L],
                  keyboardShouldPersistTaps: 'handled',
                  initialNumToRender: 5,
                  maxToRenderPerBatch: 6,
                  windowSize: 7,
                  getItemLayout: (e, t) => ({
                    length: 214,
                    offset: 214 * t,
                    index: t,
                  }),
                  contentContainerStyle: { paddingVertical: 4 },
                  renderItem: ({ item: e, index: t }) =>
                    (0, z.jsxs)(i.default, {
                      style: {
                        flexDirection: 'row-reverse',
                        gap: I,
                        height: D,
                        marginBottom: I,
                      },
                      children: [
                        e.map((e, n) =>
                          (0, z.jsx)(
                            A,
                            {
                              product: e,
                              price: w(e),
                              already: L(e.id),
                              highlight: t * oe + n === ie,
                              onTap: () => se(t * oe + n),
                            },
                            e.id,
                          ),
                        ),
                        Array.from({ length: oe - e.length }, (e, t) =>
                          (0, z.jsx)(
                            i.default,
                            {
                              style: {
                                flex: 1,
                                padding: 6,
                                borderWidth: 1,
                                borderColor: 'transparent',
                              },
                            },
                            'pad' + t,
                          ),
                        ),
                      ],
                    }),
                })
              : (0, z.jsx)(i.default, {
                  style: { flex: 1 },
                  children: (0, z.jsx)(p.Copy, {
                    style: { padding: 24, textAlign: 'center', color: _.muted },
                    children: O.trim()
                      ? (0, s.L)(
                          '\u06a9\u0627\u0644\u0627\u06cc\u06cc \u0628\u0627 \u0627\u06cc\u0646 \u0646\u0627\u0645 \u067e\u06cc\u062f\u0627 \u0646\u0634\u062f.',
                        )
                      : (0, s.L)(
                          '\u0647\u0646\u0648\u0632 \u06a9\u0627\u0644\u0627\u06cc\u06cc \u062f\u0631 \u0627\u0646\u0628\u0627\u0631 \u0646\u06cc\u0633\u062a.',
                        ),
                  }),
                }),
            (0, z.jsxs)(i.default, {
              testID: 'till-keys',
              style: {
                flexDirection: 'row-reverse',
                flexWrap: 'wrap',
                alignItems: 'center',
                columnGap: 16,
                rowGap: 6,
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderRadius: 14,
                borderWidth: 1,
                borderColor: _.line,
                backgroundColor: _.surface,
              },
              children: [
                fe(
                  ['F2'],
                  (0, s.L)('\u062c\u0633\u062a\u200c\u0648\u062c\u0648'),
                ),
                fe(
                  ['\u2190\u2191\u2193\u2192'],
                  (0, s.L)(
                    '\u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0627\u0644\u0627',
                  ),
                ),
                fe(['Enter'], (0, s.L)('\u0627\u0641\u0632\u0648\u062f\u0646')),
                fe(['\u2212', '+'], (0, s.L)('\u062a\u0639\u062f\u0627\u062f')),
                fe(
                  ['Ctrl', 'Enter'],
                  (0, s.L)(
                    '\u062b\u0628\u062a \u0641\u0627\u06a9\u062a\u0648\u0631',
                  ),
                ),
                fe(['Esc'], (0, s.L)('\u0628\u0633\u062a\u0646')),
                (0, z.jsx)(p.Copy, {
                  style: { fontSize: 11, color: _.muted },
                  children: (0, s.L)('{n} \u06a9\u0627\u0644\u0627', {
                    n: (0, s.localDigits)(re.length),
                  }),
                }),
              ],
            }),
            V &&
              (0, z.jsx)(j.AmountPad, {
                product: V,
                price: W ? { value: w(V), show: void 0 !== w(V) } : void 0,
                onApply: (e) => {
                  (e && k(V, e), G(null));
                },
                onClose: () => G(null),
              }),
          ],
        });
      }),
      Object.defineProperty(_e, 'TillCard', {
        enumerable: !0,
        get: function () {
          return A;
        },
      }));
    var t = _r(d[0]),
      n = e(_r(d[1]));
    _r(d[2]);
    var r = e(_r(d[3])),
      o = e(_r(d[4])),
      i = e(_r(d[5])),
      l = _r(d[6]),
      a = _r(d[7]),
      s = _r(d[8]),
      c = _r(d[9]),
      u = _r(d[10]),
      f = _r(d[11]),
      h = _r(d[12]),
      p = _r(d[13]),
      y = _r(d[14]),
      x = _r(d[15]),
      b = _r(d[16]),
      j = _r(d[17]),
      S = _r(d[18]),
      v = _r(d[19]),
      C = _r(d[20]),
      w = _r(d[21]),
      L = _r(d[22]),
      z = _r(d[23]);
    const D = 206,
      I = 8,
      M = () =>
        'undefined' != typeof document &&
        !!document.querySelector('[aria-modal="true"]'),
      P = (e) => Math.max(2, Math.min(7, Math.floor((e + I) / 176)));
    const R = (e) => Math.round(e).toLocaleString((0, s.numberLocale)()),
      k = (e) => w.notebookFa.units[e] || e,
      A = (0, t.memo)(function ({
        product: e,
        price: n,
        already: o,
        highlight: l = !1,
        onTap: a,
      }) {
        const { colors: c } = (0, y.useTheme)(),
          [u, f] = (0, t.useState)(!1),
          x = (0, b.isMeasured)(e),
          j = k(e.unit || 'piece'),
          S = Number.isFinite(e.stock)
            ? (0, s.L)('\u0645\u0648\u062c\u0648\u062f\u06cc {n}', {
                n:
                  (0, s.localDigits)(String(Math.round(1e3 * e.stock) / 1e3)) +
                  (e.unit && 'piece' !== e.unit ? ' ' + j : ''),
              })
            : '',
          v =
            o > 0
              ? (0, s.L)(
                  '\u062f\u0631 \u0641\u0627\u06a9\u062a\u0648\u0631 {n}',
                  { n: (0, s.localDigits)(String(o)) },
                )
              : x
                ? (0, s.L)('\u0645\u0642\u062f\u0627\u0631')
                : (0, s.L)('+ \u0627\u0641\u0632\u0648\u062f\u0646'),
          C = u || l;
        return (0, z.jsxs)(r.default, {
          testID: 'picker-card-' + e.id,
          accessibilityRole: 'button',
          accessibilityLabel: e.name + '\u060c ' + v,
          onPress: a,
          onHoverIn: () => f(!0),
          onHoverOut: () => f(!1),
          style: ({ pressed: e }) => ({
            flex: 1,
            minWidth: 0,
            padding: 6,
            gap: 3,
            borderRadius: 16,
            borderWidth: C ? 2 : 1,
            borderColor: C ? c.accent : c.line,
            backgroundColor: e ? c.soft : l ? c.accentSoft : c.surface,
            transform: [
              { translateY: e ? 0 : u ? -3 : 0 },
              { scale: e ? 0.98 : 1 },
            ],
            cursor: 'pointer',
            transitionDuration: '120ms',
            transitionProperty: 'transform, box-shadow, border-color',
            boxShadow: u && !e ? '0 8px 20px rgba(0,0,0,.14)' : 'none',
          }),
          children: [
            (0, z.jsxs)(i.default, {
              style: { borderRadius: 12, overflow: 'hidden' },
              children: [
                (0, z.jsx)(h.ProductPhoto, { product: e, height: 92 }),
                (0, z.jsx)(i.default, {
                  testID: 'till-card-strip-' + e.id,
                  style: {
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: 30,
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 4,
                    backgroundColor: c.accent + (o > 0 || C ? 'f0' : 'cc'),
                  },
                  children: (0, z.jsx)(p.Copy, {
                    numberOfLines: 1,
                    style: {
                      fontSize: 13,
                      lineHeight: 20,
                      color: c.onAccent,
                      fontFamily: 'Vazirmatn_700Bold',
                    },
                    children: v,
                  }),
                }),
              ],
            }),
            (0, z.jsx)(p.Copy, {
              numberOfLines: 2,
              style: {
                fontSize: 12,
                lineHeight: 19,
                minHeight: 38,
                fontFamily: 'Vazirmatn_600SemiBold',
              },
              children: e.name,
            }),
            (0, z.jsx)(p.Copy, {
              numberOfLines: 1,
              style: {
                fontSize: 12,
                lineHeight: 18,
                fontFamily: 'Vazirmatn_700Bold',
              },
              children:
                void 0 !== n
                  ? ((w = n), R((0, L.localAmount)(w)) + (x ? ' / ' + j : ''))
                  : ' ',
            }),
            (0, z.jsx)(p.Copy, {
              numberOfLines: 1,
              style: {
                fontSize: 10,
                lineHeight: 16,
                color: e.stock <= 0 ? c.danger : c.muted,
              },
              children: S,
            }),
          ],
        });
        var w;
      });
  },
  974,
  [
    2, 97, 94, 232, 242, 99, 380, 439, 311, 827, 385, 617, 628, 407, 382, 972,
    464, 970, 975, 595, 384, 580, 435, 338,
  ],
);
