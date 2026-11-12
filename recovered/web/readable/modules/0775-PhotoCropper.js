// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 775; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (_g, r, i, _a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.PhotoCropper = function ({
        source: e,
        name: z = '',
        aspect: L = 1,
        outputWidth: O = 640,
        maxChars: k = 2e5,
        minSourceSide: E = 300,
        onSave: _,
        onCancel: I,
      }) {
        const { colors: D } = (0, b.useTheme)(),
          T = (0, h.useSafeAreaInsets)(),
          A = (0, x.useDesktop)(),
          B = (0, l.default)(),
          N = Math.max(1, Math.min(340, B.width - T.left - T.right - 40)),
          [W, X] = (0, t.useState)(null),
          [F, G] = (0, t.useState)(j),
          [K, Z] = (0, t.useState)(!0),
          [Y, J] = (0, t.useState)(!1),
          [H, U] = (0, t.useState)(''),
          [q, V] = (0, t.useState)(''),
          [Q, $] = (0, t.useState)(!1),
          [ee, te] = (0, t.useState)(!1),
          [oe, re] = (0, t.useState)(A),
          [ne, ae] = (0, t.useState)(!1),
          [se, ie] = (0, t.useState)(''),
          ce = (0, t.useRef)(null),
          le = (0, t.useRef)(0),
          de = (0, t.useRef)(!0),
          ue = (0, t.useRef)(!1),
          pe = (0, t.useRef)({ working: W, pose: F, frame: N, busy: K });
        function he(e) {
          const t = pe.current;
          if (!t.working || t.busy || ue.current) return;
          const o = (0, g.clampCrop)(t.working, e, L);
          ((pe.current.pose = o), G(o), $(!1));
        }
        function fe(e) {
          const t = pe.current.pose;
          he({ ...t, zoom: Math.round(100 * (t.zoom + e)) / 100 });
        }
        ((pe.current = { working: W, pose: F, frame: N, busy: K }),
          (0, t.useEffect)(
            () => (
              (de.current = !0),
              () => {
                de.current = !1;
              }
            ),
            [],
          ),
          (0, t.useEffect)(() => {
            let t = !0;
            return (
              Z(!0),
              X(null),
              V(''),
              $(!1),
              U(''),
              (async function () {
                try {
                  if (
                    !Number.isFinite(e.width) ||
                    !Number.isFinite(e.height) ||
                    e.width <= 0 ||
                    e.height <= 0
                  )
                    throw Error('failed');
                  if (Math.min(e.width, e.height) < E) throw Error('tooSmall');
                  const o = Math.max(e.width, e.height),
                    n = await (0, f.manipulateAsync)(
                      e.uri,
                      o > 1600
                        ? [
                            {
                              resize:
                                e.width >= e.height
                                  ? { width: 1600 }
                                  : { height: 1600 },
                            },
                          ]
                        : [],
                      { compress: 0.85, format: f.SaveFormat.JPEG },
                    );
                  t && ((ce.current = n), (le.current = 0), G(j), ie(''), X(n));
                } catch (e) {
                  t &&
                    U(
                      (0, y.L)(
                        e instanceof Error && 'tooSmall' === e.message
                          ? R.tooSmall
                          : R.failed,
                      ),
                    );
                } finally {
                  t && Z(!1);
                }
              })(),
              () => {
                t = !1;
              }
            );
          }, [e.uri, e.width, e.height, E]),
          (0, t.useEffect)(() => {
            const e = (e) => {
              e.ctrlKey ||
                e.metaKey ||
                e.altKey ||
                'INPUT' === e.target?.tagName ||
                (('+' !== e.key && '=' !== e.key) ||
                  (e.preventDefault(), fe(0.1)),
                ('-' !== e.key && '_' !== e.key) ||
                  (e.preventDefault(), fe(-0.1)));
            };
            return (
              globalThis.addEventListener('keydown', e),
              () => globalThis.removeEventListener('keydown', e)
            );
          }, []));
        const me = (0, t.useRef)({ pose: j, dx: 0, dy: 0, pinch: null }),
          ye = (0, t.useMemo)(
            () =>
              a.default.create({
                onStartShouldSetPanResponder: () =>
                  !!pe.current.working && !pe.current.busy,
                onMoveShouldSetPanResponder: () =>
                  !!pe.current.working && !pe.current.busy,
                onPanResponderGrant: (e, t) => {
                  (ae(!0),
                    (me.current = {
                      pose: pe.current.pose,
                      dx: t.dx,
                      dy: t.dy,
                      pinch: M(e),
                    }));
                },
                onPanResponderMove: (e, t) => {
                  const o = pe.current,
                    n = me.current,
                    a = M(e);
                  if (!!a == !!n.pinch)
                    if (a && n.pinch && n.pinch.distance > 0) {
                      he({
                        zoom: Math.max(
                          g.MIN_CROP_ZOOM,
                          Math.min(
                            g.MAX_CROP_ZOOM,
                            (n.pose.zoom * a.distance) / n.pinch.distance,
                          ),
                        ),
                        x: n.pose.x + (a.x - n.pinch.x) / o.frame,
                        y: n.pose.y + (a.y - n.pinch.y) / o.frame,
                      });
                    } else
                      he({
                        ...n.pose,
                        x: n.pose.x + (t.dx - n.dx) / o.frame,
                        y: n.pose.y + (t.dy - n.dy) / o.frame,
                      });
                  else
                    me.current = { pose: o.pose, dx: t.dx, dy: t.dy, pinch: a };
                },
                onPanResponderRelease: () => ae(!1),
                onPanResponderTerminate: () => ae(!1),
                onPanResponderTerminationRequest: () => !1,
              }),
            [],
          ),
          ge = (0, t.useRef)(null),
          xe = !!W && !1;
        async function be(e, t) {
          const o = (0, g.cropLayout)(e, t, L, O),
            n = { resize: o.output };
          return o.padded
            ? {
                uri: e.uri,
                actions: [
                  { crop: o.crop },
                  { resize: o.resize },
                  {
                    extent: {
                      backgroundColor: g.CROP_BACKGROUND,
                      originX: -o.offset.x,
                      originY: -o.offset.y,
                      ...o.output,
                    },
                  },
                ],
              }
            : { uri: e.uri, actions: [{ crop: o.crop }, n] };
        }
        async function we(e) {
          if (e)
            try {
              const { releaseCapture: t } = await r(d[21])(d[20], d.paths);
              t(e);
            } catch {}
        }
        (0, t.useEffect)(() => {
          if (($(!1), te(!!W && !K), !W || K)) return;
          if (xe) return;
          let e = !0;
          const t = setTimeout(() => {
            let t;
            be(W, F)
              .then(
                (e) => (
                  (t = e.captured),
                  (0, f.manipulateAsync)(e.uri, e.actions, {
                    compress: 0.7,
                    format: f.SaveFormat.JPEG,
                    base64: !0,
                  })
                ),
              )
              .then((t) => {
                if (!t.base64) throw Error('failed');
                e && (V(P + t.base64), $(!0));
              })
              .catch(() => {
                e && U((0, y.L)(R.failed));
              })
              .finally(() => {
                (we(t), e && te(!1));
              });
          }, 150);
          return () => {
            ((e = !1), clearTimeout(t));
          };
        }, [W, F, K, L, O, xe]);
        const Se = W ? (N * F.zoom) / Math.min(W.width, W.height * L) : 1,
          Ce = oe ? 588 : Math.min(438, B.width - T.left - T.right - 32),
          ve = () => {
            Y || ((de.current = !1), I());
          };
        return (0, v.jsx)(u.PageModal, {
          visible: !0,
          animationType: 'slide',
          presentationStyle: 'fullScreen',
          onRequestClose: ve,
          children: (0, v.jsxs)(c.default, {
            testID: 'photo-cropper',
            style: {
              flex: 1,
              backgroundColor: D.bg,
              paddingTop: T.top + 12,
              paddingBottom: T.bottom + 12,
              paddingLeft: T.left + 16,
              paddingRight: T.right + 16,
            },
            children: [
              (0, v.jsxs)(p.ScrollView, {
                testID: 'photo-cropper-scroll',
                style: { flex: 1 },
                scrollEnabled: !ne,
                persistentScrollbar: !0,
                nestedScrollEnabled: !0,
                keyboardShouldPersistTaps: 'handled',
                automaticallyAdjustKeyboardInsets: !0,
                contentContainerStyle: {
                  alignItems: 'center',
                  gap: 12,
                  paddingBottom: 24,
                },
                children: [
                  (0, v.jsx)(w.Copy, {
                    accessibilityRole: 'header',
                    style: w.common.title,
                    children: z || (0, y.L)(R.cropTitle),
                  }),
                  (0, v.jsx)(w.Copy, {
                    style: { maxWidth: 620, color: D.muted },
                    children: (0, y.L)(R.cropHint),
                  }),
                  (0, v.jsxs)(c.default, {
                    ...ye.panHandlers,
                    ...C.noSwipe,
                    testID: 'photo-cropper-frame',
                    style: [
                      {
                        width: N,
                        height: N / L,
                        borderRadius: 16,
                        overflow: 'hidden',
                        backgroundColor: D.soft,
                        direction: 'ltr',
                      },
                      { touchAction: 'none', cursor: 'grab' },
                    ],
                    children: [
                      W &&
                        (0, v.jsx)(c.default, {
                          ref: ge,
                          collapsable: !1,
                          pointerEvents: 'none',
                          style: {
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            width: N,
                            height: N / L,
                            overflow: 'hidden',
                            backgroundColor: g.CROP_BACKGROUND,
                          },
                          children: (0, v.jsx)(c.default, {
                            style: {
                              position: 'absolute',
                              width: W.width * Se,
                              height: W.height * Se,
                              left: (N - W.width * Se) / 2 + F.x * N,
                              top: (N / L - W.height * Se) / 2 + F.y * N,
                            },
                            children: (0, v.jsx)(n.default, {
                              accessible: !1,
                              source: { uri: W.uri },
                              resizeMode: 'stretch',
                              onLoad: () => ie(W.uri),
                              style: { width: '100%', height: '100%' },
                            }),
                          }),
                        }),
                      (0, v.jsx)(c.default, {
                        pointerEvents: 'none',
                        style: {
                          position: 'absolute',
                          inset: 0,
                          borderWidth: 2,
                          borderRadius: 16,
                          borderColor: D.accent,
                        },
                      }),
                    ],
                  }),
                  (0, v.jsxs)(c.default, {
                    style: { width: '100%', maxWidth: 620, gap: 8 },
                    children: [
                      (0, v.jsxs)(w.Copy, {
                        children: [
                          (0, y.L)(R.zoom),
                          '\u060c ',
                          (0, y.localDigits)(F.zoom.toFixed(1)),
                          '\xd7',
                        ],
                      }),
                      (0, v.jsxs)(c.default, {
                        testID: 'photo-cropper-zoom-row',
                        style: {
                          flexDirection: 'row',
                          direction: 'ltr',
                          alignItems: 'center',
                          gap: 8,
                        },
                        children: [
                          (0, v.jsx)(w.Button, {
                            testID: 'photo-cropper-zoom-out',
                            secondary: !0,
                            disabled:
                              K || !W || F.zoom <= g.MIN_CROP_ZOOM + 1e-6,
                            onPress: () => fe(-0.1),
                            children: (0, y.L)('\u2212'),
                          }),
                          (0, t.createElement)('input', {
                            type: 'range',
                            min: g.MIN_CROP_ZOOM,
                            max: g.MAX_CROP_ZOOM,
                            step: 0.01,
                            value: F.zoom,
                            disabled: K || !W,
                            'aria-label': (0, y.L)(R.zoom),
                            onChange: (e) =>
                              he({
                                ...pe.current.pose,
                                zoom: Number(e.target.value),
                              }),
                            style: {
                              flex: 1,
                              minWidth: 0,
                              accentColor: D.accent,
                            },
                          }),
                          (0, v.jsx)(w.Button, {
                            testID: 'photo-cropper-zoom-in',
                            secondary: !0,
                            disabled: K || !W || F.zoom >= g.MAX_CROP_ZOOM,
                            onPress: () => fe(0.1),
                            children: (0, y.L)('+'),
                          }),
                          (0, v.jsx)(w.Button, {
                            testID: 'photo-cropper-rotate',
                            secondary: !0,
                            disabled: K || !W,
                            onPress: async function () {
                              if (ue.current || K || !ce.current || !W) return;
                              ((ue.current = !0), Z(!0), $(!1), U(''));
                              const e = (le.current + 1) % 4,
                                t = pe.current.pose;
                              try {
                                const o =
                                  0 === e
                                    ? ce.current
                                    : await (0, f.manipulateAsync)(
                                        ce.current.uri,
                                        [{ rotate: 90 * e }],
                                        {
                                          compress: 1,
                                          format: f.SaveFormat.JPEG,
                                        },
                                      );
                                de.current &&
                                  ((le.current = e),
                                  ie(''),
                                  X(o),
                                  G(
                                    (0, g.clampCrop)(
                                      (0, g.rotatedSize)(W, 1),
                                      { zoom: t.zoom, x: -t.y, y: t.x },
                                      L,
                                    ),
                                  ));
                              } catch {
                                de.current && U((0, y.L)(R.failed));
                              } finally {
                                ((ue.current = !1), de.current && Z(!1));
                              }
                            },
                            children: (0, y.L)(R.rotate),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (K || ee) &&
                    (0, v.jsxs)(c.default, {
                      accessibilityLiveRegion: 'polite',
                      style: w.common.row,
                      children: [
                        (0, v.jsx)(o.default, { color: D.accent }),
                        (0, v.jsx)(w.Copy, {
                          children: (0, y.L)(R.processing),
                        }),
                      ],
                    }),
                  !!H &&
                    (0, v.jsx)(w.Copy, {
                      accessibilityRole: 'alert',
                      style: { color: D.danger },
                      children: H,
                    }),
                  !!q &&
                    640 !== O &&
                    (0, v.jsx)(n.default, {
                      source: { uri: q },
                      resizeMode: 'contain',
                      style: { width: N, height: N / L },
                    }),
                  !!q &&
                    640 === O &&
                    (0, v.jsxs)(c.default, {
                      style: { width: '100%', maxWidth: 588, gap: 12 },
                      children: [
                        (0, v.jsx)(w.Segmented, {
                          items: [
                            {
                              value: !1,
                              label: (0, y.L)(
                                '\u0645\u0648\u0628\u0627\u06cc\u0644',
                              ),
                              testID: 'photo-preview-phone',
                            },
                            {
                              value: !0,
                              label: (0, y.L)('\u0648\u0628'),
                              testID: 'photo-preview-web',
                            },
                          ],
                          value: oe,
                          onChange: re,
                        }),
                        (0, v.jsx)(p.ScrollView, {
                          horizontal: !0,
                          ...C.noSwipe,
                          contentContainerStyle: { paddingBottom: 8 },
                          children: (0, v.jsxs)(c.default, {
                            style: { width: Ce, gap: 12 },
                            children: [
                              (0, v.jsxs)(c.default, {
                                style: { width: oe ? 224 : 0.48 * Ce, gap: 6 },
                                children: [
                                  (0, v.jsx)(w.Copy, {
                                    children: (0, y.L)(R.previewCard),
                                  }),
                                  (0, v.jsx)(c.default, {
                                    style: {
                                      padding: 8,
                                      borderRadius: 18,
                                      borderWidth: 1,
                                      borderColor: D.line,
                                      backgroundColor: D.surface,
                                    },
                                    children: (0, v.jsx)(S.ProductPhoto, {
                                      product: { name: z, photo: q },
                                      height: oe ? 150 : 112,
                                    }),
                                  }),
                                ],
                              }),
                              (0, v.jsx)(w.Copy, {
                                children: (0, y.L)(R.previewPage),
                              }),
                              (0, v.jsx)(S.ProductPhoto, {
                                product: { name: z, photo: q },
                                height: 150,
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                ],
              }),
              (0, v.jsxs)(c.default, {
                testID: 'photo-cropper-keys',
                style: {
                  width: '100%',
                  maxWidth: 620,
                  alignSelf: 'center',
                  gap: 8,
                  paddingTop: 12,
                  borderTopWidth: s.default.hairlineWidth,
                  borderTopColor: D.line,
                  backgroundColor: D.bg,
                },
                children: [
                  (0, v.jsx)(w.Button, {
                    testID: 'photo-cropper-save',
                    disabled: K || !W || !Q,
                    onPress: async function () {
                      if (ue.current || K || !W || !Q) return;
                      let e;
                      ((ue.current = !0), Z(!0), J(!0), U(''));
                      try {
                        const t = await be(W, F);
                        if (((e = t.captured), !de.current)) return;
                        for (const e of [
                          0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1,
                        ]) {
                          const o = await (0, f.manipulateAsync)(
                            t.uri,
                            t.actions,
                            {
                              compress: e,
                              format: f.SaveFormat.JPEG,
                              base64: !0,
                            },
                          );
                          if (!de.current) return;
                          const n = o.base64 ? P + o.base64 : '';
                          if (n && n.length <= k) return void (await _(n));
                        }
                        throw Error('failed');
                      } catch {
                        de.current && U((0, y.L)(R.failed));
                      } finally {
                        (we(e),
                          (ue.current = !1),
                          de.current && (Z(!1), J(!1)));
                      }
                    },
                    children: (0, y.L)(R.save),
                  }),
                  (0, v.jsx)(w.Button, {
                    testID: 'photo-cropper-cancel',
                    secondary: !0,
                    disabled: Y,
                    onPress: ve,
                    children: (0, y.L)(R.cancel),
                  }),
                ],
              }),
            ],
          }),
        });
      }));
    var t = r(d[0]),
      o = e(r(d[1])),
      n = e(r(d[2])),
      a = e(r(d[3]));
    r(d[4]);
    var s = e(r(d[5])),
      c = e(r(d[6])),
      l = e(r(d[7])),
      u = r(d[8]),
      p = r(d[9]),
      h = r(d[10]),
      f = r(d[11]),
      y = r(d[12]),
      g = r(d[13]),
      x = r(d[14]),
      b = r(d[15]),
      w = r(d[16]),
      S = r(d[17]),
      C = r(d[18]),
      v = r(d[19]);
    const j = { zoom: 1, x: 0, y: 0 },
      P = 'data:image/jpeg;base64,',
      R = {
        cropTitle:
          '\u062a\u0646\u0638\u06cc\u0645 \u0639\u06a9\u0633 \u06a9\u0627\u0644\u0627',
        cropHint:
          '\u0639\u06a9\u0633 \u0631\u0627 \u0628\u06a9\u0634\u06cc\u062f \u0648 \u0628\u0627 \u062f\u0648 \u0627\u0646\u06af\u0634\u062a \u06cc\u0627 \u0646\u0648\u0627\u0631 \u067e\u0627\u06cc\u06cc\u0646 \u0628\u0632\u0631\u06af \u0648 \u06a9\u0648\u0686\u06a9 \u06a9\u0646\u06cc\u062f \u062a\u0627 \u06a9\u0627\u0644\u0627 \u0648\u0633\u0637 \u06a9\u0627\u062f\u0631 \u0628\u0627\u0634\u062f.',
        zoom: '\u0628\u0632\u0631\u06af\u200c\u0646\u0645\u0627\u06cc\u06cc',
        previewCard:
          '\u062f\u0631 \u0641\u0647\u0631\u0633\u062a \u06a9\u0627\u0644\u0627\u0647\u0627',
        previewPage:
          '\u062f\u0631 \u0635\u0641\u062d\u0647\u0654 \u06a9\u0627\u0644\u0627',
        save: '\u0630\u062e\u06cc\u0631\u0647\u0654 \u0639\u06a9\u0633',
        cancel: '\u0627\u0646\u0635\u0631\u0627\u0641',
        rotate: '\u0686\u0631\u062e\u0634',
        processing:
          '\u062f\u0631 \u062d\u0627\u0644 \u0622\u0645\u0627\u062f\u0647\u200c\u0633\u0627\u0632\u06cc \u0639\u06a9\u0633\u2026',
        tooSmall:
          '\u0627\u06cc\u0646 \u0639\u06a9\u0633 \u062e\u06cc\u0644\u06cc \u06a9\u0648\u0686\u06a9 \u0627\u0633\u062a\u061b \u0639\u06a9\u0633 \u0628\u0632\u0631\u06af\u200c\u062a\u0631\u06cc \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f.',
        failed:
          '\u0639\u06a9\u0633 \u0622\u0645\u0627\u062f\u0647 \u0646\u0634\u062f\u061b \u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646\u06cc\u062f \u06cc\u0627 \u0639\u06a9\u0633 \u062f\u06cc\u06af\u0631\u06cc \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f.',
      };
    function M(e) {
      const t = e.nativeEvent.touches;
      if (!t || t.length < 2) return null;
      const [o, n] = t;
      return {
        x: (o.pageX + n.pageX) / 2,
        y: (o.pageY + n.pageY) / 2,
        distance: Math.hypot(o.pageX - n.pageX, o.pageY - n.pageY),
      };
    }
  },
  775,
  {
    0: 2,
    1: 217,
    2: 168,
    3: 212,
    4: 94,
    5: 17,
    6: 99,
    7: 257,
    8: 515,
    9: 380,
    10: 342,
    11: 639,
    12: 311,
    13: 776,
    14: 481,
    15: 382,
    16: 407,
    17: 628,
    18: 384,
    19: 338,
    20: 997,
    21: 336,
    paths: {
      997: '/_expo/static/js/web/index-9276617a829a3984ed22a1c59bc256bb.js',
    },
  },
);
