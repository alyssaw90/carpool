var carpoolApp = angular.module('CarpoolApp',['ui.bootstrap','ngRoute']);

carpoolApp.config(['$routeProvider', '$locationProvider',function($routeProvider,$locationProvider) {

  //no more #!
  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/',{
    templateUrl: '/views/home.html',
    controller: 'HomeCtrl'
  })
  .when('/about',{
    templateUrl:'/views/about.html',
        controller:'StaticCtrl'
  })
  .when('/faq',{
    templateUrl:'/views/faq.html',
    controller:'StaticCtrl'
  })

  carpoolApp.run(['UserService',function(UserService){

    UserService.check(function(err,data){
        console.log('check',err,data);
    });

}]);

}])
