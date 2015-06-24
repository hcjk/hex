var app = angular.module('app', []);

app.controller('HexCtrl', ['$scope', function ($scope) {
    $scope.hex = '#ecf0f1';
    if ($scope.hex === '#aaa' || $scope.hex === '#333') {
        console.log('bad colors');
    }
}]);