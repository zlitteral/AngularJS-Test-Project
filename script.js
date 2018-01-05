(function() {
    'use strict';

    /**
     * Main Controller
     */
    angular
        .module('app', ['ui.bootstrap'])
        .component('test', {
            templateUrl: 'views/OnOffButtons.html',
            controller: function ($scope) {
                $scope.message = '';

                $scope.toggleButton = function(condition){
                    if(condition){
                        $scope.message = 'ON';
                    }else{
                        $scope.message = 'OFF';
                    }
                }
            }
        })

})();