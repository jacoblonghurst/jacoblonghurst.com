angular.module('JacobLonghurst')
    .controller('MatrixSameSizeSolutionController', ['$scope', '$http', function($scope, $http) {
        $scope.matrixSize = [
            { id: '2', name: '2 x 2' },
            { id: '3', name: '3 x 3' },
            { id: '4', name: '4 x 4' }
        ];

        $scope.arithmaticSame = [
            { id: 'add', name: 'Addition' },
            { id: 'sub', name: 'Subtraction' },
            { id: 'multi', name: 'Multiply' }
        ];

        $scope.calculateSame = function(matrix) {

            switch (matrix.type) {
                case 'add':
                    switch (matrix.size) {
                        case '2':
                            $scope.sameRes2x2 = {
                                '1x1': parseFloat(matrix._2_1_1_1) + parseFloat(matrix._2_2_1_1),
                                '1x2': parseFloat(matrix._2_1_1_2) + parseFloat(matrix._2_2_1_2),
                                '2x1': parseFloat(matrix._2_1_2_1) + parseFloat(matrix._2_2_2_1),
                                '2x2': parseFloat(matrix._2_1_2_2) + parseFloat(matrix._2_2_2_2)
                            };
                            break;
                        case '3':
                            $scope.sameRes3x3 = {
                                '1x1': parseFloat(matrix._3_1_1_1) + parseFloat(matrix._3_2_1_1),
                                '1x2': parseFloat(matrix._3_1_1_2) + parseFloat(matrix._3_2_1_2),
                                '1x3': parseFloat(matrix._3_1_1_3) + parseFloat(matrix._3_2_1_3),
                                '2x1': parseFloat(matrix._3_1_2_1) + parseFloat(matrix._3_2_2_1),
                                '2x2': parseFloat(matrix._3_1_2_2) + parseFloat(matrix._3_2_2_2),
                                '2x3': parseFloat(matrix._3_1_2_3) + parseFloat(matrix._3_2_2_3),
                                '3x1': parseFloat(matrix._3_1_3_1) + parseFloat(matrix._3_2_3_1),
                                '3x2': parseFloat(matrix._3_1_3_2) + parseFloat(matrix._3_2_3_2),
                                '3x3': parseFloat(matrix._3_1_3_3) + parseFloat(matrix._3_2_3_3)
                            };
                            break;
                        case '4':
                            $scope.sameRes4x4 = {
                                '1x1': (parseFloat(matrix._4_1_1_1) + parseFloat(matrix._4_2_1_1)),
                                '1x2': (parseFloat(matrix._4_1_1_2) + parseFloat(matrix._4_2_1_2)),
                                '1x3': (parseFloat(matrix._4_1_1_3) + parseFloat(matrix._4_2_1_3)),
                                '1x4': (parseFloat(matrix._4_1_1_4) + parseFloat(matrix._4_2_1_4)),
                                '2x1': (parseFloat(matrix._4_1_2_1) + parseFloat(matrix._4_2_2_1)),
                                '2x2': (parseFloat(matrix._4_1_2_2) + parseFloat(matrix._4_2_2_2)),
                                '2x3': (parseFloat(matrix._4_1_2_3) + parseFloat(matrix._4_2_2_3)),
                                '2x4': (parseFloat(matrix._4_1_2_4) + parseFloat(matrix._4_2_2_4)),
                                '3x1': (parseFloat(matrix._4_1_3_1) + parseFloat(matrix._4_2_3_1)),
                                '3x2': (parseFloat(matrix._4_1_3_2) + parseFloat(matrix._4_2_3_2)),
                                '3x3': (parseFloat(matrix._4_1_3_3) + parseFloat(matrix._4_2_3_3)),
                                '3x4': (parseFloat(matrix._4_1_3_4) + parseFloat(matrix._4_2_3_4)),
                                '4x1': (parseFloat(matrix._4_1_4_1) + parseFloat(matrix._4_2_4_1)),
                                '4x2': (parseFloat(matrix._4_1_4_2) + parseFloat(matrix._4_2_4_2)),
                                '4x3': (parseFloat(matrix._4_1_4_3) + parseFloat(matrix._4_2_4_3)),
                                '4x4': (parseFloat(matrix._4_1_4_4) + parseFloat(matrix._4_2_4_4))
                            }
                    }
                break;
            }
        };

        $scope.reset = function(Object) {
            angular.copy({}, Object);
            $scope.sameRes2x2 = null;
            $scope.sameRes3x3 = null;
            $scope.sameRes4x4 = null;
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