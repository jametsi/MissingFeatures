'use strict';

/* Controllers */

function listController($scope, $http) {
    $http.get('../rest').success(function(data) {
        $scope.phones = data;
    });
}
listController.$inject = ['$scope', '$http']

function submissionController($scope, $http) {
    
 $scope.book= {};
 
  $scope.update = function(book) {
    $scope.master = angular.copy(book);
  };
 
  $scope.reset = function() {
    $scope.book = {}; 
 };
 
 $scope.submit = function(book) {
    
     $http.post('../rest', angular.toJson($scope.book), {'Content-Type': 'application/json'});
 }
 
  $scope.reset();
    
}