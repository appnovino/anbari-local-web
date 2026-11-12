// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 200; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }),
      r(d[0]));
    var e,
      n = t(r(d[1])),
      o = t(r(d[2])),
      p = r(d[3]),
      s = t(p),
      u = {},
      l = {},
      c = (t) => t();
    class f {
      static getAppKeys() {
        return Object.keys(l);
      }
      static getApplication(t, e) {
        return (
          (0, n.default)(
            l[t] && l[t].getApplication,
            'Application ' +
              t +
              ' has not been registered. This is either due to an import error during initialization or failure to call AppRegistry.registerComponent.',
          ),
          l[t].getApplication(e)
        );
      }
      static registerComponent(t, n) {
        return (
          (l[t] = {
            getApplication: (t) =>
              (0, p.getApplication)(c(n), t ? t.initialProps : u, e && e(t)),
            run: (t) =>
              (0, s.default)(c(n), e && e(t), t.callback, {
                hydrate: t.hydrate || !1,
                initialProps: t.initialProps || u,
                mode: t.mode || 'concurrent',
                rootTag: t.rootTag,
              }),
          }),
          t
        );
      }
      static registerConfig(t) {
        t.forEach((t) => {
          var e = t.appKey,
            o = t.component,
            p = t.run;
          p
            ? f.registerRunnable(e, p)
            : ((0, n.default)(o, 'No component provider passed in'),
              f.registerComponent(e, o));
        });
      }
      static registerRunnable(t, e) {
        return ((l[t] = { run: e }), t);
      }
      static runApplication(t, e) {
        return (
          (0, n.default)(
            l[t] && l[t].run,
            'Application "' +
              t +
              '" has not been registered. This is either due to an import error during initialization or failure to call AppRegistry.registerComponent.',
          ),
          l[t].run(e)
        );
      }
      static setComponentProviderInstrumentationHook(t) {
        c = t;
      }
      static setWrapperComponentProvider(t) {
        e = t;
      }
      static unmountApplicationComponentAtRootTag(t) {
        (0, o.default)(t);
      }
    }
  },
  200,
  [11, 117, 83, 201],
);
