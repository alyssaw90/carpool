carpoolApp.controller('RideShowCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope,$http,$routeParams,$location){

  var rideId = $routeParams.id;
  $http.get('/api/ride/'+rideId).success(function(data){
    $scope.ride = data;
  }).error(function(err){
    $location.path('/');
    alert('Ride could not be found.');
  });

}])
