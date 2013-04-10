'use strict';

/* Controllers */

var references;

function listController() {
    $http.get('../rest').success(function(data) {
        $scope.phones = data;
    });
}
listController.$inject = ['$scope', '$http']

function MyCtrl2() {
}
MyCtrl2.$inject = [];
