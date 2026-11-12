// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1135; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
          return s;
        },
      }));
    var e = t(r(d[0])),
      n = t(r(d[1])),
      i =
        (this && this.__values) ||
        function (t) {
          var e = 'function' == typeof Symbol && Symbol.iterator,
            n = e && t[e],
            i = 0;
          if (n) return n.call(t);
          if (t && 'number' == typeof t.length)
            return {
              next: function () {
                return (
                  t && i >= t.length && (t = void 0),
                  { value: t && t[i++], done: !t }
                );
              },
            };
          throw new TypeError(
            e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      s = (function () {
        function t(t, e, n, i, s, o, l) {
          ((this.image = t),
            (this.startX = e),
            (this.startY = n),
            (this.width = i),
            (this.height = s),
            (this.moduleSize = o),
            (this.resultPointCallback = l),
            (this.possibleCenters = []),
            (this.crossCheckStateCount = new Int32Array(3)));
        }
        return (
          (t.prototype.find = function () {
            for (
              var t = this.startX,
                e = this.height,
                i = t + this.width,
                s = this.startY + e / 2,
                o = new Int32Array(3),
                l = this.image,
                u = 0;
              u < e;
              u++
            ) {
              var f =
                s +
                (1 & u ? -Math.floor((u + 1) / 2) : Math.floor((u + 1) / 2));
              ((o[0] = 0), (o[1] = 0), (o[2] = 0));
              for (var h = t; h < i && !l.get(h, f); ) h++;
              for (var c = 0; h < i; ) {
                if (l.get(h, f))
                  if (1 === c) o[1]++;
                  else if (2 === c) {
                    var b;
                    if (this.foundPatternCross(o))
                      if (null !== (b = this.handlePossibleCenter(o, f, h)))
                        return b;
                    ((o[0] = o[2]), (o[1] = 1), (o[2] = 0), (c = 1));
                  } else o[++c]++;
                else (1 === c && c++, o[c]++);
                h++;
              }
              if (this.foundPatternCross(o))
                if (null !== (b = this.handlePossibleCenter(o, f, i))) return b;
            }
            if (0 !== this.possibleCenters.length)
              return this.possibleCenters[0];
            throw new n.default();
          }),
          (t.centerFromEnd = function (t, e) {
            return e - t[2] - t[1] / 2;
          }),
          (t.prototype.foundPatternCross = function (t) {
            for (var e = this.moduleSize, n = e / 2, i = 0; i < 3; i++)
              if (Math.abs(e - t[i]) >= n) return !1;
            return !0;
          }),
          (t.prototype.crossCheckVertical = function (e, n, i, s) {
            var o = this.image,
              l = o.getHeight(),
              u = this.crossCheckStateCount;
            ((u[0] = 0), (u[1] = 0), (u[2] = 0));
            for (var f = e; f >= 0 && o.get(n, f) && u[1] <= i; ) (u[1]++, f--);
            if (f < 0 || u[1] > i) return NaN;
            for (; f >= 0 && !o.get(n, f) && u[0] <= i; ) (u[0]++, f--);
            if (u[0] > i) return NaN;
            for (f = e + 1; f < l && o.get(n, f) && u[1] <= i; ) (u[1]++, f++);
            if (f === l || u[1] > i) return NaN;
            for (; f < l && !o.get(n, f) && u[2] <= i; ) (u[2]++, f++);
            if (u[2] > i) return NaN;
            var h = u[0] + u[1] + u[2];
            return 5 * Math.abs(h - s) >= 2 * s
              ? NaN
              : this.foundPatternCross(u)
                ? t.centerFromEnd(u, f)
                : NaN;
          }),
          (t.prototype.handlePossibleCenter = function (n, s, o) {
            var l,
              u,
              f = n[0] + n[1] + n[2],
              h = t.centerFromEnd(n, o),
              c = this.crossCheckVertical(s, h, 2 * n[1], f);
            if (!isNaN(c)) {
              var b = (n[0] + n[1] + n[2]) / 3;
              try {
                for (
                  var v = i(this.possibleCenters), C = v.next();
                  !C.done;
                  C = v.next()
                ) {
                  var p = C.value;
                  if (p.aboutEquals(b, c, h)) return p.combineEstimate(c, h, b);
                }
              } catch (t) {
                l = { error: t };
              } finally {
                try {
                  C && !C.done && (u = v.return) && u.call(v);
                } finally {
                  if (l) throw l.error;
                }
              }
              var y = new e.default(h, c, b);
              (this.possibleCenters.push(y),
                null !== this.resultPointCallback &&
                  void 0 !== this.resultPointCallback &&
                  this.resultPointCallback.foundPossibleResultPoint(y));
            }
            return null;
          }),
          t
        );
      })();
  },
  1135,
  [1136, 1032],
);
