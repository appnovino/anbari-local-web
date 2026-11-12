// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 344; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.NativeSafeAreaProvider = function ({
        children: t,
        style: n,
        onInsetsChange: d,
      }) {
        return (
          e.useEffect(() => {
            if ('undefined' == typeof document) return;
            const t = p();
            document.body.appendChild(t);
            const e = () => {
              const {
                  paddingTop: e,
                  paddingBottom: n,
                  paddingLeft: o,
                  paddingRight: s,
                } = window.getComputedStyle(t),
                u = {
                  top: e ? parseInt(e, 10) : 0,
                  bottom: n ? parseInt(n, 10) : 0,
                  left: o ? parseInt(o, 10) : 0,
                  right: s ? parseInt(s, 10) : 0,
                },
                c = {
                  x: 0,
                  y: 0,
                  width: document.documentElement.offsetWidth,
                  height: document.documentElement.offsetHeight,
                };
              d({ nativeEvent: { insets: u, frame: c } });
            };
            return (
              t.addEventListener(u(), e),
              e(),
              () => {
                (document.body.removeChild(t), t.removeEventListener(u(), e));
              }
            );
          }, [d]),
          e.createElement(o.default, { style: n }, t)
        );
      }));
    var t,
      e = (function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        return (
          t &&
            Object.keys(t).forEach(function (n) {
              var o = Object.getOwnPropertyDescriptor(t, n);
              Object.defineProperty(
                e,
                n,
                o.get
                  ? o
                  : {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    },
              );
            }),
          (e.default = t),
          e
        );
      })(r(_d[0])),
      n = r(_d[1]),
      o = (t = n) && t.__esModule ? t : { default: t };
    const d = {
      WebkitTransition: 'webkitTransitionEnd',
      Transition: 'transitionEnd',
      MozTransition: 'transitionend',
      MSTransition: 'msTransitionEnd',
      OTransition: 'oTransitionEnd',
    };
    let s = null;
    function u() {
      if (null != s) return s;
      const t = document.createElement('invalidtype');
      s = d.Transition;
      for (const e in d)
        if (void 0 !== t.style[e]) {
          s = d[e];
          break;
        }
      return s;
    }
    let c = null;
    function f() {
      if (null !== c) return c;
      const { CSS: t } = window;
      return (
        (c =
          t && t.supports && t.supports('top: constant(safe-area-inset-top)')
            ? 'constant'
            : 'env'),
        c
      );
    }
    function l(t) {
      return `${f()}(safe-area-inset-${t})`;
    }
    function p() {
      const t = document.createElement('div'),
        { style: e } = t;
      return (
        (e.position = 'fixed'),
        (e.left = '0'),
        (e.top = '0'),
        (e.width = '0'),
        (e.height = '0'),
        (e.zIndex = '-1'),
        (e.overflow = 'hidden'),
        (e.visibility = 'hidden'),
        (e.transitionDuration = '0.05s'),
        (e.transitionProperty = 'padding'),
        (e.transitionDelay = '0s'),
        (e.paddingTop = l('top')),
        (e.paddingBottom = l('bottom')),
        (e.paddingLeft = l('left')),
        (e.paddingRight = l('right')),
        t
      );
    }
  },
  344,
  [2, 99],
);
