'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'templates/home.html', controller: 'MyCtrl1'});
  $routeProvider.when('/about', {templateUrl: 'templates/about.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
