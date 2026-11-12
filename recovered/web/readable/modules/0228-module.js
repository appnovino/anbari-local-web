// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 228; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }));
    var t = e(r(_d[0])),
      n = e(r(_d[1])),
      o = (function (e) {
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
      })(r(_d[2])),
      u = e(r(_d[3])),
      l = e(r(_d[4])),
      d = e(r(_d[5])),
      c = ['active', 'children', 'onRequestClose', 'transparent'],
      f = o.forwardRef((e, l) => {
        var f = e.active,
          p = e.children,
          v = e.onRequestClose,
          b = e.transparent,
          y = (0, n.default)(e, c);
        o.useEffect(() => {
          if (d.default) {
            var e = (e) => {
              f && 'Escape' === e.key && (e.stopPropagation(), v && v());
            };
            return (
              document.addEventListener('keyup', e, !1),
              () => document.removeEventListener('keyup', e, !1)
            );
          }
        }, [f, v]);
        var O = o.useMemo(
          () => [s.modal, b ? s.modalTransparent : s.modalOpaque],
          [b],
        );
        return o.createElement(
          u.default,
          (0, t.default)({}, y, {
            'aria-modal': !0,
            ref: l,
            role: f ? 'dialog' : null,
            style: O,
          }),
          o.createElement(u.default, { style: s.container }, p),
        );
      }),
      s = l.default.create({
        modal: { position: 'fixed', top: 0, right: 0, bottom: 0, left: 0 },
        modalTransparent: { backgroundColor: 'transparent' },
        modalOpaque: { backgroundColor: 'white' },
        container: { top: 0, flex: 1 },
      }),
      p = f;
  },
  228,
  [96, 16, 2, 99, 17, 26],
);
