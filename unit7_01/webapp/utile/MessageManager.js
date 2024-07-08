sap.ui.define([
    "sap/m/MessageBox"
],
function(MessageBox) {
    return {
        reportSuccess: function(team, firstNm, LastNm) {
            MessageBox.show(pMsg, {
                title: "나의 팀은 " + team + ", 이름은" + firstNm + LastNm 
            });
        }
    }
}
);
