// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1028; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i2, a, _m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return _;
        },
      }),
      Object.defineProperty(_e, 'CharacterSetValueIdentifiers', {
        enumerable: !0,
        get: function () {
          return I;
        },
      }));
    var e,
      I,
      S = r(d[0]),
      n = (e = S) && e.__esModule ? e : { default: e },
      t =
        (this && this.__values) ||
        function (e) {
          var I = 'function' == typeof Symbol && Symbol.iterator,
            S = I && e[I],
            n = 0;
          if (S) return S.call(e);
          if (e && 'number' == typeof e.length)
            return {
              next: function () {
                return (
                  e && n >= e.length && (e = void 0),
                  { value: e && e[n++], done: !e }
                );
              },
            };
          throw new TypeError(
            I ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        };
    !(function (e) {
      ((e[(e.Cp437 = 0)] = 'Cp437'),
        (e[(e.ISO8859_1 = 1)] = 'ISO8859_1'),
        (e[(e.ISO8859_2 = 2)] = 'ISO8859_2'),
        (e[(e.ISO8859_3 = 3)] = 'ISO8859_3'),
        (e[(e.ISO8859_4 = 4)] = 'ISO8859_4'),
        (e[(e.ISO8859_5 = 5)] = 'ISO8859_5'),
        (e[(e.ISO8859_6 = 6)] = 'ISO8859_6'),
        (e[(e.ISO8859_7 = 7)] = 'ISO8859_7'),
        (e[(e.ISO8859_8 = 8)] = 'ISO8859_8'),
        (e[(e.ISO8859_9 = 9)] = 'ISO8859_9'),
        (e[(e.ISO8859_10 = 10)] = 'ISO8859_10'),
        (e[(e.ISO8859_11 = 11)] = 'ISO8859_11'),
        (e[(e.ISO8859_13 = 12)] = 'ISO8859_13'),
        (e[(e.ISO8859_14 = 13)] = 'ISO8859_14'),
        (e[(e.ISO8859_15 = 14)] = 'ISO8859_15'),
        (e[(e.ISO8859_16 = 15)] = 'ISO8859_16'),
        (e[(e.SJIS = 16)] = 'SJIS'),
        (e[(e.Cp1250 = 17)] = 'Cp1250'),
        (e[(e.Cp1251 = 18)] = 'Cp1251'),
        (e[(e.Cp1252 = 19)] = 'Cp1252'),
        (e[(e.Cp1256 = 20)] = 'Cp1256'),
        (e[(e.UnicodeBigUnmarked = 21)] = 'UnicodeBigUnmarked'),
        (e[(e.UTF8 = 22)] = 'UTF8'),
        (e[(e.ASCII = 23)] = 'ASCII'),
        (e[(e.Big5 = 24)] = 'Big5'),
        (e[(e.GB18030 = 25)] = 'GB18030'),
        (e[(e.EUC_KR = 26)] = 'EUC_KR'));
    })(I || (I = {}));
    var O = (function () {
        function e(I, S, n) {
          for (var O, _, i = [], o = 3; o < arguments.length; o++)
            i[o - 3] = arguments[o];
          ((this.valueIdentifier = I),
            (this.name = n),
            (this.values = 'number' == typeof S ? Int32Array.from([S]) : S),
            (this.otherEncodingNames = i),
            e.VALUE_IDENTIFIER_TO_ECI.set(I, this),
            e.NAME_TO_ECI.set(n, this));
          for (var u = this.values, C = 0, f = u.length; C !== f; C++) {
            var w = u[C];
            e.VALUES_TO_ECI.set(w, this);
          }
          try {
            for (var p = t(i), l = p.next(); !l.done; l = p.next()) {
              var c = l.value;
              e.NAME_TO_ECI.set(c, this);
            }
          } catch (e) {
            O = { error: e };
          } finally {
            try {
              l && !l.done && (_ = p.return) && _.call(p);
            } finally {
              if (O) throw O.error;
            }
          }
        }
        return (
          (e.prototype.getValueIdentifier = function () {
            return this.valueIdentifier;
          }),
          (e.prototype.getName = function () {
            return this.name;
          }),
          (e.prototype.getValue = function () {
            return this.values[0];
          }),
          (e.getCharacterSetECIByValue = function (I) {
            if (I < 0 || I >= 900) throw new n.default('incorect value');
            var S = e.VALUES_TO_ECI.get(I);
            if (void 0 === S) throw new n.default('incorect value');
            return S;
          }),
          (e.getCharacterSetECIByName = function (I) {
            var S = e.NAME_TO_ECI.get(I);
            if (void 0 === S) throw new n.default('incorect value');
            return S;
          }),
          (e.prototype.equals = function (I) {
            if (!(I instanceof e)) return !1;
            var S = I;
            return this.getName() === S.getName();
          }),
          (e.VALUE_IDENTIFIER_TO_ECI = new Map()),
          (e.VALUES_TO_ECI = new Map()),
          (e.NAME_TO_ECI = new Map()),
          (e.Cp437 = new e(I.Cp437, Int32Array.from([0, 2]), 'Cp437')),
          (e.ISO8859_1 = new e(
            I.ISO8859_1,
            Int32Array.from([1, 3]),
            'ISO-8859-1',
            'ISO88591',
            'ISO8859_1',
          )),
          (e.ISO8859_2 = new e(
            I.ISO8859_2,
            4,
            'ISO-8859-2',
            'ISO88592',
            'ISO8859_2',
          )),
          (e.ISO8859_3 = new e(
            I.ISO8859_3,
            5,
            'ISO-8859-3',
            'ISO88593',
            'ISO8859_3',
          )),
          (e.ISO8859_4 = new e(
            I.ISO8859_4,
            6,
            'ISO-8859-4',
            'ISO88594',
            'ISO8859_4',
          )),
          (e.ISO8859_5 = new e(
            I.ISO8859_5,
            7,
            'ISO-8859-5',
            'ISO88595',
            'ISO8859_5',
          )),
          (e.ISO8859_6 = new e(
            I.ISO8859_6,
            8,
            'ISO-8859-6',
            'ISO88596',
            'ISO8859_6',
          )),
          (e.ISO8859_7 = new e(
            I.ISO8859_7,
            9,
            'ISO-8859-7',
            'ISO88597',
            'ISO8859_7',
          )),
          (e.ISO8859_8 = new e(
            I.ISO8859_8,
            10,
            'ISO-8859-8',
            'ISO88598',
            'ISO8859_8',
          )),
          (e.ISO8859_9 = new e(
            I.ISO8859_9,
            11,
            'ISO-8859-9',
            'ISO88599',
            'ISO8859_9',
          )),
          (e.ISO8859_10 = new e(
            I.ISO8859_10,
            12,
            'ISO-8859-10',
            'ISO885910',
            'ISO8859_10',
          )),
          (e.ISO8859_11 = new e(
            I.ISO8859_11,
            13,
            'ISO-8859-11',
            'ISO885911',
            'ISO8859_11',
          )),
          (e.ISO8859_13 = new e(
            I.ISO8859_13,
            15,
            'ISO-8859-13',
            'ISO885913',
            'ISO8859_13',
          )),
          (e.ISO8859_14 = new e(
            I.ISO8859_14,
            16,
            'ISO-8859-14',
            'ISO885914',
            'ISO8859_14',
          )),
          (e.ISO8859_15 = new e(
            I.ISO8859_15,
            17,
            'ISO-8859-15',
            'ISO885915',
            'ISO8859_15',
          )),
          (e.ISO8859_16 = new e(
            I.ISO8859_16,
            18,
            'ISO-8859-16',
            'ISO885916',
            'ISO8859_16',
          )),
          (e.SJIS = new e(I.SJIS, 20, 'SJIS', 'Shift_JIS')),
          (e.Cp1250 = new e(I.Cp1250, 21, 'Cp1250', 'windows-1250')),
          (e.Cp1251 = new e(I.Cp1251, 22, 'Cp1251', 'windows-1251')),
          (e.Cp1252 = new e(I.Cp1252, 23, 'Cp1252', 'windows-1252')),
          (e.Cp1256 = new e(I.Cp1256, 24, 'Cp1256', 'windows-1256')),
          (e.UnicodeBigUnmarked = new e(
            I.UnicodeBigUnmarked,
            25,
            'UnicodeBigUnmarked',
            'UTF-16BE',
            'UnicodeBig',
          )),
          (e.UTF8 = new e(I.UTF8, 26, 'UTF8', 'UTF-8')),
          (e.ASCII = new e(
            I.ASCII,
            Int32Array.from([27, 170]),
            'ASCII',
            'US-ASCII',
          )),
          (e.Big5 = new e(I.Big5, 28, 'Big5')),
          (e.GB18030 = new e(
            I.GB18030,
            29,
            'GB18030',
            'GB2312',
            'EUC_CN',
            'GBK',
          )),
          (e.EUC_KR = new e(I.EUC_KR, 30, 'EUC_KR', 'EUC-KR')),
          e
        );
      })(),
      _ = O;
  },
  1028,
  [1029],
);
