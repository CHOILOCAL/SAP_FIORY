sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("unit901.controller.Main", {
        onInit: function () {
            // 데이터 정의 - Data object & data property and value
            var oData = {
                lastName: 홍,
                firstName: 길동,
                enable: false,
                checked: true
            };

            // JSON Model 생성.
            var oModel = new JSONModel();
            // JSON Model에 데이터 할당.
            oModel.setData(oData);

            //JSON Model을 View에 할당.
            this.getView().setModel(oModel);
        }
    });
});
