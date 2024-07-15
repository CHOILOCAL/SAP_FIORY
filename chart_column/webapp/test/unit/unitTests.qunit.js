/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"chart_column/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
