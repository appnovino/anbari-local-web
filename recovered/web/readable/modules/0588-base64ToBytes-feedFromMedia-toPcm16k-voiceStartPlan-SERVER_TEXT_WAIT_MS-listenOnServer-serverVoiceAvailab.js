// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 588; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'base64ToBytes', {
        enumerable: !0,
        get: function () {
          return n.base64ToBytes;
        },
      }),
      Object.defineProperty(e, 'feedFromMedia', {
        enumerable: !0,
        get: function () {
          return n.feedFromMedia;
        },
      }),
      Object.defineProperty(e, 'toPcm16k', {
        enumerable: !0,
        get: function () {
          return n.toPcm16k;
        },
      }),
      Object.defineProperty(e, 'voiceStartPlan', {
        enumerable: !0,
        get: function () {
          return n.voiceStartPlan;
        },
      }),
      Object.defineProperty(e, 'SERVER_TEXT_WAIT_MS', {
        enumerable: !0,
        get: function () {
          return n.SERVER_TEXT_WAIT_MS;
        },
      }),
      (e.listenOnServer = function (o) {
        return t.activeShop
          ? (0, n.openServerStream)(
              (0, t.shopPath)(t.activeShop, '/voice/stream-token'),
              { ask: (n) => (0, t.request)(n, 'GET'), onPartial: o },
            )
          : null;
      }),
      (e.serverVoiceAvailable = function () {
        return t.activeShop && 'undefined' != typeof WebSocket
          ? o((0, t.shopPath)(t.activeShop, '/voice/stream-token'), (n) =>
              (0, t.request)(n, 'GET'),
            )
          : Promise.resolve(!1);
      }),
      (e.serverVoiceMissed = function () {
        t.activeShop &&
          o.missed((0, t.shopPath)(t.activeShop, '/voice/stream-token'));
      }));
    var t = r(d[0]),
      n = r(d[1]);
    const o = (0, n.serverVoiceCheck)();
  },
  588,
  [415, 589],
);
