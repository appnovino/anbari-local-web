// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 551; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'loadWorkspace', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      Object.defineProperty(e, 'Workspace', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      Object.defineProperty(e, 'LiveAgentHost', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }),
      Object.defineProperty(e, 'ChequePhotosPreview', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      Object.defineProperty(e, 'PhotoCropperPreview', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    var t = r(d[0]),
      n = r(d[1]);
    let o = null;
    const c = () =>
        (o ??= r(d[3])(d[2], d.paths, './App').catch((t) => {
          throw (
            (o = null),
            (0, n.markTransport)(t, { path: '/_expo/static/js/web/App' })
          );
        })),
      u = (0, t.lazy)(() => c().then((t) => ({ default: t.Workspace }))),
      p = (0, t.lazy)(() => c().then((t) => ({ default: t.LiveAgentHost }))),
      s = (0, t.lazy)(() =>
        c().then((t) => ({ default: t.ChequePhotosPreview })),
      ),
      l = (0, t.lazy)(() =>
        c().then((t) => ({ default: t.PhotoCropperPreview })),
      );
    try {
      document.cookie.split('; ').some((t) => t.startsWith('anbari_csrf=')) &&
        c();
    } catch {}
    const f = ['pointerup', 'keydown'];
    function h() {
      (f.forEach((t) => window.removeEventListener(t, h)), c());
    }
    try {
      f.forEach((t) => window.addEventListener(t, h, { passive: !0 }));
    } catch {}
  },
  551,
  {
    0: 2,
    1: 429,
    2: 609,
    3: 336,
    paths: {
      609: '/_expo/static/js/web/App-659666a99f2f01630312af1cf82147aa.js',
    },
  },
);
