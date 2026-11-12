// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 276; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function _interopDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return _default;
        },
      }));
    var _libSha = r(d[0]),
      sha1 = _interopDefault(_libSha),
      _libV = r(d[1]),
      v35 = _interopDefault(_libV),
      _uuidTypes = r(d[2]);
    function uuidv4() {
      return 'undefined' == typeof crypto && 'undefined' == typeof window
        ? eval('require')('node:crypto').randomUUID()
        : crypto.randomUUID();
    }
    const uuid = {
      v4: uuidv4,
      v5: (0, v35.default)('v5', 80, sha1.default),
      namespace: _uuidTypes.Uuidv5Namespace,
    };
    var _default = uuid;
  },
  276,
  [277, 278, 280],
);
