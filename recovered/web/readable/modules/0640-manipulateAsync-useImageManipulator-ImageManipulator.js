// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 640; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.manipulateAsync = async function (e, t = [], o = {}) {
        (0, s.validateArguments)(e, t, o);
        const { format: l = n.SaveFormat.JPEG, ...c } = o,
          f = u.default.manipulate(e);
        for (const e of t)
          'resize' in e
            ? f.resize(e.resize)
            : 'rotate' in e
              ? f.rotate(e.rotate)
              : 'flip' in e
                ? f.flip(e.flip)
                : 'crop' in e
                  ? f.crop(e.crop)
                  : 'extent' in e && f.extent && f.extent(e.extent);
        const p = await f.renderAsync(),
          y = await p.saveAsync({ format: l, ...c });
        return (f.release(), p.release(), y);
      }),
      (_e.useImageManipulator = function (e) {
        return (0, t.useReleasingSharedObject)(
          () => u.default.manipulate(e),
          [e],
        );
      }),
      Object.defineProperty(_e, 'ImageManipulator', {
        enumerable: !0,
        get: function () {
          return u.default;
        },
      }));
    var e,
      t = r(d[0]),
      n = r(d[1]),
      o = r(d[2]),
      u = (e = o) && e.__esModule ? e : { default: e },
      s = r(d[3]);
  },
  640,
  [266, 641, 642, 652],
);
