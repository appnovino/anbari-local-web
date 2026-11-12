// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 559; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'profileNews', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      Object.defineProperty(e, 'profileHowTo', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    const t = [
        {
          id: 'voice',
          tag: '\u062a\u0627\u0632\u0647\u200c\u0647\u0627',
          title:
            '\u062b\u0628\u062a \u0628\u0627 \u0635\u062f\u0627 \u0633\u0631\u06cc\u0639\u200c\u062a\u0631 \u0634\u062f',
          text: '\u0628\u06af\u0648 \u0686\u06cc \u0631\u0633\u06cc\u062f \u06cc\u0627 \u0686\u06cc \u0641\u0631\u0648\u062e\u062a\u06cc\u061b \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u062e\u0648\u062f\u0634 \u0645\u06cc\u200c\u0646\u0648\u06cc\u0633\u0647',
          action: 'learn',
        },
        {
          id: 'invite',
          tag: '\u0647\u062f\u06cc\u0647',
          title:
            '\u06f5 \u062f\u0648\u0633\u062a \u062f\u0639\u0648\u062a \u06a9\u0646',
          text: '\u06f2 \u0645\u0627\u0647 \u0627\u0634\u062a\u0631\u0627\u06a9 \u067e\u0644\u0627\u0633 \u0631\u0627\u06cc\u06af\u0627\u0646 \u0628\u0631\u0627\u06cc \u062e\u0648\u062f\u062a',
          action: 'referral',
        },
        {
          id: 'expiry',
          tag: '\u0627\u062e\u0628\u0627\u0631',
          title:
            '\u06cc\u0627\u062f\u0622\u0648\u0631 \u062a\u0627\u0631\u06cc\u062e \u0627\u0646\u0642\u0636\u0627',
          text: '\u0642\u0628\u0644 \u0627\u0632 \u0627\u06cc\u0646\u06a9\u0647 \u062c\u0646\u0633 \u062e\u0631\u0627\u0628 \u0628\u0634\u0647\u060c \u062e\u0628\u0631\u062a \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645',
          action: 'news',
        },
      ],
      n = [
        {
          id: 'voice',
          title:
            '\u0628\u0627 \u0635\u062f\u0627 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646',
          text: '\u0628\u06af\u0648 \u0686\u06cc \u0631\u0633\u06cc\u062f \u06cc\u0627 \u0686\u06cc \u0641\u0631\u0648\u062e\u062a\u06cc\u061b \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u062e\u0648\u062f\u0634 \u0645\u06cc\u200c\u0646\u0648\u06cc\u0633\u0647',
          cta: '\u0628\u0628\u06cc\u0646 \u0686\u0637\u0648\u0631',
          action: { kind: 'lesson', lesson: 'voice' },
        },
        {
          id: 'connector',
          title:
            '\u0627\u062a\u0635\u0627\u0644 \u06a9\u0627\u0646\u06a9\u062a\u0648\u0631',
          text: '\u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u0631\u0627 \u0628\u0647 \u062f\u0633\u062a\u06cc\u0627\u0631 \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc\u200c\u0627\u062a \u0648\u0635\u0644 \u06a9\u0646',
          cta: '\u0633\u0627\u062e\u062a \u06a9\u0644\u06cc\u062f',
          action: { kind: 'connector' },
          who: 'owner',
        },
        {
          id: 'chatgpt',
          title: '\u0627\u062a\u0635\u0627\u0644 ChatGPT',
          text: '\u06a9\u0644\u06cc\u062f \u0631\u0627 \u062f\u0631 ChatGPT \u0628\u06af\u0630\u0627\u0631 \u0648 \u0628\u06af\u0648 \xab\u06f2 \u062a\u0627 \u0628\u0631\u0646\u062c \u0641\u0631\u0648\u062e\u062a\u0645\xbb',
          cta: '\u0648\u0635\u0644\u0634 \u06a9\u0646',
          action: { kind: 'connector' },
          who: 'owner',
        },
        {
          id: 'staff',
          title:
            '\u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646 \u06a9\u0627\u0631\u0645\u0646\u062f',
          text: '\u0628\u0631\u0627\u06cc \u0647\u0645\u06a9\u0627\u0631\u062a \u062d\u0633\u0627\u0628 \u0628\u0633\u0627\u0632 \u0648 \u0628\u06af\u0648 \u0686\u0647 \u0686\u06cc\u0632\u0647\u0627\u06cc\u06cc \u0631\u0627 \u0628\u0628\u06cc\u0646\u062f',
          cta: '\u0628\u0628\u06cc\u0646 \u0686\u0637\u0648\u0631',
          action: { kind: 'lesson', lesson: 'staff' },
          who: 'owner',
        },
        {
          id: 'sell',
          title: '\u062b\u0628\u062a \u0641\u0631\u0648\u0634',
          text: '\u0647\u0631 \u0641\u0631\u0648\u0634 \u0631\u0627 \u062b\u0628\u062a \u06a9\u0646 \u062a\u0627 \u0645\u0648\u062c\u0648\u062f\u06cc \u06a9\u0645 \u0634\u0648\u062f \u0648 \u062f\u0631 \u06af\u0632\u0627\u0631\u0634 \u0628\u06cc\u0627\u06cc\u062f',
          cta: '\u0628\u0628\u06cc\u0646 \u0686\u0637\u0648\u0631',
          action: { kind: 'lesson', lesson: 'sell' },
        },
      ];
  },
  559,
  [],
);
