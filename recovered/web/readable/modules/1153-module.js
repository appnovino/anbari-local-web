// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1153; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
          return O;
        },
      }));
    var e = t(r(d[0])),
      n = t(r(d[1])),
      u = t(r(d[2])),
      o = t(r(d[3])),
      i = t(r(d[4])),
      l = t(r(d[5])),
      f = t(r(d[6])),
      M = t(r(d[7])),
      c = t(r(d[8])),
      h = t(r(d[9])),
      _ =
        (this && this.__values) ||
        function (t) {
          var e = 'function' == typeof Symbol && Symbol.iterator,
            n = e && t[e],
            u = 0;
          if (n) return n.call(t);
          if (t && 'number' == typeof t.length)
            return {
              next: function () {
                return (
                  t && u >= t.length && (t = void 0),
                  { value: t && t[u++], done: !t }
                );
              },
            };
          throw new TypeError(
            e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      O = (function () {
        function t() {}
        return (
          (t.prototype.decode = function (e, n) {
            void 0 === n && (n = null);
            var u = t.decode(e, n, !1);
            if (null == u || 0 === u.length || null == u[0])
              throw o.default.getNotFoundInstance();
            return u[0];
          }),
          (t.prototype.decodeMultiple = function (e, i) {
            void 0 === i && (i = null);
            try {
              return t.decode(e, i, !0);
            } catch (t) {
              if (t instanceof u.default || t instanceof n.default)
                throw o.default.getNotFoundInstance();
              throw t;
            }
          }),
          (t.decode = function (n, u, o) {
            var l,
              f,
              O = new Array(),
              E = c.default.detectMultiple(n, u, o);
            try {
              for (
                var s = _(E.getPoints()), D = s.next();
                !D.done;
                D = s.next()
              ) {
                var y = D.value,
                  T = h.default.decode(
                    E.getBits(),
                    y[4],
                    y[5],
                    y[6],
                    y[7],
                    t.getMinCodewordWidth(y),
                    t.getMaxCodewordWidth(y),
                  ),
                  W = new i.default(
                    T.getText(),
                    T.getRawBytes(),
                    void 0,
                    y,
                    e.default.PDF_417,
                  );
                W.putMetadata(M.default.ERROR_CORRECTION_LEVEL, T.getECLevel());
                var p = T.getOther();
                (null != p && W.putMetadata(M.default.PDF417_EXTRA_METADATA, p),
                  O.push(W));
              }
            } catch (t) {
              l = { error: t };
            } finally {
              try {
                D && !D.done && (f = s.return) && f.call(s);
              } finally {
                if (l) throw l.error;
              }
            }
            return O.map(function (t) {
              return t;
            });
          }),
          (t.getMaxWidth = function (t, e) {
            return null == t || null == e
              ? 0
              : Math.trunc(Math.abs(t.getX() - e.getX()));
          }),
          (t.getMinWidth = function (t, e) {
            return null == t || null == e
              ? f.default.MAX_VALUE
              : Math.trunc(Math.abs(t.getX() - e.getX()));
          }),
          (t.getMaxCodewordWidth = function (e) {
            return Math.floor(
              Math.max(
                Math.max(
                  t.getMaxWidth(e[0], e[4]),
                  (t.getMaxWidth(e[6], e[2]) * l.default.MODULES_IN_CODEWORD) /
                    l.default.MODULES_IN_STOP_PATTERN,
                ),
                Math.max(
                  t.getMaxWidth(e[1], e[5]),
                  (t.getMaxWidth(e[7], e[3]) * l.default.MODULES_IN_CODEWORD) /
                    l.default.MODULES_IN_STOP_PATTERN,
                ),
              ),
            );
          }),
          (t.getMinCodewordWidth = function (e) {
            return Math.floor(
              Math.min(
                Math.min(
                  t.getMinWidth(e[0], e[4]),
                  (t.getMinWidth(e[6], e[2]) * l.default.MODULES_IN_CODEWORD) /
                    l.default.MODULES_IN_STOP_PATTERN,
                ),
                Math.min(
                  t.getMinWidth(e[1], e[5]),
                  (t.getMinWidth(e[7], e[3]) * l.default.MODULES_IN_CODEWORD) /
                    l.default.MODULES_IN_STOP_PATTERN,
                ),
              ),
            );
          }),
          (t.prototype.reset = function () {}),
          t
        );
      })();
  },
  1153,
  [1040, 1015, 1029, 1032, 1039, 1154, 1023, 1041, 1155, 1157],
);
