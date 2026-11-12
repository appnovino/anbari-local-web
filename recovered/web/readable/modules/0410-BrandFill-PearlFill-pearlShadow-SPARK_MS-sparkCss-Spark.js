// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 410; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.BrandFill = function ({ radius: e, pressed: n = !1 }) {
        const { colors: t } = (0, l.useTheme)();
        return (0, b.jsx)(u.LinearGradient, {
          pointerEvents: 'none',
          colors: [...(n ? t.brandPressed : t.brand)],
          locations: [...t.brandLocations],
          start: { x: 0, y: 0.5 },
          end: { x: 1, y: 0.5 },
          style: [s.default.absoluteFill, { borderRadius: e }],
        });
      }),
      (_e.PearlFill = function ({ radius: e }) {
        const n = l.PEARL.stops.join(',').split(',');
        return (0, b.jsx)(o.default, {
          pointerEvents: 'none',
          style: [
            s.default.absoluteFill,
            { borderRadius: e },
            {
              backgroundImage: `radial-gradient(circle at 32% 28%,${n[0]} 0%,${n[1]} 38%,${n[2]} 70%,${n[3]} 100%)`,
            },
          ],
        });
      }),
      (_e.pearlShadow = function () {
        return {
          boxShadow: `0 10px 26px ${l.PEARL.shadow}, 0 2px 6px rgba(0,0,0,.12), inset 0 2px 1px #ffffff, inset 0 -3px 8px rgba(0,0,0,.08)`,
        };
      }),
      Object.defineProperty(_e, 'SPARK_MS', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }),
      (_e.sparkCss = k),
      (_e.Spark = function ({
        radius: e,
        width: s = 1.5,
        active: u = !0,
        turns: f,
        tone: p,
        style: k,
        testID: h,
        children: $,
      }) {
        const { mode: S, colors: R } = (0, l.useTheme)(),
          v = (0, c.useReducedMotion)(),
          [y, P] = (0, n.useState)('background' !== t.default.currentState);
        (0, n.useEffect)(() => {
          const e = t.default.addEventListener('change', (e) =>
            P('active' === e),
          );
          return () => e.remove();
        }, []);
        const A = u && !v && y;
        return u
          ? (0, b.jsx)(x, {
              radius: e,
              width: s,
              run: A,
              turns: f,
              mode: p ?? S,
              style: k,
              testID: h,
              children: $,
            })
          : (0, b.jsx)(o.default, { testID: h, style: k, children: $ });
      }));
    var n = r(d[0]),
      t = (e(r(d[1])), e(r(d[2])));
    e(r(d[3]));
    r(d[4]);
    var s = e(r(d[5])),
      o = e(r(d[6])),
      u = r(d[7]),
      l = r(d[8]),
      c = r(d[9]),
      b = r(d[10]);
    const f = 4800,
      p = 'anbari-spark-css';
    function k(e, n) {
      const t = (e) =>
        `conic-gradient(from var(--anb-spark),${e.base} 0 58%,${e.shine[0]} 70%,${e.shine[1]} 76%,${e.shine[2]} 81%,${e.base} 90%,${e.base} 100%)`;
      return `@property --anb-spark{syntax:"<angle>";inherits:false;initial-value:0deg}\n@keyframes anb-spark-spin{to{--anb-spark:360deg}}\n[data-anb-spark]{-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none}\n[data-anb-spark="light"]{background:${e.base}}[data-anb-spark="dark"]{background:${n.base}}\n[data-anb-spark="light"][data-anb-run="1"]{background:${t(e)};animation:anb-spark-spin ${f}ms linear infinite}\n[data-anb-spark="dark"][data-anb-run="1"]{background:${t(n)};animation:anb-spark-spin ${f}ms linear infinite}\n[data-anb-spark="teal"]{background:linear-gradient(135deg,${l.SPARK.teal.from},${l.SPARK.teal.to})}\n[data-anb-spark="teal"][data-anb-run="1"]{background:conic-gradient(from var(--anb-spark),${l.SPARK.teal.from} 0 18%,${l.SPARK.teal.to} 40%,${l.SPARK.teal.from} 60%,${l.SPARK.teal.shine[0]} 70%,${l.SPARK.teal.shine[1]} 76%,${l.SPARK.teal.shine[2]} 81%,${l.SPARK.teal.from} 92%);animation:anb-spark-spin ${f}ms linear infinite}\n@media (prefers-reduced-motion:reduce){[data-anb-spark][data-anb-run="1"]{animation:none}}`;
    }
    function h(e, n) {
      if ('undefined' == typeof document || document.getElementById(p)) return;
      const t = document.createElement('style');
      ((t.id = p), (t.textContent = k(e, n)), document.head.appendChild(t));
    }
    function $(e, t) {
      const [s, o] = (0, n.useState)(!1);
      return (
        (0, n.useEffect)(() => {
          if ((o(!1), !e || !t)) return;
          const n = setTimeout(() => o(!0), t * f);
          return () => clearTimeout(n);
        }, [e, t]),
        s
      );
    }
    function x({
      radius: e,
      width: t,
      run: s,
      turns: u,
      mode: c,
      style: f,
      testID: p,
      children: k,
    }) {
      const x = (0, n.useRef)(null),
        [S, R] = (0, n.useState)(!1);
      ((0, n.useEffect)(() => {
        h(l.SPARK.light, l.SPARK.dark);
      }, []),
        (0, n.useEffect)(() => {
          const e = x.current;
          if (!s || !e || 'undefined' == typeof IntersectionObserver)
            return void R(s);
          const n = new IntersectionObserver(([e]) => R(!!e?.isIntersecting));
          return (n.observe(e), () => n.disconnect());
        }, [s]));
      const v = $(s && S, u);
      return (0, b.jsxs)(o.default, {
        testID: p,
        style: [{ position: 'relative', borderRadius: e }, f],
        children: [
          k,
          (0, b.jsx)(o.default, {
            ref: x,
            pointerEvents: 'none',
            'aria-hidden': !0,
            dataSet: { anbSpark: c, anbRun: s && S && !v ? '1' : '0' },
            style: {
              position: 'absolute',
              top: -t,
              left: -t,
              right: -t,
              bottom: -t,
              borderRadius: e + t,
              padding: t,
            },
          }),
        ],
      });
    }
  },
  410,
  [2, 92, 203, 196, 94, 17, 99, 411, 382, 414, 338],
);
