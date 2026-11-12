// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1039; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    var t,
      e = r(d[0]),
      n = (t = e) && t.__esModule ? t : { default: t },
      s = (function () {
        function t(t, e, s, u, l, o) {
          (void 0 === s && (s = null == e ? 0 : 8 * e.length),
            void 0 === o && (o = n.default.currentTimeMillis()),
            (this.text = t),
            (this.rawBytes = e),
            (this.numBits = s),
            (this.resultPoints = u),
            (this.format = l),
            (this.timestamp = o),
            (this.text = t),
            (this.rawBytes = e),
            (this.numBits = null == s ? (null == e ? 0 : 8 * e.length) : s),
            (this.resultPoints = u),
            (this.format = l),
            (this.resultMetadata = null),
            (this.timestamp = null == o ? n.default.currentTimeMillis() : o));
        }
        return (
          (t.prototype.getText = function () {
            return this.text;
          }),
          (t.prototype.getRawBytes = function () {
            return this.rawBytes;
          }),
          (t.prototype.getNumBits = function () {
            return this.numBits;
          }),
          (t.prototype.getResultPoints = function () {
            return this.resultPoints;
          }),
          (t.prototype.getBarcodeFormat = function () {
            return this.format;
          }),
          (t.prototype.getResultMetadata = function () {
            return this.resultMetadata;
          }),
          (t.prototype.putMetadata = function (t, e) {
            (null === this.resultMetadata && (this.resultMetadata = new Map()),
              this.resultMetadata.set(t, e));
          }),
          (t.prototype.putAllMetadata = function (t) {
            null !== t &&
              (null === this.resultMetadata
                ? (this.resultMetadata = t)
                : (this.resultMetadata = new Map(t)));
          }),
          (t.prototype.addResultPoints = function (t) {
            var e = this.resultPoints;
            if (null === e) this.resultPoints = t;
            else if (null !== t && t.length > 0) {
              var s = new Array(e.length + t.length);
              (n.default.arraycopy(e, 0, s, 0, e.length),
                n.default.arraycopy(t, 0, s, e.length, t.length),
                (this.resultPoints = s));
            }
          }),
          (t.prototype.getTimestamp = function () {
            return this.timestamp;
          }),
          (t.prototype.toString = function () {
            return this.text;
          }),
          t
        );
      })();
  },
  1039,
  [1020],
);
