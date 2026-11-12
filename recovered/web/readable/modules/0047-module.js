// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 47; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return b;
        },
      }));
    var e,
      t = r(d[0]),
      o = (e = t) && e.__esModule ? e : { default: e },
      i = {
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      n = [
        'animationIterationCount',
        'boxFlex',
        'boxFlexGroup',
        'boxOrdinalGroup',
        'columnCount',
        'flex',
        'flexGrow',
        'flexPositive',
        'flexShrink',
        'flexNegative',
        'flexOrder',
        'gridColumn',
        'gridColumnEnd',
        'gridColumnStart',
        'gridRow',
        'gridRowEnd',
        'gridRowStart',
        'lineClamp',
        'order',
      ],
      l = ['Webkit', 'ms', 'Moz', 'O'];
    function u(e, t) {
      return e + t.charAt(0).toUpperCase() + t.slice(1);
    }
    for (var f = 0, s = n.length; f < s; ++f) {
      var c = n[f];
      i[c] = !0;
      for (var p = 0, h = l.length; p < h; ++p) i[u(l[p], c)] = !0;
    }
    for (var x in i) i[(0, o.default)(x)] = !0;
    function b(e) {
      return i.hasOwnProperty(e);
    }
  },
  47,
  [42],
);
