// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 784; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    function t(t, s) {
      const c = t / 100;
      switch (s) {
        case 'dark':
        case 'systemMaterialDark':
          return `rgba(25,25,25,${0.78 * c})`;
        case 'light':
        case 'extraLight':
        case 'systemMaterialLight':
        case 'systemUltraThinMaterialLight':
        case 'systemThickMaterialLight':
          return `rgba(249,249,249,${0.78 * c})`;
        case 'default':
        case 'prominent':
        case 'systemMaterial':
          return `rgba(255,255,255,${0.3 * c})`;
        case 'regular':
          return `rgba(179,179,179,${0.82 * c})`;
        case 'systemThinMaterial':
          return `rgba(199,199,199,${0.97 * c})`;
        case 'systemChromeMaterial':
          return `rgba(255,255,255,${0.75 * c})`;
        case 'systemChromeMaterialLight':
          return `rgba(255,255,255,${0.97 * c})`;
        case 'systemUltraThinMaterial':
        case 'systemThickMaterial':
          return `rgba(191,191,191,${0.44 * c})`;
        case 'systemThickMaterialDark':
          return `rgba(37,37,37,${0.9 * c})`;
        case 'systemThinMaterialDark':
          return `rgba(37,37,37,${0.7 * c})`;
        case 'systemUltraThinMaterialDark':
          return `rgba(37,37,37,${0.55 * c})`;
        case 'systemChromeMaterialDark':
          return `rgba(0,0,0,${0.75 * c})`;
        case 'systemThinMaterialLight':
          return `rgba(199,199,199,${0.78 * c})`;
      }
    }
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }));
  },
  784,
  [],
);
