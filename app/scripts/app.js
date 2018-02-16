'use strict';

/**
 * @ngdoc overview
 * @name agMaterApp
 * @description
 * # agMaterApp
 *
 * Main module of the application.
 */
angular.module('agMaterApp', [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
]).config(['$locationProvider','$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  }).when('/list', {
    templateUrl: 'views/list.html',
    controller: 'ListCtrl',
    controllerAs: 'list'
  }).when('/list/item/:id', {
    templateUrl: 'views/list/item.html',
    controller: 'ListItemCtrl',
    controllerAs: 'listItem',
    // resolve: {
    //   itemDetails: [
    //     '$http',
    //     'ListService',
    //     '$route',
    //     function($http, ListService, $route) {
    //       if (!isNaN(parseInt($route.current.params.id))){
    //         ListService.fetchItemDetails(parseInt($route.params.id)).then( function(result){
    //           return result.data.data;
    //         }, function(err){
    //           console.log(err);
    //         });
    //       }
    //     }
    //   ]
    // }
  }).otherwise({redirectTo: '/'});
   $locationProvider.html5Mode(true);
}]);
