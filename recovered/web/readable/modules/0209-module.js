// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 209; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
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
          return c;
        },
      }));
    var t = e(r(d[0])),
      n = e(r(d[1]));
    function s(e, s) {
      t.default.isTesting ||
        n.default.configureNextLayoutAnimation(
          e,
          null != s ? s : function () {},
          function () {},
        );
    }
    function u(e, t, n) {
      return {
        duration: e,
        create: { type: t, property: n },
        update: { type: t },
        delete: { type: t, property: n },
      };
    }
    var o = {
        easeInEaseOut: u(300, 'easeInEaseOut', 'opacity'),
        linear: u(500, 'linear', 'opacity'),
        spring: {
          duration: 700,
          create: { type: 'linear', property: 'opacity' },
          update: { type: 'spring', springDamping: 0.4 },
          delete: { type: 'linear', property: 'opacity' },
        },
      },
      c = {
        configureNext: s,
        create: u,
        Types: Object.freeze({
          spring: 'spring',
          linear: 'linear',
          easeInEaseOut: 'easeInEaseOut',
          easeIn: 'easeIn',
          easeOut: 'easeOut',
          keyboard: 'keyboard',
        }),
        Properties: Object.freeze({
          opacity: 'opacity',
          scaleX: 'scaleX',
          scaleY: 'scaleY',
          scaleXY: 'scaleXY',
        }),
        checkConfig() {
          console.error('LayoutAnimation.checkConfig(...) has been disabled.');
        },
        Presets: o,
        easeInEaseOut: s.bind(null, o.easeInEaseOut),
        linear: s.bind(null, o.linear),
        spring: s.bind(null, o.spring),
      };
  },
  209,
  [94, 85],
);
