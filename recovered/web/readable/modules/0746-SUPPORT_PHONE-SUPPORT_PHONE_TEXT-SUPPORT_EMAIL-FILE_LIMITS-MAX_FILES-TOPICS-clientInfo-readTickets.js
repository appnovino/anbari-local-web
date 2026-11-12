// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 746; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'SUPPORT_PHONE', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      Object.defineProperty(_e, 'SUPPORT_PHONE_TEXT', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      Object.defineProperty(_e, 'SUPPORT_EMAIL', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }),
      Object.defineProperty(_e, 'FILE_LIMITS', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      Object.defineProperty(_e, 'MAX_FILES', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }),
      Object.defineProperty(_e, 'TOPICS', {
        enumerable: !0,
        get: function () {
          return h;
        },
      }),
      Object.defineProperty(_e, 'clientInfo', {
        enumerable: !0,
        get: function () {
          return b;
        },
      }),
      Object.defineProperty(_e, 'readTickets', {
        enumerable: !0,
        get: function () {
          return y;
        },
      }),
      Object.defineProperty(_e, 'readFaq', {
        enumerable: !0,
        get: function () {
          return P;
        },
      }),
      Object.defineProperty(_e, 'readThread', {
        enumerable: !0,
        get: function () {
          return I;
        },
      }),
      Object.defineProperty(_e, 'readOlder', {
        enumerable: !0,
        get: function () {
          return O;
        },
      }),
      Object.defineProperty(_e, 'closeTicket', {
        enumerable: !0,
        get: function () {
          return v;
        },
      }),
      (_e.packFiles = w),
      Object.defineProperty(_e, 'partId', {
        enumerable: !0,
        get: function () {
          return u.partId;
        },
      }),
      (_e.createTicket = async function (e, t, n = (0, i.randomUUID)()) {
        const [r = [], ...o] = w(t.files),
          u = n,
          c = await (0, i.request)(
            (0, i.shopPath)(e, '/support/tickets'),
            'POST',
            {
              topic: t.topic,
              priority: t.priority,
              title: t.title.trim(),
              body: t.body,
              ...(r.length ? { files: r.map(S) } : {}),
              ...(t.files.length ? { batchId: u } : {}),
              clientId: n,
              client: b(),
            },
          );
        return o.length ? j(e, c.thread.id, o, u, n, c) : c;
      }),
      (_e.sendReply = async function (e, t, n, r, o = (0, i.randomUUID)()) {
        const [u = [], ...c] = w(r),
          s = o,
          p = await (0, i.request)(
            (0, i.shopPath)(e, '/support/' + t + '/messages'),
            'POST',
            {
              body: n,
              ...(u.length ? { files: u.map(S) } : {}),
              ...(r.length ? { batchId: s } : {}),
              clientId: o,
              client: b(),
            },
          );
        return c.length ? j(e, t, c, s, o, p) : p;
      }),
      (_e.loadDraft = async function (e, t = '') {
        try {
          return (await n.default.getItem(U(e, t))) || '';
        } catch {
          return '';
        }
      }),
      (_e.saveDraft = function (e, t, r = '') {
        (t
          ? n.default.setItem(U(e, r), t.slice(0, 5e3))
          : n.default.removeItem(U(e, r))
        ).catch(() => {});
      }),
      (_e.openSupportTicket = function (e) {
        ((k = e), _.forEach((t) => t(e)));
      }),
      (_e.takeSupportTarget = function () {
        const e = k;
        return ((k = null), e);
      }),
      (_e.onSupportTarget = function (e) {
        return (
          _.add(e),
          () => {
            _.delete(e);
          }
        );
      }),
      Object.defineProperty(_e, 'supportUnread', {
        enumerable: !0,
        get: function () {
          return L;
        },
      }),
      (_e.onSupportUnread = function (e) {
        return (
          A.add(e),
          () => {
            A.delete(e);
          }
        );
      }),
      (_e.setSupportUnread = D),
      (_e.setSupportPageOpen = function (e) {
        E = e;
      }),
      (_e.refreshSupportUnread = F),
      (_e.startSupportPolling = function (e, n = 6e4) {
        if (M?.shopId !== e.id) {
          M?.stop();
          let r = null;
          const o = () => {
              'active' === t.default.currentState && F(e);
            },
            i = t.default.addEventListener('change', (e) => {
              'active' === e && o();
            });
          (o(), (r = setInterval(o, n)));
          const u = {
            shopId: e.id,
            users: 0,
            stop: () => {
              (r && clearInterval(r),
                (r = null),
                i.remove(),
                M === u && (M = null));
            },
          };
          M = u;
        }
        const r = M;
        r.users++;
        let o = !1;
        return () => {
          o || ((o = !0), r.users--, r.users <= 0 && r.stop());
        };
      }),
      Object.defineProperty(_e, 'SUPPORT_CHANNEL', {
        enumerable: !0,
        get: function () {
          return H;
        },
      }));
    var t = e(_r(d[0]));
    _r(d[1]);
    var n = e(_r(d[2])),
      r = e(_r(d[3])),
      o = _r(d[4]),
      i = _r(d[5]),
      u = _r(d[6]);
    const c = '+982191031953',
      s = '\u06f0\u06f2\u06f1-\u06f9\u06f1\u06f0\u06f3\u06f1\u06f9\u06f5\u06f3',
      p = 'support@myanbari.ir',
      l = { image: 1e6, file: 3e6, voice: 2e6, voiceMs: 3e5 },
      f = 5,
      h = ['finance', 'technical', 'suggestion', 'other'],
      b = () => ({ version: r.default.expo.version, platform: 'web' }),
      y = (e) => (0, i.request)((0, i.shopPath)(e, '/support/tickets')),
      P = (e) =>
        (0, i.request)((0, i.shopPath)(e, '/support/faq')).then(
          (e) => e.questions || [],
        ),
      I = (e, t) => (0, i.request)((0, i.shopPath)(e, '/support/' + t)),
      O = (e, t, n) =>
        (0, i.request)(
          (0, i.shopPath)(
            e,
            '/support/' + t + '/older?before=' + encodeURIComponent(n),
          ),
        ),
      v = (e, t) =>
        (0, i.request)(
          (0, i.shopPath)(e, '/support/' + t + '/close'),
          'POST',
          {},
        ),
      S = (e) => ({
        dataUrl: e.dataUrl,
        name: e.name,
        ...(void 0 !== e.durationMs
          ? { durationMs: Math.round(e.durationMs) }
          : {}),
      }),
      T = 39e5;
    function w(e) {
      const t = [];
      let n = [],
        r = 0;
      for (const o of e)
        (n.length && r + o.dataUrl.length > T && (t.push(n), (n = []), (r = 0)),
          n.push(o),
          (r += o.dataUrl.length));
      return (n.length && t.push(n), t);
    }
    async function j(e, t, n, r, o, c) {
      let s = c;
      for (const [c, p] of n.entries())
        s = await (0, i.request)(
          (0, i.shopPath)(e, '/support/' + t + '/messages'),
          'POST',
          {
            files: p.map(S),
            batchId: r,
            clientId: (0, u.partId)(o, c + 1),
            client: b(),
          },
        );
      return s;
    }
    const U = (e, t) => 'anbari.support.draft.' + e + (t ? '.' + t : '');
    let k = null;
    const _ = new Set();
    let q = 0,
      M = null,
      E = !1;
    const A = new Set(),
      L = () => q;
    const N = 'anbari.support.notified';
    let R;
    async function B() {
      if (void 0 === R)
        try {
          R = await n.default.getItem(N);
        } catch {
          R = null;
        }
      return R;
    }
    function D(e, t = null) {
      const r = Math.max(0, Math.floor(e) || 0);
      ((q = r),
        A.forEach((e) => e(r)),
        C(r),
        t?.messageId &&
          (async () => {
            if ((await B()) !== t.messageId) {
              R = t.messageId;
              try {
                await n.default.setItem(N, t.messageId);
              } catch {}
              E || (await x(t));
            }
          })());
    }
    async function F(e) {
      try {
        const t = await (0, i.request)((0, i.shopPath)(e, '/support/unread'));
        D(t.unread, t.latest || null);
      } catch {}
    }
    async function C(e) {
      try {
        {
          const t = 'undefined' != typeof navigator ? navigator : null;
          return void (e && t?.setAppBadge
            ? await t.setAppBadge(e)
            : !e && t?.clearAppBadge && (await t.clearAppBadge()));
        }
      } catch {}
    }
    const H = 'support';
    async function x(e) {
      const t = (0, o.L)(
          '\u062a\u06cc\u06a9\u062a \u0634\u0645\u0627 \u067e\u0627\u0633\u062e \u062f\u0627\u062f\u0647 \u0634\u062f',
        ),
        n = e.subject;
      try {
        return void (
          'undefined' != typeof Notification &&
          'granted' === Notification.permission &&
          'serviceWorker' in navigator &&
          (await (
            await navigator.serviceWorker.ready
          ).showNotification(t, {
            body: n,
            tag: 'ticket-' + e.id,
            data: { view: 'support', ticketId: e.id, url: '/?ticket=' + e.id },
          }))
        );
      } catch {}
    }
  },
  746,
  {
    0: 203,
    1: 94,
    2: 258,
    3: 426,
    4: 311,
    5: 415,
    6: 747,
    7: 996,
    8: 336,
    paths: {},
  },
);
