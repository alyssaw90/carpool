carpoolApp.controller('CarouselCtrl', function ($scope) {
  $scope.myInterval = 3000;
  $scope.slides = [
    {image:'/images/carpool-home.jpg',text:'first slide'},
    {image:'/images/carpool-night.jpg',text:'2nd slide'},
    {image:'/images/carpool-lights.jpg',text:'3rd slide'}
  ];

});
