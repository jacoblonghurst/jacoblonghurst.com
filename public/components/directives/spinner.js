angular.module("JacobLonghurst")
  .directive('spinner', function ($timeout) {
    return {
      restrict: 'E',
      template: '<i class="fa fa-cog fa-spin"></i>',
      scope: {
        show: '=',
        delay: '@'
      },
      link: function(scope, elem, attrs) {
        var showTimer;

        scope.$watch('show', function(newVal) {
          newVal ? showSpinner() : hideSpinner();
        });

        function showSpinner() {
          if (showTimer) return;

          showTimer = $timeout(showElement.bind(this, true), getDelay());
        }

        function hideSpinner() {
          if (showTimer) {
            $timeout.cancel(showTimer);
          }
          showTimer = null;

          showElement(false);
        }

        function showElement(show) {
          show ? elem.css({display: ''}) : elem.css({display: 'none'});
        }

        function getDelay() {
          var delay = parseInt(scope.delay);

          return isNan(delay) ? 200 : delay;
        }
      }
    };
    // return {
    //   restrict: 'E',
    //   template: "<h1 ng-if='isRouteLoading'>Loading. . .</h1>",
    //   link: function(scope, elem, attrs) {
    //     scope.isRouteLoading = false;
    //
    //     $rootScope.$on('$routeChangeStart', function() {
    //       scope.isRouteLoading = true;
    //     });
    //
    //     $rootScope.$on('$routeChangeSuccess', function() {
    //       scope.isRouteLoading = false;
    //     });
    //   }
    // }
  });
