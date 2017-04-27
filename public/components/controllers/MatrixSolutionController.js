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

            switch (matrix.type) {
                case 'add':
                    switch (matrix.size) {
                        case '2':
                            break;
                        case '3':
                            // $scope.sameRes3x3 = [
                            //     { id: '1-1', data: _1_1 },
                            //     { id: '1-2', data: _1_2 },
                            //     { id: '1-3', data: _1_3 },
                            //     { id: '2-1', data: _2_1 },
                            //     { id: '2-2', data: _2_2 },
                            //     { id: '2-3', data: _2_3 },
                            //     { id: '3-1', data: _3_1 },
                            //     { id: '3-2', data: _3_2 },
                            //     { id: '3-3', data: _3_3 }
                            // ];

                            var _1_1 = parseFloat(matrix._3_1_1_1) + parseFloat(matrix._3_2_1_1);
                            var _1_2 = parseFloat(matrix._3_1_1_2) + parseFloat(matrix._3_2_1_2);
                            var _1_3 = parseFloat(matrix._3_1_1_3) + parseFloat(matrix._3_2_1_3);
                            var _2_1 = parseFloat(matrix._3_1_2_1) + parseFloat(matrix._3_2_2_1);
                            var _2_2 = parseFloat(matrix._3_1_2_2) + parseFloat(matrix._3_2_2_2);
                            var _2_3 = parseFloat(matrix._3_1_2_3) + parseFloat(matrix._3_2_2_3);
                            var _3_1 = parseFloat(matrix._3_1_3_1) + parseFloat(matrix._3_2_3_1);
                            var _3_2 = parseFloat(matrix._3_1_3_2) + parseFloat(matrix._3_2_3_2);
                            var _3_3 = parseFloat(matrix._3_1_3_3) + parseFloat(matrix._3_2_3_3);

                            $scope.sameRes3x3 = {
                                '1x1': _1_1,
                                '1x2': _1_2,
                                '1x3': _1_3,
                                '2x1': _2_1,
                                '2x2': _2_2,
                                '2x3': _2_3,
                                '3x1': _3_1,
                                '3x2': _3_2,
                                '3x3': _3_3
                            };
                            console.log(_1_1);
                            break;
                    }
                break;
            }
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