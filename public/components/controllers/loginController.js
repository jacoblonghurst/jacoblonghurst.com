angular.module('JacobLonghurst')
  .controller('LoginController', function($scope) {
    $scope.active = false;
    var db = logindb;
    var collection = credentials;
    $scope.login = function(username, password) {
      var verify = db.collection.find({'username': username});
      if (verify) {
        
      }
    }
  });
