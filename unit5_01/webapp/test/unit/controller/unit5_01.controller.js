/*global QUnit*/

sap.ui.define([
	"unit5_01/controller/unit5_01.controller"
], function (Controller) {
	"use strict";

	QUnit.module("unit5_01 Controller");

	QUnit.test("I should test the unit5_01 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
