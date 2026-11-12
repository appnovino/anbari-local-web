// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1165; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, _m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    var o = e(r(d[0])),
      t = e(r(d[1])),
      n =
        (this && this.__values) ||
        function (e) {
          var o = 'function' == typeof Symbol && Symbol.iterator,
            t = o && e[o],
            n = 0;
          if (t) return t.call(e);
          if (e && 'number' == typeof e.length)
            return {
              next: function () {
                return (
                  e && n >= e.length && (e = void 0),
                  { value: e && e[n++], done: !e }
                );
              },
            };
          throw new TypeError(
            o ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      i = (function () {
        function e(e) {
          ((this.boundingBox = new t.default(e)),
            (this.codewords = new Array(e.getMaxY() - e.getMinY() + 1)));
        }
        return (
          (e.prototype.getCodewordNearby = function (o) {
            var t = this.getCodeword(o);
            if (null != t) return t;
            for (var n = 1; n < e.MAX_NEARBY_DISTANCE; n++) {
              var i = this.imageRowToCodewordIndex(o) - n;
              if (i >= 0 && null != (t = this.codewords[i])) return t;
              if (
                (i = this.imageRowToCodewordIndex(o) + n) <
                  this.codewords.length &&
                null != (t = this.codewords[i])
              )
                return t;
            }
            return null;
          }),
          (e.prototype.imageRowToCodewordIndex = function (e) {
            return e - this.boundingBox.getMinY();
          }),
          (e.prototype.setCodeword = function (e, o) {
            this.codewords[this.imageRowToCodewordIndex(e)] = o;
          }),
          (e.prototype.getCodeword = function (e) {
            return this.codewords[this.imageRowToCodewordIndex(e)];
          }),
          (e.prototype.getBoundingBox = function () {
            return this.boundingBox;
          }),
          (e.prototype.getCodewords = function () {
            return this.codewords;
          }),
          (e.prototype.toString = function () {
            var e,
              t,
              i = new o.default(),
              u = 0;
            try {
              for (
                var l = n(this.codewords), f = l.next();
                !f.done;
                f = l.next()
              ) {
                var s = f.value;
                null != s
                  ? i.format(
                      '%3d: %3d|%3d%n',
                      u++,
                      s.getRowNumber(),
                      s.getValue(),
                    )
                  : i.format('%3d:    |   %n', u++);
              }
            } catch (o) {
              e = { error: o };
            } finally {
              try {
                f && !f.done && (t = l.return) && t.call(l);
              } finally {
                if (e) throw e.error;
              }
            }
            return i.toString();
          }),
          (e.MAX_NEARBY_DISTANCE = 5),
          e
        );
      })();
  },
  1165,
  [1166, 1162],
);
