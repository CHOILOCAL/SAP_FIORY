sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
function (Controller, MessageBox) {
    "use strict";

    return Controller.extend("unit702.controller.Main", {
        // onInit: function () {
        // },

        onClick: function () {
            var firstNm = this.getView().byId("FirInput").getValue();
            var lastNm = this.getView().byId("LastInput").getValue();
            // allNm

            var Nm = lastNm + firstNm;

            var showMsg = "Hello, " + lastNm + firstNm;

            MessageBox.show(showMsg, {
                title: "",
                icon: MessageBox.Icon.INFORMATION,
            })

            if (this.getView().byId("allNm")) {
                this.getView().byId("allNm").setValue(Nm);
            }
            
        }
    });
});
