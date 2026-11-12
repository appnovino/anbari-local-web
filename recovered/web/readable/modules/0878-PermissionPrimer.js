// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 878; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.PermissionPrimer = function ({ active: e }) {
        const { colors: j } = (0, l.useTheme)(),
          [P, b] = (0, t.useState)(!1),
          v = (0, t.useRef)(!1);
        function _() {
          (b(!1), s.default.setItem(h, '1').catch(() => {}));
        }
        async function w() {
          (_(), await p(450));
          try {
            await (0, d.enableNotifications)();
          } catch {}
          try {
            const e = await o.AudioModule.getRecordingPermissionsAsync();
            e.granted ||
              !1 === e.canAskAgain ||
              (await o.AudioModule.requestRecordingPermissionsAsync());
          } catch {}
        }
        return (
          (0, t.useEffect)(() => {
            !e || v.current;
          }, [e]),
          (0, y.jsx)(c.Sheet, {
            visible: P,
            title: (0, f.L)(
              '\u0627\u062c\u0627\u0632\u0647\u200c\u0647\u0627\u06cc \u0644\u0627\u0632\u0645',
            ),
            onClose: _,
            children: (0, y.jsxs)(n.default, {
              style: { gap: 12 },
              children: [
                (0, y.jsx)(u.Copy, {
                  children: (0, f.L)(
                    '\u0628\u0631\u0627\u06cc \u0627\u06cc\u0646\u06a9\u0647 \u0647\u0645\u0647\u0654 \u0627\u0645\u06a9\u0627\u0646\u0627\u062a \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u06a9\u0627\u0631 \u06a9\u0646\u062f\u060c \u062f\u0631 \u067e\u0646\u062c\u0631\u0647\u200c\u0647\u0627\u06cc \u0628\u0639\u062f\u06cc \xab\u0627\u062c\u0627\u0632\u0647\xbb \u0631\u0627 \u0628\u0632\u0646:',
                  ),
                }),
                (0, y.jsx)(u.Copy, {
                  style: { color: j.muted },
                  children: (0, f.L)(
                    '\u0627\u0639\u0644\u0627\u0646\u200c\u0647\u0627: \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc\u200c\u0647\u0627\u060c \u0633\u0631\u0631\u0633\u06cc\u062f \u0686\u06a9 \u0648 \u0647\u0634\u062f\u0627\u0631 \u06a9\u0645 \u0634\u062f\u0646 \u0645\u0648\u062c\u0648\u062f\u06cc',
                  ),
                }),
                (0, y.jsx)(u.Copy, {
                  style: { color: j.muted },
                  children: (0, f.L)(
                    '\u0645\u06cc\u06a9\u0631\u0648\u0641\u0648\u0646: \u062b\u0628\u062a \u0645\u0648\u062c\u0648\u062f\u06cc \u0648 \u0641\u0631\u0648\u0634 \u0628\u0627 \u0635\u062f\u0627',
                  ),
                }),
                (0, y.jsx)(u.Button, {
                  testID: 'permission-primer-continue',
                  onPress: () => {
                    w();
                  },
                  children: (0, f.L)('\u0627\u062f\u0627\u0645\u0647'),
                }),
              ],
            }),
          })
        );
      }));
    var t = r(_d[0]);
    r(_d[1]);
    var n = e(r(_d[2])),
      s = e(r(_d[3])),
      o =
        ((function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          (e &&
            Object.keys(e).forEach(function (n) {
              var s = Object.getOwnPropertyDescriptor(e, n);
              Object.defineProperty(
                t,
                n,
                s.get
                  ? s
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[n];
                      },
                    },
              );
            }),
            (t.default = e));
        })(r(_d[4])),
        r(_d[5])),
      c = r(_d[6]),
      u = r(_d[7]),
      l = r(_d[8]),
      d = r(_d[9]),
      f = (r(_d[10]), r(_d[11])),
      y = r(_d[12]);
    const h = 'anbari.permissionPrimer.v1',
      p = (e) => new Promise((t) => setTimeout(t, e));
  },
  878,
  [2, 94, 99, 258, 996, 749, 539, 407, 382, 523, 879, 311, 338],
);
