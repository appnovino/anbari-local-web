// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 996; original bundle: __common-9cdd8d1b62d3893a7e9d868fab7ed9b5.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'getDevicePushTokenAsync', {
        enumerable: !0,
        get: function () {
          return n.getDevicePushTokenAsync;
        },
      }),
      Object.defineProperty(e, 'unregisterForNotificationsAsync', {
        enumerable: !0,
        get: function () {
          return o.unregisterForNotificationsAsync;
        },
      }),
      Object.defineProperty(e, 'getExpoPushTokenAsync', {
        enumerable: !0,
        get: function () {
          return c.getExpoPushTokenAsync;
        },
      }),
      Object.defineProperty(e, 'subscribeToTopicAsync', {
        enumerable: !0,
        get: function () {
          return u.subscribeToTopicAsync;
        },
      }),
      Object.defineProperty(e, 'unsubscribeFromTopicAsync', {
        enumerable: !0,
        get: function () {
          return u.unsubscribeFromTopicAsync;
        },
      }),
      Object.defineProperty(e, 'getPresentedNotificationsAsync', {
        enumerable: !0,
        get: function () {
          return s.getPresentedNotificationsAsync;
        },
      }),
      Object.defineProperty(e, 'dismissNotificationAsync', {
        enumerable: !0,
        get: function () {
          return f.dismissNotificationAsync;
        },
      }),
      Object.defineProperty(e, 'dismissAllNotificationsAsync', {
        enumerable: !0,
        get: function () {
          return y.dismissAllNotificationsAsync;
        },
      }),
      Object.defineProperty(e, 'getNotificationChannelsAsync', {
        enumerable: !0,
        get: function () {
          return l.getNotificationChannelsAsync;
        },
      }),
      Object.defineProperty(e, 'getNotificationChannelAsync', {
        enumerable: !0,
        get: function () {
          return b.getNotificationChannelAsync;
        },
      }),
      Object.defineProperty(e, 'setNotificationChannelAsync', {
        enumerable: !0,
        get: function () {
          return p.setNotificationChannelAsync;
        },
      }),
      Object.defineProperty(e, 'deleteNotificationChannelAsync', {
        enumerable: !0,
        get: function () {
          return O.deleteNotificationChannelAsync;
        },
      }),
      Object.defineProperty(e, 'getNotificationChannelGroupsAsync', {
        enumerable: !0,
        get: function () {
          return A.getNotificationChannelGroupsAsync;
        },
      }),
      Object.defineProperty(e, 'getNotificationChannelGroupAsync', {
        enumerable: !0,
        get: function () {
          return j.getNotificationChannelGroupAsync;
        },
      }),
      Object.defineProperty(e, 'setNotificationChannelGroupAsync', {
        enumerable: !0,
        get: function () {
          return P.setNotificationChannelGroupAsync;
        },
      }),
      Object.defineProperty(e, 'deleteNotificationChannelGroupAsync', {
        enumerable: !0,
        get: function () {
          return h.deleteNotificationChannelGroupAsync;
        },
      }),
      Object.defineProperty(e, 'getBadgeCountAsync', {
        enumerable: !0,
        get: function () {
          return N.getBadgeCountAsync;
        },
      }),
      Object.defineProperty(e, 'setBadgeCountAsync', {
        enumerable: !0,
        get: function () {
          return C.setBadgeCountAsync;
        },
      }),
      Object.defineProperty(e, 'getAllScheduledNotificationsAsync', {
        enumerable: !0,
        get: function () {
          return k.getAllScheduledNotificationsAsync;
        },
      }),
      Object.defineProperty(e, 'scheduleNotificationAsync', {
        enumerable: !0,
        get: function () {
          return v.scheduleNotificationAsync;
        },
      }),
      Object.defineProperty(e, 'cancelScheduledNotificationAsync', {
        enumerable: !0,
        get: function () {
          return T.cancelScheduledNotificationAsync;
        },
      }),
      Object.defineProperty(e, 'cancelAllScheduledNotificationsAsync', {
        enumerable: !0,
        get: function () {
          return E.cancelAllScheduledNotificationsAsync;
        },
      }),
      Object.defineProperty(e, 'getNotificationCategoriesAsync', {
        enumerable: !0,
        get: function () {
          return w.getNotificationCategoriesAsync;
        },
      }),
      Object.defineProperty(e, 'setNotificationCategoryAsync', {
        enumerable: !0,
        get: function () {
          return G.setNotificationCategoryAsync;
        },
      }),
      Object.defineProperty(e, 'deleteNotificationCategoryAsync', {
        enumerable: !0,
        get: function () {
          return R.deleteNotificationCategoryAsync;
        },
      }),
      Object.defineProperty(e, 'getNextTriggerDateAsync', {
        enumerable: !0,
        get: function () {
          return S.getNextTriggerDateAsync;
        },
      }),
      Object.defineProperty(e, 'useLastNotificationResponse', {
        enumerable: !0,
        get: function () {
          return x.useLastNotificationResponse;
        },
      }),
      Object.defineProperty(e, 'setAutoServerRegistrationEnabledAsync', {
        enumerable: !0,
        get: function () {
          return B.setAutoServerRegistrationEnabledAsync;
        },
      }),
      Object.defineProperty(e, 'registerTaskAsync', {
        enumerable: !0,
        get: function () {
          return _.registerTaskAsync;
        },
      }),
      Object.defineProperty(e, 'BackgroundNotificationTaskResult', {
        enumerable: !0,
        get: function () {
          return _.BackgroundNotificationTaskResult;
        },
      }),
      Object.defineProperty(e, 'unregisterTaskAsync', {
        enumerable: !0,
        get: function () {
          return D.unregisterTaskAsync;
        },
      }));
    var t = r(d[0]),
      n = r(d[1]),
      o = r(d[2]),
      c = r(d[3]),
      u = r(d[4]),
      s = r(d[5]),
      f = r(d[6]),
      y = r(d[7]),
      l = r(d[8]),
      b = r(d[9]),
      p = r(d[10]),
      O = r(d[11]),
      A = r(d[12]),
      j = r(d[13]),
      P = r(d[14]),
      h = r(d[15]),
      N = r(d[16]),
      C = r(d[17]),
      k = r(d[18]),
      v = r(d[19]),
      T = r(d[20]),
      E = r(d[21]),
      w = r(d[22]),
      G = r(d[23]),
      R = r(d[24]),
      S = r(d[25]),
      x = r(d[26]),
      B = r(d[27]),
      _ = r(d[28]),
      D = r(d[29]),
      F = r(d[30]);
    Object.keys(F).forEach(function (t) {
      'default' === t ||
        Object.prototype.hasOwnProperty.call(e, t) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: function () {
            return F[t];
          },
        });
    });
    var L = r(d[31]);
    Object.keys(L).forEach(function (t) {
      'default' === t ||
        Object.prototype.hasOwnProperty.call(e, t) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: function () {
            return L[t];
          },
        });
    });
    var I = r(d[32]);
    Object.keys(I).forEach(function (t) {
      'default' === t ||
        Object.prototype.hasOwnProperty.call(e, t) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: function () {
            return I[t];
          },
        });
    });
    var W = r(d[33]);
    Object.keys(W).forEach(function (t) {
      'default' === t ||
        Object.prototype.hasOwnProperty.call(e, t) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: function () {
            return W[t];
          },
        });
    });
    var J = r(d[34]);
    Object.keys(J).forEach(function (t) {
      'default' === t ||
        Object.prototype.hasOwnProperty.call(e, t) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: function () {
            return J[t];
          },
        });
    });
    var K = r(d[35]);
    Object.keys(K).forEach(function (t) {
      'default' === t ||
        Object.prototype.hasOwnProperty.call(e, t) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: function () {
            return K[t];
          },
        });
    });
    var M = r(d[36]);
    Object.keys(M).forEach(function (t) {
      'default' === t ||
        Object.prototype.hasOwnProperty.call(e, t) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: function () {
            return M[t];
          },
        });
    });
    var q = r(d[37]);
    Object.keys(q).forEach(function (t) {
      'default' === t ||
        Object.prototype.hasOwnProperty.call(e, t) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: function () {
            return q[t];
          },
        });
    });
    var z = r(d[38]);
    if (
      (Object.keys(z).forEach(function (t) {
        'default' === t ||
          Object.prototype.hasOwnProperty.call(e, t) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return z[t];
            },
          });
      }),
      (0, t.isRunningInExpoGo)() &&
        void 0 === process.env.JEST_WORKER_ID &&
        'test' !== 'production'?.toLowerCase())
    ) {
      const t =
        '`expo-notifications` functionality is not fully supported in Expo Go:\nWe recommend you instead use a development build to avoid limitations. Learn more: https://expo.fyi/dev-client.';
      console.warn(t);
    }
  },
  996,
  [
    313, 1244, 1248, 1250, 1260, 1262, 1265, 1266, 1267, 1268, 1269, 1270, 1271,
    1272, 1273, 1274, 1275, 1278, 1279, 1281, 1284, 1285, 1286, 1288, 1289,
    1290, 1291, 1251, 1294, 1296, 1256, 1292, 1297, 1299, 1301, 1302, 1303,
    1282, 1304,
  ],
);
