// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 937; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.LiveAgentEntry = function ({ shop: e, role: n }) {
        const { colors: l } = (0, y.useTheme)(),
          [c, d] = (0, t.useState)(null),
          p = (0, j.useAgentPage)();
        if (
          ((0, t.useEffect)(() => {
            let t = !0;
            if ((d(null), e && 'owner' === n))
              return (
                (0, x.readAgentStatus)(e).then(
                  (e) => {
                    t && e.enabled && d(e);
                  },
                  () => {},
                ),
                () => {
                  t = !1;
                }
              );
          }, [e?.id, n, !!p]),
          !e || !c)
        )
          return null;
        const v = c.voice && (0, b.talkAudioSupported)() ? c.voice : null;
        return (0, S.jsx)(S.Fragment, {
          children: (0, S.jsxs)(s.default, {
            testID: 'live-agent-entry',
            accessibilityRole: 'button',
            accessibilityLabel: (0, h.L)(
              '\u062f\u0633\u062a\u06cc\u0627\u0631 \u0647\u0648\u0634\u0645\u0646\u062f',
            ),
            onPress: () =>
              (0, j.openAgentPage)(
                v
                  ? { mode: 'voice', shop: e, voice: v }
                  : { mode: 'text', shop: e },
              ),
            style: ({ pressed: e }) => ({
              flexDirection: 'row-reverse',
              alignItems: 'center',
              gap: 12,
              padding: 14,
              borderRadius: 16,
              borderWidth: 1,
              borderColor: l.accent,
              backgroundColor: l.accentSoft,
              opacity: e ? 0.85 : 1,
            }),
            children: [
              (0, S.jsx)(o.default, {
                style: {
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: l.accent,
                },
                children: (0, S.jsx)(f.Icon, {
                  name: 'ai',
                  size: 20,
                  color: l.onAccent,
                }),
              }),
              (0, S.jsxs)(o.default, {
                style: { flex: 1, minWidth: 0 },
                children: [
                  (0, S.jsx)(u.Copy, {
                    numberOfLines: 1,
                    style: {
                      fontSize: 15,
                      lineHeight: 24,
                      fontFamily: 'Vazirmatn_700Bold',
                    },
                    children: (0, h.L)(
                      '\u062f\u0633\u062a\u06cc\u0627\u0631 \u0647\u0648\u0634\u0645\u0646\u062f',
                    ),
                  }),
                  (0, S.jsx)(u.Copy, {
                    numberOfLines: 1,
                    style: { fontSize: 12, lineHeight: 20, color: l.muted },
                    children: v
                      ? (0, h.L)(
                          '\u0628\u0627 \u0645\u0646 \u062d\u0631\u0641 \u0628\u0632\u0646\u061b \u0645\u06cc\u200c\u067e\u0631\u0633\u0645 \u0648 \u062b\u0628\u062a \u0645\u06cc\u200c\u06a9\u0646\u0645',
                        )
                      : (0, h.L)(
                          '\u0628\u067e\u0631\u0633 \u06cc\u0627 \u0628\u06af\u0648 \u0686\u0647 \u0686\u06cc\u0632\u06cc \u062b\u0628\u062a \u06a9\u0646\u0645',
                        ),
                  }),
                ],
              }),
              (0, S.jsx)(f.Icon, {
                name: v ? 'mic' : 'chevron',
                size: 16,
                color: l.muted,
              }),
            ],
          }),
        });
      }),
      (_e.LiveAgentHost = function () {
        const e = (0, j.useAgentPage)();
        if (!e) return null;
        const t = () => (0, j.openAgentPage)(null);
        return 'voice' === e.mode && e.voice
          ? (0, S.jsx)(
              v.LiveVoiceHost,
              {
                shop: e.shop,
                voice: e.voice,
                onClose: t,
                onText: () =>
                  (0, j.openAgentPage)({ mode: 'text', shop: e.shop }),
              },
              'voice-' + e.shop.id,
            )
          : (0, S.jsx)(D, { shop: e.shop, onClose: t }, 'text-' + e.shop.id);
      }),
      (_e.LiveAgentChat = D));
    var t = r(_d[0]),
      n = e(r(_d[1])),
      s = e(r(_d[2])),
      o = e(r(_d[3])),
      l = r(_d[4]),
      c = r(_d[5]),
      d = r(_d[6]),
      u = r(_d[7]),
      f = r(_d[8]),
      p = r(_d[9]),
      y = r(_d[10]),
      h = r(_d[11]),
      x = r(_d[12]),
      b = r(_d[13]),
      v = r(_d[14]),
      j = r(_d[15]),
      L = r(_d[16]),
      C = r(_d[17]),
      S = r(_d[18]);
    const k = {
        quota:
          '\u0633\u0647\u0645 \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc \u0627\u0645\u0631\u0648\u0632 \u062a\u0645\u0627\u0645 \u0634\u062f.',
        trial_ai_used:
          '\u0633\u0647\u0645 \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc \u062f\u0648\u0631\u0647\u0654 \u0622\u0632\u0645\u0627\u06cc\u0634\u06cc \u062a\u0645\u0627\u0645 \u0634\u062f.',
        free_limit_reached:
          '\u06a9\u0627\u0631\u0647\u0627\u06cc \u0631\u0627\u06cc\u06af\u0627\u0646 \u0627\u06cc\u0646 \u0645\u0627\u0647 \u062a\u0645\u0627\u0645 \u0634\u062f. \u0628\u0631\u0627\u06cc \u0627\u062f\u0627\u0645\u0647 \u0627\u0634\u062a\u0631\u0627\u06a9 \u0628\u06af\u06cc\u0631.',
        feature_not_in_plan:
          '\u0627\u06cc\u0646 \u0627\u0645\u06a9\u0627\u0646 \u062f\u0631 \u0627\u0634\u062a\u0631\u0627\u06a9 \u0641\u0639\u0644\u06cc \u0646\u06cc\u0633\u062a.',
        rate_limited:
          '\u06a9\u0645\u06cc \u0635\u0628\u0631 \u06a9\u0646 \u0648 \u062f\u0648\u0628\u0627\u0631\u0647 \u0628\u0641\u0631\u0633\u062a.',
        ai_paused:
          '\u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc \u0627\u0644\u0627\u0646 \u0645\u0648\u0642\u062a\u0627\u064b \u062e\u0627\u0645\u0648\u0634 \u0627\u0633\u062a.',
        ai_busy:
          '\u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc \u0627\u0644\u0627\u0646 \u0634\u0644\u0648\u063a \u0627\u0633\u062a. \u06a9\u0645\u06cc \u0628\u0639\u062f \u062f\u0648\u0628\u0627\u0631\u0647 \u0628\u0641\u0631\u0633\u062a.',
        owner_only:
          '\u0627\u06cc\u0646 \u062f\u0633\u062a\u06cc\u0627\u0631 \u0641\u0642\u0637 \u0628\u0631\u0627\u06cc \u0645\u0627\u0644\u06a9 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0627\u0633\u062a.',
        agent_confirm_gone:
          '\u0627\u06cc\u0646 \u06a9\u0627\u0631\u062a \u062f\u06cc\u06af\u0631 \u0645\u0639\u062a\u0628\u0631 \u0646\u06cc\u0633\u062a. \u062f\u0648\u0628\u0627\u0631\u0647 \u0628\u06af\u0648.',
      },
      I = (e) => {
        const t = e instanceof Error ? e.message : '';
        return k[t]
          ? (0, h.L)(k[t])
          : (0, h.L)(
              '\u0648\u0635\u0644 \u0646\u0634\u062f. \u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646.',
            );
      },
      R = {
        permission:
          '\u0627\u062c\u0627\u0632\u0647\u0654 \u0645\u06cc\u06a9\u0631\u0648\u0641\u0648\u0646 \u062f\u0627\u062f\u0647 \u0646\u0634\u062f. \u0627\u0632 \u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u0627\u062c\u0627\u0632\u0647 \u0628\u062f\u0647.',
        https_required:
          '\u0628\u0631\u0627\u06cc \u0635\u062f\u0627\u060c \u0633\u0627\u06cc\u062a \u0628\u0627\u06cc\u062f \u0627\u0645\u0646 (https) \u0628\u0627\u0632 \u0634\u0648\u062f.',
        device_voice_download:
          '\u062a\u0634\u062e\u06cc\u0635 \u0635\u062f\u0627 \u0622\u0645\u0627\u062f\u0647 \u0646\u0634\u062f. \u0627\u06cc\u0646\u062a\u0631\u0646\u062a \u0631\u0627 \u0628\u0631\u0631\u0633\u06cc \u06a9\u0646 \u0648 \u062f\u0648\u0628\u0627\u0631\u0647 \u062f\u0627\u06cc\u0631\u0647 \u0631\u0627 \u0628\u0632\u0646.',
        device_voice_update:
          '\u0628\u0631\u0627\u06cc \u0635\u062f\u0627\u060c \u0628\u0631\u0646\u0627\u0645\u0647 \u0631\u0627 \u0628\u0647\u200c\u0631\u0648\u0632 \u06a9\u0646.',
      },
      z = (e) => {
        const t = e instanceof Error ? e.message : '';
        return (0, h.L)(
          R[t] ||
            '\u0645\u06cc\u06a9\u0631\u0648\u0641\u0648\u0646 \u0631\u0648\u0634\u0646 \u0646\u0634\u062f. \u062f\u0648\u0628\u0627\u0631\u0647 \u062f\u0627\u06cc\u0631\u0647 \u0631\u0627 \u0628\u0632\u0646.',
        );
      };
    function D({ shop: e, onClose: b }) {
      const { colors: v } = (0, y.useTheme)(),
        j = (0, d.useSafeAreaInsets)(),
        k = (0, t.useRef)(null),
        R = (0, t.useRef)(0),
        [D, _] = (0, t.useState)([]),
        [w, A] = (0, t.useState)(''),
        [H, T] = (0, t.useState)(!1),
        [P, O] = (0, t.useState)(null),
        V = (0, t.useRef)(!1),
        E = (0, t.useRef)(null);
      E.current = P;
      const B = (e, t, n = !1) => {
          t.trim() &&
            _((s) =>
              [
                ...s,
                { id: ++R.current, role: e, text: t.trim(), failed: n },
              ].slice(-40),
            );
        },
        F = (e = []) => {
          e.length &&
            _((t) =>
              [
                ...t,
                ...e.map((e) => ({
                  id: ++R.current,
                  role: 'assistant',
                  text: '\u2713 ' + e.summaryFa,
                  done: { undoToken: e.undoToken, state: 'saved' },
                })),
              ].slice(-40),
            );
        },
        W = (e) => {
          (F(e.done), B('assistant', e.reply), O(e.confirm || null));
        },
        M = (e, t) =>
          _((n) =>
            n.map((n) =>
              n.id === e && n.done
                ? { ...n, done: { ...n.done, state: t } }
                : n,
            ),
          );
      async function q(t) {
        const n = t.done?.undoToken;
        if (n && 'saved' === t.done?.state) {
          M(t.id, 'busy');
          try {
            const s = await (0, x.undoAgentDone)(e, n);
            (M(t.id, s.undone ? 'undone' : 'failed'),
              s.undone || B('assistant', s.reply, !0));
          } catch (e) {
            (M(t.id, 'failed'), B('assistant', I(e), !0));
          }
        }
      }
      const K = (0, t.useRef)((0, C.voiceListenAvailable)()).current,
        [G, J] = (0, t.useState)(L.voiceOff),
        N = (0, t.useRef)(L.voiceOff),
        [Q, U] = (0, t.useState)(''),
        [X, Y] = (0, t.useState)(''),
        [Z, $] = (0, t.useState)(!0),
        [ee, te] = (0, t.useState)(null),
        ne = (0, t.useRef)(!0),
        ie = (0, t.useRef)(null),
        se = (0, t.useRef)(0),
        oe = (0, t.useRef)(0),
        re = (0, t.useRef)(() => {}),
        le = () => 'off' !== N.current.phase;
      function ae(e) {
        const { state: t, actions: n } = (0, L.voiceStep)(N.current, e);
        ((N.current = t), J(t), n.forEach((e) => re.current(e)));
      }
      async function ce() {
        const e = ++se.current;
        (U(''), Y(''));
        try {
          const t = await (0, C.hearOnce)((t) => {
            e === se.current && U(t);
          });
          if (e !== se.current) return void t.cancel();
          ie.current = t;
          const n = await t.done;
          if (e !== se.current) return;
          ((ie.current = null), ae({ type: 'heard', text: n }));
        } catch (t) {
          e === se.current && (Y(z(t)), ae({ type: 'failed' }));
        }
      }
      re.current = (e) => {
        if ('listen' === e.kind) ce();
        else if ('stopListening' === e.kind)
          (se.current++, ie.current?.cancel(), (ie.current = null), U(''));
        else if ('send' === e.kind) ue(e.text, !0);
        else if ('speak' === e.kind) {
          const t = ++oe.current;
          (0, C.speak)(e.text).then(() => {
            t === oe.current && ae({ type: 'spoken' });
          });
        } else
          'stopSpeaking' === e.kind && (oe.current++, (0, C.stopSpeaking)());
      };
      const de = (e) => {
        le() && ae({ type: 'answer', text: e, canSpeak: ne.current });
      };
      async function ue(t = w, n = !1) {
        const s = t.trim();
        if (!s || V.current) return;
        (!n && le() && ae({ type: 'typed' }), U(''));
        const o = E.current ? (0, L.confirmWord)(s) : null;
        if (o) return (A(''), B('user', s), void (await fe('yes' === o, !0)));
        const l = D.filter((e) => !e.failed).map(({ role: e, text: t }) => ({
          role: e,
          text: t,
        }));
        (A(''), O(null), B('user', s), (V.current = !0), T(!0));
        let c = '';
        try {
          const t = await (0, x.sendAgentMessage)(e, s, l);
          (W(t),
            (c = (0, L.spokenText)(
              t.reply,
              t.confirm,
              (0, h.L)('\u062b\u0628\u062a \u06a9\u0646\u0645\u061f'),
            )));
        } catch (e) {
          ((c = I(e)), B('assistant', c, !0));
        } finally {
          ((V.current = !1), T(!1));
        }
        de(c);
      }
      async function fe(t, n = !1) {
        const s = E.current;
        if (!s || V.current) return;
        (!n && le() && ae({ type: 'typed' }),
          (V.current = !0),
          T(!0),
          O(null),
          (E.current = null));
        let o = '';
        try {
          const n = await (0, x.answerAgentConfirm)(e, s.token, t);
          (W(n),
            (o = (0, L.spokenText)(
              n.reply,
              n.confirm,
              (0, h.L)('\u062b\u0628\u062a \u06a9\u0646\u0645\u061f'),
            )));
        } catch (e) {
          ((o = I(e)), B('assistant', o, !0));
        } finally {
          ((V.current = !1), T(!1));
        }
        de(o);
      }
      ((0, t.useEffect)(() => {
        if ('off' !== G.phase)
          return (
            te((0, C.deviceVoiceProgress)()),
            (0, C.onDeviceVoiceProgress)(te)
          );
      }, ['off' === G.phase]),
        (0, t.useEffect)(
          () => () => {
            (se.current++,
              oe.current++,
              ie.current?.cancel(),
              (0, C.stopSpeaking)());
          },
          [],
        ),
        (0, t.useEffect)(() => {
          const e = setTimeout(
            () => k.current?.scrollToEnd({ animated: !0 }),
            50,
          );
          return () => clearTimeout(e);
        }, [D.length, P, H]));
      const ge = [
          (0, h.L)(
            '\u0645\u0648\u062c\u0648\u062f\u06cc \u0634\u06cc\u0631 \u0686\u0646\u062f\u0647\u061f',
          ),
          (0, h.L)(
            '\u06f3 \u062a\u0627 \u0634\u06cc\u0631 \u0641\u0631\u0648\u062e\u062a\u0645',
          ),
          (0, h.L)(
            '\u0641\u0631\u0648\u0634 \u0627\u0645\u0631\u0648\u0632 \u0686\u0642\u062f\u0631 \u0628\u0648\u062f\u061f',
          ),
        ],
        pe = K && !w.trim(),
        ye = G.phase,
        he = G.speaker && Z,
        me =
          'listening' === ye
            ? null != ee
              ? (0, h.L)(
                  '\u0622\u0645\u0627\u062f\u0647 \u06a9\u0631\u062f\u0646 \u062a\u0634\u062e\u06cc\u0635 \u0635\u062f\u0627\u2026 {n}\u066a',
                  { n: (0, h.localDigits)(ee) },
                )
              : (0, h.L)(
                  '\u06af\u0648\u0634 \u0645\u06cc\u200c\u062f\u0647\u0645\u2026 \u0628\u06af\u0648',
                )
            : 'thinking' === ye
              ? (0, h.L)(
                  '\u062f\u0631 \u062d\u0627\u0644 \u0641\u06a9\u0631 \u06a9\u0631\u062f\u0646\u2026',
                )
              : 'speaking' === ye
                ? (0, h.L)(
                    '\u062f\u0631 \u062d\u0627\u0644 \u062e\u0648\u0627\u0646\u062f\u0646 \u062c\u0648\u0627\u0628\u2026',
                  )
                : (0, h.L)(
                    '\u0645\u06cc\u06a9\u0631\u0648\u0641\u0648\u0646 \u062e\u0627\u0645\u0648\u0634 \u0627\u0633\u062a',
                  ),
        xe =
          X ||
          ('listening' === ye
            ? Q ||
              (P
                ? (0, h.L)(
                    '\u0628\u06af\u0648 \xab\u0622\u0631\u0647\xbb \u06cc\u0627 \xab\u0646\u0647\xbb',
                  )
                : '')
            : 'speaking' === ye || 'muted' === ye
              ? (0, h.L)(
                  '\u0628\u0631\u0627\u06cc \u062d\u0631\u0641 \u0632\u062f\u0646 \u062f\u0627\u06cc\u0631\u0647 \u0631\u0627 \u0628\u0632\u0646',
                )
              : ''),
        be = (e, t, n, o, l, c = !1) =>
          (0, S.jsxs)(s.default, {
            testID: e,
            accessibilityRole: 'button',
            accessibilityLabel: o,
            onPress: l,
            style: ({ pressed: e }) => ({
              flex: 1,
              height: 40,
              borderRadius: 20,
              flexDirection: 'row-reverse',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              backgroundColor: v.soft,
              opacity: e ? 0.8 : c ? 0.6 : 1,
            }),
            children: [
              (0, S.jsx)(f.Icon, { name: t, size: 18, color: v.text }),
              (0, S.jsx)(u.Copy, {
                numberOfLines: 1,
                style: { fontSize: 13, lineHeight: 20 },
                children: n,
              }),
            ],
          });
      return (0, S.jsx)(c.PageModal, {
        visible: !0,
        animationType: 'slide',
        presentationStyle: 'fullScreen',
        onRequestClose: b,
        children: (0, S.jsx)(n.default, {
          behavior: p.keyboardBehavior,
          style: { flex: 1, backgroundColor: v.bg },
          children: (0, S.jsxs)(o.default, {
            testID: 'live-agent-chat',
            style: {
              flex: 1,
              paddingTop: j.top + 12,
              paddingBottom: j.bottom + 12,
              paddingHorizontal: 16,
            },
            children: [
              (0, S.jsxs)(o.default, {
                style: {
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 8,
                },
                children: [
                  (0, S.jsx)(u.Copy, {
                    style: {
                      fontSize: 17,
                      lineHeight: 28,
                      fontFamily: 'Vazirmatn_700Bold',
                    },
                    children: (0, h.L)(
                      '\u062f\u0633\u062a\u06cc\u0627\u0631 \u0647\u0648\u0634\u0645\u0646\u062f',
                    ),
                  }),
                  (0, S.jsx)(s.default, {
                    testID: 'live-agent-close',
                    accessibilityRole: 'button',
                    accessibilityLabel: (0, h.L)('\u0628\u0633\u062a\u0646'),
                    onPress: b,
                    hitSlop: 10,
                    style: {
                      width: 40,
                      height: 40,
                      borderRadius: 20,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: v.soft,
                    },
                    children: (0, S.jsx)(f.Icon, {
                      name: 'close',
                      size: 18,
                      color: v.text,
                    }),
                  }),
                ],
              }),
              (0, S.jsxs)(l.ScrollView, {
                ref: k,
                style: { flex: 1 },
                contentContainerStyle: { gap: 10, paddingVertical: 8 },
                keyboardShouldPersistTaps: 'handled',
                children: [
                  !D.length &&
                    (0, S.jsxs)(o.default, {
                      style: { gap: 10, alignItems: 'center', paddingTop: 24 },
                      children: [
                        (0, S.jsx)(u.Copy, {
                          style: {
                            fontSize: 14,
                            lineHeight: 24,
                            color: v.muted,
                            textAlign: 'center',
                          },
                          children: (0, h.L)(
                            '\u0628\u067e\u0631\u0633 \u06cc\u0627 \u0628\u06af\u0648 \u0686\u0647 \u0686\u06cc\u0632\u06cc \u062b\u0628\u062a \u06a9\u0646\u0645. \u0642\u0628\u0644 \u0627\u0632 \u0647\u0631 \u062b\u0628\u062a \u0627\u0632 \u062a\u0648 \u0645\u06cc\u200c\u067e\u0631\u0633\u0645.',
                          ),
                        }),
                        ge.map((e) =>
                          (0, S.jsx)(
                            s.default,
                            {
                              testID: 'live-agent-example',
                              accessibilityRole: 'button',
                              onPress: () => {
                                ue(e);
                              },
                              style: ({ pressed: e }) => ({
                                paddingHorizontal: 14,
                                paddingVertical: 8,
                                borderRadius: 18,
                                borderWidth: 1,
                                borderColor: v.line,
                                backgroundColor: v.surface,
                                opacity: e ? 0.8 : 1,
                              }),
                              children: (0, S.jsx)(u.Copy, {
                                style: { fontSize: 14, lineHeight: 22 },
                                children: e,
                              }),
                            },
                            e,
                          ),
                        ),
                      ],
                    }),
                  D.map((e) =>
                    (0, S.jsxs)(
                      o.default,
                      {
                        testID:
                          'user' === e.role
                            ? 'live-agent-user'
                            : 'live-agent-reply',
                        style: {
                          alignSelf:
                            'user' === e.role ? 'flex-start' : 'flex-end',
                          maxWidth: '88%',
                          padding: 10,
                          borderRadius: 14,
                          backgroundColor:
                            'user' === e.role ? v.soft : v.accentSoft,
                        },
                        children: [
                          (0, S.jsx)(u.Copy, {
                            style: {
                              fontSize: 15,
                              lineHeight: 26,
                              color: e.failed ? v.danger : v.text,
                            },
                            children: e.text,
                          }),
                          !!e.done?.undoToken &&
                            'failed' !== e.done.state &&
                            ('undone' === e.done.state
                              ? (0, S.jsx)(u.Copy, {
                                  testID: 'live-agent-undone',
                                  style: {
                                    fontSize: 13,
                                    lineHeight: 22,
                                    color: v.muted,
                                  },
                                  children: (0, h.L)(
                                    '\u0628\u0631\u06af\u0634\u062a \u062e\u0648\u0631\u062f',
                                  ),
                                })
                              : (0, S.jsxs)(s.default, {
                                  testID: 'live-agent-undo',
                                  accessibilityRole: 'button',
                                  disabled: 'busy' === e.done.state,
                                  onPress: () => {
                                    q(e);
                                  },
                                  style: ({ pressed: t }) => ({
                                    alignSelf: 'flex-start',
                                    flexDirection: 'row-reverse',
                                    alignItems: 'center',
                                    gap: 6,
                                    marginTop: 6,
                                    paddingHorizontal: 12,
                                    height: 32,
                                    borderRadius: 16,
                                    backgroundColor: v.surface,
                                    opacity:
                                      'busy' === e.done?.state
                                        ? 0.5
                                        : t
                                          ? 0.85
                                          : 1,
                                  }),
                                  children: [
                                    (0, S.jsx)(f.Icon, {
                                      name: 'refresh',
                                      size: 15,
                                      color: v.text,
                                    }),
                                    (0, S.jsx)(u.Copy, {
                                      style: { fontSize: 13, lineHeight: 20 },
                                      children: (0, h.L)(
                                        '\u0628\u0631\u06af\u0631\u062f\u0627\u0646',
                                      ),
                                    }),
                                  ],
                                })),
                        ],
                      },
                      e.id,
                    ),
                  ),
                  H &&
                    (0, S.jsx)(u.Copy, {
                      testID: 'live-agent-busy',
                      style: {
                        alignSelf: 'flex-end',
                        fontSize: 13,
                        lineHeight: 22,
                        color: v.muted,
                      },
                      children: (0, h.L)(
                        '\u062f\u0631 \u062d\u0627\u0644 \u0628\u0631\u0631\u0633\u06cc\u2026',
                      ),
                    }),
                  !!P &&
                    (0, S.jsxs)(o.default, {
                      testID: 'live-agent-confirm',
                      style: {
                        alignSelf: 'stretch',
                        gap: 10,
                        padding: 14,
                        borderRadius: 16,
                        borderWidth: 1,
                        borderColor: v.accent,
                        backgroundColor: v.surface,
                      },
                      children: [
                        (0, S.jsx)(u.Copy, {
                          style: {
                            fontSize: 13,
                            lineHeight: 22,
                            color: v.muted,
                          },
                          children: (0, h.L)(
                            '\u0627\u06cc\u0646 \u0631\u0627 \u062b\u0628\u062a \u06a9\u0646\u0645\u061f',
                          ),
                        }),
                        (0, S.jsx)(u.Copy, {
                          testID: 'live-agent-confirm-text',
                          style: {
                            fontSize: 15,
                            lineHeight: 26,
                            fontFamily: 'Vazirmatn_600SemiBold',
                          },
                          children: P.summaryFa,
                        }),
                        (0, S.jsxs)(o.default, {
                          style: { flexDirection: 'row-reverse', gap: 10 },
                          children: [
                            (0, S.jsx)(s.default, {
                              testID: 'live-agent-confirm-yes',
                              accessibilityRole: 'button',
                              onPress: () => {
                                fe(!0);
                              },
                              style: ({ pressed: e }) => ({
                                flex: 1,
                                height: 46,
                                borderRadius: 23,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: v.accent,
                                opacity: e ? 0.85 : 1,
                              }),
                              children: (0, S.jsx)(u.Copy, {
                                style: {
                                  fontSize: 15,
                                  lineHeight: 24,
                                  color: v.onAccent,
                                  fontFamily: 'Vazirmatn_700Bold',
                                },
                                children: (0, h.L)(
                                  '\u062b\u0628\u062a \u06a9\u0646',
                                ),
                              }),
                            }),
                            (0, S.jsx)(s.default, {
                              testID: 'live-agent-confirm-no',
                              accessibilityRole: 'button',
                              onPress: () => {
                                fe(!1);
                              },
                              style: ({ pressed: e }) => ({
                                flex: 1,
                                height: 46,
                                borderRadius: 23,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: v.soft,
                                opacity: e ? 0.85 : 1,
                              }),
                              children: (0, S.jsx)(u.Copy, {
                                style: { fontSize: 15, lineHeight: 24 },
                                children: (0, h.L)('\u0646\u0647'),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
              'off' !== ye &&
                (0, S.jsxs)(o.default, {
                  testID: 'live-agent-voice',
                  style: {
                    gap: 10,
                    marginTop: 8,
                    padding: 12,
                    borderRadius: 18,
                    borderWidth: 1,
                    borderColor: v.accent,
                    backgroundColor: v.surface,
                  },
                  children: [
                    (0, S.jsxs)(o.default, {
                      style: {
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        gap: 12,
                      },
                      children: [
                        (0, S.jsx)(s.default, {
                          testID: 'live-agent-voice-orb',
                          accessibilityRole: 'button',
                          accessibilityLabel: (0, h.L)(
                            '\u062d\u0627\u0644\u0627 \u0628\u06af\u0648',
                          ),
                          onPress: () => ae({ type: 'tap' }),
                          style: ({ pressed: e }) => ({
                            width: 52,
                            height: 52,
                            borderRadius: 26,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor:
                              'listening' === ye ? v.accent : v.accentSoft,
                            opacity: e ? 0.85 : 1,
                          }),
                          children: (0, S.jsx)(f.Icon, {
                            name:
                              'muted' === ye
                                ? 'micOff'
                                : 'thinking' === ye
                                  ? 'ai'
                                  : 'speaking' === ye
                                    ? 'speaker'
                                    : 'mic',
                            size: 24,
                            color: 'listening' === ye ? v.onAccent : v.text,
                          }),
                        }),
                        (0, S.jsxs)(o.default, {
                          style: { flex: 1, minWidth: 0 },
                          children: [
                            (0, S.jsx)(u.Copy, {
                              testID: 'live-agent-voice-status',
                              numberOfLines: 1,
                              style: {
                                fontSize: 15,
                                lineHeight: 24,
                                fontFamily: 'Vazirmatn_600SemiBold',
                              },
                              children: me,
                            }),
                            !!xe &&
                              (0, S.jsx)(u.Copy, {
                                testID: 'live-agent-voice-hint',
                                numberOfLines: 3,
                                style: {
                                  fontSize: 13,
                                  lineHeight: 22,
                                  color: X ? v.danger : v.muted,
                                },
                                children: xe,
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, S.jsxs)(o.default, {
                      style: { flexDirection: 'row-reverse', gap: 8 },
                      children: [
                        be(
                          'live-agent-voice-mute',
                          G.muted ? 'micOff' : 'mic',
                          G.muted
                            ? (0, h.L)(
                                '\u0645\u06cc\u06a9\u0631\u0648\u0641\u0648\u0646 \u062e\u0627\u0645\u0648\u0634',
                              )
                            : (0, h.L)(
                                '\u0645\u06cc\u06a9\u0631\u0648\u0641\u0648\u0646',
                              ),
                          G.muted
                            ? (0, h.L)(
                                '\u0645\u06cc\u06a9\u0631\u0648\u0641\u0648\u0646 \u0631\u0627 \u0631\u0648\u0634\u0646 \u06a9\u0646',
                              )
                            : (0, h.L)(
                                '\u0645\u06cc\u06a9\u0631\u0648\u0641\u0648\u0646 \u0631\u0627 \u062e\u0627\u0645\u0648\u0634 \u06a9\u0646',
                              ),
                          () => {
                            (Y(''), ae({ type: 'mute' }));
                          },
                          G.muted,
                        ),
                        be(
                          'live-agent-voice-speaker',
                          he ? 'speaker' : 'speakerOff',
                          he
                            ? (0, h.L)(
                                '\u062e\u0648\u0627\u0646\u062f\u0646 \u062c\u0648\u0627\u0628',
                              )
                            : (0, h.L)('\u0628\u06cc\u200c\u0635\u062f\u0627'),
                          he
                            ? (0, h.L)(
                                '\u062c\u0648\u0627\u0628\u200c\u0647\u0627 \u0631\u0627 \u0628\u0644\u0646\u062f \u0646\u062e\u0648\u0627\u0646',
                              )
                            : (0, h.L)(
                                '\u062c\u0648\u0627\u0628\u200c\u0647\u0627 \u0631\u0627 \u0628\u0644\u0646\u062f \u0628\u062e\u0648\u0627\u0646',
                              ),
                          () => {
                            Z
                              ? ae({ type: 'speaker' })
                              : Y(
                                  (0, h.L)(
                                    '\u0627\u06cc\u0646 \u062f\u0633\u062a\u06af\u0627\u0647 \u0635\u062f\u0627\u06cc \u0641\u0627\u0631\u0633\u06cc \u0628\u0631\u0627\u06cc \u062e\u0648\u0627\u0646\u062f\u0646 \u0646\u062f\u0627\u0631\u062f\u061b \u062c\u0648\u0627\u0628\u200c\u0647\u0627 \u0641\u0642\u0637 \u0646\u0648\u0634\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f.',
                                  ),
                                );
                          },
                          !he,
                        ),
                        be(
                          'live-agent-voice-close',
                          'close',
                          (0, h.L)('\u0628\u0633\u062a\u0646'),
                          (0, h.L)(
                            '\u0628\u0633\u062a\u0646 \u0635\u062f\u0627',
                          ),
                          () => {
                            (Y(''), ae({ type: 'close' }));
                          },
                        ),
                      ],
                    }),
                  ],
                }),
              (0, S.jsxs)(o.default, {
                style: {
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  gap: 8,
                  paddingTop: 8,
                },
                children: [
                  (0, S.jsx)(u.Input, {
                    testID: 'live-agent-input',
                    value: w,
                    onChangeText: A,
                    placeholder: K
                      ? (0, h.L)(
                          '\u0628\u0646\u0648\u06cc\u0633 \u06cc\u0627 \u0645\u06cc\u06a9\u0631\u0648\u0641\u0648\u0646 \u0631\u0627 \u0628\u0632\u0646\u2026',
                        )
                      : (0, h.L)(
                          '\u0628\u0646\u0648\u06cc\u0633 \u06cc\u0627 \u0628\u0627 \u0645\u06cc\u06a9\u0631\u0648\u0641\u0648\u0646 \u06a9\u06cc\u0628\u0648\u0631\u062f \u0628\u06af\u0648\u2026',
                        ),
                    maxLength: 500,
                    returnKeyType: 'send',
                    onSubmitEditing: () => {
                      ue();
                    },
                    style: { flex: 1 },
                  }),
                  pe
                    ? (0, S.jsx)(s.default, {
                        testID: 'live-agent-mic',
                        accessibilityRole: 'button',
                        accessibilityLabel: (0, h.L)(
                          '\u06af\u0641\u062a\u06af\u0648 \u0628\u0627 \u0635\u062f\u0627',
                        ),
                        onPress: () =>
                          'off' === ye
                            ? ((0, C.primeSpeech)(),
                              Y(''),
                              ae({ type: 'open', canSpeak: !0 }),
                              void (0, C.speakAvailable)().then((e) => {
                                ((ne.current = e), $(e));
                              }))
                            : ae({ type: 'tap' }),
                        style: ({ pressed: e }) => ({
                          width: 48,
                          height: 48,
                          borderRadius: 24,
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: v.accent,
                          opacity: e ? 0.85 : 1,
                        }),
                        children: (0, S.jsx)(f.Icon, {
                          name: 'mic',
                          size: 22,
                          color: v.onAccent,
                        }),
                      })
                    : (0, S.jsx)(s.default, {
                        testID: 'live-agent-send',
                        accessibilityRole: 'button',
                        accessibilityLabel: (0, h.L)(
                          '\u0628\u0641\u0631\u0633\u062a',
                        ),
                        disabled: H || !w.trim(),
                        onPress: () => {
                          ue();
                        },
                        style: ({ pressed: e }) => ({
                          width: 48,
                          height: 48,
                          borderRadius: 24,
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: v.accent,
                          opacity: H || !w.trim() ? 0.45 : e ? 0.85 : 1,
                        }),
                        children: (0, S.jsx)(f.Icon, {
                          name: 'send',
                          size: 20,
                          color: v.onAccent,
                        }),
                      }),
                ],
              }),
            ],
          }),
        }),
      });
    }
  },
  937,
  [
    2, 224, 232, 99, 380, 515, 342, 407, 385, 480, 382, 311, 938, 939, 944, 606,
    945, 946, 338,
  ],
);
