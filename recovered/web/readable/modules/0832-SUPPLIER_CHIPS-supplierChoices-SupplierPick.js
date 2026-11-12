// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 832; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'SUPPLIER_CHIPS', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }),
      (_e.supplierChoices = h),
      (_e.SupplierPick = function ({ shop: e, value: n, onChange: f }) {
        const [C, x] = (0, t.useState)([]);
        (0, t.useEffect)(() => {
          if (!e) return;
          let t = !0;
          return (
            (0, c.listContacts)(e).then(
              (e) => {
                t && x(h(e.contacts));
              },
              () => {},
            ),
            () => {
              t = !1;
            }
          );
        }, [e?.id]);
        const L = n.trim().toLowerCase();
        return (0, p.jsxs)(l.Field, {
          testID: 'manual-supplier-field',
          label: (0, u.L)(
            '\u0641\u0631\u0648\u0634\u0646\u062f\u0647 (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)',
          ),
          children: [
            (0, p.jsx)(o.Input, {
              testID: 'manual-supplier',
              value: n,
              maxLength: 60,
              onChangeText: f,
              placeholder: (0, u.L)(
                '\u0627\u0632 \u06a9\u06cc \u0631\u0633\u06cc\u062f\u061f \u0645\u062b\u0644\u0627\u064b \u067e\u062e\u0634 \u0646\u0645\u0648\u0646\u0647',
              ),
            }),
            C.length > 0 &&
              (0, p.jsx)(s.default, {
                style: {
                  flexDirection: 'row-reverse',
                  flexWrap: 'wrap',
                  gap: 6,
                },
                children: C.map((e) =>
                  (0, p.jsx)(
                    l.Pill,
                    {
                      label: e,
                      active: L === e.toLowerCase(),
                      onPress: () => f(L === e.toLowerCase() ? '' : e),
                    },
                    e,
                  ),
                ),
              }),
          ],
        });
      }));
    var e,
      t = r(d[0]),
      n = r(d[1]),
      s = (e = n) && e.__esModule ? e : { default: e },
      o = r(d[2]),
      l = r(d[3]),
      u = r(d[4]),
      c = r(d[5]),
      p = r(d[6]);
    const f = 8;
    function h(e) {
      const t = new Set(),
        n = [];
      for (const s of e) {
        if (s.archivedAt || ('supplier' !== s.kind && 'both' !== s.kind))
          continue;
        const e = s.name.trim(),
          o = e.toLowerCase();
        if (e && !t.has(o) && (t.add(o), n.push(e.slice(0, 60)), n.length >= f))
          break;
      }
      return n;
    }
  },
  832,
  [2, 99, 407, 774, 311, 519, 338],
);
