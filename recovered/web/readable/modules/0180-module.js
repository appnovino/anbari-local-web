// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 180; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return h;
        },
      }));
    var e = t(r(d[0])),
      n = r(d[1]),
      u = t(r(d[2])),
      l = t(r(d[3])),
      f = t(r(d[4])),
      o = t(r(d[5])),
      c = t(r(d[6])),
      s = t(r(d[7])),
      v = t(r(d[8])),
      p = !1;
    function E(t) {
      return (e) => {
        var n =
          null == e
            ? e
            : function () {
                if (p)
                  console.warn(
                    'Ignoring recursive animation callback when running mock animations',
                  );
                else {
                  p = !0;
                  try {
                    e(...arguments);
                  } finally {
                    p = !1;
                  }
                }
              };
        t(n);
      };
    }
    var y = {
        start: () => {},
        stop: () => {},
        reset: () => {},
        _startNativeLoop: () => {},
        _isUsingNativeDriver: () => !1,
      },
      _ = (t) =>
        (0, e.default)(
          (0, e.default)({}, y),
          {},
          {
            start: E((e) => {
              (t.forEach((t) => t.start()), null == e || e({ finished: !0 }));
            }),
          },
        ),
      h = {
        Value: o.default,
        ValueXY: c.default,
        Color: v.default,
        Interpolation: l.default,
        Node: f.default,
        decay: function (t, e) {
          return y;
        },
        timing: function (t, n) {
          var u = t;
          return (0, e.default)(
            (0, e.default)({}, y),
            {},
            {
              start: E((t) => {
                (u.setValue(n.toValue), null == t || t({ finished: !0 }));
              }),
            },
          );
        },
        spring: function (t, n) {
          var u = t;
          return (0, e.default)(
            (0, e.default)({}, y),
            {},
            {
              start: E((t) => {
                (u.setValue(n.toValue), null == t || t({ finished: !0 }));
              }),
            },
          );
        },
        add: u.default.add,
        subtract: u.default.subtract,
        divide: u.default.divide,
        multiply: u.default.multiply,
        modulo: u.default.modulo,
        diffClamp: u.default.diffClamp,
        delay: function (t) {
          return y;
        },
        sequence: function (t) {
          return _(t);
        },
        parallel: function (t, e) {
          return _(t);
        },
        stagger: function (t, e) {
          return _(e);
        },
        loop: function (t, e) {
          (void 0 === e ? {} : e).iterations;
          return y;
        },
        event: u.default.event,
        createAnimatedComponent: s.default,
        attachNativeEvent: n.attachNativeEvent,
        forkEvent: u.default.forkEvent,
        unforkEvent: u.default.unforkEvent,
        Event: n.AnimatedEvent,
      };
  },
  180,
  [11, 150, 181, 152, 154, 151, 189, 147, 194],
);
