// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1256; original bundle: __common-9cdd8d1b62d3893a7e9d868fab7ed9b5.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.addPushTokenListener = function (e) {
        return (
          (0, u.warnOfExpoGoPushUsage)(),
          t.default.addListener(o, ({ devicePushToken: n }) =>
            e({ data: n, type: 'web' }),
          )
        );
      }),
      r(d[0]));
    var e,
      n = r(d[1]),
      t = (e = n) && e.__esModule ? e : { default: e },
      u = r(d[2]);
    const o = 'onDevicePushToken';
  },
  1256,
  [266, 1249, 1257],
);
