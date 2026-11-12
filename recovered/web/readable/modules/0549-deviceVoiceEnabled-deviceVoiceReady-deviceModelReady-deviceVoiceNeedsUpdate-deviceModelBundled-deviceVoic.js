// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 549; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.deviceVoiceEnabled = function () {
        try {
          const n = globalThis.localStorage?.getItem('anbari.deviceVoice');
          if ('1' === n || '0' === n) return '1' === n;
          const o = window.location.hostname;
          return (
            'myanbari.ir' === o ||
            'www.myanbari.ir' === o ||
            'test.myanbari.ir' === o ||
            'localhost' === o ||
            '127.0.0.1' === o
          );
        } catch {
          return !1;
        }
      }),
      (e.deviceVoiceReady = function () {
        return !1;
      }),
      (e.deviceModelReady = function () {
        return !1;
      }),
      (e.deviceVoiceNeedsUpdate = function () {
        return !1;
      }),
      (e.deviceModelBundled = function () {
        return !1;
      }),
      (e.deviceVoiceProgress = function () {
        return null;
      }),
      (e.onDeviceVoiceProgress = function (n) {
        return () => {};
      }),
      (e.prepareDeviceVoice = function () {
        return Promise.resolve(!1);
      }),
      (e.warmDeviceVoice = function () {
        return Promise.resolve(!1);
      }),
      (e.listenOnDevice = function (n, o) {
        return null;
      }));
  },
  549,
  [],
);
