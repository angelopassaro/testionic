(function () {
    'use strict';

    angular
        .module('starter')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })

            .state('tab.home', {
                url: '/home',
                views: {
                    'tab-home': {
                        templateUrl: 'js/home/tab-home.html',
                        controller: 'homeCtrl'
                    },
                    
                }
            })

            .state('tab.event', {
                url: '/event',
                views: {
                    'tab-event': {
                        templateUrl: 'js/event/tab-event.html'
                    }
                }
            })

            .state('tab.setting', {
                url: '/setting',
                views: {
                    'tab-setting': {
                        templateUrl: 'js/setting/tab-setting.html'
                    }
                }
            })

            .state('login', {
                url: '/login',
                templateUrl: 'js/login/login.html',
                controller: 'loginCtrl'
            })

            .state('signup', {
                url: '/signup',
                templateUrl: 'js/signup/signup.html',
                controller: 'signupCtrl'
            })

        $urlRouterProvider.otherwise('/tab/home');

    }
})();
