// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 138; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
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
          return n;
        },
      }));
    var l = e(r(d[0])),
      t = e(r(d[1]));
    class n {
      constructor() {
        ((this._cellKeyToChildren = new Map()),
          (this._childrenToCellKey = new Map()));
      }
      add(e, l) {
        var n;
        (0, t.default)(
          !this._childrenToCellKey.has(e),
          'Trying to add already present child list',
        );
        var o =
          null !== (n = this._cellKeyToChildren.get(l)) && void 0 !== n
            ? n
            : new Set();
        (o.add(e),
          this._cellKeyToChildren.set(l, o),
          this._childrenToCellKey.set(e, l));
      }
      remove(e) {
        var l = this._childrenToCellKey.get(e);
        ((0, t.default)(null != l, 'Trying to remove non-present child list'),
          this._childrenToCellKey.delete(e));
        var n = this._cellKeyToChildren.get(l);
        ((0, t.default)(n, '_cellKeyToChildren should contain cellKey'),
          n.delete(e),
          0 === n.size && this._cellKeyToChildren.delete(l));
      }
      forEach(e) {
        for (
          var t, n = (0, l.default)(this._cellKeyToChildren.values());
          !(t = n()).done;

        )
          for (var o, h = t.value, s = (0, l.default)(h); !(o = s()).done; ) {
            e(o.value);
          }
      }
      forEachInCell(e, t) {
        for (
          var n,
            o,
            h =
              null !== (n = this._cellKeyToChildren.get(e)) && void 0 !== n
                ? n
                : [],
            s = (0, l.default)(h);
          !(o = s()).done;

        ) {
          t(o.value);
        }
      }
      anyInCell(e, t) {
        for (
          var n,
            o,
            h =
              null !== (n = this._cellKeyToChildren.get(e)) && void 0 !== n
                ? n
                : [],
            s = (0, l.default)(h);
          !(o = s()).done;

        ) {
          if (t(o.value)) return !0;
        }
        return !1;
      }
      size() {
        return this._childrenToCellKey.size;
      }
    }
  },
  138,
  [119, 117],
);
