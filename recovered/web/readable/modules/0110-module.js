// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 110; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }));
    var e,
      t = r(d[0]),
      n = (e = t) && e.__esModule ? e : { default: e },
      u = () => {},
      o = {},
      c = [];
    function l(e) {
      return e > 20 ? e % 20 : e;
    }
    function f(e, t) {
      var f,
        p,
        s,
        v = !1,
        y = e.changedTouches,
        h = e.type,
        X = !0 === e.metaKey,
        Y = !0 === e.shiftKey,
        P = (y && y[0].force) || 0,
        b = l((y && y[0].identifier) || 0),
        T = (y && y[0].clientX) || e.clientX,
        K = (y && y[0].clientY) || e.clientY,
        _ = (y && y[0].pageX) || e.pageX,
        D = (y && y[0].pageY) || e.pageY,
        S =
          'function' == typeof e.preventDefault ? e.preventDefault.bind(e) : u,
        j = e.timeStamp;
      function H(e) {
        return Array.prototype.slice.call(e).map((e) => ({
          force: e.force,
          identifier: l(e.identifier),
          get locationX() {
            return A(e.clientX);
          },
          get locationY() {
            return C(e.clientY);
          },
          pageX: e.pageX,
          pageY: e.pageY,
          target: e.target,
          timestamp: j,
        }));
      }
      if (null != y) ((p = H(y)), (s = H(e.touches)));
      else {
        var M = [
          {
            force: P,
            identifier: b,
            get locationX() {
              return A(T);
            },
            get locationY() {
              return C(K);
            },
            pageX: _,
            pageY: D,
            target: e.target,
            timestamp: j,
          },
        ];
        ((p = M), (s = 'mouseup' === h || 'dragstart' === h ? c : M));
      }
      var O = {
        bubbles: !0,
        cancelable: !0,
        currentTarget: null,
        defaultPrevented: e.defaultPrevented,
        dispatchConfig: o,
        eventPhase: e.eventPhase,
        isDefaultPrevented: () => e.defaultPrevented,
        isPropagationStopped: () => v,
        isTrusted: e.isTrusted,
        nativeEvent: {
          altKey: !1,
          ctrlKey: !1,
          metaKey: X,
          shiftKey: Y,
          changedTouches: p,
          force: P,
          identifier: b,
          get locationX() {
            return A(T);
          },
          get locationY() {
            return C(K);
          },
          pageX: _,
          pageY: D,
          target: e.target,
          timestamp: j,
          touches: s,
          type: h,
        },
        persist: u,
        preventDefault: S,
        stopPropagation() {
          v = !0;
        },
        target: e.target,
        timeStamp: j,
        touchHistory: t.touchHistory,
      };
      function A(e) {
        if ((f = f || (0, n.default)(O.currentTarget))) return e - f.left;
      }
      function C(e) {
        if ((f = f || (0, n.default)(O.currentTarget))) return e - f.top;
      }
      return O;
    }
  },
  110,
  [86],
);
