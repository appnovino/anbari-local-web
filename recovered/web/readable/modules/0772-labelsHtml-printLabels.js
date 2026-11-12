// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 772; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.labelsHtml = r),
      (_e.printLabels = async function (e) {
        if (!e.length) return !0;
        const t = globalThis.document,
          o = t.createElement('iframe');
        return (
          o.setAttribute('aria-hidden', 'true'),
          (o.tabIndex = -1),
          (o.style.cssText =
            'position:fixed;right:-10000px;bottom:0;width:800px;height:600px;border:0;opacity:0;pointer-events:none'),
          await new Promise((n, s) => {
            ((o.onload = async () => {
              try {
                const e = o.contentWindow;
                await Promise.race([
                  e.document.fonts?.ready,
                  new Promise((e) => setTimeout(e, 1500)),
                ]);
                const t = () => setTimeout(() => o.remove(), 1e3);
                (e.addEventListener('afterprint', t, { once: !0 }),
                  setTimeout(t, 12e4),
                  e.focus(),
                  e.print(),
                  n());
              } catch (e) {
                (o.remove(), s(e));
              }
            }),
              (o.srcdoc = r(e)),
              t.body.appendChild(o));
          }),
          !0
        );
      }),
      _r(d[0]),
      _r(d[1]));
    var e = _r(d[2]),
      t = _r(d[3]);
    const o = (e) =>
        e.replace(
          /[&<>"']/g,
          (e) =>
            ({
              '&': '&amp;',
              '<': '&lt;',
              '>': '&gt;',
              '"': '&quot;',
              "'": '&#39;',
            })[e],
        ),
      n = [400, 600, 700]
        .map(
          (e) =>
            `@font-face{font-family:Vazirmatn;font-weight:${e};src:url('/fonts/Vazirmatn-${e}.woff2') format('woff2');font-display:block}`,
        )
        .join('');
    function r(r, { fonts: s = !0 } = {}) {
      const l = r
        .map((n) => {
          const r = [n.brand, n.size, n.color].filter(Boolean).join(' \xb7 '),
            s =
              void 0 === n.price || null === n.price
                ? (0, e.L)('\u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a')
                : (0, t.money)(n.price, { full: !0, hint: !1 });
          return `<div class="l"><div class="n">${o(n.name)}</div>${r ? `<div class="d">${o((0, e.localDigits)(r))}</div>` : ''}<div class="p">${o(s)}</div>${n.barcode ? `<div class="b">${o(n.barcode)}</div>` : ''}</div>`;
        })
        .join('');
      return `<!doctype html><html lang="fa" dir="rtl"><head><meta charset="utf-8"><title>${o((0, e.L)('\u0628\u0631\u0686\u0633\u0628 \u06a9\u0627\u0644\u0627\u0647\u0627'))}</title><style>${s ? n : ''}\n@page{size:A4 portrait;margin:10mm}*{box-sizing:border-box;print-color-adjust:exact;-webkit-print-color-adjust:exact}\nbody{margin:0;font-family:Vazirmatn,Tahoma,sans-serif;color:#111}\n.g{display:grid;grid-template-columns:repeat(3,1fr);gap:4mm}\n.l{height:34mm;border:0.3mm solid #9aa3ae;border-radius:3mm;padding:2.5mm 3mm;display:flex;flex-direction:column;justify-content:space-between;break-inside:avoid;overflow:hidden}\n.n{font-weight:700;font-size:11pt;line-height:1.4;max-height:2.8em;overflow:hidden}.d{font-size:8pt;color:#555}\n.p{font-weight:700;font-size:15pt;color:#0f766e;text-align:left}.b{font-size:8pt;color:#555;text-align:left;direction:ltr;letter-spacing:.06em;font-family:monospace}\n</style></head><body><div class="g">${l}</div></body></html>`;
    }
  },
  772,
  [94, 313, 311, 435],
);
