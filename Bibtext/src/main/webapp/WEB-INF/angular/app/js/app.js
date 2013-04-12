'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/list', {templateUrl: 'partials/listreferences.html', controller: listController});
    $routeProvider.when('/submit', {templateUrl: 'partials/submitreference.html', controller: submissionController});
    $routeProvider.otherwise({redirectTo: '/list'});
  }]);
