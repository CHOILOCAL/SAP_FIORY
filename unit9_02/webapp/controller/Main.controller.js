sap.ui.define([
    "sap/ui/core/mvc/Controller",
],
function (Controller) {
    "use strict";

    return Controller.extend("unit902.controller.Main", {
        onInit: function () {
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.loadData("/model/data.json");
            this.getView().setModel(oModel);
        }
    });
});
