// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 175; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
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
          return l;
        },
      }));
    var t = e(r(_d[0])),
      s = e(r(_d[1]));
    r(_d[2]);
    var n = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        return (
          e &&
            Object.keys(e).forEach(function (s) {
              var n = Object.getOwnPropertyDescriptor(e, s);
              Object.defineProperty(
                t,
                s,
                n.get
                  ? n
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[s];
                      },
                    },
              );
            }),
          (t.default = e),
          t
        );
      })(r(_d[3])),
      o = e(r(_d[4])),
      c = ['stickySectionHeadersEnabled'];
    class l extends n.PureComponent {
      constructor() {
        (super(...arguments),
          (this._captureRef = (e) => {
            this._wrapperListRef = e;
          }));
      }
      scrollToLocation(e) {
        null != this._wrapperListRef &&
          this._wrapperListRef.scrollToLocation(e);
      }
      recordInteraction() {
        var e = this._wrapperListRef && this._wrapperListRef.getListRef();
        e && e.recordInteraction();
      }
      flashScrollIndicators() {
        var e = this._wrapperListRef && this._wrapperListRef.getListRef();
        e && e.flashScrollIndicators();
      }
      getScrollResponder() {
        var e = this._wrapperListRef && this._wrapperListRef.getListRef();
        if (e) return e.getScrollResponder();
      }
      getScrollableNode() {
        var e = this._wrapperListRef && this._wrapperListRef.getListRef();
        if (e) return e.getScrollableNode();
      }
      render() {
        var e = this.props,
          l = e.stickySectionHeadersEnabled,
          f = (0, s.default)(e, c),
          p = null != l && l;
        return n.createElement(
          o.default,
          (0, t.default)({}, f, {
            stickySectionHeadersEnabled: p,
            ref: this._captureRef,
            getItemCount: (e) => e.length,
            getItem: (e, t) => e[t],
          }),
        );
      }
    }
  },
  175,
  [96, 16, 94, 2, 176],
);
