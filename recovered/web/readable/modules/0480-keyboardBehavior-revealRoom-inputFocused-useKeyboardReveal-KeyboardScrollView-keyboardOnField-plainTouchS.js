// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 480; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'keyboardBehavior', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      (_e.revealRoom = function (e) {
        c = Number.isFinite(e) && e > 0 ? e : 0;
      }),
      (_e.inputFocused = function () {}),
      (_e.useKeyboardReveal = l),
      (_e.KeyboardScrollView = function ({ ref: e, ...o }) {
        const c = (0, n.useRef)(null);
        l(c);
        const s = (0, n.useCallback)(
          (n) => {
            ((c.current = n),
              'function' == typeof e ? e(n) : e && (e.current = n));
          },
          [e],
        );
        return (0, u.jsx)(t.ScrollView, {
          keyboardShouldPersistTaps: 'handled',
          ...o,
          ref: s,
        });
      }),
      (_e.keyboardOnField = function () {
        return !1;
      }),
      Object.defineProperty(_e, 'plainTouchScrolls', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      (_e.useKeyboardVisible = function () {
        const [e, t] = (0, n.useState)(!1);
        return ((0, n.useEffect)(() => {}, []), e);
      }));
    var n = r(d[0]);
    e(r(d[1]));
    r(d[2]);
    e(r(d[3]));
    var t = r(d[4]),
      u = r(d[5]);
    const o = void 0;
    let c = 0;
    new Set();
    function l(e) {
      (0, n.useEffect)(() => {}, [e]);
    }
    const s = null;
  },
  480,
  [2, 207, 94, 242, 380, 338],
);
