// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 730; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.CurrencyPicker = function ({
        testID: e = 'currency-picker',
        shop: S,
        canChangeUnit: k = !0,
      }) {
        const { colors: x } = (0, s.useTheme)(),
          {
            currency: C,
            setChoice: D,
            unit: R,
            setShopUnit: I,
          } = (0, f.useCurrency)(),
          [j, _] = (0, t.useState)(!1),
          [v, P] = (0, t.useState)(''),
          T = 'USD' === C || 'AED' === C,
          U = T ? C : R,
          w = [...(k ? ['toman', 'rial'] : [R]), 'USD', 'AED'],
          z = (e) =>
            'toman' === e
              ? (0, l.L)('\u062a\u0648\u0645\u0627\u0646')
              : 'rial' === e
                ? (0, l.L)('\u0631\u06cc\u0627\u0644')
                : (0, l.L)(u.currencyNames[e]);
        async function A(e) {
          if ((P(''), e !== R && k)) {
            if ((f.returnToProfile.set(), S)) {
              _(!0);
              try {
                await (0, y.patchNotebookSettings)(S, { moneyUnit: e });
                const t = (0, p.scoped)(S.id, 'notebook-shop');
                t &&
                  (await p.swrStore
                    .revalidate(t, () => (0, y.readNotebookShop)(S))
                    .catch(() => {}));
              } catch (e) {
                return (
                  f.returnToProfile.take(),
                  P((0, h.message)(e)),
                  void _(!1)
                );
              }
              _(!1);
            }
            I(e);
          }
          T && D('IRT');
        }
        function H(e) {
          j || e === U || ('toman' === e || 'rial' === e ? A(e) : D(e));
        }
        return (0, b.jsxs)(o.default, {
          style: { alignItems: 'flex-end', gap: 4, flexShrink: 0 },
          children: [
            (0, b.jsx)(o.default, {
              testID: e,
              style: {
                flexDirection: 'row-reverse',
                backgroundColor: x.soft,
                borderRadius: 999,
                padding: 3,
                opacity: j ? 0.6 : 1,
              },
              children: w.map((e) =>
                (0, b.jsx)(
                  n.default,
                  {
                    testID:
                      'currency-' +
                      ('toman' === e ? 'IRT' : 'rial' === e ? 'IRR' : e),
                    accessibilityRole: 'button',
                    accessibilityState: { selected: U === e, disabled: j },
                    onPress: () => H(e),
                    style: {
                      paddingHorizontal: 11,
                      paddingVertical: 5,
                      borderRadius: 999,
                      backgroundColor: U === e ? x.accentSoft : 'transparent',
                    },
                    children: (0, b.jsx)(c.Copy, {
                      style: {
                        fontSize: 11,
                        lineHeight: 18,
                        textAlign: 'center',
                      },
                      children: z(e),
                    }),
                  },
                  e,
                ),
              ),
            }),
            !!v &&
              (0, b.jsx)(c.Copy, {
                accessibilityRole: 'alert',
                style: { fontSize: 11, lineHeight: 17, color: x.danger },
                children: v,
              }),
          ],
        });
      }));
    var t = r(d[0]),
      n = e(r(d[1])),
      o = e(r(d[2])),
      s = r(d[3]),
      c = r(d[4]),
      l = r(d[5]),
      u = r(d[6]),
      f = r(d[7]),
      y = r(d[8]),
      h = r(d[9]),
      p = r(d[10]),
      b = r(d[11]);
  },
  730,
  [2, 232, 99, 382, 407, 311, 435, 578, 519, 415, 489, 338],
);
