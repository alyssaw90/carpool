carpoolApp.controller('RideShowCtrl', ['$scope', '$http', '$routeParams', '$location', 'uiGmapGoogleMapApi', function($scope,$http,$routeParams,$location,uiGmapGoogleMapApi){

  var rideId = $routeParams.id;
  $http.get('/api/ride/'+rideId).success(function(data){
    $scope.ride = data;
  }).error(function(err){
    $location.path('/');
    alert('Ride could not be found.');
  });

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
