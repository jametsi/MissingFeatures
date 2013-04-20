'use strict';

/* jasmine specs for filters go here */

describe('filter', function() {
  beforeEach(module('frontSideAngular.filters'));

  describe('concat', function() {
    beforeEach(module(function($provide) {
      $provide.value('authors', ["Jami Karvanen", "Ville Heikkinen"]);
    }));


    it('should replace AUTHORS', inject(function(concatFilter) {
      expect(concatFilter('before %AUTHORS% after')).toEqual('before Jami Karvanen, Ville Heikkinen after');
    }));
  });
});
