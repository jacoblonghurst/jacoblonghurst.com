angular.module('JacobLonghurst')
    .controller('InstagramController', ['$scope', '$http', function($scope, $http) {
        var payload = "https://api.instagram.com/v1/users/1937811610/media/recent/?access_token=1937811610.6e901e8.0a1ff2c592b54dfeb2c35b89f19f4535";
        $scope.photos = '';
        $scope.getFeed = function() {
            var token = '1937811610.6e901e8.0a1ff2c592b54dfeb2c35b89f19f4535',
                userId = '1937811610',
                num_photos = 20;

            $http.get(payload).then(function(data) {
                $scope.photos = data.data;
                console.log($scope.photos);
            });
        };


    }]);
// https://api.instagram.com/v1/users/1937811610/media/recent/?access_token=1937811610.6e901e8.0a1ff2c592b54dfeb2c35b89f19f4535