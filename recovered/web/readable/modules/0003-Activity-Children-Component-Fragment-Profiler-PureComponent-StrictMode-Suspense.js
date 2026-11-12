// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 3; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, e, d) {
    /**
     * @license React
     * react.production.js
     *
     * Copyright (c) Meta Platforms, Inc. and affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    'use strict';
    var t = Symbol.for('react.transitional.element'),
      n = Symbol.for('react.portal'),
      o = Symbol.for('react.fragment'),
      u = Symbol.for('react.strict_mode'),
      c = Symbol.for('react.profiler'),
      i = Symbol.for('react.consumer'),
      s = Symbol.for('react.context'),
      f = Symbol.for('react.forward_ref'),
      l = Symbol.for('react.suspense'),
      p = Symbol.for('react.memo'),
      y = Symbol.for('react.lazy'),
      h = Symbol.for('react.activity'),
      _ = Symbol.iterator;
    var v = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      b = Object.assign,
      S = {};
    function E(t, n, o) {
      ((this.props = t),
        (this.context = n),
        (this.refs = S),
        (this.updater = o || v));
    }
    function w() {}
    function H(t, n, o) {
      ((this.props = t),
        (this.context = n),
        (this.refs = S),
        (this.updater = o || v));
    }
    ((E.prototype.isReactComponent = {}),
      (E.prototype.setState = function (t, n) {
        if ('object' != typeof t && 'function' != typeof t && null != t)
          throw Error(
            'takes an object of state variables to update or a function which returns an object of state variables.',
          );
        this.updater.enqueueSetState(this, t, n, 'setState');
      }),
      (E.prototype.forceUpdate = function (t) {
        this.updater.enqueueForceUpdate(this, t, 'forceUpdate');
      }),
      (w.prototype = E.prototype));
    var j = (H.prototype = new w());
    ((j.constructor = H), b(j, E.prototype), (j.isPureReactComponent = !0));
    var R = Array.isArray;
    function k() {}
    var C = { H: null, A: null, T: null, S: null },
      $ = Object.prototype.hasOwnProperty;
    function T(n, o, u) {
      var c = u.ref;
      return {
        $$typeof: t,
        type: n,
        key: o,
        ref: void 0 !== c ? c : null,
        props: u,
      };
    }
    function A(n) {
      return 'object' == typeof n && null !== n && n.$$typeof === t;
    }
    var O = /\/+/g;
    function x(t, n) {
      return 'object' == typeof t && null !== t && null != t.key
        ? ((o = '' + t.key),
          (u = { '=': '=0', ':': '=2' }),
          '$' +
            o.replace(/[=:]/g, function (t) {
              return u[t];
            }))
        : n.toString(36);
      var o, u;
    }
    function I(t) {
      switch (t.status) {
        case 'fulfilled':
          return t.value;
        case 'rejected':
          throw t.reason;
        default:
          switch (
            ('string' == typeof t.status
              ? t.then(k, k)
              : ((t.status = 'pending'),
                t.then(
                  function (n) {
                    'pending' === t.status &&
                      ((t.status = 'fulfilled'), (t.value = n));
                  },
                  function (n) {
                    'pending' === t.status &&
                      ((t.status = 'rejected'), (t.reason = n));
                  },
                )),
            t.status)
          ) {
            case 'fulfilled':
              return t.value;
            case 'rejected':
              throw t.reason;
          }
      }
      throw t;
    }
    function P(o, u, c, i, s) {
      var f = typeof o;
      ('undefined' !== f && 'boolean' !== f) || (o = null);
      var l,
        p,
        h = !1;
      if (null === o) h = !0;
      else
        switch (f) {
          case 'bigint':
          case 'string':
          case 'number':
            h = !0;
            break;
          case 'object':
            switch (o.$$typeof) {
              case t:
              case n:
                h = !0;
                break;
              case y:
                return P((h = o._init)(o._payload), u, c, i, s);
            }
        }
      if (h)
        return (
          (s = s(o)),
          (h = '' === i ? '.' + x(o, 0) : i),
          R(s)
            ? ((c = ''),
              null != h && (c = h.replace(O, '$&/') + '/'),
              P(s, u, c, '', function (t) {
                return t;
              }))
            : null != s &&
              (A(s) &&
                ((l = s),
                (p =
                  c +
                  (null == s.key || (o && o.key === s.key)
                    ? ''
                    : ('' + s.key).replace(O, '$&/') + '/') +
                  h),
                (s = T(l.type, p, l.props))),
              u.push(s)),
          1
        );
      h = 0;
      var v,
        b = '' === i ? '.' : i + ':';
      if (R(o))
        for (var S = 0; S < o.length; S++)
          h += P((i = o[S]), u, c, (f = b + x(i, S)), s);
      else if (
        'function' ==
        typeof (S =
          null === (v = o) || 'object' != typeof v
            ? null
            : 'function' == typeof (v = (_ && v[_]) || v['@@iterator'])
              ? v
              : null)
      )
        for (o = S.call(o), S = 0; !(i = o.next()).done; )
          h += P((i = i.value), u, c, (f = b + x(i, S++)), s);
      else if ('object' === f) {
        if ('function' == typeof o.then) return P(I(o), u, c, i, s);
        throw (
          (u = String(o)),
          Error(
            'Objects are not valid as a React child (found: ' +
              ('[object Object]' === u
                ? 'object with keys {' + Object.keys(o).join(', ') + '}'
                : u) +
              '). If you meant to render a collection of children, use an array instead.',
          )
        );
      }
      return h;
    }
    function N(t, n, o) {
      if (null == t) return t;
      var u = [],
        c = 0;
      return (
        P(t, u, '', '', function (t) {
          return n.call(o, t, c++);
        }),
        u
      );
    }
    function U(t) {
      if (-1 === t._status) {
        var n = t._result;
        ((n = n()).then(
          function (n) {
            (0 !== t._status && -1 !== t._status) ||
              ((t._status = 1), (t._result = n));
          },
          function (n) {
            (0 !== t._status && -1 !== t._status) ||
              ((t._status = 2), (t._result = n));
          },
        ),
          -1 === t._status && ((t._status = 0), (t._result = n)));
      }
      if (1 === t._status) return t._result.default;
      throw t._result;
    }
    var M =
        'function' == typeof reportError
          ? reportError
          : function (t) {
              if (
                'object' == typeof window &&
                'function' == typeof window.ErrorEvent
              ) {
                var n = new window.ErrorEvent('error', {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    'object' == typeof t &&
                    null !== t &&
                    'string' == typeof t.message
                      ? String(t.message)
                      : String(t),
                  error: t,
                });
                if (!window.dispatchEvent(n)) return;
              } else if (
                'object' == typeof process &&
                'function' == typeof process.emit
              )
                return void process.emit('uncaughtException', t);
              console.error(t);
            },
      V = {
        map: N,
        forEach: function (t, n, o) {
          N(
            t,
            function () {
              n.apply(this, arguments);
            },
            o,
          );
        },
        count: function (t) {
          var n = 0;
          return (
            N(t, function () {
              n++;
            }),
            n
          );
        },
        toArray: function (t) {
          return (
            N(t, function (t) {
              return t;
            }) || []
          );
        },
        only: function (t) {
          if (!A(t))
            throw Error(
              'React.Children.only expected to receive a single React element child.',
            );
          return t;
        },
      };
    ((e.Activity = h),
      (e.Children = V),
      (e.Component = E),
      (e.Fragment = o),
      (e.Profiler = c),
      (e.PureComponent = H),
      (e.StrictMode = u),
      (e.Suspense = l),
      (e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = C),
      (e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (t) {
          return C.H.useMemoCache(t);
        },
      }),
      (e.cache = function (t) {
        return function () {
          return t.apply(null, arguments);
        };
      }),
      (e.cacheSignal = function () {
        return null;
      }),
      (e.cloneElement = function (t, n, o) {
        if (null == t)
          throw Error(
            'The argument must be a React element, but you passed ' + t + '.',
          );
        var u = b({}, t.props),
          c = t.key;
        if (null != n)
          for (i in (void 0 !== n.key && (c = '' + n.key), n))
            !$.call(n, i) ||
              'key' === i ||
              '__self' === i ||
              '__source' === i ||
              ('ref' === i && void 0 === n.ref) ||
              (u[i] = n[i]);
        var i = arguments.length - 2;
        if (1 === i) u.children = o;
        else if (1 < i) {
          for (var s = Array(i), f = 0; f < i; f++) s[f] = arguments[f + 2];
          u.children = s;
        }
        return T(t.type, c, u);
      }),
      (e.createContext = function (t) {
        return (
          ((t = {
            $$typeof: s,
            _currentValue: t,
            _currentValue2: t,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }).Provider = t),
          (t.Consumer = { $$typeof: i, _context: t }),
          t
        );
      }),
      (e.createElement = function (t, n, o) {
        var u,
          c = {},
          i = null;
        if (null != n)
          for (u in (void 0 !== n.key && (i = '' + n.key), n))
            $.call(n, u) &&
              'key' !== u &&
              '__self' !== u &&
              '__source' !== u &&
              (c[u] = n[u]);
        var s = arguments.length - 2;
        if (1 === s) c.children = o;
        else if (1 < s) {
          for (var f = Array(s), l = 0; l < s; l++) f[l] = arguments[l + 2];
          c.children = f;
        }
        if (t && t.defaultProps)
          for (u in (s = t.defaultProps)) void 0 === c[u] && (c[u] = s[u]);
        return T(t, i, c);
      }),
      (e.createRef = function () {
        return { current: null };
      }),
      (e.forwardRef = function (t) {
        return { $$typeof: f, render: t };
      }),
      (e.isValidElement = A),
      (e.lazy = function (t) {
        return { $$typeof: y, _payload: { _status: -1, _result: t }, _init: U };
      }),
      (e.memo = function (t, n) {
        return { $$typeof: p, type: t, compare: void 0 === n ? null : n };
      }),
      (e.startTransition = function (t) {
        var n = C.T,
          o = {};
        C.T = o;
        try {
          var u = t(),
            c = C.S;
          (null !== c && c(o, u),
            'object' == typeof u &&
              null !== u &&
              'function' == typeof u.then &&
              u.then(k, M));
        } catch (t) {
          M(t);
        } finally {
          (null !== n && null !== o.types && (n.types = o.types), (C.T = n));
        }
      }),
      (e.unstable_useCacheRefresh = function () {
        return C.H.useCacheRefresh();
      }),
      (e.use = function (t) {
        return C.H.use(t);
      }),
      (e.useActionState = function (t, n, o) {
        return C.H.useActionState(t, n, o);
      }),
      (e.useCallback = function (t, n) {
        return C.H.useCallback(t, n);
      }),
      (e.useContext = function (t) {
        return C.H.useContext(t);
      }),
      (e.useDebugValue = function () {}),
      (e.useDeferredValue = function (t, n) {
        return C.H.useDeferredValue(t, n);
      }),
      (e.useEffect = function (t, n) {
        return C.H.useEffect(t, n);
      }),
      (e.useEffectEvent = function (t) {
        return C.H.useEffectEvent(t);
      }),
      (e.useId = function () {
        return C.H.useId();
      }),
      (e.useImperativeHandle = function (t, n, o) {
        return C.H.useImperativeHandle(t, n, o);
      }),
      (e.useInsertionEffect = function (t, n) {
        return C.H.useInsertionEffect(t, n);
      }),
      (e.useLayoutEffect = function (t, n) {
        return C.H.useLayoutEffect(t, n);
      }),
      (e.useMemo = function (t, n) {
        return C.H.useMemo(t, n);
      }),
      (e.useOptimistic = function (t, n) {
        return C.H.useOptimistic(t, n);
      }),
      (e.useReducer = function (t, n, o) {
        return C.H.useReducer(t, n, o);
      }),
      (e.useRef = function (t) {
        return C.H.useRef(t);
      }),
      (e.useState = function (t) {
        return C.H.useState(t);
      }),
      (e.useSyncExternalStore = function (t, n, o) {
        return C.H.useSyncExternalStore(t, n, o);
      }),
      (e.useTransition = function () {
        return C.H.useTransition();
      }),
      (e.version = '19.2.3'));
  },
  3,
  [],
);
