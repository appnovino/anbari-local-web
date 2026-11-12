// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1255; original bundle: __common-9cdd8d1b62d3893a7e9d868fab7ed9b5.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }));
    var t = r(d[0]);
    const o = 'EXPO_NOTIFICATIONS_INSTALLATION_ID',
      n = 'EXPO_NOTIFICATIONS_REGISTRATION_INFO';
    let l = () => {
      const o = t.uuid.v4();
      l = () => o;
    };
    var c = {
      getInstallationIdAsync: async () => {
        let n;
        try {
          ((n = localStorage.getItem(o)),
            (n && 'string' == typeof n) ||
              ((n = t.uuid.v4()), localStorage.setItem(o, n)));
        } catch {
          n = l();
        }
        return n;
      },
      getRegistrationInfoAsync: async () =>
        'undefined' == typeof localStorage ? null : localStorage.getItem(n),
      setRegistrationInfoAsync: async (o) => {
        if ('undefined' != typeof localStorage)
          try {
            o ? localStorage.setItem(n, o) : localStorage.removeItem(n);
          } catch (o) {
            throw new t.CodedError(
              'ERR_NOTIFICATIONS_STORAGE_ERROR',
              `Could not modify localStorage to persist auto-registration information: ${o}`,
            );
          }
      },
      addListener: () => {},
      removeListeners: () => {},
    };
  },
  1255,
  [266],
);
