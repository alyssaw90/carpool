carpoolApp.controller('RideNewCtrl',['$scope', '$http', '$location','uiGmapGoogleMapApi' , function($scope,$http,$location,uiGmapGoogleMapApi){
  // $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

  angular.extend($scope, {
    map: {
      center: {
        latitude: 35.681382,
        longitude: 139.766084
      },
      options: {
        maxZoom: 20,
        minZoom: 3
      },
      zoom: 16,
      control: {},
      marker: {}
    },
    address: ''
  });

  $scope.getLocation = function(val) {
    return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: val,
        sensor: false
      }
    }).then(function(response){
      return response.data.results.map(function(item){
        return item.formatted_address;
      });
    });
  };

}])
