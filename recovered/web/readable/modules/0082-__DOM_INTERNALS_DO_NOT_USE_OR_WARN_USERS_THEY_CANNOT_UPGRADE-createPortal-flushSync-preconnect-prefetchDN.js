// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 82; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a, m, e, d) {
    /**
     * @license React
     * react-dom.production.js
     *
     * Copyright (c) Meta Platforms, Inc. and affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    'use strict';
    var t = r(d[0]);
    function i(t) {
      var i = 'https://react.dev/errors/' + t;
      if (1 < arguments.length) {
        i += '?args[]=' + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          i += '&args[]=' + encodeURIComponent(arguments[n]);
      }
      return (
        'Minified React error #' +
        t +
        '; visit ' +
        i +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
      );
    }
    function n() {}
    var o = {
        d: {
          f: n,
          r: function () {
            throw Error(i(522));
          },
          D: n,
          C: n,
          L: n,
          m: n,
          X: n,
          S: n,
          M: n,
        },
        p: 0,
        findDOMNode: null,
      },
      s = Symbol.for('react.portal');
    function f(t, i, n) {
      var o =
        3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return {
        $$typeof: s,
        key: null == o ? null : '' + o,
        children: t,
        containerInfo: i,
        implementation: n,
      };
    }
    var c = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function y(t, i) {
      return 'font' === t
        ? ''
        : 'string' == typeof i
          ? 'use-credentials' === i
            ? i
            : ''
          : void 0;
    }
    ((e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
      (e.createPortal = function (t, n) {
        var o =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!n || (1 !== n.nodeType && 9 !== n.nodeType && 11 !== n.nodeType))
          throw Error(i(299));
        return f(t, n, null, o);
      }),
      (e.flushSync = function (t) {
        var i = c.T,
          n = o.p;
        try {
          if (((c.T = null), (o.p = 2), t)) return t();
        } finally {
          ((c.T = i), (o.p = n), o.d.f());
        }
      }),
      (e.preconnect = function (t, i) {
        'string' == typeof t &&
          (i
            ? (i =
                'string' == typeof (i = i.crossOrigin)
                  ? 'use-credentials' === i
                    ? i
                    : ''
                  : void 0)
            : (i = null),
          o.d.C(t, i));
      }),
      (e.prefetchDNS = function (t) {
        'string' == typeof t && o.d.D(t);
      }),
      (e.preinit = function (t, i) {
        if ('string' == typeof t && i && 'string' == typeof i.as) {
          var n = i.as,
            s = y(n, i.crossOrigin),
            f = 'string' == typeof i.integrity ? i.integrity : void 0,
            c = 'string' == typeof i.fetchPriority ? i.fetchPriority : void 0;
          'style' === n
            ? o.d.S(
                t,
                'string' == typeof i.precedence ? i.precedence : void 0,
                { crossOrigin: s, integrity: f, fetchPriority: c },
              )
            : 'script' === n &&
              o.d.X(t, {
                crossOrigin: s,
                integrity: f,
                fetchPriority: c,
                nonce: 'string' == typeof i.nonce ? i.nonce : void 0,
              });
        }
      }),
      (e.preinitModule = function (t, i) {
        if ('string' == typeof t)
          if ('object' == typeof i && null !== i) {
            if (null == i.as || 'script' === i.as) {
              var n = y(i.as, i.crossOrigin);
              o.d.M(t, {
                crossOrigin: n,
                integrity:
                  'string' == typeof i.integrity ? i.integrity : void 0,
                nonce: 'string' == typeof i.nonce ? i.nonce : void 0,
              });
            }
          } else null == i && o.d.M(t);
      }),
      (e.preload = function (t, i) {
        if (
          'string' == typeof t &&
          'object' == typeof i &&
          null !== i &&
          'string' == typeof i.as
        ) {
          var n = i.as,
            s = y(n, i.crossOrigin);
          o.d.L(t, n, {
            crossOrigin: s,
            integrity: 'string' == typeof i.integrity ? i.integrity : void 0,
            nonce: 'string' == typeof i.nonce ? i.nonce : void 0,
            type: 'string' == typeof i.type ? i.type : void 0,
            fetchPriority:
              'string' == typeof i.fetchPriority ? i.fetchPriority : void 0,
            referrerPolicy:
              'string' == typeof i.referrerPolicy ? i.referrerPolicy : void 0,
            imageSrcSet:
              'string' == typeof i.imageSrcSet ? i.imageSrcSet : void 0,
            imageSizes: 'string' == typeof i.imageSizes ? i.imageSizes : void 0,
            media: 'string' == typeof i.media ? i.media : void 0,
          });
        }
      }),
      (e.preloadModule = function (t, i) {
        if ('string' == typeof t)
          if (i) {
            var n = y(i.as, i.crossOrigin);
            o.d.m(t, {
              as: 'string' == typeof i.as && 'script' !== i.as ? i.as : void 0,
              crossOrigin: n,
              integrity: 'string' == typeof i.integrity ? i.integrity : void 0,
            });
          } else o.d.m(t);
      }),
      (e.requestFormReset = function (t) {
        o.d.r(t);
      }),
      (e.unstable_batchedUpdates = function (t, i) {
        return t(i);
      }),
      (e.useFormState = function (t, i, n) {
        return c.H.useFormState(t, i, n);
      }),
      (e.useFormStatus = function () {
        return c.H.useHostTransitionStatus();
      }),
      (e.version = '19.2.3'));
  },
  82,
  [2],
);
