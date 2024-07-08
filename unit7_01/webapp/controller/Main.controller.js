sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
function (Controller, MessageBox) {
    "use strict";

    return Controller.extend("unit701.controller.Main", {
        // onInit: function () {
        // },

        onClick: function () {
            var teamNm = this.getView().byId("teamInput").getValue();
            var firstNm = this.getView().byId("FirInput").getValue();
            var LastNm = this.getView().byId("LastInput").getValue();

            var showMsg = "나의 팀은 " + teamNm + "팀, 이름은 " + LastNm + firstNm;
            // alert(showMsg);

            MessageBox.show(showMsg, {
                title: "",
                icon: MessageBox.Icon.INFORMATION,
            })
        }
    });
});
