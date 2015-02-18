carpoolApp.controller('HomeCtrl', ['$scope', 'UserService','AlertService', function($scope,UserService,AlertService){

  console.log('home controller running')

  $scope.UserService = UserService;
  $scope.$watchCollection('UserService', function(){
    $scope.currentUser = UserService.currentUser
  });

  $scope.slides = [
    {image: 'images/carpool-home.jpg', description: 'Image 00'},
    {image: 'images/carpool-night.jpg', description: 'Image 01'}
  ];

  $scope.currentIndex = 0;

  $scope.setCurrentSlideIndex = function (index) {
    $scope.currentIndex = index;
  };

  $scope.isCurrentSlideIndex = function (index) {
    return $scope.currentIndex === index;
  };

  $scope.prevSlide = function () {
    $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
  };

  $scope.nextSlide = function () {
    $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
  };


}])


