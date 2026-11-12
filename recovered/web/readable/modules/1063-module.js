// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1063; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return E;
        },
      }));
    var t,
      u = e(r(_d[0])),
      n = e(r(_d[1])),
      d = e(r(_d[2])),
      s = e(r(_d[3])),
      l = e(r(_d[4])),
      o = e(r(_d[5])),
      f = e(r(_d[6])),
      c = e(r(_d[7])),
      i = e(r(_d[8])),
      p = e(r(_d[9])),
      _ = e(r(_d[10])),
      h = e(r(_d[11])),
      w =
        (this && this.__extends) ||
        ((t = function (e, u) {
          return (
            (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var u in t)
                  Object.prototype.hasOwnProperty.call(t, u) && (e[u] = t[u]);
              }),
            t(e, u)
          );
        }),
        function (e, u) {
          if ('function' != typeof u && null !== u)
            throw new TypeError(
              'Class extends value ' +
                String(u) +
                ' is not a constructor or null',
            );
          function n() {
            this.constructor = e;
          }
          (t(e, u),
            (e.prototype =
              null === u
                ? Object.create(u)
                : ((n.prototype = u.prototype), new n())));
        }),
      E = (function (e) {
        function t(t) {
          var d = e.call(this) || this;
          d.readers = [];
          var i = t ? t.get(n.default.POSSIBLE_FORMATS) : null,
            w = t && void 0 !== t.get(n.default.ASSUME_CODE_39_CHECK_DIGIT),
            E = t && void 0 !== t.get(n.default.ENABLE_CODE_39_EXTENDED_MODE);
          return (
            i &&
              ((i.includes(u.default.EAN_13) ||
                i.includes(u.default.UPC_A) ||
                i.includes(u.default.EAN_8) ||
                i.includes(u.default.UPC_E)) &&
                d.readers.push(new c.default(t)),
              i.includes(u.default.CODE_39) &&
                d.readers.push(new l.default(w, E)),
              i.includes(u.default.CODE_93) && d.readers.push(new o.default()),
              i.includes(u.default.CODE_128) && d.readers.push(new s.default()),
              i.includes(u.default.ITF) && d.readers.push(new f.default()),
              i.includes(u.default.CODABAR) && d.readers.push(new p.default()),
              i.includes(u.default.RSS_14) && d.readers.push(new h.default()),
              i.includes(u.default.RSS_EXPANDED) &&
                (console.warn(
                  'RSS Expanded reader IS NOT ready for production yet! use at your own risk.',
                ),
                d.readers.push(new _.default()))),
            0 === d.readers.length &&
              (d.readers.push(new c.default(t)),
              d.readers.push(new l.default()),
              d.readers.push(new o.default()),
              d.readers.push(new c.default(t)),
              d.readers.push(new s.default()),
              d.readers.push(new f.default()),
              d.readers.push(new h.default()),
              d.readers.push(new _.default())),
            d
          );
        }
        return (
          w(t, e),
          (t.prototype.decodeRow = function (e, t, u) {
            for (var n = 0; n < this.readers.length; n++)
              try {
                return this.readers[n].decodeRow(e, t, u);
              } catch (e) {}
            throw new d.default();
          }),
          (t.prototype.reset = function () {
            this.readers.forEach(function (e) {
              return e.reset();
            });
          }),
          t
        );
      })(i.default);
  },
  1063,
  [1040, 1027, 1032, 1064, 1066, 1067, 1068, 1069, 1065, 1079, 1080, 1108],
);
