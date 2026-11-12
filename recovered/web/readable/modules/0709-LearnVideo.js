// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 709; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.LearnVideo = function ({ video: e, poster: n, width: l, height: h }) {
        const [v, f] = (0, t.useState)(void 0),
          [L, R] = (0, t.useState)('idle'),
          _ = (0, t.useRef)(!0),
          p = (0, t.useRef)(null);
        (0, t.useEffect)(
          () => (
            (_.current = !0),
            (0, o.savedLearnVideo)(e).then((t) => {
              _.current
                ? ((p.current = t), f(t ?? e), t && R('saved'))
                : t && URL.revokeObjectURL(t);
            }),
            () => {
              ((_.current = !1),
                p.current && URL.revokeObjectURL(p.current),
                (p.current = null));
            }
          ),
          [e],
        );
        const y = (t) => {
            (t && R({ progress: null }),
              (0, o.saveLearnVideo)(
                e,
                t
                  ? (e) => {
                      _.current && R({ progress: e });
                    }
                  : void 0,
              ).then((e) => {
                _.current && R(e ? 'saved' : t ? 'failed' : 'idle');
              }));
          },
          b = Math.max(120, h - u.LEARN_SAVE_ROW),
          j = Math.min(l, (9 * b) / 16);
        return (0, c.jsxs)(s.default, {
          style: { width: l, height: h, alignItems: 'center' },
          children: [
            (0, t.createElement)('video', {
              'data-testid': 'lesson-video',
              src: v,
              poster: n,
              controls: !0,
              autoPlay: !0,
              playsInline: !0,
              preload: 'metadata',
              onEnded: () => {
                v === e &&
                  (0, o.isLearnVideoSaved)(e).then((e) => {
                    e || y(!1);
                  });
              },
              style: {
                width: j,
                height: b,
                display: 'block',
                borderRadius: 24,
                background: '#000',
                objectFit: 'contain',
              },
            }),
            'undefined' == typeof caches
              ? (0, c.jsx)(s.default, { style: { height: u.LEARN_SAVE_ROW } })
              : (0, c.jsx)(u.LearnVideoSave, { state: L, onSave: () => y(!0) }),
          ],
        });
      }));
    var e,
      t = r(d[0]),
      n = r(d[1]),
      s = (e = n) && e.__esModule ? e : { default: e },
      o = r(d[2]),
      u = r(d[3]),
      c = r(d[4]);
  },
  709,
  [2, 99, 710, 712, 338],
);
