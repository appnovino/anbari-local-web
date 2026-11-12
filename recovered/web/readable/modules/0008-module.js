// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 8; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }));
    var e,
      t = r(d[0]),
      n = (e = t) && e.__esModule ? e : { default: e },
      o = {
        article: 'article',
        banner: 'header',
        blockquote: 'blockquote',
        button: 'button',
        code: 'code',
        complementary: 'aside',
        contentinfo: 'footer',
        deletion: 'del',
        emphasis: 'em',
        figure: 'figure',
        insertion: 'ins',
        form: 'form',
        list: 'ul',
        listitem: 'li',
        main: 'main',
        navigation: 'nav',
        paragraph: 'p',
        region: 'section',
        strong: 'strong',
      },
      l = {},
      u = function (e) {
        if (
          (void 0 === e && (e = l), 'label' === (e.role || e.accessibilityRole))
        )
          return 'label';
        var t = (0, n.default)(e);
        if (t) {
          if ('heading' === t) {
            var u = e.accessibilityLevel || e['aria-level'];
            return null != u ? 'h' + u : 'h1';
          }
          return o[t];
        }
      };
  },
  8,
  [9],
);
