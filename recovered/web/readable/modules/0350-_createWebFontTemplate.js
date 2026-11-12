// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 350; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }),
      (_e._createWebFontTemplate = v));
    var e,
      t = r(d[0]),
      n = r(d[1]),
      o = (e = n) && e.__esModule ? e : { default: e },
      s = r(d[2]),
      i = r(d[3]);
    function c() {
      if ('undefined' == typeof window) return null;
      const e = w();
      return e.sheet ? e.sheet : null;
    }
    function l() {
      const e = c();
      if (e) {
        const t = [...e.cssRules],
          n = [];
        for (let e = 0; e < t.length; e++) {
          const o = t[e];
          o instanceof CSSFontFaceRule && n.push({ rule: o, index: e });
        }
        return n;
      }
      return [];
    }
    function u(e) {
      const t = e?.trim();
      if (!t) return '';
      const n = t[0];
      return t.length >= 2 && ('"' === n || "'" === n) && t.endsWith(n)
        ? t.slice(1, -1).replace(/\\(.)/g, '$1')
        : t;
    }
    function f(e, t) {
      return l().filter(
        ({ rule: n }) =>
          !(
            u(n.style.fontFamily) !== e ||
            (t && t.display && t.display !== n.style.fontDisplay)
          ),
      );
    }
    const y = {
      async unloadAllAsync() {
        if ('undefined' == typeof window) return;
        const e = document.getElementById(h);
        e && e instanceof HTMLStyleElement && document.removeChild(e);
      },
      async unloadAsync(e, t) {
        const n = c();
        if (!n) return;
        const o = f(e, t);
        for (const e of o.reverse()) n.deleteRule(e.index);
      },
      getServerResources: () =>
        (0, i.getServerResourceDescriptors)()
          .map((e) => {
            switch (e.type) {
              case 'style':
                return `<style id="${e.id}">${e.css}</style>`;
              case 'link':
                return `<link rel="${e.rel}" href="${e.href}" as="${e.as}" crossorigin="${e.crossOrigin}" />`;
              default:
                return '';
            }
          })
          .filter(Boolean),
      getServerResourceDescriptors: () => (0, i.getServerResourceDescriptors)(),
      getLoadedFonts() {
        if ('undefined' == typeof window) return (0, i.getLoadedServerFonts)();
        return l().map(({ rule: e }) => u(e.style.fontFamily));
      },
      isLoaded: (e, t = {}) =>
        'undefined' == typeof window
          ? (0, i.isServerFontLoaded)(e)
          : f(e, t)?.length > 0,
      loadAsync(e, n) {
        if ('undefined' == typeof window)
          return (
            (0, i.addServerFont)({ name: e, css: v(e, n), resourceId: n.uri }),
            Promise.resolve()
          );
        if (!(document.head && 'function' == typeof document.head.appendChild))
          throw new t.CodedError(
            'ERR_WEB_ENVIRONMENT',
            "The browser's `document.head` element doesn't support injecting fonts.",
          );
        const s = w();
        document.head.appendChild(s);
        return (
          f(e, n).length || E(e, n),
          F()
            ? new o.default(e, { display: n.display }).load(
                n.testString ?? null,
                12e3,
              )
            : Promise.resolve()
        );
      },
    };
    var p =
      'undefined' == typeof window
        ? y
        : (0, t.registerWebModule)(function () {
            return y;
          }, 'ExpoFontLoader');
    const h = 'expo-generated-fonts';
    function w() {
      const e = document.getElementById(h);
      if (e && e instanceof HTMLStyleElement) return e;
      const t = document.createElement('style');
      return ((t.id = h), t);
    }
    const S = /^[a-zA-Z_-][\w-]*$/;
    function v(e, t) {
      const n =
        'string' == typeof t.display && S.test(t.display)
          ? t.display
          : s.FontDisplay.AUTO;
      return `@font-face{font-family:${JSON.stringify(e)};src:url(${JSON.stringify(t.uri)});font-display:${n}}`;
    }
    function E(e, t) {
      const n = v(e, t),
        o = w();
      if (o.styleSheet) {
        const e = o;
        e.styleSheet.cssText = e.styleSheet.cssText
          ? e.styleSheet.cssText + n
          : n;
      } else {
        const e = document.createTextNode(n);
        o.appendChild(e);
      }
      return o;
    }
    function F() {
      const { userAgent: e } = window.navigator,
        t = !!e.match(/iPad|iPhone/i),
        n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        o = e.includes('Edge'),
        s = e.includes('Trident');
      return !(n || t || o || s);
    }
  },
  350,
  [266, 351, 352, 353],
);
