(function() {
    'use strict';

    var root = this;

    root.require([
		'backbone',
		'application'
	],
	function (Backbone, App) {
		App.start();
	});
}).call( this );