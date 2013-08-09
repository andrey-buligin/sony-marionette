(function() {
	'use strict';

	var root = this;

	root.define([
		'backbone',
		'backbone.marionette'
	],
	function( Backbone ) {

		var BaseController = Backbone.Marionette.Controller.extend({
			initialize: function() {
				// create a pub sub
				this.mediator = new Backbone.Wreqr.EventAggregator();

				//create a req/res
				this.reqres = new Backbone.Wreqr.RequestResponse();

				// create commands
				this.command = new Backbone.Wreqr.Commands();

				/* internal region manager */
				this._regionManager = new Backbone.Marionette.RegionManager();

				/* event API */
				this.reqres.setHandler("RM:addRegion", this.addRegion, this);
				this.reqres.setHandler("RM:removeRegion", this.removeRegion, this);
				this.reqres.setHandler("RM:getRegion", this.getRegion, this);
			},

			/* add region facade */
			addRegion: function( regionName, regionId ) {
				return this._regionManager.addRegion( regionName, regionId );
			},

			/* remove region facade */
			removeRegion: function( regionName ) {
				this._regionManager.removeRegion( regionName );
			},

			/* get region facade */
			getRegion: function( regionName ) {
				return this._regionManager.get( regionName );
			}
		});

		console.log('request for base controller');
		return BaseController;

	});
}).call( this );