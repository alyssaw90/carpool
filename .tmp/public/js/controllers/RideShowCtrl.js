carpoolApp.controller('RideShowCtrl', ['$scope', '$http', '$routeParams', '$location', 'uiGmapGoogleMapApi', function($scope,$http,$routeParams,$location,uiGmapGoogleMapApi){

  var rideId = $routeParams.id;
  $http.get('/api/ride/'+rideId).success(function(data){
    console.log(data)
    if(!data.currentRiders) data.currentRiders=0;
    $scope.ride = data;
    $scope.maxRiders = data.maxRiders

  }).error(function(err){
    $location.path('/');
    alert('Ride could not be found.');
  });


  $scope.joinButton = function(){
    if($scope.ride.currentRiders < $scope.maxRiders){
      var riderCount = $scope.ride.currentRiders + 1
      $http.put('/api/ride/'+rideId,{currentRiders:riderCount})
      .success(function(data){
        $scope.ride.currentRiders = riderCount;
      }).error(function(err){
        alert('An error occured. Could not update');
        console.log('error',err);
      })
    }
  }

  angular.extend($scope, {
    map: {
      center: {
        latitude: 43.7543352,
        longitude:  -98.8630678
      },
      options: {
        maxZoom: 20,
        minZoom: 3
      },
      zoom: 4,
      control: {},
      markers: []
    },
    address: ''
  });

}])
