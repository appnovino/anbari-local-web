// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 380; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (_g, r, i, a, m, _e2, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e2, '__esModule', { value: !0 }),
      Object.defineProperty(_e2, 'createPullHost', {
        enumerable: !0,
        get: function () {
          return l.createPullHost;
        },
      }),
      Object.defineProperty(_e2, 'PullHostContext', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }),
      (_e2.ScrollView = p),
      Object.defineProperty(_e2, 'pullScrollComponent', {
        enumerable: !0,
        get: function () {
          return h;
        },
      }),
      (_e2.usePullDown = function (e) {
        const n = (0, t.useMemo)(l.createPullHost, []),
          c = (0, t.useRef)(e);
        c.current = e;
        const s = (0, t.useRef)({
            x: 0,
            y: 0,
            on: !1,
            free: !1,
            active: !1,
            holding: !1,
            dy: 0,
            lastY: 0,
            lastT: 0,
            speed: 0,
            down: !1,
            lost: !1,
          }),
          f = () => {
            s.current.holding && ((s.current.holding = !1), n.setHold(!1));
          },
          v = (e) => {
            const t = s.current,
              n = t.active;
            (f(),
              (t.on = !1),
              (t.active = !1),
              n && e ? c.current.end(t.dy, t.speed) : n && c.current.end(0, 0));
          };
        n.onDragEnd.current = (e, t) => {
          const n = s.current;
          !n.active &&
            c.current.enabled() &&
            c.current.overscroll &&
            (0, l.flickAtTopCloses)(n.lost, e, t) &&
            ((n.lost = !1), c.current.overscroll());
        };
        const p = (0, t.useMemo)(
            () => ({
              onTouchStart: (e) => {
                const t = e.nativeEvent,
                  o = s.current;
                if ((o.active && v(!1), (t.touches?.length ?? 1) > 1))
                  return (v(!1), void n.takeFree());
                const c = n.takeFree(),
                  l = u;
                (f(),
                  Object.assign(o, {
                    x: t.pageX,
                    y: t.pageY,
                    on: l,
                    free: c,
                    active: !1,
                    dy: 0,
                    lastY: t.pageY,
                    lastT: t.timestamp,
                    speed: 0,
                    down: !1,
                    lost: !1,
                  }));
              },
              onTouchMove: (e) => {
                const t = e.nativeEvent,
                  o = s.current;
                if (!o.on) return;
                if ((t.touches?.length ?? 1) > 1) return void v(!1);
                const u = t.pageX - o.x,
                  p = t.pageY - o.y;
                if (!o.active) {
                  if (c.current.yields?.()) return ((o.on = !1), void f());
                  if (
                    ((o.down = p > 0),
                    o.holding
                      ? (0, l.pullReleasesHold)(u, p) && f()
                      : n.count() > 0 &&
                        (0, l.pullHoldsOnMove)('web', o.free, u, p) &&
                        ((o.holding = !0), n.setHold(!0)),
                    !(0, l.swipeDownTakes)(u, p, o.free))
                  )
                    return void (
                      (p <= -10 || Math.abs(u) >= 24) &&
                      ((o.on = !1), f())
                    );
                  ((o.active = !0),
                    o.holding || ((o.holding = !0), n.setHold(!0)));
                }
                const h = t.timestamp - o.lastT;
                (h > 0 &&
                  ((o.speed = (t.pageY - o.lastY) / h),
                  (o.lastY = t.pageY),
                  (o.lastT = t.timestamp)),
                  (o.dy = Math.max(p, 0)),
                  c.current.move(o.dy));
              },
              onTouchEnd: () => v(!0),
              onTouchCancel: () => {
                const e = s.current;
                ((e.lost = e.on && e.free && !e.active), v(!0));
              },
            }),
            [],
          ),
          h = (0, t.useMemo)(
            () =>
              o.default.create({
                onMoveShouldSetPanResponderCapture: (e, t) => u,
                onShouldBlockNativeResponder: () => !0,
                onPanResponderTerminationRequest: () => !s.current.active,
                onPanResponderRelease: () => v(!0),
                onPanResponderTerminate: () => v(!0),
              }),
            [],
          );
        return (
          (0, t.useEffect)(() => {}, []),
          {
            host: n,
            touch: p,
            claim: h.panHandlers,
            taking: (e, t) =>
              s.current.on &&
              (s.current.active || (0, l.swipeDownTakes)(e, t, s.current.free)),
            active: () => s.current.active,
          }
        );
      }));
    var t = r(d[0]),
      n = r(d[1]);
    e(r(d[2]));
    r(d[3]);
    var o = e(r(d[4]));
    r(d[5]);
    var c = e(r(d[6])),
      l = r(d[7]),
      s = r(d[8]);
    const u = !1,
      f = (0, n.carryContext)((0, t.createContext)(null));
    let v = 0;
    function p({
      ref: e,
      horizontal: n,
      onScroll: o,
      onScrollEndDrag: l,
      onTouchStart: p,
      scrollEnabled: h,
      scrollEventThrottle: g,
      ...T
    }) {
      const y = (0, t.useContext)(f),
        b = (0, t.useRef)(0),
        P = u,
        [S, E] = (0, t.useState)(!1);
      return (
        b.current || (b.current = ++v),
        (0, t.useEffect)(() => {}, [P, y]),
        (0, s.jsx)(c.default, {
          ref: e,
          horizontal: n,
          onScroll: o,
          onScrollEndDrag: l,
          onTouchStart: p,
          scrollEnabled: h,
          scrollEventThrottle: g,
          ...T,
        })
      );
    }
    const h = (e) => (0, s.jsx)(p, { ...e });
  },
  380,
  [2, 381, 203, 124, 212, 94, 123, 384, 338],
);
