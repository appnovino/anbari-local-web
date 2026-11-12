// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 218; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
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
          return c;
        },
      }));
    var t = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        return (
          e &&
            Object.keys(e).forEach(function (o) {
              var n = Object.getOwnPropertyDescriptor(e, o);
              Object.defineProperty(
                t,
                o,
                n.get
                  ? n
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[o];
                      },
                    },
              );
            }),
          (t.default = e),
          t
        );
      })(r(_d[0])),
      o = e(r(_d[1])),
      n = e(r(_d[2])),
      l = e(r(_d[3])),
      u = t.forwardRef((e, o) => {
        var u = e.accessibilityLabel,
          c = e.color,
          s = e.disabled,
          f = e.onPress,
          b = e.testID,
          y = e.title;
        return t.createElement(
          n.default,
          {
            accessibilityLabel: u,
            accessibilityRole: 'button',
            disabled: s,
            focusable: !s,
            onPress: f,
            ref: o,
            style: [
              d.button,
              c && { backgroundColor: c },
              s && d.buttonDisabled,
            ],
            testID: b,
          },
          t.createElement(
            l.default,
            { style: [d.text, s && d.textDisabled] },
            y,
          ),
        );
      });
    u.displayName = 'Button';
    var d = o.default.create({
        button: { backgroundColor: '#2196F3', borderRadius: 2 },
        text: {
          color: '#fff',
          fontWeight: '500',
          padding: 8,
          textAlign: 'center',
          textTransform: 'uppercase',
        },
        buttonDisabled: { backgroundColor: '#dfdfdf' },
        textDisabled: { color: '#a1a1a1' },
      }),
      c = u;
  },
  218,
  [2, 17, 219, 178],
);
