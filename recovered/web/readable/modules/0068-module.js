// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 68; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    var t = r(d[0]),
      n = r(d[1]),
      o = r(d[2]);
    function s(n) {
      return this instanceof s ? ((this.nodes = t(n)), this) : new s(n);
    }
    ((s.prototype.toString = function () {
      return Array.isArray(this.nodes) ? o(this.nodes) : '';
    }),
      (s.prototype.walk = function (t, o) {
        return (n(this.nodes, t, o), this);
      }),
      (s.unit = r(d[3])),
      (s.walk = n),
      (s.stringify = o),
      (m.exports = s));
  },
  68,
  [69, 70, 71, 72],
);
