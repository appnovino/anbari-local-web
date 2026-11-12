// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 666; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'Paths', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    var e,
      t = r(d[0]),
      n = r(d[1]),
      c = (e = n) && e.__esModule ? e : { default: e },
      u = r(d[2]);
    class o extends u.PathUtilities {
      static get cache() {
        return new t.Directory(c.default.cacheDirectory);
      }
      static get bundle() {
        return new t.Directory(c.default.bundleDirectory);
      }
      static get document() {
        return new t.Directory(c.default.documentDirectory);
      }
      static get appleSharedContainers() {
        const e = c.default.appleSharedContainers ?? {},
          n = {};
        for (const c in e) e[c] && (n[c] = new t.Directory(e[c]));
        return n;
      }
      static get totalDiskSpace() {
        return c.default.totalDiskSpace;
      }
      static get availableDiskSpace() {
        return c.default.availableDiskSpace;
      }
      static info(...e) {
        return c.default.info(e.join('/'));
      }
    }
  },
  666,
  [667, 668, 674],
);
