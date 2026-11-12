// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 699; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.useInventory = function (R) {
        const [k, E] = (0, e.useState)(null),
          [C, P] = (0, e.useState)(''),
          [S, T] = (0, e.useState)(null),
          [_, A] = (0, e.useState)(''),
          [q, O] = (0, e.useState)(!1),
          [U, j] = (0, e.useState)('syncing'),
          [K, L] = (0, e.useState)([]),
          [M, D] = (0, e.useState)(0),
          F = (0, e.useRef)(!0),
          N = (0, e.useRef)(-1),
          x = (0, e.useRef)(null),
          z = (0, e.useRef)(0),
          B = (0, e.useRef)([]),
          W = (0, e.useRef)([]),
          G = (0, e.useRef)(!1),
          H = (0, e.useRef)(null),
          J = (0, e.useRef)(null),
          Q = (0, e.useRef)(null),
          V = (0, e.useRef)([]),
          X = (0, e.useRef)(null),
          Y = (0, e.useRef)(0),
          Z = (0, e.useRef)(void 0),
          $ = (0, e.useRef)(async () => {});
        V.current = K;
        const ee = () => {
            const e = (0, u.activeUserId)();
            return R && e && !(0, v.demoActive)() ? e + ':' + R.id : null;
          },
          re = (0, e.useCallback)(() => {
            const e = Q.current;
            if (!e) return ((J.current = null), void E(null));
            const t = (0, n.overlayPending)(e, [...W.current, ...B.current]);
            ((J.current = t), E(t), D(B.current.length));
          }, []),
          te = (0, e.useCallback)(
            (e) => {
              ((Q.current = e),
                (N.current = e.revision),
                (W.current = []),
                re());
              const t = ee();
              t && (0, f.writeOffline)('snap:' + t, e);
            },
            [re, R?.id],
          ),
          ne = (0, e.useCallback)(() => {
            const e = ee();
            (e &&
              (0, f.writeOffline)(
                'queue:' + e,
                [...B.current, ...V.current].map(I),
              ),
              D(B.current.length));
          }, [R?.id]),
          se = (0, e.useCallback)(() => {
            ((N.current = -1), (Q.current = null), (W.current = []), re());
          }, [re]),
          ue = (0, e.useCallback)(
            async (e) => {
              for (let t = 0; t < 3; t++) {
                const t = await (0, u.request)(
                  (0, u.shopPath)(e, '/inventory?limit=200'),
                );
                let n = t.nextCursor,
                  s = [...t.products],
                  c = !0;
                for (; n; ) {
                  const o = await (0, u.request)(
                    (0, u.shopPath)(
                      e,
                      '/inventory?limit=200&cursor=' + encodeURIComponent(n),
                    ),
                  );
                  if (o.revision !== t.revision) {
                    c = !1;
                    break;
                  }
                  (s.push(...o.products), (n = o.nextCursor));
                }
                if (c) return void te({ ...t, products: s });
              }
              throw Error('server_busy');
            },
            [te],
          ),
          ce = (0, e.useCallback)(
            async (e) => {
              try {
                const t = N.current,
                  n = Q.current;
                if (!n) return void (await ue(e));
                let c,
                  o = null,
                  l = [];
                do {
                  const s =
                      '/products?since=' +
                      t +
                      (o ? '&cursor=' + encodeURIComponent(o) : ''),
                    f = await (0, u.request)((0, u.shopPath)(e, s));
                  if (f.policyRevision !== n.policyRevision)
                    return (se(), void (await ue(e)));
                  if (f.fullResyncRequired) return void (await ue(e));
                  if (void 0 !== c && f.revision !== c)
                    return void (await ue(e));
                  ((c = f.revision), l.push(...f.products), (o = f.nextCursor));
                } while (o);
                if (void 0 === c || c === t)
                  return void (W.current.length && ((W.current = []), re()));
                if ((0, s.datesIncomplete)(n.products, l))
                  return void (await ue(e));
                const f = await (0, u.request)(
                  (0, u.shopPath)(e, '/inventory?limit=1'),
                );
                if (f.revision !== c || f.policyRevision !== n.policyRevision)
                  return (se(), void (await ue(e)));
                const h = new Map(n.products.map((e) => [e.id, e]));
                for (const e of l)
                  if (e.archived || e.archivedAt) h.delete(e.id);
                  else {
                    const { archived: t, ...n } = e;
                    h.set(e.id, n);
                  }
                const v = await (0, u.request)(
                  (0, u.shopPath)(e, '/movements?limit=200'),
                );
                te({
                  ...n,
                  products: [...h.values()],
                  movements: v.movements?.slice().reverse() || n.movements,
                  categories: f.categories || [],
                  alarmRules: f.alarmRules || [],
                  alerts: f.alerts || [],
                  historyTruncated: f.historyTruncated,
                  revision: c,
                });
              } catch (t) {
                if (b(t) || (t instanceof u.ApiError && 404 === t.status))
                  return void (await ue(e));
                throw t;
              }
            },
            [ue, te, se, re],
          ),
          ie = (0, e.useCallback)(async () => {
            if (!R) return;
            if (x.current) return x.current;
            const e = z.current;
            return (
              (x.current = (async () => {
                j('syncing');
                try {
                  (N.current < 0 ? await ue(R) : await ce(R),
                    F.current &&
                      e === z.current &&
                      ((Y.current = 0),
                      P(''),
                      T(null),
                      j(B.current.length ? 'syncing' : 'saved')));
                } catch (t) {
                  if (F.current && e === z.current) {
                    const e = (0, o.isNetworkError)(t) && !!Q.current,
                      n =
                        (0, l.isServerBusy)(t) ||
                        (t instanceof Error && 'server_busy' === t.message);
                    (n &&
                      (clearTimeout(Z.current),
                      (Z.current = setTimeout(
                        () => {
                          F.current && $.current().catch(() => {});
                        },
                        (0, l.busyRetryDelay)(Y.current++),
                      ))),
                      P(e || n ? '' : (0, u.message)(t)),
                      T(e || n ? null : t),
                      j(n ? 'busy' : w(t) ? p(t) : 'saved'),
                      t instanceof Error &&
                        ['unauthorized', 'forbidden'].includes(t.message) &&
                        se());
                  }
                  throw t;
                } finally {
                  x.current = null;
                }
              })()),
              x.current
            );
          }, [R?.id, ue, ce, se]);
        function oe(e) {
          e.released ||
            ((e.released = !0),
            A(
              (0, h.L)(
                '\u0628\u062f\u0648\u0646 \u0627\u06cc\u0646\u062a\u0631\u0646\u062a \u0631\u0648\u06cc \u06af\u0648\u0634\u06cc \u0630\u062e\u06cc\u0631\u0647 \u0634\u062f\u061b \u0648\u0642\u062a\u06cc \u0648\u0635\u0644 \u0634\u0648\u06cc \u062e\u0648\u062f\u0634 \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f.',
              ),
            ),
            e.resolve({ queued: !0 }));
        }
        function ae(e) {
          return new Promise((t) => {
            const n = setTimeout(s, e);
            function s() {
              (clearTimeout(n), X.current === s && (X.current = null), t());
            }
            X.current = s;
          });
        }
        async function le() {
          if (!G.current) {
            for (G.current = !0; B.current.length && F.current; ) {
              const e = B.current[0],
                t = (0, u.activeUserId)();
              if (e.shopId !== R?.id || e.userId !== t) {
                (B.current.shift(),
                  ne(),
                  A(c.platformFa.noticeIdentityChanged),
                  e.reject(Error('identity_changed')));
                continue;
              }
              (O(!0), j('syncing'));
              let n = 0;
              for (;;) {
                n++;
                const t = new AbortController(),
                  s = setTimeout(() => t.abort(), 15e3);
                H.current = t;
                try {
                  const n = await (0, u.request)(
                    '/v1/shops/' + e.shopId + e.path,
                    e.method,
                    e.body,
                    { key: e.idempotencyKey, signal: t.signal },
                  );
                  (B.current.shift(),
                    W.current.push(I(e)),
                    ne(),
                    e.resolve(n),
                    e.released &&
                      !B.current.length &&
                      A(
                        (0, h.L)(
                          '\u062a\u063a\u06cc\u06cc\u0631\u0647\u0627\u06cc \u0630\u062e\u06cc\u0631\u0647\u200c\u0634\u062f\u0647 \u0631\u0648\u06cc \u06af\u0648\u0634\u06cc \u0627\u0631\u0633\u0627\u0644 \u0634\u062f.',
                        ),
                      ),
                    P(''),
                    j('saved'));
                  break;
                } catch (t) {
                  if (!w(t)) {
                    (B.current.shift(), ne(), re());
                    ((!e.released &&
                      t instanceof u.ApiError &&
                      'insufficient_stock' === t.message &&
                      'ask' === t.details?.oversell) ||
                      P(
                        e.released
                          ? (0, h.L)(
                              '\u06cc\u06a9 \u062a\u063a\u06cc\u06cc\u0631 \u06a9\u0647 \u0628\u062f\u0648\u0646 \u0627\u06cc\u0646\u062a\u0631\u0646\u062a \u062b\u0628\u062a \u0634\u062f\u0647 \u0628\u0648\u062f \u067e\u0630\u06cc\u0631\u0641\u062a\u0647 \u0646\u0634\u062f:',
                            ) +
                              ' ' +
                              (0, u.message)(t)
                          : (0, u.message)(t),
                      ),
                      j('saved'),
                      e.reject(t));
                    break;
                  }
                  if (!F.current) break;
                  if (
                    e.shopId !== R?.id ||
                    e.userId !== (0, u.activeUserId)()
                  ) {
                    (B.current.shift(),
                      ne(),
                      A(c.platformFa.noticeIdentityChanged),
                      e.reject(Error('identity_changed')));
                    break;
                  }
                  if ((0, o.isNetworkError)(t) || !(0, o.isOnline)()) {
                    if (
                      (oe(e),
                      P(''),
                      j('offline'),
                      await ae(Math.min(3e4, 2e3 * 2 ** Math.min(n - 1, 4))),
                      !F.current)
                    )
                      break;
                    continue;
                  }
                  if (n >= 6) {
                    (B.current.shift(),
                      (V.current = [...V.current, e]),
                      L(V.current),
                      ne(),
                      A(c.platformFa.noticeRetryLimit),
                      P((0, u.message)(t)),
                      j(p(t)));
                    break;
                  }
                  (P((0, l.isServerBusy)(t) ? '' : (0, u.message)(t)),
                    j(p(t)),
                    await y(Math.min(3e4, 1e3 * 2 ** Math.min(n - 1, 5))));
                } finally {
                  (clearTimeout(s), H.current === t && (H.current = null));
                }
              }
              B.current.length || (await ie().catch(() => {}));
            }
            ((G.current = !1), F.current && O(B.current.length > 0));
          }
        }
        return (
          ($.current = ie),
          (0, e.useEffect)(() => {
            if (
              ((F.current = !0),
              z.current++,
              (Y.current = 0),
              clearTimeout(Z.current),
              (N.current = -1),
              (Q.current = null),
              (J.current = null),
              (W.current = []),
              E(null),
              T(null),
              A(''),
              D(0),
              !R)
            )
              return;
            let e,
              t,
              n = !1;
            const s = () => {
              ie().catch(() => {});
            };
            if ((0, v.demoActive)())
              return (
                s(),
                () => {
                  ((F.current = !1), (n = !0), z.current++);
                }
              );
            const c = ee();
            c &&
              Promise.all([
                (0, f.readOffline)('snap:' + c),
                (0, f.readOffline)('queue:' + c),
              ]).then(([e, t]) => {
                if (n) return;
                const s = new Set(B.current.map((e) => e.idempotencyKey)),
                  c = (Array.isArray(t) ? t : [])
                    .filter(
                      (e) =>
                        e &&
                        e.shopId === R.id &&
                        e.userId === (0, u.activeUserId)() &&
                        !s.has(e.idempotencyKey),
                    )
                    .map((e) => ({
                      ...e,
                      resolve: () => {},
                      reject: () => {},
                      released: !0,
                    }));
                (c.length && (B.current = [...c, ...B.current]),
                  e &&
                    !Q.current &&
                    'number' == typeof e.revision &&
                    ((Q.current = e), (N.current = e.revision)),
                  re(),
                  c.length && le());
              });
            const l = () => {
              (X.current?.(), s());
            };
            ('undefined' != typeof window &&
              window.addEventListener('online', l),
              s(),
              (async function c() {
                try {
                  const { ticket: o } = await (0, u.request)(
                    (0, u.shopPath)(R, '/realtime-ticket'),
                    'POST',
                    {},
                  );
                  if (n) return;
                  const l = (0, u.baseUrl)() || window.location.origin;
                  ((e = new WebSocket(
                    l.replace(/^http/, 'ws') +
                      '/v1/realtime?ticket=' +
                      encodeURIComponent(o),
                  )),
                    (e.onmessage = s),
                    (e.onclose = () => {
                      n ||
                        (t = setTimeout(() => {
                          c();
                        }, 5e3));
                    }),
                    (e.onerror = () => e?.close()));
                } catch {
                  n ||
                    (t = setTimeout(() => {
                      c();
                    }, 1e4));
                }
              })());
            const h = setInterval(() => {
              ((0, o.isOnline)() || X.current?.(), s());
            }, 3e4);
            return () => {
              ((F.current = !1),
                (n = !0),
                z.current++,
                clearInterval(h),
                clearTimeout(Z.current),
                clearTimeout(t),
                e?.close(),
                'undefined' != typeof window &&
                  window.removeEventListener('online', l),
                X.current?.(),
                H.current?.abort(),
                (H.current = null));
              for (const e of [...B.current, ...V.current])
                e.released || e.reject(Error('identity_changed'));
              ((B.current = []), (V.current = []), L([]), (G.current = !1));
            };
          }, [R?.id, ie]),
          {
            snapshot: k,
            error: C,
            loadFailure: S,
            notice: _,
            busy: q,
            syncState: U,
            pending: M,
            refresh: ie,
            mutate: function (e, s, c) {
              if (!R) return Promise.reject(Error('unauthorized'));
              const l = (0, u.activeUserId)();
              if (!l) return Promise.reject(Error('unauthorized'));
              if ((0, v.demoActive)())
                return (0, u.request)('/v1/shops/' + R.id + e, s, c).then(
                  async (e) => (await ie().catch(() => {}), e),
                );
              const f = {
                  userId: l,
                  shopId: R.id,
                  path: e,
                  method: s,
                  body: c,
                  idempotencyKey: (0, u.randomUUID)(),
                  createdAt: new Date().toISOString(),
                },
                h = (0, n.movementDrafts)(f);
              if (h && !(0, o.isOnline)() && J.current)
                try {
                  (0, t.applyDraftBatch)(
                    J.current,
                    h.drafts,
                    'check',
                    h.source,
                    { allowNegative: h.allowNegative },
                  );
                } catch (e) {
                  return Promise.reject(e);
                }
              return new Promise((e, t) => {
                const n = { ...f, resolve: e, reject: t };
                (B.current.push(n),
                  ne(),
                  re(),
                  (0, o.isOnline)() || oe(n),
                  O(!0),
                  le());
              });
            },
            latest: () => J.current,
            retryFailed: K.length
              ? function () {
                  const e = V.current[0];
                  if (
                    !e ||
                    e.shopId !== R?.id ||
                    e.userId !== (0, u.activeUserId)()
                  )
                    return;
                  ((V.current = V.current.slice(1)),
                    L(V.current),
                    V.current.length || A(''));
                  (B.current.push(e), ne(), O(!0), le());
                }
              : void 0,
          }
        );
      }));
    var e = r(d[0]);
    r(d[1]);
    var t = r(d[2]),
      n = r(d[3]),
      s = r(d[4]),
      u = r(d[5]),
      c = r(d[6]),
      o = r(d[7]),
      l = r(d[8]),
      f = r(d[9]),
      h = r(d[10]),
      v = r(d[11]);
    const y = (e) => new Promise((t) => setTimeout(t, e));
    function p(e) {
      return (0, o.isNetworkError)(e) || !(0, o.isOnline)()
        ? 'offline'
        : 'busy';
    }
    function w(e) {
      return (
        !(e instanceof u.ApiError) ||
        408 === e.status ||
        429 === e.status ||
        e.status >= 500
      );
    }
    function b(e) {
      return (
        e instanceof u.ApiError &&
        ['revision_too_old', 'revision_gap', 'sync_reset_required'].includes(
          e.message,
        )
      );
    }
    const I = (e) => ({
      userId: e.userId,
      shopId: e.shopId,
      method: e.method,
      path: e.path,
      body: e.body,
      idempotencyKey: e.idempotencyKey,
      createdAt: e.createdAt,
    });
  },
  699,
  [2, 94, 439, 700, 701, 415, 502, 427, 479, 428, 311, 448],
);
