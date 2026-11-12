// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 572; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.reloadNewest = p),
      (_e.updateBannerPlace = b),
      (_e.checkForUpdate = function () {
        v();
      }),
      (_e.UpdateBanner = function () {
        const { colors: e } = (0, u.useTheme)(),
          x = (0, s.useDesktop)(),
          [L, E] = (0, t.useState)(''),
          [S, j] = (0, t.useState)(''),
          [z, D] = (0, t.useState)(!1);
        return (
          (0, t.useEffect)(() => {
            if ('undefined' == typeof document) return;
            const e = y();
            if (!e) return;
            let t = !0,
              n = !1,
              o = 0;
            const s = async () => {
                if (
                  !(
                    n ||
                    !t ||
                    'hidden' === document.visibilityState ||
                    Date.now() - o < 2e4
                  )
                ) {
                  ((n = !0), (o = Date.now()));
                  try {
                    const n = await (0, h.latestBundle)();
                    t && n && n !== e && E(n);
                  } catch {
                  } finally {
                    n = !1;
                  }
                }
              },
              c = setInterval(() => {
                s();
              }, 6e4),
              l = () => {
                'visible' === document.visibilityState && s();
              };
            ((v = () => {
              s();
            }),
              document.addEventListener('visibilitychange', l),
              window.addEventListener('focus', l),
              window.addEventListener('online', l),
              window.addEventListener('pageshow', l));
            const u = setTimeout(() => {
              s();
            }, 1e4);
            return () => {
              ((t = !1),
                (v = () => {}),
                clearInterval(c),
                clearTimeout(u),
                document.removeEventListener('visibilitychange', l),
                window.removeEventListener('focus', l),
                window.removeEventListener('online', l),
                window.removeEventListener('pageshow', l));
            };
          }, []),
          L && L !== S
            ? (0, w.jsxs)(o.default, {
                testID: 'update-banner',
                accessibilityRole: 'alert',
                style: {
                  position: 'fixed',
                  ...b(x),
                  left: 10,
                  right: 10,
                  zIndex: 1e3,
                  marginHorizontal: 'auto',
                  maxWidth: 560,
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  gap: 10,
                  paddingVertical: 10,
                  paddingHorizontal: 14,
                  borderRadius: 18,
                  backgroundColor: e.accent,
                  shadowColor: '#000',
                  shadowOpacity: 0.25,
                  shadowRadius: 16,
                  shadowOffset: { width: 0, height: 6 },
                  elevation: 10,
                },
                children: [
                  (0, w.jsx)(l.Icon, {
                    name: 'refresh',
                    size: 20,
                    color: e.onAccent,
                  }),
                  (0, w.jsx)(c.Copy, {
                    style: {
                      flex: 1,
                      fontSize: 13.5,
                      lineHeight: 22,
                      color: e.onAccent,
                      fontFamily: 'Vazirmatn_600SemiBold',
                    },
                    children: (0, f.L)(
                      '\u0646\u0633\u062e\u0647\u0654 \u062a\u0627\u0632\u0647\u0654 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u0622\u0645\u062f\u0647 \u0627\u0633\u062a.',
                    ),
                  }),
                  (0, w.jsx)(n.default, {
                    testID: 'update-banner-reload',
                    accessibilityRole: 'button',
                    disabled: z,
                    onPress: () => {
                      (D(!0), p());
                    },
                    style: ({ pressed: t }) => ({
                      height: 38,
                      paddingHorizontal: 16,
                      borderRadius: 12,
                      justifyContent: 'center',
                      backgroundColor: e.onAccent,
                      opacity: t || z ? 0.8 : 1,
                    }),
                    children: (0, w.jsx)(c.Copy, {
                      style: {
                        fontSize: 13.5,
                        color: e.accent,
                        fontFamily: 'Vazirmatn_700Bold',
                      },
                      children: (0, f.L)(
                        '\u0628\u0647\u200c\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc',
                      ),
                    }),
                  }),
                  (0, w.jsx)(n.default, {
                    testID: 'update-banner-dismiss',
                    accessibilityRole: 'button',
                    accessibilityLabel: (0, f.L)(
                      '\u0628\u0639\u062f\u0627\u064b',
                    ),
                    hitSlop: 8,
                    onPress: () => j(L),
                    style: ({ pressed: e }) => ({
                      width: 30,
                      height: 30,
                      borderRadius: 15,
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: e ? 0.7 : 1,
                    }),
                    children: (0, w.jsx)(l.Icon, {
                      name: 'close',
                      size: 18,
                      color: e.onAccent,
                    }),
                  }),
                ],
              })
            : null
        );
      }));
    var t = r(d[0]);
    r(d[1]);
    var n = e(r(d[2])),
      o = e(r(d[3])),
      s = r(d[4]),
      c = r(d[5]),
      l = r(d[6]),
      u = r(d[7]),
      f = r(d[8]),
      h = r(d[9]),
      w = r(d[10]);
    function y() {
      try {
        const e = [...document.scripts].find((e) => h.BUNDLE.test(e.src));
        return (e && h.BUNDLE.exec(e.src)?.[0]) || '';
      } catch {
        return '';
      }
    }
    async function p() {
      try {
        if ('undefined' != typeof caches)
          for (const e of await caches.keys()) await caches.delete(e);
      } catch {}
      const e = new URL(window.location.href);
      (e.searchParams.delete('update-check'),
        e.searchParams.set('fresh', String(Date.now())),
        window.location.replace(e.toString()));
    }
    function b(e) {
      return e
        ? { bottom: 24 }
        : { bottom: 'calc(max(env(safe-area-inset-bottom), 12px) + 84px)' };
    }
    let v = () => {};
  },
  572,
  [2, 94, 232, 99, 481, 407, 385, 382, 311, 573, 338],
);
