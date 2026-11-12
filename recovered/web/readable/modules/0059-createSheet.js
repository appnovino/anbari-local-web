// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 59; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.createSheet = function (e, f) {
        void 0 === f && (f = s);
        var h;
        if (t.default) {
          var b = null != e ? e.getRootNode() : document;
          if (0 === l.length)
            ((h = (0, u.default)((0, n.default)(f))),
              c.forEach((e) => {
                h.insert(e, 0);
              }),
              o.set(b, l.length),
              l.push(h));
          else {
            var p = o.get(b);
            if (null == p) {
              var v = l[0],
                k = null != v ? v.getTextContent() : '';
              ((h = (0, u.default)((0, n.default)(f, b, k))),
                o.set(b, l.length),
                l.push(h));
            } else h = l[p];
          }
        } else
          0 === l.length
            ? ((h = (0, u.default)((0, n.default)(f))),
              c.forEach((e) => {
                h.insert(e, 0);
              }),
              l.push(h))
            : (h = l[0]);
        return {
          getTextContent: () => h.getTextContent(),
          id: f,
          insert(e, t) {
            l.forEach((n) => {
              n.insert(e, t);
            });
          },
        };
      }));
    var t = e(r(d[0])),
      n = e(r(d[1])),
      u = e(r(d[2])),
      s = 'react-native-stylesheet',
      o = new WeakMap(),
      l = [],
      c = [
        'html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}',
        'body{margin:0;}',
        'button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}',
        'input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}',
      ];
  },
  59,
  [26, 60, 61],
);
