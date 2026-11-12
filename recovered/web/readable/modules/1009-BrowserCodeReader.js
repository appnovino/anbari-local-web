// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1009; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (_g, r, _i, a, _m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'BrowserCodeReader', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }));
    var t = e(r(_d[0])),
      n = e(r(_d[1])),
      i = e(r(_d[2])),
      o = e(r(_d[3])),
      s = e(r(_d[4])),
      d = e(r(_d[5])),
      c = e(r(_d[6])),
      u = r(_d[7]),
      h = r(_d[8]),
      l =
        (this && this.__awaiter) ||
        function (e, t, n, i) {
          return new (n || (n = Promise))(function (o, s) {
            function d(e) {
              try {
                u(i.next(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              try {
                u(i.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function u(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(d, c);
            }
            u((i = i.apply(e, t || [])).next());
          });
        },
      p =
        (this && this.__generator) ||
        function (e, t) {
          var n,
            i,
            o,
            s = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            },
            d = Object.create(
              ('function' == typeof Iterator ? Iterator : Object).prototype,
            );
          return (
            (d.next = c(0)),
            (d.throw = c(1)),
            (d.return = c(2)),
            'function' == typeof Symbol &&
              (d[Symbol.iterator] = function () {
                return this;
              }),
            d
          );
          function c(e) {
            return function (t) {
              return u([e, t]);
            };
          }
          function u(c) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; d && ((d = 0), c[0] && (s = 0)), s; )
              try {
                if (
                  ((n = 1),
                  i &&
                    (o =
                      2 & c[0]
                        ? i.return
                        : c[0]
                          ? i.throw || ((o = i.return) && o.call(i), 0)
                          : i.next) &&
                    !(o = o.call(i, c[1])).done)
                )
                  return o;
                switch (((i = 0), o && (c = [2 & c[0], o.value]), c[0])) {
                  case 0:
                  case 1:
                    o = c;
                    break;
                  case 4:
                    return (s.label++, { value: c[1], done: !1 });
                  case 5:
                    (s.label++, (i = c[1]), (c = [0]));
                    continue;
                  case 7:
                    ((c = s.ops.pop()), s.trys.pop());
                    continue;
                  default:
                    if (
                      !((o = s.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== c[0] && 2 !== c[0]))
                    ) {
                      s = 0;
                      continue;
                    }
                    if (3 === c[0] && (!o || (c[1] > o[0] && c[1] < o[3]))) {
                      s.label = c[1];
                      break;
                    }
                    if (6 === c[0] && s.label < o[1]) {
                      ((s.label = o[1]), (o = c));
                      break;
                    }
                    if (o && s.label < o[2]) {
                      ((s.label = o[2]), s.ops.push(c));
                      break;
                    }
                    (o[2] && s.ops.pop(), s.trys.pop());
                    continue;
                }
                c = t.call(e, s);
              } catch (e) {
                ((c = [6, e]), (i = 0));
              } finally {
                n = o = 0;
              }
            if (5 & c[0]) throw c[1];
            return { value: c[0] ? c[1] : void 0, done: !0 };
          }
        },
      v =
        (this && this.__values) ||
        function (e) {
          var t = 'function' == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            i = 0;
          if (n) return n.call(e);
          if (e && 'number' == typeof e.length)
            return {
              next: function () {
                return (
                  e && i >= e.length && (e = void 0),
                  { value: e && e[i++], done: !e }
                );
              },
            };
          throw new TypeError(
            t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      f = (function () {
        function e(e, t, n) {
          (void 0 === t && (t = 500),
            (this.reader = e),
            (this.timeBetweenScansMillis = t),
            (this._hints = n),
            (this._stopContinuousDecode = !1),
            (this._stopAsyncDecode = !1),
            (this._timeBetweenDecodingAttempts = 0));
        }
        return (
          Object.defineProperty(e.prototype, 'hasNavigator', {
            get: function () {
              return 'undefined' != typeof navigator;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'isMediaDevicesSuported', {
            get: function () {
              return this.hasNavigator && !!navigator.mediaDevices;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'canEnumerateDevices', {
            get: function () {
              return !(
                !this.isMediaDevicesSuported ||
                !navigator.mediaDevices.enumerateDevices
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'timeBetweenDecodingAttempts', {
            get: function () {
              return this._timeBetweenDecodingAttempts;
            },
            set: function (e) {
              this._timeBetweenDecodingAttempts = e < 0 ? 0 : e;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, 'hints', {
            get: function () {
              return this._hints;
            },
            set: function (e) {
              this._hints = e || null;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.listVideoInputDevices = function () {
            return l(this, void 0, void 0, function () {
              var e, t, n, i, o, s, d, c, u, h, l, f;
              return p(this, function (p) {
                switch (p.label) {
                  case 0:
                    if (!this.hasNavigator)
                      throw new Error(
                        "Can't enumerate devices, navigator is not present.",
                      );
                    if (!this.canEnumerateDevices)
                      throw new Error(
                        "Can't enumerate devices, method not supported.",
                      );
                    return [4, navigator.mediaDevices.enumerateDevices()];
                  case 1:
                    ((e = p.sent()), (t = []));
                    try {
                      for (n = v(e), i = n.next(); !i.done; i = n.next())
                        ((o = i.value),
                          'videoinput' ===
                            (s = 'video' === o.kind ? 'videoinput' : o.kind) &&
                            ((d = o.deviceId || o.id),
                            (c =
                              o.label || 'Video device '.concat(t.length + 1)),
                            (u = o.groupId),
                            (h = {
                              deviceId: d,
                              label: c,
                              kind: s,
                              groupId: u,
                            }),
                            t.push(h)));
                    } catch (e) {
                      l = { error: e };
                    } finally {
                      try {
                        i && !i.done && (f = n.return) && f.call(n);
                      } finally {
                        if (l) throw l.error;
                      }
                    }
                    return [2, t];
                }
              });
            });
          }),
          (e.prototype.getVideoInputDevices = function () {
            return l(this, void 0, void 0, function () {
              return p(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, this.listVideoInputDevices()];
                  case 1:
                    return [
                      2,
                      e.sent().map(function (e) {
                        return new h.VideoInputDevice(e.deviceId, e.label);
                      }),
                    ];
                }
              });
            });
          }),
          (e.prototype.findDeviceById = function (e) {
            return l(this, void 0, void 0, function () {
              var t;
              return p(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.listVideoInputDevices()];
                  case 1:
                    return (t = n.sent())
                      ? [
                          2,
                          t.find(function (t) {
                            return t.deviceId === e;
                          }),
                        ]
                      : [2, null];
                }
              });
            });
          }),
          (e.prototype.decodeFromInputVideoDevice = function (e, t) {
            return l(this, void 0, void 0, function () {
              return p(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.decodeOnceFromVideoDevice(e, t)];
                  case 1:
                    return [2, n.sent()];
                }
              });
            });
          }),
          (e.prototype.decodeOnceFromVideoDevice = function (e, t) {
            return l(this, void 0, void 0, function () {
              var n;
              return p(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      this.reset(),
                      (n = {
                        video: e
                          ? { deviceId: { exact: e } }
                          : { facingMode: 'environment' },
                      }),
                      [4, this.decodeOnceFromConstraints(n, t)]
                    );
                  case 1:
                    return [2, i.sent()];
                }
              });
            });
          }),
          (e.prototype.decodeOnceFromConstraints = function (e, t) {
            return l(this, void 0, void 0, function () {
              var n;
              return p(this, function (i) {
                switch (i.label) {
                  case 0:
                    return [4, navigator.mediaDevices.getUserMedia(e)];
                  case 1:
                    return (
                      (n = i.sent()),
                      [4, this.decodeOnceFromStream(n, t)]
                    );
                  case 2:
                    return [2, i.sent()];
                }
              });
            });
          }),
          (e.prototype.decodeOnceFromStream = function (e, t) {
            return l(this, void 0, void 0, function () {
              var n;
              return p(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (this.reset(), [4, this.attachStreamToVideo(e, t)]);
                  case 1:
                    return ((n = i.sent()), [4, this.decodeOnce(n)]);
                  case 2:
                    return [2, i.sent()];
                }
              });
            });
          }),
          (e.prototype.decodeFromInputVideoDeviceContinuously = function (
            e,
            t,
            n,
          ) {
            return l(this, void 0, void 0, function () {
              return p(this, function (i) {
                switch (i.label) {
                  case 0:
                    return [4, this.decodeFromVideoDevice(e, t, n)];
                  case 1:
                    return [2, i.sent()];
                }
              });
            });
          }),
          (e.prototype.decodeFromVideoDevice = function (e, t, n) {
            return l(this, void 0, void 0, function () {
              var i;
              return p(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      (i = {
                        video: e
                          ? { deviceId: { exact: e } }
                          : { facingMode: 'environment' },
                      }),
                      [4, this.decodeFromConstraints(i, t, n)]
                    );
                  case 1:
                    return [2, o.sent()];
                }
              });
            });
          }),
          (e.prototype.decodeFromConstraints = function (e, t, n) {
            return l(this, void 0, void 0, function () {
              var i;
              return p(this, function (o) {
                switch (o.label) {
                  case 0:
                    return [4, navigator.mediaDevices.getUserMedia(e)];
                  case 1:
                    return (
                      (i = o.sent()),
                      [4, this.decodeFromStream(i, t, n)]
                    );
                  case 2:
                    return [2, o.sent()];
                }
              });
            });
          }),
          (e.prototype.decodeFromStream = function (e, t, n) {
            return l(this, void 0, void 0, function () {
              var i;
              return p(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (this.reset(), [4, this.attachStreamToVideo(e, t)]);
                  case 1:
                    return ((i = o.sent()), [4, this.decodeContinuously(i, n)]);
                  case 2:
                    return [2, o.sent()];
                }
              });
            });
          }),
          (e.prototype.stopAsyncDecode = function () {
            this._stopAsyncDecode = !0;
          }),
          (e.prototype.stopContinuousDecode = function () {
            this._stopContinuousDecode = !0;
          }),
          (e.prototype.attachStreamToVideo = function (e, t) {
            return l(this, void 0, void 0, function () {
              var n;
              return p(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      (n = this.prepareVideoElement(t)),
                      this.addVideoSource(n, e),
                      (this.videoElement = n),
                      (this.stream = e),
                      [4, this.playVideoOnLoadAsync(n)]
                    );
                  case 1:
                    return (i.sent(), [2, n]);
                }
              });
            });
          }),
          (e.prototype.playVideoOnLoadAsync = function (e) {
            var t = this;
            return new Promise(function (n, i) {
              return t.playVideoOnLoad(e, function () {
                return n();
              });
            });
          }),
          (e.prototype.playVideoOnLoad = function (e, t) {
            var n = this;
            ((this.videoEndedListener = function () {
              return n.stopStreams();
            }),
              (this.videoCanPlayListener = function () {
                return n.tryPlayVideo(e);
              }),
              e.addEventListener('ended', this.videoEndedListener),
              e.addEventListener('canplay', this.videoCanPlayListener),
              e.addEventListener('playing', t),
              this.tryPlayVideo(e));
          }),
          (e.prototype.isVideoPlaying = function (e) {
            return (
              e.currentTime > 0 && !e.paused && !e.ended && e.readyState > 2
            );
          }),
          (e.prototype.tryPlayVideo = function (e) {
            return l(this, void 0, void 0, function () {
              return p(this, function (t) {
                switch (t.label) {
                  case 0:
                    if (this.isVideoPlaying(e))
                      return (
                        console.warn(
                          'Trying to play video that is already playing.',
                        ),
                        [2]
                      );
                    t.label = 1;
                  case 1:
                    return (t.trys.push([1, 3, , 4]), [4, e.play()]);
                  case 2:
                    return (t.sent(), [3, 4]);
                  case 3:
                    return (
                      t.sent(),
                      console.warn('It was not possible to play the video.'),
                      [3, 4]
                    );
                  case 4:
                    return [2];
                }
              });
            });
          }),
          (e.prototype.getMediaElement = function (e, n) {
            var i = document.getElementById(e);
            if (!i)
              throw new t.default("element with id '".concat(e, "' not found"));
            if (i.nodeName.toLowerCase() !== n.toLowerCase())
              throw new t.default(
                "element with id '"
                  .concat(e, "' must be an ")
                  .concat(n, ' element'),
              );
            return i;
          }),
          (e.prototype.decodeFromImage = function (e, n) {
            if (!e && !n)
              throw new t.default(
                'either imageElement with a src set or an url must be provided',
              );
            return n && !e
              ? this.decodeFromImageUrl(n)
              : this.decodeFromImageElement(e);
          }),
          (e.prototype.decodeFromVideo = function (e, n) {
            if (!e && !n)
              throw new t.default(
                'Either an element with a src set or an URL must be provided',
              );
            return n && !e
              ? this.decodeFromVideoUrl(n)
              : this.decodeFromVideoElement(e);
          }),
          (e.prototype.decodeFromVideoContinuously = function (e, n, i) {
            if (void 0 === e && void 0 === n)
              throw new t.default(
                'Either an element with a src set or an URL must be provided',
              );
            return n && !e
              ? this.decodeFromVideoUrlContinuously(n, i)
              : this.decodeFromVideoElementContinuously(e, i);
          }),
          (e.prototype.decodeFromImageElement = function (e) {
            if (!e) throw new t.default('An image element must be provided.');
            this.reset();
            var n = this.prepareImageElement(e);
            return (
              (this.imageElement = n),
              this.isImageLoaded(n)
                ? this.decodeOnce(n, !1, !0)
                : this._decodeOnLoadImage(n)
            );
          }),
          (e.prototype.decodeFromVideoElement = function (e) {
            var t = this._decodeFromVideoElementSetup(e);
            return this._decodeOnLoadVideo(t);
          }),
          (e.prototype.decodeFromVideoElementContinuously = function (e, t) {
            var n = this._decodeFromVideoElementSetup(e);
            return this._decodeOnLoadVideoContinuously(n, t);
          }),
          (e.prototype._decodeFromVideoElementSetup = function (e) {
            if (!e) throw new t.default('A video element must be provided.');
            this.reset();
            var n = this.prepareVideoElement(e);
            return ((this.videoElement = n), n);
          }),
          (e.prototype.decodeFromImageUrl = function (e) {
            if (!e) throw new t.default('An URL must be provided.');
            this.reset();
            var n = this.prepareImageElement();
            this.imageElement = n;
            var i = this._decodeOnLoadImage(n);
            return ((n.src = e), i);
          }),
          (e.prototype.decodeFromVideoUrl = function (e) {
            if (!e) throw new t.default('An URL must be provided.');
            this.reset();
            var n = this.prepareVideoElement(),
              i = this.decodeFromVideoElement(n);
            return ((n.src = e), i);
          }),
          (e.prototype.decodeFromVideoUrlContinuously = function (e, n) {
            if (!e) throw new t.default('An URL must be provided.');
            this.reset();
            var i = this.prepareVideoElement(),
              o = this.decodeFromVideoElementContinuously(i, n);
            return ((i.src = e), o);
          }),
          (e.prototype._decodeOnLoadImage = function (e) {
            var t = this;
            return new Promise(function (n, i) {
              ((t.imageLoadedListener = function () {
                return t.decodeOnce(e, !1, !0).then(n, i);
              }),
                e.addEventListener('load', t.imageLoadedListener));
            });
          }),
          (e.prototype._decodeOnLoadVideo = function (e) {
            return l(this, void 0, void 0, function () {
              return p(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.playVideoOnLoadAsync(e)];
                  case 1:
                    return (t.sent(), [4, this.decodeOnce(e)]);
                  case 2:
                    return [2, t.sent()];
                }
              });
            });
          }),
          (e.prototype._decodeOnLoadVideoContinuously = function (e, t) {
            return l(this, void 0, void 0, function () {
              return p(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.playVideoOnLoadAsync(e)];
                  case 1:
                    return (n.sent(), this.decodeContinuously(e, t), [2]);
                }
              });
            });
          }),
          (e.prototype.isImageLoaded = function (e) {
            return !!e.complete && 0 !== e.naturalWidth;
          }),
          (e.prototype.prepareImageElement = function (e) {
            var t;
            return (
              void 0 === e &&
                (((t = document.createElement('img')).width = 200),
                (t.height = 200)),
              'string' == typeof e && (t = this.getMediaElement(e, 'img')),
              e instanceof HTMLImageElement && (t = e),
              t
            );
          }),
          (e.prototype.prepareVideoElement = function (e) {
            var t;
            return (
              e ||
                'undefined' == typeof document ||
                (((t = document.createElement('video')).width = 200),
                (t.height = 200)),
              'string' == typeof e && (t = this.getMediaElement(e, 'video')),
              e instanceof HTMLVideoElement && (t = e),
              t.setAttribute('autoplay', 'true'),
              t.setAttribute('muted', 'true'),
              t.setAttribute('playsinline', 'true'),
              t
            );
          }),
          (e.prototype.decodeOnce = function (e, t, n) {
            var o = this;
            (void 0 === t && (t = !0),
              void 0 === n && (n = !0),
              (this._stopAsyncDecode = !1));
            var s = function (u, h) {
              if (o._stopAsyncDecode)
                return (
                  h(
                    new c.default(
                      'Video stream has ended before any code could be detected.',
                    ),
                  ),
                  void (o._stopAsyncDecode = void 0)
                );
              try {
                u(o.decode(e));
              } catch (e) {
                var l = t && e instanceof c.default,
                  p = e instanceof i.default || e instanceof d.default;
                if (l || (p && n))
                  return setTimeout(s, o._timeBetweenDecodingAttempts, u, h);
                h(e);
              }
            };
            return new Promise(function (e, t) {
              return s(e, t);
            });
          }),
          (e.prototype.decodeContinuously = function (e, t) {
            var n = this;
            this._stopContinuousDecode = !1;
            var o = function () {
              if (n._stopContinuousDecode) n._stopContinuousDecode = void 0;
              else
                try {
                  var s = n.decode(e);
                  (t(s, null), setTimeout(o, n.timeBetweenScansMillis));
                } catch (e) {
                  t(null, e);
                  var u = e instanceof i.default || e instanceof d.default,
                    h = e instanceof c.default;
                  u || h
                    ? setTimeout(o, n._timeBetweenDecodingAttempts)
                    : console.error(
                        'BrowserCodeReader: unexpected error during decode, stopping scan loop:',
                        e,
                      );
                }
            };
            o();
          }),
          (e.prototype.decode = function (e) {
            var t = this.createBinaryBitmap(e);
            try {
              return this.decodeBitmap(t);
            } catch (t) {
              if (t instanceof c.default) {
                var i = this.getCaptureCanvas(e),
                  s = new u.HTMLCanvasElementLuminanceSource(i, !1),
                  d = new o.default(s),
                  h = new n.default(d);
                return this.decodeBitmap(h);
              }
              throw t;
            }
          }),
          (e.prototype.createBinaryBitmap = function (e) {
            this.getCaptureCanvasContext(e);
            var t = !1;
            e instanceof HTMLVideoElement
              ? (this.drawFrameOnCanvas(e), (t = !0))
              : this.drawImageOnCanvas(e);
            var i = this.getCaptureCanvas(e),
              o = new u.HTMLCanvasElementLuminanceSource(
                i,
                t,
                this._grayscaleBuffer,
              );
            this._grayscaleBuffer = o.getMatrix();
            var d = new s.default(o);
            return new n.default(d);
          }),
          (e.prototype.getCaptureCanvasContext = function (e) {
            if (!this.captureCanvasContext) {
              var t = this.getCaptureCanvas(e),
                n = void 0;
              try {
                n = t.getContext('2d', { willReadFrequently: !0 });
              } catch (e) {
                n = t.getContext('2d');
              }
              this.captureCanvasContext = n;
            }
            return this.captureCanvasContext;
          }),
          (e.prototype.getCaptureCanvas = function (e) {
            if (!this.captureCanvas) {
              var t = this.createCaptureCanvas(e);
              this.captureCanvas = t;
            }
            return this.captureCanvas;
          }),
          (e.prototype.drawFrameOnCanvas = function (e, t, n) {
            (void 0 === t &&
              (t = {
                sx: 0,
                sy: 0,
                sWidth: e.videoWidth,
                sHeight: e.videoHeight,
                dx: 0,
                dy: 0,
                dWidth: e.videoWidth,
                dHeight: e.videoHeight,
              }),
              void 0 === n && (n = this.captureCanvasContext),
              n.drawImage(
                e,
                t.sx,
                t.sy,
                t.sWidth,
                t.sHeight,
                t.dx,
                t.dy,
                t.dWidth,
                t.dHeight,
              ));
          }),
          (e.prototype.drawImageOnCanvas = function (e, t, n) {
            (void 0 === t &&
              (t = {
                sx: 0,
                sy: 0,
                sWidth: e.naturalWidth,
                sHeight: e.naturalHeight,
                dx: 0,
                dy: 0,
                dWidth: e.naturalWidth,
                dHeight: e.naturalHeight,
              }),
              void 0 === n && (n = this.captureCanvasContext),
              n.drawImage(
                e,
                t.sx,
                t.sy,
                t.sWidth,
                t.sHeight,
                t.dx,
                t.dy,
                t.dWidth,
                t.dHeight,
              ));
          }),
          (e.prototype.decodeBitmap = function (e) {
            try {
              return this.reader.decode(e, this._hints);
            } finally {
              this.reader.reset();
            }
          }),
          (e.prototype.createCaptureCanvas = function (e) {
            if ('undefined' == typeof document)
              return (this._destroyCaptureCanvas(), null);
            var t,
              n,
              i = document.createElement('canvas');
            return (
              void 0 !== e &&
                (e instanceof HTMLVideoElement
                  ? ((t = e.videoWidth), (n = e.videoHeight))
                  : e instanceof HTMLImageElement &&
                    ((t = e.naturalWidth || e.width),
                    (n = e.naturalHeight || e.height))),
              (i.style.width = t + 'px'),
              (i.style.height = n + 'px'),
              (i.width = t),
              (i.height = n),
              i
            );
          }),
          (e.prototype.stopStreams = function () {
            (this.stream &&
              (this.stream.getVideoTracks().forEach(function (e) {
                return e.stop();
              }),
              (this.stream = void 0)),
              !1 === this._stopAsyncDecode && this.stopAsyncDecode(),
              !1 === this._stopContinuousDecode && this.stopContinuousDecode());
          }),
          (e.prototype.reset = function () {
            (this.stopStreams(),
              this._destroyVideoElement(),
              this._destroyImageElement(),
              this._destroyCaptureCanvas());
          }),
          (e.prototype._destroyVideoElement = function () {
            this.videoElement &&
              (void 0 !== this.videoEndedListener &&
                this.videoElement.removeEventListener(
                  'ended',
                  this.videoEndedListener,
                ),
              void 0 !== this.videoPlayingEventListener &&
                this.videoElement.removeEventListener(
                  'playing',
                  this.videoPlayingEventListener,
                ),
              void 0 !== this.videoCanPlayListener &&
                this.videoElement.removeEventListener(
                  'loadedmetadata',
                  this.videoCanPlayListener,
                ),
              this.cleanVideoSource(this.videoElement),
              (this.videoElement = void 0));
          }),
          (e.prototype._destroyImageElement = function () {
            this.imageElement &&
              (void 0 !== this.imageLoadedListener &&
                this.imageElement.removeEventListener(
                  'load',
                  this.imageLoadedListener,
                ),
              (this.imageElement.src = void 0),
              this.imageElement.removeAttribute('src'),
              (this.imageElement = void 0));
          }),
          (e.prototype._destroyCaptureCanvas = function () {
            ((this.captureCanvasContext = void 0),
              (this.captureCanvas = void 0));
          }),
          (e.prototype.addVideoSource = function (e, t) {
            try {
              e.srcObject = t;
            } catch (n) {
              e.src = URL.createObjectURL(t);
            }
          }),
          (e.prototype.cleanVideoSource = function (e) {
            try {
              e.srcObject = null;
            } catch (t) {
              e.src = '';
            }
            this.videoElement.removeAttribute('src');
          }),
          e
        );
      })();
  },
  1009,
  [1010, 1013, 1015, 1016, 1033, 1029, 1032, 1034, 1037],
);
