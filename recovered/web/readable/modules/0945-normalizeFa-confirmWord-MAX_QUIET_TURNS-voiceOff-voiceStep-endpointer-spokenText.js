// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 945; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, e, d) {
    'use strict';
    function t(t) {
      return String(t || '')
        .replace(/[\u064a\u0649]/g, '\u06cc')
        .replace(/\u0643/g, '\u06a9')
        .replace(/[\u06c0\u0629]/g, '\u0647')
        .replace(/[\u0623\u0625]/g, '\u0627')
        .replace(/[\u064b-\u0652\u0670]/g, '')
        .replace(/[\u200c\u200f\u200e]/g, ' ')
        .replace(/[.,!?\u061f\u060c\u061b:;\xab\xbb"'()\-\u2026]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.normalizeFa = t),
      (e.confirmWord = function (p) {
        let u = t(p);
        for (let t = 0; t < 3 && i.test(u); t++) u = u.replace(i, '').trim();
        if (!u || u.split(' ').length > 4) return null;
        const c = (n) => n.map(t);
        return c(s).includes(u) ? 'no' : c(n).includes(u) ? 'yes' : null;
      }),
      Object.defineProperty(e, 'MAX_QUIET_TURNS', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }),
      Object.defineProperty(e, 'voiceOff', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      (e.voiceStep = function (t, n) {
        const s = { state: t, actions: [] };
        if ('open' === n.type)
          return 'off' !== t.phase
            ? s
            : c({
                ...t,
                muted: !1,
                quiet: 0,
                speaker: t.speaker && n.canSpeak,
              });
        if ('off' === t.phase) return s;
        switch (n.type) {
          case 'close':
            return {
              state: { ...t, phase: 'off', quiet: 0 },
              actions: [{ kind: 'stopListening' }, { kind: 'stopSpeaking' }],
            };
          case 'heard': {
            if ('listening' !== t.phase) return s;
            const i = String(n.text || '').trim();
            if (!i) {
              const n = t.quiet + 1;
              return n >= p
                ? {
                    state: { ...t, phase: 'muted', muted: !0, quiet: 0 },
                    actions: [],
                  }
                : c({ ...t, quiet: n });
            }
            return {
              state: { ...t, phase: 'thinking', quiet: 0 },
              actions: [{ kind: 'send', text: i }],
            };
          }
          case 'typed':
            return {
              state: { ...t, phase: 'thinking', quiet: 0 },
              actions:
                'listening' === t.phase
                  ? [{ kind: 'stopListening' }]
                  : 'speaking' === t.phase
                    ? [{ kind: 'stopSpeaking' }]
                    : [],
            };
          case 'answer':
            return 'thinking' !== t.phase
              ? s
              : t.speaker && n.canSpeak && n.text.trim()
                ? {
                    state: { ...t, phase: 'speaking' },
                    actions: [{ kind: 'speak', text: n.text.trim() }],
                  }
                : c(t);
          case 'spoken':
            return 'speaking' === t.phase ? c(t) : s;
          case 'tap':
            return 'speaking' === t.phase
              ? c({ ...t, muted: !1, quiet: 0 }, [{ kind: 'stopSpeaking' }])
              : 'muted' === t.phase
                ? c({ ...t, muted: !1, quiet: 0 })
                : s;
          case 'mute': {
            const n = !t.muted;
            return n
              ? {
                  state: {
                    ...t,
                    muted: n,
                    phase: 'listening' === t.phase ? 'muted' : t.phase,
                  },
                  actions:
                    'listening' === t.phase ? [{ kind: 'stopListening' }] : [],
                }
              : 'muted' === t.phase
                ? c({ ...t, muted: n, quiet: 0 })
                : { state: { ...t, muted: n }, actions: [] };
          }
          case 'speaker': {
            const n = !t.speaker;
            return n || 'speaking' !== t.phase
              ? {
                  state: { ...t, speaker: n },
                  actions: n ? [] : [{ kind: 'stopSpeaking' }],
                }
              : c({ ...t, speaker: n }, [{ kind: 'stopSpeaking' }]);
          }
          case 'failed':
            return {
              state: { ...t, phase: 'muted', muted: !0, quiet: 0 },
              actions: [],
            };
        }
        return s;
      }),
      (e.endpointer = function (
        { quietMs: t = 1300, noSpeechMs: n = 12e3, maxMs: s = 3e4 },
        i,
      ) {
        let p = '',
          u = i;
        return {
          text(t, n) {
            const s = String(t || '')
              .replace(/\s+/g, ' ')
              .trim();
            s !== p && ((p = s), (u = n));
          },
          done: (c) => c - i >= s || (p ? c - u >= t : c - i >= n),
          heard: () => p,
        };
      }),
      (e.spokenText = function (
        t,
        n,
        s = '\u062b\u0628\u062a \u06a9\u0646\u0645\u061f',
      ) {
        return [t, n?.summaryFa ? n.summaryFa + '. ' + s : '']
          .map((t) => String(t || '').trim())
          .filter(Boolean)
          .join('. ')
          .replace(/\.\s*\./g, '.')
          .slice(0, 600);
      }));
    const n = [
        '\u0622\u0631\u0647',
        '\u0622\u0631\u06cc',
        '\u0627\u0631\u0647',
        '\u0628\u0644\u0647',
        '\u0628\u0644\u06cc',
        '\u062b\u0628\u062a \u06a9\u0646',
        '\u062b\u0628\u062a\u0634 \u06a9\u0646',
        '\u062b\u0628\u062a \u06a9\u0646\u06cc\u062f',
        '\u0628\u0627\u0634\u0647',
        '\u0627\u0648\u06a9\u06cc',
        '\u0627\u0648\u06a9\u06cc \u062b\u0628\u062a \u06a9\u0646',
        '\u062d\u062a\u0645\u0627',
        '\u062f\u0631\u0633\u062a\u0647',
        '\u062a\u0627\u06cc\u06cc\u062f',
        '\u062a\u0627\u06cc\u06cc\u062f \u0645\u06cc\u06a9\u0646\u0645',
        '\u062a\u0623\u06cc\u06cc\u062f',
        '\u0628\u0632\u0646',
        '\u0622\u0631\u0647 \u062b\u0628\u062a \u06a9\u0646',
        '\u0628\u0644\u0647 \u062b\u0628\u062a \u06a9\u0646',
        '\u0622\u0631\u0647 \u062f\u0631\u0633\u062a\u0647',
        '\u0628\u0644\u0647 \u062f\u0631\u0633\u062a\u0647',
      ],
      s = [
        '\u0646\u0647',
        '\u0646\u062e\u06cc\u0631',
        '\u062e\u06cc\u0631',
        '\u0646\u0647 \u0646\u0647',
        '\u0646\u06a9\u0646',
        '\u062b\u0628\u062a \u0646\u06a9\u0646',
        '\u062b\u0628\u062a\u0634 \u0646\u06a9\u0646',
        '\u0644\u063a\u0648',
        '\u0644\u063a\u0648 \u06a9\u0646',
        '\u06a9\u0646\u0633\u0644',
        '\u0628\u06cc\u062e\u06cc\u0627\u0644',
        '\u0628\u06cc \u062e\u06cc\u0627\u0644',
        '\u0648\u0644\u0634 \u06a9\u0646',
        '\u0646\u0645\u06cc\u062e\u0648\u0627\u0645',
        '\u0646\u0647 \u062b\u0628\u062a \u0646\u06a9\u0646',
        '\u0646\u0647 \u0645\u0645\u0646\u0648\u0646',
      ],
      i =
        /^(?:\u0644\u0637\u0641\u0627|\u0644\u0637\u0641\u0627\u064b|\u062e\u0628|\u062e\u0648\u0628|\u062f\u06cc\u06af\u0647|\u067e\u0633|\u0627\u0631\u0647 \u062f\u06cc\u06af\u0647|\u0622\u0631\u0647 \u062f\u06cc\u06af\u0647)\s+|\s+(?:\u0644\u0637\u0641\u0627|\u0644\u0637\u0641\u0627\u064b|\u062f\u06cc\u06af\u0647|\u0645\u0645\u0646\u0648\u0646|\u0645\u0631\u0633\u06cc)$/;
    const p = 3,
      u = { phase: 'off', muted: !1, speaker: !0, quiet: 0 };
    function c(t, n = []) {
      return t.muted
        ? { state: { ...t, phase: 'muted' }, actions: n }
        : {
            state: { ...t, phase: 'listening' },
            actions: [...n, { kind: 'listen' }],
          };
    }
  },
  945,
  [],
);
