"use strict";
var API = chrome || browser;

API.browserAction.onClicked.addListener((tab) => {
  API.tabs.executeScript(tab.ib, {
		file: 'content.js'
	},openUrl);
});

function openUrl(queryStr){

  if (queryStr == undefined)
    queryStr = "?url=" + encodeURIComponent("Error: The extension was not allowed to read the URL.");

  var newUrl = "http://sym.re/create" + queryStr;
  API.tabs.create({ url: newUrl });
}
