// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 114; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'ResponderTouchHistoryStore', {
        enumerable: !0,
        get: function () {
          return T;
        },
      }));
    var t = r(d[0]);
    function n(t) {
      return t.timeStamp || t.timestamp;
    }
    function i(t) {
      return {
        touchActive: !0,
        startPageX: t.pageX,
        startPageY: t.pageY,
        startTimeStamp: n(t),
        currentPageX: t.pageX,
        currentPageY: t.pageY,
        currentTimeStamp: n(t),
        previousPageX: t.pageX,
        previousPageY: t.pageY,
        previousTimeStamp: n(t),
      };
    }
    function c(t, i) {
      ((t.touchActive = !0),
        (t.startPageX = i.pageX),
        (t.startPageY = i.pageY),
        (t.startTimeStamp = n(i)),
        (t.currentPageX = i.pageX),
        (t.currentPageY = i.pageY),
        (t.currentTimeStamp = n(i)),
        (t.previousPageX = i.pageX),
        (t.previousPageY = i.pageY),
        (t.previousTimeStamp = n(i)));
    }
    function o(t) {
      var n = t.identifier;
      return (
        null == n && console.error('Touch object is missing identifier.'),
        n
      );
    }
    function u(t, u) {
      var s = o(t),
        h = u.touchBank[s];
      (h ? c(h, t) : (u.touchBank[s] = i(t)), (u.mostRecentTimeStamp = n(t)));
    }
    function s(t, i) {
      var c = i.touchBank[o(t)];
      c
        ? ((c.touchActive = !0),
          (c.previousPageX = c.currentPageX),
          (c.previousPageY = c.currentPageY),
          (c.previousTimeStamp = c.currentTimeStamp),
          (c.currentPageX = t.pageX),
          (c.currentPageY = t.pageY),
          (c.currentTimeStamp = n(t)),
          (i.mostRecentTimeStamp = n(t)))
        : console.warn(
            'Cannot record touch move without a touch start.\n',
            'Touch Move: ' + p(t) + '\n',
            'Touch Bank: ' + v(i),
          );
    }
    function h(t, i) {
      var c = i.touchBank[o(t)];
      c
        ? ((c.touchActive = !1),
          (c.previousPageX = c.currentPageX),
          (c.previousPageY = c.currentPageY),
          (c.previousTimeStamp = c.currentTimeStamp),
          (c.currentPageX = t.pageX),
          (c.currentPageY = t.pageY),
          (c.currentTimeStamp = n(t)),
          (i.mostRecentTimeStamp = n(t)))
        : console.warn(
            'Cannot record touch end without a touch start.\n',
            'Touch End: ' + p(t) + '\n',
            'Touch Bank: ' + v(i),
          );
    }
    function p(t) {
      return JSON.stringify({
        identifier: t.identifier,
        pageX: t.pageX,
        pageY: t.pageY,
        timestamp: n(t),
      });
    }
    function v(t) {
      var n = t.touchBank,
        i = JSON.stringify(n.slice(0, 20));
      return (n.length > 20 && (i += ' (original size: ' + n.length + ')'), i);
    }
    class T {
      constructor() {
        this._touchHistory = {
          touchBank: [],
          numberActiveTouches: 0,
          indexOfSingleActiveTouch: -1,
          mostRecentTimeStamp: 0,
        };
      }
      recordTouchTrack(n, i) {
        var c = this._touchHistory;
        if ((0, t.isMoveish)(n)) i.changedTouches.forEach((t) => s(t, c));
        else if ((0, t.isStartish)(n))
          (i.changedTouches.forEach((t) => u(t, c)),
            (c.numberActiveTouches = i.touches.length),
            1 === c.numberActiveTouches &&
              (c.indexOfSingleActiveTouch = i.touches[0].identifier));
        else if (
          (0, t.isEndish)(n) &&
          (i.changedTouches.forEach((t) => h(t, c)),
          (c.numberActiveTouches = i.touches.length),
          1 === c.numberActiveTouches)
        )
          for (var o = c.touchBank, p = 0; p < o.length; p++) {
            var v = o[p];
            if (null != v && v.touchActive) {
              c.indexOfSingleActiveTouch = p;
              break;
            }
          }
      }
      get touchHistory() {
        return this._touchHistory;
      }
    }
  },
  114,
  [111],
);
