// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 808; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'invoiceColumns', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      Object.defineProperty(e, 'invoicePaper', {
        enumerable: !0,
        get: function () {
          return i;
        },
      }),
      (e.drawReceipt = async function (i, o) {
        const s = (t) =>
            t
              ? new Promise((n, l) => {
                  const i = new Image();
                  ((i.onload = () => n(i)),
                    (i.onerror = () => l(Error('invoice_image_failed'))),
                    (i.src = t));
                })
              : Promise.resolve(null),
          [c, f] = await Promise.all([s(i.logo), s(i.signature)]),
          u = i.theme,
          h = i.custom ? 260 : 0,
          b = 40,
          p = 820,
          y = 250 + h,
          w = 88,
          S = i.summary.reduce((t, n) => t + (n.strong ? 76 : 54), 0),
          k = b + y + 24,
          v = 76 + i.lines.length * w,
          x = k + v + 24,
          P = i.head?.signs || {},
          T = (0, n.isSignature)(P.seller) || (0, n.isSignature)(P.buyer),
          B = x + S + (T ? 300 : i.custom ? 260 : 130),
          $ = globalThis.document.createElement('canvas');
        (($.width = 900), ($.height = B));
        const E = $.getContext('2d');
        if (!E) throw Error('canvas');
        const R = (0, t.isRtlLang)(),
          I = R ? 836 : 64,
          _ = R ? 64 : 836,
          j = (t, n = 400) => {
            E.font = `${t}px "Vazirmatn_${700 === n ? '700Bold' : 600 === n ? '600SemiBold' : '400Regular'}", sans-serif`;
          },
          A = (t, n) => {
            if (E.measureText(t).width <= n) return t;
            const l = Array.from(t);
            for (; l.length && E.measureText(l.join('') + '\u2026').width > n; )
              l.pop();
            return l.join('') + '\u2026';
          },
          C = (
            t,
            n,
            l,
            i,
            o = 24,
            s = 400,
            c = R ? 'right' : 'left',
            f = !1,
            h = u.ink,
          ) => {
            if (
              ((E.textAlign = c),
              (E.direction = R ? 'rtl' : 'ltr'),
              (E.fillStyle = h),
              j(o, s),
              f)
            )
              for (; o > 10 && E.measureText(t).width > i; ) j(--o, s);
            E.fillText(A(t, i), n, l);
          },
          H = (t, n, l, i, o = u.paper, s = 12) => {
            (E.beginPath(),
              E.roundRect(t, n, l, i, s),
              (E.fillStyle = o),
              E.fill(),
              (E.strokeStyle = u.line),
              (E.lineWidth = 1),
              E.stroke());
          },
          M = (t, n, l, i) => {
            (E.beginPath(),
              E.moveTo(t, n),
              E.lineTo(l, i),
              (E.strokeStyle = u.line),
              (E.lineWidth = 1),
              E.stroke());
          };
        ((E.fillStyle = u.paper),
          E.fillRect(0, 0, 900, B),
          H(b, b, p, y, u.headerBg));
        const O = (t, n, l, i, o, s, c, f) =>
          C(t, n, l, i, o, s, c, f, u.headerInk);
        if (i.custom) {
          (c && E.drawImage(c, 64, 60, 100, 100),
            O(i.brand, 836, 88, 660, 30, 700, 'right', !0));
          const t = [];
          let n = '';
          j(22);
          for (const l of i.address)
            '\n' === l || (n && E.measureText(n + l).width > 660)
              ? (t.push(n), (n = '\n' === l ? '' : l))
              : (n += l);
          (n && t.push(n),
            t
              .slice(0, 4)
              .forEach((t, n) =>
                O(t, 836, 132 + 28 * n, 660, 22, 400, 'right', !0),
              ),
            O(i.phone, 836, 260, 660, 22, 400, 'right', !0));
        }
        const W = b + h;
        (O(i.title, I, W + 48, 393.59999999999997, 32, 700),
          O(i.labels.seller, _, W + 34, 344.4, 20, 400, R ? 'left' : 'right'),
          O(i.seller, _, W + 72, 344.4, 27, 700, R ? 'left' : 'right'),
          O(
            `${i.labels.invoiceNo}: ${i.number}`,
            I,
            W + 88,
            393.59999999999997,
            22,
          ),
          M(64, W + 108, 836, W + 108),
          O(
            `${i.labels.date}: ${i.date}`,
            I,
            W + 143,
            i.recordedBy ? 410 : 772,
            22,
          ),
          i.recordedBy &&
            O(
              `${i.labels.recordedBy}: ${i.recordedBy}`,
              _,
              W + 143,
              344.4,
              20,
              400,
              R ? 'left' : 'right',
            ));
        (O(`${i.labels.buyer}: ${i.buyer}`, I, W + 180, 772, 24, 600),
          j(20, 600));
        const D = Math.min(772, E.measureText(i.status).width + 32),
          L = R ? I - D : I;
        (H(L, W + 197, D, 36, u.tableHeadBg, 18),
          (E.textAlign = 'center'),
          (E.fillStyle = u.ink),
          E.fillText(A(i.status, D - 24), L + D / 2, W + 222),
          H(b, k, p, v, u.paper, 0),
          (E.fillStyle = u.tableHeadBg),
          E.fillRect(41, k + 1, 818, 75),
          i.lines.forEach((t, n) => {
            n % 2 == 1 &&
              ((E.fillStyle = u.paper), E.fillRect(41, k + 76 + n * w, 818, w));
          }));
        let q = 0;
        l.forEach((t, n) => {
          const l = (p * t) / 100,
            o = R ? 860 - q - l : b + q,
            s = o + l / 2,
            c = i.columns[n].split(' (');
          (C(
            c[0],
            s,
            k + (c.length > 1 ? 31 : 46),
            l - 12,
            21,
            600,
            'center',
            !0,
          ),
            c.length > 1 &&
              C('(' + c[1], s, k + 60, l - 12, 18, 400, 'center', !0),
            i.lines.forEach((t, i) => {
              const c = k + 76 + i * w,
                f = [t.row, t.name, t.quantity, t.price, t.total];
              (E.save(),
                E.beginPath(),
                E.rect(o + 2, c + 1, l - 4, 86),
                E.clip(),
                C(
                  f[n],
                  1 === n ? (R ? o + l - 12 : o + 12) : s,
                  c + (2 === n ? 35 : 52),
                  l - 24,
                  1 === n ? 25 : 23,
                  400,
                  1 === n ? (R ? 'right' : 'left') : 'center',
                  1 !== n,
                ),
                2 === n && C(t.unit, s, c + 64, l - 16, 18, 400, 'center'),
                E.restore());
            }),
            q && M(R ? o + l : o, k, R ? o + l : o, k + v),
            (q += l));
        });
        for (let t = 0; t <= i.lines.length; t++)
          M(b, k + 76 + t * w, 860, k + 76 + t * w);
        H(b, x, p, S);
        let z = x;
        for (const t of i.summary) {
          const n = t.strong ? 76 : 54;
          (t.strong && ((E.fillStyle = u.payableBg), E.fillRect(41, z, 818, n)),
            z > x && M(b, z, 860, z),
            C(
              t.label,
              I,
              z + n / 2 + 8,
              426.40000000000003,
              t.strong ? 28 : 23,
              t.strong ? 700 : 400,
              void 0,
              !1,
              t.strong ? u.payableInk : u.ink,
            ),
            C(
              t.value,
              _,
              z + n / 2 + 9,
              328,
              t.strong ? 36 : 25,
              t.strong ? 700 : 400,
              R ? 'left' : 'right',
              !0,
              t.strong ? u.payableInk : u.ink,
            ),
            (z += n));
        }
        if (T) {
          const t = x + S + 22,
            l = 398;
          ['seller', 'buyer'].forEach((o, s) => {
            const c = R ? 462 - 422 * s : b + 422 * s,
              h = P[o];
            if (
              (H(c, t, l, 160),
              C(
                'seller' === o ? i.labels.sellerSign : i.labels.buyerSign,
                c + 199,
                t + 30,
                374,
                20,
                400,
                'center',
                !0,
                u.muted,
              ),
              o === i.head?.shopSide &&
                f &&
                E.drawImage(f, c + 16, t + 44, 366, 100),
              (0, n.isSignature)(h))
            ) {
              const n = Math.min(366 / h.w, 104 / h.h);
              (E.save(),
                E.translate(
                  c + 199 - (h.w * n) / 2,
                  t + 46 + (104 - h.h * n) / 2,
                ),
                E.scale(n, n),
                (E.strokeStyle = u.ink),
                (E.lineWidth = 3 / n),
                (E.lineCap = 'round'),
                (E.lineJoin = 'round'),
                E.stroke(new Path2D(h.d)),
                E.restore());
            }
          });
        } else if (i.custom) {
          const t = x + S + 22;
          (H(b, t, 260, 132),
            C(i.signHere, 170, t + 29, 236, 20, 400, 'center', !1, u.muted),
            f && E.drawImage(f, 56, t + 43, 228, 76));
        }
        const J = i.footer.split(/\s+/),
          N = [];
        let U = '';
        j(23);
        for (const t of J)
          U && E.measureText(U + ' ' + t).width > p
            ? (N.push(U), (U = t))
            : (U += (U ? ' ' : '') + t);
        U && N.push(U);
        return (
          N.slice(0, 3).forEach((t, n) =>
            C(t, 450, B - 80 + 28 * n, p, 23, 400, 'center', !0, u.muted),
          ),
          $.toDataURL('image/png')
        );
      }));
    var t = r(d[0]),
      n = r(d[1]);
    const l = [12, 34, 14, 20, 20],
      i = {
        ink: '#172b35',
        muted: '#52616b',
        line: '#d6dfe3',
        soft: '#f2f6f7',
        accent: '#e7f3ef',
      };
  },
  808,
  [311, 474],
);
