angular.module('JacobLonghurst', ['ngRoute', 'ngResource'])
.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "views/index.html"
        });
});
