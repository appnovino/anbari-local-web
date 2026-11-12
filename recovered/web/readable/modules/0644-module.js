// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 644; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    var t = r(d[0]),
      s = r(d[1]),
      n = r(d[2]);
    class o extends t.SharedRef {
      nativeRefType = 'image';
      constructor(t, s) {
        (super(), (this.uri = t), (this.canvas = s));
      }
      get width() {
        return this.canvas.width;
      }
      get height() {
        return this.canvas.height;
      }
      async saveAsync(t = { base64: !1 }) {
        return new Promise((o, h) => {
          const c = `image/${t.format ?? s.SaveFormat.JPEG}`;
          this.canvas.toBlob(
            async (s) => {
              if (!s) return h(new Error(`Unable to save image: ${this.uri}`));
              if (s.type !== c)
                return h(
                  new Error(
                    `The browser does not support encoding "${c}" images. Got "${s.type}" instead. Try a different format like JPEG or PNG.`,
                  ),
                );
              const u = t.base64 ? await (0, n.blobToBase64String)(s) : void 0,
                f = URL.createObjectURL(s);
              o({ uri: f, width: this.width, height: this.height, base64: u });
            },
            c,
            t.compress,
          );
        });
      }
    }
  },
  644,
  [313, 641, 645],
);
