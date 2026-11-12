// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 912; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'canAddClubMember', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      (e.joinLine = function (t) {
        const c = t.contact.name.trim();
        return t.alreadyMember
          ? (0, n.L)(
              '\xab{name}\xbb \u0627\u0632 \u0642\u0628\u0644 \u0639\u0636\u0648 \u0628\u0627\u0634\u06af\u0627\u0647 \u0627\u0633\u062a.',
              { name: c },
            )
          : t.existing
            ? (0, n.L)(
                '\u0627\u06cc\u0646 \u0634\u0645\u0627\u0631\u0647 \u0628\u0631\u0627\u06cc \xab{name}\xbb \u062b\u0628\u062a \u0628\u0648\u062f\u061b \u0647\u0645\u0627\u0646 \u0634\u062e\u0635 \u0639\u0636\u0648 \u0628\u0627\u0634\u06af\u0627\u0647 \u0634\u062f.',
                { name: c },
              )
            : (0, n.L)(
                '\xab{name}\xbb \u0639\u0636\u0648 \u0628\u0627\u0634\u06af\u0627\u0647 \u0634\u062f.',
                { name: c },
              );
      }));
    var n = r(d[0]),
      t = r(d[1]);
    const c = (n) =>
      !!n && ((0, t.isLead)(n) || (0, t.canWriteNotes)(n.role, n.access));
  },
  912,
  [311, 473],
);
