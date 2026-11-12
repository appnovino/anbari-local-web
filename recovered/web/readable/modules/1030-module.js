// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1030; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    var n = e(r(d[0])),
      t = e(r(d[1])),
      o = (function () {
        function e() {}
        return (
          (e.decode = function (e, n) {
            var t = this.encodingName(n);
            return this.customDecoder
              ? this.customDecoder(e, t)
              : 'undefined' == typeof TextDecoder ||
                  this.shouldDecodeOnFallback(t)
                ? this.decodeFallback(e, t)
                : new TextDecoder(t).decode(e);
          }),
          (e.shouldDecodeOnFallback = function (e) {
            return !1;
          }),
          (e.encode = function (e, n) {
            var t = this.encodingName(n);
            return this.customEncoder
              ? this.customEncoder(e, t)
              : 'undefined' == typeof TextEncoder
                ? this.encodeFallback(e)
                : new TextEncoder().encode(e);
          }),
          (e.isBrowser = function () {
            return (
              'undefined' != typeof window &&
              '[object Window]' === {}.toString.call(window)
            );
          }),
          (e.encodingName = function (e) {
            return 'string' == typeof e ? e : e.getName();
          }),
          (e.encodingCharacterSet = function (e) {
            return e instanceof t.default
              ? e
              : t.default.getCharacterSetECIByName(e);
          }),
          (e.decodeFallback = function (o, c) {
            var u = this.encodingCharacterSet(c);
            if (e.isDecodeFallbackSupported(u)) {
              for (var i = '', l = 0, f = o.length; l < f; l++) {
                var s = o[l].toString(16);
                (s.length < 2 && (s = '0' + s), (i += '%' + s));
              }
              return decodeURIComponent(i);
            }
            if (u.equals(t.default.UnicodeBigUnmarked))
              return String.fromCharCode.apply(
                null,
                Array.from(new Uint16Array(o.buffer)),
              );
            throw new n.default(
              'Encoding '.concat(
                this.encodingName(c),
                ' not supported by fallback.',
              ),
            );
          }),
          (e.isDecodeFallbackSupported = function (e) {
            return (
              e.equals(t.default.UTF8) ||
              e.equals(t.default.ISO8859_1) ||
              e.equals(t.default.ASCII)
            );
          }),
          (e.encodeFallback = function (e) {
            for (
              var n = btoa(unescape(encodeURIComponent(e))).split(''),
                t = [],
                o = 0;
              o < n.length;
              o++
            )
              t.push(n[o].charCodeAt(0));
            return new Uint8Array(t);
          }),
          e
        );
      })();
  },
  1030,
  [1031, 1028],
);
