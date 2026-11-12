// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1215; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, _m, _e2, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e2, '__esModule', { value: !0 }),
      Object.defineProperty(_e2, 'ECIEncoderSet', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }));
    var t = e(r(d[0])),
      n = e(r(d[1])),
      o = e(r(d[2])),
      i = e(r(d[3])),
      s =
        (this && this.__values) ||
        function (e) {
          var t = 'function' == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            o = 0;
          if (n) return n.call(e);
          if (e && 'number' == typeof e.length)
            return {
              next: function () {
                return (
                  e && o >= e.length && (e = void 0),
                  { value: e && e[o++], done: !e }
                );
              },
            };
          throw new TypeError(
            t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      h = (function () {
        function e(e) {
          ((this.charset = e), (this.name = e.name));
        }
        return (
          (e.prototype.canEncode = function (e) {
            try {
              return null != o.default.encode(e, this.charset);
            } catch (e) {
              return !1;
            }
          }),
          e
        );
      })(),
      c = (function () {
        function e(e, o, i) {
          var c, l, u, f, y, p;
          ((this.ENCODERS = [
            'IBM437',
            'ISO-8859-2',
            'ISO-8859-3',
            'ISO-8859-4',
            'ISO-8859-5',
            'ISO-8859-6',
            'ISO-8859-7',
            'ISO-8859-8',
            'ISO-8859-9',
            'ISO-8859-10',
            'ISO-8859-11',
            'ISO-8859-13',
            'ISO-8859-14',
            'ISO-8859-15',
            'ISO-8859-16',
            'windows-1250',
            'windows-1251',
            'windows-1252',
            'windows-1256',
            'Shift_JIS',
          ].map(function (e) {
            return new h(t.default.forName(e));
          })),
            (this.encoders = []));
          var w = [];
          w.push(new h(n.default.ISO_8859_1));
          for (
            var I = null != o && o.name.startsWith('UTF'), S = 0;
            S < e.length;
            S++
          ) {
            var v = !1;
            try {
              for (
                var O = ((c = void 0), s(w)), m = O.next();
                !m.done;
                m = O.next()
              ) {
                var E = m.value,
                  b = e.charAt(S);
                if (b.charCodeAt(0) === i || E.canEncode(b)) {
                  v = !0;
                  break;
                }
              }
            } catch (e) {
              c = { error: e };
            } finally {
              try {
                m && !m.done && (l = O.return) && l.call(O);
              } finally {
                if (c) throw c.error;
              }
            }
            if (!v)
              try {
                for (
                  var x = ((u = void 0), s(this.ENCODERS)), _ = x.next();
                  !_.done;
                  _ = x.next()
                ) {
                  if ((E = _.value).canEncode(e.charAt(S))) {
                    (w.push(E), (v = !0));
                    break;
                  }
                }
              } catch (e) {
                u = { error: e };
              } finally {
                try {
                  _ && !_.done && (f = x.return) && f.call(x);
                } finally {
                  if (u) throw u.error;
                }
              }
            v || (I = !0);
          }
          if (1 !== w.length || I) {
            this.encoders = [];
            var C = 0;
            try {
              for (var A = s(w), N = A.next(); !N.done; N = A.next()) {
                E = N.value;
                this.encoders[C++] = E;
              }
            } catch (e) {
              y = { error: e };
            } finally {
              try {
                N && !N.done && (p = A.return) && p.call(A);
              } finally {
                if (y) throw y.error;
              }
            }
          } else this.encoders = [w[0]];
          var j = -1;
          if (null != o)
            for (S = 0; S < this.encoders.length; S++)
              if (
                null != this.encoders[S] &&
                o.name === this.encoders[S].name
              ) {
                j = S;
                break;
              }
          this.priorityEncoderIndex = j;
        }
        return (
          (e.prototype.length = function () {
            return this.encoders.length;
          }),
          (e.prototype.getCharsetName = function (e) {
            if (!(e < this.length()))
              throw new Error('index must be less than length');
            return this.encoders[e].name;
          }),
          (e.prototype.getCharset = function (e) {
            if (!(e < this.length()))
              throw new Error('index must be less than length');
            return this.encoders[e].charset;
          }),
          (e.prototype.getECIValue = function (e) {
            return this.encoders[e].charset.getValueIdentifier();
          }),
          (e.prototype.getPriorityEncoderIndex = function () {
            return this.priorityEncoderIndex;
          }),
          (e.prototype.canEncode = function (e, t) {
            if (!(t < this.length()))
              throw new Error('index must be less than length');
            return !0;
          }),
          (e.prototype.encode = function (e, t) {
            if (!(t < this.length()))
              throw new Error('index must be less than length');
            return o.default.encode(
              i.default.getCharAt(e),
              this.encoders[t].name,
            );
          }),
          e
        );
      })();
  },
  1215,
  [1197, 1198, 1030, 1026],
);
