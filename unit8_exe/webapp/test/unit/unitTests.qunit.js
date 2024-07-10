/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"unit8_exe/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});