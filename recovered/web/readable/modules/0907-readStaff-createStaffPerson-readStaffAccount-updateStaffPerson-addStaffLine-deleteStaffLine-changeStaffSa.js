// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 907; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'readStaff', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      Object.defineProperty(e, 'createStaffPerson', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }),
      Object.defineProperty(e, 'readStaffAccount', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }),
      Object.defineProperty(e, 'updateStaffPerson', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      Object.defineProperty(e, 'addStaffLine', {
        enumerable: !0,
        get: function () {
          return y;
        },
      }),
      Object.defineProperty(e, 'deleteStaffLine', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      Object.defineProperty(e, 'changeStaffSalary', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      Object.defineProperty(e, 'readPayslip', {
        enumerable: !0,
        get: function () {
          return P;
        },
      }),
      Object.defineProperty(e, 'readStaffRates', {
        enumerable: !0,
        get: function () {
          return b;
        },
      }),
      Object.defineProperty(e, 'saveStaffRates', {
        enumerable: !0,
        get: function () {
          return O;
        },
      }),
      Object.defineProperty(e, 'endStaffPerson', {
        enumerable: !0,
        get: function () {
          return S;
        },
      }));
    var t = r(d[0]),
      n = r(d[1]);
    const o = (n, o = '') => (0, t.shopPath)(n, '/staff-money' + o),
      u = (n, u = !1) => (0, t.request)(o(n, u ? '?ended=1' : '')),
      f = (u, f, p = (0, n.idempotencyKey)()) =>
        (0, t.request)(o(u, '/people'), 'POST', f, { key: p }),
      p = (n, u) => (0, t.request)(o(n, '/people/' + encodeURIComponent(u))),
      c = (u, f, p, c, y = (0, n.idempotencyKey)()) =>
        (0, t.request)(
          o(u, '/people/' + encodeURIComponent(f)),
          'PATCH',
          { version: p, ...c },
          { key: y },
        ),
      y = (u, f, p, c = (0, n.idempotencyKey)()) =>
        (0, t.request)(
          o(u, '/people/' + encodeURIComponent(f) + '/lines'),
          'POST',
          p,
          { key: c },
        ),
      s = (u, f, p = (0, n.idempotencyKey)()) =>
        (0, t.request)(
          o(u, '/lines/' + encodeURIComponent(f) + '/delete'),
          'POST',
          {},
          { key: p },
        ),
      l = (u, f, p, c = (0, n.idempotencyKey)()) =>
        (0, t.request)(
          o(u, '/people/' + encodeURIComponent(f) + '/salary'),
          'POST',
          p,
          { key: c },
        ),
      P = (n, u, f) =>
        (0, t.request)(
          o(n, '/people/' + encodeURIComponent(u) + '/payslip?period=' + f),
        ),
      b = (n) => (0, t.request)(o(n, '/rates')),
      O = (u, f, p = (0, n.idempotencyKey)()) =>
        (0, t.request)(o(u, '/rates'), 'PUT', { rates: f }, { key: p }),
      S = (u, f, p, c = (0, n.idempotencyKey)()) =>
        (0, t.request)(
          o(u, '/people/' + encodeURIComponent(f) + '/end'),
          'POST',
          p,
          { key: c },
        );
  },
  907,
  [415, 519],
);
