// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 931; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, _a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'LAYOUT_MARK', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      Object.defineProperty(e, 'HOME_TOP', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      Object.defineProperty(e, 'HOME_CARDS', {
        enumerable: !0,
        get: function () {
          return r;
        },
      }),
      Object.defineProperty(e, 'HOME_WIDGETS', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      Object.defineProperty(e, 'HOME_KEYS', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      Object.defineProperty(e, 'isHomeWidget', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      Object.defineProperty(e, 'isHomeBlock', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      (e.readHomeLayout = function (r, s) {
        const o = Array.isArray(r) ? r.filter((n) => 'string' == typeof n) : [];
        if (!o.includes(n)) {
          const n = f(s.map((n) => ('flow' === n ? 'today' : n))).filter(
            (n) => !t.includes(n),
          );
          return { blocks: [...t, ...n], hiddenKeys: [] };
        }
        const u = f(
            o
              .filter((t) => t !== n && !t.startsWith('-k:'))
              .map((n) => ('flow' === n ? 'today' : n)),
          ),
          l = [
            ...new Set(
              o
                .filter((n) => n.startsWith('-k:'))
                .map((n) => n.slice(3))
                .filter((n) => i.has(n)),
            ),
          ];
        return { blocks: u, hiddenKeys: c.filter((n) => l.includes(n)) };
      }),
      (e.writeHomeLayout = a),
      Object.defineProperty(e, 'layoutCards', {
        enumerable: !0,
        get: function () {
          return b;
        },
      }),
      (e.removeBlock = function (n, t) {
        return { ...n, blocks: n.blocks.filter((n) => n !== t) };
      }),
      (e.addBlock = y),
      (e.moveBlock = function (n, t, r) {
        const s = n.blocks.indexOf(t),
          c = s + r;
        if (s < 0 || c < 0 || c >= n.blocks.length) return n;
        const o = [...n.blocks];
        return (o.splice(s, 1), o.splice(c, 0, t), { ...n, blocks: o });
      }),
      (e.swapBlocks = function (n, t, r) {
        const s = n.blocks.indexOf(t),
          c = n.blocks.indexOf(r);
        if (s < 0 || c < 0 || s === c) return n;
        const o = [...n.blocks];
        return ((o[s] = r), (o[c] = t), { ...n, blocks: o });
      }),
      Object.defineProperty(e, 'RETIRED_KEYS', {
        enumerable: !0,
        get: function () {
          return k;
        },
      }),
      (e.accountsKey = h),
      (e.gridHiddenKeys = function (n) {
        const t = h(n);
        return c.filter(
          (r) => k.includes(r) || ('ledger' === r ? t.hidden : n.includes(r)),
        );
      }),
      (e.hideKey = function (n, t) {
        const r = p(t);
        return r.every((t) => n.hiddenKeys.includes(t))
          ? n
          : {
              ...n,
              hiddenKeys: c.filter(
                (t) => r.includes(t) || n.hiddenKeys.includes(t),
              ),
            };
      }),
      (e.showKey = function (n, t) {
        const r = p(t),
          s = { ...n, hiddenKeys: n.hiddenKeys.filter((n) => !r.includes(n)) };
        return s.blocks.includes('keys') ? s : y(s, 'keys');
      }),
      Object.defineProperty(e, 'sameLayout', {
        enumerable: !0,
        get: function () {
          return O;
        },
      }));
    const n = 'v2',
      t = ['insight', 'invoice', 'keys'],
      r = ['today', 'week', 'recent', 'fresh', 'ledger'],
      s = [
        'w:expenses',
        'w:payments',
        'w:activity',
        'w:cheques',
        'w:reminders',
        'w:sales',
        'w:low',
      ],
      c = [
        'cheques',
        'ledger',
        'club',
        'customers',
        'expenses',
        'reminders',
        'staff',
        'learn',
        'referral',
        'reports',
        'ai',
        'api',
        'invoices',
        'contacts',
      ],
      o = new Set([...t, ...r, ...s]),
      i = new Set(c),
      u = (n) => n.startsWith('w:') && o.has(n),
      l = (n) => 'string' == typeof n && o.has(n);
    function f(n) {
      const t = [];
      for (const r of n) l(r) && !t.includes(r) && t.push(r);
      return t;
    }
    function a(t) {
      return [
        n,
        ...f(t.blocks),
        ...c.filter((n) => t.hiddenKeys.includes(n)).map((n) => '-k:' + n),
      ];
    }
    const b = (n) => n.blocks.filter((n) => r.includes(n));
    function y(n, r) {
      if (n.blocks.includes(r)) return n;
      if (t.includes(r)) {
        const s = (n) => t.indexOf(n),
          c = s(r);
        let o = 0;
        n.blocks.forEach((n, t) => {
          const r = s(n);
          r >= 0 && r < c && (o = t + 1);
        });
        const i = [...n.blocks];
        return (i.splice(o, 0, r), { ...n, blocks: i });
      }
      return { ...n, blocks: [...n.blocks, r] };
    }
    const k = ['contacts', 'customers'];
    function h(n) {
      const t = (t) => !n.includes(t);
      return t('ledger') || t('contacts')
        ? { hidden: !1 }
        : t('customers')
          ? { hidden: !1, filter: 'customer' }
          : { hidden: !0 };
    }
    const p = (n) => ('ledger' === n ? ['ledger', ...k] : [n]);
    const O = (n, t) => a(n).join(',') === a(t).join(',');
  },
  931,
  [],
);
