sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageBox'
], function(Controller, MessageBox) {
    'use strict';
    return Controller.extend(
        "quiz02.controller.JSView",
        {
            onClick: function() {

            var js = this.getView().byId("inpJs").getValue()
            // if (!Tname) {
            //     MessageBox.error("팀 이름을 입력해주세요");
            //     return
            // }
            MessageBox.show(js);
        }
        }
    )
});