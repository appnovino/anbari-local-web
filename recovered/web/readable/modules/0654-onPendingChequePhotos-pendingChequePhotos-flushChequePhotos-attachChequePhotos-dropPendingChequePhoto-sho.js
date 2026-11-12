// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 654; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.onPendingChequePhotos = function (e) {
        return (
          l.add(e),
          () => {
            l.delete(e);
          }
        );
      }),
      (_e.pendingChequePhotos = async function (e) {
        const t = f(e);
        return t ? p(t) : [];
      }),
      (_e.flushChequePhotos = k),
      (_e.attachChequePhotos = async function (e, t, n) {
        const o = f(e),
          w = Object.entries(n).filter((e) => !!e[1]);
        if ((0, s.demoActive)()) {
          for (const [n, o] of w) await (0, c.putChequePhoto)(e, t, n, o);
          return { sent: w.length, waiting: 0, failed: [] };
        }
        return o && w.length
          ? (await y(o, (e) =>
              w.reduce(
                (e, [n, o]) =>
                  (0, u.withPending)(e, {
                    chequeId: t,
                    side: n,
                    photo: o,
                    key: (0, c.idempotencyKey)(),
                    savedAt: new Date().toISOString(),
                  }),
                e,
              ),
            ),
            await h.get(o)?.catch(() => {}),
            k(e))
          : { sent: 0, waiting: 0, failed: [] };
      }),
      (_e.dropPendingChequePhoto = async function (e, t, n) {
        const o = f(e);
        o &&
          (await y(o, (e) =>
            e.filter((e) => !(e.chequeId === t && e.side === n)),
          ));
      }),
      (_e.shownPhotos = function (e, t, n, o) {
        const s = {},
          c = e?.front || t;
        c && (s.front = { uri: c, waiting: !1 });
        e?.back && (s.back = { uri: e.back, waiting: !1 });
        for (const e of n)
          e.chequeId === o && (s[e.side] = { uri: e.photo, waiting: !0 });
        return s;
      }),
      (_e.chequePhotoError = q),
      (_e.photoSaveNote = function (e) {
        return e.failed.length
          ? (0, n.L)(
              '\u0686\u06a9 \u062b\u0628\u062a \u0634\u062f \u0648\u0644\u06cc \u0639\u06a9\u0633 \u0630\u062e\u06cc\u0631\u0647 \u0646\u0634\u062f: {reason}',
              { reason: e.failed[0] },
            )
          : e.waiting
            ? (0, n.L)(
                '\u0686\u06a9 \u062b\u0628\u062a \u0634\u062f\u061b \u0639\u06a9\u0633\u200c\u0647\u0627 \u0631\u0648\u06cc \u06af\u0648\u0634\u06cc \u0645\u0627\u0646\u062f \u0648 \u0648\u0642\u062a\u06cc \u0627\u06cc\u0646\u062a\u0631\u0646\u062a \u0648\u0635\u0644 \u0634\u062f \u062e\u0648\u062f\u0634 \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f.',
              )
            : '';
      }));
    var e = r(d[0]),
      t = r(d[1]),
      n = r(d[2]),
      o = r(d[3]),
      s = r(d[4]),
      c = r(d[5]),
      u = r(d[6]);
    const f = (t) => {
        const n = (0, e.activeUserId)();
        return n && !(0, s.demoActive)()
          ? `queue:cheque-photos:${n}:${t.id}`
          : null;
      },
      h = new Map(),
      w = new Map(),
      l = new Set();
    async function p(e) {
      const t = await (0, o.readOffline)(e);
      return Array.isArray(t)
        ? t.filter(
            (e) =>
              e &&
              'string' == typeof e.chequeId &&
              ('front' === e.side || 'back' === e.side) &&
              'string' == typeof e.photo &&
              'string' == typeof e.key,
          )
        : [];
    }
    function y(e, t) {
      const n = (w.get(e) || Promise.resolve())
        .catch(() => {})
        .then(async () => {
          const n = t(await p(e));
          return (await (0, o.writeOffline)(e, n), l.forEach((e) => e()), n);
        });
      return (w.set(e, n), n);
    }
    function k(n) {
      const o = f(n);
      if (!o) return Promise.resolve({ sent: 0, waiting: 0, failed: [] });
      const s = h.get(o);
      if (s) return s;
      const w = (async () => {
        let s = await y(o, (e) => e),
          f = 0;
        const h = [],
          w = new Set(),
          l = Date.now();
        for (;;) {
          const p = s.find((e) => !w.has(e.key) && (0, u.isDue)(e, l));
          if (!p) break;
          w.add(p.key);
          try {
            (await (0, c.putChequePhoto)(n, p.chequeId, p.side, p.photo, p.key),
              f++,
              (s = await y(o, (e) => (0, u.pendingAfterSend)(e, p))));
          } catch (n) {
            const c = (0, u.photoAnswer)(
              !(0, t.isNetworkError)(n) && n instanceof e.ApiError
                ? { status: n.status, code: n.message }
                : 'network',
            );
            if ('stop' === c) break;
            if ('drop' === c) {
              (h.push(q(n)),
                (s = await y(o, (e) => (0, u.pendingAfterSend)(e, p))));
              continue;
            }
            if ((0, u.tooOld)(p, l)) {
              (h.push(q(n)),
                (s = await y(o, (e) => (0, u.pendingAfterSend)(e, p))));
              continue;
            }
            s = await y(o, (e) =>
              e.map((e) => (e.key === p.key ? (0, u.postponed)(e, l) : e)),
            );
          }
        }
        return { sent: f, waiting: s.length, failed: h };
      })().finally(() => h.delete(o));
      return (h.set(o, w), w);
    }
    function q(t) {
      return 'rate_limited' === (t instanceof Error ? t.message : '')
        ? (0, n.L)(
            '\u062f\u0631 \u0686\u0646\u062f \u062f\u0642\u06cc\u0642\u0647\u0654 \u06af\u0630\u0634\u062a\u0647 \u0639\u06a9\u0633 \u0632\u06cc\u0627\u062f\u06cc \u0641\u0631\u0633\u062a\u0627\u062f\u0647 \u0634\u062f\u061b \u0686\u0646\u062f \u062f\u0642\u06cc\u0642\u0647 \u0628\u0639\u062f \u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646\u06cc\u062f.',
          )
        : (0, e.message)(t);
    }
  },
  654,
  [415, 427, 311, 428, 448, 519, 655],
);
