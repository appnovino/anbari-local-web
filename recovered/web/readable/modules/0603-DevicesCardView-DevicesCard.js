// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 603; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, _m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.DevicesCardView = x),
      (_e.DevicesCard = function ({ shop: e }) {
        const [s, n] = (0, t.useState)([]),
          [l, d] = (0, t.useState)(null),
          [u, y] = (0, t.useState)(null),
          [v, j] = (0, t.useState)(''),
          [w, b] = (0, c.useConfirm)();
        async function C() {
          try {
            const e = await (0, m.request)('/v1/auth/devices');
            (n(e.devices), d(e.rule || null), j(''));
          } catch (e) {
            j((0, m.message)(e));
          }
          if ('owner' === e?.role)
            try {
              y((await (0, m.request)((0, m.shopPath)(e, '/devices'))).members);
            } catch {
              y(null);
            }
        }
        return (
          (0, t.useEffect)(() => {
            C();
          }, [e?.id]),
          (0, f.jsxs)(f.Fragment, {
            children: [
              (0, f.jsx)(x, {
                own: s,
                rule: l,
                members: u,
                onRemove: function (t, s) {
                  const n = (0, h.kindLabel)(t.kind) + ' \xab' + p(t) + '\xbb';
                  w({
                    title: s
                      ? (0, o.L)(
                          '\u062f\u0633\u062a\u06af\u0627\u0647 {name} \u0627\u0632 \u062d\u0633\u0627\u0628 \u062e\u0627\u0631\u062c \u0634\u0648\u062f\u061f',
                          { name: s.name },
                        )
                      : (0, o.L)(
                          '\u0627\u06cc\u0646 \u062f\u0633\u062a\u06af\u0627\u0647 \u0627\u0632 \u062d\u0633\u0627\u0628 \u062e\u0627\u0631\u062c \u0634\u0648\u062f\u061f',
                        ),
                    text: (0, o.L)(
                      '{what} \u0647\u0645\u06cc\u0646 \u062d\u0627\u0644\u0627 \u0627\u0632 \u062d\u0633\u0627\u0628 \u062e\u0627\u0631\u062c \u0645\u06cc\u200c\u0634\u0648\u062f \u0648 \u0628\u0631\u0627\u06cc \u0648\u0631\u0648\u062f \u062f\u0648\u0628\u0627\u0631\u0647 \u0628\u0627\u06cc\u062f \u0631\u0645\u0632 \u06cc\u0627 \u06a9\u062f \u0631\u0627 \u0628\u0632\u0646\u062f. \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u067e\u0627\u06a9 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f.',
                      { what: n },
                    ),
                    ok: (0, o.L)(
                      '\u062e\u0631\u0648\u062c \u0622\u0646 \u062f\u0633\u062a\u06af\u0627\u0647',
                    ),
                    run: async () => {
                      try {
                        (await (0, m.request)(
                          s && e
                            ? (0, m.shopPath)(e, '/devices/' + t.id)
                            : '/v1/auth/devices/' + t.id,
                          'DELETE',
                        ),
                          await C());
                      } catch (e) {
                        j((0, m.message)(e));
                      }
                    },
                  });
                },
                error: v,
              }),
              b,
            ],
          })
        );
      }));
    var e,
      t = r(_d[0]),
      s = r(_d[1]),
      n = (e = s) && e.__esModule ? e : { default: e },
      o = r(_d[2]),
      l = r(_d[3]),
      d = r(_d[4]),
      c = r(_d[5]),
      u = r(_d[6]),
      m = r(_d[7]),
      h = r(_d[8]),
      y = r(_d[9]),
      f = r(_d[10]);
    const p = (e) =>
      (0, h.isolateName)((0, y.shownDeviceName)(e.deviceName, e.kind));
    function v({ session: e, onRemove: t, now: s }) {
      const { colors: c } = (0, u.useTheme)();
      return (0, f.jsxs)(n.default, {
        testID: 'device-row',
        style: [
          l.common.row,
          { paddingVertical: 10, borderTopWidth: 1, borderTopColor: c.line },
        ],
        children: [
          (0, f.jsx)(n.default, {
            style: {
              width: 40,
              height: 40,
              borderRadius: 12,
              backgroundColor: c.soft,
              alignItems: 'center',
              justifyContent: 'center',
            },
            children: (0, f.jsx)(d.Icon, {
              name: 'web' === e.kind ? 'browser' : 'phone',
              size: 22,
              color: c.text,
            }),
          }),
          (0, f.jsxs)(n.default, {
            style: { flex: 1, gap: 2 },
            children: [
              (0, f.jsxs)(n.default, {
                style: [l.common.row, { gap: 6, flexWrap: 'wrap' }],
                children: [
                  (0, f.jsx)(l.Copy, {
                    style: { fontFamily: 'Vazirmatn_600SemiBold' },
                    children: p(e),
                  }),
                  e.current &&
                    (0, f.jsx)(l.Copy, {
                      testID: 'device-current',
                      style: {
                        fontSize: 12,
                        lineHeight: 18,
                        color: c.accent,
                        backgroundColor: c.accentSoft,
                        borderRadius: 8,
                        paddingHorizontal: 8,
                        paddingVertical: 1,
                        overflow: 'hidden',
                      },
                      children: (0, o.L)(
                        '\u0627\u06cc\u0646 \u062f\u0633\u062a\u06af\u0627\u0647',
                      ),
                    }),
                ],
              }),
              (0, f.jsx)(l.Copy, {
                style: { fontSize: 13, lineHeight: 20, color: c.muted },
                children: e.current
                  ? (0, o.L)(
                      '{kind}\u060c \u0647\u0645\u06cc\u0646 \u0627\u0644\u0627\u0646',
                      { kind: (0, h.kindLabel)(e.kind) },
                    )
                  : (0, o.L)(
                      '{kind}\u060c \u0622\u062e\u0631\u06cc\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647: {when}',
                      {
                        kind: (0, h.kindLabel)(e.kind),
                        when: (0, h.relativeTime)(e.lastUsedAt, s),
                      },
                    ),
              }),
            ],
          }),
          !e.current &&
            t &&
            (0, f.jsx)(n.default, {
              style: { minWidth: 92 },
              children: (0, f.jsx)(l.Button, {
                testID: 'device-remove',
                secondary: !0,
                onPress: t,
                children: (0, o.L)('\u062e\u0631\u0648\u062c'),
              }),
            }),
        ],
      });
    }
    function x({ own: e, rule: t, members: s, onRemove: d, now: c, error: m }) {
      const { colors: y } = (0, u.useTheme)();
      return (0, f.jsxs)(l.Card, {
        testID: 'devices-card',
        style: { gap: 6 },
        children: [
          (0, f.jsx)(l.Copy, {
            accessibilityRole: 'header',
            style: l.common.title,
            children: (0, o.L)(
              '\u062f\u0633\u062a\u06af\u0627\u0647\u200c\u0647\u0627\u06cc \u0641\u0639\u0627\u0644',
            ),
          }),
          (0, f.jsx)(l.Copy, {
            testID: 'devices-rule',
            style: { fontSize: 13, lineHeight: 22, color: y.muted },
            children: (0, h.devicesRuleText)(t),
          }),
          e.map((e) =>
            (0, f.jsx)(v, { session: e, now: c, onRemove: () => d(e) }, e.id),
          ),
          !!s?.length &&
            (0, f.jsxs)(n.default, {
              style: { gap: 4, marginTop: 10 },
              children: [
                (0, f.jsx)(l.Copy, {
                  accessibilityRole: 'header',
                  style: [l.common.title, { fontSize: 17 }],
                  children: (0, o.L)(
                    '\u062f\u0633\u062a\u06af\u0627\u0647\u200c\u0647\u0627\u06cc \u0647\u0645\u06a9\u0627\u0631\u0627\u0646',
                  ),
                }),
                s.map((e) =>
                  (0, f.jsxs)(
                    n.default,
                    {
                      testID: 'member-devices',
                      style: { gap: 2, marginTop: 6 },
                      children: [
                        (0, f.jsx)(l.Copy, {
                          style: { fontFamily: 'Vazirmatn_700Bold' },
                          children: e.name,
                        }),
                        e.sessions.length
                          ? e.sessions.map((t) =>
                              (0, f.jsx)(
                                v,
                                { session: t, now: c, onRemove: () => d(t, e) },
                                t.id,
                              ),
                            )
                          : (0, f.jsx)(l.Copy, {
                              style: {
                                fontSize: 13,
                                lineHeight: 20,
                                color: y.muted,
                              },
                              children: (0, o.L)(
                                '\u0627\u0644\u0627\u0646 \u0628\u0627 \u0647\u06cc\u0686 \u062f\u0633\u062a\u06af\u0627\u0647\u06cc \u0648\u0627\u0631\u062f \u0646\u06cc\u0633\u062a.',
                              ),
                            }),
                      ],
                    },
                    e.userId,
                  ),
                ),
              ],
            }),
          !!m &&
            (0, f.jsx)(l.Copy, {
              accessibilityRole: 'alert',
              style: { color: y.danger },
              children: m,
            }),
        ],
      });
    }
  },
  603,
  [2, 99, 311, 407, 385, 534, 382, 415, 544, 478, 338],
);
