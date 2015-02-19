carpoolApp.controller('UserCtrl', ['$scope', '$http', 'UserService', function($scope,$http,UserService){

  $scope.currentUser = UserService.currentUser

  $scope.firstName = $scope.currentUser.firstName
  $scope.lastName = $scope.currentUser.lastName

  var req = {
    method: 'get',
    url:'/api/user/'+$scope.currentUser.id+'/ride'
  }
  $http.get('url')
  $http(req).success(function(data){
    $scope.user = data;
  })

  $scope.deleteRide = function(idx){
    var rideId = $scope.rides[idx].id;
    $http.delete('/api/ride/'+rideId).success(function(data){
      $scope.rides.splice(idx,1);
    }).error(function(err){
      alert(err);
    })
  }


}])
