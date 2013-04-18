'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/list', {templateUrl: 'partials/listreferences.html', controller: listController}).
                    when('/submit', {templateUrl: 'partials/submitreference.html', controller: submissionController}).
                    when('/references/:referenceId', {templateUrl: 'partials/reference-detail.html', controller: referenceDetailController}).
                    when('/bibtextlist', {templateUrl: 'partials/bibtextlist.html', controller: listController}).
                    otherwise({redirectTo: '/list'});
  }]);
