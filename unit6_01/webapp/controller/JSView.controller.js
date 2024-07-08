sap.ui.define([
    'sap/ui/core/mvc/Controller',
], function(Controller) {
    'use strict';
    return Controller.extend(
        "unit601.controller.JSView",
        {
            onClick: function() {
                alert("JavaScript View Button Click");
            }
        }
    )
});