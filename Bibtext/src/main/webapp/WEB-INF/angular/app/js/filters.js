'use strict';

/* Filters */

angular.module('frontSideAngular.filters', []).
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
  }}).
    filter('bibtext', function($filter) {
        return function(reference) {
            var result = {};
            angular.forEach(reference, function(value, key) {

                if ((value !== null) 
                        && (key !== 'id') 
                        && (value !== 0) 
                        && (key !== 'bibtextID')) {
                    if (key === 'authors') {
                        value = $filter('concat')(value);
                    }
                    if (typeof value === 'string') {
                        value = value.replace(/ä/g, "\\\"{a}");
                        value = value.replace(/Ä/g, "\\\"{A}");
                        value = value.replace(/ö/g, "\\\"{o}");
                        value = value.replace(/Ö/g, "\\\"{O}");
                    }
                    result[key] = value;
                }
            });
            return result;
        };
    });
