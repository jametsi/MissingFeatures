'use strict';

/* Controllers */

function listController($scope, $http) {
    
    // Getter method for JSON data from backend
    $scope.getListing = function() {
            $http.get('../rest').success(function(data) {
        $scope.references = data;
    });
    }
    // Default action after page load
    $scope.getListing();
};

function referenceDetailController($scope, $http) {
    
    //tobedone
};

function submissionController($scope, $http, $location) {
 
    // Clear the book at first
    $scope.book= {};
 
    // Update the object whenever a letter is typed
    $scope.update = function(book) {
        $scope.master = angular.copy(book);
    };

    // Empty the book data
    $scope.reset = function() {
        $scope.book = {}; 
    };
 
    // Submit the HTTP Post to backend REST URL
    $scope.submit = function(book) {
    
        $http.post('../rest', angular.toJson($scope.book), {
            'Content-Type': 'application/json'
        }).success(function(date) { $location.path("/list")});
        
    }
    
    $scope.reset();
    
};