// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 642; original bundle: App-659666a99f2f01630312af1cf82147aa.js
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
          return s;
        },
      }));
    var t = r(d[0]),
      u = r(d[1]),
      n = e(r(d[2])),
      o = e(r(d[3])),
      l = r(d[4]);
    class f extends t.NativeModule {
      Context = n.default;
      Image = o.default;
      manipulate(e) {
        return new n.default(() => {
          if ('string' == typeof e) return (0, l.loadImageAsync)(e);
          if ('object' == typeof e && 'uri' in e && 'string' == typeof e.uri)
            return (0, l.loadImageAsync)(e.uri);
          throw new Error(`Source not supported: ${e}`);
        });
      }
    }
    var s = (0, u.registerWebModule)(f, 'ImageManipulator');
  },
  642,
  [313, 266, 643, 644, 645],
);
