sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
function (Controller, MessageBox) {
    "use strict";

    return Controller.extend("quiz02.controller.Main", {
        // onInit: function () {
        //     alert('quiz02.controller.Main');
        // },

        onClick: function () {
            var xml = this.getView().byId("inpXml").getValue();
            MessageBox.show(xml)
        },
    });
});
