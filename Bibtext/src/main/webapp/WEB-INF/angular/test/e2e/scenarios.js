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

    describe('Submit book reference', function() {

        beforeEach(function() {
            element('#submitlink').click();
        }); 

        it('should show submit page after clicking submit-link', function() {
          expect(browser().location().url()).toBe("/submit");
        });
        
        it('should accept a reference with title, author & published fields', function() {
            input('reference.title').enter('jokutitle');
            input('reference.authors[$index].name').enter('jokuauthor jokuauthor');
            input('reference.year').enter('2013');
            element("#submitbutton", "Submit Button").click();
            expect(browser().location().url()).toBe("/list");
            expect(element('#referenceList tr:last-child .typefield').text()).
                toMatch(/Book/);
            expect(element('#referenceList tr:last-child .titlefield').text()).
                toMatch(/jokutitle/);
            expect(element('#referenceList tr:last-child .authorfield').text()).
                toMatch(/jokuauthor jokuauthor/);
            expect(element('#referenceList tr:last-child .yearfield').text()).
                toMatch(/2013/);
        });

    });
    
     describe('Submit article reference', function() {

        beforeEach(function() {
            element('#submitlink').click();
        });

        it('should show submit page after clicking submit-link', function() {
          expect(browser().location().url()).toBe("/submit");
        });
        
        it('should accept a reference with title, author & published fields', function() {
            select('reference.type').option('Article');
            input('reference.title').enter('jokutitle');
            input('reference.authors[$index].name').enter('jokuauthor jokuauthor');
            input('reference.year').enter('2013');
            element("#submitbutton", "Submit Button").click();
            expect(browser().location().url()).toBe("/list");
            expect(element('#referenceList tr:last-child .typefield').text()).
                toMatch(/Article/);
            expect(element('#referenceList tr:last-child .titlefield').text()).
                toMatch(/jokutitle/);
            expect(element('#referenceList tr:last-child .authorfield').text()).
                toMatch(/jokuauthor jokuauthor/);
            expect(element('#referenceList tr:last-child .yearfield').text()).
                toMatch(/2013/);
        });

    });
    
    describe('Submit Inproceedings reference', function() {

        beforeEach(function() {
            element('#submitlink').click();
        });

        it('should show submit page after clicking submit-link', function() {
          expect(browser().location().url()).toBe("/submit");
        });
        
        it('should accept a reference with title, author & published fields', function() {
            select('reference.type').option('Inproceedings');
            input('reference.title').enter('jokutitle');
            input('reference.authors[$index].name').enter('jokuauthor jokuauthor');
            input('reference.year').enter('2013');
            element("#submitbutton", "Submit Button").click();
            expect(browser().location().url()).toBe("/list");
            expect(element('#referenceList tr:last-child .typefield').text()).
                toMatch(/Inproceedings/);
            expect(element('#referenceList tr:last-child .titlefield').text()).
                toMatch(/jokutitle/);
            expect(element('#referenceList tr:last-child .authorfield').text()).
                toMatch(/jokuauthor jokuauthor/);
            expect(element('#referenceList tr:last-child .yearfield').text()).
                toMatch(/2013/);
        });

    });
    
    describe('Modify reference', function() {

        it('should show the inproceedings submitted recently', function() {
            expect(element('.typefield:first').text()).
                toMatch(/Inproceedings/);
            expect(element('.titlefield:first').text()).
                toMatch(/jokutitle/);
        });
        
        it('should show allow modifying existing reference and seeing the changes in the list', function() {
            element('#referenceList tr:last-child button:first').click();
            expect(input('reference.title').val()).
                    toMatch(/jokutitle/);
            expect(input('reference.authors[$index].name').val()).
                    toMatch(/jokuauthor jokuauthor/);
            expect(input('reference.year').val()).
                    toMatch(/2013/);
            input('reference.title').enter('muokattutitle');
            element('#submitbutton').click();
            expect(browser().location().url()).toBe("/list");
            expect(element('#referenceList tr:last-of-type .titlefield').text()).
                    toMatch(/muokattutitle/)
        });

    });
    
    describe('Delete reference', function() {

        it('should show the inproceedings modified recently', function() {
            expect(element('#referenceList tr:last-of-type .typefield').text()).
                toMatch(/Inproceedings/);
            expect(element('#referenceList tr:last-of-type .titlefield').text()).
                toMatch(/muokattutitle/);
        });
        
        it('should show allow deleting a single reference', function() {
            element('#referenceList tr:last-child button:nth(1)').click();
            expect(browser().location().url()).toBe("/list");
            expect(element('#referenceList tr:last-of-type .typefield').text()).
                    toMatch(/Article/);
        });

    });

 
});

