angular.module('JacobLonghurst')
  .controller('eportfolioController', function($scope) {

    $scope.activePhysics = false;
    $scope.activeHistory = false;
    $scope.physics1010 = false;
    $scope.showHidden = function() {
      $scope.body = angular.element(document.querySelector('#body'));
      physics1010 = true;
      body.removeClass("body");
      // Add code to select the body and allow overflow-y.
      // Also add in here the setting of the physics object since i don't think an ng-click can have multiple functions on it.
    }
  });
