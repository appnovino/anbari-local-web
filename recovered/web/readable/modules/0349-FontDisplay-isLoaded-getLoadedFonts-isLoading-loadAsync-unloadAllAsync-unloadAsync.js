// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 349; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'FontDisplay', {
        enumerable: !0,
        get: function () {
          return f.FontDisplay;
        },
      }),
      (_e.isLoaded = c),
      (_e.getLoadedFonts = function () {
        return t.default.getLoadedFonts();
      }),
      (_e.isLoading = function (e) {
        return e in l.loadPromises;
      }),
      (_e.loadAsync = function (e, n) {
        const t = 'undefined' == typeof window;
        if ('object' == typeof e) {
          if (n)
            return Promise.reject(
              new o.CodedError(
                'ERR_FONT_API',
                `No fontFamily can be used for the provided source: ${n}. The second argument of \`loadAsync()\` can only be used with a \`string\` value as the first argument.`,
              ),
            );
          const s = e,
            l = Object.keys(s);
          return t
            ? (l.map((e) => (0, u.registerStaticFont)(e, s[e])),
              Promise.resolve())
            : Promise.all(l.map((e) => y(e, s[e]))).then(() => {});
        }
        if (t) return ((0, u.registerStaticFont)(e, n), Promise.resolve());
        return y(e, n);
      }),
      (_e.unloadAllAsync = async function () {
        if (!t.default.unloadAllAsync)
          throw new o.UnavailabilityError('expo-font', 'unloadAllAsync');
        if (Object.keys(l.loadPromises).length)
          throw new o.CodedError(
            'ERR_UNLOAD',
            `Cannot unload fonts while they're still loading: ${Object.keys(l.loadPromises).join(', ')}`,
          );
        ((0, l.purgeCache)(), await t.default.unloadAllAsync());
      }),
      (_e.unloadAsync = async function (e, n) {
        if (!t.default.unloadAsync)
          throw new o.UnavailabilityError('expo-font', 'unloadAsync');
        if ('object' == typeof e) {
          if (n)
            throw new o.CodedError(
              'ERR_FONT_API',
              `No fontFamily can be used for the provided options: ${n}. The second argument of \`unloadAsync()\` can only be used with a \`string\` value as the first argument.`,
            );
          const t = e,
            s = Object.keys(t);
          return void (await Promise.all(s.map((e) => w(e, t[e]))));
        }
        return await w(e, n);
      }));
    var e,
      o = r(d[0]),
      n = r(d[1]),
      t = (e = n) && e.__esModule ? e : { default: e },
      s = r(d[2]),
      l = r(d[3]),
      u = r(d[4]),
      f = r(d[5]);
    function c(e) {
      if ('function' != typeof t.default.isLoaded)
        throw new Error(
          'expected ExpoFontLoader.isLoaded to be a function, was ' +
            typeof t.default.isLoaded,
        );
      return (0, l.isLoadedInCache)(e) || t.default.isLoaded(e);
    }
    async function y(e, n) {
      if (!n)
        throw new o.CodedError(
          'ERR_FONT_SOURCE',
          `Cannot load null or undefined font source: { "${e}": ${n} }. Expected asset of type \`FontSource\` for fontFamily of name: "${e}"`,
        );
      if (c(e)) return;
      if (l.loadPromises.hasOwnProperty(e)) return l.loadPromises[e];
      const t = (0, s.getAssetForSource)(n);
      ((l.loadPromises[e] = (async () => {
        try {
          (await (0, s.loadSingleFontAsync)(e, t), (0, l.markLoaded)(e));
        } finally {
          delete l.loadPromises[e];
        }
      })()),
        await l.loadPromises[e]);
    }
    async function w(e, n) {
      if (c(e)) {
        if (((0, l.purgeFontFamilyFromCache)(e), !e))
          throw new o.CodedError(
            'ERR_FONT_FAMILY',
            'Cannot unload an empty name',
          );
        if (!t.default.unloadAsync)
          throw new o.UnavailabilityError('expo-font', 'unloadAsync');
        await t.default.unloadAsync(e, n);
      }
    }
  },
  349,
  [266, 350, 355, 368, 369, 352],
);
