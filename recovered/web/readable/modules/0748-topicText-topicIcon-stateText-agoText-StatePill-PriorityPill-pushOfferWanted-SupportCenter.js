// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 748; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, a, _m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'topicText', {
        enumerable: !0,
        get: function () {
          return _;
        },
      }),
      Object.defineProperty(_e, 'topicIcon', {
        enumerable: !0,
        get: function () {
          return B;
        },
      }),
      Object.defineProperty(_e, 'stateText', {
        enumerable: !0,
        get: function () {
          return W;
        },
      }),
      (_e.agoText = M),
      Object.defineProperty(_e, 'StatePill', {
        enumerable: !0,
        get: function () {
          return J;
        },
      }),
      Object.defineProperty(_e, 'PriorityPill', {
        enumerable: !0,
        get: function () {
          return G;
        },
      }),
      (_e.pushOfferWanted = ne),
      (_e.SupportCenter = function ({ shop: e, onClose: n, preview: s }) {
        const { colors: d } = (0, C.useTheme)(),
          u = (0, h.useSafeAreaInsets)(),
          [f, y] = (0, t.useState)(s?.list || null),
          [b, j] = (0, t.useState)(''),
          [w, S] = (0, t.useState)(s?.faq || []),
          [D, L] = (0, t.useState)(s?.tab || 'waiting'),
          [v, T] = (0, t.useState)(!1),
          [P, _] = (0, t.useState)(null),
          [B, V] = (0, t.useState)(
            s?.thread
              ? { kind: 'ticket', id: s.thread.thread.id }
              : 'new' === s?.view
                ? { kind: 'new' }
                : { kind: 'home' },
          ),
          O = (0, t.useRef)(!!s?.tab),
          A = (0, t.useCallback)(async () => {
            if (!s)
              try {
                const t = await (0, z.readTickets)(e);
                (y(t),
                  (0, z.setSupportUnread)(t.unread),
                  j(''),
                  O.current ||
                    ((O.current = !0),
                    L(
                      oe(t.tickets)
                        ? 'answered'
                        : t.counts.waiting
                          ? 'waiting'
                          : t.counts.answered
                            ? 'answered'
                            : 'waiting',
                    )));
              } catch (e) {
                j((0, I.message)(e));
              }
          }, [e, s]);
        if (
          ((0, t.useEffect)(() => {
            ((0, z.setSupportPageOpen)(!0),
              A(),
              s ||
                (0, z.readFaq)(e)
                  .then(S)
                  .catch(() => {}));
            const t = (0, z.takeSupportTarget)();
            t && V({ kind: 'ticket', id: t });
            const r = (0, z.onSupportTarget)((e) => {
              ((0, z.takeSupportTarget)(), V({ kind: 'ticket', id: e }));
            });
            return () => {
              (r(), (0, z.setSupportPageOpen)(!1));
            };
          }, [e.id]),
          (0, t.useEffect)(() => {
            if ('home' !== B.kind || s) return;
            A();
            const e = setInterval(() => {
              A();
            }, 6e4);
            return () => clearInterval(e);
          }, [B.kind, A]),
          (0, t.useEffect)(() => {
            const e = i.default.addEventListener(
              'hardwareBackPress',
              () => ('home' === B.kind ? n() : V({ kind: 'home' }), !0),
            );
            return () => e.remove();
          }, [B.kind, n]),
          'new' === B.kind)
        )
          return (0, H.jsx)(ce, {
            shop: e,
            initialTitle: B.title,
            initialTopic: B.topic,
            preview: !!s,
            openCount: f ? f.counts.waiting + f.counts.answered : 0,
            maxOpen: f?.maxOpen || 10,
            onCancel: () => V({ kind: 'home' }),
            onCreated: (e) => {
              (L('waiting'),
                (O.current = !0),
                V({ kind: 'ticket', id: e.thread.id }),
                A(),
                ne().then((t) => {
                  t &&
                    V((t) =>
                      'ticket' === t.kind && t.id === e.thread.id
                        ? { ...t, offerPush: !0 }
                        : t,
                    );
                }));
            },
          });
        if ('ticket' === B.kind)
          return (0, H.jsx)(ge, {
            shop: e,
            id: B.id,
            idleHours: f?.idleHours || 48,
            preview: s?.thread,
            offerPush: !!B.offerPush,
            onBack: () => {
              (V({ kind: 'home' }), A());
            },
            onNew: () => V({ kind: 'new' }),
          });
        const M = (f?.tickets || []).filter((e) => e.state === D),
          E = {
            waiting: (0, k.L)(
              '\u062a\u06cc\u06a9\u062a\u06cc \u0645\u0646\u062a\u0638\u0631 \u067e\u0627\u0633\u062e \u0646\u06cc\u0633\u062a.',
            ),
            answered: (0, k.L)(
              '\u0647\u0646\u0648\u0632 \u0628\u0647 \u062a\u06cc\u06a9\u062a\u06cc \u067e\u0627\u0633\u062e \u062f\u0627\u062f\u0647 \u0646\u0634\u062f\u0647 \u0627\u0633\u062a.',
            ),
            closed: (0, k.L)(
              '\u062a\u06cc\u06a9\u062a \u0628\u0633\u062a\u0647\u200c\u0634\u062f\u0647\u200c\u0627\u06cc \u0646\u062f\u0627\u0631\u06cc\u062f.',
            ),
          }[D];
        return (0, H.jsx)(c.default, {
          testID: 'support-page',
          style: { flex: 1, backgroundColor: d.bg },
          children: (0, H.jsxs)(p.ScrollView, {
            contentContainerStyle: {
              paddingBottom: Math.max(u.bottom, 16) + 16,
            },
            keyboardShouldPersistTaps: 'handled',
            children: [
              (0, H.jsx)(Q, {
                title: (0, k.L)(
                  '\u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc',
                ),
                back: (0, k.L)('\u0628\u0633\u062a\u0646'),
                onBack: n,
                backTestID: 'support-back',
              }),
              (0, H.jsxs)(c.default, {
                style: {
                  paddingHorizontal: 16,
                  gap: 14,
                  width: '100%',
                  maxWidth: 760,
                  alignSelf: 'center',
                },
                children: [
                  (0, H.jsx)(m.Button, {
                    testID: 'support-new',
                    onPress: () => V({ kind: 'new' }),
                    children: (0, k.L)(
                      '+ \u062a\u06cc\u06a9\u062a \u062c\u062f\u06cc\u062f',
                    ),
                  }),
                  !!f?.prioritySupport &&
                    (0, H.jsx)(R.PrioritySupportNote, {
                      days: f.replyTargetDays || 1,
                    }),
                  (0, H.jsx)(c.default, {
                    testID: 'support-tabs',
                    accessibilityRole: 'tablist',
                    style: {
                      flexDirection: 'row-reverse',
                      padding: 4,
                      gap: 4,
                      borderRadius: 16,
                      backgroundColor: d.soft,
                    },
                    children: F.map((e) => {
                      const t = D === e,
                        r = 'answered' === e ? oe(f?.tickets || []) : 0;
                      return (0, H.jsxs)(
                        o.default,
                        {
                          testID: 'support-tab-' + e,
                          accessibilityRole: 'tab',
                          accessibilityState: { selected: t },
                          onPress: () => L(e),
                          style: ({ pressed: e }) => ({
                            flex: 1,
                            minWidth: 0,
                            minHeight: 44,
                            borderRadius: 12,
                            flexDirection: 'row-reverse',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 5,
                            paddingHorizontal: 4,
                            backgroundColor: t
                              ? d.accent
                              : e
                                ? d.surface
                                : 'transparent',
                          }),
                          children: [
                            (0, H.jsx)(m.Copy, {
                              numberOfLines: 1,
                              style: {
                                flexShrink: 1,
                                fontSize: 13,
                                lineHeight: 22,
                                fontFamily: t
                                  ? 'Vazirmatn_700Bold'
                                  : 'Vazirmatn_600SemiBold',
                                color: t ? d.onAccent : d.text,
                              },
                              children: (0, k.L)(W[e]),
                            }),
                            !!r &&
                              (0, H.jsx)(c.default, {
                                testID: 'support-tab-badge',
                                style: {
                                  minWidth: 20,
                                  height: 20,
                                  paddingHorizontal: 5,
                                  borderRadius: 10,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  backgroundColor: t ? d.onAccent : d.accent,
                                },
                                children: (0, H.jsx)(m.Copy, {
                                  style: {
                                    fontSize: 11,
                                    lineHeight: 16,
                                    fontFamily: 'Vazirmatn_700Bold',
                                    color: t ? d.accent : d.onAccent,
                                  },
                                  children: (0, k.localDigits)(
                                    r > 99 ? '99+' : r,
                                  ),
                                }),
                              }),
                          ],
                        },
                        e,
                      );
                    }),
                  }),
                  !f && !b && (0, H.jsx)(r.default, { color: d.accent }),
                  !!b &&
                    (0, H.jsxs)(m.Card, {
                      children: [
                        (0, H.jsx)(m.Copy, {
                          accessibilityRole: 'alert',
                          style: { color: d.warning },
                          children: b,
                        }),
                        (0, H.jsx)(m.Button, {
                          secondary: !0,
                          onPress: () => {
                            A();
                          },
                          children: (0, k.L)(
                            '\u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646',
                          ),
                        }),
                      ],
                    }),
                  f &&
                    !M.length &&
                    (0, H.jsx)(m.Card, {
                      testID: 'support-empty',
                      style: { alignItems: 'center', paddingVertical: 22 },
                      children: (0, H.jsx)(m.Copy, {
                        style: { color: d.muted, textAlign: 'center' },
                        children: E,
                      }),
                    }),
                  !!M.length &&
                    (0, H.jsx)(m.Card, {
                      testID: 'support-list',
                      style: { padding: 0, gap: 0 },
                      children: M.map((e, t) =>
                        (0, H.jsx)(
                          ae,
                          {
                            ticket: e,
                            first: 0 === t,
                            priority: !!f?.prioritySupport,
                            days: f?.replyTargetDays || 1,
                            onPress: () => V({ kind: 'ticket', id: e.id }),
                          },
                          e.id,
                        ),
                      ),
                    }),
                  !!w.length &&
                    (0, H.jsxs)(c.default, {
                      style: { gap: 8 },
                      children: [
                        (0, H.jsxs)(o.default, {
                          testID: 'support-faq-key',
                          accessibilityRole: 'button',
                          accessibilityState: { expanded: v },
                          onPress: () => T((e) => !e),
                          style: ({ pressed: e }) => ({
                            alignSelf: 'flex-end',
                            flexDirection: 'row-reverse',
                            alignItems: 'center',
                            gap: 6,
                            minHeight: 40,
                            paddingHorizontal: 14,
                            borderRadius: 12,
                            backgroundColor: e ? d.soft : d.surface,
                            borderWidth: l.default.hairlineWidth,
                            borderColor: d.line,
                          }),
                          children: [
                            (0, H.jsx)(m.Copy, {
                              style: {
                                fontSize: 14,
                                fontFamily: 'Vazirmatn_600SemiBold',
                              },
                              children: (0, k.L)(
                                '\u0633\u0624\u0627\u0644\u200c\u0647\u0627\u06cc \u067e\u0631\u062a\u06a9\u0631\u0627\u0631',
                              ),
                            }),
                            (0, H.jsx)(c.default, {
                              style: {
                                transform: [{ rotate: v ? '90deg' : '-90deg' }],
                              },
                              children: (0, H.jsx)(x.Icon, {
                                name: 'chevron',
                                size: 16,
                                color: d.muted,
                              }),
                            }),
                          ],
                        }),
                        v &&
                          (0, H.jsx)(m.Card, {
                            testID: 'support-faq',
                            style: { padding: 0, gap: 0 },
                            children: w.map((e, t) => {
                              const r = P === e.id;
                              return (0, H.jsxs)(
                                c.default,
                                {
                                  style: {
                                    paddingHorizontal: 14,
                                    paddingVertical: 4,
                                    borderTopWidth: t
                                      ? l.default.hairlineWidth
                                      : 0,
                                    borderColor: d.line,
                                  },
                                  children: [
                                    (0, H.jsxs)(o.default, {
                                      testID: 'support-q-' + e.id,
                                      accessibilityRole: 'button',
                                      accessibilityState: { expanded: r },
                                      onPress: () => _(r ? null : e.id),
                                      style: [
                                        m.common.between,
                                        { minHeight: 44 },
                                      ],
                                      children: [
                                        (0, H.jsx)(m.Copy, {
                                          style: {
                                            flex: 1,
                                            fontFamily: 'Vazirmatn_600SemiBold',
                                            fontSize: 14,
                                            lineHeight: 23,
                                          },
                                          children: e.question,
                                        }),
                                        (0, H.jsx)(c.default, {
                                          style: {
                                            transform: [
                                              {
                                                rotate: r ? '90deg' : '-90deg',
                                              },
                                            ],
                                          },
                                          children: (0, H.jsx)(x.Icon, {
                                            name: 'chevron',
                                            size: 16,
                                            color: d.muted,
                                          }),
                                        }),
                                      ],
                                    }),
                                    r &&
                                      (0, H.jsxs)(c.default, {
                                        style: { gap: 8, paddingBottom: 10 },
                                        children: [
                                          (0, H.jsx)(m.Copy, {
                                            style: {
                                              color: d.muted,
                                              lineHeight: 24,
                                              fontSize: 14,
                                            },
                                            children: e.answer,
                                          }),
                                          (0, H.jsxs)(c.default, {
                                            style: {
                                              flexDirection: 'row-reverse',
                                              gap: 8,
                                            },
                                            children: [
                                              (0, H.jsx)(c.default, {
                                                style: m.common.flex,
                                                children: (0, H.jsx)(m.Button, {
                                                  secondary: !0,
                                                  onPress: () => _(null),
                                                  children: (0, k.L)(
                                                    '\u062c\u0648\u0627\u0628\u0645 \u0631\u0627 \u06af\u0631\u0641\u062a\u0645',
                                                  ),
                                                }),
                                              }),
                                              (0, H.jsx)(c.default, {
                                                style: m.common.flex,
                                                children: (0, H.jsx)(m.Button, {
                                                  testID: 'support-ask-' + e.id,
                                                  onPress: () =>
                                                    V({
                                                      kind: 'new',
                                                      title: e.question,
                                                      topic: 'other',
                                                    }),
                                                  children: (0, k.L)(
                                                    '\u0647\u0646\u0648\u0632 \u0633\u0624\u0627\u0644 \u062f\u0627\u0631\u0645',
                                                  ),
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                  ],
                                },
                                e.id,
                              );
                            }),
                          }),
                      ],
                    }),
                  !s && (0, H.jsx)(se, { shop: e }),
                  (0, H.jsxs)(m.Card, {
                    testID: 'support-call',
                    style: {
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      gap: 12,
                    },
                    children: [
                      (0, H.jsxs)(c.default, {
                        style: { flex: 1, minWidth: 0, gap: 2 },
                        children: [
                          (0, H.jsx)(m.Copy, {
                            style: { fontFamily: 'Vazirmatn_700Bold' },
                            children: (0, k.L)(
                              '\u062a\u0645\u0627\u0633 \u0628\u0627 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc',
                            ),
                          }),
                          (0, H.jsxs)(m.Copy, {
                            numberOfLines: 2,
                            style: { fontSize: 13, color: d.muted },
                            children: [
                              '\u2066' + z.SUPPORT_PHONE_TEXT + '\u2069',
                              ' \xb7 ',
                              '\u2066' + z.SUPPORT_EMAIL + '\u2069',
                            ],
                          }),
                        ],
                      }),
                      (0, H.jsx)(o.default, {
                        testID: 'support-call-link',
                        accessibilityRole: 'link',
                        href: 'tel:' + z.SUPPORT_PHONE,
                        onLongPress: () =>
                          U(
                            z.SUPPORT_PHONE_TEXT,
                            (0, k.L)(
                              '\u0634\u0645\u0627\u0631\u0647 \u06a9\u067e\u06cc \u0634\u062f.',
                            ),
                          ),
                        style: ({ pressed: e }) => le(d, e),
                        children: (0, H.jsx)(m.Copy, {
                          style: { fontFamily: 'Vazirmatn_600SemiBold' },
                          children: (0, k.L)('\u062a\u0645\u0627\u0633'),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }),
      (_e.groupMessages = pe),
      (_e.TicketThread = ge));
    var t = _r(_d[0]),
      r = e(_r(_d[1])),
      i = e(_r(_d[2]));
    _r(_d[3]);
    var n = e(_r(_d[4])),
      s = e(_r(_d[5]));
    (_r(_d[6]), _r(_d[7]));
    var o = e(_r(_d[8])),
      l = e(_r(_d[9])),
      d = e(_r(_d[10])),
      c = e(_r(_d[11])),
      u = _r(_d[12]),
      f = _r(_d[13]),
      p = _r(_d[14]),
      h = _r(_d[15]),
      y = _r(_d[16]),
      m =
        (_r(_d[17]),
        (function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          (e &&
            Object.keys(e).forEach(function (r) {
              var i = Object.getOwnPropertyDescriptor(e, r);
              Object.defineProperty(
                t,
                r,
                i.get
                  ? i
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[r];
                      },
                    },
              );
            }),
            (t.default = e));
        })(_r(_d[18])),
        _r(_d[19])),
      x = _r(_d[20]),
      b = _r(_d[21]),
      j = _r(_d[22]),
      w = _r(_d[23]),
      S = _r(_d[24]),
      C = _r(_d[25]),
      I = _r(_d[26]),
      k = _r(_d[27]),
      D = _r(_d[28]),
      L = _r(_d[29]),
      z = _r(_d[30]),
      v = e(_r(_d[31])),
      T = _r(_d[32]),
      P = _r(_d[33]),
      R = _r(_d[34]),
      H = _r(_d[35]);
    const _ = {
        finance:
          '\u0645\u0627\u0644\u06cc \u0648 \u067e\u0631\u062f\u0627\u062e\u062a',
        technical: '\u0645\u0634\u06a9\u0644 \u0641\u0646\u06cc',
        suggestion: '\u067e\u06cc\u0634\u0646\u0647\u0627\u062f',
        other: '\u0633\u0627\u06cc\u0631',
      },
      B = {
        finance: 'wallet',
        technical: 'tool',
        suggestion: 'bulb',
        other: 'chat',
      },
      W = {
        waiting:
          '\u062f\u0631 \u0627\u0646\u062a\u0638\u0627\u0631 \u067e\u0627\u0633\u062e',
        answered:
          '\u067e\u0627\u0633\u062e \u062f\u0627\u062f\u0647 \u0634\u062f',
        closed: '\u0628\u0633\u062a\u0647 \u0634\u062f\u0647',
      },
      V = {
        important: '\u0645\u0647\u0645',
        urgent: '\u062e\u06cc\u0644\u06cc \u0645\u0647\u0645',
      },
      F = ['waiting', 'answered', 'closed'],
      O =
        '\u062a\u0627 \u06f5 \u0641\u0627\u06cc\u0644\u061b \u0639\u06a9\u0633\u200c\u0647\u0627 \u062e\u0648\u062f\u06a9\u0627\u0631 \u06a9\u0648\u0686\u06a9 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f\u061b PDF \u062a\u0627 \u06f3 \u0645\u06af\u0627\u0628\u0627\u06cc\u062a',
      A = (e) => {
        const t = new Date(e);
        return Number.isNaN(t.getTime())
          ? ''
          : t.toLocaleTimeString(
              (0, k.dateLocale)().startsWith('fa')
                ? 'fa-IR'
                : (0, k.dateLocale)(),
              { hour: '2-digit', minute: '2-digit' },
            );
      };
    function M(e, t = Date.now()) {
      if (!e) return '';
      const r = new Date(e);
      if (Number.isNaN(r.getTime())) return '';
      const i = Math.floor((t - r.getTime()) / 6e4);
      if (i < 1)
        return (0, k.L)('\u0647\u0645\u06cc\u0646 \u0627\u0644\u0627\u0646');
      if (i < 60)
        return (0, k.L)(
          '{n} \u062f\u0642\u06cc\u0642\u0647 \u067e\u06cc\u0634',
          { n: (0, k.localDigits)(i) },
        );
      const n = new Date(t),
        s = new Date(t - 864e5);
      return r.toDateString() === n.toDateString()
        ? A(e)
        : r.toDateString() === s.toDateString()
          ? (0, k.L)('\u062f\u06cc\u0631\u0648\u0632 {t}', { t: A(e) })
          : r.toLocaleDateString((0, k.dateLocale)(), {
              month: 'long',
              day: 'numeric',
            });
    }
    const E = (e) =>
      e.number
        ? (0, k.L)('\u062a\u06cc\u06a9\u062a {n}', {
            n: (0, k.localDigits)(e.number),
          })
        : (0, k.L)('\u062a\u06cc\u06a9\u062a');
    async function N(e) {
      if ('undefined' == typeof navigator || !navigator.clipboard)
        throw Error('clipboard_unavailable');
      await navigator.clipboard.writeText(e);
    }
    const U = (e, t) => {
        N(e).then(
          () => (0, j.showToast)(t),
          () =>
            (0, j.showToast)(
              (0, k.L)(
                '\u06a9\u067e\u06cc \u0646\u0634\u062f\u061b \u0639\u062f\u062f \u0631\u0627 \u0646\u06af\u0647 \u062f\u0627\u0631\u06cc\u062f \u0648 \u062f\u0633\u062a\u06cc \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f.',
              ),
            ),
        );
      },
      q = (e) => (0, I.baseUrl)() + e,
      X = (e) => ({ uri: q(e) });
    function K({ label: e, tone: t, testID: r }) {
      const { colors: i } = (0, C.useTheme)(),
        n =
          'answered' === t || 'urgent' === t
            ? {
                bg: i.accentSoft,
                fg: i.accent,
                border: 'urgent' === t ? i.accent : i.accentSoft,
              }
            : 'waiting' === t
              ? { bg: i.surface, fg: i.text, border: i.line }
              : { bg: i.soft, fg: i.muted, border: i.soft };
      return (0, H.jsx)(c.default, {
        testID: r,
        style: {
          paddingHorizontal: 9,
          minHeight: 24,
          justifyContent: 'center',
          borderRadius: 8,
          backgroundColor: n.bg,
          borderWidth: 1,
          borderColor: n.border,
        },
        children: (0, H.jsx)(m.Copy, {
          numberOfLines: 1,
          style: {
            fontSize: 12,
            lineHeight: 20,
            color: n.fg,
            fontFamily: 'Vazirmatn_600SemiBold',
          },
          children: (0, k.L)(e),
        }),
      });
    }
    const J = ({ state: e }) =>
        (0, H.jsx)(K, { testID: 'support-state-' + e, label: W[e], tone: e }),
      G = ({ priority: e }) =>
        (0, H.jsx)(K, {
          testID: 'support-priority-pill-' + e,
          label: V[e],
          tone: e,
        });
    function $({ topic: e, size: t = 38 }) {
      const { colors: r } = (0, C.useTheme)();
      return (0, H.jsx)(c.default, {
        style: {
          width: t,
          height: t,
          borderRadius: 10,
          backgroundColor: r.soft,
          alignItems: 'center',
          justifyContent: 'center',
        },
        children: (0, H.jsx)(x.Icon, {
          name: B[e],
          size: Math.round(0.53 * t),
          color: r.text,
        }),
      });
    }
    function Q({ title: e, sub: t, back: r, onBack: i, backTestID: n }) {
      const { colors: s } = (0, C.useTheme)(),
        d = (0, h.useSafeAreaInsets)();
      return (0, H.jsxs)(c.default, {
        style: {
          paddingTop: d.top + 12,
          paddingHorizontal: 16,
          paddingBottom: 10,
          width: '100%',
          maxWidth: 760,
          alignSelf: 'center',
          flexDirection: 'row-reverse',
          alignItems: 'flex-start',
          gap: 12,
        },
        children: [
          (0, H.jsxs)(c.default, {
            style: { flex: 1, minWidth: 0, gap: 4 },
            children: [
              (0, H.jsx)(m.Copy, {
                accessibilityRole: 'header',
                numberOfLines: 2,
                style: {
                  fontSize: t ? 20 : 26,
                  lineHeight: t ? 32 : 40,
                  fontFamily: 'Vazirmatn_700Bold',
                },
                children: e,
              }),
              t,
            ],
          }),
          (0, H.jsx)(o.default, {
            testID: n,
            accessibilityRole: 'button',
            onPress: i,
            hitSlop: 6,
            style: ({ pressed: e }) => ({
              minHeight: 44,
              paddingHorizontal: 16,
              borderRadius: 14,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: e ? s.soft : s.surface,
              borderWidth: l.default.hairlineWidth,
              borderColor: s.line,
            }),
            children: (0, H.jsx)(m.Copy, {
              style: { fontFamily: 'Vazirmatn_600SemiBold', fontSize: 14 },
              children: r,
            }),
          }),
        ],
      });
    }
    function Y({ children: e }) {
      return (0, H.jsx)(m.Copy, {
        style: { fontFamily: 'Vazirmatn_700Bold', fontSize: 14, marginTop: 4 },
        children: e,
      });
    }
    function Z({ files: e, onRemove: t }) {
      const { colors: r } = (0, C.useTheme)();
      return e.length
        ? (0, H.jsx)(c.default, {
            testID: 'support-picked',
            style: { flexDirection: 'row-reverse', flexWrap: 'wrap', gap: 8 },
            children: e.map((e, i) =>
              (0, H.jsxs)(
                c.default,
                {
                  testID: 'support-attachment-' + i,
                  style: {
                    width: 64,
                    height: 64,
                    borderRadius: 12,
                    backgroundColor: r.soft,
                    borderWidth: l.default.hairlineWidth,
                    borderColor: r.line,
                    overflow: 'hidden',
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                  children: [
                    'image' === e.kind && e.previewUri
                      ? (0, H.jsx)(n.default, {
                          source: { uri: e.previewUri },
                          style: { width: 64, height: 64 },
                        })
                      : (0, H.jsxs)(c.default, {
                          style: {
                            alignItems: 'center',
                            gap: 2,
                            paddingHorizontal: 4,
                          },
                          children: [
                            (0, H.jsx)(x.Icon, {
                              name: 'voice' === e.kind ? 'mic' : 'receipt',
                              size: 20,
                              color: r.text,
                            }),
                            (0, H.jsx)(m.Copy, {
                              numberOfLines: 1,
                              style: {
                                fontSize: 10,
                                lineHeight: 14,
                                color: r.muted,
                              },
                              children:
                                'voice' === e.kind
                                  ? (0, L.durationText)(e.durationMs || 0)
                                  : 'PDF',
                            }),
                          ],
                        }),
                    (0, H.jsx)(o.default, {
                      testID: 'support-attachment-remove-' + i,
                      accessibilityRole: 'button',
                      accessibilityLabel: (0, k.L)(
                        '\u062d\u0630\u0641 \u0641\u0627\u06cc\u0644',
                      ),
                      hitSlop: 8,
                      onPress: () => t(i),
                      style: {
                        position: 'absolute',
                        top: 3,
                        left: 3,
                        width: 22,
                        height: 22,
                        borderRadius: 11,
                        backgroundColor: r.surface,
                        borderWidth: l.default.hairlineWidth,
                        borderColor: r.line,
                        alignItems: 'center',
                        justifyContent: 'center',
                      },
                      children: (0, H.jsx)(x.Icon, {
                        name: 'close',
                        size: 13,
                        color: r.text,
                      }),
                    }),
                  ],
                },
                i,
              ),
            ),
          })
        : null;
    }
    function ee({ onPick: e }) {
      const { colors: t } = (0, C.useTheme)(),
        r = [
          [
            'gallery',
            'photo',
            (0, k.L)(
              '\u0639\u06a9\u0633 \u06cc\u0627 \u0627\u0633\u06a9\u0631\u06cc\u0646\u200c\u0634\u0627\u062a',
            ),
          ],
          ['pdf', 'receipt', (0, k.L)('\u0641\u0627\u06cc\u0644 PDF')],
          [
            'voice',
            'mic',
            (0, k.L)('\u067e\u06cc\u0627\u0645 \u0635\u0648\u062a\u06cc'),
          ],
        ];
      return (0, H.jsx)(c.default, {
        testID: 'support-attach-menu',
        style: { flexDirection: 'row-reverse', gap: 8 },
        children: r.map(([r, i, n]) =>
          (0, H.jsxs)(
            o.default,
            {
              testID: 'support-attach-' + r,
              accessibilityRole: 'button',
              onPress: () => e(r),
              style: ({ pressed: e }) => ({
                flex: 1,
                minWidth: 0,
                minHeight: 64,
                borderRadius: 14,
                alignItems: 'center',
                justifyContent: 'center',
                gap: 4,
                paddingHorizontal: 4,
                backgroundColor: e ? t.soft : t.surface,
                borderWidth: l.default.hairlineWidth,
                borderColor: t.line,
              }),
              children: [
                (0, H.jsx)(x.Icon, { name: i, size: 22, color: t.text }),
                (0, H.jsx)(m.Copy, {
                  numberOfLines: 1,
                  style: { fontSize: 12 },
                  children: n,
                }),
              ],
            },
            r,
          ),
        ),
      });
    }
    function te({ seconds: e, level: t, onCancel: r, onDone: i }) {
      const { colors: n } = (0, C.useTheme)();
      return (0, H.jsxs)(c.default, {
        testID: 'support-recording',
        style: {
          flexDirection: 'row-reverse',
          alignItems: 'center',
          gap: 10,
          minHeight: 52,
          paddingHorizontal: 12,
          borderRadius: 16,
          backgroundColor: n.surface,
          borderWidth: 1,
          borderColor: n.accent,
        },
        children: [
          (0, H.jsx)(c.default, {
            style: {
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: n.accent,
            },
          }),
          (0, H.jsx)(m.Copy, {
            style: { fontFamily: 'Vazirmatn_600SemiBold' },
            children: (0, L.durationText)(1e3 * e),
          }),
          (0, H.jsx)(c.default, {
            style: {
              flex: 1,
              height: 6,
              borderRadius: 3,
              backgroundColor: n.soft,
              overflow: 'hidden',
              direction: 'ltr',
            },
            children: (0, H.jsx)(c.default, {
              style: {
                width: `${Math.max(4, 100 * t)}%`,
                height: 6,
                backgroundColor: n.accent,
              },
            }),
          }),
          (0, H.jsx)(o.default, {
            testID: 'support-record-cancel',
            accessibilityRole: 'button',
            onPress: r,
            style: {
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 10,
              backgroundColor: n.soft,
            },
            children: (0, H.jsx)(m.Copy, {
              style: { fontSize: 13 },
              children: (0, k.L)('\u0644\u063a\u0648'),
            }),
          }),
          (0, H.jsx)(o.default, {
            testID: 'support-record-send',
            accessibilityRole: 'button',
            onPress: i,
            style: {
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 10,
              backgroundColor: n.accent,
            },
            children: (0, H.jsx)(m.Copy, {
              style: {
                fontSize: 13,
                color: n.onAccent,
                fontFamily: 'Vazirmatn_600SemiBold',
              },
              children: (0, k.L)('\u062a\u0645\u0627\u0645'),
            }),
          }),
        ],
      });
    }
    function re() {
      const [e, r] = (0, t.useState)([]),
        [i, n] = (0, t.useState)(!1),
        [s, o] = (0, t.useState)(0),
        l = (0, D.useVoiceNote)(),
        d = z.MAX_FILES - e.length,
        c = (e) => r((t) => [...t, ...e].slice(0, z.MAX_FILES));
      async function u() {
        try {
          c([await l.stop()]);
        } catch (e) {
          (0, j.showToast)((0, I.message)(e));
        }
      }
      return (
        (0, t.useEffect)(() => {
          if (!l.recording) return void o(0);
          const e = Date.now(),
            t = setInterval(() => {
              const t = Math.floor((Date.now() - e) / 1e3);
              (o(t), 1e3 * t >= z.FILE_LIMITS.voiceMs && u());
            }, 500);
          return () => clearInterval(t);
        }, [l.recording]),
        {
          files: e,
          setFiles: r,
          remove: (e) => r((t) => t.filter((t, r) => r !== e)),
          busy: i,
          pick: async function (e) {
            if (d <= 0)
              (0, j.showToast)((0, I.message)(Error('support_too_many_files')));
            else if ('voice' !== e) {
              n(!0);
              try {
                if ('pdf' === e) {
                  const e = await (0, L.pickSupportPdf)();
                  e && c([e]);
                } else c(await (0, L.pickSupportPhotos)('camera' === e, d));
              } catch (e) {
                (0, j.showToast)((0, I.message)(e));
              } finally {
                n(!1);
              }
            } else
              try {
                await l.start();
              } catch (e) {
                (e instanceof Error && 'cancelled' === e.message) ||
                  (0, j.showToast)((0, I.message)(e));
              }
          },
          voice: l,
          seconds: s,
          finishVoice: u,
          room: d,
        }
      );
    }
    const ie = 'anbari.support.pushOffered';
    async function ne() {
      try {
        if (await v.default.getItem(ie)) return !1;
      } catch {
        return !1;
      }
      return ['off', 'ios-home'].includes(
        await (0, T.webPushState)().catch(() => 'unsupported'),
      );
    }
    function se({ shop: e, offer: r = !1, onDone: i }) {
      const { colors: n } = (0, C.useTheme)(),
        [s, l] = (0, t.useState)(null),
        [d, u] = (0, t.useState)(!1),
        [f, p] = (0, t.useState)(!1);
      if (
        ((0, t.useEffect)(() => {
          let e = !0;
          return (
            (0, T.webPushState)().then(
              (t) => {
                e && l(t);
              },
              () => {},
            ),
            () => {
              e = !1;
            }
          );
        }, []),
        !s || !['off', 'denied', 'ios-home'].includes(s))
      )
        return null;
      const h = () => {
        try {
          v.default.setItem(ie, '1');
        } catch {}
        i?.();
      };
      return (0, H.jsxs)(m.Card, {
        testID: r ? 'support-push-offer' : 'support-push-card',
        style: { gap: 8, padding: 14 },
        children: [
          (0, H.jsxs)(c.default, {
            style: {
              flexDirection: 'row-reverse',
              alignItems: 'center',
              gap: 10,
            },
            children: [
              (0, H.jsx)(c.default, {
                style: {
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  backgroundColor: n.soft,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                children: (0, H.jsx)(x.Icon, {
                  name: 'bell',
                  size: 20,
                  color: n.text,
                }),
              }),
              (0, H.jsxs)(c.default, {
                style: { flex: 1, minWidth: 0 },
                children: [
                  (0, H.jsx)(m.Copy, {
                    style: { fontFamily: 'Vazirmatn_700Bold', fontSize: 14.5 },
                    children: r
                      ? (0, k.L)(
                          '\u0648\u0642\u062a\u06cc \u067e\u0627\u0633\u062e \u0622\u0645\u062f\u060c \u062e\u0628\u0631\u062a\u0627\u0646 \u06a9\u0646\u06cc\u0645\u061f',
                        )
                      : (0, k.L)(
                          '\u0627\u0639\u0644\u0627\u0646 \u067e\u0627\u0633\u062e \u062a\u06cc\u06a9\u062a \u0631\u0627 \u0631\u0648\u0634\u0646 \u06a9\u0646',
                        ),
                  }),
                  (0, H.jsx)(m.Copy, {
                    style: { fontSize: 12.5, lineHeight: 21, color: n.muted },
                    children: (0, k.L)(
                      '\u062d\u062a\u06cc \u0648\u0642\u062a\u06cc \u0627\u06cc\u0646 \u0635\u0641\u062d\u0647 \u0628\u0633\u062a\u0647 \u0627\u0633\u062a\u060c \u0628\u0627 \u0635\u062f\u0627\u06cc \u0627\u0639\u0644\u0627\u0646 \u0645\u0631\u0648\u0631\u06af\u0631 \u062e\u0628\u0631 \u0645\u06cc\u200c\u062f\u0647\u06cc\u0645.',
                    ),
                  }),
                ],
              }),
            ],
          }),
          'off' === s &&
            (0, H.jsxs)(c.default, {
              style: { flexDirection: 'row-reverse', gap: 8 },
              children: [
                (0, H.jsx)(c.default, {
                  style: m.common.flex,
                  children: (0, H.jsx)(m.Button, {
                    testID: 'support-push-enable',
                    disabled: f,
                    onPress: async function () {
                      p(!0);
                      try {
                        const t = await (0, T.enableWebPush)(e.id);
                        (l(t),
                          'on' === t &&
                            ((0, j.showToast)(
                              (0, k.L)(
                                '\u0627\u0639\u0644\u0627\u0646 \u067e\u0627\u0633\u062e \u062a\u06cc\u06a9\u062a \u0631\u0648\u0634\u0646 \u0634\u062f.',
                              ),
                            ),
                            h()));
                      } catch (e) {
                        (0, j.showToast)((0, I.message)(e));
                      } finally {
                        p(!1);
                      }
                    },
                    children: (0, k.L)('\u0631\u0648\u0634\u0646 \u06a9\u0646'),
                  }),
                }),
                r &&
                  (0, H.jsx)(c.default, {
                    style: m.common.flex,
                    children: (0, H.jsx)(m.Button, {
                      testID: 'support-push-later',
                      secondary: !0,
                      onPress: h,
                      children: (0, k.L)(
                        '\u0646\u0647\u060c \u0645\u0645\u0646\u0648\u0646',
                      ),
                    }),
                  }),
              ],
            }),
          'denied' === s &&
            (0, H.jsx)(m.Copy, {
              testID: 'support-push-denied',
              style: { fontSize: 13, lineHeight: 22, color: n.text },
              children: (0, k.L)(
                '\u0627\u0639\u0644\u0627\u0646 \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646 \u0633\u0627\u06cc\u062a \u0628\u0633\u062a\u0647 \u0627\u0633\u062a. \u0628\u0631\u0627\u06cc \u0631\u0648\u0634\u0646 \u06a9\u0631\u062f\u0646\u060c \u0631\u0648\u06cc \u0642\u0641\u0644 \u06a9\u0646\u0627\u0631 \u0646\u0634\u0627\u0646\u06cc \u0633\u0627\u06cc\u062a \u0628\u0632\u0646\u06cc\u062f\u060c \xab\u0627\u0639\u0644\u0627\u0646\u200c\u0647\u0627\xbb \u0631\u0627 \u0631\u0648\u06cc \xab\u0627\u062c\u0627\u0632\u0647\xbb \u0628\u06af\u0630\u0627\u0631\u06cc\u062f \u0648 \u0635\u0641\u062d\u0647 \u0631\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0628\u0627\u0632 \u06a9\u0646\u06cc\u062f.',
              ),
            }),
          'ios-home' === s &&
            (0, H.jsxs)(c.default, {
              testID: 'support-push-ios',
              style: { gap: 6 },
              children: [
                (0, H.jsx)(m.Copy, {
                  style: { fontSize: 13, lineHeight: 22 },
                  children: P.landingFa.iosNotificationsTip,
                }),
                (0, H.jsx)(o.default, {
                  testID: 'support-push-ios-steps',
                  accessibilityRole: 'button',
                  accessibilityState: { expanded: d },
                  onPress: () => u((e) => !e),
                  children: (0, H.jsx)(m.Copy, {
                    style: {
                      fontSize: 13,
                      color: n.accent,
                      fontFamily: 'Vazirmatn_600SemiBold',
                    },
                    children: d
                      ? (0, k.L)(
                          '\u0628\u0633\u062a\u0646 \u0631\u0627\u0647\u0646\u0645\u0627',
                        )
                      : (0, k.L)(
                          '\u0686\u0637\u0648\u0631 \u0628\u0647 \u0635\u0641\u062d\u0647\u0654 \u0627\u0635\u0644\u06cc \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u0645\u061f',
                        ),
                  }),
                }),
                d &&
                  P.landingFa.iosSteps.map(([e, t], r) =>
                    (0, H.jsxs)(
                      m.Copy,
                      {
                        style: {
                          fontSize: 12.5,
                          lineHeight: 21,
                          color: n.muted,
                        },
                        children: [(0, k.localDigits)(r + 1), '. ', e, ': ', t],
                      },
                      r,
                    ),
                  ),
              ],
            }),
          r &&
            'off' !== s &&
            (0, H.jsx)(o.default, {
              testID: 'support-push-later',
              accessibilityRole: 'button',
              onPress: h,
              style: { alignSelf: 'flex-start' },
              children: (0, H.jsx)(m.Copy, {
                style: { fontSize: 13, color: n.muted },
                children: (0, k.L)('\u0628\u0633\u062a\u0646'),
              }),
            }),
        ],
      });
    }
    const oe = (e) =>
      e.filter((e) => 'answered' === e.state && (e.unread || 0) > 0).length;
    const le = (e, t) => ({
      minHeight: 44,
      paddingHorizontal: 20,
      borderRadius: 14,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: t ? e.soft : e.surface,
      borderWidth: 1,
      borderColor: e.line,
    });
    function ae({
      ticket: e,
      first: t,
      onPress: r,
      priority: i = !1,
      days: n = 1,
    }) {
      const { colors: s } = (0, C.useTheme)(),
        d = !!e.unread,
        u =
          'answered' === e.state
            ? (0, k.L)('\u067e\u0627\u0633\u062e: {t}', {
                t: M(e.lastAnswerAt || e.lastMessageAt),
              })
            : 'closed' === e.state
              ? (0, k.L)('\u0628\u0633\u062a\u0647 \u0634\u062f: {t}', {
                  t: M(e.closedAt || e.lastMessageAt),
                })
              : (0, k.L)('\u0627\u0631\u0633\u0627\u0644: {t}', {
                  t: M(e.lastMessageAt),
                });
      return (0, H.jsxs)(o.default, {
        testID: 'support-ticket-' + e.id,
        accessibilityRole: 'button',
        accessibilityLabel:
          (d
            ? (0, k.L)(
                '\u067e\u0627\u0633\u062e \u062a\u0627\u0632\u0647\u060c ',
              )
            : '') + e.subject,
        onPress: r,
        style: ({ pressed: e }) => ({
          flexDirection: 'row-reverse',
          alignItems: 'flex-start',
          gap: 12,
          paddingHorizontal: 14,
          paddingVertical: 14,
          borderTopWidth: t ? 0 : l.default.hairlineWidth,
          borderColor: s.line,
          backgroundColor: e ? s.soft : 'transparent',
        }),
        children: [
          (0, H.jsx)($, { topic: e.topic }),
          (0, H.jsxs)(c.default, {
            style: { flex: 1, minWidth: 0, gap: 4 },
            children: [
              (0, H.jsxs)(c.default, {
                style: {
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  gap: 6,
                },
                children: [
                  d &&
                    (0, H.jsx)(c.default, {
                      testID: 'support-ticket-unread',
                      accessibilityLabel: (0, k.L)(
                        '\u062e\u0648\u0627\u0646\u062f\u0647\u200c\u0646\u0634\u062f\u0647',
                      ),
                      style: {
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: s.accent,
                      },
                    }),
                  (0, H.jsx)(m.Copy, {
                    numberOfLines: 2,
                    style: {
                      flex: 1,
                      fontSize: 15,
                      lineHeight: 24,
                      fontFamily: d
                        ? 'Vazirmatn_700Bold'
                        : 'Vazirmatn_600SemiBold',
                    },
                    children: e.subject,
                  }),
                ],
              }),
              (0, H.jsxs)(m.Copy, {
                numberOfLines: 1,
                style: { fontSize: 13, lineHeight: 21, color: s.muted },
                children: [E(e), ' \xb7 ', (0, k.L)(_[e.topic])],
              }),
              i &&
                'waiting' === e.state &&
                (0, H.jsx)(R.PrioritySupportNote, { compact: !0, days: n }),
              (0, H.jsxs)(c.default, {
                style: {
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  gap: 6,
                  marginTop: 2,
                },
                children: [
                  (0, H.jsx)(J, { state: e.state }),
                  (0, H.jsx)(G, { priority: e.priority }),
                  (0, H.jsx)(m.Copy, {
                    numberOfLines: 1,
                    style: {
                      flex: 1,
                      fontSize: 12,
                      lineHeight: 20,
                      color: s.muted,
                      textAlign: 'left',
                    },
                    children: u,
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    function de({
      on: e,
      onPress: t,
      testID: r,
      children: i,
      tone: n = 'accent',
    }) {
      const { colors: s } = (0, C.useTheme)(),
        d = 'accent' === n;
      return (0, H.jsx)(o.default, {
        testID: r,
        accessibilityRole: 'radio',
        accessibilityState: { selected: e, checked: e },
        onPress: t,
        style: ({ pressed: t }) => ({
          flex: 1,
          minWidth: 0,
          height: 52,
          borderRadius: 14,
          flexDirection: 'row-reverse',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          paddingHorizontal: 10,
          backgroundColor: e
            ? d
              ? s.accentSoft
              : s.soft
            : t
              ? s.soft
              : s.surface,
          borderWidth: e ? 1.5 : l.default.hairlineWidth,
          borderColor: e ? (d ? s.accent : s.text) : s.line,
        }),
        children: i,
      });
    }
    function ce({
      shop: e,
      initialTitle: i,
      initialTopic: n,
      preview: d,
      openCount: u,
      maxOpen: f,
      onCancel: p,
      onCreated: y,
    }) {
      const { colors: b } = (0, C.useTheme)(),
        w = (0, h.useSafeAreaInsets)(),
        D = (0, S.useKeyboardVisible)(),
        [L, v] = (0, t.useState)(n || null),
        [T, P] = (0, t.useState)('important'),
        [R, W] = (0, t.useState)(i || ''),
        [F, A] = (0, t.useState)(''),
        [M, E] = (0, t.useState)(!1),
        [N, U] = (0, t.useState)(''),
        q = re(),
        X = (0, t.useRef)((0, I.randomUUID)()),
        [K, J] = (0, t.useState)(!1),
        G = (0, t.useRef)(!1);
      return (
        (0, t.useEffect)(() => {
          d ||
            i ||
            (0, z.loadDraft)(e.id, 'new').then((e) => {
              try {
                const t = JSON.parse(e || '{}');
                (t.title && W((e) => e || t.title),
                  t.body && A((e) => e || t.body));
              } catch {}
            });
        }, [e.id]),
        (0, t.useEffect)(() => {
          d ||
            (0, z.saveDraft)(
              e.id,
              R || F ? JSON.stringify({ title: R, body: F }) : '',
              'new',
            );
        }, [R, F]),
        (0, H.jsxs)(s.default, {
          testID: 'support-new-form',
          style: { flex: 1, backgroundColor: b.bg },
          behavior: S.keyboardBehavior,
          children: [
            (0, H.jsx)(Q, {
              title: (0, k.L)(
                '\u062a\u06cc\u06a9\u062a \u062c\u062f\u06cc\u062f',
              ),
              back: (0, k.L)('\u0627\u0646\u0635\u0631\u0627\u0641'),
              onBack: p,
              backTestID: 'support-new-cancel',
            }),
            (0, H.jsxs)(S.KeyboardScrollView, {
              keyboardShouldPersistTaps: 'handled',
              contentContainerStyle: {
                paddingHorizontal: 16,
                paddingBottom: D ? 16 : Math.max(w.bottom, 16) + 16,
                gap: 10,
                width: '100%',
                maxWidth: 760,
                alignSelf: 'center',
              },
              children: [
                (0, H.jsx)(Y, {
                  children: (0, k.L)('\u0645\u0648\u0636\u0648\u0639'),
                }),
                (0, H.jsx)(c.default, {
                  testID: 'support-topics',
                  accessibilityRole: 'radiogroup',
                  style: { gap: 8 },
                  children: [z.TOPICS.slice(0, 2), z.TOPICS.slice(2)].map(
                    (e, t) =>
                      (0, H.jsx)(
                        c.default,
                        {
                          style: { flexDirection: 'row-reverse', gap: 8 },
                          children: e.map((e) =>
                            (0, H.jsxs)(
                              de,
                              {
                                testID: 'support-topic-' + e,
                                on: L === e,
                                onPress: () => v(e),
                                children: [
                                  (0, H.jsx)(x.Icon, {
                                    name: B[e],
                                    size: 20,
                                    color: b.text,
                                  }),
                                  (0, H.jsx)(m.Copy, {
                                    numberOfLines: 1,
                                    style: {
                                      flexShrink: 1,
                                      fontSize: 14,
                                      lineHeight: 22,
                                      fontFamily:
                                        L === e
                                          ? 'Vazirmatn_700Bold'
                                          : 'Vazirmatn_600SemiBold',
                                    },
                                    children: (0, k.L)(_[e]),
                                  }),
                                ],
                              },
                              e,
                            ),
                          ),
                        },
                        t,
                      ),
                  ),
                }),
                (0, H.jsx)(Y, {
                  children: (0, k.L)(
                    '\u0627\u0648\u0644\u0648\u06cc\u062a \u062a\u06cc\u06a9\u062a',
                  ),
                }),
                (0, H.jsx)(c.default, {
                  testID: 'support-priorities',
                  accessibilityRole: 'radiogroup',
                  style: { flexDirection: 'row-reverse', gap: 8 },
                  children: ['important', 'urgent'].map((e) =>
                    (0, H.jsx)(
                      de,
                      {
                        testID: 'support-priority-' + e,
                        tone: 'urgent' === e ? 'accent' : 'neutral',
                        on: T === e,
                        onPress: () => P(e),
                        children: (0, H.jsx)(m.Copy, {
                          numberOfLines: 1,
                          style: {
                            fontSize: 14,
                            lineHeight: 22,
                            fontFamily:
                              T === e
                                ? 'Vazirmatn_700Bold'
                                : 'Vazirmatn_600SemiBold',
                            color:
                              T === e && 'urgent' === e ? b.accent : b.text,
                          },
                          children: (0, k.L)(V[e]),
                        }),
                      },
                      e,
                    ),
                  ),
                }),
                (0, H.jsx)(Y, {
                  children: (0, k.L)('\u0639\u0646\u0648\u0627\u0646'),
                }),
                (0, H.jsx)(m.Input, {
                  testID: 'support-new-title',
                  value: R,
                  onChangeText: W,
                  maxLength: 150,
                  placeholder: (0, k.L)(
                    '\u0645\u062b\u0644\u0627\u064b: \u0641\u0627\u06a9\u062a\u0648\u0631 \u0686\u0627\u067e \u0646\u0645\u06cc\u200c\u0634\u0648\u062f',
                  ),
                  returnKeyType: 'next',
                }),
                (0, H.jsx)(Y, {
                  children: (0, k.L)('\u062a\u0648\u0636\u06cc\u062d'),
                }),
                (0, H.jsx)(m.Input, {
                  testID: 'support-new-body',
                  value: F,
                  onChangeText: A,
                  maxLength: 5e3,
                  multiline: !0,
                  placeholder: (0, k.L)(
                    '\u0686\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a\u061f \u0647\u0631 \u0686\u0647 \u062f\u0642\u06cc\u0642\u200c\u062a\u0631 \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f\u060c \u0632\u0648\u062f\u062a\u0631 \u06a9\u0645\u06a9 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645.',
                  ),
                  style: {
                    minHeight: 120,
                    textAlignVertical: 'top',
                    paddingTop: 12,
                  },
                }),
                (0, H.jsx)(Z, { files: q.files, onRemove: q.remove }),
                q.voice.recording
                  ? (0, H.jsx)(te, {
                      seconds: q.seconds,
                      level: q.voice.level,
                      onCancel: q.voice.cancel,
                      onDone: () => {
                        q.finishVoice();
                      },
                    })
                  : M
                    ? (0, H.jsx)(ee, {
                        onPick: (e) => {
                          (E(!1), q.pick(e));
                        },
                      })
                    : (0, H.jsxs)(o.default, {
                        testID: 'support-new-attach',
                        accessibilityRole: 'button',
                        disabled: q.busy || q.room <= 0,
                        onPress: () => E(!0),
                        style: ({ pressed: e }) => ({
                          alignSelf: 'flex-end',
                          flexDirection: 'row-reverse',
                          alignItems: 'center',
                          gap: 8,
                          minHeight: 46,
                          paddingHorizontal: 16,
                          borderRadius: 14,
                          opacity: q.room <= 0 ? 0.5 : 1,
                          backgroundColor: e ? b.soft : b.surface,
                          borderWidth: l.default.hairlineWidth,
                          borderColor: b.line,
                        }),
                        children: [
                          q.busy
                            ? (0, H.jsx)(r.default, { color: b.accent })
                            : (0, H.jsx)(x.Icon, {
                                name: 'plus',
                                size: 18,
                                color: b.text,
                              }),
                          (0, H.jsx)(m.Copy, {
                            style: {
                              fontFamily: 'Vazirmatn_600SemiBold',
                              fontSize: 14,
                            },
                            children: (0, k.L)(
                              '\u0627\u0641\u0632\u0648\u062f\u0646 \u0639\u06a9\u0633 \u06cc\u0627 \u0641\u0627\u06cc\u0644',
                            ),
                          }),
                        ],
                      }),
                (0, H.jsx)(m.Copy, {
                  testID: 'support-limit-line',
                  style: { fontSize: 12, lineHeight: 20, color: b.muted },
                  children: (0, k.L)(O),
                }),
                !!N &&
                  (0, H.jsx)(m.Copy, {
                    testID: 'support-new-error',
                    accessibilityRole: 'alert',
                    style: { color: b.warning, lineHeight: 24 },
                    children: N,
                  }),
                (0, H.jsx)(c.default, {
                  style: { marginTop: 4 },
                  children: (0, H.jsx)(m.Button, {
                    testID: 'support-new-submit',
                    disabled: K,
                    onPress: async function () {
                      if ((U(''), !L))
                        return U(
                          (0, k.L)(
                            '\u0645\u0648\u0636\u0648\u0639 \u062a\u06cc\u06a9\u062a \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f.',
                          ),
                        );
                      if (R.trim().length < 2)
                        return U(
                          (0, k.L)(
                            '\u0639\u0646\u0648\u0627\u0646 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f\u061b \u0645\u062b\u0644\u0627\u064b \xab\u0641\u0627\u06a9\u062a\u0648\u0631 \u0686\u0627\u067e \u0646\u0645\u06cc\u200c\u0634\u0648\u062f\xbb.',
                          ),
                        );
                      if (!F.trim() && !q.files.length)
                        return U(
                          (0, k.L)(
                            '\u062a\u0648\u0636\u06cc\u062d \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f \u062a\u0627 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0628\u062f\u0627\u0646\u062f \u0686\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a.',
                          ),
                        );
                      if (u >= f)
                        return U(
                          (0, I.message)(
                            Object.assign(Error('support_too_many_open')),
                          ),
                        );
                      if (!G.current) {
                        ((G.current = !0), J(!0));
                        try {
                          const t = await (0, z.createTicket)(
                            e,
                            {
                              topic: L,
                              priority: T,
                              title: R,
                              body: F,
                              files: q.files,
                            },
                            X.current,
                          );
                          ((0, z.saveDraft)(e.id, '', 'new'),
                            (0, j.showToast)(
                              t.thread.number
                                ? (0, k.L)(
                                    '\u062a\u06cc\u06a9\u062a {n} \u062b\u0628\u062a \u0634\u062f.',
                                    { n: (0, k.localDigits)(t.thread.number) },
                                  )
                                : (0, k.L)(
                                    '\u062a\u06cc\u06a9\u062a \u062b\u0628\u062a \u0634\u062f.',
                                  ),
                            ),
                            y(t));
                        } catch (e) {
                          U((0, I.message)(e));
                        } finally {
                          ((G.current = !1), J(!1));
                        }
                      }
                    },
                    children: K
                      ? (0, k.L)(
                          '\u062f\u0631 \u062d\u0627\u0644 \u062b\u0628\u062a\u2026',
                        )
                      : (0, k.L)('\u062b\u0628\u062a \u062a\u06cc\u06a9\u062a'),
                  }),
                }),
              ],
            }),
          ],
        })
      );
    }
    function ue({ file: e, localUri: r, mine: i }) {
      const { colors: n } = (0, C.useTheme)(),
        s = (0, y.useAudioPlayer)(null),
        l = (0, y.useAudioPlayerStatus)(s),
        d = (0, t.useRef)(!1),
        u = i ? n.onAccent : n.text,
        f = 1e3 * (l.duration || 0) || e.durationMs || 0,
        p = f ? Math.min(1, (1e3 * l.currentTime) / f) : 0;
      return (0, H.jsxs)(c.default, {
        style: {
          flexDirection: 'row-reverse',
          alignItems: 'center',
          gap: 10,
          minWidth: 190,
        },
        children: [
          (0, H.jsx)(o.default, {
            testID: 'support-voice-play',
            accessibilityRole: 'button',
            accessibilityLabel: l.playing
              ? (0, k.L)('\u062a\u0648\u0642\u0641')
              : (0, k.L)(
                  '\u067e\u062e\u0634 \u067e\u06cc\u0627\u0645 \u0635\u0648\u062a\u06cc',
                ),
            onPress: function () {
              (d.current ||
                (s.replace(r ? { uri: r } : X(e.url || '')), (d.current = !0)),
                l.playing
                  ? s.pause()
                  : ((l.didJustFinish ||
                      (f && 1e3 * l.currentTime >= f - 200)) &&
                      s.seekTo(0),
                    s.play()));
            },
            hitSlop: 6,
            style: {
              width: 40,
              height: 40,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: i ? 'rgba(255,255,255,.22)' : n.soft,
            },
            children: (0, H.jsx)(x.Icon, {
              name: l.playing ? 'stop' : 'play',
              size: 18,
              color: u,
            }),
          }),
          (0, H.jsxs)(c.default, {
            style: { flex: 1, gap: 4 },
            children: [
              (0, H.jsx)(c.default, {
                style: {
                  height: 4,
                  borderRadius: 2,
                  backgroundColor: i ? 'rgba(255,255,255,.3)' : n.line,
                  overflow: 'hidden',
                  direction: 'ltr',
                },
                children: (0, H.jsx)(c.default, {
                  style: {
                    width: 100 * p + '%',
                    height: 4,
                    backgroundColor: u,
                  },
                }),
              }),
              (0, H.jsxs)(m.Copy, {
                style: { fontSize: 12, color: u, opacity: 0.85 },
                children: [
                  (0, k.L)('\u067e\u06cc\u0627\u0645 \u0635\u0648\u062a\u06cc'),
                  '\u060c ',
                  (0, L.durationText)(l.playing ? 1e3 * l.currentTime : f),
                ],
              }),
            ],
          }),
        ],
      });
    }
    async function fe(e) {
      window.open(q(e.url), '_blank', 'noopener');
    }
    function pe(e) {
      const t = [];
      for (const r of e) {
        const e = r.localFiles
            ? r.localFiles.map((e) => ({
                kind: e.kind,
                local: e.previewUri,
                name: e.name,
                size: e.size,
                durationMs: e.durationMs ?? null,
              }))
            : r.file && 'text' !== r.kind
              ? [
                  {
                    kind: r.kind,
                    url: r.file.url,
                    name: r.file.name,
                    size: r.file.size,
                    durationMs: r.file.durationMs,
                    file: r.file,
                  },
                ]
              : [],
          i = t.at(-1);
        i &&
        r.batchId &&
        i.source.batchId === r.batchId &&
        i.author === r.author_kind
          ? (i.parts.push(...e),
            r.body && (i.text = i.text ? i.text + '\n' + r.body : r.body),
            (i.createdAt = r.createdAt))
          : t.push({
              key: r.id,
              author: r.author_kind,
              text: r.body,
              parts: e,
              createdAt: r.createdAt,
              pending: r.pending,
              failed: r.failed,
              source: r,
            });
      }
      return t;
    }
    function he({ group: e, onImage: t, onRetry: r }) {
      const { colors: i } = (0, C.useTheme)(),
        s = 'user' === e.author,
        d = s ? i.onAccent : i.text,
        u = e.parts.filter((e) => 'image' === e.kind),
        f = e.parts.filter((e) => 'image' !== e.kind),
        p = 1 === u.length,
        h = (e) => (e.local ? { uri: e.local } : X(e.url || ''));
      return (0, H.jsxs)(c.default, {
        testID: 'support-msg-' + (e.parts[0]?.kind || 'text'),
        style: {
          alignSelf: s ? 'flex-end' : 'flex-start',
          maxWidth: '86%',
          gap: 4,
        },
        children: [
          (0, H.jsxs)(c.default, {
            style: {
              borderRadius: 18,
              borderTopRightRadius: s ? 6 : 18,
              borderTopLeftRadius: s ? 18 : 6,
              padding: !u.length || e.text || f.length ? 12 : 4,
              gap: 8,
              backgroundColor: s ? i.accent : i.surface,
              borderWidth: s ? 0 : l.default.hairlineWidth,
              borderColor: i.line,
              opacity: e.pending ? 0.7 : 1,
            },
            children: [
              !!u.length &&
                (0, H.jsx)(c.default, {
                  testID: 'support-files-grid',
                  style: {
                    flexDirection: 'row-reverse',
                    flexWrap: 'wrap',
                    gap: 4,
                  },
                  children: u.map((e, r) =>
                    (0, H.jsx)(
                      o.default,
                      {
                        accessibilityRole: 'imagebutton',
                        accessibilityLabel: (0, k.L)(
                          '\u062f\u06cc\u062f\u0646 \u0639\u06a9\u0633',
                        ),
                        onPress: () => t(h(e)),
                        children: (0, H.jsx)(n.default, {
                          source: h(e),
                          resizeMode: 'cover',
                          style: {
                            width: p ? 220 : 108,
                            height: p ? 220 : 108,
                            borderRadius: 14,
                            backgroundColor: i.soft,
                          },
                        }),
                      },
                      r,
                    ),
                  ),
                }),
              f.map((e, t) =>
                'voice' === e.kind
                  ? (0, H.jsx)(
                      ue,
                      {
                        file: { url: e.url, durationMs: e.durationMs },
                        localUri: e.local,
                        mine: s,
                      },
                      'v' + t,
                    )
                  : (0, H.jsxs)(
                      o.default,
                      {
                        testID: 'support-pdf',
                        accessibilityRole: 'button',
                        onPress: () => (e.file?.url ? void fe(e.file) : void 0),
                        style: {
                          flexDirection: 'row-reverse',
                          alignItems: 'center',
                          gap: 10,
                        },
                        children: [
                          (0, H.jsx)(c.default, {
                            style: {
                              width: 40,
                              height: 44,
                              borderRadius: 8,
                              backgroundColor: s
                                ? 'rgba(255,255,255,.22)'
                                : i.soft,
                              alignItems: 'center',
                              justifyContent: 'center',
                            },
                            children: (0, H.jsx)(m.Copy, {
                              style: {
                                fontSize: 11,
                                fontFamily: 'Vazirmatn_700Bold',
                                color: d,
                              },
                              children: 'PDF',
                            }),
                          }),
                          (0, H.jsxs)(c.default, {
                            style: { flexShrink: 1 },
                            children: [
                              (0, H.jsx)(m.Copy, {
                                numberOfLines: 1,
                                style: {
                                  color: d,
                                  fontFamily: 'Vazirmatn_600SemiBold',
                                },
                                children: e.name || 'PDF',
                              }),
                              (0, H.jsxs)(m.Copy, {
                                style: { fontSize: 12, color: d, opacity: 0.8 },
                                children: [
                                  (0, L.sizeText)(e.size),
                                  '\u060c ',
                                  (0, k.L)(
                                    '\u0628\u0631\u0627\u06cc \u0628\u0627\u0632 \u06a9\u0631\u062f\u0646 \u0628\u0632\u0646\u06cc\u062f',
                                  ),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      'f' + t,
                    ),
              ),
              !!e.text &&
                (0, H.jsx)(m.Copy, {
                  selectable: !0,
                  style: {
                    color: d,
                    lineHeight: 26,
                    paddingHorizontal: !u.length || f.length || e.text ? 0 : 8,
                  },
                  children: e.text,
                }),
              (0, H.jsxs)(m.Copy, {
                style: {
                  fontSize: 11.5,
                  lineHeight: 18,
                  color: d,
                  opacity: 0.75,
                },
                children: [
                  s
                    ? (0, k.L)('\u0634\u0645\u0627')
                    : (0, k.L)(
                        '\u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc',
                      ),
                  ' \xb7 ',
                  e.pending
                    ? (0, k.L)(
                        '\u062f\u0631 \u062d\u0627\u0644 \u0641\u0631\u0633\u062a\u0627\u062f\u0646\u2026',
                      )
                    : A(e.createdAt),
                ],
              }),
            ],
          }),
          !!e.failed &&
            (0, H.jsx)(o.default, {
              accessibilityRole: 'button',
              onPress: () => r(e.source),
              style: { alignSelf: 'flex-end', paddingHorizontal: 8 },
              children: (0, H.jsx)(m.Copy, {
                style: { fontSize: 12, color: i.warning },
                children: (0, k.L)(
                  '\u0641\u0631\u0633\u062a\u0627\u062f\u0647 \u0646\u0634\u062f: {why} \u2014 \u0628\u0631\u0627\u06cc \u0641\u0631\u0633\u062a\u0627\u062f\u0646 \u062f\u0648\u0628\u0627\u0631\u0647 \u0628\u0632\u0646\u06cc\u062f',
                  { why: e.failed },
                ),
              }),
            }),
        ],
      });
    }
    function ge({
      shop: e,
      id: i,
      idleHours: y,
      onBack: D,
      onNew: L,
      preview: v,
      offerPush: T = !1,
    }) {
      const { colors: P } = (0, C.useTheme)(),
        R = (0, h.useSafeAreaInsets)(),
        B = (0, S.useKeyboardVisible)(),
        [W, V] = (0, t.useState)(v?.thread || null),
        [F, A] = (0, t.useState)(v?.messages || []),
        [M, N] = (0, t.useState)(!v),
        [U, q] = (0, t.useState)(''),
        [X, K] = (0, t.useState)(''),
        [$, Y] = (0, t.useState)(!1),
        [ie, ne] = (0, t.useState)(!1),
        [oe, le] = (0, t.useState)(null),
        [ae, de] = (0, w.useConfirm)(),
        [ce, ue] = (0, t.useState)(T);
      (0, t.useEffect)(() => {
        T && ue(!0);
      }, [T]);
      const fe = (0, t.useRef)(null),
        ge = (0, t.useRef)(new Map()),
        ye = re(),
        me = (0, t.useRef)(!0);
      (0, t.useEffect)(
        () => () => {
          me.current = !1;
        },
        [],
      );
      const [xe, be] = (0, t.useState)(!1),
        [je, we] = (0, t.useState)(!1),
        Se = (0, t.useRef)(!1),
        Ce = (0, t.useRef)(!1),
        Ie = (e, t, r) => [
          ...(Se.current
            ? e.filter(
                (e) => !e.pending && !e.failed && !t.some((t) => t.id === e.id),
              )
            : []),
          ...t,
          ...e.filter(
            (e) =>
              e.id !== r &&
              (e.pending || e.failed) &&
              !t.some((t) => t.id === e.id),
          ),
        ];
      async function ke() {
        const t = F.find(
          (e) => !e.pending && !e.failed && !e.id.startsWith('local-'),
        );
        if (t && !je) {
          we(!0);
          try {
            const r = await (0, z.readOlder)(e, i, t.id);
            if (!me.current) return;
            ((Se.current = !0),
              (Ce.current = !0),
              be(r.older),
              A((e) => [
                ...r.messages.filter((t) => !e.some((e) => e.id === t.id)),
                ...e,
              ]));
          } catch (e) {
            me.current && (0, j.showToast)((0, I.message)(e));
          } finally {
            me.current && we(!1);
          }
        }
      }
      (0, t.useEffect)(() => {
        v ||
          (0, z.loadDraft)(e.id, i).then((e) => {
            me.current && e && K((t) => t || e);
          });
      }, [e.id, i]);
      const De = (0, t.useCallback)(async () => {
        if (!v)
          try {
            const t = await (0, z.readThread)(e, i);
            if (!me.current) return;
            (V(t.thread),
              Se.current || be(!!t.older),
              A((e) => Ie(e, t.messages)),
              q(''),
              (0, z.refreshSupportUnread)(e));
          } catch (e) {
            me.current && q((0, I.message)(e));
          } finally {
            me.current && N(!1);
          }
      }, [e, i, v]);
      async function Le(t, r, n = (0, I.randomUUID)()) {
        const s = {
          id: 'local-' + n,
          author_kind: 'user',
          body: t.trim(),
          kind: r[0]?.kind || 'text',
          createdAt: new Date().toISOString(),
          pending: !0,
          clientId: n,
          file: null,
          localFiles: r.length ? r : void 0,
        };
        (ge.current.set(n, r),
          A((e) => [...e.filter((e) => e.id !== s.id), s]));
        try {
          const o = await (0, z.sendReply)(e, i, t, r, n);
          if ((ge.current.delete(n), !me.current)) return;
          (V(o.thread), A((e) => Ie(e, o.messages, s.id)));
        } catch (e) {
          if (!me.current) return;
          if (e instanceof I.ApiError && 'support_thread_closed' === e.message)
            return (
              A((e) => e.filter((e) => e.id !== s.id)),
              K(t),
              ye.setFiles(r),
              (0, j.showToast)((0, I.message)(e)),
              void De()
            );
          A((t) =>
            t.map((t) =>
              t.id === s.id
                ? { ...t, pending: !1, failed: (0, I.message)(e) }
                : t,
            ),
          );
        }
      }
      (0, t.useEffect)(() => {
        if ((De(), v)) return;
        const e = setInterval(() => {
          De();
        }, 15e3);
        return () => clearInterval(e);
      }, [De]);
      const ze = (0, t.useRef)(0);
      const ve = 'closed' === W?.state,
        Te = 'answered' === W?.state && F.some((e) => 'user' === e.author_kind),
        Pe = !!X.trim() || !!ye.files.length,
        Re = pe(F),
        He =
          'idle' === W?.closedBy
            ? (0, k.L)(
                '\u0628\u0639\u062f \u0627\u0632 {n} \u0633\u0627\u0639\u062a \u0628\u06cc\u200c\u067e\u0627\u0633\u062e\u060c \u062e\u0648\u062f\u06a9\u0627\u0631 \u0628\u0633\u062a\u0647 \u0634\u062f.',
                { n: (0, k.localDigits)(y) },
              )
            : 'admin' === W?.closedBy
              ? (0, k.L)(
                  '\u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0627\u06cc\u0646 \u062a\u06cc\u06a9\u062a \u0631\u0627 \u0628\u0633\u062a.',
                )
              : (0, k.L)(
                  '\u0634\u0645\u0627 \u0627\u06cc\u0646 \u062a\u06cc\u06a9\u062a \u0631\u0627 \u0628\u0633\u062a\u06cc\u062f.',
                ),
        Be = (e) => ({
          width: 46,
          height: 46,
          borderRadius: 14,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: e,
        }),
        We = W
          ? (0, H.jsxs)(c.default, {
              style: {
                flexDirection: 'row-reverse',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: 6,
              },
              children: [
                (0, H.jsxs)(m.Copy, {
                  style: { fontSize: 13, color: P.muted },
                  children: [E(W), ' \xb7 ', (0, k.L)(_[W.topic])],
                }),
                (0, H.jsx)(J, { state: W.state }),
                'urgent' === W.priority &&
                  (0, H.jsx)(G, { priority: 'urgent' }),
              ],
            })
          : void 0;
      return (0, H.jsxs)(s.default, {
        testID: 'support-thread',
        style: { flex: 1, backgroundColor: P.bg },
        behavior: S.keyboardBehavior,
        children: [
          (0, H.jsx)(Q, {
            title: W?.subject || ' ',
            sub: We,
            back: (0, k.L)('\u0628\u0627\u0632\u06af\u0634\u062a'),
            onBack: D,
            backTestID: 'support-thread-back',
          }),
          (0, H.jsxs)(p.ScrollView, {
            ref: fe,
            style: { flex: 1 },
            keyboardShouldPersistTaps: 'handled',
            onContentSizeChange: () => {
              Ce.current
                ? (Ce.current = !1)
                : fe.current?.scrollToEnd({ animated: !1 });
            },
            contentContainerStyle: {
              paddingHorizontal: 16,
              paddingTop: 6,
              paddingBottom: 16,
              gap: 12,
              width: '100%',
              maxWidth: 760,
              alignSelf: 'center',
              flexGrow: 1,
            },
            children: [
              M && (0, H.jsx)(r.default, { color: P.accent }),
              !!U &&
                (0, H.jsx)(m.Copy, {
                  accessibilityRole: 'alert',
                  style: { color: P.warning, textAlign: 'center' },
                  children: U,
                }),
              ce &&
                (0, H.jsx)(se, { shop: e, offer: !0, onDone: () => ue(!1) }),
              xe &&
                (0, H.jsx)(o.default, {
                  testID: 'support-older',
                  accessibilityRole: 'button',
                  disabled: je,
                  onPress: () => {
                    ke();
                  },
                  style: {
                    alignSelf: 'center',
                    paddingHorizontal: 14,
                    paddingVertical: 8,
                    borderRadius: 12,
                    backgroundColor: P.soft,
                  },
                  children: je
                    ? (0, H.jsx)(r.default, { size: 'small', color: P.accent })
                    : (0, H.jsx)(m.Copy, {
                        style: {
                          fontSize: 13,
                          color: P.accent,
                          fontFamily: 'Vazirmatn_600SemiBold',
                        },
                        children: (0, k.L)(
                          '\u067e\u06cc\u0627\u0645\u200c\u0647\u0627\u06cc \u0642\u0628\u0644\u06cc',
                        ),
                      }),
                }),
              Re.map((e) =>
                (0, H.jsx)(
                  he,
                  {
                    group: e,
                    onImage: le,
                    onRetry: (e) => {
                      (A((t) => t.filter((t) => t.id !== e.id)),
                        Le(
                          e.body,
                          ge.current.get(e.clientId || '') || [],
                          e.clientId,
                        ));
                    },
                  },
                  e.key,
                ),
              ),
              Te &&
                !ie &&
                (0, H.jsxs)(c.default, {
                  testID: 'support-solved-card',
                  style: {
                    gap: 10,
                    padding: 14,
                    borderRadius: 18,
                    backgroundColor: P.accentSoft,
                    borderWidth: l.default.hairlineWidth,
                    borderColor: P.accent,
                  },
                  children: [
                    (0, H.jsx)(m.Copy, {
                      style: {
                        fontFamily: 'Vazirmatn_700Bold',
                        color: P.accent,
                      },
                      children: (0, k.L)(
                        '\u0645\u0634\u06a9\u0644 \u062d\u0644 \u0634\u062f\u061f \u0627\u06af\u0631 \u0628\u0644\u0647\u060c \u062a\u06cc\u06a9\u062a \u0631\u0627 \u0628\u0628\u0646\u062f\u06cc\u062f.',
                      ),
                    }),
                    (0, H.jsxs)(c.default, {
                      style: { flexDirection: 'row-reverse', gap: 8 },
                      children: [
                        (0, H.jsx)(o.default, {
                          testID: 'support-solved-close',
                          accessibilityRole: 'button',
                          onPress: () =>
                            ae({
                              title: (0, k.L)(
                                '\u0628\u0633\u062a\u0646 \u062a\u06cc\u06a9\u062a',
                              ),
                              text: (0, k.L)(
                                '\u062a\u06cc\u06a9\u062a \u0628\u0633\u062a\u0647 \u0634\u0648\u062f\u061f \u0628\u0639\u062f \u0627\u0632 \u0628\u0633\u062a\u0646 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f \u062f\u0631 \u0622\u0646 \u067e\u06cc\u0627\u0645 \u0641\u0631\u0633\u062a\u0627\u062f\u061b \u0628\u0631\u0627\u06cc \u0633\u0624\u0627\u0644 \u062a\u0627\u0632\u0647 \xab\u062a\u06cc\u06a9\u062a \u062c\u062f\u06cc\u062f\xbb \u0628\u0632\u0646\u06cc\u062f.',
                              ),
                              ok: (0, k.L)(
                                '\u0628\u0644\u0647\u060c \u0628\u0628\u0646\u062f',
                              ),
                              tone: 'accent',
                              run: async () => {
                                try {
                                  const t = v
                                    ? {
                                        thread: {
                                          ...W,
                                          status: 'closed',
                                          state: 'closed',
                                          closedBy: 'user',
                                        },
                                        messages: F,
                                      }
                                    : await (0, z.closeTicket)(e, i);
                                  if (!me.current) return;
                                  (V(t.thread),
                                    (Se.current = !1),
                                    be(!!t.older),
                                    A(t.messages),
                                    (0, j.showToast)(
                                      (0, k.L)(
                                        '\u062a\u06cc\u06a9\u062a \u0628\u0633\u062a\u0647 \u0634\u062f.',
                                      ),
                                    ));
                                } catch (e) {
                                  (0, j.showToast)((0, I.message)(e));
                                }
                              },
                            }),
                          style: ({ pressed: e }) => ({
                            flex: 1,
                            minHeight: 44,
                            borderRadius: 12,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: e ? P.soft : P.surface,
                          }),
                          children: (0, H.jsx)(m.Copy, {
                            style: { fontFamily: 'Vazirmatn_700Bold' },
                            children: (0, k.L)(
                              '\u0628\u0644\u0647\u060c \u0628\u0628\u0646\u062f',
                            ),
                          }),
                        }),
                        (0, H.jsx)(o.default, {
                          testID: 'support-solved-later',
                          accessibilityRole: 'button',
                          onPress: () => ne(!0),
                          style: ({ pressed: e }) => ({
                            flex: 1,
                            minHeight: 44,
                            borderRadius: 12,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: e ? P.soft : P.surface,
                          }),
                          children: (0, H.jsx)(m.Copy, {
                            style: { fontFamily: 'Vazirmatn_600SemiBold' },
                            children: (0, k.L)(
                              '\u0647\u0646\u0648\u0632 \u0646\u0647',
                            ),
                          }),
                        }),
                      ],
                    }),
                    (0, H.jsx)(m.Copy, {
                      style: { fontSize: 12, lineHeight: 20, color: P.muted },
                      children: (0, k.L)(
                        '\u0627\u06af\u0631 \u06a9\u0627\u0631\u06cc \u0646\u06a9\u0646\u06cc\u062f\u060c \u062a\u06cc\u06a9\u062a {n} \u0633\u0627\u0639\u062a \u0628\u0639\u062f \u0627\u0632 \u067e\u0627\u0633\u062e \u062e\u0648\u062f\u06a9\u0627\u0631 \u0628\u0633\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                        { n: (0, k.localDigits)(y) },
                      ),
                    }),
                  ],
                }),
              ve &&
                (0, H.jsxs)(m.Card, {
                  testID: 'support-closed',
                  style: {
                    alignItems: 'center',
                    gap: 6,
                    backgroundColor: P.soft,
                  },
                  children: [
                    (0, H.jsx)(m.Copy, {
                      style: { fontFamily: 'Vazirmatn_700Bold' },
                      children: (0, k.L)(
                        '\u0627\u06cc\u0646 \u062a\u06cc\u06a9\u062a \u0628\u0633\u062a\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a',
                      ),
                    }),
                    (0, H.jsxs)(m.Copy, {
                      style: {
                        fontSize: 13,
                        color: P.muted,
                        textAlign: 'center',
                      },
                      children: [
                        He,
                        ' ',
                        (0, k.L)(
                          '\u0627\u06af\u0631 \u0628\u0627\u0632 \u0647\u0645 \u0633\u0624\u0627\u0644\u06cc \u062f\u0627\u0631\u06cc\u062f\u060c \u062a\u06cc\u06a9\u062a \u062c\u062f\u06cc\u062f \u0628\u0641\u0631\u0633\u062a\u06cc\u062f.',
                        ),
                      ],
                    }),
                    (0, H.jsx)(c.default, {
                      style: { alignSelf: 'stretch', marginTop: 4 },
                      children: (0, H.jsx)(m.Button, {
                        testID: 'support-closed-new',
                        onPress: L,
                        children: (0, k.L)(
                          '\u062a\u06cc\u06a9\u062a \u062c\u062f\u06cc\u062f',
                        ),
                      }),
                    }),
                  ],
                }),
            ],
          }),
          !ve &&
            !!W &&
            (0, H.jsx)(c.default, {
              testID: 'support-compose',
              style: {
                gap: 8,
                paddingHorizontal: 12,
                paddingTop: 8,
                paddingBottom: B ? 8 : Math.max(R.bottom, 10),
                backgroundColor: P.bg,
                borderTopWidth: l.default.hairlineWidth,
                borderColor: P.line,
              },
              children: (0, H.jsxs)(c.default, {
                style: {
                  width: '100%',
                  maxWidth: 760,
                  alignSelf: 'center',
                  gap: 8,
                },
                children: [
                  (0, H.jsx)(Z, { files: ye.files, onRemove: ye.remove }),
                  $ &&
                    !ye.voice.recording &&
                    (0, H.jsxs)(H.Fragment, {
                      children: [
                        (0, H.jsx)(ee, {
                          onPick: (e) => {
                            (Y(!1), ye.pick(e));
                          },
                        }),
                        (0, H.jsx)(m.Copy, {
                          style: { fontSize: 12, color: P.muted },
                          children: (0, k.L)(O),
                        }),
                      ],
                    }),
                  ye.voice.recording
                    ? (0, H.jsx)(te, {
                        seconds: ye.seconds,
                        level: ye.voice.level,
                        onCancel: ye.voice.cancel,
                        onDone: () => {
                          ye.finishVoice();
                        },
                      })
                    : (0, H.jsxs)(c.default, {
                        style: {
                          flexDirection: 'row-reverse',
                          alignItems: 'flex-end',
                          gap: 8,
                        },
                        children: [
                          (0, H.jsx)(d.default, {
                            testID: 'support-input',
                            value: X,
                            onChangeText: (t) => {
                              (K(t), (0, z.saveDraft)(e.id, t, i));
                            },
                            placeholder: (0, k.L)(
                              '\u067e\u0627\u0633\u062e \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f\u2026',
                            ),
                            placeholderTextColor: P.muted,
                            multiline: !0,
                            maxLength: 5e3,
                            rows: 1,
                            style: {
                              flex: 1,
                              minHeight: 46,
                              maxHeight: 130,
                              paddingHorizontal: 14,
                              paddingTop: 11,
                              paddingBottom: 11,
                              borderRadius: 16,
                              backgroundColor: P.surface,
                              borderWidth: l.default.hairlineWidth,
                              borderColor: P.line,
                              color: P.text,
                              fontFamily: 'Vazirmatn_400Regular',
                              fontSize: 16,
                              textAlign: 'right',
                              writingDirection: 'rtl',
                            },
                          }),
                          (0, H.jsx)(o.default, {
                            testID: 'support-attach',
                            accessibilityRole: 'button',
                            accessibilityLabel: (0, k.L)(
                              '\u0627\u0641\u0632\u0648\u062f\u0646 \u0639\u06a9\u0633 \u06cc\u0627 \u0641\u0627\u06cc\u0644',
                            ),
                            disabled: ye.busy,
                            onPress: () => Y((e) => !e),
                            style: ({ pressed: e }) => [
                              Be($ || e ? P.soft : P.surface),
                              {
                                borderWidth: l.default.hairlineWidth,
                                borderColor: P.line,
                              },
                            ],
                            children: ye.busy
                              ? (0, H.jsx)(r.default, { color: P.accent })
                              : (0, H.jsx)(x.Icon, {
                                  name: $ ? 'close' : 'plus',
                                  size: 22,
                                  color: P.text,
                                }),
                          }),
                          Pe
                            ? (0, H.jsx)(o.default, {
                                testID: 'support-send',
                                accessibilityRole: 'button',
                                accessibilityLabel: (0, k.L)(
                                  '\u0641\u0631\u0633\u062a\u0627\u062f\u0646',
                                ),
                                onPress: function () {
                                  const t = X.trim();
                                  if (!t && !ye.files.length) return;
                                  if (Date.now() - ze.current < 1e3) return;
                                  ze.current = Date.now();
                                  const r = ye.files;
                                  (K(''),
                                    ye.setFiles([]),
                                    Y(!1),
                                    (0, z.saveDraft)(e.id, '', i),
                                    Le(t, r));
                                },
                                style: ({ pressed: e }) =>
                                  Be(e ? P.accentActive : P.accent),
                                children: (0, H.jsx)(x.Icon, {
                                  name: 'send',
                                  size: 20,
                                  color: P.onAccent,
                                }),
                              })
                            : (0, H.jsx)(o.default, {
                                testID: 'support-record',
                                accessibilityRole: 'button',
                                accessibilityLabel: (0, k.L)(
                                  '\u0636\u0628\u0637 \u067e\u06cc\u0627\u0645 \u0635\u0648\u062a\u06cc',
                                ),
                                onPress: () => {
                                  ye.pick('voice');
                                },
                                style: ({ pressed: e }) =>
                                  Be(e ? P.accentActive : P.accent),
                                children: (0, H.jsx)(x.Icon, {
                                  name: 'mic',
                                  size: 22,
                                  color: P.onAccent,
                                }),
                              }),
                        ],
                      }),
                ],
              }),
            }),
          (0, H.jsx)(u.Modal, {
            visible: !!oe,
            transparent: !0,
            animationType: 'fade',
            onRequestClose: () => le(null),
            children: (0, H.jsxs)(c.default, {
              style: {
                flex: 1,
                backgroundColor: '#000000e6',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 12,
              },
              children: [
                (0, H.jsx)(b.Backdrop, {
                  testID: 'support-viewer-backdrop',
                  onClose: () => le(null),
                }),
                oe &&
                  (0, H.jsx)(f.PullCard, {
                    handle: !1,
                    onClose: () => le(null),
                    style: { width: '100%', height: '90%' },
                    children: (0, H.jsx)(n.default, {
                      source: oe,
                      resizeMode: 'contain',
                      style: { width: '100%', height: '100%' },
                    }),
                  }),
                (0, H.jsx)(b.CloseX, {
                  testID: 'support-viewer-close',
                  onPress: () => le(null),
                  style: {
                    position: 'absolute',
                    top: Math.max(12, R.top + 8),
                    left: 12,
                  },
                }),
              ],
            }),
          }),
          de,
        ],
      });
    }
  },
  748,
  [
    2, 217, 204, 205, 168, 224, 210, 94, 232, 17, 242, 99, 381, 515, 380, 342,
    749, 665, 995, 407, 385, 533, 525, 534, 480, 382, 415, 311, 764, 765, 746,
    258, 545, 492, 733, 338,
  ],
);
