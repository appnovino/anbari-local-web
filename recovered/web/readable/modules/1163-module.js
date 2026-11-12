// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1163; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, _m, _e, _d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }));
    var e,
      o = t(r(_d[0])),
      n = t(r(_d[1])),
      u = t(r(_d[2])),
      l = t(r(_d[3])),
      i =
        (this && this.__extends) ||
        ((e = function (t, o) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var o in e)
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              }),
            e(t, o)
          );
        }),
        function (t, o) {
          if ('function' != typeof o && null !== o)
            throw new TypeError(
              'Class extends value ' +
                String(o) +
                ' is not a constructor or null',
            );
          function n() {
            this.constructor = t;
          }
          (e(t, o),
            (t.prototype =
              null === o
                ? Object.create(o)
                : ((n.prototype = o.prototype), new n())));
        }),
      s =
        (this && this.__values) ||
        function (t) {
          var e = 'function' == typeof Symbol && Symbol.iterator,
            o = e && t[e],
            n = 0;
          if (o) return o.call(t);
          if (t && 'number' == typeof t.length)
            return {
              next: function () {
                return (
                  t && n >= t.length && (t = void 0),
                  { value: t && t[n++], done: !t }
                );
              },
            };
          throw new TypeError(
            e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      f = (function (t) {
        function e(e, o) {
          var n = t.call(this, e) || this;
          return ((n._isLeft = o), n);
        }
        return (
          i(e, t),
          (e.prototype.setRowNumbers = function () {
            var t, e;
            try {
              for (
                var o = s(this.getCodewords()), n = o.next();
                !n.done;
                n = o.next()
              ) {
                var u = n.value;
                null != u && u.setRowNumberAsRowIndicatorColumn();
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                n && !n.done && (e = o.return) && e.call(o);
              } finally {
                if (t) throw t.error;
              }
            }
          }),
          (e.prototype.adjustCompleteIndicatorColumnRowNumbers = function (t) {
            var e = this.getCodewords();
            (this.setRowNumbers(), this.removeIncorrectCodewords(e, t));
            for (
              var o = this.getBoundingBox(),
                n = this._isLeft ? o.getTopLeft() : o.getTopRight(),
                u = this._isLeft ? o.getBottomLeft() : o.getBottomRight(),
                l = this.imageRowToCodewordIndex(Math.trunc(n.getY())),
                i = this.imageRowToCodewordIndex(Math.trunc(u.getY())),
                s = -1,
                f = 1,
                c = 0,
                d = l;
              d < i;
              d++
            )
              if (null != e[d]) {
                var h = e[d],
                  w = h.getRowNumber() - s;
                if (0 === w) c++;
                else if (1 === w)
                  ((f = Math.max(f, c)), (c = 1), (s = h.getRowNumber()));
                else if (w < 0 || h.getRowNumber() >= t.getRowCount() || w > d)
                  e[d] = null;
                else {
                  for (
                    var m = void 0,
                      p = (m = f > 2 ? (f - 2) * w : w) >= d,
                      R = 1;
                    R <= m && !p;
                    R++
                  )
                    p = null != e[d - R];
                  p ? (e[d] = null) : ((s = h.getRowNumber()), (c = 1));
                }
              }
          }),
          (e.prototype.getRowHeights = function () {
            var t,
              e,
              o = this.getBarcodeMetadata();
            if (null == o) return null;
            this.adjustIncompleteIndicatorColumnRowNumbers(o);
            var n = new Int32Array(o.getRowCount());
            try {
              for (
                var u = s(this.getCodewords()), l = u.next();
                !l.done;
                l = u.next()
              ) {
                var i = l.value;
                if (null != i) {
                  var f = i.getRowNumber();
                  if (f >= n.length) continue;
                  n[f]++;
                }
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                l && !l.done && (e = u.return) && e.call(u);
              } finally {
                if (t) throw t.error;
              }
            }
            return n;
          }),
          (e.prototype.adjustIncompleteIndicatorColumnRowNumbers = function (
            t,
          ) {
            for (
              var e = this.getBoundingBox(),
                o = this._isLeft ? e.getTopLeft() : e.getTopRight(),
                n = this._isLeft ? e.getBottomLeft() : e.getBottomRight(),
                u = this.imageRowToCodewordIndex(Math.trunc(o.getY())),
                l = this.imageRowToCodewordIndex(Math.trunc(n.getY())),
                i = this.getCodewords(),
                s = -1,
                f = 1,
                c = 0,
                d = u;
              d < l;
              d++
            )
              if (null != i[d]) {
                var h = i[d];
                h.setRowNumberAsRowIndicatorColumn();
                var w = h.getRowNumber() - s;
                0 === w
                  ? c++
                  : 1 === w
                    ? ((f = Math.max(f, c)), (c = 1), (s = h.getRowNumber()))
                    : h.getRowNumber() >= t.getRowCount()
                      ? (i[d] = null)
                      : ((s = h.getRowNumber()), (c = 1));
              }
          }),
          (e.prototype.getBarcodeMetadata = function () {
            var t,
              e,
              u = this.getCodewords(),
              i = new l.default(),
              f = new l.default(),
              c = new l.default(),
              d = new l.default();
            try {
              for (var h = s(u), w = h.next(); !w.done; w = h.next()) {
                var m = w.value;
                if (null != m) {
                  m.setRowNumberAsRowIndicatorColumn();
                  var p = m.getValue() % 30,
                    R = m.getRowNumber();
                  switch ((this._isLeft || (R += 2), R % 3)) {
                    case 0:
                      f.setValue(3 * p + 1);
                      break;
                    case 1:
                      (d.setValue(p / 3), c.setValue(p % 3));
                      break;
                    case 2:
                      i.setValue(p + 1);
                  }
                }
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                w && !w.done && (e = h.return) && e.call(h);
              } finally {
                if (t) throw t.error;
              }
            }
            if (
              0 === i.getValue().length ||
              0 === f.getValue().length ||
              0 === c.getValue().length ||
              0 === d.getValue().length ||
              i.getValue()[0] < 1 ||
              f.getValue()[0] + c.getValue()[0] <
                o.default.MIN_ROWS_IN_BARCODE ||
              f.getValue()[0] + c.getValue()[0] > o.default.MAX_ROWS_IN_BARCODE
            )
              return null;
            var v = new n.default(
              i.getValue()[0],
              f.getValue()[0],
              c.getValue()[0],
              d.getValue()[0],
            );
            return (this.removeIncorrectCodewords(u, v), v);
          }),
          (e.prototype.removeIncorrectCodewords = function (t, e) {
            for (var o = 0; o < t.length; o++) {
              var n = t[o];
              if (null != t[o]) {
                var u = n.getValue() % 30,
                  l = n.getRowNumber();
                if (l > e.getRowCount()) t[o] = null;
                else
                  switch ((this._isLeft || (l += 2), l % 3)) {
                    case 0:
                      3 * u + 1 !== e.getRowCountUpperPart() && (t[o] = null);
                      break;
                    case 1:
                      (Math.trunc(u / 3) === e.getErrorCorrectionLevel() &&
                        u % 3 === e.getRowCountLowerPart()) ||
                        (t[o] = null);
                      break;
                    case 2:
                      u + 1 !== e.getColumnCount() && (t[o] = null);
                  }
              }
            }
          }),
          (e.prototype.isLeft = function () {
            return this._isLeft;
          }),
          (e.prototype.toString = function () {
            return (
              'IsLeft: ' + this._isLeft + '\n' + t.prototype.toString.call(this)
            );
          }),
          e
        );
      })(u.default);
  },
  1163,
  [1154, 1164, 1165, 1167],
);
