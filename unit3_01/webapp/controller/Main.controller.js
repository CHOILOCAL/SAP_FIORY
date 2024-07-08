sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
function (Controller, MessageBox) {
    "use strict";

    return Controller.extend("unit301.controller.Main", {
        onInit: function () {

        },
        onClick: function () {
            //
            var sName = this.getView().byId("inpName").getValue();
            var showMsg = "Hello, " + sName;

            MessageBox.show(showMsg, {
                title: "Hello"
            })
        }
    });
});
