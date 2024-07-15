sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("unit1202.controller.Main", {
        onInit: function () {

        },

        onSelectionChange: function (oEvent) {
            var sPath = oEvent.getParameter('selectedItem').getBindingContext().getPath();
            this.getView().byId("tabProduct2").bindElement(sPath);
        },
    });
});
