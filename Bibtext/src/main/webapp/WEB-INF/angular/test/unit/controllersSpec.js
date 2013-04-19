'use strict';

/* jasmine specs for controllers go here */

describe('listController', function() {

    var $httpBackend, $controller, scope;

    beforeEach(inject(function($injector, $rootScope, $controller) {
        $httpBackend = $injector.get('$httpBackend');
        scope = $rootScope.$new();

    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should display a proper amount of elements', inject(function($controller) {
        $httpBackend.when('GET', '../rest').respond([
            {"id": 1, "authors": ["421"], "title": "421", "year": 421, "bibtextID": null, "type": null, "booktitle": null, "publisher": "421", "pages": null, "address": null, "journal": null, "volume": 0, "number": 0},
            {"id": 2, "authors": ["safdsafd"], "title": "fdasfd", "year": 4324, "bibtextID": null, "type": null, "booktitle": null, "publisher": "fdsafds", "pages": null, "address": null, "journal": null, "volume": 0, "number": 0},
            {"id": 3, "authors": ["fds"], "title": "fds", "year": 4334, "bibtextID": null, "type": null, "booktitle": null, "publisher": "fdsfas", "pages": null, "address": null, "journal": null, "volume": 0, "number": 0},
            {"id": 4, "authors": ["fsa"], "title": "sa", "year": 4242, "bibtextID": null, "type": null, "booktitle": null, "publisher": "fasfsa", "pages": null, "address": null, "journal": null, "volume": 0, "number": 0},
            {"id": 5, "authors": ["fasfs"], "title": "fassa", "year": 6666, "bibtextID": null, "type": null, "booktitle": null, "publisher": "fasfsa", "pages": null, "address": null, "journal": null, "volume": 0, "number": 0}]);

        var controller = $controller('listController', {
            $scope: scope
        });
        $httpBackend.flush();
        expect(scope.references.length).toBe(5);

    }));

    it('should fetch data on load', inject(function($controller) {
        $httpBackend.when('GET', '../rest').respond([]);
        $httpBackend.expectGET('../rest');
        var controller = $controller('listController', {
            $scope: scope
        });
        $httpBackend.flush();
    }));

    it('should give no answers', inject(function($controller) {
        $httpBackend.when('GET', '../rest').respond([]);
        $httpBackend.expectGET('../rest');

        var controller = $controller('listController', {
            $scope: scope
        });
        $httpBackend.flush();
        expect(scope.references.length).toBe(0);
    }));

});

describe('submissionController', function() {

    var $httpBackend, controller, scope;

    beforeEach(inject(function($injector, $rootScope, $controller) {
        $httpBackend = $injector.get('$httpBackend');
        scope = $rootScope.$new();
        var controller = $controller('submissionController', {
            $scope: scope
        });

    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should format authors properly to an array', (function() {
        var payload = {
            "authors": [
                {
                    "name": "author1"
                },
                {
                    "name": "author2"
                },
                {
                    "name": "author3"
                }
            ],
            "title": "title",
            "year": "2011",
            "publisher": "pub"
        }
        var result = scope.authorsToStringArray(payload);
        expect(result[0]).toMatch("author1");
        expect(result[1]).toMatch("author2");
        expect(result[2]).toMatch("author3");

    }));

    it('should clear the author object when resetting', (function() {
        scope.reference = {
            "authors": [
                {
                    "name": "author1"
                },
                {
                    "name": "author2"
                },
                {
                    "name": "author3"
                }
            ],
            "title": "title",
            "year": "2011",
            "publisher": "pub"
        };

        scope.reset();

        expect(scope.reference.title).toMatch("");
        expect(scope.reference.authors.length).toBe(1);
        expect(scope.reference.authors.name).toMatch("");
        expect(scope.reference.year).toMatch("");
        expect(scope.reference.publisher).toMatch("");
    }));

    it('should add a new author field when requested', (function() {
        scope.reference = {
            "authors": [
                {
                    "name": "author1"
                }
            ],
            "title": "title",
            "year": "2011",
            "publisher": "pub"
        };
        scope.newAuthorField();

        expect(scope.reference.title).toMatch("");
        expect(scope.reference.authors.length).toBe(2);
        expect(scope.reference.year).toMatch("");
        expect(scope.reference.publisher).toMatch("");
    }));
    
    it('should generate a proper Bibtex identifier for reference, comma separated authors', (function() {
        var reference= {
            "booktitle": "SIGCSE '11: Proceedings of the 42nd SIGCSE technical symposium on Computer science education",
            "authors": [
                {
                    "name": "Vihavainen, Arto"
                },
                {
                    "name": "Paksula, Matti"
                },
                {
                    "name": "Luukkainen, Matti"
                }],
                "title": "Extreme Apprenticeship Method in Teaching Programming for Beginners.",
                "year": "2011"
        };
        
        reference.bibtextID = scope.generateBibtextID(reference);
        expect(reference.bibtextID).toMatch("VPL11");
    }));
    
        it('should generate a proper Bibtex identifier for reference, space separated authors', (function() {
        var reference= {
            "booktitle": "SIGCSE '11: Proceedings of the 42nd SIGCSE technical symposium on Computer science education",
            "authors": [
                {
                    "name": "Arto Vihavainen"
                },
                {
                    "name": "Matti Paksula"
                },
                {
                    "name": "Matti Luukkainen"
                }],
                "title": "Extreme Apprenticeship Method in Teaching Programming for Beginners.",
                "year": "2011"
        };
        
        reference.bibtextID = scope.generateBibtextID(reference);
        expect(reference.bibtextID).toMatch("VPL11");
    }));

});