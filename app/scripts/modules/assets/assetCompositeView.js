(function() {
    'use strict';

    var root = this;

    root.define([
        'modules/base/baseCompositeView',
        'modules/assets/assetView',
        'hbs!tmpl/modules/asset'
    ],
    function(BaseCompositeView, AssetView, AssetTpl) {

        return BaseCompositeView.extend({
            itemView: AssetView,
            template: AssetTpl,

            initialize: function() {
                console.log("initialize an Asset CompositeView");
            },

            onRender: function() {
                console.log('assets list rendered');
            }
        });

    });
}).call( this );
