'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]).
  filter('concat', function() {
    return function(array) {
        var authors = "";
        for (var i = 0; i < array.length; i++) {
            authors += array[i];
            if (i < array.length-1) {
                authors += ", ";
            }
        }
        return authors;
    }
  });
