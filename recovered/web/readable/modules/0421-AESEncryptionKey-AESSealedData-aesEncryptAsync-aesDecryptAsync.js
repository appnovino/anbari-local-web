// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 421; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'AESEncryptionKey', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      Object.defineProperty(_e, 'AESSealedData', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      (_e.aesEncryptAsync = function (e, t, o = {}) {
        const { nonce: c, additionalData: s, ...u } = o;
        let l = { ...u };
        if (c) {
          const e = 'bytes' in c ? f(c.bytes, !0) : c?.length;
          l = { ...l, nonce: e };
        }
        if (s) {
          const e = f(s, !0);
          l = { ...l, additionalData: e };
        }
        return n.default.encryptAsync(f(e), t, l);
      }),
      (_e.aesDecryptAsync = function (e, t, o = {}) {
        const { additionalData: c, ...s } = o,
          u = { ...s, additionalData: c ? f(c, !0) : void 0 };
        return n.default.decryptAsync(e, t, u);
      }));
    var e,
      t = r(d[0]),
      n = (e = t) && e.__esModule ? e : { default: e },
      o = r(d[1]),
      c = r(d[2]);
    Object.keys(c).forEach(function (e) {
      'default' === e ||
        Object.prototype.hasOwnProperty.call(_e, e) ||
        Object.defineProperty(_e, e, {
          enumerable: !0,
          get: function () {
            return c[e];
          },
        });
    });
    class s extends n.default.EncryptionKey {}
    class u extends n.default.SealedData {
      static fromParts(e, t, o) {
        const c = f(e),
          s = f(t);
        if (o && 'number' != typeof o) {
          const e = f(o);
          return n.default.SealedData.fromParts(c, s, e);
        }
        return n.default.SealedData.fromParts(c, s, o);
      }
      static fromCombined(e, t) {
        const o = f(e);
        return n.default.SealedData.fromCombined(o, t);
      }
    }
    function f(e, t = !1) {
      const n = e instanceof ArrayBuffer ? new Uint8Array(e) : e;
      return 'string' != typeof n && t ? (0, o.uint8ArrayToBase64)(n) : n;
    }
  },
  421,
  [422, 424, 423],
);
