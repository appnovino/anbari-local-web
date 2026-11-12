// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 674; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'PathUtilities', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    var e = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        return (
          e &&
            Object.keys(e).forEach(function (n) {
              var o = Object.getOwnPropertyDescriptor(e, n);
              Object.defineProperty(
                t,
                n,
                o.get
                  ? o
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[n];
                      },
                    },
              );
            }),
          (t.default = e),
          t
        );
      })(r(_d[0])),
      t = r(_d[1]);
    function n(e) {
      return 'string' == typeof e ? e : e.uri;
    }
    class o {
      static join(...o) {
        const [s = '', ...c] = o.map(n),
          u = (0, t.asUrl)(s);
        return u
          ? ((u.pathname = e.join(u.pathname, ...c.map(t.encodeURLChars))),
            u.toString())
          : e.join(s, ...c.map(t.encodeURLChars));
      }
      static relative(o, s) {
        const c = n(o),
          u = n(s);
        return (
          (0, t.isUrl)(c) && (o = (0, t.asUrl)(c).pathname),
          (0, t.isUrl)(u) && (s = (0, t.asUrl)(u).pathname),
          e.relative(c, u)
        );
      }
      static isAbsolute(o) {
        const s = n(o);
        return !!(0, t.isUrl)(s) || e.isAbsolute(s);
      }
      static normalize(o) {
        const s = n(o),
          c = (0, t.asUrl)((0, t.encodeURLChars)(s));
        return c
          ? ((c.pathname = (0, t.encodeURLChars)(
              e.normalize(decodeURIComponent(c.pathname)),
            )),
            c.toString())
          : e.normalize(s);
      }
      static dirname(o) {
        const s = n(o),
          c = (0, t.asUrl)(s);
        return c
          ? ((c.pathname = (0, t.encodeURLChars)(
              e.dirname(decodeURIComponent(c.pathname)),
            )),
            c.toString())
          : e.dirname(s);
      }
      static basename(o, s) {
        const c = n(o),
          u = (0, t.asUrl)(c);
        return u
          ? e.basename(decodeURIComponent(u.pathname))
          : e.basename(c, s);
      }
      static extname(o) {
        const s = n(o),
          c = (0, t.asUrl)(s);
        return c ? e.extname(decodeURIComponent(c.pathname)) : e.extname(s);
      }
      static parse(o) {
        const s = n(o),
          c = (0, t.asUrl)(s);
        return c ? e.parse(decodeURIComponent(c.pathname)) : e.parse(s);
      }
    }
  },
  674,
  [675, 676],
);
