// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 661; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, m, _e, _d) {
    'use strict';
    function e(e) {
      if (e && e.__esModule) return e;
      var t = {};
      return (
        e &&
          Object.keys(e).forEach(function (n) {
            var a = Object.getOwnPropertyDescriptor(e, n);
            Object.defineProperty(
              t,
              n,
              a.get
                ? a
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
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.pickWorkbook = async function () {
        const e = await t.getDocumentAsync({
          type: [
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'application/vnd.ms-excel',
            'text/csv',
          ],
          copyToCacheDirectory: !0,
          multiple: !1,
        });
        if (e.canceled) return null;
        const n = e.assets[0];
        if (n.size && n.size > 5242880) throw new Error('import_limit');
        const a = new Uint8Array(await (await fetch(n.uri)).arrayBuffer());
        if (a.length > 5242880) throw new Error('import_limit');
        return a;
      }),
      (_e.saveWorkbook = async function (e, t) {
        {
          const n = URL.createObjectURL(
              new Blob([e], {
                type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
              }),
            ),
            a = document.createElement('a');
          return (
            (a.href = n),
            (a.download = t),
            a.click(),
            void setTimeout(() => URL.revokeObjectURL(n), 6e4)
          );
        }
      }),
      (_e.pickJson = async function () {
        const e = await t.getDocumentAsync({
          type: ['application/json', 'text/json', 'text/plain'],
          copyToCacheDirectory: !0,
          multiple: !1,
        });
        if (e.canceled) return null;
        const n = e.assets[0];
        if (n.size && n.size > 52428800) throw Error('import_limit');
        const a = new Uint8Array(await (await fetch(n.uri)).arrayBuffer());
        if (a.length > 52428800) throw Error('import_limit');
        return a;
      }),
      (_e.saveJson = async function (e, t) {
        if (e.length > 52428800) throw Error('import_limit');
        {
          const n = URL.createObjectURL(
              new Blob([e], { type: 'application/json' }),
            ),
            a = document.createElement('a');
          ((a.href = n),
            (a.download = t),
            a.click(),
            setTimeout(() => URL.revokeObjectURL(n), 6e4));
        }
      }),
      (_e.namedCacheCopy = function (e, t) {
        return e;
      }),
      (_e.savePngDataUrl = n),
      (_e.shareText = async function (e, t) {
        if ('undefined' != typeof navigator && navigator.share)
          return void (await navigator.share({ title: t, text: e }));
        return void (await navigator.clipboard?.writeText(e));
      }),
      (_e.sharePngIfPossible = async function (
        e,
        t,
        n,
        a = n.split('\n')[0] || t,
      ) {
        if (
          'undefined' == typeof navigator ||
          !navigator.share ||
          !navigator.canShare
        )
          return !1;
        const o = await (await fetch(e)).blob(),
          c = new globalThis.File([o], t, { type: 'image/png' });
        return (
          !!navigator.canShare({ files: [c] }) &&
          (await navigator.share({ files: [c], title: a, text: n }), !0)
        );
      }),
      (_e.sharePngDataUrl = async function (
        e,
        t,
        a,
        o = a.split('\n')[0] || t,
      ) {
        const c = await (await fetch(e)).blob(),
          s = new globalThis.File([c], t, { type: 'image/png' });
        if (navigator.share && navigator.canShare?.({ files: [s] }))
          return void (await navigator.share({
            files: [s],
            title: o,
            text: a,
          }));
        n(e, t);
      }),
      r(_d[0]));
    var t = e(r(_d[1]));
    (e(r(_d[2])), r(_d[3]));
    function n(e, t) {
      const n = document.createElement('a');
      ((n.href = e), (n.download = t), n.click());
    }
  },
  661,
  { 0: 94, 1: 662, 2: 995, 3: 665, 4: 4, 5: 336, paths: {} },
);
