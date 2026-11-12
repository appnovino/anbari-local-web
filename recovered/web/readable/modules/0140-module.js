// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 140; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    var t,
      e = r(_d[0]),
      s = (t = e) && t.__esModule ? t : { default: t },
      n = (function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        return (
          t &&
            Object.keys(t).forEach(function (s) {
              var n = Object.getOwnPropertyDescriptor(t, s);
              Object.defineProperty(
                e,
                s,
                n.get
                  ? n
                  : {
                      enumerable: !0,
                      get: function () {
                        return t[s];
                      },
                    },
              );
            }),
          (e.default = t),
          e
        );
      })(r(_d[1]));
    class o extends n.PureComponent {
      constructor(t) {
        (super(t),
          (this._inAsyncStateUpdate = !1),
          this._installSetStateHooks());
      }
      setState(t, e) {
        'function' == typeof t
          ? super.setState((e, s) => {
              var n;
              this._inAsyncStateUpdate = !0;
              try {
                n = t(e, s);
              } catch (t) {
                throw t;
              } finally {
                this._inAsyncStateUpdate = !1;
              }
              return n;
            }, e)
          : super.setState(t, e);
      }
      _installSetStateHooks() {
        var t = this,
          e = this.props,
          n = this.state;
        (Object.defineProperty(this, 'props', {
          get: () => (
            (0, s.default)(
              !t._inAsyncStateUpdate,
              '"this.props" should not be accessed during state updates',
            ),
            e
          ),
          set(t) {
            e = t;
          },
        }),
          Object.defineProperty(this, 'state', {
            get: () => (
              (0, s.default)(
                !t._inAsyncStateUpdate,
                '"this.state" should not be acceessed during state updates',
              ),
              n
            ),
            set(t) {
              n = t;
            },
          }));
      }
    }
  },
  140,
  [117, 2],
);
