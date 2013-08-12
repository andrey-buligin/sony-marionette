(function() {
    'use strict';

    var root = this;

    root.define([
            'backbone',
            'communicator',
            'modules/assets/assetsController'
        ],
        function(Backbone, Communicator, AssetsController) {

            var Controller = new AssetsController(),

            API = {
                listAssets: function(criterion) {
                    Controller.listAssets(criterion);
                    Controller.setActiveHeader("assets");
                },
                showAsset: function(id) {
                    Controller.showAsset(id);
                    Controller.setActiveHeader("assets");
                },
                editAsset: function(id) {
                    Controller.editAsset(id);
                    Controller.setActiveHeader("assets");
                }
            },

            Router = Backbone.Marionette.AppRouter.extend({
                appRoutes: {
                    "assets(?filter=:criterion)": "listAssets",
                    "assets/:id": "showAsset",
                    "assets/:id/edit": "editAsset"
                }
            });

            Communicator.commands.setHandler('app:initRouters', function(App){
                console.log('initing routers for', App);
                App.addInitializer(function(){
                    new Router({
                        controller: API
                    });
                });
            });

            Communicator.commands.setHandler('assets:listAssets', function(){
                Backbone.history.navigate("assets");
                API.listAssets();
            });

        });
}).call(this);