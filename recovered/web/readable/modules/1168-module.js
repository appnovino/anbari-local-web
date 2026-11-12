// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1168; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, _m, _e, d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    var e = t(r(d[0])),
      o = t(r(d[1])),
      u =
        (this && this.__values) ||
        function (t) {
          var e = 'function' == typeof Symbol && Symbol.iterator,
            o = e && t[e],
            u = 0;
          if (o) return o.call(t);
          if (t && 'number' == typeof t.length)
            return {
              next: function () {
                return (
                  t && u >= t.length && (t = void 0),
                  { value: t && t[u++], done: !t }
                );
              },
            };
          throw new TypeError(
            e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      n = (function () {
        function t(t, e) {
          ((this.ADJUST_ROW_NUMBER_SKIP = 2),
            (this.barcodeMetadata = t),
            (this.barcodeColumnCount = t.getColumnCount()),
            (this.boundingBox = e),
            (this.detectionResultColumns = new Array(
              this.barcodeColumnCount + 2,
            )));
        }
        return (
          (t.prototype.getDetectionResultColumns = function () {
            (this.adjustIndicatorColumnRowNumbers(
              this.detectionResultColumns[0],
            ),
              this.adjustIndicatorColumnRowNumbers(
                this.detectionResultColumns[this.barcodeColumnCount + 1],
              ));
            var t,
              o = e.default.MAX_CODEWORDS_IN_BARCODE;
            do {
              ((t = o), (o = this.adjustRowNumbersAndGetCount()));
            } while (o > 0 && o < t);
            return this.detectionResultColumns;
          }),
          (t.prototype.adjustIndicatorColumnRowNumbers = function (t) {
            null != t &&
              t.adjustCompleteIndicatorColumnRowNumbers(this.barcodeMetadata);
          }),
          (t.prototype.adjustRowNumbersAndGetCount = function () {
            var t = this.adjustRowNumbersByRow();
            if (0 === t) return 0;
            for (var e = 1; e < this.barcodeColumnCount + 1; e++)
              for (
                var o = this.detectionResultColumns[e].getCodewords(), u = 0;
                u < o.length;
                u++
              )
                null != o[u] &&
                  (o[u].hasValidRowNumber() || this.adjustRowNumbers(e, u, o));
            return t;
          }),
          (t.prototype.adjustRowNumbersByRow = function () {
            return (
              this.adjustRowNumbersFromBothRI(),
              this.adjustRowNumbersFromLRI() + this.adjustRowNumbersFromRRI()
            );
          }),
          (t.prototype.adjustRowNumbersFromBothRI = function () {
            if (
              null != this.detectionResultColumns[0] &&
              null != this.detectionResultColumns[this.barcodeColumnCount + 1]
            )
              for (
                var t = this.detectionResultColumns[0].getCodewords(),
                  e =
                    this.detectionResultColumns[
                      this.barcodeColumnCount + 1
                    ].getCodewords(),
                  o = 0;
                o < t.length;
                o++
              )
                if (
                  null != t[o] &&
                  null != e[o] &&
                  t[o].getRowNumber() === e[o].getRowNumber()
                )
                  for (var u = 1; u <= this.barcodeColumnCount; u++) {
                    var n = this.detectionResultColumns[u].getCodewords()[o];
                    null != n &&
                      (n.setRowNumber(t[o].getRowNumber()),
                      n.hasValidRowNumber() ||
                        (this.detectionResultColumns[u].getCodewords()[o] =
                          null));
                  }
          }),
          (t.prototype.adjustRowNumbersFromRRI = function () {
            if (
              null == this.detectionResultColumns[this.barcodeColumnCount + 1]
            )
              return 0;
            for (
              var e = 0,
                o =
                  this.detectionResultColumns[
                    this.barcodeColumnCount + 1
                  ].getCodewords(),
                u = 0;
              u < o.length;
              u++
            )
              if (null != o[u])
                for (
                  var n = o[u].getRowNumber(),
                    s = 0,
                    l = this.barcodeColumnCount + 1;
                  l > 0 && s < this.ADJUST_ROW_NUMBER_SKIP;
                  l--
                ) {
                  var i = this.detectionResultColumns[l].getCodewords()[u];
                  null != i &&
                    ((s = t.adjustRowNumberIfValid(n, s, i)),
                    i.hasValidRowNumber() || e++);
                }
            return e;
          }),
          (t.prototype.adjustRowNumbersFromLRI = function () {
            if (null == this.detectionResultColumns[0]) return 0;
            for (
              var e = 0,
                o = this.detectionResultColumns[0].getCodewords(),
                u = 0;
              u < o.length;
              u++
            )
              if (null != o[u])
                for (
                  var n = o[u].getRowNumber(), s = 0, l = 1;
                  l < this.barcodeColumnCount + 1 &&
                  s < this.ADJUST_ROW_NUMBER_SKIP;
                  l++
                ) {
                  var i = this.detectionResultColumns[l].getCodewords()[u];
                  null != i &&
                    ((s = t.adjustRowNumberIfValid(n, s, i)),
                    i.hasValidRowNumber() || e++);
                }
            return e;
          }),
          (t.adjustRowNumberIfValid = function (t, e, o) {
            return (
              null == o ||
                o.hasValidRowNumber() ||
                (o.isValidRowNumber(t) ? (o.setRowNumber(t), (e = 0)) : ++e),
              e
            );
          }),
          (t.prototype.adjustRowNumbers = function (e, o, n) {
            var s, l;
            if (null != this.detectionResultColumns[e - 1]) {
              var i = n[o],
                m = this.detectionResultColumns[e - 1].getCodewords(),
                c = m;
              null != this.detectionResultColumns[e + 1] &&
                (c = this.detectionResultColumns[e + 1].getCodewords());
              var C = new Array(14);
              ((C[2] = m[o]),
                (C[3] = c[o]),
                o > 0 &&
                  ((C[0] = n[o - 1]), (C[4] = m[o - 1]), (C[5] = c[o - 1])),
                o > 1 &&
                  ((C[8] = n[o - 2]), (C[10] = m[o - 2]), (C[11] = c[o - 2])),
                o < n.length - 1 &&
                  ((C[1] = n[o + 1]), (C[6] = m[o + 1]), (C[7] = c[o + 1])),
                o < n.length - 2 &&
                  ((C[9] = n[o + 2]), (C[12] = m[o + 2]), (C[13] = c[o + 2])));
              try {
                for (var R = u(C), h = R.next(); !h.done; h = R.next()) {
                  var f = h.value;
                  if (t.adjustRowNumber(i, f)) return;
                }
              } catch (t) {
                s = { error: t };
              } finally {
                try {
                  h && !h.done && (l = R.return) && l.call(R);
                } finally {
                  if (s) throw s.error;
                }
              }
            }
          }),
          (t.adjustRowNumber = function (t, e) {
            return (
              null != e &&
              !(!e.hasValidRowNumber() || e.getBucket() !== t.getBucket()) &&
              (t.setRowNumber(e.getRowNumber()), !0)
            );
          }),
          (t.prototype.getBarcodeColumnCount = function () {
            return this.barcodeColumnCount;
          }),
          (t.prototype.getBarcodeRowCount = function () {
            return this.barcodeMetadata.getRowCount();
          }),
          (t.prototype.getBarcodeECLevel = function () {
            return this.barcodeMetadata.getErrorCorrectionLevel();
          }),
          (t.prototype.setBoundingBox = function (t) {
            this.boundingBox = t;
          }),
          (t.prototype.getBoundingBox = function () {
            return this.boundingBox;
          }),
          (t.prototype.setDetectionResultColumn = function (t, e) {
            this.detectionResultColumns[t] = e;
          }),
          (t.prototype.getDetectionResultColumn = function (t) {
            return this.detectionResultColumns[t];
          }),
          (t.prototype.toString = function () {
            var t = this.detectionResultColumns[0];
            null == t &&
              (t = this.detectionResultColumns[this.barcodeColumnCount + 1]);
            for (
              var e = new o.default(), u = 0;
              u < t.getCodewords().length;
              u++
            ) {
              e.format('CW %3d:', u);
              for (var n = 0; n < this.barcodeColumnCount + 2; n++)
                if (null != this.detectionResultColumns[n]) {
                  var s = this.detectionResultColumns[n].getCodewords()[u];
                  null != s
                    ? e.format(' %3d|%3d', s.getRowNumber(), s.getValue())
                    : e.format('    |   ');
                } else e.format('    |   ');
              e.format('%n');
            }
            return e.toString();
          }),
          t
        );
      })();
  },
  1168,
  [1154, 1166],
);
