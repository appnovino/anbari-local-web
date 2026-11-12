// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 85; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
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
          return f;
        },
      }));
    var t = e(r(d[0])),
      o = e(r(d[1])),
      s = (e) => {
        var t = e.offsetHeight,
          o = e.offsetWidth,
          s = e.offsetLeft,
          n = e.offsetTop;
        for (e = e.offsetParent; e && 1 === e.nodeType; )
          ((s += e.offsetLeft + e.clientLeft - e.scrollLeft),
            (n += e.offsetTop + e.clientTop - e.scrollTop),
            (e = e.offsetParent));
        return {
          width: o,
          height: t,
          top: (n -= window.scrollY),
          left: (s -= window.scrollX),
        };
      },
      n = (e, t, o) => {
        var n = t || (e && e.parentNode);
        e &&
          n &&
          setTimeout(() => {
            if (e.isConnected && n.isConnected) {
              var t = s(n),
                l = s(e),
                f = l.height,
                u = l.left,
                c = l.top,
                b = l.width,
                p = u - t.left,
                h = c - t.top;
              o(p, h, b, f, u, c);
            }
          }, 0);
      },
      l = { A: !0, BODY: !0, INPUT: !0, SELECT: !0, TEXTAREA: !0 },
      f = {
        blur(e) {
          try {
            e.blur();
          } catch (e) {}
        },
        focus(e) {
          try {
            var t = e.nodeName;
            (null == e.getAttribute('tabIndex') &&
              !0 !== e.isContentEditable &&
              null == l[t] &&
              e.setAttribute('tabIndex', '-1'),
              e.focus());
          } catch (e) {}
        },
        measure(e, t) {
          n(e, null, t);
        },
        measureInWindow(e, o) {
          e &&
            setTimeout(() => {
              var s = (0, t.default)(e),
                n = s.height,
                l = s.left,
                f = s.top,
                u = s.width;
              o(l, f, u, n);
            }, 0);
        },
        measureLayout(e, t, o, s) {
          n(e, t, s);
        },
        updateView(e, t) {
          for (var s in t)
            if (Object.prototype.hasOwnProperty.call(t, s)) {
              var n = t[s];
              switch (s) {
                case 'style':
                  (0, o.default)(e, n);
                  break;
                case 'class':
                case 'className':
                  e.setAttribute('class', n);
                  break;
                case 'text':
                case 'value':
                  e.value = n;
                  break;
                default:
                  e.setAttribute(s, n);
              }
            }
        },
        configureNextLayoutAnimation(e, t) {
          t();
        },
        setLayoutAnimationEnabledExperimental() {},
      };
  },
  85,
  [86, 87],
);
