carpoolApp.controller('RideNewCtrl',['$scope', '$http', '$location','uiGmapGoogleMapApi' , function($scope,$http,$location,uiGmapGoogleMapApi){
  // $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

  $scope.createRide = function(){
        $scope.alert=false;
        var data = {
          rideName: $scope.rideName,
          start: $scope.start,
          stop: $scope.stop,
          maxRiders: $scope.maxRiders,
          carMake: $scope.carMake,
          carModel: $scope.carModel,
          carColor: $scope.carColor
        };
        $http.post('/api/ride',data).success(function(data){
            $scope.alert="Your post has been created.";
            $scope.rideName="";
            $scope.start="";
            $scope.stop="";
            $scope.maxRiders="";
            $scope.carMake="";
            $scope.carModel="";
            $scope.carColor="";
        }).error(function(err){
            alert(err);
        })
  }



  angular.extend($scope, {
    map: {
      center: {
        latitude: 47.6233544,
        longitude:  -122.3301121
      },
      options: {
        maxZoom: 20,
        minZoom: 3
      },
      zoom: 16,
      control: {},
      markers: []
    },
    address: ''
  });

  $scope.startSelected = function(item,model,label){
    console.log('data',item,model,label);
    $scope.map.markers.push({
      id:$scope.map.markers.length,
      coords:{
        latitude: item.geometry.location.lat,
        longitude: item.geometry.location.lng
      }
    })
  }

  $scope.stopSelected = function(item,model,label){
    console.log('data',item,model,label);
    $scope.map.markers.push({
      id:$scope.map.markers.length,
      coords:{
        latitude: item.geometry.location.lat,
        longitude: item.geometry.location.lng
      }
    })
  }


  $scope.getLocation = function(val) {
    return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: val,
        sensor: false
      }
    }).then(function(response){
      return response.data.results;

      // .map(function(item){
      //   // console.log(item.formatted_address)
      //   return item.formatted_address;
      // });
    });
  };

}])
