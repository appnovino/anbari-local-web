// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 341; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return D;
        },
      }));
    var t = r(d[0]),
      s = e(r(d[1]));
    r(d[2]);
    var n = e(r(d[3])),
      o = r(d[4]),
      c = r(d[5]),
      u = r(d[6]),
      l = r(d[7]),
      j = r(d[8]),
      x = r(d[9]),
      f = r(d[10]),
      v = r(d[11]),
      h = r(d[12]),
      P = r(d[13]),
      w = r(d[14]),
      p = r(d[15]),
      A = r(d[16]),
      S = r(d[17]),
      y = r(d[18]);
    r(d[19]);
    var T = r(d[20]),
      b = r(d[21]),
      H = r(d[22]),
      k = r(d[23]),
      L = r(d[24]),
      F = r(d[25]),
      _ = r(d[26]),
      E = r(d[27]),
      C = r(d[28]),
      G = r(d[29]),
      I = r(d[30]),
      R = r(d[31]),
      z = r(d[32]);
    function D() {
      return (0, z.jsx)(A.LangProvider, {
        children: (0, z.jsx)(S.CurrencyProvider, {
          children: (0, z.jsx)(P.ThemeProvider, {
            children: (0, z.jsxs)(y.LargeTextProvider, {
              children: [
                (0, z.jsx)(H.ErrorBoundary, { children: (0, z.jsx)(O, {}) }),
                (0, z.jsx)(x.UpdateBanner, {}),
              ],
            }),
          }),
        }),
      });
    }
    function O() {
      const [e, x] = (0, c.useFonts)(u.vazirmatnFirstFont);
      (0, t.useEffect)(() => {
        Object.keys(u.vazirmatnLaterFonts).length &&
          (0, c.loadAsync)(u.vazirmatnLaterFonts).catch(() => {});
      }, []);
      const { colors: w } = (0, P.useTheme)(),
        { unit: p } = (0, S.useCurrency)();
      (0, t.useEffect)(() => {
        (0, f.setInvalidator)((e) => v.swrStore.invalidateShop(e));
      }, []);
      const A = (0, z.jsx)(n.default, {
        style: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: w.bg,
        },
        children: (0, z.jsx)(s.default, { color: w.text }),
      });
      if (!e && !x) return A;
      const y = (0, F.errorPreviewRoute)();
      if (y)
        return (0, z.jsxs)(o.SafeAreaProvider, {
          children: [
            (0, z.jsx)(F.ErrorPreview, { route: y }),
            (0, z.jsx)(T.ToastHost, {}),
          ],
        });
      const H = (0, _.devicesPreviewRoute)();
      if (H)
        return (0, z.jsxs)(o.SafeAreaProvider, {
          children: [
            (0, z.jsx)(_.DevicesPreview, { route: H }),
            (0, z.jsx)(T.ToastHost, {}),
          ],
        });
      const R = (0, E.tourPreviewRoute)();
      if (R)
        return (0, z.jsxs)(o.SafeAreaProvider, {
          children: [
            (0, z.jsx)(E.TourPreview, { route: R }),
            (0, z.jsx)(T.ToastHost, {}),
          ],
        });
      const D = (0, C.linkPreviewRoute)();
      return D
        ? (0, z.jsxs)(o.SafeAreaProvider, {
            children: [
              (0, z.jsx)(C.LinkPreview, { route: D }),
              (0, z.jsx)(T.ToastHost, {}),
            ],
          })
        : 'undefined' == typeof window ||
            (0, L.isAppPath)(window.location.pathname)
          ? (0, z.jsxs)(o.SafeAreaProvider, {
              children: [
                (0, z.jsx)(h.AppUpdateGate, {
                  children: (0, z.jsx)(l.AccountGate, {
                    children: (e, s, n, o, c, u, l) =>
                      (0, z.jsx)(t.Suspense, {
                        fallback: A,
                        children: (0, z.jsx)(
                          I.Workspace,
                          {
                            shop: e,
                            user: s,
                            exit: n,
                            demo: o,
                            startTrial: c,
                            logout: u,
                            demoGuide: l,
                          },
                          (e?.id || 'local') +
                            (o ? ':' + (0, j.demoSession)() : '') +
                            ('rial' === p ? ':rial' : ''),
                        ),
                      }),
                  }),
                }),
                (0, z.jsx)(G.DeviceLimitSheet, {}),
                (0, z.jsx)(T.ToastHost, {}),
                (0, z.jsx)(b.VoiceAddHost, {}),
                (0, z.jsx)(B, {}),
              ],
            })
          : (0, z.jsxs)(o.SafeAreaProvider, {
              children: [
                (0, z.jsx)(k.ErrorView, {
                  variant: 'screen',
                  testID: 'not-found-page',
                  info: (0, L.notFoundPage)(window.location.pathname),
                  home: () => window.location.assign('/'),
                }),
                (0, z.jsx)(T.ToastHost, {}),
              ],
            });
    }
    function B() {
      return (0, R.useAgentPage)()
        ? (0, z.jsx)(t.Suspense, {
            fallback: null,
            children: (0, z.jsx)(I.LiveAgentHost, {}),
          })
        : null;
    }
    ((0, w.injectScrollGutter)(), (0, p.installWebKeyboardInset)());
  },
  341,
  [
    2, 217, 94, 99, 342, 348, 373, 379, 448, 572, 415, 489, 574, 382, 576, 577,
    1, 578, 579, 581, 525, 584, 598, 599, 600, 601, 602, 604, 605, 543, 551,
    606, 338,
  ],
);
