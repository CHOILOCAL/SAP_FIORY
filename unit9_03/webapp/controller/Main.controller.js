sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("unit903.controller.Main", {
        onInit: function () {
            var oData = {
                lastName: "김",
                firstName: "철수",
                skil: [
                    {sId: "S01", sName: "ABAP"},
                    {sId: "S02", sName: "SAPUI5"},
                    {sId: "S03", sName: "SAP Gateway"},
                    {sId: "S04", sName: "Fiori"},
                    {sId: "S05", sName: "webynPro ABAP"},
                ]
            }

            var oModel = new sap.ui.model.json.JSONModel();
            oModel.setData(oData);

            this.getView().setModel(oModel);

            var oData1 = {
                data: {
                    depId: "SAP Team",
                    emp: [
                        {pernr: "p01", eName: "홍 길동"},
                        {pernr: "p02", eName: "김 길동"},
                        {pernr: "p03", eName: "박 길동"},
                        {pernr: "p04", eName: "최 길동"},
                        {pernr: "p05", eName: "이 길동"}
                    ]
                }
            }

            var oModel1 = new sap.ui.model.json.JSONModel();
            oModel1.setData(oData1);

            this.getView().setModel(oModel1, "com");
        }
    });
});
