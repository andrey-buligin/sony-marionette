(function() {
    'use strict';

    var root = this;

    root.define([
        'backbone',
        'backbone.marionette',
        'communicator',
        'modules/assets/assets',
        'hbs!tmpl/modules/application/layout'
    ],

    function(Backbone, Marionette, Communicator, AssetsMod, layoutTmpl) {
        var App = new Marionette.Application();

        root.App = App;

        App.getCurrentRoute = function(){
            return Backbone.history.fragment;
        };

        // main layout
        var AppLayout = Marionette.Layout.extend({
            el: "#app",
            template: layoutTmpl,

            serializeData: function(){
                return {
                    success: 'Success'
                };
            },

            regions: {
                header: '#main-nav',
                content: '#content'
            }
        });

        App.addInitializer(function () {
            App.layout = new AppLayout().render();
        });

        App.on('initialize:before', function(){
            Communicator.commands.execute("app:initRouters", App);
        });

        // start routing after all routers have been set up in dependant modules
        App.on('start', function(){
            Backbone.history.start();
            if (this.getCurrentRoute() === ""){
                Communicator.commands.execute("assets:listAssets");
            }
            Communicator.mediator.trigger("app:start");
        });

        App.start();
    });
}).call( this );