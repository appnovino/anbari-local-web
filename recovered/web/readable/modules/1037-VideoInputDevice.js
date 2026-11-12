// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1037; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'VideoInputDevice', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }));
    var t = (function () {
      function t(t, n, o) {
        ((this.deviceId = t),
          (this.label = n),
          (this.kind = 'videoinput'),
          (this.groupId = o || void 0));
      }
      return (
        (t.prototype.toJSON = function () {
          return {
            kind: this.kind,
            groupId: this.groupId,
            deviceId: this.deviceId,
            label: this.label,
          };
        }),
        t
      );
    })();
  },
  1037,
  [],
);
