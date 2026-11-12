// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 827; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.Scanner = function ({
        active: e,
        onScan: n,
        onEditing: y,
        height: b = 220,
        plain: S = !1,
        onLive: R,
      }) {
        const { colors: j } = (0, o.useTheme)(),
          x = (0, t.useRef)(null),
          w = (0, t.useRef)(e);
        w.current = e;
        const E = (0, t.useRef)(n);
        E.current = n;
        const C = (0, t.useRef)(R);
        C.current = R;
        const [D, I] = (0, t.useState)(''),
          [B, T] = (0, t.useState)(0),
          [_, M] = (0, t.useState)(!1),
          [k, F] = (0, t.useState)(!1),
          [O, P] = (0, t.useState)([]),
          [A, H] = (0, t.useState)(''),
          L = (0, t.useRef)('');
        return (
          (0, t.useEffect)(() => {
            C.current?.(_ && !D);
          }, [_, D]),
          (0, t.useEffect)(() => (0, h.scanBeepOpen)(), []),
          (0, t.useEffect)(() => {
            if ((F(!1), !e || !_ || D)) return;
            const t = setTimeout(() => F(!0), 8e3);
            return () => clearTimeout(t);
          }, [e, _, D, B, A]),
          (0, t.useEffect)(() => {
            let e,
              t = !1;
            const n = x.current;
            if (
              (I(''),
              M(!1),
              !window.isSecureContext || !navigator.mediaDevices?.getUserMedia)
            )
              return void I('unsupported');
            const s = {
              ...(A
                ? { deviceId: { exact: A } }
                : { facingMode: { ideal: 'environment' } }),
              width: { ideal: 1280 },
              height: { ideal: 720 },
            };
            return (
              r(d[10])(d[9], d.paths, './BarcodeReader.web.ts')
                .then(({ BarcodeReader: e, DecodeHintType: c }) => {
                  if (t) return;
                  return new e(new Map([[c.TRY_HARDER, !0]]), {
                    delayBetweenScanAttempts: 300,
                    delayBetweenScanSuccess: 1e3,
                  }).decodeFromConstraints({ video: s, audio: !1 }, n, (e) => {
                    e && w.current && !t && E.current(e.getText());
                  });
                })
                .then(async (s) => {
                  if (!s) return;
                  if (t) return void s.stop();
                  e = s;
                  const c = n.srcObject;
                  ((L.current =
                    c?.getVideoTracks()[0]?.getSettings().deviceId || A),
                    M(!0));
                  try {
                    const e = await navigator.mediaDevices.enumerateDevices();
                    t ||
                      P(e.filter((e) => 'videoinput' === e.kind && e.deviceId));
                  } catch {}
                })
                .catch((e) => {
                  t || I((0, l.cameraFailure)(e));
                }),
              () => {
                ((t = !0), e?.stop());
                const s = n.srcObject;
                s?.getTracks().forEach((e) => e.stop());
              }
            );
          }, [B, A]),
          (0, p.jsxs)(s.default, {
            style: { gap: 10 },
            children: [
              (0, p.jsxs)(s.default, {
                style: {
                  height: b,
                  borderRadius: 18,
                  overflow: 'hidden',
                  backgroundColor: '#0b0b0d',
                },
                children: [
                  (0, p.jsx)('video', {
                    ref: x,
                    playsInline: !0,
                    muted: !0,
                    style: {
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      opacity: e ? 1 : 0.45,
                    },
                  }),
                  !D &&
                    !S &&
                    (0, p.jsx)(s.default, {
                      pointerEvents: 'none',
                      style: {
                        position: 'absolute',
                        left: '6%',
                        right: '6%',
                        top: '22%',
                        bottom: '22%',
                        borderWidth: 2,
                        borderColor: '#ffffffaa',
                        borderRadius: 12,
                      },
                    }),
                  !!D &&
                    (0, p.jsxs)(s.default, {
                      style: {
                        position: 'absolute',
                        inset: 12,
                        gap: 10,
                        backgroundColor: j.surface,
                        padding: 16,
                        borderRadius: 12,
                      },
                      children: [
                        (0, p.jsx)(c.Copy, {
                          accessibilityRole: 'alert',
                          testID: 'scan-camera-error',
                          children: v(D),
                        }),
                        (0, p.jsx)(c.Button, {
                          onPress: () => {
                            (H(''), T((e) => e + 1));
                          },
                          children: u.fa.retry,
                        }),
                      ],
                    }),
                ],
              }),
              !D &&
                (0, p.jsx)(c.Copy, {
                  accessibilityLiveRegion: 'polite',
                  testID: 'scan-status',
                  style: { color: j.muted, fontSize: 12 },
                  children: _
                    ? e
                      ? k
                        ? u.fa.scanNoResult
                        : u.fa.scanSearching
                      : u.fa.scanDetected
                    : u.fa.cameraStarting,
                }),
              O.length > 1 &&
                e &&
                (0, p.jsx)(c.Button, {
                  secondary: !0,
                  onPress: function () {
                    const e = O.findIndex((e) => e.deviceId === L.current);
                    H(O[(e + 1) % O.length].deviceId);
                  },
                  children: u.fa.switchCamera,
                }),
              !!D &&
                !S &&
                (0, p.jsx)(f.ManualCode, {
                  onScan: (e) => E.current(e),
                  onEditing: y,
                }),
            ],
          })
        );
      }));
    var e,
      t = r(d[0]),
      n = r(d[1]),
      s = (e = n) && e.__esModule ? e : { default: e },
      c = r(d[2]),
      o = r(d[3]),
      u = r(d[4]),
      f = r(d[5]),
      l = r(d[6]),
      h = r(d[7]),
      p = r(d[8]);
    const v = (e) =>
      ({
        denied: u.fa.cameraDenied,
        nocamera: u.fa.cameraNotFound,
        busy: u.fa.cameraBusy,
        unsupported: u.fa.cameraUnsupported,
        other: u.fa.cameraError,
      })[e];
  },
  827,
  {
    0: 2,
    1: 99,
    2: 407,
    3: 382,
    4: 492,
    5: 828,
    6: 829,
    7: 830,
    8: 338,
    9: 999,
    10: 336,
    paths: {
      999: '/_expo/static/js/web/BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js',
    },
  },
);
