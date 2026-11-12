// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 682; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    function n(n) {
      const t = `Method ${n} imported from "expo-file-system" is deprecated.\nYou can migrate to the new filesystem API using "File" and "Directory" classes or import the legacy API from "expo-file-system/legacy".\nAPI reference and examples are available in the filesystem docs: https://docs.expo.dev/versions/v54.0.0/sdk/filesystem/`;
      return (console.warn(t), new Error(t));
    }
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.getInfoAsync = async function (t, c = {}) {
        throw n('getInfoAsync');
      }),
      (e.readAsStringAsync = async function (t, c = {}) {
        throw n('readAsStringAsync');
      }),
      (e.getContentUriAsync = async function (t) {
        throw n('getContentUriAsync');
      }),
      (e.writeAsStringAsync = async function (t, c, o = {}) {
        throw n('writeAsStringAsync');
      }),
      (e.deleteAsync = async function (t, c = {}) {
        throw n('deleteAsync');
      }),
      (e.deleteLegacyDocumentDirectoryAndroid = async function () {
        throw n('deleteLegacyDocumentDirectoryAndroid');
      }),
      (e.moveAsync = async function (t) {
        throw n('moveAsync');
      }),
      (e.copyAsync = async function (t) {
        throw n('copyAsync');
      }),
      (e.makeDirectoryAsync = async function (t, c = {}) {
        throw n('makeDirectoryAsync');
      }),
      (e.readDirectoryAsync = async function (t) {
        throw n('readDirectoryAsync');
      }),
      (e.getFreeDiskStorageAsync = async function () {
        throw n('getFreeDiskStorageAsync');
      }),
      (e.getTotalDiskCapacityAsync = async function () {
        throw n('getTotalDiskCapacityAsync');
      }),
      (e.downloadAsync = async function (t, c, o = {}) {
        throw n('downloadAsync');
      }),
      (e.uploadAsync = async function (t, c, o = {}) {
        throw n('uploadAsync');
      }),
      (e.createDownloadResumable = function (t, c, o, s, y) {
        throw n('createDownloadResumable');
      }),
      (e.createUploadTask = function (t, c, o, s) {
        throw n('createUploadTask');
      }));
  },
  682,
  [],
);
