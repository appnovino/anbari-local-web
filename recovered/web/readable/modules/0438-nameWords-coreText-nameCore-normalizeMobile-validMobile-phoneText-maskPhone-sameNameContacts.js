// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 438; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.nameWords = s),
      (e.coreText = l),
      (e.nameCore = u),
      (e.normalizeMobile = h),
      Object.defineProperty(e, 'validMobile', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }),
      (e.phoneText = function (n) {
        const o = (n || '').trim();
        return o ? '\u2066' + (0, t.localDigits)(o) + '\u2069' : '';
      }),
      (e.maskPhone = function (n) {
        const o = h(n || '');
        return o
          ? '\u2066' +
              (0, t.localDigits)(
                /^09\d{9}$/.test(o)
                  ? o.slice(0, 4) + '\u2026' + o.slice(-4)
                  : o,
              ) +
              '\u2069'
          : '';
      }),
      (e.sameNameContacts = p),
      (e.phoneRule = b),
      (e.phoneRuleText = v),
      (e.phoneRequirement = function (n, t, o, c) {
        const a = b(n, t, o, c);
        return a.ok
          ? { ok: !0 }
          : { ok: !1, others: a.others, reason: v(a.code, a) };
      }),
      (e.cannotTellApart = w),
      (e.confusableGroups = function (n) {
        const t = new Map();
        for (const o of n) {
          const c = u(o.name);
          c && n.some((n) => w(o, n)) && t.set(c, [...(t.get(c) || []), o]);
        }
        return [...t.entries()]
          .map(([n, t]) => ({ core: n, contacts: t }))
          .sort((n, t) => t.contacts.length - n.contacts.length);
      }),
      (e.confusableText = function (n, o) {
        return (0, t.L)(
          '{n} \u0645\u062e\u0627\u0637\u0628 \u0628\u0627 \u0646\u0627\u0645 \xab{core}\xbb \u062f\u0627\u0631\u06cc \u0648 \u0645\u0639\u0644\u0648\u0645 \u0646\u06cc\u0633\u062a \u0627\u06cc\u0646 \u0628\u0631\u0627\u06cc \u06a9\u062f\u0627\u0645 \u0627\u0633\u062a. \u0627\u0648\u0644 \u062f\u0631 \xab\u062d\u0633\u0627\u0628\u200c\u0647\u0627\xbb \u0622\u0646\u200c\u0647\u0627 \u0631\u0627 \u0645\u0631\u062a\u0628 \u06a9\u0646 (\u0627\u0633\u0645 \u06a9\u0627\u0645\u0644 \u06cc\u0627 \u0634\u0645\u0627\u0631\u0647)\u060c \u0628\u0639\u062f \u0627\u062f\u0627\u0645\u0647 \u0628\u062f\u0647.',
          {
            n:
              'fa' === (0, t.localeLang)() && o < y.length
                ? y[o]
                : (0, t.localDigits)(o),
            core: n,
          },
        );
      }));
    var n = r(_d[0]),
      t = r(_d[1]);
    const o = new Set([
        '\u0622\u0642\u0627\u06cc',
        '\u0622\u0642\u0627',
        '\u062e\u0627\u0646\u0645',
        '\u062e\u0627\u0646\u0648\u0645',
        '\u062d\u0627\u062c',
        '\u062d\u0627\u062c\u06cc',
        '\u062d\u0627\u062c\u06cc\u0647',
        '\u062c\u0646\u0627\u0628',
        '\u0633\u0631\u06a9\u0627\u0631',
        '\u0627\u0642\u0627\u06cc',
        '\u0627\u0642\u0627',
        '\u062f\u06a9\u062a\u0631',
        '\u0645\u0647\u0646\u062f\u0633',
        '\u0627\u0633\u062a\u0627\u062f',
        '\u0628\u0627\u0646\u0648',
      ]),
      c = (t) =>
        (0, n.normalizeName)(t)
          .replace(/\u0626/g, '\u06cc')
          .replace(/\u0624/g, '\u0648')
          .replace(/[\u0623\u0625]/g, '\u0627')
          .replace(/\u0629/g, '\u0647')
          .replace(/\u06cc{3,}/g, '\u06cc\u06cc'),
      a = new Set([
        '\u067e\u0648\u0631',
        '\u0632\u0627\u062f\u0647',
        '\u0646\u0698\u0627\u062f',
        '\u0646\u06cc\u0627',
        '\u0641\u0631',
        '\u0631\u0627\u062f',
        '\u0645\u0646\u0634',
        '\u0648\u0646\u062f',
        '\u0644\u0648',
        '\u06a9\u06cc\u0627',
        '\u0632\u0627\u062f',
        '\u062f\u0648\u0633\u062a',
        '\u062e\u0648\u0627\u0647',
        '\u067e\u0646\u0627\u0647',
        '\u0646\u0633\u0628',
      ]);
    function s(n) {
      return c(n.replace(/\u200c/g, ''))
        .replace(/[()\-\u2013\u2014\u060c,.|/]/g, ' ')
        .split(' ')
        .filter((n) => n && !o.has(n) && !/^\d+$/.test(n))
        .reduce(
          (n, t) => (
            n.length && a.has(t) ? (n[n.length - 1] += t) : n.push(t),
            n
          ),
          [],
        );
    }
    function l(n) {
      const t = n
          .replace(/\s+/g, ' ')
          .trim()
          .split(' ')
          .filter(
            (n) =>
              n &&
              !o.has(c(n)) &&
              !/^[\d\u06f0-\u06f9\u0660-\u0669]+$/.test(n) &&
              !/^[()\-\u2013\u2014\u060c,.|/]+$/.test(n),
          ),
        s = t[t.length - 1] || '',
        l = t[t.length - 2];
      return (
        (l && a.has(c(s)) ? l + '\u200c' + s : s).replace(
          /[()\u060c,.|]/g,
          '',
        ) || u(n)
      );
    }
    function u(n) {
      const t = s(n),
        o = t[t.length - 1] || '';
      return o.length >= 2 ? o : '';
    }
    function h(t) {
      return (0, n.normalizeName)(t || '')
        .replace(/[\s\-()]/g, '')
        .replace(/^(?:\+98|0098)(?=9\d{9}$)/, '0');
    }
    const f = (n) => /^09\d{9}$/.test(h(n));
    function p(n, t, o) {
      const c = u(n);
      return c ? t.filter((n) => n.id !== o && u(n.name) === c) : [];
    }
    const d = (n, t) => s(n).join(' ') === s(t).join(' '),
      _ = new Set([
        '\u062e\u0627\u0646\u0645',
        '\u062e\u0627\u0646\u0648\u0645',
        '\u0628\u0627\u0646\u0648',
        '\u062d\u0627\u062c\u06cc\u0647',
        '\u0633\u0631\u06a9\u0627\u0631',
      ]),
      k = new Set([
        '\u0622\u0642\u0627\u06cc',
        '\u0622\u0642\u0627',
        '\u0627\u0642\u0627\u06cc',
        '\u0627\u0642\u0627',
        '\u062c\u0646\u0627\u0628',
      ]),
      x = (n) => {
        const t = c(n).split(' ');
        return t.some((n) => _.has(n))
          ? 'f'
          : t.some((n) => k.has(n))
            ? 'm'
            : null;
      },
      L = (n, t) => {
        const o = x(n),
          c = x(t);
        return !o || !c || o === c;
      };
    function b(n, t, o, c, a = !1) {
      const s = p(n, o, c);
      if (!s.length) return { ok: !0 };
      const u = h(t || ''),
        _ = s.find((t) => d(t.name, n)),
        k = l(n);
      if (!u && a) {
        const t = s.filter((t) => d(t.name, n) && L(t.name, n));
        return t.length
          ? {
              ok: !1,
              code: 'contact_phone_required',
              name: t[0].name.trim(),
              core: k,
              exact: !0,
              others: t,
            }
          : { ok: !0 };
      }
      if (!u)
        return {
          ok: !1,
          code: 'contact_phone_required',
          name: _ ? _.name.trim() : '',
          core: k,
          exact: !!_,
          others: s,
        };
      if (!f(u))
        return {
          ok: !1,
          code: 'contact_phone_invalid',
          name: '',
          core: k,
          exact: !1,
          others: s,
        };
      const x = s.find((n) => h(n.phone || '') === u);
      return x
        ? {
            ok: !1,
            code: 'contact_phone_taken',
            name: x.name.trim(),
            core: k,
            exact: !1,
            others: [x],
          }
        : { ok: !0 };
    }
    function v(n, o = {}) {
      const c = 'string' == typeof o.name ? o.name.trim() : '',
        a = 'string' == typeof o.core ? o.core : '';
      return 'contact_phone_required' === n
        ? o.exact && c
          ? (0, t.L)(
              '\xab{name}\xbb \u0627\u0632 \u0642\u0628\u0644 \u062f\u0631 \u0645\u062e\u0627\u0637\u0628\u06cc\u0646 \u0647\u0633\u062a\u061b \u0627\u06af\u0631 \u0634\u062e\u0635 \u062f\u06cc\u06af\u0631\u06cc \u0627\u0633\u062a\u060c \u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644\u0634 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646 \u062a\u0627 \u062d\u0633\u0627\u0628\u200c\u0647\u0627 \u0642\u0627\u0637\u06cc \u0646\u0634\u0648\u062f.',
              { name: c },
            )
          : a
            ? (0, t.L)(
                '\u06cc\u06a9 \xab{core}\xbb \u062f\u06cc\u06af\u0631 \u0647\u0645 \u062f\u0627\u0631\u06cc\u061b \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646\u06a9\u0647 \u062d\u0633\u0627\u0628\u200c\u0647\u0627 \u0642\u0627\u0637\u06cc \u0646\u0634\u0648\u062f\u060c \u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646.',
                { core: a },
              )
            : (0, t.L)(
                '\u0645\u062e\u0627\u0637\u0628 \u062f\u06cc\u06af\u0631\u06cc \u0628\u0627 \u0647\u0645\u06cc\u0646 \u0646\u0627\u0645 \u062e\u0627\u0646\u0648\u0627\u062f\u06af\u06cc \u0647\u0633\u062a\u061b \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646\u06a9\u0647 \u062d\u0633\u0627\u0628\u200c\u0647\u0627 \u0642\u0627\u0637\u06cc \u0646\u0634\u0648\u062f\u060c \u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646.',
              )
        : 'contact_phone_invalid' === n
          ? (0, t.L)(
              '\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644 \u062f\u0631\u0633\u062a \u0646\u06cc\u0633\u062a\u061b \u06f1\u06f1 \u0631\u0642\u0645 \u0628\u0627\u0634\u062f \u0648 \u0628\u0627 \u06f0\u06f9 \u0634\u0631\u0648\u0639 \u0634\u0648\u062f.',
            )
          : 'contact_phone_taken' === n
            ? c
              ? (0, t.L)(
                  '\u0627\u06cc\u0646 \u0634\u0645\u0627\u0631\u0647 \u0628\u0631\u0627\u06cc \xab{name}\xbb \u062b\u0628\u062a \u0634\u062f\u0647\u061b \u0627\u06af\u0631 \u0647\u0645\u0627\u0646 \u0634\u062e\u0635 \u0627\u0633\u062a\u060c \u0647\u0645\u0627\u0646 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646.',
                  { name: c },
                )
              : (0, t.L)(
                  '\u0627\u06cc\u0646 \u0634\u0645\u0627\u0631\u0647 \u0628\u0631\u0627\u06cc \u0645\u062e\u0627\u0637\u0628 \u062f\u06cc\u06af\u0631\u06cc \u0628\u0627 \u0647\u0645\u06cc\u0646 \u0646\u0627\u0645 \u062e\u0627\u0646\u0648\u0627\u062f\u06af\u06cc \u062b\u0628\u062a \u0634\u062f\u0647\u061b \u0627\u06af\u0631 \u0647\u0645\u0627\u0646 \u0634\u062e\u0635 \u0627\u0633\u062a\u060c \u0647\u0645\u0627\u0646 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646.',
                )
            : '';
    }
    function w(n, t) {
      if (n.id === t.id) return !1;
      const o = u(n.name);
      if (!o || o !== u(t.name)) return !1;
      if (h(n.phone || '') && h(t.phone || '')) return !1;
      const c = new Set(s(n.name)),
        a = new Set(s(t.name));
      return [...c].every((n) => a.has(n)) || [...a].every((n) => c.has(n));
    }
    const y = [
      '',
      '\u06cc\u06a9',
      '\u062f\u0648',
      '\u0633\u0647',
      '\u0686\u0647\u0627\u0631',
      '\u067e\u0646\u062c',
      '\u0634\u0634',
      '\u0647\u0641\u062a',
      '\u0647\u0634\u062a',
      '\u0646\u0647',
      '\u062f\u0647',
    ];
  },
  438,
  [439, 311],
);
