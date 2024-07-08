sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("unit605.controller.Main", {
        onInit: function () {
            // alert("unit605.controller.Main")
        },

        onCBSelect: function() {
            var oCheckBox = this.byId("idCheckBox");
            // alert(oCheckBox);

            if (oCheckBox.getSelected()) {
                oCheckBox.setText("Yes");
            } else {
                oCheckBox.setText("No");
            }
        }
    });
});
