// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 939; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, _m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'talkAudioSupported', {
        enumerable: !0,
        get: function () {
          return L.talkAudioSupported;
        },
      }),
      Object.defineProperty(_e, 'VOICE_EXAMPLES', {
        enumerable: !0,
        get: function () {
          return D;
        },
      }),
      (_e.LiveVoice = function ({
        shop: e,
        initial: S,
        onClose: L,
        onText: C,
        mode: _,
        top: z,
      }) {
        const { colors: A } = (0, k.useTheme)(),
          T = (0, f.useSafeAreaInsets)(),
          V = (0, t.useRef)(null),
          [P] = (0, t.useState)(() =>
            (0, I.joinTalk)(
              (0, w.agentPage)(),
              () => ({
                view: {
                  phase: 'connecting',
                  message: '',
                  muted: !1,
                  typing: !1,
                  lines: [],
                  left: S.remaining,
                  spent: 0,
                  cost: null,
                  level: 0,
                },
                live: {
                  socket: null,
                  audio: null,
                  ready: !1,
                  speakingUntil: 0,
                  thinking: !1,
                  readAt: 0,
                  done: !1,
                  muted: !1,
                  user: 0,
                  assistant: 0,
                  level: 0,
                  target: 0,
                  early: [],
                  earlyBytes: 0,
                  startedAt: 0,
                  seq: 0,
                },
              }),
              _ || '',
            ),
          ),
          E = (0, t.useSyncExternalStore)(
            P.subscribe,
            () => P.view,
            () => P.view,
          ),
          {
            phase: F,
            message: B,
            muted: O,
            typing: N,
            lines: q,
            left: M,
            spent: U,
            cost: W,
            reply: J,
          } = E,
          [G, K] = (0, t.useState)(''),
          X = (0, t.useRef)(new n.default.Value(0)).current,
          Q = (0, t.useRef)(new n.default.Value(0)).current,
          Y = { current: P.live },
          Z = (e) => {
            const t = P.live.socket;
            1 === t?.readyState && t.send(JSON.stringify(e));
          },
          $ = (e) => {
            const t = ++P.live.seq;
            return (
              P.set((n) => ({
                lines: [...n.lines, { ...e, id: t }].slice(-60),
              })),
              t
            );
          },
          ee = (e, t) =>
            P.set((n) => ({
              lines: n.lines.map((n) =>
                n.token === e
                  ? {
                      ...n,
                      ...(t ? { state: t } : {}),
                      note: (0, b.L)(
                        '\u062f\u0631 \u062d\u0627\u0644 \u0628\u0631\u0631\u0633\u06cc',
                      ),
                    }
                  : n,
              ),
            }));
        ((0, t.useEffect)(() => {
          const e = n.default.loop(
            n.default.sequence([
              n.default.timing(X, {
                toValue: 1,
                duration: 1400,
                easing: s.default.inOut(s.default.quad),
                useNativeDriver: !0,
              }),
              n.default.timing(X, {
                toValue: 0,
                duration: 1400,
                easing: s.default.inOut(s.default.quad),
                useNativeDriver: !0,
              }),
            ]),
          );
          return (e.start(), () => e.stop());
        }, [X]),
          (0, t.useEffect)(() => {
            Q.setValue(E.level);
          }, [E.level, Q]),
          (0, t.useEffect)(
            () => (
              (0, I.attachTalk)(P, (t) => H(t, e, S, _)),
              () => (0, I.detachTalk)(P, (0, w.agentPage)() === P.page)
            ),
            [P],
          ),
          (0, t.useEffect)(() => {
            const e = setTimeout(
              () => V.current?.scrollToEnd({ animated: !0 }),
              50,
            );
            return () => clearTimeout(e);
          }, [q]));
        const te = () => {
            ((0, I.releaseTalk)(P), L());
          },
          ne = (e) => {
            const t = e.trim(),
              n = P.live;
            t &&
              n.ready &&
              ((n.user = 0),
              (n.assistant = 0),
              $({ role: 'user', text: t }),
              Z({ type: 'text', text: t.slice(0, 500) }),
              K(''),
              (n.thinking = !0));
          },
          ie = (e, t) => {
            (ee(e, 'open'), Z({ type: 'confirm', token: e, ok: t }));
          },
          se = 'listening' === F || 'speaking' === F || 'thinking' === F,
          oe =
            'connecting' === F
              ? (0, b.L)(
                  '\u062f\u0631 \u062d\u0627\u0644 \u0648\u0635\u0644 \u0634\u062f\u0646\u2026',
                )
              : 'ended' === F
                ? (0, b.L)(
                    '\u06af\u0641\u062a\u06af\u0648 \u062a\u0645\u0627\u0645 \u0634\u062f',
                  )
                : 'error' === F
                  ? (0, b.L)(
                      '\u0645\u0634\u06a9\u0644\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f',
                    )
                  : O && 'listening' === F
                    ? (0, b.L)(
                        '\u0645\u06cc\u06a9\u0631\u0648\u0641\u0648\u0646 \u062e\u0627\u0645\u0648\u0634 \u0627\u0633\u062a',
                      )
                    : 'listening' === F
                      ? (0, b.L)(
                          '\u062f\u0631 \u062d\u0627\u0644 \u06af\u0648\u0634 \u062f\u0627\u062f\u0646',
                        )
                      : 'speaking' === F
                        ? (0, b.L)(
                            '\u062f\u0631 \u062d\u0627\u0644 \u0635\u062d\u0628\u062a',
                          )
                        : (0, b.L)(
                            '\u062f\u0631 \u062d\u0627\u0644 \u0628\u0631\u0631\u0633\u06cc',
                          ),
          ae = n.default.add(
            X.interpolate({
              inputRange: [0, 1],
              outputRange: 'thinking' === F ? [0.94, 1.04] : [0.98, 1.03],
            }),
            Q.interpolate({
              inputRange: [0, 1],
              outputRange: [0, se ? 0.32 : 0],
              extrapolate: 'clamp',
            }),
          ),
          re = n.default.add(
            X.interpolate({ inputRange: [0, 1], outputRange: [1.08, 1.16] }),
            Q.interpolate({
              inputRange: [0, 1],
              outputRange: [0, se ? 0.55 : 0],
              extrapolate: 'clamp',
            }),
          ),
          le =
            'error' === F
              ? A.danger
              : O && 'listening' === F
                ? A.muted
                : A.accent,
          de = se || 'connecting' === F ? (0, j.talkRemainingLine)(M, U) : '',
          ce = (e, t, n, s, o = !1, c = !1) =>
            (0, R.jsx)(l.default, {
              testID: e,
              accessibilityRole: 'button',
              accessibilityLabel: n,
              onPress: s,
              hitSlop: 6,
              style: ({ pressed: e }) => ({
                width: 56,
                height: 56,
                borderRadius: 28,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: c ? A.danger : o ? A.text : A.soft,
                opacity: e ? 0.8 : 1,
              }),
              children: (0, R.jsx)(m.Icon, {
                name: t,
                size: 24,
                color: c ? '#ffffff' : o ? A.bg : A.text,
              }),
            }),
          ue = (e, t, n, s = !1) =>
            (0, R.jsx)(l.default, {
              testID: e,
              accessibilityRole: 'button',
              onPress: n,
              style: ({ pressed: e }) => ({
                flex: 1,
                height: 40,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: s ? A.accent : A.soft,
                opacity: e ? 0.85 : 1,
              }),
              children: (0, R.jsx)(h.Copy, {
                style: {
                  fontSize: 14,
                  lineHeight: 22,
                  color: s ? A.onAccent : A.text,
                  fontFamily: 'Vazirmatn_700Bold',
                },
                children: t,
              }),
            });
        return (0, R.jsx)(y.PageModal, {
          visible: !0,
          animationType: 'slide',
          presentationStyle: 'fullScreen',
          onRequestClose: te,
          children: (0, R.jsx)(o.default, {
            behavior: v.keyboardBehavior,
            style: { flex: 1, backgroundColor: A.bg },
            children: (0, R.jsxs)(u.default, {
              testID: 'live-voice',
              style: {
                flex: 1,
                paddingTop: T.top + 10,
                paddingBottom: T.bottom + 10,
                paddingHorizontal: 16,
              },
              children: [
                (0, R.jsxs)(u.default, {
                  style: { alignItems: 'center', gap: 2 },
                  children: [
                    (0, R.jsx)(h.Copy, {
                      style: {
                        fontSize: 15,
                        lineHeight: 24,
                        fontFamily: 'Vazirmatn_700Bold',
                      },
                      children: (0, b.L)(
                        '\u062f\u0633\u062a\u06cc\u0627\u0631 \u0647\u0648\u0634\u0645\u0646\u062f',
                      ),
                    }),
                    z,
                    !!de &&
                      (0, R.jsx)(h.Copy, {
                        testID: 'live-voice-remaining',
                        style: {
                          fontSize: 12,
                          lineHeight: 20,
                          color:
                            (0, j.talkSecondsLeft)(M, U) < 60
                              ? A.warning
                              : A.muted,
                        },
                        children: de,
                      }),
                    !!W &&
                      (0, R.jsx)(h.Copy, {
                        testID: 'live-voice-cost',
                        style: { fontSize: 12, lineHeight: 20, color: A.muted },
                        children: (0, j.talkCostLine)(
                          se && Y.current.startedAt
                            ? (Date.now() - Y.current.startedAt) / 1e3
                            : W.seconds,
                          W.usd,
                          J,
                        ),
                      }),
                  ],
                }),
                (0, R.jsxs)(u.default, {
                  style: {
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 18,
                    gap: 14,
                  },
                  children: [
                    (0, R.jsxs)(u.default, {
                      style: {
                        width: 220,
                        height: 220,
                        alignItems: 'center',
                        justifyContent: 'center',
                      },
                      children: [
                        (0, R.jsx)(n.default.View, {
                          pointerEvents: 'none',
                          style: {
                            position: 'absolute',
                            width: 170,
                            height: 170,
                            borderRadius: 85,
                            backgroundColor: le,
                            opacity: se ? 0.18 : 0.08,
                            transform: [{ scale: re }],
                          },
                        }),
                        (0, R.jsx)(n.default.View, {
                          testID: 'live-voice-orb',
                          style: {
                            width: 170,
                            height: 170,
                            borderRadius: 85,
                            backgroundColor: le,
                            opacity: se ? 1 : 0.5,
                            transform: [{ scale: ae }],
                            shadowColor: le,
                            shadowOpacity: 0.45,
                            shadowRadius: 28,
                            shadowOffset: { width: 0, height: 0 },
                            elevation: 8,
                          },
                        }),
                      ],
                    }),
                    (0, R.jsx)(h.Copy, {
                      testID: 'live-voice-status',
                      style: {
                        fontSize: 17,
                        lineHeight: 28,
                        fontFamily: 'Vazirmatn_600SemiBold',
                      },
                      children: oe,
                    }),
                    !!B &&
                      (0, R.jsx)(h.Copy, {
                        testID: 'live-voice-message',
                        style: {
                          fontSize: 13,
                          lineHeight: 22,
                          color: A.muted,
                          textAlign: 'center',
                        },
                        children: B,
                      }),
                    E.upgrade &&
                      ('error' === F || 'ended' === F) &&
                      (0, R.jsxs)(u.default, {
                        testID: 'live-voice-upgrade',
                        style: {
                          alignSelf: 'stretch',
                          gap: 8,
                          padding: 14,
                          borderRadius: 16,
                          borderWidth: 1,
                          borderColor: A.accent,
                          backgroundColor: A.accentSoft,
                        },
                        children: [
                          (0, R.jsx)(h.Copy, {
                            style: {
                              fontSize: 14,
                              lineHeight: 24,
                              fontFamily: 'Vazirmatn_700Bold',
                              textAlign: 'center',
                            },
                            children: (0, b.L)(
                              '\u062f\u0642\u06cc\u0642\u0647\u200c\u0647\u0627\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0628\u0627 \u0627\u0634\u062a\u0631\u0627\u06a9 \u0628\u0627\u0644\u0627\u062a\u0631',
                            ),
                          }),
                          (0, R.jsx)(l.default, {
                            testID: 'live-voice-plans',
                            accessibilityRole: 'button',
                            onPress: () => {
                              ((0, I.releaseTalk)(P), (0, w.openAgentPlans)());
                            },
                            style: ({ pressed: e }) => ({
                              height: 42,
                              borderRadius: 21,
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: A.accent,
                              opacity: e ? 0.85 : 1,
                            }),
                            children: (0, R.jsx)(h.Copy, {
                              style: {
                                fontSize: 14,
                                lineHeight: 22,
                                color: A.onAccent,
                                fontFamily: 'Vazirmatn_700Bold',
                              },
                              children: (0, b.L)(
                                '\u062f\u06cc\u062f\u0646 \u0627\u0634\u062a\u0631\u0627\u06a9\u200c\u0647\u0627',
                              ),
                            }),
                          }),
                        ],
                      }),
                    ('error' === F || 'ended' === F) &&
                      (0, R.jsx)(l.default, {
                        testID: 'live-voice-to-text',
                        accessibilityRole: 'button',
                        onPress: C,
                        style: ({ pressed: e }) => ({
                          paddingHorizontal: 18,
                          height: 40,
                          borderRadius: 20,
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: A.soft,
                          opacity: e ? 0.85 : 1,
                        }),
                        children: (0, R.jsx)(h.Copy, {
                          style: { fontSize: 14, lineHeight: 22 },
                          children: (0, b.L)(
                            '\u0627\u062f\u0627\u0645\u0647 \u0628\u0627 \u0646\u0648\u0634\u062a\u0646',
                          ),
                        }),
                      }),
                    (0, R.jsxs)(u.default, {
                      style: { flexDirection: 'row-reverse', gap: 22 },
                      children: [
                        ce(
                          'live-voice-mute',
                          O ? 'micOff' : 'mic',
                          O
                            ? (0, b.L)(
                                '\u0645\u06cc\u06a9\u0631\u0648\u0641\u0648\u0646 \u0631\u0627 \u0631\u0648\u0634\u0646 \u06a9\u0646',
                              )
                            : (0, b.L)(
                                '\u0645\u06cc\u06a9\u0631\u0648\u0641\u0648\u0646 \u0631\u0627 \u062e\u0627\u0645\u0648\u0634 \u06a9\u0646',
                              ),
                          () => {
                            const e = P.live,
                              t = !e.muted;
                            ((e.muted = t),
                              P.set({ muted: t }),
                              t && Z({ type: 'mute' }));
                          },
                          O,
                        ),
                        ce(
                          'live-voice-keyboard',
                          'text',
                          (0, b.L)(
                            '\u0646\u0648\u0634\u062a\u0646 \u0628\u0647 \u062c\u0627\u06cc \u062d\u0631\u0641 \u0632\u062f\u0646',
                          ),
                          () => {
                            return (
                              (e = (e) => !e),
                              P.set((t) => ({ typing: e(t.typing) }))
                            );
                            var e;
                          },
                          N,
                        ),
                        ce(
                          'live-voice-close',
                          'close',
                          (0, b.L)('\u0628\u0633\u062a\u0646'),
                          te,
                          !1,
                          !0,
                        ),
                      ],
                    }),
                  ],
                }),
                (0, R.jsx)(p.ScrollView, {
                  ref: V,
                  style: { flex: 1 },
                  contentContainerStyle: { gap: 8, paddingVertical: 6 },
                  keyboardShouldPersistTaps: 'handled',
                  children: q.map((e) =>
                    e.kind
                      ? (0, R.jsxs)(
                          u.default,
                          {
                            testID:
                              'confirm' === e.kind
                                ? 'live-voice-confirm'
                                : 'live-voice-done',
                            style: {
                              alignSelf: 'stretch',
                              gap: 8,
                              padding: 12,
                              borderRadius: 14,
                              borderWidth: 1,
                              borderColor:
                                'confirm' === e.kind && 'open' === e.state
                                  ? A.accent
                                  : A.line,
                              backgroundColor: A.surface,
                            },
                            children: [
                              'confirm' === e.kind &&
                                'open' === e.state &&
                                (0, R.jsx)(h.Copy, {
                                  style: {
                                    fontSize: 12,
                                    lineHeight: 20,
                                    color: A.muted,
                                  },
                                  children: (0, b.L)(
                                    '\u0627\u06cc\u0646 \u0631\u0627 \u062b\u0628\u062a \u06a9\u0646\u0645\u061f',
                                  ),
                                }),
                              (0, R.jsxs)(h.Copy, {
                                style: {
                                  fontSize: 14,
                                  lineHeight: 24,
                                  fontFamily: 'Vazirmatn_600SemiBold',
                                },
                                children: [
                                  'done' === e.kind && 'undone' !== e.state
                                    ? '\u2713 '
                                    : '',
                                  e.text,
                                ],
                              }),
                              'confirm' === e.kind &&
                                'open' === e.state &&
                                !e.note &&
                                (0, R.jsxs)(u.default, {
                                  style: {
                                    flexDirection: 'row-reverse',
                                    gap: 8,
                                  },
                                  children: [
                                    ue(
                                      'live-voice-confirm-yes',
                                      (0, b.L)(
                                        '\u062b\u0628\u062a \u06a9\u0646',
                                      ),
                                      () => ie(e.token, !0),
                                      !0,
                                    ),
                                    ue(
                                      'live-voice-confirm-no',
                                      (0, b.L)('\u0646\u0647'),
                                      () => ie(e.token, !1),
                                    ),
                                  ],
                                }),
                              'done' === e.kind &&
                                'saved' === e.state &&
                                !e.note &&
                                !e.token?.startsWith('done-') &&
                                (0, R.jsx)(u.default, {
                                  style: { flexDirection: 'row-reverse' },
                                  children: (0, R.jsxs)(l.default, {
                                    testID: 'live-voice-undo',
                                    accessibilityRole: 'button',
                                    onPress: () => {
                                      return (
                                        (t = e.token),
                                        Z({ type: 'undo', token: t }),
                                        void ee(t)
                                      );
                                      var t;
                                    },
                                    style: ({ pressed: e }) => ({
                                      flexDirection: 'row-reverse',
                                      alignItems: 'center',
                                      gap: 6,
                                      paddingHorizontal: 14,
                                      height: 34,
                                      borderRadius: 17,
                                      backgroundColor: A.soft,
                                      opacity: e ? 0.85 : 1,
                                    }),
                                    children: [
                                      (0, R.jsx)(m.Icon, {
                                        name: 'refresh',
                                        size: 16,
                                        color: A.text,
                                      }),
                                      (0, R.jsx)(h.Copy, {
                                        style: { fontSize: 13, lineHeight: 20 },
                                        children: (0, b.L)(
                                          '\u0628\u0631\u06af\u0631\u062f\u0627\u0646',
                                        ),
                                      }),
                                    ],
                                  }),
                                }),
                              'open' !== e.state &&
                                'confirm' === e.kind &&
                                (0, R.jsx)(h.Copy, {
                                  testID: 'live-voice-card-state',
                                  style: {
                                    fontSize: 13,
                                    lineHeight: 22,
                                    color:
                                      'saved' === e.state
                                        ? A.success
                                        : 'failed' === e.state
                                          ? A.danger
                                          : A.muted,
                                  },
                                  children:
                                    'saved' === e.state
                                      ? (0, b.L)(
                                          '\u062b\u0628\u062a \u0634\u062f \u2713',
                                        )
                                      : 'no' === e.state
                                        ? (0, b.L)(
                                            '\u062b\u0628\u062a \u0646\u0634\u062f',
                                          )
                                        : 'gone' === e.state
                                          ? (0, b.L)(
                                              '\u0627\u06cc\u0646 \u06a9\u0627\u0631\u062a \u0639\u0648\u0636 \u0634\u062f',
                                            )
                                          : e.note ||
                                            (0, b.L)(
                                              '\u062b\u0628\u062a \u0646\u0634\u062f',
                                            ),
                                }),
                              'done' === e.kind &&
                                'undone' === e.state &&
                                (0, R.jsx)(h.Copy, {
                                  style: {
                                    fontSize: 13,
                                    lineHeight: 22,
                                    color: A.muted,
                                  },
                                  children: (0, b.L)(
                                    '\u0628\u0631\u06af\u0634\u062a \u062e\u0648\u0631\u062f',
                                  ),
                                }),
                              !!e.note &&
                                ('open' === e.state || 'saved' === e.state) &&
                                (0, R.jsx)(h.Copy, {
                                  style: {
                                    fontSize: 12,
                                    lineHeight: 20,
                                    color: A.muted,
                                  },
                                  children: e.note,
                                }),
                              'done' === e.kind &&
                                'failed' === e.state &&
                                (0, R.jsx)(h.Copy, {
                                  style: {
                                    fontSize: 12,
                                    lineHeight: 20,
                                    color: A.danger,
                                  },
                                  children: e.note,
                                }),
                            ],
                          },
                          e.id,
                        )
                      : (0, R.jsx)(
                          u.default,
                          {
                            testID:
                              'user' === e.role
                                ? 'live-voice-user'
                                : 'live-voice-reply',
                            style: {
                              alignSelf:
                                'user' === e.role ? 'flex-start' : 'flex-end',
                              maxWidth: '88%',
                              paddingHorizontal: 10,
                              paddingVertical: 6,
                              borderRadius: 12,
                              backgroundColor:
                                'user' === e.role ? A.soft : A.accentSoft,
                            },
                            children: (0, R.jsx)(h.Copy, {
                              style: { fontSize: 13, lineHeight: 22 },
                              children: e.text.trim(),
                            }),
                          },
                          e.id,
                        ),
                  ),
                }),
                N &&
                  (0, R.jsxs)(u.default, {
                    style: {
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      gap: 8,
                      paddingTop: 6,
                    },
                    children: [
                      (0, R.jsx)(h.Input, {
                        testID: 'live-voice-input',
                        value: G,
                        onChangeText: K,
                        placeholder: (0, b.L)(
                          '\u0628\u0646\u0648\u06cc\u0633\u2026',
                        ),
                        maxLength: 500,
                        autoFocus: !0,
                        returnKeyType: 'send',
                        onSubmitEditing: () => ne(G),
                        style: { flex: 1 },
                      }),
                      (0, R.jsx)(l.default, {
                        testID: 'live-voice-send',
                        accessibilityRole: 'button',
                        accessibilityLabel: (0, b.L)(
                          '\u0628\u0641\u0631\u0633\u062a',
                        ),
                        disabled: !G.trim(),
                        onPress: () => ne(G),
                        style: ({ pressed: e }) => ({
                          width: 46,
                          height: 46,
                          borderRadius: 23,
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: A.accent,
                          opacity: G.trim() ? (e ? 0.85 : 1) : 0.45,
                        }),
                        children: (0, R.jsx)(m.Icon, {
                          name: 'send',
                          size: 20,
                          color: A.onAccent,
                        }),
                      }),
                    ],
                  }),
                (0, R.jsx)(c.default, {
                  horizontal: !0,
                  ...x.noSwipe,
                  showsHorizontalScrollIndicator: !1,
                  style: { flexGrow: 0, marginTop: 8 },
                  contentContainerStyle: {
                    gap: 8,
                    flexDirection: 'row-reverse',
                    flexGrow: 1,
                    justifyContent: 'center',
                  },
                  children: D().map((e) =>
                    (0, R.jsx)(
                      l.default,
                      {
                        testID: 'live-voice-example',
                        accessibilityRole: 'button',
                        onPress: () => ne(e),
                        disabled: !se,
                        style: ({ pressed: e }) => ({
                          paddingHorizontal: 12,
                          height: 34,
                          justifyContent: 'center',
                          borderRadius: 17,
                          borderWidth: 1,
                          borderColor: A.line,
                          backgroundColor: A.surface,
                          opacity: se ? (e ? 0.8 : 1) : 0.5,
                        }),
                        children: (0, R.jsx)(h.Copy, {
                          style: { fontSize: 13, lineHeight: 20 },
                          children: e,
                        }),
                      },
                      e,
                    ),
                  ),
                }),
              ],
            }),
          }),
        });
      }));
    var t = r(d[0]),
      n = e(r(d[1])),
      s = e(r(d[2])),
      o = e(r(d[3])),
      l = e(r(d[4])),
      c = e(r(d[5])),
      u = e(r(d[6])),
      p = r(d[7]),
      y = r(d[8]),
      f = r(d[9]),
      h = r(d[10]),
      m = r(d[11]),
      v = r(d[12]),
      x = r(d[13]),
      k = r(d[14]),
      b = r(d[15]),
      j = r(d[16]),
      S = r(d[17]),
      L = r(d[18]),
      C = r(d[19]),
      w = r(d[20]),
      I = r(d[21]),
      R = r(d[22]);
    const _ = {
        permission:
          '\u0627\u062c\u0627\u0632\u0647\u0654 \u0645\u06cc\u06a9\u0631\u0648\u0641\u0648\u0646 \u062f\u0627\u062f\u0647 \u0646\u0634\u062f. \u0627\u0632 \u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u0627\u062c\u0627\u0632\u0647 \u0628\u062f\u0647.',
        owner_only:
          '\u0627\u06cc\u0646 \u062f\u0633\u062a\u06cc\u0627\u0631 \u0641\u0642\u0637 \u0628\u0631\u0627\u06cc \u0645\u0627\u0644\u06a9 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0627\u0633\u062a.',
        quota:
          '\u0633\u0647\u0645 \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc \u0627\u0645\u0631\u0648\u0632 \u062a\u0645\u0627\u0645 \u0634\u062f.',
        free_limit_reached:
          '\u06a9\u0627\u0631\u0647\u0627\u06cc \u0631\u0627\u06cc\u06af\u0627\u0646 \u0627\u06cc\u0646 \u0645\u0627\u0647 \u062a\u0645\u0627\u0645 \u0634\u062f. \u0628\u0631\u0627\u06cc \u0627\u062f\u0627\u0645\u0647 \u0627\u0634\u062a\u0631\u0627\u06a9 \u0628\u06af\u06cc\u0631.',
        feature_not_in_plan:
          '\u0627\u06cc\u0646 \u0627\u0645\u06a9\u0627\u0646 \u062f\u0631 \u0627\u0634\u062a\u0631\u0627\u06a9 \u0641\u0639\u0644\u06cc \u0646\u06cc\u0633\u062a.',
        rate_limited:
          '\u06a9\u0645\u06cc \u0635\u0628\u0631 \u06a9\u0646 \u0648 \u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646.',
        ai_paused:
          '\u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc \u0627\u0644\u0627\u0646 \u0645\u0648\u0642\u062a\u0627\u064b \u062e\u0627\u0645\u0648\u0634 \u0627\u0633\u062a.',
        live_voice_plan:
          '\u062f\u0633\u062a\u06cc\u0627\u0631 \u0635\u0648\u062a\u06cc \u062f\u0631 \u0627\u0634\u062a\u0631\u0627\u06a9 \u0641\u0639\u0644\u06cc \u0646\u06cc\u0633\u062a.',
      },
      z = new Set([
        'live_voice_plan',
        'feature_not_in_plan',
        'free_limit_reached',
        'live_agent_limit',
      ]),
      D = () => [
        (0, b.L)(
          '\u0645\u0648\u062c\u0648\u062f\u06cc \u0634\u06cc\u0631 \u0686\u0646\u062f\u0647\u061f',
        ),
        (0, b.L)(
          '\u0641\u0631\u0648\u0634 \u0627\u0645\u0631\u0648\u0632 \u0686\u0642\u062f\u0631 \u0628\u0648\u062f\u061f',
        ),
        (0, b.L)(
          '\u06f3 \u062a\u0627 \u0634\u06cc\u0631 \u0641\u0631\u0648\u062e\u062a\u0645',
        ),
      ];
    function H(e, t, n, s) {
      const o = e.live;
      let l = !1;
      const c = (t) => {
          const n = ++o.seq;
          return (
            e.set((e) => ({ lines: [...e.lines, { ...t, id: n }].slice(-60) })),
            n
          );
        },
        u = (t, n) =>
          e.set((e) => ({
            lines: e.lines.map((e) =>
              e.id === t ? { ...e, text: (e.text + n).slice(-1500) } : e,
            ),
          })),
        p = (t, n, s = '') =>
          e.set((e) => ({
            lines: e.lines.map((e) =>
              e.token === t ? { ...e, state: n, note: s } : e,
            ),
          })),
        y = (t, n = '') => {
          if (!o.done) {
            ((o.done = !0),
              e.set(n ? { phase: t, message: n } : { phase: t }),
              o.audio?.stop(),
              (o.audio = null));
            try {
              o.socket?.close();
            } catch {}
          }
        };
      let f;
      ((e.stop = () => {
        if (((l = !0), clearInterval(f), !o.done)) {
          o.done = !0;
          try {
            o.socket?.send(JSON.stringify({ type: 'end' }));
          } catch {}
          o.audio?.stop();
          try {
            o.socket?.close();
          } catch {}
        }
      }),
        (0, L.talkAudioSupported)()
          ? ((async () => {
              try {
                try {
                  o.audio = await (0, L.startTalkAudio)({
                    onPcm: (e) => {
                      o.muted ||
                        (1 !== o.socket?.readyState
                          ? !o.socket &&
                            o.earlyBytes + e.byteLength <= 384e3 &&
                            (o.early.push(e), (o.earlyBytes += e.byteLength))
                          : (o.socket.bufferedAmount || 0) < 262144 &&
                            o.socket.send(e));
                    },
                    onLevel: (e) => {
                      !o.muted &&
                        Date.now() >= o.speakingUntil &&
                        (o.target = Math.max(o.target, e));
                    },
                    onError: () => {
                      ((o.muted = !0),
                        e.set({
                          muted: !0,
                          message: (0, b.L)(
                            '\u0645\u06cc\u06a9\u0631\u0648\u0641\u0648\u0646 \u0642\u0637\u0639 \u0634\u062f. \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc \u0628\u0646\u0648\u06cc\u0633\u06cc.',
                          ),
                          typing: !0,
                        }));
                    },
                  });
                } catch {
                  ((o.audio = await (0, L.startTalkPlayback)()),
                    (o.muted = !0),
                    e.set({
                      muted: !0,
                      typing: !0,
                      message: (0, b.L)(
                        '\u0645\u06cc\u06a9\u0631\u0648\u0641\u0648\u0646 \u062f\u0631 \u062f\u0633\u062a\u0631\u0633 \u0646\u06cc\u0633\u062a. \u0628\u0646\u0648\u06cc\u0633\u060c \u062c\u0648\u0627\u0628 \u0631\u0627 \u0645\u06cc\u200c\u0634\u0646\u0648\u06cc.',
                      ),
                    }));
                }
                if (l) return void o.audio.stop();
                const n = await (0, S.openVoiceSocket)(t, s);
                if (((o.socket = n), l)) return void n.close();
                ((n.onopen = () => {
                  for (const e of o.early.splice(0)) n.send(e);
                  o.earlyBytes = 0;
                }),
                  (n.onmessage = (t) => {
                    let n;
                    try {
                      n = JSON.parse(String(t.data));
                    } catch {
                      return;
                    }
                    const s = (t) => {
                      t?.remaining &&
                        (e.set({ left: t.remaining, spent: 0 }),
                        (o.readAt = Date.now()));
                    };
                    if ('ready' === n.type)
                      ((o.ready = !0),
                        (o.readAt = Date.now()),
                        (o.startedAt = Date.now()),
                        s(n),
                        e.set(
                          n.costMeter
                            ? {
                                phase: 'listening',
                                cost: { usd: 0, seconds: 0 },
                              }
                            : { phase: 'listening' },
                        ));
                    else if ('cost' === n.type && Number.isFinite(n.usd))
                      e.set({
                        cost: {
                          usd: Number(n.usd),
                          seconds: Number(n.seconds) || 0,
                        },
                      });
                    else if ('reply' === n.type && Number.isFinite(n.ms))
                      e.set({ reply: Number(n.ms) });
                    else if (
                      'audio' === n.type &&
                      'string' == typeof n.data &&
                      o.audio
                    ) {
                      const e = o.audio.play(n.data, Number(n.rate) || 24e3);
                      ((o.speakingUntil =
                        Math.max(Date.now(), o.speakingUntil) + 1e3 * e),
                        (o.thinking = !1),
                        (o.target = Math.max(
                          o.target,
                          (0, C.pcmLevel)(n.data),
                        )));
                    } else
                      'heard' === n.type &&
                      'string' == typeof n.text &&
                      n.text.trim()
                        ? o.user
                          ? u(o.user, n.text)
                          : ((o.user = c({
                              role: 'user',
                              text: n.text.trimStart(),
                            })),
                            (o.assistant = 0))
                        : 'said' === n.type && 'string' == typeof n.text
                          ? o.assistant
                            ? u(o.assistant, n.text)
                            : ((o.assistant = c({
                                role: 'assistant',
                                text: n.text.trimStart(),
                              })),
                              (o.user = 0))
                          : 'tool' === n.type
                            ? (o.thinking = !0)
                            : 'interrupted' === n.type
                              ? (o.audio?.flush(),
                                (o.speakingUntil = 0),
                                (o.assistant = 0))
                              : 'turn' === n.type
                                ? ((o.thinking = !1),
                                  (o.user = 0),
                                  (o.assistant = 0))
                                : 'confirm' === n.type &&
                                    'string' == typeof n.token
                                  ? c({
                                      role: 'assistant',
                                      kind: 'confirm',
                                      token: n.token,
                                      text: String(n.summaryFa || ''),
                                      state: 'open',
                                    })
                                  : 'confirm_gone' === n.type
                                    ? p(n.token, 'gone')
                                    : 'saved' === n.type
                                      ? p(
                                          n.token,
                                          n.ok
                                            ? n.saved
                                              ? 'saved'
                                              : 'failed'
                                            : 'no',
                                          n.messageFa || '',
                                        )
                                      : 'done' === n.type
                                        ? c({
                                            role: 'assistant',
                                            kind: 'done',
                                            token:
                                              n.undoToken || 'done-' + o.seq,
                                            text: String(n.summaryFa || ''),
                                            state: 'saved',
                                          })
                                        : 'undone' === n.type
                                          ? p(
                                              n.token,
                                              n.ok ? 'undone' : 'failed',
                                              n.ok
                                                ? ''
                                                : n.messageFa ||
                                                    (0, b.L)(
                                                      '\u0628\u0631\u0646\u06af\u0634\u062a.',
                                                    ),
                                            )
                                          : 'time' === n.type
                                            ? s(n)
                                            : 'limit' === n.type
                                              ? (s(n),
                                                e.set({ upgrade: !0 }),
                                                y(
                                                  'ended',
                                                  n.remaining
                                                    ? (0, j.talkRemainingLine)(
                                                        n.remaining,
                                                      )
                                                    : (0, b.L)(
                                                        '\u0648\u0642\u062a \u06af\u0641\u062a\u06af\u0648 \u062a\u0645\u0627\u0645 \u0634\u062f.',
                                                      ),
                                                ))
                                              : 'error' === n.type &&
                                                y(
                                                  'error',
                                                  (0, b.L)(
                                                    '\u0648\u0635\u0644 \u0646\u0634\u062f. \u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646.',
                                                  ),
                                                );
                  }),
                  (n.onerror = () =>
                    y(
                      'error',
                      (0, b.L)(
                        '\u0648\u0635\u0644 \u0646\u0634\u062f. \u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646.',
                      ),
                    )),
                  (n.onclose = () => y('ended')));
              } catch (t) {
                const s = t instanceof Error ? t.message : '';
                if (
                  (z.has(s) && e.set({ upgrade: !0 }), 'live_agent_limit' === s)
                )
                  return y('ended', (0, j.talkRemainingLine)(n.remaining));
                y(
                  'error',
                  _[s]
                    ? (0, b.L)(_[s])
                    : (0, b.L)(
                        '\u0648\u0635\u0644 \u0646\u0634\u062f. \u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646.',
                      ),
                );
              }
            })(),
            (f = setInterval(
              () =>
                o.done
                  ? clearInterval(f)
                  : ((o.level = Math.max(o.target, 0.82 * o.level)),
                    (o.target = 0),
                    o.ready
                      ? void e.set({
                          level: o.level,
                          phase:
                            Date.now() < o.speakingUntil
                              ? 'speaking'
                              : o.thinking
                                ? 'thinking'
                                : 'listening',
                          spent: (Date.now() - o.readAt) / 1e3,
                        })
                      : e.set({ level: o.level })),
              80,
            )))
          : y(
              'error',
              L.talkAudioHint ||
                (0, b.L)(
                  '\u0627\u06cc\u0646 \u062f\u0633\u062a\u06af\u0627\u0647 \u0647\u0646\u0648\u0632 \u0635\u062f\u0627\u06cc \u0632\u0646\u062f\u0647 \u0631\u0627 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0646\u0645\u06cc\u200c\u06a9\u0646\u062f.',
                ),
            ));
    }
  },
  939,
  [
    2, 92, 196, 224, 232, 123, 99, 380, 515, 342, 407, 385, 480, 384, 382, 311,
    940, 938, 941, 942, 606, 943, 338,
  ],
);
