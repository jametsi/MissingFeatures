'use strict';

/* Controllers */

function listController($scope, $http) {
    
    $scope.references = [];

    // Getter method for JSON data from backend
    this.getListing = function() {
        $http.get('../rest').success(function(data) {
            $scope.references = data;
        });
    };
    // Default action after page load
    this.getListing();
};

function referenceDetailController($scope, $http, $routeParams) {
    $http.get('../rest/'+$routeParams.referenceId).success(function(data) {
       $scope.reference = data;
        console.log($scope.reference);
    });

};

function submissionController($scope, $http, $location) {

    // New author object
    $scope.newAuthorField = function() {
        $scope.reference.authors.push({"name": ""});
    };

    // Empty the book data
    $scope.reset = function() {
        $scope.reference = {
            "authors": [{"name": ""}]
        };
    };

    $scope.authorsToStringArray = function(reference) {
        var resultArray = [];
        for (var i = 0; i < reference.authors.length; ++i) {
            resultArray.push(reference.authors[i].name);
        }
        ;
        return resultArray;
    };

    // Submit the HTTP Post to backend REST URL
    $scope.submit = function(reference) {
        reference["authors"] = this.authorsToStringArray(reference);
        $http.post('../rest', angular.toJson(reference), {
            'Content-Type': 'application/json'
        }).success(function(date) {
            $location.path("/list")
        });
        $scope.reset();
    };
    // Default actions to run on start
    $scope.reset();

};
