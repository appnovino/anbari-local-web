// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 944; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, _m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.pickVoiceMode = p),
      (_e.VoiceModeSwitch = y),
      (_e.LiveVoiceHost = function ({
        shop: e,
        voice: o,
        onClose: n,
        onText: s,
      }) {
        const c = o.modes?.length ? o.modes : null,
          u = c ? p(o, h) : 'live',
          [b, x] = (0, t.useState)(h ? u : c ? void 0 : 'live'),
          [C, _] = (0, t.useState)(!c || !!h);
        if (
          ((0, t.useEffect)(() => {
            if (!c || h) return;
            let e = !0;
            return (
              (async () => {
                let t = null;
                try {
                  t = await l.default.getItem(v);
                } catch {}
                if (e) {
                  const e = p(o, t);
                  (e && (h = e), x(e), _(!0));
                }
              })(),
              () => {
                e = !1;
              }
            );
          }, []),
          !C || !b)
        )
          return null;
        return (0, f.jsx)(
          m.LiveVoice,
          {
            shop: e,
            initial: o,
            onClose: n,
            onText: s,
            mode: c ? b : void 0,
            top: c
              ? (0, f.jsx)(y, {
                  mode: b,
                  modes: c,
                  onChange: (e) => {
                    ((h = e), x(e), l.default.setItem(v, e).catch(() => {}));
                  },
                })
              : null,
          },
          'voice-' + e.id + '-' + b,
        );
      }));
    var t = r(d[0]),
      o = e(r(d[1])),
      n = e(r(d[2])),
      l = e(r(d[3])),
      s = r(d[4]),
      c = r(d[5]),
      u = r(d[6]),
      m = r(d[7]),
      f = r(d[8]);
    const v = 'anbari.liveVoice.mode';
    let h = null;
    function p(e, t) {
      if (e.modes?.length)
        return e.modes.includes(t)
          ? t
          : e.mode && e.modes.includes(e.mode)
            ? e.mode
            : e.modes[0];
    }
    function y({ mode: e, modes: t, onChange: l }) {
      const { colors: m } = (0, c.useTheme)(),
        v = (e) =>
          'live' === e
            ? 'Gemini Live'
            : (0, u.L)('\u0627\u0642\u062a\u0635\u0627\u062f\u06cc');
      return (0, f.jsx)(n.default, {
        testID: 'live-voice-mode',
        accessibilityRole: 'tablist',
        style: {
          flexDirection: 'row',
          alignSelf: 'center',
          padding: 3,
          gap: 3,
          borderRadius: 16,
          backgroundColor: m.soft,
        },
        children: t.map((t) =>
          (0, f.jsx)(
            o.default,
            {
              testID: 'live-voice-mode-' + t,
              accessibilityRole: 'tab',
              accessibilityState: { selected: t === e },
              onPress: () => {
                t !== e && l(t);
              },
              style: ({ pressed: o }) => ({
                paddingHorizontal: 12,
                height: 28,
                borderRadius: 13,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: t === e ? m.surface : 'transparent',
                opacity: o ? 0.8 : 1,
              }),
              children: (0, f.jsx)(s.Copy, {
                style: {
                  fontSize: 12,
                  lineHeight: 20,
                  color: t === e ? m.text : m.muted,
                  fontFamily:
                    t === e ? 'Vazirmatn_700Bold' : 'Vazirmatn_400Regular',
                },
                children: v(t),
              }),
            },
            t,
          ),
        ),
      });
    }
  },
  944,
  [2, 232, 99, 258, 407, 382, 311, 939, 338],
);
