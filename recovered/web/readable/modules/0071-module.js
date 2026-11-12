// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 71; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, e, d) {
    function n(n, t) {
      var u,
        f,
        i = n.type,
        s = n.value;
      return t && void 0 !== (f = t(n))
        ? f
        : 'word' === i || 'space' === i
          ? s
          : 'string' === i
            ? (u = n.quote || '') + s + (n.unclosed ? '' : u)
            : 'comment' === i
              ? '/*' + s + (n.unclosed ? '' : '*/')
              : 'div' === i
                ? (n.before || '') + s + (n.after || '')
                : Array.isArray(n.nodes)
                  ? ((u = o(n.nodes, t)),
                    'function' !== i
                      ? u
                      : s +
                        '(' +
                        (n.before || '') +
                        u +
                        (n.after || '') +
                        (n.unclosed ? '' : ')'))
                  : s;
    }
    function o(o, t) {
      var u, f;
      if (Array.isArray(o)) {
        for (u = '', f = o.length - 1; ~f; f -= 1) u = n(o[f], t) + u;
        return u;
      }
      return n(o, t);
    }
    m.exports = o;
  },
  71,
  [],
);
