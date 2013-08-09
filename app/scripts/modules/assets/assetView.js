(function() {
    'use strict';

    var root = this;

    root.define([
        'modules/base/baseItemView',
        'hbs!tmpl/modules/asset'
    ],
    function(BaseItemView, AssetTpl) {

        return BaseItemView.extend({
            template: AssetTpl,

            initialize: function() {
                console.log("initialize asset view");
            },

            onRender: function() {
                console.log('asset rendered');
            }
        });

    });
}).call( this );
