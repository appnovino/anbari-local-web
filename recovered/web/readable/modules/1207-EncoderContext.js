// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1207; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'EncoderContext', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    var o = t(r(d[0])),
      e = t(r(d[1])),
      n = (function () {
        function t(t) {
          ((this.msg = t), (this.pos = 0), (this.skipAtEnd = 0));
          for (
            var e = t.split('').map(function (t) {
                return t.charCodeAt(0);
              }),
              n = new o.default(),
              i = 0,
              s = e.length;
            i < s;
            i++
          ) {
            var p = String.fromCharCode(255 & e[i]);
            if ('?' === p && '?' !== t.charAt(i))
              throw new Error(
                'Message contains characters outside ISO-8859-1 encoding.',
              );
            n.append(p);
          }
          ((this.msg = n.toString()),
            (this.shape = 0),
            (this.codewords = new o.default()),
            (this.newEncoding = -1));
        }
        return (
          (t.prototype.setSymbolShape = function (t) {
            this.shape = t;
          }),
          (t.prototype.setSizeConstraints = function (t, o) {
            ((this.minSize = t), (this.maxSize = o));
          }),
          (t.prototype.getMessage = function () {
            return this.msg;
          }),
          (t.prototype.setSkipAtEnd = function (t) {
            this.skipAtEnd = t;
          }),
          (t.prototype.getCurrentChar = function () {
            return this.msg.charCodeAt(this.pos);
          }),
          (t.prototype.getCurrent = function () {
            return this.msg.charCodeAt(this.pos);
          }),
          (t.prototype.getCodewords = function () {
            return this.codewords;
          }),
          (t.prototype.writeCodewords = function (t) {
            this.codewords.append(t);
          }),
          (t.prototype.writeCodeword = function (t) {
            this.codewords.append(t);
          }),
          (t.prototype.getCodewordCount = function () {
            return this.codewords.length();
          }),
          (t.prototype.getNewEncoding = function () {
            return this.newEncoding;
          }),
          (t.prototype.signalEncoderChange = function (t) {
            this.newEncoding = t;
          }),
          (t.prototype.resetEncoderSignal = function () {
            this.newEncoding = -1;
          }),
          (t.prototype.hasMoreCharacters = function () {
            return this.pos < this.getTotalMessageCharCount();
          }),
          (t.prototype.getTotalMessageCharCount = function () {
            return this.msg.length - this.skipAtEnd;
          }),
          (t.prototype.getRemainingCharacters = function () {
            return this.getTotalMessageCharCount() - this.pos;
          }),
          (t.prototype.getSymbolInfo = function () {
            return this.symbolInfo;
          }),
          (t.prototype.updateSymbolInfo = function (t) {
            (void 0 === t && (t = this.getCodewordCount()),
              (null == this.symbolInfo ||
                t > this.symbolInfo.getDataCapacity()) &&
                (this.symbolInfo = e.default.lookup(
                  t,
                  this.shape,
                  this.minSize,
                  this.maxSize,
                  !0,
                )));
          }),
          (t.prototype.resetSymbolInfo = function () {
            this.symbolInfo = null;
          }),
          t
        );
      })();
  },
  1207,
  [1025, 1208],
);
