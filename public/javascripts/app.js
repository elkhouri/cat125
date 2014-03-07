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
  $routeProvider.when('/accessibility', {templateUrl: 'templates/accessibility.html', controller: 'MyCtrl2'});
  $routeProvider.when('/user', {templateUrl: 'templates/user.html', controller: 'MyCtrl2'});
  $routeProvider.when('/environment', {templateUrl: 'templates/environment.html', controller: 'MyCtrl2'});
  $routeProvider.when('/affordance', {templateUrl: 'templates/affordance.html', controller: 'MyCtrl2'});
  $routeProvider.when('/color-shape', {templateUrl: 'templates/color-shape.html', controller: 'MyCtrl2'});
  $routeProvider.when('/hierarchy', {templateUrl: 'templates/hierarchy.html', controller: 'MyCtrl2'});
  $routeProvider.when('/links', {templateUrl: 'templates/links.html', controller: 'MyCtrl2'});

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
