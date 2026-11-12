// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 67; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.validate = function (e) {
        for (var n in e) {
          var u = n.trim(),
            c = e[u],
            f = !1;
          if (null !== c) {
            if ('string' == typeof c && c.indexOf('!important') > -1)
              (s(
                'Invalid style declaration "' +
                  u +
                  ':' +
                  c +
                  '". Values cannot include "!important"',
              ),
                (f = !0));
            else {
              var p = '';
              ('animation' === u || 'animationName' === u
                ? ((p = 'Did you mean "animationKeyframes"?'), (f = !0))
                : 'direction' === u
                  ? ((p = 'Did you mean "writingDirection"?'), (f = !0))
                  : t[u]
                    ? ((p = 'Please use long-form properties.'), (f = !0))
                    : l[u] &&
                      'string' == typeof c &&
                      (0, o.default)(c).nodes.length > 1 &&
                      ((p =
                        'Value is "' +
                        c +
                        '" but only single values are supported.'),
                      (f = !0)),
                '' !== p && s('Invalid style property of "' + u + '". ' + p));
            }
            f && delete e[n];
          }
        }
      }));
    var e,
      n = r(d[0]),
      o = (e = n) && e.__esModule ? e : { default: e },
      t = {
        background: !0,
        borderBottom: !0,
        borderLeft: !0,
        borderRight: !0,
        borderTop: !0,
        font: !0,
        grid: !0,
        outline: !0,
        textDecoration: !0,
      },
      l = {
        flex: !0,
        margin: !0,
        padding: !0,
        borderColor: !0,
        borderRadius: !0,
        borderStyle: !0,
        borderWidth: !0,
        inset: !0,
        insetBlock: !0,
        insetInline: !0,
        marginBlock: !0,
        marginInline: !0,
        marginHorizontal: !0,
        marginVertical: !0,
        paddingBlock: !0,
        paddingInline: !0,
        paddingHorizontal: !0,
        paddingVertical: !0,
        overflow: !0,
        overscrollBehavior: !0,
        backgroundPosition: !0,
      };
    function s(e) {
      console.error(e);
    }
  },
  67,
  [68],
);
