// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1079; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, a, _m, _e, _d) {
    'use strict';
    function n(n) {
      return n && n.__esModule ? n : { default: n };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    var t,
      r = n(_r(_d[0])),
      e = n(_r(_d[1])),
      o = n(_r(_d[2])),
      i = n(_r(_d[3])),
      w = n(_r(_d[4])),
      l =
        (this && this.__extends) ||
        ((t = function (n, r) {
          return (
            (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (n, t) {
                  n.__proto__ = t;
                }) ||
              function (n, t) {
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
              }),
            t(n, r)
          );
        }),
        function (n, r) {
          if ('function' != typeof r && null !== r)
            throw new TypeError(
              'Class extends value ' +
                String(r) +
                ' is not a constructor or null',
            );
          function e() {
            this.constructor = n;
          }
          (t(n, r),
            (n.prototype =
              null === r
                ? Object.create(r)
                : ((e.prototype = r.prototype), new e())));
        }),
      u =
        (this && this.__read) ||
        function (n, t) {
          var r = 'function' == typeof Symbol && n[Symbol.iterator];
          if (!r) return n;
          var e,
            o,
            i = r.call(n),
            w = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(e = i.next()).done; )
              w.push(e.value);
          } catch (n) {
            o = { error: n };
          } finally {
            try {
              e && !e.done && (r = i.return) && r.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return w;
        },
      f =
        (this && this.__spreadArray) ||
        function (n, t, r) {
          if (r || 2 === arguments.length)
            for (var e, o = 0, i = t.length; o < i; o++)
              (!e && o in t) ||
                (e || (e = Array.prototype.slice.call(t, 0, o)), (e[o] = t[o]));
          return n.concat(e || Array.prototype.slice.call(t));
        },
      c = (function (n) {
        function t() {
          var t = n.apply(this, f([], u(arguments), !1)) || this;
          return (
            (t.CODA_BAR_CHAR_SET = {
              nnnnnww: '0',
              nnnnwwn: '1',
              nnnwnnw: '2',
              wwnnnnn: '3',
              nnwnnwn: '4',
              wnnnnwn: '5',
              nwnnnnw: '6',
              nwnnwnn: '7',
              nwwnnnn: '8',
              wnnwnnn: '9',
              nnnwwnn: '-',
              nnwwnnn: '$',
              wnnnwnw: ':',
              wnwnnnw: '/',
              wnwnwnn: '.',
              nnwwwww: '+',
              nnwwnwn: 'A',
              nwnwnnw: 'B',
              nnnwnww: 'C',
              nnnwwwn: 'D',
            }),
            t
          );
        }
        return (
          l(t, n),
          (t.prototype.decodeRow = function (n, t, o) {
            var l = this.getValidRowData(t);
            if (!l) throw new e.default();
            var u = this.codaBarDecodeRow(l.row);
            if (!u) throw new e.default();
            return new i.default(
              u,
              null,
              0,
              [new w.default(l.left, n), new w.default(l.right, n)],
              r.default.CODABAR,
              new Date().getTime(),
            );
          }),
          (t.prototype.getValidRowData = function (n) {
            var t = n.toArray(),
              r = t.indexOf(!0);
            if (-1 === r) return null;
            var e = t.lastIndexOf(!0);
            if (e <= r) return null;
            for (
              var o = [], i = (t = t.slice(r, e + 1))[0], w = 1, l = 1;
              l < t.length;
              l++
            )
              t[l] === i ? w++ : ((i = t[l]), o.push(w), (w = 1));
            return (
              o.push(w),
              o.length < 23 && (o.length + 1) % 8 != 0
                ? null
                : { row: o, left: r, right: e }
            );
          }),
          (t.prototype.codaBarDecodeRow = function (n) {
            for (
              var t = [],
                r = Math.ceil(
                  n.reduce(function (n, t) {
                    return (n + t) / 2;
                  }, 0),
                );
              n.length > 0;

            ) {
              var e = n
                .splice(0, 8)
                .splice(0, 7)
                .map(function (n) {
                  return n < r ? 'n' : 'w';
                })
                .join('');
              if (void 0 === this.CODA_BAR_CHAR_SET[e]) return null;
              t.push(this.CODA_BAR_CHAR_SET[e]);
            }
            var o = t.join('');
            return this.validCodaBarString(o) ? o : null;
          }),
          (t.prototype.validCodaBarString = function (n) {
            return /^[A-D].{1,}[A-D]$/.test(n);
          }),
          t
        );
      })(o.default),
      s = c;
  },
  1079,
  [1040, 1032, 1065, 1039, 1052],
);
