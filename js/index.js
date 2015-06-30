var app = angular.module('app', []);

app.controller('HexCtrl', ['$scope', function ($scope) {
    $scope.hex = 'fff';
    if ($scope.hex === 'aaa' || $scope.hex === '333' || $scope.hex === 'aaaaaa' || $scope.hex === '333333') {
        console.log('these are bad colors');
    }
    $scope.$watch(function () {
        return $scope.hex;
    }, function (newVal, oldVal) {
        var rgb = parseInt(newVal, 16);
        var r = (rgb >> 16) & 0xff;  // extract red
        var g = (rgb >>  8) & 0xff;  // extract green
        var b = (rgb >>  0) & 0xff;  // extract blue

        var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        if (luma < 40) {
            $scope.newHeaderColor = '#fff';
            $scope.newMainColor = '#ecf0f1';
        } 
        else if (newVal == 'fff'){
            $scope.newHeaderColor = '';
            $scope.newMainColor = '';
        }
        else {
            $scope.newHeaderColor = '';
            $scope.newMainColor = '';
        }
    });
}]);
