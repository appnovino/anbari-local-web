// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 814; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.applyInvoiceHeader = u),
      (e.withParty = function (t, s, d, c) {
        const u = (0, o.cleanInvoiceHeader)(t);
        if (!d) return (delete u[s], u);
        const p = (t, o) =>
            'name' === t || 'address' === t
              ? o.trim()
              : (0, n.latinDigits)(o).trim(),
          f = {};
        for (const t of l) {
          const n = p(t, d[t]);
          n !== p(t, c[t]) && (f[t] = n);
        }
        Object.keys(f).length ? (u[s] = f) : delete u[s];
        return u;
      }),
      (e.withEmployee = function (t, n) {
        const s = (0, o.cleanInvoiceHeader)(t);
        null === n ? delete s.employee : (s.employee = n.trim());
        return s;
      }),
      (e.withSignature = function (t, n, s) {
        const l = (0, o.cleanInvoiceHeader)(t),
          d = { ...l.signatures };
        s ? (d[n] = s) : delete d[n];
        d.seller || d.buyer ? (l.signatures = d) : delete l.signatures;
        return l;
      }),
      (e.partyDefaults = function (t, n, o) {
        return u(t, { ...o, header: void 0 }).head.fields[n];
      }),
      (e.signatureSvg = function (t, n, s = 60) {
        return (0, o.isSignature)(t)
          ? `<svg class="sig" viewBox="0 0 ${t.w} ${t.h}" preserveAspectRatio="xMidYMid meet" style="display:block;width:100%;height:${s}px" aria-hidden="true"><path d="${p(t.d)}" fill="none" stroke="${p(n)}" stroke-width="1.8" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round"/></svg>`
          : '';
      }),
      (e.isInvoiceLead = f),
      (e.seesPersonDetails = function (t) {
        return f(t) || (!!t && 'staff' === t.role && !!t.access?.see?.ledger);
      }),
      (e.canEditInvoiceHead = function (t, n) {
        if (!t) return !1;
        const o = t.role,
          s = t.access?.do;
        return (
          'owner' === o ||
          'manager' === o ||
          ('sale' === n
            ? 'sell' === o || ('staff' === o && !!(s?.invoice ?? s?.sell))
            : 'receive' === o || ('staff' === o && !!s?.receive))
        );
      }));
    var t = r(_d[0]),
      n = r(_d[1]),
      o = r(_d[2]),
      s = r(_d[3]);
    const l = [
        'name',
        'phone',
        'address',
        'economicId',
        'nationalId',
        'postalCode',
        'registrationNo',
      ],
      d = (t, n) =>
        Object.fromEntries(l.map((o) => [o, void 0 !== t?.[o] ? t[o] : n[o]])),
      c = (n) => (n ? (0, t.localDigits)(n.trim()) : '');
    function u(l, u = {}) {
      const p = (0, o.cleanInvoiceHeader)(u.header),
        f = l.labels,
        y = l.purchase,
        h = u.design,
        I = y ? 'buyer' : 'seller',
        b = y ? f.unknownSeller : f.unknownBuyer,
        v = y ? l.seller : l.buyer,
        w = {
          name: l.brand,
          phone: h?.phone?.trim() || '',
          address: h?.address?.trim() || '',
          economicId: (0, n.latinDigits)(h?.economicId || '').trim(),
          nationalId: (0, n.latinDigits)(h?.nationalId || '').trim(),
          postalCode: (0, n.latinDigits)(h?.postalCode || '').trim(),
          registrationNo: (0, n.latinDigits)(h?.registrationNo || '').trim(),
        },
        $ = {
          name: v && v !== b ? v : u.supplierName?.trim() || '',
          phone: u.contact?.phone?.trim() || '',
          address: u.contact?.address?.trim() || '',
          economicId: (0, n.latinDigits)(u.contact?.economicId || '').trim(),
          nationalId: '',
          postalCode: '',
          registrationNo: '',
        },
        k = {
          seller: d(p.seller, 'seller' === I ? w : $),
          buyer: d(p.buyer, 'buyer' === I ? w : $),
        },
        D = (t, n) => ({
          name: t.name.trim() || (n === I ? l.brand : b),
          phone: c(t.phone),
          address: t.address.trim(),
          ids: [
            t.nationalId &&
              `${(0, s.nationalIdLabel)(f, t.nationalId)}: ${c(t.nationalId)}`,
            t.economicId && `${f.economicId}: ${c(t.economicId)}`,
            t.registrationNo && `${f.registrationNo}: ${c(t.registrationNo)}`,
          ]
            .filter(Boolean)
            .join(' \xb7 '),
          postalCode: c(t.postalCode),
        }),
        N = D(k.seller, 'seller'),
        S = D(k.buyer, 'buyer'),
        C = void 0 !== p.employee ? p.employee : l.recordedBy,
        H = {
          ...((0, o.isSignature)(p.signatures?.seller)
            ? { seller: p.signatures.seller }
            : {}),
          ...((0, o.isSignature)(p.signatures?.buyer)
            ? { buyer: p.signatures.buyer }
            : {}),
        };
      return {
        ...l,
        sellerParty: N,
        buyerParty: S,
        seller: N.name,
        buyer: S.name,
        recordedBy: C.trim(),
        head: {
          partial: l.lines.some((t) => t.price === f.noPrice)
            ? (0, t.L)(
                '\u0628\u0639\u0636\u06cc \u0631\u062f\u06cc\u0641\u200c\u0647\u0627 \u0642\u06cc\u0645\u062a \u0646\u062f\u0627\u0631\u0646\u062f',
              )
            : '',
          fields: { ...k, employee: C },
          shopSide: I,
          signs: H,
          stamps: l.signature ? { [I]: l.signature } : {},
        },
      };
    }
    const p = (t) =>
      t.replace(
        /[&<>"']/g,
        (t) =>
          ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
          })[t],
      );
    function f(t) {
      return (
        !!t &&
        ('owner' === t.role ||
          'manager' === t.role ||
          ('staff' === t.role && !0 === t.access?.full))
      );
    }
  },
  814,
  [311, 440, 474, 803],
);
