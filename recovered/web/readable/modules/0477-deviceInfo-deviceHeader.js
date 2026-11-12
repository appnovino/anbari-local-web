// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 477; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.deviceInfo = o),
      (e.deviceHeader = function (n) {
        return 'web' === n.OS ? '' : encodeURIComponent(o(n).name);
      }));
    var n = r(d[0]);
    let t = null;
    function o(o) {
      if (t) return t;
      if ('web' === o.OS)
        return (
          (t = {
            name: (0, n.webDeviceName)(
              'undefined' == typeof navigator ? '' : navigator.userAgent,
            ),
            kind: 'web',
          }),
          t
        );
      const u = o.constants || {};
      return (
        (t = {
          name: (0, n.nativeDeviceName)({
            os: o.OS,
            brand: u.Brand,
            manufacturer: u.Manufacturer,
            model: u.Model || u.model,
          }),
          kind: 'phone',
        }),
        t
      );
    }
  },
  477,
  [478],
);
