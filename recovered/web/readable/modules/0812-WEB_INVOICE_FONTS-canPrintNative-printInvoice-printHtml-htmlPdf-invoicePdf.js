// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 812; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'WEB_INVOICE_FONTS', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      Object.defineProperty(e, 'canPrintNative', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      (e.printInvoice = async function (o, l, p = 'fa') {
        if (r()) return (c(o, l), !0);
        return (
          await s((0, t.invoiceHtml)(o, { paper: l, fontFace: n, lang: p })),
          !0
        );
      }),
      (e.printHtml = async function (t) {
        if (r()) {
          const n = window.open('', '_blank');
          return (
            !!n &&
            (n.document.write(
              t.replace(
                '</body>',
                '<script>window.onload=()=>setTimeout(()=>window.print(),300)<\/script></body>',
              ),
            ),
            n.document.close(),
            !0)
          );
        }
        return (await s(t), !0);
      }),
      (e.htmlPdf = async function (t) {
        return null;
      }),
      (e.invoicePdf = async function (t, n, o = 'fa') {
        return null;
      }),
      _r(d[0]),
      _r(d[1]));
    var t = _r(d[2]);
    const n = [400, 600, 700]
        .map(
          (t) =>
            `@font-face{font-family:Vazirmatn;font-weight:${t};src:url('/fonts/Vazirmatn-${t}.woff2') format('woff2');font-display:block}`,
        )
        .join(''),
      o = !1,
      r = () =>
        'undefined' != typeof navigator &&
        (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
          ('MacIntel' === navigator.platform && navigator.maxTouchPoints > 1));
    function c(o, r) {
      const c = globalThis.document,
        s = 'anbari-invoice-print';
      (c.getElementById(s)?.remove(),
        c.getElementById('anbari-invoice-print-style')?.remove());
      const l = c.createElement('style');
      ((l.id = 'anbari-invoice-print-style'),
        (l.textContent = `${n}#${s}{display:none}@media print{html,body{height:auto!important;overflow:visible!important;background:#fff!important}body>*:not(#${s}){display:none!important}#${s}{display:block!important}*{print-color-adjust:exact;-webkit-print-color-adjust:exact}}@page{${'80mm' === r ? 'size:80mm 297mm;margin:3mm' : 'a5' === r ? 'size:A5 portrait;margin:9mm 8mm' : 'size:A4 portrait;margin:12mm 11mm'}}${(0, t.invoiceCss)(o, r)}`));
      const p = c.createElement('div');
      ((p.id = s),
        (p.innerHTML = `<div class="ainv" dir="rtl">${(0, t.invoiceBody)(o)}</div>`),
        c.head.appendChild(l),
        c.body.appendChild(p));
      const u = () => {
        (p.remove(), l.remove());
      };
      (window.addEventListener('afterprint', u, { once: !0 }),
        setTimeout(u, 12e4),
        window.print());
    }
    function s(t) {
      return new Promise((n, o) => {
        const r = globalThis.document.createElement('iframe');
        (r.setAttribute('aria-hidden', 'true'),
          (r.tabIndex = -1),
          (r.style.cssText =
            'position:fixed;right:-10000px;bottom:0;width:800px;height:600px;border:0;opacity:0;pointer-events:none'));
        let c = !1;
        const s = () => setTimeout(() => r.remove(), 1e3);
        ((r.onload = async () => {
          if (!c) {
            c = !0;
            try {
              const t = r.contentWindow;
              (await Promise.race([
                t.document.fonts?.ready,
                new Promise((t) => setTimeout(t, 1500)),
              ]),
                t.addEventListener('afterprint', s, { once: !0 }),
                setTimeout(s, 12e4),
                t.focus(),
                t.print(),
                n());
            } catch (t) {
              (r.remove(), o(t));
            }
          }
        }),
          (r.srcdoc = t),
          globalThis.document.body.appendChild(r));
      });
    }
  },
  812,
  [94, 313, 813],
);
