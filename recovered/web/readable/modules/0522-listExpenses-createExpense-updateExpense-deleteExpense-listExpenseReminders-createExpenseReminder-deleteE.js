// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 522; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.listExpenses = function (t, s, o) {
        return (0, n.request)(
          (0, n.shopPath)(t, `/expenses?from=${s}&to=${o}`),
        );
      }),
      (e.createExpense = function (s, o, p = (0, t.idempotencyKey)()) {
        return (0, n.request)((0, n.shopPath)(s, '/expenses'), 'POST', o, {
          key: p,
        });
      }),
      (e.updateExpense = function (s, o, p, u = (0, t.idempotencyKey)()) {
        return (0, n.request)(
          (0, n.shopPath)(s, '/expenses/' + encodeURIComponent(o)),
          'PATCH',
          p,
          { key: u },
        );
      }),
      (e.deleteExpense = function (s, o, p, u = (0, t.idempotencyKey)()) {
        return (0, n.request)(
          (0, n.shopPath)(s, '/expenses/' + encodeURIComponent(o) + '/delete'),
          'POST',
          p,
          { key: u },
        );
      }),
      (e.listExpenseReminders = async function (t) {
        return (await (0, n.request)((0, n.shopPath)(t, '/expense-reminders')))
          .reminders;
      }),
      (e.createExpenseReminder = function (s, o, p = (0, t.idempotencyKey)()) {
        return (0, n.request)(
          (0, n.shopPath)(s, '/expense-reminders'),
          'POST',
          o,
          { key: p },
        );
      }),
      (e.deleteExpenseReminder = function (s, o, p = (0, t.idempotencyKey)()) {
        return (0, n.request)(
          (0, n.shopPath)(
            s,
            '/expense-reminders/' + encodeURIComponent(o) + '/delete',
          ),
          'POST',
          {},
          { key: p },
        );
      }));
    var n = r(d[0]),
      t = r(d[1]);
  },
  522,
  [415, 519],
);
