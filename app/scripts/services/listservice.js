'use strict';

/**
 * @ngdoc service
 * @name agMaterApp.ListService
 * @description
 * # ListService
 * Service in the agMaterApp.
 */
angular.module('agMaterApp').service('ListService', [
  '$http',
  function($http) {

    var factory = {}, ENV = {};
    ENV.url = 'http://localhost:8900/';

    // function fetchItemDetails(id) {
    //   return $http.get(ENV.url + 'list/' + id);
    // }

    // factory.fetchItemDetails = fetchItemDetails();

    return factory;

    // AngularJS will instantiate a singleton by calling "new" on this function
  }
]);
