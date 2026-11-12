// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1219; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a2, _m, _e, _d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function e(t) {
      if (t && t.__esModule) return t;
      var e = {};
      return (
        t &&
          Object.keys(t).forEach(function (n) {
            var a = Object.getOwnPropertyDescriptor(t, n);
            Object.defineProperty(
              e,
              n,
              a.get
                ? a
                : {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  },
            );
          }),
        (e.default = t),
        e
      );
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    var n = t(r(_d[0])),
      a = t(r(_d[1])),
      i = e(r(_d[2])),
      o = e(r(_d[3])),
      u = e(r(_d[4])),
      f = t(r(_d[5])),
      d =
        (this && this.__values) ||
        function (t) {
          var e = 'function' == typeof Symbol && Symbol.iterator,
            n = e && t[e],
            a = 0;
          if (n) return n.call(t);
          if (t && 'number' == typeof t.length)
            return {
              next: function () {
                return (
                  t && a >= t.length && (t = void 0),
                  { value: t && t[a++], done: !t }
                );
              },
            };
          throw new TypeError(
            e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      l = (function () {
        function t(t) {
          this.text = t;
        }
        return (
          (t.prototype.encode = function () {
            for (
              var e = f.default.getCharCode(' '),
                i = f.default.getCharCode('\n'),
                o = n.default.singletonList(a.default.INITIAL_STATE),
                u = 0;
              u < this.text.length;
              u++
            ) {
              var d = void 0,
                l = u + 1 < this.text.length ? this.text[u + 1] : 0;
              switch (this.text[u]) {
                case f.default.getCharCode('\r'):
                  d = l === i ? 2 : 0;
                  break;
                case f.default.getCharCode('.'):
                  d = l === e ? 3 : 0;
                  break;
                case f.default.getCharCode(','):
                  d = l === e ? 4 : 0;
                  break;
                case f.default.getCharCode(':'):
                  d = l === e ? 5 : 0;
                  break;
                default:
                  d = 0;
              }
              d > 0
                ? ((o = t.updateStateListForPair(o, u, d)), u++)
                : (o = this.updateStateListForChar(o, u));
            }
            return n.default
              .min(o, function (t, e) {
                return t.getBitCount() - e.getBitCount();
              })
              .toBitArray(this.text);
          }),
          (t.prototype.updateStateListForChar = function (e, n) {
            var a,
              i,
              o = [];
            try {
              for (var u = d(e), f = u.next(); !f.done; f = u.next()) {
                var l = f.value;
                this.updateStateForChar(l, n, o);
              }
            } catch (t) {
              a = { error: t };
            } finally {
              try {
                f && !f.done && (i = u.return) && i.call(u);
              } finally {
                if (a) throw a.error;
              }
            }
            return t.simplifyStates(o);
          }),
          (t.prototype.updateStateForChar = function (t, e, n) {
            for (
              var a = 255 & this.text[e],
                f = o.CHAR_MAP[t.getMode()][a] > 0,
                d = null,
                l = 0;
              l <= i.MODE_PUNCT;
              l++
            ) {
              var h = o.CHAR_MAP[l][a];
              if (h > 0) {
                if (
                  (null == d && (d = t.endBinaryShift(e)),
                  !f || l === t.getMode() || l === i.MODE_DIGIT)
                ) {
                  var c = d.latchAndAppend(l, h);
                  n.push(c);
                }
                if (!f && u.SHIFT_TABLE[t.getMode()][l] >= 0) {
                  var s = d.shiftAndAppend(l, h);
                  n.push(s);
                }
              }
            }
            if (
              t.getBinaryShiftByteCount() > 0 ||
              0 === o.CHAR_MAP[t.getMode()][a]
            ) {
              var p = t.addBinaryShiftChar(e);
              n.push(p);
            }
          }),
          (t.updateStateListForPair = function (t, e, n) {
            var a,
              i,
              o = [];
            try {
              for (var u = d(t), f = u.next(); !f.done; f = u.next()) {
                var l = f.value;
                this.updateStateForPair(l, e, n, o);
              }
            } catch (t) {
              a = { error: t };
            } finally {
              try {
                f && !f.done && (i = u.return) && i.call(u);
              } finally {
                if (a) throw a.error;
              }
            }
            return this.simplifyStates(o);
          }),
          (t.updateStateForPair = function (t, e, n, a) {
            var o = t.endBinaryShift(e);
            if (
              (a.push(o.latchAndAppend(i.MODE_PUNCT, n)),
              t.getMode() !== i.MODE_PUNCT &&
                a.push(o.shiftAndAppend(i.MODE_PUNCT, n)),
              3 === n || 4 === n)
            ) {
              var u = o
                .latchAndAppend(i.MODE_DIGIT, 16 - n)
                .latchAndAppend(i.MODE_DIGIT, 1);
              a.push(u);
            }
            if (t.getBinaryShiftByteCount() > 0) {
              var f = t.addBinaryShiftChar(e).addBinaryShiftChar(e + 1);
              a.push(f);
            }
          }),
          (t.simplifyStates = function (t) {
            var e,
              n,
              a,
              i,
              o = [];
            try {
              for (var u = d(t), f = u.next(); !f.done; f = u.next()) {
                var l = f.value,
                  h = !0,
                  c = function (t) {
                    if (t.isBetterThanOrEqualTo(l)) return ((h = !1), 'break');
                    l.isBetterThanOrEqualTo(t) &&
                      (o = o.filter(function (e) {
                        return e !== t;
                      }));
                  };
                try {
                  for (
                    var s = ((a = void 0), d(o)), p = s.next();
                    !p.done;
                    p = s.next()
                  ) {
                    if ('break' === c(p.value)) break;
                  }
                } catch (t) {
                  a = { error: t };
                } finally {
                  try {
                    p && !p.done && (i = s.return) && i.call(s);
                  } finally {
                    if (a) throw a.error;
                  }
                }
                h && o.push(l);
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                f && !f.done && (n = u.return) && n.call(u);
              } finally {
                if (e) throw e.error;
              }
            }
            return o;
          }),
          t
        );
      })();
  },
  1219,
  [1220, 1221, 1226, 1229, 1228, 1026],
);
