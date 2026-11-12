// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 598; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'ErrorBoundary', {
        enumerable: !0,
        get: function () {
          return S;
        },
      }));
    var t = r(d[0]);
    r(d[1]);
    var o = r(d[2]),
      n = r(d[3]),
      s = r(d[4]),
      c = r(d[5]),
      l = r(d[6]),
      h = r(d[7]),
      u = r(d[8]),
      w = r(d[9]),
      p = r(d[10]),
      f = r(d[11]);
    const y = (t) => (0, n.isTransportError)(t),
      v = (t, o, s) =>
        y(t) ? (0, n.describeError)(t) : (0, l.clientCrash)(t, o, s);
    class S extends t.Component {
      state = { error: null, info: null };
      static getDerivedStateFromError(t) {
        return { error: t, info: v(t) };
      }
      componentDidCatch(t, o) {
        const s =
          (0, n.reportError)(t, {
            category: 'client',
            where: 'render',
            componentStack: o.componentStack,
          }) || void 0;
        let c;
        try {
          c = (0, n.describeError)(t).technical;
        } catch {}
        this.setState({ info: { ...v(t, o.componentStack, c), requestId: s } });
      }
      reset = () => {
        y(this.state.error)
          ? window.location.reload()
          : (this.setState({ error: null, info: null }),
            this.props.onReset?.());
      };
      home = () => {
        ('undefined' != typeof window &&
          window.history.replaceState(null, '', window.location.pathname),
          this.reset());
      };
      signOut = async () => {
        try {
          await Promise.race([
            (0, u.request)('/v1/auth/logout', 'POST', {}),
            new Promise((t) => setTimeout(t, 4e3)),
          ]);
        } catch {}
        try {
          (await (0, u.storeToken)(null), await (0, w.forgetOffline)());
        } catch {}
        if ('undefined' != typeof window)
          return (
            window.history.replaceState(
              null,
              '',
              window.location.pathname + '#login',
            ),
            void window.location.reload()
          );
        (await (0, p.restartApp)(), this.reset());
      };
      render() {
        return this.state.info
          ? (0, f.jsxs)(o.SafeAreaProvider, {
              children: [
                (0, f.jsx)(s.ErrorView, {
                  variant: 'screen',
                  testID: 'crash-view',
                  info: this.state.info,
                  reload: this.reset,
                  home: this.home,
                  signOut: this.signOut,
                  labels: {
                    home: (0, h.L)(
                      '\u0628\u0627\u0632\u06af\u0634\u062a \u0628\u0647 \u0635\u0641\u062d\u0647\u0654 \u0627\u0635\u0644\u06cc',
                    ),
                  },
                  ...(y(this.state.error) ? { retry: this.reset } : {}),
                }),
                (0, f.jsx)(c.ToastHost, {}),
              ],
            })
          : this.props.children;
      }
    }
  },
  598,
  [2, 94, 342, 429, 599, 525, 600, 1, 415, 427, 543, 338],
);
