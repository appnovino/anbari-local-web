// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1281; original bundle: __common-9cdd8d1b62d3893a7e9d868fab7ed9b5.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.scheduleNotificationAsync = async function (e) {
        if (!o.default.scheduleNotificationAsync)
          throw new n.UnavailabilityError(
            'Notifications',
            'scheduleNotificationAsync',
          );
        return await o.default.scheduleNotificationAsync(
          e.identifier ?? n.uuid.v4(),
          e.content,
          s(e.trigger),
        );
      }),
      (_e.parseTrigger = s));
    var e,
      n = r(d[0]),
      t = r(d[1]),
      o = (e = t) && e.__esModule ? e : { default: e },
      u = r(d[2]),
      c = r(d[3]);
    function s(e) {
      if (null === e) return null;
      if (void 0 === e)
        throw new TypeError(
          'Encountered an `undefined` notification trigger. If you want to trigger the notification immediately, pass in an explicit `null` value.',
        );
      if (!(0, c.hasValidTriggerObject)(e))
        throw new TypeError(
          'The `trigger` object you provided is invalid. It needs to contain a `type` or `channelId` entry. Refer to the documentation to update your code: https://docs.expo.dev/versions/latest/sdk/notifications/#notificationtriggerinput',
        );
      const n = l(e);
      if (n) return n;
      const t = h(e);
      if (t) return t;
      const o = y(e);
      if (o) return o;
      const u = f(e);
      if (u) return u;
      const s = b(e);
      if (s) return s;
      const p = w(e);
      if (p) return p;
      const I = T(e);
      return I || null;
    }
    function h(e) {
      if (
        null !== e &&
        'object' == typeof e &&
        'type' in e &&
        e.type === u.SchedulableTriggerInputTypes.CALENDAR
      ) {
        const { repeats: n, ...t } = e;
        return { ...t, repeats: !!n, type: 'calendar' };
      }
    }
    function l(e) {
      if (e instanceof Date || 'number' == typeof e)
        return (
          console.warn(
            `You are using a deprecated parameter type (${e}) for the notification trigger. Use "{ type: 'date', date: someValue }" instead.`,
          ),
          { type: 'date', timestamp: p(e) }
        );
      if (
        'object' == typeof e &&
        null !== e &&
        'type' in e &&
        e.type === u.SchedulableTriggerInputTypes.DATE &&
        'date' in e
      ) {
        const n = { type: 'date', timestamp: p(e.date) };
        return (e.channelId && (n.channelId = e.channelId), n);
      }
    }
    function p(e) {
      return e instanceof Date ? e.getTime() : e;
    }
    function y(e) {
      if (
        null !== e &&
        'object' == typeof e &&
        'type' in e &&
        e.type === u.SchedulableTriggerInputTypes.DAILY
      ) {
        E(e, ['hour', 'minute']);
        const n = { type: 'daily', hour: e.hour ?? I, minute: e.minute ?? I };
        return (e.channelId && (n.channelId = e.channelId), n);
      }
    }
    function f(e) {
      if (
        null !== e &&
        'object' == typeof e &&
        'type' in e &&
        e.type === u.SchedulableTriggerInputTypes.WEEKLY
      ) {
        E(e, ['weekday', 'hour', 'minute']);
        const n = {
          type: 'weekly',
          weekday: e.weekday ?? I,
          hour: e.hour ?? I,
          minute: e.minute ?? I,
        };
        return (e.channelId && (n.channelId = e.channelId), n);
      }
    }
    function b(e) {
      if (
        null !== e &&
        'object' == typeof e &&
        'type' in e &&
        e.type === u.SchedulableTriggerInputTypes.MONTHLY
      ) {
        E(e, ['day', 'hour', 'minute']);
        const n = {
          type: 'monthly',
          day: e.day ?? I,
          hour: e.hour ?? I,
          minute: e.minute ?? I,
        };
        return (e.channelId && (n.channelId = e.channelId), n);
      }
    }
    function w(e) {
      if (
        null !== e &&
        'object' == typeof e &&
        'type' in e &&
        e.type === u.SchedulableTriggerInputTypes.YEARLY
      ) {
        E(e, ['month', 'day', 'hour', 'minute']);
        const n = {
          type: 'yearly',
          month: e.month ?? I,
          day: e.day ?? I,
          hour: e.hour ?? I,
          minute: e.minute ?? I,
        };
        return (e.channelId && (n.channelId = e.channelId), n);
      }
    }
    function T(e) {
      if (
        null !== e &&
        'object' == typeof e &&
        'type' in e &&
        e.type === u.SchedulableTriggerInputTypes.TIME_INTERVAL &&
        'seconds' in e &&
        'number' == typeof e.seconds
      ) {
        const n = {
          type: 'timeInterval',
          seconds: e.seconds,
          repeats: e.repeats ?? !1,
        };
        return (e.channelId && (n.channelId = e.channelId), n);
      }
    }
    const I = -9999;
    function E(e, n) {
      const t = e;
      n.forEach((e) => {
        if (!(e in t))
          throw new TypeError(`The ${e} parameter needs to be present`);
        if ('number' != typeof t[e])
          throw new TypeError(`The ${e} parameter should be a number`);
        switch (e) {
          case 'month': {
            const { month: e } = t;
            if (e < 0 || e > 11)
              throw new RangeError(
                `The month parameter needs to be between 0 and 11. Found: ${e}`,
              );
            break;
          }
          case 'day': {
            const e = t.day,
              n = void 0 !== t.month ? t.month : new Date().getMonth(),
              o = k(n);
            if (e < 1 || e > o)
              throw new RangeError(
                `The day parameter for month ${n} must be between 1 and ${o}. Found: ${e}`,
              );
            break;
          }
          case 'weekday': {
            const { weekday: e } = t;
            if (e < 1 || e > 7)
              throw new RangeError(
                `The weekday parameter needs to be between 1 and 7. Found: ${e}`,
              );
            break;
          }
          case 'hour': {
            const { hour: e } = t;
            if (e < 0 || e > 23)
              throw new RangeError(
                `The hour parameter needs to be between 0 and 23. Found: ${e}`,
              );
            break;
          }
          case 'minute': {
            const { minute: e } = t;
            if (e < 0 || e > 59)
              throw new RangeError(
                `The minute parameter needs to be between 0 and 59. Found: ${e}`,
              );
            break;
          }
        }
      });
    }
    function k(e = 0, n) {
      return new Date(n ?? 2e3, e + 1, 0).getDate();
    }
  },
  1281,
  [266, 1280, 1282, 1283],
);
