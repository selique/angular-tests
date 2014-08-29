var appDomains = angular.module('appDomains', ['ngRoute']);

// routes
appDomains.config(function($routeProvider){
  $routeProvider.when('/simple-app/', {
    templateUrl: 'views/prepanel/index.html'
  }).when('/nameservers/:id', {
    templateUrl: 'views/nameservers/index.html'
  }).
  otherwise({
  	redirectTo: '/simple-app/'
  });
  // $locationProvider.html5Mode(true);
});
