// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 992; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'FAKE_FRONT', {
        enumerable: !0,
        get: function () {
          return y;
        },
      }),
      Object.defineProperty(_e, 'FAKE_BACK', {
        enumerable: !0,
        get: function () {
          return v;
        },
      }),
      (_e.ChequePhotosPreview = function () {
        const { colors: e, mode: n, toggle: w } = (0, c.useTheme)(),
          [b, S] = (0, t.useState)(!1);
        (0, t.useEffect)(() => {
          (j(),
            (0, f.selectUser)({
              id: '00000000-0000-4000-8000-000000000001',
              name: '\u0646\u0645\u0648\u0646\u0647',
            }),
            (0, f.selectShop)(k),
            h.swrStore.setScope('preview-user'));
          (('undefined' != typeof window &&
            window.location.hash.includes('dark')) !==
            ('dark' === n) && w(),
            S(!0));
        }, []);
        const I = { front: { uri: y } },
          C = { front: { uri: y }, back: { uri: v, waiting: !0 } },
          D = (e, t, n) =>
            (0, p.jsxs)(l.Card, {
              testID: n,
              style: { gap: 10, padding: 14 },
              children: [
                (0, p.jsx)(l.Copy, {
                  style: { fontSize: 15, fontFamily: 'Vazirmatn_600SemiBold' },
                  children: e,
                }),
                t,
              ],
            });
        return (0, p.jsxs)(s.ScrollView, {
          testID: 'dev-cheque-photos',
          style: { flex: 1, backgroundColor: e.bg },
          contentContainerStyle: {
            padding: 16,
            gap: 14,
            width: '100%',
            maxWidth: 470,
            alignSelf: 'center',
          },
          children: [
            (0, p.jsx)(l.Copy, {
              style: { fontSize: 12, color: e.muted },
              children:
                '\u067e\u06cc\u0634\u200c\u0646\u0645\u0627\u06cc\u0634 \u0628\u0627 \u062f\u0627\u062f\u0647 \u0633\u0627\u062e\u062a\u06af\u06cc (\u0641\u0642\u0637 \u0646\u0633\u062e\u0647\u0654 \u062a\u0648\u0633\u0639\u0647)',
            }),
            D(
              '\u0627\u0641\u0632\u0648\u062f\u0646 \u062a\u0635\u0648\u06cc\u0631 \u0686\u06a9 \u2014 \u062e\u0627\u0644\u06cc',
              (0, p.jsx)(x.ChequePhotosField, {
                testID: 'preview-empty',
                value: {},
                onPick: z,
                onRemove: z,
                pick: P,
              }),
              'preview-section-empty',
            ),
            D(
              '\u0627\u0641\u0632\u0648\u062f\u0646 \u062a\u0635\u0648\u06cc\u0631 \u0686\u06a9 \u2014 \u0641\u0642\u0637 \u0631\u0648\u06cc \u0686\u06a9',
              (0, p.jsx)(x.ChequePhotosField, {
                testID: 'preview-one',
                value: I,
                onPick: z,
                onRemove: z,
                pick: P,
              }),
              'preview-section-one',
            ),
            D(
              '\u0627\u0641\u0632\u0648\u062f\u0646 \u062a\u0635\u0648\u06cc\u0631 \u0686\u06a9 \u2014 \u0647\u0631 \u062f\u0648 \u0637\u0631\u0641 (\u067e\u0634\u062a \u0686\u06a9 \u062f\u0631 \u0627\u0646\u062a\u0638\u0627\u0631 \u0627\u0631\u0633\u0627\u0644)',
              (0, p.jsx)(x.ChequePhotosField, {
                testID: 'preview-both',
                value: C,
                onPick: z,
                onRemove: z,
                pick: P,
              }),
              'preview-section-both',
            ),
            (0, p.jsx)(o.default, {
              testID: 'preview-cheques',
              children: b && (0, p.jsx)(u.Cheques, { shop: k }),
            }),
          ],
        });
      }));
    var e,
      t = r(d[0]),
      n = r(d[1]),
      o = (e = n) && e.__esModule ? e : { default: e },
      s = r(d[2]),
      c = r(d[3]),
      l = r(d[4]),
      f = r(d[5]),
      h = r(d[6]),
      x = r(d[7]),
      u = r(d[8]),
      p = r(d[9]);
    const w = (e) =>
        'data:image/svg+xml;charset=utf-8,' +
        encodeURIComponent(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 400" font-family="Tahoma, Segoe UI, sans-serif">${e}</svg>`,
        ),
      y = w(
        '<rect width="880" height="400" rx="18" fill="#f3efe2"/><rect x="14" y="14" width="852" height="372" rx="12" fill="none" stroke="#c9b98a" stroke-width="3"/>\n<text x="840" y="62" font-size="30" text-anchor="end" fill="#3d3a2f">\u0628\u0627\u0646\u06a9 \u0646\u0645\u0648\u0646\u0647 (\u0622\u0632\u0645\u0627\u06cc\u0634\u06cc)</text><text x="60" y="62" font-size="22" fill="#6b6450">\u06f1\u06f4\u06f0\u06f5/\u06f0\u06f9/\u06f1\u06f5</text>\n<text x="840" y="140" font-size="24" text-anchor="end" fill="#3d3a2f">\u062f\u0631 \u0648\u062c\u0647: \u0622\u0642\u0627\u06cc \u0631\u0636\u0627\u06cc\u06cc</text><text x="840" y="196" font-size="24" text-anchor="end" fill="#3d3a2f">\u0645\u0628\u0644\u063a: \u06cc\u06a9\u0635\u062f \u0648 \u0628\u06cc\u0633\u062a \u0645\u06cc\u0644\u06cc\u0648\u0646 \u0631\u06cc\u0627\u0644</text>\n<rect x="60" y="160" width="250" height="56" rx="8" fill="#fff" stroke="#c9b98a"/><text x="185" y="198" font-size="26" text-anchor="middle" fill="#1f1d17">\u06f1\u06f2\u06f0\u066c\u06f0\u06f0\u06f0\u066c\u06f0\u06f0\u06f0</text>\n<text x="840" y="270" font-size="20" text-anchor="end" fill="#6b6450">\u0634\u0646\u0627\u0633\u0647 \u0635\u06cc\u0627\u062f\u06cc: \u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6</text><path d="M90 320 C130 270 160 350 200 300 S260 330 300 290" stroke="#24408e" stroke-width="4" fill="none"/>\n<text x="840" y="350" font-size="16" text-anchor="end" fill="#a39a7c">\u0646\u0645\u0648\u0646\u0647 \u2014 \u062f\u0627\u062f\u0647 \u0633\u0627\u062e\u062a\u06af\u06cc \u0628\u0631\u0627\u06cc \u067e\u06cc\u0634\u200c\u0646\u0645\u0627\u06cc\u0634</text>',
      ),
      v = w(
        '<rect width="880" height="400" rx="18" fill="#efeadb"/><rect x="14" y="14" width="852" height="372" rx="12" fill="none" stroke="#c9b98a" stroke-width="3"/>\n<text x="840" y="70" font-size="26" text-anchor="end" fill="#3d3a2f">\u067e\u0634\u062a\u200c\u0646\u0648\u06cc\u0633\u06cc</text><line x1="60" y1="130" x2="840" y2="130" stroke="#c9b98a"/><line x1="60" y1="200" x2="840" y2="200" stroke="#c9b98a"/>\n<text x="840" y="118" font-size="20" text-anchor="end" fill="#3d3a2f">\u0628\u0647 \u062d\u0648\u0627\u0644\u0647\u200c\u06a9\u0631\u062f \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0646\u0645\u0648\u0646\u0647</text><circle cx="200" cy="290" r="62" fill="none" stroke="#8e2430" stroke-width="4"/><text x="200" y="298" font-size="20" text-anchor="middle" fill="#8e2430">\u0645\u0647\u0631 \u0646\u0645\u0648\u0646\u0647</text>\n<path d="M560 300 C600 250 630 330 670 280 S730 310 770 270" stroke="#24408e" stroke-width="4" fill="none"/>',
      ),
      k = {
        id: '00000000-0000-4000-8000-00000000c0de',
        name: '\u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0646\u0645\u0648\u0646\u0647',
      },
      b = '00000000-0000-4000-8000-0000000000a1',
      S = '00000000-0000-4000-8000-0000000000a2',
      I = (e) => new Date(Date.now() + 864e5 * e).toISOString().slice(0, 10),
      C = [
        {
          id: '00000000-0000-4000-8000-000000000101',
          contactId: b,
          direction: 'receive',
          amountToman: 12e6,
          dueDate: I(4),
          status: 'pending',
          occurredAt: new Date().toISOString(),
          number: '1234567890123456',
          bank: '\u0645\u0644\u062a',
          photos: { front: y, back: v },
          version: 1,
        },
        {
          id: '00000000-0000-4000-8000-000000000102',
          contactId: S,
          direction: 'pay',
          amountToman: 45e5,
          dueDate: I(12),
          status: 'pending',
          occurredAt: new Date().toISOString(),
          bank: '\u0635\u0627\u062f\u0631\u0627\u062a',
          version: 1,
        },
        {
          id: '00000000-0000-4000-8000-000000000103',
          contactId: b,
          direction: 'receive',
          amountToman: 8e6,
          dueDate: I(-20),
          status: 'cashed',
          occurredAt: new Date().toISOString(),
          photos: { front: y },
          version: 2,
        },
      ];
    let D = !1;
    function j() {
      if (D || 'undefined' == typeof window) return;
      D = !0;
      const e = window.fetch.bind(window);
      window.fetch = async (t, n) => {
        const o = String(t instanceof Request ? t.url : t),
          s = (e, t = 200) =>
            new Response(JSON.stringify(e), {
              status: t,
              headers: { 'content-type': 'application/json' },
            });
        return o.includes('/v1/shops/' + k.id)
          ? /\/cheques\?/.test(o)
            ? s({ cheques: C, next: null, policyRevision: 1 })
            : /\/contacts\?/.test(o) || /\/contacts$/.test(o)
              ? s({
                  contacts: [
                    {
                      id: b,
                      name: '\u0622\u0642\u0627\u06cc \u0631\u0636\u0627\u06cc\u06cc',
                      kind: 'customer',
                      version: 1,
                    },
                    {
                      id: S,
                      name: '\u067e\u062e\u0634 \u0627\u0644\u0628\u0631\u0632',
                      kind: 'supplier',
                      version: 1,
                    },
                  ],
                  next: null,
                  policyRevision: 1,
                })
              : s({ error: { code: 'not_found' } }, 404)
          : e(t, n);
      };
    }
    const z = () => {},
      P = async () => ({ dataUrl: y, uri: y });
  },
  992,
  [2, 99, 380, 382, 407, 415, 489, 627, 626, 338],
);
