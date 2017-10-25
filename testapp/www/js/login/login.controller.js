(function() {
    'use strict';

    angular
        .module('login')
        .controller('loginCtrl',  loginCtrl);

        loginCtrl.$inject = ['$scope', '$ionicHistory'];

    

    function loginCtrl($scope, $ionicHistory) {

        $scope.back = function () {
            $ionicHistory.goBack();
        }
    }
})();