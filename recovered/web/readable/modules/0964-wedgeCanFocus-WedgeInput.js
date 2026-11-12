// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 964; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'wedgeCanFocus', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      (_e.WedgeInput = function ({ enabled: t, onCode: n, focusKey: c }) {
        const l = (0, e.useRef)(null),
          p = (0, e.useRef)(''),
          b = (0, e.useRef)(null);
        return (
          (0, e.useEffect)(() => {
            if (!t) return void l.current?.blur();
            if (f()) return;
            const e = () => {
              ('undefined' != typeof document &&
                document.activeElement instanceof HTMLInputElement &&
                document.activeElement !== l.current) ||
                l.current?.focus();
            };
            e();
            const n = setInterval(e, 1200);
            return () => clearInterval(n);
          }, [t, c]),
          f()
            ? null
            : (0, s.jsx)(o.default, {
                ref: l,
                testID: 'barcode-wedge',
                accessibilityLabel: u.notebookW5Fa.barcodeScanner,
                value: void 0,
                onChangeText: function (e) {
                  if (!t) return;
                  ((p.current = e.replace(/[\r\n]/g, '').slice(-128)),
                    b.current && clearTimeout(b.current));
                  b.current = setTimeout(() => {
                    ((p.current = ''), l.current?.clear());
                  }, 250);
                },
                onSubmitEditing: function () {
                  const e = p.current.trim();
                  ((p.current = ''), l.current?.clear(), e && n(e));
                  f() || setTimeout(() => l.current?.focus(), 40);
                },
                blurOnSubmit: !1,
                autoCorrect: !1,
                autoCapitalize: 'none',
                showSoftInputOnFocus: void 0,
                inputMode: 'none',
                style: {
                  position: 'absolute',
                  width: 1,
                  height: 1,
                  opacity: 0,
                  left: -2,
                  top: -2,
                },
              })
        );
      }));
    var e = r(d[0]);
    r(d[1]);
    var t,
      n = r(d[2]),
      o = (t = n) && t.__esModule ? t : { default: t },
      u = r(d[3]),
      c = r(d[4]),
      s = r(d[5]);
    const f = () =>
        'undefined' == typeof window ||
        'function' != typeof window.matchMedia ||
        !(0, c.canAutoFocusWedge)({
          os: 'web',
          coarse: window.matchMedia('(any-pointer: coarse)').matches,
          finePointer: window.matchMedia('(pointer: fine)').matches,
          touchPoints:
            ('undefined' != typeof navigator && navigator.maxTouchPoints) || 0,
        }),
      l = () => !f();
  },
  964,
  [2, 94, 242, 580, 464, 338],
);
