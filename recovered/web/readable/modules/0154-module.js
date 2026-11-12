// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 154; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
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
          return o;
        },
      }));
    var t = e(r(d[0])),
      s = e(r(d[1])),
      n = t.default.API,
      _ = 1;
    var o = class {
      __attach() {}
      __detach() {
        this.__isNative &&
          null != this.__nativeTag &&
          (t.default.API.dropAnimatedNode(this.__nativeTag),
          (this.__nativeTag = void 0));
      }
      __getValue() {}
      __getAnimatedValue() {
        return this.__getValue();
      }
      __addChild(e) {}
      __removeChild(e) {}
      __getChildren() {
        return [];
      }
      constructor() {
        this._listeners = {};
      }
      __makeNative(e) {
        if (!this.__isNative)
          throw new Error('This node cannot be made a "native" animated node');
        ((this._platformConfig = e),
          this.hasListeners() && this._startListeningToNativeValueUpdates());
      }
      addListener(e) {
        var t = String(_++);
        return (
          (this._listeners[t] = e),
          this.__isNative && this._startListeningToNativeValueUpdates(),
          t
        );
      }
      removeListener(e) {
        (delete this._listeners[e],
          this.__isNative &&
            !this.hasListeners() &&
            this._stopListeningForNativeValueUpdates());
      }
      removeAllListeners() {
        ((this._listeners = {}),
          this.__isNative && this._stopListeningForNativeValueUpdates());
      }
      hasListeners() {
        return !!Object.keys(this._listeners).length;
      }
      _startListeningToNativeValueUpdates() {
        (this.__nativeAnimatedValueListener &&
          !this.__shouldUpdateListenersForNewNativeTag) ||
          (this.__shouldUpdateListenersForNewNativeTag &&
            ((this.__shouldUpdateListenersForNewNativeTag = !1),
            this._stopListeningForNativeValueUpdates()),
          n.startListeningToAnimatedNodeValue(this.__getNativeTag()),
          (this.__nativeAnimatedValueListener =
            t.default.nativeEventEmitter.addListener(
              'onAnimatedValueUpdate',
              (e) => {
                e.tag === this.__getNativeTag() &&
                  this.__onAnimatedValueUpdateReceived(e.value);
              },
            )));
      }
      __onAnimatedValueUpdateReceived(e) {
        this.__callListeners(e);
      }
      __callListeners(e) {
        for (var t in this._listeners) this._listeners[t]({ value: e });
      }
      _stopListeningForNativeValueUpdates() {
        this.__nativeAnimatedValueListener &&
          (this.__nativeAnimatedValueListener.remove(),
          (this.__nativeAnimatedValueListener = null),
          n.stopListeningToAnimatedNodeValue(this.__getNativeTag()));
      }
      __getNativeTag() {
        var e;
        (t.default.assertNativeAnimatedModule(),
          (0, s.default)(
            this.__isNative,
            'Attempt to get native tag from node not marked as "native"',
          ));
        var n =
          null !== (e = this.__nativeTag) && void 0 !== e
            ? e
            : t.default.generateNewNodeTag();
        if (null == this.__nativeTag) {
          this.__nativeTag = n;
          var _ = this.__getNativeConfig();
          (this._platformConfig && (_.platformConfig = this._platformConfig),
            t.default.API.createAnimatedNode(n, _),
            (this.__shouldUpdateListenersForNewNativeTag = !0));
        }
        return n;
      }
      __getNativeConfig() {
        throw new Error(
          'This JS animated node type cannot be used as native animated node',
        );
      }
      toJSON() {
        return this.__getValue();
      }
      __getPlatformConfig() {
        return this._platformConfig;
      }
      __setPlatformConfig(e) {
        this._platformConfig = e;
      }
    };
  },
  154,
  [155, 117],
);
