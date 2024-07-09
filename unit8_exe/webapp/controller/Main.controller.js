sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("unit8exe.controller.Main", {
        onInit: function () {

        },

        onXmlButtonPress: function () {
            var oInput = this.byId(sap.ui.core.Fragment.createId("idXmlFrag", "idInput"));
            var oText = this.byId(sap.ui.core.Fragment.createId("idXmlFrag", "idText"));

            oText.setText("Hello ", + oInput.getValue());
        },

        onJsButtonPress: function () {
            var oInput = this.byId(sap.ui.core.Fragment.createId("idJsFrag", "idInput"));
            var oText = this.byId(sap.ui.core.Fragment.createId("idJsFrag", "idText"));

            oText.setText("Hello ", + oInput.getValue());
        }
    });
});
