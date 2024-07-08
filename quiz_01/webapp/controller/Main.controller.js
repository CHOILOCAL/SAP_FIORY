sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("quiz01.controller.Main", {

        onClick: function (param) {
            var Nb1 = Number(this.getView().byId("inpNb1").getValue());
            var Nb2 = Number(this.getView().byId("inpNb2").getValue());
            
            if (param === '+') {
                // plus
                var calNb = Nb1 + Nb2;
                this.getView().byId("allNm").setValue(calNb);
            } else if (param === '-') {
                // minus
                var calNb = Nb1 - Nb2;
                this.getView().byId("allNm").setValue(calNb);
            } else if (param === 'X') {
                // multiply
                var calNb = Nb1 * Nb2;
                this.getView().byId("allNm").setValue(calNb);
            } else if (param === '/') {
                // division
                var calNb = Nb1 / Nb2;
                this.getView().byId("allNm").setValue(calNb);
            } else if (param === 'C') {
                // clear
                var calNb = Nb1 + Nb2;
                this.getView().byId("allNm").setValue("");
                this.getView().byId("inpNb1").setValue("");
                this.getView().byId("inpNb2").setValue(null);
            }
        },

    });
});
