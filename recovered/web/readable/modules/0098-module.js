// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 98; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
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
          return w;
        },
      }));
    var t = e(r(_d[0])),
      s = e(r(_d[1])),
      n = e(r(_d[2])),
      l = e(r(_d[3])),
      o = e(r(_d[4])),
      u = e(r(_d[5]));
    r(_d[6]);
    var h = e(r(_d[7])),
      p = (function (e) {
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
      })(r(_d[8])),
      f = e(r(_d[9])),
      d = r(_d[10]),
      c = e(r(_d[11])),
      C = [
        'numColumns',
        'columnWrapperStyle',
        'removeClippedSubviews',
        'strictMode',
      ];
    function b(e) {
      return null != e ? e : 1;
    }
    function v(e) {
      return 'number' == typeof Object(e).length;
    }
    class _ extends p.PureComponent {
      scrollToEnd(e) {
        this._listRef && this._listRef.scrollToEnd(e);
      }
      scrollToIndex(e) {
        this._listRef && this._listRef.scrollToIndex(e);
      }
      scrollToItem(e) {
        this._listRef && this._listRef.scrollToItem(e);
      }
      scrollToOffset(e) {
        this._listRef && this._listRef.scrollToOffset(e);
      }
      recordInteraction() {
        this._listRef && this._listRef.recordInteraction();
      }
      flashScrollIndicators() {
        this._listRef && this._listRef.flashScrollIndicators();
      }
      getScrollResponder() {
        if (this._listRef) return this._listRef.getScrollResponder();
      }
      getNativeScrollRef() {
        if (this._listRef) return this._listRef.getScrollRef();
      }
      getScrollableNode() {
        if (this._listRef) return this._listRef.getScrollableNode();
      }
      constructor(e) {
        (super(e),
          (this._virtualizedListPairs = []),
          (this._captureRef = (e) => {
            this._listRef = e;
          }),
          (this._getItem = (e, t) => {
            var s = b(this.props.numColumns);
            if (s > 1) {
              for (var n = [], l = 0; l < s; l++) {
                var o = t * s + l;
                if (o < e.length) {
                  var u = e[o];
                  n.push(u);
                }
              }
              return n;
            }
            return e[t];
          }),
          (this._getItemCount = (e) => {
            if (null != e && v(e)) {
              var t = b(this.props.numColumns);
              return t > 1 ? Math.ceil(e.length / t) : e.length;
            }
            return 0;
          }),
          (this._keyExtractor = (e, t) => {
            var s,
              n = b(this.props.numColumns),
              l =
                null !== (s = this.props.keyExtractor) && void 0 !== s
                  ? s
                  : d.keyExtractor;
            return n > 1
              ? ((0, h.default)(
                  Array.isArray(e),
                  'FlatList: Encountered internal consistency error, expected each item to consist of an array with 1-%s columns; instead, received a single item.',
                  n,
                ),
                e.map((e, s) => l(e, t * n + s)).join(':'))
              : l(e, t);
          }),
          (this._renderer = (e, t, s, n, o) => {
            var u = b(n),
              f = (s) => (e ? p.createElement(e, s) : t ? t(s) : null),
              d = (e) => {
                if (u > 1) {
                  var t = e.item,
                    n = e.index;
                  return (
                    (0, h.default)(
                      Array.isArray(t),
                      'Expected array of items with numColumns > 1',
                    ),
                    p.createElement(
                      l.default,
                      { style: [y.row, s] },
                      t.map((t, s) => {
                        var l = f({
                          item: t,
                          index: n * u + s,
                          separators: e.separators,
                        });
                        return null != l
                          ? p.createElement(p.Fragment, { key: s }, l)
                          : null;
                      }),
                    )
                  );
                }
                return f(e);
              };
            return e ? { ListItemComponent: d } : { renderItem: d };
          }),
          (this._memoizedRenderer = (0, c.default)(this._renderer)),
          this._checkProps(this.props),
          this.props.viewabilityConfigCallbackPairs
            ? (this._virtualizedListPairs =
                this.props.viewabilityConfigCallbackPairs.map((e) => ({
                  viewabilityConfig: e.viewabilityConfig,
                  onViewableItemsChanged: this._createOnViewableItemsChanged(
                    e.onViewableItemsChanged,
                  ),
                })))
            : this.props.onViewableItemsChanged &&
              this._virtualizedListPairs.push({
                viewabilityConfig: this.props.viewabilityConfig,
                onViewableItemsChanged: this._createOnViewableItemsChanged(
                  this.props.onViewableItemsChanged,
                ),
              }));
      }
      componentDidUpdate(e) {
        ((0, h.default)(
          e.numColumns === this.props.numColumns,
          'Changing numColumns on the fly is not supported. Change the key prop on FlatList when changing the number of columns to force a fresh render of the component.',
        ),
          (0, h.default)(
            e.onViewableItemsChanged === this.props.onViewableItemsChanged,
            'Changing onViewableItemsChanged on the fly is not supported',
          ),
          (0, h.default)(
            !(0, u.default)(e.viewabilityConfig, this.props.viewabilityConfig),
            'Changing viewabilityConfig on the fly is not supported',
          ),
          (0, h.default)(
            e.viewabilityConfigCallbackPairs ===
              this.props.viewabilityConfigCallbackPairs,
            'Changing viewabilityConfigCallbackPairs on the fly is not supported',
          ),
          this._checkProps(this.props));
      }
      _checkProps(e) {
        var t = e.getItem,
          s = e.getItemCount,
          n = e.horizontal,
          l = e.columnWrapperStyle,
          o = e.onViewableItemsChanged,
          u = e.viewabilityConfigCallbackPairs,
          p = b(this.props.numColumns);
        ((0, h.default)(
          !t && !s,
          'FlatList does not support custom data formats.',
        ),
          p > 1
            ? (0, h.default)(!n, 'numColumns does not support horizontal.')
            : (0, h.default)(
                !l,
                'columnWrapperStyle not supported for single column lists',
              ),
          (0, h.default)(
            !(o && u),
            'FlatList does not support setting both onViewableItemsChanged and viewabilityConfigCallbackPairs.',
          ));
      }
      _pushMultiColumnViewable(e, t) {
        var s,
          l = b(this.props.numColumns),
          o =
            null !== (s = this.props.keyExtractor) && void 0 !== s
              ? s
              : d.keyExtractor;
        t.item.forEach((s, u) => {
          (0, h.default)(null != t.index, 'Missing index!');
          var p = t.index * l + u;
          e.push(
            (0, n.default)(
              (0, n.default)({}, t),
              {},
              { item: s, key: o(s, p), index: p },
            ),
          );
        });
      }
      _createOnViewableItemsChanged(e) {
        return (t) => {
          var s = b(this.props.numColumns);
          if (e)
            if (s > 1) {
              var n = [],
                l = [];
              (t.viewableItems.forEach((e) =>
                this._pushMultiColumnViewable(l, e),
              ),
                t.changed.forEach((e) => this._pushMultiColumnViewable(n, e)),
                e({ viewableItems: l, changed: n }));
            } else e(t);
        };
      }
      render() {
        var e,
          n = this.props,
          l = n.numColumns,
          o = n.columnWrapperStyle,
          u = n.removeClippedSubviews,
          h = n.strictMode,
          d = void 0 !== h && h,
          c = (0, s.default)(n, C),
          b = d ? this._memoizedRenderer : this._renderer;
        return p.createElement(
          f.default,
          (0, t.default)(
            {},
            c,
            {
              getItem: this._getItem,
              getItemCount: this._getItemCount,
              keyExtractor: this._keyExtractor,
              ref: this._captureRef,
              viewabilityConfigCallbackPairs: this._virtualizedListPairs,
              removeClippedSubviews: ((e = u), null != e && e),
            },
            b(
              this.props.ListItemComponent,
              this.props.renderItem,
              o,
              l,
              this.props.extraData,
            ),
          ),
        );
      }
    }
    var y = o.default.create({ row: { flexDirection: 'row' } }),
      w = _;
  },
  98,
  [96, 16, 11, 99, 17, 116, 94, 117, 2, 118, 144, 146],
);
