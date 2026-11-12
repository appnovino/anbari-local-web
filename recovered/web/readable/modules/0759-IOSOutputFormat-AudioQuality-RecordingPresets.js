// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 759; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    var t, A;
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'IOSOutputFormat', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      Object.defineProperty(e, 'AudioQuality', {
        enumerable: !0,
        get: function () {
          return A;
        },
      }),
      Object.defineProperty(e, 'RecordingPresets', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      (function (t) {
        ((t.LINEARPCM = 'lpcm'),
          (t.AC3 = 'ac-3'),
          (t['60958AC3'] = 'cac3'),
          (t.APPLEIMA4 = 'ima4'),
          (t.MPEG4AAC = 'aac '),
          (t.MPEG4CELP = 'celp'),
          (t.MPEG4HVXC = 'hvxc'),
          (t.MPEG4TWINVQ = 'twvq'),
          (t.MACE3 = 'MAC3'),
          (t.MACE6 = 'MAC6'),
          (t.ULAW = 'ulaw'),
          (t.ALAW = 'alaw'),
          (t.QDESIGN = 'QDMC'),
          (t.QDESIGN2 = 'QDM2'),
          (t.QUALCOMM = 'Qclp'),
          (t.MPEGLAYER1 = '.mp1'),
          (t.MPEGLAYER2 = '.mp2'),
          (t.MPEGLAYER3 = '.mp3'),
          (t.APPLELOSSLESS = 'alac'),
          (t.MPEG4AAC_HE = 'aach'),
          (t.MPEG4AAC_LD = 'aacl'),
          (t.MPEG4AAC_ELD = 'aace'),
          (t.MPEG4AAC_ELD_SBR = 'aacf'),
          (t.MPEG4AAC_ELD_V2 = 'aacg'),
          (t.MPEG4AAC_HE_V2 = 'aacp'),
          (t.MPEG4AAC_SPATIAL = 'aacs'),
          (t.AMR = 'samr'),
          (t.AMR_WB = 'sawb'),
          (t.AUDIBLE = 'AUDB'),
          (t.ILBC = 'ilbc'),
          (t[(t.DVIINTELIMA = 1836253201)] = 'DVIINTELIMA'),
          (t[(t.MICROSOFTGSM = 1836253233)] = 'MICROSOFTGSM'),
          (t.AES3 = 'aes3'),
          (t.ENHANCEDAC3 = 'ec-3'));
      })(t || (t = {})),
      (function (t) {
        ((t[(t.MIN = 0)] = 'MIN'),
          (t[(t.LOW = 32)] = 'LOW'),
          (t[(t.MEDIUM = 64)] = 'MEDIUM'),
          (t[(t.HIGH = 96)] = 'HIGH'),
          (t[(t.MAX = 127)] = 'MAX'));
      })(A || (A = {})));
    const n = {
      HIGH_QUALITY: {
        extension: '.m4a',
        sampleRate: 44100,
        numberOfChannels: 2,
        bitRate: 128e3,
        android: { outputFormat: 'mpeg4', audioEncoder: 'aac' },
        ios: {
          outputFormat: t.MPEG4AAC,
          audioQuality: A.MAX,
          linearPCMBitDepth: 16,
          linearPCMIsBigEndian: !1,
          linearPCMIsFloat: !1,
        },
        web: { mimeType: 'audio/webm', bitsPerSecond: 128e3 },
      },
      LOW_QUALITY: {
        extension: '.m4a',
        sampleRate: 44100,
        numberOfChannels: 2,
        bitRate: 64e3,
        android: {
          extension: '.3gp',
          outputFormat: '3gp',
          audioEncoder: 'amr_nb',
        },
        ios: {
          audioQuality: A.MIN,
          outputFormat: t.MPEG4AAC,
          linearPCMBitDepth: 16,
          linearPCMIsBigEndian: !1,
          linearPCMIsFloat: !1,
        },
        web: { mimeType: 'audio/webm', bitsPerSecond: 128e3 },
      },
    };
  },
  759,
  [],
);
