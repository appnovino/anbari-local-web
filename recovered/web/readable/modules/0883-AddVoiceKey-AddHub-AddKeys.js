// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 883; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.AddVoiceKey = I),
      (_e.AddHub = function ({
        canAI: e,
        allowance: l,
        onBlocked: y,
        onVoice: b,
        onPhoto: A,
        voiceActive: v = !1,
        voice: k,
        voiceElsewhere: w = !1,
        children: C,
      }) {
        const { colors: P } = (0, t.useTheme)();
        return (0, p.jsxs)(c.default, {
          style: { gap: 14, alignItems: 'stretch' },
          children: [
            v && k
              ? k
              : e &&
                (!w || o.AI_PHOTOS) &&
                (0, p.jsxs)(c.default, {
                  style: { gap: 10, alignItems: 'center' },
                  children: [
                    !w &&
                      (0, p.jsx)(I, { allowance: l, onBlocked: y, onVoice: b }),
                    o.AI_PHOTOS &&
                      (0, p.jsx)(j.TrialAiGate, {
                        allowance: l,
                        onBlocked: y,
                        children: (0, p.jsxs)(s.default, {
                          testID: 'add-photo',
                          accessibilityRole: 'button',
                          accessibilityLabel: (0, x.L)(
                            '\u06af\u0631\u0641\u062a\u0646 \u0639\u06a9\u0633',
                          ),
                          onPress: A,
                          style: ({ pressed: e }) => ({
                            minHeight: 44,
                            paddingHorizontal: 16,
                            borderRadius: 22,
                            borderWidth: n.default.hairlineWidth,
                            borderColor: P.line,
                            backgroundColor: P.soft,
                            flexDirection: 'row-reverse',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 8,
                            opacity: e ? 0.85 : 1,
                          }),
                          children: [
                            (0, p.jsx)(u.Icon, {
                              name: 'camera',
                              size: 18,
                              color: P.text,
                            }),
                            (0, p.jsx)(h.Copy, {
                              style: {
                                fontSize: 13,
                                fontFamily: 'Vazirmatn_600SemiBold',
                              },
                              children: (0, x.L)(
                                '\u06af\u0631\u0641\u062a\u0646 \u0639\u06a9\u0633',
                              ),
                            }),
                          ],
                        }),
                      }),
                  ],
                }),
            (0, p.jsx)(f.StepAside, {
              hidden: v,
              testID: 'add-controls-aside',
              children: (0, p.jsx)(c.default, {
                style: { width: '100%' },
                children: C,
              }),
            }),
          ],
        });
      }),
      (_e.AddKeys = function ({ desktop: e, voice: l, children: o }) {
        const { colors: s } = (0, t.useTheme)(),
          [n, h, u] = Array.isArray(o) ? o : [o];
        return e
          ? (0, p.jsx)(b.AddTileContext.Provider, {
              value: b.ADD_TILE,
              children: (0, p.jsxs)(c.default, {
                testID: 'add-keys',
                style: { gap: 12 },
                children: [
                  !!l &&
                    (0, p.jsx)(c.default, {
                      testID: 'add-voice-card',
                      style: {
                        minHeight: 190,
                        borderRadius: 22,
                        borderWidth: 1,
                        borderColor: s.line,
                        backgroundColor: s.surface,
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 12,
                      },
                      children: l,
                    }),
                  (0, p.jsxs)(c.default, {
                    style: {
                      flexDirection: 'row-reverse',
                      gap: 12,
                      alignItems: 'stretch',
                    },
                    children: [n, h],
                  }),
                  u,
                ],
              }),
            })
          : (0, p.jsx)(c.default, { style: { gap: 10 }, children: o });
      }));
    var t = r(d[0]),
      l = r(d[1]),
      o = r(d[2]);
    r(d[3]);
    var s = e(r(d[4])),
      n = e(r(d[5])),
      c = e(r(d[6])),
      h = r(d[7]),
      u = r(d[8]),
      y = r(d[9]),
      f = r(d[10]),
      j = r(d[11]),
      x = r(d[12]),
      b = r(d[13]),
      p = r(d[14]);
    function I({ allowance: e, onBlocked: o, onVoice: n }) {
      const { colors: f, mode: b } = (0, t.useTheme)(),
        I = (0, y.glassStyle)(b, 'web');
      return (0, p.jsx)(j.TrialAiGate, {
        allowance: e,
        onBlocked: o,
        children: (0, p.jsx)(c.default, {
          style: { alignItems: 'center' },
          children: (0, p.jsx)(l.Spark, {
            radius: 71,
            width: 3,
            tone: 'teal',
            active: 'light' === b,
            children: (0, p.jsxs)(s.default, {
              testID: 'add-voice',
              accessibilityRole: 'button',
              accessibilityLabel: (0, x.L)('\u0628\u0627 \u0635\u062f\u0627'),
              onPress: n,
              style: ({ pressed: e }) => [
                I,
                {
                  width: 142,
                  height: 142,
                  borderRadius: 71,
                  borderWidth: 7,
                  borderColor: f.glassHighlight,
                  backgroundColor: t.PEARL.stops[1],
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 7,
                  opacity: e ? 0.88 : 1,
                  transform: [{ scale: e ? 0.96 : 1 }],
                },
                (0, l.pearlShadow)(),
              ],
              children: [
                (0, p.jsx)(l.PearlFill, { radius: 64 }),
                (0, p.jsx)(c.default, {
                  children: (0, p.jsx)(u.Icon, {
                    name: 'mic',
                    size: 42,
                    color: t.PEARL.ink,
                  }),
                }),
                (0, p.jsx)(h.Copy, {
                  style: {
                    color: t.PEARL.ink,
                    fontFamily: 'Vazirmatn_700Bold',
                  },
                  children: (0, x.L)('\u0628\u0627 \u0635\u062f\u0627'),
                }),
              ],
            }),
          }),
        }),
      });
    }
  },
  883,
  [382, 410, 494, 94, 232, 17, 99, 407, 385, 541, 884, 697, 311, 885, 338],
);
