// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 543; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.onAppRestart = function (e) {
        return (
          k.add(e),
          () => {
            k.delete(e);
          }
        );
      }),
      (_e.restartApp = w),
      (_e.DeviceLimitCard = C),
      (_e.DeviceLimitSheet = function () {
        const t = (0, l.useSafeAreaInsets)(),
          [n, u] = (0, e.useState)(null),
          [h, x] = (0, e.useState)(''),
          { colors: j } = (0, y.useTheme)();
        if (
          ((0, e.useEffect)(
            () =>
              (0, f.onDeviceNotice)((e) => {
                if ('session_ended' === e.code) {
                  if (I) return;
                  ((I = !0),
                    (0, f.storeToken)(null),
                    (0, v.forgetWebPushHere)());
                }
                (x(''), u(e));
              }),
            [],
          ),
          !n)
        )
          return null;
        const k = 'session_ended' === n.code,
          S = () => {
            (u(null), f.activeUser && w());
          },
          T = k ? S : () => u(null);
        return (0, b.jsx)(i.TapModal, {
          visible: !0,
          transparent: !0,
          animationType: 'fade',
          onRequestClose: T,
          children: (0, b.jsxs)(o.default, {
            style: {
              flex: 1,
              backgroundColor: '#08090bbb',
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: t.top + 16,
              paddingBottom: t.bottom + 16,
              paddingHorizontal: 16,
            },
            children: [
              (0, b.jsx)(p.Backdrop, {
                testID: 'device-limit-backdrop',
                onClose: T,
              }),
              (0, b.jsx)(o.default, {
                style: { width: '100%', maxWidth: 460, maxHeight: '100%' },
                children: (0, b.jsxs)(s.ScrollView, {
                  bounces: !1,
                  contentContainerStyle: { gap: 8 },
                  keyboardShouldPersistTaps: 'handled',
                  children: [
                    (0, b.jsx)(C, {
                      notice: n,
                      onClose: T,
                      onTakeover: async function (e, t) {
                        x('');
                        try {
                          const n = await (0, f.request)(
                            '/v1/auth/devices/takeover',
                            'POST',
                            { ticket: t, sessionId: e },
                          );
                          (await (0, f.storeToken)(n.token || null), await w());
                        } catch (e) {
                          x(
                            e instanceof Error &&
                              'takeover_expired' === e.message
                              ? (0, d.L)(
                                  '\u0645\u0647\u0644\u062a \u0627\u06cc\u0646 \u06a9\u0627\u0631 (\u06f1\u06f0 \u062f\u0642\u06cc\u0642\u0647) \u062a\u0645\u0627\u0645 \u0634\u062f\u0647\u061b \u062f\u0648\u0628\u0627\u0631\u0647 \u0648\u0627\u0631\u062f \u0634\u0648\u06cc\u062f.',
                                )
                              : (0, d.L)(
                                  '\u062e\u0631\u0648\u062c \u0622\u0646 \u062f\u0633\u062a\u06af\u0627\u0647 \u0627\u0646\u062c\u0627\u0645 \u0646\u0634\u062f\u061b \u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646\u06cc\u062f.',
                                ),
                          );
                        }
                      },
                      onSignInAgain: S,
                    }),
                    !!h &&
                      (0, b.jsx)(c.Copy, {
                        accessibilityRole: 'alert',
                        style: {
                          color: j.danger,
                          backgroundColor: j.surface,
                          borderRadius: 12,
                          padding: 12,
                        },
                        children: h,
                      }),
                  ],
                }),
              }),
            ],
          }),
        });
      }),
      (_e.ReplacedDevicePopup = function ({
        info: e,
        owner: t,
        onUpgrade: n,
        onClose: p,
      }) {
        const h = (0, l.useSafeAreaInsets)(),
          { colors: f } = (0, y.useTheme)(),
          j = (0, x.replacedView)(e, t);
        return j
          ? (0, b.jsx)(i.TapModal, {
              visible: !0,
              transparent: !0,
              animationType: 'fade',
              onRequestClose: () => {},
              children: (0, b.jsx)(o.default, {
                testID: 'replaced-popup',
                style: {
                  flex: 1,
                  backgroundColor: '#08090bbb',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: h.top + 16,
                  paddingBottom: h.bottom + 16,
                  paddingHorizontal: 16,
                },
                children: (0, b.jsx)(o.default, {
                  style: { width: '100%', maxWidth: 460, maxHeight: '100%' },
                  children: (0, b.jsx)(s.ScrollView, {
                    bounces: !1,
                    contentContainerStyle: { gap: 8 },
                    children: (0, b.jsxs)(c.Card, {
                      style: { gap: 12 },
                      children: [
                        (0, b.jsxs)(o.default, {
                          style: c.common.row,
                          children: [
                            (0, b.jsx)(u.Icon, {
                              name: 'phone',
                              size: 26,
                              color: f.accent,
                            }),
                            (0, b.jsx)(c.Copy, {
                              accessibilityRole: 'header',
                              style: [c.common.title, { flex: 1 }],
                              children: j.title,
                            }),
                          ],
                        }),
                        (0, b.jsx)(c.Copy, {
                          testID: 'replaced-text',
                          style: { lineHeight: 26 },
                          children: j.text,
                        }),
                        j.devices.map((e, t) =>
                          (0, b.jsx)(
                            c.Copy,
                            {
                              style: {
                                fontSize: 13,
                                lineHeight: 22,
                                color: f.muted,
                              },
                              children: (0, d.L)(
                                '\u062f\u0633\u062a\u06af\u0627\u0647\u06cc \u06a9\u0647 \u062e\u0627\u0631\u062c \u0634\u062f: {device}',
                                { device: e },
                              ),
                            },
                            t,
                          ),
                        ),
                        j.upgrade &&
                          (0, b.jsx)(c.Button, {
                            testID: 'replaced-upgrade',
                            onPress: () => {
                              (p(), n());
                            },
                            children: (0, d.L)(
                              '\u0627\u0631\u062a\u0642\u0627 \u0628\u0647 \u067e\u0644\u0627\u0633',
                            ),
                          }),
                        (0, b.jsx)(c.Button, {
                          testID: 'replaced-ok',
                          secondary: j.upgrade,
                          onPress: p,
                          children: (0, d.L)('\u0628\u0627\u0634\u0647'),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          : null;
      }));
    var e = r(_d[0]);
    (r(_d[1]), r(_d[2]));
    var t,
      n = r(_d[3]),
      o = (t = n) && t.__esModule ? t : { default: t },
      i = r(_d[4]),
      s = r(_d[5]),
      l =
        ((function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          (e &&
            Object.keys(e).forEach(function (n) {
              var o = Object.getOwnPropertyDescriptor(e, n);
              Object.defineProperty(
                t,
                n,
                o.get
                  ? o
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[n];
                      },
                    },
              );
            }),
            (t.default = e));
        })(r(_d[6])),
        r(_d[7])),
      d = r(_d[8]),
      c = r(_d[9]),
      u = r(_d[10]),
      p = r(_d[11]),
      h = r(_d[12]),
      y = r(_d[13]),
      f = r(_d[14]),
      x = r(_d[15]),
      j = r(_d[16]),
      v = r(_d[17]),
      b = r(_d[18]);
    const k = new Set();
    async function w() {
      'undefined' != typeof window && window.location.reload();
    }
    function C({
      notice: e,
      onClose: t,
      onTakeover: n,
      onSignInAgain: i,
      now: s,
    }) {
      const { colors: l } = (0, y.useTheme)(),
        [p, f] = (0, h.useConfirm)();
      if ('session_ended' === e.code) {
        const n = (0, x.sessionEndedText)(
          e.details.reason,
          e.details.limits,
          e.details,
        );
        return (0, b.jsxs)(c.Card, {
          testID: 'session-ended-card',
          style: { gap: 12 },
          children: [
            (0, b.jsxs)(o.default, {
              style: c.common.row,
              children: [
                (0, b.jsx)(u.Icon, { name: 'lock', size: 26, color: l.danger }),
                (0, b.jsx)(c.Copy, {
                  accessibilityRole: 'header',
                  style: [c.common.title, { flex: 1 }],
                  children: n.title,
                }),
              ],
            }),
            (0, b.jsx)(c.Copy, { style: { lineHeight: 26 }, children: n.why }),
            (0, b.jsx)(c.Button, {
              testID: 'session-ended-again',
              onPress: i || t,
              children: (0, d.L)(
                '\u0648\u0631\u0648\u062f \u062f\u0648\u0628\u0627\u0631\u0647',
              ),
            }),
          ],
        });
      }
      const v = { ...e.details, code: e.code },
        k = (0, x.deviceLimitView)(v, s),
        w = 'web' === v.kind ? 'web' : 'phone',
        C = (v.sessions || []).filter((e) => !e.kind || e.kind === w);
      return (0, b.jsxs)(c.Card, {
        testID: 'device-limit-card',
        style: { gap: 12 },
        children: [
          (0, b.jsxs)(o.default, {
            style: c.common.row,
            children: [
              (0, b.jsx)(u.Icon, {
                name:
                  'device_limit_plan' === e.code
                    ? 'user'
                    : 'web' === w
                      ? 'browser'
                      : 'phone',
                size: 26,
                color: l.accent,
              }),
              (0, b.jsx)(c.Copy, {
                accessibilityRole: 'header',
                style: [c.common.title, { flex: 1 }],
                children: k.title,
              }),
            ],
          }),
          (0, b.jsx)(c.Copy, {
            testID: 'device-limit-why',
            style: { lineHeight: 26 },
            children: k.why,
          }),
          C.map((e) =>
            (0, b.jsxs)(
              o.default,
              {
                testID: 'device-limit-session',
                style: [
                  c.common.row,
                  { backgroundColor: l.soft, borderRadius: 12, padding: 12 },
                ],
                children: [
                  (0, b.jsx)(u.Icon, {
                    name: 'web' === (e.kind || w) ? 'browser' : 'phone',
                    size: 22,
                    color: l.text,
                  }),
                  (0, b.jsxs)(o.default, {
                    style: { flex: 1, gap: 2 },
                    children: [
                      (0, b.jsx)(c.Copy, {
                        style: { fontFamily: 'Vazirmatn_600SemiBold' },
                        children: (0, x.isolateName)(
                          (0, j.shownDeviceName)(e.deviceName, e.kind || w),
                        ),
                      }),
                      (0, b.jsx)(c.Copy, {
                        style: { fontSize: 13, lineHeight: 20, color: l.muted },
                        children: (0, d.L)(
                          '{kind}\u060c \u0622\u062e\u0631\u06cc\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647: {when}',
                          {
                            kind: (0, x.kindLabel)(e.kind || w),
                            when: (0, x.relativeTime)(e.lastUsedAt, s),
                          },
                        ),
                      }),
                    ],
                  }),
                ],
              },
              e.id,
            ),
          ),
          (0, b.jsx)(c.Copy, {
            style: { fontFamily: 'Vazirmatn_600SemiBold' },
            children: (0, d.L)(
              '\u0686\u0647 \u06a9\u0627\u0631 \u0645\u06cc\u200c\u0634\u0648\u062f \u06a9\u0631\u062f:',
            ),
          }),
          k.ways.map((e, t) =>
            (0, b.jsxs)(
              o.default,
              {
                style: [c.common.row, { alignItems: 'flex-start' }],
                children: [
                  (0, b.jsx)(c.Copy, {
                    style: { color: l.accent, fontFamily: 'Vazirmatn_700Bold' },
                    children: '\u2022',
                  }),
                  (0, b.jsx)(c.Copy, {
                    style: { flex: 1, lineHeight: 24 },
                    children: e,
                  }),
                ],
              },
              t,
            ),
          ),
          k.takeover &&
            n &&
            (0, b.jsx)(c.Button, {
              testID: 'device-limit-takeover',
              danger: !0,
              onPress: () =>
                p({
                  title: k.takeover.confirmTitle,
                  text: k.takeover.confirmText,
                  ok: k.takeover.confirmOk,
                  run: () => n(k.takeover.sessionId, String(v.ticket)),
                }),
              children: k.takeover.label,
            }),
          (0, b.jsx)(c.Button, {
            testID: 'device-limit-close',
            secondary: !0,
            onPress: t,
            children: (0, d.L)(
              '\u0628\u0627\u0634\u0647\u060c \u0628\u0633\u062a\u0646',
            ),
          }),
          f,
        ],
      });
    }
    let I = !1;
  },
  543,
  [
    2, 4, 94, 99, 515, 380, 264, 342, 311, 407, 385, 533, 534, 382, 415, 544,
    478, 545, 338,
  ],
);
