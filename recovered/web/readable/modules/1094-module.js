// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1094; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    var e,
      i = r(d[0]),
      t = (e = i) && e.__esModule ? e : { default: e },
      s = (function () {
        function e() {}
        var i;
        return (
          (e.fixed = function (i, t) {
            return function (s) {
              return e.processFixedAI(i, t, s);
            };
          }),
          (e.variable = function (i, t) {
            return function (s) {
              return e.processVariableAI(i, t, s);
            };
          }),
          (e.parseFieldsInGeneralPurpose = function (e) {
            if (!e) return null;
            if (e.length < 2) throw new t.default();
            var i = e.substring(0, 2),
              s = this.TWO_DIGIT_DATA_LENGTH.get(i);
            if (s) return s(e);
            if (e.length < 3) throw new t.default();
            var l = e.substring(0, 3),
              b = this.THREE_DIGIT_DATA_LENGTH.get(l);
            if (b) return b(e);
            var v = this.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH.get(l);
            if (v) return v(e);
            if (e.length < 4) throw new t.default();
            var f = e.substring(0, 4),
              n = this.FOUR_DIGIT_DATA_LENGTH.get(f);
            if (n) return n(e);
            throw new t.default();
          }),
          (e.processFixedAI = function (i, s, l) {
            if (l.length < i) throw new t.default();
            var b = l.substring(0, i);
            if (l.length < i + s) throw new t.default();
            var v = l.substring(i, i + s),
              f = l.substring(i + s),
              n = '(' + b + ')' + v,
              u = e.parseFieldsInGeneralPurpose(f);
            return null === u ? n : n + u;
          }),
          (e.processVariableAI = function (i, t, s) {
            var l,
              b = s.substring(0, i);
            l = s.length < i + t ? s.length : i + t;
            var v = s.substring(i, l),
              f = s.substring(l),
              n = '(' + b + ')' + v,
              u = e.parseFieldsInGeneralPurpose(f);
            return null === u ? n : n + u;
          }),
          (e.TWO_DIGIT_DATA_LENGTH = (function () {
            var i = new Map();
            (i.set('00', e.fixed(2, 18)),
              i.set('01', e.fixed(2, 14)),
              i.set('02', e.fixed(2, 14)),
              i.set('10', e.variable(2, 20)),
              i.set('11', e.fixed(2, 6)),
              i.set('12', e.fixed(2, 6)),
              i.set('13', e.fixed(2, 6)),
              i.set('15', e.fixed(2, 6)),
              i.set('16', e.fixed(2, 6)),
              i.set('17', e.fixed(2, 6)),
              i.set('20', e.fixed(2, 2)),
              i.set('21', e.variable(2, 20)),
              i.set('22', e.variable(2, 29)),
              i.set('30', e.variable(2, 8)),
              i.set('37', e.variable(2, 8)));
            for (var t = 90; t <= 99; t++) i.set(String(t), e.variable(2, 30));
            return i;
          })()),
          (e.THREE_DIGIT_DATA_LENGTH = new Map([
            ['235', e.variable(3, 28)],
            ['240', e.variable(3, 30)],
            ['241', e.variable(3, 30)],
            ['242', e.variable(3, 6)],
            ['243', e.variable(3, 20)],
            ['250', e.variable(3, 30)],
            ['251', e.variable(3, 30)],
            ['253', e.variable(3, 30)],
            ['254', e.variable(3, 20)],
            ['255', e.variable(3, 25)],
            ['400', e.variable(3, 30)],
            ['401', e.variable(3, 30)],
            ['402', e.fixed(3, 17)],
            ['403', e.variable(3, 30)],
            ['410', e.fixed(3, 13)],
            ['411', e.fixed(3, 13)],
            ['412', e.fixed(3, 13)],
            ['413', e.fixed(3, 13)],
            ['414', e.fixed(3, 13)],
            ['415', e.fixed(3, 13)],
            ['416', e.fixed(3, 13)],
            ['417', e.fixed(3, 13)],
            ['420', e.variable(3, 20)],
            ['421', e.variable(3, 15)],
            ['422', e.fixed(3, 3)],
            ['423', e.variable(3, 15)],
            ['424', e.fixed(3, 3)],
            ['425', e.variable(3, 15)],
            ['426', e.fixed(3, 3)],
            ['427', e.variable(3, 3)],
            ['710', e.variable(3, 20)],
            ['711', e.variable(3, 20)],
            ['712', e.variable(3, 20)],
            ['713', e.variable(3, 20)],
            ['714', e.variable(3, 20)],
            ['715', e.variable(3, 20)],
          ])),
          (e.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH = (function () {
            for (var i = new Map(), t = 310; t <= 316; t++)
              i.set(String(t), e.fixed(4, 6));
            for (t = 320; t <= 337; t++) i.set(String(t), e.fixed(4, 6));
            for (t = 340; t <= 357; t++) i.set(String(t), e.fixed(4, 6));
            for (t = 360; t <= 369; t++) i.set(String(t), e.fixed(4, 6));
            return (
              i.set('390', e.variable(4, 15)),
              i.set('391', e.variable(4, 18)),
              i.set('392', e.variable(4, 15)),
              i.set('393', e.variable(4, 18)),
              i.set('394', e.fixed(4, 4)),
              i.set('395', e.fixed(4, 6)),
              i.set('703', e.variable(4, 30)),
              i.set('723', e.variable(4, 30)),
              i
            );
          })()),
          (e.FOUR_DIGIT_DATA_LENGTH =
            ((i = new Map()).set('4300', e.variable(4, 35)),
            i.set('4301', e.variable(4, 35)),
            i.set('4302', e.variable(4, 70)),
            i.set('4303', e.variable(4, 70)),
            i.set('4304', e.variable(4, 70)),
            i.set('4305', e.variable(4, 70)),
            i.set('4306', e.variable(4, 70)),
            i.set('4307', e.fixed(4, 2)),
            i.set('4308', e.variable(4, 30)),
            i.set('4309', e.fixed(4, 20)),
            i.set('4310', e.variable(4, 35)),
            i.set('4311', e.variable(4, 35)),
            i.set('4312', e.variable(4, 70)),
            i.set('4313', e.variable(4, 70)),
            i.set('4314', e.variable(4, 70)),
            i.set('4315', e.variable(4, 70)),
            i.set('4316', e.variable(4, 70)),
            i.set('4317', e.fixed(4, 2)),
            i.set('4318', e.variable(4, 20)),
            i.set('4319', e.variable(4, 30)),
            i.set('4320', e.variable(4, 35)),
            i.set('4321', e.fixed(4, 1)),
            i.set('4322', e.fixed(4, 1)),
            i.set('4323', e.fixed(4, 1)),
            i.set('4324', e.fixed(4, 10)),
            i.set('4325', e.fixed(4, 10)),
            i.set('4326', e.fixed(4, 6)),
            i.set('7001', e.fixed(4, 13)),
            i.set('7002', e.variable(4, 30)),
            i.set('7003', e.fixed(4, 10)),
            i.set('7004', e.variable(4, 4)),
            i.set('7005', e.variable(4, 12)),
            i.set('7006', e.fixed(4, 6)),
            i.set('7007', e.variable(4, 12)),
            i.set('7008', e.variable(4, 3)),
            i.set('7009', e.variable(4, 10)),
            i.set('7010', e.variable(4, 2)),
            i.set('7011', e.variable(4, 10)),
            i.set('7020', e.variable(4, 20)),
            i.set('7021', e.variable(4, 20)),
            i.set('7022', e.variable(4, 20)),
            i.set('7023', e.variable(4, 30)),
            i.set('7040', e.fixed(4, 4)),
            i.set('7240', e.variable(4, 20)),
            i.set('8001', e.fixed(4, 14)),
            i.set('8002', e.variable(4, 20)),
            i.set('8003', e.variable(4, 30)),
            i.set('8004', e.variable(4, 30)),
            i.set('8005', e.fixed(4, 6)),
            i.set('8006', e.fixed(4, 18)),
            i.set('8007', e.variable(4, 34)),
            i.set('8008', e.variable(4, 12)),
            i.set('8009', e.variable(4, 50)),
            i.set('8010', e.variable(4, 30)),
            i.set('8011', e.variable(4, 12)),
            i.set('8012', e.variable(4, 20)),
            i.set('8013', e.variable(4, 25)),
            i.set('8017', e.fixed(4, 18)),
            i.set('8018', e.fixed(4, 18)),
            i.set('8019', e.variable(4, 10)),
            i.set('8020', e.variable(4, 25)),
            i.set('8026', e.fixed(4, 18)),
            i.set('8100', e.fixed(4, 6)),
            i.set('8101', e.fixed(4, 10)),
            i.set('8102', e.fixed(4, 2)),
            i.set('8110', e.variable(4, 70)),
            i.set('8111', e.fixed(4, 4)),
            i.set('8112', e.variable(4, 70)),
            i.set('8200', e.variable(4, 70)),
            i)),
          e
        );
      })();
  },
  1094,
  [1032],
);
