// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 707; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'draftStorageKey', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      (_e.loadDrafts = async function (t) {
        const e = await u(t),
          n = {};
        for (const t of [
          'manual',
          'voice',
          'voiceAt',
          'voiceJob',
          'voicePendingSale',
          'voicePendingSales',
          'image',
          'batch',
        ])
          void 0 === e[t] || s(e[t]) || (n[t] = e[t]);
        return n;
      }),
      (_e.patchDrafts = function (t, e) {
        const n = (c.get(t) || Promise.resolve(!0))
          .catch(() => !1)
          .then(async () => l(t, { ...(await u(t)), ...e }));
        return (c.set(t, n), n);
      }),
      (_e.clearDraftPart = function (t, e) {
        const n = (c.get(t) || Promise.resolve(!0))
          .catch(() => !1)
          .then(async () => {
            const n = await u(t);
            return (
              !(
                'voice' !== e ||
                !(
                  (n.voicePendingSale && !s(n.voicePendingSale)) ||
                  (n.voicePendingSales &&
                    !s(n.voicePendingSales) &&
                    Object.keys(n.voicePendingSales).length)
                )
              ) ||
              l(t, {
                ...n,
                [e]: { removed: !0, committedAt: new Date().toISOString() },
              })
            );
          });
        return (c.set(t, n), n);
      }),
      (_e.saveVoiceAudio = async function (t, e) {
        try {
          return (await n.default.setItem(y(t), JSON.stringify(e)), !0);
        } catch {
          return !1;
        }
      }),
      (_e.loadVoiceAudio = async function (t) {
        try {
          const e = await n.default.getItem(y(t)),
            c = e ? JSON.parse(e) : null;
          return c &&
            'string' == typeof c.audio &&
            'string' == typeof c.mimeType
            ? c
            : null;
        } catch {
          return null;
        }
      }),
      (_e.clearVoiceAudio = async function (t) {
        try {
          await n.default.removeItem(y(t));
        } catch {}
      }));
    var t,
      e = r(d[0]),
      n = (t = e) && t.__esModule ? t : { default: t };
    const c = new Map(),
      o = (t, e) => `drafts:${t || 'local'}:${e || 'local'}`;
    function s(t) {
      return (
        !!t &&
        'object' == typeof t &&
        !0 === t.removed &&
        'string' == typeof t.committedAt
      );
    }
    async function u(t) {
      try {
        const e = await n.default.getItem(t);
        if (!e) return {};
        const c = JSON.parse(e);
        return c && 'object' == typeof c ? c : {};
      } catch {
        return {};
      }
    }
    function f(t) {
      return Array.isArray(t)
        ? t.map(f)
        : t && 'object' == typeof t
          ? Object.fromEntries(
              Object.entries(t)
                .filter(([t]) => 'photo' !== t)
                .map(([t, e]) => [t, f(e)]),
            )
          : t;
    }
    async function l(t, e) {
      try {
        return (await n.default.setItem(t, JSON.stringify(e)), !0);
      } catch {
        try {
          return (await n.default.setItem(t, JSON.stringify(f(e))), !0);
        } catch {
          return !1;
        }
      }
    }
    const y = (t) => 'voice-audio:' + t;
  },
  707,
  [258],
);
