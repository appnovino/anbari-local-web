// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 600; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'errorCategories', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      (e.errorIcon = function (n) {
        return o[n] ?? 'alert';
      }),
      (e.errorTone = function (n) {
        return 'server' === n || 'client' === n || 'unknown' === n
          ? 'danger'
          : 'not_found' === n || 'subscription' === n || 'auth' === n
            ? 'neutral'
            : 'warning';
      }),
      (e.primaryAction = function (n, t) {
        const o = c[n.category];
        return (
          (
            o ||
            (n.retryable
              ? ['retry', 'back', 'home']
              : ['back', 'home', 'retry'])
          ).find((n) => 'function' == typeof t[n]) ?? null
        );
      }),
      (e.actionLabel = function (t) {
        return {
          retry: (0, n.L)(
            '\u062a\u0644\u0627\u0634 \u062f\u0648\u0628\u0627\u0631\u0647',
          ),
          signIn: (0, n.L)(
            '\u0648\u0631\u0648\u062f \u062f\u0648\u0628\u0627\u0631\u0647',
          ),
          home: (0, n.L)(
            '\u0628\u0631\u06af\u0634\u062a \u0628\u0647 \u062e\u0627\u0646\u0647',
          ),
          plans: (0, n.L)(
            '\u062f\u06cc\u062f\u0646 \u0637\u0631\u062d\u200c\u0647\u0627',
          ),
          back: (0, n.L)('\u0628\u0631\u06af\u0634\u062a'),
          reload: (0, n.L)(
            '\u0628\u0627\u0632 \u06a9\u0631\u062f\u0646 \u062f\u0648\u0628\u0627\u0631\u0647',
          ),
          signOut: (0, n.L)(
            '\u062e\u0631\u0648\u062c \u0627\u0632 \u062d\u0633\u0627\u0628',
          ),
        }[t];
      }),
      (e.isAppPath = function (n) {
        return '' === n || '/' === n || '/index.html' === n;
      }),
      (e.notFoundPage = function (t) {
        return {
          category: 'not_found',
          code: 'page_not_found',
          status: 404,
          title: (0, n.L)(
            '\u0627\u06cc\u0646 \u0635\u0641\u062d\u0647 \u067e\u06cc\u062f\u0627 \u0646\u0634\u062f',
          ),
          why: (0, n.L)(
            '\u0646\u0634\u0627\u0646\u06cc\u200c\u0627\u06cc \u06a9\u0647 \u0628\u0627\u0632 \u06a9\u0631\u062f\u06cc \u062f\u0631 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u0646\u06cc\u0633\u062a\u061b \u0634\u0627\u06cc\u062f \u06cc\u06a9 \u062d\u0631\u0641\u0634 \u0627\u0634\u062a\u0628\u0627\u0647 \u0627\u0633\u062a \u06cc\u0627 \u0622\u0646 \u0635\u0641\u062d\u0647 \u0628\u0631\u062f\u0627\u0634\u062a\u0647 \u0634\u062f\u0647.',
          ),
          action: (0, n.L)(
            '\u0628\u0647 \u062e\u0627\u0646\u0647\u0654 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u0628\u0631\u06af\u0631\u062f \u0648 \u0627\u0632 \u0647\u0645\u0627\u0646\u200c\u062c\u0627 \u0627\u062f\u0627\u0645\u0647 \u0628\u062f\u0647.',
          ),
          retryable: !1,
          technical: 'GET ' + t + ' -> 404 page_not_found',
        };
      }),
      (e.itemGone = function (t, o) {
        const c = {
          product: (0, n.L)('\u0627\u06cc\u0646 \u06a9\u0627\u0644\u0627'),
          invoice: (0, n.L)(
            '\u0627\u06cc\u0646 \u0641\u0627\u06a9\u062a\u0648\u0631',
          ),
          item: (0, n.L)('\u0627\u06cc\u0646 \u0645\u0648\u0631\u062f'),
        }[t];
        return {
          category: 'not_found',
          code: o?.code || 'not_found',
          status: o?.status ?? 404,
          requestId: o?.requestId,
          title: (0, n.L)(
            '{name} \u067e\u06cc\u062f\u0627 \u0646\u0634\u062f',
            { name: c },
          ),
          why: (0, n.L)(
            '{name} \u067e\u0627\u06a9 \u06cc\u0627 \u0628\u0627\u06cc\u06af\u0627\u0646\u06cc \u0634\u062f\u0647\u060c \u06cc\u0627 \u0644\u06cc\u0646\u06a9\u0634 \u062f\u06cc\u06af\u0631 \u0645\u0639\u062a\u0628\u0631 \u0646\u06cc\u0633\u062a.',
            { name: c },
          ),
          action: (0, n.L)(
            '\u0641\u0647\u0631\u0633\u062a \u0631\u0627 \u062a\u0627\u0632\u0647 \u06a9\u0646 \u0648 \u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0632 \u0622\u0646\u200c\u062c\u0627 \u0628\u0627\u0632\u0634 \u06a9\u0646.',
          ),
          retryable: !1,
          technical: o?.technical || '404 not_found',
        };
      }),
      (e.clientCrash = function (t, o, c) {
        const u = t instanceof Error ? t.name : typeof t,
          l = t instanceof Error ? t.message : String(t),
          s = (o || '')
            .split('\n')
            .map((n) => n.trim())
            .filter(Boolean)
            .slice(0, 6)
            .join(' < ');
        return {
          category: 'client',
          code: 'render_crash',
          title: (0, n.L)(
            '\u0627\u06cc\u0646 \u0635\u0641\u062d\u0647 \u062f\u0631\u0633\u062a \u0628\u0627\u0632 \u0646\u0634\u062f',
          ),
          why: (0, n.L)(
            '\u06cc\u06a9 \u0627\u0634\u06a9\u0627\u0644 \u062f\u0631 \u062e\u0648\u062f \u0628\u0631\u0646\u0627\u0645\u0647 \u067e\u06cc\u0634 \u0622\u0645\u062f\u060c \u0646\u0647 \u062f\u0631 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u062a\u0648\u061b \u0686\u06cc\u0632\u06cc \u067e\u0627\u06a9 \u0646\u0634\u062f\u0647 \u0627\u0633\u062a.',
          ),
          action: (0, n.L)(
            '\xab\u0628\u0627\u0632 \u06a9\u0631\u062f\u0646 \u062f\u0648\u0628\u0627\u0631\u0647\xbb \u0631\u0627 \u0628\u0632\u0646\u061b \u0627\u06af\u0631 \u0628\u0627\u0632 \u0647\u0645 \u062f\u06cc\u062f\u06cc\u060c \u06a9\u062f \u067e\u06cc\u06af\u06cc\u0631\u06cc \u0631\u0627 \u0628\u0631\u0627\u06cc \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0628\u0641\u0631\u0633\u062a.',
          ),
          retryable: !1,
          technical: [c || u + ': ' + l, s && 'at ' + s]
            .filter(Boolean)
            .join('\n'),
        };
      }));
    var n = r(d[0]);
    const t = [
        'offline',
        'timeout',
        'server',
        'maintenance',
        'auth',
        'forbidden',
        'not_found',
        'validation',
        'conflict',
        'rate_limit',
        'subscription',
        'client',
        'unknown',
      ],
      o = {
        offline: 'offline',
        timeout: 'clock',
        server: 'server',
        maintenance: 'tool',
        auth: 'user',
        forbidden: 'lock',
        not_found: 'search',
        validation: 'edit',
        conflict: 'refresh',
        rate_limit: 'clock',
        subscription: 'wallet',
        client: 'alert',
        unknown: 'alert',
      };
    const c = {
      auth: ['signIn', 'home'],
      subscription: ['plans', 'back'],
      not_found: ['home', 'back'],
      forbidden: ['back', 'home'],
      validation: ['back'],
      client: ['reload', 'retry', 'home'],
    };
  },
  600,
  [311],
);
