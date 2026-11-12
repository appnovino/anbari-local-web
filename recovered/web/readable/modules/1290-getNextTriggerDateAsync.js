// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1290; original bundle: __common-9cdd8d1b62d3893a7e9d868fab7ed9b5.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.getNextTriggerDateAsync = async function (e) {
        if (!s.default.getNextTriggerDateAsync)
          throw new t.UnavailabilityError(
            'ExpoNotifications',
            'getNextTriggerDateAsync',
          );
        return await s.default.getNextTriggerDateAsync((0, c.parseTrigger)(e));
      }));
    var e,
      t = r(d[0]),
      n = r(d[1]),
      s = (e = n) && e.__esModule ? e : { default: e },
      c = r(d[2]);
  },
  1290,
  [266, 1280, 1281],
);
