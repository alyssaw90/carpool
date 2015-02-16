var carpoolApp = angular.module('CarpoolApp',['ui.bootstrap','ngRoute']);

carpoolApp.config(['$routeProvider', '$locationProvider',function($routeProvider,$locationProvider) {

  //no more #!
  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/',{
    templateUrl: '/views/home.html',
    controller: 'HomeCtrl'
  })

}])
