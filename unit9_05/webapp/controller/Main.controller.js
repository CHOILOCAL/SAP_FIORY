sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("unit0905.controller.Main", {
        onInit: function () {
            var oData = {
                companies: [
                    {name: "SAP SE", city: "walldorf"},
                    {name: "Beam Hdg", city: "Hancock"},
                    {name: "Carot Ltd", city: "Chjes"},
                    {name: "Acme Inc", city: "Belmont"},
                    {name: "BMW", city: "Munchen"}
                ]
            }

            var oModel = new sap.ui.model.json.JSONModel();
            oModel.setData(oData);
            this.getView().setModel(oModel);
        }
    });
});
