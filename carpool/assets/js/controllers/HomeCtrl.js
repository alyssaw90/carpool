carpoolApp.controller('HomeCtrl', ['$scope', 'UserService','AlertService', function($scope,UserService,AlertService){

  console.log('home controller running')

  $scope.UserService = UserService;
  $scope.$watchCollection('UserService', function(){
    $scope.currentUser = UserService.currentUser
  });


}])


