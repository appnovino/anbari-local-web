// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 898; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, _a, _m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.drawStatement = async function (n, { logo: o } = {}) {
        const s = n.theme,
          i = 1100,
          r = 44,
          a = 1012,
          c = (0, t.isRtlLang)(),
          h = c ? 1056 : r,
          u = await l(n.logo || o),
          f = globalThis.document.createElement('canvas'),
          m = f.getContext('2d');
        if (!m) throw Error('canvas');
        const b = (t, l = 400) => {
            m.font = `${t}px "Vazirmatn_${700 === l ? '700Bold' : 600 === l ? '600SemiBold' : '400Regular'}", Vazirmatn, sans-serif`;
          },
          p = [50, 120, 0, 140, 140, 150, 86];
        p[2] = a - p.reduce((t, l) => t + l, 0);
        const y = (t, l, n, o = 400) => {
            b(n, o);
            const s = t.split(' '),
              i = [];
            let r = '';
            for (const t of s) {
              const n = r ? r + ' ' + t : t;
              r && m.measureText(n).width > l ? (i.push(r), (r = t)) : (r = n);
            }
            return (r && i.push(r), i.length ? i : ['']);
          },
          k = n.lines.map((t) => {
            const l = y(
                t.head,
                p[2] - 20,
                21,
                'row' === t.kind || 'pending' === t.kind ? 400 : 700,
              ),
              n = [
                ...(t.items ? y(t.items, p[2] - 20, 17) : []),
                ...(t.sub ? y(t.sub, p[2] - 20, 17) : []),
              ];
            return {
              l: t,
              text: l,
              sub: n,
              h: Math.max(52, 18 + 30 * l.length + 24 * n.length),
            };
          }),
          v = (t) => (t.length ? 44 * t.length + 44 + 44 : 0),
          w = v(n.openCheques) + v(n.legacyCheques) + (n.more ? 40 : 0),
          $ = 386 + (52 + k.reduce((t, l) => t + l.h, 0)) + 24 + w + 150 + r,
          S = Math.min(1, Math.sqrt(16e6 / (i * $)));
        ((f.width = Math.floor(i * S)),
          (f.height = Math.floor($ * S)),
          m.scale(S, S));
        const x = (
            t,
            l,
            n,
            o,
            i = 21,
            r = 400,
            a = c ? 'right' : 'left',
            h = s.ink,
          ) => {
            (b(i, r),
              (m.direction = c ? 'rtl' : 'ltr'),
              (m.textAlign = a),
              (m.fillStyle = h));
            let u = t;
            for (; u.length > 1 && m.measureText(u).width > o; )
              u = u.slice(0, -2) + '\u2026';
            m.fillText(u, l, n);
          },
          E = (t, l, n, o, i = s.line, r = 1) => {
            (m.beginPath(),
              m.moveTo(t, l),
              m.lineTo(n, o),
              (m.strokeStyle = i),
              (m.lineWidth = r),
              m.stroke());
          },
          P = (t, l, n, o, i, r = s.line, a = 12) => {
            (m.beginPath(),
              m.roundRect(t, l, n, o, a),
              (m.fillStyle = i),
              m.fill(),
              (m.strokeStyle = r),
              (m.lineWidth = 1.5),
              m.stroke());
          };
        ((m.fillStyle = s.paper), m.fillRect(0, 0, i, $));
        let R = r;
        if (u) {
          const t = c ? 972 : r;
          m.drawImage(u, t, R, 84, 84);
        }
        const q = c ? 1056 - (u ? 100 : 0) : r + (u ? 100 : 0);
        (x(n.shop, q, R + 38, 506, 32, 700),
          (n.shopPhone || n.shopAddress) &&
            x(
              [n.shopPhone, n.shopAddress].filter(Boolean).join(' \xb7 '),
              q,
              R + 76,
              506,
              19,
              400,
              void 0,
              s.muted,
            ));
        const C = c ? r : 1056,
          B = c ? 'left' : 'right';
        (x(n.title, C, R + 40, 425.03999999999996, 34, 700, B, s.accent),
          x(
            `${n.labels.issued}: ${n.issued}`,
            C,
            R + 78,
            425.03999999999996,
            19,
            400,
            B,
            s.muted,
          ),
          (R += 126),
          E(r, R, 1056, R, s.accent, 3),
          (R += 24));
        const M = h,
          T = c ? h - 506 : h + 506;
        (x(`${n.labels.customer}: ${n.customer}`, M, R + 28, 490, 22, 600),
          x(`${n.labels.period}: ${n.period}`, T, R + 28, 490, 22, 600),
          n.customerPhone &&
            x(`${n.labels.phone}: ${n.customerPhone}`, M, R + 66, 490, 20));
        (x(n.labels.unit, T, R + 66, 490, 20, 700), (R += 96));
        const _ = 242.5;
        (n.summary.forEach((t, l) => {
          const n = c ? 1056 - (l + 1) * _ - 14 * l : r + 256.5 * l;
          P(n, R, _, 78, s.paper, t.strong ? s.accent : s.line);
          const o = c ? n + _ - 14 : n + 14;
          (x(t.label, o, R + 30, 214.5, 17, 400, void 0, s.muted),
            x(
              t.value,
              o,
              R + 62,
              214.5,
              21,
              700,
              void 0,
              t.strong
                ? 'owes' === t.side
                  ? '#856000'
                  : 'credit' === t.side
                    ? s.accent
                    : '#16a34a'
                : s.ink,
            ));
        }),
          (R += 96));
        const A = (t) => {
          const l = p.slice(0, t).reduce((t, l) => t + l, 0);
          return c ? 1056 - l - p[t] : r + l;
        };
        ((m.fillStyle = s.tableHeadBg),
          m.fillRect(r, R, a, 52),
          n.labels.columns.forEach((t, l) =>
            x(t, A(l) + p[l] / 2, R + 34, p[l] - 10, 19, 700, 'center'),
          ),
          E(r, R, 1056, R));
        let H = R + 52;
        E(r, H, 1056, H);
        for (const t of k) {
          const l = t.l;
          'row' !== l.kind && 'pending' !== l.kind
            ? ((m.fillStyle = s.tableHeadBg), m.fillRect(r, H, a, t.h))
            : l.settled &&
              ((m.fillStyle = '#16a34a14'), m.fillRect(r, H, a, t.h));
          const n = 'pending' === l.kind ? s.muted : s.ink,
            o = 'row' === l.kind || 'pending' === l.kind ? 400 : 700;
          (x(l.no, A(0) + p[0] / 2, H + 34, p[0] - 8, 19, 400, 'center', n),
            x(l.date, A(1) + p[1] / 2, H + 34, p[1] - 8, 18, 400, 'center', n));
          const i = c ? A(2) + p[2] - 10 : A(2) + 10;
          (t.text.forEach((t, l) =>
            x(t, i, H + 34 + 30 * l, p[2] - 20, 21, o, void 0, n),
          ),
            t.sub.forEach((l, n) =>
              x(
                l,
                i,
                H + 34 + 30 * t.text.length + 24 * n - 4,
                p[2] - 20,
                17,
                400,
                void 0,
                s.muted,
              ),
            ));
          const h = (t, o) => {
            o &&
              x(
                o,
                c ? A(t) + 12 : A(t) + p[t] - 12,
                H + 34,
                p[t] - 20,
                20,
                'row' === l.kind ? 600 : 700,
                c ? 'left' : 'right',
                n,
              );
          };
          (h(3, l.debit),
            h(4, l.credit),
            h(5, l.balance),
            x(l.tag, A(6) + p[6] / 2, H + 34, p[6] - 8, 19, 600, 'center', n),
            (H += t.h),
            E(r, H, 1056, H));
        }
        for (let t = 0; t <= p.length; t++) {
          const l =
            t === p.length
              ? c
                ? r
                : 1056
              : c
                ? 1056 - p.slice(0, t).reduce((t, l) => t + l, 0)
                : r + p.slice(0, t).reduce((t, l) => t + l, 0);
          E(l, R, l, H);
        }
        ((R = H + 24),
          n.more &&
            (x(n.more, h, R + 24, a, 18, 400, void 0, s.muted), (R += 40)));
        const W = (t, l) => {
          if (!t.length) return;
          (x(l, h, R + 28, a, 20, 700), (R += 44));
          const o = 202.4;
          ((m.fillStyle = s.tableHeadBg),
            m.fillRect(r, R, a, 44),
            n.labels.chequeColumns.forEach((t, l) =>
              x(
                t,
                c ? 1056 - (l + 0.5) * o : r + (l + 0.5) * o,
                R + 29,
                192.4,
                18,
                700,
                'center',
              ),
            ),
            (R += 44));
          for (const l of t)
            ([l.number, l.bank, l.payee, l.due, l.amount].forEach((t, l) =>
              x(
                t,
                c ? 1056 - (l + 0.5) * o : r + (l + 0.5) * o,
                R + 29,
                192.4,
                18,
                400,
                'center',
              ),
            ),
              E(r, R + 44, 1056, R + 44),
              (R += 44));
        };
        (W(n.openCheques, `${n.labels.openCheques} (${n.labels.openNote})`),
          W(
            n.legacyCheques,
            `${n.labels.legacyCheques} (${n.labels.legacyNote})`,
          ),
          (R += 50));
        return (
          [n.labels.sellerSign, n.labels.buyerSign].forEach((t, l) => {
            const n = c ? 1056 - 476 * (l + 1) - 60 * l : r + 536 * l;
            (E(n, R, n + 476, R, s.ink),
              x(t, n + 238, R + 30, 476, 18, 400, 'center'));
          }),
          (R += 70),
          x(n.labels.legend, h, R, 708.4, 16, 400, void 0, s.muted),
          x(
            n.labels.madeWith,
            c ? r : 1056,
            R,
            283.36,
            16,
            400,
            c ? 'left' : 'right',
            s.muted,
          ),
          f.toDataURL('image/png')
        );
      }));
    var t = _r(d[0]);
    const l = (t) =>
      t
        ? new Promise((l) => {
            const n = new Image();
            ((n.onload = () => l(n)), (n.onerror = () => l(null)), (n.src = t));
          })
        : Promise.resolve(null);
  },
  898,
  [311],
);
