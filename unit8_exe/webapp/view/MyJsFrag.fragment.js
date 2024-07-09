sap.ui.jsfragment("sap.training.fragments.view.MyFrag", {

    creatContent: function (ctl) {

        var oInpit = new sap.m.Input(this.createId("idInput"));
        var oButton = new sap.m.Button({
            text: "Say Hello (JavaScript Fragment)",
            press: [ctl.onJsButtonpress, ctl]
        });

        var oText = new sap.m.Text(this.createId(idText));

        return new sap.ui.layout.HorizontalLayout({
            content: [oInput, oButton, oText]
        });
    }
})