carpoolApp.controller('UserCtrl', ['$scope', 'UserService', function($scope,UserService){

  $scope.currentUser = UserService.currentUser

  $scope.name = $scope.currentUser

  $scope.firstName = $scope.currentUser.firstName
  $scope.lastName = $scope.currentUser.lastName
  $scope.email = $scope.currentUser.email

}])
