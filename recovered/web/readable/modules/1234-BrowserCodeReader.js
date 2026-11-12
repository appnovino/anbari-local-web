// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1234; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (_g, r, _i, a, _m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'BrowserCodeReader', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    var e = r(d[0]),
      t = r(d[1]),
      n = r(d[2]),
      i =
        (this && this.__assign) ||
        function () {
          return (
            (i =
              Object.assign ||
              function (e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            i.apply(this, arguments)
          );
        },
      o =
        (this && this.__awaiter) ||
        function (e, t, n, i) {
          return new (n || (n = Promise))(function (o, c) {
            function s(e) {
              try {
                l(i.next(e));
              } catch (e) {
                c(e);
              }
            }
            function u(e) {
              try {
                l(i.throw(e));
              } catch (e) {
                c(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(s, u);
            }
            l((i = i.apply(e, t || [])).next());
          });
        },
      c =
        (this && this.__generator) ||
        function (e, t) {
          var n,
            i,
            o,
            c = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            },
            s = Object.create(
              ('function' == typeof Iterator ? Iterator : Object).prototype,
            );
          return (
            (s.next = u(0)),
            (s.throw = u(1)),
            (s.return = u(2)),
            'function' == typeof Symbol &&
              (s[Symbol.iterator] = function () {
                return this;
              }),
            s
          );
          function u(e) {
            return function (t) {
              return l([e, t]);
            };
          }
          function l(u) {
            if (n) throw new TypeError('Generator is already executing.');
            for (; s && ((s = 0), u[0] && (c = 0)), c; )
              try {
                if (
                  ((n = 1),
                  i &&
                    (o =
                      2 & u[0]
                        ? i.return
                        : u[0]
                          ? i.throw || ((o = i.return) && o.call(i), 0)
                          : i.next) &&
                    !(o = o.call(i, u[1])).done)
                )
                  return o;
                switch (((i = 0), o && (u = [2 & u[0], o.value]), u[0])) {
                  case 0:
                  case 1:
                    o = u;
                    break;
                  case 4:
                    return (c.label++, { value: u[1], done: !1 });
                  case 5:
                    (c.label++, (i = u[1]), (u = [0]));
                    continue;
                  case 7:
                    ((u = c.ops.pop()), c.trys.pop());
                    continue;
                  default:
                    if (
                      !((o = c.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== u[0] && 2 !== u[0]))
                    ) {
                      c = 0;
                      continue;
                    }
                    if (3 === u[0] && (!o || (u[1] > o[0] && u[1] < o[3]))) {
                      c.label = u[1];
                      break;
                    }
                    if (6 === u[0] && c.label < o[1]) {
                      ((c.label = o[1]), (o = u));
                      break;
                    }
                    if (o && c.label < o[2]) {
                      ((c.label = o[2]), c.ops.push(u));
                      break;
                    }
                    (o[2] && c.ops.pop(), c.trys.pop());
                    continue;
                }
                u = t.call(e, c);
              } catch (e) {
                ((u = [6, e]), (i = 0));
              } finally {
                n = o = 0;
              }
            if (5 & u[0]) throw u[1];
            return { value: u[0] ? u[1] : void 0, done: !0 };
          }
        },
      s =
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
      u = {
        delayBetweenScanAttempts: 500,
        delayBetweenScanSuccess: 500,
        tryPlayVideoTimeout: 5e3,
      },
      l = (function () {
        function l(e, t, n) {
          (void 0 === t && (t = new Map()),
            void 0 === n && (n = {}),
            (this.reader = e),
            (this.hints = t),
            (this.options = i(i({}, u), n)));
        }
        return (
          Object.defineProperty(l.prototype, 'possibleFormats', {
            set: function (t) {
              this.hints.set(e.DecodeHintType.POSSIBLE_FORMATS, t);
            },
            enumerable: !1,
            configurable: !0,
          }),
          (l.addVideoSource = function (e, t) {
            try {
              e.srcObject = t;
            } catch (e) {
              console.error('got interrupted by new loading request');
            }
          }),
          (l.mediaStreamSetTorch = function (e, t) {
            return o(this, void 0, void 0, function () {
              return c(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [
                      4,
                      e.applyConstraints({
                        advanced: [
                          { fillLightMode: t ? 'flash' : 'off', torch: t },
                        ],
                      }),
                    ];
                  case 1:
                    return (n.sent(), [2]);
                }
              });
            });
          }),
          (l.mediaStreamIsTorchCompatible = function (e) {
            var t,
              n,
              i = e.getVideoTracks();
            try {
              for (var o = s(i), c = o.next(); !c.done; c = o.next()) {
                var u = c.value;
                if (l.mediaStreamIsTorchCompatibleTrack(u)) return !0;
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                c && !c.done && (n = o.return) && n.call(o);
              } finally {
                if (t) throw t.error;
              }
            }
            return !1;
          }),
          (l.mediaStreamIsTorchCompatibleTrack = function (e) {
            try {
              return 'torch' in e.getCapabilities();
            } catch (e) {
              return (
                console.error(e),
                console.warn(
                  'Your browser may be not fully compatible with WebRTC and/or ImageCapture specs. Torch will not be available.',
                ),
                !1
              );
            }
          }),
          (l.isVideoPlaying = function (e) {
            return e.currentTime > 0 && !e.paused && e.readyState > 2;
          }),
          (l.getMediaElement = function (t, n) {
            var i = document.getElementById(t);
            if (!i)
              throw new e.ArgumentException(
                "element with id '".concat(t, "' not found"),
              );
            if (i.nodeName.toLowerCase() !== n.toLowerCase())
              throw new e.ArgumentException(
                "element with id '"
                  .concat(t, "' must be an ")
                  .concat(n, ' element'),
              );
            return i;
          }),
          (l.createVideoElement = function (e) {
            if (e instanceof HTMLVideoElement) return e;
            if ('string' == typeof e) return l.getMediaElement(e, 'video');
            if (!e && 'undefined' != typeof document) {
              var t = document.createElement('video');
              return ((t.width = 200), (t.height = 200), t);
            }
            throw new Error("Couldn't get videoElement from videoSource!");
          }),
          (l.prepareImageElement = function (e) {
            if (e instanceof HTMLImageElement) return e;
            if ('string' == typeof e) return l.getMediaElement(e, 'img');
            if (void 0 === e) {
              var t = document.createElement('img');
              return ((t.width = 200), (t.height = 200), t);
            }
            throw new Error("Couldn't get imageElement from imageSource!");
          }),
          (l.prepareVideoElement = function (e) {
            var t = l.createVideoElement(e);
            return (
              t.setAttribute('autoplay', 'true'),
              t.setAttribute('muted', 'true'),
              t.setAttribute('playsinline', 'true'),
              t
            );
          }),
          (l.isImageLoaded = function (e) {
            return !!e.complete && 0 !== e.naturalWidth;
          }),
          (l.createBinaryBitmapFromCanvas = function (n) {
            var i = new t.HTMLCanvasElementLuminanceSource(n),
              o = new e.HybridBinarizer(i);
            return new e.BinaryBitmap(o);
          }),
          (l.drawImageOnCanvas = function (e, t) {
            e.drawImage(t, 0, 0);
          }),
          (l.getMediaElementDimensions = function (e) {
            if (e instanceof HTMLVideoElement)
              return { height: e.videoHeight, width: e.videoWidth };
            if (e instanceof HTMLImageElement)
              return {
                height: e.naturalHeight || e.height,
                width: e.naturalWidth || e.width,
              };
            throw new Error("Couldn't find the Source's dimensions!");
          }),
          (l.createCaptureCanvas = function (t) {
            if (!t)
              throw new e.ArgumentException(
                'Cannot create a capture canvas without a media element.',
              );
            if ('undefined' == typeof document)
              throw new Error(
                'The page "Document" is undefined, make sure you\'re running in a browser.',
              );
            var n = document.createElement('canvas'),
              i = l.getMediaElementDimensions(t),
              o = i.width,
              c = i.height;
            return (
              (n.style.width = o + 'px'),
              (n.style.height = c + 'px'),
              (n.width = o),
              (n.height = c),
              n
            );
          }),
          (l.tryPlayVideo = function (e) {
            return o(this, void 0, void 0, function () {
              var t;
              return c(this, function (n) {
                switch (n.label) {
                  case 0:
                    if (null == e ? void 0 : e.ended)
                      return (
                        console.error('Trying to play video that has ended.'),
                        [2, !1]
                      );
                    if (l.isVideoPlaying(e))
                      return (
                        console.warn(
                          'Trying to play video that is already playing.',
                        ),
                        [2, !0]
                      );
                    n.label = 1;
                  case 1:
                    return (n.trys.push([1, 3, , 4]), [4, e.play()]);
                  case 2:
                    return (n.sent(), [2, !0]);
                  case 3:
                    return (
                      (t = n.sent()),
                      console.warn('It was not possible to play the video.', t),
                      [2, !1]
                    );
                  case 4:
                    return [2];
                }
              });
            });
          }),
          (l.createCanvasFromMediaElement = function (e) {
            var t = l.createCaptureCanvas(e),
              n = t.getContext('2d');
            if (!n) throw new Error("Couldn't find Canvas 2D Context.");
            return (l.drawImageOnCanvas(n, e), t);
          }),
          (l.createBinaryBitmapFromMediaElem = function (e) {
            var t = l.createCanvasFromMediaElement(e);
            return l.createBinaryBitmapFromCanvas(t);
          }),
          (l.destroyImageElement = function (e) {
            ((e.src = ''), e.removeAttribute('src'));
          }),
          (l.listVideoInputDevices = function () {
            return o(this, void 0, void 0, function () {
              var e, t, i, o, u, l, f, h, m, p, v, y;
              return c(this, function (c) {
                switch (c.label) {
                  case 0:
                    if (!(0, n.hasNavigator)())
                      throw new Error(
                        "Can't enumerate devices, navigator is not present.",
                      );
                    if (!(0, n.canEnumerateDevices)())
                      throw new Error(
                        "Can't enumerate devices, method not supported.",
                      );
                    return [4, navigator.mediaDevices.enumerateDevices()];
                  case 1:
                    ((e = c.sent()), (t = []));
                    try {
                      for (i = s(e), o = i.next(); !o.done; o = i.next())
                        ((u = o.value),
                          'videoinput' ===
                            (l = 'video' === u.kind ? 'videoinput' : u.kind) &&
                            ((f = u.deviceId || u.id),
                            (h =
                              u.label || 'Video device '.concat(t.length + 1)),
                            (m = u.groupId),
                            (p = {
                              deviceId: f,
                              label: h,
                              kind: l,
                              groupId: m,
                            }),
                            t.push(p)));
                    } catch (e) {
                      v = { error: e };
                    } finally {
                      try {
                        o && !o.done && (y = i.return) && y.call(i);
                      } finally {
                        if (v) throw v.error;
                      }
                    }
                    return [2, t];
                }
              });
            });
          }),
          (l.findDeviceById = function (e) {
            return o(this, void 0, void 0, function () {
              var t;
              return c(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, l.listVideoInputDevices()];
                  case 1:
                    return (t = n.sent())
                      ? [
                          2,
                          t.find(function (t) {
                            return t.deviceId === e;
                          }),
                        ]
                      : [2];
                }
              });
            });
          }),
          (l.cleanVideoSource = function (e) {
            if (e) {
              try {
                e.srcObject = null;
              } catch (t) {
                e.src = '';
              }
              e && e.removeAttribute('src');
            }
          }),
          (l.releaseAllStreams = function () {
            (0 !== l.streamTracker.length &&
              l.streamTracker.forEach(function (e) {
                e.getTracks().forEach(function (e) {
                  return e.stop();
                });
              }),
              (l.streamTracker = []));
          }),
          (l.playVideoOnLoadAsync = function (e, t) {
            return o(this, void 0, void 0, function () {
              return c(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, l.tryPlayVideo(e)];
                  case 1:
                    return n.sent()
                      ? [2, !0]
                      : [
                          2,
                          new Promise(function (n, i) {
                            var o = setTimeout(function () {
                                l.isVideoPlaying(e) ||
                                  (i(!1), e.removeEventListener('canplay', c));
                              }, t),
                              c = function () {
                                l.tryPlayVideo(e).then(function (t) {
                                  (clearTimeout(o),
                                    e.removeEventListener('canplay', c),
                                    n(t));
                                });
                              };
                            e.addEventListener('canplay', c);
                          }),
                        ];
                }
              });
            });
          }),
          (l.attachStreamToVideo = function (e, t) {
            return o(this, arguments, void 0, function (e, t, n) {
              var i;
              return (
                void 0 === n && (n = 5e3),
                c(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return (
                        (i = l.prepareVideoElement(t)),
                        l.addVideoSource(i, e),
                        [4, l.playVideoOnLoadAsync(i, n)]
                      );
                    case 1:
                      return (o.sent(), [2, i]);
                  }
                })
              );
            });
          }),
          (l._waitImageLoad = function (e) {
            return new Promise(function (t, n) {
              var i = setTimeout(function () {
                  l.isImageLoaded(e) || (e.removeEventListener('load', o), n());
                }, 1e4),
                o = function () {
                  (clearTimeout(i), e.removeEventListener('load', o), t());
                };
              e.addEventListener('load', o);
            });
          }),
          (l.checkCallbackFnOrThrow = function (t) {
            if (!t)
              throw new e.ArgumentException(
                '`callbackFn` is a required parameter, you cannot capture results without it.',
              );
          }),
          (l.disposeMediaStream = function (e) {
            e.getVideoTracks().forEach(function (e) {
              return e.stop();
            });
          }),
          (l.prototype.decode = function (e) {
            var t = l.createCanvasFromMediaElement(e);
            return this.decodeFromCanvas(t);
          }),
          (l.prototype.decodeBitmap = function (e) {
            return this.reader.decode(e, this.hints);
          }),
          (l.prototype.decodeFromCanvas = function (e) {
            var t = l.createBinaryBitmapFromCanvas(e);
            return this.decodeBitmap(t);
          }),
          (l.prototype.decodeFromImageElement = function (t) {
            return o(this, void 0, void 0, function () {
              var n;
              return c(this, function (i) {
                switch (i.label) {
                  case 0:
                    if (!t)
                      throw new e.ArgumentException(
                        'An image element must be provided.',
                      );
                    return (
                      (n = l.prepareImageElement(t)),
                      [4, this._decodeOnLoadImage(n)]
                    );
                  case 1:
                    return [2, i.sent()];
                }
              });
            });
          }),
          (l.prototype.decodeFromImageUrl = function (t) {
            return o(this, void 0, void 0, function () {
              var n;
              return c(this, function (i) {
                switch (i.label) {
                  case 0:
                    if (!t)
                      throw new e.ArgumentException('An URL must be provided.');
                    (((n = l.prepareImageElement()).src = t), (i.label = 1));
                  case 1:
                    return (
                      i.trys.push([1, , 3, 4]),
                      [4, this.decodeFromImageElement(n)]
                    );
                  case 2:
                    return [2, i.sent()];
                  case 3:
                    return (l.destroyImageElement(n), [7]);
                  case 4:
                    return [2];
                }
              });
            });
          }),
          (l.prototype.decodeFromConstraints = function (e, t, n) {
            return o(this, void 0, void 0, function () {
              var i, o;
              return c(this, function (c) {
                switch (c.label) {
                  case 0:
                    return (
                      l.checkCallbackFnOrThrow(n),
                      [4, this.getUserMedia(e)]
                    );
                  case 1:
                    ((i = c.sent()), (c.label = 2));
                  case 2:
                    return (
                      c.trys.push([2, 4, , 5]),
                      [4, this.decodeFromStream(i, t, n)]
                    );
                  case 3:
                    return [2, c.sent()];
                  case 4:
                    throw ((o = c.sent()), l.disposeMediaStream(i), o);
                  case 5:
                    return [2];
                }
              });
            });
          }),
          (l.prototype.decodeFromStream = function (e, t, n) {
            return o(this, void 0, void 0, function () {
              var u,
                f,
                h,
                m,
                p,
                v,
                y,
                w,
                g = this;
              return c(this, function (b) {
                switch (b.label) {
                  case 0:
                    return (
                      l.checkCallbackFnOrThrow(n),
                      (u = this.options.tryPlayVideoTimeout),
                      [4, l.attachStreamToVideo(e, t, u)]
                    );
                  case 1:
                    return (
                      (f = b.sent()),
                      (h = function () {
                        (l.disposeMediaStream(e), l.cleanVideoSource(f));
                      }),
                      (m = this.scan(f, n, h)),
                      (p = e.getVideoTracks()),
                      (v = i(i({}, m), {
                        stop: function () {
                          m.stop();
                        },
                        streamVideoConstraintsApply: function (e, t) {
                          return o(this, void 0, void 0, function () {
                            var n, i, o, u, l, f;
                            return c(this, function (c) {
                              switch (c.label) {
                                case 0:
                                  ((n = t ? p.filter(t) : p), (c.label = 1));
                                case 1:
                                  (c.trys.push([1, 6, 7, 8]),
                                    (i = s(n)),
                                    (o = i.next()),
                                    (c.label = 2));
                                case 2:
                                  return o.done
                                    ? [3, 5]
                                    : [4, o.value.applyConstraints(e)];
                                case 3:
                                  (c.sent(), (c.label = 4));
                                case 4:
                                  return ((o = i.next()), [3, 2]);
                                case 5:
                                  return [3, 8];
                                case 6:
                                  return (
                                    (u = c.sent()),
                                    (l = { error: u }),
                                    [3, 8]
                                  );
                                case 7:
                                  try {
                                    o && !o.done && (f = i.return) && f.call(i);
                                  } finally {
                                    if (l) throw l.error;
                                  }
                                  return [7];
                                case 8:
                                  return [2];
                              }
                            });
                          });
                        },
                        streamVideoConstraintsGet: function (e) {
                          return p.find(e).getConstraints();
                        },
                        streamVideoSettingsGet: function (e) {
                          return p.find(e).getSettings();
                        },
                        streamVideoCapabilitiesGet: function (e) {
                          return p.find(e).getCapabilities();
                        },
                      })),
                      l.mediaStreamIsTorchCompatible(e) &&
                        ((y =
                          null == p
                            ? void 0
                            : p.find(function (e) {
                                return l.mediaStreamIsTorchCompatibleTrack(e);
                              })),
                        (w = function (e) {
                          return o(g, void 0, void 0, function () {
                            return c(this, function (t) {
                              switch (t.label) {
                                case 0:
                                  return [4, l.mediaStreamSetTorch(y, e)];
                                case 1:
                                  return (t.sent(), [2]);
                              }
                            });
                          });
                        }),
                        (v.switchTorch = w),
                        (v.stop = function () {
                          return o(g, void 0, void 0, function () {
                            return c(this, function (e) {
                              switch (e.label) {
                                case 0:
                                  return (m.stop(), [4, w(!1)]);
                                case 1:
                                  return (e.sent(), [2]);
                              }
                            });
                          });
                        })),
                      [2, v]
                    );
                }
              });
            });
          }),
          (l.prototype.decodeFromVideoDevice = function (e, t, n) {
            return o(this, void 0, void 0, function () {
              var i;
              return c(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      l.checkCallbackFnOrThrow(n),
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
          (l.prototype.decodeFromVideoElement = function (t, n) {
            return o(this, void 0, void 0, function () {
              var i, o;
              return c(this, function (c) {
                switch (c.label) {
                  case 0:
                    if ((l.checkCallbackFnOrThrow(n), !t))
                      throw new e.ArgumentException(
                        'A video element must be provided.',
                      );
                    return (
                      (i = l.prepareVideoElement(t)),
                      (o = this.options.tryPlayVideoTimeout),
                      [4, l.playVideoOnLoadAsync(i, o)]
                    );
                  case 1:
                    return (c.sent(), [2, this.scan(i, n)]);
                }
              });
            });
          }),
          (l.prototype.decodeFromVideoUrl = function (t, n) {
            return o(this, void 0, void 0, function () {
              var i, o, s;
              return c(this, function (c) {
                switch (c.label) {
                  case 0:
                    if ((l.checkCallbackFnOrThrow(n), !t))
                      throw new e.ArgumentException('An URL must be provided.');
                    return (
                      ((i = l.prepareVideoElement()).src = t),
                      (o = function () {
                        l.cleanVideoSource(i);
                      }),
                      (s = this.options.tryPlayVideoTimeout),
                      [4, l.playVideoOnLoadAsync(i, s)]
                    );
                  case 1:
                    return (c.sent(), [2, this.scan(i, n, o)]);
                }
              });
            });
          }),
          (l.prototype.decodeOnceFromConstraints = function (e, t) {
            return o(this, void 0, void 0, function () {
              var n;
              return c(this, function (i) {
                switch (i.label) {
                  case 0:
                    return [4, this.getUserMedia(e)];
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
          (l.prototype.decodeOnceFromStream = function (e, t) {
            return o(this, void 0, void 0, function () {
              var n, i;
              return c(this, function (o) {
                switch (o.label) {
                  case 0:
                    return ((n = Boolean(t)), [4, l.attachStreamToVideo(e, t)]);
                  case 1:
                    ((i = o.sent()), (o.label = 2));
                  case 2:
                    return (
                      o.trys.push([2, , 4, 5]),
                      [4, this.scanOneResult(i)]
                    );
                  case 3:
                    return [2, o.sent()];
                  case 4:
                    return (n || l.cleanVideoSource(i), [7]);
                  case 5:
                    return [2];
                }
              });
            });
          }),
          (l.prototype.decodeOnceFromVideoDevice = function (e, t) {
            return o(this, void 0, void 0, function () {
              var n;
              return c(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
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
          (l.prototype.decodeOnceFromVideoElement = function (t) {
            return o(this, void 0, void 0, function () {
              var n, i;
              return c(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (!t)
                      throw new e.ArgumentException(
                        'A video element must be provided.',
                      );
                    return (
                      (n = l.prepareVideoElement(t)),
                      (i = this.options.tryPlayVideoTimeout),
                      [4, l.playVideoOnLoadAsync(n, i)]
                    );
                  case 1:
                    return (o.sent(), [4, this.scanOneResult(n)]);
                  case 2:
                    return [2, o.sent()];
                }
              });
            });
          }),
          (l.prototype.decodeOnceFromVideoUrl = function (t) {
            return o(this, void 0, void 0, function () {
              var n, i;
              return c(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (!t)
                      throw new e.ArgumentException('An URL must be provided.');
                    (((n = l.prepareVideoElement()).src = t),
                      (i = this.decodeOnceFromVideoElement(n)),
                      (o.label = 1));
                  case 1:
                    return (o.trys.push([1, , 3, 4]), [4, i]);
                  case 2:
                    return [2, o.sent()];
                  case 3:
                    return (l.cleanVideoSource(n), [7]);
                  case 4:
                    return [2];
                }
              });
            });
          }),
          (l.prototype.scanOneResult = function (t, n, i, o) {
            var c = this;
            return (
              void 0 === n && (n = !0),
              void 0 === i && (i = !0),
              void 0 === o && (o = !0),
              new Promise(function (s, u) {
                c.scan(t, function (t, c, l) {
                  if (t) return (s(t), void l.stop());
                  if (c) {
                    if (c instanceof e.NotFoundException && n) return;
                    if (c instanceof e.ChecksumException && i) return;
                    if (c instanceof e.FormatException && o) return;
                    (l.stop(), u(c));
                  }
                });
              })
            );
          }),
          (l.prototype.scan = function (t, n, i) {
            var o = this;
            l.checkCallbackFnOrThrow(n);
            var c,
              s = l.createCaptureCanvas(t);
            try {
              c = s.getContext('2d', { willReadFrequently: !0 });
            } catch (e) {
              c = s.getContext('2d');
            }
            if (!c)
              throw new Error(
                "Couldn't create canvas for visual element scan.",
              );
            var u,
              f = function () {
                ((c = void 0), (s = void 0));
              },
              h = !1,
              m = {
                stop: function () {
                  ((h = !0), clearTimeout(u), f(), i && i());
                },
              },
              p = function () {
                if (!h)
                  try {
                    l.drawImageOnCanvas(c, t);
                    var v = o.decodeFromCanvas(s);
                    (n(v, void 0, m),
                      (u = setTimeout(p, o.options.delayBetweenScanSuccess)));
                  } catch (t) {
                    n(void 0, t, m);
                    var y = t instanceof e.ChecksumException,
                      w = t instanceof e.FormatException,
                      g = t instanceof e.NotFoundException;
                    if (y || w || g)
                      return void (u = setTimeout(
                        p,
                        o.options.delayBetweenScanAttempts,
                      ));
                    (f(), i && i(t));
                  }
              };
            return (p(), m);
          }),
          (l.prototype._decodeOnLoadImage = function (e) {
            return o(this, void 0, void 0, function () {
              return c(this, function (t) {
                switch (t.label) {
                  case 0:
                    return l.isImageLoaded(e)
                      ? [3, 2]
                      : [4, l._waitImageLoad(e)];
                  case 1:
                    (t.sent(), (t.label = 2));
                  case 2:
                    return [2, this.decode(e)];
                }
              });
            });
          }),
          (l.prototype.getUserMedia = function (e) {
            return o(this, void 0, void 0, function () {
              var t;
              return c(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, navigator.mediaDevices.getUserMedia(e)];
                  case 1:
                    return ((t = n.sent()), l.streamTracker.push(t), [2, t]);
                }
              });
            });
          }),
          (l.streamTracker = []),
          l
        );
      })();
  },
  1234,
  [1006, 1230, 1235],
);
