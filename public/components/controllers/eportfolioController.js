angular.module('JacobLonghurst')
  .controller('eportfolioController', [ '$scope', '$http', function($scope, $http) {
    // $scope.activePhysics = false;
    // $scope.activeHistory = false;
    // $scope.activeEngl = false;
    // $scope.activeCriminal = false;
    // $scope.physics1010 = false;
    // $scope.phys1010refl = false;
    // $scope.history1700 = false;
    // $scope.english1010 = false;
    // $scope.crimePaperImmigration = false;
    // $scope.crimePaperGuns = false;
    //
    // // HANDLING FOR PHYSICS
    // $scope.physToggle = function() {
    //   if ($scope.activePhysics === false) {
    //     $scope.activePhysics = true;
    //     $scope.activeHistory = false;
    //     $scope.activeEngl = false;
    //     $scope.activeCriminal = false;
    //   } else if ($scope.activePhysics === true) {
    //     $scope.activePhysics = false;
    //   }
    // };
    //
    // // HANDLING FOR HISTORY
    // $scope.histToggle = function() {
    //   if ($scope.activeHistory === false) {
    //     $scope.activeHistory = true;
    //     $scope.activePhysics = false;
    //     $scope.activeEngl = false;
    //     $scope.activeCriminal = false;
    //   } else if ($scope.activeHistory === true) {
    //     $scope.activeHistory = false;
    //   }
    // };
    //
    // // HANDLING FOR ENGLISH
    // $scope.englToggle = function() {
    //   if ($scope.activeEngl === false) {
    //     $scope.activeEngl = true;
    //     $scope.activePhysics = false;
    //     $scope.activeHistory = false;
    //     $scope.activeCriminal = false;
    //   } else if ($scope.activeEngl === true) {
    //     $scope.activeEngl = false;
    //   }
    // };
    //
    // // HANDLING FOR CRIMINAL JUSTICE
    // $scope.criminalToggle = function() {
    //   if ($scope.activeCriminal === false) {
    //     $scope.activeCriminal = true;
    //     $scope.activePhysics = false;
    //     $scope.activeHistory = false;
    //     $scope.activeEngl = false;
    //   } else if ($scope.activeCriminal === true) {
    //     $scope.activeCriminal = false;
    //   }
    // };
    //
    //            ALL THE PAPER FILES
    //
    $scope.phys1010file = "assets/files/phys1010paper.pdf";
    $scope.phys1010reflection = "assets/files/phys1010reflection.pdf";
    $scope.hist1700file = "assets/files/hist1700.pdf";
    $scope.engl1010file = "assets/files/engl1010.pdf";
    $scope.crimePaper1 = "assets/files/cjpaper1.pdf";
    $scope.crimePaper2 = "assets/files/cjpaper2.pdf";


  }]);
