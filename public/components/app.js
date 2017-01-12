angular.module('JacobLonghurst', ['ngRoute', 'pdf'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        redirectTo: '/home'
      })
      .when('/home', {
        templateUrl: "../views/templates/home/index.html"
      })
      .when('/eportfolio', {
        templateUrl: "../views/templates/eportfolio/index.html"
      });
  }]);
