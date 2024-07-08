sap.ui.jsview(
    // View name - view file : JSView.view.js
    "unit601.view.JSView",
    {
        getControllerName: function() {
            // JS View에 대한 컨트롤러
            // controller name JSView.controller
            return "unit601.controller.JSView"
        },

        // createContent 사용하여 UI 생성.
        createContent: function (oController) {
            // Method 정의
            var oButton = new sap.m.Button("idBtn", {
                text: "Button Text(JS View)",
                press: oController.onClick // controller가 가지고 있는
            })

            return oButton;
        }
    }
);