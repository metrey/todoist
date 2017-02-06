// Ionic template App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'TodoifyApp' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('TodoifyApp', ['ionic', 'backand', 'TodoifyApp.controllers', 'TodoifyApp.services'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }
        });
    })
    .config(function (BackandProvider, $stateProvider, $urlRouterProvider, $httpProvider) {

        BackandProvider.setAppName('todoify');
        //BackandProvider.setSignUpToken('4ce88904-75c5-412c-8365-df97d9e18a8f'); //token that enable sign up. see http://docs.backand.com/en/latest/apidocs/security/index.html#sign-up
        BackandProvider.setAnonymousToken('ec8491df-5426-4ab1-871f-8c6211803027'); // token is for anonymous login. see http://docs.backand.com/en/latest/apidocs/security/index.html#anonymous-access

        $stateProvider
            // setup an abstract state for the tabs directive
            .state('todolist', {
                url: '/todolist',
                templateUrl: 'templates/todo-list.html',
                controller: 'TodoListCtrl as vm'
            });

        $urlRouterProvider.otherwise('/todolist');

        $httpProvider.interceptors.push('APIInterceptor');
    })
