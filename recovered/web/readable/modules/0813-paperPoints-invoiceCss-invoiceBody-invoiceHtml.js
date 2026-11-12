// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 813; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, _m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'paperPoints', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      (e.invoiceCss = l),
      (e.invoiceBody = x),
      (e.invoiceHtml = function (
        t,
        {
          paper: o = t.paper,
          fontFace: p = '',
          lang: c = 'fa',
          autoPrint: m = !1,
          title: $,
        } = {},
      ) {
        const v = 'en' !== c;
        return `<!doctype html><html lang="${n(c)}" dir="${v ? 'rtl' : 'ltr'}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${n($ || `${t.title} ${t.number}`)}</title><style>\n${p}\nhtml,body{margin:0;background:#eef1f3}body{padding:16px 8px}.sheet{background:${t.theme.paper};max-width:${s[o].width};margin:0 auto;padding:${'80mm' === o ? '4mm 3mm' : '8mm'};border-radius:8px;box-shadow:0 1px 4px #0002}\n${l(t, o)}\n@page{${s[o].page}}\n@media screen and (max-width:420px){.sheet{padding:5mm 3mm}} /* a phone: more room for the 8-column formal table (2026-11-08) */\n@media print{html,body{background:#fff;padding:0}.sheet{max-width:none;padding:0;border-radius:0;box-shadow:none}*{print-color-adjust:exact;-webkit-print-color-adjust:exact}}\n</style></head><body><main class="sheet"><div class="ainv">${x(t)}</div></main>${m ? '<script>window.addEventListener("load",function(){setTimeout(function(){window.focus();window.print();},300);});<\/script>' : ''}</body></html>`;
      }));
    var t = r(d[0]);
    const n = (t) =>
        String(t ?? '').replace(
          /[&<>"']/g,
          (t) =>
            ({
              '&': '&amp;',
              '<': '&lt;',
              '>': '&gt;',
              '"': '&quot;',
              "'": '&#39;',
            })[t],
        ),
      s = {
        '80mm': { page: 'size:80mm 297mm;margin:3mm 3mm 4mm', width: '74mm' },
        a5: { page: 'size:A5 portrait;margin:9mm 8mm', width: '132mm' },
        a4: { page: 'size:A4 portrait;margin:12mm 11mm', width: '188mm' },
      },
      o = {
        '80mm': { width: 227, height: 842 },
        a5: { width: 420, height: 595 },
        a4: { width: 595, height: 842 },
      };
    function l(t, n = t.paper) {
      const o = t.theme,
        l = '80mm' === n,
        p = l ? 11.5 : 'a5' === n ? 11 : 12;
      return `.ainv{box-sizing:border-box;width:100%;max-width:${s[n].width};margin:0 auto;background:${o.paper};color:${o.ink};font-family:Vazirmatn,Tahoma,Arial,sans-serif;font-size:${p}px;line-height:1.7;font-variant-numeric:tabular-nums;overflow-wrap:anywhere}\n.ainv *{box-sizing:border-box}.ainv h1{font-size:${p + 6}px;margin:0;line-height:1.4}.ainv p{margin:0}\n.ainv .muted{color:${o.muted}}.ainv .b{font-weight:700}.ainv .c{text-align:center}.ainv .ltr{direction:ltr;unicode-bidi:isolate;display:inline-block}\n.ainv .row{display:flex;justify-content:space-between;align-items:flex-start;gap:10px}.ainv .row>*{min-width:0}\n.ainv .brand{display:flex;align-items:center;gap:8px;text-align:left}.ainv .brand img{width:${l ? 44 : 56}px;height:${l ? 44 : 56}px;object-fit:contain}\n.ainv .band{background:${o.headerBg};color:${o.headerInk};border:1px solid ${o.line};border-radius:8px;padding:10px 12px;margin-bottom:10px}.ainv .band .muted{color:inherit;opacity:.85}\n.ainv .rule{border-bottom:2px solid ${o.accent};padding-bottom:8px;margin-bottom:10px}\n.ainv .dash{border:0;border-top:1px dashed ${o.muted};margin:8px 0}\n.ainv .li{display:flex;justify-content:space-between;gap:8px;padding:2px 0}.ainv .li span:last-child{white-space:nowrap}\n.ainv .tag{color:${o.muted};font-size:.9em}.ainv s{color:${o.muted};font-size:.85em}\n.ainv table{width:100%;border-collapse:collapse;margin:8px 0}.ainv th,.ainv td{border:1px solid ${o.line};padding:${l ? 3 : 5}px ${l ? 3 : 6}px;text-align:center;vertical-align:middle}\n.ainv th{background:${o.tableHeadBg};font-weight:700}.ainv td.name{text-align:right;min-width:7em}.ainv td.n{white-space:nowrap}${l ? '.ainv td.n.long{font-size:.78em;letter-spacing:-.02em}.ainv td.name{min-width:5.5em}.ainv .formal table{font-size:.76em}.ainv .formal th,.ainv .formal td{padding:2px 1px}.ainv .formal th{white-space:normal}' : ''}\n.ainv th{overflow-wrap:normal;word-break:keep-all;white-space:nowrap}\n.ainv thead{display:table-header-group}.ainv tr{break-inside:avoid;page-break-inside:avoid}\n.ainv .parties{display:grid;grid-template-columns:1fr 1fr;gap:8px}.ainv .box{border:1px solid ${o.line};border-radius:6px;padding:6px 9px}\n.ainv .totals{break-inside:avoid;page-break-inside:avoid;margin-top:4px}.ainv .totals .li{padding:3px 2px}\n.ainv .pay{background:${o.payableBg};color:${o.payableInk};border-radius:6px;padding:6px 8px!important;font-weight:700;font-size:1.15em;margin-top:4px}\n/* the formal print fills \xab\u0645\u0628\u0644\u063a \u0642\u0627\u0628\u0644 \u067e\u0631\u062f\u0627\u062e\u062a\xbb like the screen (owner 2026-11-08: brand teal, white bold) */.ainv .formal .pay{margin-top:6px}\n.ainv .signs{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px;break-inside:avoid;page-break-inside:avoid}.ainv .signs .box{min-height:${l ? 50 : 70}px}.ainv .signs img{display:block;max-width:100%;max-height:60px;margin:4px auto 0;object-fit:contain}\n.ainv .foot{margin-top:10px;text-align:center;color:${o.muted};white-space:pre-wrap}\n/* \xab\u062e\u0648\u062f\u0645\u0627\u0646\u06cc\xbb (owner 2026-11-09): taller, roomier rows like a till slip */.ainv .casual .li{padding:4px 0}.ainv .casual .dash{margin:12px 0}.ainv .casual>.c{line-height:2}\n@media(max-width:420px){.ainv .parties{grid-template-columns:1fr}.ainv table{font-size:.82em}.ainv th,.ainv td{padding:3px 2px}.ainv td.name{width:30%}.ainv td.code{white-space:normal;word-break:break-all}}`;
    }
    const p = (t) => (t.logo ? `<img alt="" src="${n(t.logo)}">` : ''),
      c = (t, s) => {
        const o = t.totals,
          l = (t, s, o = '') =>
            `<div class="li${o}"><span>${n(t)}</span><span>${n(s)}</span></div>`,
          p = o.tax
            ? o.extras.filter(
                (t) =>
                  !/\u0645\u0627\u0644\u06cc\u0627\u062a|\u0639\u0648\u0627\u0631\u0636|tax|vat/i.test(
                    t.label,
                  ),
              )
            : o.extras;
        return (
          (s || o.discount
            ? l(o.discount ? t.labels.grossTotal : t.labels.total, o.gross)
            : '') +
          (o.discount ? l(t.labels.discount, o.discount) : '') +
          p.map((t) => l(t.label, t.value)).join('') +
          (o.tax ? l(o.tax.label, o.tax.value) : '') +
          l(t.labels.payable, o.payable + ' ' + t.labels.currency, ' pay') +
          (o.paid
            ? l(t.labels.paid, o.paid) + l(t.labels.remaining, o.remaining)
            : '') +
          (t.head?.partial
            ? `<p class="muted" style="margin-top:4px">${n(t.head.partial)}</p>`
            : '')
        );
      };
    function m(t) {
      const s = t.totals;
      return `<div class="casual"><div class="c">${t.logo ? `<div class="brand" style="justify-content:center">${p(t)}</div>` : ''}<div class="b" style="font-size:1.3em">${n(t.brand)}</div><div class="muted">${n(t.date)} \xb7 ${n(t.labels.number)} ${n(t.number)}</div>${t.buyer && t.buyer !== t.labels.unknownBuyer && !t.purchase ? `<div>${n(t.labels.buyer)}: ${n(t.buyer)}</div>` : ''}</div><hr class="dash">\n${t.lines.map((t) => `<div class="li"><span>${n(t.name)} \xd7${n(t.qty)}${t.discount ? ` <span class="tag">(${n(t.discount)})</span>` : ''}</span><span>${n(t.total)}</span></div>`).join('')}<hr class="dash">\n${s.discount ? `<div class="li"><span>${n(t.labels.discount)}</span><span>${n(s.discount)}</span></div>` : ''}${s.extras.map((t) => `<div class="li"><span>${n(t.label)}</span><span>${n(t.value)}</span></div>`).join('')}<div class="li b" style="font-size:1.3em"><span>${n(t.labels.total)}</span><span>${n(s.payable)}</span></div><div class="c muted">${n(t.status)}</div>\n${t.footer ? `<p class="foot">${n(t.footer)}</p>` : ''}</div>`;
    }
    const $ = (...t) =>
      t.some((t) => !!t && [...t].length >= 11) ? 'n long' : 'n';
    function v(t) {
      const s = t.labels;
      return `<div class="normal"><header class="band row"><div><h1>${n(t.title)}</h1><div class="muted">${n(s.number)} ${n(t.number)} \xb7 ${n(t.date)} \xb7 ${n(t.purchase ? s.seller : s.buyer)}: ${n(t.purchase ? t.seller : t.buyer)}</div>${t.recordedBy ? `<div class="muted">${n(s.recordedBy)}: ${n(t.recordedBy)}</div>` : ''}</div><div><div class="brand">${p(t)}<b>${n(t.brand)}</b></div>${t.custom && t.address ? `<div class="muted" style="white-space:pre-wrap">${n(t.address)}</div>` : ''}${t.custom && t.phone ? `<div class="muted ltr">${n(t.phone)}</div>` : ''}</div></header>\n<table><thead><tr><th scope="col">${n(s.colGoods)}</th><th scope="col">${n(s.colQty)}</th><th scope="col">${n(s.colPrice)}</th><th scope="col">${n(s.colAmount)}</th></tr></thead><tbody>\n${t.lines.map((t) => `<tr><td class="name">${n(t.name)}${t.discount ? ` <span class="tag">(${n(t.discount)})</span>` : ''}</td><td class="n">${n(t.qty)}</td><td class="${$(t.price, t.netPrice)}">${t.netPrice ? `<s>${n(t.price)}</s><br>${n(t.netPrice)}` : n(t.price)}</td><td class="${$(t.total)}">${n(t.total)}</td></tr>`).join('')}</tbody></table>\n<div class="totals">${c(t, !1)}<div class="muted" style="margin-top:4px">${n(t.status)}</div></div>\n${t.custom ? `<div class="signs"><div class="box c">${n(t.signHere)}${t.signature ? `<img alt="" src="${n(t.signature)}">` : ''}</div></div>` : t.shopPhone ? `<p class="c" style="margin-top:8px">${n(s.shopPhone)} <span class="ltr">${n(t.shopPhone)}</span></p>` : ''}${t.footer ? `<p class="foot">${n(t.footer)}</p>` : ''}</div>`;
    }
    function u(t, s, o) {
      return `<div class="box"><div class="b">${n(t)}</div><div>${n(s.name)}</div>${s.phone ? `<div>${n(o.phone)} <span class="ltr">${n(s.phone)}</span></div>` : ''}${s.ids ? `<div>${n(s.ids)}</div>` : ''}${s.address ? `<div>${n(o.address)}: ${n(s.address)}</div>` : ''}${s.postalCode ? `<div>${n(o.postalCode)}: <span class="ltr">${n(s.postalCode)}</span></div>` : ''}</div>`;
    }
    function b(s, o, l) {
      const p = s.head
          ? s.head.stamps[o]
          : 'seller' === o
            ? s.signature
            : void 0,
        c = s.head?.signs[o];
      return `<div class="box">${n(l)}${p ? `<img alt="" src="${n(p)}">` : ''}${(0, t.signatureSvg)(c, s.theme.ink)}</div>`;
    }
    function h(t) {
      const s = t.labels,
        o = t.totals,
        l = [
          s.colRow,
          s.colItem,
          ...(t.showCodes ? [s.colCode] : []),
          s.colUnit,
          s.colQty,
          s.colPrice,
          s.colDiscount,
          s.colAmount,
        ],
        m = [
          o.words && `${s.inWords}: ${o.words}`,
          t.status,
          o.balance && `${o.balance.label}: ${o.balance.value}`,
        ]
          .filter(Boolean)
          .join(' \xb7 ');
      return `<div class="formal"><header class="row rule"><div><h1>${n(t.purchase ? s.formalPurchase : s.formalTitle)}</h1><div>${n(s.number)} <b>${n(t.number)}</b> \xb7 ${n(t.date)}</div>${t.recordedBy ? `<div class="muted">${n(s.recordedBy)}: ${n(t.recordedBy)}</div>` : ''}</div><div class="brand">${p(t)}<b>${n(t.brand)}</b></div></header>\n<div class="parties">${u(s.seller, t.sellerParty, s)}${u(s.buyer, t.buyerParty, s)}</div>\n<table><thead><tr>${l.map((t) => `<th scope="col">${n(t)}</th>`).join('')}</tr></thead><tbody>\n${t.lines.map((s) => `<tr><td class="n">${n(s.row)}</td><td class="name">${n(s.name)}${s.reason ? ` <span class="tag">(${n(s.reason)})</span>` : ''}</td>${t.showCodes ? `<td class="n code">${s.code ? `<span class="ltr">${n(s.code)}</span>` : ''}</td>` : ''}<td class="n">${n(s.unit)}</td><td class="n">${n(s.quantity)}</td><td class="${$(s.price)}">${n(s.price)}</td><td class="${$(s.discountCell)}">${n('\u2014' === s.discountCell ? '' : s.discountCell)}</td><td class="${$(s.total)}">${n(s.total)}</td></tr>`).join('')}</tbody></table>\n<div class="totals">${c(t, !0)}${m ? `<p style="margin-top:4px">${n(m)}</p>` : ''}</div>\n<div class="signs">${b(t, 'seller', s.sellerSign)}${b(t, 'buyer', s.buyerSign)}</div>\n${t.custom && t.footer ? `<p class="foot">${n(t.footer)}</p>` : ''}</div>`;
    }
    function x(t) {
      return 'casual' === t.layout ? m(t) : 'formal' === t.layout ? h(t) : v(t);
    }
  },
  813,
  [814],
);
