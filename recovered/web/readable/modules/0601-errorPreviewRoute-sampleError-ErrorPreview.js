// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 601; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.errorPreviewRoute = function () {
        if ('undefined' == typeof window) return null;
        try {
          const [e, n, t, o] = window.location.hash.slice(1).split(':');
          if ('errors-preview' !== e || !(0, p.localHost)()) return null;
          const i = 'dark' === t || 'dark' === n ? 'dark' : 'light';
          return 'inline' === n
            ? { view: 'inline', mode: i }
            : 'crash' === n
              ? { view: 'crash', mode: i }
              : 'screen' === n
                ? {
                    view: 'screen',
                    mode: i,
                    category: h.errorCategories.includes(o) ? o : 'offline',
                  }
                : { view: 'gallery' };
        } catch {
          return null;
        }
      }),
      (_e.sampleError = j),
      (_e.ErrorPreview = function ({ route: n }) {
        const [t, o] = (0, e.useState)(0);
        if ('screen' === n.view) {
          const e =
            'not_found' === n.category
              ? (0, h.notFoundPage)('/no-such-page')
              : j(n.category, 7);
          return (0, w.jsx)(a.ThemeScope, {
            mode: n.mode,
            children: (0, w.jsx)(u.ErrorView, {
              variant: 'screen',
              testID: 'preview-screen',
              info: e,
              ...b,
            }),
          });
        }
        return 'crash' === n.view
          ? (0, w.jsx)(a.ThemeScope, {
              mode: n.mode,
              children: (0, w.jsx)(
                f.ErrorBoundary,
                { onReset: () => o((e) => e + 1), children: (0, w.jsx)(k, {}) },
                t,
              ),
            })
          : 'inline' === n.view
            ? (0, w.jsx)(a.ThemeScope, {
                mode: n.mode,
                children: (0, w.jsx)(i.ScrollView, {
                  style: { flex: 1 },
                  contentContainerStyle: { flexGrow: 1 },
                  children: (0, w.jsx)(E, { mode: n.mode }),
                }),
              })
            : (0, w.jsxs)(i.ScrollView, {
                style: { flex: 1 },
                contentContainerStyle: {
                  padding: 16,
                  gap: 16,
                  flexDirection: 'row-reverse',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start',
                },
                children: [
                  (0, w.jsx)(E, { mode: 'light' }),
                  (0, w.jsx)(E, { mode: 'dark' }),
                ],
              });
      }));
    var e = r(d[0]);
    r(d[1]);
    var n,
      t = r(d[2]),
      o = (n = t) && n.__esModule ? n : { default: n },
      i = r(d[3]),
      s = r(d[4]),
      c = r(d[5]),
      a = r(d[6]),
      l = r(d[7]),
      u = r(d[8]),
      f = r(d[9]),
      h = r(d[10]),
      p = r(d[11]),
      w = r(d[12]);
    const y = (e) => 'req-7f3c9a1e-' + String(4200 + e) + '-b8d2-e5a14c09d' + e;
    function x(e, n) {
      const t = (e, t) => new s.ApiError(e, t, { code: e, requestId: y(n) });
      switch (e) {
        case 'offline':
          return Object.assign(new TypeError('Network request failed'));
        case 'timeout':
          return Object.assign(Error('timeout'), { name: 'TimeoutError' });
        case 'server':
          return t('server_error', 500);
        case 'maintenance':
          return t('maintenance', 503);
        case 'auth':
          return t('unauthorized', 401);
        case 'forbidden':
          return t('forbidden', 403);
        case 'not_found':
          return t('not_found', 404);
        case 'validation':
          return t('invalid_request', 400);
        case 'conflict':
          return t('version_conflict', 409);
        case 'rate_limit':
          return t('rate_limited', 429);
        case 'subscription':
          return t('subscription_required', 402);
        case 'client':
          return new TypeError(
            "Cannot read properties of undefined (reading 'stock')",
          );
        default:
          return Error('weird_thing_happened');
      }
    }
    const v = {
      offline: [
        '\u0627\u06cc\u0646\u062a\u0631\u0646\u062a \u0648\u0635\u0644 \u0646\u06cc\u0633\u062a',
        '\u06af\u0648\u0634\u06cc \u0628\u0647 \u0627\u06cc\u0646\u062a\u0631\u0646\u062a \u0648\u0635\u0644 \u0646\u06cc\u0633\u062a \u06cc\u0627 \u0627\u06cc\u0646\u062a\u0631\u0646\u062a\u062a \u0642\u0637\u0639 \u0648 \u0648\u0635\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f.',
        '\u0627\u06cc\u0646\u062a\u0631\u0646\u062a \u0631\u0627 \u0631\u0648\u0634\u0646 \u06a9\u0646 \u0648 \xab\u062a\u0644\u0627\u0634 \u062f\u0648\u0628\u0627\u0631\u0647\xbb \u0631\u0627 \u0628\u0632\u0646\u061b \u06a9\u0627\u0631\u0647\u0627\u06cc\u062a \u0631\u0648\u06cc \u06af\u0648\u0634\u06cc \u0645\u06cc\u200c\u0645\u0627\u0646\u062f.',
        !0,
      ],
      timeout: [
        '\u062c\u0648\u0627\u0628 \u0633\u0631\u0648\u0631 \u062f\u06cc\u0631 \u0631\u0633\u06cc\u062f',
        '\u0633\u0631\u0648\u0631 \u062f\u0631 \u0632\u0645\u0627\u0646 \u0645\u0639\u0645\u0648\u0644 \u062c\u0648\u0627\u0628 \u0646\u062f\u0627\u062f\u061b \u0645\u0639\u0645\u0648\u0644\u0627\u064b \u0627\u0632 \u06a9\u0646\u062f\u06cc \u0627\u06cc\u0646\u062a\u0631\u0646\u062a \u0627\u0633\u062a.',
        '\u0686\u0646\u062f \u062b\u0627\u0646\u06cc\u0647 \u0635\u0628\u0631 \u06a9\u0646 \u0648 \u062f\u0648\u0628\u0627\u0631\u0647 \u0628\u0632\u0646.',
        !0,
      ],
      server: [
        '\u0633\u0631\u0648\u0631 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u0628\u0647 \u0645\u0634\u06a9\u0644 \u062e\u0648\u0631\u062f',
        '\u0627\u0634\u06a9\u0627\u0644 \u0627\u0632 \u0633\u0645\u062a \u0645\u0627\u0633\u062a\u060c \u0646\u0647 \u0627\u0632 \u062a\u0648\u061b \u0627\u0637\u0644\u0627\u0639\u0627\u062a\u062a \u0633\u0627\u0644\u0645 \u0627\u0633\u062a.',
        '\u06a9\u0645\u06cc \u0628\u0639\u062f \u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646\u061b \u0627\u06af\u0631 \u0645\u0627\u0646\u062f\u060c \u06a9\u062f \u067e\u06cc\u06af\u06cc\u0631\u06cc \u0631\u0627 \u0628\u0631\u0627\u06cc \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0628\u0641\u0631\u0633\u062a.',
        !0,
      ],
      maintenance: [
        '\u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u062f\u0631 \u062d\u0627\u0644 \u0628\u0647\u200c\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc \u0627\u0633\u062a',
        '\u0686\u0646\u062f \u062f\u0642\u06cc\u0642\u0647 \u0628\u0631\u0627\u06cc \u0628\u0647\u200c\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc \u0628\u0633\u062a\u0647 \u0627\u0633\u062a.',
        '\u0686\u0646\u062f \u062f\u0642\u06cc\u0642\u0647 \u062f\u06cc\u06af\u0631 \u062f\u0648\u0628\u0627\u0631\u0647 \u0633\u0631 \u0628\u0632\u0646.',
        !0,
      ],
      auth: [
        '\u0628\u0627\u06cc\u062f \u062f\u0648\u0628\u0627\u0631\u0647 \u0648\u0627\u0631\u062f \u0634\u0648\u06cc',
        '\u0646\u0634\u0633\u062a \u0648\u0631\u0648\u062f\u062a \u062a\u0645\u0627\u0645 \u0634\u062f\u0647 \u06cc\u0627 \u0627\u0632 \u062f\u0633\u062a\u06af\u0627\u0647 \u062f\u06cc\u06af\u0631\u06cc \u062e\u0627\u0631\u062c \u0634\u062f\u0647\u200c\u0627\u06cc.',
        '\xab\u0648\u0631\u0648\u062f \u062f\u0648\u0628\u0627\u0631\u0647\xbb \u0631\u0627 \u0628\u0632\u0646\u061b \u0627\u0637\u0644\u0627\u0639\u0627\u062a\u062a \u0633\u0631 \u062c\u0627\u06cc\u0634 \u0627\u0633\u062a.',
        !1,
      ],
      forbidden: [
        '\u0627\u062c\u0627\u0632\u0647\u0654 \u0627\u06cc\u0646 \u06a9\u0627\u0631 \u0631\u0627 \u0646\u062f\u0627\u0631\u06cc',
        '\u0635\u0627\u062d\u0628 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0627\u06cc\u0646 \u0628\u062e\u0634 \u0631\u0627 \u0628\u0631\u0627\u06cc \u062d\u0633\u0627\u0628 \u062a\u0648 \u0628\u0627\u0632 \u0646\u06a9\u0631\u062f\u0647 \u0627\u0633\u062a.',
        '\u0627\u0632 \u0635\u0627\u062d\u0628 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0628\u062e\u0648\u0627\u0647 \u062f\u0633\u062a\u0631\u0633\u06cc\u200c\u0627\u062a \u0631\u0627 \u0628\u0627\u0632 \u06a9\u0646\u062f.',
        !1,
      ],
      not_found: [
        '\u0627\u06cc\u0646 \u0645\u0648\u0631\u062f \u067e\u06cc\u062f\u0627 \u0646\u0634\u062f',
        '\u067e\u0627\u06a9 \u06cc\u0627 \u0628\u0627\u06cc\u06af\u0627\u0646\u06cc \u0634\u062f\u0647\u060c \u06cc\u0627 \u0644\u06cc\u0646\u06a9\u0634 \u062f\u06cc\u06af\u0631 \u0645\u0639\u062a\u0628\u0631 \u0646\u06cc\u0633\u062a.',
        '\u0628\u0647 \u062e\u0627\u0646\u0647 \u0628\u0631\u06af\u0631\u062f \u0648 \u0627\u0632 \u0641\u0647\u0631\u0633\u062a \u062f\u0648\u0628\u0627\u0631\u0647 \u0628\u0627\u0632\u0634 \u06a9\u0646.',
        !1,
      ],
      validation: [
        '\u0686\u0646\u062f \u062e\u0627\u0646\u0647 \u062f\u0631\u0633\u062a \u067e\u0631 \u0646\u0634\u062f\u0647',
        '\u0639\u062f\u062f \u06cc\u0627 \u0645\u062a\u0646\u06cc \u06a9\u0647 \u0646\u0648\u0634\u062a\u06cc \u0628\u0627 \u0627\u06cc\u0646 \u062e\u0627\u0646\u0647 \u062c\u0648\u0631 \u0646\u06cc\u0633\u062a.',
        '\u062e\u0627\u0646\u0647\u200c\u0647\u0627\u06cc \u0642\u0631\u0645\u0632 \u0631\u0627 \u062f\u0631\u0633\u062a \u06a9\u0646 \u0648 \u062f\u0648\u0628\u0627\u0631\u0647 \u062b\u0628\u062a \u06a9\u0646.',
        !1,
      ],
      conflict: [
        '\u0647\u0645\u06cc\u0646 \u062d\u0627\u0644\u0627 \u062c\u0627\u06cc \u062f\u06cc\u06af\u0631\u06cc \u0639\u0648\u0636 \u0634\u062f',
        '\u0627\u06cc\u0646 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u062f\u0631 \u062f\u0633\u062a\u06af\u0627\u0647 \u062f\u06cc\u06af\u0631\u06cc \u062a\u063a\u06cc\u06cc\u0631 \u06a9\u0631\u062f.',
        '\u0635\u0641\u062d\u0647 \u0631\u0627 \u062a\u0627\u0632\u0647 \u06a9\u0646 \u0648 \u062f\u0648\u0628\u0627\u0631\u0647 \u062b\u0628\u062a \u06a9\u0646.',
        !0,
      ],
      rate_limit: [
        '\u062f\u0631\u062e\u0648\u0627\u0633\u062a\u200c\u0647\u0627 \u0632\u06cc\u0627\u062f \u0634\u062f',
        '\u062f\u0631 \u0645\u062f\u062a \u06a9\u0648\u062a\u0627\u0647\u06cc \u062e\u06cc\u0644\u06cc \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0641\u0631\u0633\u062a\u0627\u062f\u0647 \u0634\u062f.',
        '\u06cc\u06a9 \u062f\u0642\u06cc\u0642\u0647 \u0635\u0628\u0631 \u06a9\u0646 \u0648 \u062f\u0648\u0628\u0627\u0631\u0647 \u0628\u0632\u0646.',
        !0,
      ],
      subscription: [
        '\u0627\u0634\u062a\u0631\u0627\u06a9\u062a \u062a\u0645\u0627\u0645 \u0634\u062f\u0647',
        '\u0628\u0631\u0627\u06cc \u0627\u062f\u0627\u0645\u0647\u0654 \u062b\u0628\u062a\u060c \u06cc\u06a9 \u0637\u0631\u062d \u0644\u0627\u0632\u0645 \u0627\u0633\u062a\u061b \u0627\u0637\u0644\u0627\u0639\u0627\u062a\u062a \u0627\u0645\u0646 \u0627\u0633\u062a.',
        '\xab\u062f\u06cc\u062f\u0646 \u0637\u0631\u062d\u200c\u0647\u0627\xbb \u0631\u0627 \u0628\u0632\u0646.',
        !1,
      ],
      client: [
        '\u0627\u06cc\u0646 \u0635\u0641\u062d\u0647 \u062f\u0631\u0633\u062a \u0628\u0627\u0632 \u0646\u0634\u062f',
        '\u06cc\u06a9 \u0627\u0634\u06a9\u0627\u0644 \u062f\u0631 \u062e\u0648\u062f \u0628\u0631\u0646\u0627\u0645\u0647 \u067e\u06cc\u0634 \u0622\u0645\u062f.',
        '\xab\u0628\u0627\u0632 \u06a9\u0631\u062f\u0646 \u062f\u0648\u0628\u0627\u0631\u0647\xbb \u0631\u0627 \u0628\u0632\u0646.',
        !1,
      ],
      unknown: [
        '\u06a9\u0627\u0631 \u0627\u0646\u062c\u0627\u0645 \u0646\u0634\u062f',
        '\u062f\u0644\u06cc\u0644\u0634 \u0631\u0648\u0634\u0646 \u0646\u06cc\u0633\u062a.',
        '\u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646\u061b \u0627\u06af\u0631 \u0645\u0627\u0646\u062f\u060c \u06a9\u062f \u067e\u06cc\u06af\u06cc\u0631\u06cc \u0631\u0627 \u0628\u0641\u0631\u0633\u062a.',
        !0,
      ],
    };
    function j(e, n = 1) {
      if ('client' === e)
        return {
          ...(0, h.clientCrash)(
            x('client', n),
            '\n    in ProductPage\n    in Workspace\n    in AccountGate',
          ),
          requestId: 'crash-' + y(n).slice(4),
        };
      let t = null;
      try {
        t = (0, c.describeError)(x(e, n));
      } catch {}
      if (t && t.category === e)
        return { ...t, requestId: t.requestId || y(n) };
      const [o, i, s, a] = v[e];
      return {
        category: e,
        code: e + '_sample',
        status: void 0,
        requestId: y(n),
        title: o,
        why: i,
        action: s,
        retryable: a,
        technical:
          'sample ' +
          e +
          ' (describeError gave ' +
          (t?.category ?? 'nothing') +
          ')',
      };
    }
    const _ = () => {},
      b = { retry: _, signIn: _, home: _, plans: _, back: _, reload: _ };
    function E({ mode: e }) {
      return (0, w.jsx)(a.ThemeScope, {
        mode: e,
        children: (0, w.jsx)(S, { mode: e }),
      });
    }
    function S({ mode: e }) {
      const { colors: n } = (0, a.useTheme)();
      return (0, w.jsxs)(o.default, {
        style: {
          flex: 1,
          minWidth: 320,
          backgroundColor: n.bg,
          padding: 16,
          gap: 14,
          borderRadius: 20,
        },
        children: [
          (0, w.jsx)(l.Copy, {
            style: {
              fontSize: 18,
              lineHeight: 28,
              fontFamily: 'Vazirmatn_700Bold',
            },
            children:
              'light' === e
                ? '\u0631\u0648\u0632 (inline)'
                : '\u0634\u0628 (inline)',
          }),
          h.errorCategories.map((e, t) =>
            (0, w.jsxs)(
              o.default,
              {
                style: { gap: 6 },
                children: [
                  (0, w.jsx)(l.Copy, {
                    style: {
                      fontSize: 12,
                      lineHeight: 18,
                      color: n.muted,
                      textAlign: 'left',
                    },
                    children: e,
                  }),
                  (0, w.jsx)(u.ErrorView, {
                    testID: 'preview-' + e,
                    info: j(e, t),
                    detailsOpen: 'server' === e,
                    ...b,
                  }),
                ],
              },
              e,
            ),
          ),
          (0, w.jsxs)(o.default, {
            style: { gap: 6 },
            children: [
              (0, w.jsx)(l.Copy, {
                style: {
                  fontSize: 12,
                  lineHeight: 18,
                  color: n.muted,
                  textAlign: 'left',
                },
                children: 'item gone (deleted product)',
              }),
              (0, w.jsx)(u.ErrorView, {
                info: (0, h.itemGone)('product', { requestId: y(40) }),
                back: _,
              }),
            ],
          }),
        ],
      });
    }
    function k() {
      throw new TypeError(
        "Cannot read properties of undefined (reading 'stock')",
      );
    }
  },
  601,
  [2, 94, 99, 380, 415, 429, 382, 407, 599, 598, 600, 582, 338],
);
