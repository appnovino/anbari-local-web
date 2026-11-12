// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1143; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, _a2, _m, _e2, _d2) {
    'use strict';
    (Object.defineProperty(_e2, '__esModule', { value: !0 }),
      Object.defineProperty(_e2, 'default', {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    var r,
      t = _r(_d2[0]),
      e = (r = t) && r.__esModule ? r : { default: r },
      n =
        (this && this.__values) ||
        function (r) {
          var t = 'function' == typeof Symbol && Symbol.iterator,
            e = t && r[t],
            n = 0;
          if (e) return e.call(r);
          if (r && 'number' == typeof r.length)
            return {
              next: function () {
                return (
                  r && n >= r.length && (r = void 0),
                  { value: r && r[n++], done: !r }
                );
              },
            };
          throw new TypeError(
            t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      o =
        (this && this.__read) ||
        function (r, t) {
          var e = 'function' == typeof Symbol && r[Symbol.iterator];
          if (!e) return r;
          var n,
            o,
            i = e.call(r),
            a = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(n = i.next()).done; )
              a.push(n.value);
          } catch (r) {
            o = { error: r };
          } finally {
            try {
              n && !n.done && (e = i.return) && e.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return a;
        },
      i = (function () {
        function r(r) {
          ((this.versionIndicator = (r >> 2) & 7), (this.dataMask = 3 & r));
        }
        return (
          (r.computeBCHFormatWord = function (t) {
            for (var e = t << 10, n = 4; n >= 0; n--)
              (e >> (n + 10)) & 1 && (e ^= r.BCH_GENERATOR << n);
            return (t << 10) | (1023 & e);
          }),
          (r.buildLookupTable = function () {
            for (var t = [], e = 0; e < 32; e++) {
              var n = r.computeBCHFormatWord(e) ^ r.FORMAT_INFO_MASK_MICRO_QR;
              t.push([n, e]);
            }
            return t;
          }),
          (r.numBitsDiffering = function (r, t) {
            return e.default.bitCount(r ^ t);
          }),
          (r.decodeFormatInformation = function (t) {
            var e, i, a, u;
            try {
              for (
                var l = n(r.FORMAT_INFO_DECODE_LOOKUP), c = l.next();
                !c.done;
                c = l.next()
              ) {
                var f = o(c.value, 2),
                  s = f[0],
                  d = f[1];
                if (s === t) return new r(d);
              }
            } catch (r) {
              e = { error: r };
            } finally {
              try {
                c && !c.done && (i = l.return) && i.call(l);
              } finally {
                if (e) throw e.error;
              }
            }
            var _ = Number.MAX_SAFE_INTEGER,
              v = 0;
            try {
              for (
                var y = n(r.FORMAT_INFO_DECODE_LOOKUP), O = y.next();
                !O.done;
                O = y.next()
              ) {
                var h = o(O.value, 2),
                  p = ((s = h[0]), (d = h[1]), r.numBitsDiffering(t, s));
                p < _ && ((_ = p), (v = d));
              }
            } catch (r) {
              a = { error: r };
            } finally {
              try {
                O && !O.done && (u = y.return) && u.call(y);
              } finally {
                if (a) throw a.error;
              }
            }
            return _ <= 3 ? new r(v) : null;
          }),
          (r.prototype.getVersionIndicator = function () {
            return this.versionIndicator;
          }),
          (r.prototype.getDataMask = function () {
            return this.dataMask;
          }),
          (r.prototype.getMicroQRVersionNumber = function () {
            return 0 === this.versionIndicator
              ? 1
              : this.versionIndicator <= 2
                ? 2
                : this.versionIndicator <= 4
                  ? 3
                  : 4;
          }),
          (r.prototype.getECLevelLabel = function () {
            switch (this.versionIndicator) {
              case 0:
              default:
                return null;
              case 1:
              case 3:
              case 5:
                return 'L';
              case 2:
              case 4:
              case 6:
                return 'M';
              case 7:
                return 'Q';
            }
          }),
          (r.FORMAT_INFO_MASK_MICRO_QR = 17477),
          (r.BCH_GENERATOR = 1335),
          (r.FORMAT_INFO_DECODE_LOOKUP = r.buildLookupTable()),
          r
        );
      })();
  },
  1143,
  [1023],
);
