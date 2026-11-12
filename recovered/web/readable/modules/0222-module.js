// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 222; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
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
          return y;
        },
      }));
    var o = e(r(_d[0])),
      t = e(r(_d[1])),
      l = e(r(_d[2])),
      n = (function (e) {
        if (e && e.__esModule) return e;
        var o = {};
        return (
          e &&
            Object.keys(e).forEach(function (t) {
              var l = Object.getOwnPropertyDescriptor(e, t);
              Object.defineProperty(
                o,
                t,
                l.get
                  ? l
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[t];
                      },
                    },
              );
            }),
          (o.default = e),
          o
        );
      })(r(_d[3])),
      d = e(r(_d[4])),
      c = e(r(_d[5])),
      u = e(r(_d[6])),
      C = [
        'aria-readonly',
        'color',
        'disabled',
        'onChange',
        'onValueChange',
        'readOnly',
        'style',
        'value',
      ],
      M = n.forwardRef((e, o) => {
        var c = e['aria-readonly'],
          M = e.color,
          y = e.disabled,
          I = e.onChange,
          s = e.onValueChange,
          f = e.readOnly,
          v = e.style,
          h = e.value,
          k = (0, l.default)(e, C);
        var j = n.createElement(u.default, {
            style: [
              b.fakeControl,
              h && b.fakeControlChecked,
              h && M && { backgroundColor: M, borderColor: M },
              y && b.fakeControlDisabled,
              h && y && b.fakeControlCheckedAndDisabled,
            ],
          }),
          z = (0, d.default)('input', {
            checked: h,
            disabled: y,
            onChange: function (e) {
              var o = e.nativeEvent.target.checked;
              ((e.nativeEvent.value = o), I && I(e), s && s(o));
            },
            readOnly: !0 === f || !0 === c || !0 === k.accessibilityReadOnly,
            ref: o,
            style: [b.nativeControl, b.cursorInherit],
            type: 'checkbox',
          });
        return n.createElement(
          u.default,
          (0, t.default)({}, k, {
            'aria-disabled': y,
            'aria-readonly': c,
            style: [b.root, v, y && b.cursorDefault],
          }),
          j,
          z,
        );
      });
    M.displayName = 'CheckBox';
    var b = c.default.create({
        root: { cursor: 'pointer', height: 16, userSelect: 'none', width: 16 },
        cursorDefault: { cursor: 'default' },
        cursorInherit: { cursor: 'inherit' },
        fakeControl: {
          alignItems: 'center',
          backgroundColor: '#fff',
          borderColor: '#657786',
          borderRadius: 2,
          borderStyle: 'solid',
          borderWidth: 2,
          height: '100%',
          justifyContent: 'center',
          width: '100%',
        },
        fakeControlChecked: {
          backgroundColor: '#009688',
          backgroundImage:
            'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K")',
          backgroundRepeat: 'no-repeat',
          borderColor: '#009688',
        },
        fakeControlDisabled: { borderColor: '#CCD6DD' },
        fakeControlCheckedAndDisabled: {
          backgroundColor: '#AAB8C2',
          borderColor: '#AAB8C2',
        },
        nativeControl: (0, o.default)(
          (0, o.default)({}, c.default.absoluteFillObject),
          {},
          {
            height: '100%',
            margin: 0,
            appearance: 'none',
            padding: 0,
            width: '100%',
          },
        ),
      }),
      y = M;
  },
  222,
  [11, 96, 16, 2, 5, 17, 99],
);
