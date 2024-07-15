sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("unit1203.controller.Main", {
        onInit: function () {
            // alert("init");
        },

        onSelect: function (oEvent) {
            var sPath = oEvent.getParameter("listItem").getBindingContext().getPath();
            var oList = this.getView().byId('tabCarrier2');
            oList.bindElement(sPath);
        },
    });
});
