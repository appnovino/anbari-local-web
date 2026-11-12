// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 880; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.useSheetsOpen = function () {
        const [e, n] = (0, t.useState)(o.sheetsOpen.count());
        return (
          (0, t.useEffect)(
            () => (
              n(o.sheetsOpen.count()),
              o.sheetsOpen.subscribe(() => n(o.sheetsOpen.count()))
            ),
            [],
          ),
          e
        );
      }),
      (_e.useCalmPrompts = function ({
        shop: e,
        role: o,
        demo: O,
        access: D,
        online: C,
        calm: F,
      }) {
        const b = (0, t.useRef)(null).current,
          T = D.records,
          U = e?.id,
          [k, L] = (0, t.useState)(null),
          [M, P] = (0, t.useState)(null),
          [z, N] = (0, t.useState)(null),
          [y, A] = (0, t.useState)(0),
          B = (0, t.useRef)(0),
          j = (0, t.useRef)(null),
          J = (0, t.useRef)(!1),
          W = (0, t.useRef)(Date.now()),
          q = (0, t.useRef)(null),
          x = (0, t.useRef)({ calm: F, free: k, freePending: M, records: T });
        ((x.current = { calm: F, free: k, freePending: M, records: T }),
          (0, t.useEffect)(() => {
            const e = n.default.addEventListener('change', (e) => {
              'active' === e && (W.current = Date.now());
            });
            return () => e.remove();
          }, []),
          (0, t.useEffect)(() => {
            if (U)
              return (0, s.onShopWrite)((e) => {
                e === U && ((B.current = Date.now()), A((e) => e + 1));
              });
          }, [U]));
        const G = !!e && !O && 'owner' === o && 'free' === D.access;
        ((0, t.useEffect)(() => {
          if (!U || !T) return;
          const e = j.current,
            t = e && e.shop === U && e.month === T.month ? e.used : void 0;
          if (
            ((j.current = { shop: U, month: T.month, used: T.used }),
            !G || !(0, l.usageRose)(t, T.used, Date.now() - B.current < v))
          )
            return;
          let n = !0;
          return (
            u.default
              .getItem(R(U))
              .catch(() => null)
              .then((e) => {
                if (!n) return;
                const t = (0, l.freeUsageStep)(T, (0, l.parseFreeUsageSeen)(e));
                t &&
                  P({
                    step: t,
                    month: T.month,
                    counts: (0, l.freeUsageCounts)(T),
                  });
              }),
            () => {
              n = !1;
            }
          );
        }, [U, T?.used, T?.month, T?.limit, G]),
          (0, t.useEffect)(() => {
            if (U && G)
              return (0, s.onFreeLimit)(() => {
                const e = x.current.records?.month;
                (P(null),
                  e &&
                    u.default
                      .getItem(R(U))
                      .catch(() => null)
                      .then((t) =>
                        I(
                          R(U),
                          (0, l.markFreeUsageSeen)(
                            (0, l.parseFreeUsageSeen)(t),
                            e,
                            'out',
                          ),
                        ),
                      ));
              });
          }, [U, G]),
          (0, t.useEffect)(() => {
            G || P(null);
          }, [G]),
          (0, t.useEffect)(() => {
            if (!M || !F || k || z || !U) return;
            const e = M;
            (L(e),
              P(null),
              (J.current = !0),
              u.default
                .getItem(R(U))
                .catch(() => null)
                .then((t) =>
                  I(
                    R(U),
                    (0, l.markFreeUsageSeen)(
                      (0, l.parseFreeUsageSeen)(t),
                      e.month,
                      e.step,
                    ),
                  ),
                ));
          }, [M, F, k, z, U]));
        const H = (0, t.useCallback)(() => L(null), []),
          K = c.fromBazaar && !!e && !O && C;
        ((0, t.useEffect)(() => {
          if (!K || q.current) return;
          let e = !0;
          return (
            u.default
              .getItem(S)
              .catch(() => null)
              .then((t) => {
                if (!e) return;
                const n = (0, h.parseRatingState)(t),
                  u = (0, h.ratingSeen)(n, Date.now());
                ((q.current = u), u !== n && I(S, u));
              }),
            () => {
              e = !1;
            }
          );
        }, [K]),
          (0, t.useEffect)(() => {
            if (!K || !F || z || k || M || J.current || !B.current) return;
            if (Date.now() - B.current > _) return;
            const t = setTimeout(() => {
              const t = Date.now(),
                n = q.current,
                u = x.current;
              if (!n || !u.calm || u.free || u.freePending || J.current) return;
              if (
                !(0, h.ratingDue)(n, {
                  now: t,
                  timezone: e?.timezone,
                  startedAt: W.current,
                })
              )
                return;
              const s = (0, h.ratingAsked)(n, t);
              ((q.current = s),
                I(S, s),
                (B.current = 0),
                N({ offerNever: (0, h.ratingOffersNever)(n) }));
            }, w);
            return () => clearTimeout(t);
          }, [y, F, K, z, k, M, e?.timezone]));
        const Q = (e) => {
            const t = { ...(q.current || { asks: [] }), ...e };
            ((q.current = t), I(S, t));
          },
          V = (0, t.useCallback)(() => N(null), []),
          X = (0, t.useCallback)(() => {
            (N(null), b || Q({ never: !0 }));
          }, [b]),
          Y = (0, t.useCallback)(async () => {
            (N(null),
              b ||
                ((await (0, c.openBazaarReview)())
                  ? Q({ rated: !0 })
                  : (0, f.showToast)(
                      (0, E.L)(
                        '\u06a9\u0627\u0641\u0647\u200c\u0628\u0627\u0632\u0627\u0631 \u0631\u0648\u06cc \u0627\u06cc\u0646 \u06af\u0648\u0634\u06cc \u0628\u0627\u0632 \u0646\u0634\u062f\u061b \u0627\u06af\u0647 \u0646\u0635\u0628\u0634 \u06a9\u0646\u06cc\u060c \u0627\u0632 \u0647\u0645\u0648\u0646\u200c\u062c\u0627 \u0645\u06cc\u200c\u062a\u0648\u0646\u06cc \u0646\u0638\u0631\u062a \u0631\u0648 \u0628\u0646\u0648\u06cc\u0633\u06cc.',
                      ),
                    )));
          }, [b]);
        return (
          (0, t.useEffect)(() => {
            if (!b) return;
            const e = setTimeout(() => {
              'rate' === b || 'rate2' === b
                ? N({ offerNever: 'rate2' === b })
                : L({
                    step: b,
                    month: 'preview',
                    counts: (0, l.freeUsageCounts)({
                      limit: p.FREE_RECORD_LIMIT,
                      used:
                        'out' === b
                          ? p.FREE_RECORD_LIMIT
                          : 'warn' === b
                            ? p.FREE_RECORD_LIMIT - 3
                            : Math.ceil(p.FREE_RECORD_LIMIT / 2),
                    }),
                  });
            }, 1500);
            return () => clearTimeout(e);
          }, [b]),
          {
            free: k,
            closeFree: H,
            rating: z,
            ratingLater: V,
            ratingOpen: Y,
            ratingNever: X,
          }
        );
      }));
    var t = r(d[0]),
      n = e(r(d[1]));
    r(d[2]);
    var u = e(r(d[3])),
      s = r(d[4]),
      c = r(d[5]),
      o = r(d[6]),
      f = r(d[7]),
      l = r(d[8]),
      h = r(d[9]),
      p = r(d[10]),
      E = r(d[11]);
    const R = (e) => 'anbari.freeUsagePopup2.' + e,
      S = 'anbari.ratingPrompt',
      v = 3e4,
      w = 2500,
      _ = 12e4;
    const I = (e, t) => {
      u.default.setItem(e, JSON.stringify(t)).catch(() => {});
    };
  },
  880,
  [2, 203, 94, 258, 415, 446, 539, 525, 881, 882, 442, 311],
);
