sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("unit9exe3.controller.Main", {
        onInit: function () {
            var oModel = new JSONModel();
            oModel.loadData("/model/data.json");
            this.getView().setModel(oModel);
        },
        onCarrierSelectionChange: function(oEvent) {
            var oListItem = oEvent.getParameter("listItem");
            var sPath = oListItem.getBindingContext().getPath();
            var oTable = this.byId("idConnTable");
            oTable.bindElement(sPath)
        }
    });
});
