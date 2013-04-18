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
    }).
    filter('bibtext', function($filter) {
        return function(reference) {
            var result = {};
            angular.forEach(reference, function(value, key) {

                if (key === 'authors') {
                    result[key] = $filter('concat')(value);
                }
                else if ((value !== null) && (key !== 'id') && (value !== 0)) {
                    result[key] = value;
                }
            });
            return result;
        };
    });
