// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 426; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (e, i, o, a, n, s, r) {
    n.exports = {
      expo: {
        name: 'myAnbari',
        slug: 'anbari',
        scheme: 'myanbari',
        version: '0.17.173',
        runtimeVersion: '2',
        orientation: 'portrait',
        icon: './assets/anbari-icon.png',
        userInterfaceStyle: 'automatic',
        ios: {
          supportsTablet: !0,
          bundleIdentifier: 'ir.myanbari.app',
          runtimeVersion: '2',
          buildNumber: '1',
          entitlements: {
            'com.apple.security.application-groups': ['group.ir.myanbari.app'],
          },
        },
        android: {
          versionCode: 1030,
          adaptiveIcon: {
            backgroundColor: '#DCF5F1',
            foregroundImage: './assets/anbari-adaptive.png',
            monochromeImage: './assets/anbari-monochrome.png',
          },
          predictiveBackGestureEnabled: !1,
          permissions: [
            'android.permission.SCHEDULE_EXACT_ALARM',
            'android.permission.USE_EXACT_ALARM',
          ],
          blockedPermissions: ['android.permission.SYSTEM_ALERT_WINDOW'],
          package: 'com.anbar.inventory',
        },
        web: { favicon: './assets/anbari-favicon.png' },
        plugins: [
          './plugins/withIosUpdates',
          './plugins/withIosSceneLifecycle',
          './plugins/withIosVoskModel',
          '@bacons/apple-targets',
          'expo-font',
          [
            'expo-audio',
            {
              microphonePermission:
                '\u0628\u0631\u0627\u06cc \u062b\u0628\u062a \u0635\u0648\u062a\u06cc \u0645\u0648\u062c\u0648\u062f\u06cc\u060c \u0627\u062c\u0627\u0632\u0647 \u062f\u0633\u062a\u0631\u0633\u06cc \u0628\u0647 \u0645\u06cc\u06a9\u0631\u0648\u0641\u0648\u0646 \u0631\u0627 \u0628\u062f\u0647\u06cc\u062f.',
              enableBackgroundPlayback: !1,
              enableBackgroundRecording: !1,
            },
          ],
          'expo-sharing',
          [
            'expo-media-library',
            {
              photosPermission:
                '\u0628\u0631\u0627\u06cc \u0627\u0646\u062a\u062e\u0627\u0628 \u0639\u06a9\u0633 \u06a9\u0627\u0644\u0627 \u06cc\u0627 \u0641\u0627\u06a9\u062a\u0648\u0631\u060c \u0627\u062c\u0627\u0632\u0647\u0654 \u062f\u0633\u062a\u0631\u0633\u06cc \u0628\u0647 \u06af\u0627\u0644\u0631\u06cc \u0631\u0627 \u0628\u062f\u0647\u06cc\u062f.',
              savePhotosPermission:
                '\u0628\u0631\u0627\u06cc \u0630\u062e\u06cc\u0631\u0647\u0654 \u0639\u06a9\u0633 \u0641\u0627\u06a9\u062a\u0648\u0631\u060c \u0627\u062c\u0627\u0632\u0647\u0654 \u062f\u0633\u062a\u0631\u0633\u06cc \u0628\u0647 \u06af\u0627\u0644\u0631\u06cc \u0631\u0627 \u0628\u062f\u0647\u06cc\u062f.',
              granularPermissions: [],
              isAccessMediaLocationEnabled: !1,
            },
          ],
          [
            'expo-camera',
            {
              cameraPermission:
                '\u0628\u0631\u0627\u06cc \u0627\u0633\u06a9\u0646 \u0628\u0627\u0631\u06a9\u062f \u0648 QR\u060c \u062f\u0633\u062a\u0631\u0633\u06cc \u062f\u0648\u0631\u0628\u06cc\u0646 \u0631\u0627 \u0641\u0639\u0627\u0644 \u06a9\u0646\u06cc\u062f.',
              recordAudioAndroid: !1,
            },
          ],
          [
            'expo-image-picker',
            {
              photosPermission:
                '\u0628\u0631\u0627\u06cc \u062b\u0628\u062a \u06a9\u0627\u0644\u0627\u060c \u06cc\u06a9 \u062a\u0635\u0648\u06cc\u0631 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f.',
              cameraPermission:
                '\u0628\u0631\u0627\u06cc \u062b\u0628\u062a \u06a9\u0627\u0644\u0627 \u0627\u0632 \u062f\u0648\u0631\u0628\u06cc\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f.',
              microphonePermission:
                '\u0628\u0631\u0627\u06cc \u062b\u0628\u062a \u0635\u0648\u062a\u06cc \u0645\u0648\u062c\u0648\u062f\u06cc\u060c \u0627\u062c\u0627\u0632\u0647 \u062f\u0633\u062a\u0631\u0633\u06cc \u0628\u0647 \u0645\u06cc\u06a9\u0631\u0648\u0641\u0648\u0646 \u0631\u0627 \u0628\u062f\u0647\u06cc\u062f.',
            },
          ],
          [
            'expo-notifications',
            { icon: './assets/anbari-notification-icon.png', color: '#0d9488' },
          ],
          [
            'expo-secure-store',
            {
              faceIDPermission:
                'myAnbari \u0628\u0631\u0627\u06cc \u0628\u0627\u0632 \u06a9\u0631\u062f\u0646 \u0627\u0645\u0646 \u062d\u0633\u0627\u0628 \u0634\u0645\u0627 \u0627\u0632 Face ID \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u062f.',
            },
          ],
          'expo-updates',
        ],
        updates: {
          url: 'https://myanbari.ir/updates/android/manifest',
          enabled: !0,
          checkAutomatically: 'ON_LOAD',
          fallbackToCacheTimeout: 0,
        },
      },
    };
  },
  426,
  [],
);
