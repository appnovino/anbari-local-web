// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1294; original bundle: __common-9cdd8d1b62d3893a7e9d868fab7ed9b5.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.registerTaskAsync = async function (e) {
        if (!o.default.registerTaskAsync)
          throw new n.UnavailabilityError('Notifications', 'registerTaskAsync');
        return await o.default.registerTaskAsync(e);
      }),
      Object.defineProperty(_e, 'BackgroundNotificationTaskResult', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }));
    var e,
      t,
      n = r(d[0]),
      s = r(d[1]),
      o = (e = s) && e.__esModule ? e : { default: e };
    !(function (e) {
      ((e[(e.NewData = 0)] = 'NewData'),
        (e[(e.NoData = 1)] = 'NoData'),
        (e[(e.Failed = 2)] = 'Failed'));
    })(t || (t = {}));
  },
  1294,
  [266, 1295],
);
