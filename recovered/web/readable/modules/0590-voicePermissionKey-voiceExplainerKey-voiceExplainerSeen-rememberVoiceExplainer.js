// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 590; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'voicePermissionKey', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      Object.defineProperty(_e, 'voiceExplainerKey', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      (_e.voiceExplainerSeen = async function () {
        try {
          const [e, t] = await Promise.all([
            n.default.getItem(o),
            n.default.getItem(c),
          ]);
          return 'seen' === e || 'granted' === t;
        } catch {
          return !1;
        }
      }),
      (_e.rememberVoiceExplainer = async function () {
        try {
          await n.default.setItem(o, 'seen');
        } catch {}
      }));
    var e,
      t = r(d[0]),
      n = (e = t) && e.__esModule ? e : { default: e };
    const c = 'anbari.voice.permission.v1',
      o = 'anbari.voice.explainer.v1';
  },
  590,
  [258],
);
