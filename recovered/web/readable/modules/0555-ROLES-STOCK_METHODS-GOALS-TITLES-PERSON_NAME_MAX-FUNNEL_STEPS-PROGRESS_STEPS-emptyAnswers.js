// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 555; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'ROLES', {
        enumerable: !0,
        get: function () {
          return i;
        },
      }),
      Object.defineProperty(e, 'STOCK_METHODS', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      Object.defineProperty(e, 'GOALS', {
        enumerable: !0,
        get: function () {
          return a;
        },
      }),
      Object.defineProperty(e, 'TITLES', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      Object.defineProperty(e, 'PERSON_NAME_MAX', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      Object.defineProperty(e, 'FUNNEL_STEPS', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      Object.defineProperty(e, 'PROGRESS_STEPS', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }),
      Object.defineProperty(e, 'emptyAnswers', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }),
      (e.canLeave = function (n, o) {
        switch (n) {
          case 'field':
            return (0, t.canLeaveField)(o.fieldId, o.customField);
          case 'role':
            return !!o.role;
          case 'method':
            return !!o.stockMethod;
          case 'goals':
            return o.goals.length > 0;
          case 'title':
            return !!o.title;
          case 'name':
            return b(o.personName, c).length > 0;
          case 'shop':
            return (0, t.canLeaveName)(o.shopName);
          default:
            return !0;
        }
      }),
      (e.nextStep = function (t) {
        const n = u.indexOf(t);
        return u[Math.min(u.length - 1, n + 1)];
      }),
      (e.previousStep = function (t) {
        const n = u.indexOf(t);
        return u[Math.max(0, n - 1)];
      }),
      (e.progressOf = function (t) {
        return f.indexOf(t) + 1;
      }),
      (e.toggleGoal = function (t, n) {
        return t.includes(n) ? t.filter((t) => t !== n) : [...t, n];
      }),
      (e.displayName = function (t, n) {
        const o = b(n, c);
        return o
          ? 'mr' === t
            ? '\u0622\u0642\u0627\u06cc ' + o
            : 'ms' === t
              ? '\u062e\u0627\u0646\u0645 ' + o
              : o
          : '';
      }),
      (e.greetingName = function (t, o) {
        const i = b(o, c);
        return i
          ? 'mr' === t
            ? (0, n.L)('\u0622\u0642\u0627\u06cc {name}', { name: i })
            : 'ms' === t
              ? (0, n.L)('\u062e\u0627\u0646\u0645 {name}', { name: i })
              : i
          : '';
      }),
      (e.fieldLabel = function (o) {
        const i = t.SHOP_FIELDS.find((t) => t.id === o.fieldId)?.label;
        return b(o.customField, 40) || (i ? (0, n.L)(i) : '');
      }),
      (e.planPromises = function (t) {
        const n = a.filter((n) => t.includes(n.id)),
          o = a.filter(
            (n) =>
              !t.includes(n.id) &&
              ('fast_sales' === n.id || 'stockout' === n.id),
          );
        return [...n, ...o].slice(0, 3).map((t) => t.promise);
      }),
      (e.methodLine = function (t) {
        switch (t) {
          case 'paper':
            return (0, n.L)(
              '\u062f\u06cc\u06af\u0647 \u0644\u0627\u0632\u0645 \u0646\u06cc\u0633\u062a \u062f\u0641\u062a\u0631 \u0631\u0648 \u0648\u0631\u0642 \u0628\u0632\u0646\u06cc\u061b',
            );
          case 'excel':
            return (0, n.L)(
              '\u0641\u0627\u06cc\u0644\u200c\u0647\u0627\u06cc \u0627\u06a9\u0633\u0644\u062a \u0631\u0648 \u0647\u0645 \u0645\u06cc\u200c\u062a\u0648\u0646\u06cc \u0628\u06cc\u0627\u0631\u06cc\u061b',
            );
          case 'memory':
            return (0, n.L)(
              '\u062f\u06cc\u06af\u0647 \u0644\u0627\u0632\u0645 \u0646\u06cc\u0633\u062a \u0647\u0645\u0647\u200c\u0686\u06cc\u0632 \u06cc\u0627\u062f\u062a \u0628\u0645\u0648\u0646\u0647\u061b',
            );
          case 'software':
            return (0, n.L)(
              '\u0627\u0632 \u0646\u0631\u0645\u200c\u0627\u0641\u0632\u0627\u0631 \u0642\u0628\u0644\u06cc \u0631\u0627\u062d\u062a\u200c\u062a\u0631 \u0648 \u0633\u0631\u06cc\u0639\u200c\u062a\u0631\u0647\u061b',
            );
          default:
            return (0, n.L)(
              '\u0627\u0632 \u0647\u0645\u06cc\u0646 \u0627\u0645\u0631\u0648\u0632 \u0647\u0645\u0647\u200c\u0686\u06cc\u0632 \u0645\u0631\u062a\u0628 \u0645\u06cc\u200c\u0634\u0647\u061b',
            );
        }
      }),
      (e.funnelShop = function (n) {
        const o = (0, t.journeyShop)({
          name: b(n.shopName, t.SHOP_NAME_MAX),
          fieldId: n.fieldId,
          customField: n.customField,
          heardFrom: n.heardFrom,
        });
        if (!o) return null;
        const i = {
          ...(n.role ? { role: n.role } : {}),
          ...(n.stockMethod ? { stockMethod: n.stockMethod } : {}),
          ...(n.goals.length
            ? { goals: [...new Set(n.goals)].slice(0, 6) }
            : {}),
          ...(n.title ? { title: n.title } : {}),
        };
        return { ...o, journey: i };
      }),
      (e.restoreAnswers = function (n) {
        const o = p(),
          u = n && 'object' == typeof n ? n : {},
          f = (t, n) => t.find((t) => t.id === n)?.id ?? null,
          b = (t, n) => ('string' == typeof t ? t.slice(0, n) : '');
        return {
          fieldId: f(t.SHOP_FIELDS, u.fieldId),
          customField: b(u.customField, 40),
          role: f(i, u.role),
          stockMethod: f(l, u.stockMethod),
          goals: Array.isArray(u.goals)
            ? a.filter((t) => u.goals.includes(t.id)).map((t) => t.id)
            : o.goals,
          title: f(s, u.title),
          personName: b(u.personName, c),
          shopName: b(u.shopName, t.SHOP_NAME_MAX),
          heardFrom: f(t.HEARD_FROM, u.heardFrom),
          phone: b(u.phone, 24),
        };
      }));
    var t = r(d[0]),
      n = r(d[1]),
      o = r(d[2]);
    const i = (0, n.localized)([
        {
          id: 'owner',
          label:
            '\u0635\u0627\u062d\u0628 \u0641\u0631\u0648\u0634\u06af\u0627\u0647\u0645',
          emoji: '\ud83c\udfea',
        },
        {
          id: 'manager',
          label:
            '\u0645\u062f\u06cc\u0631 \u0641\u0631\u0648\u0634\u06af\u0627\u0647\u0645',
          emoji: '\ud83e\uddd1\u200d\ud83d\udcbc',
        },
        {
          id: 'seller',
          label: '\u0641\u0631\u0648\u0634\u0646\u062f\u0647\u200c\u0627\u0645',
          emoji: '\ud83d\uded2',
        },
        {
          id: 'accountant',
          label: '\u062d\u0633\u0627\u0628\u062f\u0627\u0631\u0645',
          emoji: '\ud83e\uddee',
        },
        {
          id: 'starting',
          label:
            '\u062a\u0627\u0632\u0647 \u0645\u06cc\u200c\u062e\u0648\u0627\u0645 \u0634\u0631\u0648\u0639 \u06a9\u0646\u0645',
          emoji: '\ud83c\udf31',
        },
      ]),
      l = (0, n.localized)([
        {
          id: 'paper',
          label: '\u062f\u0641\u062a\u0631 \u0648 \u06a9\u0627\u063a\u0630',
          emoji: '\ud83d\udcd2',
        },
        {
          id: 'excel',
          label: '\u0627\u06a9\u0633\u0644',
          emoji: '\ud83d\udcca',
        },
        {
          id: 'memory',
          label: '\u062a\u0648\u06cc \u0630\u0647\u0646\u0645',
          emoji: '\ud83e\udde0',
        },
        {
          id: 'software',
          label:
            '\u06cc\u0647 \u0646\u0631\u0645\u200c\u0627\u0641\u0632\u0627\u0631 \u062f\u06cc\u06af\u0647',
          emoji: '\ud83d\udcbb',
        },
        {
          id: 'none',
          label: '\u0647\u0646\u0648\u0632 \u0647\u06cc\u0686\u06cc',
          emoji: '\ud83e\udd37',
        },
      ]),
      a = (0, n.localized)([
        {
          id: 'stockout',
          label:
            '\u06a9\u0627\u0644\u0627 \u06cc\u0647\u0648 \u062a\u0645\u0648\u0645 \u0646\u0634\u0647',
          emoji: '\ud83d\udce6',
          promise:
            '\u0642\u0628\u0644 \u0627\u0632 \u062a\u0645\u0648\u0645 \u0634\u062f\u0646 \u06a9\u0627\u0644\u0627 \u062e\u0628\u0631\u062a \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645',
        },
        {
          id: 'profit',
          label:
            '\u0633\u0648\u062f \u0648 \u0632\u06cc\u0627\u0646\u0645 \u0631\u0648 \u0628\u062f\u0648\u0646\u0645',
          emoji: '\ud83d\udcb0',
          promise:
            '\u0633\u0648\u062f \u0647\u0631 \u0631\u0648\u0632 \u0648 \u0647\u0631 \u06a9\u0627\u0644\u0627 \u062c\u0644\u0648\u06cc \u0686\u0634\u0645\u062a\u0647',
        },
        {
          id: 'fast_sales',
          label:
            '\u0641\u0631\u0648\u0634 \u0631\u0648 \u0633\u0631\u06cc\u0639 \u062b\u0628\u062a \u06a9\u0646\u0645',
          emoji: '\u26a1',
          promise: o.AI_PHOTOS
            ? '\u0628\u0627 \u0635\u062f\u0627\u060c \u0628\u0627\u0631\u06a9\u062f \u06cc\u0627 \u0639\u06a9\u0633 \u062f\u0631 \u0686\u0646\u062f \u062b\u0627\u0646\u06cc\u0647 \u062b\u0628\u062a \u06a9\u0646'
            : '\u0628\u0627 \u0635\u062f\u0627\u060c \u0628\u0627\u0631\u06a9\u062f \u06cc\u0627 \u0646\u0648\u0634\u062a\u0646 \u062f\u0631 \u0686\u0646\u062f \u062b\u0627\u0646\u06cc\u0647 \u062b\u0628\u062a \u06a9\u0646',
        },
        {
          id: 'debts',
          label:
            '\u062d\u0633\u0627\u0628 \u0628\u062f\u0647\u06a9\u0627\u0631 \u0648 \u0637\u0644\u0628\u06a9\u0627\u0631',
          emoji: '\ud83e\udd1d',
          promise:
            '\u062d\u0633\u0627\u0628 \u0647\u0631 \u0645\u0634\u062a\u0631\u06cc \u0648 \u062a\u0623\u0645\u06cc\u0646\u200c\u06a9\u0646\u0646\u062f\u0647 \u0645\u0631\u062a\u0628\u0647',
        },
        {
          id: 'daily_report',
          label:
            '\u06af\u0632\u0627\u0631\u0634 \u0622\u062e\u0631 \u0631\u0648\u0632',
          emoji: '\ud83d\udcc8',
          promise:
            '\u0622\u062e\u0631 \u0647\u0631 \u0631\u0648\u0632 \u06cc\u0647 \u06af\u0632\u0627\u0631\u0634 \u0633\u0627\u062f\u0647 \u062f\u0627\u0631\u06cc',
        },
        {
          id: 'team',
          label:
            '\u06a9\u0627\u0631 \u0628\u0627 \u0647\u0645\u06a9\u0627\u0631\u0647\u0627',
          emoji: '\ud83d\udc65',
          promise:
            '\u0647\u0645\u06a9\u0627\u0631\u0647\u0627\u062a \u0647\u0645 \u0628\u0627 \u062f\u0633\u062a\u0631\u0633\u06cc \u0645\u062d\u062f\u0648\u062f \u06a9\u0627\u0631 \u0645\u06cc\u200c\u06a9\u0646\u0646',
        },
      ]),
      s = (0, n.localized)([
        { id: 'mr', label: '\u0622\u0642\u0627', emoji: '\ud83d\udc68' },
        { id: 'ms', label: '\u062e\u0627\u0646\u0645', emoji: '\ud83d\udc69' },
      ]),
      c = 60,
      u = [
        'intro',
        'field',
        'role',
        'method',
        'goals',
        'plan',
        'title',
        'name',
        'shop',
        'heard',
        'phone',
        'code',
        'done',
      ],
      f = u.filter((t) => 'intro' !== t && 'done' !== t),
      p = () => ({
        fieldId: null,
        customField: '',
        role: null,
        stockMethod: null,
        goals: [],
        title: null,
        personName: '',
        shopName: '',
        heardFrom: null,
        phone: '',
      }),
      b = (t, n) =>
        String(t ?? '')
          .replace(/\s+/g, ' ')
          .trim()
          .slice(0, n)
          .trim();
  },
  555,
  [553, 311, 494],
);
