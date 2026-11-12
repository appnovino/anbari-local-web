// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1277; original bundle: __common-9cdd8d1b62d3893a7e9d868fab7ed9b5.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'clear', {
        enumerable: !0,
        get: function () {
          return j;
        },
      }),
      Object.defineProperty(e, 'set', {
        enumerable: !0,
        get: function () {
          return z;
        },
      }));
    let t = !1;
    const n = () => {
        t ||
          'ExperimentalBadge' in window ||
          'setExperimentalAppBadge' in navigator ||
          (console.warn(
            'Badging API must be enabled. Please check here how you can enable it: https://developers.google.com/web/updates/2018/12/badging-api#use',
          ),
          (t = !0));
      },
      i = { mediaQuery: null, value: 0 };
    function o() {
      return 'ExperimentalBadge' in window && !!window.ExperimentalBadge;
    }
    function l() {
      return (
        'setExperimentalAppBadge' in navigator &&
        !!navigator.setExperimentalAppBadge &&
        'clearExperimentalAppBadge' in navigator &&
        !!navigator.clearExperimentalAppBadge
      );
    }
    function c() {
      return (
        i.mediaQuery ||
          ((i.mediaQuery = window.matchMedia('(display-mode: standalone)')),
          (i.mediaQuery.onchange = (t) => {
            s(i.value);
          })),
        i.mediaQuery.matches && (o() || l())
      );
    }
    function s(t) {
      return (
        (i.value = t),
        c()
          ? o()
            ? (window.ExperimentalBadge.set(t), !0)
            : !!l() && (navigator.setExperimentalAppBadge(t), !0)
          : (n(), !1)
      );
    }
    function u(t, n) {
      for (const i of Object.keys(n))
        n[i] instanceof Object && Object.assign(n[i], u(t[i], n[i]));
      return (Object.assign(t || {}, n), t);
    }
    function f(t) {
      return void 0 !== t && Number.isInteger(t) && t >= 0;
    }
    const v = 0,
      p = {
        backgroundColor: '#424242',
        color: '#ffffff',
        indicator: '!',
        radius: 3,
        size: 7,
        horizontalMargin: 0,
        verticalMargin: 0,
        horizontalPadding: 1,
        verticalPadding: 1,
      },
      h = navigator.userAgent.indexOf('Firefox') > -1,
      b = () => {
        const t = document.head.getElementsByTagName('link'),
          n = [];
        for (let i = 0; i < t.length; i++) {
          const o = t[i],
            l = o.getAttribute('href'),
            c = o.getAttribute('rel');
          l && c && -1 !== c.split(' ').indexOf('icon') && n.push(o);
        }
        return n;
      },
      w = () => {
        const t = b();
        let n = null,
          i = 0;
        for (let o = 0; o < t.length; o++) {
          const l = t[o],
            c = l.getAttribute('href'),
            s = l.getAttribute('sizes');
          if (null == c ? void 0 : c.endsWith('.svg')) return l;
          if (!s) {
            n || ((n = l), (i = 0));
            continue;
          }
          if ('any' === s) return l;
          const u = parseInt(s.split('x')[0], 10);
          Number.isNaN(u)
            ? n || ((n = l), (i = 0))
            : u > i && ((n = l), (i = u));
        }
        return n;
      },
      x = {
        favicons: null,
        bestFavicon: null,
        bestFaviconImage: null,
        value: v,
        options: p,
      },
      y = window.matchMedia('screen and (min-resolution: 2dppx)'),
      E = () => Math.ceil(window.devicePixelRatio) || 1,
      B = () => {
        I(x.value, x.options);
      },
      A = () => 16 * E(),
      P = (t) => {
        if (!t) return;
        for (const t of b()) t.parentNode && t.parentNode.removeChild(t);
        const n = document.createElement('link');
        ((n.id = 'badgin'),
          (n.type = 'image/x-icon'),
          (n.rel = 'icon favicon'),
          (n.href = t),
          document.getElementsByTagName('head')[0].appendChild(n));
      },
      F = (t, n, i) => {
        const o = A(),
          l = document.createElement('canvas');
        ((l.width = o), (l.height = o));
        const c = l.getContext('2d');
        c &&
          ((t.width = o),
          (t.height = o),
          c.drawImage(t, 0, 0, t.width, t.height),
          C(c, n, i),
          P(l.toDataURL()));
      },
      C = (t, n, i) => {
        const o = E(),
          l = A();
        let c = '';
        if (
          ((c = f(n)
            ? 0 === n
              ? ''
              : n < 100
                ? String(n)
                : '99+'
            : i.indicator),
          !c)
        )
          return;
        const s = i.size - 2,
          u = i.size * o + 'px Arial';
        t.font = u;
        const { width: v } = t.measureText(c);
        t.restore();
        const p = v + 2 * i.horizontalPadding,
          b = l - (s * o + 2 * i.verticalPadding) - i.verticalMargin,
          w = l - p - i.horizontalMargin,
          x = 16 * o - i.verticalMargin,
          y = 16 * o - i.horizontalMargin,
          B = i.radius;
        ((t.globalAlpha = 1),
          (t.fillStyle = i.backgroundColor),
          (t.strokeStyle = i.backgroundColor),
          (t.lineWidth = 0),
          t.beginPath(),
          t.moveTo(w + B, b),
          t.quadraticCurveTo(w, b, w, b + B),
          t.lineTo(w, x - B),
          t.quadraticCurveTo(w, x, w + B, x),
          t.lineTo(y - B, x),
          t.quadraticCurveTo(y, x, y, x - B),
          t.lineTo(y, b + B),
          t.quadraticCurveTo(y, b, y - B, b),
          t.closePath(),
          t.fill(),
          t.save(),
          (t.font = u),
          (t.fillStyle = i.color),
          (t.textAlign = 'center'),
          (t.textBaseline = 'hanging'),
          t.fillText(c, w + p / 2, b + i.verticalPadding + (h ? 1 : 0)),
          t.save());
      };
    function T() {
      return !!w();
    }
    function I(t, n) {
      if (((x.value = t), u(x.options, n || {}), !T())) return !1;
      if (!x.bestFavicon) {
        const t = w();
        if (t) {
          const n = document.createElement('img');
          (t.href.match(/^data/) || (n.crossOrigin = 'anonymous'),
            (n.src = t.href),
            (x.bestFavicon = t),
            (x.bestFaviconImage = n));
        }
        y.addEventListener('change', B);
      }
      return (
        x.favicons || (x.favicons = b()),
        !!x.bestFaviconImage &&
          (x.bestFaviconImage.complete
            ? (F(x.bestFaviconImage, x.value, x.options), !0)
            : (x.bestFaviconImage.addEventListener('load', function () {
                F(this, x.value, x.options);
              }),
              !0))
      );
    }
    function N() {
      if (
        T() &&
        ((x.value = v),
        (x.options = p),
        y.removeEventListener('change', B),
        x.favicons)
      ) {
        for (const t of b()) t.parentNode && t.parentNode.removeChild(t);
        for (const t of x.favicons) document.head.appendChild(t);
        ((x.favicons = null),
          (x.bestFavicon = null),
          (x.bestFaviconImage = null));
      }
    }
    const O = { title: null, value: 0, options: { indicator: '!' } };
    function k(t, n, i) {
      let o = t;
      o = f(n) ? (0 === n ? t : `(${n}) ${t}`) : `(${i.indicator}) ${t}`;
      const l = document.querySelector('title');
      l && (l.childNodes[0].nodeValue = o);
    }
    function M(t, n) {
      return (
        null === O.title &&
          ((O.title = document.title),
          Object.defineProperty(document, 'title', {
            get: () => O.title,
            set: (t) => {
              ((O.title = t), k(O.title, O.value, O.options));
            },
          })),
        (O.value = t),
        u(O.options, n || {}),
        (document.title = document.title),
        !0
      );
    }
    function z(t, n = {}) {
      switch (n.method) {
        case void 0:
        case 'Badging':
          if (s(t) && 'Badging' === n.method) break;
        case 'Favicon':
          if (I(t, n.favicon)) break;
        default:
          M(t, n.title);
      }
    }
    function j() {
      (c() &&
        (o()
          ? window.ExperimentalBadge.clear()
          : l() && navigator.clearExperimentalAppBadge()),
        N(),
        (O.value = 0),
        (document.title = document.title));
    }
  },
  1277,
  [],
);
