// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 765; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, _d) {
    'use strict';
    function e(e) {
      if (e && e.__esModule) return e;
      var t = {};
      return (
        e &&
          Object.keys(e).forEach(function (i) {
            var o = Object.getOwnPropertyDescriptor(e, i);
            Object.defineProperty(
              t,
              i,
              o.get
                ? o
                : {
                    enumerable: !0,
                    get: function () {
                      return e[i];
                    },
                  },
            );
          }),
        (t.default = e),
        t
      );
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'PHOTO_STEPS', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      (_e.supportPhoto = u),
      (_e.pickSupportPhotos = async function (e, t) {
        if (t <= 0) throw Error('support_too_many_files');
        if (e) {
          if (!(await i.requestCameraPermissionsAsync()).granted)
            throw Error('camera_permission');
        }
        const o = {
            mediaTypes: ['images'],
            allowsEditing: !1,
            quality: 1,
            ...(e ? {} : { allowsMultipleSelection: t > 1, selectionLimit: t }),
          },
          n = await (e ? i.launchCameraAsync(o) : i.launchImageLibraryAsync(o));
        if (n.canceled) return [];
        const s = n.assets.slice(0, t),
          c = [];
        for (const [t, i] of s.entries())
          c.push(await u(i, e ? 'photo.jpg' : `screenshot-${t + 1}.jpg`));
        return c;
      }),
      (_e.pickSupportPdf = async function () {
        const e = await t.getDocumentAsync({
          type: ['application/pdf'],
          copyToCacheDirectory: !0,
          multiple: !1,
        });
        if (e.canceled) return null;
        const i = e.assets[0];
        if (
          i.mimeType &&
          'application/pdf' !== i.mimeType &&
          !/\.pdf$/i.test(i.name || '')
        )
          throw Error('support_file_type');
        if (i.size && i.size > n.FILE_LIMITS.file)
          throw Error('support_file_too_large');
        const o = await p(i.uri, 'application/pdf'),
          c = s(o);
        if (c > n.FILE_LIMITS.file) throw Error('support_file_too_large');
        return {
          dataUrl: o,
          name: (i.name || 'document.pdf').slice(0, 120),
          kind: 'file',
          size: c,
        };
      }),
      (_e.sizeText = function (e) {
        return e >= 1e6
          ? (e / 1e6).toLocaleString('fa-IR', { maximumFractionDigits: 1 }) +
              ' \u0645\u06af\u0627\u0628\u0627\u06cc\u062a'
          : Math.max(1, Math.round(e / 1e3)).toLocaleString('fa-IR') +
              ' \u06a9\u06cc\u0644\u0648\u0628\u0627\u06cc\u062a';
      }),
      (_e.durationText = function (e) {
        const t = Math.max(0, Math.round(e / 1e3));
        return (
          Math.floor(t / 60) +
          ':' +
          String(t % 60).padStart(2, '0')
        ).replace(
          /\d/g,
          (e) =>
            '\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9'[
              Number(e)
            ],
        );
      }),
      r(_d[0]));
    var t = e(r(_d[1])),
      i = e(r(_d[2])),
      o = r(_d[3]);
    r(_d[4]);
    var n = r(_d[5]);
    const s = (e) => Math.floor((3 * (e.length - e.indexOf(',') - 1)) / 4),
      c = [
        [1600, 0.7],
        [1600, 0.55],
        [1280, 0.55],
        [1024, 0.5],
      ];
    async function u(e, t) {
      let { width: i = 0, height: u = 0 } = e;
      if (!(i > 0 && u > 0)) {
        const t = await (0, o.manipulateAsync)(e.uri, []);
        ((i = t.width), (u = t.height));
      }
      for (const [p, l] of c) {
        const c =
            Math.max(i, u) > p
              ? [{ resize: i >= u ? { width: p } : { height: p } }]
              : [],
          f = await (0, o.manipulateAsync)(e.uri, c, {
            compress: l,
            format: o.SaveFormat.JPEG,
            base64: !0,
          });
        if (!f.base64) continue;
        const d = 'data:image/jpeg;base64,' + f.base64,
          h = s(d);
        if (h <= n.FILE_LIMITS.image)
          return { dataUrl: d, name: t, kind: 'image', size: h, previewUri: d };
      }
      throw Error('support_file_too_large');
    }
    async function p(e, t) {
      const i = await (await fetch(e)).blob();
      return await new Promise((e, o) => {
        const n = new FileReader();
        ((n.onload = () =>
          e(String(n.result).replace(/^data:[^;,]*/, 'data:' + t))),
          (n.onerror = () => o(Error('support_file_type'))),
          n.readAsDataURL(i));
      });
    }
  },
  765,
  [94, 662, 635, 639, 665, 746],
);
