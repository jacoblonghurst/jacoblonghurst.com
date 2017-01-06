angular.module('JacobLonghurst')
  .directive('navigation', function() {
    return {
      restrict: 'E',
      templateUrl: "../views/templates/navigation.html",
      replace: true
    };
});
