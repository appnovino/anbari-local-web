// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1132; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return N;
        },
      }),
      Object.defineProperty(_e, 'ModeValues', {
        enumerable: !0,
        get: function () {
          return e;
        },
      }));
    var t,
      e,
      n = r(d[0]),
      I = (t = n) && t.__esModule ? t : { default: t };
    !(function (t) {
      ((t[(t.TERMINATOR = 0)] = 'TERMINATOR'),
        (t[(t.NUMERIC = 1)] = 'NUMERIC'),
        (t[(t.ALPHANUMERIC = 2)] = 'ALPHANUMERIC'),
        (t[(t.STRUCTURED_APPEND = 3)] = 'STRUCTURED_APPEND'),
        (t[(t.BYTE = 4)] = 'BYTE'),
        (t[(t.ECI = 5)] = 'ECI'),
        (t[(t.KANJI = 6)] = 'KANJI'),
        (t[(t.FNC1_FIRST_POSITION = 7)] = 'FNC1_FIRST_POSITION'),
        (t[(t.FNC1_SECOND_POSITION = 8)] = 'FNC1_SECOND_POSITION'),
        (t[(t.HANZI = 9)] = 'HANZI'));
    })(e || (e = {}));
    var N = (function () {
      function t(e, n, I, N) {
        ((this.value = e),
          (this.stringValue = n),
          (this.characterCountBitsForVersions = I),
          (this.bits = N),
          t.FOR_BITS.set(N, this),
          t.FOR_VALUE.set(e, this));
      }
      return (
        (t.forBits = function (e) {
          var n = t.FOR_BITS.get(e);
          if (void 0 === n) throw new I.default();
          return n;
        }),
        (t.prototype.getCharacterCountBits = function (t) {
          var e,
            n = t.getVersionNumber();
          return (
            (e = n <= 9 ? 0 : n <= 26 ? 1 : 2),
            this.characterCountBitsForVersions[e]
          );
        }),
        (t.prototype.getValue = function () {
          return this.value;
        }),
        (t.prototype.getBits = function () {
          return this.bits;
        }),
        (t.prototype.equals = function (e) {
          if (!(e instanceof t)) return !1;
          var n = e;
          return this.value === n.value;
        }),
        (t.prototype.toString = function () {
          return this.stringValue;
        }),
        (t.FOR_BITS = new Map()),
        (t.FOR_VALUE = new Map()),
        (t.TERMINATOR = new t(
          e.TERMINATOR,
          'TERMINATOR',
          Int32Array.from([0, 0, 0]),
          0,
        )),
        (t.NUMERIC = new t(
          e.NUMERIC,
          'NUMERIC',
          Int32Array.from([10, 12, 14]),
          1,
        )),
        (t.ALPHANUMERIC = new t(
          e.ALPHANUMERIC,
          'ALPHANUMERIC',
          Int32Array.from([9, 11, 13]),
          2,
        )),
        (t.STRUCTURED_APPEND = new t(
          e.STRUCTURED_APPEND,
          'STRUCTURED_APPEND',
          Int32Array.from([0, 0, 0]),
          3,
        )),
        (t.BYTE = new t(e.BYTE, 'BYTE', Int32Array.from([8, 16, 16]), 4)),
        (t.ECI = new t(e.ECI, 'ECI', Int32Array.from([0, 0, 0]), 7)),
        (t.KANJI = new t(e.KANJI, 'KANJI', Int32Array.from([8, 10, 12]), 8)),
        (t.FNC1_FIRST_POSITION = new t(
          e.FNC1_FIRST_POSITION,
          'FNC1_FIRST_POSITION',
          Int32Array.from([0, 0, 0]),
          5,
        )),
        (t.FNC1_SECOND_POSITION = new t(
          e.FNC1_SECOND_POSITION,
          'FNC1_SECOND_POSITION',
          Int32Array.from([0, 0, 0]),
          9,
        )),
        (t.HANZI = new t(e.HANZI, 'HANZI', Int32Array.from([8, 10, 12]), 13)),
        t
      );
    })();
  },
  1132,
  [1014],
);
