// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 584; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.VoiceAddHost = function () {
        const [e, n] = (0, t.useState)(null),
          i = (0, t.useRef)(null);
        function s() {
          (i.current?.settle([]), (i.current = null), n(null));
        }
        return (
          (0, t.useEffect)(() => {
            const e = (e) =>
              new Promise((t) => {
                if (i.current) return void t([]);
                let s = !1;
                const o = {
                  id: M++,
                  request: e,
                  settle: (e) => {
                    s || ((s = !0), t(e));
                  },
                };
                ((i.current = o), n(o));
              });
            return (
              q.push(e),
              (0, S.setVoiceAddHandler)(e),
              () => {
                const t = q.indexOf(e);
                (t >= 0 && q.splice(t, 1),
                  (0, S.setVoiceAddHandler)(q[q.length - 1] || null),
                  i.current?.settle([]),
                  (i.current = null));
              }
            );
          }, []),
          e
            ? (0, _.jsx)(c.TapModal, {
                transparent: !0,
                visible: !0,
                animationType: 'none',
                statusBarTranslucent: !0,
                onRequestClose: s,
                children: (0, _.jsx)(O, { session: e, onClose: s }, e.id),
              })
            : null
        );
      }));
    var t = r(d[0]),
      n = e(r(d[1])),
      i = e(r(d[2])),
      s = e(r(d[3]));
    r(d[4]);
    var o = e(r(d[5])),
      a = e(r(d[6])),
      l = e(r(d[7])),
      c = r(d[8]),
      u = r(d[9]),
      f = r(d[10]),
      h = r(d[11]),
      v = r(d[12]),
      p = r(d[13]),
      y = r(d[14]),
      x = r(d[15]),
      b = r(d[16]),
      w = r(d[17]),
      j = r(d[18]),
      R = r(d[19]),
      L = r(d[20]),
      V = r(d[21]),
      k = r(d[22]),
      I = r(d[23]),
      S = r(d[24]),
      C = r(d[25]),
      _ = r(d[26]);
    const E = 2e3,
      D = 7e3,
      z = 3e4,
      H = 15e3,
      q = [];
    let M = 1;
    function O({ session: e, onClose: c }) {
      const { colors: y, mode: S } = (0, f.useTheme)(),
        q = (0, u.useSafeAreaInsets)(),
        M = (0, h.useReducedMotion)(),
        O = (0, w.useVoiceRecorder)(),
        [A, P] = (0, t.useState)('preparing'),
        [N, W] = (0, t.useState)([]),
        [B, U] = (0, t.useState)([]),
        [Y, G] = (0, t.useState)(''),
        [J, K] = (0, t.useState)(0),
        Q = (0, t.useRef)(O);
      Q.current = O;
      const X = (0, t.useRef)('preparing');
      X.current = A;
      const Z = (0, t.useRef)(!0),
        $ = (0, t.useRef)(0),
        ee = (0, t.useRef)(!1),
        te = (0, t.useRef)(!1),
        re = (0, t.useRef)({
          started: 0,
          lastVoice: 0,
          voiced: !1,
          lastLive: '',
        }),
        ne = (0, t.useRef)(new n.default.Value(0)).current;
      async function ie(e) {
        const t = () => Z.current && e === $.current;
        try {
          if (!(0, j.deviceVoiceEnabled)())
            throw Error(
              (0, j.deviceVoiceNeedsUpdate)()
                ? 'device_voice_update'
                : 'device_voice_app',
            );
          const n = await (0, R.voiceStartPlan)({
            modelReady: j.deviceVoiceReady,
            serverOn: R.serverVoiceAvailable,
            warm: j.warmDeviceVoice,
            serverOnly: !0,
          });
          if (!t()) return;
          if ('server_off' === n) throw Error('voice_server_off');
          if ('wait' === n) {
            P('model');
            const e = await (0, j.prepareDeviceVoice)();
            if (!t()) return;
            if (!e) throw Error('device_voice_download');
          }
          if ((await Q.current.start(), (te.current = !0), !t()))
            return void (
              e === $.current && ((te.current = !1), Q.current.cancel())
            );
          if ('active' !== i.default.currentState) return void oe();
          ((0, L.rememberVoiceExplainer)(),
            (re.current = {
              started: Date.now(),
              lastVoice: 0,
              voiced: !1,
              lastLive: '',
            }),
            P('listening'));
        } catch (e) {
          if (!t()) return;
          if (
            ((te.current = !1), e instanceof Error && 'cancelled' === e.message)
          )
            return void oe();
          se((0, V.voiceReason)('start', e).text);
        }
      }
      function se(t) {
        (e.settle([]), G(t), P('error'));
      }
      function oe() {
        ((ee.current = !0),
          te.current && ((te.current = !1), Q.current.cancel()),
          c());
      }
      async function ae() {
        if (ee.current || 'listening' !== X.current) return;
        ((ee.current = !0), P('reading'));
        const t = Q.current.live,
          n = (Date.now() - re.current.started) / 1e3;
        let i = '',
          s = !1,
          o = null;
        try {
          const e = await Q.current.stop();
          ((i = e.transcript || ''), (s = !!e.serverMissed));
        } catch (e) {
          o = e;
        }
        if (((te.current = !1), !Z.current)) return;
        if (((i = (i || t || '').trim()), !i))
          return void (!o ||
          (o instanceof Error && 'invalid_audio' === o.message)
            ? se(
                s
                  ? (0, V.voiceReason)(
                      'send',
                      Error('voice_server_unreachable'),
                    ).text
                  : (0, x.L)(
                      '\u0686\u06cc\u0632\u06cc \u0634\u0646\u06cc\u062f\u0647 \u0646\u0634\u062f\u061b \u0646\u0632\u062f\u06cc\u06a9\u200c\u062a\u0631 \u0628\u06af\u0648\u060c \u0645\u062b\u0644\u0627\u064b: \u062f\u0648 \u062a\u0627 \u0634\u06cc\u0631 \u0648 \u06cc\u06a9 \u06a9\u06cc\u0644\u0648 \u0628\u0631\u0646\u062c',
                    ),
              )
            : se((0, V.voiceReason)('send', o).text));
        const a = e.request.products,
          l = (0, C.readVoiceAdd)(i, a);
        let c = l.items,
          u = l.misses;
        if (l.leftovers.length && I.activeShop) {
          const t = new AbortController(),
            i = setTimeout(() => t.abort(), H);
          try {
            const e = await (0, k.rereadVoice)(
                l.leftovers.join(' \u0648 '),
                a.filter((e) => !e.archivedAt).map((e) => e.name),
                t.signal,
                { duration: n },
              ),
              i = (0, C.itemsFromSaid)(
                e.actions.map((e) => ({
                  name: e.name,
                  quantity: e.quantity,
                  unit: e.unit ?? null,
                })),
                a,
              );
            ((c = [...c, ...i.items]), (u = [...u, ...i.misses]));
          } catch {
            u = [
              ...u,
              ...l.leftovers.map((e) => ({ said: e, kind: 'unknown' })),
            ];
          } finally {
            clearTimeout(i);
          }
          if (!Z.current) return void e.settle((0, C.pickerItems)(c));
        } else
          u = [...u, ...l.leftovers.map((e) => ({ said: e, kind: 'unknown' }))];
        if ((e.settle((0, C.pickerItems)(c)), !c.length && !u.length))
          return (
            G(
              (0, x.L)(
                '\u0686\u06cc\u0632\u06cc \u0634\u0646\u06cc\u062f\u0647 \u0646\u0634\u062f\u061b \u0646\u0632\u062f\u06cc\u06a9\u200c\u062a\u0631 \u0628\u06af\u0648\u060c \u0645\u062b\u0644\u0627\u064b: \u062f\u0648 \u062a\u0627 \u0634\u06cc\u0631 \u0648 \u06cc\u06a9 \u06a9\u06cc\u0644\u0648 \u0628\u0631\u0646\u062c',
              ),
            ),
            void P('error')
          );
        (W(c), U(u), P('done'));
      }
      function le() {
        'listening' === A
          ? ae()
          : 'done' === A || 'error' === A
            ? c()
            : ('preparing' !== A && 'model' !== A) || oe();
      }
      ((0, t.useEffect)(() => {
        M
          ? ne.setValue(1)
          : n.default
              .timing(ne, {
                toValue: 1,
                duration: 240,
                easing: s.default.out(s.default.back(1.4)),
                useNativeDriver: !1,
              })
              .start();
      }, [M]),
        (0, t.useEffect)(() => {
          ((Z.current = !0), ie(++$.current));
          const e = i.default.addEventListener('change', (e) => {
            'active' !== e &&
              Z.current &&
              !ee.current &&
              'done' !== X.current &&
              'error' !== X.current &&
              oe();
          });
          return () => {
            ((Z.current = !1),
              e.remove(),
              te.current && ((te.current = !1), Q.current.cancel()));
          };
        }, []),
        (0, t.useEffect)(() => {
          if ('listening' !== A) return;
          const e = re.current,
            t = Date.now();
          (O.level > 0.12 || (O.live && O.live !== e.lastLive)) &&
            ((e.voiced = !0), (e.lastVoice = t), (e.lastLive = O.live));
        }, [O.level, O.live, A]),
        (0, t.useEffect)(() => {
          if ('listening' !== A) return;
          const e = setInterval(() => {
            const e = re.current,
              t = Date.now();
            (K((e) => e + 1),
              (t - e.started >= z ||
                (e.voiced && t - e.lastVoice >= E) ||
                (!e.voiced && t - e.started >= D)) &&
                ae());
          }, 200);
          return () => clearInterval(e);
        }, [A]),
        (0, t.useEffect)(() => {
          if ('done' !== A && 'error' !== A) return;
          const e = setTimeout(c, 'error' === A || B.length ? 7e3 : 2800);
          return () => clearTimeout(e);
        }, [A, B.length]));
      const ce = '#ffffff',
        ue = '#ffffffa6',
        de = O.live ? (0, b.transcriptForDisplay)(O.live) : '',
        fe =
          'model' === A
            ? (0, x.L)(
                '\u0645\u062f\u0644 \u062a\u0634\u062e\u06cc\u0635 \u0635\u062f\u0627 \u062f\u0631 \u062d\u0627\u0644 \u0622\u0645\u0627\u062f\u0647 \u0634\u062f\u0646\u2026',
              )
            : 'preparing' === A
              ? (0, x.L)(
                  '\u0622\u0645\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u0645\u2026',
                )
              : 'reading' === A
                ? (0, x.L)(
                    '\u062f\u0631 \u062d\u0627\u0644 \u062e\u0648\u0627\u0646\u062f\u0646\u2026',
                  )
                : (0, x.L)(
                    '\u062f\u0631 \u062d\u0627\u0644 \u06af\u0648\u0634 \u062f\u0627\u062f\u0646\u2026',
                  ),
        me = 'done' === A || 'error' === A;
      return (0, _.jsx)(o.default, {
        style: a.default.absoluteFill,
        onPress: le,
        accessible: !1,
        children: (0, _.jsx)(l.default, {
          pointerEvents: 'box-none',
          style: {
            paddingTop: Math.max(q.top, 8) + 6,
            paddingHorizontal: 16,
            alignItems: 'center',
          },
          children: (0, _.jsx)(n.default.View, {
            style: {
              width: '100%',
              alignItems: 'center',
              opacity: ne,
              transform: [
                {
                  translateY: ne.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-16, 0],
                  }),
                },
                {
                  scale: ne.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.85, 1],
                  }),
                },
              ],
            },
            children: (0, _.jsxs)(o.default, {
              testID: 'voice-add-pill',
              onPress: le,
              accessibilityRole: 'button',
              accessibilityLiveRegion: 'polite',
              accessibilityLabel:
                'listening' === A
                  ? (0, x.L)(
                      '\u062f\u0631 \u062d\u0627\u0644 \u06af\u0648\u0634 \u062f\u0627\u062f\u0646\u2026 \u0628\u0632\u0646 \u062a\u0627 \u062a\u0645\u0627\u0645 \u0634\u0648\u062f',
                    )
                  : fe,
              style: {
                minWidth: me ? void 0 : 230,
                width: me ? '100%' : void 0,
                maxWidth: 440,
                borderRadius: me ? 26 : 30,
                backgroundColor: '#000000',
                paddingHorizontal: 16,
                paddingVertical: me ? 14 : 11,
                gap: me ? 8 : 4,
                borderWidth: 'dark' === S ? a.default.hairlineWidth : 0,
                borderColor: y.line,
                shadowColor: '#000',
                shadowOpacity: 0.28,
                shadowRadius: 18,
                shadowOffset: { width: 0, height: 8 },
                elevation: 10,
              },
              children: [
                !me &&
                  (0, _.jsxs)(l.default, {
                    style: {
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      gap: 10,
                    },
                    children: [
                      (0, _.jsx)(l.default, {
                        style: {
                          width: 26,
                          height: 26,
                          borderRadius: 13,
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor:
                            'listening' === A ? y.danger : '#ffffff26',
                        },
                        children: (0, _.jsx)(v.Icon, {
                          name: 'mic',
                          size: 15,
                          color: ce,
                        }),
                      }),
                      (0, _.jsx)(p.Copy, {
                        numberOfLines: 1,
                        style: {
                          flex: 1,
                          color: ce,
                          fontSize: 14,
                          lineHeight: 22,
                          fontFamily: 'Vazirmatn_600SemiBold',
                        },
                        children: fe,
                      }),
                      (0, _.jsx)(F, {
                        level: 'listening' === A ? O.level : 0,
                        tick: M ? 0 : J,
                        color: y.accent,
                      }),
                    ],
                  }),
                'listening' === A &&
                  (0, _.jsx)(p.Copy, {
                    numberOfLines: 2,
                    style: {
                      color: de ? ce : ue,
                      fontSize: 13,
                      lineHeight: 21,
                      textAlign: 'right',
                    },
                    children:
                      de ||
                      (0, x.L)(
                        '\u0628\u06af\u0648\u060c \u0645\u062b\u0644\u0627\u064b: \u062f\u0648 \u062a\u0627 \u0634\u06cc\u0631 \u0648 \u06cc\u06a9 \u06a9\u06cc\u0644\u0648 \u0628\u0631\u0646\u062c',
                      ),
                  }),
                'error' === A &&
                  (0, _.jsxs)(l.default, {
                    style: {
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      gap: 10,
                    },
                    children: [
                      (0, _.jsx)(l.default, {
                        style: {
                          width: 26,
                          height: 26,
                          borderRadius: 13,
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: '#ffffff26',
                        },
                        children: (0, _.jsx)(v.Icon, {
                          name: 'alert',
                          size: 15,
                          color: ce,
                        }),
                      }),
                      (0, _.jsx)(p.Copy, {
                        style: {
                          flex: 1,
                          color: ce,
                          fontSize: 14,
                          lineHeight: 22,
                        },
                        children: Y,
                      }),
                    ],
                  }),
                'done' === A &&
                  N.map((e, t) =>
                    (0, _.jsxs)(
                      l.default,
                      {
                        style: {
                          flexDirection: 'row-reverse',
                          alignItems: 'center',
                          gap: 10,
                        },
                        children: [
                          (0, _.jsx)(l.default, {
                            style: {
                              width: 24,
                              height: 24,
                              borderRadius: 12,
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: y.success,
                            },
                            children: (0, _.jsx)(v.Icon, {
                              name: 'check',
                              size: 14,
                              color: y.onSuccess,
                            }),
                          }),
                          (0, _.jsx)(p.Copy, {
                            numberOfLines: 2,
                            style: {
                              flex: 1,
                              color: ce,
                              fontSize: 14,
                              lineHeight: 22,
                              fontFamily: 'Vazirmatn_600SemiBold',
                            },
                            children: T(e),
                          }),
                        ],
                      },
                      'ok' + t,
                    ),
                  ),
                'done' === A &&
                  B.map((t, n) =>
                    (0, _.jsxs)(
                      o.default,
                      {
                        testID: 'voice-add-miss',
                        accessibilityRole: 'button',
                        onPress: () => {
                          return (
                            (n = t.said),
                            e.request.onSearch?.(n),
                            void c()
                          );
                          var n;
                        },
                        style: ({ pressed: e }) => ({
                          flexDirection: 'row-reverse',
                          alignItems: 'center',
                          gap: 10,
                          minHeight: 40,
                          borderRadius: 14,
                          paddingHorizontal: 8,
                          backgroundColor: e ? '#ffffff33' : '#ffffff1a',
                        }),
                        children: [
                          (0, _.jsx)(v.Icon, {
                            name: 'search',
                            size: 16,
                            color: ce,
                          }),
                          (0, _.jsxs)(l.default, {
                            style: { flex: 1 },
                            children: [
                              (0, _.jsx)(p.Copy, {
                                numberOfLines: 1,
                                style: {
                                  color: ce,
                                  fontSize: 14,
                                  lineHeight: 22,
                                },
                                children:
                                  'choose' === t.kind
                                    ? (0, x.L)(
                                        '\u0686\u0646\u062f \u06a9\u0627\u0644\u0627 \u0628\u0627 \xab{name}\xbb \u0647\u0633\u062a',
                                        { name: t.said },
                                      )
                                    : (0, x.L)(
                                        '\u067e\u06cc\u062f\u0627 \u0646\u0634\u062f: {name}',
                                        { name: t.said },
                                      ),
                              }),
                              (0, _.jsx)(p.Copy, {
                                numberOfLines: 1,
                                style: {
                                  color: ue,
                                  fontSize: 12,
                                  lineHeight: 19,
                                },
                                children:
                                  'choose' === t.kind
                                    ? (0, x.L)(
                                        '\u0628\u0632\u0646 \u062a\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc',
                                      )
                                    : (0, x.L)(
                                        '\u0628\u0632\u0646 \u062a\u0627 \u062c\u0633\u062a\u200c\u0648\u062c\u0648 \u06a9\u0646\u06cc',
                                      ),
                              }),
                            ],
                          }),
                        ],
                      },
                      'miss' + n,
                    ),
                  ),
              ],
            }),
          }),
        }),
      });
    }
    const A = ['kg', 'g', 'l', 'ml', 'm', 'km'];
    function T(e) {
      const t = (0, x.localDigits)(String(e.qty)),
        n = /[\u06f0-\u06f9]/.test(t) ? t.replace('.', '\u066b') : t,
        i = e.unit || e.baseUnit;
      return e.unit || A.includes(i) || !Number.isInteger(e.qty)
        ? (0, x.L)(
            '{name} {qty} {unit} \u0627\u0636\u0627\u0641\u0647 \u0634\u062f \u2713',
            { name: e.name, qty: n, unit: (0, x.L)((0, y.unitName)(i)) },
          )
        : (0, x.L)(
            '{name} \xd7{qty} \u0627\u0636\u0627\u0641\u0647 \u0634\u062f \u2713',
            { name: e.name, qty: n },
          );
    }
    function F({ level: e, tick: t, color: n }) {
      return (0, _.jsx)(l.default, {
        style: {
          flexDirection: 'row',
          alignItems: 'center',
          gap: 3,
          height: 22,
        },
        accessibilityElementsHidden: !0,
        importantForAccessibility: 'no-hide-descendants',
        children: [0.45, 0.8, 1, 0.75, 0.5].map((i, s) => {
          const o = t ? 0.18 * Math.sin(0.9 * (t + 2 * s)) : 0,
            a = Math.max(
              4,
              Math.min(
                22,
                4 +
                  18 *
                    (Math.min(1, 1.6 * e) +
                      Math.max(0, o) * (e > 0.02 ? 1 : 0.3)) *
                    i,
              ),
            );
          return (0, _.jsx)(
            l.default,
            {
              style: {
                width: 3,
                height: a,
                borderRadius: 2,
                backgroundColor: e > 0.02 ? n : '#ffffff59',
              },
            },
            s,
          );
        }),
      });
    }
  },
  584,
  [
    2, 92, 203, 196, 94, 232, 17, 99, 515, 342, 382, 414, 385, 407, 585, 311,
    586, 587, 549, 588, 590, 591, 592, 415, 595, 596, 338,
  ],
);
