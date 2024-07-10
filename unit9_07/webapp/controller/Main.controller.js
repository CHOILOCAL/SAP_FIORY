sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("unit907.controller.Main", {
        onInit: function () {
            var olvlModel = new sap.ui.model.json.JSONModel();
            olvlModel.loadData("/model/level.json");
            this.getView().setModel(olvlModel, "level");

            var oEmpModel = new sap.ui.model.json.JSONModel();
            oEmpModel.loadData("/model/employ.json");
            this.getView().setModel(oEmpModel, "emp");
        }
    });
});
