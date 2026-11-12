// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 667; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'Directory', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    var e,
      t = r(d[0]),
      n = (e = t) && e.__esModule ? e : { default: e },
      s = r(d[1]),
      u = r(d[2]),
      c = r(d[3]);
    class o extends n.default.FileSystemDirectory {
      constructor(...e) {
        (super(u.Paths.join(...e)), this.validatePath());
      }
      get parentDirectory() {
        return new o(u.Paths.join(this.uri, '..'));
      }
      list() {
        return super
          .listAsRecords()
          .map(({ isDirectory: e, uri: t }) => (e ? new o(t) : new s.File(t)));
      }
      get name() {
        return u.Paths.basename(this.uri);
      }
      createFile(e, t) {
        return new s.File(super.createFile(e, t).uri);
      }
      createDirectory(e) {
        return new o(super.createDirectory(e).uri);
      }
      watch(e, t) {
        return new c.FileSystemWatcher(this.uri, e, t, (e, t) =>
          t ? new o(e) : new s.File(e),
        );
      }
    }
    o.pickDirectoryAsync = async function (e) {
      const t = (await n.default.pickDirectoryAsync(e)).uri;
      return new o(t);
    };
  },
  667,
  [668, 669, 666, 672],
);
