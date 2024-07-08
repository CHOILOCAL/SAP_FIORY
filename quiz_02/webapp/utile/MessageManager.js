sap.ui.define([
    "sap/m/MessageBox"
],
function(MessageBox) {
    return {
        reportSuccess: function(team) {
            MessageBox.show("Welcome to " + team)
        }
    }
}
);
