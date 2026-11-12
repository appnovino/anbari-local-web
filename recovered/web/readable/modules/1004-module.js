// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1004; original bundle: index-78b7861318299fb76514da275e2e8dad.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    const t = {
      status: r(d[0]).PermissionStatus.UNDETERMINED,
      canAskAgain: !0,
      granted: !1,
      expires: 'never',
    };
    var n = {
      get CHANGE_LISTENER_NAME() {
        return 'mediaLibraryDidChange';
      },
      get MediaType() {
        return {
          audio: 'audio',
          photo: 'photo',
          video: 'video',
          unknown: 'unknown',
        };
      },
      get SortBy() {
        return {
          default: 'default',
          mediaType: 'mediaType',
          width: 'width',
          height: 'height',
          creationTime: 'creationTime',
          modificationTime: 'modificationTime',
          duration: 'duration',
        };
      },
      getPermissionsAsync: async (n) => t,
      requestPermissionsAsync: async (n) => t,
    };
  },
  1004,
  [313],
);
