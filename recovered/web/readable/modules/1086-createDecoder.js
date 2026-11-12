// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1086; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.createDecoder = function (e) {
        if (e.get(1)) return new n.default(e);
        if (!e.get(2)) return new c.default(e);
        switch (u.default.extractNumericValueFromBitArray(e, 1, 4)) {
          case 4:
            return new f.default(e);
          case 5:
            return new l.default(e);
        }
        switch (u.default.extractNumericValueFromBitArray(e, 1, 5)) {
          case 12:
            return new w.default(e);
          case 13:
            return new s.default(e);
        }
        switch (u.default.extractNumericValueFromBitArray(e, 1, 7)) {
          case 56:
            return new o.default(e, '310', '11');
          case 57:
            return new o.default(e, '320', '11');
          case 58:
            return new o.default(e, '310', '13');
          case 59:
            return new o.default(e, '320', '13');
          case 60:
            return new o.default(e, '310', '15');
          case 61:
            return new o.default(e, '320', '15');
          case 62:
            return new o.default(e, '310', '17');
          case 63:
            return new o.default(e, '320', '17');
        }
        throw new t.default('unknown decoder: ' + e);
      }));
    var t = e(r(d[0])),
      u = e(r(d[1])),
      n = e(r(d[2])),
      c = e(r(d[3])),
      f = e(r(d[4])),
      l = e(r(d[5])),
      w = e(r(d[6])),
      s = e(r(d[7])),
      o = e(r(d[8]));
  },
  1086,
  [1050, 1087, 1095, 1098, 1099, 1102, 1103, 1104, 1105],
);
