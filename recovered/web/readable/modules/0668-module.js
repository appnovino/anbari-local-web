// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 668; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    var o = {
      FileSystemDirectory: class {
        constructor() {
          console.warn('expo-file-system is not supported on web');
        }
      },
      FileSystemFile: class {
        constructor() {
          console.warn('expo-file-system is not supported on web');
        }
      },
      FileSystemUploadTask: class {
        start() {
          return (
            console.warn('expo-file-system is not supported on web'),
            Promise.resolve({ body: '', status: 0, headers: {} })
          );
        }
        addListener() {
          return (
            console.warn('expo-file-system is not supported on web'),
            { remove: () => {} }
          );
        }
        release() {
          console.warn('expo-file-system is not supported on web');
        }
        cancel() {
          console.warn('expo-file-system is not supported on web');
        }
      },
      FileSystemDownloadTask: class {
        start() {
          return (
            console.warn('expo-file-system is not supported on web'),
            Promise.resolve(null)
          );
        }
        pause() {
          return (
            console.warn('expo-file-system is not supported on web'),
            { resumeData: '' }
          );
        }
        resume() {
          return (
            console.warn('expo-file-system is not supported on web'),
            Promise.resolve(null)
          );
        }
        addListener() {
          return (
            console.warn('expo-file-system is not supported on web'),
            { remove: () => {} }
          );
        }
        release() {
          console.warn('expo-file-system is not supported on web');
        }
        cancel() {
          console.warn('expo-file-system is not supported on web');
        }
      },
      downloadFileAsync: () => (
        console.warn('expo-file-system is not supported on web'),
        Promise.resolve()
      ),
      pickDirectoryAsync: () => (
        console.warn('expo-file-system is not supported on web'),
        Promise.resolve()
      ),
      pickFileAsync: () => (
        console.warn('expo-file-system is not supported on web'),
        Promise.resolve()
      ),
      get totalDiskSpace() {
        return (console.warn('expo-file-system is not supported on web'), 0);
      },
      get availableDiskSpace() {
        return (console.warn('expo-file-system is not supported on web'), 0);
      },
      get documentDirectory() {
        return (console.warn('expo-file-system is not supported on web'), '');
      },
      get cacheDirectory() {
        return (console.warn('expo-file-system is not supported on web'), '');
      },
      get bundleDirectory() {
        return (console.warn('expo-file-system is not supported on web'), '');
      },
    };
  },
  668,
  [],
);
