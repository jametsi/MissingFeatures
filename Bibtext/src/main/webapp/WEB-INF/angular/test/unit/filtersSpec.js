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
  
    describe('bibtext', function() {
        
    beforeEach(module(function($provide) {
    }));


    it('should replace scandinavian chars with bibtex symbols', inject(function(bibtextFilter) {
        var testObject = {
            "id":1,
            "authors":["Dave Gahan"],
            "title":"Känni-ääliÖiden",
            "year":2012,
            "bibtextID":"G12",
            "type":"Book",
            "booktitle":null,
            "publisher": "öÖäÄ",
            "pages":null,"address":null,
            "journal":null,
            "volume":0,
            "number":0
        };
        var testObject = bibtextFilter(testObject);
      expect(testObject.title).toEqual('K\\\"{a}nni-\\\"{a}\\\"{a}li\\\"{O}iden');
      expect(testObject.publisher).toEqual('\\\"{o}\\\"{O}\\\"{a}\\\"{A}')
    }));
    
  });
});
