(function() {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    function LoginController($scope, LoginFactory) {

        $scope.loginSubmit = function(){

            var auth = LoginFactory.auth({usuario: $scope.usuario, senha: $scope.senha});

            auth.success(function(response){
                console.log(response);
            });

            auth.error(function(response){
                console.log(response);
            });

        }

    }

})();