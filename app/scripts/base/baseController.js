(function() {
	'use strict';

	var root = this;

	root.define([
		'backbone',
		'communicator'
	],
	function(Backbone, Communicator) {

		var BaseController = Backbone.Marionette.Controller.extend({
			initialize: function() {

				// global events
				this.communicator = Communicator;

				// local a pub sub
				this.mediator = new Backbone.Wreqr.EventAggregator();

				/* internal region manager */
				this._regionManager = new Backbone.Marionette.RegionManager();

				/* event API */
				this.mediator.on("RM:addRegion", this.addRegion, this);
				this.mediator.on("RM:removeRegion", this.removeRegion, this);
				this.mediator.on("RM:getRegion", this.getRegion, this);
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

		return BaseController;

	});
}).call( this );