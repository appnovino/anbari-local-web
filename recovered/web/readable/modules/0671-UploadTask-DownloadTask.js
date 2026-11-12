// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 671; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'UploadTask', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }),
      Object.defineProperty(_e, 'DownloadTask', {
        enumerable: !0,
        get: function () {
          return v;
        },
      }));
    var t,
      s = r(d[0]),
      e = r(d[1]),
      n = (t = e) && t.__esModule ? t : { default: t },
      o = r(d[2]);
    function h(t) {
      const s = new Error(t ?? 'The operation was aborted.');
      return ((s.name = 'AbortError'), s);
    }
    function _(t, s, e) {
      if (!s.includes(t)) throw new Error(`Cannot call ${e}() in state "${t}"`);
    }
    function l(t, s) {
      if (t?.aborted) throw h();
      if (t) {
        const e = () => s();
        return (t.addEventListener('abort', e, { once: !0 }), e);
      }
    }
    function u(t, s) {
      if (t) return s(t);
    }
    function c(t, s, e) {
      (s?.remove(), e && t && t.removeEventListener('abort', e));
    }
    class p {
      _state = 'idle';
      constructor(t, s, e) {
        ((this._nativeTask = new n.default.FileSystemUploadTask()),
          (this._file = t),
          (this._url = s),
          (this._options = e));
      }
      get state() {
        return this._state;
      }
      async uploadAsync() {
        (_(this._state, ['idle'], 'uploadAsync'), (this._state = 'active'));
        try {
          ((this._abortHandler = l(this._options?.signal, () => this.cancel())),
            (this._subscription = u(this._options?.onProgress, (t) =>
              this.addListener('progress', t),
            )));
          const t = {
              httpMethod: this._options?.httpMethod || 'POST',
              uploadType: this._options?.uploadType ?? 0,
              headers: this._options?.headers,
              fieldName: this._options?.fieldName,
              mimeType: this._options?.mimeType,
              parameters: this._options?.parameters,
              sessionType: this._options?.sessionType,
            },
            s = await this._nativeTask.start(this._url, this._file, t);
          if (
            ((this._state = 'completed'),
            this._options?.onProgress && this._file.exists)
          ) {
            const t = this._file.size ?? 0;
            t > 0 && this._options.onProgress({ bytesSent: t, totalBytes: t });
          }
          return s;
        } catch (t) {
          if (this._options?.signal?.aborted)
            throw ((this._state = 'cancelled'), h());
          if ('cancelled' === this.state) throw t;
          throw ((this._state = 'error'), t);
        } finally {
          (c(this._options?.signal, this._subscription, this._abortHandler),
            (this._subscription = void 0),
            (this._abortHandler = void 0));
        }
      }
      addListener(t, s) {
        return this._nativeTask.addListener(t, s);
      }
      release() {
        this._nativeTask.release();
      }
      cancel() {
        ['completed', 'cancelled', 'error'].includes(this._state) ||
          ((this._state = 'cancelled'),
          this._nativeTask.cancel(),
          c(this._options?.signal, this._subscription, this._abortHandler),
          (this._subscription = void 0),
          (this._abortHandler = void 0));
      }
    }
    class v {
      _state = 'idle';
      constructor(t, s, e) {
        ((this._nativeTask = new n.default.FileSystemDownloadTask()),
          (this._url = t),
          (this._destination = s),
          (this._options = e));
      }
      get state() {
        return this._state;
      }
      async downloadAsync() {
        (_(this._state, ['idle'], 'downloadAsync'),
          (this._state = 'active'),
          (this._pauseRequest = void 0));
        const t = this._runDownloadOperation(() =>
          this._nativeTask.start(this._url, this._destination, {
            headers: this._options?.headers,
            sessionType: this._options?.sessionType,
          }),
        );
        return ((this._inFlightOperation = t), t);
      }
      pause() {
        (_(this._state, ['active'], 'pause'),
          (this._pauseRequest = Promise.resolve(this._nativeTask.pause()).then(
            (t) => {
              this._resumeData = t?.resumeData ?? void 0;
            },
          )));
      }
      async pauseAsync() {
        (this.pause(), await this._pauseRequest, await this._inFlightOperation);
      }
      async resumeAsync() {
        if ((_(this._state, ['paused'], 'resumeAsync'), !this._resumeData))
          throw new Error(
            'No resume data available. Was the download paused before any data was received?',
          );
        ((this._state = 'active'), (this._pauseRequest = void 0));
        const t = this._runDownloadOperation(() =>
          this._nativeTask.resume(
            this._url,
            this._destination,
            this._resumeData,
            {
              headers: this._options?.headers,
              sessionType: this._options?.sessionType,
            },
          ),
        );
        return ((this._inFlightOperation = t), t);
      }
      addListener(t, s) {
        return this._nativeTask.addListener(t, s);
      }
      release() {
        this._nativeTask.release();
      }
      cancel() {
        ['completed', 'cancelled', 'error'].includes(this._state) ||
          ((this._state = 'cancelled'),
          (this._pauseRequest = void 0),
          this._nativeTask.cancel(),
          c(this._options?.signal, this._subscription, this._abortHandler),
          (this._subscription = void 0),
          (this._abortHandler = void 0));
      }
      savable() {
        return (
          _(this._state, ['paused'], 'savable'),
          {
            url: this._url,
            fileUri: this._destination.uri,
            isDirectory: this._destination instanceof s.Directory,
            headers: this._options?.headers,
            resumeData: this._resumeData,
          }
        );
      }
      static fromSavable(t, e) {
        if (!t.resumeData)
          throw new Error(
            'Cannot restore task: DownloadPauseState has no resumeData',
          );
        const n = t.isDirectory
            ? new s.Directory(t.fileUri)
            : new o.File(t.fileUri),
          h =
            e || t.headers
              ? { ...e, headers: { ...t.headers, ...e?.headers } }
              : void 0,
          _ = new v(t.url, n, h);
        return ((_._resumeData = t.resumeData), (_._state = 'paused'), _);
      }
      async _runDownloadOperation(t) {
        try {
          ((this._abortHandler = l(this._options?.signal, () => this.cancel())),
            (this._subscription = u(this._options?.onProgress, (t) =>
              this.addListener('progress', t),
            )));
          const s = await t();
          if (s) {
            ((this._state = 'completed'), (this._resumeData = void 0));
            const t = new o.File(s);
            return (this._emitFinalProgressEvent(t.size), t);
          }
          return (await this._pauseRequest, (this._state = 'paused'), null);
        } catch (t) {
          if (this._options?.signal?.aborted)
            throw ((this._state = 'cancelled'), h());
          if ('cancelled' === this.state) throw t;
          throw ((this._state = 'error'), t);
        } finally {
          (c(this._options?.signal, this._subscription, this._abortHandler),
            (this._subscription = void 0),
            (this._abortHandler = void 0),
            (this._inFlightOperation = void 0));
        }
      }
      _emitFinalProgressEvent(t) {
        this._options?.onProgress &&
          t > 0 &&
          this._options.onProgress({ bytesWritten: t, totalBytes: t });
      }
    }
  },
  671,
  [667, 668, 669],
);
