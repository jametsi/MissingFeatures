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
   
    
    $scope.save = function() {
        var bb = new BlobBuilder();
        bb.append(angular.element('.well').text())
        var blob = bb.getBlob("text/plain;charset=" + document.characterSet);
        var filename = $scope.file ? $scope.file.filename+".bib" : "default.bib";
        saveAs(blob, filename);
    };
    // Default action after page load
    $scope.getListing();
    
    $scope.deleteReference = function(id) {
        $http['delete']('../rest/'+id).success(function() {
            $scope.getListing();
        });
    };
};

function referenceDetailController($scope, $http, $routeParams) {
    $http.get('../rest/' + $routeParams.referenceId).success(function(data) {
        $scope.reference = data;
    });

};

function submissionController($scope, $http, $location, $routeParams) {
    
    // if routeParams.referenceId exists, we are modifying an existing reference
    // hence, we need to get that single reference to pre-fill the form
    if($routeParams.referenceId !== undefined) {
        $scope.modify = true;
        $http.get('../rest/' + $routeParams.referenceId).success(function(data) {
            $scope.reference = data;
            var authors = [];
            console.log($scope.reference.authors);
            for(var i = 0; i < $scope.reference.authors.length;i++) {
                authors.push({
                    name:$scope.reference.authors[i]
                });
            }
            
            $scope.reference.authors = authors;
        });
    }
    
    // These functions are used to show certain fields only when then reference
    // type needs them
    $scope.isArticle = function() {
        return $scope.reference.type === 'Article';
    }
    $scope.isInproceedings = function() {
        return $scope.reference.type === 'Inproceedings';
    }
    $scope.isArticleOrInProceedings = function() {
        return ($scope.reference.type === 'Article') || ($scope.reference.type === 'Inproceedings');
    }
    
    // New author object
    $scope.newAuthorField = function() {
        $scope.reference.authors.push({
            "name": ""
        });
    };
    
    // New tag object
    $scope.newTagField = function() {
        $scope.reference.tags.push({});  
    };

    // Empty the book data
    $scope.reset = function() {
        $scope.reference = {
            "authors": [{"name": ""}],
            "tags": [{"name": ""}],
            "type": "Book"
        };
    };
    
    // Take a reference, grab authorObjs and return array of authors
    $scope.toStringArray = function(nameArray) {
        var resultArray = [];
        for (var i = 0; i < nameArray.length; ++i) {
            resultArray.push(nameArray[i].name);
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
        reference["authors"] = this.toStringArray(reference.authors);
        reference["tags"] = this.toStringArray(reference.tags);

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
    
    $scope.debugSubmit = function() {
        var obj1 = {
            type: "inproceedings",
            authors: [
            {
                name: "Arto Vihavainen"
            },

            {
                name: "Matti Paksula"
            },

            {
                name: "Matti Luukkainen"
            }],
            title: "Extreme Apprenticeship Method in Teaching Programming for Beginners.",
            year: 2011,
            booktitle: "SIGCSE '11: Proceedings of the 42nd SIGCSE technical symposium on Computer science education"
        }
        var obj2 = {
            type: "book",
            authors: [{
                name: "Robert Martin"
            }],
            title: "Clean Code: A Handbook of Agile Software Craftsmanship",
            year: 2008,
            publisher: "Prentice Hall"
        }
        var obj3 = {
            type: "article",
            authors: [{
                name: "Keith J. Whittington"
            }],
            title: "Infusing active learning into introductory programming courses",
            journal : "J. Comput. Small Coll.",
            volume : 19,
            number : 5,
            year : 2004,
            pages : "249-259",
            publisher : "Consortium for Computing Sciences in Colleges",
            address : "USA"
        }
    
        this.submit(obj1);
        this.submit(obj2);
        this.submit(obj3);
       
    }

};
