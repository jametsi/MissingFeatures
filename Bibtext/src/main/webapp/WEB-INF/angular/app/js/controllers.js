'use strict';

/* Controllers */

function listController($scope, $http) {

    $scope.references = [];

    // Getter method for JSON data from backend
    $scope.getListing = function() {
        $http.get('../rest').success(function(data) {
            $scope.references = data;
        });
    };
    // Default action after page load
    $scope.getListing();
    
    $scope.deleteReference = function(id) {
        $http['delete']('../rest/'+id).success(function() {
            $scope.getListing();
        });
    };
}
;

function referenceDetailController($scope, $http, $routeParams) {
    $http.get('../rest/' + $routeParams.referenceId).success(function(data) {
        $scope.reference = data;
    });

}
;

function submissionController($scope, $http, $location, $routeParams) {
    if($routeParams.referenceId !== undefined) {
        $scope.modify = true;
        $http.get('../rest/' + $routeParams.referenceId).success(function(data) {
            $scope.reference = data;
            var authors = [];
            console.log($scope.reference.authors);
            for(var i = 0; i < $scope.reference.authors.length;i++) {
                authors.push({name:$scope.reference.authors[i]});
            }
            
            $scope.reference.authors = authors;
        });
    }
    $scope.isArticle = function() {
        return $scope.reference.type === 'Article';
    }
    // New author object
    $scope.newAuthorField = function() {
        $scope.reference.authors.push({"name": ""});
    };

    // Empty the book data
    $scope.reset = function() {
        $scope.reference = {
            "authors": [{"name": ""}],
            "type": "Book"
        };
    };
    
    // Take a reference, grab authorObjs and return array of authors
    $scope.authorsToStringArray = function(reference) {
        var resultArray = [];
        for (var i = 0; i < reference.authors.length; ++i) {
            resultArray.push(reference.authors[i].name);
        }
        ;
        return resultArray;
    };


    // For comma separated authors, take [0][1] from string,
    // for others take [1][0] for first Lastname char
    // concatenate last two digits of year
    
    $scope.generateBibtextID = function(reference) {
        if ((!reference ||
                reference.year.length < 4) ||
                reference.authors[0].name.charAt(' ') === -1) {
            return "";
        }
        reference.year += "";
        var year = reference.year.substring(2, 4);
        var result = "";
        for (var i = 0; i < reference.authors.length; ++i) {
            var name = reference.authors[i].name;
            if (name.indexOf(',') !== -1) {
                result += name.split(", ")[0].charAt(0);
            } else {
                result += name.split(" ")[1].charAt(0);
            }
        }
        return result + year;
    };

    // Submit the HTTP Post to backend REST URL
    $scope.submit = function(reference) {
        reference.bibtextID = this.generateBibtextID(reference);
        reference["authors"] = this.authorsToStringArray(reference);

        if ($scope.modify) {
            $http.post('../rest/'+$scope.reference.id, angular.toJson(reference), {
            'Content-Type': 'application/json'
            }).success(function(date) {
                $location.path("/list")
            });
        }
        $http.post('../rest', angular.toJson(reference), {
            'Content-Type': 'application/json'
        }).success(function(date) {
            $location.path("/list")
        });
        
    };
    // Default actions to run on start
    $scope.reset();
    
    $scope.getReference = function(id) {
        $http.get('../rest/'+id).success(function(data) {
            $scope.reference = data;
        });
    };

};
