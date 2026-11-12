// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 643; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }));
    var e,
      t = r(d[0]),
      s = r(d[1]),
      n = (e = s) && e.__esModule ? e : { default: e },
      u = r(d[2]);
    class c extends t.SharedObject {
      get currentTask() {
        return (
          this._currentTask ||
            (this._currentTask = new Promise((e) => e(this.loader()))),
          this._currentTask
        );
      }
      set currentTask(e) {
        this._currentTask = e;
      }
      constructor(e) {
        (super(),
          (this.loader = e ?? (() => document.createElement('canvas'))));
      }
      resize(e) {
        return this.addTask((t) => (0, u.resize)(t, e));
      }
      rotate(e) {
        return this.addTask((t) => (0, u.rotate)(t, e));
      }
      flip(e) {
        return this.addTask((t) => (0, u.flip)(t, e));
      }
      crop(e) {
        return this.addTask((t) => (0, u.crop)(t, e));
      }
      extent(e) {
        return this.addTask((t) => (0, u.extent)(t, e));
      }
      reset() {
        return (
          (this.currentTask = new Promise((e) => e(this.loader()))),
          this
        );
      }
      async renderAsync() {
        const e = await this.currentTask,
          t = document.createElement('canvas'),
          s = t.getContext('2d');
        return (
          (t.width = e.width),
          (t.height = e.height),
          s?.drawImage(e, 0, 0),
          new Promise((s) => {
            e.toBlob((u) => {
              const c = u ? URL.createObjectURL(u) : e.toDataURL(),
                h = new n.default(c, t);
              s(h);
            }, 'image/png');
          })
        );
      }
      addTask(e) {
        return ((this.currentTask = this.currentTask.then((t) => e(t))), this);
      }
    }
  },
  643,
  [313, 644, 646],
);
