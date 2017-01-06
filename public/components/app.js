angular.module('JacobLonghurst', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        redirectTo: '/login'
      })
      .when('/login', {
        templateUrl: "../views/templates/login/index.html"
      })
  }]);
