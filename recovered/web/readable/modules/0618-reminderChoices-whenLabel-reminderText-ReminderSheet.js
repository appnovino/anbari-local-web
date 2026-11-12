// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 618; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.reminderChoices = x),
      (_e.whenLabel = b),
      (_e.reminderText = L),
      (_e.ReminderSheet = function ({
        visible: e,
        value: w,
        onPick: S,
        onClose: j,
        title: k,
      }) {
        const { colors: M } = (0, d.useTheme)(),
          [T, v] = (0, t.useState)(!1),
          C = new Date(),
          z = () => {
            const e =
              w && Date.parse(w) > Date.now() ? new Date(w) : p(C, 1, 9);
            return {
              ...(0, f.calParts)(e),
              hour: e.getHours(),
              minute: e.getMinutes(),
            };
          },
          [H, I] = (0, t.useState)(z),
          [P, _] = (0, t.useState)(() =>
            w && Date.parse(w) > Date.now() ? w : p(C, 1, 9).toISOString(),
          ),
          B = async (e) => {
            (e && (await (0, D.ensureReminderNotifications)()), v(!1), S(e));
          },
          F = (e, t, o, s, c, d = !1) =>
            (0, y.jsxs)(
              n.default,
              {
                testID: 'reminder-' + e,
                accessibilityRole: 'button',
                onPress: c,
                style: ({ pressed: e }) => ({
                  minHeight: 56,
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  gap: 12,
                  paddingHorizontal: 14,
                  borderRadius: 14,
                  backgroundColor: e ? M.soft : 'transparent',
                }),
                children: [
                  (0, y.jsx)(u.Icon, {
                    name: t,
                    size: 20,
                    color: d ? M.danger : M.accent,
                  }),
                  (0, y.jsx)(l.Copy, {
                    style: {
                      flex: 1,
                      fontSize: 15,
                      color: d ? M.danger : M.text,
                    },
                    children: o,
                  }),
                  !!s &&
                    (0, y.jsx)(l.Copy, {
                      style: { fontSize: 13, color: M.muted },
                      children: s,
                    }),
                ],
              },
              e,
            );
        return (0, y.jsx)(s.Sheet, {
          visible: e,
          title: k || (0, h.L)('\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc'),
          onClose: () => {
            (v(!1), j());
          },
          children: T
            ? (0, y.jsxs)(o.default, {
                style: { gap: 12, paddingBottom: 4 },
                children: [
                  (0, y.jsx)(c.JalaliDateField, {
                    id: 'reminder-date',
                    quick: 'future',
                    value: H,
                    onChange: (e, t) => {
                      (I(e), _(t));
                    },
                  }),
                  (0, y.jsxs)(o.default, {
                    style: { flexDirection: 'row-reverse', gap: 10 },
                    children: [
                      (0, y.jsx)(o.default, {
                        style: { flex: 2 },
                        children: (0, y.jsx)(l.Button, {
                          testID: 'reminder-custom-save',
                          disabled: Date.parse(P) < Date.now(),
                          onPress: () => B(P),
                          children: (0, h.L)(
                            '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u062f\u0631 \u0627\u06cc\u0646 \u0632\u0645\u0627\u0646',
                          ),
                        }),
                      }),
                      (0, y.jsx)(o.default, {
                        style: { flex: 1 },
                        children: (0, y.jsx)(l.Button, {
                          secondary: !0,
                          onPress: () => v(!1),
                          children: (0, h.L)(
                            '\u0628\u0627\u0632\u06af\u0634\u062a',
                          ),
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : (0, y.jsxs)(o.default, {
                style: { gap: 2, paddingBottom: 4 },
                children: [
                  !!w &&
                    (0, y.jsx)(l.Copy, {
                      style: {
                        fontSize: 12,
                        color: M.muted,
                        paddingHorizontal: 14,
                        paddingBottom: 6,
                      },
                      children: (0, h.L)('\u0627\u0644\u0627\u0646: {when}', {
                        when: L(w),
                      }),
                    }),
                  x(C).map((e) =>
                    F(e.key, e.icon, e.label, b(e.at, C), () =>
                      B(e.at.toISOString()),
                    ),
                  ),
                  (0, y.jsx)(o.default, {
                    style: {
                      height: 1,
                      backgroundColor: M.line,
                      marginVertical: 6,
                    },
                  }),
                  F(
                    'custom',
                    'edit',
                    (0, h.L)(
                      '\u0627\u0646\u062a\u062e\u0627\u0628 \u062a\u0627\u0631\u06cc\u062e \u0648 \u0633\u0627\u0639\u062a',
                    ),
                    '',
                    () => {
                      (I(z()), v(!0));
                    },
                  ),
                  !!w &&
                    F(
                      'clear',
                      'close',
                      (0, h.L)(
                        '\u0628\u0631\u062f\u0627\u0634\u062a\u0646 \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc',
                      ),
                      '',
                      () => B(null),
                      !0,
                    ),
                ],
              }),
        });
      }));
    var t = r(_d[0]),
      n = e(r(_d[1])),
      o = e(r(_d[2])),
      l = r(_d[3]),
      s = r(_d[4]),
      u = r(_d[5]),
      c = r(_d[6]),
      d = r(_d[7]),
      h = r(_d[8]),
      f = r(_d[9]),
      D = r(_d[10]),
      y = r(_d[11]);
    const p = (e, t, n, o = 0) =>
        new Date(e.getFullYear(), e.getMonth(), e.getDate() + t, n, o, 0, 0),
      w = (e) => new Date(3e5 * Math.ceil(e.getTime() / 3e5));
    function x(e = new Date()) {
      const t = [
        {
          key: 'hour',
          icon: 'bell',
          label: (0, h.L)(
            '\u06cc\u06a9 \u0633\u0627\u0639\u062a \u062f\u06cc\u06af\u0631',
          ),
          at: w(new Date(e.getTime() + 36e5)),
        },
      ];
      (e.getHours() < 16 &&
        t.push({
          key: 'evening',
          icon: 'moon',
          label: (0, h.L)('\u0627\u0645\u0631\u0648\u0632 \u0639\u0635\u0631'),
          at: p(e, 0, 18),
        }),
        t.push({
          key: 'tomorrow',
          icon: 'sun',
          label: (0, h.L)('\u0641\u0631\u062f\u0627 \u0635\u0628\u062d'),
          at: p(e, 1, 9),
        }));
      const n = (5 - e.getDay() + 7) % 7 || 7,
        o = (6 - e.getDay() + 7) % 7 || 7;
      return (
        n > 1 &&
          t.push({
            key: 'friday',
            icon: 'sun',
            label: (0, h.L)('\u062c\u0645\u0639\u0647 \u0635\u0628\u062d'),
            at: p(e, n, 10),
          }),
        t.push({
          key: 'week',
          icon: 'arrow',
          label: (0, h.L)(
            '\u0634\u0646\u0628\u0647\u0654 \u0622\u06cc\u0646\u062f\u0647',
          ),
          at: p(e, o, 9),
        }),
        t
      );
    }
    function b(e, t = new Date()) {
      const n = new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime(),
        o = new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime(),
        l = Math.round((o - n) / 864e5),
        s = (0, h.localDigits)(
          String(e.getHours()).padStart(2, '0') +
            ':' +
            String(e.getMinutes()).padStart(2, '0'),
        );
      return `${0 === l ? (0, h.L)('\u0627\u0645\u0631\u0648\u0632') : 1 === l ? (0, h.L)('\u0641\u0631\u062f\u0627') : e.toLocaleDateString((0, h.dateLocale)(), { weekday: 'long', ...(l > 6 ? { day: 'numeric', month: 'long' } : {}) })} ${s}`;
    }
    function L(e, t = new Date()) {
      if (!e)
        return (0, h.L)(
          '\u0628\u062f\u0648\u0646 \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc',
        );
      const n = new Date(e);
      return Number.isFinite(n.getTime())
        ? n.getTime() < t.getTime()
          ? `${(0, f.formatMoment)(e)}\u060c ${(0, h.L)('\u06af\u0630\u0634\u062a\u0647')}`
          : Math.abs(n.getTime() - t.getTime()) < 6048e5
            ? b(n, t)
            : (0, f.formatMoment)(e)
        : (0, h.L)(
            '\u0628\u062f\u0648\u0646 \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc',
          );
    }
  },
  618,
  [2, 232, 99, 407, 539, 385, 619, 382, 311, 440, 523, 338],
);
