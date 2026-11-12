// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 635; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.getCameraPermissionsAsync = y),
      (_e.getMediaLibraryPermissionsAsync = f),
      (_e.requestCameraPermissionsAsync = b),
      (_e.requestMediaLibraryPermissionsAsync = P),
      Object.defineProperty(_e, 'useMediaLibraryPermissions', {
        enumerable: !0,
        get: function () {
          return w;
        },
      }),
      Object.defineProperty(_e, 'useCameraPermissions', {
        enumerable: !0,
        get: function () {
          return A;
        },
      }),
      (_e.getPendingResultAsync = async function () {
        if (o.default.getPendingResultAsync)
          return o.default.getPendingResultAsync();
        return null;
      }),
      (_e.launchCameraAsync = async function (e = {}) {
        if (!o.default.launchCameraAsync)
          throw new t.UnavailabilityError('ImagePicker', 'launchCameraAsync');
        const n = (0, u.mapDeprecatedOptions)(e);
        return await o.default.launchCameraAsync(l(n));
      }),
      (_e.launchImageLibraryAsync = async function (e = {}) {
        const n = (0, u.mapDeprecatedOptions)(e);
        if (!o.default.launchImageLibraryAsync)
          throw new t.UnavailabilityError(
            'ImagePicker',
            'launchImageLibraryAsync',
          );
        n?.allowsEditing &&
          n.allowsMultipleSelection &&
          console.warn(
            "[expo-image-picker] `allowsEditing` is not supported when `allowsMultipleSelection` is enabled and will be ignored.Disable either 'allowsEditing' or 'allowsMultipleSelection' in 'launchImageLibraryAsync' to fix this warning.",
          );
        return await o.default.launchImageLibraryAsync(n);
      }),
      Object.defineProperty(_e, 'PermissionStatus', {
        enumerable: !0,
        get: function () {
          return n.PermissionStatus;
        },
      }));
    var e,
      n = r(d[0]),
      t = r(d[1]),
      s = r(d[2]),
      o = (e = s) && e.__esModule ? e : { default: e },
      u = r(d[3]),
      c = r(d[4]);
    function l(e) {
      const { aspect: n, quality: s, videoMaxDuration: o } = e;
      if (null != n) {
        const [e, s] = n;
        if (e <= 0 || s <= 0)
          throw new t.CodedError(
            'ERR_INVALID_ARGUMENT',
            `Invalid aspect ratio values ${e}:${s}. Provide positive numbers.`,
          );
      }
      if (s && (s < 0 || s > 1))
        throw new t.CodedError(
          'ERR_INVALID_ARGUMENT',
          `Invalid 'quality' value ${s}. Provide a value between 0 and 1.`,
        );
      if (o && o < 0)
        throw new t.CodedError(
          'ERR_INVALID_ARGUMENT',
          `Invalid 'videoMaxDuration' value ${o}. Provide a non-negative number.`,
        );
      return e;
    }
    async function y() {
      return o.default.getCameraPermissionsAsync();
    }
    async function f(e = !1) {
      return o.default.getMediaLibraryPermissionsAsync(e);
    }
    async function b() {
      return o.default.requestCameraPermissionsAsync();
    }
    async function P(e = !1) {
      return (0, o.default.requestMediaLibraryPermissionsAsync)(e);
    }
    Object.keys(c).forEach(function (e) {
      'default' === e ||
        Object.prototype.hasOwnProperty.call(_e, e) ||
        Object.defineProperty(_e, e, {
          enumerable: !0,
          get: function () {
            return c[e];
          },
        });
    });
    const w = (0, n.createPermissionHook)({
        getMethod: (e) => f(e?.writeOnly),
        requestMethod: (e) => P(e?.writeOnly),
      }),
      A = (0, n.createPermissionHook)({ getMethod: y, requestMethod: b });
  },
  635,
  [313, 266, 636, 638, 637],
);
