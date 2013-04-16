'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('/front/index.html');
  });


  it('should automatically redirect to /list when location hash/fragment is empty', function() {
     //alert(browser().location().url());
    expect(browser().location().url()).toBe("/list");
  });


  describe('list', function() {

    beforeEach(function() {
      browser().navigateTo('#/list');
    });


    it('should render listview when user navigates to /list', function() {
        console.log(element('[ng-view] p:first').text());
      expect(element('[ng-view] p:first').text()).
        toMatch(/No references! You can add new references from the top/);
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
