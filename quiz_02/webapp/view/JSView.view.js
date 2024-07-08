sap.ui.jsview(
    "quiz02.view.JSView",
    {
        getControllerName: function() {
            return "quiz02.controller.JSView"
        },

        createContent: function (controller) {

            var Label = new sap.m.Label("lblJs", {
                text: "Team Name(JS View)"
            })

            var Input = new sap.m.Input(this.createId("inpJs"))
            
            var Text = new sap.m.Text("txtJs", {
                text: "Enter the Team Name"
            })

            var Button = new sap.m.Button("btnJS", {
                text: "Search(JS View)"
            })

            Button.attachPress(controller.onClick, controller)

            return [Label, Input, Text, Button];
        }
    }
);