// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 690; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, _a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.errorText = F),
      (_e.DraftReview = function ({
        result: e,
        products: S = [],
        allowedKinds: N,
        businessType: q,
        role: R,
        extra: T,
        extraReady: A = !1,
        saveError: M = '',
        onDirtyChange: E,
        onChange: U,
        onConfirm: _,
      }) {
        const { colors: L } = (0, p.useTheme)(),
          B = q || t.activeShop?.businessType,
          K = R || t.activeShop?.role,
          H = N || (0, i.roleKinds)(K, t.activeShop?.access),
          O = (0, I.movementKinds)(B, H),
          [Q, V] = (0, r.useState)(
            e.actions.map((e) => ({
              ...e,
              productId: e.productId,
              quantity: null === e.quantity ? '' : String(e.quantity),
              kind: e.kind && O.includes(e.kind) ? e.kind : null,
              familyName: e.familyName,
              brand: e.brand,
            })),
          ),
          W = (e) => {
            const t = e.familyName || (e.productId || e.brand ? '' : e.name),
              o = t
                ? (0, C.brandOptions)(
                    S,
                    t,
                    e.needsChoice ? e.candidates : void 0,
                  )
                : [];
            return {
              family: t,
              options: o,
              pending: o.length > 0 && !e.productId && !e.brand,
            };
          },
          Y = Q.some((e) => W(e).pending),
          [G, J] = (0, r.useState)(!1),
          [X, Z] = (0, r.useState)(''),
          $ = (0, r.useRef)(!1);
        return (
          (0, r.useEffect)(() => {
            $.current ? U?.({ ...e, actions: Q }) : ($.current = !0);
          }, [Q]),
          (0, w.jsxs)(l.default, {
            style: u.common.gap,
            children: [
              (0, w.jsx)(u.Copy, {
                style: u.common.label,
                children: y.fa.transcript,
              }),
              (0, w.jsx)(u.Card, {
                children: (0, w.jsx)(u.Copy, {
                  children: e.transcript || y.fa.voiceNoSpeech,
                }),
              }),
              !!e.clarification &&
                (0, w.jsxs)(w.Fragment, {
                  children: [
                    (0, w.jsx)(u.Copy, {
                      style: { color: L.danger },
                      children: e.clarification,
                    }),
                    (0, w.jsx)(s.default, {
                      accessibilityRole: 'checkbox',
                      accessibilityState: { checked: G },
                      onPress: () => J(!G),
                      children: (0, w.jsxs)(u.Copy, {
                        children: [
                          G ? '\u2611 ' : '\u2610 ',
                          y.fa.voiceClarified,
                        ],
                      }),
                    }),
                  ],
                }),
              (0, w.jsx)(o.ToBuySuggest, {
                shop: t.activeShop,
                items: e.toBuy,
                products: S,
              }),
              (0, w.jsx)(u.Copy, {
                style: u.common.title,
                children: y.fa.reviewTitle,
              }),
              T,
              !Q.length &&
                !T &&
                (0, w.jsx)(u.Copy, { children: y.fa.voiceNoActions }),
              Q.map((e, t) =>
                (0, w.jsxs)(
                  u.Card,
                  {
                    children: [
                      e.photo &&
                        (0, w.jsx)(a.default, {
                          source: { uri: e.photo },
                          style: { height: 90, borderRadius: 12 },
                          resizeMode: 'contain',
                        }),
                      (0, w.jsxs)(l.default, {
                        style: u.common.between,
                        children: [
                          (0, w.jsx)(u.Copy, {
                            style: u.common.label,
                            children: y.fa.productName,
                          }),
                          (0, w.jsx)(s.default, {
                            accessibilityRole: 'button',
                            onPress: () => {
                              (V(Q.filter((e, o) => t !== o)), E?.(!0));
                            },
                            children: (0, w.jsx)(u.Copy, {
                              style: { color: L.muted, fontSize: 12 },
                              children: y.fa.removeDraft,
                            }),
                          }),
                        ],
                      }),
                      (0, w.jsx)(u.Input, {
                        accessibilityLabel: y.fa.productName,
                        value: e.name,
                        maxLength: 100,
                        onChangeText: (e) => {
                          (V(
                            Q.map((o, i) =>
                              t === i
                                ? {
                                    ...o,
                                    name: e,
                                    productId: void 0,
                                    familyName: void 0,
                                    brand: void 0,
                                    needsChoice: void 0,
                                    candidates: void 0,
                                    model: void 0,
                                    size: void 0,
                                    color: void 0,
                                  }
                                : o,
                            ),
                          ),
                            E?.(!0));
                        },
                      }),
                      !!e.matchedFrom &&
                        !!e.productId &&
                        (0, w.jsx)(u.Copy, {
                          testID: 'matched-from-' + t,
                          style: { fontSize: 12, color: L.muted },
                          children: (0, P.L)(
                            '\u0634\u0646\u06cc\u062f\u0647 \u0634\u062f \xab{spoken}\xbb\u061b \u06a9\u0627\u0644\u0627\u06cc \u0645\u0648\u062c\u0648\u062f \u0634\u0645\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u0634\u062f.',
                            { spoken: e.matchedFrom },
                          ),
                        }),
                      (() => {
                        const o =
                          e.productId || W(e).pending
                            ? void 0
                            : (0, v.closeSuggestion)(e, S);
                        return (
                          o &&
                          (0, w.jsxs)(l.default, {
                            testID: 'draft-suggest-' + t,
                            style: {
                              flexDirection: 'row-reverse',
                              alignItems: 'center',
                              gap: 8,
                            },
                            children: [
                              (0, w.jsx)(u.Copy, {
                                style: {
                                  flex: 1,
                                  fontSize: 12,
                                  lineHeight: 20,
                                  color: L.muted,
                                  fontFamily: 'Vazirmatn_400Regular',
                                },
                                children: x.voiceFa.didYouMean.replace(
                                  '{name}',
                                  o.name,
                                ),
                              }),
                              (0, w.jsx)(s.default, {
                                testID: 'draft-suggest-swap-' + t,
                                accessibilityRole: 'button',
                                onPress: () => {
                                  (V(
                                    Q.map((e, i) =>
                                      t === i
                                        ? {
                                            ...e,
                                            ...(0, x.suggestionPatch)(o, S, e),
                                          }
                                        : e,
                                    ),
                                  ),
                                    E?.(!0));
                                },
                                style: {
                                  paddingHorizontal: 10,
                                  paddingVertical: 5,
                                  borderRadius: 999,
                                  backgroundColor: L.surface,
                                  borderWidth: c.default.hairlineWidth,
                                  borderColor: L.line,
                                },
                                children: (0, w.jsx)(u.Copy, {
                                  style: { fontSize: 12, color: L.accent },
                                  children: x.voiceFa.swap,
                                }),
                              }),
                            ],
                          })
                        );
                      })(),
                      (() => {
                        const o = W(e);
                        return (
                          o.options.length > 0 &&
                          (0, w.jsx)(C.BrandChoice, {
                            name: o.family,
                            options: o.options,
                            selectedId: e.productId,
                            newBrand: e.brand,
                            testKey: t,
                            onPick: (e) => {
                              (V(
                                Q.map((i, n) =>
                                  t === n
                                    ? {
                                        ...i,
                                        familyName: o.family,
                                        name: e.name,
                                        productId: e.id,
                                        brand: void 0,
                                        matchedFrom: void 0,
                                      }
                                    : i,
                                ),
                              ),
                                E?.(!0));
                            },
                            onNewBrand: (e) => {
                              (V(
                                Q.map((i, n) =>
                                  t === n
                                    ? {
                                        ...i,
                                        familyName: o.family,
                                        name: (o.family.trim() + ' ' + e).slice(
                                          0,
                                          100,
                                        ),
                                        productId: void 0,
                                        brand: e,
                                      }
                                    : i,
                                ),
                              ),
                                E?.(!0));
                            },
                          })
                        );
                      })(),
                      (0, w.jsx)(b.ProductSuggest, {
                        products: S,
                        value: e.name,
                        productId: e.productId,
                        draft:
                          e.kind && D(e.quantity)
                            ? {
                                name: e.name,
                                quantity: D(e.quantity),
                                kind: e.kind,
                                productId: e.productId,
                              }
                            : void 0,
                        onPick: (e) => {
                          (V(
                            Q.map((o, i) =>
                              t === i
                                ? {
                                    ...o,
                                    name: e?.name || o.name,
                                    productId: e?.id,
                                    matchedFrom: void 0,
                                  }
                                : o,
                            ),
                          ),
                            E?.(!0));
                        },
                      }),
                      (0, w.jsx)(j.UnitInput, {
                        value: e.quantity,
                        onChange: (e) => {
                          (V(
                            Q.map((o, i) =>
                              t === i ? { ...o, quantity: e } : o,
                            ),
                          ),
                            E?.(!0));
                        },
                        unit:
                          e.unit ||
                          S.find((t) => t.id === e.productId)?.unit ||
                          'piece',
                        baseUnit: S.find((t) => t.id === e.productId)?.unit,
                        onUnitChange: (e) => {
                          (V(
                            Q.map((o, i) => (t === i ? { ...o, unit: e } : o)),
                          ),
                            E?.(!0));
                        },
                        packSize: S.find((t) => t.id === e.productId)?.packSize,
                        packUnit: S.find((t) => t.id === e.productId)?.packUnit,
                      }),
                      (0, w.jsx)(I.MovementKindPicker, {
                        value: e.kind || O[0] || 'received',
                        onChange: (e) => {
                          (V(
                            Q.map((o, i) => (t === i ? { ...o, kind: e } : o)),
                          ),
                            E?.(!0));
                        },
                        allowed: O,
                        businessType: B,
                        role: K,
                      }),
                      void 0 !== e.unitCost &&
                        null !== e.unitCost &&
                        (0, w.jsxs)(u.Copy, {
                          style: { fontSize: 12, color: L.muted },
                          children: [
                            k.notebookFa.buyUnitPrice,
                            ': ',
                            (0, P.L)('{amount}', {
                              amount: (0, z.money)(e.unitCost, { full: !0 }),
                            }),
                          ],
                        }),
                      void 0 !== e.unitPrice &&
                        null !== e.unitPrice &&
                        (0, w.jsxs)(u.Copy, {
                          style: { fontSize: 12, color: L.muted },
                          children: [
                            k.notebookFa.sellUnitPrice,
                            ': ',
                            (0, P.L)('{amount}', {
                              amount: (0, z.money)(e.unitPrice, { full: !0 }),
                            }),
                          ],
                        }),
                      e.expiresAt &&
                        (0, w.jsxs)(u.Copy, {
                          style: { fontSize: 12, color: L.muted },
                          children: [
                            k.notebookFa.expiry,
                            ': ',
                            new Date(
                              e.expiresAt + 'T12:00:00',
                            ).toLocaleDateString((0, P.dateLocale)()),
                          ],
                        }),
                      (0, w.jsx)(n.MovementDate, {
                        id: 'voice-date-' + t,
                        value: e.timestamp || void 0,
                        onChange: (e) =>
                          V(
                            Q.map((o, i) =>
                              t === i ? { ...o, timestamp: e } : o,
                            ),
                          ),
                      }),
                      (0, w.jsxs)(u.Copy, {
                        style: { color: L.muted, fontSize: 12 },
                        children: [
                          e.kind
                            ? k.notebookFa.movement[e.kind]
                            : y.fa.chooseAction,
                          ' ',
                          e.quantity || '\u2014',
                          ' ',
                          k.notebookFa.units[
                            e.unit ||
                              S.find((t) => t.id === e.productId)?.unit ||
                              'piece'
                          ],
                        ],
                      }),
                    ],
                  },
                  t,
                ),
              ),
              (0, w.jsx)(u.Copy, {
                style: [u.common.small, { color: L.muted }],
                children: y.fa.reviewHint,
              }),
              !(!X && !M) &&
                (0, w.jsx)(u.Copy, {
                  accessibilityRole: 'alert',
                  style: { color: L.danger },
                  children: X || M,
                }),
              Y &&
                (0, w.jsx)(u.Copy, {
                  testID: 'brand-pending',
                  style: { fontSize: 12, color: L.danger },
                  children: C.brandFa.pendingRows,
                }),
              (0, w.jsx)(u.Button, {
                testID: 'confirm-voice',
                disabled: (!Q.length && !A) || (!!e.clarification && !G) || Y,
                onPress: async function () {
                  try {
                    const e = Q.map((e) => {
                      if (!e.kind) throw new Error('invalid');
                      const t = (0, h.voicePricesForProduct)(
                        e,
                        S.find((t) =>
                          e.productId
                            ? t.id === e.productId
                            : t.name === e.name,
                        ),
                      );
                      return {
                        name: e.name,
                        quantity: (0, f.parseQuantity)(e.quantity),
                        kind: e.kind,
                        ...(e.unit ? { unit: e.unit } : {}),
                        ...(void 0 !== t.unitCost
                          ? { unitCost: t.unitCost }
                          : {}),
                        ...(void 0 !== t.unitPrice
                          ? { unitPrice: t.unitPrice }
                          : {}),
                        ...(e.expiresAt ? { expiresAt: e.expiresAt } : {}),
                        ...(e.productId ? { productId: e.productId } : {}),
                        ...(e.brand && !e.productId ? { brand: e.brand } : {}),
                        ...(e.model && !e.productId
                          ? {
                              model: e.model,
                              ...(e.size ? { size: e.size } : {}),
                              ...(e.color ? { color: e.color } : {}),
                            }
                          : {}),
                        ...(e.timestamp ? { timestamp: e.timestamp } : {}),
                        ...(e.photo ? { photo: e.photo } : {}),
                      };
                    });
                    await _(e);
                  } catch (e) {
                    Z(F(e));
                  }
                },
                children: y.fa.confirm,
              }),
            ],
          })
        );
      }));
    var t = _r(d[0]),
      o = _r(d[1]),
      i = _r(d[2]),
      n = _r(d[3]),
      r = _r(d[4]),
      a = e(_r(d[5])),
      s = e(_r(d[6])),
      c = e(_r(d[7])),
      l = e(_r(d[8])),
      u = _r(d[9]),
      p = _r(d[10]),
      y = _r(d[11]),
      f = _r(d[12]),
      h = _r(d[13]),
      v = _r(d[14]),
      x = _r(d[15]),
      b = _r(d[16]),
      C = _r(d[17]),
      j = _r(d[18]),
      I = _r(d[19]),
      k = _r(d[20]),
      S = _r(d[21]),
      P = _r(d[22]),
      z = _r(d[23]),
      w = _r(d[24]);
    function F(e) {
      const o =
        e instanceof Error
          ? 'NotAllowedError' === e.name
            ? 'permission'
            : e.message
          : '';
      return 'oversell_cancelled' === o
        ? ''
        : ((0, S.notifyTrialAiUsed)(o),
          (0, t.recipeErrorMessage)(e) ||
            (0, t.stockShortageMessage)(e) ||
            (0, t.samePersonMessage)(e) ||
            t.messages[o] ||
            y.fa.voiceErrors[o] ||
            y.fa.operationError);
    }
    function D(e) {
      try {
        return (0, f.parseQuantity)(e);
      } catch {
        return;
      }
    }
  },
  690,
  [
    415, 613, 473, 691, 2, 168, 232, 17, 99, 407, 382, 492, 439, 465, 452, 692,
    694, 695, 614, 696, 580, 697, 311, 435, 338,
  ],
);
