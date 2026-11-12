// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 994; original bundle: spreadsheet-d6de51a3fee212c7ad69ef045df3d39a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, _m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'TOMAN_PRICE_TITLES', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      (_e.importQuantity = k),
      (_e.exportWorkbook = function (t, { unitTitles: n = !1 } = {}) {
        const o = e.utils.book_new(),
          s = e.utils.aoa_to_sheet([
            [
              ...l(n).map((e) => (0, i.L)(e)),
              ...c,
              'contentSize',
              'contentUnit',
              ...p,
            ],
            ...t.products.map((e) => [
              e.name,
              e.stock,
              e.barcode || '',
              e.detail,
              e.category || '',
              e.brand || '',
              e.size || '',
              e.color || '',
              e.price ?? '',
              e.costPrice ?? '',
              e.unit && 'piece' !== e.unit ? e.unit : '',
              e.packSize ?? '',
              e.packUnit ?? '',
              'made' === e.kind ? e.kind : '',
              e.contentSize ?? '',
              e.contentUnit ?? '',
              ...[0, 1, 2, 3].flatMap((t) =>
                e.salePrices?.[t]
                  ? [e.salePrices[t].name, e.salePrices[t].price]
                  : ['', ''],
              ),
            ]),
          ]);
        return (
          (s['!cols'] = [{ wch: 30 }, { wch: 12 }, { wch: 25 }, { wch: 32 }]),
          e.utils.book_append_sheet(
            o,
            s,
            w('\u0645\u0648\u062c\u0648\u062f\u06cc'),
          ),
          e.utils.book_append_sheet(
            o,
            e.utils.aoa_to_sheet([
              [
                '\u0632\u0645\u0627\u0646',
                '\u0646\u0627\u0645 \u06a9\u0627\u0644\u0627',
                '\u0646\u0648\u0639',
                '\u062a\u0639\u062f\u0627\u062f',
                '\u0631\u0648\u0634',
                '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634 \u062b\u0628\u062a\u200c\u0634\u062f\u0647',
                '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f \u062b\u0628\u062a\u200c\u0634\u062f\u0647',
              ].map((e) => (0, i.L)(e)),
              ...t.movements.map((e) => [
                e.timestamp || '',
                e.name,
                'received' === e.kind
                  ? (0, i.L)('\u0648\u0631\u0648\u062f\u06cc')
                  : 'used' === e.kind
                    ? (0, i.L)('\u0645\u0635\u0631\u0641 \u0634\u062f')
                    : 'waste' === e.kind
                      ? (0, i.L)('\u062f\u0648\u0631\u0631\u06cc\u0632')
                      : 'count' === e.kind
                        ? (0, i.L)('\u0634\u0645\u0627\u0631\u0634')
                        : (0, i.L)('\u0641\u0631\u0648\u0634'),
                'count' === e.kind ? (e.stockEffect ?? e.quantity) : e.quantity,
                e.source || (0, i.L)('\u0646\u0645\u0648\u0646\u0647'),
                e.unitPrice ?? '',
                e.unitCost ?? '',
              ]),
            ]),
            w('\u062a\u063a\u06cc\u06cc\u0631\u0627\u062a'),
          ),
          (o.Workbook = { Views: [{ RTL: (0, i.isRtlLang)() }] }),
          new Uint8Array(e.write(o, { type: 'array', bookType: 'xlsx' }))
        );
      }),
      (_e.tableWorkbook = function (t, n, o) {
        const c = e.utils.book_new(),
          s = e.utils.aoa_to_sheet([n, ...o]);
        return (
          (s['!cols'] = n.map((e) => ({ wch: Math.max(12, e.length + 4) }))),
          e.utils.book_append_sheet(c, s, w(t)),
          (c.Workbook = { Views: [{ RTL: (0, i.isRtlLang)() }] }),
          new Uint8Array(e.write(c, { type: 'array', bookType: 'xlsx' }))
        );
      }),
      (_e.importWorkbook = function (n) {
        if (n.length > 5242880) throw new Error('import_limit');
        const s = e.read(n, {
            type: 'array',
            sheetRows: 5002,
            cellFormula: !0,
          }),
          l =
            s.Sheets['\u0645\u0648\u062c\u0648\u062f\u06cc'] ||
            s.Sheets[w('\u0645\u0648\u062c\u0648\u062f\u06cc')] ||
            s.Sheets[s.SheetNames[0]];
        if (!l) throw new Error('import_invalid');
        const d = l['!fullref'] || l['!ref'];
        if (d && e.utils.decode_range(d).e.r > 5e3)
          throw new Error('import_limit');
        if (Object.entries(l).some(([e, t]) => !e.startsWith('!') && t.f))
          throw new Error('import_formula');
        const _ = e.utils.sheet_to_json(l, {
          header: 1,
          raw: !1,
          defval: '',
          blankrows: !1,
        });
        if (_.length < 2 || _.length > 5001) throw new Error('import_limit');
        const b = (e) => _[e].map((e) => String(e).trim()),
          S = (e) => {
            const t = c.every((t, i) => e[o.length + i] === t),
              n = e.map(m);
            return (c) => {
              for (const t of [o[c], (0, i.L)(o[c])]) {
                const i = e.indexOf(t);
                if (i >= 0) return i;
              }
              if (t) return c;
              for (const e of [o[c], ...f[c]]) {
                const t = n.indexOf(m(e));
                if (t >= 0) return t;
              }
              return -1;
            };
          };
        let y = 0;
        for (let e = 0; e < Math.min(10, _.length - 1); e++) {
          const t = S(b(e));
          if (t(0) >= 0 && t(1) >= 0) {
            y = e;
            break;
          }
        }
        const P = b(y),
          v = S(P),
          L = v(0),
          O = v(1),
          x = v(2),
          z = v(3);
        if (L < 0 || O < 0) throw new Error('import_invalid');
        const E =
            /^(?:\u062c\u0645\u0639|\u0645\u062c\u0645\u0648\u0639)(?:\u06a9\u0644)?$|^(?:total|sum|grandtotal)$/i,
          T = (e, t) => String(e[t] ?? '').trim(),
          U = (e) =>
            E.test(
              String(e)
                .replace(/[\s\u200c]+/g, '')
                .replace(/[:\uff1a]+$/, ''),
            ),
          $ = _.slice(y + 1)
            .filter(
              (e) =>
                !(
                  e.slice(0, L + 1).some(U) ||
                  ('' === T(e, L) && '' === T(e, O))
                ),
            )
            .map((e) => {
              const t = String(e[O]).trim(),
                i =
                  k(t.replace(/^[-\u2212]/, '')) *
                  (/^[-\u2212]/.test(t) ? -1 : 1),
                n = {};
              for (const [t, i] of [
                'category',
                'brand',
                'size',
                'color',
              ].entries()) {
                const o = v(4 + t);
                o >= 0 && e[o] && (n[i] = String(e[o]));
              }
              for (const [t, i] of ['price', 'costPrice'].entries()) {
                const o = v(8 + t);
                o >= 0 && void 0 !== e[o] && '' !== e[o] && (n[i] = u(e[o]));
              }
              const o = [0, 1, 2, 3].flatMap((t) => {
                const i = P.indexOf(p[2 * t]),
                  n = P.indexOf(p[2 * t + 1]);
                return n >= 0 && void 0 !== e[n] && '' !== String(e[n]).trim()
                  ? [
                      {
                        name: i >= 0 ? String(e[i] ?? '').trim() : '',
                        price: u(e[n]),
                      },
                    ]
                  : [];
              });
              o.length &&
                ((n.salePrices = o),
                P.includes(p[4]) && (n.salePricesAll = !0));
              for (const t of ['unit', 'packUnit', 'contentUnit', 'kind']) {
                const i = P.indexOf(t);
                i >= 0 && e[i] && (n[t] = String(e[i]));
              }
              const c = P.indexOf('contentSize');
              c >= 0 &&
                void 0 !== e[c] &&
                '' !== e[c] &&
                (n.contentSize = h(String(e[c])));
              const s = P.indexOf('packSize');
              return (
                s >= 0 &&
                  void 0 !== e[s] &&
                  '' !== e[s] &&
                  (n.packSize = h(String(e[s]))),
                {
                  ...n,
                  name: String(e[L] || ''),
                  stock: i,
                  barcode: x >= 0 ? String(e[x] || '') : '',
                  detail: z >= 0 ? String(e[z] || '') : '',
                }
              );
            });
        return (0, t.validateImportRows)($);
      }));
    var e = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        return (
          e &&
            Object.keys(e).forEach(function (i) {
              var n = Object.getOwnPropertyDescriptor(e, i);
              Object.defineProperty(
                t,
                i,
                n.get
                  ? n
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[i];
                      },
                    },
              );
            }),
          (t.default = e),
          t
        );
      })(r(_d[0])),
      t = r(_d[1]),
      i = r(_d[2]),
      n = r(_d[3]);
    const o = [
        '\u0646\u0627\u0645 \u06a9\u0627\u0644\u0627',
        '\u0645\u0648\u062c\u0648\u062f\u06cc',
        '\u0628\u0627\u0631\u06a9\u062f',
        '\u062a\u0648\u0636\u06cc\u062d\u0627\u062a',
        '\u062f\u0633\u062a\u0647\u200c\u0628\u0646\u062f\u06cc',
        '\u0628\u0631\u0646\u062f',
        '\u0633\u0627\u06cc\u0632',
        '\u0631\u0646\u06af',
        '\u0642\u06cc\u0645\u062a',
        '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f',
      ],
      c = ['unit', 'packSize', 'packUnit', 'kind'],
      s = [
        '\u0642\u06cc\u0645\u062a (\u062a\u0648\u0645\u0627\u0646)',
        '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f (\u062a\u0648\u0645\u0627\u0646)',
      ],
      l = (e) =>
        e ? o.map((e, t) => (8 === t ? s[0] : 9 === t ? s[1] : e)) : o,
      p = [
        'salePrice1Name',
        'salePrice1',
        'salePrice2Name',
        'salePrice2',
        'salePrice3Name',
        'salePrice3',
        'salePrice4Name',
        'salePrice4',
      ],
      u = (e) =>
        Number(
          (0, n.latinDigits)(String(e)).replace(
            /[,\u066c\s]|\u062a\u0648\u0645\u0627\u0646|\u0631\u06cc\u0627\u0644/g,
            '',
          ),
        ),
      d = [
        '\u0642\u06cc\u0645\u062a (\u062a\u0648\u0645\u0627\u0646)',
        '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f (\u062a\u0648\u0645\u0627\u0646)',
      ],
      f = [
        [
          '\u0646\u0627\u0645',
          '\u0627\u0633\u0645',
          '\u06a9\u0627\u0644\u0627',
          '\u0646\u0627\u0645 \u0645\u062d\u0635\u0648\u0644',
          '\u0645\u062d\u0635\u0648\u0644',
          '\u0627\u0633\u0645 \u06a9\u0627\u0644\u0627',
          'name',
          'product',
        ],
        [
          '\u062a\u0639\u062f\u0627\u062f',
          '\u0645\u0648\u062c\u0648\u062f\u06cc \u0641\u0639\u0644\u06cc',
          'stock',
          'quantity',
          'qty',
        ],
        ['\u06a9\u062f', '\u06a9\u062f \u06a9\u0627\u0644\u0627', 'barcode'],
        ['\u062a\u0648\u0636\u06cc\u062d', 'description'],
        [
          '\u062f\u0633\u062a\u0647',
          '\u062f\u0633\u062a\u0647 \u0628\u0646\u062f\u06cc',
          '\u06af\u0631\u0648\u0647',
          '\u06af\u0631\u0648\u0647 \u06a9\u0627\u0644\u0627',
          'category',
        ],
        ['\u0645\u0627\u0631\u06a9', 'brand'],
        ['\u0627\u0646\u062f\u0627\u0632\u0647', 'size'],
        ['color', 'colour'],
        [
          '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634',
          '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634 \u0648\u0627\u062d\u062f',
          'price',
          'sell price',
          d[0],
        ],
        [
          '\u0642\u06cc\u0645\u062a \u062a\u0645\u0627\u0645 \u0634\u062f\u0647',
          '\u0628\u0647\u0627\u06cc \u062e\u0631\u06cc\u062f',
          'cost',
          'buy price',
          d[1],
        ],
      ],
      m = (e) =>
        (0, n.latinDigits)(String(e))
          .replace(/[\u200c\s_-]+/g, '')
          .replace(/\u064a/g, '\u06cc')
          .replace(/\u0643/g, '\u06a9')
          .toLowerCase();
    function k(e) {
      let i = (0, n.latinDigits)(String(e))
        .trim()
        .replace(/\u066b/g, '.');
      return (
        /^\d{1,3}(?:[,\u066c ]\d{3})+(?:\.\d+)?$/.test(i) &&
          (i = i.replace(/[,\u066c ]/g, '')),
        /^\d+\.\d+$/.test(i) && (i = i.replace(/0+$/, '').replace(/\.$/, '')),
        /^0+$/.test(i) ? 0 : (0, t.parseQuantity)(i)
      );
    }
    const h = (e) => {
        const t = k(e);
        if (!t) throw Error('invalid');
        return t;
      },
      w = (e) =>
        (0, i.L)(e)
          .replace(/[:\\/?*[\]]/g, ' ')
          .slice(0, 31) || e;
  },
  994,
  [1000, 439, 311, 440],
);
