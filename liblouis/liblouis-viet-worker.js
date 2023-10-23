/* This is made for dedicated web workers */

self.importScripts("build-no-tables-utf32.js", "easy-api.js");

var liblouis = new LiblouisEasyApi(liblouisBuild);
liblouis.enableOnDemandTableLoading("tables/");
liblouis.setLogLevel(liblouis.LOG.ALL);

var tables = [
  "controlchars.cti",
  "vi-vn-g1.ctb"
];

onmessage = function (e) {
  postMessage(liblouis.translateString(tables.join(","), e.data));
}
