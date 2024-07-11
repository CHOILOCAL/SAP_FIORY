sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("unit907.controller.Main", {
        onInit: function () {
            var olvlModel = new sap.ui.model.json.JSONModel();
            olvlModel.loadData("/model/level.json");
            this.getView().setModel(olvlModel, "level");

            var oEmpModel = new sap.ui.model.json.JSONModel();
            oEmpModel.loadData("/model/employ.json");
            this.getView().setModel(oEmpModel, "emp");
        },

        onSelectionChange: function (oEvent) {
            var sLevel = oEvent.getSource().getSelectedKey();
            // 필터 생성
            var oFilter = new sap.ui.model.Filter(
                "Level",
                sap.ui.model.FilterOperator.EQ,
                sLevel
            );

            // 해당 뷰의 UI ID
            var oTable = this.getView().byId("idTable");
            oTable.getBinding('rows').filter([oFilter]);
        },

        onRemoveFilter: function () {
            var oTable = this.getView().byId("idTable");
            oTable.getBinding("rows").filter(null);
            
            var oComBox = this.getView().byId("comBox");
            oComBox.setValue("");
        },

        onSort: function () {
            var oTable = this.getView().byId("idTable");
            var oSort = new sap.ui.model.Sorter("Salary", false);
            oTable.getBinding().sort([oSort]);
        },

        onRemoveSort: function () {
            var oTable = this.getView().byId("idTable");
            oTable.getBinding().sort(null);
        }
    });
});
