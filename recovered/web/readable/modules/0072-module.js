// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 72; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    var t = '-'.charCodeAt(0),
      o = '+'.charCodeAt(0),
      c = '.'.charCodeAt(0),
      h = 'e'.charCodeAt(0),
      A = 'E'.charCodeAt(0);
    function C(h) {
      var A,
        C = h.charCodeAt(0);
      if (C === o || C === t) {
        if ((A = h.charCodeAt(1)) >= 48 && A <= 57) return !0;
        var n = h.charCodeAt(2);
        return A === c && n >= 48 && n <= 57;
      }
      return C === c
        ? (A = h.charCodeAt(1)) >= 48 && A <= 57
        : C >= 48 && C <= 57;
    }
    m.exports = function (n) {
      var f,
        u,
        v,
        l = 0,
        s = n.length;
      if (0 === s || !C(n)) return !1;
      for (
        ((f = n.charCodeAt(l)) !== o && f !== t) || l++;
        l < s && !((f = n.charCodeAt(l)) < 48 || f > 57);

      )
        l += 1;
      if (
        ((f = n.charCodeAt(l)),
        (u = n.charCodeAt(l + 1)),
        f === c && u >= 48 && u <= 57)
      )
        for (l += 2; l < s && !((f = n.charCodeAt(l)) < 48 || f > 57); ) l += 1;
      if (
        ((f = n.charCodeAt(l)),
        (u = n.charCodeAt(l + 1)),
        (v = n.charCodeAt(l + 2)),
        (f === h || f === A) &&
          ((u >= 48 && u <= 57) ||
            ((u === o || u === t) && v >= 48 && v <= 57)))
      )
        for (
          l += u === o || u === t ? 3 : 2;
          l < s && !((f = n.charCodeAt(l)) < 48 || f > 57);

        )
          l += 1;
      return { number: n.slice(0, l), unit: n.slice(l) };
    };
  },
  72,
  [],
);
