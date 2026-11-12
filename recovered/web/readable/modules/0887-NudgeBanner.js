// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 887; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.NudgeBanner = function ({
        shop: e,
        onUpgrade: p,
        onTip: _,
        onReminder: b,
        onLifecycle: L,
        hideChequeCard: w = !1,
      }) {
        const { colors: j } = (0, s.useTheme)(),
          [I, R] = (0, t.useState)(null),
          [N, B] = (0, t.useState)(null),
          K = (0, t.useRef)(''),
          W = (0, t.useRef)(new Set());
        async function E(t) {
          const n = e.id + ':' + t;
          if (!W.current.has(n)) {
            W.current.add(n);
            try {
              await (0, c.request)('/v1/me/preferences', 'PATCH', {
                lifecycle: { key: t, action: 'dismissed' },
              });
            } catch {}
          }
        }
        async function O() {
          try {
            (await (0, v.enableNotifications)()) &&
              (R((e) =>
                'lifecycle' === e?.kind && 'enable_notifications' === e.key
                  ? null
                  : e,
              ),
              await E('enable_notifications'));
          } catch {}
        }
        const F = (0, t.useCallback)(async () => {
          try {
            const t = (await (0, c.request)((0, c.shopPath)(e, '/nudges')))
                .item,
              n =
                t?.kind ||
                ('upgrade' === t?.type ||
                'tip' === t?.type ||
                'lifecycle' === t?.type
                  ? t.type
                  : null),
              o = t && n ? { ...t, kind: n } : null;
            if (
              'lifecycle' === o?.kind &&
              'enable_notifications' === o.key &&
              (await (0, v.notificationStatus)())
            )
              return (R(null), void (await E(o.key)));
            if (
              (R(o),
              'cheque_due_today' !== o?.kind ||
                !o.chequeId ||
                (o.seenKey && T.has(o.seenKey)) ||
                !(0, C.claimAutoPopup)('cheque:' + o.chequeId) ||
                (B(o), D(o.seenKey)),
              o)
            ) {
              const e = o.kind + ':' + (o.key || o.offer?.endsAt || '');
              K.current !== e &&
                ((K.current = e),
                ('upgrade' !== o.kind && 'tip' !== o.kind) ||
                  (await (0, c.request)('/v1/me/preferences', 'PATCH', {
                    tip: {
                      key: 'upgrade' === o.kind ? 'upgrade' : o.key,
                      action: 'shown',
                    },
                  })),
                !0 === o.notify && A(o));
            }
          } catch {}
        }, [e.id]);
        (0, t.useEffect)(() => {
          F();
          const e = setInterval(() => {
            F();
          }, 108e5);
          return () => clearInterval(e);
        }, [F]);
        const M = !(
          !I ||
          ('lifecycle' === I.kind &&
            ('trial_ends_soon' === I.key || 'trial_ends_tomorrow' === I.key)) ||
          (q.fromBazaar &&
            'lifecycle' === I.kind &&
            'launch_offer' === I.key) ||
          (w &&
            ('cheque_due_3_days' === I.kind || 'cheque_due_today' === I.kind))
        );
        async function V() {
          const e = I;
          if ((R(null), e)) {
            D(e.seenKey);
            try {
              'upgrade' === e.kind
                ? await (0, c.request)('/v1/me/preferences', 'PATCH', {
                    upgradeSnoozeHours: 48,
                  })
                : 'lifecycle' === e.kind && e.key
                  ? await E(e.key)
                  : 'tip' === e.kind &&
                    (await (0, c.request)('/v1/me/preferences', 'PATCH', {
                      tip: { key: e.key, action: 'dismissed' },
                    }));
            } catch {}
          }
        }
        (0, t.useEffect)(() => {
          M &&
            I &&
            ('lifecycle' === I.kind
              ? I.key && E(I.key)
              : 'cheque_due_today' !== I.kind &&
                'tip' !== I.kind &&
                D(I.seenKey));
        }, [M, I]);
        const U =
          N &&
          (0, x.jsx)(P, {
            shop: e,
            item: N,
            onClose: () => B(null),
            onDone: () => {
              (B(null), F());
            },
          });
        if (
          'lifecycle' === I?.kind &&
          ('trial_ends_soon' === I.key || 'trial_ends_tomorrow' === I.key)
        )
          return U || null;
        if (q.fromBazaar && 'lifecycle' === I?.kind && 'launch_offer' === I.key)
          return U || null;
        if (
          w &&
          ('cheque_due_3_days' === I?.kind || 'cheque_due_today' === I?.kind)
        )
          return U || null;
        if (!I) return U || null;
        const $ = 'lifecycle' === I.kind ? z(I) : null,
          G =
            'upgrade' !== I.kind && 'tip' !== I.kind && 'lifecycle' !== I.kind,
          J =
            !q.fromBazaar &&
            !!I.offer &&
            new Date(I.offer.endsAt).getTime() > Date.now(),
          Q = $
            ? $.title
            : 'upgrade' === I.kind
              ? (0, h.L)(
                  '\u062f\u0648\u0628\u0627\u0631\u0647 \u0628\u0627 \u062e\u06cc\u0627\u0644 \u0631\u0627\u062d\u062a \u062b\u0628\u062a \u06a9\u0646\u06cc\u062f',
                )
              : G
                ? H(I)
                : S[I.key || 'low_stock_alarm'],
          X = G
            ? (I.amountToman ??
              (void 0 !== I.balanceToman ? Math.abs(I.balanceToman) : void 0))
            : void 0,
          Y = $
            ? $.body
            : void 0 !== X
              ? (0, h.L)('{amount}', {
                  amount: (0, k.money)(X, { full: !0 }),
                }) + (I.contactName ? '\u060c ' + I.contactName : '')
              : 'expiring_soon' === I.kind && I.productName
                ? I.productName +
                  (I.expiresAt && /^\d{4}-\d{2}-\d{2}$/.test(I.expiresAt)
                    ? '\u060c ' +
                      new Date(I.expiresAt + 'T12:00:00').toLocaleDateString(
                        (0, h.dateLocale)(),
                        { day: 'numeric', month: 'long' },
                      )
                    : '')
                : G
                  ? (0, h.L)(I.message || '')
                  : 'upgrade' === I.kind && J
                    ? (0, h.L)(
                        '\u067e\u06cc\u0634\u0646\u0647\u0627\u062f {percent}\u066a \u062a\u062e\u0641\u06cc\u0641',
                        {
                          percent: I.offer.percent.toLocaleString(
                            (0, h.numberLocale)(),
                          ),
                        },
                      )
                    : '',
          Z = $
            ? $.button
            : 'upgrade' === I.kind
              ? (0, h.L)(
                  '\u062f\u06cc\u062f\u0646 \u0637\u0631\u062d\u200c\u0647\u0627',
                )
              : 'cheque_due_today' === I.kind
                ? (0, h.L)('\u062a\u06a9\u0644\u06cc\u0641 \u0686\u06a9')
                : G
                  ? (0, h.L)('\u0628\u0627\u0632 \u06a9\u0631\u062f\u0646')
                  : (0, h.L)(
                      '\u062f\u06cc\u062f\u0646 \u0631\u0627\u0647\u0646\u0645\u0627',
                    );
        return (0, x.jsxs)(x.Fragment, {
          children: [
            U,
            (0, x.jsxs)(o.default, {
              testID: 'nudge-banner',
              style: {
                width: '100%',
                marginBottom: 12,
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 10,
                paddingVertical: 9,
                paddingHorizontal: 12,
                borderRadius: 14,
                borderWidth: 1,
                borderColor: j.accent + '66',
                backgroundColor: j.accentSoft,
              },
              children: [
                (0, x.jsxs)(o.default, {
                  style: { flex: 1, minWidth: 0 },
                  children: [
                    (0, x.jsx)(l.Copy, {
                      numberOfLines: Y ? 1 : 2,
                      style: {
                        fontSize: 14,
                        lineHeight: 22,
                        fontFamily: 'Vazirmatn_700Bold',
                      },
                      children: Q,
                    }),
                    !!Y &&
                      (0, x.jsx)(l.Copy, {
                        numberOfLines: 1,
                        style: { fontSize: 12, lineHeight: 20, color: j.muted },
                        children: Y,
                      }),
                    'upgrade' === I.kind &&
                      J &&
                      (0, x.jsx)(u.Countdown, { endsAt: I.offer.endsAt }),
                  ],
                }),
                (0, x.jsx)(n.default, {
                  testID: 'nudge-open',
                  accessibilityRole: 'button',
                  onPress: function () {
                    if (I)
                      return 'cheque_due_today' === I.kind && I.chequeId
                        ? (B(I), void D(I.seenKey))
                        : void ('lifecycle' !== I.kind
                            ? 'upgrade' === I.kind
                              ? p()
                              : 'tip' === I.kind
                                ? _(I.key || 'low_stock_alarm')
                                : b
                                  ? b(I)
                                  : 'debt_old' === I.kind && I.contactId
                                    ? f.ledgerEntries.open({
                                        screen: 'contact',
                                        contactId: I.contactId,
                                      })
                                    : I.kind.startsWith('cheque_')
                                      ? f.ledgerEntries.open({
                                          screen: 'cheques',
                                        })
                                      : _('low_stock_alarm')
                            : 'launch_offer' === I.key
                              ? p()
                              : 'enable_notifications' === I.key
                                ? O()
                                : 'debt_feature' === I.key
                                  ? f.ledgerEntries.open({ screen: 'contacts' })
                                  : I.key && L?.(I.key));
                  },
                  style: ({ pressed: e }) => ({
                    height: 32,
                    paddingHorizontal: 14,
                    borderRadius: 999,
                    justifyContent: 'center',
                    backgroundColor: j.accent,
                    opacity: e ? 0.85 : 1,
                  }),
                  children: (0, x.jsx)(l.Copy, {
                    style: {
                      fontSize: 12,
                      lineHeight: 20,
                      color: j.onAccent,
                      fontFamily: 'Vazirmatn_700Bold',
                    },
                    children: Z,
                  }),
                }),
                (0, x.jsx)(n.default, {
                  testID: 'nudge-close',
                  accessibilityRole: 'button',
                  accessibilityLabel: (0, h.L)('\u0628\u0633\u062a\u0646'),
                  hitSlop: 8,
                  onPress: () => {
                    V();
                  },
                  style: ({ pressed: e }) => ({
                    width: 28,
                    height: 28,
                    borderRadius: 14,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: j.surface,
                    borderWidth: 1,
                    borderColor: j.line,
                    opacity: e ? 0.8 : 1,
                  }),
                  children: (0, x.jsx)(y.Icon, {
                    name: 'close',
                    size: 14,
                    color: j.muted,
                  }),
                }),
              ],
            }),
          ],
        });
      }));
    var t = r(d[0]);
    r(d[1]);
    var n = e(r(d[2])),
      o = e(r(d[3])),
      c = r(d[4]),
      s = r(d[5]),
      l = r(d[6]),
      u = r(d[7]),
      y = r(d[8]),
      f = r(d[9]),
      h = r(d[10]),
      k = r(d[11]),
      p = e(r(d[12])),
      _ = r(d[13]),
      b = r(d[14]),
      L = r(d[15]),
      w = r(d[16]),
      q = r(d[17]),
      v = r(d[18]),
      C = r(d[19]),
      x = r(d[20]);
    const S = (0, h.localized)({
        low_stock_alarm:
          '\u067e\u06cc\u0634 \u0627\u0632 \u062a\u0645\u0627\u0645\u200c\u0634\u062f\u0646 \u06a9\u0627\u0644\u0627 \u0628\u0627\u062e\u0628\u0631 \u0634\u0648\u06cc\u062f',
        team_invite:
          '\u06a9\u0627\u0631\u0647\u0627 \u0631\u0627 \u0628\u0627 \u0647\u0645\u06a9\u0627\u0631\u062a\u0627\u0646 \u0647\u0645\u0627\u0647\u0646\u06af \u06a9\u0646\u06cc\u062f',
        barcode:
          '\u062b\u0628\u062a \u06a9\u0627\u0644\u0627 \u0631\u0627 \u0628\u0627 \u0628\u0627\u0631\u06a9\u062f \u0633\u0631\u06cc\u0639\u200c\u062a\u0631 \u06a9\u0646\u06cc\u062f',
        excel_import:
          '\u0645\u0648\u062c\u0648\u062f\u06cc \u0642\u0628\u0644\u06cc \u0631\u0627 \u0627\u0632 \u0627\u06a9\u0633\u0644 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f',
        batch_chat:
          '\u0686\u0646\u062f \u062a\u063a\u06cc\u06cc\u0631 \u0631\u0627 \u06cc\u06a9\u200c\u062c\u0627 \u0628\u0631\u0631\u0633\u06cc \u06a9\u0646\u06cc\u062f',
      }),
      j = (0, h.localized)({
        cheque_due_3_days:
          '\u0633\u0631\u0631\u0633\u06cc\u062f \u0686\u06a9 \u0646\u0632\u062f\u06cc\u06a9 \u0627\u0633\u062a',
        cheque_due_today:
          '\u0633\u0631\u0631\u0633\u06cc\u062f \u0686\u06a9 \u0631\u0633\u06cc\u062f\u0647',
        debt_old:
          '\u062d\u0633\u0627\u0628 \u0642\u062f\u06cc\u0645\u06cc \u0628\u0627\u0632 \u0645\u0627\u0646\u062f\u0647',
        expiring_soon:
          '\u0627\u0646\u0642\u0636\u0627\u06cc \u06a9\u0627\u0644\u0627 \u0646\u0632\u062f\u06cc\u06a9 \u0627\u0633\u062a',
      }),
      I = (0, h.localized)({
        launch_offer: {
          title:
            '\u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u0631\u0633\u0645\u0627\u064b \u0627\u0641\u062a\u062a\u0627\u062d \u0634\u062f',
          body: '{p}\u066a \u062a\u062e\u0641\u06cc\u0641 \u0627\u0641\u062a\u062a\u0627\u062d\u06cc\u0647 \u0631\u0648\u06cc \u0627\u0648\u0644\u06cc\u0646 \u062e\u0631\u06cc\u062f\u061b \u062e\u0648\u062f\u06a9\u0627\u0631\u060c \u0628\u062f\u0648\u0646 \u06a9\u062f.',
          button:
            '\u062f\u06cc\u062f\u0646 \u0637\u0631\u062d\u200c\u0647\u0627',
        },
        set_password: {
          title:
            '\u06cc\u0647 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0628\u0630\u0627\u0631',
          body: '\u062a\u0627 \u0628\u0639\u062f\u0627\u064b \u0628\u062f\u0648\u0646 \u067e\u06cc\u0627\u0645\u06a9\u060c \u0628\u0627 \u0634\u0645\u0627\u0631\u0647 \u0648 \u0631\u0645\u0632 \u0648\u0627\u0631\u062f \u0628\u0634\u06cc.',
          button: '\u06af\u0630\u0627\u0634\u062a\u0646 \u0631\u0645\u0632',
        },
        enable_notifications: {
          title:
            '\u0647\u0634\u062f\u0627\u0631\u0647\u0627 \u0631\u0627 \u0631\u0648\u0634\u0646 \u06a9\u0646\u06cc\u062f',
          body: '\u062a\u0627 \u06a9\u0645\u0628\u0648\u062f \u06a9\u0627\u0644\u0627 \u0648 \u0633\u0631\u0631\u0633\u06cc\u062f \u0686\u06a9 \u0631\u0627 \u0628\u0647\u200c\u0645\u0648\u0642\u0639 \u0628\u0641\u0647\u0645\u06cc\u062f.',
          button: '\u0631\u0648\u0634\u0646 \u06a9\u0631\u062f\u0646',
        },
        add_more_items: {
          title:
            '\u06f5 \u06a9\u0627\u0644\u0627\u06cc \u062f\u06cc\u06af\u0631 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u062f',
          body: '\u0628\u0627 \u0686\u0646\u062f \u06a9\u0627\u0644\u0627\u06cc \u0628\u06cc\u0634\u062a\u0631\u060c \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u06a9\u0645\u0628\u0648\u062f\u0647\u0627 \u0631\u0627 \u062e\u0648\u062f\u0634 \u062e\u0628\u0631 \u0645\u06cc\u200c\u062f\u0647\u062f.',
          button:
            '\u0627\u0641\u0632\u0648\u062f\u0646 \u06a9\u0627\u0644\u0627',
        },
        sales_summary: {
          title:
            '\u062e\u0644\u0627\u0635\u0647\u0654 \u0641\u0631\u0648\u0634 \u0627\u0645\u0631\u0648\u0632 \u0622\u0645\u0627\u062f\u0647 \u0627\u0633\u062a',
          body: '\u0628\u0628\u06cc\u0646\u06cc\u062f \u0627\u0645\u0631\u0648\u0632 \u0686\u0647 \u0641\u0631\u0648\u062e\u062a\u06cc\u062f \u0648 \u0686\u0642\u062f\u0631.',
          button: '\u062f\u06cc\u062f\u0646',
        },
        debt_feature: {
          title:
            '\u062d\u0633\u0627\u0628 \u0646\u0633\u06cc\u0647 \u0631\u0627 \u0647\u0645 \u0627\u06cc\u0646\u062c\u0627 \u0646\u06af\u0647 \u062f\u0627\u0631\u06cc\u062f',
          body: '\u0628\u062f\u0647\u06cc \u0648 \u0637\u0644\u0628 \u0645\u0634\u062a\u0631\u06cc\u200c\u0647\u0627 \u06cc\u06a9\u200c\u062c\u0627\u060c \u0628\u0627 \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc.',
          button: '\u062f\u0641\u062a\u0631 \u0646\u0633\u06cc\u0647',
        },
        trial_ends_soon: {
          title:
            '{n} \u0631\u0648\u0632 \u062a\u0627 \u067e\u0627\u06cc\u0627\u0646 \u062f\u0648\u0631\u0647\u0654 \u0631\u0627\u06cc\u06af\u0627\u0646',
          body: '\u0628\u0631\u0627\u06cc \u0627\u062f\u0627\u0645\u0647\u0654 \u0647\u0645\u0647\u0654 \u0627\u0645\u06a9\u0627\u0646\u0627\u062a\u060c \u0637\u0631\u062d \u0645\u0646\u0627\u0633\u0628 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f.',
          button:
            '\u062f\u06cc\u062f\u0646 \u0637\u0631\u062d\u200c\u0647\u0627',
        },
        trial_ends_tomorrow: {
          title:
            '\u062f\u0648\u0631\u0647\u0654 \u0631\u0627\u06cc\u06af\u0627\u0646 \u0641\u0631\u062f\u0627 \u062a\u0645\u0627\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f',
          body: '\u0628\u0631\u0627\u06cc \u0627\u062f\u0627\u0645\u0647\u0654 \u0647\u0645\u0647\u0654 \u0627\u0645\u06a9\u0627\u0646\u0627\u062a\u060c \u0637\u0631\u062d \u0645\u0646\u0627\u0633\u0628 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f.',
          button:
            '\u062f\u06cc\u062f\u0646 \u0637\u0631\u062d\u200c\u0647\u0627',
        },
        paused_low_stock: {
          title:
            '\u06a9\u0627\u0644\u0627\u0647\u0627\u06cc\u06cc \u0631\u0648 \u0628\u0647 \u0627\u062a\u0645\u0627\u0645 \u0627\u0633\u062a',
          body: '\u0647\u0634\u062f\u0627\u0631 \u06a9\u0645\u0628\u0648\u062f \u06a9\u0627\u0644\u0627 \u062a\u0627 \u062a\u0645\u062f\u06cc\u062f \u0627\u0634\u062a\u0631\u0627\u06a9 \u062e\u0627\u0645\u0648\u0634 \u0627\u0633\u062a.',
          button: '\u062a\u0645\u062f\u06cc\u062f',
        },
        weekly_report: {
          title:
            '\u06af\u0632\u0627\u0631\u0634 \u062f\u0648 \u0647\u0641\u062a\u0647\u0654 \u0627\u0648\u0644 \u0634\u0645\u0627',
          body: '\u0641\u0631\u0648\u0634\u060c \u067e\u0631\u0641\u0631\u0648\u0634\u200c\u0647\u0627 \u0648 \u0637\u0644\u0628\u200c\u0647\u0627\u06cc \u0628\u0627\u0632 \u0631\u0627 \u0628\u0628\u06cc\u0646\u06cc\u062f.',
          button: '\u062f\u06cc\u062f\u0646 \u06af\u0632\u0627\u0631\u0634',
        },
        monthly_summary: {
          title:
            '\u062e\u0644\u0627\u0635\u0647\u0654 \u0645\u0627\u0647 \u0627\u0648\u0644 \u0634\u0645\u0627',
          body: '\u0641\u0631\u0648\u0634\u060c \u067e\u0631\u0641\u0631\u0648\u0634\u200c\u0647\u0627 \u0648 \u0637\u0644\u0628\u200c\u0647\u0627\u06cc \u0628\u0627\u0632 \u0631\u0627 \u0628\u0628\u06cc\u0646\u06cc\u062f.',
          button: '\u062f\u06cc\u062f\u0646 \u06af\u0632\u0627\u0631\u0634',
        },
      });
    function z(e) {
      const t = I[e.key];
      return t
        ? {
            ...t,
            title: t.title.replace(
              '{n}',
              (e.daysLeft ?? 2).toLocaleString((0, h.numberLocale)()),
            ),
            body: t.body.replace(
              '{p}',
              (e.percent ?? 0).toLocaleString((0, h.numberLocale)()),
            ),
          }
        : null;
    }
    async function A(e) {
      const t = 'lifecycle' === e.kind ? z(e) : null,
        n = 'upgrade' !== e.kind && 'tip' !== e.kind,
        o = t
          ? t.title
          : 'upgrade' === e.kind
            ? (0, h.L)(
                '\u0627\u0645\u06a9\u0627\u0646\u0627\u062a \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u0631\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0641\u0639\u0627\u0644 \u06a9\u0646\u06cc\u062f',
              )
            : n
              ? j[e.kind]
              : S[e.key || 'low_stock_alarm'],
        c = t
          ? t.body
          : 'upgrade' === e.kind
            ? (0, h.L)(
                '\u0628\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u0637\u0631\u062d \u0645\u0646\u0627\u0633\u0628\u060c \u062b\u0628\u062a \u0645\u0648\u062c\u0648\u062f\u06cc \u0648 \u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06cc \u0647\u0648\u0634\u0645\u0646\u062f \u062f\u0648\u0628\u0627\u0631\u0647 \u0641\u0639\u0627\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f.',
              )
            : n
              ? e.message || o
              : (0, h.L)(
                  '\u06cc\u06a9 \u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u06a9\u0648\u062a\u0627\u0647 \u062f\u0631 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u0622\u0645\u0627\u062f\u0647 \u0627\u0633\u062a.',
                );
      try {
        'undefined' != typeof Notification &&
          'granted' === Notification.permission &&
          'serviceWorker' in navigator &&
          (await navigator.serviceWorker.ready).showNotification(o, {
            body: c,
            tag: 'anbari-nudge',
          });
      } catch {}
    }
    const T = new Set();
    function D(e) {
      e &&
        !T.has(e) &&
        (T.add(e),
        (0, c.request)('/v1/me/preferences', 'PATCH', { seen: e }).catch(() => {
          T.delete(e);
        }));
    }
    function H(e) {
      return 'cheque_due_3_days' === e.kind && e.days
        ? 1 === e.days
          ? (0, h.L)(
              '\u0641\u0631\u062f\u0627 \u0633\u0631\u0631\u0633\u06cc\u062f \u0686\u06a9 \u0627\u0633\u062a',
            )
          : (0, h.L)(
              '{n} \u0631\u0648\u0632 \u062a\u0627 \u0633\u0631\u0631\u0633\u06cc\u062f \u0686\u06a9',
              { n: e.days.toLocaleString((0, h.numberLocale)()) },
            )
        : j[e.kind];
    }
    function P({ shop: e, item: n, onClose: u, onDone: y }) {
      const { colors: f } = (0, s.useTheme)(),
        [p, q] = (0, t.useState)(!1),
        [v, C] = (0, t.useState)(''),
        S = 'receive' === n.direction,
        j = !1 !== n.settlesOnCash,
        I = n.contactName || '',
        z =
          void 0 !== n.amountToman
            ? (0, k.money)(n.amountToman, { full: !0 })
            : '';
      async function A(t) {
        if (!p && n.chequeId) {
          (q(!0), C(''));
          try {
            (await (0, w.transitionCheque)(e, n.chequeId, t),
              (0, b.showToast)(
                j
                  ? 'cashed' === t
                    ? S
                      ? (0, h.L)(
                          '\u0686\u06a9 {name} \u067e\u0627\u0633 \u0634\u062f \u0648 \u0627\u0632 \u0637\u0644\u0628\u062a \u06a9\u0645 \u0634\u062f',
                          { name: I },
                        )
                      : (0, h.L)(
                          '\u0686\u06a9 {name} \u067e\u0627\u0633 \u0634\u062f \u0648 \u0627\u0632 \u0628\u062f\u0647\u06cc\u062a \u06a9\u0645 \u0634\u062f',
                          { name: I },
                        )
                    : S
                      ? (0, h.L)(
                          '\u0686\u06a9 {name} \u067e\u0627\u0633 \u0646\u0634\u062f\u061b \u0637\u0644\u0628\u062a \u0633\u0631 \u062c\u0627\u0634 \u0645\u0627\u0646\u062f',
                          { name: I },
                        )
                      : (0, h.L)(
                          '\u0686\u06a9 {name} \u067e\u0627\u0633 \u0646\u0634\u062f\u061b \u0628\u062f\u0647\u06cc\u062a \u0633\u0631 \u062c\u0627\u0634 \u0645\u0627\u0646\u062f',
                          { name: I },
                        )
                  : 'cashed' === t
                    ? (0, h.L)(
                        '\u0686\u06a9 {name} \u067e\u0627\u0633 \u0634\u062f',
                        { name: I },
                      )
                    : (0, h.L)(
                        '\u0686\u06a9 {name} \u067e\u0627\u0633 \u0646\u0634\u062f',
                        { name: I },
                      ),
              ),
              y());
          } catch (e) {
            C(
              (0, h.L)('\u062b\u0628\u062a \u0646\u0634\u062f: {reason}', {
                reason: (0, c.message)(e),
              }),
            );
          } finally {
            q(!1);
          }
        }
      }
      return (0, x.jsx)(_.Sheet, {
        visible: !0,
        title: (0, h.L)(
          '\u062a\u06a9\u0644\u06cc\u0641 \u0627\u06cc\u0646 \u0686\u06a9 \u0686\u06cc \u0634\u062f\u061f',
        ),
        onClose: u,
        children: (0, x.jsxs)(o.default, {
          testID: 'cheque-ask',
          style: { gap: 4 },
          children: [
            (0, x.jsx)(l.Copy, {
              style: {
                fontSize: 14,
                lineHeight: 23,
                color: f.muted,
                paddingBottom: 6,
              },
              children:
                (S
                  ? (0, h.L)(
                      '\u0686\u06a9\u06cc \u06a9\u0647 \u0627\u0632 {name} \u06af\u0631\u0641\u062a\u06cc',
                      { name: I },
                    )
                  : (0, h.L)(
                      '\u0686\u06a9\u06cc \u06a9\u0647 \u0628\u0647 {name} \u062f\u0627\u062f\u06cc',
                      { name: I },
                    )) + (z ? '\u060c ' + z : ''),
            }),
            (0, x.jsx)(L.SheetRow, {
              testID: 'cheque-ask-cashed',
              icon: 'check',
              title: (0, h.L)('\u067e\u0627\u0633 \u0634\u062f'),
              hint: j
                ? S
                  ? (0, h.L)(
                      '\u0627\u0632 \u0637\u0644\u0628\u062a \u06a9\u0645 \u0645\u06cc\u200c\u0634\u0647',
                    )
                  : (0, h.L)(
                      '\u0627\u0632 \u0628\u062f\u0647\u06cc\u062a \u06a9\u0645 \u0645\u06cc\u200c\u0634\u0647',
                    )
                : void 0,
              onPress: () => {
                A('cashed');
              },
            }),
            (0, x.jsx)(L.SheetRow, {
              testID: 'cheque-ask-bounced',
              icon: 'refresh',
              danger: !0,
              title: (0, h.L)('\u067e\u0627\u0633 \u0646\u0634\u062f'),
              hint: j
                ? S
                  ? (0, h.L)(
                      '\u0637\u0644\u0628\u062a \u0633\u0631 \u062c\u0627\u0634 \u0645\u06cc\u200c\u0645\u0648\u0646\u0647',
                    )
                  : (0, h.L)(
                      '\u0628\u062f\u0647\u06cc\u062a \u0633\u0631 \u062c\u0627\u0634 \u0645\u06cc\u200c\u0645\u0648\u0646\u0647',
                    )
                : void 0,
              onPress: () => {
                A('bounced');
              },
            }),
            !!v &&
              (0, x.jsx)(l.Copy, {
                accessibilityRole: 'alert',
                style: { fontSize: 13, color: f.danger },
                children: v,
              }),
          ],
        }),
      });
    }
    p.default
      .getAllKeys()
      .then((e) => {
        const t = e.filter((e) => e.startsWith('anbari.chequeAsk.'));
        t.length && p.default.multiRemove(t).catch(() => {});
      })
      .catch(() => {});
  },
  887,
  [
    2, 94, 232, 99, 415, 382, 407, 727, 385, 888, 311, 435, 258, 539, 525, 517,
    519, 446, 523, 879, 338,
  ],
);
