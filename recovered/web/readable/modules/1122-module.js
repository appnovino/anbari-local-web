// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1122; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
          return y;
        },
      }));
    var t = e(r(d[0])),
      o = e(r(d[1])),
      n = e(r(d[2])),
      i = e(r(d[3])),
      u = e(r(d[4])),
      l = e(r(d[5])),
      c = e(r(d[6])),
      f = e(r(d[7])),
      s =
        (this && this.__values) ||
        function (e) {
          var t = 'function' == typeof Symbol && Symbol.iterator,
            o = t && e[t],
            n = 0;
          if (o) return o.call(e);
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
            t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      y = (function () {
        function e() {
          this.rsDecoder = new i.default(n.default.QR_CODE_FIELD_256);
        }
        return (
          (e.prototype.decodeBooleanArray = function (e, t) {
            return this.decodeBitMatrix(o.default.parseFromBooleanArray(e), t);
          }),
          (e.prototype.decodeBitMatrix = function (e, t) {
            var o = new u.default(e),
              n = null;
            try {
              return this.decodeBitMatrixParser(o, t);
            } catch (e) {
              n = e;
            }
            try {
              (o.remask(),
                o.setMirror(!0),
                o.readVersion(),
                o.readFormatInformation(),
                o.mirror());
              var i = this.decodeBitMatrixParser(o, t);
              return (i.setOther(new f.default(!0)), i);
            } catch (e) {
              if (null !== n) throw n;
              throw e;
            }
          }),
          (e.prototype.decodeBitMatrixParser = function (e, t) {
            var o,
              n,
              i,
              u,
              f = e.readVersion(),
              y = e.readFormatInformation().getErrorCorrectionLevel(),
              h = e.readCodewords(),
              v = l.default.getDataBlocks(h, f, y),
              w = 0;
            try {
              for (var m = s(v), p = m.next(); !p.done; p = m.next()) {
                w += (M = p.value).getNumDataCodewords();
              }
            } catch (e) {
              o = { error: e };
            } finally {
              try {
                p && !p.done && (n = m.return) && n.call(m);
              } finally {
                if (o) throw o.error;
              }
            }
            var _ = new Uint8Array(w),
              x = 0;
            try {
              for (var b = s(v), B = b.next(); !B.done; B = b.next()) {
                var M,
                  D = (M = B.value).getCodewords(),
                  C = M.getNumDataCodewords();
                this.correctErrors(D, C);
                for (var E = 0; E < C; E++) _[x++] = D[E];
              }
            } catch (e) {
              i = { error: e };
            } finally {
              try {
                B && !B.done && (u = b.return) && u.call(b);
              } finally {
                if (i) throw i.error;
              }
            }
            return c.default.decode(_, f, y, t);
          }),
          (e.prototype.correctErrors = function (e, o) {
            var n = new Int32Array(e);
            try {
              this.rsDecoder.decode(n, e.length - o);
            } catch (e) {
              throw new t.default();
            }
            for (var i = 0; i < o; i++) e[i] = n[i];
          }),
          e
        );
      })();
  },
  1122,
  [1015, 1024, 1044, 1048, 1123, 1130, 1131, 1133],
);
