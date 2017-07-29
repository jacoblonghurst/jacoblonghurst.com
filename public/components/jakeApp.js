angular.module('JacobLonghurst', ['ngAnimate', 'ui.router', 'ngMaterial', 'ngMessages', 'ngResource', 'ngAria', 'ui.bootstrap', 'ui.carousel', //'ui.utils',
    'ui.utils.masks'])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

      $urlRouterProvider.otherwise('/home');

      $stateProvider
          .state('home', {
              url: '/home',
              templateUrl: '../views/templates/home/index.html'
          })

          .state('portfolio', {
              url: '/portfolio',
              templateUrl: '../views/templates/portfolio/index.html'
          })

          .state('apps', {
              url: '/apps',
              templateUrl: '../views/templates/portfolio/apps/index.html'
          })

          .state('apps.mortgagecalculator', {
              url: '/mortgagecalculator',
              templateUrl: '../views/templates/portfolio/apps/mortgageCalculator/index.html'
          })

          .state('apps.autocalculator', {
              url: '/autocalculator',
              templateUrl: '../views/templates/portfolio/apps/autoCalc/index.html'
          })

          .state('apps.matrix', {
              url: '/matrix-solution',
              templateUrl: '../views/templates/portfolio/apps/matrix/index.html'
          })
          .state('apps.matrix.sameSize2', {
              url: '/sameSize2x2',
              templateUrl: '../views/templates/portfolio/apps/matrix/same-size/sameSize2x2.html'
          })

          // .state('designs', {
          //     url: '/designs',
          //     templateUrl: '../views/templates/portfolio/designs/index.html'
          // })

          .state('college', {
              url: '/college',
              templateUrl: '../views/templates/eportfolio/index.html'
          })

          .state('college.physics', {
              url: '/physics',
              templateUrl: '../views/templates/eportfolio/physics/index.html'
          })

          .state('college.english', {
              url: '/english',
              templateUrl: '../views/templates/eportfolio/english/index.html'
          })

          .state('college.math', {
              url: '/math',
              templateUrl: '../views/templates/eportfolio/math/index.html'
          })

          .state('college.film', {
              url: '/film',
              templateUrl: '../views/templates/eportfolio/film/index.html'
          })

          .state('college.history', {
              url: '/history',
              templateUrl: '../views/templates/eportfolio/history/index.html'
          })

          .state('college.cj', {
              url: '/criminal-justice',
              templateUrl: '../views/templates/eportfolio/criminal/index.html'
          })

          .state('apps.instagram', {
              url: '/instagram',
              templateUrl: '../views/templates/portfolio/apps/instagram/index.html'
          })

          .state('about', {
              url: '/about',
              templateUrl: '../views/templates/about/index.html'
          })

          .state('about.contact', {
              url: '/contact',
              templateUrl: '../views/templates/about/contact/index.html'
          })

          .state('users', {
              url: '/secret',
              templateUrl: '../views/templates/login/index.html'
          })

          .state('login', {
              url: '/login',
              templateUrl: '../views/templates/login/login.html'
          })

          .state('signup', {
              url: '/signup',
              templateUrl: '../views/templates/login/signup.html'
          })

      $locationProvider.html5Mode(true);

  }]);
