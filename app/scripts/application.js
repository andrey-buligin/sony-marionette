(function() {
    'use strict';

    var root = this;

    root.define([
        'backbone',
        'base/baseController',
        'hbs!tmpl/welcome'
    ],

    function(Backbone, Controller, welcomeTmpl) {
        var App = new Backbone.Marionette.Application(),
            indexController = new Controller();

        root.App = App;

        App.getCurrentRoute = function(){
            return Backbone.history.fragment;
        };

        var AppLayout = Backbone.Marionette.Layout.extend({
            el: "#app",
            template: welcomeTmpl,

            regions: {
                header: '#main-nav',
                content: '#content'
            }
        });

        App.addInitializer(function () {
            App.layout = new AppLayout();

            Backbone.history.start();
            if (this.getCurrentRoute() === ""){
                App.vent.trigger("assets:list");
            }
            indexController.mediator.trigger("APP:START");
        });

        return App;
    });
}).call( this );