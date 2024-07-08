sap.ui.define([
        // 모듈 정의
        "sap/m/MessageBox"
    ],
    function(MessageBox) {
        return {
            // 의존성 배열과 팩토리 함수
            reportSuccess: function(pMsg, pTitle) {
                MessageBox.show(pMsg, {
                    title: pTitle
                });
            }
        }
    }
  );
  