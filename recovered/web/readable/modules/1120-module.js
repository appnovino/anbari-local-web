// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1120; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
          return _;
        },
      }));
    var t = e(r(d[0])),
      n = e(r(d[1])),
      u = e(r(d[2])),
      l = e(r(d[3])),
      o = e(r(d[4])),
      f = e(r(d[5])),
      i = e(r(d[6])),
      s = e(r(d[7])),
      h = e(r(d[8])),
      c = e(r(d[9])),
      p = e(r(d[10])),
      w =
        (this && this.__values) ||
        function (e) {
          var t = 'function' == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            u = 0;
          if (n) return n.call(e);
          if (e && 'number' == typeof e.length)
            return {
              next: function () {
                return (
                  e && u >= e.length && (e = void 0),
                  { value: e && e[u++], done: !e }
                );
              },
            };
          throw new TypeError(
            t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      _ = (function () {
        function e() {}
        return (
          (e.prototype.decode = function (e, t) {
            return (
              this.hints !== t && this.setHints(t),
              this.decodeInternal(e)
            );
          }),
          (e.prototype.decodeWithState = function (e) {
            return (
              (null !== this.readers && void 0 !== this.readers) ||
                this.setHints(null),
              this.decodeInternal(e)
            );
          }),
          (e.prototype.setHints = function (e) {
            this.hints = e;
            var h = null != e && void 0 !== e.get(t.default.TRY_HARDER),
              p = null == e ? null : e.get(t.default.POSSIBLE_FORMATS),
              w = new Array();
            if (null != p) {
              var _ = p.some(function (e) {
                return (
                  e === n.default.UPC_A ||
                  e === n.default.UPC_E ||
                  e === n.default.EAN_13 ||
                  e === n.default.EAN_8 ||
                  e === n.default.CODABAR ||
                  e === n.default.CODE_39 ||
                  e === n.default.CODE_93 ||
                  e === n.default.CODE_128 ||
                  e === n.default.ITF ||
                  e === n.default.RSS_14 ||
                  e === n.default.RSS_EXPANDED
                );
              });
              (_ && !h && w.push(new f.default(e)),
                p.includes(n.default.QR_CODE) && w.push(new u.default()),
                p.includes(n.default.MICRO_QR_CODE) && w.push(new l.default()),
                p.includes(n.default.DATA_MATRIX) && w.push(new i.default()),
                p.includes(n.default.AZTEC) && w.push(new o.default()),
                p.includes(n.default.PDF_417) && w.push(new c.default()),
                p.includes(n.default.MAXICODE) && w.push(new s.default()),
                _ && h && w.push(new f.default(e)));
            }
            (0 === w.length &&
              (h || w.push(new f.default(e)),
              w.push(new u.default()),
              w.push(new l.default()),
              w.push(new i.default()),
              w.push(new o.default()),
              w.push(new c.default()),
              w.push(new s.default()),
              h && w.push(new f.default(e))),
              (this.readers = w));
          }),
          (e.prototype.reset = function () {
            var e, t;
            if (null !== this.readers)
              try {
                for (
                  var n = w(this.readers), u = n.next();
                  !u.done;
                  u = n.next()
                ) {
                  u.value.reset();
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  u && !u.done && (t = n.return) && t.call(n);
                } finally {
                  if (e) throw e.error;
                }
              }
          }),
          (e.prototype.decodeInternal = function (e) {
            var t, n;
            if (null === this.readers)
              throw new p.default(
                'No readers where selected, nothing can be read.',
              );
            try {
              for (
                var u = w(this.readers), l = u.next();
                !l.done;
                l = u.next()
              ) {
                var o = l.value;
                try {
                  return o.decode(e, this.hints);
                } catch (e) {
                  if (e instanceof p.default) continue;
                  console.warn(
                    'MultiFormatReader: non-ReaderException from reader:',
                    e,
                  );
                  continue;
                }
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                l && !l.done && (n = u.return) && n.call(u);
              } finally {
                if (t) throw t.error;
              }
            }
            throw new h.default(
              'No MultiFormat Readers were able to detect the code.',
            );
          }),
          e
        );
      })();
  },
  1120,
  [1027, 1040, 1121, 1140, 1038, 1063, 1111, 1149, 1032, 1153, 1178],
);
