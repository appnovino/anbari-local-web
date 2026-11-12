// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 306; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'latestContext', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      Object.defineProperty(_e, 'addUpdatesStateChangeListener', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      Object.defineProperty(_e, 'emitTestStateChangeEvent', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      Object.defineProperty(_e, 'resetLatestContext', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }));
    var e,
      t = r(d[0]),
      n = (e = t) && e.__esModule ? e : { default: e };
    let o = S(n.default.initialContext);
    n.default.addListener('Expo.nativeUpdatesStateChangeEvent', s);
    const l = new Set();
    function s(e) {
      const t = 'string' == typeof e ? JSON.parse(e) : { ...e },
        n = S(t.context);
      n.sequenceNumber <= o.sequenceNumber ||
        ((t.context = n), (o = n), l.forEach((e) => e(t)));
    }
    const c = (e) => (
        l.add(e),
        {
          remove() {
            l.delete(e);
          },
        }
      ),
      u = (e) => {
        s(e);
      },
      f = () => {
        o = S(n.default.initialContext);
      };
    function S(e) {
      const t = { ...e };
      return (
        t.latestManifestString &&
          ((t.latestManifest = JSON.parse(t.latestManifestString)),
          delete t.latestManifestString),
        t.downloadedManifestString &&
          ((t.downloadedManifest = JSON.parse(t.downloadedManifestString)),
          delete t.downloadedManifestString),
        t.lastCheckForUpdateTimeString &&
          ((t.lastCheckForUpdateTime = new Date(
            t.lastCheckForUpdateTimeString,
          )),
          delete t.lastCheckForUpdateTimeString),
        t.rollbackString &&
          ((t.rollback = JSON.parse(t.rollbackString)),
          delete t.rollbackString),
        t
      );
    }
  },
  306,
  [304],
);
