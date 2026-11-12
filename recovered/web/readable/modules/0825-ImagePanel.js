// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 825; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.ImagePanel = function ({
        products: e,
        draftKey: w,
        aiAllowance: I,
        onDirtyChange: R,
        onConfirm: P,
        onClose: T,
        initialPhoto: v,
      }) {
        const { colors: k } = (0, x.useTheme)(),
          [z, A] = (0, t.useState)(''),
          [_, H] = (0, t.useState)(null),
          [W, E] = (0, t.useState)(null),
          [V, M] = (0, t.useState)(!!v),
          [B, F] = (0, t.useState)(''),
          K = (0, t.useRef)(null),
          q = (0, t.useRef)(!0),
          O = (0, t.useRef)(0);
        async function G(e) {
          const t = ++O.current;
          (M(!0), F(''));
          try {
            const o = await e;
            if (!q.current || t !== O.current) return;
            if ((M(!1), !o)) return;
            (E(null), H(o), A(''), R?.(!0));
          } catch (e) {
            q.current && t === O.current && (F((0, y.errorText)(e)), M(!1));
          }
        }
        async function J(t, o = ++O.current) {
          (M(!0), F(''), K.current?.abort());
          const n = new AbortController();
          K.current = n;
          const l = setTimeout(() => n.abort(), 24e4);
          try {
            await (0, f.checkVoice)(n.signal);
            const l = await (0, f.apiRequest)(
              '/api/image',
              {
                image: t.image,
                mimeType: t.mimeType,
                ...(z.trim() ? { caption: z.trim().slice(0, 300) } : {}),
                products: e.map((e) => e.name).slice(0, 200),
              },
              n.signal,
            );
            if (q.current && o === O.current) {
              const e = (0, p.validateVoiceResult)(l);
              (E(e),
                (0, L.patchDrafts)(w, { image: { photo: t.uri, result: e } }));
            }
          } catch (e) {
            q.current &&
              o === O.current &&
              F(
                n.signal.aborted
                  ? C.fa.voiceErrors.timeout
                  : (0, y.errorText)(e),
              );
          } finally {
            (clearTimeout(l), q.current && o === O.current && M(!1));
          }
        }
        return (
          (0, t.useEffect)(
            () => (
              (q.current = !0),
              (0, L.loadDrafts)(w).then((e) => {
                q.current &&
                  e.image?.result &&
                  (E(e.image.result),
                  e.image.photo &&
                    H({
                      uri: e.image.photo,
                      image: '',
                      mimeType: 'image/jpeg',
                    }),
                  R?.(!0));
              }),
              v && G(v),
              () => {
                ((q.current = !1), O.current++, K.current?.abort());
              }
            ),
            [],
          ),
          (0, D.jsxs)(u.KeyboardScrollView, {
            keyboardShouldPersistTaps: 'handled',
            contentContainerStyle: b.common.gap,
            children: [
              (0, D.jsx)(b.Copy, {
                style: b.common.title,
                children: C.fa.photoTitle,
              }),
              !_ &&
                !V &&
                (0, D.jsx)(b.Copy, {
                  style: { fontSize: 13, color: k.muted },
                  children: C.fa.photoChoiceHint,
                }),
              _ &&
                (0, D.jsx)(c.default, {
                  style: {
                    borderRadius: 20,
                    overflow: 'hidden',
                    backgroundColor: k.soft,
                    borderWidth: l.default.hairlineWidth,
                    borderColor: k.line,
                  },
                  children: (0, D.jsx)(n.default, {
                    testID: 'photo-preview',
                    source: { uri: _.uri },
                    style: { height: W ? 140 : 240 },
                    resizeMode: 'contain',
                  }),
                }),
              V &&
                (0, D.jsxs)(c.default, {
                  style: { padding: 24, gap: 12, alignItems: 'center' },
                  children: [
                    (0, D.jsx)(o.default, { color: k.text }),
                    (0, D.jsx)(b.Copy, {
                      children: _
                        ? C.fa.photoProcessing
                        : (0, S.L)(
                            '\u062f\u0631 \u062d\u0627\u0644 \u0628\u0627\u0632 \u06a9\u0631\u062f\u0646 \u0639\u06a9\u0633\u2026',
                          ),
                    }),
                  ],
                }),
              !!B &&
                (0, D.jsx)(b.Copy, {
                  accessibilityRole: 'alert',
                  style: { color: k.danger },
                  children: B,
                }),
              _ &&
                !!_.image &&
                !W &&
                !V &&
                (0, D.jsxs)(c.default, {
                  testID: 'photo-ready',
                  style: { gap: 10 },
                  children: [
                    (0, D.jsx)(b.Input, {
                      testID: 'photo-caption',
                      accessibilityLabel: (0, S.L)(
                        '\u062a\u0648\u0636\u06cc\u062d \u06a9\u0648\u062a\u0627\u0647 \u0628\u0631\u0627\u06cc \u0639\u06a9\u0633',
                      ),
                      placeholder: (0, S.L)(
                        '\u062a\u0648\u0636\u06cc\u062d \u06a9\u0648\u062a\u0627\u0647\u060c \u0627\u062e\u062a\u06cc\u0627\u0631\u06cc: \u0645\u062b\u0644\u0627\u064b \xab\u06f1\u06f2 \u062a\u0627 \u0631\u0633\u06cc\u062f\xbb \u06cc\u0627 \xab\u06f3 \u062a\u0627 \u0641\u0631\u0648\u062e\u062a\u0645\xbb',
                      ),
                      value: z,
                      maxLength: 300,
                      onChangeText: A,
                    }),
                    (0, D.jsx)(b.Copy, {
                      style: { fontSize: 12, lineHeight: 21, color: k.muted },
                      children: z.trim()
                        ? (0, S.L)(
                            '\u062a\u0639\u062f\u0627\u062f \u0648 \u0648\u0631\u0648\u062f \u06cc\u0627 \u0641\u0631\u0648\u0634 \u0627\u0632 \u062a\u0648\u0636\u06cc\u062d \u062a\u0648 \u062e\u0648\u0627\u0646\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f\u061b \u0646\u0627\u0645 \u06a9\u0627\u0644\u0627 \u0627\u0632 \u0639\u06a9\u0633.',
                          )
                        : (0, S.L)(
                            '\u0628\u062f\u0648\u0646 \u062a\u0648\u0636\u06cc\u062d\u060c \u0641\u0627\u06a9\u062a\u0648\u0631 \u06cc\u0627 \u0628\u0631\u0686\u0633\u0628 \u06a9\u0627\u0644\u0627 \u062e\u0648\u0627\u0646\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f \u0648 \u062a\u0639\u062f\u0627\u062f \u0631\u0627 \u0627\u0632 \u062a\u0648 \u0645\u06cc\u200c\u067e\u0631\u0633\u062f.',
                          ),
                    }),
                    (0, D.jsxs)(c.default, {
                      style: b.common.row,
                      children: [
                        (0, D.jsxs)(s.default, {
                          testID: 'photo-send',
                          accessibilityRole: 'button',
                          onPress: () => {
                            J(_);
                          },
                          style: ({ pressed: e }) => ({
                            flex: 1.4,
                            flexDirection: 'row-reverse',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 8,
                            minHeight: 52,
                            borderRadius: 16,
                            backgroundColor: k.success,
                            opacity: e ? 0.85 : 1,
                          }),
                          children: [
                            (0, D.jsx)(j.Icon, {
                              name: 'send',
                              size: 18,
                              color: k.onSuccess,
                            }),
                            (0, D.jsx)(b.Copy, {
                              style: {
                                color: k.onSuccess,
                                fontFamily: 'Vazirmatn_700Bold',
                              },
                              children: (0, S.L)(
                                '\u0627\u0631\u0633\u0627\u0644 \u0628\u0631\u0627\u06cc \u0628\u0631\u0631\u0633\u06cc',
                              ),
                            }),
                          ],
                        }),
                        (0, D.jsx)(s.default, {
                          testID: 'photo-again',
                          accessibilityRole: 'button',
                          onPress: () => {
                            (H(null), A(''), F(''), R?.(!1));
                          },
                          style: ({ pressed: e }) => ({
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: 52,
                            borderRadius: 16,
                            backgroundColor: k.soft,
                            borderWidth: l.default.hairlineWidth,
                            borderColor: k.line,
                            opacity: e ? 0.85 : 1,
                          }),
                          children: (0, D.jsx)(b.Copy, {
                            children: (0, S.L)(
                              '\u0639\u06a9\u0633 \u062f\u06cc\u06af\u0631',
                            ),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              W &&
                (0, D.jsx)(y.DraftReview, {
                  products: e,
                  result: W,
                  onDirtyChange: R,
                  onChange: (e) => {
                    (0, L.patchDrafts)(w, {
                      image: { photo: _?.uri, result: e },
                    });
                  },
                  onConfirm: async (e) => {
                    (await P(e),
                      E(null),
                      H(null),
                      A(''),
                      R?.(!1),
                      (0, L.clearDraftPart)(w, 'image'));
                  },
                }),
              !V &&
                (!_ || !!W) &&
                (0, D.jsx)(c.default, {
                  style: b.common.row,
                  children: [
                    {
                      camera: !0,
                      label: C.fa.takePhoto,
                      icon: 'camera',
                      id: 'photo-camera',
                    },
                    {
                      camera: !1,
                      label: C.fa.choosePhoto,
                      icon: 'photo',
                      id: 'photo-gallery',
                    },
                  ].map((e) =>
                    (0, D.jsxs)(
                      s.default,
                      {
                        testID: e.id,
                        accessibilityRole: 'button',
                        accessibilityLabel: e.label,
                        onPress: () => {
                          G((0, h.pickPhoto)(e.camera));
                        },
                        style: ({ pressed: t }) => ({
                          flex: 1,
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 12,
                          minHeight: 120,
                          borderRadius: 16,
                          backgroundColor: e.camera
                            ? t
                              ? k.accentActive
                              : k.accent
                            : k.soft,
                          borderWidth: l.default.hairlineWidth,
                          borderColor: e.camera ? k.accent : k.line,
                          opacity: t && !e.camera ? 0.85 : 1,
                        }),
                        children: [
                          (0, D.jsx)(j.Icon, {
                            name: e.icon,
                            size: 32,
                            color: e.camera ? k.onAccent : k.text,
                          }),
                          (0, D.jsx)(b.Copy, {
                            style: { color: e.camera ? k.onAccent : k.text },
                            children: e.label,
                          }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                }),
              !V &&
                !_ &&
                (0, D.jsxs)(c.default, {
                  style: {
                    gap: 6,
                    padding: 14,
                    borderRadius: 16,
                    backgroundColor: k.soft,
                  },
                  children: [
                    (0, D.jsx)(b.Copy, {
                      style: {
                        fontSize: 12,
                        fontFamily: 'Vazirmatn_600SemiBold',
                      },
                      children: (0, S.L)(
                        '\u0628\u0631\u0627\u06cc \u0646\u062a\u06cc\u062c\u0647 \u0628\u0647\u062a\u0631',
                      ),
                    }),
                    [
                      (0, S.L)(
                        '\u0641\u0627\u06a9\u062a\u0648\u0631: \u06a9\u0644 \u0628\u0631\u06af\u0647 \u062f\u0631 \u06a9\u0627\u062f\u0631 \u0628\u0627\u0634\u062f \u0648 \u0646\u0648\u0631 \u06a9\u0627\u0641\u06cc \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f.',
                      ),
                      (0, S.L)(
                        '\u06a9\u0627\u0644\u0627: \u0628\u0631\u0686\u0633\u0628 \u0648 \u0646\u0627\u0645 \u06a9\u0627\u0644\u0627 \u0648\u0627\u0636\u062d \u062f\u06cc\u062f\u0647 \u0634\u0648\u062f.',
                      ),
                      (0, S.L)(
                        '\u0686\u0646\u062f \u06a9\u0627\u0644\u0627 \u0628\u0627 \u0647\u0645\u061f \u0627\u0632 \xab\u0686\u062a\xbb \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u061b \u0641\u0642\u0637 \u06f1 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u062d\u0633\u0627\u0628 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                      ),
                    ].map((e) =>
                      (0, D.jsxs)(
                        b.Copy,
                        {
                          style: {
                            fontSize: 12,
                            lineHeight: 21,
                            color: k.muted,
                          },
                          children: ['\u2022 ', e],
                        },
                        e,
                      ),
                    ),
                  ],
                }),
              I &&
                (0, D.jsxs)(b.Copy, {
                  style: [b.common.small, { color: k.muted }],
                  children: [
                    0 === I.limit
                      ? C.fa.notInPlan
                      : C.fa.aiAllowance
                          .replace(
                            '{remaining}',
                            Math.max(0, I.limit - I.used).toLocaleString(
                              (0, S.numberLocale)(),
                            ),
                          )
                          .replace(
                            '{limit}',
                            I.limit.toLocaleString((0, S.numberLocale)()),
                          ),
                    I.trialEndsAt
                      ? '\u060c ' +
                        C.fa.trialEnds.replace(
                          '{date}',
                          new Date(I.trialEndsAt).toLocaleDateString(
                            (0, S.dateLocale)(),
                          ),
                        )
                      : '',
                  ],
                }),
            ],
          })
        );
      }));
    var t = r(d[0]),
      o = e(r(d[1])),
      n = e(r(d[2])),
      l = e(r(d[3])),
      c = e(r(d[4])),
      s = e(r(d[5])),
      u = r(d[6]),
      h = r(d[7]),
      f = r(d[8]),
      p = r(d[9]),
      y = r(d[10]),
      b = r(d[11]),
      x = r(d[12]),
      j = r(d[13]),
      C = r(d[14]),
      L = r(d[15]),
      S = r(d[16]),
      D = r(d[17]);
  },
  825,
  [
    2, 217, 168, 17, 99, 232, 480, 634, 592, 465, 690, 407, 382, 385, 492, 707,
    311, 338,
  ],
);
