sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("materialtransfer.materialtransfer.controller.App", {
            onInit: function () {

            },
            onSecondview: function (oEvent) {

                this.oItem = oEvent.getSource().getTitle();
                
                this.getOwnerComponent().getRouter().navTo("secondview", {
                   id:this.oItem
                });














                // switch (oItem) {
                //     case "313":
                //     case "315":
                //     case "309":
                      
                //         this.getOwnerComponent().getRouter().navTo("secondview")
                //         break;

                //     case "301":
                //         this.getOwnerComponent().getRouter().navTo("secondview")
                //         break;

                //     case "311":
                //     case "321":
                //     case "322":
                //     case "325":
                //     case "343":
                //     case "344":
                //         this.getOwnerComponent().getRouter().navTo("secondview")
                //         break;
                // }

            },
        });
    });
