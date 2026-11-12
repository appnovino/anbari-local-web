// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 938; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'readAgentStatus', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      Object.defineProperty(e, 'sendAgentMessage', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      Object.defineProperty(e, 'answerAgentConfirm', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      Object.defineProperty(e, 'undoAgentDone', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      (e.openVoiceSocket = async function (n, o) {
        const { ticket: c, path: s } = await (0, t.request)(
            (0, t.shopPath)(n, '/live-agent/ticket'),
            'POST',
            {},
          ),
          u = (0, t.baseUrl)() || window.location.origin;
        return new WebSocket(
          u.replace(/^http/, 'ws') +
            (s || '/v1/live-agent/voice') +
            '?ticket=' +
            encodeURIComponent(c) +
            (o ? '&mode=' + o : ''),
        );
      }),
      r(d[0]));
    var t = r(d[1]);
    const n = (n) => (0, t.request)((0, t.shopPath)(n, '/live-agent'), 'GET'),
      o = (n, o, c) =>
        (0, t.request)((0, t.shopPath)(n, '/live-agent/chat'), 'POST', {
          text: o,
          history: c
            .slice(-12)
            .map((t) => ({ role: t.role, text: t.text.slice(0, 1500) })),
        }),
      c = (n, o, c) =>
        (0, t.request)((0, t.shopPath)(n, '/live-agent/confirm'), 'POST', {
          token: o,
          ok: c,
        }),
      s = (n, o) =>
        (0, t.request)((0, t.shopPath)(n, '/live-agent/undo'), 'POST', {
          token: o,
        });
  },
  938,
  [94, 415],
);
