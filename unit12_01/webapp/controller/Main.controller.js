sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
function (Controller, Fragment) {
    "use strict";

    return Controller.extend("unit1201.controller.Main", {
        onInit: function () {
            // alert('ctrl');
        },

        onSelectionChange: function (oEvent) {
            var sPath = oEvent.getParameter('selectedItem').getBindingContext().getPath();
            this.getView().byId("tabProduct").bindElement(sPath);
        },
        onPopup: function (oEvent) {

            var oView = this.getView();

            if (!this.byId("digPopup")) {
                Fragment.load({
                    id: oView.getId(),
                  name: "unit1201.view.PopupFrag",
                  type: "XML",
                  controller: this,
            }).then (
                function (oPopup) {
                    oView.addDependent(oPopup);
                    oPopup.open();

                    var sPath = oEvent.getSource().getBindingContext().getPath(); // Products(1)
                    oPopup.bindElement(sPath);
                }
            );
        } else {
            this.byId("digPopup").open();
            }
        },
        onClose: function () {
            this.getView().byId("digPopup").destroy();
        }
    });
});
