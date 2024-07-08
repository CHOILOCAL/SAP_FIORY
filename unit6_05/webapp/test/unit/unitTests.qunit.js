/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"unit6_05/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});