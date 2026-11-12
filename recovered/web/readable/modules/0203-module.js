// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 203; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
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
          return h;
        },
      }));
    var t = e(r(d[0])),
      n = e(r(d[1])),
      u = e(r(d[2])),
      c =
        u.default &&
        !document.hasOwnProperty('hidden') &&
        document.hasOwnProperty('webkitHidden'),
      s = ['change', 'memoryWarning'],
      l = c ? 'webkitvisibilitychange' : 'visibilitychange',
      o = c ? 'webkitVisibilityState' : 'visibilityState',
      b = 'background',
      f = 'active',
      v = null;
    class h {
      static get currentState() {
        if (!h.isAvailable) return f;
        switch (document[o]) {
          case 'hidden':
          case 'prerender':
          case 'unloaded':
            return b;
          default:
            return f;
        }
      }
      static addEventListener(e, u) {
        if (
          h.isAvailable &&
          ((0, t.default)(
            -1 !== s.indexOf(e),
            'Trying to subscribe to unknown event: "%s"',
            e,
          ),
          'change' === e)
        )
          return (
            v ||
              ((v = new n.default()),
              document.addEventListener(
                l,
                () => {
                  v && v.emit('change', h.currentState);
                },
                !1,
              )),
            v.addListener(e, u)
          );
      }
    }
    h.isAvailable = u.default && !!document[o];
  },
  203,
  [117, 133, 26],
);
