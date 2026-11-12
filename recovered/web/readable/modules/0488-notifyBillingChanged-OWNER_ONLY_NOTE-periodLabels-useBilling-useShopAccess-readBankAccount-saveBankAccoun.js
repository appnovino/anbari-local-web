// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 488; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.notifyBillingChanged = function () {
        f.forEach((e) => e());
      }),
      Object.defineProperty(_e, 'OWNER_ONLY_NOTE', {
        enumerable: !0,
        get: function () {
          return w;
        },
      }),
      Object.defineProperty(_e, 'periodLabels', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }),
      (_e.useBilling = h),
      (_e.useShopAccess = function (t) {
        const { data: n, reload: o } = h(
            t ? '/v1/shops/' + t.id + '/billing' : void 0,
          ),
          [c, l] = (0, e.useState)(!1);
        return (
          (0, e.useEffect)(() => {
            if ((l(!1), t))
              return (0, s.onSubscriptionRequired)((e) => {
                e.startsWith('/v1/shops/' + t.id + '/') && l(!0);
              });
          }, [t?.id]),
          (0, e.useEffect)(() => {
            ('active' !== n?.access &&
              'trial' !== n?.access &&
              'free' !== n?.access) ||
              l(!1);
          }, [n?.access]),
          (0, e.useEffect)(() => {
            n && (0, u.setOfflineDays)(n.offlineDays);
          }, [n?.offlineDays]),
          (0, e.useEffect)(() => {
            if (!t || 'free' !== n?.access) return;
            let e;
            const c = (0, s.onShopWrite)((n) => {
              n === t.id &&
                (e && clearTimeout(e),
                (e = setTimeout(() => {
                  o();
                }, 900)));
            });
            return () => {
              (c(), e && clearTimeout(e));
            };
          }, [t?.id, n?.access, o]),
          (0, e.useEffect)(() => {
            if ('trial' !== n?.access) return;
            const e = setInterval(() => {
              o();
            }, 1e4);
            return () => clearInterval(e);
          }, [n?.access, o]),
          (0, e.useMemo)(
            () => ({
              role: t?.role || null,
              access: c ? 'expired' : n?.access,
              records: n?.records ?? null,
              fresh: !!n?.fresh,
              refundDays: n?.refund?.enabled ? n.refund.days : void 0,
              offer: n?.offer,
              campaign: n?.campaign,
              trialEndsAt: n?.trial?.endsAt,
              aiAllowance: n?.usage
                ? {
                    limit: n.usage.limit,
                    used: n.usage.used,
                    ...(n.trial
                      ? {
                          trialEndsAt: n.trial.endsAt,
                          aiTotal: n.trial.aiTotal,
                          aiUsed: n.trial.aiUsed,
                          isTrial: !0,
                        }
                      : { isTrial: !1 }),
                  }
                : void 0,
              reload: o,
            }),
            [t?.role, n, c, o],
          )
        );
      }),
      (_e.readBankAccount = function (e) {
        return (0, s.request)((0, s.shopPath)(e, '/bank-account'));
      }),
      (_e.saveBankAccount = function (e, t) {
        return (0, s.request)((0, s.shopPath)(e, '/bank-account'), 'PUT', t);
      }),
      (_e.readReferral = y),
      (_e.useReferral = function (e) {
        const t = !!e && ('owner' === e.role || 'manager' === e.role),
          {
            data: n,
            error: o,
            reload: s,
          } = (0, l.useSwr)(
            e && t ? (0, l.scoped)(e.id, 'referral') : null,
            () => y(e),
          );
        return { data: n ?? null, error: o, reload: s };
      }),
      (_e.referralLink = function (e) {
        const t = e.link || '/?ref=' + encodeURIComponent(e.code);
        return /^https?:/i.test(t)
          ? t
          : 'undefined' != typeof window
            ? window.location.origin + t
            : 'https://myanbari.ir' + t;
      }),
      (_e.rememberReferral = async function (e) {
        let t = S(e);
        t ||
          void 0 !== e ||
          'undefined' == typeof window ||
          (t = S(new URLSearchParams(window.location.search).get('ref')));
        if (!t) return null;
        try {
          'undefined' != typeof window
            ? (window.sessionStorage.setItem(v, t),
              window.localStorage.setItem(v, t))
            : await o.default.setItem(v, t);
        } catch {}
        return t;
      }),
      (_e.pendingReferral = E),
      (_e.clearReferral = _),
      (_e.claimPendingReferral = async function (e) {
        if (!e || 'owner' !== e.role) return !1;
        const t = await E();
        if (!t) return !1;
        try {
          const n = await (0, s.request)(
            (0, s.shopPath)(e, '/referral/claim'),
            'POST',
            { code: t },
          );
          return (await _(), n.attached);
        } catch (e) {
          const t = e instanceof Error ? e.message : '';
          return (
            [
              'code_invalid',
              'referral_too_late',
              'forbidden',
              'not_found',
              'invalid_request',
            ].includes(t) && (await _()),
            !1
          );
        }
      }));
    var e = r(d[0]);
    r(d[1]);
    var t,
      n = r(d[2]),
      o = (t = n) && t.__esModule ? t : { default: t },
      s = r(d[3]),
      c = r(d[4]),
      l = r(d[5]),
      u = r(d[6]);
    const f = new Set();
    const w =
        '\u0627\u0634\u062a\u0631\u0627\u06a9 \u0628\u0627 \u0635\u0627\u062d\u0628 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0627\u0633\u062a\u061b \u0627\u06af\u0631 \u0644\u0627\u0632\u0645 \u0627\u0633\u062a \u0628\u0647 \u0627\u0648 \u0628\u06af\u0648.',
      p = (0, c.localized)({
        1: '\u06cc\u06a9\u200c\u0645\u0627\u0647\u0647',
        3: '\u0633\u0647\u200c\u0645\u0627\u0647\u0647',
        12: '\u06cc\u06a9\u200c\u0633\u0627\u0644\u0647',
      });
    function h(t = '/v1/billing/catalog') {
      const [n, o] = (0, e.useState)({
          path: t,
          data: null,
          error: '',
          loading: !0,
        }),
        c = (0, e.useRef)(0),
        l = (0, e.useCallback)(async () => {
          const e = ++c.current;
          o((e) => ({
            path: t,
            data: e.path === t ? e.data : null,
            error: '',
            loading: !0,
          }));
          try {
            const n = await (0, s.request)(t);
            e === c.current && o({ path: t, data: n, error: '', loading: !1 });
          } catch (n) {
            e === c.current &&
              o({ path: t, data: null, error: (0, s.message)(n), loading: !1 });
          }
        }, [t]);
      return (
        (0, e.useEffect)(
          () => (
            l(),
            () => {
              c.current++;
            }
          ),
          [l],
        ),
        (0, e.useEffect)(
          () => (
            f.add(l),
            () => {
              f.delete(l);
            }
          ),
          [l],
        ),
        {
          data: n.path === t ? n.data : null,
          error: n.path === t ? n.error : '',
          loading: n.path !== t || n.loading,
          reload: l,
        }
      );
    }
    function y(e) {
      return (0, s.request)((0, s.shopPath)(e, '/referral'));
    }
    const v = 'anbari.referral',
      b = /^[A-Z0-9-]{6,32}$/,
      S = (e) => {
        const t = (e || '').trim().toUpperCase();
        return b.test(t) ? t : null;
      };
    async function E() {
      try {
        return 'undefined' != typeof window
          ? S(window.sessionStorage.getItem(v)) ||
              S(window.localStorage.getItem(v))
          : S(await o.default.getItem(v));
      } catch {
        return null;
      }
    }
    async function _() {
      try {
        'undefined' != typeof window
          ? (window.sessionStorage.removeItem(v),
            window.localStorage.removeItem(v))
          : await o.default.removeItem(v);
      } catch {}
    }
  },
  488,
  [2, 94, 258, 415, 311, 489, 427],
);
