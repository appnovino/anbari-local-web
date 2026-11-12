// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 524; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.stockNotification = function (o) {
        const a = o[0];
        return {
          title:
            1 === o.length
              ? a.name
              : o.length.toLocaleString((0, n.numberLocale)()) +
                ' ' +
                t.fa.newStockAlerts,
          body: o
            .slice(0, 3)
            .map(
              (o) =>
                o.name +
                ': ' +
                o.stock.toLocaleString((0, n.numberLocale)()) +
                ' ' +
                t.fa.units +
                '\u060c ' +
                t.fa.alarmKinds[o.kind],
            )
            .join('\n'),
          eventId: a.id.slice(0, 145),
        };
      }));
    var t = r(d[0]),
      n = r(d[1]);
  },
  524,
  [492, 311],
);
