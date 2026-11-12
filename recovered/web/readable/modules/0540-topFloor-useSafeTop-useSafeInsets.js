// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 540; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.topFloor = n),
      (e.useSafeTop = o),
      (e.useSafeInsets = function () {
        const n = (0, t.useSafeAreaInsets)(),
          s = o();
        return s === n.top ? n : { ...n, top: s };
      }),
      r(d[0]));
    var t = r(d[1]);
    function n(t, n, o) {
      return 'ios' === t ? Math.max(o, n ? 24 : 20) : o;
    }
    function o() {
      return n('web', !1, (0, t.useSafeAreaInsets)().top);
    }
  },
  540,
  [94, 342],
);
