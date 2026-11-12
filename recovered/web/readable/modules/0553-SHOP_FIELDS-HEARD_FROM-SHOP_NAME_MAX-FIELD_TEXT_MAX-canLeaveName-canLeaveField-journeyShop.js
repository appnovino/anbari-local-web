// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 553; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'SHOP_FIELDS', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      Object.defineProperty(e, 'HEARD_FROM', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      Object.defineProperty(e, 'SHOP_NAME_MAX', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      Object.defineProperty(e, 'FIELD_TEXT_MAX', {
        enumerable: !0,
        get: function () {
          return b;
        },
      }),
      Object.defineProperty(e, 'canLeaveName', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      Object.defineProperty(e, 'canLeaveField', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      (e.journeyShop = function ({
        name: l,
        fieldId: o,
        customField: c,
        heardFrom: p,
      }) {
        const y = u(l, t);
        if (!y) return null;
        const f = s.find((l) => l.id === o),
          T = u(c, b),
          h = f && 'other' !== f.id ? f.businessType : 'both',
          O = T || f?.label,
          _ = n.find((l) => l.id === p)?.id;
        return {
          name: y,
          businessType: h,
          ...(O ? { businessExample: O } : {}),
          ...(_ ? { heardFrom: _ } : {}),
        };
      }));
    var l = r(d[0]);
    const s = [
        {
          id: 'supermarket',
          label: '\u0633\u0648\u067e\u0631\u0645\u0627\u0631\u06a9\u062a',
          businessType: 'reseller',
        },
        {
          id: 'clothing',
          label: '\u067e\u0648\u0634\u0627\u06a9',
          businessType: 'reseller',
        },
        { id: 'shoes', label: '\u06a9\u0641\u0634', businessType: 'reseller' },
        {
          id: 'home',
          label:
            '\u0644\u0648\u0627\u0632\u0645 \u062e\u0627\u0646\u06af\u06cc',
          businessType: 'reseller',
        },
        {
          id: 'beauty',
          label:
            '\u0622\u0631\u0627\u06cc\u0634\u06cc \u0628\u0647\u062f\u0627\u0634\u062a\u06cc',
          businessType: 'reseller',
        },
        {
          id: 'mobile',
          label:
            '\u0645\u0648\u0628\u0627\u06cc\u0644 \u0648 \u0644\u0648\u0627\u0632\u0645 \u062c\u0627\u0646\u0628\u06cc',
          businessType: 'reseller',
        },
        {
          id: 'tools',
          label:
            '\u0627\u0628\u0632\u0627\u0631 \u0648 \u0633\u0627\u062e\u062a\u0645\u0627\u0646\u06cc',
          businessType: 'reseller',
        },
        {
          id: 'pharmacy',
          label:
            '\u062f\u0627\u0631\u0648 \u0648 \u0639\u0637\u0627\u0631\u06cc',
          businessType: 'both',
        },
        {
          id: 'bakery',
          label:
            '\u0646\u0627\u0646\u0648\u0627\u06cc\u06cc \u0648 \u0634\u06cc\u0631\u06cc\u0646\u06cc',
          businessType: 'maker',
        },
        {
          id: 'food',
          label:
            '\u06a9\u0627\u0641\u0647 \u0648 \u0631\u0633\u062a\u0648\u0631\u0627\u0646',
          businessType: 'maker',
        },
        {
          id: 'wholesale',
          label: '\u0639\u0645\u062f\u0647\u200c\u0641\u0631\u0648\u0634\u06cc',
          businessType: 'reseller',
        },
        {
          id: 'other',
          label: '\u0633\u0627\u06cc\u0631',
          businessType: 'both',
        },
      ],
      n = [
        {
          id: 'instagram',
          label: '\u0627\u06cc\u0646\u0633\u062a\u0627\u06af\u0631\u0627\u0645',
        },
        {
          id: 'friends',
          label:
            '\u062f\u0648\u0633\u062a\u0627\u0646 \u0648 \u0622\u0634\u0646\u0627\u06cc\u0627\u0646',
        },
        { id: 'google', label: '\u06af\u0648\u06af\u0644' },
        ...(l.TELEGRAM_BOT
          ? [{ id: 'telegram', label: '\u062a\u0644\u06af\u0631\u0627\u0645' }]
          : []),
        { id: 'youtube', label: '\u06cc\u0648\u062a\u06cc\u0648\u0628' },
        { id: 'other', label: '\u0633\u0627\u06cc\u0631' },
      ],
      t = 100,
      b = 40,
      u = (l, s) =>
        String(l ?? '')
          .replace(/\s+/g, ' ')
          .trim()
          .slice(0, s)
          .trim(),
      o = (l) => u(l, t).length > 0,
      c = (l, n) => s.some((s) => s.id === l) || u(n, b).length > 0;
  },
  553,
  [494],
);
