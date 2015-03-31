(function() {
    'use strict';

    angular
        .module('app')
        .config(config);

    function config($routeProvider) {
        $routeProvider.when('/',{
            templateUrl:'/templates/login',
            controller:'LoginController'
        });
    }

})();