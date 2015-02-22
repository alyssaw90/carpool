carpoolApp.controller('RideShowCtrl', ['$scope', '$http', '$routeParams', '$location', 'uiGmapGoogleMapApi', function($scope,$http,$routeParams,$location,uiGmapGoogleMapApi){

  var rideId = $routeParams.id;
  $http.get('/api/ride/'+rideId).success(function(data){
    console.log(data)
    $scope.ride = data;
    $scope.maxRiders = data.maxRiders
    console.log($scope.maxRiders)
  }).error(function(err){
    $location.path('/');
    alert('Ride could not be found.');
  });

  $scope.startingValue = $scope.startingValue || 0

  $scope.joinButton = function(){
    if($scope.startingValue != $scope.maxRiders){
      $scope.startingValue = $scope.startingValue + 1
    }
  }

  // $scope.joinButton = function(){
  //   $scope.startingValue = $scope.startingValue + 1
  // }

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
