'use strict';

/* jasmine specs for controllers go here */

describe('listController', function() {

    var $httpBackend, $controller, scope;

    beforeEach(inject(function($injector, $rootScope, $controller) {

        $httpBackend = $injector.get('$httpBackend');
        $httpBackend.when('GET', '../rest').respond([
            {"id": 1, "authors": ["421"], "title": "421", "year": 421, "bibtextID": null, "type": null, "booktitle": null, "publisher": "421", "pages": null, "address": null, "journal": null, "volume": 0, "number": 0},
            {"id": 2, "authors": ["safdsafd"], "title": "fdasfd", "year": 4324, "bibtextID": null, "type": null, "booktitle": null, "publisher": "fdsafds", "pages": null, "address": null, "journal": null, "volume": 0, "number": 0},
            {"id": 3, "authors": ["fds"], "title": "fds", "year": 4334, "bibtextID": null, "type": null, "booktitle": null, "publisher": "fdsfas", "pages": null, "address": null, "journal": null, "volume": 0, "number": 0},
            {"id": 4, "authors": ["fsa"], "title": "sa", "year": 4242, "bibtextID": null, "type": null, "booktitle": null, "publisher": "fasfsa", "pages": null, "address": null, "journal": null, "volume": 0, "number": 0},
            {"id": 5, "authors": ["fasfs"], "title": "fassa", "year": 6666, "bibtextID": null, "type": null, "booktitle": null, "publisher": "fasfsa", "pages": null, "address": null, "journal": null, "volume": 0, "number": 0}]);
        scope = $rootScope.$new();

    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should display a proper amount of elements', inject(function($controller) {
        var controller = $controller('listController', {
            $scope: scope
        });
        $httpBackend.flush();
        expect(scope.references.length).toBe(5);

    }));

    it('should fetch data on load', inject(function($controller) {
        $httpBackend.expectGET('../rest');
        var controller = $controller('listController', {
            $scope: scope
        });
        $httpBackend.flush();
    }));

});