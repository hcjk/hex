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

        if (luma < 40 || newVal === 'aaa' || newVal === 'bbb'|| newVal === 'ccc'|| newVal === '111'|| newVal === '222'|| newVal === '333' || newVal === '444' || newVal === '555' || newVal === '666' || newVal === '777' || newVal === '888' || newVal === '999'  || newVal === '000') {
            $scope.newHeaderColor = '#fff';
            $scope.newMainColor = '#ecf0f1';
        } else {
            $scope.newHeaderColor = '';
            $scope.newMainColor = '';
        }
    });
}]);
