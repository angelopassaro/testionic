(function () {
    'use strict';

    angular
        .module('home')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$scope', '$http'];

    function homeCtrl($scope, $http) {
  
        $http.post("http://192.168.1.105/connect.php?user")
            .then(function (response) { $scope.myData = response.data});
        

    }

})();