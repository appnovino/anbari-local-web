// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 669; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'File', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }));
    var e,
      t = r(d[0]),
      n = r(d[1]),
      s = r(d[2]),
      o = (e = s) && e.__esModule ? e : { default: e },
      l = r(d[3]),
      u = r(d[4]),
      c = r(d[5]),
      y = r(d[6]),
      w = r(d[7]);
    class p extends o.default.FileSystemFile {
      static async pickFileAsync(e, t) {
        const { options: n, usingOldAPI: s } = h(e, t);
        try {
          if (n.multipleFiles) {
            return {
              result: (await o.default.pickFileAsync(n)).map(
                (e) => new p(e.uri),
              ),
              canceled: !1,
            };
          }
          const e = await o.default.pickFileAsync(n);
          return s ? new p(e.uri) : { result: new p(e.uri), canceled: !1 };
        } catch (e) {
          if (s) throw e;
          return { result: null, canceled: !0 };
        }
      }
      constructor(...e) {
        (super(c.Paths.join(...e)), this.validatePath());
      }
      get parentDirectory() {
        return new n.Directory(c.Paths.dirname(this.uri));
      }
      get extension() {
        return c.Paths.extname(this.uri);
      }
      get name() {
        return c.Paths.basename(this.uri);
      }
      readableStream() {
        return new ReadableStream(
          new w.FileSystemReadableStreamSource(super.open(l.FileMode.ReadOnly)),
        );
      }
      writableStream() {
        return new WritableStream(
          new w.FileSystemWritableSink(super.open(l.FileMode.WriteOnly)),
        );
      }
      async arrayBuffer() {
        return (await this.bytes()).buffer;
      }
      async json() {
        return JSON.parse(await this.text());
      }
      async formData() {
        return new Response(await this.arrayBuffer(), {
          headers: this.type ? { 'Content-Type': this.type } : void 0,
        }).formData();
      }
      stream() {
        return this.readableStream();
      }
      slice(e, t, n) {
        return new Blob([this.bytesSync().slice(e, t)], { type: n });
      }
      upload(e, t) {
        return new u.UploadTask(this, e, t).uploadAsync();
      }
      createUploadTask(e, t) {
        return new u.UploadTask(this, e, t);
      }
      static createDownloadTask(e, t, n) {
        return new u.DownloadTask(e, t, n);
      }
      watch(e, t) {
        return new y.FileSystemWatcher(this.uri, e, t, (e) => new p(e));
      }
    }
    function f(e) {
      const t = new Error(e ?? 'The operation was aborted.');
      return ((t.name = 'AbortError'), t);
    }
    function h(e, t) {
      return 'object' == typeof e
        ? { options: e, usingOldAPI: !1 }
        : {
            options: { initialUri: e, mimeTypes: t, multipleFiles: !1 },
            usingOldAPI: void 0 !== t || 'string' == typeof e,
          };
    }
    p.downloadFileAsync = async function (e, n, s) {
      const l = s?.onProgress || s?.signal ? t.uuid.v4() : void 0;
      let u, c, y;
      try {
        if (s?.signal?.aborted) throw f(s.signal.reason);
        (l &&
          s?.onProgress &&
          (u = o.default.addListener('downloadProgress', (e) => {
            e.uuid === l && ((y = e.data), s.onProgress(y));
          })),
          l &&
            s?.signal &&
            ((c = () => {
              o.default.cancelDownloadAsync(l);
            }),
            s.signal.addEventListener('abort', c, { once: !0 })));
        const t = await o.default.downloadFileAsync(e, n, s, l),
          w = new p(t),
          h = w.size ?? 0;
        return (
          s?.onProgress &&
            h > 0 &&
            (y?.bytesWritten !== h || y?.totalBytes !== h) &&
            s.onProgress({ bytesWritten: h, totalBytes: h }),
          w
        );
      } catch (e) {
        if (s?.signal?.aborted) throw f(s.signal.reason);
        throw e;
      } finally {
        (u?.remove(),
          c && s?.signal && s.signal.removeEventListener('abort', c));
      }
    };
  },
  669,
  [266, 667, 668, 670, 671, 666, 672, 673],
);
