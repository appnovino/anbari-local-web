// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 911; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'canAddClubMember', {
        enumerable: !0,
        get: function () {
          return _.canAddClubMember;
        },
      }),
      Object.defineProperty(_e, 'joinLine', {
        enumerable: !0,
        get: function () {
          return _.joinLine;
        },
      }),
      (_e.ClubJoinSheet = function ({
        shop: e,
        visible: t,
        initialName: c = '',
        onClose: p,
        onJoined: _,
      }) {
        const { colors: x } = (0, u.useTheme)(),
          [v, C] = (0, n.useState)(''),
          [M, E] = (0, n.useState)(''),
          [I, D] = (0, n.useState)(''),
          [P, T] = (0, n.useState)(!1);
        (0, n.useEffect)(() => {
          t && (C(c), E(''), D(''));
        }, [t]);
        const w = !!v.trim() && !!M.trim() && !P;
        async function A() {
          if (!w) return;
          const n = (0, h.normalizeMobile)(M);
          if ((0, h.validMobile)(n)) {
            (T(!0), D(''));
            try {
              _(await (0, f.joinClub)(e, { name: v.trim(), phone: n }));
            } catch (e) {
              D(S(e));
            } finally {
              T(!1);
            }
          } else D((0, b.L)(L.contact_phone_invalid));
        }
        const F = (0, j.jsx)(o.default, {
          style: { flexDirection: 'row-reverse', gap: 8 },
          children: (0, j.jsx)(y.SmallKey, {
            grow: !0,
            testID: 'club-join-save',
            kind: 'primary',
            label: P
              ? (0, b.L)(
                  '\u062f\u0631 \u062d\u0627\u0644 \u0630\u062e\u06cc\u0631\u0647\u2026',
                )
              : (0, b.L)('\u0630\u062e\u06cc\u0631\u0647'),
            disabled: !w,
            onPress: A,
          }),
        });
        return (0, j.jsx)(l.Sheet, {
          visible: t,
          title: (0, b.L)(
            '\u0639\u0636\u0648 \u062c\u062f\u06cc\u062f \u0628\u0627\u0634\u06af\u0627\u0647',
          ),
          onClose: p,
          onSubmit: () => {
            A();
          },
          busy: P,
          footer: F,
          children: (0, j.jsxs)(o.default, {
            testID: 'club-join-sheet',
            style: { gap: 12 },
            children: [
              (0, j.jsx)(y.Field, {
                label: (0, b.L)('\u0646\u0627\u0645'),
                children: (0, j.jsx)(s.Input, {
                  testID: 'club-join-name',
                  value: v,
                  onChangeText: (e) => {
                    (C(e), D(''));
                  },
                  maxLength: 100,
                  autoFocus: !c,
                  returnKeyType: 'next',
                  style: { minHeight: 44, paddingVertical: 8 },
                }),
              }),
              (0, j.jsx)(y.Field, {
                label: (0, b.L)(
                  '\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644',
                ),
                children: (0, j.jsx)(s.Input, {
                  testID: 'club-join-phone',
                  value: M,
                  onChangeText: (e) => {
                    (E(e), D(''));
                  },
                  placeholder: (0, b.L)(
                    '\u0645\u062b\u0644\u0627\u064b \u06f0\u06f9\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9',
                  ),
                  keyboardType: 'phone-pad',
                  inputMode: 'tel',
                  maxLength: 20,
                  autoFocus: !!c,
                  ltr: !0,
                  returnKeyType: 'done',
                  onSubmitEditing: () => {
                    A();
                  },
                  style: { minHeight: 44, paddingVertical: 8 },
                }),
              }),
              !!I &&
                (0, j.jsx)(s.Copy, {
                  testID: 'club-join-error',
                  accessibilityRole: 'alert',
                  style: { fontSize: 13, color: x.danger },
                  children: I,
                }),
            ],
          }),
        });
      }));
    var e,
      n = r(d[0]),
      t = r(d[1]),
      o = (e = t) && e.__esModule ? e : { default: e },
      l = r(d[2]),
      s = r(d[3]),
      u = r(d[4]),
      c = r(d[5]),
      b = r(d[6]),
      h = r(d[7]),
      p = r(d[8]),
      y = r(d[9]),
      f = r(d[10]),
      j = r(d[11]),
      _ = r(d[12]);
    const L = {
        club_plus_only: p.CLUB_PLUS_MESSAGE,
        club_paid_only: p.CLUB_PLUS_MESSAGE,
        forbidden:
          '\u0627\u0641\u0632\u0648\u062f\u0646 \u0645\u0634\u062a\u0631\u06cc \u0628\u0631\u0627\u06cc \u062a\u0648 \u0628\u0627\u0632 \u0646\u06cc\u0633\u062a.',
        hidden_by_owner:
          '\u062f\u06cc\u062f\u0646 \u062d\u0633\u0627\u0628\u200c\u0647\u0627 \u0628\u0631\u0627\u06cc \u062a\u0648 \u0628\u0633\u062a\u0647 \u0627\u0633\u062a.',
        contact_phone_invalid:
          '\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644 \u062f\u0631\u0633\u062a \u0646\u06cc\u0633\u062a\u061b \u06f1\u06f1 \u0631\u0642\u0645 \u0628\u0627\u0634\u062f \u0648 \u0628\u0627 \u06f0\u06f9 \u0634\u0631\u0648\u0639 \u0634\u0648\u062f.',
      },
      S = (e) => {
        const n = e instanceof Error ? e.message : '';
        return L[n] ? (0, b.L)(L[n]) : (0, c.message)(e);
      };
  },
  911,
  [2, 99, 539, 407, 382, 415, 311, 438, 461, 517, 909, 338, 912],
);
