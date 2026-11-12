// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1264; original bundle: __common-9cdd8d1b62d3893a7e9d868fab7ed9b5.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'mapNotificationResponse', {
        enumerable: !0,
        get: function () {
          return e;
        },
      }),
      Object.defineProperty(_e, 'mapNotification', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      Object.defineProperty(_e, 'mapNotificationRequest', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      Object.defineProperty(_e, 'mapNotificationContent', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }));
    const e = (e) => ({ ...e, notification: t(e.notification) }),
      t = (e) => ({ ...e, request: n(e.request) }),
      n = (e) => ({ ...e, content: c(e.content) });
    let o = !1;
    const c = (e) => {
      try {
        const t = e.dataString;
        if ('string' == typeof t) {
          const n = { ...e };
          return (
            (n.data = JSON.parse(t)),
            Object.defineProperty(n, 'dataString', {
              get: () => (
                o ||
                  ((o = !0),
                  console.warn(
                    'reading dataString is deprecated, use data instead',
                  )),
                t
              ),
            }),
            n
          );
        }
      } catch (e) {
        console.error(`Error parsing notification: ${e}`);
      }
      return e;
    };
  },
  1264,
  [],
);
