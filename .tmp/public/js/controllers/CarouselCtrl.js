carpoolApp.controller('CarouselCtrl', function ($scope) {
  $scope.myInterval = 3000;
  $scope.slides = [
    {image:'/images/carpool-home.jpg',text:'Looking to set up a carpool?'},
    {image:'/images/carpool-lights.jpg',text:'Look no further!'},
    {image:'/images/carpool-night.jpg',text:'Start or join a carpool here.'}
  ];

});
