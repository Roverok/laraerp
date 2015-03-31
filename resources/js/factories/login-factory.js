(function() {
    'use strict';

    angular
        .module('app')
        .factory('LoginFactory', LoginFactory);

    function LoginFactory($http) {
        return{
            auth:function(credentials){
                var authUser = $http({method:'POST',url:'api/login/auth',params:credentials});
                return authUser;
            }
        }
    }

})();