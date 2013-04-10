'use strict';

/* Controllers */

function listController($scope, $http) {
    $http.get('../rest').success(function(data) {
        $scope.references = data;
    });
}
listController.$inject = ['$scope', '$http']

function submissionController($scope, $http, $location) {
    
 $scope.book= {};
 
  $scope.update = function(book) {
    $scope.master = angular.copy(book);
  };
 
  $scope.reset = function() {
    $scope.book = {}; 
 };
 
 $scope.submit = function(book) {
    
     $http.post('../rest', angular.toJson($scope.book), {'Content-Type': 'application/json'});
     $location.path('/list');
 }
 
  $scope.reset();
    
}