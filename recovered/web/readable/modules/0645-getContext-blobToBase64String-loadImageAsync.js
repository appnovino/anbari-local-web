// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 645; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.getContext = n),
      (e.blobToBase64String = async function (t) {
        return (
          await new Promise((n, o) => {
            const s = new FileReader();
            ((s.onloadend = () => n(s.result)),
              (s.onerror = () =>
                o(
                  new Error(
                    `Unable to convert blob to base64 string: ${s.error}`,
                  ),
                )),
              s.readAsDataURL(t));
          })
        ).replace(/^data:image\/\w+;base64,/, '');
      }),
      (e.loadImageAsync = function (t) {
        return new Promise((o, s) => {
          const c = new Image();
          c.crossOrigin = 'anonymous';
          const l = document.createElement('canvas');
          ((c.onload = () => {
            ((l.width = c.naturalWidth), (l.height = c.naturalHeight));
            (n(l).drawImage(c, 0, 0, c.naturalWidth, c.naturalHeight), o(l));
          }),
            (c.onerror = () => s(l)),
            (c.src = t));
        });
      }));
    var t = r(d[0]);
    function n(n) {
      const o = n.getContext('2d');
      if (!o)
        throw new t.CodedError(
          'ERR_IMAGE_MANIPULATOR',
          'Failed to create canvas context',
        );
      return o;
    }
  },
  645,
  [266],
);
