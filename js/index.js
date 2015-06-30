var app = angular.module('app', []);

app.controller('HexCtrl', ['$scope', function ($scope) {
    $scope.hex = 'fff';
    if ($scope.hex === 'aaa' || $scope.hex === '333' || $scope.hex === 'aaaaaa' || $scope.hex === '333333') {
        console.log('these are bad colors');
    }
    $scope.$watch(function () {
        return $scope.hex;
    }, function (newVal, oldVal) {
        if (newVal === 'aaa' || newVal === 'aaaaaa' || newVal === 'bbb' || newVal === 'bbbbbb' || newVal === 'ccc' || newVal === 'cccccc' || newVal === '111' || newVal === '111111' || newVal === '222' || newVal === '222222' || newVal === '333' || newVal === '333333' || newVal === '444' || newVal === '444444'|| newVal === '555' || newVal === '555555' || newVal === '666' || newVal === '666666' || newVal === '777' || newVal === '777777' || newVal === '888' || newVal === '888888' || newVal === '999' || newVal === '999999' || newVal === '000' || newVal === '000000') {
            $scope.newHeaderColor = '#fff';
            $scope.newMainColor = '#ecf0f1';
        } 
        else {
            $scope.newHeaderColor = '';
            $scope.newMainColor = '';
        }
    });
}]);
