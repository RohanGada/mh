// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
// var _ = require('lodash');
angular.module('starter', ['ionic','ngCordova', 'starter.controllers',])

.run(function ($ionicPlatform, $cordovaStatusbar) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)

      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
$cordovaStatusbar.overlaysWebView(true);

// styles: Default : 0, LightContent: 1, BlackTranslucent: 2, BlackOpaque: 3
$cordovaStatusbar.style(1);

// supported names: black, darkGray, lightGray, white, gray, red, green, blue,
// cyan, yellow, magenta, orange, purple, brown
$cordovaStatusbar.styleColor('black');

$cordovaStatusbar.styleHex('#000');

$cordovaStatusbar.hide();

$cordovaStatusbar.show();

var isVisible = $cordovaStatusbar.isVisible();

      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }

    });
    
  })

  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider
      .backButton
      .previousTitleText(false)
      .text('');
    $ionicConfigProvider
      .views
      .maxCache(0);
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.search', {
        url: '/search',
        views: {
          'menuContent': {
            templateUrl: 'templates/search.html',
            controller: 'SearchCtrl'
          }
        }
      })

      .state('app.browse', {
        url: '/browse',
        views: {
          'menuContent': {
            templateUrl: 'templates/browse.html'
          }
        }
      })
      .state('app.managerapproval', {
        url: '/managerapproval',
        views: {
          'menuContent': {
            templateUrl: 'templates/manager-approval.html',
            controller: 'ManagerApprovalCtrl'
          }
        }
      })
      .state('app.employee', {
        url: '/employee',
        views: {
          'menuContent': {
            templateUrl: 'templates/employee.html',
            controller: 'EmployeeCtrl'
          }
        }
      })
      .state('app.travelapproval', {
        url: '/travelapproval',
        views: {
          'menuContent': {
            templateUrl: 'templates/travel-approval.html',
            controller: 'TravelApprovalCtrl'
          }
        }
      })
      .state('app.mypayslip', {
        url: '/mypayslip',
        views: {
          'menuContent': {
            templateUrl: 'templates/mypayslip.html',
            controller: 'MyPaySlipCtrl'
          }
        }
      })
      .state('app.playlists', {
        url: '/playlists',
        views: {
          'menuContent': {
            templateUrl: 'templates/playlists.html',
            controller: 'PlaylistsCtrl'
          }
        }
      })

      .state('app.single', {
        url: '/playlists/:playlistId',
        views: {
          'menuContent': {
            templateUrl: 'templates/playlist.html',
            controller: 'PlaylistCtrl'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/search');
  });
