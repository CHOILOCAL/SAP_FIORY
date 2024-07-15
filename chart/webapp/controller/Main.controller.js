sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/viz/ui5/data/FlattenedDataset",
    "sap/viz/ui5/controls/common/feeds/FeedItem"
],
function (Controller, JSONModel, FlattenedDataset, FeedItem) {
    "use strict";

    return Controller.extend("chart.controller.Main", {
        onInit: function () {
            var oData = {
                "newSAP": [
                    {"skillName": "ABAP",
                     "rate": "35"
                    },
                    {"skillName": "New ABAP",
                     "rate": "15"
                    },
                    {"skillName": "W4D ABAP",
                     "rate": "10"
                    },
                    {"skillName": "SAPUI5",
                     "rate": "15"
                    },
                    {"skillName": "Fiori",
                     "rate": "20"
                    },
                    {"skillName": "SAP HANA",
                     "rate": "50"
                    },
                    {"skillName": "JavaScript",
                     "rate": "40"
                    }
                ]
            }
            var oModel = new JSONModel();
            oModel.setData(oData);

            this.getView().setModel(oModel);

            // Chart Start
            // Vizname에 Access.
            var oVizFrame = this.getView().byId("idPieChart");

            // Pie Chart에 표시할 데이터를 바인딩.
            var oDataSet = new FlattenedDataset({
                //
                dimensions: [{
                    name: "Name",
                    value: "{skillName}"
                }],
                measures: [{
                    name: "Rate",
                    value: "{rate}"
                }],
                data: {
                    path: "/newSAP"
                }
            });
            // setDataset/setModel 메소드를 통해 VixFrame에 데이터 할당 및 모델 할당.
            oVizFrame.setDataset(oDataSet);
            // VizFrame에 property 설정.
            oVizFrame.setVizProperties({
                title: {text: "SAP Technology"},
                plotArea: {
                    colorPalette: d3.scale.category20().range(),
                    drawingEffect: "glossy" // normal
                }
            });

            // Chart 내부에 표시할 데이터 설정
            var feedSize = new FeedItem({
                "uid": "size",
                "type": "Measure",
                "values": ["Rate"]
            });

            var feedColor = new FeedItem({
                "uid": "color",
                "type": "Dimension",
                "values": ["Name"]
            });

            oVizFrame.addFeed(feedSize);
            oVizFrame.addFeed(feedColor)
        }
    });

});
