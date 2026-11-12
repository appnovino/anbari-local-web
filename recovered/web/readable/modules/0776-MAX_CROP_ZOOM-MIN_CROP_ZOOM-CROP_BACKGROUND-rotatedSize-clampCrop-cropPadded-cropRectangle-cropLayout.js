// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 776; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'MAX_CROP_ZOOM', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      Object.defineProperty(e, 'MIN_CROP_ZOOM', {
        enumerable: !0,
        get: function () {
          return h;
        },
      }),
      Object.defineProperty(e, 'CROP_BACKGROUND', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      (e.rotatedSize = function (t, h) {
        return 1 === Math.abs(h % 2)
          ? { width: t.height, height: t.width }
          : { ...t };
      }),
      (e.clampCrop = M),
      (e.cropPadded = f),
      (e.cropRectangle = p),
      (e.cropLayout = function (t, h, n = 1, o = 640) {
        const u = M(t, h, n),
          c = { width: o, height: Math.round(o / n) };
        if (!f(t, u, n))
          return {
            padded: !1,
            crop: p(t, u, n),
            resize: { ...c },
            offset: { x: 0, y: 0 },
            output: c,
          };
        return { padded: !0, ...s(t, u, n, c.width, c.height), output: c };
      }));
    const t = 8,
      h = 0.5,
      n = '#ffffff',
      o = (t, h, n) => Math.max(h, Math.min(n, t)),
      u = 1e-9;
    const c = (t, h, n) => h / Math.min(t.width, t.height * n);
    function M(n, u, M = 1) {
      const f = o(Number.isFinite(u.zoom) ? u.zoom : 1, h, t),
        s = c(n, f, M),
        p = Math.abs(n.width * s - 1) / 2,
        w = Math.abs(n.height * s - 1 / M) / 2;
      return { zoom: f, x: o(u.x || 0, -p, p), y: o(u.y || 0, -w, w) };
    }
    function f(t, h, n = 1) {
      const o = M(t, h, n),
        f = c(t, o.zoom, n);
      return t.width * f < 0.999999999 || t.height * f < 1 / n - u;
    }
    function s(t, h, n, u, M) {
      const f = c(t, h.zoom, n),
        s = 1 / n,
        p = 0.5 + h.x - (t.width * f) / 2,
        w = s / 2 + h.y - (t.height * f) / 2,
        O = Math.max(0, p),
        b = Math.min(1, p + t.width * f),
        x = Math.max(0, w),
        y = Math.min(s, w + t.height * f),
        l = o(Math.round((O - p) / f), 0, t.width - 1),
        z = o(Math.round((x - w) / f), 0, t.height - 1),
        _ = {
          originX: l,
          originY: z,
          width: o(Math.round((b - p) / f) - l, 1, t.width - l),
          height: o(Math.round((y - w) / f) - z, 1, t.height - z),
        },
        P = u,
        C = M / s,
        R = o(Math.round(O * P), 0, u - 1),
        j = o(Math.round(x * C), 0, M - 1);
      return {
        crop: _,
        offset: { x: R, y: j },
        resize: {
          width: o(Math.round(b * P) - R, 1, u - R),
          height: o(Math.round(y * C) - j, 1, M - j),
        },
      };
    }
    function p(t, h, n = 1) {
      const u = M(t, h, n),
        p = c(t, u.zoom, n);
      if (f(t, u, n)) return s(t, u, n, 1, 1).crop;
      const w = Math.max(1, Math.floor(1 / p)),
        O = Math.max(1, Math.floor(1 / (p * n)));
      return {
        originX: o(Math.round(t.width / 2 - u.x / p - w / 2), 0, t.width - w),
        originY: o(Math.round(t.height / 2 - u.y / p - O / 2), 0, t.height - O),
        width: w,
        height: O,
      };
    }
  },
  776,
  [],
);
