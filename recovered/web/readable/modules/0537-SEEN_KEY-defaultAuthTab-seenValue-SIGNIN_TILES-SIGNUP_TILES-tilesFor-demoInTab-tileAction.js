// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 537; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'SEEN_KEY', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      (e.defaultAuthTab = function ({ seen: n, hash: u = '' }) {
        return t[u] ?? (n ? 'signin' : 'signup');
      }),
      (e.seenValue = function (n) {
        return '1' === n;
      }),
      Object.defineProperty(e, 'SIGNIN_TILES', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      Object.defineProperty(e, 'SIGNUP_TILES', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      (e.tilesFor = function (n) {
        return 'signin' === n ? u : o;
      }),
      (e.demoInTab = function (n) {
        return 'signup' === n;
      }),
      (e.tileAction = function (n, t) {
        return 'phone' === n ? t.phone : 'email' === n ? t.email : t.google;
      }));
    const n = 'anbari.auth.seen',
      t = {
        '#login': 'signin',
        '#email': 'signin',
        '#staff': 'signin',
        '#reset': 'signin',
        '#join': 'signup',
        '#signup': 'signup',
        '#signup-email': 'signup',
      };
    const u = ['google'],
      o = ['phone', 'google'];
  },
  537,
  [],
);
