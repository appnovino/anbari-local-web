// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 143; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'VirtualizedListContext', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      (_e.VirtualizedListContextResetter = function (e) {
        var t = e.children;
        return u.createElement(o.Provider, { value: null }, t);
      }),
      (_e.VirtualizedListContextProvider = function (e) {
        var t = e.children,
          l = e.value,
          s = (0, n.useMemo)(
            () => ({
              cellKey: null,
              getScrollMetrics: l.getScrollMetrics,
              horizontal: l.horizontal,
              getOutermostParentListRef: l.getOutermostParentListRef,
              registerAsNestedChild: l.registerAsNestedChild,
              unregisterAsNestedChild: l.unregisterAsNestedChild,
            }),
            [
              l.getScrollMetrics,
              l.horizontal,
              l.getOutermostParentListRef,
              l.registerAsNestedChild,
              l.unregisterAsNestedChild,
            ],
          );
        return u.createElement(o.Provider, { value: s }, t);
      }),
      (_e.VirtualizedListCellContextProvider = function (e) {
        var t = e.cellKey,
          s = e.children,
          d = (0, n.useContext)(o),
          c = (0, n.useMemo)(
            () =>
              null == d
                ? null
                : (0, l.default)((0, l.default)({}, d), {}, { cellKey: t }),
            [d, t],
          );
        return u.createElement(o.Provider, { value: c }, s);
      }));
    var e,
      t = r(_d[0]),
      l = (e = t) && e.__esModule ? e : { default: e },
      n = r(_d[1]),
      u = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        return (
          e &&
            Object.keys(e).forEach(function (l) {
              var n = Object.getOwnPropertyDescriptor(e, l);
              Object.defineProperty(
                t,
                l,
                n.get
                  ? n
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[l];
                      },
                    },
              );
            }),
          (t.default = e),
          t
        );
      })(n),
      o = u.createContext(null);
  },
  143,
  [11, 2],
);
