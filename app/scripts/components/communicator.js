(function() {
	'use strict';

	var root = this;

	root.define([
		'backbone',
		'backbone.wreqr'
	],
	function(Backbone) {

		return {
			mediator: new Backbone.Wreqr.EventAggregator(),
			reqres: new Backbone.Wreqr.RequestResponse(),
			commands: new Backbone.Wreqr.Commands()
		};

	});
}).call( this );