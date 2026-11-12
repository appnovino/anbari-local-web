// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 574; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function t(e) {
      if (e && e.__esModule) return e;
      var t = {};
      return (
        e &&
          Object.keys(e).forEach(function (n) {
            var o = Object.getOwnPropertyDescriptor(e, n);
            Object.defineProperty(
              t,
              n,
              o.get
                ? o
                : {
                    enumerable: !0,
                    get: function () {
                      return e[n];
                    },
                  },
            );
          }),
        (t.default = e),
        t
      );
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.forceUpdate = async function () {
        return (globalThis.location?.reload(), { state: 'reloading' });
      }),
      (_e.openApkDownload = function () {
        f.fromBazaar
          ? (0, f.openBazaarUpdate)()
          : c.default
              .openURL((0, u.baseUrl)() + '/download/anbari.apk')
              .catch(() => {});
      }),
      (_e.AppUpdateGate = function ({ children: e }) {
        (0, n.useEffect)(() => {
          l();
          const e = o.default.addEventListener('change', (e) => {
            'active' === e && l();
          });
          return () => e.remove();
        }, []);
        const [t, c] = (0, n.useState)(null);
        return (
          (0, n.useEffect)(() => {}, []),
          (0, d.jsx)(d.Fragment, { children: e })
        );
      }));
    var n = r(_d[0]),
      o = e(r(_d[1])),
      c = e(r(_d[2]));
    r(_d[3]);
    (e(r(_d[4])),
      r(_d[5]),
      t(r(_d[6])),
      t(r(_d[7])),
      r(_d[8]),
      r(_d[9]),
      r(_d[10]));
    var u = r(_d[11]),
      f = (r(_d[12]), r(_d[13]), r(_d[14])),
      d = (r(_d[15]), r(_d[16]));
    async function l() {}
  },
  574,
  [
    2, 203, 210, 94, 99, 342, 568, 264, 486, 407, 382, 415, 311, 575, 446, 429,
    338,
  ],
);
