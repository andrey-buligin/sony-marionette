(function() {
	'use strict';

	var root = this,
		App = root.App;

	root.define([
		'backbone',
		'backbone.marionette'
	],
	function( Backbone ) {

		return Backbone.Marionette.ItemView.extend({

			/* ui selector cache */
            ui: {},

            /* where are we appending the items views */
            itemViewContainer: "",

            /* Ui events hash */
            events: {},

            /* on render callback */
			onRender: function(){
				console.log('onRender', App);
			},

			/* initialisation where bindings should be setup */
			initialize: function () {
				this.listenTo(this.model, 'all', this.onRender);
			}

		});

	});
}).call( this );