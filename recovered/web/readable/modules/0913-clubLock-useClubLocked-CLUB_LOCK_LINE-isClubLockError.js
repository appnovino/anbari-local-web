// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 913; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'clubLock', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      (_e.useClubLocked = function () {
        return (0, e.useSyncExternalStore)(u.subscribe, u.get, u.get);
      }),
      Object.defineProperty(_e, 'CLUB_LOCK_LINE', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      Object.defineProperty(_e, 'isClubLockError', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    var e = r(d[0]);
    let t = !1;
    const n = new Set(),
      u = {
        set(e) {
          e !== t && ((t = e), n.forEach((e) => e()));
        },
        get: () => t,
        subscribe: (e) => (
          n.add(e),
          () => {
            n.delete(e);
          }
        ),
      };
    const c =
        '\u0628\u0627\u0634\u06af\u0627\u0647 \u0645\u0634\u062a\u0631\u06cc\u0627\u0646 \u062f\u0631 \u0637\u0631\u062d \xab\u067e\u0644\u0627\u0633\xbb \u0627\u0633\u062a. \u0639\u0636\u0648\u0647\u0627 \u0648 \u0627\u0645\u062a\u06cc\u0627\u0632\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u062b\u0628\u062a \u0634\u062f\u0647 \u067e\u0627\u06a9 \u0646\u0645\u06cc\u200c\u0634\u0648\u0646\u062f.',
      o = (e) =>
        e instanceof Error &&
        ('club_plus_only' === e.message || 'club_paid_only' === e.message);
  },
  913,
  [2],
);
