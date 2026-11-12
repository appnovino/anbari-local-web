// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 544; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, i, a, m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'isolateName', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      Object.defineProperty(e, 'kindLabel', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      (e.relativeTime = c),
      (e.deviceLimitView = function (l, u = Date.now()) {
        const p = L(l),
          d = 'standard' === (l.plan || 'standard');
        if ('device_limit_plan' === l.code) {
          const t = Number(l.seats) || 1;
          return {
            title: (0, n.L)(
              '\u062f\u0631 \u0637\u0631\u062d \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646 \u062d\u0633\u0627\u0628 \u062c\u0627 \u0646\u06cc\u0633\u062a',
            ),
            why: d
              ? (0, n.L)(
                  '\u0637\u0631\u062d \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \xab{plan}\xbb \u0627\u0633\u062a \u0648 \u0641\u0642\u0637 \u0635\u0627\u062d\u0628 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0648\u0627\u0631\u062f \u0634\u0648\u062f\u061b \u0628\u0631\u0627\u06cc \u0647\u0645\u06cc\u0646 \u0627\u06cc\u0646 \u062d\u0633\u0627\u0628 \u0627\u0644\u0627\u0646 \u0646\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0648\u0627\u0631\u062f \u0634\u0648\u062f.',
                  { plan: p },
                )
              : (0, n.L)(
                  '\u0637\u0631\u062d \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \xab{plan}\xbb \u0628\u0631\u0627\u06cc {n} \u0646\u0641\u0631 \u0627\u0633\u062a \u0648 \u0627\u06cc\u0646 \u062c\u0627\u0647\u0627 \u067e\u0631 \u0627\u0633\u062a\u061b \u0628\u0631\u0627\u06cc \u0647\u0645\u06cc\u0646 \u0627\u06cc\u0646 \u062d\u0633\u0627\u0628 \u0627\u0644\u0627\u0646 \u0646\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0648\u0627\u0631\u062f \u0634\u0648\u062f.',
                  { plan: p, n: (0, n.localDigits)(t) },
                ),
            ways: [
              d
                ? (0, n.L)(
                    '\u0627\u0632 \u0635\u0627\u062d\u0628 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0628\u062e\u0648\u0627\u0647\u06cc\u062f \u0637\u0631\u062d \xab\u067e\u0644\u0627\u0633\xbb \u0631\u0627 \u0628\u06af\u06cc\u0631\u062f\u061b \u062f\u0631 \u0622\u0646 \u0647\u0631 \u0647\u0645\u06a9\u0627\u0631 \u0628\u0627 \u062d\u0633\u0627\u0628 \u062e\u0648\u062f\u0634 \u0648\u0627\u0631\u062f \u0645\u06cc\u200c\u0634\u0648\u062f.',
                  )
                : (0, n.L)(
                    '\u0627\u0632 \u0635\u0627\u062d\u0628 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0628\u062e\u0648\u0627\u0647\u06cc\u062f \u0637\u0631\u062d \u0628\u0632\u0631\u06af\u200c\u062a\u0631\u06cc \u0628\u06af\u06cc\u0631\u062f.',
                  ),
              (0, n.L)(
                '\u06cc\u0627 \u0635\u0627\u062d\u0628 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u062f\u0631 \xab\u067e\u0631\u0648\u0641\u0627\u06cc\u0644 \u2190 \u0647\u0645\u06a9\u0627\u0631\u0627\u0646\xbb \u06cc\u06a9 \u0647\u0645\u06a9\u0627\u0631 \u062f\u06cc\u06af\u0631 \u0631\u0627 \u0628\u0631\u062f\u0627\u0631\u062f \u062a\u0627 \u062c\u0627\u06cc \u0634\u0645\u0627 \u0628\u0627\u0632 \u0634\u0648\u062f.',
              ),
            ],
            takeover: null,
            upgrade: !1,
          };
        }
        const h = 'web' === l.kind ? 'web' : 'phone',
          b = Number(l.limits?.phone) > 0 && Number(l.limits?.web) > 0,
          w = b
            ? (0, n.L)('{phone} \u0648 {web}', {
                phone: s(Number(l.limits.phone), 'phone'),
                web: s(Number(l.limits.web), 'web'),
              })
            : '',
          f = b
            ? d
              ? (0, n.L)(
                  '\u062d\u0633\u0627\u0628 \u0634\u0645\u0627 \u0631\u0648\u06cc \u0637\u0631\u062d \xab{plan}\xbb \u0627\u0633\u062a \u0648 \u0647\u0645\u200c\u0632\u0645\u0627\u0646 \u0641\u0642\u0637 {both} \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0648\u0627\u0631\u062f \u0628\u0627\u0634\u062f.',
                  { plan: p, both: w },
                )
              : (0, n.L)(
                  '\u0637\u0631\u062d \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0634\u0645\u0627 \xab{plan}\xbb \u0627\u0633\u062a: \u0647\u0631 \u0646\u0641\u0631 \u0647\u0645\u200c\u0632\u0645\u0627\u0646 {both}.',
                  { plan: p, both: w },
                )
            : d
              ? (0, n.L)(
                  '\u062d\u0633\u0627\u0628 \u0634\u0645\u0627 \u0631\u0648\u06cc \u0637\u0631\u062d \xab{plan}\xbb \u0627\u0633\u062a \u0648 \u062a\u0639\u062f\u0627\u062f \u06af\u0648\u0634\u06cc \u0648 \u0645\u0631\u0648\u0631\u06af\u0631\u06cc \u06a9\u0647 \u0647\u0645\u200c\u0632\u0645\u0627\u0646 \u0648\u0627\u0631\u062f \u0645\u06cc\u200c\u0634\u0648\u0646\u062f \u0645\u062d\u062f\u0648\u062f \u0627\u0633\u062a.',
                  { plan: p },
                )
              : (0, n.L)(
                  '\u0637\u0631\u062d \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0634\u0645\u0627 \xab{plan}\xbb \u0627\u0633\u062a \u0648 \u0628\u0631\u0627\u06cc \u0647\u0631 \u0646\u0641\u0631 \u062a\u0639\u062f\u0627\u062f \u06af\u0648\u0634\u06cc \u0648 \u0645\u0631\u0648\u0631\u06af\u0631 \u0647\u0645\u200c\u0632\u0645\u0627\u0646 \u0645\u062d\u062f\u0648\u062f \u0627\u0633\u062a.',
                  { plan: p },
                ),
          v = (l.sessions || []).filter((n) => !n.kind || n.kind === h),
          N = v[0],
          k = v.map((l) =>
            (0, n.L)(
              '{kind} \xab{name}\xbb (\u0622\u062e\u0631\u06cc\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647: {when})',
              {
                kind: o(l.kind || h),
                name: r((0, t.shownDeviceName)(l.deviceName, l.kind || h)),
                when: c(l.lastUsedAt, u),
              },
            ),
          ),
          D = k.length
            ? (0, n.L)(
                '\u0627\u0644\u0627\u0646 {who} \u0628\u0627 \u0647\u0645\u06cc\u0646 \u062d\u0633\u0627\u0628 \u0648\u0627\u0631\u062f \u0627\u0633\u062a.',
                { who: k.join((0, n.L)(' \u0648 ')) },
              )
            : (0, n.L)(
                '\u0627\u0644\u0627\u0646 {kind} \u062f\u06cc\u06af\u0631\u06cc \u0628\u0627 \u0647\u0645\u06cc\u0646 \u062d\u0633\u0627\u0628 \u0648\u0627\u0631\u062f \u0627\u0633\u062a.',
                { kind: o(h) },
              ),
          y = N
            ? o(N.kind || h) +
              ' \xab' +
              r((0, t.shownDeviceName)(N.deviceName, N.kind || h)) +
              '\xbb'
            : (0, n.L)('\u0622\u0646 \u062f\u0633\u062a\u06af\u0627\u0647');
        return {
          title:
            'web' === h
              ? (0, n.L)(
                  '\u0628\u0627 \u0627\u06cc\u0646 \u0645\u0631\u0648\u0631\u06af\u0631 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f \u0648\u0627\u0631\u062f \u0634\u062f',
                )
              : (0, n.L)(
                  '\u0628\u0627 \u0627\u06cc\u0646 \u06af\u0648\u0634\u06cc \u0646\u0645\u06cc\u200c\u0634\u0648\u062f \u0648\u0627\u0631\u062f \u0634\u062f',
                ),
          why: f + ' ' + D,
          ways: [
            (0, n.L)(
              '\u0631\u0648\u06cc {that} \u0627\u0632 \u062d\u0633\u0627\u0628 \u062e\u0627\u0631\u062c \u0634\u0648\u06cc\u062f (\u067e\u0631\u0648\u0641\u0627\u06cc\u0644 \u2190 \u062e\u0631\u0648\u062c \u0627\u0632 \u062d\u0633\u0627\u0628) \u0648 \u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u06cc\u0646\u062c\u0627 \u0648\u0627\u0631\u062f \u0634\u0648\u06cc\u062f.',
              { that: y },
            ),
            (0, n.L)(
              '\u06cc\u0627 \u0631\u0648\u06cc \u062f\u0633\u062a\u06af\u0627\u0647\u06cc \u06a9\u0647 \u0648\u0627\u0631\u062f \u0627\u0633\u062a\u060c \u062f\u0631 \xab\u067e\u0631\u0648\u0641\u0627\u06cc\u0644 \u2190 \u062d\u0633\u0627\u0628 \u2190 \u062f\u0633\u062a\u06af\u0627\u0647\u200c\u0647\u0627\u06cc \u0641\u0639\u0627\u0644\xbb \u0622\u0646 \u0631\u0627 \u062e\u0627\u0631\u062c \u06a9\u0646\u06cc\u062f.',
            ),
            ...(d
              ? [
                  (0, n.L)(
                    '\u0627\u06af\u0631 \u0686\u0646\u062f \u0646\u0641\u0631 \u0628\u0627 \u0647\u0645 \u06a9\u0627\u0631 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u062f\u060c \u0637\u0631\u062d \xab\u067e\u0644\u0627\u0633\xbb \u0631\u0627 \u0628\u06af\u06cc\u0631\u06cc\u062f: \u0635\u0627\u062d\u0628 \u0645\u063a\u0627\u0632\u0647 + \u06f3 \u0647\u0645\u06a9\u0627\u0631\u060c \u0647\u0631 \u0646\u0641\u0631 \u0628\u0627 \u062d\u0633\u0627\u0628 \u062e\u0648\u062f\u0634.',
                  ),
                ]
              : []),
          ],
          takeover:
            N && l.ticket
              ? {
                  sessionId: N.id,
                  label: (0, n.L)(
                    '\u062e\u0631\u0648\u062c \u0622\u0646 \u062f\u0633\u062a\u06af\u0627\u0647 \u0648 \u0648\u0631\u0648\u062f \u0628\u0627 \u0627\u06cc\u0646 \u062f\u0633\u062a\u06af\u0627\u0647',
                  ),
                  confirmTitle: (0, n.L)(
                    '\u0622\u0646 \u062f\u0633\u062a\u06af\u0627\u0647 \u0627\u0632 \u062d\u0633\u0627\u0628 \u062e\u0627\u0631\u062c \u0634\u0648\u062f\u061f',
                  ),
                  confirmText: (0, n.L)(
                    '{that} \u0647\u0645\u06cc\u0646 \u062d\u0627\u0644\u0627 \u0627\u0632 \u062d\u0633\u0627\u0628 \u062e\u0627\u0631\u062c \u0645\u06cc\u200c\u0634\u0648\u062f \u0648 \u0627\u06cc\u0646 \u062f\u0633\u062a\u06af\u0627\u0647 \u0648\u0627\u0631\u062f \u0645\u06cc\u200c\u0634\u0648\u062f. \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u067e\u0627\u06a9 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f.',
                    { that: y },
                  ),
                  confirmOk: (0, n.L)(
                    '\u062e\u0631\u0648\u062c \u0622\u0646 \u062f\u0633\u062a\u06af\u0627\u0647 \u0648 \u0648\u0631\u0648\u062f',
                  ),
                }
              : null,
          upgrade: d,
        };
      }),
      (e.devicesRuleText = function (t) {
        const l = Number(t?.devices) || 1,
          r = t
            ? u(t)
            : (0, n.L)(
                '\u0627\u0633\u062a\u0627\u0646\u062f\u0627\u0631\u062f',
              );
        return 1 === l
          ? (0, n.L)(
              '\u0637\u0631\u062d \xab{plan}\xbb: \u0647\u0645\u200c\u0632\u0645\u0627\u0646 \u0641\u0642\u0637 \u06cc\u06a9 \u062f\u0633\u062a\u06af\u0627\u0647 (\u06af\u0648\u0634\u06cc\u060c \u062a\u0628\u0644\u062a \u06cc\u0627 \u0645\u0631\u0648\u0631\u06af\u0631). \u0648\u0631\u0648\u062f \u0628\u0627 \u062f\u0633\u062a\u06af\u0627\u0647 \u062a\u0627\u0632\u0647\u060c \u062f\u0633\u062a\u06af\u0627\u0647 \u0642\u0628\u0644\u06cc \u0631\u0627 \u062e\u0627\u0631\u062c \u0645\u06cc\u200c\u06a9\u0646\u062f.',
              { plan: r },
            )
          : (0, n.L)(
              '\u0637\u0631\u062d \xab{plan}\xbb: \u0647\u0631 \u0646\u0641\u0631 \u0647\u0645\u200c\u0632\u0645\u0627\u0646 {n} \u062f\u0633\u062a\u06af\u0627\u0647 (\u06af\u0648\u0634\u06cc\u060c \u062a\u0628\u0644\u062a \u06cc\u0627 \u0645\u0631\u0648\u0631\u06af\u0631). \u0648\u0631\u0648\u062f \u0628\u0627 \u062f\u0633\u062a\u06af\u0627\u0647 \u0628\u06cc\u0634\u062a\u0631\u060c \u062f\u0633\u062a\u06af\u0627\u0647\u06cc \u0631\u0627 \u06a9\u0647 \u0627\u0632 \u0647\u0645\u0647 \u062f\u06cc\u0631\u062a\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647 \u062e\u0627\u0631\u062c \u0645\u06cc\u200c\u06a9\u0646\u062f.',
              { plan: r, n: (0, n.localDigits)(l) },
            );
      }),
      (e.replacedView = function (l, s = !0) {
        if (!l || l.sameDevice) return null;
        const c = Number(l.devices) || 1,
          L = 1 === c,
          p = u(l),
          d = L
            ? l.free
              ? (0, n.L)(
                  '\u0627\u0632 \u062f\u0633\u062a\u06af\u0627\u0647 \u0642\u0628\u0644\u06cc\u200c\u0627\u062a \u062e\u0627\u0631\u062c \u0634\u062f\u06cc. \u062a\u0648 \u0631\u0648\u06cc \u0637\u0631\u062d \u0631\u0627\u06cc\u06af\u0627\u0646 \u0647\u0633\u062a\u06cc \u0648 \u0637\u0631\u062d \u0631\u0627\u06cc\u06af\u0627\u0646 \u0647\u0645\u200c\u0632\u0645\u0627\u0646 \u0641\u0642\u0637 \u0631\u0648\u06cc \u06cc\u06a9 \u062f\u0633\u062a\u06af\u0627\u0647 \u06a9\u0627\u0631 \u0645\u06cc\u200c\u06a9\u0646\u062f. \u0628\u0631\u0627\u06cc \u06a9\u0627\u0631 \u0647\u0645\u200c\u0632\u0645\u0627\u0646 \u0631\u0648\u06cc \u0686\u0646\u062f \u062f\u0633\u062a\u06af\u0627\u0647\u060c \u067e\u0644\u0627\u0633 \u0628\u06af\u06cc\u0631',
                )
              : (0, n.L)(
                  '\u0627\u0632 \u062f\u0633\u062a\u06af\u0627\u0647 \u0642\u0628\u0644\u06cc\u200c\u0627\u062a \u062e\u0627\u0631\u062c \u0634\u062f\u06cc. \u0628\u0631\u0627\u06cc \u06a9\u0627\u0631 \u0647\u0645\u200c\u0632\u0645\u0627\u0646 \u0631\u0648\u06cc \u0686\u0646\u062f \u062f\u0633\u062a\u06af\u0627\u0647\u060c \u067e\u0644\u0627\u0633 \u0628\u06af\u06cc\u0631',
                )
            : (0, n.L)(
                '\u0627\u0632 \u062f\u0633\u062a\u06af\u0627\u0647 \u0642\u0628\u0644\u06cc\u200c\u0627\u062a \u062e\u0627\u0631\u062c \u0634\u062f\u06cc. \u062f\u0631 \u0637\u0631\u062d \xab{plan}\xbb \u0647\u0631 \u0646\u0641\u0631 \u0647\u0645\u200c\u0632\u0645\u0627\u0646 \u0628\u0627 {n} \u062f\u0633\u062a\u06af\u0627\u0647 \u0648\u0627\u0631\u062f \u0645\u06cc\u200c\u0634\u0648\u062f.',
                { plan: p, n: (0, n.localDigits)(c) },
              ),
          h = (l.sessions || []).map(
            (n) =>
              o(n.kind) +
              ' \xab' +
              r((0, t.shownDeviceName)(n.deviceName, n.kind)) +
              '\xbb',
          );
        return {
          title: (0, n.L)(
            '\u0627\u0632 \u062f\u0633\u062a\u06af\u0627\u0647 \u0642\u0628\u0644\u06cc\u200c\u0627\u062a \u062e\u0627\u0631\u062c \u0634\u062f\u06cc',
          ),
          text: d,
          devices: h,
          upgrade: L && s,
        };
      }),
      (e.sessionEndedText = function (t, l, r) {
        const o = l,
          c = Number(o?.phone) > 0 && Number(o?.web) > 0,
          L = Number(r?.devices) > 0 ? Number(r.devices) : 0,
          d = L
            ? (0, n.L)(
                '\u0637\u0631\u062d \xab{plan}\xbb \u0647\u0645\u200c\u0632\u0645\u0627\u0646 \u0641\u0642\u0637 {n} \u0631\u0627 \u0645\u06cc\u200c\u067e\u0630\u06cc\u0631\u062f',
                { plan: u(r), n: p(L) },
              )
            : c
              ? (0, n.L)(
                  '\u0637\u0631\u062d \u0634\u0645\u0627 \u0647\u0645\u200c\u0632\u0645\u0627\u0646 \u0641\u0642\u0637 {phone} \u0648 {web} \u0631\u0627 \u0645\u06cc\u200c\u067e\u0630\u06cc\u0631\u062f',
                  {
                    phone: s(Number(o.phone), 'phone'),
                    web: s(Number(o.web), 'web'),
                  },
                )
              : (0, n.L)(
                  '\u062a\u0639\u062f\u0627\u062f \u06af\u0648\u0634\u06cc \u0648 \u0645\u0631\u0648\u0631\u06af\u0631\u06cc \u06a9\u0647 \u0637\u0631\u062d \u0634\u0645\u0627 \u0647\u0645\u200c\u0632\u0645\u0627\u0646 \u0645\u06cc\u200c\u067e\u0630\u06cc\u0631\u062f \u067e\u0631 \u0628\u0648\u062f',
                ),
          h = (0, n.L)(
            '\u0627\u0632 \u062d\u0633\u0627\u0628 \u062e\u0627\u0631\u062c \u0634\u062f\u06cc\u062f',
          );
        switch (t) {
          case 'device_limit':
            return {
              title: h,
              why: L
                ? (0, n.L)(
                    '\u0627\u06cc\u0646 \u062f\u0633\u062a\u06af\u0627\u0647 \u0627\u0632 \u062d\u0633\u0627\u0628 \u062e\u0627\u0631\u062c \u0634\u062f \u0686\u0648\u0646 {rule} \u0648 \u062f\u0633\u062a\u06af\u0627\u0647 \u062f\u06cc\u06af\u0631\u06cc \u062a\u0627\u0632\u0647\u200c\u062a\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647 \u0628\u0648\u062f. \u062f\u0648\u0628\u0627\u0631\u0647 \u0648\u0627\u0631\u062f \u0634\u0648\u06cc\u062f.',
                    { rule: d },
                  )
                : (0, n.L)(
                    '\u0627\u06cc\u0646 \u062f\u0633\u062a\u06af\u0627\u0647 \u0627\u0632 \u062d\u0633\u0627\u0628 \u062e\u0627\u0631\u062c \u0634\u062f \u0686\u0648\u0646 {rule} \u0648 \u062f\u0633\u062a\u06af\u0627\u0647 \u062f\u06cc\u06af\u0631\u06cc \u0627\u0632 \u0647\u0645\u06cc\u0646 \u0646\u0648\u0639 \u062a\u0627\u0632\u0647\u200c\u062a\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647 \u0628\u0648\u062f. \u062f\u0648\u0628\u0627\u0631\u0647 \u0648\u0627\u0631\u062f \u0634\u0648\u06cc\u062f\u061b \u0627\u06af\u0631 \u0644\u0627\u0632\u0645 \u0634\u062f \u0622\u0646 \u062f\u0633\u062a\u06af\u0627\u0647 \u0631\u0627 \u062e\u0627\u0631\u062c \u06a9\u0646\u06cc\u062f.',
                    { rule: d },
                  ),
            };
          case 'plan_limit':
            return {
              title: h,
              why: (0, n.L)(
                '\u0627\u06cc\u0646 \u062f\u0633\u062a\u06af\u0627\u0647 \u0627\u0632 \u062d\u0633\u0627\u0628 \u062e\u0627\u0631\u062c \u0634\u062f \u0686\u0648\u0646 \u0637\u0631\u062d \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0639\u0648\u0636 \u0634\u062f \u0648 \u062f\u06cc\u06af\u0631 \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646 \u062d\u0633\u0627\u0628 \u062c\u0627 \u0646\u062f\u0627\u0631\u062f. \u0627\u0632 \u0635\u0627\u062d\u0628 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0628\u062e\u0648\u0627\u0647\u06cc\u062f \u0637\u0631\u062d \xab\u067e\u0644\u0627\u0633\xbb \u0631\u0627 \u0628\u06af\u06cc\u0631\u062f.',
              ),
            };
          case 'replaced':
            return {
              title: h,
              why: L
                ? (0, n.L)(
                    '\u0627\u06cc\u0646 \u062f\u0633\u062a\u06af\u0627\u0647 \u0627\u0632 \u062d\u0633\u0627\u0628 \u062e\u0627\u0631\u062c \u0634\u062f \u0686\u0648\u0646 \u0628\u0627 \u0647\u0645\u06cc\u0646 \u062d\u0633\u0627\u0628 \u0631\u0648\u06cc \u062f\u0633\u062a\u06af\u0627\u0647 \u062f\u06cc\u06af\u0631\u06cc \u0648\u0627\u0631\u062f \u0634\u062f\u0646\u062f \u0648 {rule}. \u0627\u06af\u0631 \u06a9\u0627\u0631 \u0634\u0645\u0627 \u0646\u0628\u0648\u062f\u060c \u0631\u0645\u0632 \u062d\u0633\u0627\u0628 \u0631\u0627 \u0639\u0648\u0636 \u06a9\u0646\u06cc\u062f.',
                    { rule: d },
                  )
                : (0, n.L)(
                    '\u0627\u06cc\u0646 \u062f\u0633\u062a\u06af\u0627\u0647 \u0627\u0632 \u062d\u0633\u0627\u0628 \u062e\u0627\u0631\u062c \u0634\u062f \u0686\u0648\u0646 \u0628\u0627 \u0647\u0645\u06cc\u0646 \u062d\u0633\u0627\u0628 \u0631\u0648\u06cc \u062f\u0633\u062a\u06af\u0627\u0647 \u062f\u06cc\u06af\u0631\u06cc \u0648\u0627\u0631\u062f \u0634\u062f\u0646\u062f \u0648 \u0627\u06cc\u0646 \u062f\u0633\u062a\u06af\u0627\u0647 \u0631\u0627 \u0628\u06cc\u0631\u0648\u0646 \u06a9\u0631\u062f\u0646\u062f. \u0627\u06af\u0631 \u06a9\u0627\u0631 \u0634\u0645\u0627 \u0646\u0628\u0648\u062f\u060c \u0631\u0645\u0632 \u062d\u0633\u0627\u0628 \u0631\u0627 \u0639\u0648\u0636 \u06a9\u0646\u06cc\u062f.',
                  ),
            };
          case 'device_removed':
            return {
              title: h,
              why: (0, n.L)(
                '\u0627\u06cc\u0646 \u062f\u0633\u062a\u06af\u0627\u0647 \u0627\u0632 \u0628\u062e\u0634 \xab\u062f\u0633\u062a\u06af\u0627\u0647\u200c\u0647\u0627\u06cc \u0641\u0639\u0627\u0644\xbb \u0627\u0632 \u062d\u0633\u0627\u0628 \u062e\u0627\u0631\u062c \u0634\u062f. \u062f\u0648\u0628\u0627\u0631\u0647 \u0648\u0627\u0631\u062f \u0634\u0648\u06cc\u062f.',
              ),
            };
          case 'password_changed':
            return {
              title: h,
              why: (0, n.L)(
                '\u0631\u0645\u0632 \u0627\u06cc\u0646 \u062d\u0633\u0627\u0628 \u0639\u0648\u0636 \u0634\u062f\u061b \u0628\u0627 \u0631\u0645\u0632 \u062a\u0627\u0632\u0647 \u062f\u0648\u0628\u0627\u0631\u0647 \u0648\u0627\u0631\u062f \u0634\u0648\u06cc\u062f.',
              ),
            };
          default:
            return {
              title: h,
              why: (0, n.L)(
                '\u0627\u06cc\u0646 \u062f\u0633\u062a\u06af\u0627\u0647 \u0627\u0632 \u062d\u0633\u0627\u0628 \u062e\u0627\u0631\u062c \u0634\u062f\u061b \u062f\u0648\u0628\u0627\u0631\u0647 \u0648\u0627\u0631\u062f \u0634\u0648\u06cc\u062f.',
              ),
            };
        }
      }));
    var n = _r(_d[0]),
      t = _r(_d[1]);
    const l = (n) =>
        /^[ -~]+$/.test(n)
          ? '\u2066' +
            n.replace(/ /g, '\xa0').replace(/-/g, '\u2060-\u2060') +
            '\u2069'
          : n,
      r = l,
      o = (t) =>
        'web' === t
          ? (0, n.L)('\u0645\u0631\u0648\u0631\u06af\u0631')
          : 'phone' === t
            ? (0, n.L)('\u06af\u0648\u0634\u06cc')
            : (0, n.L)('\u062f\u0633\u062a\u06af\u0627\u0647'),
      s = (t, l) =>
        (1 === t ? (0, n.L)('\u06cc\u06a9') : (0, n.localDigits)(t)) +
        ' ' +
        o(l);
    function c(t, l = Date.now()) {
      const r = t ? Date.parse(t) : NaN;
      if (!Number.isFinite(r))
        return (0, n.L)('\u0646\u0627\u0645\u0639\u0644\u0648\u0645');
      const o = Math.max(0, Math.floor((l - r) / 6e4));
      if (o < 2)
        return (0, n.L)('\u0647\u0645\u06cc\u0646 \u062d\u0627\u0644\u0627');
      if (o < 60)
        return (0, n.L)(
          '{n} \u062f\u0642\u06cc\u0642\u0647 \u067e\u06cc\u0634',
          { n: (0, n.localDigits)(o) },
        );
      const s = Math.floor(o / 60);
      if (s < 24)
        return (0, n.L)('{n} \u0633\u0627\u0639\u062a \u067e\u06cc\u0634', {
          n: (0, n.localDigits)(s),
        });
      const c = Math.floor(s / 24);
      return 1 === c
        ? (0, n.L)('\u062f\u06cc\u0631\u0648\u0632')
        : (0, n.L)('{n} \u0631\u0648\u0632 \u067e\u06cc\u0634', {
            n: (0, n.localDigits)(c),
          });
    }
    const L = (t) =>
      t.planLabel ||
      ('pro' === t.plan
        ? (0, n.L)('\u067e\u0644\u0627\u0633')
        : 'team' === t.plan
          ? (0, n.L)('\u0627\u0648\u0644\u062a\u0631\u0627')
          : (0, n.L)('\u0627\u0633\u062a\u0627\u0646\u062f\u0627\u0631\u062f'));
    const u = (t) =>
        t.free ? (0, n.L)('\u0631\u0627\u06cc\u06af\u0627\u0646') : L(t),
      p = (t) =>
        1 === t
          ? (0, n.L)('\u06cc\u06a9 \u062f\u0633\u062a\u06af\u0627\u0647')
          : (0, n.L)('{n} \u062f\u0633\u062a\u06af\u0627\u0647', {
              n: (0, n.localDigits)(t),
            });
  },
  544,
  [311, 478],
);
