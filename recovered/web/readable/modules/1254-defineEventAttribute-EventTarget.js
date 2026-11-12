// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1254; original bundle: __common-9cdd8d1b62d3893a7e9d868fab7ed9b5.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return A;
        },
      }),
      Object.defineProperty(e, 'defineEventAttribute', {
        enumerable: !0,
        get: function () {
          return E;
        },
      }),
      Object.defineProperty(e, 'EventTarget', {
        enumerable: !0,
        get: function () {
          return B;
        },
      }));
    /**
     * @author Toru Nagashima <https://github.com/mysticatea>
     * @copyright 2015 Toru Nagashima. All rights reserved.
     * See LICENSE file in root directory for full license.
     */
    const t = new WeakMap(),
      n = new WeakMap();
    function o(n) {
      const o = t.get(n);
      return (
        console.assert(
          null != o,
          "'this' is expected an Event object, but got",
          n,
        ),
        o
      );
    }
    function l(t) {
      null == t.passiveListener
        ? t.event.cancelable &&
          ((t.canceled = !0),
          'function' == typeof t.event.preventDefault &&
            t.event.preventDefault())
        : 'undefined' != typeof console &&
          'function' == typeof console.error &&
          console.error(
            'Unable to preventDefault inside passive event listener invocation.',
            t.passiveListener,
          );
    }
    function i(n, o) {
      (t.set(this, {
        eventTarget: n,
        event: o,
        eventPhase: 2,
        currentTarget: n,
        canceled: !1,
        stopped: !1,
        immediateStopped: !1,
        passiveListener: null,
        timeStamp: o.timeStamp || Date.now(),
      }),
        Object.defineProperty(this, 'isTrusted', {
          value: !1,
          enumerable: !0,
        }));
      const l = Object.keys(o);
      for (let t = 0; t < l.length; ++t) {
        const n = l[t];
        n in this || Object.defineProperty(this, n, u(n));
      }
    }
    function u(t) {
      return {
        get() {
          return o(this).event[t];
        },
        set(n) {
          o(this).event[t] = n;
        },
        configurable: !0,
        enumerable: !0,
      };
    }
    function s(t) {
      return {
        value() {
          const n = o(this).event;
          return n[t].apply(n, arguments);
        },
        configurable: !0,
        enumerable: !0,
      };
    }
    function c(t, n) {
      const o = Object.keys(n);
      if (0 === o.length) return t;
      function l(n, o) {
        t.call(this, n, o);
      }
      l.prototype = Object.create(t.prototype, {
        constructor: { value: l, configurable: !0, writable: !0 },
      });
      for (let i = 0; i < o.length; ++i) {
        const c = o[i];
        if (!(c in t.prototype)) {
          const t =
            'function' == typeof Object.getOwnPropertyDescriptor(n, c).value;
          Object.defineProperty(l.prototype, c, t ? s(c) : u(c));
        }
      }
      return l;
    }
    function p(t) {
      if (null == t || t === Object.prototype) return i;
      let o = n.get(t);
      return (
        null == o && ((o = c(p(Object.getPrototypeOf(t)), t)), n.set(t, o)),
        o
      );
    }
    function f(t, n) {
      return new (p(Object.getPrototypeOf(n)))(t, n);
    }
    function v(t) {
      return o(t).immediateStopped;
    }
    function y(t, n) {
      o(t).eventPhase = n;
    }
    function b(t, n) {
      o(t).currentTarget = n;
    }
    function h(t, n) {
      o(t).passiveListener = n;
    }
    ((i.prototype = {
      get type() {
        return o(this).event.type;
      },
      get target() {
        return o(this).eventTarget;
      },
      get currentTarget() {
        return o(this).currentTarget;
      },
      composedPath() {
        const t = o(this).currentTarget;
        return null == t ? [] : [t];
      },
      get NONE() {
        return 0;
      },
      get CAPTURING_PHASE() {
        return 1;
      },
      get AT_TARGET() {
        return 2;
      },
      get BUBBLING_PHASE() {
        return 3;
      },
      get eventPhase() {
        return o(this).eventPhase;
      },
      stopPropagation() {
        const t = o(this);
        ((t.stopped = !0),
          'function' == typeof t.event.stopPropagation &&
            t.event.stopPropagation());
      },
      stopImmediatePropagation() {
        const t = o(this);
        ((t.stopped = !0),
          (t.immediateStopped = !0),
          'function' == typeof t.event.stopImmediatePropagation &&
            t.event.stopImmediatePropagation());
      },
      get bubbles() {
        return Boolean(o(this).event.bubbles);
      },
      get cancelable() {
        return Boolean(o(this).event.cancelable);
      },
      preventDefault() {
        l(o(this));
      },
      get defaultPrevented() {
        return o(this).canceled;
      },
      get composed() {
        return Boolean(o(this).event.composed);
      },
      get timeStamp() {
        return o(this).timeStamp;
      },
      get srcElement() {
        return o(this).eventTarget;
      },
      get cancelBubble() {
        return o(this).stopped;
      },
      set cancelBubble(t) {
        if (!t) return;
        const n = o(this);
        ((n.stopped = !0),
          'boolean' == typeof n.event.cancelBubble &&
            (n.event.cancelBubble = !0));
      },
      get returnValue() {
        return !o(this).canceled;
      },
      set returnValue(t) {
        t || l(o(this));
      },
      initEvent() {},
    }),
      Object.defineProperty(i.prototype, 'constructor', {
        value: i,
        configurable: !0,
        writable: !0,
      }),
      'undefined' != typeof window &&
        void 0 !== window.Event &&
        (Object.setPrototypeOf(i.prototype, window.Event.prototype),
        n.set(window.Event.prototype, i)));
    const w = new WeakMap(),
      P = 3;
    function T(t) {
      return null !== t && 'object' == typeof t;
    }
    function O(t) {
      const n = w.get(t);
      if (null == n)
        throw new TypeError(
          "'this' is expected an EventTarget object, but got another value.",
        );
      return n;
    }
    function j(t) {
      return {
        get() {
          let n = O(this).get(t);
          for (; null != n; ) {
            if (n.listenerType === P) return n.listener;
            n = n.next;
          }
          return null;
        },
        set(n) {
          'function' == typeof n || T(n) || (n = null);
          const o = O(this);
          let l = null,
            i = o.get(t);
          for (; null != i; )
            (i.listenerType === P
              ? null !== l
                ? (l.next = i.next)
                : null !== i.next
                  ? o.set(t, i.next)
                  : o.delete(t)
              : (l = i),
              (i = i.next));
          if (null !== n) {
            const i = {
              listener: n,
              listenerType: P,
              passive: !1,
              once: !1,
              next: null,
            };
            null === l ? o.set(t, i) : (l.next = i);
          }
        },
        configurable: !0,
        enumerable: !0,
      };
    }
    function E(t, n) {
      Object.defineProperty(t, `on${n}`, j(n));
    }
    function x(t) {
      function n() {
        B.call(this);
      }
      n.prototype = Object.create(B.prototype, {
        constructor: { value: n, configurable: !0, writable: !0 },
      });
      for (let o = 0; o < t.length; ++o) E(n.prototype, t[o]);
      return n;
    }
    function B() {
      if (!(this instanceof B)) {
        if (1 === arguments.length && Array.isArray(arguments[0]))
          return x(arguments[0]);
        if (arguments.length > 0) {
          const t = new Array(arguments.length);
          for (let n = 0; n < arguments.length; ++n) t[n] = arguments[n];
          return x(t);
        }
        throw new TypeError('Cannot call a class as a function');
      }
      w.set(this, new Map());
    }
    ((B.prototype = {
      addEventListener(t, n, o) {
        if (null == n) return;
        if ('function' != typeof n && !T(n))
          throw new TypeError("'listener' should be a function or an object.");
        const l = O(this),
          i = T(o),
          u = (i ? Boolean(o.capture) : Boolean(o)) ? 1 : 2,
          s = {
            listener: n,
            listenerType: u,
            passive: i && Boolean(o.passive),
            once: i && Boolean(o.once),
            next: null,
          };
        let c = l.get(t);
        if (void 0 === c) return void l.set(t, s);
        let p = null;
        for (; null != c; ) {
          if (c.listener === n && c.listenerType === u) return;
          ((p = c), (c = c.next));
        }
        p.next = s;
      },
      removeEventListener(t, n, o) {
        if (null == n) return;
        const l = O(this),
          i = (T(o) ? Boolean(o.capture) : Boolean(o)) ? 1 : 2;
        let u = null,
          s = l.get(t);
        for (; null != s; ) {
          if (s.listener === n && s.listenerType === i)
            return void (null !== u
              ? (u.next = s.next)
              : null !== s.next
                ? l.set(t, s.next)
                : l.delete(t));
          ((u = s), (s = s.next));
        }
      },
      dispatchEvent(t) {
        if (null == t || 'string' != typeof t.type)
          throw new TypeError('"event.type" should be a string.');
        const n = O(this),
          o = t.type;
        let l = n.get(o);
        if (null == l) return !0;
        const i = f(this, t);
        let u = null;
        for (; null != l; ) {
          if (
            (l.once
              ? null !== u
                ? (u.next = l.next)
                : null !== l.next
                  ? n.set(o, l.next)
                  : n.delete(o)
              : (u = l),
            h(i, l.passive ? l.listener : null),
            'function' == typeof l.listener)
          )
            try {
              l.listener.call(this, i);
            } catch (t) {
              'undefined' != typeof console &&
                'function' == typeof console.error &&
                console.error(t);
            }
          else
            l.listenerType !== P &&
              'function' == typeof l.listener.handleEvent &&
              l.listener.handleEvent(i);
          if (v(i)) break;
          l = l.next;
        }
        return (h(i, null), y(i, 0), b(i, null), !i.defaultPrevented);
      },
    }),
      Object.defineProperty(B.prototype, 'constructor', {
        value: B,
        configurable: !0,
        writable: !0,
      }),
      'undefined' != typeof window &&
        void 0 !== window.EventTarget &&
        Object.setPrototypeOf(B.prototype, window.EventTarget.prototype));
    var A = B;
  },
  1254,
  [],
);
