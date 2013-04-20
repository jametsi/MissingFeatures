'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });


  it('should automatically redirect to /list when location hash/fragment is empty', function() {
    expect(browser().location().url()).toBe("/list");
  });


  describe('list', function() {

    beforeEach(function() {
      browser().navigateTo('#/list');
    });


    it('should render listview when user navigates to /list', function() {
      expect(element('[ng-view] p:first').text()).
        toMatch(/No references! You can add new references from the top menu/);
    });

  });



});
