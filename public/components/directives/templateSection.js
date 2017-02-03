angular.module('JacobLonghurst')
  .directive('templateSection', function() {
    return {
      restrict: 'E',
      templateUrl: '../views/templates/templateSection.html',
      replace: true
    };
  });
