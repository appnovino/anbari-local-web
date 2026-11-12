// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 422; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    var t = r(d[0]),
      n = r(d[1]),
      s = r(d[2]),
      y = r(d[3]);
    const o = 12,
      c = 16,
      h = { ivLength: o, tagLength: c };
    class u {
      constructor(t, n) {
        ((this.key = t), (this.keySize = n));
      }
      static async generate(t) {
        const n = t ?? s.AESKeySize.AES256,
          y = { name: 'AES-GCM', length: n },
          o = await crypto.subtle.generateKey(y, !0, ['encrypt', 'decrypt']);
        return new u(o, n);
      }
      static async import(t, n) {
        let s;
        s =
          'string' == typeof t
            ? 'base64' === n
              ? (0, y.base64ToUintArray)(t)
              : (0, y.hexToUintArray)(t)
            : t;
        const o = await crypto.subtle.importKey('raw', s, 'AES-GCM', !0, [
          'encrypt',
          'decrypt',
        ]);
        return new u(o, 8 * s.byteLength);
      }
      async bytes() {
        const t = await crypto.subtle.exportKey('raw', this.key);
        return new Uint8Array(t);
      }
      async encoded(t) {
        const n = await this.bytes();
        return 'base64' === t
          ? (0, y.uint8ArrayToBase64)(n)
          : (0, y.bytesToHex)(n);
      }
      get size() {
        return this.keySize;
      }
    }
    class b {
      constructor(t, n) {
        ((this.bytes = t), (this.config = n));
      }
      static fromCombined(t, s) {
        const o = (0, y.binaryInputBytes)(t),
          c = s ?? h,
          u = c.ivLength + c.tagLength;
        if (o.byteLength < u)
          throw new n.CodedError(
            'ERR_INVALID_SEALED_DATA_CONFIG',
            `Sealed data is ${o.byteLength} bytes, which is too short to hold a ${c.ivLength}-byte IV and a ${c.tagLength}-byte authentication tag. Pass the whole combined output of encryptAsync, or set ivLength and tagLength in the config to match how the data was sealed.`,
          );
        return new b(o, c);
      }
      static fromParts(t, n, s) {
        const o = (0, y.binaryInputBytes)(n),
          h = (0, y.binaryInputBytes)(t),
          u = h.byteLength;
        if ((s || (s = c), 'number' == typeof s)) {
          const t = u + o.byteLength,
            n = new Uint8Array(t);
          (n.set(h), n.set(o, u));
          return new b(n, { ivLength: u, tagLength: s });
        }
        const p = (0, y.binaryInputBytes)(s),
          l = p.byteLength,
          A = u + o.byteLength + l,
          L = new Uint8Array(A);
        return (
          L.set(h),
          L.set(o, u),
          L.set(p, A - l),
          new b(L, { ivLength: u, tagLength: l })
        );
      }
      get ivSize() {
        return this.config.ivLength;
      }
      get tagSize() {
        return this.config.tagLength;
      }
      get combinedSize() {
        return this.bytes.byteLength;
      }
      async iv(t) {
        const n = 'base64' === t,
          s = this.bytes.subarray(0, this.ivSize);
        return n ? (0, y.uint8ArrayToBase64)(s) : s;
      }
      async tag(t) {
        const n = 'base64' === t,
          s = this.combinedSize - this.tagSize,
          o = this.bytes.subarray(s, s + this.tagSize);
        return n ? (0, y.uint8ArrayToBase64)(o) : o;
      }
      async combined(t) {
        const n = 'base64' === t,
          s = this.bytes.subarray();
        return n ? (0, y.uint8ArrayToBase64)(s) : s;
      }
      async ciphertext(t) {
        const n = t?.includeTag ?? !1,
          s = 'base64' === t?.encoding,
          o = this.combinedSize - this.ivSize,
          c = n ? o : o - this.tagSize,
          h = this.bytes.subarray(this.ivSize, this.ivSize + c);
        return s ? (0, y.uint8ArrayToBase64)(h) : h;
      }
    }
    class p extends t.NativeModule {
      EncryptionKey = u;
      SealedData = b;
      async encryptAsync(t, n, s = {}) {
        const { nonce: h = o, tagLength: u = c, additionalData: p } = s,
          l =
            'number' == typeof h
              ? crypto.getRandomValues(new Uint8Array(h))
              : (0, y.binaryInputBytes)(h),
          A = { name: 'AES-GCM', iv: l, tagLength: 8 * u },
          L = p ? { ...A, additionalData: (0, y.binaryInputBytes)(p) } : A,
          w = await crypto.subtle.encrypt(L, n.key, (0, y.binaryInputBytes)(t));
        return b.fromParts(l, w, u);
      }
      async decryptAsync(t, n, s = {}) {
        const { additionalData: o, output: c } = s,
          h = { name: 'AES-GCM', iv: await t.iv(), tagLength: 8 * t.tagSize },
          u = o ? { ...h, additionalData: (0, y.binaryInputBytes)(o) } : h,
          b = await t.ciphertext({ includeTag: !0 }),
          p = await crypto.subtle.decrypt(u, n.key, b),
          l = 'base64' === c,
          A = new Uint8Array(p);
        return l ? (0, y.uint8ArrayToBase64)(A) : A;
      }
    }
    var l = (0, t.registerWebModule)(p, 'ExpoCryptoAES');
  },
  422,
  [313, 266, 423, 424],
);
