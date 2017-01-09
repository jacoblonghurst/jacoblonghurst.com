angular.module('JacobLonghurst', ['ngRoute'])
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
      })
      .when('/eportfolio/physics', {
        templateUrl: "../views/templates/eportfolio/physics/index.html"
      })
  }]);
