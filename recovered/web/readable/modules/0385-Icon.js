// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 385; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.Icon = function ({
        name: h,
        size: l = 24,
        color: c = '#151518',
        active: j = !1,
      }) {
        const M = j && ('bell' === h || 'cheque' === h || 'refresh' === h),
          n = {
            stroke: c,
            strokeWidth: M ? 2.5 : 1.7,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            fill: 'none',
          },
          v = ('arrow' === h || 'chevron' === h) && (0, e.flipped)();
        return (0, x.jsxs)(s.default, {
          width: l,
          height: l,
          viewBox: '0 0 24 24',
          style: v ? { transform: [{ scaleX: -1 }] } : void 0,
          children: [
            'ai' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Rect, {
                    ...n,
                    strokeWidth: 1.8,
                    x: '6',
                    y: '4',
                    width: '6',
                    height: '10',
                    rx: '3',
                  }),
                  (0, x.jsx)(t.Path, {
                    ...n,
                    strokeWidth: 1.8,
                    d: 'M3 11v1a6 6 0 0 0 12 0M9 18v3M6 21h6M18 2l1.1 2.9L22 6l-2.9 1.1L18 10l-1.1-2.9L14 6l2.9-1.1ZM20 12l.6 1.4L22 14l-1.4.6L20 16l-.6-1.4L18 14l1.4-.6Z',
                  }),
                ],
              }),
            'send' === h &&
              (0, x.jsx)(t.Path, { ...n, d: 'M12 20V4m-7 7 7-7 7 7' }),
            'mail' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Rect, {
                    ...n,
                    strokeWidth: 1.8,
                    x: '3',
                    y: '5',
                    width: '18',
                    height: '14',
                    rx: '3',
                  }),
                  (0, x.jsx)(t.Path, {
                    ...n,
                    strokeWidth: 1.8,
                    d: 'm4.5 8 7.5 5.5L19.5 8',
                  }),
                ],
              }),
            'lock' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Rect, {
                    ...n,
                    strokeWidth: 1.8,
                    x: '4',
                    y: '10',
                    width: '16',
                    height: '11',
                    rx: '3',
                  }),
                  (0, x.jsx)(t.Path, {
                    ...n,
                    strokeWidth: 1.8,
                    d: 'M8 10V7a4 4 0 0 1 8 0v3M12 14v3',
                  }),
                ],
              }),
            'user' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Circle, {
                    ...n,
                    strokeWidth: 1.8,
                    cx: '12',
                    cy: '8',
                    r: '3.6',
                  }),
                  (0, x.jsx)(t.Path, {
                    ...n,
                    strokeWidth: 1.8,
                    d: 'M5 20v-1a7 5 0 0 1 14 0v1',
                  }),
                ],
              }),
            'edit' === h &&
              (0, x.jsx)(t.Path, {
                ...n,
                d: 'm15 4 5 5M4 20l5-1L21 7a2 2 0 0 0-4-4L5 15Z',
              }),
            'bell' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Path, {
                    ...n,
                    fill: M ? c : 'none',
                    d: 'M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z',
                  }),
                  (0, x.jsx)(t.Path, { ...n, d: 'M10 21h4' }),
                ],
              }),
            'camera' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Path, {
                    ...n,
                    d: 'M8 5 9.5 3h5L16 5h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z',
                  }),
                  (0, x.jsx)(t.Circle, { ...n, cx: '12', cy: '13', r: '4' }),
                ],
              }),
            'chat' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Path, {
                    ...n,
                    d: 'M21 11a8 8 0 0 1-8 8H7l-5 3V11a9 9 0 0 1 19 0Z',
                  }),
                  (0, x.jsx)(t.Path, { ...n, d: 'M7 10h10M7 14h6' }),
                ],
              }),
            'bolt' === h &&
              (0, x.jsx)(t.Path, { d: 'm13 2-9 12h7l-1 8 10-13h-7Z', fill: c }),
            'filter' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Path, { ...n, d: 'M4 7h16M4 17h16' }),
                  (0, x.jsx)(t.Circle, { cx: '9', cy: '7', r: '3', fill: c }),
                  (0, x.jsx)(t.Circle, { cx: '15', cy: '17', r: '3', fill: c }),
                ],
              }),
            'data' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Rect, {
                    ...n,
                    x: '4',
                    y: '3',
                    width: '16',
                    height: '18',
                    rx: '3',
                  }),
                  (0, x.jsx)(t.Path, { ...n, d: 'M4 9h16M10 9v12M4 15h16' }),
                ],
              }),
            'sun' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Circle, { ...n, cx: '12', cy: '12', r: '4' }),
                  (0, x.jsx)(t.Path, {
                    ...n,
                    d: 'M12 1v2M12 21v2M1 12h2M21 12h2M4 4l2 2M18 18l2 2M4 20l2-2M18 6l2-2',
                  }),
                ],
              }),
            'moon' === h &&
              (0, x.jsx)(t.Path, {
                ...n,
                d: 'M20 15A9 9 0 0 1 9 4a9 9 0 1 0 11 11Z',
              }),
            'scan' === h &&
              (0, x.jsx)(x.Fragment, {
                children: (0, x.jsx)(t.Path, {
                  ...n,
                  d: 'M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5M7 7v10M11 7v10M14 7v10M17 7v10',
                }),
              }),
            'photo' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Rect, {
                    ...n,
                    x: '3',
                    y: '4',
                    width: '18',
                    height: '16',
                    rx: '3',
                  }),
                  (0, x.jsx)(t.Circle, { ...n, cx: '8', cy: '9', r: '1.5' }),
                  (0, x.jsx)(t.Path, { ...n, d: 'm3 17 5-5 4 4 4-5 5 6' }),
                ],
              }),
            'stop' === h &&
              (0, x.jsx)(t.Rect, {
                x: '6',
                y: '6',
                width: '12',
                height: '12',
                rx: '3',
                fill: c,
              }),
            'play' === h &&
              (0, x.jsx)(t.Path, {
                d: 'M8 5.2v13.6a1 1 0 0 0 1.5.9l10.6-6.8a1 1 0 0 0 0-1.8L9.5 4.3A1 1 0 0 0 8 5.2Z',
                fill: c,
              }),
            'list' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Path, { ...n, d: 'M9 6h11M9 12h11M9 18h11' }),
                  (0, x.jsx)(t.Circle, {
                    cx: '4.5',
                    cy: '6',
                    r: '1.2',
                    fill: c,
                  }),
                  (0, x.jsx)(t.Circle, {
                    cx: '4.5',
                    cy: '12',
                    r: '1.2',
                    fill: c,
                  }),
                  (0, x.jsx)(t.Circle, {
                    cx: '4.5',
                    cy: '18',
                    r: '1.2',
                    fill: c,
                  }),
                ],
              }),
            'grid' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Rect, {
                    ...n,
                    x: '3.5',
                    y: '3.5',
                    width: '7',
                    height: '7',
                    rx: '1.8',
                  }),
                  (0, x.jsx)(t.Rect, {
                    ...n,
                    x: '13.5',
                    y: '3.5',
                    width: '7',
                    height: '7',
                    rx: '1.8',
                  }),
                  (0, x.jsx)(t.Rect, {
                    ...n,
                    x: '3.5',
                    y: '13.5',
                    width: '7',
                    height: '7',
                    rx: '1.8',
                  }),
                  (0, x.jsx)(t.Rect, {
                    ...n,
                    x: '13.5',
                    y: '13.5',
                    width: '7',
                    height: '7',
                    rx: '1.8',
                  }),
                ],
              }),
            'text' === h &&
              (0, x.jsx)(t.Path, { ...n, d: 'M4 5h16M12 5v15M8 20h8' }),
            'home' === h &&
              (0, x.jsx)(t.Path, {
                ...n,
                fill: j ? c : 'none',
                d: 'M3.5 10 12 3l8.5 7v10a1 1 0 0 1-1 1h-5v-7h-5v7h-5a1 1 0 0 1-1-1Z',
              }),
            'dashboard' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Rect, {
                    ...n,
                    fill: j ? c : 'none',
                    x: '3.5',
                    y: '3.5',
                    width: '7.5',
                    height: '9.5',
                    rx: '2.2',
                  }),
                  (0, x.jsx)(t.Rect, {
                    ...n,
                    fill: j ? c : 'none',
                    x: '13',
                    y: '3.5',
                    width: '7.5',
                    height: '6',
                    rx: '2.2',
                  }),
                  (0, x.jsx)(t.Rect, {
                    ...n,
                    fill: j ? c : 'none',
                    x: '13',
                    y: '11.5',
                    width: '7.5',
                    height: '9',
                    rx: '2.2',
                  }),
                  (0, x.jsx)(t.Rect, {
                    ...n,
                    fill: j ? c : 'none',
                    x: '3.5',
                    y: '15',
                    width: '7.5',
                    height: '5.5',
                    rx: '2.2',
                  }),
                ],
              }),
            'add' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Rect, {
                    ...n,
                    x: '3',
                    y: '3',
                    width: '18',
                    height: '18',
                    rx: '5',
                  }),
                  (0, x.jsx)(t.Path, { ...n, d: 'M12 7v10M7 12h10' }),
                ],
              }),
            'plus' === h &&
              (0, x.jsx)(t.Path, {
                ...n,
                strokeWidth: 2.2,
                d: 'M12 5v14M5 12h14',
              }),
            'menu' === h &&
              (0, x.jsx)(t.Path, {
                ...n,
                strokeWidth: 2,
                d: 'M4 7h16M4 12h16M4 17h16',
              }),
            'minus' === h &&
              (0, x.jsx)(t.Path, { ...n, strokeWidth: 2.6, d: 'M6 12h12' }),
            'inventory' === h &&
              (0, x.jsx)(x.Fragment, {
                children: (0, x.jsx)(t.Path, {
                  ...n,
                  d: 'm3.5 7 8.5-4 8.5 4v10L12 21l-8.5-4ZM3.5 7 12 11l8.5-4M12 11v10M8 5l8.5 4',
                }),
              }),
            'profile' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Circle, {
                    ...n,
                    cx: '12',
                    cy: '8',
                    r: '4',
                    fill: j ? c : 'none',
                  }),
                  (0, x.jsx)(t.Path, {
                    ...n,
                    d: 'M4.5 21v-2a7.5 5.5 0 0 1 15 0v2',
                  }),
                ],
              }),
            'mic' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Rect, {
                    ...n,
                    x: '9',
                    y: '2.5',
                    width: '6',
                    height: '12',
                    rx: '3',
                  }),
                  (0, x.jsx)(t.Path, {
                    ...n,
                    d: 'M5.5 10.5v1a6.5 6.5 0 0 0 13 0v-1M12 18v3.5M9 21.5h6',
                  }),
                ],
              }),
            'micOff' === h &&
              (0, x.jsx)(x.Fragment, {
                children: (0, x.jsx)(t.Path, {
                  ...n,
                  d: 'M15 9.5V5.5a3 3 0 0 0-5.8-1.1M9 9v2.5a3 3 0 0 0 4.6 2.5M5.5 10.5v1a6.5 6.5 0 0 0 10.6 5M18.5 10.5v1a6.5 6.5 0 0 1-.4 2.2M12 18v3.5M9 21.5h6M3.5 3.5l17 17',
                }),
              }),
            'speaker' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Path, {
                    ...n,
                    d: 'M4 9.5h3.5L12 5.5v13l-4.5-4H4Z',
                  }),
                  (0, x.jsx)(t.Path, {
                    ...n,
                    d: 'M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11',
                  }),
                ],
              }),
            'speakerOff' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Path, {
                    ...n,
                    d: 'M4 9.5h3.5L12 5.5v13l-4.5-4H4Z',
                  }),
                  (0, x.jsx)(t.Path, { ...n, d: 'm16 9.5 5 5m0-5-5 5' }),
                ],
              }),
            'arrow' === h &&
              (0, x.jsx)(t.Path, { ...n, d: 'M19 12H5m6-6-6 6 6 6' }),
            'search' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Circle, {
                    ...n,
                    cx: '10.5',
                    cy: '10.5',
                    r: '6.5',
                  }),
                  (0, x.jsx)(t.Path, { ...n, d: 'm16 16 5 5' }),
                ],
              }),
            'down' === h &&
              (0, x.jsx)(t.Path, { ...n, d: 'M17 5 6 16m0-8v8h8' }),
            'up' === h && (0, x.jsx)(t.Path, { ...n, d: 'M6 18 17 7m0 8V7H9' }),
            'close' === h &&
              (0, x.jsx)(t.Path, {
                ...n,
                strokeWidth: j ? 2.6 : 1.7,
                d: 'm6 6 12 12M6 18 18 6',
              }),
            'check' === h && (0, x.jsx)(t.Path, { ...n, d: 'm5 12 4 4L19 6' }),
            'browser' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Rect, {
                    ...n,
                    strokeWidth: 1.8,
                    x: '3',
                    y: '4',
                    width: '18',
                    height: '13',
                    rx: '2.5',
                  }),
                  (0, x.jsx)(t.Path, {
                    ...n,
                    strokeWidth: 1.8,
                    d: 'M8 21h8M12 17v4M3 8h18',
                  }),
                ],
              }),
            'phone' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Rect, {
                    ...n,
                    strokeWidth: 1.8,
                    x: '6',
                    y: '2',
                    width: '12',
                    height: '20',
                    rx: '3',
                  }),
                  (0, x.jsx)(t.Path, {
                    ...n,
                    strokeWidth: 1.8,
                    d: 'M10.5 18.5h3',
                  }),
                ],
              }),
            'gift' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Rect, {
                    ...n,
                    strokeWidth: 1.8,
                    x: '3',
                    y: '8',
                    width: '18',
                    height: '5',
                    rx: '1.6',
                  }),
                  (0, x.jsx)(t.Path, {
                    ...n,
                    strokeWidth: 1.8,
                    d: 'M5 13v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7M12 8v13M12 8C10.5 4.5 8.8 3 7.6 3A2.3 2.3 0 0 0 7.6 8M12 8c1.5-3.5 3.2-5 4.4-5a2.3 2.3 0 0 1 0 5',
                  }),
                ],
              }),
            'barcode' === h &&
              (0, x.jsx)(t.Path, {
                ...n,
                d: 'M3 5v14M6.5 5v14M9 5v10M11.5 5v14M14 5v10M17 5v14M20.5 5v14',
              }),
            'chart' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Path, { ...n, d: 'M4 20h16' }),
                  (0, x.jsx)(t.Path, { ...n, d: 'M7 20v-6M12 20V6M17 20v-9' }),
                ],
              }),
            'receipt' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Path, {
                    ...n,
                    d: 'M6 3h12v18l-2-1.6-2 1.6-2-1.6-2 1.6-2-1.6L6 21Z',
                  }),
                  (0, x.jsx)(t.Path, { ...n, d: 'M9 8h6M9 12h6' }),
                ],
              }),
            'cart' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Path, {
                    ...n,
                    d: 'M3 4h2.2l2.4 10.4a2 2 0 0 0 2 1.6h7.1a2 2 0 0 0 2-1.5L20.5 8H6',
                  }),
                  (0, x.jsx)(t.Circle, { ...n, cx: '10', cy: '20', r: '1.4' }),
                  (0, x.jsx)(t.Circle, { ...n, cx: '17', cy: '20', r: '1.4' }),
                ],
              }),
            'tag' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Path, {
                    ...n,
                    d: 'M3.5 12.6 11.4 4.7A2 2 0 0 1 12.8 4H19a1 1 0 0 1 1 1v6.2a2 2 0 0 1-.6 1.4l-7.9 7.9a1.5 1.5 0 0 1-2.1 0l-5.9-5.9a1.5 1.5 0 0 1 0-2Z',
                  }),
                  (0, x.jsx)(t.Circle, { ...n, cx: '16', cy: '8', r: '1.4' }),
                ],
              }),
            'refresh' === h &&
              (0, x.jsx)(t.Path, {
                ...n,
                d: 'M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4',
              }),
            'chevron' === h &&
              (0, x.jsx)(t.Path, { ...n, d: 'm14.5 6-6 6 6 6' }),
            'more' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Circle, {
                    cx: '5.5',
                    cy: '12',
                    r: '1.6',
                    fill: c,
                  }),
                  (0, x.jsx)(t.Circle, {
                    cx: '12',
                    cy: '12',
                    r: '1.6',
                    fill: c,
                  }),
                  (0, x.jsx)(t.Circle, {
                    cx: '18.5',
                    cy: '12',
                    r: '1.6',
                    fill: c,
                  }),
                ],
              }),
            'wallet' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Path, { ...n, d: 'M4 7a2 2 0 0 1 2-2h11v4' }),
                  (0, x.jsx)(t.Rect, {
                    ...n,
                    x: '3',
                    y: '7',
                    width: '18',
                    height: '13',
                    rx: '3',
                  }),
                  (0, x.jsx)(t.Path, { ...n, d: 'M16 13.5h2' }),
                ],
              }),
            'cheque' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Rect, {
                    ...n,
                    x: '2.5',
                    y: '6',
                    width: '19',
                    height: '12',
                    rx: '2.5',
                  }),
                  (0, x.jsx)(t.Path, {
                    ...n,
                    d: 'M6 10h6M6 14h4M14.5 14.5c1-1.6 1.8-1.6 2.4 0s1.3 1.6 2.1 0',
                  }),
                ],
              }),
            'upload' === h &&
              (0, x.jsx)(t.Path, {
                ...n,
                d: 'M12 16V4m-5 5 5-5 5 5M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3',
              }),
            'download' === h &&
              (0, x.jsx)(t.Path, {
                ...n,
                d: 'M12 4v12m-5-5 5 5 5-5M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3',
              }),
            'link' === h &&
              (0, x.jsx)(t.Path, {
                ...n,
                d: 'M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1 1M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1-1',
              }),
            'offline' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Path, {
                    ...n,
                    d: 'M2 8.5a15 15 0 0 1 4.6-2.9M10.5 4.6A15 15 0 0 1 22 8.5M5.5 12.2a10 10 0 0 1 3.2-1.9M15.6 10.6a10 10 0 0 1 2.9 1.6M9 15.8a5 5 0 0 1 6 0',
                  }),
                  (0, x.jsx)(t.Circle, {
                    cx: '12',
                    cy: '19.5',
                    r: '1.3',
                    fill: c,
                  }),
                  (0, x.jsx)(t.Path, { ...n, d: 'm3 3 18 18' }),
                ],
              }),
            'alert' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Path, {
                    ...n,
                    d: 'M10.3 4.1 2.6 17.5A2 2 0 0 0 4.3 20.5h15.4a2 2 0 0 0 1.7-3L13.7 4.1a2 2 0 0 0-3.4 0Z',
                  }),
                  (0, x.jsx)(t.Path, { ...n, d: 'M12 9.5v4.5' }),
                  (0, x.jsx)(t.Circle, {
                    cx: '12',
                    cy: '17',
                    r: '1.1',
                    fill: c,
                  }),
                ],
              }),
            'clock' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Circle, { ...n, cx: '12', cy: '12', r: '9' }),
                  (0, x.jsx)(t.Path, { ...n, d: 'M12 7v5l3.5 2' }),
                ],
              }),
            'server' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Rect, {
                    ...n,
                    x: '3.5',
                    y: '4',
                    width: '17',
                    height: '7',
                    rx: '2',
                  }),
                  (0, x.jsx)(t.Rect, {
                    ...n,
                    x: '3.5',
                    y: '13',
                    width: '17',
                    height: '7',
                    rx: '2',
                  }),
                  (0, x.jsx)(t.Circle, {
                    cx: '7.5',
                    cy: '7.5',
                    r: '1.1',
                    fill: c,
                  }),
                  (0, x.jsx)(t.Circle, {
                    cx: '7.5',
                    cy: '16.5',
                    r: '1.1',
                    fill: c,
                  }),
                  (0, x.jsx)(t.Path, { ...n, d: 'M12 7.5h5M12 16.5h5' }),
                ],
              }),
            'bulb' === h &&
              (0, x.jsx)(t.Path, {
                ...n,
                d: 'M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v2h5v-2c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3Z',
              }),
            'star' === h &&
              (0, x.jsx)(t.Path, {
                ...n,
                fill: j ? c : 'none',
                d: 'm12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8Z',
              }),
            'recipe' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Path, {
                    ...n,
                    d: 'M4 11h16v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5Z',
                  }),
                  (0, x.jsx)(t.Path, {
                    ...n,
                    d: 'M2 11h2M20 11h2M9 3.5v4M12 2.5v5M15 3.5v4',
                  }),
                ],
              }),
            'whatsapp' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Path, {
                    ...n,
                    d: 'M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Z',
                  }),
                  (0, x.jsx)(t.Path, {
                    fill: c,
                    d: 'M8.9 7.6c.2-.3.5-.4.8-.4h.6c.2 0 .4.1.5.4l.8 1.8c.1.2 0 .5-.1.7l-.6.7c.6 1.2 1.6 2.2 2.9 2.9l.7-.6c.2-.1.5-.2.7-.1l1.8.8c.3.1.4.3.4.5v.6c0 .3-.2.6-.4.8-.7.5-1.8.7-3 .2a9.4 9.4 0 0 1-5-5c-.5-1.2-.3-2.3.2-3Z',
                  }),
                ],
              }),
            'sms' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Path, {
                    ...n,
                    d: 'M5 4.5h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H10l-4.5 3.5v-3.5H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z',
                  }),
                  (0, x.jsx)(t.Circle, {
                    cx: '8',
                    cy: '11',
                    r: '1.1',
                    fill: c,
                  }),
                  (0, x.jsx)(t.Circle, {
                    cx: '12',
                    cy: '11',
                    r: '1.1',
                    fill: c,
                  }),
                  (0, x.jsx)(t.Circle, {
                    cx: '16',
                    cy: '11',
                    r: '1.1',
                    fill: c,
                  }),
                ],
              }),
            'print' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Path, { ...n, d: 'M7 9V3.5h10V9' }),
                  (0, x.jsx)(t.Rect, {
                    ...n,
                    x: '3',
                    y: '9',
                    width: '18',
                    height: '8',
                    rx: '2',
                  }),
                  (0, x.jsx)(t.Path, { ...n, d: 'M7 14h10v6.5H7Z' }),
                  (0, x.jsx)(t.Circle, {
                    cx: '17.5',
                    cy: '12',
                    r: '.9',
                    fill: c,
                  }),
                ],
              }),
            'file' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Path, {
                    ...n,
                    d: 'M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z',
                  }),
                  (0, x.jsx)(t.Path, { ...n, d: 'M14 3v5h5M9 13h6M9 17h4' }),
                ],
              }),
            'share' === h &&
              (0, x.jsx)(t.Path, {
                ...n,
                d: 'M12 3v12M8 7l4-4 4 4M8 10.5H6a1 1 0 0 0-1 1V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8.5a1 1 0 0 0-1-1h-2',
              }),
            'tool' === h &&
              (0, x.jsx)(t.Path, {
                ...n,
                d: 'M14.7 6.3a4 4 0 0 0 5 5L21 10a5.5 5.5 0 0 1-7.2 1.9l-7.6 7.6a2 2 0 0 1-2.8-2.8l7.6-7.6A5.5 5.5 0 0 1 12.9 2l-1.2 1.3a4 4 0 0 0 3 3Z',
              }),
            'store' === h &&
              (0, x.jsxs)(x.Fragment, {
                children: [
                  (0, x.jsx)(t.Path, {
                    ...n,
                    d: 'M4 10v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9',
                  }),
                  (0, x.jsx)(t.Path, {
                    ...n,
                    d: 'M3 10 5 4h14l2 6a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0Z',
                  }),
                  (0, x.jsx)(t.Path, { ...n, d: 'M10 20v-5h4v5' }),
                ],
              }),
          ],
        });
      }));
    var h,
      t = r(d[0]),
      s = (h = t) && h.__esModule ? h : { default: h },
      e = r(d[1]),
      x = r(d[2]);
  },
  385,
  [386, 1, 338],
);
