angular.module('JacobLonghurst')
  .controller('eportfolioController', [ '$scope', 'pdfDelegate', function($scope, pdfDelegate) {
    $scope.activePhysics = false;
    $scope.activeHistory = false;
    $scope.activeEngl = false;
    $scope.physics1010 = false;
    $scope.history1700 = false;

    $scope.phys1010file = "assets/files/phys1010paper.pdf";

  }]);

    // $scope.totalPages = 4;
    // $scope.currentPage = 1;
    // $scope.nextPage = function() {
    //   $scope.viewer.nextPage();
    // };
    //
    // $scope.prevPage = function() {
    //   $scope.viewer.prevPage();
    // };
    //
    // $scope.pageLoaded = function(curPage, totalPages) {
    //   $scope.currentPage = curPage;
    //   $scope.totalPages = totalPages;
    // };

  // .controller('histController', [ '$scope', function($scope) {
  //   $scope.viewer = pdf.Instance("hist1700Viewer");
  //   // $scope.totalPages = 4;
  //   // $scope.currentPage = 1;
  //   $scope.nextPage = function() {
  //     $scope.viewer.nextPage();
  //   };
  //
  //   $scope.prevPage = function() {
  //     $scope.viewer.prevPage();
  //   };
  //
  //   $scope.pageLoaded = function(curPage, totalPages) {
  //     $scope.currentPage = curPage;
  //     $scope.totalPages = totalPages;
  //   };
  // }]);
