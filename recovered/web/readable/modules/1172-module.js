// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1172; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }));
    var t = (function () {
      function t() {
        ((this.segmentCount = -1),
          (this.fileSize = -1),
          (this.timestamp = -1),
          (this.checksum = -1));
      }
      return (
        (t.prototype.getSegmentIndex = function () {
          return this.segmentIndex;
        }),
        (t.prototype.setSegmentIndex = function (t) {
          this.segmentIndex = t;
        }),
        (t.prototype.getFileId = function () {
          return this.fileId;
        }),
        (t.prototype.setFileId = function (t) {
          this.fileId = t;
        }),
        (t.prototype.getOptionalData = function () {
          return this.optionalData;
        }),
        (t.prototype.setOptionalData = function (t) {
          this.optionalData = t;
        }),
        (t.prototype.isLastSegment = function () {
          return this.lastSegment;
        }),
        (t.prototype.setLastSegment = function (t) {
          this.lastSegment = t;
        }),
        (t.prototype.getSegmentCount = function () {
          return this.segmentCount;
        }),
        (t.prototype.setSegmentCount = function (t) {
          this.segmentCount = t;
        }),
        (t.prototype.getSender = function () {
          return this.sender || null;
        }),
        (t.prototype.setSender = function (t) {
          this.sender = t;
        }),
        (t.prototype.getAddressee = function () {
          return this.addressee || null;
        }),
        (t.prototype.setAddressee = function (t) {
          this.addressee = t;
        }),
        (t.prototype.getFileName = function () {
          return this.fileName;
        }),
        (t.prototype.setFileName = function (t) {
          this.fileName = t;
        }),
        (t.prototype.getFileSize = function () {
          return this.fileSize;
        }),
        (t.prototype.setFileSize = function (t) {
          this.fileSize = t;
        }),
        (t.prototype.getChecksum = function () {
          return this.checksum;
        }),
        (t.prototype.setChecksum = function (t) {
          this.checksum = t;
        }),
        (t.prototype.getTimestamp = function () {
          return this.timestamp;
        }),
        (t.prototype.setTimestamp = function (t) {
          this.timestamp = t;
        }),
        t
      );
    })();
  },
  1172,
  [],
);
