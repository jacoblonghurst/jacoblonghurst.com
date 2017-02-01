angular.module('JacobLonghurst', ['ngRoute', 'pdf', 'ngAnimate'])
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
      .when('/portfolio', {
        templateUrl: "../views/templates/portfolio/index.html"
      })
      .when('/about', {
        templateUrl: "../views/templates/about/index.html"
      })
      .when('/contact', {
        templateUrl: "../views/templates/contact/index.html"
      });

  }]);
