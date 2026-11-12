// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1214; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'MinimalECIInput', {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    var t = r(d[0]),
      n = e(r(d[1])),
      o = e(r(d[2])),
      i = (function () {
        function e(e, n, o) {
          this.fnc1 = o;
          var i = new t.ECIEncoderSet(e, n, o);
          if (1 === i.length())
            for (var h = 0; h < this.bytes.length; h++) {
              var c = e.charAt(h).charCodeAt(0);
              this.bytes[h] = c === o ? 1e3 : c;
            }
          else this.bytes = this.encodeMinimally(e, i, o);
        }
        return (
          (e.prototype.getFNC1Character = function () {
            return this.fnc1;
          }),
          (e.prototype.length = function () {
            return this.bytes.length;
          }),
          (e.prototype.haveNCharacters = function (e, t) {
            if (e + t - 1 >= this.bytes.length) return !1;
            for (var n = 0; n < t; n++) if (this.isECI(e + n)) return !1;
            return !0;
          }),
          (e.prototype.charAt = function (e) {
            if (e < 0 || e >= this.length()) throw new Error('' + e);
            if (this.isECI(e))
              throw new Error(
                'value at ' + e + ' is not a character but an ECI',
              );
            return this.isFNC1(e) ? this.fnc1 : this.bytes[e];
          }),
          (e.prototype.subSequence = function (e, t) {
            if (e < 0 || e > t || t > this.length()) throw new Error('' + e);
            for (var n = new o.default(), i = e; i < t; i++) {
              if (this.isECI(i))
                throw new Error(
                  'value at ' + i + ' is not a character but an ECI',
                );
              n.append(this.charAt(i));
            }
            return n.toString();
          }),
          (e.prototype.isECI = function (e) {
            if (e < 0 || e >= this.length()) throw new Error('' + e);
            return this.bytes[e] > 255 && this.bytes[e] <= 999;
          }),
          (e.prototype.isFNC1 = function (e) {
            if (e < 0 || e >= this.length()) throw new Error('' + e);
            return 1e3 === this.bytes[e];
          }),
          (e.prototype.getECIValue = function (e) {
            if (e < 0 || e >= this.length()) throw new Error('' + e);
            if (!this.isECI(e))
              throw new Error(
                'value at ' + e + ' is not an ECI but a character',
              );
            return this.bytes[e] - 256;
          }),
          (e.prototype.addEdge = function (e, t, n) {
            (null == e[t][n.encoderIndex] ||
              e[t][n.encoderIndex].cachedTotalSize > n.cachedTotalSize) &&
              (e[t][n.encoderIndex] = n);
          }),
          (e.prototype.addEdges = function (e, t, n, o, i, c) {
            var s = e.charAt(o).charCodeAt(0),
              u = 0,
              l = t.length();
            t.getPriorityEncoderIndex() >= 0 &&
              (s === c || t.canEncode(s, t.getPriorityEncoderIndex())) &&
              (l = (u = t.getPriorityEncoderIndex()) + 1);
            for (var f = u; f < l; f++)
              (s === c || t.canEncode(s, f)) &&
                this.addEdge(n, o + 1, new h(s, t, f, i, c));
          }),
          (e.prototype.encodeMinimally = function (e, t, o) {
            var i = e.length,
              c = new h[i + 1][t.length()]();
            this.addEdges(e, t, c, 0, null, o);
            for (var s = 1; s <= i; s++) {
              for (var u = 0; u < t.length(); u++)
                null != c[s][u] &&
                  s < i &&
                  this.addEdges(e, t, c, s, c[s][u], o);
              for (u = 0; u < t.length(); u++) c[s - 1][u] = null;
            }
            var l = -1,
              f = n.default.MAX_VALUE;
            for (u = 0; u < t.length(); u++)
              if (null != c[i][u]) {
                var p = c[i][u];
                p.cachedTotalSize < f && ((f = p.cachedTotalSize), (l = u));
              }
            if (l < 0) throw new Error('Failed to encode "' + e + '"');
            for (var E = [], y = c[i][l]; null != y; ) {
              if (y.isFNC1()) E.unshift(1e3);
              else {
                var v = t.encode(y.c, y.encoderIndex);
                for (s = v.length - 1; s >= 0; s--) E.unshift(255 & v[s]);
              }
              ((null === y.previous ? 0 : y.previous.encoderIndex) !==
                y.encoderIndex &&
                E.unshift(256 + t.getECIValue(y.encoderIndex)),
                (y = y.previous));
            }
            var I = [];
            for (s = 0; s < I.length; s++) I[s] = E[s];
            return I;
          }),
          e
        );
      })(),
      h = (function () {
        function e(e, t, n, o, i) {
          ((this.c = e),
            (this.encoderSet = t),
            (this.encoderIndex = n),
            (this.previous = o),
            (this.fnc1 = i),
            (this.c = e === i ? 1e3 : e));
          var h = this.isFNC1() ? 1 : t.encode(e, n).length;
          ((null === o ? 0 : o.encoderIndex) !== n && (h += 3),
            null != o && (h += o.cachedTotalSize),
            (this.cachedTotalSize = h));
        }
        return (
          (e.prototype.isFNC1 = function () {
            return 1e3 === this.c;
          }),
          e
        );
      })();
  },
  1214,
  [1215, 1023, 1025],
);
