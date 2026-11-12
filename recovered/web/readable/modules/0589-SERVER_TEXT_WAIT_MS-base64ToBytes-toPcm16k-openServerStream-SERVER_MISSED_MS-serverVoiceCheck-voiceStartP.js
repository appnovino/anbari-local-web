// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 589; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a, m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'SERVER_TEXT_WAIT_MS', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      (e.base64ToBytes = function (t) {
        const n = t.replace(/[^A-Za-z0-9+/]/g, ''),
          o = new Uint8Array(Math.floor((3 * n.length) / 4));
        let c = 0;
        for (let t = 0; t + 1 < n.length; t += 4) {
          const i = a[n.charCodeAt(t)],
            s = a[n.charCodeAt(t + 1)],
            l = a[n.charCodeAt(t + 2)] || 0,
            u = a[n.charCodeAt(t + 3)] || 0;
          ((o[c++] = (i << 2) | (s >> 4)),
            t + 2 < n.length && (o[c++] = ((15 & s) << 4) | (l >> 2)),
            t + 3 < n.length && (o[c++] = ((3 & l) << 6) | u));
        }
        return o.subarray(0, c);
      }),
      (e.toPcm16k = c),
      (e.openServerStream = function (o, a) {
        if (!a.open && 'undefined' == typeof WebSocket) return null;
        const c = a.ask,
          i = a.open || ((t) => new WebSocket(t));
        let s = null,
          l = !1,
          u = !1,
          f = 0,
          d = !1;
        const h = [];
        let y = () => {};
        const p = new Promise((t) => {
            y = t;
          }),
          w = (t) => {
            (y(t), (y = () => {}));
          };
        (async () => {
          try {
            const t = await c(o);
            if (
              l ||
              !t?.enabled ||
              'string' != typeof t.url ||
              'string' != typeof t.token
            )
              return ((l = !0), (h.length = 0), void w(''));
            const n = i(
              t.url +
                '?token=' +
                encodeURIComponent(t.token) +
                (a.onPartial ? '&live=1' : ''),
            );
            ((s = n),
              (n.binaryType = 'arraybuffer'),
              (n.onopen = () => {
                if (l) n.close();
                else
                  try {
                    for (const t of h) n.send(t);
                    ((h.length = 0), (f = 0), u && n.send('EOF'));
                  } catch {
                    b();
                  }
              }),
              (n.onmessage = (t) => {
                try {
                  const n = JSON.parse(String(t.data));
                  if ('string' == typeof n?.partial && void 0 === n.text)
                    return void (l || a.onPartial?.(n.partial.trim()));
                  ((d = 'string' == typeof n?.text),
                    w(
                      'string' == typeof n?.text && !0 !== n.truncated
                        ? n.text.trim()
                        : '',
                    ));
                } catch {
                  w('');
                }
                try {
                  n.close();
                } catch {}
              }),
              (n.onerror = () => {
                ((l = !0), w(''));
              }),
              (n.onclose = () => {
                ((l = !0), w(''));
              }));
          } catch {
            ((l = !0), w(''));
          }
        })();
        const b = () => {
          ((l = !0), (h.length = 0));
          try {
            s?.close();
          } catch {}
          w('');
        };
        return {
          wanted: () => !l && !u,
          answered: () => d,
          push(t) {
            if (!l && !u && t.byteLength)
              if (1 !== s?.readyState)
                f + t.byteLength <= n && (h.push(t), (f += t.byteLength));
              else
                try {
                  s.send(t);
                } catch {}
          },
          async finish() {
            if (l) return '';
            if (((u = !0), 1 === s?.readyState))
              try {
                s.send('EOF');
              } catch {
                w('');
              }
            let n;
            const o = new Promise((o) => {
                n = setTimeout(() => o(''), a.wait ?? t);
              }),
              c = await Promise.race([p, o]);
            return (clearTimeout(n), b(), c);
          },
          cancel: b,
        };
      }),
      Object.defineProperty(e, 'SERVER_MISSED_MS', {
        enumerable: !0,
        get: function () {
          return i;
        },
      }),
      (e.serverVoiceCheck = function ({
        wait: t = 4e3,
        now: n = () => Date.now(),
      } = {}) {
        const o = new Map();
        return Object.assign(
          async (a, c) => {
            const i = o.get(a);
            if (i && n() - i.at < i.keep) return i.value;
            let s;
            const l = new Promise((n) => {
              s = setTimeout(() => n(null), t);
            });
            let u = !1;
            try {
              const t = await Promise.race([c(a), l]);
              u =
                !0 === t?.enabled &&
                'string' == typeof t.url &&
                'string' == typeof t.token;
            } catch {
              u = !1;
            } finally {
              clearTimeout(s);
            }
            return (o.set(a, { at: n(), value: u, keep: u ? 6e4 : 15e3 }), u);
          },
          {
            missed(t) {
              o.set(t, { at: n(), value: !1, keep: i });
            },
          },
        );
      }),
      (e.voiceStartPlan = async function (t) {
        if (t.serverOnly) return (await t.serverOn()) ? 'record' : 'server_off';
        if (t.modelReady()) return 'record';
        if (await t.serverOn()) return (t.warm().catch(() => !1), 'record');
        return 'wait';
      }),
      (e.feedFromMedia = function (t, n) {
        try {
          const o = new (window.AudioContext || window.webkitAudioContext)();
          o.resume().catch(() => {});
          const a = o.createMediaStreamSource(t),
            i = o.createScriptProcessor(4096, 1, 1);
          return (
            (i.onaudioprocess = (t) => {
              n.wanted() &&
                n.push(c(t.inputBuffer.getChannelData(0), o.sampleRate));
            }),
            a.connect(i),
            i.connect(o.destination),
            () => {
              try {
                (a.disconnect(), i.disconnect());
              } catch {}
              ((i.onaudioprocess = null), o.close().catch(() => {}));
            }
          );
        } catch {
          return () => {};
        }
      }));
    const t = 5e3,
      n = 8e6,
      o = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
      a = new Uint8Array(128);
    for (let t = 0; t < 64; t++) a[o.charCodeAt(t)] = t;
    function c(t, n) {
      const o = n / 16e3,
        a = Math.floor(t.length / o),
        c = new DataView(new ArrayBuffer(2 * a));
      for (let n = 0; n < a; n++) {
        const a = Math.floor(n * o),
          i = Math.max(a + 1, Math.floor((n + 1) * o));
        let s = 0;
        for (let n = a; n < i; n++) s += t[n];
        const l = Math.max(-1, Math.min(1, s / (i - a)));
        c.setInt16(2 * n, l < 0 ? 32768 * l : 32767 * l, !0);
      }
      return new Uint8Array(c.buffer);
    }
    const i = 3e5;
  },
  589,
  [],
);
