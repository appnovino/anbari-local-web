// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 300; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'LegacyEventEmitter', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    var t = e(r(d[0])),
      n = e(r(d[1]));
    r(d[2]);
    const s = '@@nativeEmitterSubscription@@';
    class o {
      _listenerCount = 0;
      constructor(e) {
        if (e.__expo_module_name__) return e;
        ((this._nativeModule = e), (this._eventEmitter = new n.default(e)));
      }
      addListener(e, t) {
        (!this._listenerCount &&
          this._nativeModule.startObserving &&
          this._nativeModule.startObserving(),
          this._listenerCount++);
        const n = this._eventEmitter.addListener(e, t),
          o = {
            [s]: n,
            remove: () => {
              this.removeSubscription(o);
            },
          };
        return o;
      }
      removeAllListeners(e) {
        const n = this._eventEmitter.listenerCount
          ? this._eventEmitter.listenerCount(e)
          : this._eventEmitter.listeners(e).length;
        (this._eventEmitter.removeAllListeners(e),
          (this._listenerCount -= n),
          (0, t.default)(
            this._listenerCount >= 0,
            'EventEmitter must have a non-negative number of listeners',
          ),
          !this._listenerCount &&
            this._nativeModule.stopObserving &&
            this._nativeModule.stopObserving());
      }
      removeSubscription(e) {
        const t = e,
          n = t[s];
        n &&
          ('remove' in n && n.remove?.(),
          this._listenerCount--,
          delete t[s],
          (e.remove = () => {}),
          !this._listenerCount &&
            this._nativeModule.stopObserving &&
            this._nativeModule.stopObserving());
      }
      emit(e, ...t) {
        this._eventEmitter.emit(e, ...t);
      }
    }
  },
  300,
  [301, 211, 94],
);
