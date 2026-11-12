// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 181; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (_g, _r, _i, _a, m, _e, d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return k;
        },
      }));
    var n = t(_r(d[0])),
      e = _r(d[1]),
      i = t(_r(d[2])),
      r = t(_r(d[3])),
      a = t(_r(d[4])),
      o = t(_r(d[5])),
      u = t(_r(d[6])),
      f = t(_r(d[7])),
      s = t(_r(d[8]));
    _r(d[9]);
    var c = t(_r(d[10])),
      v = t(_r(d[11])),
      l = t(_r(d[12])),
      p = t(_r(d[13])),
      g = t(_r(d[14])),
      _ = t(_r(d[15])),
      h = t(_r(d[16])),
      N = t(_r(d[17])),
      w = t(_r(d[18])),
      E = function (t, n) {
        return t && n.onComplete
          ? function () {
              (n.onComplete && n.onComplete(...arguments),
                t && t(...arguments));
            }
          : t || n.onComplete;
      },
      A = function (t, e, i) {
        if (t instanceof p.default) {
          var r = (0, n.default)({}, e),
            a = (0, n.default)({}, e);
          for (var o in e) {
            var u = e[o],
              f = u.x,
              s = u.y;
            void 0 !== f && void 0 !== s && ((r[o] = f), (a[o] = s));
          }
          var c = i(t.x, r),
            v = i(t.y, a);
          return y([c, v], { stopTogether: !1 });
        }
        if (t instanceof w.default) {
          var l = (0, n.default)({}, e),
            g = (0, n.default)({}, e),
            _ = (0, n.default)({}, e),
            h = (0, n.default)({}, e);
          for (var N in e) {
            var E = e[N],
              A = E.r,
              D = E.g,
              L = E.b,
              U = E.a;
            void 0 !== A &&
              void 0 !== D &&
              void 0 !== L &&
              void 0 !== U &&
              ((l[N] = A), (g[N] = D), (_[N] = L), (h[N] = U));
          }
          var k = i(t.r, l),
            C = i(t.g, g),
            V = i(t.b, _),
            b = i(t.a, h);
          return y([k, C, V, b], { stopTogether: !1 });
        }
        return null;
      },
      D = function t(e, i) {
        var r = function (t, n, e) {
          e = E(e, n);
          var i = t,
            r = n;
          (i.stopTracking(),
            n.toValue instanceof s.default
              ? i.track(new v.default(i, n.toValue, h.default, r, e))
              : i.animate(new h.default(r), e));
        };
        return (
          A(e, i, t) || {
            start: function (t) {
              r(e, i, t);
            },
            stop: function () {
              e.stopAnimation();
            },
            reset: function () {
              e.resetAnimation();
            },
            _startNativeLoop: function (t) {
              var a = (0, n.default)(
                (0, n.default)({}, i),
                {},
                { iterations: t },
              );
              r(e, a);
            },
            _isUsingNativeDriver: function () {
              return i.useNativeDriver || !1;
            },
          }
        );
      },
      L = function (t) {
        var n = 0;
        return {
          start: function (e) {
            0 === t.length
              ? e && e({ finished: !0 })
              : t[n].start(function i(r) {
                  if (r.finished) {
                    if (++n === t.length) return ((n = 0), void (e && e(r)));
                    t[n].start(i);
                  } else e && e(r);
                });
          },
          stop: function () {
            n < t.length && t[n].stop();
          },
          reset: function () {
            (t.forEach((t, e) => {
              e <= n && t.reset();
            }),
              (n = 0));
          },
          _startNativeLoop: function () {
            throw new Error(
              'Loops run using the native driver cannot contain Animated.sequence animations',
            );
          },
          _isUsingNativeDriver: function () {
            return !1;
          },
        };
      },
      y = function (t, n) {
        var e = 0,
          i = {},
          r = !(n && !1 === n.stopTogether),
          a = {
            start: function (n) {
              e !== t.length
                ? t.forEach((o, u) => {
                    var f = function (o) {
                      if (((i[u] = !0), ++e === t.length))
                        return ((e = 0), void (n && n(o)));
                      !o.finished && r && a.stop();
                    };
                    o ? o.start(f) : f({ finished: !0 });
                  })
                : n && n({ finished: !0 });
            },
            stop: function () {
              t.forEach((t, n) => {
                (!i[n] && t.stop(), (i[n] = !0));
              });
            },
            reset: function () {
              t.forEach((t, n) => {
                (t.reset(), (i[n] = !1), (e = 0));
              });
            },
            _startNativeLoop: function () {
              throw new Error(
                'Loops run using the native driver cannot contain Animated.parallel animations',
              );
            },
            _isUsingNativeDriver: function () {
              return !1;
            },
          };
        return a;
      },
      U = function (t) {
        return D(new l.default(0), {
          toValue: 0,
          delay: t,
          duration: 0,
          useNativeDriver: !1,
        });
      };
    var k = {
      Value: l.default,
      ValueXY: p.default,
      Color: w.default,
      Interpolation: o.default,
      Node: s.default,
      decay: function t(e, i) {
        var r = function (t, n, e) {
          e = E(e, n);
          var i = t,
            r = n;
          (i.stopTracking(), i.animate(new g.default(r), e));
        };
        return (
          A(e, i, t) || {
            start: function (t) {
              r(e, i, t);
            },
            stop: function () {
              e.stopAnimation();
            },
            reset: function () {
              e.resetAnimation();
            },
            _startNativeLoop: function (t) {
              var a = (0, n.default)(
                (0, n.default)({}, i),
                {},
                { iterations: t },
              );
              r(e, a);
            },
            _isUsingNativeDriver: function () {
              return i.useNativeDriver || !1;
            },
          }
        );
      },
      timing: D,
      spring: function t(e, i) {
        var r = function (t, n, e) {
          e = E(e, n);
          var i = t,
            r = n;
          (i.stopTracking(),
            n.toValue instanceof s.default
              ? i.track(new v.default(i, n.toValue, _.default, r, e))
              : i.animate(new _.default(r), e));
        };
        return (
          A(e, i, t) || {
            start: function (t) {
              r(e, i, t);
            },
            stop: function () {
              e.stopAnimation();
            },
            reset: function () {
              e.resetAnimation();
            },
            _startNativeLoop: function (t) {
              var a = (0, n.default)(
                (0, n.default)({}, i),
                {},
                { iterations: t },
              );
              r(e, a);
            },
            _isUsingNativeDriver: function () {
              return i.useNativeDriver || !1;
            },
          }
        );
      },
      add: function (t, n) {
        return new i.default(t, n);
      },
      subtract: function (t, n) {
        return new c.default(t, n);
      },
      divide: function (t, n) {
        return new a.default(t, n);
      },
      multiply: function (t, n) {
        return new f.default(t, n);
      },
      modulo: function (t, n) {
        return new u.default(t, n);
      },
      diffClamp: function (t, n, e) {
        return new r.default(t, n, e);
      },
      delay: U,
      sequence: L,
      parallel: y,
      stagger: function (t, n) {
        return y(n.map((n, e) => L([U(t * e), n])));
      },
      loop: function (t, n) {
        var e = void 0 === n ? {} : n,
          i = e.iterations,
          r = void 0 === i ? -1 : i,
          a = e.resetBeforeIteration,
          o = void 0 === a || a,
          u = !1,
          f = 0;
        return {
          start: function (n) {
            t && 0 !== r
              ? t._isUsingNativeDriver()
                ? t._startNativeLoop(r)
                : (function e(i) {
                    (void 0 === i && (i = { finished: !0 }),
                      u || f === r || !1 === i.finished
                        ? n && n(i)
                        : (f++, o && t.reset(), t.start(e)));
                  })()
              : n && n({ finished: !0 });
          },
          stop: function () {
            ((u = !0), t.stop());
          },
          reset: function () {
            ((f = 0), (u = !1), t.reset());
          },
          _startNativeLoop: function () {
            throw new Error(
              'Loops run using the native driver cannot contain Animated.loop animations',
            );
          },
          _isUsingNativeDriver: function () {
            return t._isUsingNativeDriver();
          },
        };
      },
      event: function (t, n) {
        var i = new e.AnimatedEvent(t, n);
        return i.__isNative ? i : i.__getHandler();
      },
      createAnimatedComponent: N.default,
      attachNativeEvent: e.attachNativeEvent,
      forkEvent: function (t, n) {
        return t
          ? t instanceof e.AnimatedEvent
            ? (t.__addListener(n), t)
            : function () {
                ('function' == typeof t && t(...arguments), n(...arguments));
              }
          : n;
      },
      unforkEvent: function (t, n) {
        t && t instanceof e.AnimatedEvent && t.__removeListener(n);
      },
      Event: e.AnimatedEvent,
    };
  },
  181,
  [
    11, 150, 182, 183, 184, 152, 185, 186, 154, 149, 187, 188, 151, 189, 190,
    192, 195, 147, 194,
  ],
);
