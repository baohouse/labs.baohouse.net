/* This is made for dedicated web workers */

self.importScripts('build-no-tables-utf16.js', 'easy-api.js');

liblouis.setLiblouisBuild(liblouisBuild);
liblouis.enableOnDemandTableLoading("tables/");

var tables = [
  'controlchars.cti',
  'unicode.dis',
  'vi-g1.ctb'
];

onmessage = function(e) {
  var workerResult = liblouis.translateString(tables.join(','), e.data);
  postMessage(workerResult);
}
