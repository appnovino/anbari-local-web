// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 519; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a, m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'defaultCards', {
        enumerable: !0,
        get: function () {
          return i;
        },
      }),
      Object.defineProperty(_e, 'OLD_DEFAULT_LAYOUTS', {
        enumerable: !0,
        get: function () {
          return h;
        },
      }),
      Object.defineProperty(_e, 'tutorialKey', {
        enumerable: !0,
        get: function () {
          return d;
        },
      }),
      Object.defineProperty(_e, 'businessKey', {
        enumerable: !0,
        get: function () {
          return y;
        },
      }),
      Object.defineProperty(_e, 'starterKey', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      (_e.rememberedBusiness = async function (e, t) {
        try {
          const s = await n.default.getItem(y(e, t));
          if (!s) return null;
          const o = JSON.parse(s);
          return o && ['maker', 'reseller', 'both'].includes(o.businessType)
            ? o
            : null;
        } catch {
          return null;
        }
      }),
      (_e.rememberBusiness = async function (e, t, s) {
        await n.default.setItem(y(e, t), JSON.stringify(s));
      }),
      (_e.readNotebookShop = async function (e) {
        return (await (0, s.request)((0, s.shopPath)(e, ''))).shop;
      }),
      (_e.patchNotebookBusiness = async function (e, t) {
        return (0, s.request)((0, s.shopPath)(e, ''), 'PATCH', t, { key: q() });
      }),
      (_e.patchNotebookSettings = async function (e, t) {
        return (0, s.request)((0, s.shopPath)(e, '/settings'), 'PATCH', t);
      }),
      (_e.uniqueCards = function (e) {
        const t = new Set([
          'today',
          'week',
          'recent',
          'flow',
          'fresh',
          'ledger',
        ]);
        return Array.isArray(e)
          ? e.filter(
              (e, n, s) =>
                'string' == typeof e && t.has(e) && s.indexOf(e) === n,
            )
          : [];
      }),
      (_e.postSale = async function (e, t, n) {
        return (0, s.request)((0, s.shopPath)(e, '/sales'), 'POST', t, {
          key: n,
        });
      }),
      (_e.cancelDocument = async function (
        e,
        t,
        n,
        { withPayment: o = !1 } = {},
      ) {
        return (0, s.request)(
          (0, s.shopPath)(
            e,
            '/' +
              ('sale' === t.type ? 'sales' : 'purchases') +
              '/' +
              encodeURIComponent(t.id) +
              '/correct',
          ),
          'POST',
          o && 'sale' === t.type
            ? { lines: 'all', reversePayment: !0 }
            : { lines: 'all' },
          { key: n },
        );
      }),
      (_e.postReturn = async function (e, t, n) {
        return (0, s.request)((0, s.shopPath)(e, '/returns'), 'POST', t, {
          key: n,
        });
      }),
      (_e.postPurchase = async function (e, t, n) {
        return (0, s.request)((0, s.shopPath)(e, '/purchases'), 'POST', t, {
          key: n,
        });
      }),
      (_e.postReceipt = async function (e, t, n) {
        for (let o = 0; o < t.length; o += 20)
          await (0, s.request)(
            (0, s.shopPath)(e, '/movements'),
            'POST',
            {
              drafts: t
                .slice(o, o + 20)
                .map((e) => ({ ...e, kind: 'received' })),
              source: 'manual',
            },
            { key: o ? n + '-' + o / 20 : n },
          );
      }),
      (_e.listSales = P),
      (_e.listInvoices = async function (e, t = {}) {
        return P(
          e,
          S({
            contactId: t.contactId,
            method: t.method,
            limit: String(t.limit || 50),
            before: t.before,
            beforeId: t.beforeId,
          }),
        );
      }),
      Object.defineProperty(_e, 'issuedSales', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }),
      (_e.markSaleIssued = function (e, t) {
        (0, s.request)(
          (0, s.shopPath)(e, '/sales/' + encodeURIComponent(t) + '/issued'),
          'POST',
          {},
        ).then(
          () => {
            f.add(t);
          },
          () => {},
        );
      }),
      (_e.listTopContacts = async function (e) {
        return (await (0, s.request)((0, s.shopPath)(e, '/sales/top-contacts')))
          .contacts;
      }),
      (_e.issueWalkInSale = async function (e, t, n) {
        return (
          await (0, s.request)(
            (0, s.shopPath)(e, '/sales/walk-in'),
            'POST',
            { movementIds: t, ...(n ? { paymentMethod: n } : {}) },
            { key: q() },
          )
        ).sale;
      }),
      (_e.setSaleBuyer = async function (e, t, n) {
        return (
          await (0, s.request)(
            (0, s.shopPath)(e, '/sales/' + encodeURIComponent(t) + '/buyer'),
            'PATCH',
            { name: n },
          )
        ).sale;
      }),
      (_e.fillSalePrices = async function (e, t) {
        return (0, s.request)(
          (0, s.shopPath)(
            e,
            '/sales/' + encodeURIComponent(t) + '/fill-prices',
          ),
          'POST',
          {},
        );
      }),
      (_e.getSale = async function (e, t) {
        return (
          await (0, s.request)(
            (0, s.shopPath)(e, '/sales/' + encodeURIComponent(t)),
          )
        ).sale;
      }),
      (_e.listPurchases = async function (e, t = {}) {
        return (0, s.request)(
          (0, s.shopPath)(
            e,
            '/purchases' +
              S({
                contactId: t.contactId,
                limit: String(t.limit || 50),
                before: t.before,
                beforeId: t.beforeId,
              }),
          ),
        );
      }),
      (_e.getPurchaseView = async function (e, t) {
        return (
          await (0, s.request)(
            (0, s.shopPath)(e, '/purchases/' + encodeURIComponent(t)),
          )
        ).purchase;
      }),
      (_e.addPurchasePhoto = async function (e, t, n, o = q()) {
        return (
          await (0, s.request)(
            (0, s.shopPath)(
              e,
              '/purchases/' + encodeURIComponent(t) + '/photos',
            ),
            'POST',
            { photo: n },
            { key: o },
          )
        ).purchase;
      }),
      (_e.deletePurchasePhoto = async function (e, t, n) {
        return (
          await (0, s.request)(
            (0, s.shopPath)(
              e,
              '/purchases/' +
                encodeURIComponent(t) +
                '/photos/' +
                encodeURIComponent(n),
            ),
            'DELETE',
            void 0,
            { key: q() },
          )
        ).purchase;
      }),
      (_e.setPurchaseSupplier = async function (e, t, n) {
        return (
          await (0, s.request)(
            (0, s.shopPath)(
              e,
              '/purchases/' + encodeURIComponent(t) + '/supplier',
            ),
            'PATCH',
            { name: n },
          )
        ).purchase;
      }),
      (_e.getPurchase = async function (e, t) {
        return (
          await (0, s.request)(
            (0, s.shopPath)(e, '/purchases/' + encodeURIComponent(t)),
          )
        ).purchase;
      }),
      (_e.shareSale = async function (e, t) {
        return (0, s.request)(
          (0, s.shopPath)(e, '/sales/' + encodeURIComponent(t) + '/share'),
          'POST',
          {},
        );
      }),
      (_e.getRecipe = async function (e, t) {
        return (
          await (0, s.request)(
            (0, s.shopPath)(
              e,
              '/products/' + encodeURIComponent(t) + '/recipe',
            ),
          )
        ).recipe;
      }),
      (_e.putRecipe = async function (e, t, n, o, a, c, u) {
        return (
          await (0, s.request)(
            (0, s.shopPath)(
              e,
              '/products/' + encodeURIComponent(t) + '/recipe',
            ),
            'PUT',
            {
              version: n,
              items: o,
              ...(c ? { extraCosts: c } : {}),
              ...(void 0 !== u ? { recipeYield: u } : {}),
            },
            { key: a },
          )
        ).recipe;
      }),
      (_e.getRecipes = async function (e) {
        return (await (0, s.request)((0, s.shopPath)(e, '/recipes'))).recipes;
      }),
      (_e.getRecipeAlerts = async function (e) {
        return (await (0, s.request)((0, s.shopPath)(e, '/recipes/alerts')))
          .alerts;
      }),
      (_e.markRecipeAlertSeen = async function (e, t) {
        return (0, s.request)(
          (0, s.shopPath)(
            e,
            '/recipes/alerts/' + encodeURIComponent(t) + '/seen',
          ),
          'POST',
          {},
          { key: q() },
        );
      }),
      (_e.createProduct = async function (e, t, n, o) {
        return (0, s.request)(
          (0, s.shopPath)(e, '/products/' + encodeURIComponent(t)),
          'PUT',
          { details: n, version: 0 },
          { key: o },
        );
      }),
      (_e.adjustPrices = async function (e, t, n) {
        return (0, s.request)(
          (0, s.shopPath)(e, '/products/price-adjust'),
          'POST',
          t,
          { key: n },
        );
      }),
      (_e.readInventoryRevision = async function (e) {
        return (0, s.request)((0, s.shopPath)(e, '/revision'));
      }),
      (_e.listMovements = async function (e, t = '') {
        return (0, s.request)((0, s.shopPath)(e, '/movements' + t));
      }),
      Object.defineProperty(_e, 'idempotencyKey', {
        enumerable: !0,
        get: function () {
          return q;
        },
      }),
      (_e.listContacts = async function (e, t = {}) {
        return (0, s.request)((0, s.shopPath)(e, '/contacts' + S(t)));
      }),
      (_e.createContact = async function (e, t) {
        const n = await (0, s.request)(
          (0, s.shopPath)(e, '/contacts'),
          'POST',
          t,
          { key: q() },
        );
        return (await (0, a.rememberContact)(e, n.contact, { added: !0 }), n);
      }),
      (_e.updateContact = async function (e, t, n) {
        return (0, s.request)(
          (0, s.shopPath)(e, `/contacts/${t}`),
          'PATCH',
          n,
          { key: q() },
        );
      }),
      (_e.archiveContact = async function (e, t) {
        return (0, s.request)(
          (0, s.shopPath)(e, `/contacts/${t.id}/archive`),
          'POST',
          { version: t.version },
          { key: q() },
        );
      }),
      (_e.listSameName = async function (e, t, n) {
        return (
          await (0, s.request)(
            (0, s.shopPath)(
              e,
              '/contacts/same-name' + S({ name: t, exclude: n }),
            ),
          )
        ).contacts;
      }),
      (_e.readContact = async function (e, t, n, o = {}) {
        return (0, s.request)(
          (0, s.shopPath)(
            e,
            `/contacts/${t}` +
              S({
                ...(n || {}),
                from: o.from,
                to: o.to,
                type: o.type,
                amount: o.amount ? String(o.amount) : void 0,
              }),
          ),
        );
      }),
      (_e.readCurrentAccount = async function (e, t) {
        return (0, s.request)((0, s.shopPath)(e, `/contacts/${t}/current`));
      }),
      (_e.setBookNote = async function (e, t, n) {
        return (0, s.request)(
          (0, s.shopPath)(e, `/contacts/${t}/book-note`),
          'PUT',
          n,
        );
      }),
      (_e.readStatement = async function (e, t, n, o) {
        return (0, s.request)(
          (0, s.shopPath)(
            e,
            `/contacts/${t}/statement` + S({ from: n, to: o }),
          ),
        );
      }),
      (_e.shareStatement = async function (e, t, n, o) {
        return (0, s.request)(
          (0, s.shopPath)(e, `/contacts/${t}/statement/share`),
          'POST',
          { from: n, to: o },
        );
      }),
      (_e.readLedgerSummary = async function (e) {
        return (0, s.request)((0, s.shopPath)(e, '/ledger/summary'));
      }),
      (_e.listCheques = async function (e, t, n, o) {
        return (0, s.request)(
          (0, s.shopPath)(
            e,
            '/cheques' +
              S({ direction: t, status: o, cursor: n, limit: '100' }),
          ),
        );
      }),
      (_e.rememberCheque = b),
      (_e.transitionCheque = async function (e, t, n) {
        const a = (0, o.scoped)(e.id, 'cheques'),
          c = await (0, s.request)(
            (0, s.shopPath)(e, `/cheques/${t}/transition`),
            'POST',
            { status: n },
            { key: q() },
          );
        return (await b(e, a, c.cheque), c);
      }),
      (_e.putChequePhoto = async function (e, t, n, a, c = q()) {
        const u = await (0, s.request)(
          (0, s.shopPath)(e, `/cheques/${t}/photos/${n}`),
          'PUT',
          { photo: a },
          { key: c },
        );
        return (await b(e, (0, o.scoped)(e.id, 'cheques'), u.cheque), u.cheque);
      }),
      (_e.deleteChequePhoto = async function (e, t, n) {
        const a = await (0, s.request)(
          (0, s.shopPath)(e, `/cheques/${t}/photos/${n}`),
          'DELETE',
          void 0,
          { key: q() },
        );
        return (await b(e, (0, o.scoped)(e.id, 'cheques'), a.cheque), a.cheque);
      }),
      (_e.recordPayment = async function (e, t, n = q()) {
        const u = (0, o.scoped)(e.id, 'cheques');
        'cheque' === t.method &&
          t.cheque &&
          (await (0, c.ensureReminderNotifications)());
        const i = await (0, s.request)(
          (0, s.shopPath)(e, '/ledger/payments'),
          'POST',
          t,
          { key: n },
        );
        i.cheque && (await b(e, u, i.cheque));
        'cheque' !== t.method &&
          (await (0, a.moveBalance)(
            e,
            t.contactId,
            'in' === t.direction ? -t.amountToman : t.amountToman,
          ));
        return i;
      }),
      (_e.recordDebt = async function (e, t, n, o = q()) {
        const c = await (0, s.request)(
          (0, s.shopPath)(e, `/contacts/${encodeURIComponent(t)}/debts`),
          'POST',
          n,
          { key: o },
        );
        return (
          await (0, a.moveBalance)(e, t, Number(c.entry?.amountToman) || 0),
          c
        );
      }),
      (_e.settleContact = async function (e, t, n, o = q()) {
        const c = await (0, s.request)(
          (0, s.shopPath)(e, `/contacts/${encodeURIComponent(t)}/settle`),
          'POST',
          n,
          { key: o },
        );
        return (
          await (0, a.moveBalance)(e, t, Number(c.entry?.amountToman) || 0),
          c
        );
      }),
      (_e.reverseDebt = async function (e, t, n, o = q()) {
        return (0, s.request)(
          (0, s.shopPath)(
            e,
            `/contacts/${encodeURIComponent(t)}/debts/${encodeURIComponent(n)}/reverse`,
          ),
          'POST',
          {},
          { key: o },
        );
      }),
      (_e.reversePayment = async function (e, t, n = q()) {
        return (0, s.request)(
          (0, s.shopPath)(
            e,
            `/ledger/payments/${encodeURIComponent(t)}/reverse`,
          ),
          'POST',
          {},
          { key: n },
        );
      }),
      (_e.readSummary = async function (e, t) {
        return (0, s.request)((0, s.shopPath)(e, `/summary?days=${t}`));
      }),
      (_e.readInsight = function (e) {
        const t = (0, u.localeLang)();
        return (0, s.request)(
          (0, s.shopPath)(e, '/insight' + ('fa' === t ? '' : '?lang=' + t)),
          'GET',
          void 0,
          { signal: AbortSignal.timeout(1e4) },
        );
      }),
      (_e.readActivity = async function (
        e,
        { limit: t = 50, before: n, group: o = 'all' } = {},
      ) {
        return (0, s.request)(
          (0, s.shopPath)(
            e,
            '/activity?limit=' +
              t +
              ('all' !== o ? '&group=' + o : '') +
              (n ? '&before=' + encodeURIComponent(n) : ''),
          ),
        );
      }),
      (_e.saveActivityNote = async function (e, t, n) {
        return (0, s.request)(
          (0, s.shopPath)(e, '/activity/note'),
          null === n ? 'DELETE' : 'PUT',
          null === n ? { id: t } : { id: t, text: n },
        );
      }),
      (_e.putProductContent = async function (e, t, n, o, a) {
        return (0, s.request)(
          (0, s.shopPath)(e, '/products/' + encodeURIComponent(t) + '/content'),
          'PATCH',
          { version: n, contentSize: o, contentUnit: a },
          { key: q() },
        );
      }));
    var e,
      t = r(_d[0]),
      n = (e = t) && e.__esModule ? e : { default: e },
      s = r(_d[1]),
      o = r(_d[2]),
      a = r(_d[3]),
      c = r(_d[4]),
      u = r(_d[5]);
    const i = (e, t = !1) => ['recent'],
      h = [
        'today,week,recent,flow,fresh',
        'today,week,recent',
        'today,week,recent,ledger',
      ],
      p = (e) => e?.replace(/[^a-zA-Z0-9-]/g, '').slice(0, 80) || 'local',
      d = (e, t) =>
        `anbari.notebook.tutorial.${p(e?.id || e?.userId)}.${p(t?.id)}`,
      y = (e, t) =>
        `anbari.notebook.business.${p(e?.id || e?.userId)}.${p(t.id)}`,
      l = (e, t) =>
        `anbari.notebook.starter.${p(e?.id || e?.userId)}.${p(t.id)}`;
    async function P(e, t = '') {
      return (0, s.request)((0, s.shopPath)(e, '/sales' + t));
    }
    const f = new Set();
    const q = () =>
      `${Date.now().toString(36)}_${Math.random().toString(36).slice(2)}_${Math.random().toString(36).slice(2)}`.padEnd(
        16,
        '0',
      );
    const S = (e) => {
      const t = Object.entries(e)
        .filter(([, e]) => void 0 !== e && '' !== e)
        .map(([e, t]) => encodeURIComponent(e) + '=' + encodeURIComponent(t))
        .join('&');
      return t ? '?' + t : '';
    };
    async function b(e, t, n) {
      if (t !== (0, o.scoped)(e.id, 'cheques')) return;
      const s = t ? o.swrStore.peek(t) : void 0;
      t &&
        s &&
        (await o.swrStore.set(t, {
          ...s,
          list: [...s.list.filter((e) => e.id !== n.id), n],
        }));
    }
  },
  519,
  [258, 415, 489, 520, 523, 311],
);
