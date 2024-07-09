sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("unit801.controller.Main", {
        onInit: function () {

        },
        
        onMainClick: function () {
            var mValue = this.getView().byId("inpMain").getValue();
            sap.m.MessageBox.show(mValue);
        },

        onFragClick: function () {
            // var fValue = this.getValue().byId(sap.ui.core.Fragment.createdId("idXmlFrag", "inpFrag"));
            var fValue = this.getValue().byId("inpFrag");
            sap.m.MessageBox.show(fValue);
        }
    });
});
