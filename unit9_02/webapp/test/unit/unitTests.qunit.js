/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"unit9_02/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
