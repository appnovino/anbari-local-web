// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1260; original bundle: __common-9cdd8d1b62d3893a7e9d868fab7ed9b5.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.subscribeToTopicAsync = async function (o) {
        if (!n.default.subscribeToTopicAsync)
          throw new s.UnavailabilityError(
            'ExpoNotifications',
            'subscribeToTopicAsync',
          );
        return (
          (0, e.warnOfExpoGoPushUsage)(),
          n.default.subscribeToTopicAsync(o)
        );
      }),
      (_e.unsubscribeFromTopicAsync = async function (o) {
        if (!n.default.unsubscribeFromTopicAsync)
          throw new s.UnavailabilityError(
            'ExpoNotifications',
            'unsubscribeFromTopicAsync',
          );
        return (
          (0, e.warnOfExpoGoPushUsage)(),
          n.default.unsubscribeFromTopicAsync(o)
        );
      }));
    var o,
      s = r(d[0]),
      c = r(d[1]),
      n = (o = c) && o.__esModule ? o : { default: o },
      e = r(d[2]);
  },
  1260,
  [266, 1261, 1257],
);
