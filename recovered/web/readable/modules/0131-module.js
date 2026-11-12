// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 131; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
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
          return _;
        },
      }));
    var t = e(r(d[0])),
      n = e(r(d[1])),
      o = e(r(d[2])),
      s = e(r(d[3])),
      c = new o.default(),
      u = {
        Events: {
          interactionStart: 'interactionStart',
          interactionComplete: 'interactionComplete',
        },
        runAfterInteractions(e) {
          var t = [],
            n = new Promise((n) => {
              (S(),
                e && t.push(e),
                t.push({ run: n, name: 'resolve ' + ((e && e.name) || '?') }),
                h.enqueueTasks(t));
            });
          return {
            then: n.then.bind(n),
            done: n.then.bind(n),
            cancel: () => {
              h.cancelTasks(t);
            },
          };
        },
        createInteractionHandle() {
          S();
          var e = ++w;
          return (f.add(e), e);
        },
        clearInteractionHandle(e) {
          ((0, t.default)(!!e, 'Must provide a handle to clear.'),
            S(),
            f.delete(e),
            v.add(e));
        },
        addListener: c.addListener.bind(c),
        setDeadline(e) {
          b = e;
        },
      },
      l = new Set(),
      f = new Set(),
      v = new Set(),
      h = new n.default({ onMoreTasks: S }),
      p = 0,
      w = 0,
      b = -1;
    function S() {
      p || (p = b > 0 ? setTimeout(T) : (0, s.default)(T));
    }
    function T() {
      p = 0;
      var e = l.size;
      (f.forEach((e) => l.add(e)), v.forEach((e) => l.delete(e)));
      var t = l.size;
      if (
        (0 !== e && 0 === t
          ? c.emit(u.Events.interactionComplete)
          : 0 === e && 0 !== t && c.emit(u.Events.interactionStart),
        0 === t)
      )
        for (var n = Date.now(); h.hasTasksToProcess(); )
          if ((h.processNext(), b > 0 && Date.now() - n >= b)) {
            S();
            break;
          }
      (f.clear(), v.clear());
    }
    var _ = u;
  },
  131,
  [117, 132, 133, 134],
);
