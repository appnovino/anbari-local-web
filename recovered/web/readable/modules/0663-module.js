// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 663; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }));
    var e = r(d[0]),
      t = {
        async getDocumentAsync({
          type: t = '*/*',
          multiple: s = !1,
          base64: l = !1,
        }) {
          if (!e.Platform.isDOMAvailable) return { canceled: !0, assets: null };
          const c = document.createElement('input');
          return (
            (c.style.display = 'none'),
            c.setAttribute('type', 'file'),
            c.setAttribute('accept', Array.isArray(t) ? t.join(',') : t),
            c.setAttribute('id', String(Math.random())),
            s && c.setAttribute('multiple', 'multiple'),
            document.body.appendChild(c),
            new Promise((e, t) => {
              (c.addEventListener('change', async () => {
                if (c.files) {
                  const s = [];
                  for (const e of c.files) s.push(n(e, l));
                  try {
                    const t = await Promise.all(s);
                    e({ canceled: !1, assets: t, output: c.files });
                  } catch (e) {
                    t(e);
                  }
                } else e({ canceled: !0, assets: null });
                document.body.removeChild(c);
              }),
                c.addEventListener('cancel', () => {
                  e({ canceled: !0, assets: null });
                }));
              const s = new MouseEvent('click');
              c.dispatchEvent(s);
            })
          );
        },
      };
    function n(e, t = !0) {
      return new Promise((n, s) => {
        const l = e.type;
        if (!t)
          return void n({
            uri: URL.createObjectURL(e),
            mimeType: l,
            name: e.name,
            lastModified: e.lastModified,
            size: e.size,
            file: e,
          });
        const c = new FileReader();
        ((c.onerror = () => {
          s(
            new Error(
              'Failed to read the selected media because the operation failed.',
            ),
          );
        }),
          (c.onload = ({ target: t }) => {
            const s = t.result;
            n({
              uri: URL.createObjectURL(e),
              base64: s,
              mimeType: l,
              name: e.name,
              lastModified: e.lastModified,
              size: e.size,
              file: e,
            });
          }),
          c.readAsDataURL(e));
      });
    }
  },
  663,
  [266],
);
