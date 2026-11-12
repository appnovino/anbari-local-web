// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 418; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.getRandomBytes = function (e) {
        y(e, 'getRandomBytes');
        const o = Math.floor(e);
        if (c.default.getRandomValues) {
          const t = new Uint8Array(o);
          return (c.default.getRandomValues(t), t);
        }
        throw new t.UnavailabilityError('expo-crypto', 'getRandomBytes');
      }),
      (_e.getRandomBytesAsync = async function (e) {
        y(e, 'getRandomBytesAsync');
        const o = Math.floor(e);
        if (c.default.getRandomValues) {
          const t = new Uint8Array(o);
          return (c.default.getRandomValues(t), t);
        }
        throw new t.UnavailabilityError('expo-crypto', 'getRandomBytesAsync');
      }),
      (_e.digestStringAsync = async function (
        o,
        n,
        s = { encoding: e.CryptoEncoding.HEX },
      ) {
        if (!c.default.digestStringAsync)
          throw new t.UnavailabilityError('expo-crypto', 'digestStringAsync');
        return (
          u(o),
          f(n),
          p(s.encoding),
          await c.default.digestStringAsync(o, n, s)
        );
      }),
      (_e.getRandomValues = function (t) {
        return (c.default.getRandomValues(t), t);
      }),
      (_e.randomUUID = function () {
        return c.default.randomUUID();
      }),
      (_e.digest = function (t, e) {
        return new Promise((o, n) => {
          try {
            if ('function' == typeof c.default.digestAsync)
              o(c.default.digestAsync(t, e));
            else {
              const n = new Uint8Array(h[t]);
              (c.default.digest(t, n, e), o(n.buffer));
            }
          } catch (t) {
            n(t);
          }
        });
      }));
    var t = r(d[0]),
      e = r(d[1]);
    Object.keys(e).forEach(function (t) {
      'default' === t ||
        Object.prototype.hasOwnProperty.call(_e, t) ||
        Object.defineProperty(_e, t, {
          enumerable: !0,
          get: function () {
            return e[t];
          },
        });
    });
    var o,
      n = r(d[2]),
      c = (o = n) && o.__esModule ? o : { default: o },
      s = r(d[3]);
    Object.keys(s).forEach(function (t) {
      'default' === t ||
        Object.prototype.hasOwnProperty.call(_e, t) ||
        Object.defineProperty(_e, t, {
          enumerable: !0,
          get: function () {
            return s[t];
          },
        });
    });
    class l extends TypeError {
      code = 'ERR_CRYPTO';
      constructor(t) {
        super(`expo-crypto: ${t}`);
      }
    }
    function y(t, e) {
      if (
        'number' != typeof t ||
        isNaN(t) ||
        Math.floor(t) < 0 ||
        Math.floor(t) > 1024
      )
        throw new TypeError(
          `expo-crypto: ${e}(${t}) expected a valid number from range 0...1024`,
        );
    }
    function u(t) {
      if (!Object.values(e.CryptoDigestAlgorithm).includes(t))
        throw new l(
          `Invalid algorithm provided. Expected one of: CryptoDigestAlgorithm.${Object.keys(e.CryptoDigestAlgorithm).join(', AlgCryptoDigestAlgorithmorithm.')}`,
        );
    }
    function f(t) {
      if ('string' != typeof t)
        throw new l('Invalid data provided. Expected a string.');
    }
    function p(t) {
      if (!Object.values(e.CryptoEncoding).includes(t))
        throw new l(
          `Invalid encoding provided. Expected one of: CryptoEncoding.${Object.keys(e.CryptoEncoding).join(', CryptoEncoding.')}`,
        );
    }
    const h = {
      [e.CryptoDigestAlgorithm.SHA1]: 20,
      [e.CryptoDigestAlgorithm.SHA256]: 32,
      [e.CryptoDigestAlgorithm.SHA384]: 48,
      [e.CryptoDigestAlgorithm.SHA512]: 64,
      [e.CryptoDigestAlgorithm.MD2]: 16,
      [e.CryptoDigestAlgorithm.MD4]: 16,
      [e.CryptoDigestAlgorithm.MD5]: 16,
    };
  },
  418,
  [266, 419, 420, 421],
);
