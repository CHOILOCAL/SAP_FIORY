sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
function (Controller, Fragment) {
    "use strict";

    return Controller.extend("unit8exe2.controller.Main", {
        
        onOpenDialog: function () {
            var oView = this.getView();

            if (!this.byId("idDialog")) {
                Fragment.load({
                    id: oView.getId(),
                    name: "unit8exe2.view.Dialog",
                    type: "XML",
                    controller: this
                }).then(function (oDialog) {
                    oView.addDependent(oDialog);
                    oDialog.open();
                });
            } else {
                this.byId("idDialog").open();
            }

        },

        onCloseDialog: function () {
            this.byId("idDialog").close();

            var oInput = this.byId("idInput");
            var oText = this.byId("idText");

            oText.setText("Hello " + oInput.getValue());
        }

    });
});
