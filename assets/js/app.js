var carpoolApp = angular.module('CarpoolApp',['ui.bootstrap','ngRoute', 'ngAnimate','ngTouch','uiGmapgoogle-maps']);

carpoolApp.config(['$routeProvider', '$locationProvider','uiGmapGoogleMapApiProvider', function($routeProvider,$locationProvider,uiGmapGoogleMapApiProvider) {

  //no more #!
  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/',{
    templateUrl: '/views/home.html',
    controller: 'HomeCtrl'
  })
  .when('/ride/new',{
    templateUrl:'/views/ride/new.html',
    controller:'RideNewCtrl'
  })
  .when('/ride/:id',{
    templateUrl:'/views/ride/show.html',
    controller:'RideShowCtrl'
  })
  .when('/user/myprofile',{
    templateUrl:'/views/user/myprofile.html',
    controller:'UserCtrl'
  })
  .when('/about',{
    templateUrl:'/views/about.html',
    controller:'StaticCtrl'
  })
  .when('/faq',{
    templateUrl:'/views/faq.html',
    controller:'StaticCtrl'
  })



    uiGmapGoogleMapApiProvider.configure({
        key: window.GOOGLE_MAPS_KEY,
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });

}]);

carpoolApp.run(['UserService',function(UserService){

  UserService.check(function(err,data){
      console.log('check',err,data);
  });

}]);
