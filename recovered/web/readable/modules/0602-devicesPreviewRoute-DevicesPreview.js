// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 602; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.devicesPreviewRoute = function () {
        if ('undefined' == typeof window) return null;
        try {
          const [e, n, t] = window.location.hash.slice(1).split(':');
          return 'devices-preview' === e && (0, h.localHost)()
            ? p.includes(n)
              ? { view: n, mode: 'dark' === t ? 'dark' : 'light' }
              : { view: 'gallery' }
            : null;
        } catch {
          return null;
        }
      }),
      (_e.DevicesPreview = function ({ route: n }) {
        return (
          (0, e.useEffect)(() => {
            const e = () => window.location.reload();
            return (
              window.addEventListener('hashchange', e),
              () => window.removeEventListener('hashchange', e)
            );
          }, []),
          'gallery' !== n.view
            ? (0, w.jsx)(l.ThemeScope, {
                mode: n.mode,
                children: (0, w.jsx)(U, { view: n.view }),
              })
            : (0, w.jsxs)(o.ScrollView, {
                style: { flex: 1 },
                contentContainerStyle: {
                  padding: 16,
                  gap: 16,
                  flexDirection: 'row-reverse',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start',
                },
                children: [
                  (0, w.jsx)(_, { mode: 'light' }),
                  (0, w.jsx)(_, { mode: 'dark' }),
                ],
              })
        );
      }));
    var e = r(d[0]);
    r(d[1]);
    var n,
      t = r(d[2]),
      s = (n = t) && n.__esModule ? n : { default: n },
      o = r(d[3]),
      l = r(d[4]),
      a = r(d[5]),
      c = r(d[6]),
      u = r(d[7]),
      h = r(d[8]),
      w = r(d[9]);
    const p = ['plus-phone', 'pro-web', 'settings', 'ended'];
    const f = Date.now(),
      v = (e) => new Date(f - 6e4 * e).toISOString(),
      x = 'demo-ticket-000000000000000000000000000000000',
      b = {
        code: 'device_limit',
        details: {
          plan: 'standard',
          planLabel: '\u0627\u0633\u062a\u0627\u0646\u062f\u0627\u0631\u062f',
          kind: 'phone',
          limit: 1,
          limits: { phone: 1, web: 1 },
          seats: 1,
          ticket: x,
          sessions: [
            {
              id: 's-1',
              deviceName: 'Samsung SM-A515F',
              kind: 'phone',
              lastUsedAt: v(120),
            },
          ],
        },
      },
      y = {
        code: 'device_limit',
        details: {
          plan: 'pro',
          planLabel: '\u067e\u0644\u0627\u0633',
          kind: 'web',
          limit: 1,
          limits: { phone: 1, web: 1 },
          seats: 4,
          ticket: x,
          sessions: [
            {
              id: 's-2',
              deviceName:
                'Chrome \u0631\u0648\u06cc \u0648\u06cc\u0646\u062f\u0648\u0632',
              kind: 'web',
              lastUsedAt: v(25),
            },
          ],
        },
      },
      j = {
        code: 'session_ended',
        details: { reason: 'device_limit', limits: { phone: 1, web: 1 } },
      },
      k = [
        {
          id: 'o-1',
          deviceName: 'Samsung SM-S918B',
          kind: 'phone',
          lastUsedAt: v(0),
          current: !0,
        },
        {
          id: 'o-2',
          deviceName:
            'Chrome \u0631\u0648\u06cc \u0648\u06cc\u0646\u062f\u0648\u0632',
          kind: 'web',
          lastUsedAt: v(1560),
        },
      ],
      S = [
        {
          userId: 'm-1',
          name: '\u0639\u0644\u06cc \u0631\u0636\u0627\u06cc\u06cc',
          username: 'ali',
          sessions: [
            {
              id: 'm-1a',
              deviceName: 'Samsung Galaxy A51',
              kind: 'phone',
              lastUsedAt: v(120),
            },
            {
              id: 'm-1b',
              deviceName:
                'Edge \u0631\u0648\u06cc \u0648\u06cc\u0646\u062f\u0648\u0632',
              kind: 'web',
              lastUsedAt: v(180),
            },
          ],
        },
        {
          userId: 'm-2',
          name: '\u0645\u0631\u06cc\u0645 \u0627\u062d\u0645\u062f\u06cc',
          username: 'maryam',
          sessions: [
            {
              id: 'm-2a',
              deviceName: 'Xiaomi Redmi Note 12',
              kind: 'phone',
              lastUsedAt: v(8),
            },
          ],
        },
        {
          userId: 'm-3',
          name: '\u0631\u0636\u0627 \u06a9\u0631\u06cc\u0645\u06cc',
          username: 'reza',
          sessions: [],
        },
      ],
      C = () => {};
    function A({ view: e }) {
      const { colors: n } = (0, l.useTheme)();
      if ('settings' === e)
        return (0, w.jsx)(s.default, {
          style: { padding: 16, backgroundColor: n.bg },
          children: (0, w.jsx)(u.DevicesCardView, {
            own: k,
            rule: {
              plan: 'pro',
              planLabel: '\u067e\u0644\u0627\u0633',
              limits: { phone: 1, web: 1 },
            },
            members: S,
            onRemove: C,
            now: f,
          }),
        });
      const t = 'plus-phone' === e ? b : 'pro-web' === e ? y : j;
      return (0, w.jsx)(s.default, {
        style: {
          flexGrow: 1,
          backgroundColor: '#08090bbb',
          padding: 16,
          minHeight: 640,
          justifyContent: 'center',
        },
        children: (0, w.jsx)(s.default, {
          style: { width: '100%', maxWidth: 460, alignSelf: 'center' },
          children: (0, w.jsx)(c.DeviceLimitCard, {
            notice: t,
            onClose: C,
            onTakeover: async () => {},
            onSignInAgain: C,
            now: f,
          }),
        }),
      });
    }
    function _({ mode: e }) {
      return (0, w.jsx)(l.ThemeScope, {
        mode: e,
        children: (0, w.jsx)(N, { mode: e }),
      });
    }
    function N({ mode: e }) {
      const { colors: n } = (0, l.useTheme)();
      return (0, w.jsxs)(s.default, {
        style: {
          flex: 1,
          minWidth: 340,
          maxWidth: 480,
          gap: 10,
          backgroundColor: n.bg,
          padding: 12,
          borderRadius: 20,
        },
        children: [
          (0, w.jsx)(a.Copy, {
            style: {
              fontSize: 18,
              lineHeight: 28,
              fontFamily: 'Vazirmatn_700Bold',
            },
            children: 'light' === e ? '\u0631\u0648\u0632' : '\u0634\u0628',
          }),
          p.map((e) =>
            (0, w.jsxs)(
              s.default,
              {
                style: { gap: 4 },
                children: [
                  (0, w.jsx)(a.Copy, {
                    style: {
                      fontSize: 12,
                      lineHeight: 18,
                      color: n.muted,
                      textAlign: 'left',
                    },
                    children: e,
                  }),
                  (0, w.jsx)(A, { view: e }),
                ],
              },
              e,
            ),
          ),
        ],
      });
    }
    function U({ view: e }) {
      const { colors: n } = (0, l.useTheme)();
      return (0, w.jsx)(o.ScrollView, {
        style: { flex: 1, backgroundColor: n.bg },
        contentContainerStyle: {
          flexGrow: 1,
          justifyContent: 'settings' === e ? 'flex-start' : 'center',
        },
        children: (0, w.jsx)(A, { view: e }),
      });
    }
  },
  602,
  [2, 94, 99, 380, 382, 407, 543, 603, 582, 338],
);
