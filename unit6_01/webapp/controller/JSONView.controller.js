sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    'use strict';
    return Controller.extend(
        "unit601.controller.JSONView",
        {
            onSubmit: function() {
                alert("JSON View Button Click");
            }
        }
    );
})