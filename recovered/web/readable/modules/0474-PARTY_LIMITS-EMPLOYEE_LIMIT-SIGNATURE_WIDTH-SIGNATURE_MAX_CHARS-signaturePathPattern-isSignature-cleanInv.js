// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 474; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'PARTY_LIMITS', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      Object.defineProperty(e, 'EMPLOYEE_LIMIT', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      Object.defineProperty(e, 'SIGNATURE_WIDTH', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      Object.defineProperty(e, 'SIGNATURE_MAX_CHARS', {
        enumerable: !0,
        get: function () {
          return i;
        },
      }),
      Object.defineProperty(e, 'signaturePathPattern', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      Object.defineProperty(e, 'isSignature', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }),
      (e.cleanInvoiceHeader = function (t) {
        if (!t || 'object' != typeof t) return {};
        const o = t,
          i = {},
          u = y(o.seller),
          s = y(o.buyer),
          l = d(o.employee, n);
        u && (i.seller = u);
        s && (i.buyer = s);
        void 0 !== l && (i.employee = l);
        const c = o.signatures,
          h = {};
        c &&
          'object' == typeof c &&
          (f(c.seller) && (h.seller = c.seller),
          f(c.buyer) && (h.buyer = c.buyer));
        (h.seller || h.buyer) && (i.signatures = h);
        return i;
      }),
      Object.defineProperty(e, 'ADDRESS_BOOK', {
        enumerable: !0,
        get: function () {
          return h;
        },
      }),
      (e.cleanAddressBook = b),
      (e.addressBookWith = function (t, n) {
        const o = b(t),
          i = n.trim();
        if (!i) throw Error('address_empty');
        if (o.includes(i)) return o;
        if (o.length >= h.max) throw Error('address_book_full');
        return b([...o, i.slice(0, h.length)]);
      }),
      (e.addressBookEdit = function (t, n, o) {
        const i = b(t);
        if (!(n >= 0 && n < i.length)) return i;
        if (null === o) return i.filter((t, o) => o !== n);
        const u = o.trim();
        if (!u) throw Error('address_empty');
        return b(i.map((t, o) => (o === n ? u.slice(0, h.length) : t)));
      }),
      (e.signatureFromStrokes = function (t, n, u) {
        if (!(n > 0 && u > 0)) return null;
        const s = t
          .flat()
          .filter((t) => Number.isFinite(t.x) && Number.isFinite(t.y));
        if (!s.length) return null;
        const l = Math.min(...s.map((t) => t.x)) - 8,
          c = Math.min(...s.map((t) => t.y)) - 8,
          f = Math.max(...s.map((t) => t.x)) - l + 8,
          d = Math.max(...s.map((t) => t.y)) - c + 8,
          y = Math.min(o / f, 1200 / d),
          h = Math.max(20, Math.min(2e3, Math.round(d * y))),
          b = (o - f * y) / 2,
          p = (h - d * y) / 2,
          x = (t, n) => Math.max(0, Math.min(n, Math.round(t)));
        for (let n = 2; n <= 1024; n *= 2) {
          let u = '';
          for (const i of t) {
            if (!i.length) continue;
            const t = i.map((t) => ({
              x: x(b + (t.x - l) * y, o),
              y: x(p + (t.y - c) * y, h),
            }));
            let s = t[0];
            u += `M${s.x} ${s.y}`;
            let f = 0;
            for (const o of t.slice(1))
              Math.hypot(o.x - s.x, o.y - s.y) < n ||
                ((u += `L${o.x} ${o.y}`), (s = o), f++);
            const d = t[t.length - 1];
            (d === s ||
              (d.x === s.x && d.y === s.y) ||
              ((u += `L${d.x} ${d.y}`), f++),
              f || (u += `L${Math.min(o, s.x + 1)} ${s.y}`));
          }
          if (!u) return null;
          if (u.length <= i) return { w: o, h: h, d: u };
        }
        return null;
      }));
    const t = {
        name: 60,
        phone: 40,
        address: 160,
        economicId: 20,
        nationalId: 20,
        postalCode: 10,
        registrationNo: 20,
      },
      n = 60,
      o = 600,
      i = 16e3,
      u = /^(?:[ML]\d{1,4} \d{1,4})+$/,
      s = /^[^\u0000-\u001f\u007f]*$/,
      l = /^[0-9]*$/,
      c = new Set(['economicId', 'nationalId', 'postalCode', 'registrationNo']),
      f = (t) => {
        const n = t;
        return (
          !!n &&
          'object' == typeof n &&
          Number.isInteger(n.w) &&
          Number.isInteger(n.h) &&
          n.w >= 50 &&
          n.w <= 2e3 &&
          n.h >= 20 &&
          n.h <= 2e3 &&
          'string' == typeof n.d &&
          n.d.length <= i &&
          u.test(n.d)
        );
      };
    function d(t, n, o = s) {
      return 'string' == typeof t && t.length <= n && o.test(t) ? t : void 0;
    }
    function y(n) {
      if (!n || 'object' != typeof n) return;
      const o = n,
        i = {};
      for (const n of Object.keys(t)) {
        const u = d(o[n], t[n], c.has(n) ? l : s);
        void 0 !== u && (i[n] = u);
      }
      return Object.keys(i).length ? i : void 0;
    }
    const h = { max: 5, length: 160 };
    function b(t) {
      if (!Array.isArray(t)) return [];
      const n = [];
      for (const o of t) {
        if ('string' != typeof o) continue;
        const t = o.trim();
        if (
          (t &&
            t.length <= h.length &&
            s.test(t) &&
            !n.includes(t) &&
            n.push(t),
          n.length >= h.max)
        )
          break;
      }
      return n;
    }
  },
  474,
  [],
);
