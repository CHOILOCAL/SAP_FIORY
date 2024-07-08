sap.ui.jsview(
    "unit605.view.JSView",
    {
        getControllerName: function() {
            return "unit605.controller.JSView"
        },

        // createContent 사용하여 UI 생성.
        createContent: function (oController) {

            var oText = new sap.m.Text({
                text: "Text on JavaScript View"
            })

            var oCheckBox = new sap.m.CheckBox(this.createId('idCheckBox'), {
                text: "No"
            });

            oCheckBox.attachSelect(oController.onCBSelect, oController)

            return [oText, oCheckBox]
            // var oCheckbox = new sap.m.CheckBox("idJSView", {
            //     text: "Text on JavaScript view",
            //     // press: oController.onClick // controller가 가지고 있는
            // })

            return oCheckbox;
        }
    }
);