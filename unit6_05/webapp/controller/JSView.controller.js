sap.ui.define([
    'sap/ui/core/mvc/Controller',
], function(Controller) {
    'use strict';
    return Controller.extend(
        "unit605.controller.JSView",
        {
            // onInit: function() {
            //     alert("unit605.controller.JSView");
            // }
            onCBSelect: function() {
                var oCheckBox = this.byId("idCheckBox");
                if (oCheckBox.getSelected()) {
                    oCheckBox.setText("Yes");
                } else {
                    oCheckBox.setText("No");
                }
            }
        }
    )
});