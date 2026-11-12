// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 638; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.parseMediaTypes = p),
      (e.mapDeprecatedOptions = function (s) {
        if (!s.mediaTypes) return s;
        return { ...s, mediaTypes: p(s.mediaTypes ?? []) };
      }));
    var s = r(d[0]);
    function p(p) {
      const n = {
        Images: ['images'],
        Videos: ['videos'],
        All: ['images', 'videos'],
      };
      return p === s.MediaTypeOptions.Images ||
        p === s.MediaTypeOptions.Videos ||
        p === s.MediaTypeOptions.All
        ? (console.warn(
            '[expo-image-picker] `ImagePicker.MediaTypeOptions` have been deprecated. Use `ImagePicker.MediaType` or an array of `ImagePicker.MediaType` instead.',
          ),
          n[p])
        : 'string' == typeof p
          ? [p]
          : p;
    }
  },
  638,
  [637],
);
