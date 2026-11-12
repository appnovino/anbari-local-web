// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 210; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
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
          return s;
        },
      }));
    var t = e(r(d[0])),
      n = e(r(d[1])),
      l = n.default ? window.location.href : '';
    var o = (e, t) => {
        if (n.default) {
          var l = new URL(e, window.location).toString();
          0 === l.indexOf('tel:')
            ? (window.location = l)
            : window.open(l, t, 'noopener');
        }
      },
      s = new (class {
        constructor() {
          this._eventCallbacks = {};
        }
        _dispatchEvent(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), l = 1;
            l < t;
            l++
          )
            n[l - 1] = arguments[l];
          var o = this._eventCallbacks[e];
          null != o &&
            Array.isArray(o) &&
            o.map((e) => {
              e(...n);
            });
        }
        addEventListener(e, t) {
          var n = this;
          return (
            n._eventCallbacks[e] || (n._eventCallbacks[e] = [t]),
            n._eventCallbacks[e].push(t),
            {
              remove() {
                var l = n._eventCallbacks[e].filter(
                  (e) => e.toString() !== t.toString(),
                );
                n._eventCallbacks[e] = l;
              },
            }
          );
        }
        removeEventListener(e, t) {
          console.error(
            "Linking.removeEventListener('" +
              e +
              "', ...): Method has been deprecated. Please instead use `remove()` on the subscription returned by `Linking.addEventListener`.",
          );
          var n = this._eventCallbacks[e].filter(
            (e) => e.toString() !== t.toString(),
          );
          this._eventCallbacks[e] = n;
        }
        canOpenURL() {
          return Promise.resolve(!0);
        }
        getInitialURL() {
          return Promise.resolve(l);
        }
        openURL(e, t) {
          1 === arguments.length && (t = '_blank');
          try {
            return (
              o(e, t),
              this._dispatchEvent('onOpen', e),
              Promise.resolve()
            );
          } catch (e) {
            return Promise.reject(e);
          }
        }
        _validateURL(e) {
          ((0, t.default)(
            'string' == typeof e,
            'Invalid URL: should be a string. Was: ' + e,
          ),
            (0, t.default)(e, 'Invalid URL: cannot be empty'));
        }
      })();
  },
  210,
  [117, 26],
);
