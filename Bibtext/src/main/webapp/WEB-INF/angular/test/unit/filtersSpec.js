'use strict';

/* jasmine specs for filters go here */

describe('filter', function() {
  beforeEach(module('frontSideAngular.filters'));

  describe('concat', function() {
    beforeEach(module(function($provide) {
//      $provide.value(["Jami Karvanen", "Ville Heikkinen"]);
    }));


    it('should replace author-array with concatenated string', inject(function(concatFilter) {
      expect(concatFilter(["Jami Karvanen", "Ville Heikkinen"])).toEqual('Jami Karvanen, Ville Heikkinen');
    }));
  });
});
