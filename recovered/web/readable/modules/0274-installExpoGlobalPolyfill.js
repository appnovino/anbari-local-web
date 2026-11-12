// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 274; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.installExpoGlobalPolyfill = function () {
        if (globalThis.expo) return;
        globalThis.expo = {
          EventEmitter: o.EventEmitter,
          NativeModule: o.NativeModule,
          SharedObject: o.SharedObject,
          SharedRef: o.SharedRef,
          modules: globalThis.ExpoDomWebView?.expoModulesProxy ?? {},
          uuidv4: l.default.v4,
          uuidv5: l.default.v5,
          getViewConfig: () => {
            throw new Error('Method not implemented.');
          },
          reloadAppAsync: async () => {
            window.location.reload();
          },
          expoModulesCoreVersion: void 0,
          cacheDir: void 0,
          documentsDir: void 0,
          installOnUIRuntime: (e) => {
            throw new Error('Method not implemented.');
          },
        };
      }));
    var e,
      o = r(d[0]),
      t = r(d[1]),
      l = (e = t) && e.__esModule ? e : { default: e },
      n = r(d[2]);
    Object.keys(n).forEach(function (e) {
      'default' === e ||
        Object.prototype.hasOwnProperty.call(_e, e) ||
        Object.defineProperty(_e, e, {
          enumerable: !0,
          get: function () {
            return n[e];
          },
        });
    });
  },
  274,
  [275, 276, 267],
);
