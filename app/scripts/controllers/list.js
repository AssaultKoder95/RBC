'use strict';

/**
 * @ngdoc function
 * @name agMaterApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the agMaterApp
 */
angular.module('agMaterApp').controller('ListCtrl', [
  '$scope',
  function($scope) {
    var v = $scope;

    v.data = [
      {
        id: 1,
        name: 'Abhishek',
        phone: '+91 99999 99999'
      }, {
        id: 2,
        name: 'Abhishek1',
        phone: '+91 93499 99999'
      }, {
        id: 3,
        name: 'Abhishek2',
        phone: '+91 99299 99999'
      }, {
        id: 4,
        name: 'Abhishek3',
        phone: '+91 99499 99999'
      }, {
        id: 5,
        name: 'Abhishe4',
        phone: '+91 99199 99999'
      }, {
        id: 6,
        name: 'Abhishe5',
        phone: '+91 91199 99999'
      }
    ];

    v.data_list1 = v.data.splice(0, v.data.length / 2);
    v.data_list2 = v.data.splice(v.data.length / 2 - 1, v.data.length + 1);
  }
]);
