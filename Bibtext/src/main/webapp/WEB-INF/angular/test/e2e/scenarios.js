'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Bibtext front', function() {

    beforeEach(function() {
          browser().navigateTo('../front/index.html');
    });


    it('should automatically redirect to /list when location hash/fragment is empty', function() {
          expect(browser().location().url()).toBe("/list");
    });


    describe('Reference list', function() {

        beforeEach(function() {
            browser().navigateTo('#/list');
        });


        it('should render listview when user navigates to /list', function() {
          expect(element('[ng-view] p:first').text()).
            toMatch(/No references! You can add new references from the top menu/);
        });

    });

    describe('Submit reference', function() {

        beforeEach(function() {
            element('#submitlink').click();
        });

        it('should show submit page', function() {
          expect(browser().location().url()).toBe("/submit");
        });
        
        it('should accept a reference with title, author & published fields', function() {
            input('reference.title').enter('jokutitle');
            input('reference.authors[$index].name').enter('jokuauthor jokuauthor');
            input('reference.year').enter('2013');
            element("#submitbutton", "Submit Button").click();
            expect(browser().location().url()).toBe("/list");
            expect(element('#typefield').text()).
                toMatch(/Book/);
            expect(element('#titlefield').text()).
                toMatch(/jokutitle/);
            expect(element('#authorfield').text()).
                toMatch(/jokuauthor jokuauthor/);
            expect(element('#yearfield').text()).
                toMatch(/2013/);
        });

    });

});



