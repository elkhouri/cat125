'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'templates/home.html', controller: 'HomeCtrl'});
  $routeProvider.when('/about', {templateUrl: 'templates/about.html', controller: 'AboutCtrl'});
  $routeProvider.when('/navigation', {templateUrl: 'templates/navigation.html', controller: 'NavCtrl'});
  $routeProvider.when('/misconception', {templateUrl: 'templates/misconception.html', controller: 'MiscCtrl'});
  $routeProvider.when('/article', {templateUrl: 'templates/article.html', controller: 'ArticleCtrl'});
  $routeProvider.when('/layout', {templateUrl: 'templates/layout.html', controller: 'LayoutCtrl'});
  $routeProvider.when('/links', {templateUrl: 'templates/links.html', controller: 'LinkCtrl'});

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
