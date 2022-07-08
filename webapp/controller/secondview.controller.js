sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/core/Fragment",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, History, Fragment, Filter, FilterOperator, MessageBox) {
        "use strict";

        return Controller.extend("materialtransfer.materialtransfer.controller.secondview", {
            onInit: function () {

                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("secondview").attachPatternMatched(this.handleDetails, this);


            },
            handleDetails: function (oEvent) {

              
                this.oItem = oEvent.getParameter("arguments").id;
                this.onController();
            },
            onNavBack: function () {
                var oHistory = History.getInstance();
                var sPreviousHash = oHistory.getPreviousHash();

                if (sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    oRouter.navTo("RouteApp", true);
                }

            },



            onController: function () {

                var ofields = {
                    "material": false,
                    "Labelmaterial": false,

                    "plant": false,
                    "Labelplant": false,


                    "descmatnr": false,
                    "Labeldescmatnr": false,

                    "destbatch": false,
                    "Labeldestbatch": false,

                    "srcplant": false,
                    "Labelsrcplant": false,

                    "destofsrcPlant": false,
                    "LabeldestofsrcPlant": false,

                    "destplant": false,
                    "Labeldestplant": false,


                    "descofdestplant": false,
                    "Labeldescofdestplant": false,

                    "srcstorlocation": false,
                    "Labelsrcstorlocation": false,

                    "dscsrcstorlocation": false,
                    "Labeldscsrcstorlocation": false,

                    "deststorlocation": false,
                    "Labeldeststorlocation": false,

                    "destdscofstorlocation": false,
                    "Labeldestdscofstorlocation": false,





                }

                ofields

                if (this.oItem === "313" || this.oItem === "315" || this.oItem === "309") {

                    ofields.material = true;
                    ofields.Labelmaterial = true;
                    ofields.descmatnr = true;
                    ofields.Labeldescmatnr = true,
                        ofields.destbatch = true;
                    ofields.Labeldestbatch = true,
                        ofields.srcplant = true;
                    ofields.Labelsrcplant = true;
                    ofields.destofsrcPlant = true;
                    ofields.LabeldestofsrcPlant = true;
                    ofields.descofdestplant = true;
                    ofields.Labeldescofdestplant = true;
                    ofields.srcstorlocation = true;
                    ofields.Labelsrcstorlocation = true;
                    ofields.dscsrcstorlocation = true;
                    ofields.Labeldscsrcstorlocation = true;
                    ofields.deststorlocation = true;
                    ofields.Labeldeststorlocation = true;
                    ofields.destdscofstorlocation = true;
                    ofields.Labeldestdscofstorlocation = true;
                    ofields.destplant = true;
                    ofields.Labeldestplant = true;




                } else if (this.oItem === "311" || this.oItem === "321" || this.oItem === "322" || this.oItem === "325" || this.oItem === "343" || this.oItem === "344") {


                    ofields.plant = true;
                    ofields.Labelplant = true;
                    ofields.srcstorlocation = true;
                    ofields.Labelsrcstorlocation = true;
                    ofields.deststorlocation = true;
                    ofields.Labeldeststorlocation = true;
                    ofields.dscsrcstorlocation = true;
                    ofields.Labeldscsrcstorlocation = true;
                    ofields.Labeldscsrcstorlocation = true;
                    ofields.dscsrcstorlocation = true




                } else {
                  
                    ofields.srcplant = true;
                    ofields.Labelsrcplant = true;
                    ofields.destplant = true;
                    ofields.Labeldestplant = true;
                    ofields.destofsrcPlant = true;
                    ofields.LabeldestofsrcPlant = true;
                    ofields.Labeldescofdestplant = true;
                    ofields.descofdestplant = true;
                    ofields.Labelsrcstorlocation = true;
                    ofields.srcstorlocation = true;
                    ofields.Labeldeststorlocation = true;
                    ofields.deststorlocation = true;
                    ofields.Labeldscsrcstorlocation = true;
                    ofields.dscsrcstorlocation = true;
                }
                var oModel = new sap.ui.model.json.JSONModel(ofields);
                this.getView().setModel(oModel, "Fields");
            },

            onReadPlant: function () {

                var oModel = this.getOwnerComponent().getModel();
                var that = this;

                oModel.read(`/storageLocation1Set`, {
                    success: function (oData) {
                        var sRequest = new sap.ui.model.json.JSONModel(oData.results);
                        that.getView().setModel(sRequest, "Plant");

                    },
                    error: function (Error) {
                    }
                });
            },

            onReadBatch: function (oFilter) {

                var oModel = this.getOwnerComponent().getModel();
                var that = this;

                oModel.read(`/batchSet`, {
                    filters: oFilter,
                    success: function (oData) {
                        var sRequest = new sap.ui.model.json.JSONModel(oData.results);
                        that.getView().setModel(sRequest, "Batch");

                    },
                    error: function (Error) {
                    }
                });
            },

            onReadStorage: function () {

                var oModel = this.getOwnerComponent().getModel();
                var that = this;

                oModel.read(`/storageLocation1Set`, {
                    success: function (oData) {
                        var sRequest = new sap.ui.model.json.JSONModel(oData.results);
                        that.getView().setModel(sRequest, "Storage");


                    },
                    error: function (Error) {
                    }
                });
            },

            onReadMaterial: function () {

                var oModel = this.getOwnerComponent().getModel();
                var that = this;
                oModel.read(`/material1Set`, {
                    success: function (oData) {
                        var sRequest = new sap.ui.model.json.JSONModel(oData.results);
                        that.getView().setModel(sRequest, "Material");

                    },
                    error: function (Error) {
                    }
                });
            },


            onValueHelpRequestBatch: function (oEvent) {
                var sInputValue = oEvent.getSource().getValue(),
                    oView = this.getView();
                var that = this;


                var sValue = this.getView().byId("idDestination").getValue();
                var oFilter = [];
                oFilter.push(new Filter("Matnr", FilterOperator.EQ, sValue));



                if (!this._pValueHelpDialogBatch) {
                    this._pValueHelpDialogBatch = Fragment.load({
                        id: oView.getId(),
                        name: "materialtransfer.materialtransfer.view.fragment.Batch",
                        controller: this
                    }).then(function (oDialog) {
                        oView.addDependent(oDialog);
                        return oDialog;
                    });
                }
                this._pValueHelpDialogBatch.then(function (oDialog) {
                    that.onReadBatch(oFilter);
                    oDialog.open(sInputValue);
                });
            },


            onValueHelpSearchBatch: function (oEvent) {
                var sValue = oEvent.getParameter("value");
                var oFilter = new Filter("Branch", FilterOperator.Contains, sValue);
            },

            onValueHelpCloseBatch: function (oEvent) {
                var oSelectedItem = oEvent.getParameter("selectedItem");
                if (!oSelectedItem) {
                    return;
                }

                this.getView().byId("idDestinationBatch").setValue(oSelectedItem.getTitle());
            },

            onValueHelpRequestPlant: function (oEvent) {
                var sInputValue = oEvent.getSource().getValue(),
                    oView = this.getView();
                this.oEventId1 = oEvent.getSource().sId;
                var that = this;

                if (!this._pValueHelpDialogPlant) {
                    this._pValueHelpDialogPlant = Fragment.load({
                        id: oView.getId(),
                        name: "materialtransfer.materialtransfer.view.fragment.Plant",
                        controller: this
                    }).then(function (oDialog) {
                        oView.addDependent(oDialog);
                        return oDialog;
                    });
                }
                this._pValueHelpDialogPlant.then(function (oDialog) {
                    that.onReadPlant();
                    oDialog.open(sInputValue);
                });
            },


            onValueHelpSearchPlant: function (oEvent) {
                var sValue = oEvent.getParameter("value");
                var oFilter = new Filter("Plant", FilterOperator.Contains, sValue);
            },

            onValueHelpClosePlant: function (oEvent) {
                var oSelectedItem = oEvent.getParameter("selectedItem");
                if (!oSelectedItem) {
                    return;
                }




                var str1 = this.oEventId1;
                if (str1.substring(77, 86) === "idSource") {
                    this.getView().byId("idSource").setValue(oSelectedItem.getTitle());
                }

                else if (str1.substring(77, 106) === "idDestinationPlant") {
                    this.getView().byId("idDestinationPlant").setValue(oSelectedItem.getTitle());
                }
                else {
                    this.getView().byId("idPlant").setValue(oSelectedItem.getTitle());
                }
            },





            onValueHelpRequestStorage: function (oEvent) {
                var sInputValue = oEvent.getSource().getValue(),
                    oView = this.getView();
                this.oEventId = oEvent.getSource().sId;

                var that = this;

                if (!this._pValueHelpDialogStorage) {
                    this._pValueHelpDialogStorage = Fragment.load({
                        id: oView.getId(),
                        name: "materialtransfer.materialtransfer.view.fragment.Storage",
                        controller: this
                    }).then(function (oDialog) {
                        oView.addDependent(oDialog);
                        return oDialog;
                    });
                }
                this._pValueHelpDialogStorage.then(function (oDialog) {
                    that.onReadStorage();
                    oDialog.open(sInputValue);
                });
            },


            onValueHelpSearchStorage: function (oEvent) {
                var sValue = oEvent.getParameter("value");
                var oFilter = new Filter("Storage", FilterOperator.Contains, sValue);
            },

            onValueHelpCloseStorage: function (oEvent) {
                var oSelectedItem = oEvent.getParameter("selectedItem");
                if (!oSelectedItem) {
                    return;
                }


                var str1 = this.oEventId;
                if (str1.substring(77, 101) === "idSourceStorageLocation") {

                    this.getView().byId("idSourceStorageLocation").setValue(oSelectedItem.getTitle());
                    this.getView().byId("getDescriptionofSource").setText(oSelectedItem.getDescription());
                }

                else if (str1.substring(77, 106) === "idDestinationStorageLocation") {
                    this.getView().byId("idDestinationStorageLocation").setValue(oSelectedItem.getTitle());
                    this.getView().byId("getDescriptionofDestinationStorage").setText(oSelectedItem.getDescription());
                }
            },

            onValueHelpRequestMaterial: function (oEvent) {
                var sInputValue = oEvent.getSource().getValue(),
                    oView = this.getView();
                var that = this;



                if (!this._pValueHelpDialogMaterial) {
                    this._pValueHelpDialogMaterial = Fragment.load({
                        id: oView.getId(),
                        name: "materialtransfer.materialtransfer.view.fragment.Material",
                        controller: this
                    }).then(function (oDialog) {
                        oView.addDependent(oDialog);
                        return oDialog;
                    });
                }
                this._pValueHelpDialogMaterial.then(function (oDialog) {
                    that.onReadMaterial();
                    oDialog.open(sInputValue);
                });
            },


            onValueHelpSearchMaterial: function (oEvent) {

            },

            onValueHelpCloseMaterial: function (oEvent) {
                var oSelectedItem = oEvent.getParameter("selectedItem");
                if (!oSelectedItem) {
                    return;
                }

                this.getView().byId("idDestination").setValue(oSelectedItem.getTitle());
                this.getView().byId("getDescriptionofDestinationMaterial").setText(oSelectedItem.getDescription());
            },

            onClose: function () {
                this.getView().byId("idDestinationBatch").setValue('');
                this.getView().byId("idDestination").setValue('');
                this.getView().byId("getDescriptionofDestinationMaterial").setText('');
                this.getView().byId("idSourceStorageLocation").setValue('');
                this.getView().byId("idSource").setValue('');
                this.getView().byId("idDestinationPlant").setValue('');
                this.getView().byId("getDescriptionofSource").setText('');
                this.getView().byId("idDestinationStorageLocation").setValue('');
                this.getView().byId("getDescriptionofDestinationStorage").setText('');
                this.getView().byId("idPlant").setValue('');


            },


            onSave: function () {

                var oModel = this.getOwnerComponent().getModel();
                var oMaterial = this.getView().byId("idDestination").getValue();
                var oMaktx = this.getView().byId("getDescriptionofDestinationMaterial").getText();
                var oplant = this.getView().byId("idPlant").getValue();
                var oCharg = this.getView().byId("idDestinationBatch").getValue();
                var oPlant = this.getView().byId("idSource").getValue();
                var oSourceStorage = this.getView().byId("idSourceStorageLocation").getValue();
                var oLgobe = this.getView().byId("getDescriptionofSource").getText();
                var oSourceStorage2 = this.getView().byId("idDestinationStorageLocation").getValue();
                var oLgobe2 = this.getView().byId("getDescriptionofDestinationStorage").getText();


                var oEntry = {
                    "Matnr": oMaterial,
                    "Maktx": oMaktx,
                    "Werks": oPlant,
                    "Logort": oSourceStorage,
                    "Lgobe": oLgobe,
                    "Logort2": oSourceStorage2,
                    "Lgobe2": oLgobe2

                }

                oModel.create(`/createMaterialSet`, oEntry, {
                    success: function (odata) {
                        MessageBox.success("Created successfully!", {

                        });

                    },
                    error: function (error) {
                        MessageBox.error("Error. Failed to create the Material! Please try again later,", {

                        });
                    }
                });



            },

        });
    });