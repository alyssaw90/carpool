carpoolApp.controller('CarouselCtrl', function ($scope) {
  $scope.myInterval = 3000;
  $scope.slides = [
    {image:'/images/carpool-home.jpg'},
    {image:'/images/carpool-night.jpg'},
    {image:'/images/carpool-lights.jpg'}
  ];

  for (var i=0; i<3; i++) {
    $scope.slides;
  }
});
