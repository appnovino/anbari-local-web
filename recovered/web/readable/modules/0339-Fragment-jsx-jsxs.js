// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 339; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    /**
     * @license React
     * react-jsx-runtime.production.js
     *
     * Copyright (c) Meta Platforms, Inc. and affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    'use strict';
    var n = Symbol.for('react.transitional.element'),
      t = Symbol.for('react.fragment');
    function o(t, o, f) {
      var l = null;
      if (
        (void 0 !== f && (l = '' + f),
        void 0 !== o.key && (l = '' + o.key),
        'key' in o)
      )
        for (var y in ((f = {}), o)) 'key' !== y && (f[y] = o[y]);
      else f = o;
      return (
        (o = f.ref),
        { $$typeof: n, type: t, key: l, ref: void 0 !== o ? o : null, props: f }
      );
    }
    ((e.Fragment = t), (e.jsx = o), (e.jsxs = o));
  },
  339,
  [],
);
