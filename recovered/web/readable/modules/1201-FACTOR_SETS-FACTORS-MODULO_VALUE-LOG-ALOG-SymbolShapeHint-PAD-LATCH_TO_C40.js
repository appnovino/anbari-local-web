// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1201; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, e, d) {
    'use strict';
    var n;
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'FACTOR_SETS', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      Object.defineProperty(e, 'FACTORS', {
        enumerable: !0,
        get: function () {
          return O;
        },
      }),
      Object.defineProperty(e, 'MODULO_VALUE', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      Object.defineProperty(e, 'LOG', {
        enumerable: !0,
        get: function () {
          return i;
        },
      }),
      Object.defineProperty(e, 'ALOG', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      Object.defineProperty(e, 'SymbolShapeHint', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      Object.defineProperty(e, 'PAD', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }),
      Object.defineProperty(e, 'LATCH_TO_C40', {
        enumerable: !0,
        get: function () {
          return b;
        },
      }),
      Object.defineProperty(e, 'LATCH_TO_BASE256', {
        enumerable: !0,
        get: function () {
          return A;
        },
      }),
      Object.defineProperty(e, 'UPPER_SHIFT', {
        enumerable: !0,
        get: function () {
          return _;
        },
      }),
      Object.defineProperty(e, 'MACRO_05', {
        enumerable: !0,
        get: function () {
          return C;
        },
      }),
      Object.defineProperty(e, 'MACRO_06', {
        enumerable: !0,
        get: function () {
          return E;
        },
      }),
      Object.defineProperty(e, 'LATCH_TO_ANSIX12', {
        enumerable: !0,
        get: function () {
          return T;
        },
      }),
      Object.defineProperty(e, 'LATCH_TO_TEXT', {
        enumerable: !0,
        get: function () {
          return P;
        },
      }),
      Object.defineProperty(e, 'LATCH_TO_EDIFACT', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      Object.defineProperty(e, 'C40_UNLATCH', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }),
      Object.defineProperty(e, 'X12_UNLATCH', {
        enumerable: !0,
        get: function () {
          return y;
        },
      }),
      Object.defineProperty(e, 'MACRO_05_HEADER', {
        enumerable: !0,
        get: function () {
          return j;
        },
      }),
      Object.defineProperty(e, 'MACRO_06_HEADER', {
        enumerable: !0,
        get: function () {
          return R;
        },
      }),
      Object.defineProperty(e, 'MACRO_TRAILER', {
        enumerable: !0,
        get: function () {
          return N;
        },
      }),
      Object.defineProperty(e, 'ASCII_ENCODATION', {
        enumerable: !0,
        get: function () {
          return L;
        },
      }),
      Object.defineProperty(e, 'C40_ENCODATION', {
        enumerable: !0,
        get: function () {
          return I;
        },
      }),
      Object.defineProperty(e, 'TEXT_ENCODATION', {
        enumerable: !0,
        get: function () {
          return D;
        },
      }),
      Object.defineProperty(e, 'X12_ENCODATION', {
        enumerable: !0,
        get: function () {
          return S;
        },
      }),
      Object.defineProperty(e, 'EDIFACT_ENCODATION', {
        enumerable: !0,
        get: function () {
          return F;
        },
      }),
      Object.defineProperty(e, 'BASE256_ENCODATION', {
        enumerable: !0,
        get: function () {
          return H;
        },
      }));
    var t,
      u = [5, 7, 10, 11, 12, 14, 18, 20, 24, 28, 36, 42, 48, 56, 62, 68],
      O = [
        [228, 48, 15, 111, 62],
        [23, 68, 144, 134, 240, 92, 254],
        [28, 24, 185, 166, 223, 248, 116, 255, 110, 61],
        [175, 138, 205, 12, 194, 168, 39, 245, 60, 97, 120],
        [41, 153, 158, 91, 61, 42, 142, 213, 97, 178, 100, 242],
        [156, 97, 192, 252, 95, 9, 157, 119, 138, 45, 18, 186, 83, 185],
        [
          83, 195, 100, 39, 188, 75, 66, 61, 241, 213, 109, 129, 94, 254, 225,
          48, 90, 188,
        ],
        [
          15, 195, 244, 9, 233, 71, 168, 2, 188, 160, 153, 145, 253, 79, 108,
          82, 27, 174, 186, 172,
        ],
        [
          52, 190, 88, 205, 109, 39, 176, 21, 155, 197, 251, 223, 155, 21, 5,
          172, 254, 124, 12, 181, 184, 96, 50, 193,
        ],
        [
          211, 231, 43, 97, 71, 96, 103, 174, 37, 151, 170, 53, 75, 34, 249,
          121, 17, 138, 110, 213, 141, 136, 120, 151, 233, 168, 93, 255,
        ],
        [
          245, 127, 242, 218, 130, 250, 162, 181, 102, 120, 84, 179, 220, 251,
          80, 182, 229, 18, 2, 4, 68, 33, 101, 137, 95, 119, 115, 44, 175, 184,
          59, 25, 225, 98, 81, 112,
        ],
        [
          77, 193, 137, 31, 19, 38, 22, 153, 247, 105, 122, 2, 245, 133, 242, 8,
          175, 95, 100, 9, 167, 105, 214, 111, 57, 121, 21, 1, 253, 57, 54, 101,
          248, 202, 69, 50, 150, 177, 226, 5, 9, 5,
        ],
        [
          245, 132, 172, 223, 96, 32, 117, 22, 238, 133, 238, 231, 205, 188,
          237, 87, 191, 106, 16, 147, 118, 23, 37, 90, 170, 205, 131, 88, 120,
          100, 66, 138, 186, 240, 82, 44, 176, 87, 187, 147, 160, 175, 69, 213,
          92, 253, 225, 19,
        ],
        [
          175, 9, 223, 238, 12, 17, 220, 208, 100, 29, 175, 170, 230, 192, 215,
          235, 150, 159, 36, 223, 38, 200, 132, 54, 228, 146, 218, 234, 117,
          203, 29, 232, 144, 238, 22, 150, 201, 117, 62, 207, 164, 13, 137, 245,
          127, 67, 247, 28, 155, 43, 203, 107, 233, 53, 143, 46,
        ],
        [
          242, 93, 169, 50, 144, 210, 39, 118, 202, 188, 201, 189, 143, 108,
          196, 37, 185, 112, 134, 230, 245, 63, 197, 190, 250, 106, 185, 221,
          175, 64, 114, 71, 161, 44, 147, 6, 27, 218, 51, 63, 87, 10, 40, 130,
          188, 17, 163, 31, 176, 170, 4, 107, 232, 7, 94, 166, 224, 124, 86, 47,
          11, 204,
        ],
        [
          220, 228, 173, 89, 251, 149, 159, 56, 89, 33, 147, 244, 154, 36, 73,
          127, 213, 136, 248, 180, 234, 197, 158, 177, 68, 122, 93, 213, 15,
          160, 227, 236, 66, 139, 153, 185, 202, 167, 179, 25, 220, 232, 96,
          210, 231, 136, 223, 239, 181, 241, 59, 52, 172, 25, 49, 232, 211, 189,
          64, 54, 108, 153, 132, 63, 96, 103, 82, 186,
        ],
      ],
      o = 301,
      i =
        ((n = (function (n, t) {
          for (var u = 1, O = 0; O < 255; O++)
            ((t[O] = u), (n[u] = O), (u *= 2) >= 256 && (u ^= o));
          return { LOG: n, ALOG: t };
        })([], [])),
        n.LOG),
      c = n.ALOG;
    !(function (n) {
      ((n[(n.FORCE_NONE = 0)] = 'FORCE_NONE'),
        (n[(n.FORCE_SQUARE = 1)] = 'FORCE_SQUARE'),
        (n[(n.FORCE_RECTANGLE = 2)] = 'FORCE_RECTANGLE'));
    })(t || (t = {}));
    var f = 129,
      b = 230,
      A = 231,
      _ = 235,
      C = 236,
      E = 237,
      T = 238,
      P = 239,
      l = 240,
      p = 254,
      y = 254,
      j = '[)>\x1e05\x1d',
      R = '[)>\x1e06\x1d',
      N = '\x1e\x04',
      L = 0,
      I = 1,
      D = 2,
      S = 3,
      F = 4,
      H = 5;
  },
  1201,
  [],
);
