// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 706; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a, _m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.BatchPanel = function ({
        products: e,
        draftKey: T,
        aiAllowance: A,
        onDirtyChange: E,
        onConfirm: V,
        onCreateVariants: W,
        canCreateVariants: M = !0,
        onSupport: _,
        onClose: F,
      }) {
        const { colors: K } = (0, C.useTheme)(),
          O = (0, S.useDesktop)(),
          N = (0, h.useSafeAreaInsets)(),
          q = (0, f.useKeyboardVisible)(),
          [U, G] = (0, a.useState)([]),
          [Y, J] = (0, a.useState)(''),
          [Q, X] = (0, a.useState)(),
          [Z, $] = (0, a.useState)(!1),
          [ee, te] = (0, a.useState)(!1),
          [ae, oe] = (0, a.useState)(!1),
          [ne, re] = (0, a.useState)(null),
          [ie, se] = (0, a.useState)(''),
          [le, ce] = (0, a.useState)(null),
          [de, ue] = (0, a.useState)(!1),
          [he, fe] = (0, a.useState)(!1),
          [be, ye] = (0, a.useState)([]),
          [me, ge] = (0, a.useState)(0),
          [pe, xe] = (0, a.useState)(''),
          je = (0, a.useRef)(null),
          Ce = (0, a.useRef)(!0),
          Se = (0, a.useRef)(!1),
          Ie = (0, a.useRef)(!1),
          ve = (0, a.useRef)(!1),
          Re = (0, a.useRef)(e);
        Re.current = e;
        const ze = (0, a.useRef)(null),
          we = (0, a.useRef)(null),
          De = (0, a.useRef)(0),
          ke = (0, a.useRef)(!1),
          Pe = !!Y.trim() || !!Q,
          [He, Le] = (0, a.useState)(44);
        async function Be(e) {
          if (!ve.current && !Se.current) {
            ((ve.current = !0), te(!0), oe(!1), se(''));
            try {
              const t = await (0, b.pickCatalogPhoto)(e);
              t && Ce.current && X(t);
            } catch (e) {
              Ce.current && se((0, p.errorText)(e));
            } finally {
              ((ve.current = !1), Ce.current && te(!1));
            }
          }
        }
        function Te() {
          if (!Pe) return ne ? (se(I.fa.batchEmpty), null) : U;
          if (!ne && U.length >= 10) return (se(I.fa.batchLimit), null);
          const e = {
            id: ne || 'batch-' + (0, w.randomUUID)(),
            text: Y.trim(),
            photo: Q,
          };
          return ne ? U.map((t) => (t.id === ne ? e : t)) : [...U, e];
        }
        function Ae() {
          (J(''), Le(44), X(void 0), re(null), oe(!1));
        }
        function Ee() {
          if (Se.current || ve.current) return;
          if (!Pe) return void se(I.fa.batchEmpty);
          const e = Te();
          e && (G(e), Ae(), se(''), we.current?.focus());
        }
        function Ve(e) {
          if (Se.current || ve.current) return;
          if (ne === e.id) return void we.current?.focus();
          const t = Te();
          t &&
            (G(t),
            J(e.text),
            X(e.photo),
            re(e.id),
            se(''),
            we.current?.focus());
        }
        async function We() {
          if (Se.current || ve.current) return;
          const t = Te();
          if (!t || !t.length) return;
          ((Se.current = !0),
            (Ie.current = !1),
            (ke.current = !1),
            G(t),
            Ae(),
            $(!0),
            se(''));
          const a = ++De.current,
            o = new AbortController();
          je.current = o;
          const n = setTimeout(() => o.abort(), 24e4);
          try {
            const n = await (0, y.apiRequest)(
                '/api/batch',
                {
                  products: e.map((e) => e.name).slice(0, 200),
                  messages: t.map((e) => ({
                    text: e.text,
                    ...(e.photo
                      ? { image: e.photo.split(',')[1], mimeType: 'image/jpeg' }
                      : {}),
                  })),
                },
                o.signal,
              ),
              i = (0, m.validateVoiceResult)(n),
              s = (0, H.groupBatchVariants)(
                i.actions.map((e) => ({
                  ...e,
                  ...(void 0 !== e.imageIndex &&
                  null !== e.imageIndex &&
                  t[e.imageIndex]?.photo
                    ? { photo: t[e.imageIndex].photo }
                    : {}),
                })),
                e,
                { canCreate: M },
              );
            Ce.current &&
              a === De.current &&
              (ye(s.models), ge((e) => e + 1), ce({ ...i, actions: s.rest }));
          } catch (e) {
            Ce.current && a === De.current && se((0, p.errorText)(e));
          } finally {
            (clearTimeout(n),
              a === De.current &&
                ((Se.current = !1), (je.current = null), Ce.current && $(!1)));
          }
        }
        function Me(t) {
          if (!le || Ie.current) return;
          let a;
          try {
            a = (0, H.splitModel)(t, e);
          } catch {
            return;
          }
          (ce({ ...le, actions: [...le.actions, ...a] }),
            ye((e) => e.filter((e) => e.key !== t.key)),
            ge((e) => e + 1),
            E?.(!0));
        }
        function Fe() {
          (ue(!1),
            (async () => {
              try {
                await z.default.setItem('anbari.batch-tutorial-seen', 'true');
              } catch {}
            })());
        }
        ((0, a.useEffect)(
          () => (
            (Ce.current = !0),
            Promise.all([
              (0, v.loadDrafts)(T),
              (async () => {
                try {
                  return await z.default.getItem('anbari.batch-tutorial-seen');
                } catch {
                  return null;
                }
              })(),
            ]).then(([e, t]) => {
              if (!Ce.current) return;
              const a = e.batch,
                o = a?.messages || [],
                n =
                  a?.editing && o.some((e) => e.id === a.editing)
                    ? a.editing
                    : null;
              (G(o),
                J(a?.text || ''),
                X(a?.photo),
                re(n || null),
                ce(a?.result || null),
                ye(a?.result && Array.isArray(a.models) ? a.models : []),
                E?.(!!o.length),
                ue(!t),
                fe(!0));
            }),
            () => {
              ((Ce.current = !1), De.current++, je.current?.abort());
            }
          ),
          [],
        ),
          (0, a.useEffect)(() => {
            he &&
              !Ie.current &&
              ((0, v.patchDrafts)(T, {
                batch: {
                  messages: U,
                  text: Y,
                  photo: Q,
                  editing: ne,
                  result: le || void 0,
                  ...(le && be.length ? { models: be } : {}),
                },
              }),
              E?.(!!U.length));
          }, [U, Y, Q, ne, le, be, he]));
        const Ke = {
            width: 44,
            height: 44,
            borderRadius: 12,
            borderWidth: i.default.hairlineWidth,
            borderColor: K.line,
            backgroundColor: K.soft,
            alignItems: 'center',
            justifyContent: 'center',
          },
          Oe = { width: 36, height: 36, borderRadius: 10 };
        return (0, L.jsxs)(l.default, {
          testID: 'batch-chat-page',
          style: [
            B.page,
            {
              backgroundColor: K.bg,
              paddingTop: N.top,
              paddingBottom: q ? 10 : Math.max(N.bottom, 10),
            },
          ],
          children: [
            (0, L.jsxs)(l.default, {
              style: [
                B.header,
                { borderColor: K.line, paddingHorizontal: O ? 35 : 16 },
              ],
              children: [
                (0, L.jsxs)(l.default, {
                  style: [x.common.row, { flex: 1 }],
                  children: [
                    (0, L.jsx)(c.default, {
                      testID: 'batch-back',
                      accessibilityRole: 'button',
                      accessibilityLabel: I.fa.batchBack,
                      onPress: F,
                      style: Ke,
                      children: (0, L.jsx)(l.default, {
                        style: { transform: [{ rotate: '180deg' }] },
                        children: (0, L.jsx)(j.Icon, {
                          name: 'arrow',
                          color: K.text,
                          size: 23,
                        }),
                      }),
                    }),
                    (0, L.jsxs)(l.default, {
                      style: { flex: 1, gap: 2 },
                      children: [
                        (0, L.jsxs)(l.default, {
                          style: [x.common.row, { gap: 8 }],
                          children: [
                            (0, L.jsx)(x.Copy, {
                              style: {
                                fontSize: 16,
                                lineHeight: 26,
                                fontFamily: 'Vazirmatn_600SemiBold',
                              },
                              children: I.fa.batchShort,
                            }),
                            A
                              ? (0, L.jsx)(l.default, {
                                  style: {
                                    borderRadius: 99,
                                    paddingHorizontal: 10,
                                    paddingVertical: 2,
                                    backgroundColor: K.soft,
                                  },
                                  children: (0, L.jsx)(x.Copy, {
                                    testID: 'batch-allowance',
                                    style: {
                                      fontSize: 11,
                                      lineHeight: 18,
                                      color: K.muted,
                                    },
                                    children: I.fa.batchAllowance
                                      .replace(
                                        '{remaining}',
                                        Math.max(
                                          0,
                                          A.limit - A.used,
                                        ).toLocaleString((0, D.numberLocale)()),
                                      )
                                      .replace(
                                        '{limit}',
                                        A.limit.toLocaleString(
                                          (0, D.numberLocale)(),
                                        ),
                                      ),
                                  }),
                                })
                              : null,
                          ],
                        }),
                        (0, L.jsx)(x.Copy, {
                          style: {
                            fontSize: 11,
                            lineHeight: 18,
                            color: K.muted,
                          },
                          children: I.fa.batchOneRequest,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, L.jsx)(c.default, {
                  testID: 'batch-help',
                  accessibilityRole: 'button',
                  accessibilityLabel: I.fa.batchHelp,
                  onPress: () => ue(!0),
                  style: Ke,
                  children: (0, L.jsx)(x.Copy, {
                    style: { fontSize: 17 },
                    children: (0, D.L)('\u061f'),
                  }),
                }),
              ],
            }),
            (0, L.jsxs)(u.ScrollView, {
              ref: ze,
              testID: 'batch-conversation',
              keyboardShouldPersistTaps: 'handled',
              keyboardDismissMode: 'on-drag',
              style: { flex: 1 },
              contentContainerStyle: [
                B.conversation,
                { paddingHorizontal: O ? 28 : 18 },
                !U.length && !le && { flexGrow: 1, justifyContent: 'center' },
              ],
              onContentSizeChange: () => {
                le || ze.current?.scrollToEnd({ animated: !1 });
              },
              children: [
                !U.length &&
                  !le &&
                  (0, L.jsxs)(l.default, {
                    style: B.empty,
                    children: [
                      (0, L.jsx)(x.Copy, {
                        style: {
                          fontSize: O ? 32 : 25,
                          lineHeight: O ? 50 : 40,
                          fontFamily: 'Vazirmatn_600SemiBold',
                          textAlign: 'center',
                        },
                        children: I.fa.batchWelcome,
                      }),
                      (0, L.jsxs)(c.default, {
                        testID: 'batch-video',
                        accessibilityRole: 'button',
                        onPress: () => ue(!0),
                        style: ({ pressed: e }) => [
                          B.videoKey,
                          {
                            borderColor: K.line,
                            backgroundColor: K.soft,
                            opacity: e ? 0.85 : 1,
                          },
                        ],
                        children: [
                          (0, L.jsx)(j.Icon, {
                            name: 'play',
                            size: 16,
                            color: K.accent,
                          }),
                          (0, L.jsx)(x.Copy, {
                            style: { fontSize: 13 },
                            children: (0, D.L)(
                              '\u0648\u06cc\u062f\u06cc\u0648 \u0622\u0645\u0648\u0632\u0634\u06cc',
                            ),
                          }),
                        ],
                      }),
                      (0, L.jsx)(x.Copy, {
                        testID: 'batch-empty-hint',
                        style: {
                          fontSize: 13,
                          lineHeight: 24,
                          color: K.muted,
                          textAlign: 'center',
                          maxWidth: 340,
                        },
                        children: I.fa.batchEmptyHint,
                      }),
                    ],
                  }),
                !!U.length &&
                  (Z || !!le) &&
                  (0, L.jsx)(x.Copy, {
                    style: [B.status, { color: K.muted }],
                    children: I.fa.batchSubmitted,
                  }),
                U.map((e, t) =>
                  (0, L.jsxs)(
                    l.default,
                    {
                      testID: 'batch-message',
                      style: {
                        alignItems: 'flex-end',
                        gap: 5,
                        marginBottom: 17,
                      },
                      children: [
                        (0, L.jsxs)(l.default, {
                          style: [
                            B.bubble,
                            {
                              backgroundColor: K.soft,
                              borderColor: ne === e.id ? K.accent : K.line,
                              maxWidth: O ? '82%' : '94%',
                            },
                          ],
                          children: [
                            e.photo &&
                              (0, L.jsx)(n.default, {
                                accessibilityLabel: I.fa.batchPhotoAlt,
                                source: { uri: e.photo },
                                style: {
                                  width: O ? 280 : 210,
                                  maxWidth: '100%',
                                  height: 180,
                                  borderRadius: 13,
                                  alignSelf: 'flex-end',
                                },
                                resizeMode: 'contain',
                              }),
                            !!e.text &&
                              (0, L.jsx)(x.Copy, {
                                style: { fontSize: 14, lineHeight: 27 },
                                children: e.text,
                              }),
                          ],
                        }),
                        (0, L.jsxs)(l.default, {
                          style: [x.common.row, { gap: 4 }],
                          children: [
                            (0, L.jsxs)(x.Copy, {
                              style: {
                                fontSize: 10,
                                color: K.muted,
                                paddingHorizontal: 5,
                              },
                              children: [
                                I.fa.batchYou,
                                '\u060c ',
                                (t + 1).toLocaleString((0, D.numberLocale)()),
                              ],
                            }),
                            !le &&
                              (0, L.jsxs)(L.Fragment, {
                                children: [
                                  (0, L.jsx)(c.default, {
                                    testID: 'batch-edit-' + t,
                                    accessibilityRole: 'button',
                                    accessibilityLabel:
                                      I.fa.batchEdit + ' ' + (t + 1),
                                    disabled: Z || ee,
                                    onPress: () => Ve(e),
                                    style: [Ke, Oe, { opacity: Z ? 0.35 : 1 }],
                                    children: (0, L.jsx)(j.Icon, {
                                      name: 'edit',
                                      color: K.muted,
                                      size: 17,
                                    }),
                                  }),
                                  (0, L.jsx)(c.default, {
                                    testID: 'batch-remove-' + t,
                                    accessibilityRole: 'button',
                                    accessibilityLabel:
                                      I.fa.batchRemove + ' ' + (t + 1),
                                    disabled: Z || ee,
                                    onPress: () => {
                                      (G((t) => t.filter((t) => t.id !== e.id)),
                                        ne === e.id && Ae(),
                                        se(''));
                                    },
                                    style: [Ke, Oe, { opacity: Z ? 0.35 : 1 }],
                                    children: (0, L.jsx)(j.Icon, {
                                      name: 'close',
                                      color: K.muted,
                                      size: 17,
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
                Z &&
                  (0, L.jsxs)(l.default, {
                    testID: 'batch-processing',
                    accessibilityLiveRegion: 'polite',
                    style: [
                      x.common.row,
                      { justifyContent: 'flex-start', paddingVertical: 16 },
                    ],
                    children: [
                      (0, L.jsx)(o.default, { color: K.text }),
                      (0, L.jsx)(x.Copy, {
                        style: { fontSize: 13, color: K.muted, flex: 1 },
                        children: I.fa.batchProcessing,
                      }),
                    ],
                  }),
                le &&
                  (0, L.jsxs)(l.default, {
                    testID: 'batch-review',
                    onLayout: (e) => {
                      ke.current ||
                        ((ke.current = !0),
                        ze.current?.scrollTo({
                          y: e.nativeEvent.layout.y,
                          animated: !1,
                        }));
                    },
                    style: { gap: 20, paddingVertical: 15 },
                    children: [
                      (0, L.jsxs)(l.default, {
                        style: x.common.row,
                        children: [
                          (0, L.jsx)(l.default, {
                            style: {
                              padding: 8,
                              backgroundColor: K.soft,
                              borderRadius: 12,
                            },
                            children: (0, L.jsx)(j.Icon, {
                              name: 'chat',
                              color: K.text,
                            }),
                          }),
                          (0, L.jsx)(x.Copy, {
                            style: { fontFamily: 'Vazirmatn_600SemiBold' },
                            children: I.fa.batchReviewReady,
                          }),
                        ],
                      }),
                      (0, L.jsx)(
                        p.DraftReview,
                        {
                          products: e,
                          result: le,
                          saveError: pe,
                          extra: be.length
                            ? be.map((t, a) => {
                                return (0, L.jsx)(
                                  P.BatchModelCard,
                                  {
                                    model: t,
                                    index: a,
                                    canSplit:
                                      ((o = (0, H.filledBoxes)(t)),
                                      o > 0 && le.actions.length + o <= 20),
                                    onCounts: (e) => {
                                      (ye((a) =>
                                        a.map((a) =>
                                          a.key === t.key
                                            ? { ...a, counts: e }
                                            : a,
                                        ),
                                      ),
                                        E?.(!0));
                                    },
                                    onSplit: () => Me(t),
                                    onRename: (a) => {
                                      (ye((o) =>
                                        (0, H.renameBatchModel)(o, t.key, a, e),
                                      ),
                                        E?.(!0));
                                    },
                                  },
                                  t.key,
                                );
                                var o;
                              })
                            : void 0,
                          extraReady: be.some((e) => (0, H.modelTotal)(e) > 0),
                          onDirtyChange: E,
                          onChange: ce,
                          onConfirm: async function (t) {
                            if (Ie.current) return;
                            ((Ie.current = !0), xe(''));
                            let a = null;
                            try {
                              be.forEach((t) => (0, H.modelDrafts)(t, e));
                              let o = be;
                              const n = (e) => {
                                  ((o = e),
                                    Ce.current && ye(e),
                                    (0, v.patchDrafts)(T, {
                                      batch: {
                                        messages: U,
                                        text: Y,
                                        photo: Q,
                                        editing: ne,
                                        result: le || void 0,
                                        models: e,
                                      },
                                    }));
                                },
                                i = t.length
                                  ? -1
                                  : be
                                      .map((e) => (0, H.filledBoxes)(e) > 0)
                                      .lastIndexOf(!0);
                              for (const [e, t] of be.entries()) {
                                const { catalog: a, created: s } = await (0,
                                H.cardCatalog)(
                                  o.find((e) => e.key === t.key) || t,
                                  Re.current,
                                  W,
                                );
                                s &&
                                  n(
                                    (0, H.afterSaved)(o, t.key, {
                                      created: !0,
                                    }),
                                  );
                                const l = (0, H.draftChunks)(
                                  (0, H.modelDrafts)(
                                    o.find((e) => e.key === t.key) || t,
                                    a,
                                  ),
                                );
                                for (const [a, s] of l.entries())
                                  (await V(
                                    s.map((e) => e.draft),
                                    !(e === i && a === l.length - 1),
                                  ),
                                    n(
                                      (0, H.afterSaved)(o, t.key, {
                                        saved: s.map((e) => e.key),
                                      }),
                                    ));
                                n(o.filter((e) => e.key !== t.key));
                              }
                              const s = (0, H.draftChunks)(
                                t.map((e) => ({ draft: e })),
                              );
                              let l = le?.actions || [];
                              for (const [e, t] of s.entries()) {
                                (await V(
                                  t.map((e) => e.draft),
                                  e < s.length - 1,
                                ),
                                  (l = l.slice(t.length)));
                                const n = le ? { ...le, actions: l } : null;
                                e < s.length - 1 &&
                                  ((a = n),
                                  (0, v.patchDrafts)(T, {
                                    batch: {
                                      messages: U,
                                      text: Y,
                                      photo: Q,
                                      editing: ne,
                                      result: n || void 0,
                                      models: o,
                                    },
                                  }));
                              }
                              (G([]),
                                J(''),
                                X(void 0),
                                re(null),
                                ce(null),
                                ye([]),
                                E?.(!1),
                                (0, v.clearDraftPart)(T, 'batch'));
                            } catch (e) {
                              throw (
                                (Ie.current = !1),
                                a &&
                                  Ce.current &&
                                  (ce(a),
                                  ge((e) => e + 1),
                                  xe((0, p.errorText)(e))),
                                e
                              );
                            }
                          },
                        },
                        me,
                      ),
                      (0, L.jsx)(x.Button, {
                        testID: 'batch-edit-queue',
                        secondary: !0,
                        onPress: () => {
                          (ce(null), ye([]), (Ie.current = !1));
                        },
                        children: I.fa.batchNewMessages,
                      }),
                    ],
                  }),
              ],
            }),
            (0, L.jsxs)(l.default, {
              style: [B.composerArea, { paddingHorizontal: O ? 28 : 12 }],
              children: [
                !!ie &&
                  (0, L.jsxs)(l.default, {
                    style: { gap: 6, paddingBottom: 8 },
                    children: [
                      (0, L.jsx)(x.Copy, {
                        testID: 'batch-error',
                        accessibilityRole: 'alert',
                        style: {
                          color: K.danger,
                          fontSize: 12,
                          lineHeight: 22,
                        },
                        children: ie,
                      }),
                      !!U.length &&
                        !Z &&
                        (0, L.jsx)(x.Button, {
                          testID: 'batch-retry',
                          secondary: !0,
                          onPress: We,
                          children: I.fa.batchRetry,
                        }),
                    ],
                  }),
                !le &&
                  !Z &&
                  !!U.length &&
                  (0, L.jsx)(l.default, {
                    style: { paddingBottom: 8 },
                    children: (0, L.jsx)(x.Button, {
                      testID: 'batch-final',
                      disabled: ee,
                      onPress: We,
                      children: I.fa.batchFinal,
                    }),
                  }),
                !le &&
                  (0, L.jsxs)(l.default, {
                    testID: 'batch-composer',
                    style: [
                      B.composer,
                      { backgroundColor: K.surface, borderColor: K.line },
                    ],
                    children: [
                      ne &&
                        (0, L.jsxs)(l.default, {
                          style: [x.common.between, { paddingHorizontal: 10 }],
                          children: [
                            (0, L.jsx)(x.Copy, {
                              style: { fontSize: 11, color: K.muted },
                              children: I.fa.batchEditing,
                            }),
                            (0, L.jsx)(c.default, {
                              accessibilityRole: 'button',
                              accessibilityLabel: I.fa.batchCancelEdit,
                              onPress: Ae,
                              style: [Ke, Oe],
                              children: (0, L.jsx)(j.Icon, {
                                name: 'close',
                                size: 16,
                                color: K.muted,
                              }),
                            }),
                          ],
                        }),
                      Q &&
                        (0, L.jsxs)(l.default, {
                          style: { alignSelf: 'flex-end', margin: 8 },
                          children: [
                            (0, L.jsx)(n.default, {
                              testID: 'batch-photo',
                              accessibilityLabel: I.fa.batchPhotoAlt,
                              source: { uri: Q },
                              style: {
                                width: 82,
                                height: 75,
                                borderRadius: 12,
                              },
                              resizeMode: 'cover',
                            }),
                            (0, L.jsx)(c.default, {
                              accessibilityRole: 'button',
                              accessibilityLabel: I.fa.batchRemovePhoto,
                              onPress: () => X(void 0),
                              disabled: Z || ee,
                              style: {
                                position: 'absolute',
                                top: -6,
                                left: -6,
                                width: 30,
                                height: 30,
                                borderRadius: 15,
                                backgroundColor: K.soft,
                                alignItems: 'center',
                                justifyContent: 'center',
                              },
                              children: (0, L.jsx)(j.Icon, {
                                name: 'close',
                                color: K.text,
                                size: 15,
                              }),
                            }),
                          ],
                        }),
                      ae &&
                        (0, L.jsxs)(l.default, {
                          testID: 'batch-attachments',
                          style: [
                            x.common.row,
                            { paddingHorizontal: 4, paddingBottom: 8 },
                          ],
                          children: [
                            (0, L.jsxs)(c.default, {
                              testID: 'batch-camera',
                              accessibilityRole: 'button',
                              onPress: () => {
                                Be(!0);
                              },
                              style: [
                                B.attachment,
                                { backgroundColor: K.soft },
                              ],
                              children: [
                                (0, L.jsx)(j.Icon, {
                                  name: 'camera',
                                  color: K.text,
                                  size: 19,
                                }),
                                (0, L.jsx)(x.Copy, {
                                  style: { fontSize: 12 },
                                  children: I.fa.takePhoto,
                                }),
                              ],
                            }),
                            (0, L.jsxs)(c.default, {
                              testID: 'batch-gallery',
                              accessibilityRole: 'button',
                              onPress: () => {
                                Be(!1);
                              },
                              style: [
                                B.attachment,
                                { backgroundColor: K.soft },
                              ],
                              children: [
                                (0, L.jsx)(j.Icon, {
                                  name: 'photo',
                                  color: K.text,
                                  size: 19,
                                }),
                                (0, L.jsx)(x.Copy, {
                                  style: { fontSize: 12 },
                                  children: I.fa.photoLibrary,
                                }),
                              ],
                            }),
                          ],
                        }),
                      (0, L.jsxs)(l.default, {
                        style: [
                          x.common.row,
                          { gap: 6, alignItems: 'flex-end' },
                        ],
                        children: [
                          t.AI_PHOTOS &&
                            (0, L.jsx)(c.default, {
                              testID: 'batch-attach',
                              accessibilityRole: 'button',
                              accessibilityLabel: I.fa.batchAttach,
                              accessibilityState: {
                                expanded: ae,
                                disabled: Z || ee,
                              },
                              disabled: Z || ee,
                              onPress: () => oe((e) => !e),
                              style: [Ke, B.round, { opacity: Z ? 0.4 : 1 }],
                              children: ee
                                ? (0, L.jsx)(o.default, {
                                    size: 'small',
                                    color: K.text,
                                  })
                                : (0, L.jsx)(j.Icon, {
                                    name: 'add',
                                    color: K.text,
                                    size: 24,
                                  }),
                            }),
                          (0, L.jsx)(s.default, {
                            ref: we,
                            testID: 'batch-text',
                            accessibilityLabel: I.fa.batchText,
                            placeholder: I.fa.batchPlaceholder,
                            placeholderTextColor: K.muted,
                            multiline: !0,
                            maxLength: 1500,
                            editable: !Z && !ee,
                            value: Y,
                            onChangeText: (e) => {
                              (J(e), e || Le(44), E?.(!!U.length), se(''));
                            },
                            onContentSizeChange: (e) =>
                              Le(Math.ceil(e.nativeEvent.contentSize.height)),
                            onKeyPress: function (e) {
                              if ('Enter' !== e.nativeEvent.key) return;
                              const t = e.nativeEvent;
                              t.shiftKey ||
                                t.isComposing ||
                                229 === t.keyCode ||
                                (e.preventDefault(), Ee());
                            },
                            style: [
                              (0, k.textFlow)(B.textbox, !0),
                              {
                                flex: 1,
                                color: K.text,
                                height: Math.min(
                                  Math.max(44, He),
                                  O ? 160 : 115,
                                ),
                              },
                            ],
                            textAlignVertical: 'top',
                          }),
                          Z
                            ? (0, L.jsx)(c.default, {
                                testID: 'batch-stop',
                                accessibilityRole: 'button',
                                accessibilityLabel: I.fa.batchStop,
                                onPress: function () {
                                  (De.current++,
                                    je.current?.abort(),
                                    (je.current = null),
                                    (Se.current = !1),
                                    $(!1),
                                    se(I.fa.batchStopped));
                                },
                                style: [
                                  Ke,
                                  B.round,
                                  {
                                    backgroundColor: K.text,
                                    borderColor: K.text,
                                  },
                                ],
                                children: (0, L.jsx)(j.Icon, {
                                  name: 'stop',
                                  size: 18,
                                  color: K.bg,
                                }),
                              })
                            : (0, L.jsx)(c.default, {
                                testID: 'batch-send',
                                accessibilityRole: 'button',
                                accessibilityLabel: ne
                                  ? I.fa.batchSaveEdit
                                  : I.fa.batchSend,
                                disabled: ee || !Pe,
                                accessibilityState: { disabled: ee || !Pe },
                                onPress: Ee,
                                style: ({ pressed: e }) => [
                                  Ke,
                                  B.round,
                                  {
                                    borderColor: K.accent,
                                    backgroundColor: e
                                      ? K.accentActive
                                      : K.accent,
                                    opacity: ee || !Pe ? 0.35 : 1,
                                  },
                                ],
                                children: (0, L.jsx)(j.Icon, {
                                  name: ne ? 'check' : 'send',
                                  size: 20,
                                  color: K.onAccent,
                                }),
                              }),
                        ],
                      }),
                    ],
                  }),
                !!le &&
                  (0, L.jsx)(x.Copy, {
                    style: [B.footerNote, { color: K.muted }],
                    children: I.fa.batchReviewNote,
                  }),
              ],
            }),
            (0, L.jsx)(R.BatchTutorial, {
              visible: de && he,
              onClose: Fe,
              onSupport: _
                ? () => {
                    (Fe(), _());
                  }
                : void 0,
            }),
          ],
        });
      }));
    var t = r(d[0]),
      a = r(d[1]),
      o = e(r(d[2])),
      n = e(r(d[3]));
    r(d[4]);
    var i = e(r(d[5])),
      s = e(r(d[6])),
      l = e(r(d[7])),
      c = e(r(d[8])),
      u = r(d[9]),
      h = r(d[10]),
      f = r(d[11]),
      b = r(d[12]),
      y = r(d[13]),
      m = r(d[14]),
      p = r(d[15]),
      x = r(d[16]),
      j = r(d[17]),
      C = r(d[18]),
      S = r(d[19]),
      I = r(d[20]),
      v = r(d[21]),
      R = r(d[22]),
      z = e(r(d[23])),
      w = r(d[24]),
      D = r(d[25]),
      k = r(d[26]),
      P = r(d[27]),
      H = r(d[28]),
      L = r(d[29]);
    const B = i.default.create({
      page: { flex: 1, width: '100%' },
      header: {
        minHeight: 77,
        borderBottomWidth: i.default.hairlineWidth,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 15,
        paddingVertical: 9,
      },
      conversation: {
        width: '100%',
        maxWidth: 850,
        alignSelf: 'center',
        paddingTop: 24,
        paddingBottom: 22,
      },
      empty: { alignItems: 'center', gap: 16, paddingVertical: 20 },
      suggestions: {
        flexDirection: 'row-reverse',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 10,
        marginTop: 10,
      },
      status: { fontSize: 11, textAlign: 'center', marginBottom: 23 },
      bubble: {
        padding: 16,
        borderRadius: 21,
        borderTopRightRadius: 7,
        borderWidth: i.default.hairlineWidth,
        gap: 9,
        minWidth: 60,
      },
      composerArea: {
        width: '100%',
        maxWidth: 850,
        alignSelf: 'center',
        paddingTop: 9,
      },
      composer: { borderRadius: 24, borderWidth: 1, padding: 6 },
      round: { borderRadius: 22 },
      textbox: {
        fontFamily: 'Vazirmatn_400Regular',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'right',
        writingDirection: 'rtl',
        minHeight: 44,
        paddingHorizontal: 8,
        paddingTop: 10,
        paddingBottom: 10,
      },
      attachment: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        gap: 9,
        paddingVertical: 11,
        paddingHorizontal: 14,
        borderRadius: 13,
      },
      footerNote: {
        fontSize: 10,
        textAlign: 'center',
        lineHeight: 20,
        paddingTop: 9,
      },
      videoKey: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        gap: 8,
        minHeight: 44,
        paddingHorizontal: 16,
        borderRadius: 14,
        borderWidth: i.default.hairlineWidth,
      },
    });
  },
  706,
  [
    494, 2, 217, 168, 94, 17, 242, 99, 232, 380, 342, 480, 634, 592, 465, 690,
    407, 385, 382, 481, 492, 707, 708, 258, 415, 311, 1, 714, 716, 338,
  ],
);
