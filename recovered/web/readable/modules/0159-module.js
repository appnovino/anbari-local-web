// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 159; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
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
      }),
      r(d[0]));
    var t = e(r(d[1])),
      n = e(r(d[2]));
    class l {
      constructor(e) {}
      addListener(e, n, l) {
        var u;
        null == (u = this._nativeModule) || u.addListener(e);
        var s = t.default.addListener(e, n, l);
        return {
          remove: () => {
            var e;
            null != s &&
              (null == (e = this._nativeModule) || e.removeListeners(1),
              s.remove(),
              (s = null));
          },
        };
      }
      removeListener(e, n) {
        var l;
        (null == (l = this._nativeModule) || l.removeListeners(1),
          t.default.removeListener(e, n));
      }
      emit(e) {
        for (
          var n = arguments.length, l = new Array(n > 1 ? n - 1 : 0), u = 1;
          u < n;
          u++
        )
          l[u - 1] = arguments[u];
        t.default.emit(e, ...l);
      }
      removeAllListeners(e) {
        var l;
        ((0, n.default)(
          null != e,
          '`NativeEventEmitter.removeAllListener()` requires a non-null argument.',
        ),
          null == (l = this._nativeModule) ||
            l.removeListeners(this.listenerCount(e)),
          t.default.removeAllListeners(e));
      }
      listenerCount(e) {
        return t.default.listenerCount(e);
      }
    }
  },
  159,
  [94, 160, 117],
);
