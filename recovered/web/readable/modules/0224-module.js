// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 224; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
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
          return c;
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
      f = ['behavior', 'contentContainerStyle', 'keyboardVerticalOffset'];
    class s extends o.Component {
      constructor() {
        (super(...arguments),
          (this.frame = null),
          (this.onLayout = (e) => {
            this.frame = e.nativeEvent.layout;
          }));
      }
      relativeKeyboardHeight(e) {
        var t = this.frame;
        if (!t || !e) return 0;
        var n = e.screenY - (this.props.keyboardVerticalOffset || 0);
        return Math.max(t.y + t.height - n, 0);
      }
      onKeyboardChange(e) {}
      render() {
        var e = this.props,
          s =
            (e.behavior,
            e.contentContainerStyle,
            e.keyboardVerticalOffset,
            (0, n.default)(e, f));
        return o.createElement(
          u.default,
          (0, t.default)({ onLayout: this.onLayout }, s),
        );
      }
    }
    var c = s;
  },
  224,
  [96, 16, 2, 99],
);
