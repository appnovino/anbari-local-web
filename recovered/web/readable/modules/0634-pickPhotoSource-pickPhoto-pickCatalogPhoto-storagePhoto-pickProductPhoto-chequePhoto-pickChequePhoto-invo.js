// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 634; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.pickPhotoSource = s),
      (_e.pickPhoto = async function (n) {
        if (n) {
          if (!(await e.requestCameraPermissionsAsync()).granted)
            throw new Error('camera_permission');
        }
        const s = {
            mediaTypes: ['images'],
            quality: 0.8,
            allowsMultipleSelection: !1,
          },
          o = n
            ? await e.launchCameraAsync(s)
            : await e.launchImageLibraryAsync(s);
        if (o.canceled) return null;
        const c = o.assets[0],
          u = await (0, t.manipulateAsync)(
            c.uri,
            c.width > 1600 ? [{ resize: { width: 1600 } }] : [],
            { compress: 0.8, format: t.SaveFormat.JPEG, base64: !0 },
          );
        if (!u.base64 || u.base64.length > 8388608)
          throw new Error('too_large');
        return { image: u.base64, mimeType: 'image/jpeg', uri: u.uri };
      }),
      (_e.pickCatalogPhoto = async function (n = !1) {
        if (n) {
          if (!(await e.requestCameraPermissionsAsync()).granted)
            throw Error('camera_permission');
        }
        const s = {
            mediaTypes: ['images'],
            allowsMultipleSelection: !1,
            quality: 0.8,
          },
          o = await (n ? e.launchCameraAsync(s) : e.launchImageLibraryAsync(s));
        if (o.canceled) return null;
        const c = o.assets[0],
          u = await (0, t.manipulateAsync)(
            c.uri,
            [
              {
                resize: c.width >= c.height ? { width: 640 } : { height: 640 },
              },
            ],
            { compress: 0.7, format: t.SaveFormat.JPEG, base64: !0 },
          );
        if (!u.base64 || u.base64.length > 7e5) throw Error('too_large');
        return 'data:image/jpeg;base64,' + u.base64;
      }),
      (_e.storagePhoto = async function (e) {
        for (const [n, s] of [
          [1e3, 0.6],
          [800, 0.5],
          [640, 0.45],
        ]) {
          const o = await (0, t.manipulateAsync)(
            e,
            [{ resize: { width: n } }],
            { compress: s, format: t.SaveFormat.JPEG, base64: !0 },
          );
          if (o.base64 && o.base64.length <= 7e5)
            return 'data:image/jpeg;base64,' + o.base64;
        }
        throw Error('too_large');
      }),
      (_e.pickProductPhoto = async function (n = !1) {
        if (n) {
          if (!(await e.requestCameraPermissionsAsync()).granted)
            throw Error('camera_permission');
        }
        const s = {
            mediaTypes: ['images'],
            allowsMultipleSelection: !1,
            allowsEditing: !0,
            aspect: [1, 1],
            quality: 0.8,
          },
          o = await (n ? e.launchCameraAsync(s) : e.launchImageLibraryAsync(s));
        if (o.canceled) return null;
        const c = o.assets[0],
          u = c.width && c.height ? c : await (0, t.manipulateAsync)(c.uri, []),
          h = Math.min(u.width, u.height),
          l = await (0, t.manipulateAsync)(
            c.uri,
            [
              {
                crop: {
                  originX: Math.floor((u.width - h) / 2),
                  originY: Math.floor((u.height - h) / 2),
                  width: h,
                  height: h,
                },
              },
              { resize: { width: 640, height: 640 } },
            ],
            { compress: 0.7, format: t.SaveFormat.JPEG, base64: !0 },
          );
        if (!l.base64 || l.base64.length > 7e5) throw Error('too_large');
        return 'data:image/jpeg;base64,' + l.base64;
      }),
      (_e.chequePhoto = o),
      (_e.pickChequePhoto = async function (e) {
        const t = await s(e);
        return t ? o(t) : null;
      }),
      (_e.invoicePhoto = c),
      (_e.pickInvoicePhoto = async function (e) {
        const t = await s(e);
        return t ? c(t) : null;
      }));
    var e = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        return (
          e &&
            Object.keys(e).forEach(function (n) {
              var s = Object.getOwnPropertyDescriptor(e, n);
              Object.defineProperty(
                t,
                n,
                s.get
                  ? s
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[n];
                      },
                    },
              );
            }),
          (t.default = e),
          t
        );
      })(r(_d[0])),
      t = r(_d[1]),
      n = r(_d[2]);
    async function s(t = !1) {
      if (t) {
        if (!(await e.requestCameraPermissionsAsync()).granted)
          throw Error('camera_permission');
      }
      const n = {
          mediaTypes: ['images'],
          allowsMultipleSelection: !1,
          allowsEditing: !1,
          quality: 1,
        },
        s = await (t ? e.launchCameraAsync(n) : e.launchImageLibraryAsync(n));
      if (s.canceled) return null;
      const { uri: o, width: c, height: u } = s.assets[0];
      return { uri: o, width: c, height: u };
    }
    async function o(e) {
      let { width: s = 0, height: o = 0 } = e;
      if (!(s > 0 && o > 0)) {
        const n = await (0, t.manipulateAsync)(e.uri, []);
        ((s = n.width), (o = n.height));
      }
      const c = (0, n.chequeResize)(s, o),
        u = c ? [{ resize: c }] : [];
      return (0, n.fitChequePhoto)((n) =>
        (0, t.manipulateAsync)(e.uri, u, {
          compress: n,
          format: t.SaveFormat.JPEG,
          base64: !0,
        }),
      );
    }
    async function c(e) {
      let { width: s = 0, height: o = 0 } = e;
      if (!(s > 0 && o > 0)) {
        const n = await (0, t.manipulateAsync)(e.uri, []);
        ((s = n.width), (o = n.height));
      }
      const c = (0, n.invoiceResize)(s, o),
        u = c ? [{ resize: c }] : [];
      return (0, n.fitInvoicePhoto)((n) =>
        (0, t.manipulateAsync)(e.uri, u, {
          compress: n,
          format: t.SaveFormat.JPEG,
          base64: !0,
        }),
      );
    }
  },
  634,
  [635, 639, 653],
);
