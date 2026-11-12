// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 230; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return b;
        },
      }));
    var t = e(r(_d[0])),
      n = e(r(_d[1])),
      l = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        return (
          e &&
            Object.keys(e).forEach(function (n) {
              var l = Object.getOwnPropertyDescriptor(e, n);
              Object.defineProperty(
                t,
                n,
                l.get
                  ? l
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
      })(r(_d[2])),
      u = e(r(_d[3])),
      d = e(r(_d[4])),
      f = e(r(_d[5])),
      o = e(r(_d[6])),
      c = e(r(_d[7])),
      s = [
        'children',
        'enabled',
        'onValueChange',
        'selectedValue',
        'style',
        'testID',
        'itemStyle',
        'mode',
        'prompt',
      ],
      y = l.forwardRef((e, o) => {
        var c = e.children,
          y = e.enabled,
          b = e.onValueChange,
          p = e.selectedValue,
          h = e.style,
          _ = e.testID,
          O = (e.itemStyle, e.mode, e.prompt, (0, n.default)(e, s)),
          j = l.useRef(null);
        var I = (0, t.default)(
            {
              children: c,
              disabled: !1 === y || void 0,
              onChange: function (e) {
                var t = e.target,
                  n = t.selectedIndex,
                  l = t.value;
                b && b(l, n);
              },
              style: [v.initial, h],
              testID: _,
              value: p,
            },
            O,
          ),
          D = (0, f.default)(I),
          P = (0, d.default)(j, D, o);
        return ((I.ref = P), (0, u.default)('select', I));
      });
    y.Item = o.default;
    var v = c.default.create({
        initial: { fontFamily: 'System', fontSize: 'inherit', margin: 0 },
      }),
      b = y;
  },
  230,
  [11, 16, 2, 5, 104, 106, 231, 17],
);
