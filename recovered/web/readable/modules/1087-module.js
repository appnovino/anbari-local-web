// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1087; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    var e = t(r(d[0])),
      i = t(r(d[1])),
      n = t(r(d[2])),
      o = t(r(d[3])),
      s = t(r(d[4])),
      u = t(r(d[5])),
      c = t(r(d[6])),
      f = t(r(d[7])),
      h = t(r(d[8])),
      l = (function () {
        function t(t) {
          ((this.current = new s.default()),
            (this.buffer = new n.default()),
            (this.information = t));
        }
        return (
          (t.prototype.decodeAllCodes = function (t, e) {
            for (var i = e, n = null; ; ) {
              var o = this.decodeGeneralPurposeField(i, n),
                s = h.default.parseFieldsInGeneralPurpose(o.getNewString());
              if (
                (null !== s && t.append(s),
                (n = o.isRemaining() ? '' + o.getRemainingValue() : null),
                i === o.getNewPosition())
              )
                break;
              i = o.getNewPosition();
            }
            return t.toString();
          }),
          (t.prototype.isStillNumeric = function (t) {
            if (t + 7 > this.information.getSize())
              return t + 4 <= this.information.getSize();
            for (var e = t; e < t + 3; ++e)
              if (this.information.get(e)) return !0;
            return this.information.get(t + 3);
          }),
          (t.prototype.decodeNumeric = function (t) {
            if (t + 7 > this.information.getSize()) {
              var e = this.extractNumericValueFromBitArray(t, 4);
              return 0 === e
                ? new f.default(
                    this.information.getSize(),
                    f.default.FNC1,
                    f.default.FNC1,
                  )
                : new f.default(
                    this.information.getSize(),
                    e - 1,
                    f.default.FNC1,
                  );
            }
            var i = this.extractNumericValueFromBitArray(t, 7),
              n = Math.trunc((i - 8) / 11),
              o = (i - 8) % 11;
            return new f.default(t + 7, n, o);
          }),
          (t.prototype.extractNumericValueFromBitArray = function (e, i) {
            return t.extractNumericValueFromBitArray(this.information, e, i);
          }),
          (t.extractNumericValueFromBitArray = function (t, e, i) {
            for (var n = 0, o = 0; o < i; ++o)
              t.get(e + o) && (n |= 1 << (i - o - 1));
            return n;
          }),
          (t.prototype.decodeGeneralPurposeField = function (t, e) {
            (this.buffer.setLengthToZero(),
              null !== e && this.buffer.append(e),
              this.current.setPosition(t));
            var i = this.parseBlocks();
            return null !== i && i.isRemaining()
              ? new c.default(
                  this.current.getPosition(),
                  this.buffer.toString(),
                  i.getRemainingValue(),
                )
              : new c.default(
                  this.current.getPosition(),
                  this.buffer.toString(),
                );
          }),
          (t.prototype.parseBlocks = function () {
            var t,
              e = !1;
            do {
              var i = this.current.getPosition();
              if (
                ((e = this.current.isAlpha()
                  ? (t = this.parseAlphaBlock()).isFinished()
                  : this.current.isIsoIec646()
                    ? (t = this.parseIsoIec646Block()).isFinished()
                    : (t = this.parseNumericBlock()).isFinished()),
                !(i !== this.current.getPosition()) && !e)
              )
                break;
            } while (!e);
            return t.getDecodedInformation();
          }),
          (t.prototype.parseNumericBlock = function () {
            for (; this.isStillNumeric(this.current.getPosition()); ) {
              var t = this.decodeNumeric(this.current.getPosition());
              if (
                (this.current.setPosition(t.getNewPosition()),
                t.isFirstDigitFNC1())
              ) {
                var e = void 0;
                return (
                  (e = t.isSecondDigitFNC1()
                    ? new c.default(
                        this.current.getPosition(),
                        this.buffer.toString(),
                      )
                    : new c.default(
                        this.current.getPosition(),
                        this.buffer.toString(),
                        t.getSecondDigit(),
                      )),
                  new o.default(e, !0)
                );
              }
              if (
                (this.buffer.append('' + t.getFirstDigit()),
                t.isSecondDigitFNC1())
              ) {
                e = new c.default(
                  this.current.getPosition(),
                  this.buffer.toString(),
                );
                return new o.default(e, !0);
              }
              this.buffer.append('' + t.getSecondDigit());
            }
            return (
              this.isNumericToAlphaNumericLatch(this.current.getPosition()) &&
                (this.current.setAlpha(), this.current.incrementPosition(4)),
              new o.default()
            );
          }),
          (t.prototype.parseIsoIec646Block = function () {
            for (; this.isStillIsoIec646(this.current.getPosition()); ) {
              var t = this.decodeIsoIec646(this.current.getPosition());
              if ((this.current.setPosition(t.getNewPosition()), t.isFNC1())) {
                var e = new c.default(
                  this.current.getPosition(),
                  this.buffer.toString(),
                );
                return new o.default(e, !0);
              }
              this.buffer.append(t.getValue());
            }
            return (
              this.isAlphaOr646ToNumericLatch(this.current.getPosition())
                ? (this.current.incrementPosition(3), this.current.setNumeric())
                : this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) &&
                  (this.current.getPosition() + 5 < this.information.getSize()
                    ? this.current.incrementPosition(5)
                    : this.current.setPosition(this.information.getSize()),
                  this.current.setAlpha()),
              new o.default()
            );
          }),
          (t.prototype.parseAlphaBlock = function () {
            for (; this.isStillAlpha(this.current.getPosition()); ) {
              var t = this.decodeAlphanumeric(this.current.getPosition());
              if ((this.current.setPosition(t.getNewPosition()), t.isFNC1())) {
                var e = new c.default(
                  this.current.getPosition(),
                  this.buffer.toString(),
                );
                return new o.default(e, !0);
              }
              this.buffer.append(t.getValue());
            }
            return (
              this.isAlphaOr646ToNumericLatch(this.current.getPosition())
                ? (this.current.incrementPosition(3), this.current.setNumeric())
                : this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) &&
                  (this.current.getPosition() + 5 < this.information.getSize()
                    ? this.current.incrementPosition(5)
                    : this.current.setPosition(this.information.getSize()),
                  this.current.setIsoIec646()),
              new o.default()
            );
          }),
          (t.prototype.isStillIsoIec646 = function (t) {
            if (t + 5 > this.information.getSize()) return !1;
            var e = this.extractNumericValueFromBitArray(t, 5);
            if (e >= 5 && e < 16) return !0;
            if (t + 7 > this.information.getSize()) return !1;
            var i = this.extractNumericValueFromBitArray(t, 7);
            if (i >= 64 && i < 116) return !0;
            if (t + 8 > this.information.getSize()) return !1;
            var n = this.extractNumericValueFromBitArray(t, 8);
            return n >= 232 && n < 253;
          }),
          (t.prototype.decodeIsoIec646 = function (t) {
            var i = this.extractNumericValueFromBitArray(t, 5);
            if (15 === i) return new u.default(t + 5, u.default.FNC1);
            if (i >= 5 && i < 15)
              return new u.default(
                t + 5,
                String.fromCharCode('0'.charCodeAt(0) + i - 5),
              );
            var n,
              o = this.extractNumericValueFromBitArray(t, 7);
            if (o >= 64 && o < 90)
              return new u.default(t + 7, String.fromCharCode(o + 1));
            if (o >= 90 && o < 116)
              return new u.default(t + 7, String.fromCharCode(o + 7));
            switch (this.extractNumericValueFromBitArray(t, 8)) {
              case 232:
                n = '!';
                break;
              case 233:
                n = '"';
                break;
              case 234:
                n = '%';
                break;
              case 235:
                n = '&';
                break;
              case 236:
                n = "'";
                break;
              case 237:
                n = '(';
                break;
              case 238:
                n = ')';
                break;
              case 239:
                n = '*';
                break;
              case 240:
                n = '+';
                break;
              case 241:
                n = ',';
                break;
              case 242:
                n = '-';
                break;
              case 243:
                n = '.';
                break;
              case 244:
                n = '/';
                break;
              case 245:
                n = ':';
                break;
              case 246:
                n = ';';
                break;
              case 247:
                n = '<';
                break;
              case 248:
                n = '=';
                break;
              case 249:
                n = '>';
                break;
              case 250:
                n = '?';
                break;
              case 251:
                n = '_';
                break;
              case 252:
                n = ' ';
                break;
              default:
                throw new e.default();
            }
            return new u.default(t + 8, n);
          }),
          (t.prototype.isStillAlpha = function (t) {
            if (t + 5 > this.information.getSize()) return !1;
            var e = this.extractNumericValueFromBitArray(t, 5);
            if (e >= 5 && e < 16) return !0;
            if (t + 6 > this.information.getSize()) return !1;
            var i = this.extractNumericValueFromBitArray(t, 6);
            return i >= 16 && i < 63;
          }),
          (t.prototype.decodeAlphanumeric = function (t) {
            var e = this.extractNumericValueFromBitArray(t, 5);
            if (15 === e) return new u.default(t + 5, u.default.FNC1);
            if (e >= 5 && e < 15)
              return new u.default(
                t + 5,
                String.fromCharCode('0'.charCodeAt(0) + e - 5),
              );
            var n,
              o = this.extractNumericValueFromBitArray(t, 6);
            if (o >= 32 && o < 58)
              return new u.default(t + 6, String.fromCharCode(o + 33));
            switch (o) {
              case 58:
                n = '*';
                break;
              case 59:
                n = ',';
                break;
              case 60:
                n = '-';
                break;
              case 61:
                n = '.';
                break;
              case 62:
                n = '/';
                break;
              default:
                throw new i.default(
                  'Decoding invalid alphanumeric value: ' + o,
                );
            }
            return new u.default(t + 6, n);
          }),
          (t.prototype.isAlphaTo646ToAlphaLatch = function (t) {
            if (t + 1 > this.information.getSize()) return !1;
            for (var e = 0; e < 5 && e + t < this.information.getSize(); ++e)
              if (2 === e) {
                if (!this.information.get(t + 2)) return !1;
              } else if (this.information.get(t + e)) return !1;
            return !0;
          }),
          (t.prototype.isAlphaOr646ToNumericLatch = function (t) {
            if (t + 3 > this.information.getSize()) return !1;
            for (var e = t; e < t + 3; ++e)
              if (this.information.get(e)) return !1;
            return !0;
          }),
          (t.prototype.isNumericToAlphaNumericLatch = function (t) {
            if (t + 1 > this.information.getSize()) return !1;
            for (var e = 0; e < 4 && e + t < this.information.getSize(); ++e)
              if (this.information.get(t + e)) return !1;
            return !0;
          }),
          t
        );
      })();
  },
  1087,
  [1029, 1050, 1025, 1088, 1089, 1090, 1092, 1093, 1094],
);
