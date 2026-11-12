// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 384; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.installPageBack = function (t, n) {
        const u = 'page-' + Date.now() + '-' + Math.random(),
          o = () =>
            t.history.pushState({ ...t.history.state, anbariPage: u }, '');
        o();
        const s = () => {
          n() && o();
        };
        return (
          t.addEventListener('popstate', s),
          () => {
            (t.removeEventListener('popstate', s),
              t.history.state?.anbariPage === u && t.history.back());
          }
        );
      }),
      Object.defineProperty(e, 'SWIPE_EDGE_PX', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      Object.defineProperty(e, 'SWIPE_EDGE_TABLET_PX', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      Object.defineProperty(e, 'SWIPE_START_PX', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      Object.defineProperty(e, 'SWIPE_BACK_SHARE', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      Object.defineProperty(e, 'SWIPE_FLING_VX', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      Object.defineProperty(e, 'SWIPE_FLING_MIN_PX', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      (e.swipeBackOn = function (t, n) {
        return 'ios' === t || 'android' === t;
      }),
      (e.swipeEdgeSize = function (u) {
        return u ? n : t;
      }),
      (e.swipeEdgeAt = b),
      (e.swipeTakes = l),
      (e.swipeOffset = function (t, n, u) {
        return Math.min(Math.max(n * f(t), 0), Math.max(u, 0)) * f(t) || 0;
      }),
      (e.swipeGoesBack = function (t, n, u, b) {
        const l = n * f(t),
          p = u * f(t);
        return !(p <= -0.5) && ((b > 0 && l >= b * o) || (p >= s && l >= c));
      }),
      (e.createSwipeStack = p),
      Object.defineProperty(e, 'swipeStack', {
        enumerable: !0,
        get: function () {
          return P;
        },
      }),
      Object.defineProperty(e, 'SWIPE_MID_START_PX', {
        enumerable: !0,
        get: function () {
          return _;
        },
      }),
      (e.swipeMidEdge = E),
      (e.swipeSideTakes = function (t, n, u, o, s) {
        return 'left' === b(t, n, u) ? l('left', o, s) : 'left' === E(o, s);
      }),
      Object.defineProperty(e, 'SWIPE_SIDE_GIVE_UP_PX', {
        enumerable: !0,
        get: function () {
          return S;
        },
      }),
      (e.swipeLeftIsNoTap = function (t, n) {
        return (
          Number.isFinite(t) &&
          Number.isFinite(n) &&
          t <= -24 &&
          -t > 2 * Math.abs(n)
        );
      }),
      Object.defineProperty(e, 'SWIPE_FLING_STALE_MS', {
        enumerable: !0,
        get: function () {
          return h;
        },
      }),
      (e.swipeSideGivesUp = function (t, n) {
        return (
          !Number.isFinite(t) ||
          !Number.isFinite(n) ||
          t <= -14 ||
          (Math.abs(n) >= S && Math.abs(n) >= Math.abs(t))
        );
      }),
      Object.defineProperty(e, 'swipeGuard', {
        enumerable: !0,
        get: function () {
          return w;
        },
      }),
      Object.defineProperty(e, 'noSwipe', {
        enumerable: !0,
        get: function () {
          return N;
        },
      }),
      Object.defineProperty(e, 'SWIPE_DOWN_START_PX', {
        enumerable: !0,
        get: function () {
          return F;
        },
      }),
      Object.defineProperty(e, 'SWIPE_DOWN_SHARE', {
        enumerable: !0,
        get: function () {
          return M;
        },
      }),
      (e.swipeDownTakes = function (t, n, u) {
        return u && y(t, n);
      }),
      (e.swipeDownClear = y),
      Object.defineProperty(e, 'PULL_TOP_SLACK_PX', {
        enumerable: !0,
        get: function () {
          return I;
        },
      }),
      (e.scrollsAtTop = T),
      Object.defineProperty(e, 'PULL_TOP_ZONE', {
        enumerable: !0,
        get: function () {
          return j;
        },
      }),
      (e.pullHoldsAtStart = function (t, n, u, o) {
        return (
          'android' === t && n && Number.isFinite(u) && o > 0 && u <= o * j
        );
      }),
      (e.pullHoldsOnMove = function (t, n, u, o) {
        return (
          'android' === t &&
          n &&
          Number.isFinite(u) &&
          Number.isFinite(o) &&
          o > 0 &&
          o >= Math.abs(u)
        );
      }),
      (e.pullReleasesHold = function (t, n) {
        return (
          !Number.isFinite(t) ||
          !Number.isFinite(n) ||
          n <= -3 ||
          (Math.abs(t) >= 10 && Math.abs(t) > Math.abs(n))
        );
      }),
      Object.defineProperty(e, 'SWIPE_OVERSCROLL_PX', {
        enumerable: !0,
        get: function () {
          return L;
        },
      }),
      (e.overscrollCloses = function (t, n) {
        return (
          !!Number.isFinite(t) &&
          (t <= -70 || (t <= -24 && Number.isFinite(n) && n >= 1))
        );
      }),
      Object.defineProperty(e, 'PULL_FLICK_SPEED', {
        enumerable: !0,
        get: function () {
          return k;
        },
      }),
      (e.flickAtTopCloses = function (t, n, u) {
        return (
          t && Number.isFinite(n) && n <= I && Number.isFinite(u) && u >= k
        );
      }),
      (e.swipeDownGoesBack = function (t, n, u) {
        return !(n <= -0.5) && ((u > 0 && t >= u * M) || (n >= s && t >= c));
      }),
      (e.createPullHost = function () {
        const t = new Map(),
          n = new Set();
        let u = !1,
          o = -1 / 0,
          s = !1;
        const c = { current: null };
        return {
          report(n, u) {
            t.set(n, u);
          },
          drop(n) {
            t.delete(n);
          },
          atTop: () => T(t.values()),
          touched(n) {
            const u = Date.now();
            (u - o > 400 && (s = !1), (o = u), T([t.get(n) ?? 0]) || (s = !0));
          },
          takeFree() {
            const t = !(Date.now() - o < 400 && s);
            return ((o = -1 / 0), (s = !1), t);
          },
          held: () => u,
          setHold(t) {
            u !== t && ((u = t), n.forEach((t) => t()));
          },
          subscribe: (t) => (
            n.add(t),
            () => {
              n.delete(t);
            }
          ),
          count: () => t.size,
          dragEnd(t, n) {
            c.current?.(t, n);
          },
          onDragEnd: c,
        };
      }));
    const t = 24,
      n = 44,
      u = 10,
      o = 0.35,
      s = 0.5,
      c = 40;
    const f = (t) => ('left' === t ? 1 : -1);
    function b(n, u, o = t) {
      return Number.isFinite(n) && u > 2 * o && n <= o ? 'left' : null;
    }
    function l(t, n, o) {
      const s = n * f(t);
      return s >= u && s > 1.5 * Math.abs(o);
    }
    function p() {
      let t = 0;
      const n = new Map(),
        u = () => {
          let t = null,
            u = null;
          for (const [o, s] of n)
            (!u ||
              s.depth > u.depth ||
              (s.depth === u.depth && s.order > u.order)) &&
              ((t = o), (u = s));
          return t;
        };
      return {
        add: (u, o) => (
          n.set(u, { depth: o, order: ++t }),
          () => {
            n.delete(u);
          }
        ),
        top: u,
        isTop: (t) => u() === t,
        size: () => n.size,
      };
    }
    const P = p(),
      _ = 24;
    function E(t, n) {
      return Number.isFinite(t) && Number.isFinite(n)
        ? t < _ || t <= 2 * Math.abs(n)
          ? null
          : 'left'
        : null;
    }
    const S = 14;
    const h = 80;
    let O = -1 / 0;
    const w = {
        mark(t = Date.now()) {
          O = t;
        },
        blocks: (t) => null !== t && Math.abs(O - t) < 400,
      },
      N = { onTouchStart: () => w.mark() },
      F = 10,
      M = 0.25;
    function y(t, n) {
      return (
        Number.isFinite(t) &&
        Number.isFinite(n) &&
        n >= F &&
        n > 1.5 * Math.abs(t)
      );
    }
    const I = 1;
    function T(t) {
      for (const n of t) if (Number.isFinite(n) && n > I) return !1;
      return !0;
    }
    const j = 0.3;
    const L = 70;
    const k = 0.5;
  },
  384,
  [],
);
