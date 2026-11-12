// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1072; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    var t = e(r(d[0])),
      n = e(r(d[1])),
      u = e(r(d[2])),
      o = (function () {
        function e() {}
        return (
          (e.decodeRow = function (e, o, f) {
            var T = t.default.findGuardPattern(
              o,
              f,
              !1,
              this.EXTENSION_START_PATTERN,
              new Int32Array(this.EXTENSION_START_PATTERN.length).fill(0),
            );
            try {
              return new n.default().decodeRow(e, o, T);
            } catch (t) {
              return new u.default().decodeRow(e, o, T);
            }
          }),
          (e.EXTENSION_START_PATTERN = Int32Array.from([1, 1, 2])),
          e
        );
      })();
  },
  1072,
  [1073, 1074, 1075],
);
