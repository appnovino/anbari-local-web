// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 673; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'FileSystemReadableStreamSource', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      Object.defineProperty(e, 'FileSystemWritableSink', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    class t {
      size = 1024;
      type = 'bytes';
      constructor(t) {
        this.handle = t;
      }
      cancel() {
        this.handle.close();
      }
      pull(t) {
        const s = t.byobRequest?.view;
        if (!s) {
          const s = this.handle.readBytes(this.size);
          return 0 === s.length ? void t.close() : void t.enqueue(s);
        }
        const n = this.handle.readBytes(s.byteLength - s.byteOffset);
        if (0 === n.length) return (t.close(), void t.byobRequest.respond(0));
        if (s instanceof Uint8Array) s.set(n, s.byteOffset);
        else {
          const t = new Uint8Array(s.buffer);
          for (let i = 0; i < n.length; i++) t[i + (s.byteOffset ?? 0)] = n[i];
        }
        t.byobRequest.respond(n.length);
      }
    }
    class s {
      constructor(t) {
        this.handle = t;
      }
      abort() {
        this.close();
      }
      close() {
        this.handle.close();
      }
      write(t) {
        this.handle.writeBytes(t);
      }
    }
  },
  673,
  [],
);
