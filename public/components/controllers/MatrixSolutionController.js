angular.module('JacobLonghurst')
    .controller('MatrixSolutionController', ['$scope', '$http', function($scope, $http) {
        $scope.matrixSize = [
            { id: '2', name: '2 x 2' },
            { id: '3', name: '3 x 3' },
            { id: '4', name: '4 x 4' },
            { id: '5', name: '5 x 5' },
            { id: '6', name: '6 x 6' },
            { id: '7', name: '7 x 7' }
        ];

        $scope.arithmaticSame = [
            { id: 'add', name: 'Addition' },
            { id: 'sub', name: 'Subtraction' },
            { id: 'multi', name: 'Multiply' }
        ];

        $scope.matrixSame = {

        };

        $scope.calculateSame = function(matrix) {

        }

        // $scope.keyBuffer = [];
        // $scope.disableKeys = function (limitField, limitNum) {
        //     if (limitField.value.length > limitNum) {
        //         limitField.value = limitField.value.substring(0, (limitNum + 1));
        //     }
        //     else {
        //         return;
        //     }
        //
        // };
        //
        // $scope.isNumberKey = function (evt){
        //     var charCode = (evt.which) ? evt.which : event.keyCode;
        //
        //     if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        //         return false;
        //     }
        //     return true;
        // }
        //
        //
        // function arrays_equal(a,b) { return !(a<b || b<a); }
        //
        // $scope.down = function(e) {
        //
        //     $scope.keyBuffer.push(e.keyCode);
        //
        //     var upUp = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
        //     if (arrays_equal(upUp, $scope.keyBuffer)) {
        //
        //         alert('thats it!');
        //     }
        // };

    }]);