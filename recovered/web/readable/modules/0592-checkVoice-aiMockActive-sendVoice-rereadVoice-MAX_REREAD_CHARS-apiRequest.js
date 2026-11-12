// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 592; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.checkVoice = async function (t) {
        if (n.activeShop) {
          const o = await (0, n.request)(
            (0, n.shopPath)(n.activeShop, '/ai/status'),
            'GET',
            void 0,
            { signal: t },
          );
          if (o.paused) throw Error('ai_paused');
          if (!o.ready) throw Error('missing_key');
          return;
        }
        const o = await fetch('/api/health', { headers: h(), signal: t });
        let c;
        try {
          c = await o.json();
        } catch {
          throw new Error('backend_missing');
        }
        if (!o.ok) throw new Error(c.error || 'backend_missing');
        if (!c.ready) throw new Error('missing_key');
      }),
      (e.aiMockActive = async function (t) {
        if (!n.activeShop) return !1;
        const o = await (0, n.request)(
          (0, n.shopPath)(n.activeShop, '/ai/status'),
          'GET',
          void 0,
          { signal: t },
        );
        return !0 === o?.mock;
      }),
      (e.sendVoice = async function (o, c, s, p) {
        if (n.activeShop && o.transcript)
          return l(
            await (0, n.job)(
              'voice',
              {
                transcript: o.transcript,
                duration: o.duration,
                clientClock: (0, t.clientClock)(),
                products: c.slice(0, 200),
                priceNames: !0,
              },
              s,
              p,
              { wait: !0 },
            ),
          );
        if (n.activeShop)
          throw new Error(
            o.serverMissed
              ? 'voice_server_unreachable'
              : (0, u.deviceVoiceReady)() || o.serverAnswered
                ? 'nothing_heard'
                : 'voice_server_unreachable',
          );
        const w = await fetch('/api/voice', {
          method: 'POST',
          headers: h(),
          signal: s,
          body: JSON.stringify({
            audio: o.audio,
            mimeType: o.mimeType,
            duration: o.duration,
            clientClock: (0, t.clientClock)(),
            products: c.slice(0, 200),
          }),
        });
        let f;
        try {
          f = await w.json();
        } catch {
          throw new Error('backend_missing');
        }
        if (!w.ok) throw new Error(f.error || 'provider_error');
        return l(f);
      }),
      (e.rereadVoice = async function (
        c,
        s,
        u,
        { reread: h, duration: w } = {},
      ) {
        if (!n.activeShop) throw Error('unauthorized');
        const f = Math.min(
          o.MAX_VOICE_SECONDS,
          Math.max(1, Math.round(w || 5)),
        );
        return l(
          await (0, n.job)(
            'voice',
            {
              transcript: c.trim().slice(0, p),
              duration: f,
              clientClock: (0, t.clientClock)(),
              products: s.slice(0, 200),
              priceNames: !0,
              ...(h ? { reread: h } : {}),
            },
            u,
            void 0,
            { wait: !0 },
          ),
        );
      }),
      Object.defineProperty(e, 'MAX_REREAD_CHARS', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }),
      (e.apiRequest = async function (o, c, s) {
        if (n.activeShop) {
          if (!['/api/image', '/api/batch'].includes(o))
            throw Error('unsupported');
          return (0, n.job)(
            '/api/image' === o ? 'image' : 'batch',
            { ...c, clientClock: (0, t.clientClock)() },
            s,
          );
        }
        const u = await fetch(o, {
          method: 'POST',
          headers: h(),
          signal: s,
          body: JSON.stringify(
            ['/api/image', '/api/batch'].includes(o) &&
              c &&
              'object' == typeof c
              ? { ...c, clientClock: (0, t.clientClock)() }
              : c,
          ),
        });
        let l;
        try {
          l = await u.json();
        } catch {
          throw new Error('backend_missing');
        }
        if (!u.ok) throw new Error(l.error || 'provider_error');
        return l;
      }));
    var t = r(d[0]);
    r(d[1]);
    var o = r(d[2]),
      n = r(d[3]),
      c = r(d[4]),
      s = r(d[5]),
      u = r(d[6]);
    function h() {
      return { 'Content-Type': 'application/json', 'x-anbar-request': '1' };
    }
    const l = (n) =>
      (0, s.applyDebtRule)(
        (0, c.applyTopicRule)(
          (0, o.validateVoiceResult)(n),
          (0, t.clientClock)(),
        ),
      );
    const p = 4e3;
  },
  592,
  [440, 94, 465, 415, 593, 594, 549],
);
