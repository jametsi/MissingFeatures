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
    // Update the object whenever a letter is typed
  //  $scope.update = function(book) {
 //       $scope.master = angular.copy(book);
 //   };
    
    $scope.newAuthorField = function() {
        $scope.reference.authors.push({"name": ""});
    };

    // Empty the book data
    $scope.reset = function() {
        $scope.reference = {
            "authors" : [{"name": ""}]
        };
    };
    
    function authorsToStringArray(reference) {
        var resultArray = [];
        for(var i = 0 ; i < reference.authors.length ; ++i) {
            resultArray.push(reference.authors[i].name);
        };
        return resultArray;
    };
 
    // Submit the HTTP Post to backend REST URL
    $scope.submit = function(reference) {
        console.log(reference);
        reference["authors"] = authorsToStringArray(reference);
        console.log(reference);
        $http.post('../rest', angular.toJson(reference), {
            'Content-Type': 'application/json'
        }).success(function(date) { $location.path("/list")});
        $scope.reset();
    };
    $scope.reset();
    
};