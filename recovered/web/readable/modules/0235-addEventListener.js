// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 235; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.addEventListener = function (e, t, n, u) {
        var o = s(u),
          l = (e) => n(c(e));
        return (
          e.addEventListener(t, l, o),
          function () {
            null != e && e.removeEventListener(t, l, o);
          }
        );
      }));
    var e,
      t = r(d[0]),
      n = (e = t) && e.__esModule ? e : { default: e },
      u = () => {};
    var o = (function () {
      var e = !1;
      if (n.default)
        try {
          var t = {};
          (Object.defineProperty(t, 'passive', { get: () => ((e = !0), !1) }),
            window.addEventListener('test', null, t),
            window.removeEventListener('test', null, t));
        } catch (e) {}
      return e;
    })();
    function s(e) {
      return null != e && (o ? e : Boolean(e.capture));
    }
    function l() {
      return this.cancelBubble;
    }
    function v() {
      return this.defaultPrevented;
    }
    function c(e) {
      return (
        (e.nativeEvent = e),
        (e.persist = u),
        (e.isDefaultPrevented = v),
        (e.isPropagationStopped = l),
        e
      );
    }
  },
  235,
  [26],
);
