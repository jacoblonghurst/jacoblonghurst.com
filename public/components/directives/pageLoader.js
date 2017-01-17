angular.module('JacobLonghurst')
  .directive('pageLoader', function($scope, $timeout) {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
        scope.loadingSpinner = function() {
          $timeout(showPage, 3000);
        };

        $scope.showPage = function() {
          scope.loader = angular.element(document.querySelector('#loader').style.display = "none";
          scope.loader.style.display = "none";
          document.getElementById("myDiv").style.display = "block";
        };
      }
    }
  });
