// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 343; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, i, a, m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'SafeAreaInsetsContext', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }),
      Object.defineProperty(_e, 'SafeAreaFrameContext', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      (_e.SafeAreaProvider = function ({
        children: e,
        initialMetrics: r,
        initialSafeAreaInsets: c,
        style: d,
        ...h
      }) {
        const v = t.useContext(f),
          b = t.useContext(l),
          [y, p] = t.useState(r?.insets ?? c ?? v ?? null),
          [w, S] = t.useState(
            r?.frame ??
              b ?? {
                x: 0,
                y: 0,
                width: n.default.get('window').width,
                height: n.default.get('window').height,
              },
          ),
          C = t.useCallback((e) => {
            const {
              nativeEvent: { frame: t, insets: n },
            } = e;
            (S((e) =>
              !t ||
              (t.height === e.height &&
                t.width === e.width &&
                t.x === e.x &&
                t.y === e.y)
                ? e
                : t,
            ),
              p((e) =>
                e &&
                n.bottom === e.bottom &&
                n.left === e.left &&
                n.right === e.right &&
                n.top === e.top
                  ? e
                  : n,
              ));
          }, []);
        return t.createElement(
          o.NativeSafeAreaProvider,
          u({ style: [s.fill, d], onInsetsChange: C }, h),
          null != y
            ? t.createElement(
                l.Provider,
                { value: w },
                t.createElement(f.Provider, { value: y }, e),
              )
            : null,
        );
      }),
      (_e.SafeAreaListener = function ({
        onChange: e,
        style: n,
        children: r,
        ...f
      }) {
        return t.createElement(
          o.NativeSafeAreaProvider,
          u({}, f, {
            style: [s.fill, n],
            onInsetsChange: (t) => {
              e({ insets: t.nativeEvent.insets, frame: t.nativeEvent.frame });
            },
          }),
          r,
        );
      }),
      (_e.useSafeAreaInsets = d),
      (_e.useSafeAreaFrame = function () {
        const e = t.useContext(l);
        if (null == e) throw new Error(c);
        return e;
      }),
      (_e.withSafeAreaInsets = function (e) {
        return t.forwardRef((n, r) => {
          const o = d();
          return t.createElement(e, u({}, n, { insets: o, ref: r }));
        });
      }),
      (_e.useSafeArea = function () {
        return d();
      }),
      Object.defineProperty(_e, 'SafeAreaConsumer', {
        enumerable: !0,
        get: function () {
          return h;
        },
      }),
      Object.defineProperty(_e, 'SafeAreaContext', {
        enumerable: !0,
        get: function () {
          return v;
        },
      }));
    var t = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        return (
          e &&
            Object.keys(e).forEach(function (n) {
              var r = Object.getOwnPropertyDescriptor(e, n);
              Object.defineProperty(
                t,
                n,
                r.get
                  ? r
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
      })(_r(_d[0])),
      n = e(_r(_d[1])),
      r = e(_r(_d[2])),
      o = _r(_d[3]);
    function u() {
      return (
        (u = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        u.apply(null, arguments)
      );
    }
    const f = t.createContext(null),
      l = t.createContext(null);
    const s = r.default.create({ fill: { flex: 1 } });
    const c =
      'No safe area value available. Make sure you are rendering `<SafeAreaProvider>` at the top of your app.';
    function d() {
      const e = t.useContext(f);
      if (null == e) throw new Error(c);
      return e;
    }
    const h = f.Consumer,
      v = f;
  },
  343,
  [2, 124, 17, 344],
);
