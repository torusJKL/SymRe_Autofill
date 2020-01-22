"use strict";
var API = chrome || browser;

API.browserAction.onClicked.addListener((tab) => {
  API.tabs.executeScript(tab.ib, {
		file: 'content.js'
	},openUrl);
});

function openUrl(queryStr){
  var newUrl = "http://sym.re/create" + queryStr;
  API.tabs.create({ url: newUrl });
}
