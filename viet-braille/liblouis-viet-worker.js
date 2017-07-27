/* This is made for dedicated web workers */

self.importScripts('build-no-tables-utf16.js', 'easy-api.js');
liblouis.enableOnDemandTableLoading("tables/");

onmessage = function(e) {
  var workerResult = liblouis.translateString('unicode.dis,vi-g1.ctb', e.data);
  postMessage(workerResult);
}
