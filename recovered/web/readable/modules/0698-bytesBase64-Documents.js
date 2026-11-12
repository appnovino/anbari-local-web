// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 698; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.bytesBase64 = y),
      (_e.Documents = function ({ products: t, onConfirm: n }) {
        const [p, h] = (0, e.useState)(null),
          [b, j] = (0, e.useState)('');
        return (0, d.jsxs)(o.default, {
          style: i.common.gap,
          children: [
            (0, d.jsx)(i.Copy, {
              children: (0, f.L)(
                '\u062e\u0648\u0627\u0646\u062f\u0646 PDF \u0628\u0627 \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc',
              ),
            }),
            (0, d.jsx)(i.Copy, {
              children: (0, f.L)(
                '\u0646\u062a\u06cc\u062c\u0647 \u0642\u0628\u0644 \u0627\u0632 \u062b\u0628\u062a \u0645\u0648\u062c\u0648\u062f\u06cc \u0628\u0631\u0627\u06cc \u062a\u0623\u06cc\u06cc\u062f \u0634\u0645\u0627 \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.',
              ),
            }),
            (0, d.jsx)(i.Button, {
              onPress: async function () {
                try {
                  j('');
                  const e = await c.getDocumentAsync({
                    type: 'application/pdf',
                    multiple: !1,
                    copyToCacheDirectory: !0,
                  });
                  if (e.canceled) return;
                  const n = e.assets[0];
                  if ((n.size || 0) > 5242880) throw Error('too_large');
                  const o = new Uint8Array(
                    await (await fetch(n.uri)).arrayBuffer(),
                  );
                  if (o.length > 5242880) throw Error('too_large');
                  h(
                    (0, u.validateVoiceResult)(
                      await (0, l.job)(
                        'pdf',
                        { data: y(o), products: t.slice(0, 200) },
                        AbortSignal.timeout(24e4),
                      ),
                    ),
                  );
                } catch (e) {
                  j((0, l.message)(e));
                }
              },
              children: (0, f.L)('\u0627\u0646\u062a\u062e\u0627\u0628 PDF'),
            }),
            p &&
              (0, d.jsx)(s.DraftReview, {
                result: p,
                onConfirm: async (e) => {
                  (await n(e), h(null));
                },
              }),
            !!b &&
              (0, d.jsx)(i.Copy, { accessibilityRole: 'alert', children: b }),
          ],
        });
      }));
    var e = r(_d[0]);
    r(_d[1]);
    var t,
      n = r(_d[2]),
      o = (t = n) && t.__esModule ? t : { default: t },
      c = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        return (
          e &&
            Object.keys(e).forEach(function (n) {
              var o = Object.getOwnPropertyDescriptor(e, n);
              Object.defineProperty(
                t,
                n,
                o.get
                  ? o
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[n];
                      },
                    },
              );
            }),
          (t.default = e),
          t
        );
      })(r(_d[3]));
    r(_d[4]);
    var i = r(_d[5]),
      s = r(_d[6]),
      u = r(_d[7]),
      l = r(_d[8]),
      f = r(_d[9]),
      d = r(_d[10]);
    function y(e) {
      let t = '';
      for (let n = 0; n < e.length; n += 8192)
        t += String.fromCharCode(...e.subarray(n, n + 8192));
      return btoa(t);
    }
  },
  698,
  [2, 94, 99, 662, 665, 407, 690, 465, 415, 311, 338],
);
