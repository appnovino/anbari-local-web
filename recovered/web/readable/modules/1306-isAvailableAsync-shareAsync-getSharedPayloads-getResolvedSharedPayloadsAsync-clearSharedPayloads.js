// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1306; original bundle: __common-9cdd8d1b62d3893a7e9d868fab7ed9b5.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.isAvailableAsync = async function () {
        if (l.default)
          return (
            !l.default.isAvailableAsync || (await l.default.isAvailableAsync())
          );
        return !1;
      }),
      (_e.shareAsync = async function (e, n = {}) {
        if (!l.default || !l.default.shareAsync)
          throw new t.UnavailabilityError('Sharing', 'shareAsync');
        return await l.default.shareAsync(e, n);
      }),
      (_e.getSharedPayloads = function () {
        return l.default.getSharedPayloads();
      }),
      (_e.getResolvedSharedPayloadsAsync = async function () {
        return await l.default.getResolvedSharedPayloadsAsync();
      }),
      (_e.clearSharedPayloads = function () {
        l.default.clearSharedPayloads();
      }));
    var e,
      t = r(d[0]),
      n = r(d[1]),
      l = (e = n) && e.__esModule ? e : { default: e };
  },
  1306,
  [266, 1307],
);
