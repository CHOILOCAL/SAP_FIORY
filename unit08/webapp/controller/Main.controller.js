sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/Device"
],
function (Controller, Device) {
    "use strict";

    return Controller.extend("unit08.controller.Main", {
        onInit: function () {
            this.getView().addStyleClass(Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact");
        }
    });
});
