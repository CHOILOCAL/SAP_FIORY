sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("unit905.controller.Main", {
        onInit: function () {
            var oModel = new sap.ui.model.JSONModel();
            oModel.loadData("/model/data.json");
            this.getView().setModel(oModel);
        },
        onselectionchange: function(oEve) {
            var oItem = oEve.getParameter("selectedItem");
            var sPath = oItem.getBindingContext().getPath();

            var oList = this.getView().byId('idList');
            oList.bindElement(sPath);
        }
    });
});