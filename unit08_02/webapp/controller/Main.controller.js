sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
function (Controller, f) {
    "use strict";

    return Controller.extend("unit0802.controller.Main", {

        onPopup: function () {
            //
            var oView = this.getView();

            // Popup Dialog 생성.
            if (!this.byId("digPopup")) {
                f.load({
                  id: oView.getId(),
                  name: "unit0802.view.PopupFrag",
                  typo: "XML",
                  controller: this
            }).then (
                // 
                function (oPopup) {
                    // Dialog Fragment에 대한 model, lifecycle 관리를
                    // 해당 컨트롤러에 연결하려면 addDependent 메소드 사용.
                    oView.addDependent(oPopup);
                    oPopup.open();
                }
            );
        } else {
            this.byId("digPopup").open();
        }
    },
    onClose: function () {
        this.byId("digPopup").close();
        var vInput = this.getView().byId("inpName").getValue();
        this.getValue().byId("idTxt").setText(vInput);
    }
    });
});
