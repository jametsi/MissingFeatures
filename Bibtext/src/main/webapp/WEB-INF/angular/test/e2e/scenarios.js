'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('../front/index.html');
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
        toMatch(/This will be the reference list, it tries to get the array of references, and shows reference.bibtext./);
    });

  });


//  describe('view2', function() {
//
//    beforeEach(function() {
//      browser().navigateTo('#/view2');
//    });
//
//
//    it('should render view2 when user navigates to /view2', function() {
//      expect(element('[ng-view] p:first').text()).
//        toMatch(/partial for view 2/);
//    });
//
//  });
});
