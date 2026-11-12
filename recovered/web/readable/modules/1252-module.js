// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1252; original bundle: __common-9cdd8d1b62d3893a7e9d868fab7ed9b5.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (_g, r, i, a, m, _e, _d) {
    'use strict';
    var e = (function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      return (
        e &&
          Object.keys(e).forEach(function (o) {
            var n = Object.getOwnPropertyDescriptor(e, o);
            Object.defineProperty(
              t,
              o,
              n.get
                ? n
                : {
                    enumerable: !0,
                    get: function () {
                      return e[o];
                    },
                  },
            );
          }),
        (t.default = e),
        t
      );
    })(r(_d[0]));
    const t =
      'undefined' != typeof self
        ? self
        : 'undefined' != typeof window
          ? window
          : void 0 !== _g
            ? _g
            : void 0;
    t &&
      (void 0 === t.AbortController && (t.AbortController = e.AbortController),
      void 0 === t.AbortSignal && (t.AbortSignal = e.AbortSignal));
  },
  1252,
  [1253],
);
