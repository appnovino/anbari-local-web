// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 703; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'SHORTCUT_KEYS', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      Object.defineProperty(e, 'G_WAIT_MS', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      (e.isTypingTarget = function (t) {
        const n = t;
        if (!n) return !1;
        const o = String(n.tagName || '').toUpperCase();
        return (
          'INPUT' === o ||
          'TEXTAREA' === o ||
          'SELECT' === o ||
          !!n.isContentEditable
        );
      }),
      (e.createShortcutMatcher = function () {
        let t = 0;
        return function (c, s, l = Date.now()) {
          const a = c.code || '';
          return c.altKey || c.repeat
            ? null
            : (!c.ctrlKey && !c.metaKey) || c.shiftKey || 'KeyK' !== a
              ? c.ctrlKey || c.metaKey || s
                ? ((t = 0), null)
                : t && l - t <= o
                  ? ((t = 0), n[a] ?? null)
                  : ((t = 0),
                    'Slash' === a
                      ? c.shiftKey
                        ? 'help'
                        : 'palette'
                      : c.shiftKey
                        ? null
                        : 'KeyG' === a
                          ? ((t = l), 'pending')
                          : 'KeyN' === a
                            ? 'newInvoice'
                            : 'KeyR' === a
                              ? 'goodsIn'
                              : null)
              : ((t = 0), 'palette');
        };
      }),
      (e.foldSearch = c),
      (e.paletteProducts = function (t, n, o = 6) {
        const s = c(n);
        if (!s) return [];
        const l = s.split(' '),
          a = [];
        for (const n of t) {
          if (n.archivedAt) continue;
          const t = c(n.name),
            o = [t, c(n.brand || ''), c(n.barcode || '')].join(' ');
          l.every((t) => o.includes(t)) &&
            a.push({
              p: n,
              score: t.startsWith(s) ? 0 : t.includes(s) ? 1 : 2,
            });
        }
        return a
          .sort((t, n) => t.score - n.score || t.p.name.localeCompare(n.p.name))
          .slice(0, o)
          .map((t) => t.p);
      }));
    const t = {
        palette: [['Ctrl', 'K'], ['/']],
        help: [['?']],
        newInvoice: [['N']],
        goodsIn: [['R']],
        ledger: [['G', 'L']],
        cheques: [['G', 'C']],
        invoices: [['G', 'I']],
        expenses: [['G', 'E']],
        reminders: [['G', 'R']],
        report: [['G', 'D']],
        home: [['G', 'H']],
        inventory: [['G', 'M']],
      },
      n = {
        KeyL: 'ledger',
        KeyC: 'cheques',
        KeyI: 'invoices',
        KeyE: 'expenses',
        KeyR: 'reminders',
        KeyD: 'report',
        KeyH: 'home',
        KeyM: 'inventory',
      },
      o = 1500;
    function c(t) {
      return String(t || '')
        .toLowerCase()
        .replace(/[\u064a\u0649]/g, '\u06cc')
        .replace(/\u0643/g, '\u06a9')
        .replace(/[\u06f0-\u06f9]/g, (t) => String(t.charCodeAt(0) - 1776))
        .replace(/[\u0660-\u0669]/g, (t) => String(t.charCodeAt(0) - 1632))
        .replace(/[\u200c\s]+/g, ' ')
        .trim();
    }
  },
  703,
  [],
);
