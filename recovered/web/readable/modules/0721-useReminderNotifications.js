// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 721; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.useReminderNotifications = function (e, t, c, f = null) {
        const _ = (0, u.useSwr)(null, () => (0, s.listToBuy)(e)),
          S = (0, u.useSwr)(null, () => (0, s.listRoutines)(e)),
          w = (0, u.useSwr)(null, () => (0, o.loadAllCheques)(e)),
          E = (0, u.useSwr)(null, () => (0, n.listExpenseReminders)(e)),
          [v, R] = (0, l.useState)(0),
          p = (0, r.localeLang)();
        ((0, l.useEffect)(() => {}, [
          '',
          c,
          f,
          _.reload,
          S.reload,
          w.reload,
          E.reload,
        ]),
          (0, l.useEffect)(() => {}, [
            '',
            _.data,
            S.data,
            w.data,
            E.data,
            _.loaded,
            S.loaded,
            w.loaded,
            E.loaded,
            c,
            f,
            e?.timezone,
            v,
            p,
          ]),
          (0, l.useEffect)(() => () => {}, ['']));
      }));
    var e,
      l = _r(d[0]),
      t = _r(d[1]);
    (e = t) && e.__esModule;
    _r(d[2]);
    var u = _r(d[3]),
      s = _r(d[4]),
      o = _r(d[5]),
      n = _r(d[6]),
      r = (_r(d[7]), _r(d[8]));
    (_r(d[9]), _r(d[10]), _r(d[11]));
  },
  721,
  [2, 203, 94, 489, 613, 626, 522, 443, 311, 525, 624, 523],
);
