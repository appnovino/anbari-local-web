// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 515; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (_g, r, i, a, m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.SwipeBack = k),
      Object.defineProperty(_e, 'PAGE_STAYED_MS', {
        enumerable: !0,
        get: function () {
          return D;
        },
      }),
      (_e.PageModal = function ({ children: e, desk: u, ...o }) {
        const s = (0, f.useDesktop)(),
          [c, l] = (0, t.useState)(!1),
          d = (0, t.useRef)(o.visible);
        c && !1 !== o.visible && !1 === d.current && l(!1);
        d.current = o.visible;
        const v = (0, t.useRef)(!0);
        (0, t.useEffect)(
          () => () => {
            v.current = !1;
          },
          [],
        );
        if (u && s && !1 !== o.visible)
          return (0, T.jsx)(h.DeskPage, {
            id: u.id,
            title: u.title,
            onClose: () => o.onRequestClose?.(),
            children: e,
          });
        return (0, T.jsx)(n.Modal, { ...o, children: e });
      }),
      (_e.TapModal = function (e) {
        const { depth: t } = E(b);
        return (0, T.jsx)(R.Provider, {
          value: t + 1,
          children: (0, T.jsx)(n.Modal, { ...e }),
        });
      }),
      (_e.TapLayer = function ({ children: e }) {
        const { depth: t } = E(b);
        return (0, T.jsx)(R.Provider, { value: t + 1, children: e });
      }),
      (_e.PullCard = function ({
        onClose: e,
        enabled: n = !0,
        isTop: o,
        handle: c = !0,
        plain: d = !1,
        style: f,
        testID: h,
        children: p,
      }) {
        const { colors: x, mode: R } = (0, g.useTheme)(),
          S = E(b),
          k = (0, t.useRef)(new u.default.Value(0)).current,
          D = (0, t.useRef)(420),
          V = (0, t.useRef)(!0),
          M = (0, t.useRef)({ onClose: e, enabled: n, isTop: o });
        ((M.current = { onClose: e, enabled: n, isTop: o }),
          (0, t.useEffect)(
            () => (
              (V.current = !0),
              () => {
                V.current = !1;
              }
            ),
            [],
          ));
        const P = () =>
            u.default
              .spring(k, {
                toValue: 0,
                bounciness: 0,
                speed: 18,
                useNativeDriver: b,
              })
              .start(),
          C = () =>
            u.default
              .timing(k, {
                toValue: D.current + 80,
                duration: 200,
                easing: s.default.out(s.default.cubic),
                useNativeDriver: b,
              })
              .start(() => {
                (M.current.onClose(),
                  setTimeout(() => {
                    V.current && P();
                  }, 260));
              });
        (0, w.usePullDown)({
          enabled: () =>
            M.current.enabled &&
            (M.current.isTop ? M.current.isTop() : S.isTop()),
          move: (e) => k.setValue(e),
          end: (e, t) => {
            (0, v.swipeDownGoesBack)(e, t, D.current) ? C() : P();
          },
          overscroll: C,
        });
        return (0, T.jsx)(l.default, { testID: h, style: f, children: p });
      }));
    var t = r(_d[0]),
      n = r(_d[1]),
      u = e(r(_d[2])),
      o = (e(r(_d[3])), e(r(_d[4]))),
      s = e(r(_d[5])),
      c = e(r(_d[6]));
    r(_d[7]);
    var l = e(r(_d[8])),
      d = e(r(_d[9])),
      f = r(_d[10]),
      h = r(_d[11]),
      v = r(_d[12]),
      p = r(_d[13]),
      g = r(_d[14]),
      w = r(_d[15]),
      T = r(_d[16]);
    const b = !1,
      x =
        (Math.min(
          o.default.get('screen').width,
          o.default.get('screen').height,
        ),
        (0, v.swipeEdgeSize)(b)),
      R = (0, n.carryContext)((0, t.createContext)(0));
    let S = 0;
    function k({
      onBack: e,
      onSwiped: n,
      enabled: o = !0,
      backdrop: l,
      bleed: f = 0,
      bare: h = !1,
      sheet: k = !1,
      card: D = !1,
      enter: E = !1,
      handle: V = !1,
      topRef: M,
      style: P,
      children: C,
    }) {
      const { width: y, height: N } = (0, d.default)(),
        { colors: j, mode: _ } = (0, g.useTheme)(),
        B = (0, t.useContext)(R),
        X = ((0, p.useSafeAreaInsets)(), k && E && b),
        A = (0, t.useRef)(new u.default.Value(0)).current,
        G = (0, t.useRef)(new u.default.Value(X ? N : 0)).current,
        I = (0, t.useRef)(new u.default.Value(X ? 1 : 0)).current,
        L = (0, t.useRef)(0);
      L.current || (L.current = ++S);
      const O = o && b && !h,
        Y = b,
        q = (0, t.useRef)({
          onBack: e,
          onSwiped: n,
          on: O,
          width: y,
          height: N,
          sheet: k,
        }),
        F = (0, t.useRef)(!0);
      q.current = {
        onBack: e,
        onSwiped: n,
        on: O,
        width: y,
        height: N,
        sheet: k,
      };
      const H = (0, t.useRef)({
        x: 0,
        y: 0,
        on: !1,
        guarded: !1,
        active: !1,
        dx: 0,
        lastX: 0,
        lastT: 0,
        vx: 0,
      });
      ((0, t.useEffect)(
        () => (
          (F.current = !0),
          () => {
            F.current = !1;
          }
        ),
        [],
      ),
        (0, t.useEffect)(() => {}, [Y, B]),
        (0, t.useEffect)(() => {
          X &&
            u.default
              .parallel([
                u.default.timing(G, {
                  toValue: 0,
                  duration: 340,
                  easing: s.default.out(s.default.cubic),
                  useNativeDriver: !0,
                }),
                u.default.timing(I, {
                  toValue: 0,
                  duration: 340,
                  easing: s.default.out(s.default.cubic),
                  useNativeDriver: !0,
                }),
              ])
              .start();
        }, []));
      const z = () => q.current.on && v.swipeStack.isTop(L.current);
      M && (M.current = z);
      const U = () =>
          u.default
            .parallel(
              [A, G, I].map((e) =>
                u.default.spring(e, {
                  toValue: 0,
                  useNativeDriver: b,
                  bounciness: 0,
                  speed: 18,
                }),
              ),
            )
            .start(),
        W = (e, t, n) => {
          const { width: u, height: o } = q.current;
          if ('down' === e) {
            const e = Math.max(n, 0);
            return (
              G.setValue(e),
              void I.setValue(o > 0 ? Math.min(e / o, 1) : 0)
            );
          }
          const s = (0, v.swipeOffset)('left', t, u);
          (A.setValue(s), I.setValue(u > 0 ? Math.min(s / u, 1) : 0));
        },
        J = (e) => {
          const { width: t, height: n } = q.current,
            o =
              'down' === e
                ? u.default.timing(G, {
                    toValue: n,
                    duration: 230,
                    easing: s.default.out(s.default.cubic),
                    useNativeDriver: b,
                  })
                : u.default.timing(A, {
                    toValue: t,
                    duration: 190,
                    easing: s.default.out(s.default.cubic),
                    useNativeDriver: b,
                  });
          u.default
            .parallel([
              o,
              u.default.timing(I, {
                toValue: 1,
                duration: 210,
                useNativeDriver: b,
              }),
            ])
            .start(({ finished: e }) => {
              if (!e) return;
              const t = q.current.onSwiped;
              (t
                ? (t(), setTimeout(() => q.current.onBack(), 32))
                : q.current.onBack(),
                setTimeout(
                  () => {
                    F.current &&
                      u.default
                        .parallel(
                          [A, G, I].map((e) =>
                            u.default.timing(e, {
                              toValue: 0,
                              duration: 160,
                              easing: s.default.out(s.default.cubic),
                              useNativeDriver: b,
                            }),
                          ),
                        )
                        .start();
                  },
                  t ? 240 : 120,
                ));
            });
        },
        K = (0, w.usePullDown)({
          enabled: () => q.current.sheet && z(),
          yields: () => H.current.active,
          move: (e) => W('down', 0, e),
          end: (e, t) => {
            (0, v.swipeDownGoesBack)(e, t, q.current.height) ? J('down') : U();
          },
          overscroll: () => J('down'),
        }),
        Q = (e, t) =>
          (0, v.swipeSideTakes)(H.current.x, q.current.width, x, e, t),
        Z = (e) => {
          const t = H.current,
            n = t.active;
          ((t.on = !1),
            (t.active = !1),
            n &&
              (K.host.setHold(!1),
              (0, v.swipeGoesBack)('left', t.dx, e ? t.vx : 0, q.current.width)
                ? J('side')
                : U()));
        },
        $ = (0, t.useMemo)(
          () => ({
            onTouchStart: (e) => {
              (H.current.active && Z(!1), K.touch.onTouchStart(e));
              const t = e.nativeEvent,
                n = H.current;
              if ((t.touches?.length ?? 1) > 1)
                return (Z(!1), void (n.guarded = !0));
              const u = v.swipeGuard.blocks(Date.now());
              Object.assign(n, {
                x: t.pageX,
                y: t.pageY,
                on: z() && !u,
                guarded: u,
                active: !1,
                dx: 0,
                lastX: t.pageX,
                lastT: t.timestamp,
                vx: 0,
              });
            },
            onTouchMove: (e) => {
              K.touch.onTouchMove(e);
              const t = e.nativeEvent,
                n = H.current;
              if (!n.on) return;
              if ((t.touches?.length ?? 1) > 1) return void Z(!1);
              const u = t.pageX - n.x,
                o = t.pageY - n.y;
              if (!n.active) {
                if (K.active() || (0, v.swipeSideGivesUp)(u, o))
                  return void (n.on = !1);
                if (!Q(u, o)) return;
                ((n.active = !0),
                  A.stopAnimation(),
                  G.stopAnimation(),
                  I.stopAnimation(),
                  K.host.setHold(!0));
              }
              const s = t.timestamp - n.lastT;
              (s > 0 &&
                ((n.vx = 0.4 * n.vx + ((t.pageX - n.lastX) / s) * 0.6),
                (n.lastX = t.pageX),
                (n.lastT = t.timestamp)),
                (n.dx = u),
                W('side', u, 0));
            },
            onTouchEnd: (e) => {
              K.touch.onTouchEnd();
              const t = H.current;
              (e.nativeEvent.timestamp - t.lastT > v.SWIPE_FLING_STALE_MS &&
                (t.vx = 0),
                Z(!0));
            },
            onTouchCancel: () => {
              (K.touch.onTouchCancel(), Z(!1));
            },
          }),
          [],
        );
      (0, t.useEffect)(() => {}, []);
      (0, t.useMemo)(
        () =>
          c.default.create({
            onMoveShouldSetPanResponderCapture: (e, t) => {
              if (!z() || t.numberActiveTouches > 1) return !1;
              const n = H.current;
              if (n.active || K.active()) return !0;
              const u = t.moveX - n.x,
                o = t.moveY - n.y;
              return (
                !!((n.on && Q(u, o)) || (q.current.sheet && K.taking(u, o))) ||
                (!n.guarded && (0, v.swipeLeftIsNoTap)(u, o))
              );
            },
            onShouldBlockNativeResponder: () => !0,
            onPanResponderTerminationRequest: () =>
              !H.current.active && !K.active(),
            onPanResponderReject: () => {
              K.active() || Z(!1);
            },
            onPanResponderRelease: (e) => $.onTouchEnd(e),
            onPanResponderTerminate: () => $.onTouchCancel(),
          }),
        [],
      );
      return (0, T.jsx)(T.Fragment, { children: C });
    }
    const D = 450;
    function E(e) {
      const n = (0, t.useContext)(R),
        u = (0, t.useRef)(0);
      return (
        u.current || (u.current = ++S),
        (0, t.useEffect)(
          () => (e ? v.swipeStack.add(u.current, n) : void 0),
          [e, n],
        ),
        { depth: n, isTop: () => v.swipeStack.isTop(u.current) }
      );
    }
  },
  515,
  [
    2, 381, 92, 203, 124, 196, 212, 94, 99, 257, 481, 516, 384, 342, 382, 380,
    338,
  ],
);
