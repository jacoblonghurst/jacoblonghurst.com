angular.module('JacobLonghurst')
  .controller('eportfolioController', [ '$scope', 'PDFViewerService', function($scope, pdf) {
    $scope.viewer = pdf.Instance("viewer");
    // $scope.totalPages = 4;
    // $scope.currentPage = 1;
    $scope.nextPage = function() {
      $scope.viewer.nextPage();
    };

    $scope.prevPage = function() {
      $scope.viewer.prevPage();
    };

    $scope.pageLoaded = function(curPage, totalPages) {
      $scope.currentPage = curPage;
      $scope.totalPages = totalPages;
    };

    $scope.activePhysics = false;
    $scope.activeHistory = false;
    $scope.activeEngl = false;
    $scope.physics1010 = false;

  }]);
