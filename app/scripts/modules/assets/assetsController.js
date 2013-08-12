(function() {
    'use strict';

    var root = this;

    root.define([
            'base/baseController'
        ],
        function(BaseController) {

            var AssetsController = BaseController.extend({
                setActiveHeader: function(){
                    console.log('set Module header');
                },

                listAssets: function(){
                    console.log('list assets');
                },

                showAsset: function(assetId){
                    console.log('show asset ' + assetId);
                },

                editAsset: function(assetId){
                    console.log('edit asset ' + assetId);
                }
            });

            return AssetsController;

        });
}).call(this);