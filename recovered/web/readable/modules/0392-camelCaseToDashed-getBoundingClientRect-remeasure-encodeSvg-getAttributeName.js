// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 392; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, _m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'camelCaseToDashed', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      Object.defineProperty(e, 'getBoundingClientRect', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      (e.remeasure = function () {
        const t = this.state.touchable.responderID;
        if (null === t) return;
        o(t, this._handleQueryLayout);
      }),
      (e.encodeSvg = function (t) {
        return t
          .replace(
            '<svg',
            ~t.indexOf('xmlns')
              ? '<svg'
              : '<svg xmlns="http://www.w3.org/2000/svg"',
          )
          .replace(/"/g, "'")
          .replace(/%/g, '%25')
          .replace(/#/g, '%23')
          .replace(/{/g, '%7B')
          .replace(/}/g, '%7D')
          .replace(/</g, '%3C')
          .replace(/>/g, '%3E')
          .replace(/\s+/g, ' ');
      }),
      Object.defineProperty(e, 'getAttributeName', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }));
    const t = (t) => t.replace(/[A-Z]/g, (t) => '-' + t.toLowerCase()),
      n = (t) => {
        if (t) {
          if (1 === t.nodeType && 'function' == typeof t.getBoundingClientRect)
            return t.getBoundingClientRect();
        }
        throw new Error(
          'Can not get boundingClientRect of ' + t || 'undefined',
        );
      },
      o = (t, o) => {
        const s = null == t ? void 0 : t.parentNode;
        s &&
          setTimeout(() => {
            const c = n(s),
              { height: l, left: u, top: p, width: f } = n(t),
              h = u - c.left,
              m = p - c.top;
            o(h, m, f, l, u, p);
          }, 0);
      };
    const s = new Set([
        'stdDeviation',
        'edgeMode',
        'kernelMatrix',
        'kernelUnitLength',
        'preserveAlpha',
        'baseFrequency',
        'targetX',
        'targetY',
        'numOctaves',
        'stitchTiles',
        'filterUnits',
        'primitiveUnits',
        'pathLength',
        'gradientUnits',
        'gradientTransform',
        'spreadMethod',
        'markerHeight',
        'markerUnits',
        'markerWidth',
        'viewBox',
        'refX',
        'refY',
        'maskContentUnits',
        'maskUnits',
        'patternContentUnits',
        'patternTransform',
        'patternUnits',
        'textLength',
        'lengthAdjust',
        'startOffset',
        'clipPathUnits',
      ]),
      c = (n) => (s.has(n) ? n : t(n));
  },
  392,
  [],
);
