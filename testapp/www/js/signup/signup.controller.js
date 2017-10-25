(function () {
    'use strict';

    angular
        .module('signup')
        .controller('signupCtrl', signupCtrl);

    signupCtrl.$inject = ['$scope', '$ionicHistory', '$http'];

    function signupCtrl($scope, $ionicHistory, $http) {

        $scope.back = function () {
            $ionicHistory.goBack();
        }

        $scope.validate = function (user) {

            $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

            var data = {
                'name': user.name,
                'surname': user.surname
            };


            $http.post("http://192.168.1.105/connect.php?signup", data)
                .then(function(response) {
                    console.log("ok" ,response.data);
                }, function (response) {
                    console.log("response",response.data);
                });

        }

    }

})();