sap.ui.define([
    // module
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
function (Controller, MessageBox) {
    "use strict";

    return Controller.extend("sapui5app.controller.View1", {
        onInit: function () {

        },
        onSubmit: function() {
            // onSubmit Method
            MessageBox.show("Button Click", {
                title: "Message Box Title"
            });
        }
    });
});
