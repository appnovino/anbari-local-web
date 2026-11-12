// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1300; original bundle: __common-9cdd8d1b62d3893a7e9d868fab7ed9b5.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }));
    var n = r(d[0]),
      s = r(d[1]);
    function t(s) {
      switch (s) {
        case 'granted':
          return {
            status: n.PermissionStatus.GRANTED,
            expires: 'never',
            canAskAgain: !1,
            granted: !0,
          };
        case 'denied':
          return {
            status: n.PermissionStatus.DENIED,
            expires: 'never',
            canAskAgain: !1,
            granted: !1,
          };
        default:
          return {
            status: n.PermissionStatus.UNDETERMINED,
            expires: 'never',
            canAskAgain: !0,
            granted: !1,
          };
      }
    }
    async function o({ shouldAsk: n }) {
      if (!s.Platform.isDOMAvailable) return t('denied');
      const { Notification: o = {} } = window;
      if (void 0 !== o.requestPermission) {
        let s = o.permission;
        return (
          n &&
            (s = await new Promise((n, s) => {
              let t = !1;
              function u(s) {
                t || ((t = !0), n(s));
              }
              o.requestPermission(u)?.then(u)?.catch(s);
            })),
          t(s)
        );
      }
      if ('undefined' != typeof navigator && navigator?.permissions?.query) {
        return t(
          (await navigator.permissions.query({ name: 'notifications' })).state,
        );
      }
      return t('denied');
    }
    var u = {
      addListener: () => {},
      removeListeners: () => {},
      getPermissionsAsync: async () => o({ shouldAsk: !1 }),
      requestPermissionsAsync: async (n) => o({ shouldAsk: !0 }),
    };
  },
  1300,
  [313, 266],
);
